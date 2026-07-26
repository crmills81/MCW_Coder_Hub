---
tags:
  - drg
  - ms-drg
  - inpatient
  - reimbursement
  - mdc
  - cc-mcc
  - pcs
  - coding-fundamentals
title: MS-DRG - Medicare Severity Diagnosis Related Groups
aliases:
  - DRG
  - MS-DRG
  - Diagnosis Related Group
  - Medicare Severity DRG
specialty: All Inpatient
code_type: Reimbursement Classification
system: CMS IPPS
version_current: FY2025 v42
updated: 2025-05-05
related_systems:
  - ICD-10-CM
  - ICD-10-PCS
  - MDC
  - CC-MCC
  - IPPS
  - UHDDS
status: complete
---

# 🏥 MS-DRG - Medicare Severity Diagnosis Related Groups

> [!abstract] One-Line Definition
> An **MS-DRG** (Medicare Severity Diagnosis Related Group) is a patient classification system used by CMS to group inpatient hospital stays into clinically coherent, resource-similar categories for the purpose of **standardized prospective payment** under the Inpatient Prospective Payment System (IPPS).

---

## 📌 Why This Matters to Coders

MS-DRGs are the **final output** of everything an inpatient coder does. Every ICD-10-CM diagnosis, every ICD-10-PCS procedure, every CC and MCC captured — it all feeds the DRG grouper. Getting the DRG right is not about upcoding; it is about **complete and accurate representation** of the severity and complexity of the patient's hospital stay.

> [!important] Core Principle
> Coders do not *assign* DRGs. Coders assign **diagnoses and procedures**. The grouper software assigns the DRG based on those codes. Your job is to make sure the codes are complete, sequenced correctly, and supported by documentation.

---

## 🗂️ Section Index

1. [[#📖 Background & History]]
2. [[#🔢 How the DRG Grouper Works — Step by Step]]
3. [[#🗃️ Major Diagnostic Categories (MDCs)]]
4. [[#⚖️ The CC/MCC Split — Where Reimbursement Lives]]
5. [[#💵 How MS-DRGs Drive Payment]]
6. [[#🔍 Reading a DRG — Anatomy of a DRG Assignment]]
7. [[#🏷️ DRG Types — Medical vs Surgical vs Procedure]]
8. [[#📋 Base DRGs and Their Splits]]
9. [[#🔬 Specialty Relevance — Urology, OTO, Ophthalmology]]
10. [[#🩺 CDI Querying and DRG Optimization]]
11. [[#⚠️ Common Coding Pitfalls That Affect DRGs]]
12. [[#🛠️ Practical Workflow for Coders]]
13. [[#📚 References & Resources]]

---

## 📖 Background & History

### Origins

The DRG system was developed at **Yale University** in the 1970s by Robert Fetter and John Thompson. It was designed to create a clinically meaningful patient classification system that could also predict resource utilization.

**CMS adopted DRGs** in **1983** as the basis for Medicare inpatient payment under IPPS (Inpatient Prospective Payment System), replacing the prior cost-based reimbursement model. This was one of the most significant shifts in US hospital finance history — hospitals now had incentive to be *efficient* rather than simply billing for every service rendered.<sup>[1]</sup>

### Evolution to MS-DRG

| Era | System | Key Change |
|-----|--------|------------|
| 1983 | Original DRGs | 467 groups; no severity adjustment |
| 1988-2007 | Refined DRGs / AP-DRGs | Severity layers added by some states/payers |
| **FY2008** | **MS-DRGs launched** | CMS expanded to 745 groups with 3-way CC/MCC severity splits |
| FY2025 | MS-DRG v42 | ~769 active DRGs; annual updates each October 1 |

> [!note] Why "Medicare Severity"?
> The "MS" prefix reflects the addition of complication and comorbidity severity tiers (No CC, CC, MCC) that were absent in earlier DRG versions. This tripling of many DRG groups was designed to more accurately capture patient complexity.

---

## 🔢 How the DRG Grouper Works — Step by Step

The DRG grouper is an algorithmic decision tree. It evaluates the coded data in a specific, sequential logic.

```
STEP 1: Is the principal diagnosis valid?
         ↓
STEP 2: Assign to a Major Diagnostic Category (MDC) based on principal diagnosis
         ↓
STEP 3: Is there a qualifying OR procedure?  →  YES → Surgical DRG pathway
         ↓ NO
STEP 4: Medical DRG pathway
         ↓
STEP 5: Apply CC/MCC logic to secondary diagnoses
         ↓
STEP 6: Check for DRG-specific exclusions (HAC, POA, CC exclusion list)
         ↓
STEP 7: Assign final MS-DRG
         ↓
STEP 8: Apply DRG relative weight × hospital base rate = Payment
```

### Key Inputs to the Grouper

| Data Element              | Source                                  | Impact                      |
| ------------------------- | --------------------------------------- | --------------------------- |
| **Principal Diagnosis (PDx)** | Coded from H&P, discharge summary       | Drives MDC assignment       |
| **Secondary Diagnoses**       | All additional diagnoses documented     | CC/MCC determination        |
| **Principal Procedure**       | Most resource-intensive PCS procedure   | Surgical vs medical pathway |
| **Additional Procedures**     | All other ICD-10-PCS codes              | May shift DRG               |
| **POA Indicators**            | Present-on-admission flags              | HAC and CC exclusions       |
| **Patient Age**               | UB-04 demographic                       | Some DRG logic is age-gated |
| **Discharge Status**          | Live discharge, transfer, expired, etc. | Payment adjustment          |
| **LOS**                       | Length of stay                          | Outlier payment threshold   |

> [!warning] Grouper Hierarchy Is Rigid
> The grouper does NOT assign the "best" DRG for the patient — it follows the decision tree exactly. If you miscategorize the principal diagnosis or miss a qualifying procedure, the grouper assigns the wrong DRG. Garbage in, garbage out.

---

## 🗃️ Major Diagnostic Categories (MDCs)

MDCs are the **first-level sort** — 25 broad body system / etiology categories that correspond roughly to medical specialties.

| MDC    | Title                                      | Common Specialties                                                         |
| ------ | ------------------------------------------ | -------------------------------------------------------------------------- |
| **MDC 01** | Nervous System                             | Neurology, Neurosurgery                                                    |
| **MDC 02** | Eye                                        | **Ophthalmology**                                                          |
| **MDC 03** | Ear, Nose, Mouth & Throat                  | **Otolaryngology / ENT**                                                   |
| **MDC 04** | Respiratory System                         | Pulmonology                                                                |
| **MDC 05** | Circulatory System                         | Cardiology, CV Surgery                                                     |
| **MDC 06** | Digestive System                           | GI, General Surgery                                                        |
| **MDC 07** | Hepatobiliary & Pancreas                   | Hepatology, General Surgery                                                |
| **MDC 08** | Musculoskeletal & Connective Tissue        | Orthopedics, Spine                                                         |
| **MDC 09** | Skin, Subcutaneous Tissue & Breast         | Dermatology, Plastics                                                      |
| **MDC 10** | Endocrine, Nutritional & Metabolic         | Endocrinology                                                              |
| **MDC 11** | Kidney & Urinary Tract                     | **Urology, Nephrology**                                                    |
| **MDC 12** | Male Reproductive System                   | **Urology**                                                                |
| **MDC 13** | Female Reproductive System                 | OB/GYN                                                                     |
| **MDC 14** | Pregnancy, Childbirth & Puerperium         | OB/GYN                                                                     |
| **MDC 15** | Newborns & Other Neonates                  | NICU, Pediatrics                                                           |
| **MDC 16** | Blood & Blood-Forming Organs               | Hematology                                                                 |
| **MDC 17** | Myeloproliferative / Poorly Diff Neoplasms | Oncology                                                                   |
| **MDC 18** | Infectious & Parasitic Diseases            | ID                                                                         |
| **MDC 19** | Mental Disorders                           | Psychiatry                                                                 |
| **MDC 20** | Alcohol/Drug Use & Disorders               | Behavioral Health                                                          |
| **MDC 21** | Injuries, Poisonings & Toxic Effects       | Trauma, Emergency                                                          |
| **MDC 22** | Burns                                      | Burn Center                                                                |
| **MDC 23** | Factors Influencing Health Status          | Preventive, Z-codes                                                        |
| **MDC 24** | Multiple Significant Trauma                | Trauma Surgery                                                             |
| **MDC 25** | HIV Infections                             | ID                                                                         |
| **—**      | Pre-MDC                                    | High-cost procedures assigned before MDC (ECMO, Transplants, Tracheostomy) |

> [!tip] Pre-MDC DRGs
> Procedures like tracheostomy with mechanical ventilation (0BH17EZ, 0BH18EZ) and organ transplants are assigned to **Pre-MDC DRGs** (DRG 001-017) *before* MDC assignment. These are among the highest-weighted DRGs in the system. Do not miss a qualifying PCS code for tracheostomy in your ENT/ICU cases.

---

## ⚖️ The CC/MCC Split — Where Reimbursement Lives

This is the most **actionable** area for coders and CDI professionals.

### Definitions

| Term | Full Name | Definition |
|------|-----------|------------|
| **MCC** | Major Complication or Comorbidity | Conditions that significantly increase resource use; highest reimbursement tier |
| **CC** | Complication or Comorbidity | Conditions that moderately increase resource use; middle tier |
| **No CC** | Non-CC | No qualifying secondary diagnoses; lowest tier |

### How CC/MCC Assignment Works

1. **CMS publishes the CC/MCC designation list** annually — each ICD-10-CM diagnosis code is classified as MCC, CC, or Non-CC.
2. Secondary diagnoses are evaluated against this list.
3. **CC Exclusion List**: Some diagnosis pairs are excluded — a CC/MCC is suppressed if it is too closely related to (or part of) the principal diagnosis. Example: Coding [[N18.6]] (ESRD) as a CC when [[50 Medical Coding/ICD-10 Codes/Z99.2]] (dependence on renal dialysis) is the principal would typically be excluded.
4. **POA Indicator**: A diagnosis present on admission may still qualify as a CC/MCC — but if it is a **Hospital-Acquired Condition (HAC)**, it is excluded from CC/MCC logic.
5. The **highest-severity qualifying secondary diagnosis** determines the DRG tier.

> [!important] One MCC Moves the DRG
> In most base DRG splits, capturing even a **single MCC** moves the case to the highest-tier DRG. That single code can represent thousands of dollars in reimbursement difference. This is why CDI queries targeting MCCs are high-priority.

### Common MCCs Across All Specialties

| MCC Code   | Description                            | Notes                                                           |
| ---------- | -------------------------------------- | --------------------------------------------------------------- |
| **[[J69.0]]** | Acute respiratory failure, unspecified | Extremely high-value MCC                                        |
| **[[J96.01]]** | Acute respiratory failure w/ hypoxia   | Preferred specificity over J96.00                               |
| **[[N17.9]]**  | Acute kidney injury (AKI)              | Ubiquitous MCC; requires documentation of AKI distinct from CKD |
| **[[D69.6]]**  | Thrombocytopenia, unspecified          | Common secondary finding                                        |
| **[[K72.00]]** | Acute hepatic failure                  |                                                                 |
| **[[G93.41]]** | Metabolic encephalopathy               | High-value; often underdocumented                               |
| **[[E87.1]]**  | Hyponatremia                           | MCC only when meeting threshold criteria                        |
| **[[I50.9]]**  | Heart failure, unspecified             | CC; specify type for potential MCC                              |
| **[[I50.21]]** | Acute systolic heart failure           | MCC                                                             |
| **[[A41.9]]**  | Sepsis, unspecified                    | MCC — query for source organism specificity                     |
| **[[R65.11]]** | Septic shock                           | MCC — highest severity; requires sepsis + organ dysfunction     |

---

## 💵 How MS-DRGs Drive Payment

### The Payment Formula

$$\text{Payment} = \text{DRG Relative Weight} \times \text{Hospital Base Rate}$$

**Where:**
- **DRG Relative Weight (RW)** = CMS-assigned value reflecting average resource intensity of that DRG relative to all other DRGs (RW 1.0000 = average cost case)
- **Hospital Base Rate** = hospital-specific rate adjusted for wage index, disproportionate share (DSH), IME (indirect medical education), and other factors

### Relative Weight Examples (FY2025 approximate)

| DRG     | Description                                       | RW (approx) |
| ------- | ------------------------------------------------- | ----------- |
| **001** | Heart transplant w/ MCC                           | **26.5+**       |
| **003** | ECMO or tracheostomy w/ MV 96+ hrs                | **18.0+**       |
| **149** | Major small & large bowel procedures w/ MCC       | **5.5**         |
| **329** | Major small & large bowel procedures no CC/MCC    | **2.1**         |
| **682** | Renal failure w/ MCC                              | **1.85**        |
| **683** | Renal failure w/ CC                               | **1.10**        |
| **684** | Renal failure w/o CC/MCC                          | **0.72**        |
| **853** | Infectious & parasitic diseases w/ OR proc w/ MCC | **5.9**         |

> [!note] Base Rate Varies by Hospital
> The national base rate is a starting point. Teaching hospitals (like **MCW**) have significantly higher effective base rates due to IME and DSH adjustments. This means a given DRG pays *more* at MCW than at a community hospital.

### Payment Adjustments

| Adjustment | Effect |
|---|---|
| **Short-stay outlier** | Payment reduced if LOS < geometric mean LOS |
| **Long-stay (cost) outlier** | Additional per diem payment if charges exceed threshold |
| **Transfer adjustment** | Reduced payment if patient transferred before geometric mean LOS |
| **HAC reduction** | Hospital penalized (1% reduction) if in worst quartile for HACs |
| **Readmission reduction** | Hospital penalized for excess readmissions in target conditions |

---

## 🔍 Reading a DRG — Anatomy of a DRG Assignment

### Example: Renal Failure Trio (DRG 682/683/684)

```
Base DRG: Renal Failure

  PDx: N17.9 — Acute kidney injury
  
  ┌─────────────────────────────────────────┐
  │ DRG 682 — Renal Failure WITH MCC        │  RW ≈ 1.85
  │ Requires: ≥1 qualifying MCC             │
  └─────────────────────────────────────────┘
  ┌─────────────────────────────────────────┐
  │ DRG 683 — Renal Failure WITH CC         │  RW ≈ 1.10
  │ Requires: ≥1 qualifying CC, no MCC      │
  └─────────────────────────────────────────┘
  ┌─────────────────────────────────────────┐
  │ DRG 684 — Renal Failure W/O CC/MCC      │  RW ≈ 0.72
  │ No qualifying CC or MCC present         │
  └─────────────────────────────────────────┘
```

If you add [[J96.01]] (Acute hypoxic respiratory failure) as a secondary dx → the case moves from DRG 684 to DRG **682**. The RW difference: 1.85 − 0.72 = **1.13 RW units.** At a $6,000 base rate, that equals **~$6,780 in additional reimbursement** — for one appropriately documented secondary diagnosis.

---

## 🏷️ DRG Types — Medical vs Surgical vs Procedure

Within each MDC, the grouper first asks: **Is there a qualifying OR procedure?**

### Surgical DRGs
- Assigned when an ICD-10-PCS procedure code maps to a **CMS-defined OR procedure** for that MDC
- OR procedures are CMS-designated, not necessarily literally performed in an operating room
- Generally carry **higher relative weights** than medical DRGs in the same MDC
- Example: 0VT04ZZ (Resection of prostate, open) → surgical DRG pathway in MDC 12

### Medical DRGs
- No qualifying OR procedure coded
- Reflect diagnosis-driven admissions managed without a designated surgical procedure
- Heavily dependent on CC/MCC capture for appropriate reimbursement

### Unrelated OR Procedure DRGs
- If a procedure is performed but is **unrelated** to the principal diagnosis MDC, the case may fall into MDC 24 (multiple significant trauma) or a high-cost DRG
- Coders must verify that all procedures are coded and that the principal procedure is selected correctly

> [!warning] OR Procedure Designation Is CMS-Defined
> Not every procedure coded in PCS qualifies as an "OR procedure" for DRG purposes. CMS publishes the OR procedure list annually. Misidentifying whether a procedure qualifies is a common source of DRG error.

---

## 📋 Base DRGs and Their Splits

Most DRGs come in triplets (w/ MCC / w/ CC / w/o CC/MCC). Some have only two tiers or a single DRG (no split). A handful are procedure-specific without CC/MCC splits.

### Reading the CMS DRG Table

| Column | Meaning |
|---|---|
| **DRG #** | Numeric identifier (001-999, not all used) |
| **MDC** | Major Diagnostic Category assignment |
| **Type** | MED (medical) or SURG (surgical) |
| **DRG Title** | Description of the group |
| **Weights** | Relative weight |
| **Geometric Mean LOS** | Statistical center of the stay distribution |
| **Arithmetic Mean LOS** | Average LOS (used for outlier calculations) |

### Two-Way Splits (w/ CC/MCC vs w/o)

Some DRGs do not separate CC from MCC — both qualify for the higher tier:

| DRG     | Description                                         |
| ------- | --------------------------------------------------- |
| **166/167** | Appendectomy w/complication / w/o complication      |
| **596/597** | Male reproductive system malignancy w/ CC/MCC / w/o |

### Single DRGs (No Split)

High-complexity procedures that are uniformly resource-intensive regardless of CC/MCC:
- **DRG 001:** Heart transplant or implant of heart assist system w/ MCC
- **DRG 003:** ECMO or tracheostomy w/ MV 96+ hrs

---

## 🔬 Specialty Relevance — Urology, OTO, Ophthalmology

### 🫘 Urology — MDC 11 & MDC 12

Urology spans two MDCs: kidney/urinary tract (11) and male reproductive (12).

**High-value surgical DRGs:**

| DRG         | Description                                                         | Notes                |
| ----------- | ------------------------------------------------------------------- | -------------------- |
| **651/652/653** | Kidney transplant w/ MCC/CC/no CC                                   | Extremely high RW    |
| **670/671/672** | Urethral procedures w/ MCC/CC/no CC                                 | Cystoscopy-dependent |
| **673/674/675** | Other kidney & urinary tract procedures w/ MCC/CC/no CC             | Broad category       |
| **726/727/728** | Benign prostatic hypertrophy w/ MCC/CC/no CC                        | TURP cases           |
| **734/735**     | Pelvic evisceration, radical cystectomy & ureterectomy w/ MCC/no CC | Major oncology       |

**Key MCCs/CCs to capture in Urology:**
- [[N17.9]] — AKI (especially post-op or in obstruction cases)
- [[N18.30]], [[N18.4]], [[N18.5]] — CKD stages (CCs/MCCs depending on stage)
- [[R33.9]] — Urinary retention (context-dependent)
- T83.xxx — Complications of genitourinary prosthetics/devices (CC/MCC depending on specificity)
- [[A41.51]] — Sepsis due to Escherichia coli (MCC — common in urosepsis)

> [!tip] Urosepsis Is Not a Diagnosis
> "**Urosepsis**" has no ICD-10-CM code. When documented, query for **sepsis** with urinary tract as the source. Coding only [[N39.0]] (UTI) misses the MCC opportunity for A41.xx + [[R65.20]] or [[R65.21]] (severe sepsis).

---

### 👂 Otolaryngology / ENT — MDC 03

MDC 03 covers ear, nose, mouth, and throat. OTO cases frequently involve head and neck oncology, laryngeal procedures, sinus surgery, and salivary gland work.

**High-value surgical DRGs:**

| DRG         | Description                                                   | Notes                      |
| ----------- | ------------------------------------------------------------- | -------------------------- |
| **129/130/131** | Major head & neck procedures w/ MCC/CC/no CC                  | Laryngectomy, radical neck |
| **132/133**     | Facial fracture procedures w/ CC/MCC / no CC                  | OMS overlap                |
| **134/135/136** | Sinus & mastoid procedures adult w/ MCC/CC/no CC              | Endoscopic sinus surgery   |
| **154/155/156** | Other ear, nose, mouth & throat OR procedures w/ MCC/CC/no CC | Broad catch-all            |
| **157/158**     | Dental & oral procedures w/ CC/MCC / no CC                    | OMS cases                  |

**Key MCCs/CCs for ENT:**
- [[G47.33]] — Obstructive sleep apnea — CC; relevant in UPPP/tonsil cases
- [[E11.65]] — T2DM with hyperglycemia — CC; common comorbidity in surgical cases
- [[J04.0]] — Acute laryngitis (context-dependent)
- [[J38.00]], [[J38.01]], [[J38.02]] — Vocal cord paralysis — relevant post-procedure
- [[C32.0]]-[[C32.9]] — Malignant neoplasm of larynx — principal dx driving surgical DRG in laryngectomy
- [[F17.210]] — Nicotine dependence, cigarettes — CC

> [!tip] Tracheostomy Is Pre-MDC
> When an ENT patient requires a **tracheostomy with mechanical ventilation**, the case exits **MDC 03** entirely and enters **Pre-MDC DRG 003 or 004**. These carry relative weights of 14-19+. Always confirm tracheostomy PCS coding is complete. See 0B110F4 (bypass trachea) vs 0BH17EZ (insertion endotracheal airway).

---

### 👁️ Ophthalmology — MDC 02

Ophthalmology inpatient cases are less common (most ophthalmic procedures are outpatient), but the ones that do present inpatient tend to involve complex retinal disease, trauma, or postoperative complications.

**Relevant DRGs in MDC 02:**

| DRG | Description | Notes |
|-----|-------------|-------|
| 113/114/115 | Orbital procedures w/ MCC/CC/no CC | Orbital decompression, trauma |
| 116/117/118 | Other disorders of the eye w/ MCC/CC/no CC | Broad medical DRG |
| 121/122/123 | Acute major eye infections w/ MCC/CC/no CC | Endophthalmitis |
| 124 | Neurological eye disorders | Cranial nerve disease |
| 125 | Other disorders of the eye w/o CC/MCC | Lower acuity cases |

**Key MCCs/CCs for Ophthalmology:**
- [[H44.001]] — Purulent endophthalmitis (complex, MCC-eligible secondary if sepsis present)
- [[E11.3511]] — T2DM with proliferative diabetic retinopathy — highly specific; CC
- [[H40.033]] — Angle-closure glaucoma, chronic — see [[H40.033]]
- [[H30.101]] — Unspecified chorioretinal inflammation — see [[H30.101]]
- [[Z79.01]] — Long-term use of anticoagulants — CC; impacts surgical planning and documentation

> [!note] Ophthalmology Inpatient Reality
> Most ophthalmic procedures (cataract, glaucoma implant, retinal detachment repair) are done outpatient and do not generate a DRG. Inpatient ophthalmic DRGs most often occur when the **primary admission reason is non-ophthalmic** and an eye procedure is performed as secondary, or when the patient's systemic condition (diabetic retinopathy with tractional detachment, severe trauma) necessitates inpatient status.

---

### 🦽 Physical Medicine & Rehabilitation (PM&R)

PM&R cases fall under **CMS-certified Inpatient Rehabilitation Facilities (IRFs)** which use a **different payment system — IRF-PPS**, not IPPS/MS-DRGs. However, when PM&R patients are admitted to an **acute care hospital**, standard MS-DRG assignment applies.

**Common acute PM&R DRGs:**
- **DRG 947/948** — Signs & symptoms w/ MCC / w/o CC/MCC
- **DRG 559/560/561** — Aftercare, musculoskeletal w/ MCC/CC/no CC
- **MDC 01 DRGs for CVA, TBI, SCI** cases pending transfer to IRF

**Key PM&R MCCs/CCs:**
- **[[G82.50]]** — Quadriplegia, unspecified — MCC
- **[[G82.20]]** — Paraplegia, unspecified — MCC
- **[[G83.4]]** — Cauda equina syndrome — CC/MCC context-dependent; see **[[G83.4]]**
- **[[G54.4]]** — Lumbosacral root disorders — see **[[G54.4]]**
- **[[R26.89]]** — Other abnormalities of gait/mobility — Non-CC; query for specificity
- **[[M62.50]]** — Muscle weakness, unspecified — Non-CC; look for specific myopathy codes

---

## 🩺 CDI Querying and DRG Optimization

**CDI (Clinical Documentation Integrity)** professionals and coders work together to ensure the DRG reflects the true severity of the patient's stay. This is **not upcoding** — it is closing documentation gaps.

### When to Initiate a Query

| Trigger                                                                       | Query Goal                                           |
| ----------------------------------------------------------------------------- | ---------------------------------------------------- |
| Clinical indicators of AKI (creatinine trending up) but no AKI documentation  | **Establish [[N17.9]] as secondary dx (MCC)**        |
| Sepsis criteria met (SIRS + infection source) but only "infection" documented | **Establish A41.xx (MCC)**                           |
| "Acute-on-chronic" respiratory failure mentioned in notes inconsistently      | **Establish [[J69.0]] or [[J96.01]] (MCC)**         |
| Metabolic encephalopathy signs without clear documentation                    | **Establish [[G93.41]] (MCC)**                       |
| Malnutrition indicators (albumin, BMI, weight loss)                           | **Establish [[E43]] or [[E44.0]] (CC/MCC)**          |
| Pressure injuries noted in wound care notes                                   | **Establish stage → CC/MCC**                         |
| Anemia workup but no specific type documented                                 | **Establish [[D64.9]] vs more specific anemia (CC)** |
| Fluid imbalance with treatment (IV fluids, electrolyte replacement)           | **Establish [[E87.1]], [[E86.0]] etc. (CC/MCC)**     |

### Query Best Practices

> [!tip] Compliant Queries
> Per AHIMA and ACDIS guidelines, queries must be:
> - **Non-leading** — offer multiple clinically reasonable options including "clinically undetermined"
> - **Based on clinical indicators** — not written to chase a DRG
> - **Documented in the medical record** — query and response both become part of the record
> - **Physician/provider response required** — coders cannot self-determine diagnoses

### DRG-Impacting Query Examples

**Query Type 1: AKI**
> "The patient's creatinine on admission was 1.2 and peaked at 2.8 during hospitalization. IV fluids were administered. Would you please clarify whether the patient experienced: Acute Kidney Injury (AKI) / Acute on Chronic Kidney Disease / Pre-renal azotemia / Clinically undetermined"

**Query Type 2: Sepsis**
> "The patient presented with WBC 18.4, temperature 38.9°C, HR 112, suspected source of urinary tract infection, and was started on broad-spectrum antibiotics. Would you clarify whether: Sepsis / Severe sepsis / Septic shock / Systemic Inflammatory Response Syndrome (SIRS) / Clinically undetermined is an accurate characterization?"

**Query Type 3: Malnutrition**
> "Albumin 2.1, BMI 17.2, documented 15% weight loss over 3 months; nutrition consult placed. Would you document whether: Severe protein-calorie malnutrition / Moderate protein-calorie malnutrition / Mild malnutrition / No malnutrition / Clinically undetermined?"

---

## ⚠️ Common Coding Pitfalls That Affect DRGs

| Pitfall                                                        | Impact                                                  | Correction                                     |
| -------------------------------------------------------------- | ------------------------------------------------------- | ---------------------------------------------- |
| **Incorrect principal diagnosis sequencing**                       | Wrong MDC assignment; entire DRG may change             | Review UHDDS guidelines; apply OGCR Section II |
| **Coding "urosepsis" as UTI only**                                 | Misses MCC; DRG stays in low tier                       | Query for sepsis documentation                 |
| **Not coding AKI when clinically evident**                         | Misses MCC                                              | Query or review BMP trends                     |
| **Coding "respiratory failure" without specificity**               | Loses MCC if [[J96.01]] (w/ hypoxia) applicable         | Query for type                                 |
| **Missing tracheostomy PCS code**                                  | Misses Pre-MDC DRG                                      | Verify operative reports                       |
| **POA indicator error**                                            | HAC may be incorrectly triggered                        | Review timing of diagnosis carefully           |
| **CC Exclusion List unawareness**                                  | Adding a CC that is excluded from the PDx               | Reference CMS CC Exclusion table annually      |
| **Not coding all significant procedures**                          | May miss surgical DRG qualification                     | Code all OR procedures documented              |
| **Coding signs/symptoms separately when causative dx established** | Inflates code count without DRG benefit; OGCR violation | Follow OGCR I.C and III guidelines             |
| **Over-relying on "unspecified" diagnosis codes**                  | Lower CC/MCC tier; leaves reimbursement on table        | Query for specificity                          |

---

## 🛠️ Practical Workflow for Coders

### Step-by-Step Inpatient Abstraction with DRG in Mind

```
1. READ the discharge summary first
   → Identify the reason for admission (guides PDx)
   → Note all active diagnoses documented at discharge

2. REVIEW the H&P and Progress Notes
   → Clinical indicators that may need querying
   → Note diagnoses mentioned but not confirmed in summary

3. CODE the principal diagnosis
   → Apply OGCR Section II sequencing rules
   → Confirm it drives the correct MDC

4. CODE all secondary diagnoses
   → Apply CC/MCC designation awareness
   → Check CC Exclusion List for each secondary

5. CODE all procedures (ICD-10-PCS)
   → Confirm OR procedure qualification
   → Do not miss tracheostomy, implants, complex repairs

6. ASSIGN POA indicators
   → Every secondary diagnosis needs a POA flag
   → "Y" = present, "N" = developed during stay, "U" = unknown, "W" = clinically undetermined

7. RUN through grouper (or simulate)
   → Confirm expected DRG
   → If DRG seems low for the complexity, re-examine secondary codes

8. QUERY if needed
   → Use clinical indicators, not DRG target
   → Document query in designated tracking system

9. FINALIZE and submit
   → Re-run grouper post-query response
   → Confirm DRG, RW, and expected LOS alignment
```

---

## 📚 References & Resources

| Resource                             | Description                             | URL                                                                 |
| ------------------------------------ | --------------------------------------- | ------------------------------------------------------------------- |
| **CMS ICD-10 MS-DRG Grouper & MCE**  | Official grouper files; updated each FY | cms.gov/Medicare/Medicare-Fee-for-Service-Payment/AcuteInpatientPPS |
| **CMS IPPS Final Rule**              | Annual payment rule with DRG table      | Federal Register / cms.gov                                          |
| **FY2025 MS-DRG Definitions Manual** | CMS official manual; full DRG logic     | cms.gov                                                             |
| **AHIMA CDI Practice Brief**         | Query format and compliance guidance    | ahima.org                                                           |
| **ACDIS CDI Pocket Guide**           | Practical CDI reference                 | acdis.org                                                           |
| **AAPC CIC Exam Prep**               | Inpatient coding certification study    | aapc.com                                                            |
| **3M Encoder**                       | Industry-standard grouper tool          | 3mhis.com                                                           |
| **OptumInsight Encoder**             | Common alternative grouper              | optum.com                                                           |

---

## 🔗 Related Notes

- [[CC-MCC Reference]] — Full CC/MCC designation deep-dive with specialty tables
- [[ICD-10-PCS_Overview]] — PCS structure and table navigation
- [[MDC 11 - Urology]] — Kidney & urinary tract DRG map
- [[MDC 12 - Male Reproductive]] — Male reproductive DRG map
- [[MDC 03 - ENT]] — Ear, nose, mouth & throat DRG map
- [[MDC 02 - Eye]] — Ophthalmology DRG map
- [[IPPS_Payment_Overview]] — Full IPPS payment methodology
- [[CDI Query Templates]] — Compliant query language library
- [[UHDDS_Principal_Diagnosis]] — Sequencing rules reference
- [[POA_Indicator_Guide]] — Present on admission logic
- [[HAC_List]] — Hospital-acquired conditions that affect CC/MCC
- [[G83.4]] — Cauda equina syndrome (PM&R)
- [[N17.9]] — AKI (high-value MCC)
- [[A41.9]] — Sepsis (MCC reference)
- [[H40.033]] — Angle-closure glaucoma
- [[H30.101]] — Chorioretinal inflammation

---

*Note compiled for inpatient abstraction reference. DRG weights and designations update annually (October 1). Always verify against the current fiscal year CMS tables.*
