# AI Tools Lab Agent (Chrome Extension)

![Status](https://img.shields.io/badge/Status-Prototype-orange)
![Built With AI](https://img.shields.io/badge/Built%20with-AI-blue)
![Manifest](https://img.shields.io/badge/Chrome-Manifest%20V3-green)

An on-screen Chrome Side Panel assistant built to help B.Tech students complete all 25 exercises in the **AI Tools and Applications** lab manual (Units I–V) without constantly switching tabs, retyping long prompts, or getting lost in tool UIs.

> **Note:** This is a lightweight **prototype built using AI** as a practical side project. I made it simply because it saves a lot of time during lab sessions and could be useful for other students. It is not a polished commercial product—just a working tool shared openly.

---

<details open>
<summary><strong>✨ Key Features & How "Snap & Log" Works</strong></summary>
<br>

- **Experiment & Manual Step Tracker:** Pick any of the 25 labs (grouped by Unit I–V) and step through procedures manually (`◀ Prev` / `Next ▶`) so the AI never guesses the wrong step.
- **1-Click Tool Launcher:** Automatically opens all required web tools for the selected lab in new tabs.
- **1-Click Copy Prompts:** Copy exact lab prompts, sample paragraphs, and code snippets to your clipboard in one click.
- **Visually Grounded Guidance (`Analyze Tab`):** Captures your active browser tab and uses Gemini (`gemini-2.5-flash`) with strict anti-hallucination rules—it only points to buttons and text literally visible on your screen.

### 📸 What Does `Snap & Log` Do?
Instead of manually typing numbers from crowded tables or comparing outputs by hand, clicking **Snap & Log**:
1. Captures a screenshot of your currently visible browser tab.
2. Reads **only** the visible metrics, scores, or tables (e.g., GPTZero AI %, Grammarly scores, Elicit paper columns, or Google Sheets confusion matrices).
3. Formats the extracted values into a clean Markdown table ready to paste into your lab record.
4. Identifies visible differences, patterns, or missing combinations (like untested *Algorithm + Dataset* research gaps in Elicit) without fabricating off-screen data.

</details>

<details>
<summary><strong>⚖️ Pros & Cons (Honest Trade-offs)</strong></summary>
<br>

### Pros
- **Zero-Friction UI:** Docks natively in Chrome's Side Panel—never blocks buttons like a floating desktop window.
- **No Backend Needed:** Runs 100% client-side; your Gemini API key stays in `chrome.storage.local`.
- **Strict Visual Grounding:** Prompted to admit when an option isn't visible instead of hallucinating outdated menus.
- **30-Second Setup:** Loads directly via Chrome Developer Mode with no build tools or dependencies.

### Cons & Limitations
- **Web-Based Tools Only:** As a Chrome Extension, it can **only** see browser tabs. It cannot view local desktop apps (desktop Word, Excel, or VS Code)—you must use their web versions (Copilot web, Julius AI, GitHub Copilot web, Google Sheets) for screen analysis.
- **Prototype Quality:** No automatic `.docx` export yet, and long pages require scrolling and re-snapping since Chrome only captures the visible viewport.
- **Bring Your Own API Key:** Uses your own free Gemini API key from Google AI Studio (subject to free-tier rate limits).

</details>

<details>
<summary><strong>🚀 Installation & Setup</strong></summary>
<br>

1. Click **Code** → **Download ZIP** and extract the folder on your computer.
2. Open Google Chrome and navigate to `chrome://extensions/`.
3. Enable **Developer mode** (toggle in the top-right corner).
4. Click **Load unpacked** and select the extracted `ai-lab-extension` folder.
5. Click the puzzle icon in Chrome's toolbar, pin **AI Tools Lab Agent**, and click it to open the Side Panel.
6. Get a free API key from [Google AI Studio](https://aistudio.google.com) and paste it into the top input box in the Side Panel.

</details>

<details>
<summary><strong>📁 Project Structure</strong></summary>
<br>

```text
ai-lab-extension/
├── manifest.json     # Manifest V3 config & permissions
├── background.js     # Opens the Side Panel on extension icon click
├── sidepanel.html    # Side panel layout & styling
├── sidepanel.js      # Core logic, tab capture, Gemini API integration
├── steps.js          # Manual step-by-step procedures for all 25 labs
└── prompts.js        # 1-click copyable prompts & templates for all 25 labs
```

</details>

<details>
<summary><strong>🔒 Privacy Note & 🤝 Contributing</strong></summary>
<br>

### Privacy Note
This extension collects **zero** telemetry or personal data. Screenshots are only captured when you explicitly click **Analyze Tab** or **Snap & Log**, and are sent directly from your browser to the Google Gemini API using your own key.

### Contributing
Since this is an AI-assisted prototype, PRs and forks are welcome! Feel free to update `steps.js` or `prompts.js` if your college syllabus differs, or add features like Viva Quiz Mode and `.docx` record export.

</details>
