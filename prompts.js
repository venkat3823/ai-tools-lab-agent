const LAB_PROMPTS = {
  1: [
    { label: "Part A: Next-Token", text: "Complete the following sentence in 5 different ways: The future of artificial intelligence will ___" },
    { label: "Part A: Temperature 2.0", text: "What happens to the output if I increase the temperature parameter to 2.0 in a language model?" },
    { label: "Part B: Hallucination Test", text: "List 5 research papers published in IEEE Transactions on Neural Networks between 2022-2024 about transformer attention mechanisms. Include author names, volume, and DOI." },
    { label: "Part C: ChatGPT vs Claude", text: "Explain the context window limitation of LLMs and how it affects long-document processing. Give a concrete example." }
  ],
  2: [
    { label: "Gamma 10-Slide Prompt", text: "Create a 10-slide presentation on [YOUR TOPIC, e.g., Renewable Energy Sources for Engineering Students]. Include: Introduction, types, working principles, advantages, challenges, real-world examples, future trends, and a conclusion. Audience: B.Tech 2nd year students. Tone: technical but accessible." }
  ],
  3: [
    { label: "Part A: Draft Intro", text: "Draft a formal Introduction section for a B.Tech mechanical engineering lab report on measuring the viscosity of engine oil at different temperatures using a Redwood viscometer. Include: background theory, objective of the experiment, and real-world engineering relevance. Length: 300 words. Formal academic tone." },
    { label: "Part B: Weak Paragraph", text: "The experiment was done. We heated the oil. The results showed some numbers. The viscosity changed when temperature changed. This is because of science reasons. The experiment was successful." },
    { label: "Part B: Rewrite Prompt", text: "Rewrite this paragraph to be formal, precise, and suitable for a B.Tech lab report. Add technical vocabulary where appropriate." },
    { label: "Part C: Summarize PDF", text: "Summarize this document in 5 bullet points. Identify the 3 most important concepts." }
  ],
  4: [
    { label: "Sample Error Paragraph", text: "The experiment which was performed by us last week showed that the results which we got were not matching with what we expected from the theory. The temperature of the reaction was to high and because of this the rate of reaction became very fast and we could not measure it properly. In future we will try to do the experiment again with better instruments and more careful observation so that the results will be more accurate and we can understand the theory better." }
  ],
  5: [
    { label: "Sample B (Raw AI Text)", text: "Write 300 words explaining the working of a transistor for a B.Tech ECE student." }
  ],
  6: [
    { label: "Q1: Top 5 Concepts", text: "What are the 5 most important concepts in these documents?" },
    { label: "Q2: Follow-up Example", text: "Explain [Concept 1] with an example from my notes." },
    { label: "Q3: Out-of-Sources Test", text: "What did Elon Musk say about AI in 2024?" }
  ],
  7: [
    { label: "Academic Research Query", text: "What are the most recent advances in perovskite solar cell efficiency as of 2024?" },
    { label: "Alt Query (ML/Civil)", text: "What ML algorithms are currently used for structural health monitoring?" }
  ],
  8: [
    { label: "Part A: Elicit Query", text: "What deep learning architectures are most effective for detecting bearing faults in rotating machinery?" },
    { label: "Part B: Consensus Claim", text: "Does AI-assisted diagnosis improve accuracy in medical imaging?" }
  ],
  9: [
    { label: "1. Zero-Shot", text: "Explain how a PID controller works." },
    { label: "2. One-Shot", text: "Here is an example of a control concept explained with an analogy: [Feedback control is like a thermostat: it measures room temperature, compares to the setpoint, and adjusts heating to close the gap.] Now explain a PID controller using a similar analogy-driven style." },
    { label: "4. Chain-of-Thought", text: "Explain how a PID controller works. First, explain what each of P, I, and D does individually. Then explain how they combine. Then give a practical tuning guideline for temperature control. Show your reasoning step by step." },
    { label: "5. Full C-R-A-F-T", text: "Context: I am a B.Tech 3rd-year Electrical Engineering student preparing a seminar on control systems. Role: You are a control systems professor with 20 years of industry experience. Action: Explain PID controller principles and practical tuning guidelines. Format: Use: (1) Analogy, (2) Mathematical description of each term, (3) Step-by-step tuning guideline in a numbered list. Tone: Technical but accessible. Maximum 400 words." }
  ],
  10: [
    { label: "1. Statistical Summary", text: "Give me a complete statistical summary of this dataset — mean, median, standard deviation, minimum, and maximum for all numeric columns." },
    { label: "2. Histogram", text: "Create a histogram of [the most important numeric column]." },
    { label: "3. Correlation Heatmap", text: "Which two variables in this dataset are most strongly correlated? Create a correlation heatmap." },
    { label: "4. Outlier Detection", text: "Identify any outliers in the [column name] column. Show which rows they are." },
    { label: "5. Pattern Summary", text: "What patterns or trends do you notice in this dataset? Summarize in 3 bullet points." }
  ],
  11: [
    { label: "Iteration 1 (Basic)", text: "A poster for a college technical fest." },
    { label: "Iteration 2 (S-S-C-C-L-D)", text: "Style: Flat vector illustration. Subject: [Event name] — college technical festival with elements showing robotics, coding, and electronics. Composition: Wide landscape format, central focus on tech elements, space at top for title text. Colour: dark navy and electric blue palette. Lighting: Bright, energetic — no dark shadows. Detail: High resolution, clean professional design, minimal clutter, no watermarks, no garbled text." }
  ],
  12: [
    { label: "Part A: Napkin.ai Text", text: "The TCP three-way handshake establishes a reliable connection before data transmission begins. In the first step, the client sends a SYN packet to the server to initiate a connection. The server responds with a SYN-ACK packet, acknowledging the request and sending its own synchronization signal. Finally, the client sends an ACK packet to the server, confirming the connection is established. Only after all three steps are complete does data transfer begin." },
    { label: "Part B: Whimsical Mind Map", text: "Generate a comprehensive mind map of all major topics in [your subject name] at B.Tech level." }
  ],
  13: [
    { label: "Miro AI Mind Map", text: "Generate a mind map for a smart attendance system using facial recognition, RFID, and mobile app check-in. Include: hardware, software, data flow, and privacy considerations." },
    { label: "Miro AI Flowchart", text: "Generate a flowchart for the student attendance check-in process: student approaches terminal, facial recognition detects face, system checks database, marks attendance, sends confirmation to student mobile app." }
  ],
  14: [
    { label: "60-Sec Sample Script", text: "This project presents an AI-powered crop disease detection system for small-scale farmers in rural India. Traditional disease identification requires expert agronomists, which are unavailable in remote areas. Our system uses a MobileNet convolutional neural network trained on the PlantVillage dataset of 54,000 leaf images across 38 disease categories. A farmer photographs an affected leaf using a standard smartphone. The AI classifies the disease with 95% accuracy and recommends a treatment protocol in the local language. The system operates offline — critical for areas without reliable internet connectivity. Preliminary testing in three villages in Maharashtra showed a 40% reduction in crop loss in the pilot season. This solution directly addresses agricultural productivity and food security at grassroots level." },
    { label: "Ethical Disclosure", text: "Voiceover generated using ElevenLabs text-to-speech. Script written by [Your Name]." }
  ],
  15: [
    { label: "Reflection Prompt", text: "How reliable were GPTZero and Google Lens? What types of content were hardest to classify? What are the implications for trusting online information?" }
  ],
  16: [
    { label: "Task 1: Binary Search", text: "# Function to perform binary search on a sorted list\n# Parameters: sorted_list (list), target (int)\n# Returns: index of target if found, -1 if not found\n# Algorithm: divide the search space in half at each step\ndef binary_search(sorted_list, target):" },
    { label: "Task 2: Explain Code", text: "Explain this function line by line. What algorithm does it implement? What is its time complexity?" },
    { label: "Task 3: Buggy SQL Code", text: "import sqlite3\ndef get_user(username):\n    conn = sqlite3.connect('users.db')\n    cursor = conn.cursor()\n    query = 'SELECT * FROM users WHERE name = ' + username\n    cursor.execute(query)\n    result = cursor.fetchone()\n    return result\n    conn.close()" },
    { label: "Task 3: Security Review", text: "Find all bugs and security vulnerabilities in this function. Explain each issue and provide the corrected code." }
  ],
  17: [
    { label: "Step 1: Data Profiling", text: "Describe this dataset. How many rows and columns? What is the data type of each column? Are there missing values? Show me the first 5 rows." },
    { label: "Step 2: Stats Table", text: "Calculate mean, median, standard deviation, min, and max for all numeric columns. Display as a formatted table." },
    { label: "Step 4: Correlation", text: "Calculate the correlation matrix for all numeric columns and display as a colour-coded heatmap. Which two variables are most strongly correlated?" },
    { label: "Step 5: IQR Outliers", text: "Use the IQR method to identify outliers in each numeric column. How many outliers exist? Show the top 5 most extreme outlier rows." },
    { label: "Step 6: Insights", text: "What are the 3 most important patterns or insights in this dataset from an engineering perspective? Explain each in 2-3 sentences." }
  ],
  18: [
    { label: "Glide Sheet Columns", text: "Item, Description, Location, Contact, Found Date, Status" },
    { label: "Glide AI Column", text: "Generate Description from Item Name." }
  ],
  19: [
    { label: "Problem 1 (Calculus)", text: "d/dx [x^3 * sin(x) + e^(2x) * cos(x)]" },
    { label: "Problem 2 (Eigenvalues)", text: "eigenvalues of {{3,1},{1,3}}" },
    { label: "Problem 3 (ODE)", text: "dy/dx + 2y = 4x" }
  ],
  20: [
    { label: "Branch AI Tool Prompt", text: "You are an expert in [YOUR BRANCH] engineering and AI applications. List 5 specific, commercially available or actively researched AI tools used in [YOUR BRANCH] engineering. For each, provide: 1. Tool name and developer/company 2. Specific AI technique used (ML, DL, RL, Computer Vision, NLP) 3. Specific engineering problem it solves 4. A real industry company or research institution using it 5. Availability (free / paid / academic licence). Format as a numbered list. Only include tools you are confident exist as of 2024." }
  ],
  21: [
    { label: "Fairness Formulas", text: "FPR = FP / (FP + TN) | FNR = FN / (FN + TP) | Precision = TP / (TP + FP) | Recall = TP / (TP + FN) | Accuracy = (TP + TN) / Total" },
    { label: "Blackman Test", text: "Would the defendants who received high COMPAS scores consent to being assessed this way if they understood how it worked?" }
  ],
  22: [
    { label: "DPDP Act Search", text: "DPDP Act 2023 key provisions India" }
  ],
  23: [
    { label: "EU AI Act Search", text: "EU AI Act 2024 risk tiers summary" }
  ],
  24: [
    { label: "Problem Statement", text: "The problem I am addressing is ___ . It affects ___ . It matters because ___ . The measurable outcome I aim to produce is ___ ." },
    { label: "AI Disclosure Template", text: "AI Tools Used:\n1. [Tool Name]: Used for [task]. Prompt: '[prompt]'. Output modified: [Yes/No]. Verification: [method].\nData entered: [None / Details]\nAll factual claims: Confirmed verified against primary sources.\nHuman contribution: [Your analysis and edits]" }
  ],
  25: [
    { label: "5-Min Slide Structure", text: "1. Title Slide | 2. Problem Statement (45s) | 3. AI Tools & Workflow (90s) | 4. Deliverable Demo (75s) | 5. Quality Verification (30s) | 6. Responsible AI Disclosure (30s)" }
  ]
};