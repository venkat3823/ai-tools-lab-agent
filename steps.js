const LAB_STEPS = {
  1: [
    {
      text: "Part A: Open ChatGPT and run the 5 sentence completions prompt ('The future of AI will ___').",
      noteDown: "Whether all 5 completions differed from each other (Yes/No) for Row 5 of your table.",
      transition: "Stay in the same ChatGPT chat, copy the 'Next-Word (<100w)' prompt, and click Next ▶."
    },
    {
      text: "Part A: Ask ChatGPT to explain next-word prediction (<100 words), then ask about temperature 2.0.",
      noteDown: "Record both explanations in your lab journal.",
      transition: "Stay in ChatGPT, copy the 'Mars Sci-Fi' prompt, and click Next ▶."
    },
    {
      text: "Part A: Run the Mars sci-fi opening line prompt 3 separate times.",
      noteDown: "Note whether the 3 outputs differ and explain why (probabilistic generation).",
      transition: "Click 'New Chat' in ChatGPT so Part B starts fresh, copy 'Hallucination Test', and click Next ▶."
    },
    {
      text: "Part B: Ask ChatGPT for 5 IEEE papers (2022–2024) on transformer attention with author names & DOIs.",
      noteDown: "Copy all 5 generated citations and DOIs into your lab journal.",
      transition: "Switch to the Google Scholar tab and the doi.org tab, then click Next ▶."
    },
    {
      text: "Part B: Search each paper title in double quotes on Google Scholar and test the DOIs on doi.org.",
      noteDown: "Row 1: Number of citations verified on Scholar. Row 2: Number of DOIs that resolved correctly.",
      transition: "Open a New Chat in BOTH ChatGPT and Claude, copy 'ChatGPT vs Claude', and click Next ▶."
    },
    {
      text: "Part C: Ask BOTH ChatGPT and Claude the identical context window prompt and compare them.",
      noteDown: "Rows 3–4: Word counts of ChatGPT & Claude. Row 6: Which platform was more accurate (your judgment).",
      transition: "Lab 1 complete! Fill your Observation Table and review the 4 Viva questions."
    }
  ],
  2: [
    {
      text: "Sign in to gamma.app → click 'Create New' → 'Generate' → select 'Presentation'.",
      noteDown: "Start a timer before submitting your prompt in the next step.",
      transition: "Copy 'Gamma 10-Slide Prompt', paste it into Gamma, and click Next ▶."
    },
    {
      text: "Customize the 10-slide prompt to your B.Tech topic, review the outline, and click 'Generate Presentation'.",
      noteDown: "Row 1: Time taken by Gamma.app to generate 10 slides (in seconds).",
      transition: "Scroll through every generated slide carefully, then click Next ▶."
    },
    {
      text: "Audit all slides: find 3 accurate statements, 1 statement needing verification, and 1 layout to redesign.",
      noteDown: "Row 3: Number of factual statements needing verification. Row 6: Slide needing most human improvement.",
      transition: "Click on slide text, theme/colour, and image controls inside Gamma, then click Next ▶."
    },
    {
      text: "Make 3+ manual edits (edit text, change theme/colour, add a custom image) and copy the Share link or export.",
      noteDown: "Row 4: Number of manual edits made. Row 5: Overall quality rating (1–5, your judgment).",
      transition: "Open PowerPoint (or Google Slides) in a new window/tab to time manual creation, then click Next ▶."
    },
    {
      text: "Manually create 2 equivalent slides on the same topic in PowerPoint/Slides and time yourself.",
      noteDown: "Row 2: Time taken to manually create 2 slides (in minutes).",
      transition: "Lab 2 complete! Complete your Observation Table and Viva answers."
    }
  ],
  3: [
    {
      text: "Part A: Open Copilot in Word (or copilot.microsoft.com) and run 'Part A: Draft Intro' (300-word viscometer intro).",
      noteDown: "Row 1: Word count of generated Intro. Row 5: Estimated minutes saved vs. manual writing.",
      transition: "Paste the generated text into your document, read carefully, and click Next ▶."
    },
    {
      text: "Part A: Highlight claims needing verification or generic sentences in yellow, then fix them with real notes.",
      noteDown: "Row 2: Number of sentences requiring fact-verification.",
      transition: "Start a new section (or new Copilot chat), paste 'Part B: Weak Paragraph', and click Next ▶."
    },
    {
      text: "Part B: Paste the weak oil-heating paragraph and ask Copilot to rewrite it formally for a B.Tech lab report.",
      noteDown: "Row 3: Record 3 specific technical terms/improvements added by Copilot.",
      transition: "Open a new Copilot chat (or upload/paste a 5–10 page subject PDF), then click Next ▶."
    },
    {
      text: "Part C: Ask Copilot to summarize your 5–10 page PDF in 5 bullet points + 3 key concepts.",
      noteDown: "Row 4: Were all 5 bullets accurate? (Yes/Partially/No). Row 6: Overall usefulness rating (1–5).",
      transition: "Lab 3 complete! Save your document and fill the Observation Table."
    }
  ],
  4: [
    {
      text: "Open app.grammarly.com, create a new document, and paste your 200–250 word paragraph (or the Sample Error Paragraph).",
      noteDown: "Save a copy of your original unedited text for comparison.",
      transition: "Click the 'Goals' button in Grammarly's right sidebar, then click Next ▶."
    },
    {
      text: "Set Goals → Audience: Expert, Formality: Formal, Domain: Academic.",
      noteDown: "Row 1: Grammarly Score BEFORE accepting any suggestions.",
      transition: "Open the suggestion cards in the right panel, then click Next ▶."
    },
    {
      text: "Review Correctness (red), Clarity (blue), Engagement (green), and Delivery (purple); accept or reject each.",
      noteDown: "Rows 3–4: Count of Correctness & Clarity issues. Row 6: Number of rejected suggestions + reasons.",
      transition: "Check the top-right Score, Tone Detector, and Plagiarism tab (if Premium), then click Next ▶."
    },
    {
      text: "Check your updated Grammarly Score, Tone Detector, and Plagiarism % (if Premium).",
      noteDown: "Row 2: Score AFTER. Row 5: Detected tone. Row 7: Plagiarism %. Write a 3-sentence reflection.",
      transition: "Lab 4 complete! Fill your Observation Table and Viva answers."
    }
  ],
  5: [
    {
      text: "Prepare 5 text samples (250–350w): A (Your own), B (Raw ChatGPT), C (60% rewritten), D (Textbook/Wiki), E (Minimally edited).",
      noteDown: "Before testing, write down your predicted AI % for Samples A–E in your journal.",
      transition: "Switch to the gptzero.me tab (sign in if needed) and click Next ▶."
    },
    {
      text: "Paste Sample A (your own writing) into GPTZero and click 'Get Results'.",
      noteDown: "Row A: Actual AI %, flagged sentences count, Perplexity, Burstiness, and screenshot.",
      transition: "Clear the GPTZero text box, paste Sample B (Raw ChatGPT), and click Next ▶."
    },
    {
      text: "Test Samples B, C, D, and E one by one in GPTZero.",
      noteDown: "Rows B–E: Actual AI %, flagged sentences, Perplexity, Burstiness, and whether prediction matched.",
      transition: "Open your lab journal to analyze false positives/negatives, then click Next ▶."
    },
    {
      text: "Write a 200-word reflection on false positives, false negatives, rewriting threshold, and academic proof.",
      noteDown: "Identify which human sample scored high (false positive) and which AI sample escaped (false negative).",
      transition: "Lab 5 complete! Attach your GPTZero screenshots to your lab record."
    }
  ],
  6: [
    {
      text: "Open notebooklm.google.com → click 'New Notebook' → name it '[Your Subject] — Exam Prep' and upload 3+ PDFs.",
      noteDown: "Row 1: Number of sources successfully indexed.",
      transition: "Wait for indexing to finish, click the Chat box, copy Q1, and click Next ▶."
    },
    {
      text: "Ask Q1 (5 most important concepts) and Q2 (explain Concept 1 with example), then click inline citations.",
      noteDown: "Row 5: Were citations clickable and accurate? (Yes/No/Partially). Record source names.",
      transition: "Stay in the NotebookLM chat, copy Q3 (Out-of-Sources Test), and click Next ▶."
    },
    {
      text: "Ask Q3 ('What did Elon Musk say about AI in 2024?') to test out-of-source grounding.",
      noteDown: "Row 2: Did Q3 get hallucinated or correctly deferred?",
      transition: "Open the 'Notebook Guide' / Studio panel on the right, then click Next ▶."
    },
    {
      text: "Generate a 'Study Guide' and 'FAQ', then click 'Audio Overview' and listen to the first 5 minutes.",
      noteDown: "Row 3: Exam-style FAQ matches. Row 4: Audio duration (min) + 3 points. Row 6: Study Guide syllabus matches.",
      transition: "Lab 6 complete! Screenshot the Study Guide and complete your Observation Table."
    }
  ],
  7: [
    {
      text: "Open perplexity.ai, select Focus Mode: 'Academic', and submit your technical research question.",
      noteDown: "Row 1: Total inline citations generated. Row 2: Count of citations that open real sources + domains.",
      transition: "Switch to the ChatGPT tab (keep web search OFF), paste the SAME question, and click Next ▶."
    },
    {
      text: "Ask the exact same question to ChatGPT without web search and compare citations & recency.",
      noteDown: "Row 4: Did ChatGPT give real citations? (Yes/No). Row 5: Did Perplexity have newer 2024 info?",
      transition: "Switch back to the Perplexity tab, scroll to suggested Follow-ups, and click Next ▶."
    },
    {
      text: "Click 2 Follow-up questions in Perplexity, then start a new thread with Focus Mode: 'All' (web) on the same question.",
      noteDown: "Row 6: Which Focus Mode gave better academic-quality sources? Note differences in depth.",
      transition: "Switch to the Google Scholar tab with 3 Perplexity paper titles ready, then click Next ▶."
    },
    {
      text: "Verify 3 citations from Perplexity on Google Scholar (check title, author, and journal/conference).",
      noteDown: "Row 3: Number of citations verified on Google Scholar (out of 3 tested).",
      transition: "Lab 7 complete! Fill both your Sample Input and Observation tables."
    }
  ],
  8: [
    {
      text: "Part A: Open elicit.com → click 'Start a Review' / 'Find papers' and submit your branch research question.",
      noteDown: "Row 1: Number of papers retrieved by Elicit.",
      transition: "Look at the right edge of the Elicit table for '+ Add columns', then click Next ▶."
    },
    {
      text: "Part A: Enable columns ('AI Summary', 'Sample Size', 'Outcome', 'Methods') + add custom column 'Accuracy / Performance Metric'.",
      noteDown: "Row 6: Note whether Elicit's AI summaries accurately reflect the paper content.",
      transition: "Scroll through the first 10 rows of the Elicit table (use Snap & Log if helpful), then click Next ▶."
    },
    {
      text: "Part A: Review the first 10 papers, log Algorithm, Dataset, and Accuracy, and spot an untested Algorithm + Dataset gap.",
      noteDown: "Row 2: Most common algorithm. Row 3: Untested Algorithm + Dataset research gap.",
      transition: "Switch to the consensus.app tab, copy a Part B claim, and click Next ▶."
    },
    {
      text: "Part B: Search your claim on Consensus, check the Consensus Meter + 3 study snapshots, then filter by 'Meta-analyses only'.",
      noteDown: "Row 4: Overall Consensus Meter %. Row 5: Meta-analyses only % supporting.",
      transition: "Lab 8 complete! Complete your 5-paper table and Observation Table."
    }
  ],
  9: [
    {
      text: "Technique 1 (Zero-Shot): Paste '1. Zero-Shot' in ChatGPT/Claude and read the PID explanation.",
      noteDown: "Zero-Shot row: Prompt length (words), Output length (words), and your manual 1–5 ratings (Accuracy, Depth, Usability, Total /15).",
      transition: "Click 'New Chat' so Zero-Shot doesn't bias the next test, copy '2. One-Shot', and click Next ▶."
    },
    {
      text: "Technique 2 (One-Shot): Paste '2. One-Shot' in a fresh chat and evaluate the analogy-driven PID output.",
      noteDown: "One-Shot row: Prompt words, Output words, and your manual 1–5 ratings (Accuracy, Depth, Usability, Total /15).",
      transition: "Click 'New Chat', copy '3. Few-Shot (3 Examples)', and click Next ▶."
    },
    {
      text: "Technique 3 (Few-Shot): Paste '3. Few-Shot' (3 concept-explanation pairs + PID request) in a fresh chat.",
      noteDown: "Few-Shot row: Prompt words, Output words, and your manual 1–5 ratings (Accuracy, Depth, Usability, Total /15).",
      transition: "Click 'New Chat', copy '4. Chain-of-Thought', and click Next ▶."
    },
    {
      text: "Technique 4 (Chain-of-Thought): Paste '4. Chain-of-Thought' in a fresh chat and check step-by-step reasoning.",
      noteDown: "Chain-of-Thought row: Prompt words, Output words, and your manual 1–5 ratings (Accuracy, Depth, Usability, Total /15).",
      transition: "Click 'New Chat', copy '5. Full C-R-A-F-T', and click Next ▶."
    },
    {
      text: "Technique 5 (C-R-A-F-T): Paste '5. Full C-R-A-F-T' in a fresh chat and compare against all previous outputs.",
      noteDown: "C-R-A-F-T row: Prompt words, Output words, and your manual 1–5 ratings (Accuracy, Depth, Usability, Total /15).",
      transition: "Lab 9 complete! Compare all 5 total scores in your table and answer the Viva questions."
    }
  ],
  10: [
    {
      text: "Download a CSV dataset from Kaggle (100+ rows, 5+ columns) and upload it to Julius AI (or Excel Copilot).",
      noteDown: "Row 1: Dataset name & Kaggle URL. Row 2: Exact number of rows and columns.",
      transition: "Copy '1. Statistical Summary', paste it into Julius AI, and click Next ▶."
    },
    {
      text: "Run Request 1 (Statistical Summary) and Request 2 (Histogram of the primary numeric column).",
      noteDown: "Row 3: Mean of the primary numeric variable. Screenshot the histogram.",
      transition: "Stay in Julius AI, copy '3. Correlation Heatmap' & '4. Outlier Detection', and click Next ▶."
    },
    {
      text: "Run Request 3 (Correlation Heatmap) and Request 4 (Outlier Detection).",
      noteDown: "Row 4: Correlation coefficient of the 2 most-correlated variables. Row 5: Number of outliers identified.",
      transition: "Stay in Julius AI, copy '5. Pattern Summary' & '6. Bar Chart', and click Next ▶."
    },
    {
      text: "Run Request 5 (3 Pattern Bullets) and Request 6 (Bar Chart), then critically evaluate engineering sense.",
      noteDown: "Row 6: Were AI patterns meaningful? (Yes/No/Partially). Row 7: Any pattern AI missed that you spotted.",
      transition: "Lab 10 complete! Attach screenshots of your charts and fill the Observation Table."
    }
  ],
  11: [
    {
      text: "Iteration 1 (Basic): Open Copilot Image Creator (or Canva AI) and run 'A poster for a college technical fest.'",
      noteDown: "Download/screenshot Iteration 1. Row 1: Quality rating (1–5). List 3 specific problems with the result.",
      transition: "Copy 'Iteration 2 (S-S-C-C-L-D)', customize [Event name], and click Next ▶."
    },
    {
      text: "Iteration 2 (S-S-C-C-L-D): Submit the full 6-element structured prompt and inspect the new poster.",
      noteDown: "Download/screenshot Iteration 2. Row 2: Quality rating (1–5). List 2 remaining improvements needed.",
      transition: "Copy your Iteration 2 prompt, edit ONLY those 2 elements, and click Next ▶."
    },
    {
      text: "Iteration 3 (Targeted): Submit the refined prompt, download your final poster, and compare all 3 side-by-side.",
      noteDown: "Rows 3–6: Iteration 3 rating (1–5), most impactful S-S-C-C-L-D element, legible text? (Y/N), usable? Write 100-word reflection.",
      transition: "Lab 11 complete! Place all 3 poster images side-by-side in your lab record."
    }
  ],
  12: [
    {
      text: "Part A: Open napkin.ai → New Napkin → paste the TCP handshake paragraph (or your own 4–6 sentence process text).",
      noteDown: "Click the sparkle/generate icon and screenshot ALL 2–4 proposed visual structures before choosing.",
      transition: "Select the best diagram inside Napkin.ai to customize it, then click Next ▶."
    },
    {
      text: "Part A: Change at least 2 colours, refine 2 labels for precision, and export the diagram as PNG.",
      noteDown: "Row 1: Visual structure detected by Napkin.ai. Row 2: Did it detect correctly? (Yes/No/Partially).",
      transition: "Switch to the whimsical.com tab → New File → Mind Map, then click Next ▶."
    },
    {
      text: "Part B: Type your subject in the central node and run 'Part B: Whimsical Mind Map' to generate branches.",
      noteDown: "Rows 3–5: Count topics matching syllabus, missing from map, and extra topics not in syllabus.",
      transition: "Edit the mind map directly in Whimsical, then click Next ▶."
    },
    {
      text: "Part B: Add 5 missing syllabus nodes, edit 3 labels for precision, and export as PDF or PNG.",
      noteDown: "Row 6: Estimated time manually vs. using AI.",
      transition: "Lab 12 complete! Attach your Napkin PNG and Whimsical export to your lab record."
    }
  ],
  13: [
    {
      text: "Create a Miro board named 'Smart Attendance System — Design' and share 'Anyone with link can edit' with 3–5 teammates.",
      noteDown: "Confirm all teammates are on the board before starting the 10-minute brainstorm.",
      transition: "Double-click the board to start placing sticky notes, then click Next ▶."
    },
    {
      text: "Phase 1 (10 min): Each teammate adds 5+ sticky notes (features, hardware, challenges, data flow, privacy).",
      noteDown: "Row 1: Total sticky notes added by the team.",
      transition: "Drag-select all sticky notes and click the Miro AI sparkle icon, then click Next ▶."
    },
    {
      text: "Phase 2: Click Miro AI → 'Cluster and summarize', screenshot the clusters, and rename inaccurate labels.",
      noteDown: "Row 2: Number of clusters created. Row 3: Were cluster labels accurate? (All/Most/Some/Few).",
      transition: "Open the Miro AI sidebar, copy 'Miro AI Mind Map' & 'Miro AI Flowchart', and click Next ▶."
    },
    {
      text: "Phase 3: Generate the AI Mind Map (add 3 missed nodes) and AI Flowchart for student check-in, then export PNG.",
      noteDown: "Row 4: Nodes added manually. Row 5: Flowchart accurate? (Y/N). Row 6: Estimated time saved.",
      transition: "Lab 13 complete! Export the full board as PNG for your lab record."
    }
  ],
  14: [
    {
      text: "Prepare your ~150–180 word (60-sec) project script (or copy the Sample Script) and open elevenlabs.io → Text to Speech.",
      noteDown: "Check your word count (~150–180 words targets 60 seconds).",
      transition: "Browse the Voice Library, preview voices, and pick a clear professional English voice, then click Next ▶."
    },
    {
      text: "Paste your script, set Stability: 0.65, Similarity: 0.75, Style Exaggeration: 0.20, and click Generate.",
      noteDown: "Row 1: Voice name. Row 2: Stability setting. Row 3: Count of mispronounced technical terms.",
      transition: "Listen carefully for mispronounced acronyms, edit them phonetically in the text box, and click Next ▶."
    },
    {
      text: "Rewrite mispronounced acronyms phonetically (e.g., 'C-N-N'), regenerate, download MP3, and write the disclosure.",
      noteDown: "Rows 4–7: Rewritten terms list, final audio duration (sec), naturalness (1–5), seminar-ready? + Ethical Disclosure.",
      transition: "Lab 14 complete! Save the MP3 and include the disclosure in your lab record."
    }
  ],
  15: [
    {
      text: "Part A: Collect 3 online text samples (200–300w: social post, news article, student forum) and test each in gptzero.me.",
      noteDown: "Items 1–3: Source, GPTZero AI %, perplexity, flagged sentences, and a 2-sentence judgment for each.",
      transition: "Switch to lens.google.com and tineye.com with 3 suspicious online images ready, then click Next ▶."
    },
    {
      text: "Part B: Upload all 3 images to Google Lens and TinEye to check if they appear on news sites or AI art galleries.",
      noteDown: "Items 4–6: Match/No match results from Google Lens and TinEye.",
      transition: "Zoom in on each image to inspect hands, text, hair edges, and backgrounds, then click Next ▶."
    },
    {
      text: "Part B: Record visual artefacts found and write your 150-word critical reflection on tool reliability.",
      noteDown: "Artefacts found + Final Judgment for Items 4–6, plus the 150-word reflection.",
      transition: "Lab 15 complete! Complete your 6-item table and Viva answers."
    }
  ],
  16: [
    {
      text: "Task 1: Open VS Code Copilot (or github.com/copilot), paste 'Task 1: Binary Search', generate code, and test 4 inputs.",
      noteDown: "Row 1: Correctly generated? (Yes/No/Partially). Row 2: Test result for binary_search([1,3,5,7,9,11], 7).",
      transition: "Paste 'Task 2: Mystery Function' + 'Task 2: Explain Prompt' into Copilot Chat, then click Next ▶."
    },
    {
      text: "Task 2: Ask Copilot Chat to explain mystery_function line by line, identify the algorithm, and give time complexity.",
      noteDown: "Row 3: Algorithm name (Bubble Sort). Row 4: Time complexity identified by Copilot.",
      transition: "Paste 'Task 3: Buggy SQL Code' + 'Task 3: Security Review' into Copilot Chat, then click Next ▶."
    },
    {
      text: "Task 3: Review all bugs and security vulnerabilities Copilot finds in get_user(username).",
      noteDown: "Rows 5–7: Total bugs found, SQL injection caught? (Y/N), unreachable conn.close() caught? (Y/N).",
      transition: "Lab 16 complete! Record the corrected parameterized SQLite code in your journal."
    }
  ],
  17: [
    {
      text: "Download a Kaggle CSV (200+ rows, 5+ cols), upload it to ChatGPT ADA or Julius AI, and run Step 1 (Data Profiling).",
      noteDown: "Row 1: Dataset name & rows/columns. Row 2: Number of columns with missing values.",
      transition: "Copy 'Step 2: Stats Table' & 'Step 3: Histogram Grid', run them in the same chat, and click Next ▶."
    },
    {
      text: "Run Step 2 (Descriptive Statistics) and Step 3 (Histogram Grid).",
      noteDown: "Row 3: Variable with highest standard deviation. Screenshot the histogram grid.",
      transition: "Copy 'Step 4: Correlation' & 'Step 5: IQR Outliers', run them in the same chat, and click Next ▶."
    },
    {
      text: "Run Step 4 (Correlation Heatmap) and Step 5 (IQR Outlier Detection).",
      noteDown: "Row 4: Two most-correlated variables + coefficient. Row 5: Total outliers detected across columns.",
      transition: "Copy 'Step 6: Insights' & 'Step 7: Hypothesis', run them in the same chat, and click Next ▶."
    },
    {
      text: "Run Step 6 (3 Engineering Insights) and Step 7 (Hypothesis Test), then critique and correct flawed AI claims.",
      noteDown: "Row 6: Number of AI interpretations needing correction. Row 7: Most surprising pattern found.",
      transition: "Lab 17 complete! Save your charts and fill the Observation Table."
    }
  ],
  18: [
    {
      text: "Pick an app idea (Event Reg / Lost & Found / Lab Booking / Study Group) and choose Bubble.io (web) or Glide (mobile).",
      noteDown: "Row 1: App name & concept. Row 2: Platform used (Bubble or Glide).",
      transition: "Create your blank app in Bubble OR prepare your Google Sheet for Glide, then click Next ▶."
    },
    {
      text: "Build UI & Workflow: Add Home/Results pages + button workflow (Bubble) OR connect Sheet + choose layout & Submit form (Glide).",
      noteDown: "Row 3: Number of pages/screens in your app.",
      transition: "Open Plugins in Bubble (OpenAI) OR Data Editor in Glide (+ AI Column), then click Next ▶."
    },
    {
      text: "Add AI Feature: Connect OpenAI workflow (Bubble) OR add an AI Column like 'Generate Description from Item Name' (Glide).",
      noteDown: "Row 4: Describe the exact AI feature implemented.",
      transition: "Click 'Preview' to test end-to-end, then click 'Launch' / 'Publish' and click Next ▶."
    },
    {
      text: "Test your deployed app end-to-end and copy the live URL or QR code.",
      noteDown: "Rows 5–7: Works end-to-end? (Y/N/Partially), Live URL/QR code, and 1 no-code limitation encountered.",
      transition: "Lab 18 complete! Save screenshots of your live app for your lab record."
    }
  ],
  19: [
    {
      text: "Step 1: Solve Problems 1 (Calculus), 2 (Eigenvalues), 3 (ODE), and 4 (Branch-specific) MANUALLY on paper first.",
      noteDown: "Column 1 of Observation Table: Record all 4 manual answers before opening math tools.",
      transition: "Switch to the wolframalpha.com tab, copy Problems 1–3, and click Next ▶."
    },
    {
      text: "Step 2: Enter Problems 1–4 into Wolfram Alpha and compare each answer against your manual solution.",
      noteDown: "Column 2: Record all 4 Wolfram Alpha answers and note if intermediate steps were shown.",
      transition: "Switch to the symbolab.com tab and enter the same problems, then click Next ▶."
    },
    {
      text: "Step 3: Verify Problems 1–4 in Symbolab and compare its step-by-step working with your manual steps.",
      noteDown: "Columns 3–5: Symbolab answers, Match? (Y/N), and exact error found in your manual working.",
      transition: "Lab 19 complete! Review the Viva questions on why Wolfram/Symbolab beat LLMs for math."
    }
  ],
  20: [
    {
      text: "Open Claude or ChatGPT, customize [YOUR BRANCH] in 'Branch AI Tool Prompt', and generate 5 branch-specific AI tools.",
      noteDown: "Record all 5 suggested tool names, developers, AI techniques, and problems solved.",
      transition: "Open Google Search, Google Scholar, Semantic Scholar, LinkedIn, and YouTube tabs, then click Next ▶."
    },
    {
      text: "Verify EACH tool across 4 checks: (a) Official website, (b) Google Scholar paper, (c) LinkedIn company, (d) YouTube demo.",
      noteDown: "Fill every column of the 5-tool verification table (discard & replace any tool failing 2+ checks).",
      transition: "Open your lab journal to write the comparative analysis, then click Next ▶."
    },
    {
      text: "Write a 200-word comparative analysis (top 2 impactful tools + hardest to verify) and prepare a 3-min presentation.",
      noteDown: "Ensure all 5 final tools are marked 'Verified' with real URLs.",
      transition: "Lab 20 complete! Review the 4 Viva questions."
    }
  ],
  21: [
    {
      text: "Open the 100-row COMPAS sample CSV in Google Sheets (columns: race, decile_score, two_year_recid).",
      noteDown: "Confirm High Risk threshold is decile_score >= 5 and recidivism is two_year_recid = 1.",
      transition: "Set up two 2x2 confusion matrix blocks (Black & White defendants) in Sheets, then click Next ▶."
    },
    {
      text: "Use COUNTIFS() in Google Sheets to compute TP, FP, TN, FN for BOTH Black and White defendants.",
      noteDown: "Record TP, FP, TN, FN counts for both groups.",
      transition: "Add formula cells for FPR, FNR, Precision, Recall, and Accuracy below your matrices, then click Next ▶."
    },
    {
      text: "Calculate FPR, FNR, Precision, Recall, Accuracy for both groups and compute Disparity Ratios (Black / White).",
      noteDown: "Fill all 5 rows of your Observation Table and note the FPR disparity factor.",
      transition: "Open your lab journal to answer Blackman's transparency test, then click Next ▶."
    },
    {
      text: "Write a 100-word response to Blackman's transparency/consent test for high-risk COMPAS defendants.",
      noteDown: "Connect your FPR disparity numbers directly to your ethical argument.",
      transition: "Lab 21 complete! Review the Impossibility Theorem Viva question."
    }
  ],
  22: [
    {
      text: "Part A: Read OpenAI, Anthropic, and Google Gemini privacy policy pages directly (not from memory).",
      noteDown: "Fill all 5 rows of the Policy Comparison Table (training default, retention, opt-out, human review, safest plan).",
      transition: "Move to Part B (Data Classification table) in your lab journal, then click Next ▶."
    },
    {
      text: "Part B: Classify all 8 data items as SAFE / CONDITIONAL / NEVER and cite the India DPDP Act 2023 reason.",
      noteDown: "Complete all 8 rows (Name/Roll No., Patient diagnosis, Generic Python, Unreleased specs, etc.).",
      transition: "Switch to ChatGPT Settings → Data Controls and Google Account → Gemini Apps Activity, then click Next ▶."
    },
    {
      text: "Part C: Turn OFF 'Improve the model for everyone' in ChatGPT and pause 'Gemini Apps Activity'.",
      noteDown: "Take screenshots of BOTH opt-out settings for your lab record.",
      transition: "Lab 22 complete! Review the 7-rule personal data safety protocol for Viva."
    }
  ],
  23: [
    {
      text: "Review the 4 EU AI Act risk tiers (Unacceptable, High, Limited, Minimal) and pick 5 daily-use AI systems from the manual.",
      noteDown: "List your 5 chosen systems (e.g., Google Maps, Turnitin, Credit Fraud, Hiring AI, Medical Imaging AI).",
      transition: "Analyze each system one by one against EU AI Act provisions, then click Next ▶."
    },
    {
      text: "For each of the 5 systems, document: What it does, Affected person, Most serious harm, EU AI Act Tier, Provision, and Obligations.",
      noteDown: "Complete all 5 rows of your Observation Table with specific legal/tier justifications.",
      transition: "Lab 23 complete! Review the Viva questions (especially railway facial recognition & Indian companies)."
    }
  ],
  24: [
    {
      text: "Phase 1: Write your Problem Statement and select 3+ AI tool categories BEFORE opening any AI tool.",
      noteDown: "Row 1 of Status Table: Completed Problem Statement + tool justification.",
      transition: "Launch your chosen Research, Writing, and Visual/Data tools, then click Next ▶."
    },
    {
      text: "Phase 2: Execute Tool 1 (Research), Tool 2 (Writing), and Tool 3 (Visual/Data), saving every prompt & human edit.",
      noteDown: "Rows 2–4: URLs/Screenshots, exact prompts used, and specific modifications you made.",
      transition: "Open primary sources, Grammarly, and GPTZero to verify your deliverable, then click Next ▶."
    },
    {
      text: "Phase 3: Fact-check 5 specific claims against primary sources, run Grammarly, and check 1 section in GPTZero.",
      noteDown: "Rows 5–6: 5 verified claims, Grammarly score/edits, and GPTZero AI %.",
      transition: "Copy 'AI Disclosure Template' into your final document, then click Next ▶."
    },
    {
      text: "Phase 4: Write your complete Responsible AI Disclosure (tools, prompts, data entered, retention check, human contribution).",
      noteDown: "Row 7: Complete Responsible AI Disclosure section attached to your deliverable.",
      transition: "Lab 24 complete! Keep all prompts saved for your Lab 25 presentation Q&A."
    }
  ],
  25: [
    {
      text: "Build a 5–8 slide deck (Gamma/PowerPoint) matching the exact timed structure (Title, Problem 45s, Workflow 90s, Demo 75s, Verify 30s, Disclosure 30s).",
      noteDown: "Verify your slides show at least 1 AI-generated element and 1 human-refined element clearly.",
      transition: "Open a 5-minute timer on your phone/browser for rehearsal, then click Next ▶."
    },
    {
      text: "Practice 3 timed runs until you finish consistently in 5:00–5:30, and keep all raw Lab 24 prompts ready for Q&A.",
      noteDown: "Record your 3 rehearsal times and prepare answers for the 5 evaluator Q&A questions.",
      transition: "Present your 5-minute demo in class and answer evaluator Q&A.",
      transition: "Deliver your 5-minute Capstone Demo and complete the Lab 25 Viva questions!"
    }
  ]
};