---
title: CPT:
tags:
  - medical-coding
  - e-m
  -
date: 
reimb:
time_floor: 
mdm_level:
---

## 🩺 Requirements (2026 AMA/CMS Guidelines)
**Code Selection:** Based on **Medical Decision Making (MDM)** OR **Total Time** spent on the date of encounter. 

> [!IMPORTANT]
> History and Exam must be "medically appropriate" but **do not** contribute to the code level selection. The "50% counseling/coordination" rule is no longer the primary standard; it is now simply **Total Time**.

### MDM Component Breakdown:
* **Complexity of Problems:** <% tp.user.prompt("e.g., 1 acute illness w/ systemic symptoms") %>
* **Data Reviewed/Analyzed:** <% tp.user.prompt("e.g., 3 points: Review 2 tests + Independent historian") %>
* **Risk of Management:** <% tp.user.prompt("e.g., Prescription drug mgmt / Decision for minor surgery") %>

---

## 📝 Key Documentation Checklist
**Must-Haves for Audit:**
- [ ] **Clinical Narrative:** Status of problems (stable, worsening, etc.) and differentials.
- [ ] **Interval Changes:** Note updates since previous encounter (for subsequent visits).
- [ ] **Independent Interpretation:** If you personally reviewed images/tracings (and aren't billing the professional component separately).
- [ ] **Social Determinants (SDoH):** If applicable, as they can bump Risk to "Moderate."
- [ ] **Time Stamp:** Total minutes spent (if coding by time).

**Common Pitfalls:** * Counting the "Review of Systems" as a leveling factor (it's not).
* Failing to document the *rationale* for a high-risk drug.
* Forgetting that "Observation" and "Inpatient" codes are now merged (99221-99239).

---

## 📂 Clinical Examples
1. [[<% tp.user.prompt("Case link (e.g., Cases/001-Ureteral-Stent-CHF)") %>]] — <% tp.user.prompt("Brief desc (e.g., Post-op dysuria + worsening HF)") %>  
   - **MDM Level:** Moderate (Acute illness with systemic symptoms).
   - **Time Spent:** <% tp.user.prompt("Mins") %> mins.
2. (Add more as needed)

---

## ⚠️ Modifiers & Nuances
- **Modifier 25:** Significant, separately identifiable E/M on the same day as a procedure.
- **Modifier AI:** Principal Physician of Record (Initial visit only).
- **Split/Shared:** Ensure documentation reflects the substantive portion of MDM or Time if working with an APP.
- **Prolonged Services:** Use G2211 (Medicare complexity) or 99418 (Inpatient prolonged time) if thresholds are exceeded.

**Compliant with:** 2026 CPT E/M Framework (Inpatient/Obs Merged).
**Last Updated:** <% tp.date.now("YYYY-MM-DD") %>
