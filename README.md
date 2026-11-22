# AI Tools Lab Agent (Chrome Extension)

An experimental Chrome Side Panel assistant built to help B.Tech students navigate all 25 exercises in the **AI Tools and Applications** lab manual (Units I–V) without constantly switching windows, retyping prompts, or getting lost in tool UIs.

> **Status: Prototype**  
> I built this as a practical side project because I realized how much time gets wasted hunting for UI options, copying long prompts, and logging observation tables during lab sessions. It isn't a polished commercial product—just a lightweight prototype shared in the hope that it helps other students work faster and smarter.

---

## Key Features

- **Experiment & Manual Step Tracker:** Select any of the 25 labs (grouped by Unit I–V) and step through the procedure manually using `◀ Prev` / `Next ▶`. Because you control the active step, the AI doesn't waste time guessing where you are.
- **1-Click Tool Launcher:** Automatically opens all required web tools for the active lab in new tabs.
- **1-Click Copy Prompts:** Every preset prompt, sample paragraph, and code snippet from the manual is available as a one-click copy button.
- **Visually Grounded Guidance (`Analyze Tab`):** Captures your active browser tab and sends it to Gemini (`gemini-2.5-flash`) with strict anti-hallucination rules—it only references buttons, menus, and text literally visible on your screen.
- **Snap & Log (Data Extraction & Gap Analysis):** Designed specifically for filling out lab observation tables.

### How `Snap & Log` Works
Instead of manually transcribing numbers or comparing rows across a crowded screen, clicking **Snap & Log**:
1. Captures a screenshot of your currently visible browser tab.
2. Instructs the vision model to read **only** the visible tables, scores, metrics, or outputs (e.g., GPTZero AI %, Grammarly scores, Elicit paper columns, or Google Sheets confusion matrices).
3. Formats the extracted values into a clean Markdown table ready to copy into your lab record.
4. Highlights visible differences, patterns, or missing combinations (such as untested *Algorithm + Dataset* research gaps in Elicit) without fabricating any off-screen data.

---

## Pros & Cons (Honest Trade-offs)

### Pros
- **Zero-Friction UI:** Docks natively inside Chrome's Side Panel—never covers your buttons or requires dragging a floating window around.
- **No Backend Required:** Runs 100% client-side. Your Gemini API key is stored locally in `chrome.storage.local` and never leaves your browser except to call Google's API directly.
- **Strict Visual Grounding:** Prompted to admit when an option isn't visible rather than hallucinating outdated UI instructions.
- **Fast Setup:** Loads in 30 seconds via Chrome Developer Mode with zero dependencies or build steps.

### Cons & Limitations
- **Web-Based Tools Only:** Because this is a Chrome Extension, it can only see and capture browser tabs. It **cannot** see local desktop software (e.g., desktop Microsoft Word, desktop Excel, or local VS Code). You must use the web alternatives (Copilot web, Julius AI, GitHub Copilot web, Google Sheets) for screen analysis to work.
- **Prototype Quality:** Expect occasional rough edges—there is no automated `.docx` export yet, and long pages require scrolling and re-snapping since `captureVisibleTab` only captures the visible viewport.
- **Bring Your Own API Key:** Requires a free Gemini API key from Google AI Studio, which is subject to Google's free-tier rate limits.

---

## Project Structure

```text
ai-lab-extension/
├── manifest.json     # Manifest V3 config & permissions
├── background.js     # Opens the Side Panel on extension icon click
├── sidepanel.html    # Side panel layout & styling
├── sidepanel.js      # Core logic, tab capture, Gemini API integration
├── steps.js          # Manual step-by-step procedures for all 25 labs
└── prompts.js        # 1-click copyable prompts & templates for all 25 labs
