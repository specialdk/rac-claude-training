# Vibe Coding Lessons — A Running Log

A living collection of lessons learned while building RAC projects with Claude's help. Each entry captures a specific "aha moment" — something useful enough to remember and pass on to others.

**How this document works:**
- Organised by topic, not chronologically (so it's scannable as a reference)
- Each lesson has a short title, a "what happened", and a "what to remember"
- Living document — Claude can append new lessons here over time
- Use this for training team members new to AI-assisted coding

---

## Table of Contents

1. [Working with Claude](#1-working-with-claude)
2. [MCP — Model Context Protocol](#2-mcp--model-context-protocol)
3. [API Integration Gotchas](#3-api-integration-gotchas)
4. [Dashboard & UI Design](#4-dashboard--ui-design)
5. [Project Architecture & Code Evolution](#5-project-architecture--code-evolution)

---

## 1. Working with Claude

### 1.1 Memory across chat sessions isn't automatic

**What happened:** User assumed Claude would remember an earlier chat where we'd reviewed project READMEs and built Phase 1 of a dashboard. When starting a new chat Claude had no recollection.

**What to remember:**
- Within **one** chat session, Claude remembers everything said
- Across **different** chat sessions, Claude doesn't remember by default
- Claude has a `conversation_search` tool that can find past chats by keyword — if you reference prior work, either summarise it briefly or say "check our past chats about X"
- Fastest path when resuming work: paste a summary of where you left off. It costs you 30 seconds of typing but saves a lot of confusion.

### 1.2 Ask Claude to summarise before building

**What happened:** Before writing the FleetComplete dashboard, we spent a few turns reviewing existing MEX and Xero dashboards and agreeing on patterns to copy. The actual build then went smoothly because the direction was clear.

**What to remember:**
- "Summarise what you're about to do, confirm, then build" is a pattern that prevents rework
- It costs 2-3 extra messages but saves hours if the AI was about to go the wrong way
- Especially important on bigger tasks (50+ line files, multi-step workflows)

### 1.3 Let Claude drive when you've agreed on direction

**What happened:** After agreeing on the dashboard approach, user said "You decide, make a starting proposal" and "I totally trust you with the keys." Claude then made concrete decisions and built it without asking 5 more clarifying questions.

**What to remember:**
- AI often over-asks to feel safe
- If the direction is clear and the stakes are low (e.g. building a draft dashboard that's easy to iterate on), explicitly grant autonomy
- "Make your best call, I'll review after" is a powerful phrase

---

## 2. MCP — Model Context Protocol

### 2.1 Different Claude clients have separate MCP connections

**What happened:** MCP server was updated with new tools. The Claude in the web app saw them immediately, but Claude Desktop didn't — until it was restarted.

**What to remember:**
- The MCP connection in claude.ai and the MCP connection in Claude Desktop are two independent connections to the same server
- Restarting one doesn't affect the other
- After updating an MCP server, restart each Claude client you use
- Analogy: two people on separate phone calls to the same helpdesk — if one drops and redials, the other is still on their original call

### 2.2 Trust the live data, not the tool description

**What happened:** An MCP tool description said the FleetComplete server had "5 geofences (Rio Gantry, Quarry Depot, Mine Tank Farm, BP Garage, Gulkula Mine)". When we actually called the tool, it returned 6 — a new zone (Yirrkala Store) had been added since the description was written.

**What to remember:**
- MCP tool descriptions are human-written and can drift from reality
- Always do a quick sanity-check query on any new MCP tool before building on top of it
- When data and docs disagree, trust the data
- Good habit: first call to a new MCP tool should be a simple "what have you got?" query

---

## 3. API Integration Gotchas

### 3.1 AI writes code that looks right — but external APIs have specific schemas

**What happened:** Claude wrote code to query Geotab (FleetComplete) for zone events. Code looked correct and followed a reasonable pattern, but returned HTTP 500 every time. The bug: Geotab requires date filters wrapped inside a `search` property, not spread at the top level of the request.

```javascript
// Wrong (what AI wrote — looks sensible):
{ typeName: 'ZoneStop', fromDate: '...', toDate: '...' }

// Right (what Geotab expects):
{ typeName: 'ZoneStop', search: { fromDate: '...', toDate: '...' } }
```

**What to remember:**
- 8 times out of 10, silent API failures are schema mismatches
- The AI doesn't always know the exact schema of a third-party API — it guesses from patterns
- When integrating a new API: test ONE simple call end-to-end BEFORE writing dashboard code around it
- Always add verbose error logging on your server so you can see the actual error body from the third party

### 3.2 Always log the third-party request and response

**What happened:** The original `geotabCall` function just threw a bare `Error` with the HTTP status code. Debugging was painful because we couldn't see what Geotab was actually complaining about. Fix was to `console.error` both the request payload (credentials stripped) and the response body.

**What to remember:**
- On any server that calls a third-party API, log: request payload (minus secrets), response status, response body on error
- Railway/Vercel/Heroku logs are free and save you hours
- Pattern worth copying:

```javascript
const response = await fetch(url, options);
if (!response.ok) {
  const errorText = await response.text();
  console.error(`[apiCall] HTTP ${response.status}:`, errorText);
  throw new Error(`API ${response.status}: ${errorText}`);
}
```

### 3.3 When one approach is blocked, pivot — don't persist

**What happened:** We fixed the Geotab `search` wrapping bug and confirmed it worked for Trip queries (25 trips returned successfully). But `/api/zone-events` (ZoneStop type) kept returning HTTP 500 even with the same fix — some other Geotab quirk. Rather than spend more time hunting that, we switched to computing loads/deliveries from Trip data + point-in-polygon math against the geofence boundaries. Same information, more reliable, no broken API dependency.

**What to remember:**
- When you've tried the obvious fixes and a bug is still there, ask: "is there another path to the same answer?"
- Perseverance is a virtue in debugging *up to a point*. Past that point it's sunk cost.
- The signal to pivot: you're making fixes and seeing no progress, or you're guessing at schemas
- A working alternative beats a broken "proper" solution every time
- This also protects you against future API changes — the alternative path might be more stable

### 3.4 Point-in-polygon math as an escape hatch

**What happened:** Geotab's ZoneStop endpoint was broken for us, but it was conceptually just "which zone did the truck stop in?" We had Trip data (`stopPoint` coordinates) and geofence polygons (`points` arrays). We re-implemented the zone detection client-side using the classic ray-casting point-in-polygon algorithm:

```javascript
function pointInPolygon(point, polygonPoints) {
  const x = point.x, y = point.y;
  let inside = false;
  for (let i = 0, j = polygonPoints.length - 1; i < polygonPoints.length; j = i++) {
    const xi = polygonPoints[i].x, yi = polygonPoints[i].y;
    const xj = polygonPoints[j].x, yj = polygonPoints[j].y;
    const intersect = ((yi > y) !== (yj > y)) &&
      (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
    if (intersect) inside = !inside;
  }
  return inside;
}
```

**What to remember:**
- Many "smart" API endpoints are just geometry or arithmetic done on the server
- If you have the raw data (coordinates, polygons, timestamps), you can often compute the answer yourself
- Classic algorithms like ray-casting, haversine distance, and great-circle bearing are 10-line helpers you can paste in
- Bonus: doing the math client-side means zero network calls for that logic — faster dashboard, less load on the API

---

## 4. Dashboard & UI Design

### 4.1 READMEs describe backends, not frontends

**What happened:** User said "make the new dashboard match the look and feel of the other RAC dashboards" and shared the READMEs. Those READMEs described API endpoints, deployment, and file structure — but zero about colours, fonts, or layout. For visual style, you have to go read the actual HTML/CSS.

**What to remember:**
- A README almost always describes architecture + setup, not UI style
- To match visual style, point the AI at the actual frontend files (`index.html`, CSS, component code)
- Common tripwire for AI-assisted coding: assuming the README has everything

### 4.2 Segmented control vs dropdown — pick based on option count

**What happened:** An existing Xero dashboard used a period dropdown (Q1/Q2/Q3/Q4/Current Month/Last Month) with 6 options. The new FleetComplete dashboard only needed 3 options (Daily/Weekly/Monthly), so we used a segmented control (three pill-style buttons) instead.

**What to remember:**
- **Dropdown:** best for 6+ options. One click to open, one to select.
- **Segmented control:** best for 2-5 options. One click total. Shows all options at a glance.
- The control choice reflects how often users switch values — frequent toggling deserves a faster control

### 4.3 A single number tells you nothing — always show comparison

**What happened:** User (BI manager) pointed out that "42 loads today" is meaningless without context. Whereas "42 loads, ▲12% vs yesterday" instantly tells the reader whether today is good or bad.

**What to remember:**
- Every KPI should have a trend indicator (vs previous period) if at all possible
- The comparison period should match the view: Daily KPIs compare to yesterday, Weekly to last week, Monthly to last month
- For KPIs where *lower is better* (e.g. turnaround time, error count), flip the trend arrow direction so green = improvement

### 4.4 Managers look at Daily when they can, but mostly want Weekly/Monthly summaries

**What happened:** When scoping Gavin's (fleet manager) dashboard, initial plan was Daily view only. User pushed back from experience: managers look at Daily when time permits but genuinely live in Weekly and Monthly summaries.

**What to remember:**
- When building for managers: Daily/Weekly/Monthly toggle from day one, not "start with Daily then maybe add others"
- Operational roles (front-line) = Daily/real-time
- Management roles = Weekly/Monthly with drill-down to Daily when they want detail
- Executive roles = Monthly/Quarterly trend summaries

### 4.5 Capture everything, then filter down — don't pre-filter at source

**What happened:** Initial scope for the FleetComplete dashboard was fuel trucks only (RF01, RF02). But the underlying FleetComplete system has 7 vehicles. User (BI manager) made the call: show all 7 by default, add a "Fuel Only" filter. The dashboard would now capture the full picture and let Gavin narrow down when he wanted.

**What to remember:**
- Pre-filtering at the data source is tempting but limiting. Every time the question changes ("but what about the Tipper?"), you have to rebuild.
- The BI-correct pattern: load the wide set → let the user filter → render the subset
- This also protects against future questions. When the boss asks "what's everyone doing?", you already have the data.
- The only argument for pre-filtering is *performance*. If performance is fine (it usually is for fleets of 7 or even 700), show everything.
- Corollary: the filter control itself becomes valuable UI. Make it obvious and fast — segmented button, dropdown with search, etc.

### 4.6 Adaptive KPIs based on filter context

**What happened:** When the dashboard was fuel-only, KPIs were Loads / Deliveries / Turnaround. When expanded to all 7 vehicles, those metrics don't make sense for a Bobcat or Skid Steer. Solution: KPIs now adapt based on what the user has filtered to — fuel-focused metrics for fuel vehicles, fleet-wide metrics (total trips, distance, hours) when showing all vehicles.

**What to remember:**
- Same KPI slots, different contents depending on filter — this is more useful than hiding KPIs or showing "N/A"
- The label of the KPI should update too, not just the value
- This is essentially "one dashboard, many audiences". A fleet manager looking at all vehicles sees one version; a fuel operations manager sees another. Both via the same UI.

---

## 5. Project Architecture & Code Evolution

### 5.1 Code quality visibly evolves between projects

**What happened:** Looked at two RAC dashboards built ~10 months apart. Earlier one (Xero, June 2025) used inline `style="..."` everywhere, no CSS variables, manual HTML bar charts. Newer one (MEX, April 2026) used CSS `:root` variables, Chart.js, and cleaner structural code. The newer project also had an AI chat drawer — a feature that didn't exist in the older one.

**What to remember:**
- Normal and healthy pattern in vibe coding: each project learns from the last
- When starting a new project, base it on the MOST RECENT similar project, not the one you worked on first
- This is why "template from MEX" > "template from Xero" for the FleetComplete dashboard — MEX was simply the better pattern

### 5.2 Same architectural skeleton across projects = easier maintenance

**What happened:** Both RAC Xero and RAC MEX followed the same backend pattern — Express API on Railway + separate MCP server for Claude Desktop. Even though the two services do different things, the architecture is identical. New FleetComplete project slotted straight in.

**What to remember:**
- Pick a skeleton and reuse it. The shape of the codebase becomes predictable → faster onboarding, easier debugging, easier AI assistance
- For RAC projects, the standard shape is:
  - `server.js` = Express + external API integration + session management
  - `mcp-server.js` = wraps the same endpoints as MCP tools for Claude Desktop
  - `public/index.html` = connection manager / login UI
  - `public/dashboard.html` = main dashboard UI
  - Deploys to Railway, connects to GitHub for auto-deploy

---

## Contributing new lessons

If you spot a new lesson during a Claude chat, ask Claude to "add this to `vibe-coding-lessons.md` in the rac-claude-training repo". Claude can append new entries under the right section. Over time, this doc becomes a genuine team training resource.

**Last updated:** 2026-04-17
