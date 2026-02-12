<%*
// 1. Prompting for metadata
const code = await tp.system.prompt("CPT Code (e.g., 99214)", "99214");
const specialty = await tp.system.suggester(["Urology", "ENT", "Ophthalmology"], ["urology", "ent", "ophthalmology"]);
const description = await tp.system.prompt("Brief Description", "Level 4 Office Visit");

// 2. Modifier Suggester (Commonly used modifiers for quick selection)
const modifier = await tp.system.suggester(
	["None/NA", "-26 (Professional Component)", "-TC (Technical Component)", "-50 (Bilateral)", "-51 (Multiple)", "-62 (Co-Surgeons)", "-80 (Assistant Surgeon)"], 
	["N/A", "26", "TC", "50", "51", "62", "80"]
);

const global = await tp.system.suggester(["XXX (N/A)", "000 (Same day)", "010 (Minor)", "090 (Major)", "ZZZ (Add-on)"], ["XXX", "000", "010", "090", "ZZZ"]);
const wrvu = await tp.system.prompt("wRVU Value", "0.00");
const assist = await tp.system.suggester(["No", "Yes", "Conditional"], ["No", "Yes", "Conditional"]);

// 3. Safety Check: Stop if the user cancels a prompt
if (!code || !specialty) return;

// 4. Auto-Rename the file to the CPT code
await tp.file.rename(`${code}`);
-%>
---
tags:
  - reference/cpt
  - specialty/<% specialty %>
  - medical_coding
code: "<% code %>"
primary_modifier: "<% modifier %>"
global_days: "<% global %>"
wrvu: <% wrvu %>
assistant_payable: <% assist %>
---

# 🏥 <% code %>: <% description %>

## ⚡ Quick Reference
| Metric | Value | Notes |
| :--- | :--- | :--- |
| **Common Mod** | **-<% modifier %>** | *(Primary modifier for this service)* |
| **Global** | **<% global %>** | <% (global === "090") ? "*(Major Surgery - requires -57/-79)*" : "*(Standard check)*" %> |
| **wRVU** | **<% wrvu %>** | |
| **Assist** | **<% assist %>** | <% assist === "Conditional" ? "*(Check Resident/PA availability first)*" : "*(Standard policy)*" %> |

## 🚧 Bundling & NCCI Edits
*(What is INCLUDED in this code?)*

- **Includes:** 
- **Mutually Exclusive:** 


## 📝 MCW/Payer Specifics
- [ ] **Medical Necessity:** Documentation must support <% specialty %> complexity.
- [ ] **Mod -22:** If applicable, look for >50% extra time/effort.
- [ ] **Modifier Info:** <% modifier === "50" ? "Ensure bilateral documentation (e.g., 'both sides' or 'left and right') is clear." : "Standard modifier rules apply." %>
- [ ] **Category:** This is a **<% specialty.toUpperCase() %>** specific procedure.

## 🔗 Related Op Reports
```dataview
LIST 
FROM "20 Specialties"
WHERE contains(file.outlinks, [[<% code %>]]) OR contains(text, "<% code %>")
```
