const LAB_STEPS = {
  1: [
    "Part A: Open ChatGPT & run the 5 sentence completions prompt ('The future of AI will ___').",
    "Part A: Ask ChatGPT to explain next-word prediction (<100 words) & what happens at temperature 2.0.",
    "Part A: Run the Mars sci-fi opening line prompt 3 times and note whether the outputs differ.",
    "Part B: Ask ChatGPT for 5 IEEE papers (2022–2024) on transformer attention with author names & DOIs.",
    "Part B: Verify each paper title in quotes on Google Scholar and test the DOIs on doi.org.",
    "Part C: Ask BOTH ChatGPT and Claude the context window prompt & compare word count, accuracy, and clarity."
  ],
  2: [
    "Sign in to gamma.app → click 'Create New' → 'Generate' → select 'Presentation'.",
    "Enter the 10-slide presentation prompt customized to your B.Tech topic.",
    "Review the generated outline, add/remove sections as needed, and click 'Generate Presentation'.",
    "Audit all slides: find 3 accurate facts, 1 claim needing verification, and 1 layout to redesign.",
    "Make 3+ manual edits (edit text, change theme/colour, add a custom image) and copy Share link or export.",
    "Create 2 slides manually in PowerPoint on the same topic and time yourself to compare."
  ],
  3: [
    "Part A: Open Word Copilot (or copilot.microsoft.com) & draft the 300-word Redwood viscometer Intro.",
    "Part A: Highlight claims to verify or generic sentences in yellow, then fix them with real notes.",
    "Part B: Paste the weak oil-heating paragraph & ask Copilot to rewrite it formally for a B.Tech report.",
    "Part B: Compare original vs. rewritten side-by-side and record 3 specific technical improvements.",
    "Part C: Paste/upload a 5–10 page subject PDF & ask for a 5-bullet summary + 3 key concepts."
  ],
  4: [
    "Open app.grammarly.com and create a new document.",
    "Paste a 200–250 word self-written technical paragraph (or copy the sample error paragraph).",
    "Click 'Goals' → set Audience: Expert, Formality: Formal, Domain: Academic.",
    "Record your Grammarly Score BEFORE accepting any suggestions.",
    "Review Correctness (red), Clarity (blue), Engagement (green), Delivery (purple); accept/reject with reasons.",
    "Record Score AFTER, Tone Detector result, Plagiarism % (if Premium), and write a 3-sentence reflection."
  ],
  5: [
    "Prepare 5 text samples (250–350 words each): A (Your own), B (Raw ChatGPT), C (60% rewritten), D (Textbook/Wiki), E (Minimally edited).",
    "Write down your predicted AI % for each sample BEFORE running GPTZero.",
    "Test Samples A–E on gptzero.me; screenshot and record AI %, flagged sentences, Perplexity, and Burstiness.",
    "Complete the results table and write the 200-word reflection on false positives and false negatives."
  ],
  6: [
    "Go to notebooklm.google.com → click 'New Notebook' → name it '[Your Subject] — Exam Prep'.",
    "Upload 3+ source PDFs (lecture notes, textbook chapter, research paper) and wait for indexing.",
    "Ask Q1 (5 most important concepts) & Q2 (follow-up with example); click inline citations to verify.",
    "Ask Q3 (out-of-sources Elon Musk 2024 question) & confirm NotebookLM refuses to hallucinate.",
    "Open Notebook Guide → generate 'Study Guide' and 'FAQ' (attempt 3 exam questions without notes).",
    "Click 'Audio Overview', listen to the first 5 minutes, and record 3 points discussed."
  ],
  7: [
    "Open perplexity.ai, select Focus Mode: 'Academic', and enter your technical research question.",
    "Count inline citations [1], [2]... and click each to verify it opens a real source domain.",
    "Ask the SAME question to ChatGPT (without web search) and compare citations & 2024 freshness.",
    "Click 2 suggested Follow-up questions in Perplexity and note how the research thread builds.",
    "Switch Focus Mode to 'All' (web), re-ask the same question, and compare source quality vs. Academic.",
    "Pick 3 citations from Perplexity and verify each on Google Scholar (title, author, journal)."
  ],
  8: [
    "Part A: Open elicit.com → 'Start a Review' → enter your branch research question.",
    "Part A: Enable columns (AI Summary, Sample Size, Outcome, Methods) + custom column 'Accuracy / Performance Metric'.",
    "Part A: Review top 10 papers, log algorithm/dataset/accuracy, and identify an untested research gap.",
    "Part B: Open consensus.app, enter a scientific claim, and record the Consensus Meter %.",
    "Part B: Read 3 study snapshots, then apply 'Meta-analyses only' filter and note if consensus changes."
  ],
  9: [
    "Technique 1 (Zero-Shot): Run the basic PID prompt and rate 1–5 for Accuracy, Depth, and Usability.",
    "Technique 2 (One-Shot): Run the thermostat-analogy PID prompt and rate 1–5.",
    "Technique 3 (Few-Shot): Give 3 simple concept-explanation pairs, then ask for PID and rate 1–5.",
    "Technique 4 (Chain-of-Thought): Run the step-by-step P, I, D reasoning prompt and rate 1–5.",
    "Technique 5 (C-R-A-F-T): Run the full Context-Role-Action-Format-Tone prompt and complete the /15 table."
  ],
  10: [
    "Download a CSV dataset from Kaggle (100+ rows, 5+ columns) and upload it to Julius AI (or Excel Copilot).",
    "Request 1: Ask for a complete statistical summary (mean, median, SD, min, max) of numeric columns.",
    "Request 2 & 3: Ask for a histogram of the primary column & a correlation heatmap of all variables.",
    "Request 4: Ask to identify outliers in a key column and show which rows they are.",
    "Request 5 & 6: Ask for 3 pattern bullets + bar chart (category vs. avg numeric); verify engineering logic."
  ],
  11: [
    "Iteration 1 (Basic): Run 'A poster for a college technical fest' → download/screenshot & list 3 problems.",
    "Iteration 2 (S-S-C-C-L-D): Run the structured 6-element prompt → screenshot & list 2 remaining issues.",
    "Iteration 3 (Targeted): Modify ONLY those 2 elements → download final poster & write 100-word reflection."
  ],
  12: [
    "Part A: Paste a 4–6 sentence technical process paragraph (e.g., TCP handshake) into napkin.ai.",
    "Part A: Screenshot ALL proposed visual structures, select the best, edit 2 colours + 2 labels, export PNG.",
    "Part B: Open whimsical.com → New Mind Map → generate a B.Tech subject mind map.",
    "Part B: Compare with your syllabus, add 5 missing nodes, edit 3 labels, and export as PDF/PNG."
  ],
  13: [
    "Create a Miro board ('Smart Attendance System — Design') and share edit access with your 3–5 student team.",
    "Phase 1 (10 min): Each teammate adds 5+ sticky notes (features, hardware, challenges, data flow, privacy).",
    "Phase 2: Select all notes → Miro AI → 'Cluster and summarize'; screenshot and fix inaccurate labels.",
    "Phase 3: Generate an AI Mind Map (add 3 missed nodes) + AI Flowchart for check-in; export board as PNG."
  ],
  14: [
    "Write a ~150–180 word (60-sec) script describing your technical project.",
    "Open elevenlabs.io → Text to Speech → choose a clear, professional English voice.",
    "Set Stability: 0.65, Similarity: 0.75, Style Exaggeration: 0.20 → click Generate and listen carefully.",
    "Fix any mispronounced acronyms phonetically (e.g., 'C-N-N'), regenerate, and download as MP3.",
    "Write the required AI voiceover disclosure statement in your lab journal."
  ],
  15: [
    "Part A: Collect 3 online text samples (200–300 words: social post, news, forum) and test in GPTZero.",
    "Part A: Record AI %, flagged sentences, perplexity, and write a 2-sentence judgment for each.",
    "Part B: Collect 3 suspicious online images and reverse-search each on Google Lens & TinEye.",
    "Part B: Inspect visual artefacts (hands, text, hair, backgrounds) & write the 150-word reflection."
  ],
  16: [
    "Task 1: Paste the binary search comment block in VS Code/Copilot Chat, generate code, and test 4 inputs.",
    "Task 2: Paste mystery_function (bubble sort) and ask Copilot for line-by-line explanation & time complexity.",
    "Task 3: Paste the buggy SQLite get_user function & ask Copilot to find all bugs and security flaws."
  ],
  17: [
    "Download a Kaggle CSV (200+ rows, 5+ cols) and upload it to ChatGPT ADA or Julius AI.",
    "Steps 1–2: Run Data Profiling (types, missing values, first 5 rows) and Descriptive Statistics table.",
    "Steps 3–4: Generate a Histogram grid (screenshot) and Correlation Heatmap (find top correlated pair).",
    "Steps 5–6: Run IQR Outlier Detection (top 5 rows) and ask for 3 engineering pattern insights.",
    "Step 7: Ask for an engineering hypothesis + test, then critically correct any flawed AI interpretations."
  ],
  18: [
    "Choose an app idea (Event Reg / Lost & Found / Equipment Booking / Study Group) & pick Bubble or Glide.",
    "Build UI & Data: Design Home/Results pages & workflow (Bubble) OR connect Google Sheet & layout (Glide).",
    "Add AI Feature: Integrate OpenAI plugin workflow (Bubble) OR add an AI Column (Glide) + Submit form.",
    "Preview/test end-to-end, Launch/Publish, and record the live URL/QR code + 1 no-code limitation."
  ],
  19: [
    "Step 1: Solve Problems 1 (Calculus), 2 (Eigenvalues), 3 (ODE), and 4 (Branch-specific) MANUALLY first.",
    "Step 2: Verify all problems in Wolfram Alpha and compare answers with your manual solutions.",
    "Step 3: Enter problems in Symbolab, compare step-by-step working, and note any errors in your manual work."
  ],
  20: [
    "Run the Branch AI Tool prompt in Claude or ChatGPT to generate 5 branch-specific AI tools.",
    "Verify EACH tool on: (a) Official website, (b) Google Scholar, (c) LinkedIn company page, (d) YouTube demo.",
    "Discard any tool failing 2+ checks and find a real replacement; complete the verification table.",
    "Write the 200-word comparative analysis and prepare a 3-minute presentation."
  ],
  21: [
    "Open the COMPAS sample CSV in Google Sheets (columns: race, decile_score, two_year_recid).",
    "Build 2x2 confusion matrices (TP, FP, TN, FN; score >= 5 = High Risk) for Black & White defendants using COUNTIFS().",
    "Compute FPR, FNR, Precision, Recall, and Accuracy for both groups and calculate Disparity Ratios.",
    "Write a 100-word response applying Blackman's transparency/consent test."
  ],
  22: [
    "Part A: Read OpenAI, Anthropic, and Google Gemini privacy policies directly & fill the comparison table.",
    "Part B: Classify all 8 data items as SAFE / CONDITIONAL / NEVER with DPDP Act 2023 reasoning.",
    "Part C: Turn OFF training data in ChatGPT Settings & pause Gemini Apps Activity; screenshot both."
  ],
  23: [
    "Review the 4 EU AI Act risk tiers (Unacceptable, High, Limited, Minimal).",
    "Select 5 daily-use AI systems from the manual's list (e.g., Maps, Turnitin, Credit Fraud, Hiring, Medical AI).",
    "For each system, document function, affected person, worst harm, Risk Tier, provision, and obligations."
  ],
  24: [
    "Phase 1: Write your Problem Statement and list 3+ AI tool categories BEFORE using any AI tool.",
    "Phase 2: Use Tool 1 (Research), Tool 2 (Writing), and Tool 3 (Visual/Data), logging all prompts & edits.",
    "Phase 3: Fact-check 5 claims against primary sources, run Grammarly, and test 1 section in GPTZero.",
    "Phase 4: Write the complete Responsible AI Disclosure (tools, prompts, data, verification, human work)."
  ],
  25: [
    "Build 5–8 slides matching the timed structure (Title, Problem 45s, Workflow 90s, Demo 75s, Verification 30s, Disclosure 30s).",
    "Practice 3 timed runs to finish consistently in 5:00–5:30 and keep all raw prompts ready for Q&A.",
    "Deliver your 5-minute demo and answer 2–3 evaluator Q&A questions."
  ]
};