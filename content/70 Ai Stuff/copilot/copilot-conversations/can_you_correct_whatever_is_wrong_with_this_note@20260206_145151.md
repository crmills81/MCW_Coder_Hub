---
epoch: 1770407511165
modelKey: "gemini-3-pro-preview|google"
topic: "Note Correction Request"



tags:
  - 70 Ai Stuff/copilot-conversation
---

**user**: can you correct whatever is wrong with this note?
[Context: Notes: 90 Templates/ICD10_Template.md]
[Timestamp: 2026/02/06 14:51:51]

**ai**: Based on the content of the active note `ICD10_Template`, here are the corrections and improvements.

The primary issues in the original note were:
1.  **Formatting Error:** The "Coding Traps" section had `Excludes1` and `Code First` mashed onto a single line.
2.  **Missing File Rename:** The template asks for a code (e.g., R07.9) but doesn't actually rename the file to match that code, leaving you with "Untitled" or "ICD10_Template 1".
3.  **Usability:** It lacked a cursor placement command (`tp.file.cursor`), meaning you would have to manually click to start typing after the template runs.

Here is the corrected version:

```javascript
<%*
// 1. ASK THE QUESTIONS
const code = await tp.system.prompt("Enter ICD-10 Code (e.g. R07.9)");
const desc = await tp.system.prompt("Enter Description (e.g. Chest pain)");
const isHCC = await tp.system.suggester(["Yes", "No"], [true, false], false, "Is this an HCC (Risk) code?");

// 2. RENAME THE FILE
// This ensures the note title matches the code you entered
if (code) {
    await tp.file.rename(`${code}`);
}

// 3. BUILD THE NOTE CONTENT
let noteContent = `---
tags:
  - reference/icd10
code: "${code}"
description: "${desc}"
hcc_status: ${isHCC}
creation_date: ${tp.date.now("YYYY-MM-DD")}
---
# 🧬 ${code}: ${desc}

## Diagnosis Type
- **Status:** ${isHCC ? "🔴 HCC (Risk Adjust)" : "🟢 Non-HCC"}
`;

if (isHCC) {
    noteContent += `
> [!NOTE] 💰 HCC ALERT
> **This is a Risk Adjustment Diagnosis.**
> You MUST document **MEAT** (Monitor, Evaluate, Assess, Treat) to get credit.
`;
}

noteContent += `
## ⚠️ Coding Traps
- **Excludes1:** 
- **Code First:**
- **Use Additional:**

## 🧾 Clinical Indicators
- **Labs:** 
- **Imaging:** 
<% tp.file.cursor() %>

## 🔗 Related Notes
\`\`\`dataview
LIST
FROM "10 Guidelines" OR "20 Specialties"
WHERE contains(file.content, "${code}")
LIMIT 10
\`\`\`
`;

// 4. OUTPUT THE FINAL STRING
tR += noteContent;
%>
```

### Summary of Fixes:
*   **Added `await tp.file.rename('${code}')`:** The note will now automatically name itself (e.g., "R07.9") based on your input.
*   **Fixed List Formatting:** Separated `- **Excludes1:**` and `- **Code First:**` onto their own lines so they render as a proper list.
*   **Added `<% tp.file.cursor() %>`:** When the template finishes running, your cursor will automatically jump to the "Clinical Indicators" section so you can start typing immediately.
[Timestamp: 2026/02/06 14:52:48]