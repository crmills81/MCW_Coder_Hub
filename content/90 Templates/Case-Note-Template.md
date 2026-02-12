---
title: <% tp.user.prompt("Case # and Summary (e.g., 101 - Sepsis/GI Bleed)") %>
tags:
  - case-study
  - clinical-log
  - <% tp.user.prompt("Specialty") %>
date: <% tp.date.now("YYYY-MM-DD") %>
---

## 🏥 Hospital Encounter Summary
**Admission Dx:** [[Dx-<% tp.user.prompt("Adm Dx") %>]]
**Working/Final Dx:** [[Dx-<% tp.user.prompt("Final Dx") %>]]
**DRG:** [[DRG-<% tp.user.prompt("DRG #/Name") %>]] (Weight: <% tp.user.prompt("Weight") %>)

---

## 📄 Billing & Coding Details
| Type | Code(s) | Notes |
| :--- | :--- | :--- |
| **E/M** | <% tp.user.prompt("e.g. 99223 / 99233") %> | Based on: [ ] MDM [ ] Time |
| **Diagnosis** | <% tp.user.prompt("ICD-10 Codes") %> | Primary + MCC/CCs |
| **Procedures** | <% tp.user.prompt("CPT/PCS") %> | e.g., Endoscopy, Intubation |

---

## 🧠 Clinical Rationale & Lessons
> [!ABSTRACT] MDM Logic
> **Complexity:** <% tp.user.prompt("e.g., Acute organ failure, high risk of morbidity") %>
> **Data:** <% tp.user.prompt("e.g., Reviewed 3 years of records, independent imaging review") %>
> **Risk:** <% tp.user.prompt("e.g., IV escalation, surgical decision") %>

### Key Takeaways / "Mental Models"
* **Documentation Win:** <% tp.user.prompt("e.g., Specified 'Acute Blood Loss Anemia' vs 'Anemia'") %>
* **Lessons Learned:** * **The "Grey" Area:** (What made this case tricky for coding or clinical management?)

---

## 🔍 CDI & Query Opportunities
- [ ] **MCC/CC present?** (e.g., Encephalopathy, Malnutrition, Respiratory Failure)
- [ ] **Specificity:** (e.g., "Systolic Heart Failure" instead of just "CHF")
- [ ] **Query Sent:** [ ] No [ ] Yes - Regarding: <% tp.user.prompt("Query topic", ["Sepsis-3 Criteria", "Acuity of Renal Failure", "Linkage of Dx"]) %>

---

## 🔗 Related Resources
- **Specialty Hub:** [[<% tp.user.prompt("Specialty") %>/Inpatient/]]
- **Workflow:** [[Workflows/Query-Sepsis]]
- **Evidence:** (Link to UpToDate or Journal Article)
---
title: "Case <% tp.user.prompt("Case # or Date") %>: <% tp.user.prompt("Summary (e.g., Sepsis secondary to GI Bleed)") %>"
tags:
  - case-study
  - clinical-log
  - <% tp.user.prompt("Specialty") %>
date: <% tp.date.now("YYYY-MM-DD") %>
---

## 🏥 Hospital Encounter Summary
**Admission Dx:** [[Dx-<% tp.user.prompt("Adm Dx") %>]]
**Working/Final Dx:** [[Dx-<% tp.user.prompt("Final Dx") %>]]
**DRG:** [[DRG-<% tp.user.prompt("DRG #/Name") %>]] (Weight: <% tp.user.prompt("Weight") %>)

---

## 📄 Billing & Coding Details
| Type | Code(s) | Notes |
| :--- | :--- | :--- |
| **E/M** | <% tp.user.prompt("e.g. 99223 / 99233") %> | Based on: [ ] MDM [ ] Time |
| **Diagnosis** | <% tp.user.prompt("ICD-10 Codes") %> | Primary + MCC/CCs |
| **Procedures** | <% tp.user.prompt("CPT/PCS") %> | e.g., Endoscopy, Intubation |

---

## 🧠 Clinical Rationale & Lessons
> [!ABSTRACT] MDM Logic
> **Complexity:** <% tp.user.prompt("e.g., Acute organ failure, high risk of morbidity") %>
> **Data:** <% tp.user.prompt("e.g., Reviewed 3 years of records, independent imaging review") %>
> **Risk:** <% tp.user.prompt("e.g., IV escalation, surgical decision") %>

### Key Takeaways / "Mental Models"
* **Documentation Win:** <% tp.user.prompt("e.g., Specified 'Acute Blood Loss Anemia' vs 'Anemia'") %>
* **Lessons Learned:** * **The "Grey" Area:** (What made this case tricky for coding or clinical management?)

---

## 🔍 CDI & Query Opportunities
- [ ] **MCC/CC present?** (e.g., Encephalopathy, Malnutrition, Respiratory Failure)
- [ ] **Specificity:** (e.g., "Systolic Heart Failure" instead of just "CHF")
- [ ] **Query Sent:** [ ] No [ ] Yes - Regarding: <% tp.user.prompt("Query topic", ["Sepsis-3 Criteria", "Acuity of Renal Failure", "Linkage of Dx"]) %>

---

## 🔗 Related Resources
- **Specialty Hub:** [[<% tp.user.prompt("Specialty") %>/Inpatient/]]
- **Workflow:** [[Workflows/Query-Sepsis]]
- **Evidence:** (Link to UpToDate or Journal Article)
