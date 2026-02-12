---
tags:
  - medical_coding/guideline
  - specialty/ophthalmology
  - context/mcw_profee
creation_date: 2026-01-17
---

<br>

# Ophthalmology - Cataracts (Standard vs. Complex)

<br>

## 📋 The Rule (Quick Summary)
> **Standard ([[66984]])** is the default for [[Phacoemulsification]] with IOL insertion.
> **Complex ([[66982]])** requires the use of *specific mechanical devices* or techniques to manage a difficult pupil or lens. Just "taking longer" does not make it complex.

---

<br>

## 💰 CPT Selection Logic
*(The decision tree for picking the right code)*

* **[[66984]] (Standard):** Routine phaco with lens insertion. Includes [[viscoelastic]], lateral canthotomy, and [[subconjunctival]] injections.
* **[[66982]] (Complex):** Must document one of the following:
    * Iris Hooks / Retractors
    * Malyugin Ring (Pupil expander)
    * Trypan Blue Dye (for mature [[cataracts]] - *Check Payer Policy*)
    * Suturing of the IOL (Yamane technique)
* **[[66985]]:** Secondary insertion of IOL (lens only, no cataract removal).

### ⚠️ Modifier Watch
*Crucial modifiers for Cataracts:*

- [ ] **[[-RT]] / [[-LT]]:** **MANDATORY.** Do not use [[-50]].
- [ ] **[[-55]] (Post-Op Management):** Use this if the surgeon is *only* doing the surgery and handing off post-op care to an outside optometrist (Co-management).
- [ ] **[[-79]] (Unrelated):** Use if operating on the Left Eye during the global period of the Right Eye.

---

<br>

## 🩺 Diagnosis & Medical Necessity

* **Supported Diagnoses:**
    * H25.1- ([[Age-related nuclear cataract]])
    * [[H25.81]]- (Combined forms of age-related cataract)
* **Red Flag:**
    * [[Q12.0]] (Congenital Cataract) - Rare in adults; double-check the history.

---

<br>

## 🚨 Documentation Alerts (Query Triggers)
*If the note is missing this, I cannot code [[66982]] (Complex):*

1.  **Devices Named:** Did they specifically list "Malyugin Ring," "Iris Hooks," or "capsular tension ring"?
2.  **Pediatric:** Is the patient under 2? (Different codes apply).
3.  **Combination:** If they did a [[Vitrectomy]] ([[67036]]) + Cataract, is it bundled? (Usually yes, unless specific conditions apply).

---

## From NotebookLM:

<br>

# Cataract Surgery Coding Reference

<br>

### **Common CPT Codes**

- **[[66984]]**: [[Extracapsular cataract]] removal with IOL insertion (Standard)
- **[[66982]]**: Extracapsular cataract removal with IOL insertion (**Complex**)
    - _Usage:_ Requires devices/techniques not generally used in routine surgery (e.g., iris expansion device, suture support for IOL, primary posterior capsulorrhexis).
    - _Note:_ Pupil stretching alone usually does not qualify as "complex."
- **[[66989]]**: Complex cataract extraction with IOL **+ MIGS** (e.g., stent)
- **[[66991]]**: Standard cataract extraction with IOL **+ MIGS** (e.g., stent)
- **[[66821]]**: [[YAG]] capsulotomy (After cataract laser surgery) - **90-day global** applies.

### **Global Period Rules**

- **Period:** 90 Days (Major Surgery).
- **Included Services (Do Not Bill Separately):**
    - Pre-op visit (Day before or Day of surgery).
    - Intra-operative services (e.g., local anesthesia, blocks, viscoelastic).
    - Routine post-op care ([[99024]] reporting only).
    - Injections at time of surgery (e.g., antibiotics, steroids like Triesence/Moxifloxacin).

### **Essential Modifiers**

- **[[-RT]] / [[-LT]]**: Mandatory to identify eye.
- **[[-57]] (Decision for Surgery)**: Append to the E/M code if the decision to perform surgery was made _the day of_ or _day before_ the procedure.
    - _Why:_ Separates the E/M payment from the bundled pre-op work of a major (90-day) surgery.
- **[[-79]] (Unrelated Procedure)**: Use if operating on the **second eye** during the 90-day global period of the first eye.
    - _Impact:_ Starts a new global period for the second eye; pays at 100%.
- **[[-54]] (Surgical Care Only)**: Surgeon performs surgery but transfers post-op care.
- **[[-55]] (Post-op Management Only)**: Co-managing provider (e.g., OD) bills this for the post-op period.
- **[[-78]] (Unplanned Return to OR)**: Complication requiring a return to the OR (e.g., wound dehiscence, lens displacement).
    - _Impact:_ Intra-operative payment only; does _not_ reset global days.

### **Bundling & NCCI Alerts**

- **Lensectomy vs. Vitrectomy:**
    - **[[66850]]** (Removal of lens material) is typically **bundled** into **[[67036]]** (Pars plana [[vitrectomy]]).
    - _Exception:_ You may be able to unbundle if the lens removal is done _without_ placing an IOL, depending on specific clinical scenarios and payer policy.
- **[[Refraction]] ([[92015]]):** Non-covered by Medicare; bill to patient. Do not bundle into the exam code.
- **[[pterygium]]:** If performing a pterygium excision ([[65420]]/[[65426]]) same day, graft codes ([[65780]]) are often bundled.

### **2025/2026 Updates**

- **[[G0559]] (Post-op Complexity Add-on):** New code for practitioners providing post-op care for a procedure they (or their group) did _not_ perform, where there is **no** formal transfer of care agreement.
    - _Restriction:_ Cannot be billed with Eye Visit Codes (92xxx).
- **Efficiency Adjustments (2026):** Expect -2.5% **RVU** reduction for procedural codes (like [[66984]]) due to CMS efficiency adjustments.

### **Documentation Checklist**

- [ ] **Laterality:** Clearly specified (Right/Left/Bilateral).
- [ ] **Complexity:** If billing [[66982]], explicitly name the device (e.g., Malyugin ring) or technique (e.g., suture fixation) used.
- [ ] **Medical Necessity:** Link CPT to the specific cataract type (e.g., [[H25.11]] Nuclear cataract, RT).
- [ ] **Transfer of Care:** If splitting care ([[-54]]/[[-55]]), ensure dates of transfer are documented in Item 19 or the electronic equivalent.