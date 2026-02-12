<%*
// 1) ASK THE QUESTIONS
const code = await tp.system.prompt("Enter ICD-10 Code (e.g. R07.9)");
const desc = await tp.system.prompt("Enter Description (e.g. Chest pain)");
const isHCC = await tp.system.suggester(
  ["Yes", "No"],
  [true, false],
  false,
  "Is this an HCC (Risk) code?"
);

// Optional: stop if no code was entered (prevents rename + blank frontmatter)
if (!code) {
  tR += "No ICD-10 code entered. Template aborted.";
  return;
}

// 2) RENAME THE FILE
await tp.file.rename(code);

// 3) BUILD THE NOTE CONTENT
let noteContent = `---
tags:
  - reference/icd10
code: "${code}"
description: "${desc ?? ""}"
hcc_status: ${isHCC}
creation_date: ${tp.date.now("YYYY-MM-DD")}
---
# 🧬 ${code}: ${desc ?? ""}

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
LIST FROM "10 Guidelines" OR "20 Specialties"
WHERE contains(file.content, "${code}")
LIMIT 10
\`\`\`
`;

// 4) OUTPUT THE FINAL STRING
tR += noteContent;
%>
