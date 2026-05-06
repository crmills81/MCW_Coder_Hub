---
tags:
  - mdc-02
  - drg
  - ophthalmology
  - eye
  - retina
  - glaucoma
  - inpatient
  - reimbursement
title: MDC 02 — Eye (Ophthalmology)
aliases:
  - MDC 02
  - MDC02
  - Eye DRGs
  - Ophthalmology DRGs
  - Ocular DRGs
specialty: Ophthalmology
code_type: MDC / DRG Reference
system: CMS MS-DRG FY2025
updated: 2025-05-05
related:
  - MS-DRG_Overview
  - CC-MCC_Reference
  - CDI_Query_Templates
  - MDC_03_ENT
  - POA_Indicator_Guide
status: complete
---

# 👁️ MDC 02 — Eye (Ophthalmology)

> [!abstract] MDC 02 Scope
> **MDC 02** covers diseases and disorders of the **eye and ocular adnexa** — the **[[globe]]**, **orbit**, **eyelid**, lacrimal apparatus, **conjunctiva**, cornea, lens, **[[vitreous]]**, retina, and optic nerve. Principal diagnosis must fall within the **ICD-10-CM** eye chapter (**H00-H59**) or selected **[[neoplasm]]**/trauma codes mapped to **MDC 02**.

---

## 📌 Specialty Context — The Inpatient Reality

> [!important] Most Ophthalmology Is Outpatient
> The vast majority of ophthalmic procedures — **cataract extraction, glaucoma drainage implants, retinal detachment repair, intravitreal injections** — are performed **outpatient** and generate no inpatient **DRG. MDC 02** inpatient cases are relatively uncommon and typically involve:
> - Severe ocular trauma or penetrating injury
> - **[[Endophthalmitis]]** requiring systemic antibiotics and/or **[[vitrectomy]]**
> - Complications of prior eye procedures requiring hospitalization
> - Diabetic eye disease (**tractional detachment**) requiring inpatient vitreoretinal surgery
> - Orbital **[[cellulitis]]** / **[[abscess]]** threatening vision or CNS spread
> - Patients admitted primarily for a non-ophthalmic condition who also undergo an eye procedure

When an eye procedure is performed during a hospitalization whose **principal diagnosis is from another MDC**, the case may **NOT** be in **MDC 02** — the **MDC** follows the principal diagnosis.

---

## 🔢 MDC 02 DRG Table — Surgical

| DRG     | Description                                    | RW (approx) | Geo Mean LOS |
| ------- | ---------------------------------------------- | ----------- | ------------ |
| **113** | Orbital procedures w/ CC/MCC                   | **2.10**        | **5.5**          |
| **114** | Orbital procedures w/o CC/MCC                  | **1.10**        | **2.5**          |
| **115** | Extraocular procedures except orbit w/ CC/MCC  | **1.85**        | **4.8**          |
| **116** | Extraocular procedures except orbit w/o CC/MCC | **0.95**        | **2.2**          |
| **117** | Intraocular procedures w/ CC/MCC               | **1.60**        | **4.0**          |
| **118** | Intraocular procedures w/o CC/MCC              | **0.85**        | **1.8**          |

> [!note] Two-Way Splits in MDC 02
> All MDC 02 surgical DRGs use **two-way splits** (**w/ CC/MCC vs w/o**). Any single qualifying CC or MCC moves the case to the higher tier. See [[CC-MCC Reference]] for designation details.

---

## 🩺 MDC 02 DRG Table — Medical

| DRG     | Description                           | RW (approx) | Geo Mean LOS |
| ------- | ------------------------------------- | ----------- | ------------ |
| **121** | Acute major eye infections w/ CC/MCC  | **1.40**        | **5.2**          |
| **122** | Acute major eye infections w/o CC/MCC | **0.80**        | **3.0**          |
| **123** | Neurological eye disorders            | **1.10**        | **3.8**          |
| **124** | Other disorders of the eye w/ MCC     | **1.55**        | **5.5**          |
| **125** | Other disorders of the eye w/ CC      | **0.90**        | **3.5**          |
| **126** | Other disorders of the eye w/o CC/MCC | **0.60**        | **2.2**          |

---

## ⚖️ CC/MCC Drivers — MDC 02

### MCCs in Ophthalmology Context

| Code       | Description                   | Scenario                                                         |
| ---------- | ----------------------------- | ---------------------------------------------------------------- |
| **[[A41.9]]**  | Sepsis                        | Endophthalmitis with systemic spread                             |
| **[[R65.20]]** | Severe sepsis                 | Orbital cellulitis → sepsis                                      |
| **[[J96.01]]** | Acute resp failure w/ hypoxia | Post-op in medically complex patient                             |
| **[[N17.9]]**  | AKI                           | Nephrotoxic antifungals (voriconazole) in fungal endophthalmitis |
| **[[G93.41]]** | Metabolic encephalopathy      | AMS in diabetic eye patient                                      |
| **[[E43]]**    | Severe malnutrition           | Nutritionally deprived patient with ocular complication          |
| **[[G12.21]]** | ALS                           | Neurological eye disorder context                                |

### CCs in Ophthalmology Context

| Code             | Description                                              | Scenario                                                           |
| ---------------- | -------------------------------------------------------- | ------------------------------------------------------------------ |
| **[[H44.001]]**  | Purulent endophthalmitis, unspecified                    | Intraocular infection — CC when isolated ocular, MCC when systemic |
| **[[H44.011]]**  | Panophthalmitis, right eye                               | More severe; full globe infection                                  |
| **[[H59.031]]**  | Cataract fragments in vitreous post-procedure            | Retained lens fragment — CC                                        |
| **[[E11.3511]]** | T2DM w/ prolif DR, right, w/ mac edema                   | Highly specific diabetic eye CC                                    |
| **[[E11.3512]]** | T2DM w/ prolif DR, left, w/ mac edema                    |                                                                    |
| **[[E10.3511]]** | T1DM w/ prolif DR, right, w/ mac edema                   | Specify T1 vs T2                                                   |
| **H40.033x**     | Angle-closure glaucoma, chronic — see [[H40.033]]        | Glaucoma CC                                                        |
| **[[H30.101]]**  | Unspecified chorioretinal inflammation — see [[H30.101]] | Uveitis CC                                                         |
| **[[H33.001]]**  | Unspecified retinal detachment w/ retinal break          | Surgical DRG driver                                                |
| **[[S05.61XA]]** | Penetrating wound of orbit with FB                       | Trauma with orbital foreign body                                   |
| **[[B02.34]]**   | Herpes zoster ocular disease                             | HZO with keratitis/uveitis                                         |
| **[[Z79.01]]**   | Long-term anticoagulant use                              | Vitreous hemorrhage; surgical risk                                 |
| **[[E11.65]]**   | T2DM with hyperglycemia                                  | Glucose management during admission                                |
| **[[G47.33]]**   | OSA                                                      | Anesthesia risk for intraocular procedures                         |
| **[[A54.33]]**   | Gonococcal keratitis                                     | STI-related ocular CC                                              |
| **[[Z96.1]]**    | Presence of intraocular lens                             | Context for post-cataract complications                            |

---

## 🔪 Key ICD-10-PCS Procedures — Ophthalmology

### Orbit / Extraocular

| PCS Code    | Description                                  | OR? | DRG Pathway                 |
| ----------- | -------------------------------------------- | --- | --------------------------- |
| **08N00ZZ** | Release of right orbit                       | Yes | **DRG 113/114 — Orbital**       |
| **08Q00ZZ** | Repair of right orbit                        | Yes | **DRG 113/114**                 |
| **08R00KZ** | Replacement of right orbit, synthetic        | Yes | **DRG 113/114**                 |
| **08B10ZZ** | Excision of right eyelid                     | Yes | **DRG 115/116 — Extraocular**   |
| **08T10ZZ** | Resection of right eyelid                    | Yes | **DRG 115/116**                 |
| **081X0ZZ** | Bypass lacrimal duct, right, to nasal cavity | Yes | **DCR procedure — DRG 115/116** |
| **08C10ZZ** | Extirpation of matter, right eyelid          | Yes | **DRG 115/116**                 |

### Intraocular

| PCS Code    | Description                                                   | OR?    | DRG Pathway                  |
| ----------- | ------------------------------------------------------------- | ------ | ---------------------------- |
| **08T10ZZ** | Resection of lens, right eye (IOL removal)                    | Yes    | **DRG 117/118 — Intraocular**    |
| **08RJ0JZ** | Replacement of right eye lens, synthetic (IOL insertion)      | Yes    | **DRG 117/118**                  |
| **08VF0CZ** | Restriction of right vitreous, extraluminal                   | Yes    | **DRG 117/118**                  |
| **08C63ZZ** | Extirpation, right vitreous, perc (vitrectomy approach)       | Yes    | **DRG 117/118**                  |
| **08150ZZ** | Bypass right anterior chamber to sclera                       | Yes    | **DRG 117/118 — Trabeculectomy** |
| **08H00MZ** | Insertion of drainage device, right eye (glaucoma tube-shunt) | Yes    | **DRG 117/118**                  |
| **08NC0ZZ** | Release of right sclera                                       | Yes    | **DRG 117/118**                  |
| **08QF0ZZ** | Repair of right vitreous (gas tamponade/retinal)              | Yes    | **DRG 117/118**                  |
| **087F0ZZ** | Dilation of right vitreous                                    | Varies | **Verify OR status**             |

> [!tip] Intravitreal Injection Is Non-OR
> **Intravitreal injection** of **anti-VEGF agents** (**bevacizumab, ranibizumab, aflibercept**) is a **Non-OR procedure** at the inpatient level. It does not qualify for a surgical **DRG**. If the only eye procedure is **intravitreal injection**, the case stays on the medical **DRG** pathway.

---

## 🔬 Principal Diagnosis Guide — MDC 02

| Clinical Scenario                                 | PDx Code         | DRG Pathway                                           |
| ------------------------------------------------- | ---------------- | ----------------------------------------------------- |
| Bacterial endophthalmitis, vitrectomy             | **[[H44.001]]**  | DRG 121/122 medical; if vitrectomy → 117/118 surgical |
| Traumatic globe rupture, repair                   | **[[S05.2X1A]]** | DRG 113/114 or 115/116 depending on extent            |
| Orbital cellulitis with abscess                   | **[[H05.019]]**  | DRG 121/122 — acute major eye infection               |
| Tractional retinal detachment, vitrectomy         | **H33.40x**      | DRG 117/118 — intraocular                             |
| Rhegmatogenous retinal detachment, scleral buckle | **[[H33.001]]**  | DRG 117/118 — intraocular                             |
| Glaucoma, acute angle-closure                     | **H40.211x**     | DRG 124/125/126 — other disorders of eye              |
| Optic neuritis                                    | **[[H46.10]]**   | DRG 123 — neurological eye disorders                  |
| Diplopia, 3rd nerve palsy                         | **[[H49.00]]**   | DRG 123 — neurological eye                            |
| Retained intraocular foreign body                 | **H44.60x**      | DRG 117/118 if removed surgically                     |
| Post-cataract IOL dislocation                     | **[[H27.119]]**  | DRG 117/118 if repositioned/replaced                  |
| Herpes zoster ophthalmicus                        | **[[B02.34]]**   | DRG 121/122 — acute major infection                   |

---

## 🧪 Key Sequencing Pitfalls — MDC 02

### Pitfall 1: Eye Procedure in a Non-Eye Admission

**Scenario:** Patient admitted for sepsis from endocarditis. Ophthalmology performs vitrectomy for endogenous endophthalmitis during the same admission.

❌ **Wrong:** Code [[H44.001]] as PDx → MDC 02
✅ **Correct:** PDx is sepsis → **MDC 18**. Eye procedure is coded but does not change the MDC. Endophthalmitis is a secondary diagnosis, not the reason for admission.

---

### Pitfall 2: Diabetic Retinopathy Specificity Loss

**Scenario:** T2DM patient with proliferative diabetic retinopathy, vitrectomy performed, right eye, with macular edema noted in op note.

❌ **Wrong:** [[E11.39]] — T2DM with other diabetic ophthalmic complication (unspecified)
✅ **Correct:** [[E11.3511]] — T2DM with proliferative diabetic retinopathy with macular edema, right eye — CC with far greater clinical specificity

---

### Pitfall 3: Endophthalmitis Severity Not Escalated

**Scenario:** Vitreous culture positive for S. aureus post-cataract surgery. Patient febrile, bacteremic.

❌ **Wrong:** Code only [[H44.001]] purulent endophthalmitis
✅ **Correct:** Query for sepsis — [[A41.01]] (MSSA sepsis) or [[A41.02]] (MRSA) becomes PDx; endophthalmitis is source. MCC tier secured.

---

### Pitfall 4: Laterality Missing on Eye Codes

**Scenario:** Coder uses [[H44.009]] (endophthalmitis, unspecified eye) when op report clearly documents right eye.

✅ **Correct:** [[H44.001]] right eye — specificity matters for quality metrics, bilateral flag, and clinical accuracy even when DRG is unaffected.

---

## 📋 Coding Scenarios

### Scenario 1: Endogenous Endophthalmitis, IV Drug Use

**Admit:** 34M, IVDU, fever, right eye pain and vision loss. Vitreous tap + vitrectomy performed. Blood cultures → MRSA.

| Code        | Type | Notes                                                     |
| ----------- | ---- | --------------------------------------------------------- |
| [[A41.02]]  | PDx  | Sepsis due to MRSA — systemic; query confirmed            |
| [[H44.001]] | SDx  | Purulent endophthalmitis right eye — source               |
| [[F11.20]]  | SDx  | Opioid use disorder, uncomplicated — CC                   |
| 08C63ZZ     | Proc | Vitrectomy (extirpation of vitreous, right, percutaneous) |

**DRG:** MDC 18 sepsis DRG (not MDC 02) — PDx of sepsis exits eye MDC.
**Without sepsis query:** Would be DRG 117 (intraocular w/ CC/MCC) — lower RW.

---

### Scenario 2: Tractional Retinal Detachment, Diabetic

**Admit:** 59F, T2DM, tractional retinal detachment left eye. Vitrectomy, membrane peel, silicone oil tamponade.
**Comorbidities:** T2DM [[E11.3512]] (prolif DR w/ mac edema, left, already established as PDx context), CKD 3a [[N18.31]], HTN [[I10]].

| Code         | Type | Notes                                                 |
| ------------ | ---- | ----------------------------------------------------- |
| H33.40x      | PDx  | Traction detachment of retina (left — add laterality) |
| [[E11.3512]] | SDx  | T2DM w/ prolif DR, left, w/ mac edema — CC            |
| [[N18.31]]   | SDx  | CKD Stage 3a — CC                                     |
| [[I10]]      | SDx  | HTN — CC (if managed)                                 |
| 08QF0ZZ      | Proc | Repair of vitreous, right (confirm laterality in PCS) |

**DRG:** 117 — Intraocular procedures w/ CC/MCC
**No MCC present** — multiple CCs cap at CC tier (DRG 117). CDI opportunity: check post-op creatinine with nephrotoxic eye drops or IV contrast.

---

## 🩺 CDI Opportunities — MDC 02

| Clinical Finding                                    | Query Target                            | Impact                        |
| --------------------------------------------------- | --------------------------------------- | ----------------------------- |
| Bacteremia / systemic signs with endophthalmitis    | [[Sepsis]] A41.xx                       | MCC; may exit MDC 02 entirely |
| Post-op creatinine rise / nephrotoxic drops         | AKI [[N17.9]]                           | MCC                           |
| Vague "diabetic retinopathy" documentation          | DR type + laterality + mac edema status | CC specificity                |
| Orbital cellulitis spreading toward cavernous sinus | Sepsis query                            | MCC                           |
| Antifungal therapy (amphotericin, voriconazole)     | Fungal organism confirmation            | Specificity                   |
| Albumin low in elderly ophthalmic patient           | Malnutrition [[E43]]/[[E44.0]]          | MCC/CC                        |

See [[CDI Query Templates]] for query language.

---

## 🔗 Related Notes

- [[MS-DRG_Overview]]
- [[CC-MCC Reference]]
- [[CDI Query Templates]]
- [[MDC 03 - ENT]]
- [[POA_Indicator_Guide]]
- [[H40.033]]
- [[H30.101]]
