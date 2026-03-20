---
tags:
  - medical_coding/guideline
  - specialty/general_profee
  - context/mcw_profee
creation_date: 2026-01-22
---

# E/M Coding (Office & Outpatient 99202-99215)

<br>

## 📋 The Rule (Quick Summary)
> **MDM or Time:** You select the code level based on **Medical Decision Making (MDM)** OR **Total Time** (Provider time only).
> * **New Patient:** No face-to-face services from *any* provider of the *same specialty* in the same group within the last **3 years**.
> * **Established Patient:** Has been seen within 3 years.

---

## 💰 CPT Selection Logic (The Matrix)

### 1. New Patients (3 out of 3 components NOT required anymore)
* **[[99202]]:** Low MDM (15-29 min).
* **[[99203]]:** Moderate MDM (30-44 min).
* **[[99204]]:** Moderate/High MDM (45-59 min).
* **[[99205]]:** High MDM (60-74 min).

### 2. Established Patients (2 out of 3 components NOT required anymore)
* **99211:** "Nurse Visit" (No MDM required).
* **[[99212]]:** Straightforward MDM (10-19 min).
* **[[99213]]:** Low MDM (20-29 min).
* **[[99214]]:** Moderate MDM (30-39 min).
* **[[99215]]:** High MDM (40-54 min).

### ⚡ The "MDM" Cheat Sheet
*To hit a level, you need 2 out of 3 columns:*

| Level | Problems (Number/Complexity) | Data (Tests/Notes) | Risk (Patient Management) |
| :--- | :--- | :--- | :--- |
| **Level 3** | Acute uncomp. illness ([[cystitis]]) | None | OTC Meds |
| **Level 4** | Chronic w/ exacerbation OR New problem w/ workup | Review of tests, Order Unique tests | Rx Management (New prescription) OR Minor Surgery decisions |
| **Level 5** | Threat to Life/Function (Acute Renal Failure) | High complexity data | Decision for Major Surgery OR Drug Monitoring |

---

## ⚠️ Modifier Watch (The Audit Trap)
- [ ] **[[-25]] (Significant, Separately Identifiable):**
    * **The Golden Rule:** You cannot bill an E/M just for the "pre-op" exam of a minor procedure.
    * *Billable Example:* Pt comes for Cystoscopy (Scheduled). Also complains of new ear pain. Doc treats ear infection. (Bill Cysto + E/M-25).
    * *Non-Billable Example:* Pt comes for Cystoscopy. Doc asks "Any changes? No? Okay." (Bill Cysto only).
- [ ] **[[-24]] (Unrelated in Global):** Use if treating a *new* problem (e.g., Sinusitis) during the post-op period of a cataract surgery.
- [ ] **[[-57]] (Decision for Surgery):** Use this instead of -25 if the visit resulted in the decision to do a **MAJOR** surgery (90-day global) *today or tomorrow*.

---

## 🚨 Documentation Alerts (Query Triggers)
1.  **"Prescription Management":** To hit Level 4 (99214) on Risk alone, the note must explicitly show they **managed** a med (Started, Renewed, Discontinued, or Discussed/Decided not to change). Just listing current meds doesn't count.
2.  **Time Statements:** If coding by time, the provider MUST document *total time* spent on the date of encounter (including chart prep and documentation). "Spent 15 mins counseling" is not enough; needs "Total time 35 mins."
3.  **Independent Historian:** Did they talk to a parent/guardian because the patient couldn't provide history? That counts as a Data point!
