---
tags:
  - hac
  - hospital-acquired-conditions
  - poa
  - inpatient
  - coding-fundamentals
  - drg
  - compliance
  - quality
title: HAC List — Hospital-Acquired Conditions Reference
aliases:
  - HAC
  - Hospital-Acquired Conditions
  - HAC List
  - HAC Reduction Program
specialty: All Inpatient
code_type: Compliance Reference
system: CMS IPPS HAC Reduction Program
version_current: FY2025
updated: 2025-05-05
related_systems:
  - ICD-10-CM
  - MS-DRG
  - POA
  - IPPS
  - CC-MCC
status: complete
---

# 🚨 HAC List — Hospital-Acquired Conditions Reference

> [!abstract] One-Line Definition
> **Hospital-Acquired Conditions (HACs)** are conditions that **CMS** has determined are: (1) high cost or high volume; (2) result in the assignment of a higher-paying **DRG**; and (3) could reasonably have been prevented through evidence-based clinical practice — and therefore, when **not present on admission (POA = N)**, are excluded from qualifying as a **CC** or **MCC**, eliminating their reimbursement impact.

---

## 📌 Why This Matters to Coders

**HACs** sit at the crossroads of coding accuracy, compliance, and quality reporting. A coder who incorrectly assigns **POA = Y** to a **HAC** that developed during the hospital stay is not just inflating the **DRG** — they are potentially shielding the hospital from a rightful **HAC penalty and misrepresenting patient safety data**. Conversely, assigning **POA = N** to a condition that was genuinely present at admission inappropriately deflates **DRG** reimbursement and misclassifies a pre-existing condition as a hospital error.

> [!important] Core Principle
> **HACs** are not a list of codes you avoid coding — they are a list of conditions you code accurately with precise **POA** documentation. The condition is **always coded**. The **POA** indicator determines whether it qualifies as a **CC/MCC** and whether the **HAC** program is triggered.

---

## 🗂️ Section Index

1. [[#📖 Background & Program Structure]]
2. [[#⚙️ How the HAC Payment Mechanism Works]]
3. [[#📋 HAC Category 1 — Foreign Object Retained After Surgery]]
4. [[#📋 HAC Category 2 — Air Embolism]]
5. [[#📋 HAC Category 3 — Blood Incompatibility]]
6. [[#📋 HAC Category 4 — Pressure Ulcers / Injuries]]
7. [[#📋 HAC Category 5 — Falls and Trauma]]
8. [[#📋 HAC Category 6 — Manifestations of Poor Glycemic Control]]
9. [[#📋 HAC Category 7 — Catheter-Associated UTI (CAUTI)]]
10. [[#📋 HAC Category 8 — Vascular Catheter-Associated Infections]]
11. [[#📋 HAC Category 9 — Surgical Site Infections]]
12. [[#📋 HAC Category 10 — DVT/PE Post-Orthopedic]]
13. [[#📋 HAC Category 11 — Iatrogenic Pneumothorax with Venous Catheter]]
14. [[#🏥 HAC Reduction Program — The Aggregate Penalty]]
15. [[#🧪 Coding Scenarios — HAC Applied]]
16. [[#🛠️ Coder Workflow for HAC Conditions]]
17. [[#📚 References & Resources]]

---

## 📖 Background & Program Structure

The **HAC** program was created by the **Deficit Reduction Act of 2005** and implemented in **FY2009**. Congress directed **CMS** to identify conditions that: are high-cost or high-volume, result in higher DRG **payment** when present, and are reasonably preventable through evidence-based care. When these conditions are acquired during the hospital stay, they should not generate a reimbursement windfall for the hospital.

### Two Separate HAC Programs

> [!note] HAC Payment Adjustment vs HAC Reduction Program — Not the Same
> There are **two distinct but related** HAC programs:

| Program                           | What It Does                                                                      | Mechanism                                                           |
| --------------------------------- | --------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| **HAC Payment Adjustment Policy** | Removes **CC/MCC** status from individual HAC claims                              | Applied at the individual claim level; **POA = N** triggers removal |
| **HAC Reduction Program (HACRP)** | Reduces **all** IPPS payments by 1% for hospitals in worst quartile for HAC rates | Applied at the hospital level; aggregate quality measure            |

The HAC Payment Adjustment affects **your individual coding work** directly. The HACRP affects **hospital-wide payment** based on aggregate HAC performance.

### HAC Selection Criteria (Statutory)

**To be designated as a HAC, the condition must be:**
1. High cost OR high volume
2. Result in the assignment of a higher-paying MS-DRG when present as a secondary diagnosis
3. Reasonably preventable through the application of evidence-based guidelines

---

## ⚙️ How the HAC Payment Mechanism Works
```
Diagnosis coded with POA = N
↓
Is the condition on the HAC list?
↓ YES
Is there a secondary diagnosis present that elevates the DRG?
↓ YES
CMS removes the CC/MCC designation from that secondary diagnosis
↓
DRG reverts to the lower-tier (as if the CC/MCC was not present)
↓
Hospital receives lower DRG payment
↓
HAC event may also be reported to HACRP quality database
```


> [!warning] The Condition Is Still Coded — Just Not a CC/MCC
> When a **HAC** is triggered (**POA = N, condition on HAC list**), the **ICD-10-CM** diagnosis code is still required and must appear on the claim. What changes is that the grouper **ignores** that code for **DRG-tier** purposes. The code still populates quality reports, **PEPPER** data, and external benchmarking.

---

## 📋 HAC Category 1 — Foreign Object Retained After Surgery

**HAC Definition:** A foreign object (sponge, needle, instrument) unintentionally left in a patient after a procedure.

| Code             | Description                                                                           | POA Consideration                                     |
| ---------------- | ------------------------------------------------------------------------------------- | ----------------------------------------------------- |
| **[[T81.500A]]** | Unspecified complication of foreign body accidentally left in body, initial encounter | Always POA = N — foreign body left *during* procedure |
| **[[T81.501A]]** | Adhesion due to foreign body — initial encounter                                      | POA = N                                               |
| **[[T81.508A]]** | Other complication of foreign body left during procedure                              | POA = N                                               |
| **[[T81.509A]]** | Unspecified complication, foreign body left                                           | POA = N                                               |

> [!note] Never POA = Y
> By definition, foreign objects retained after surgery are always acquired during the hospital stay. These will always be POA = N. Always code with the appropriate episode-of-care 7th character (A = initial, D = subsequent, S = sequela).

---

## 📋 HAC Category 2 — Air Embolism

**HAC Definition:** Iatrogenic air embolism — air introduced into the vasculature through a medical procedure (central line placement, IV infusion, contrast injection).

| Code         | Description                                                         |
| ------------ | ------------------------------------------------------------------- |
| **[[T80.0XXA]]** | Air embolism following infusion, transfusion, therapeutic injection |
| **[[T81.718A]]** | Complication of other vascular surgery — air embolism               |
| **[[T81.71XA]]** | Complication of infusion — air embolism                             |

> [!tip] Distinguish from Pulmonary Embolism
> Iatrogenic air embolism ([[T80.0xxA]]) is distinct from thrombotic pulmonary embolism ([[I26.xx]]). PE from DVT is in HAC Category 10 (post-orthopedic only), not Category 2. Iatrogenic air embolism applies across all services.

---

## 📋 HAC Category 3 — Blood Incompatibility

**HAC Definition:** Transfusion of ABO-incompatible blood products; Rh incompatibility reactions.

| Code         | Description                                                     |
| ------------ | --------------------------------------------------------------- |
| **[[T80.30XA]]** | ABO incompatibility reaction, unspecified                       |
| **[[T80.310A]]** | ABO incompatibility with acute hemolytic transfusion reaction   |
| **[[T80.311A]]** | ABO incompatibility with delayed hemolytic transfusion reaction |
| **[[T80.39XA]]** | Other ABO incompatibility reaction                              |
| **[[T80.40XA]]** | Rh incompatibility reaction, unspecified                        |
| **[[T80.410A]]** | Rh incompatibility with acute hemolytic transfusion reaction    |

> [!warning] Always POA = N — Preventable Never-Events
> Blood incompatibility reactions are considered **never-events** — events that should never occur with proper blood bank protocols. Always POA = N by definition.

---

## 📋 HAC Category 4 — Pressure Ulcers / Injuries

**HAC Definition:** Stage 3, Stage 4, and Unstageable pressure injuries that were NOT present at the time of hospital admission.

This is the **highest-volume HAC category** and the most frequently coded incorrectly.

| Code    | Description                 | CC/MCC Status | HAC Triggered if POA = N? |
| ------- | --------------------------- | ------------- | ------------------------- |
| **L89.XX3** | Pressure ulcer, Stage 3     | **MCC**       | ✅ Yes                     |
| **L89.XX4** | Pressure ulcer, Stage 4     | **MCC**       | ✅ Yes                     |
| **L89.XX0** | Pressure ulcer, Unstageable | **MCC**       | ✅ Yes                     |
| **L89.XX2** | Pressure ulcer, Stage 2     | CC            | ❌ Not a HAC               |
| **L89.XX6** | Deep tissue pressure injury | CC            | ❌ Not a HAC               |
| **L89.XX1** | Pressure ulcer, Stage 1     | Non-CC        | ❌ Not a HAC               |

> [!important] Stage 2 Is NOT a HAC — Stage 3/4/Unstageable Are
> Only **Stage 3, Stage 4, and Unstageable** pressure injuries are on the HAC list. Stage 2 and deep tissue injuries are NOT HACs — they are CCs, but their POA indicator does not trigger the HAC mechanism. This distinction is critical for accurate coding.

### Common Pressure Ulcer Anatomical Sites (xx = site code)

| Site Value | Location                                 |
| ---------- | ---------------------------------------- |
| **00-09**      | Elbow (right/left/bilateral/unspecified) |
| **10-19**      | Upper back                               |
| **20-29**      | Coccyx / sacral region                   |
| **30-39**      | Hip (right/left)                         |
| **40-49**      | Buttock (right/left)                     |
| **50-59**      | Ankle (right/left)                       |
| **60-69**      | Heel (right/left)                        |
| **890-899**    | Other site                               |
| **900-909**    | Unspecified site                         |

> [!tip] Sacral and Heel Are Highest Volume
> The most commonly coded pressure injury sites in inpatient settings are **sacral/coccyx** (**[[L89.150]]-[[L89.159]]**) and **heel** **([[L89.600]]-[[L89.609]]**). Know these code ranges by memory for efficient abstraction.

---

## 📋 HAC Category 5 — Falls and Trauma

**HAC Definition:** **Fractures**, **dislocations**, intracranial injuries, crushing injuries, burns, or other trauma that occur as a result of a fall or other in-hospital event.

| Condition Category   | Example Codes                                                      |
| -------------------- | ------------------------------------------------------------------ |
| Fractures from falls | **[[S72.001A]]** Femoral neck fracture, initial; S22.xx Rib fractures  |
| Intracranial injury  | **[[S06.0X0A]]** Concussion, initial; **[[S06.4X0A]]** Epidural hemorrhage |
| Dislocations         | **[[S43.006A]]** Shoulder dislocation, initial                         |
| Burns                | T20.xx-T32.xx — burns acquired in hospital setting                 |
| Crush injuries       | S07.xx, S17.xx                                                     |

> [!warning] Falls Must Be In-Hospital
> **HAC Category 5** applies to **in-hospital** falls and trauma. If a patient was admitted for a hip fracture from a fall that occurred at home, that is **POA = Y (present at admission)** and is **NOT** a **HAC**. The **HAC** is triggered only when the fall/trauma occurs *during* the hospital stay.

---

## 📋 HAC Category 6 — Manifestations of Poor Glycemic Control

**HAC Definition:** **Hypoglycemic coma, diabetic ketoacidosis (DKA), hyperglycemic hyperosmolar stat**e, or other glycemic control failures that develop during the hospital stay.

| Code        | Description                             | HAC Triggered if POA = N? |
| ----------- | --------------------------------------- | ------------------------- |
| **[[E11.641]]** | T2DM with hypoglycemia with coma        | ✅ Yes                     |
| **[[E11.649]]** | T2DM with hypoglycemia without coma     | ✅ Yes                     |
| **[[E10.641]]** | T1DM with hypoglycemia with coma        | ✅ Yes                     |
| **[[E13.641]]** | Other DM with hypoglycemia with coma    | ✅ Yes                     |
| **[[E11.00]]**  | T2DM with hyperosmolarity without NKHHC | ✅ Yes                     |
| **[[E11.01]]**  | T2DM with hyperosmolarity with coma     | ✅ Yes                     |
| **[[E10.10]]**  | T1DM with DKA without coma              | ✅ Yes                     |
| **[[E10.11]]**  | T1DM with DKA with coma                 | ✅ Yes                     |
| **[[E11.10]]**  | T2DM with DKA without coma              | ✅ Yes                     |

> [!note] Pre-Existing DKA May Be POA = Y
> If a patient is **admitted for DKA** (**DKA drove the admission**), the **DKA** code is **POA = Y** and is not a **HAC**. The **HAC** only applies when **DKA** or **[[hypoglycemia]]** **develops during** a hospitalization for an unrelated condition.

---

## 📋 HAC Category 7 — Catheter-Associated UTI (CAUTI)

**HAC Definition:** Urinary tract infection attributable to an indwelling urinary catheter placed during the hospital stay.

| Code Combination | Description                                                           |
| ---------------- | --------------------------------------------------------------------- |
| **[[T83.511A]]** | Infection of indwelling urethral **[[catheter]]** — initial encounter     |
| **[[T83.518A]]** | Infection of other urinary catheter (**suprapubic, [[nephrostomy]]**) |
| **+ [[N39.0]]**  | UTI — coded as additional diagnosis                                   |

> [!warning] CAUTI Is One of the Highest-Volume HACs in Urology
> **Urology** patients have extremely high catheter utilization. Every **CAUTI POA** assignment requires documentation review. See [[POA Indicator Guide]] for detailed **CAUTI POA** workflow. Key question: Was the catheter placed before or after admission? Was infection present at admission or did it develop during stay?

### CAUTI POA Decision Tree
```
Was a urinary catheter in place at the time of admission?

↓ YES

Was a UTI documented at or before the time of admission?

↓ YES → POA = Y (CAUTI HAC NOT triggered)

↓ NO → UTI developed during stay → POA = N (CAUTI HAC triggered)

↓ NO (catheter placed after admission)

UTI develops during stay with catheter in place → POA = N (CAUTI HAC triggered)
```


---

## 📋 HAC Category 8 — Vascular Catheter-Associated Infections

**HAC Definition:** Bloodstream infections associated with **central venous catheters (CVCs)** placed during the hospital stay.

| Code | Description |
|------|-------------|
| **[[T80.211A]]** | Bloodstream infection due to central venous catheter — initial |
| **[[T80.212A]]** | Local infection due to central venous catheter |
| **[[T80.218A]]** | Other infection due to central venous catheter |
| **[[T80.219A]]** | Unspecified infection due to central venous catheter |

> [!tip] Central Line vs Peripheral Line
> **HAC Category 8** applies specifically to **central venous catheters** (**CVCs, PICCs, ports, dialysis catheters**). **Peripheral IV** site infections are not on the **HAC** list, though they are still codeable complications.

---

## 📋 HAC Category 9 — Surgical Site Infections

**HAC Definition:** Surgical site infections (**SSIs**) following specific high-volume procedures. Not all **SSIs** are **HACs** — only those following the designated procedures.

### Designated Procedure Categories

| Procedure Category        | Common ICD-10-PCS Procedures          |
| ------------------------- | ------------------------------------- |
| **Cardiac device procedures** | AICD, pacemaker implantation          |
| **Bariatric surgery**         | Roux-en-Y, sleeve **[[gastrectomy]]** |
| **Orthopedic procedures**     | THA, TKA, spinal fusion               |
| **Cardiac surgery (CABG)**    | Coronary artery bypass                |
| **Colon surgery**             | **[[Colectomy]]**, **[[colostomy]]**  |
| **Hysterectomy (abdominal)**  | TAH                                   |

### SSI Code Examples

| Code         | Description                                      |
| ------------ | ------------------------------------------------ |
| **[[T84.50XA]]** | Infection of internal joint prosthesis — initial |
| **[[T84.51XA]]** | Infection of internal fixation device — initial  |
| **[[T84.54XA]]** | Infection of cardiac pacemaker pocket            |
| **[[T81.4XXA]]** | Infection following a procedure — unspecified    |
| **[[T81.40XA]]** | Superficial SSI following procedure              |
| **[[T81.41XA]]** | Deep SSI following a procedure                   |
| **[[T81.42XA]]** | SSI involving organ/space                        |

> [!note] Specify Depth When Documented
> **CMS** and quality reporting programs distinguish between superficial (**[[T81.40XA]]**), deep (**[[T81.41XA]]**), and organ/space (**[[T81.42XA]]**) **SSIs**. When the operative or wound care notes specify depth, use the specific code. Default to unspecified only when depth is not documented.

---

## 📋 HAC Category 10 — DVT/PE Following Total Knee or Hip Replacement

**HAC Definition:** **Deep vein thrombosis** or **pulmonary embolism** following elective **total knee arthroplasty (TKA)** or **total hip arthroplasty (THA)**.

| Code        | Description                                                 |
| ----------- | ----------------------------------------------------------- |
| **[[I26.01]]**  | Septic pulmonary embolism with acute cor pulmonale          |
| **[[I26.09]]**  | Other pulmonary embolism with acute cor pulmonale           |
| **[[I26.90]]**  | Pulmonary embolism without acute cor pulmonale              |
| **[[I82.401]]** | Acute DVT of unspecified deep vein of right lower extremity |
| **[[I82.411]]** | Acute DVT, right femoral vein                               |
| **[[I82.421]]** | Acute DVT, right iliac vein                                 |
| **[[I82.431]]** | Acute DVT, right popliteal vein                             |
| **[[I82.441]]** | Acute DVT, right tibial vein                                |

> [!important] Orthopedic-Specific — Not All DVT/PE
> **HAC Category 10** applies **only** to **DVT/PE** following **TKA** or **THA**. **DVT/PE** occurring after other surgeries (**e.g., post-prostatectomy, post-colorectal**) is **not** a **HAC** — it is still coded with appropriate **POA**, and if **POA = Y**, it qualifies as **CC/MCC** normally.

---

## 📋 HAC Category 11 — Iatrogenic Pneumothorax with Venous Catheterization

**HAC Definition:** **[[Pneumothorax]]** occurring as a complication of central venous **[[catheter]]** placement.

| Code        | Description                 |
| ----------- | --------------------------- |
| **[[J95.811]]** | Postprocedural pneumothorax |
| **[[J95.812]]** | Postprocedural air leak     |

> [!tip] This HAC Is Approach-Specific
> **Iatrogenic pneumothorax** is most commonly associated with **subclavian** or internal jugular **CVC** insertion. Confirm the **pneumothorax** was attributable to the **[[vascular]]** **[[catheter]]** procedure — not to a separate thoracic procedure or underlying pulmonary disease — before applying **HAC Category 11.**

---

## 🏥 HAC Reduction Program — The Aggregate Penalty

Beyond the individual claim-level payment adjustment, hospitals face the **HAC Reduction Program (HACRP)** — a separate, aggregate quality penalty.

### How the HACRP Works

| Element | Detail |
|---------|--------|
| **Measurement** | **CMS** measures hospital-wide HAC rates using two domain scores |
| **Domain 1** | **AHRQ** Patient Safety Indicator (**PSI**) composite score |
| **Domain 2** | **CDC** National Healthcare Safety Network (**NHSN**) infection measures (**CLABSI, CAUTI, SSI, MRSA, C. diff**) |
| **Threshold** | Hospitals in the **worst-performing quartile** (**25th percentile**) are penalized |
| **Penalty** | **1% reduction** applied to ALL **Medicare IPPS** payments for the fiscal year |
| **Effective Date** | Annual determination; applied the following fiscal year |

> [!warning] 1% of All IPPS Revenue Is a Large Number
> For a large academic medical center with **$300M+** in **Medicare IPPS revenue**, a 1% **HACRP** penalty represents $3M+ in reduced payments for the entire year. This is why **C-suite** leadership cares deeply about **HAC** rates — and why accurate **POA** coding is not just a coding quality issue.

### HACRP vs Individual Claim HAC Adjustment

| Feature | Individual Claim HAC Adjustment | HACRP |
|---------|--------------------------------|-------|
| **Trigger** | Specific HAC code with **POA = N** | Aggregate quality score |
| **Effect** | That diagnosis ≠ **CC/MCC** on that claim | 1% of ALL IPPS payments |
| **Timing** | Real-time at claim processing | Annual fiscal year determination |
| **Coder Impact** | Direct — POA assignment | Indirect — aggregate HAC rate |

---

## 🧪 Coding Scenarios — HAC Applied

### Scenario 1: Stage 3 Pressure Ulcer — Timing Unknown

**Facts:** 84M admitted for pneumonia. Nursing admission assessment: "skin intact, no wounds." On hospital day 5, wound care consult documents Stage 3 sacral pressure ulcer. 

| Code | POA | Rationale |
|------|-----|-----------|
| [[J18.9]] | Y | Pneumonia — PDx, reason for admission |
| [[L89.153]] | **N** | Stage 3 sacral pressure ulcer — documented first on day 5; admission skin assessment documented intact skin |

**HAC Result:** Stage 3 pressure ulcer HAC triggered. MCC removed. Hospital's HACRP domain 1 score affected.

---

### Scenario 2: CAUTI — Catheter From SNF

**Facts:** 72F admitted from SNF with existing Foley catheter. UA on admission: positive for E. coli. Culture confirmed UTI. Documented in ED triage note.

| Code | POA | Rationale |
|------|-----|-----------|
| [[N39.0]] | Y | UTI documented in ED at admission |
| [[T83.511A]] | **Y** | CAUTI — catheter was in place at admission AND infection confirmed at admission |

**HAC Result:** POA = Y → CAUTI HAC NOT triggered → CC qualifies normally ✅

---
### Scenario 3: DVT After TKA

**Facts:** 65M admitted for elective right TKA. Post-op day 3: bilateral leg ultrasound confirms right popliteal DVT.

| Code | POA | Rationale |
|------|-----|-----------|
| [[Z96.641]] | Y | Presence of right artificial knee joint — status post TKA |
| [[I82.431]] | **N** | Acute DVT, right popliteal vein — developed post-op day 3; no DVT at admission |

**HAC Result:** HAC Category 10 triggered (DVT post-TKA). DVT does NOT qualify as CC/MCC. Hospital HACRP Domain 2 score affected via NHSN reporting.

---

### Scenario 4: Hypoglycemic Episode — Insulin Administration Error

**Facts:** 58F admitted for COPD exacerbation. T2DM managed with insulin during stay. On day 2, nursing documents hypoglycemic episode (BG 42); patient unresponsive briefly; dextrose administered.

| Code | POA | Rationale |
|------|-----|-----------|
| [[J44.1]] | Y | COPD with acute exacerbation — PDx |
| [[E11.641]] | **N** | T2DM with hypoglycemia with coma — developed during stay; in-hospital insulin management event |
| [[E11.9]] | Y | T2DM — chronic, pre-existing |

**HAC Result:** HAC Category 6 triggered (manifestation of poor glycemic control). [[E11.641]] does NOT qualify as CC. Hospital glycemic control quality metrics affected.

---

### Scenario 5: Retained Surgical Sponge

**Facts:** 47M admitted for open sigmoid colectomy. Post-op day 2 abdominal X-ray confirms retained laparotomy sponge. Return to OR for removal.

| Code | POA | Rationale |
|------|-----|-----------|
| [[K63.5]] | Y | Polyp of colon — PDx |
| [[0DBN0ZZ]] | Proc | Resection sigmoid colon, open |
| [[T81.500A]] | **N** | Foreign body (sponge) retained after surgery — by definition POA = N |

**HAC Result:** HAC Category 1 triggered. Never-event. Does NOT qualify as CC/MCC. Mandatory reportable event at most institutions independent of HAC program.

---

## 🛠️ Coder Workflow for HAC Conditions
```
FOR EACH secondary diagnosis coded:

1. CODE the condition accurately with full specificity
→ Do not avoid coding HAC-listed conditions
→ Accurate coding is mandatory regardless of HAC designation

2. ASSIGN the POA indicator
→ Review entire record: ED notes, nursing admission assessment,
H&P, progress notes, procedure reports
→ Apply POA logic per [[POA_Indicator_Guide]]
→ When uncertain on a HAC-listed condition → QUERY before defaulting to U

3. CHECK the HAC list
→ Is this diagnosis on one of the 11 HAC categories?
→ Your encoder will flag HAC-designated codes automatically
→ Confirm HAC category applies to this clinical scenario

4. VERIFY the POA + HAC interaction
→ POA = Y → condition qualifies as CC/MCC normally; HAC not triggered
→ POA = N → HAC triggered; CC/MCC status removed by grouper
→ POA = U → treated same as N; CC/MCC removed; HAC triggered
→ POA = W → qualifies as CC/MCC; HAC not triggered
→ POA = 1 (exempt) → qualifies as CC/MCC; HAC not applicable

5. CONFIRM DRG impact in your encoder
→ After HAC designation applied, re-verify DRG tier
→ If DRG dropped due to HAC exclusion, document in your abstraction notes

6. FLAG for CDI review if POA is ambiguous
→ Pressure ulcer timing not documented in admission skin assessment?
→ DVT — was pre-admission ultrasound performed? Any prior history?
→ AKI — admission creatinine elevated? Query timing
→ Initiate query using [[CDI Query Templates]] for POA timing clarification

7. DOCUMENT your POA rationale
→ For every HAC-listed diagnosis, note the source document
that supports your POA determination
→ Audit-defensible documentation starts at abstraction
```


---

## 📋 HAC Quick Reference — All 11 Categories

| HAC # | Category | Key Codes | Always POA = N? | CC/MCC Lost if POA = N |
|--------|----------|-----------|----------------|------------------------|
| **1** | Foreign Object Retained After Surgery | **[[T81.500A]]-[[T81.509A]]** | ✅ Yes | MCC |
| **2** | Air Embolism | **[[T80.0xxA]]** | ✅ Yes | MCC |
| **3** | Blood Incompatibility | **[[T80.30xA]]-[[T80.41XA]]** | ✅ Yes | MCC |
| **4** | Pressure Ulcers Stage 3/4/Unstageable | **L89.xx3, L89.xx4, L89.xx0** | ❌ POA-dependent | MCC |
| **5** | Falls and Trauma | **[[S72.001A]]**, S06.xx, others | ❌ POA-dependent | CC/MCC varies |
| **6** | Glycemic Control Failures | **[[E11.641]], [[E10.10]], [[E11.00]]** | ❌ POA-dependent | CC |
| **7** | CAUTI | **[[T83.511A]] + [[N39.0]]** | ❌ POA-dependent | CC |
| **8** | Vascular Catheter Infections (CLABSI) | **[[T80.211A]]-[[T80.219A]]** | ❌ POA-dependent | MCC |
| **9** | Surgical Site Infections (specific procedures) | **[[T81.40XA]]-[[T81.42XA]], [[T84.50XA]]** | ❌ POA-dependent | CC/MCC varies |
| **10** | DVT/PE Post-TKA/THA | **[[I82.401]], [[I82.431]], [[I26.09]]** | ❌ POA-dependent | MCC |
| **11** | Iatrogenic Pneumothorax w/ Venous Cath | **[[J95.811]], [[J95.812]]** | ❌ POA-dependent | CC |

---

## 📚 References & Resources

| Resource                    | Description                                               | URL                                                                                       |
| --------------------------- | --------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| **CMS HAC Reduction Program**   | Official program overview, HAC list, scoring methodology  | cms.gov/Medicare/Medicare-Fee-for-Service-Payment/AcuteInpatientPPS/HAC-Reduction-Program |
| **CMS HAC Payment Adjustment**  | Individual claim-level HAC payment adjustment policy      | cms.gov/Medicare/Coding/ICD10                                                             |
| **AHRQ PSI Composite Measures** | Domain 1 quality metrics for HACRP                        | qualityindicators.ahrq.gov                                                                |
| **CDC NHSN**                    | Domain 2 infection surveillance data (CLABSI, CAUTI, SSI) | cdc.gov/nhsn                                                                              |
| **IPPS Final Rule FY2025**      | Annual HAC list updates; effective October 1              | federalregister.gov                                                                       |
| **AHIMA HAC Coding Guidance**   | Coding and POA best practices for HAC conditions          | ahima.org                                                                                 |
| **AHA Coding Clinic**           | Official Q&A on HAC-related coding scenarios              | ahacentraloffice.org                                                                      |
| **AAPC CIC Study Guide**        | HAC and POA content for inpatient certification           | aapc.com                                                                                  |

---

## 🔗 Related Notes

- [[POA Indicator Guide]] — POA assignment logic; HAC-POA interaction workflow
- [[CC-MCC Reference]] — CC/MCC designation; HAC exclusion mechanism
- [[MS-DRG Overview]] — DRG grouper logic; how HAC removes CC/MCC from tier calculation
- [[IPPS Payment Overview]] — HAC Reduction Program 1% aggregate penalty
- [[UHDDS Principal Diagnosis]] — PDx is always POA = Y; HAC applies only to secondary dx
- [[CDI Query Templates]] — Query templates for POA timing clarification
- [[MDC 11 - Urology]] — CAUTI HAC context; catheter use in urology
- [[MDC 03 - ENT]] — Post-op complication HAC scenarios; SSI in head/neck surgery
- [[MDC 02 - Eye]] — Post-procedural complication POA; HAC in surgical ophthalmology
- [[L89.153]] — Stage 3 sacral pressure ulcer — HAC Category 4
- [[T83.511A]] — CAUTI — HAC Category 7
- [[I82.431]] — DVT right popliteal — HAC Category 10
- [[T80.211A]] — CLABSI — HAC Category 8
- [[T81.500A]] — Retained foreign object — HAC Category 1

---

*HAC categories, designated procedures, and qualifying diagnosis codes update annually with the CMS IPPS Final Rule (October 1). Verify current-year HAC lists in your encoder at each fiscal year transition. The HACRP domain scoring methodology may also be updated annually.*