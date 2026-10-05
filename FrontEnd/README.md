# StudYo — React app

A working React (Vite) scaffold of the StudYo homepage and studio page, with routing,
component breakdown, and a light/dark theme toggle.

## Run it

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

- `/` — homepage
- `/studio` — the studio workspace

Click **🌙 Dark / ☀️ Light** in the navbar to toggle theme (persisted in `localStorage`).

## Build for production

```bash
npm run build
```

Output goes to `dist/`.

## Project structure

```
src/
├── main.jsx              # ThemeProvider + BrowserRouter + App
├── App.jsx                # Routes: "/" and "/studio"
├── index.css               # design tokens (light + dark), resets, shared button classes
│
├── context/
│   └── ThemeContext.jsx    # dark/light state, persisted to localStorage
│
├── data/                   # placeholder content — swap for real API calls later
│   ├── tools.js
│   ├── files.js
│   ├── agents.js
│   ├── stages.js
│   └── features.js
│
├── components/
│   ├── layout/              # Nav (with theme toggle + routing links), Footer
│   ├── home/                 # Hero, HeroStudioPreview, LogosRow, ProblemSection,
│   │                          # FeatureRow (reusable, 3 visual variants), FeaturesSection,
│   │                          # WaitlistBand
│   └── studio/                # TimelineStrip, ToolsPanel/ToolGroup, StudioCanvas/
│                                # FileCard/TodayBrief, AgentsPanel/AgentCard
│
└── pages/
    ├── HomePage.jsx
    └── StudioPage.jsx
```

## Where to go next

1. **Wire up real auth + data.** Everything in `src/data/*.js` is placeholder — replace with
   API calls (e.g. `useEffect` + fetch, or React Query) once there's a backend.
2. **Google Drive/Calendar integration** is the natural first real feature — start there.
3. **The agent/automation layer** (`AgentsPanel`) is currently static cards. Decide early
   whether you're hosting your own n8n instance, using their API, or building a lighter custom
   automation runtime — this materially changes your infra cost.
4. **State that multiple components need** (active project, which day is selected, agent run
   status) currently lives as local state per page. Once Nav or other components need to read
   it too, move it into a small store (Context, or Zustand for less boilerplate).
5. **CSS Modules**: styles are currently plain CSS per component folder. If class names start
   colliding as the app grows, rename files to `Component.module.css` and update the imports —
   the component structure won't need to change.
6. **Amazing**: Pull Test from gitHub Desktop.
