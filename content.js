/* ══════════════════════════════════════════════════════════════════
   RAC CLAUDE TRAINING — COURSE CONTENT
   The single source for both the online course (index.html) and the
   in-class workbook (workbook.html). Edit here; both pages update.

   PUBLIC FILE. It is deployed to the website, so nothing private goes
   in here: no presenter notes, no names, no real figures.
   Presenter notes live in rac-in-class/Presenter/ (not in git).

   Writing tips:
   - Text goes between backticks ` ` so ' and " are both fine.
   - <strong>bold</strong> and <em>italic</em> work anywhere.
   - "How it looks right now" boxes (howNow) are the ONLY place for
     click-by-click steps. When the app changes, update those and
     the lastChecked date below.
   - online: { more, exercise } on a lesson shows ONLY on the website
     (for people working alone, without the class files or a presenter).
     online: { quiz, reflection } on a session does the same.
     The workbook ignores everything inside online: { }.
   ══════════════════════════════════════════════════════════════════ */

const COURSE = {
  title:       `Claude Training`,
  subtitle:    `Everything we cover, with every prompt ready to copy. Nothing here needs memorising — change the words to suit your own work.`,
  lastChecked: `October 2026`,

  homework: [
    { title: `The 20 marked exam papers`,
      text:  `You saw this work on twenty documents at once. Now do it yourself — the files are in the materials folder. Twenty marked Australian History exams; find out what the class struggled with.` },
    { title: `And one habit`,
      text:  `Preferences go stale. Put a monthly reminder in your calendar to run that interview again — or set up the scheduled task from 3.5, which does the remembering for you.` }
  ],

  sessions: [

  /* ═══════════ SESSION 1 ═══════════ */
  { n: 1, label: `Using Claude`, online: {
    reflection: `How did today change the way you'll start your next conversation with Claude?`,
    quiz: [
      { q: `Where does Claude's knowledge about you come from?`,
        options: [`Everything on the internet`, `Only what you give it — preferences, projects, memory and the conversation`, `Your RAC email, automatically`, `It doesn't know anything, ever`],
        correct: 1,
        why: `Claude knows what you give it, at four levels. That's why setting your preferences makes such a difference.` },
      { q: `An answer comes back generic. What's the best fix?`,
        options: [`Use a special phrase like 'think step by step'`, `Give it more context — who it's for, what you need, what matters`, `Type it again in capitals`, `Give up and write it yourself`],
        correct: 1,
        why: `Technique has aged out; information hasn't. More context almost always fixes a generic answer.` },
      { q: `Which of these should never go into a chat?`,
        options: [`Meeting notes`, `A policy document`, `Passwords or banking details`, `A draft email`],
        correct: 2,
        why: `No passwords, no banking details, no sensitive personal information about other people.` }
    ] },
  parts: [

    { title: `Part One — Foundations`, lessons: [

      { n: `0`, onlineOnly: true, title: `Getting started — before Session 1`,
        intro: `You need two things: your RAC Claude Teams account now, and the Claude desktop app from Session 2. Already signed in? Skip to 1.1.`,
        points: [
          `<strong>Use your RAC Teams account</strong>, not a personal one. It's the one RAC manages, with the right privacy settings for work.`,
          `<strong>The desktop app</strong> is what lets Claude work with files in folders on your own computer. You won't need it until Session 2, but it's easier to install now.`,
          `<strong>Stuck?</strong> Ask Duane. Don't spend twenty minutes fighting a login screen.`
        ],
        howNow: [
          `<strong>Sign in:</strong> go to claude.ai and sign in with your RAC work email.`,
          `<strong>Desktop app:</strong> download it from claude.ai/download, install it, and sign in with the same account.`,
          `<strong>Settings:</strong> click your name in the bottom-left corner, then Settings. You'll use this in 1.5.`
        ],
        exercise: `Sign in, open Settings and have a look around. Then start 1.1.` },

      { n: `1.1`, title: `Welcome — why we're doing this`,
        intro: `RAC has around 30 Claude Teams seats. Claude is one of the leading AI platforms in the world, and this is about building your skills to use it well. Your conversations are not used to train the model.` },

      { n: `1.2`, title: `AI literacy — what this session is, and isn't`,
        intro: `This session is AI literacy — the common ground everyone needs. Later sessions go further, into work specific to your team.`,
        points: [
          `<strong>In scope:</strong> how Claude works, what it knows, how to talk to it, how to set it up, how to point it at files.`,
          `<strong>Out of scope:</strong> your specific job. That comes in the next session, with your team.`,
          `"Literate" is the bar — able to read and write in this. Not expert.`
        ] },

      { n: `1.3`, title: `Privacy and the ground rules`,
        intro: `The ground rules, short version.`,
        points: [
          `Teams conversations are not used to train the model. Your chats are private to you.`,
          `Use your RAC Teams account for work. Personal accounts have different settings.`,
          `No passwords, no banking details, no sensitive personal information about other people.`,
          `<strong>Always review the output.</strong> It's a very good first draft, not a decision.`,
          `This is what RAC's AI Policy covers — and it's the accountability line you paste into your preferences in 1.5.`
        ] },

      { n: `1.4`, title: `What does Claude actually know?`,
        intro: `Claude knows nothing about you except what you give it, and you give it at four levels. Separately, it knows about the world up to a training cutoff — after that it has to search.`,
        prompts: [
          { lab: `Ask what it knows about you`,
            txt: `Before I ask you anything: what do you already know about me and about RAC, and where did each piece of that come from?` },
          { lab: `Training cutoff versus web search`,
            txt: `What's your training cutoff date? Now search the web and tell me what's actually current for NIAA grant rounds — what's open and when does it close?` }
        ],
        online: { more: `The four levels, widest first: <strong>Preferences</strong> — every conversation, always. <strong>Project instructions</strong> — every conversation inside that Project. <strong>Memory</strong> — things Claude picks up as you go, which you can view and prune. <strong>The conversation</strong> — this chat only, gone when you start a new one.` },
        exercise: `Run the first prompt on your own account. It will probably come back fairly thin — that's the point, and it's what we fix next.` },

      { n: `1.5`, title: `Setting up your preferences`,
        intro: `Preferences come in two halves. The shared half is RAC — the same for all of us. The personal half is your role and how you like answers, and you shouldn't type it. Get interviewed instead.`,
        prompts: [
          { lab: `Step 1 · The shared half — paste into settings`,
            txt: `CONTEXT
I work at Rirratjingu Aboriginal Corporation (RAC) in Nhulunbuy, NT. RAC represents the Rirratjingu clan, Traditional Owners of lands on the Gove Peninsula in North East Arnhem Land, part of the Yolŋu people of Miwatj. RAC runs several entities across community programs, operations and commercial activities, working across two main sites — Nhulunbuy and Yirrkala.

CULTURAL NOTES
Use correct Yolŋu spelling, including the ŋ character (e.g. Yirrkala, Miwatj, bilma, yidaki) wherever relevant.

HOW I LIKE ANSWERS
Get to the point first, then the detail. Plain language, no corporate padding. If you're not sure about something, say so rather than filling the gap. Australian spelling.

ACCOUNTABILITY
I review, approve and authorise all AI-assisted output before it is used or distributed, in line with RAC's AI Policy. I take responsibility for anything produced.` },
          { lab: `Step 2 · The personal half — same chat`,
            txt: `That's a fairly thin picture of me. Let's fix it. Interview me — one question at a time — about my role at RAC, what I actually work on day to day, and how I like information given back to me. When you've got enough, write it up as a preferences block I can add to my settings.` }
        ],
        exercise: `Paste the shared block into your settings, then do your own interview and save the result. Then ask "what do you know about me now?" in the same chat and see the difference.` },

      { n: `1.6`, title: `What you can actually do with it`,
        files: [
          { label: `Vehicle policy (prompt 2)`,  href: `https://ydac.sharepoint.com/:f:/g/IgAI-CFkj9FrTbejd2yTBy68ASiTOeQ-aLouiZinn8RYHzU?e=pAccF2` },
          { label: `20 exam papers (prompt 5)`, href: `https://ydac.sharepoint.com/:f:/g/IgAxWZT9q7Z-RrOQtmERWaRRAUBljWmpgJXoO7sSYmDOgIU?e=Ah4Y4Q` }
        ],
        intro: `Whatever you ask Claude to do is called a <strong>prompt</strong>. You can type it, or say it out loud (more on that in 1.8). Here are six typed prompts for the things people actually use Claude for, starting simple. Files come in at number two and build from there. <strong>To give Claude a file, drag it from your folder straight into the chat box</strong> — or click <strong>+</strong> and choose it — then type the prompt and send.`,
        online: { more: `Prompts 2 and 5 use the files linked above. Prompt 6 has its bullet points built in — once you've seen it work, swap in five of your own.` },
        prompts: [
          { lab: `1 · Ask Questions`,
            txt: `What does "in-kind contribution" mean in a grant budget? Explain it simply and give me an example.` },
          { lab: `2 · Simplify or Summarise`,
            txt: `Here's our vehicle use policy. In plain language — what do I actually have to do, when do I have to do it, and what would get me in trouble?` },
          { lab: `3 · Research a Topic`,
            txt: `Search the web and tell me what's out there about Rirratjingu Aboriginal Corporation in Nhulunbuy. What looks accurate, what's out of date, and what's missing?` },
          { lab: `4 · Brainstorm`,
            txt: `We need to organise the RAC Christmas party. Give me ten different options — a mix of budgets, indoor and outdoor, bearing in mind it's Nhulunbuy in December. Then ask me what I think and we'll narrow it down.` },
          { lab: `5 · Analyse`,
            txt: `Here are 20 marked exam papers. Which questions did the class get wrong most often, where are they consistently strong, and which students need help? Give me a one-page summary I can actually look at.` },
          { lab: `6 · Develop Solutions`,
            txt: `Turn these five bullet points into a one-page notice I can print and stick on the tearoom wall:
- Fridge is cleared every Friday at 3pm, so label your food
- Wash, dry and put away your own cups
- Last one out turns off the urn and the lights
- Report anything broken to reception
- Milk and tea are shared. If you finish it, let someone know` }
        ] },

      { n: `1.7`, title: `Prompting is a skill`,
        intro: `How you ask Claude for something is a skill, and like any skill it gets better the more you use it. The good news: you don't need special words. Claude is now very good at understanding what you mean from plain, everyday language. Ask the way you'd ask a capable colleague.`,
        points: [
          `<strong>Start simple.</strong> A short ask is fine. You'll often get something useful first time.`,
          `<strong>Then shape it.</strong> If it's not quite right, just say so in the same chat — "shorter", "friendlier", "it's for staff, not the Board". It remembers what you've already said.`,
          `<strong>The more it knows, the better it gets.</strong> Who it's for, what it's for, and anything that matters. Most of what makes an answer good is what you told it.`,
          `<strong>Not sure what to say? Let Claude ask.</strong> Tell it what you need and ask it to question you first.`
        ],
        prompts: [
          { lab: `1 · Start simple`,
            txt: `Write a short piece for the staff newsletter about the Yirrkala road works.` },
          { lab: `2 · Then shape it — same chat`,
            txt: `Good start. Most staff drive that road every day, so lead with what they need: it starts Monday, runs about three weeks, and the detour is via the old airport road. Keep it under 150 words and friendly.` },
          { lab: `3 · Or let Claude ask the questions`,
            txt: `I need to write a newsletter piece about some road works. Before you write anything, ask me the questions you need answered to make it good.` }
        ],
        exercise: `Pick something you actually need to write this week. Ask for it in one line, then improve it with two or three follow-ups in the same chat. Notice how much better the last version is than the first.` },

      { n: `1.8`, title: `Talking to it — voice`,
        intro: `Voice is a conversation, not dictation. You talk, it talks back, and you can cut across it mid-sentence — it stops and listens.`,
        points: [
          `<strong>Interrupt it.</strong> You don't have to wait for it to finish. Cutting across it is what makes it a conversation rather than a machine reading aloud.`,
          `<strong>Works on web, desktop and phone.</strong>`,
          `<strong>Turn web search on</strong> for anything after Claude's training cutoff.`,
          `<strong>Go back and redo your preferences out loud.</strong> You typed them earlier and you probably kept it short — everyone does, because typing is work. Talking costs nothing, so you say far more, and more is exactly what a preferences profile wants. Same interview, twice the information, no extra effort.`
        ],
        howNow: [
          `<strong>Start voice:</strong> the sound-wave icon at the bottom of the chat box. Click it and talk.`,
          `<strong>Change the voice:</strong> Settings → General → Voice. Language, Style (that's the voice itself) and Speed. Click through the Style options to hear a preview of each.`,
          `<strong>Web search</strong> is under the <strong>+</strong> in the chat box, not in Settings.`
        ],
        prompts: [
          { lab: `Say it, don't type it`,
            txt: `How have the All Blacks gone this season? Walk me through the results so far.` },
          { lab: `Then cut across it mid-answer`,
            txt: `Hang on — just the Rugby Championship matches.` },
          { lab: `The one that matters — re-run the 1.5 interview out loud`,
            txt: `I set my preferences up earlier by typing them, and I kept it short. Let's do it properly this time. Interview me again — one question at a time — about my role at RAC, what I actually work on day to day, and how I like information given back to me. Keep going until you have more than I gave you last time, then write it up as an updated preferences block I can paste into my settings.` }
        ],
        exercise: `Re-run your 1.5 preferences interview using the third prompt — this time out loud. Ask for more than you gave it the first time, then paste the new block into your settings.` },

      { n: `1.9`, title: `How would you use this?`,
        intro: `The method that works on anything — not just the things we covered today.`,
        table: { head: [`The method`, `What you're actually doing`, `Why it matters`], rows: [
          [`1 &nbsp;Problem`,          `State the problem, not the task you think solves it`, `Half the time the task you had in mind is the wrong one`],
          [`2 &nbsp;Help me solve`,    `Ask for help, don't ask for the answer`,              `This is the step everyone skips, and it's the one that changes the output`],
          [`3 &nbsp;High-level steps`, `Get the shape before the detail`,                     `Cheap to correct now; expensive to correct after it's written 2,000 words`],
          [`4 &nbsp;Detailed steps`,   `Then the detail, a few at a time`,                    `You stay in control and can stop when it goes the wrong way`]
        ] },
        prompts: [
          { lab: `The method, as one prompt`,
            txt: `Here's something I actually have to do this week: [describe it in a sentence or two]. Help me work out how to do it — don't just do it for me. Start with a high-level outline of the steps, then we'll go through them in detail a few at a time.` },
          { lab: `The drill-down — same chat`,
            txt: `Good. Walk me through steps 1 to 3 in detail.` }
        ],
        exercise: `Run it on something real off your own desk.` }
    ]},

    { title: `Close — Session One`, lessons: [
      { n: `1.10`, title: `Session One Replay`,
        intro: `What you now have, and one thing to try before next time.`,
        points: [
          `Claude knows what you tell it, at four levels — and your preferences are now set, so every conversation from here starts better than the ones you had before.`,
          `You've seen the six things it's for, you know how to prompt it, and you can talk to it as well as type.`,
          `<strong>Before next session:</strong> have a go at the 20 exam papers.`,
          `<strong>Also before next session:</strong> install the Claude desktop app and sign in. Session two doesn't work without it.`,
          `So far it's been answering. Next session it starts doing the work — on files on your own machine.`
        ] }
    ]}
  ]},

  /* ═══════════ SESSION 2 ═══════════ */
  { n: 2, label: `Files, Projects, and putting Claude to work`, online: {
    reflection: `What's one job you do every week that you could hand to Claude as a finished result?`,
    quiz: [
      { q: `How do you get Claude to do a piece of work rather than just answer?`,
        options: [`Switch to a different app`, `Describe the finished result you want, and give it the files to work from`, `Write some code`, `Pay for an upgrade`],
        correct: 1,
        why: `There's no mode to switch. Describe the result — a document, a deck, a summary — and give it the material.` },
      { q: `What does the desk rule mean?`,
        options: [`Keep your desk tidy`, `Connect your whole Documents folder so Claude has everything`, `Only put the files for this job in the connected folder`, `Claude can read any file on your computer`],
        correct: 2,
        why: `Anything on the desk, Claude can read — and reading it means sending it to Anthropic's servers. Work files only.` },
      { q: `What does a Project give you?`,
        options: [`A shared drive`, `Standing instructions and files that apply to every chat inside it`, `A faster version of Claude`, `A way to email other staff`],
        correct: 1,
        why: `Start inside a Project and its instructions apply automatically — to answers and to work on files.` }
    ] },
  parts: [

    { title: `Part Two — Everyday Work`, lessons: [

      { n: `2.1`, title: `Working with files`,
        files: [ { label: `Meeting transcript`, href: `https://ydac.sharepoint.com/:f:/g/IgDQP9FT5bBFRao4yBrljMujAV-PvdaDMDi8qgrXl3sIFz4?e=NddRPG` } ],
        intro: `Claude reads documents you give it — PDF, Word, Excel, PowerPoint, images, plain text. Drag and drop, or use the attachment icon. A photo of a whiteboard works.`,
        points: [
          `Claude wasn't in the meeting. Something else records and transcribes — Tactiq, or your Teams or Zoom transcript — and Claude turns that into minutes. Two tools.`,
          `<strong>Claude is a platform, not a note-taker.</strong> A tool like Tactiq does one job and does it automatically. Claude has no job of its own until you describe one — and then it does <em>that</em> job: your headings, your order, your rules.`,
          `There are many good specialist tools and they're often better at the one thing they do. Worth knowing, not worth hiding.`,
          `<strong>The rule:</strong> if the job is always the same, a specialist tool wins. If the job changes depending on what you need this time, the platform wins.`
        ],
        online: { more: `Use the transcript linked above, or the transcript of any recent meeting of your own — Teams and Zoom can both produce one. Skim the result before you share it, and use the roles-not-names follow-up if it's going beyond the people who were there.` },
        prompts: [
          { lab: `Drop in the transcript`,
            txt: `Here's the transcript from our team meeting. Turn it into minutes. I want: attendees, then the key points discussed under headings, then decisions, then actions with an owner and a due date where one was given. Keep people's own words where the wording matters. If something was left unresolved, or you can't tell who owned an action, say so rather than guessing. Give it to me as a Word document.` },
          { lab: `The follow-up — roles instead of names`,
            txt: `Redo that using roles rather than names.` }
        ] },

         { n: `2.2`, title: `Projects — staying organised and keeping context`,
        diagram: `<svg viewBox="0 0 480 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Inside a Project: Project Instructions and Files that you write, Project memory and Personal memory that Claude writes, and your chats, all in one place." style="display:block;width:100%;max-width:520px;height:auto;margin:14px 0 6px;font-family:Quicksand,system-ui,sans-serif">
<rect x="2" y="2" width="476" height="356" rx="16" style="fill:#F0EBE1;stroke:#7F2C2F;stroke-width:2"/>
<text x="22" y="36" style="font-size:18px;font-weight:700;fill:#7F2C2F">A Project — e.g. "Grants 2026"</text>
<text x="22" y="66" style="font-size:13px;font-weight:700;fill:#5E5A55;letter-spacing:1px">YOU WRITE</text>
<rect x="22" y="76" width="212" height="86" rx="10" style="fill:#fff;stroke:#5C2B34;stroke-width:1.8"/>
<text x="38" y="104" style="font-size:16px;font-weight:700;fill:#5C2B34">Instructions</text>
<text x="38" y="126" style="font-size:14px;fill:#5E5A55">How to behave —</text>
<text x="38" y="145" style="font-size:14px;fill:#5E5A55">the standing rules</text>
<rect x="246" y="76" width="212" height="86" rx="10" style="fill:#fff;stroke:#5C2B34;stroke-width:1.8"/>
<text x="262" y="104" style="font-size:16px;font-weight:700;fill:#5C2B34">Files</text>
<text x="262" y="126" style="font-size:14px;fill:#5E5A55">What's true —</text>
<text x="262" y="145" style="font-size:14px;fill:#5E5A55">reference material</text>
<text x="22" y="192" style="font-size:13px;font-weight:700;fill:#5E5A55;letter-spacing:1px">CLAUDE WRITES</text>
<rect x="22" y="202" width="212" height="86" rx="10" style="fill:#F6F5F2;stroke:#1D2426;stroke-width:1.4;stroke-dasharray:5 4"/>
<text x="38" y="230" style="font-size:16px;font-weight:700;fill:#1D2426">Project memory</text>
<text x="38" y="252" style="font-size:14px;fill:#5E5A55">Where you're up to —</text>
<text x="38" y="271" style="font-size:14px;fill:#5E5A55">built from your chats</text>
<rect x="246" y="202" width="212" height="86" rx="10" style="fill:#F6F5F2;stroke:#1D2426;stroke-width:1.4;stroke-dasharray:5 4"/>
<text x="262" y="230" style="font-size:16px;font-weight:700;fill:#1D2426">Personal memory</text>
<text x="262" y="252" style="font-size:14px;fill:#5E5A55">About you —</text>
<text x="262" y="271" style="font-size:14px;fill:#5E5A55">follows you in</text>
<rect x="22" y="304" width="436" height="40" rx="10" style="fill:#F4C63F;stroke:#1D2426;stroke-width:1.4"/>
<text x="38" y="330" style="font-size:15px;font-weight:700;fill:#1D2426">Your chats — every one uses all of the above</text>
</svg>`,
        online: { more: `Not sure what to put in your Project Instructions? Let Claude interview you, the same way it did for your preferences in 1.5. Start a chat inside your new Project and say: <em>"Interview me about this piece of work, one question at a time, then write me a short set of Project Instructions I can paste in."</em>` },
        intro: `Every chat you start is saved in your history. After a few weeks that's a long list, and finding the one conversation that mattered gets hard. A <strong>Project</strong> is a folder for related chats: everything about one piece of work, in one place. It also solves a second problem: inside a Project, Claude already knows the background, so you stop re-explaining it every time you start a new chat.`,
        points: [
          `<strong>Use a Project when</strong> you'll come back to the same piece of work more than once — a grant application, the monthly board report, a program you run.`,
          `<strong>Use a Project when</strong> the same background keeps coming up — the funder's rules, the report format, who the audience is.`,
          `<strong>Skip it for one-offs.</strong> A quick question or a single email doesn't need a Project. A normal chat is fine.`,
          `<strong>Name it after the work, not the tool</strong> — "Grants 2026", not "Claude stuff". In six weeks you'll still know what's in it.`,
          `<strong>You don't have to set it all up at the start.</strong> A name is enough to begin. Add instructions and files as the work takes shape — most Projects grow that way.`
        ],
        table: {
          head: [`Where`, `What it holds`, `Who writes it`], rows: [
          [`Project Instructions`,   `How to behave. Standing rules — what to assume, what format, what to always offer. Loaded every message, so keep it short`, `You`],
          [`Files / Add to Project`, `What's true. Reference material, and anything that would hurt to lose`,                                                   `You`],
          [`Project memory`,         `Where you're up to. Current state, open questions, who owes you an answer. Rebuilt nightly from your chats`,               `Claude`],
          [`Personal memory`,        `What it picked up about you. Follows you into every project`,                                                              `Claude`]
        ] },
            example: { title: `Worked example — a "Grants 2026" Project`, steps: [
          `<strong>Create it.</strong> In the left sidebar click <strong>Projects</strong>, then <strong>New project</strong>. Name it <em>Grants 2026</em>.`,
          `<strong>Project Instructions.</strong> Open the Project's instructions and paste in the example below. These are the standing rules for every chat in this Project.`,
          `<strong>Files / Add to Project.</strong> Add the reference material: the funder's guidelines and RAC's organisation profile.`,
          `<strong>Project memory.</strong> Nothing to do. Claude builds it from your chats in this Project.`,
          `<strong>Personal memory.</strong> Nothing to do either. It already follows you in.`,
          `<strong>Start a chat inside the Project</strong> and run the first prompt below. Watch it use what you just added.`
        ] },
        prompts: [
                { lab: `Not sure what to put in the instructions? Let Claude interview you`,
            txt: `Interview me about this piece of work, one question at a time. Then write me a short set of Project Instructions I can paste in. Keep them brief — I'll add more as the work develops.` },
          { lab: `Example Project Instructions — paste into the instructions box`,
            txt: `This Project is for RAC's grant applications in 2026.
- Audience is funders: government (NIAA, NT Government) and philanthropic.
- Australian spelling, plain language, no jargon.
- Use correct Yolŋu spelling, including the ŋ character.
- When drafting, follow the funder's guidelines in the Project files and name the criterion you're answering.
- If a figure or fact isn't in the files, say so. Don't make it up.` },
          { lab: `Make the context visible — callback to 1.4`,
            txt: `What's in this project's knowledge, and how are you using it to answer me right now?` },
          { lab: `When a file is genuinely worth writing`,
            txt: `We've been working on this for a while. Write up what you now know about this project as a markdown file I can add to the project knowledge — the standing facts, the decisions we've made, and what you should assume from now on.` }
        ],
        exercise: `Create a Project for real work of your own using the same steps — or set up Grants 2026 to practise. Start a chat inside it and run the "Make the context visible" prompt to watch the context being used.` }
    ]},

    { title: `Part Three — Putting Claude to Work`, lessons: [

      { n: `2.3`, title: `Claude talks, or Claude works`,
        intro: `So far you've asked, Claude has answered, and you've copied the result out. But the same Claude can also do the work — read your files, plan the steps, and hand back a finished document. There's no mode to switch to. It decides from what you ask for.`,
        points: [
          `<strong>Ask a question, it talks. Ask for a result, it works.</strong>`,
          `<strong>You don't have to watch it.</strong> Give it the job and go to a meeting — it keeps working, and shows you a task list of where it's up to.`,
          `<strong>One condition.</strong> When it's working on files in a folder on your own computer, that computer has to stay awake and the Claude app has to stay open. Shut the laptop lid and it can't reach your files.`,
          `It grows from here: <strong>3.3</strong> is several jobs at once, <strong>3.5</strong> is jobs that run when you aren't there at all.`
        ],
        table: { head: [`When Claude talks`, `When Claude works`], rows: [
          [`You ask a question`,        `You ask for a finished result`],
          [`One question, one answer`,  `It plans and runs several steps`],
          [`You copy the answer out`,   `Finished files come back to you`],
          [`Good for thinking`,         `Good for finishing`],
          [`You wait while it answers`, `You start it and walk away`]
        ] } },

      { n: `2.4`, title: `Getting set up — the desk rule`,
        intro: `Claude can only work with what you put in front of it. Attach files to your message, or — for a set of files, or when you want the results saved back — connect a folder on your computer.`,
        points: [
          `Desktop app installed and signed in on your RAC account.`,
          `<strong>Set up a simple folder structure.</strong> One parent folder (e.g. "RAC Claude Work") with a subfolder for each piece of work, matching your Projects — "Grants 2026", "Board Reports". Then you always know where Claude's files are.`,
          `<strong>Connect the subfolder for the job, not the whole parent.</strong> It keeps Claude's desk small and the work tidy.`,
          `<strong>The desk rule:</strong> the connected folder is Claude's desk. Anything you put on the desk, Claude can read — and reading it means sending it to Anthropic's servers.`,
          `So put work files on the desk. Not your whole Documents folder.`
        ],
        howNow: [
          `In the Claude desktop app, click <strong>+</strong> beside the message box and choose <strong>Add folder</strong>. Pick your working folder.`
        ],
        exercise: `Open the desktop app and connect your working folder. Nobody moves on until everyone has one.` },

      { n: `2.5`, title: `How to ask for finished work`,
        intro: `You don't pick a mode — you describe the result. The clearer the result, the better the work.`,
        points: [
          `<strong>What you want back</strong> — "a one-page document", "a slide deck", "a spreadsheet".`,
          `<strong>What to work from</strong> — the files you attached or put on its desk.`,
          `<strong>Who it's for</strong> — "for the Board", "for new staff", "for a funder".`,
          `If you just want to think something through, ask a question — it will talk it over with you instead.`,
          `If a request could go either way — a document or a deck — Claude will ask. That's not it failing; that's it checking.`
        ] },

      { n: `2.6`, title: `Your first hand-off`,
        diagram: `<svg viewBox="0 0 480 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="The hand-off: you put files in your connected folder, ask for a result, Claude reads the files and plans the steps, and the finished file lands back in your folder." style="display:block;width:100%;max-width:520px;height:auto;margin:14px 0 6px;font-family:Quicksand,system-ui,sans-serif">
<rect x="2" y="2" width="200" height="296" rx="14" style="fill:#F0EBE1;stroke:#7F2C2F;stroke-width:2"/>
<text x="20" y="34" style="font-size:16px;font-weight:700;fill:#7F2C2F">Your folder</text>
<rect x="20" y="52" width="164" height="38" rx="7" style="fill:#fff;stroke:#5C2B34;stroke-width:1.4"/>
<text x="34" y="77" style="font-size:14px;fill:#1D2426">Vehicle policy · PDF</text>
<rect x="20" y="98" width="164" height="38" rx="7" style="fill:#fff;stroke:#5C2B34;stroke-width:1.4"/>
<text x="34" y="123" style="font-size:14px;fill:#1D2426">Fleet fuel · Excel</text>
<rect x="20" y="144" width="164" height="38" rx="7" style="fill:#fff;stroke:#5C2B34;stroke-width:1.4"/>
<text x="34" y="169" style="font-size:14px;fill:#1D2426">Ops minutes · Word</text>
<rect x="20" y="226" width="164" height="54" rx="7" style="fill:#F4C63F;stroke:#1D2426;stroke-width:1.6"/>
<text x="34" y="249" style="font-size:14px;font-weight:700;fill:#1D2426">Fleet-Summary.docx</text>
<text x="34" y="268" style="font-size:13px;fill:#1D2426">finished — saved here</text>
<rect x="278" y="70" width="200" height="160" rx="14" style="fill:#fff;stroke:#1D2426;stroke-width:1.8"/>
<text x="296" y="102" style="font-size:16px;font-weight:700;fill:#1D2426">Claude</text>
<text x="296" y="128" style="font-size:14px;fill:#5E5A55">1. Reads the files</text>
<text x="296" y="152" style="font-size:14px;fill:#5E5A55">2. Plans the steps</text>
<text x="296" y="176" style="font-size:14px;fill:#5E5A55">3. Writes the result</text>
<text x="296" y="210" style="font-size:13px;fill:#7F2C2F">You can walk away</text>
<path d="M204 116 L268 116" style="stroke:#7F2C2F;stroke-width:2"/>
<path d="M266 110 L276 116 L266 122 Z" style="fill:#7F2C2F"/>
<text x="212" y="106" style="font-size:12px;fill:#7F2C2F">reads</text>
<path d="M276 200 C240 200 236 253 210 253" style="stroke:#7F2C2F;stroke-width:2;fill:none"/>
<path d="M214 247 L204 253 L214 259 Z" style="fill:#7F2C2F"/>
<text x="226" y="276" style="font-size:12px;fill:#7F2C2F">saves</text>
</svg>`,
        files: [ { label: `The three exercise files`, href: `https://ydac.sharepoint.com/:f:/g/IgAI-CFkj9FrTbejd2yTBy68ASiTOeQ-aLouiZinn8RYHzU?e=pAccF2` } ],
        intro: `Three files go on the desk, one summary comes out — and it lands in your own folder, not in a chat window you have to copy from. The policy is RAC's real vehicle policy; the fleet spreadsheet and the minutes are made up for the exercise.`,
        table: { head: [`The three files`, `What's in it`, `Format`], rows: [
          [`OP 4.03 Company Vehicle Policy`,             `RAC's real vehicle policy — fuel cards, odometer readings, incident reporting, servicing and personal use.`, `PDF`],
          [`RAC-Fleet-Fuel-and-Incidents-Q4-FY2026`,     `Four tabs: the vehicle register, a quarter of fuel card transactions, the incident register, and a summary.`, `Excel`],
          [`RAC-Operations-Meeting-Minutes-9-July-2026`, `The team discussing that report. Six items and four actions.`,                                                `Word`]
        ] },
        online: { more: `In class everyone uses these same three files, so the results can be compared. On your own, any three related documents work — a policy, a spreadsheet and some notes about the same topic.`,
                  exercise: `Put three related documents of your own in your working folder, run the prompt, and watch the document appear in your folder.` },
        prompts: [
          { lab: `The ask — keep it ordinary`,
            txt: `Read the documents in this folder and write one summary that captures the key points from each. Save it as Fleet-Summary.docx.` }
        ],
        exercise: `Put the three files in your working folder, run the prompt, and watch the document appear. That is the whole exercise — a finished file, in your folder, that you never saved.` },

      { n: `2.7`, title: `Coming back to a Project`,
        intro: `The real value of a Project shows up the next day, and the day after. Go back into it and everything is still there: the work you've done, the files, and the background Claude needs. You can pick up an old conversation or start a new one. Either way, you're not starting from scratch.`,
        points: [
          `<strong>It keeps the work.</strong> Every conversation and file in the Project stays together, so nothing gets lost in your general history.`,
          `<strong>You can resume.</strong> Open an earlier conversation and carry on exactly where you left off.`,
          `<strong>It keeps the context.</strong> The Project's instructions and files apply to every chat inside it, without you explaining them again.`,
          `<strong>A new chat still knows where you're up to.</strong> Project memory carries the thread between conversations, so you don't have to hunt for the old one.`,
          `<strong>Resume or start fresh?</strong> Resume when you're picking up the same job. Start a new chat for a new task, or when a long conversation has wandered off track. The Project context comes with you either way.`
        ],
        prompts: [
          { lab: `Starting a new chat in a Project you've used before`,
            txt: `Where are we up to on this? Remind me what's been done, what's still open, and what I should do next.` }
        ],
        exercise: `Go back into the Project you made in 2.2 and start a new chat. Run the prompt and see how much it already knows. Then open your earlier conversation from the Project and add one more message to it.` }
    ]},

    { title: `Close — Session Two`, lessons: [
      { n: `2.8`, title: `Session Two Replay`,
        intro: `Where we got to, and one thing to try before next time.`,
        points: [
          `You can hand Claude a file and get real work back.`,
          `You have a project, so you stop re-explaining the same background every time.`,
          `Ask for a result and Claude does the work — it can read a whole folder and save the finished file onto your own machine.`,
          `<strong>Before next time:</strong> connect a folder of your own and ask it for a summary. Use it once on something real and it stops being a demo.`,
          `<strong>Leave your working folder connected</strong> — you will use the same one next session.`
        ] }
    ]}
  ]},

  /* ═══════════ SESSION 3 ═══════════ */
  { n: 3, label: `Claude at work`, online: {
    reflection: `Which scheduled task would save you the most time — and what would you have it do?`,
    quiz: [
      { q: `What is a claude.md file?`,
        options: [`A backup of your chats`, `Standing instructions for one folder`, `A list of your passwords`, `Claude's training data`],
        correct: 1,
        why: `It's project instructions, one level down: context that applies to every task run in that folder.` },
      { q: `What can a connector see?`,
        options: [`Everything at RAC`, `Only what you can already see, with your permissions`, `Other people's inboxes`, `Nothing until IT approves each email`],
        correct: 1,
        why: `It uses your account and your permissions. It reads when you ask, and you can switch it off.` },
      { q: `What does a scheduled task do?`,
        options: [`Sends emails on your behalf`, `Runs a prompt on its own, on a schedule — it drafts, it never sends`, `Books meetings automatically`, `Reminds you to log in`],
        correct: 1,
        why: `Write the prompt once and it turns up on schedule. Claude drafts; you decide what gets sent.` }
    ] },
  parts: [

    { title: `Open — Session Three`, lessons: [
      { n: `3.1`, title: `Back in the room`,
        intro: `Quick check before we start — five minutes now saves twenty later.`,
        points: [
          `Working folder still connected?`,
          `Desktop app still signed in on your RAC account?`,
          `Changed machine since last time? Say so now rather than at the first exercise.`,
          `Last session it read a folder and wrote you a file. This session it stops needing you in the room at all.`
        ],
        exercise: `Open the desktop app and check the working folder from last session is still connected.` }
    ]},

    { title: `Part Four — Claude at Work`, lessons: [

    { n: `3.2`, title: `Standing instructions for the folder`,
        diagram: `<svg viewBox="0 0 480 440" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Context ladder: Preferences contain Projects, which contain connected folders, which contain claude.md. A skill sits alongside and works at any level." style="display:block;width:100%;max-width:520px;height:auto;margin:14px 0 6px;font-family:Quicksand,system-ui,sans-serif">
<rect x="2" y="2" width="476" height="326" rx="16" style="fill:#F0EBE1;stroke:#7F2C2F;stroke-width:2"/>
<text x="22" y="34" style="font-size:17px;font-weight:700;fill:#7F2C2F">Preferences · 1.5</text>
<text x="22" y="56" style="font-size:15px;fill:#5E5A55">You — every conversation</text>
<rect x="20" y="72" width="440" height="240" rx="13" style="fill:#fff;stroke:#5C2B34;stroke-width:2"/>
<text x="38" y="102" style="font-size:17px;font-weight:700;fill:#5C2B34">Project · 2.2</text>
<text x="38" y="124" style="font-size:15px;fill:#5E5A55">One piece of work — every chat in it</text>
<rect x="36" y="140" width="408" height="156" rx="11" style="fill:#F6F5F2;stroke:#1D2426;stroke-width:1.6"/>
<text x="54" y="170" style="font-size:17px;font-weight:700;fill:#1D2426">Connected folder · 2.4</text>
<text x="54" y="192" style="font-size:15px;fill:#5E5A55">The files Claude reads and saves into</text>
<rect x="52" y="206" width="376" height="74" rx="9" style="fill:#F4C63F;stroke:#1D2426;stroke-width:1.6"/>
<text x="70" y="236" style="font-size:17px;font-weight:700;fill:#1D2426">claude.md · 3.2</text>
<text x="70" y="259" style="font-size:15px;fill:#1D2426">The folder's rules: where things go</text>
<path d="M240 334 L240 352" style="stroke:#7F2C2F;stroke-width:2;stroke-dasharray:4 3"/>
<path d="M234 340 L240 332 L246 340 Z" style="fill:#7F2C2F"/>
<rect x="2" y="356" width="476" height="80" rx="14" style="fill:#fff;stroke:#7F2C2F;stroke-width:2;stroke-dasharray:6 4"/>
<text x="22" y="388" style="font-size:17px;font-weight:700;fill:#7F2C2F">Skill · Session 4</text>
<text x="22" y="412" style="font-size:15px;fill:#5E5A55">One job, packaged — works at any level</text>
</svg>`,
        files: [ { label: `An example claude.md`, href: `https://ydac.sharepoint.com/:f:/g/IgCUkFW9V8gUTq6uSZMDiiPkAfdRENIYzTyb7P1BVSyjCQM?e=4W3FFK` } ],
        intro: `Look at what you've set up so far. Each step gave Claude context for a smaller, more specific area. This lesson adds the next one: standing instructions for a <strong>folder</strong>, written in a small file called <code>claude.md</code> that sits inside it.`,
        table: { head: [`What you set up`, `Where`, `What it covers`], rows: [
          [`Preferences`, `1.5`, `<strong>You</strong> — every conversation, everywhere`],
          [`A Project`, `2.2`, `<strong>One piece of work</strong> — every chat inside that Project`],
          [`A connected folder`, `2.4`, `<strong>The files</strong> Claude can read and save into`],
          [`claude.md`, `This lesson`, `<strong>That folder's house rules</strong> — every task run on it`],
          [`A skill`, `Session 4`, `<strong>One job</strong>, packaged so anyone can use it`]
        ] },
        points: [
          `<strong>"I already have Project instructions — why this too?"</strong> Project instructions are about the <em>work</em>: how to think, who it's for. A <code>claude.md</code> is about the <em>files</em>: where outputs go, how to name them, what never to touch.`,
          `<strong>It travels with the folder.</strong> Because it lives inside the folder, it applies whether you're in a Project or not.`,
          `<strong>Typical contents:</strong> what the folder is for, where finished work goes, file naming, and the one rule that matters most: never overwrite the original files.`,
          `<strong>You'll see it pay off straight away.</strong> In 3.3 you'll ask for three files and say only "save them". Your <code>claude.md</code> will decide where they go.`
        ],
        prompts: [
          { lab: `Let it interview you — run this with your 2.6 folder connected`,
            txt: `Write a claude.md for this folder so you know how to work in here. Interview me first — ask me what this folder is for, where things should go, and what you should never do.` }
        ],
        exercise: `Connect the working folder from 2.6 and run the prompt. Answer its questions, and check it saves claude.md into the folder. Want to compare? Open the example linked above.` },

      { n: `3.3`, title: `Doing several things at once`,
        files: [ { label: `The three exercise files (same as 2.6)`, href: `https://ydac.sharepoint.com/:f:/g/IgAI-CFkj9FrTbejd2yTBy68ASiTOeQ-aLouiZinn8RYHzU?e=pAccF2` } ],
        intro: `Describe several tasks in one go and it organises the work itself.`,
        online: { more: `If you used your own files in 2.6, change the three tasks to suit them — keep the shape: three jobs, one prompt, "save them".` },
        prompts: [
          { lab: `Three at once — same folder as 2.6`,
            txt: `Three things at once, please. One: turn the meeting minutes into a one-page brief. Two: build a table from the fuel spreadsheet showing each vehicle's spend and litres for the quarter, and flag anything in the transactions that looks out of place. Three: draft a short covering note for the Operations Manager that pulls both together and flags anything the policy requires that is not being followed. Save them.` },
          { lab: `Then the one that opens the folder up`,
            txt: `Is there anything these three documents together tell me that I wouldn't get from any one of them on its own?` }
        ],
        exercise: `Run it on the folder you already have connected. Watch the plan appear first, then three files land.` },

      { n: `3.4`, title: `Connectors — reaching your other systems`,
        intro: `A connector lets Claude reach a system you already use — your mail, your calendar, your SharePoint — without you exporting anything first. It uses your account and your permissions, so it can't see anything you can't already see. It reads when you ask; it isn't watching your inbox. And you can switch it off.`,
        online: { more: `If M365 isn't offered as a connector, ask Duane — RAC decides which connectors are switched on.` },
        prompts: [
          { lab: `Test 1 · Calendar`,
            txt: `What meetings do I have today?` },
          { lab: `Test 2 · Mail`,
            txt: `What's the most recent email I've received, and who is it from?` },
          { lab: `Then try something you'd normally search Outlook for`,
            txt: `Find the email thread about the vehicle bookings and tell me where it got to — what was agreed, what's still open, and whether anyone is waiting on me.` }
        ],
        exercise: `Connect M365 and run both test questions. Don't move on until they both come back right — the next lesson is built on this.` },

      { n: `3.5`, title: `Scheduled tasks — work that happens without you`,
        intro: `A scheduled task is a prompt that runs on its own, on a schedule. You write it once and it turns up. Claude drafts — it never sends.`,
        prompts: [
          { lab: `1 · Preferences check-in — no connector needed`,
            txt: `Check in with me about my Claude preferences. Tell me what you currently have about my role and my work, then ask whether anything has changed — new responsibilities, new projects, anything you should stop assuming. If I give you updates, write me a revised preferences block I can paste into my settings.` },
          { lab: `2 · The email catch-up`,
            txt: `Every Monday morning, look at my email from the past seven days — both Inbox and Sent. Group it into what I've already responded to and what still needs a reply. For anything still needing a reply, give me a one-line summary of what it's about and how urgent it looks. Don't draft anything and don't send anything — just tell me what's outstanding.` },
          { lab: `3 · The morning briefing`,
            txt: `Every weekday at 7:30am, go through my meetings for the day. For each one give me a few lines: who's attending, what it's about from the title and any linked documents, and anything I should prepare or bring. Keep the whole thing short enough to read with a coffee.` }
        ],
        exercise: `Set up task one. It takes about a minute and it's the one to leave with.` },

      { n: `3.6`, title: `Where this saves you time`,
        intro: `Rough numbers by team — these are the tasks people already do, timed before and after.`,
        table: { head: [`Team`, `The task`, `Now → then`], rows: [
          [`Administration`,     `Correspondence — summarise, sort by urgency, draft replies`,  `2–3 hrs → 20 min`],
          [`Finance`,            `Trial balance — top expenses, flag anomalies, summary table`, `1–2 hrs → 15 min`],
          [`Community Programs`, `Outcome reports → consolidated acquittal narrative`,          `3–4 hrs → 30 min`],
          [`Operations`,         `Incident reports → themes → briefing`,                        `1–2 hrs → 20 min`],
          [`Leadership`,         `Strategy day notes → themes → formatted summary`,             `2–3 hrs → 25 min`]
        ] } }
    ]},

    { title: `Close — Session Three`, lessons: [
      { n: `3.7`, title: `Session Three Replay`,
        intro: `Where we got to. Four things you did not have this morning.`,
        points: [
          `Standing instructions for a folder, so you stop repeating yourself.`,
          `Several jobs from one prompt, and it works out the order itself.`,
          `Your mail and calendar, without exporting anything first.`,
          `Work that runs when you are not there.`,
          `<strong>Before next time:</strong> leave the scheduled task running. It is the only homework that does itself.`
        ] }
    ]}
  ]},

  /* ═══════════ SESSION 4 ═══════════ */
  { n: 4, label: `Skills and automation`, online: {
    reflection: `What have you typed three times that should become a skill?`,
    quiz: [
      { q: `When should something become a skill?`,
        options: [`When it's urgent`, `When you've typed roughly the same prompt three times`, `Only when IT builds it`, `Never — preferences are always better`],
        correct: 1,
        why: `The three-times rule. If you keep asking for the same thing the same way, package it.` },
      { q: `What is a skill, really?`,
        options: [`A program only developers can write`, `A text file of instructions — no code`, `A paid add-on`, `A type of Project`],
        correct: 1,
        why: `Anyone can read a skill file. It's written instructions, packaged so they travel.` },
      { q: `What is a plugin?`,
        options: [`A browser extension`, `A bag of skills you install from one file`, `A hardware device`, `A connector to Xero`],
        correct: 1,
        why: `Someone builds it once, hands you a file, and you have every skill inside it.` }
    ] },
  parts: [

    { title: `Part Five — Skills`, lessons: [

      { n: `4.1`, title: `Using a skill`,
        intro: `Type a slash, pick it from the list, go. Watch what it does that nobody asked for.`,
        online: { more: `This only works once the RAC plugin is installed — see 4.3. Ask Duane for the plugin file.` },
        prompts: [
          { lab: `Run the skill`, txt: `/racdesign` }
        ] },

      { n: `4.2`, title: `What a skill actually is`,
        files: [ { label: `Example skill files`, href: `https://ydac.sharepoint.com/:f:/g/IgA3ZoaF0FExRZpusVM4n4ikAbsulg6iwh-nspLNmCYZ2a8?e=015cnm` } ],
        intro: `If you've typed roughly the same prompt three times, that's a skill. And a skill is just a text file — no code in it anywhere.`,
        table: { head: [`Put it here`, `When`, `RAC example`], rows: [
          [`Preferences`,                     `Relevant to everything you produce, always`,                                  `Yolŋu spelling and the ŋ character. Australian English`],
          [`Project instructions / knowledge`, `Relevant to one body of work`,                                                `How this project's reports are structured; its standing facts`],
          [`A skill`,                         `Relevant sometimes, to a kind of task — and needed by more than one person`, `racdesign — the brand guide. Only matters when you're building something that has to look right`]
        ] } },

      { n: `4.3`, title: `Getting one — the RAC plugin`,
        intro: `A plugin is a bag of skills. Someone builds it once, hands you a file, and you have it.`,
        online: { exercise: `Ask Duane for the RAC plugin file, install it, then come back to 4.1 and run /racdesign.` },
        exercise: `Install the plugin and run the skill. You leave with a working RAC skill on your own account.` },

      { n: `4.4`, title: `What have you typed three times?`,
        intro: `So — what do you type over and over?`,
        table: { head: [`Ideas already on the list`, `What it would do`], rows: [
          [`Grant Application Drafter`, `URL in, requirements extracted, draft against RAC's profile`],
          [`Board Paper Formatter`,     `Raw inputs into RAC's board paper template`],
          [`Financial Anomaly Report`,  `Xero export, anomalies vs last period, one page`],
          [`Program Acquittal Writer`,  `Outcomes and spend into an acquittal narrative`],
          [`Correspondence Processor`,  `Classify by type and urgency, draft replies`],
          [`Quarterly Review Package`,  `Reports plus financials plus exec summary`]
        ] } }
    ]},

    { title: `Close`, lessons: [
      { n: `4.5`, title: `Building the habit`,
        intro: `Five things to take away.`,
        points: [
          `Start small. One task today, another next session.`,
          `Always review — you're the expert, it isn't.`,
          `Share what works. A good prompt is worth passing around.`,
          `You can't break it. If a conversation goes sideways, start a new one.`,
          `Ask Duane.`
        ] }
    ]}
  ]}

  ]
};