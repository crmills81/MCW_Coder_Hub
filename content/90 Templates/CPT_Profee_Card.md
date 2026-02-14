<%*
const code = await tp.system.prompt("CPT Code (e.g. 50240)");
const desc = await tp.system.prompt("Procedure Name");
const global = await tp.system.suggester(["090 (Major)", "010 (Minor)", "000 (Endo/Minor)", "XXX (Global n/a)"], ["090", "010", "000", "XXX"]);
const rvu = await tp.system.prompt("Work RVU (approx)", "0.00");
const assist = await tp.system.suggester(["Yes (Modifier 80 allowed)", "No (Assist not paid)", "Conditional"], ["Yes", "No", "Conditional"]);
await tp.file.rename(`${code} - ${desc}`);
%>

---
tags: [reference/cpt, specialty/urology, specialty/ent, specialty/ophthalmology]
code: <% code %>
global_days: <% global %>
wrvu: <% rvu %>
assistant_payable: <% assist %>
---

# 🏥 <% code %> - <% desc %>

## ⚡ Quick Reference
| Metric | Value | Notes |
| :--- | :--- | :--- |
| **Global** | **<% global %>** | *(Watch for Mod -78/79)* |
| **wRVU** | **<% rvu %>** | |
| **Assist** | **<% assist %>** | *(Check Resident availability first)* |

## 🚧 Bundling & NCCI Edits
*(What is INCLUDED in this code?)*
- **Includes:** [e.g., Cystoscopy, Catheter placement, Approach]
- **Mutually Exclusive:** [[ ]]

## 📝 MCW/Payer Specifics
*(Documentation requirements to prevent downcoding)*
- [ ] For Modifier -22: Documentation must support >50% extra time/effort due to [BMI/Adhesions/Trauma].

## 🔗 Related Op Reports
```dataview
LIST FROM "20 Specialties"
WHERE contains(file.content, "<% code %>")
```
