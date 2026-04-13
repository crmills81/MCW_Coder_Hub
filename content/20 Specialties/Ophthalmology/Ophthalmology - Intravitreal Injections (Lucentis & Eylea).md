---
tags:
  - medical_coding/guideline
  - specialty/ophthalmology
  - context/mcw_profee
  - ophthalmology
creation_date: 2026-01-22
---

# Ophthalmology - Intravitreal Injections (Lucentis/Eylea/Avastin)

## 📋 The Rule (Quick Summary)
> **Drug vs. Procedure:** You bill for the injection (67028) AND the drug (J-Code).
> **Bilateral Rule:** Medicare requires bilateral injections to be billed as two separate lines with -RT and -LT (not -50).

---

## 💰 CPT Selection Logic
* **67028:** Intravitreal Injection (The poke).
* **J-Codes (The Liquid Gold):**
    * **J0178 (Eylea):** Check units carefully (usually 2mg).
    * **J2778 (Lucentis):** Check units (0.3mg vs 0.5mg).
    * **J9035 (Avastin):** Off-label use (Low cost).
    * **J2779 (Vabysmo):** Newer, high audit risk.

### ⚠️ Modifier Watch
- [x] **-25 (E/M):** **High Denial Risk.** Only use if the decision to inject was made *that day* for a new problem. If it's a scheduled monthly shot, NO E/M allowed.
- [x] **-LT / -RT:** Mandatory on the 67028 line.
- [ ] **-JW:** Waste modifier. If the vial was 2.0mg and they injected 1.5mg, you must bill the waste on a separate line with -JW (Commercial policies vary).

---

## 🚨 Documentation Alerts (Query Triggers)
1.  **"Wasted Amount":** Did the nurse document "0.5mg wasted"? If not, you can't bill the waste.
2.  **Diagnosis Linking:** Ensure the drug is FDA-approved for the diagnosis (e.g., Eylea for Wet AMD is fine; Eylea for "Eye Pain" will deny).

---

## From NotebookLM: 

# [[Intravitreal Injections Coding]]

### **CPT & Drug Coding**

- **67028**: Intravitreal injection of a pharmacologic agent.
    - _Laterality:_ Must append **-RT** or **-LT**.
    - _Bilateral:_ For Medicare Part B, bill **one line** with **Modifier 50** and **1 unit**. Fees are doubled automatically. (Check commercial payers for separate line requirements).
- **Drug Codes (J-Codes)**: Must match the specific drug and dosage.
    - _Documentation:_ Bill based on the units defined in the HCPCS code (e.g., Eylea 2 mg = 2 units).
    - _NDC:_ Must report the 11-digit NDC (N4 qualifier) and Unit of Measurement (UOM) in Item 24a or EDI equivalent.

### **Wastage Modifiers (Critical for Compliance)**

- **-JW**: Report on a separate line for **discarded** amounts from a single-use vial.
- **-JZ**: Report on the claim line to attest that **NO drug was discarded** from a single-use vial.
    - _Note:_ Failure to use -JW or -JZ on relevant claims often triggers denials.

### **Documentation Checklist**

- [ ] **Medical Necessity:** For new patients, document _why_ the specific drug was chosen. For established, document response to therapy and reason for continuing.
- [ ] **Inventory Logs:** Maintain legible inventory logs/medication administration records (MARs) showing lot numbers.
- [ ] **Same Day Exam:** Do **not** bill an E/M (with Modifier 25) if the exam was only to confirm the need for the injection (routine). Only bill if a _significant, separately identifiable_ condition was managed (e.g., infection in the other eye).

---


Would you like to drill down into the specific **ICD-10 coding for Diabetes with Ophthalmic Complications** (the E08-E13 combination codes)?