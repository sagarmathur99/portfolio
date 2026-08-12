# AGENTS — Workspace Instructions for AI coding agents

Purpose: Give succinct, actionable guidance for running and testing this static site locally.

- **Project type:** Simple static frontend — files: `index.html`, `script.js`, `style.css`.

- **Primary dev server (recommended):** VS Code Live Server extension
  - Use the Command Palette: *Live Server: Open with Live Server* or right-click `index.html` → *Open with Live Server*.
  - Default port is usually `5500`; the served URL will be visible in the status bar (e.g. `http://127.0.0.1:5500/index.html`).

- **Command-line fallbacks:**
  - Python 3: `python -m http.server 8000` (serves current directory on port 8000)
  - Node.js: `npx http-server . -p 8000`

- **Agent behavior notes:**
  - Before running browser-dependent checks or UI tests, ensure a local server is running and provide the full URL to the page under test.
  - Prefer Live Server when available because it auto-reloads on file changes.
  - If serving from mounted/cloud paths (e.g., OneDrive), watch for caching/locking; if problems arise, copy files to a local folder and serve from there.
  - Do not modify user files without explicit confirmation; starting/stopping a local server is safe to perform.

If you want, I can also add a `.vscode/tasks.json` or a small `README.md` snippet with one-line start commands.
