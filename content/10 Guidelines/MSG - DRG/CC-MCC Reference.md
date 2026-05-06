---
title: CC/MCC Reference — Complication & Comorbidity Designation Guide
aliases: [CC MCC, Complication Comorbidity, CC/MCC List, MCC Reference, CC Reference]
tags: [cc-mcc, drg, inpatient, reimbursement, severity, coding-fundamentals]
specialty: All Inpatient
code_type: DRG Reference
system: CMS MS-DRG
updated: 2025-05-05
related: [MS-DRG_Overview, CDI_Query_Templates, MDC_11_Urology, MDC_03_ENT, MDC_02_Eye, HAC_List, POA_Indicator_Guide]
status: complete
---

# ⚖️ CC/MCC Reference — Complication & Comorbidity Designation Guide

> [!abstract] One-Line Definition
> A **CC (Complication or Comorbidity)** or **MCC (Major Complication or Comorbidity)** is a secondary ICD-10-CM diagnosis that CMS has designated as significantly increasing the resources required to treat a patient, thereby qualifying the case for a higher-weighted MS-DRG tier.

---

## 📌 Why This Note Exists

The CC/MCC list is the **single most impactful variable** a coder controls in DRG assignment. Everything else — the MDC, the surgical pathway — is largely determined by the principal diagnosis and procedure. But the **tier** within that DRG (w/ MCC vs w/ CC vs w/o CC/MCC) lives entirely in secondary diagnosis capture.

> [!important] The Stakes
> The reimbursement difference between a No-CC DRG and an MCC DRG for the same base DRG can be **$4,000-$15,000+** depending on the hospital's base rate. Missing a documented, supportable MCC is both a revenue integrity failure and an incomplete representation of patient complexity.

---

## 🗂️ Section Index

1. [[#🔢 How CC/MCC Designation Works]]
2. [[#🚫 The CC Exclusion List]]
3. [[#🏥 POA and HAC Interaction]]
4. [[#🔴 High-Value MCCs — Universal]]
5. [[#🟡 High-Value CCs — Universal]]
6. [[#🫘 Urology-Specific CC/MCC Table]]
7. [[#👂 ENT/OTO-Specific CC/MCC Table]]
8. [[#👁️ Ophthalmology-Specific CC/MCC Table]]
9. [[#🦽 PM&R-Specific CC/MCC Table]]
10. [[#📋 CC/MCC by Body System — Quick Reference]]
11. [[#🛠️ Coder Workflow for CC/MCC Capture]]

---

## 🔢 How CC/MCC Designation Works

### Assignment Logic

1. **CMS publishes the designation table** annually with each IPPS Final Rule (effective October 1)
2. Every ICD-10-CM code is classified as: **MCC / CC / Non-CC**
3. The grouper evaluates all coded secondary diagnoses against this list
4. The **highest-severity qualifying secondary diagnosis** determines the DRG tier
5. If one MCC is present → MCC-tier DRG, regardless of how many CCs are also present
6. If CCs present but no MCC → CC-tier DRG
7. If no qualifying CC or MCC → base (no CC/MCC) DRG

### What Makes a Diagnosis "Qualifying"

To count toward CC/MCC status, the secondary diagnosis must:

| Requirement | Details |
|---|---|
| Be **separately documented** | Cannot be inherent to or part of the principal diagnosis |
| Pass the **CC Exclusion List** | Not on the exclusion pairing list for the principal diagnosis |
| Have a valid **POA indicator** | POA = Y, W, or 1 — POA = N diagnoses may trigger HAC exclusion |
| Be **clinically significant** | Evaluated, treated, or documented as affecting the hospital stay |
| Meet **UHDDS secondary diagnosis criteria** | Requires evaluation, treatment, therapeutic intervention, or increased nursing care |

---

## 🚫 The CC Exclusion List

CMS maintains a **CC Exclusion List** that pairs principal diagnoses with secondary diagnoses that are too closely related (integral to, manifestation of, or non-additive) to count as CCs.

> [!warning] This List Changes Annually
> The CC Exclusion List is updated every October 1 with the IPPS Final Rule. Always verify your encoder reflects the current FY table. Do not rely on prior-year exclusion knowledge.

### Common Exclusion Logic Examples

| Principal Diagnosis      | Excluded CC/MCC                    | Reason                                   |
| ------------------------ | ---------------------------------- | ---------------------------------------- |
| **[[N18.6]] ESRD**       | **[[Z99.2]] Dialysis dependence**      | Redundant — ESRD implies dialysis        |
| **[[I21.9]] AMI**        | **[[I25.10]] Coronary artery disease** | Integral relationship                    |
| **[[J18.9]] Pneumonia**  | **[[J96.00]] Respiratory failure**     | May be excluded as expected complication |
| **[[K74.60]] Cirrhosis** | **[[K72.10]] Chronic hepatic failure** | Integral manifestation                   |
| **[[A41.9]] Sepsis**     | **[[R65.10]] SIRS**                    | SIRS is definitional component of sepsis |

> [!tip] Encoder Dependence
> Your encoder (3M, Optum, etc.) applies the CC Exclusion List automatically. The coder's job is to verify that the exclusion makes clinical sense and that no data entry error is causing an incorrect exclusion.

---

## 🏥 POA and HAC Interaction

### Present on Admission (POA) Indicators

| Indicator | Meaning | CC/MCC Effect |
|---|---|---|
| **Y** | Present at time of admission | Qualifies for CC/MCC |
| **N** | Not present at admission; developed during stay | Excluded from CC/MCC if it is a HAC |
| **U** | Unknown; insufficient documentation | Does NOT qualify for CC/MCC |
| **W** | Clinically undetermined; not known until after admission | Qualifies for CC/MCC |
| **1** | Exempt from POA reporting (exempt list) | Qualifies for CC/MCC |

### Hospital-Acquired Conditions (HACs)

HACs are conditions CMS has identified as **preventable complications**. If a condition is both a HAC and POA = N, it is **excluded from CC/MCC logic**, meaning:
- The condition is still coded
- It does NOT contribute to a higher DRG tier
- The hospital may face additional payment penalties

**Key HAC Categories (partial list):**

| HAC                      | Diagnosis Examples                                    |
| ------------------------ | ----------------------------------------------------- |
| Pressure Ulcers          | **L89.xx3, L89.xx4, L89.xx0 (Stage 3/4/Unstageable)** |
| Falls & Trauma           | **[[S72.001A]] Hip fracture after fall during stay**  |
| Catheter-Associated UTI  | **[[T83.511A]] + [[N39.0]]**                          |
| Central Line Infections  | **[[T80.211A]]**                                      |
| Surgical Site Infections | **Specific post-procedure codes**                     |
| Glycemic Control         | **[[E11.649]] Hyperglycemia developed in hospital**   |
| DVT/PE post-orthopedic   | **[[I26.09]], [[I82.401]]**                           |

---

## 🔴 High-Value MCCs — Universal

These MCCs appear across nearly all MDCs and DRGs. Capturing them when documented and supported is a top priority.

| Code             | Description                                    | Clinical Trigger                       |     |
| ---------------- | ---------------------------------------------- | -------------------------------------- | --- |
| **[[A41.9]]**    | Sepsis, unspecified organism                   | SIRS + infection; organism unknown     |     |
| **[[A41.51]]**   | Sepsis due to E. coli                          | Positive culture; urosepsis scenarios  |     |
| **[[A41.01]]**   | Sepsis due to MSSA                             | Culture-positive Staph                 |     |
| **[[A41.02]]**   | Sepsis due to MRSA                             | MRSA on culture                        |     |
| **[[R65.20]]**   | Severe sepsis without septic shock             | Sepsis + organ dysfunction             |     |
| **[[R65.21]]**   | Septic shock                                   | Sepsis + vasopressor requirement       |     |
| **[[J96.01]]**   | Acute resp failure with hypoxia                | SpO₂ drop; supplemental O₂; BiPAP/vent |     |
| **[[J96.02]]**   | Acute resp failure with hypercapnia            | Elevated CO₂; hypercapnic drive        |     |
| **[[J96.21]]**   | Acute-on-chronic resp failure w/ hypoxia       | Known COPD/OSA + acute event           |     |
| **[[N17.9]]**    | Acute kidney injury                            | Creatinine rise ≥ 0.3 from baseline    |     |
| **[[N17.0]]**    | Acute renal cortical necrosis                  | Severe AKI variant                     |     |
| **[[G93.41]]**   | Metabolic encephalopathy                       | AMS + metabolic derangement            |     |
| **[[G92.9]]**    | Toxic encephalopathy                           | AMS + drug/toxin etiology              |     |
| **[[K72.00]]**   | Acute hepatic failure                          | Elevated LFTs + encephalopathy         |     |
| **[[K72.10]]**   | Chronic hepatic failure                        | End-stage liver disease                |     |
| **[[I50.21]]**   | Acute systolic heart failure                   | EF < 40 + acute decompensation         |     |
| **[[I50.23]]**   | Acute-on-chronic systolic HF                   | Known CHF + acute exacerbation         |     |
| **[[I50.31]]**   | Acute diastolic heart failure                  | EF preserved + fluid overload          |     |
| **[[E43]]**      | Severe protein-calorie malnutrition            | Albumin < 2.1, BMI < 16, weight loss   |     |
| **[[D61.9]]**    | Aplastic anemia                                | Bone marrow failure; pancytopenia      |     |
| **[[G82.50]]**   | Quadriplegia, unspecified                      | Complete cervical SCI                  |     |
| **[[G82.20]]**   | Paraplegia, unspecified                        | Thoracic/lumbar SCI                    |     |
| **[[R57.0]]**    | Cardiogenic shock                              | Pump failure + hypotension             |     |
| **[[R57.1]]**    | Hypovolemic shock                              | Hemorrhage/volume depletion + shock    |     |
| **[[T79.4XXA]]** | Traumatic shock, initial encounter             | Major trauma context                   |     |
| **[[C80.1]]**    | Malignant neoplasm, unspecified                | Metastatic disease, primary unknown    |     |
| **[[I26.09]]**   | Pulmonary embolism without acute cor pulmonale | DVT/PE event                           |     |
| **[[I26.01]]**   | Septic pulmonary embolism                      | PE + sepsis etiology                   |     |
| **[[B20]]**      | HIV disease                                    | Active HIV (symptomatic AIDS)          |     |

---

## 🟡 High-Value CCs — Universal

| Code            | Description                                      | Clinical Trigger                              |
| --------------- | ------------------------------------------------ | --------------------------------------------- |
| **[[N18.4]]**   | CKD Stage 4                                      | GFR 15-29                                     |
| **[[N18.5]]**   | CKD Stage 5 (pre-dialysis)                       | GFR < 15                                      |
| **[[D62]]**     | Acute blood loss anemia                          | Post-surgical or GI bleed with Hgb drop       |
| **[[D50.0]]**   | Iron deficiency anemia due to chronic blood loss | Chronic GI or uterine bleeding                |
| **[[D63.1]]**   | Anemia in CKD                                    | CKD + low Hgb; erythropoietin use             |
| **[[E44.0]]**   | Moderate malnutrition                            | Albumin 2.1-2.9; moderate weight loss         |
| **[[E44.1]]**   | Mild malnutrition                                | Albumin 3.0-3.4; mild weight loss             |
| **[[E87.1]]**   | Hyponatremia                                     | Na < 135; treated with restriction/hypertonic |
| **[[E86.0]]**   | Dehydration                                      | IV fluids for volume deficit                  |
| **[[F17.210]]** | Nicotine dependence, cigarettes                  | Active smoker; anesthesia risk documentation  |
| **[[G47.33]]**  | Obstructive sleep apnea                          | PSG-confirmed; CPAP use                       |
| **[[I10]]**     | Essential hypertension                           | When separately evaluated/treated             |
| **[[I48.0]]**   | Paroxysmal atrial fibrillation                   | New-onset or rate-controlled during stay      |
| **[[I48.2]]**   | Chronic atrial fibrillation                      | Ongoing; anticoagulation managed              |
| **[[E11.65]]**  | T2DM with hyperglycemia                          | BG management required during stay            |
| **[[E11.649]]** | T2DM with hypoglycemia, without coma             | Hypoglycemic episode treated                  |
| **L89.xx2**     | Pressure injury, Stage 2                         | Partial thickness wound                       |
| **L89.xx6**     | Deep tissue pressure injury                      | Purple/maroon discoloration                   |
| **[[Z79.01]]**  | Long-term use of anticoagulants                  | Warfarin/DOAC; INR monitoring                 |
| **[[Z79.4]]**   | Long-term use of insulin                         | Type 1 or insulin-dependent T2DM              |
| **[[J44.1]]**   | COPD with acute exacerbation                     | Baseline COPD + worsening                     |
| **[[K92.1]]**   | Melena                                           | GI bleed with black stool                     |
| **[[K57.30]]**  | Diverticulosis of LI without perforation         | Incidental finding treated/monitored          |
| **T36-T50**     | Drug poisoning/adverse effect (various)          | Medication-induced complication               |

---

## 🫘 Urology-Specific CC/MCC Table

| Code             | Description                                          | CC/MCC | Notes                                        |
| ---------------- | ---------------------------------------------------- | ------ | -------------------------------------------- |
| **[[N17.9]]**    | Acute kidney injury                                  | MCC    | Ubiquitous in urology; post-obstructive AKI  |
| **[[N18.5]]**    | CKD Stage 5                                          | MCC    | Pre-ESRD; critical to document stage         |
| **[[N18.6]]**    | ESRD                                                 | MCC    | Dialysis-dependent; may be PDx or SDx        |
| **[[N13.30]]**   | Obstructive uropathy, unspecified                    | CC     | Hydronephrosis without infection             |
| **[[N13.6]]**    | Pyonephrosis                                         | MCC    | Infected obstruction — query for sepsis also |
| **[[A41.51]]**   | Sepsis due to E. coli                                | MCC    | Most common urosepsis organism               |
| **[[A41.59]]**   | Sepsis, other gram-negative                          | MCC    | Klebsiella, Proteus — culture-confirm        |
| **[[T83.511A]]** | Infection of indwelling urethral catheter            | CC     | CAUTI; POA critical                          |
| **[[T83.518A]]** | Infection of other urinary catheter                  | CC     | Nephrostomy, suprapubic                      |
| **[[N99.510]]**  | Cystostomy hemorrhage                                | CC     | Post-procedure complication                  |
| **[[C67.9]]**    | Malignant neoplasm of bladder, unspec                | CC     | Oncology cases; radical cystectomy driver    |
| **[[C64.1]]**    | Malignant neoplasm of right kidney                   | CC     | Nephrectomy driver                           |
| **[[D30.01]]**   | Benign neoplasm of right kidney                      | Non-CC | Usually incidental finding                   |
| **[[N40.1]]**    | Benign prostatic hyperplasia with LUTS               | CC     | When specifically evaluated/treated          |
| **[[N32.3]]**    | Diverticulum of bladder                              | Non-CC | Context-dependent                            |
| **[[R33.9]]**    | Retention of urine, unspecified                      | Non-CC | Query for underlying cause for CC            |
| **[[T83.09XA]]** | Other mechanical complication of cystostomy catheter | CC     | Device complication codes                    |

---

## 👂 ENT/OTO-Specific CC/MCC Table

| Code             | Description                              | CC/MCC | Notes                                        |
| ---------------- | ---------------------------------------- | ------ | -------------------------------------------- |
| **[[J96.01]]**   | Acute resp failure with hypoxia          | MCC    | Airway obstruction, post-laryngectomy        |
| **[[J95.821]]**  | Acute postprocedural resp failure        | MCC    | Post-op ENT; query if ventilated             |
| **[[J38.4]]**    | Edema of larynx                          | CC     | Angioedema, post-op swelling                 |
| **[[J38.00]]**   | Paralysis of vocal cords, unspecified    | CC     | Post-thyroid/neck surgery                    |
| **[[G47.33]]**   | Obstructive sleep apnea                  | CC     | UPPP, tonsil, adenoid cases                  |
| **[[C32.0]]**    | Malignant neoplasm of glottis            | CC     | Laryngectomy driver                          |
| **[[C32.1]]**    | Malignant neoplasm of supraglottis       | CC     | Supraglottic laryngectomy                    |
| **[[C10.9]]**    | Malignant neoplasm of oropharynx         | CC     | Base of tongue, tonsillar                    |
| **[[C14.0]]**    | Malignant neoplasm of pharynx, unspec    | CC     | Broad pharyngeal malignancy                  |
| **[[A69.0]]**    | Necrotizing ulcerative stomatitis        | MCC    | Ludwig's angina range                        |
| **[[K12.2]]**    | Cellulitis and abscess of mouth          | CC     | Peritonsillar / parapharyngeal abscess       |
| **[[J01.90]]**   | Acute sinusitis, unspecified             | Non-CC | Usually Non-CC; specify organism if possible |
| **[[H66.90]]**   | Otitis media, unspecified                | Non-CC | Specify chronic/suppurative for CC           |
| **[[H66.3X9]]**  | Chronic suppurative otitis media         | CC     | With or without spontaneous rupture          |
| **[[F17.210]]**  | Nicotine dependence, cigarettes          | CC     | Common ENT/head-neck comorbidity             |
| **[[E11.65]]**   | T2DM with hyperglycemia                  | CC     | Surgical risk and wound healing relevance    |
| **[[T88.3XXA]]** | Malignant hyperthermia due to anesthesia | MCC    | Rare; ENT/general surgery context            |

---

## 👁️ Ophthalmology-Specific CC/MCC Table

| Code             | Description                                        | CC/MCC | Notes                                 |
| ---------------- | -------------------------------------------------- | ------ | ------------------------------------- |
| **[[H44.001]]**  | Purulent endophthalmitis, unspecified eye          | CC     | Query for sepsis if systemic signs    |
| **[[H44.011]]**  | Panophthalmitis, right eye                         | CC     | More severe than endophthalmitis      |
| **[[H59.031]]**  | Cataract fragments in vitreous cavity post-proc    | CC     | Post-op complication                  |
| **[[E11.3511]]** | T2DM w/ prolif DR, right eye, w/ mac edema         | CC     | High specificity; drives surgical DRG |
| **[[E11.3512]]** | T2DM w/ prolif DR, left eye, w/ mac edema          | CC     |                                       |
| **H40.033x**     | Angle-closure glaucoma, chronic — see [[H40.033]]  | CC     | Bilateral or unilateral               |
| **[[H30.101]]**  | Unspecified chorioretinal inflam — see [[H30.101]] | CC     | Uveitis range                         |
| **[[H33.001]]**  | Unspecified retinal detachment with break          | CC     | Surgical DRG driver in ophthalmology  |
| **[[S05.61XA]]** | Penetrating wound of orbit with FB, right          | CC     | Orbital trauma with foreign body      |
| **[[Z79.01]]**   | Long-term anticoagulant use                        | CC     | Vitreous hemorrhage + anticoagulation |
| **[[B02.34]]**   | Herpes zoster ocular disease                       | CC     | HZO; anterior uveitis, keratitis      |
| **[[A54.33]]**   | Gonococcal keratitis                               | MCC    | STI-related ocular infection          |
| **[[E10.3511]]** | T1DM w/ prolif DR, right, w/ mac edema             | CC     | Specify T1 vs T2 when documented      |

---

## 🦽 PM&R-Specific CC/MCC Table

| Code             | Description                                 | CC/MCC | Notes                                  |
| ---------------- | ------------------------------------------- | ------ | -------------------------------------- |
| **[[G82.50]]**   | Quadriplegia, unspecified                   | MCC    | Cervical SCI; acute care before IRF    |
| **[[G82.51]]**   | C1-C4 complete quadriplegia                 | MCC    | ASIA A classification                  |
| **[[G82.54]]**   | C5-C7 complete quadriplegia                 | MCC    |                                        |
| **[[G82.20]]**   | Paraplegia, unspecified                     | MCC    | Thoracic SCI                           |
| **[[G83.4]]**    | Cauda equina syndrome                       | CC/MCC | See [[G83.4]]; depends on presentation |
| **[[G54.4]]**    | Lumbosacral root disorders                  | CC     | See [[G54.4]]                          |
| **[[G35]]**      | Multiple sclerosis                          | CC     | Acute relapse in acute care            |
| **[[G12.21]]**   | Amyotrophic lateral sclerosis (ALS)         | MCC    | Progressive; high resource use         |
| **[[R26.89]]**   | Other abnormalities of gait                 | Non-CC | Query for specific movement disorder   |
| **[[M62.81]]**   | Muscle weakness, generalized                | Non-CC | Query for myopathy specificity         |
| **[[G71.00]]**   | Muscular dystrophy, unspecified             | MCC    | Genetic myopathy                       |
| **[[G70.01]]**   | Myasthenia gravis with acute exacerbation   | MCC    | Myasthenic crisis                      |
| **[[T14.91XA]]** | Suicide attempt, initial encounter          | CC     | Trauma/behavioral comorbidity          |
| **[[F32.1]]**    | Major depressive disorder, single, moderate | CC     | When evaluated and treated             |
| **[[F41.1]]**    | Generalized anxiety disorder                | CC     | When clinically addressed              |

---

## 📋 CC/MCC by Body System — Quick Reference

| System          | Top MCCs                               | Top CCs                               |
| --------------- | -------------------------------------- | ------------------------------------- |
| Infectious      | **[[A41.9]], [[R65.20]], [[R65.21]]**  | **[[B20]], organism-specific sepsis** |
| Respiratory     | **[[J96.01]], [[J96.02]], [[J96.21]]** | **[[J44.1]], [[J95.821]]**            |
| Renal           | **[[N17.9]], [[N18.6]]**               | **[[N18.4]], [[N18.5]], [[N13.6]]**   |
| Cardiac         | **[[I50.21]], [[I50.23]], [[R57.0]]**  | **[[I48.0]], [[I50.32]], [[I10]]**    |
| Neurologic      | **[[G93.41]], [[G82.50]], [[G82.20]]** | **[[G35]], [[G47.33]], [[F05]]**      |
| GI/Hepatic      | **[[K72.00]], [[K72.10]]**             | **[[K92.1]], [[K57.30]]**             |
| Hematologic     | **[[D61.9]]**                          | **[[D62]], [[D63.1]], [[D50.0]]**     |
| Metabolic       | **[[E43]], [[G93.41]]**                | **[[E44.0]], [[E87.1]], [[E86.0]]**   |
| Skin/Wound      | **L89.xx3, L89.xx4, L89.xx0**          | **L89.xx2, L89.xx6**                  |
| Musculoskeletal | **[[G82.50]], [[G12.21]]**             | **[[G83.4]], [[G35]], [[M62.81]]**    |

---

## 🛠️ Coder Workflow for CC/MCC Capture

```
FOR EACH secondary diagnosis documented in the record:

1. Is it separately documented and clinically significant?
   → NO: Do not code
   → YES: Continue

2. Does it meet UHDDS secondary diagnosis criteria?
   (Evaluated, treated, or affected management/nursing care)
   → NO: Do not code
   → YES: Continue

3. Is it on the CC/MCC designation list?
   → Check encoder CC/MCC designation field
   → If MCC or CC: flag for review

4. Is it on the CC Exclusion List for the PDx?
   → Encoder will apply automatically
   → Verify exclusion is clinically logical

5. What is the POA indicator?
   → Y/W/1: Qualifies for CC/MCC status
   → N: Check HAC list — if HAC, does NOT qualify
   → U: Does NOT qualify

6. Is there a documentation gap that requires a query?
   → Clinical indicators present but diagnosis not explicit?
   → Open CDI query per [[CDI_Query_Templates]]

7. Verify final DRG tier reflects captured CC/MCC
```

---

## 🔗 Related Notes

- [[MS-DRG_Overview]]
- [[CDI Query Templates]]
- [[MDC 11 - Urology]]
- [[MDC 03 - ENT]]
- [[MDC 02 - Eye]]
- [[HAC_List]]
- [[POA_Indicator_Guide]]
- [[G83.4]]
- [[G54.4]]
- [[N17.9]]
- [[A41.9]]

---

*CC/MCC designations update annually with CMS IPPS Final Rule (October 1). Verify all designations against the current FY CMS CC/MCC table in your encoder.*
