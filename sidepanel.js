const MODEL_ID = "gemini-3.8-flash"; // Current free-tier vision model (swap to "gemini-3.5-flash-lite" for lighter calls)

const LABS = {
  1:  { unit: "Unit I",   title: "Lab 1: ChatGPT & Claude (LLMs & Hallucination)", urls: ["https://chatgpt.com", "https://claude.ai", "https://scholar.google.com", "https://doi.org"] },
  2:  { unit: "Unit I",   title: "Lab 2: Gamma.app Presentation", urls: ["https://gamma.app"] },
  3:  { unit: "Unit I",   title: "Lab 3: Copilot in Word", urls: ["https://copilot.microsoft.com"] },
  4:  { unit: "Unit I",   title: "Lab 4: Grammarly Writing & Tone", urls: ["https://app.grammarly.com"] },
  5:  { unit: "Unit I",   title: "Lab 5: GPTZero AI Detection", urls: ["https://gptzero.me", "https://chatgpt.com"] },
  6:  { unit: "Unit II",  title: "Lab 6: NotebookLM Study Guide & Audio", urls: ["https://notebooklm.google.com"] },
  7:  { unit: "Unit II",  title: "Lab 7: Perplexity AI Research", urls: ["https://perplexity.ai", "https://chatgpt.com", "https://scholar.google.com"] },
  8:  { unit: "Unit II",  title: "Lab 8: Elicit & Consensus", urls: ["https://elicit.com", "https://consensus.app"] },
  9:  { unit: "Unit II",  title: "Lab 9: Prompt Engineering (C-R-A-F-T)", urls: ["https://chatgpt.com", "https://claude.ai"] },
  10: { unit: "Unit II",  title: "Lab 10: Julius AI / Excel Data Analysis", urls: ["https://julius.ai", "https://kaggle.com"] },
  11: { unit: "Unit III", title: "Lab 11: DALL-E 3 / Canva Poster", urls: ["https://copilot.microsoft.com", "https://canva.com"] },
  12: { unit: "Unit III", title: "Lab 12: Napkin.ai & Whimsical Diagrams", urls: ["https://napkin.ai", "https://whimsical.com"] },
  13: { unit: "Unit III", title: "Lab 13: Miro AI Brainstorm", urls: ["https://miro.com"] },
  14: { unit: "Unit III", title: "Lab 14: ElevenLabs Voiceover", urls: ["https://elevenlabs.io"] },
  15: { unit: "Unit III", title: "Lab 15: Google Lens & GPTZero Detection", urls: ["https://lens.google.com", "https://gptzero.me", "https://tineye.com"] },
  16: { unit: "Unit IV",  title: "Lab 16: GitHub Copilot Code Review", urls: ["https://github.com/copilot"] },
  17: { unit: "Unit IV",  title: "Lab 17: ChatGPT ADA Data Pipeline", urls: ["https://chatgpt.com", "https://julius.ai", "https://kaggle.com"] },
  18: { unit: "Unit IV",  title: "Lab 18: Bubble.io / Glide No-Code App", urls: ["https://bubble.io", "https://glideapps.com"] },
  19: { unit: "Unit IV",  title: "Lab 19: Wolfram Alpha & Symbolab Math", urls: ["https://wolframalpha.com", "https://symbolab.com"] },
  20: { unit: "Unit IV",  title: "Lab 20: Branch AI Tool Research", urls: ["https://claude.ai", "https://chatgpt.com", "https://scholar.google.com", "https://www.semanticscholar.org"] },
  21: { unit: "Unit V",   title: "Lab 21: AI Bias Audit (COMPAS)", urls: ["https://sheets.google.com", "https://github.com/propublica/compas-analysis"] },
  22: { unit: "Unit V",   title: "Lab 22: Privacy Audit (DPDP Act)", urls: ["https://openai.com/policies/privacy-policy", "https://anthropic.com/legal/privacy", "https://support.google.com/gemini", "https://myaccount.google.com"] },
  23: { unit: "Unit V",   title: "Lab 23: EU AI Act Classification", urls: ["https://artificialintelligenceact.eu"] },
  24: { unit: "Unit V",   title: "Lab 24: Capstone Deliverable", urls: ["https://notebooklm.google.com", "https://perplexity.ai", "https://app.grammarly.com", "https://gptzero.me"] },
  25: { unit: "Unit V",   title: "Lab 25: Capstone 5-Min Presentation", urls: ["https://gamma.app"] }
};

const apiKeyInput = document.getElementById("apiKey");
const labSelect = document.getElementById("labSelect");
const stepSelect = document.getElementById("stepSelect");
const stepText = document.getElementById("stepText");
const stepNote = document.getElementById("stepNote");
const stepTransition = document.getElementById("stepTransition");
const prevStepBtn = document.getElementById("prevStepBtn");
const nextStepBtn = document.getElementById("nextStepBtn");
const promptListEl = document.getElementById("promptList");
const chatBox = document.getElementById("chat");
const promptInput = document.getElementById("promptInput");

let currentStepIndex = 0;

// 1. Populate Experiment Dropdown grouped by Unit
const units = {};
Object.entries(LABS).forEach(([num, lab]) => {
  if (!units[lab.unit]) {
    const group = document.createElement("optgroup");
    group.label = lab.unit;
    labSelect.appendChild(group);
    units[lab.unit] = group;
  }
  const opt = document.createElement("option");
  opt.value = num;
  opt.textContent = lab.title;
  units[lab.unit].appendChild(opt);
});

// 2. Render Step Dropdown, Instruction, Note Down & Transition
function renderSteps(labNum, stepIdx = 0) {
  const steps = (typeof LAB_STEPS !== "undefined" && LAB_STEPS[labNum]) ? LAB_STEPS[labNum] : [
    { text: "Follow your lab manual instructions.", noteDown: "Record observations in your lab journal.", transition: "Move to the next step when ready." }
  ];
  currentStepIndex = Math.max(0, Math.min(stepIdx, steps.length - 1));

  stepSelect.innerHTML = "";
  steps.forEach((_, i) => {
    const opt = document.createElement("option");
    opt.value = i;
    opt.textContent = `Step ${i + 1} of ${steps.length}`;
    stepSelect.appendChild(opt);
  });

  const current = steps[currentStepIndex];
  stepSelect.value = currentStepIndex;
  stepText.textContent = current.text;
  stepNote.textContent = `📝 Note Down: ${current.noteDown}`;
  stepTransition.textContent = `➡️ Next Action: ${current.transition}`;

  prevStepBtn.disabled = currentStepIndex === 0;
  nextStepBtn.disabled = currentStepIndex === steps.length - 1;

  chrome.storage.local.set({ [`step_lab_${labNum}`]: currentStepIndex });
}

// 3. Render 1-Click Copy Prompts
function renderPrompts(labNum) {
  promptListEl.innerHTML = "";
  const prompts = (typeof LAB_PROMPTS !== "undefined" && LAB_PROMPTS[labNum]) ? LAB_PROMPTS[labNum] : [];

  if (prompts.length === 0) {
    promptListEl.innerHTML = `<div style="font-size:12px; color:#a1a1aa;">No preset prompts for this lab.</div>`;
    return;
  }

  prompts.forEach((item) => {
    const btn = document.createElement("button");
    btn.textContent = `Copy: ${item.label}`;
    btn.title = item.text;
    btn.style.cssText = "text-align: left; background: #27272a; color: #e4e4e7; padding: 6px 8px; font-size: 12px; margin: 0; border: 1px solid #3f3f46;";

    btn.addEventListener("click", async () => {
      await navigator.clipboard.writeText(item.text);
      const original = btn.textContent;
      btn.textContent = "Copied!";
      btn.style.background = "#15803d";
      setTimeout(() => {
        btn.textContent = original;
        btn.style.background = "#27272a";
      }, 1200);
    });

    promptListEl.appendChild(btn);
  });
}

function loadLab(labNum) {
  chrome.storage.local.get([`step_lab_${labNum}`], (res) => {
    const savedStep = res[`step_lab_${labNum}`] || 0;
    renderSteps(labNum, savedStep);
    renderPrompts(labNum);
  });
}

// 4. Restore saved API Key & Last Selected Lab
chrome.storage.local.get(["geminiApiKey", "selectedLab"], (res) => {
  if (res.geminiApiKey) apiKeyInput.value = res.geminiApiKey;
  if (res.selectedLab && LABS[res.selectedLab]) {
    labSelect.value = res.selectedLab;
  }
  loadLab(labSelect.value);
});

apiKeyInput.addEventListener("change", () => {
  chrome.storage.local.set({ geminiApiKey: apiKeyInput.value.trim() });
});

labSelect.addEventListener("change", () => {
  const labNum = labSelect.value;
  chrome.storage.local.set({ selectedLab: labNum });
  loadLab(labNum);
  appendMsg("System", `Switched to ${LABS[labNum].title}.`);
});

stepSelect.addEventListener("change", () => renderSteps(labSelect.value, Number(stepSelect.value)));
prevStepBtn.addEventListener("click", () => renderSteps(labSelect.value, currentStepIndex - 1));
nextStepBtn.addEventListener("click", () => renderSteps(labSelect.value, currentStepIndex + 1));

function appendMsg(sender, text, isUser = false) {
  const div = document.createElement("div");
  div.className = isUser ? "msg-user" : "msg-agent";
  div.textContent = `${sender}: ${text}`;
  chatBox.appendChild(div);
  chatBox.scrollTop = chatBox.scrollHeight;
}

// 5. Launch all required URLs
document.getElementById("launchBtn").addEventListener("click", () => {
  const lab = LABS[labSelect.value];
  lab.urls.forEach((url) => chrome.tabs.create({ url }));
  appendMsg("System", `Opened ${lab.urls.length} tool(s) for ${lab.title}.`);
});

// 6. Send Screenshot + Current Step + Note Down + Transition Rules to Gemini
async function runVision(userPrompt) {
  const apiKey = apiKeyInput.value.trim();
  if (!apiKey) return appendMsg("Error", "Please paste your Gemini API key first.");

  const labNum = labSelect.value;
  const lab = LABS[labNum];
  const steps = LAB_STEPS[labNum] || [];
  const current = steps[currentStepIndex] || { text: "", noteDown: "", transition: "" };

  appendMsg("You", `[Step ${currentStepIndex + 1}] ${userPrompt}`, true);

  try {
    const dataUrl = await chrome.tabs.captureVisibleTab(null, { format: "png" });
    const base64Img = dataUrl.split(",")[1];

    const systemContext =
      `You are a strict, accurate on-screen B.Tech AI Tools Lab Assistant.\n` +
      `EXPERIMENT: ${lab.unit} — ${lab.title}\n` +
      `CURRENT STEP (${currentStepIndex + 1} of ${steps.length}): ${current.text}\n` +
      `WHAT STUDENT MUST NOTE DOWN FOR TABLE: ${current.noteDown}\n` +
      `HOW TO MOVE TO NEXT STEP: ${current.transition}\n\n` +
      `STRICT RULES (MUST FOLLOW):\n` +
      `1. VISUAL GROUNDING FOR UI: Only tell the student to click buttons, tabs, or menus that are LITERALLY VISIBLE in the screenshot (give exact label & position). If a needed UI button is not visible, say "I cannot see [button] on your screen" and suggest a safe check (like scrolling).\n` +
      `2. BROWSER UI vs. LAB JOURNAL TASKS: Distinguish between clicking inside the web tool and manual lab journal work (like rating outputs 1–5, writing reflections, or filling tables). NEVER look for a "Rate 1–5" button on the webpage—instead, briefly critique the visible AI output's strengths/weaknesses so the student can decide their own 1–5 score in their journal.\n` +
      `3. ZERO DATA FABRICATION: Only extract text, scores, or numbers literally visible in the screenshot. Write "[Not visible on screen]" if something is cut off.\n` +
      `4. MANDATORY ENDING FORMAT: Always end your response with these exact two sections:\n` +
      `📝 Note Down for Your Table: (List the exact visible values from the screen or remind them what to manually rate/record for this step.)\n` +
      `➡️ To Move to the Next Step: (Tell them the exact tool action to take next—such as starting a New Chat, switching tabs, or opening the next tool—and then clicking 'Next ▶' in the side panel.)\n\n` +
      `Student request: ${userPrompt}`;

    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${MODEL_ID}:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{
            parts: [
              { text: systemContext },
              { inline_data: { mime_type: "image/png", data: base64Img } }
            ]
          }]
        })
      }
    );

    const data = await res.json();
    if (data.error) throw new Error(data.error.message);
    const parts = data.candidates?.[0]?.content?.parts || [];
    const reply = parts.find(p => p.text && !p.thought)?.text || "No response received.";
    appendMsg("Agent", reply);
  } catch (err) {
    appendMsg("Error", err.message);
  }
}

document.getElementById("analyzeBtn").addEventListener("click", () => {
  const q = promptInput.value.trim() || "Check my screen and help me finish this step.";
  promptInput.value = "";
  runVision(q);
});

promptInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") document.getElementById("analyzeBtn").click();
});

document.getElementById("snapBtn").addEventListener("click", () => {
  runVision(
    "Read ONLY the visible table/results on my screen. " +
    "1) Extract the exact values (metrics, word counts, algorithms, datasets, or scores) into a clean markdown table. " +
    "2) Identify any visible differences, patterns, or missing combinations (research gaps) strictly from the visible data. " +
    "Do not invent any missing data."
  );
});