---
tags:
  - medical_coding/guideline
  - specialty/general_profee
  - context/mcw_profee
creation_date: 2026-01-22
---

# E/M - Inpatient & Observation (99221-99239)

## 📋 The Rule (Quick Summary)
> **One Code Set:** As of 2023, there is no difference between "Observation" and "Inpatient" codes. Use the same codes for both.
> **The "8 to 12 Hour" Rule:**
> * < 8 Hours: Bill Initial Code only (9922x).
> * 8-24 Hours (Same Day Discharge): Bill Admission/Discharge Combo (99234-99236).
> * > 24 Hours: Bill Initial (Day 1) + Subsequent (Day 2) + Discharge (Day 3).

---

## 💰 CPT Selection Logic

### 1. Initial Care (New Consults / Admissions)
*Use this for the **First Time** you see the patient during their stay.*
*(Requires MDM **OR** Total Time)*

| CPT Code | Level | MDM Requirement | Time (Floor/Unit) |
| :--- | :--- | :--- | :--- |
| **99221** | Low / SF | Straightforward / Low | 40 min |
| **99222** | Moderate | Moderate | 55 min |
| **99223** | High | High | 75 min |

### 2. Subsequent Care (Rounding / Daily Visits)
*Use this for daily follow-ups.*

| CPT Code | Level | MDM Requirement | Time (Floor/Unit) |
| :--- | :--- | :--- | :--- |
| **99231** | Low / SF | Straightforward / Low | 25 min |
| **99232** | Moderate | Moderate | 35 min |
| **99233** | High | High | 50 min |

### 3. Discharge Day Management
*Only billable on the day the patient leaves.*
* **99238:** 30 minutes or less.
* **99239:** More than 30 minutes. (MUST document time!)

---

## ⚠️ The "Consult" Trap (Medicare vs. Commercial)
* **Medicare / Most Payers:** Do NOT pay for Consultation codes (99252-99255).
    * *Rule:* If you are a consultant, you bill **99221-99223** (Initial Hospital Care).
    * *Modifier -AI:* Only the "Admitting" doctor adds -AI. You (the specialist) generally do not.
* **Some Commercial Payers:** Still accept 99252-99255. *Check your MCW payer grid.*

---

## 🎓 Academic Coding (Residents & Students)
*Since you are at MCW, this is huge.*

**1. The "Split/Shared" Rule:**
* If an NP/PA and an MD both see the patient, you bill under the NPI of the person who did the **"Substantive Portion."**
* *Substantive* = Did more than 50% of the total time OR performed the complete MDM (Medical Decision Making).

**2. Resident Documentation:**
* The Teaching Physician (TP) must document that they were present for the key portion of the service.
* *Phrase:* "I saw and evaluated the patient with Dr. [Resident]. I agree with the findings and plan..."

---

## 🚨 Documentation Alerts (Query Triggers)
1.  **Discharge Time:** For **99239** (the higher paying discharge code), the provider MUST write: *"Total time spent on discharge > 30 mins"* or *"Spent 35 mins on discharge."* If they just write "Discharge note," you must downcode to **99238**.
2.  **"High" MDM (99223/99233):**
    * To hit "High" on Risk, there must be a **Decision regarding major surgery** (e.g., Deciding to take the kidney stone patient to the OR) OR **Escalation of care** (e.g., "Patient declining, consider ICU").
    * Just "Continuing IV antibiotics" is usually Moderate (99232), not High.