---
tags:
  - inpatient-coding
  - MS-DRG
  - CC
  - MCC
  - POA
  - HAC
  - CMI
  - urology
  - otolaryngology
  - ophthalmology
  - PMR
  - physician-query
  - reimbursement
  - IPPS
title: Complications and Comorbidities (CC/MCC) — Inpatient Profee Reference
aliases:
  - CC MCC
  - Complication or Comorbidity
  - Major Complication or Comorbidity
  - CC Exclusion
  - DRG severity
category: DRG-Logic
specialty: All
cpt_range: N/A
icd10_scope: Secondary diagnoses
drg_impact: Severity level split (w/MCC, w/CC, w/o CC/MCC)
cms_reference: IPPS Final Rule — MS-DRG Grouper; CMS HAC Reduction Program
coding_clinic_key: true
hcc_impact: Varies by condition
cic_exam_topic: true
last_updated: 2025
---

# Complications and Comorbidities (CC/MCC) — Inpatient Reference

> [!abstract] Summary
> CC (Complication or Comorbidity) and MCC (Major Complication or Comorbidity) designations are CMS-assigned severity levels applied to **secondary diagnoses** that affect MS-DRG assignment, reimbursement weight, and Case Mix Index (CMI). Only secondary diagnoses qualify. The presence of an MCC or CC can move a case into a higher-weighted DRG triplet, directly impacting hospital and physician reimbursement.

---

## Core Definitions

| Term | Definition |
|---|---|
| **CC** | A secondary diagnosis that increases the complexity of the principal diagnosis or the resources required for treatment |
| **MCC** | A secondary diagnosis with the greatest potential impact on complexity and resource utilization — the highest severity tier |
| **No CC/MCC** | Base-level DRG — no qualifying secondary diagnosis present or applicable |
| **PDx** | Principal diagnosis — cannot serve as its own CC/MCC |
| **SDx** | Secondary diagnosis — the only diagnoses eligible for CC/MCC credit |

> [!tip] Key Rule
> The **principal diagnosis is excluded from CC/MCC consideration**. CC and MCC status is evaluated solely among secondary diagnoses. A condition that is the PDx *may* be a CC or MCC for a different PDx in a different encounter, but never for itself.

---

## How CC/MCC Drives DRG Assignment

Most MS-DRG logic is organized in **triplets**:

```
Base DRG + MCC  →  Higher-weighted DRG (e.g., DRG 870)
Base DRG + CC   →  Mid-weighted DRG    (e.g., DRG 871)
Base DRG w/o    →  Lower-weighted DRG  (e.g., DRG 872)
```

The grouper evaluates the entire secondary diagnosis list and selects the **highest applicable severity level**. Only one level applies per encounter — MCC presence supersedes all CCs. Multiple CCs do **not** stack.

> [!example] DRG Triplet Example — Septicemia
> - [[DRG 870]] Septicemia or Severe Sepsis **w/ MCC**
> - [[DRG 871]] Septicemia or Severe Sepsis **w/ CC** or Severe Sepsis w/ MV 96+ hrs
> - [[DRG 872]] Septicemia or Severe Sepsis **w/o CC/MCC**
>
> A patient admitted with sepsis and documented acute kidney injury ([[N17.9]]) would group to DRG 870 because AKI is an MCC.

---

## CC/MCC Designation Logic

### Who Assigns CC/MCC Status?
CMS assigns CC/MCC status annually via the **IPPS Final Rule**. The lists are updated each federal fiscal year (October 1). Coders do not assign this status — the grouper does, based on the ICD-10-CM code submitted and the applicable rules below.

### What Can Disqualify a CC/MCC?

#### 1. POA (Present on Admission) Indicator
| Indicator | Meaning | CC/MCC Impact |
|---|---|---|
| **Y** | Yes, present on admission | ✅ Counts as CC/MCC if applicable |
| **N** | No, not present on admission | ❌ May lose CC/MCC status if also a HAC |
| **U** | Unknown | ❌ Treated as not POA for HAC purposes |
| **W** | Clinically undetermined | ✅ Clinically ambiguous — still counts |
| **1** | Exempt from POA reporting | ✅ Exempt codes always count |

> [!warning] HAC + POA = Loss of CC/MCC Status
> If a secondary diagnosis is both a **Hospital-Acquired Condition (HAC)** AND is flagged POA = N or U, it will **not count** as a CC or MCC for DRG assignment. Additionally, facilities may incur a payment penalty under the HAC Reduction Program.

#### 2. CC Exclusion List
CMS publishes a **CC Exclusion List** that defines diagnosis pairs where the secondary diagnosis does *not* receive CC/MCC credit, because it is either an expected manifestation, an integral part of, or clinically redundant with the principal diagnosis.

> [!example] CC Exclusion in Practice
> If the PDx is **pneumonia** ([[J18.9]]) and a secondary diagnosis is **respiratory failure** ([[J96.00]]), the respiratory failure may be excluded from CC credit because it is an expected complication of pneumonia in that pairing — not a truly independent comorbidity increasing the complexity beyond the base DRG.

> [!note] Coding Tip
> CC exclusions are **pair-specific**. The same secondary diagnosis may be a valid CC or MCC when paired with a different PDx. Always let the grouper evaluate — do not assume exclusion without verification.

#### 3. Code Already Included in PDx Coding
If the complication or comorbidity is already captured within the PDx code itself (e.g., a combination code), it cannot be separately listed as a CC/MCC.

---

## HAC Overview — Key Categories

> [!caution] HAC ≠ Query Opportunity for "More Coding"
> HACs are **not** a reason to query for additional diagnoses. Documenting a HAC that is not POA removes CC/MCC status and triggers payment reduction. The goal is **accurate documentation and POA assignment**, not avoidance.

Selected HAC categories relevant to inpatient profee specialties:

| HAC Category | Example Conditions |
|---|---|
| Pressure ulcers (stage 3+) | L89.X3, L89.X4, L89.X9 |
| Falls and trauma | Fractures, burns, dislocations occurring post-admission |
| CAUTI | [[T83.511A]], [[N39.0]] — catheter-associated UTI |
| CLABSI | Central line-associated bloodstream infection |
| Surgical site infections | Specific SSI codes post-procedure |
| DVT/PE post-orthopedic | I26.XX, I82.4XX — certain joint replacement encounters |
| Air embolism | [[T79.0XXA]] |
| Transfusion incompatibility | [[T80.30XA]] |
| Hypoglycemia post-procedure | [[E11.641]] in certain surgical contexts |

---

## CC and MCC: Common Examples by Type

### Common MCCs (Selected)

| Condition | Code | Notes |
|---|---|---|
| Sepsis, unspecified | [[A41.9]] | Requires two-code construct with source (e.g., [[A41.51]] for gram-neg) |
| Severe sepsis w/o organ failure | [[R65.20]] | Must accompany underlying sepsis code |
| Acute respiratory failure, unspecified | [[J96.00]] | Hypoxic vs hypercapnic specificity preferred |
| Acute kidney injury, unspecified | [[N17.9]] | Stage/specificity improves accuracy |
| ESRD | [[N18.6]] | Also qualifies for HCC — dual capture opportunity |
| Intracranial hemorrhage | [[I62.9]] | Various subtypes are MCCs |
| Aspiration pneumonia | [[J69.0]] | MCC — commonly seen in post-surgical/neuro patients |
| Malnutrition, severe | [[E43]] | Query opportunity when BMI low, albumin reduced, intake documented poor |
| Acute MI | [[I21.x]] | Various subtypes; important comorbidity across all specialties |
| Hepatic failure, unspecified | [[K72.90]] | |
| Morbid obesity w/ alveolar hypoventilation | [[E66.01]] + [[G47.36]] | Combination frequently seen in PMR |

### Common CCs (Selected)

| Condition | Code | Notes |
|---|---|---|
| UTI, unspecified | [[N39.0]] | Also HAC risk if catheter-associated |
| Dysphagia, unspecified | [[R13.10]] | Common PMR and ENT CC; specify oropharyngeal vs esophageal |
| Malnutrition, moderate | [[E44.0]] | Lower tier than E43 but still a CC |
| CKD Stage 3 | [[N18.3]] | Stage 4 = CC; Stage 5 = CC; ESRD = MCC |
| Obstructive sleep apnea | [[G47.33]] | Frequently documented, often missed as CC |
| Hypertensive CKD, Stage 1-4 | [[I12.9]] | Combination code — captures both hypertension and CKD |
| Hematuria | [[R31.9]] | Relevant in urology; specificity matters |
| Pressure ulcer, Stage 2 | [[L89.X12]] | Stage 3+ = MCC |
| Depression, unspecified | [[F32.A]] | Common PMR comorbidity |
| Urinary retention | [[R33.9]] | Frequent urology secondary diagnosis |
| Dehydration | [[E86.0]] | Common CC across all specialties |
| Ileus, paralytic | [[K56.0]] | Post-surgical |
| Pneumonia, unspecified | [[J18.9]] | May be PDx or SDx depending on encounter |

---

## Specialty-Specific CC/MCC Considerations

---

### Physical Medicine & Rehabilitation (PMR)

> [!abstract] PMR Context
> Inpatient rehab admissions (IRF) use the **IRF-PAI / CMG system**, not MS-DRGs. However, patients admitted to an **acute care hospital** for PMR-related conditions (e.g., post-CVA, post-TBI, post-fracture, SCI) ARE subject to MS-DRG CC/MCC logic. The notes below apply to **acute care inpatient stays** with PMR-coded encounters.

#### High-Yield MCCs in PMR

| Condition | Codes | Why It Matters |
|---|---|---|
| Severe TBI | [[S06.2X1A]]-[[S06.899S]] | Consciousness duration and LOC specificity required for MCC |
| Acute ischemic stroke | I63.x | Specify vessel and laterality |
| Sepsis (post-surgical) |A41.x + source code | Common complication in immobilized, post-op PMR patients |
| Respiratory failure | J96.0x | Dysphagia/aspiration risk in neuro patients |
| Aspiration pneumonia | [[J69.0]] | **MCC** — extremely common in neuro/dysphagia patients |
| Severe malnutrition | [[E43]] | Query when albumin <2.1, significant weight loss documented |
| Pressure ulcer, stage 3-4 | L89.X3, L89.X4 | POA critical — if acquired post-admit, HAC status applies |
| DVT | [[I82.4X1]] | Post-immobilization complication |
| PE | [[I26.09]], [[I26.99]] | High-acuity complication |

#### High-Yield CCs in PMR

| Condition | Codes | Notes |
|---|---|---|
| Dysphagia | [[R13.10]]-[[R13.19]] | Specify oropharyngeal ([[R13.11]]) vs esophageal ([[R13.13]]); common in stroke, TBI |
| Urinary retention | [[R33.9]] | Neurogenic bladder patients; see also [[N31.9]] |
| Neurogenic bladder | [[N31.9]] | Specify subtype if documented |
| Pressure ulcer, stage 2 | L89.X12 | POA essential |
| OSA | [[G47.33]] | Very common comorbidity in PMR population |
| Depression | [[F32.A]], F33.x | Post-stroke depression, TBI behavioral sequelae |
| Deconditioning / functional debility | [[Z74.09]] | Not a CC itself, but supports medical necessity documentation |
| Moderate malnutrition | [[E44.0]] | Step below severe; still CC |
| Hypertensive heart disease | I11.x | Common comorbidity |
| CKD (any stage) | [[N18.1]]-[[N18.6]] | Stage specificity affects CC vs MCC |
| Anemia, unspecified | [[D64.9]] | Common PMR CC |

> [!tip] PMR Query Targets
> - **Malnutrition** — albumin levels, weight loss %, dietitian documentation often present but physician linkage missing
> - **[[Dysphagia]] specificity** — "**oropharyngeal**" vs "**esophageal**" changes code; query for type if not specified
> - **Aspiration pneumonia vs chemical pneumonitis** — [[J69.0]] (MCC) vs [[J68.0]] — distinguish carefully; requires physician documentation
> - **Pressure ulcer POA** — confirm with nursing admission assessment; stage at admission vs on discharge

---

### Urology

> [!abstract] Urology Context
> **Urology** inpatient encounters frequently involve post-procedural complications, obstructive uropathy, urologic malignancies, and complex renal conditions. **CC/MCC** capture is especially important in oncologic admissions, [[sepsis]] with genitourinary source, and AKI encounters.

#### High-Yield MCCs in Urology

| Condition | Codes | Notes |
|---|---|---|
| Sepsis — urologic source | [[A41.51]] (gram-neg) / [[A41.9]] | Document as **sepsis due to [organism/source]** — "urosepsis" alone is NOT a valid sepsis code per Coding Clinic |
| Acute kidney injury (AKI) | [[N17.9]], [[N17.0]], [[N17.1]], [[N17.2]] | Specify prerenal ([[N17.0]]), acute tubular necrosis ([[N17.0]] with detail), or cortical necrosis; AKI = MCC |
| ESRD | [[N18.6]] | Also an HCC — dual capture |
| Hemorrhagic shock | [[R57.1]] | Post-surgical major hemorrhage |
| Respiratory failure | J96.0x | Complication of complex surgical cases |
| Bilateral ureteral obstruction w/ AKI | N13.x + N17.x | Obstructive nephropathy driving AKI |

#### High-Yield CCs in Urology

| Condition | Codes | Notes |
|---|---|---|
| UTI, unspecified | [[N39.0]] | Also CAUTI risk; **specify organism if documented** |
| Urinary retention | [[R33.9]] | Distinguish acute ([[R33.9]]) vs chronic ([[R33.8]]) |
| Hematuria | [[R31.0]] (gross) / [[R31.1]] (microscopic) / [[R31.9]] | Gross hematuria may be PDx or CC depending on encounter |
| CKD, Stage 3 | [[N18.30]]-[[N18.32]] | Substage specificity added in recent updates |
| CKD, Stage 4 | [[N18.4]] | CC |
| CKD, Stage 5 | [[N18.5]] | CC (ESRD = MCC) |
| Hypertensive CKD | [[I12.9]], [[I12.10]], [[I12.11]] | Combination code; captures both conditions |
| Diabetes w/ CKD | [[E11.65]] | Combination code — captures DM + CKD in one code |
| Post-procedural hemorrhage | [[N99.820]], [[N99.821]] | Genitourinary organ post-procedure; POA = N typically |
| Urinary fistula | [[N32.1]], [[N32.2]] | Post-surgical |
| Hydronephrosis | [[N13.30]] | With or without obstruction specificity |
| Vesicoureteral reflux | [[N13.70]] | Specify with/without reflux nephropathy |

> [!warning] Urosepsis — Critical Coding Note
> Per **Coding Clinic 2Q 2012** and subsequent guidance: "Urosepsis" as a standalone term does **not** default to sepsis. It may refer to a urinary tract infection without systemic involvement. If the physician documents "urosepsis," a **query is required** to clarify whether the patient meets sepsis criteria (sepsis syndrome, SIRS due to infectious process). If confirmed, code **sepsis** (A41.x) with urinary tract infection ([[N39.0]]) or applicable genitourinary source.<br><br>Failure to query results in either under-coding (missing MCC) or over-coding (assigning sepsis without documentation). Both are compliance risks.

> [!tip] Urology Query Targets
> - **AKI in obstructive uropathy** — document relationship (obstructive vs intrinsic vs prerenal)
> - **Sepsis vs SIRS vs UTI** — most high-value query in urology inpatient
> - **CKD staging** — if GFR is in chart but stage not explicitly documented, query
> - **Organism specificity in UTI** — improves code specificity, supports CAUTI exclusion
> - **Post-procedural vs pre-existing** — distinguish complication (post-procedural hemorrhage) from pre-existing condition to guide POA

---

### Otolaryngology (ENT)

> [!abstract] ENT Context
> Inpatient ENT encounters include major head and neck oncologic surgery, deep space neck infections, airway management, and complex sinus/skull base cases. Malnutrition, airway complications, and post-operative hemorrhage are the most clinically significant CC/MCC opportunities. Tracheostomy-dependent patients may also qualify for special DRG mapping (LTCH-type groupings when applicable).

#### High-Yield MCCs in ENT

| Condition | Codes | Notes |
|---|---|---|
| Aspiration pneumonia | [[J69.0]] | Common post-op, post-laryngectomy, or dysphagia-related; **MCC** |
| Respiratory failure | J96.0x | Airway-related; post-operative ENT risk |
| Sepsis (deep neck infection) | A41.x | Ludwig's angina, parapharyngeal abscess progression |
| Severe malnutrition | [[E43]] | **Critical** in head/neck cancer — cachexia, pre-op nutritional decline |
| Major post-op hemorrhage | Post-procedural hemorrhage codes | Tonsillectomy hemorrhage, vessel erosion in radical neck |

#### High-Yield CCs in ENT

| Condition | Codes | Notes |
|---|---|---|
| Dysphagia | [[R13.11]] (oropharyngeal) / [[R13.13]] (esophageal) | Extremely common post-laryngectomy, tongue base resection, or pharyngeal surgery |
| Malnutrition, moderate | [[E44.0]] | Pre- or post-surgical; tube feeding dependence supports |
| Aspiration (without pneumonia) | [[Y93.89]] (activity), [[R04.2]] (hemoptysis), or clinical documentation | Distinguish from frank aspiration pneumonia |
| OSA | [[G47.33]] | Extremely common in ENT population; frequently documented |
| Post-tonsillectomy hemorrhage | [[J35.01]] | PDx if presenting problem; may be SDx in revision cases |
| Wound dehiscence (post-surgical) | [[T81.31XA]], [[T81.32XA]] | Post-op complication; POA = N |
| Dehydration | [[E86.0]] | Common post-op ENT |
| Anemia | [[D64.9]], [[D62]] | Post-surgical acute blood loss anemia ([[D62]] = CC) |
| Tracheostomy complication | [[J95.00]]-[[J95.09]] | Obstruction, hemorrhage, mechanical |
| Laryngeal stenosis | [[J38.6]] | Post-surgical or post-intubation |

> [!tip] ENT Query Targets
> - **Malnutrition in head/neck cancer** — one of the highest-yield queries in ENT inpatient; dietitian documentation + albumin/prealbumin often supports but physician must make diagnosis
> - **Aspiration vs aspiration pneumonia** — radiographic findings + clinical documentation needed to distinguish; [[J69.0]] = MCC vs no CC for aspiration alone
> - **OSA with tracheostomy** — OSA documented in H&P? If trach placed and prior OSA documented, code both
> - **Severity of dysphagia** — oropharyngeal vs esophageal affects code; query if unclear
> - **Post-op hemorrhage POA** — bleeding that develops post-operatively = N; correct POA assignment critical

---

### Ophthalmology

> [!abstract] Ophthalmology Context
> True inpatient ophthalmology encounters are uncommon (most ophthalmic procedures are outpatient). Inpatient ophthalmology coding typically arises in the context of: (1) **endophthalmitis** or severe ocular infection, (2) **orbital complications** of sinusitis or trauma, (3) **patients with systemic comorbidities** (diabetes, autoimmune disease) with acute ophthalmic manifestations requiring admission, or (4) **post-procedural complications**. CC/MCC capture in ophthalmic inpatient encounters is largely driven by **systemic comorbidities**, not the ophthalmic diagnoses themselves.

#### Ophthalmic Conditions That May Carry CC/MCC Status (as secondary diagnoses)

| Condition | Code | Status | Notes |
|---|---|---|---|
| Endophthalmitis, panophthalmitis | [[H44.001]]-[[H44.009]] | May be MCC | Serious infection; bilateral or uncontrolled = significant resource use |
| Orbital cellulitis | [[H05.011]]-[[H05.019]] | CC | Frequently secondary to sinus disease |
| Acute angle-closure glaucoma | [[H40.211]]-[[H40.219]] | CC | Requires IOP documentation; may be bilateral |
| Vitreous hemorrhage | [[H43.10]]-[[H43.13]] | CC | Context-dependent |
| Retinal detachment, total | [[H33.051]]-[[H33.059]] | CC | |
| Blindness, both eyes | [[H54.0x]] | CC | Functional status implication |

> [!note] Important Ophthalmology CC/MCC Reality
> Most individual ophthalmic ICD-10-CM codes do **not** carry CC or MCC designation in the MS-DRG grouper. The CC/MCC impact in ophthalmic inpatient encounters almost always comes from **systemic comorbidities** listed as secondary diagnoses.

#### High-Yield Systemic CCs/MCCs in Ophthalmic Admissions

| Condition | Code | Status | Notes |
|---|---|---|---|
| Diabetes w/ ophthalmic complications | [[E11.311]]-[[E11.359]] | CC varies | Combination codes; proliferative DR w/ macular edema = higher specificity |
| Severe sepsis | [[R65.20]] + A41.x | MCC | Endophthalmitis with systemic spread |
| Acute kidney injury | [[N17.9]] | MCC | Post-IV contrast administration; post-surgical |
| Hypertensive retinopathy | [[H35.031]]-[[H35.039]] | CC context | Captured within hypertension + retinopathy combination |
| Hypertensive urgency/emergency | [[I16.0]], [[I16.1]] | CC/MCC | Acute ocular hypertensive crisis |
| Autoimmune uveitis (systemic) | [[H30.101]]-[[H30.109]] | CC context | Underlying systemic disease (sarcoid, HLA-B27) may carry CC |

> [!tip] Ophthalmology Query Targets
> - **Diabetic retinopathy specificity** — proliferative vs nonproliferative, with/without macular edema; more specific combination codes improve DRG and HCC capture
> - **Laterality in all codes** — required for accuracy; bilateral codes exist for most ophthalmic conditions
> - **Systemic source of orbital/ocular infection** — document organism when culture available
> - **Functional impact** — if visual acuity is severely affected, low vision or blindness codes may apply and affect complexity

---

## Physician Query Opportunities — CC/MCC

> [!info] When to Query
> Query when clinical indicators in the record **suggest** a CC or MCC condition exists but the physician has not explicitly documented it, or has documented it ambiguously. The query must be **compliant** — non-leading, open-ended, based on clinical indicators.

### Universal Query Triggers

| Clinical Finding | Potential CC/MCC | Query Direction |
|---|---|---|
| Elevated creatinine (1.5-2.0+), oliguria | AKI [[N17.9]] (MCC) | "The creatinine trended from X to Y. Does this represent acute kidney injury?" |
| Albumin <2.1, weight loss >10%, poor PO intake | Severe malnutrition [[E43]] (MCC) | "The dietitian documented [finding]. Is malnutrition present, and if so, what is the severity?" |
| Fever, elevated WBC, tachycardia + source | Sepsis A41.x (MCC) | "The patient has suspected infection with [SIRS criteria]. Does this meet criteria for sepsis?" |
| Low O2 sat, supplemental O2 required | Respiratory failure J96.0x (MCC) | "What is your clinical assessment of the patient's respiratory status?" |
| Documented aspiration event + infiltrate | Aspiration pneumonia [[J69.0]] (MCC) | "The patient had a witnessed aspiration event. Is aspiration pneumonia present?" |
| PEG tube, poor PO intake, documented wt loss | Malnutrition + dysphagia | Two separate query opportunities |
| GFR in chart, no CKD stage documented | CKD staging (N18.x) (CC or MCC) | "The GFR is documented as [X]. What stage of CKD does this represent, if any?" |

---

## CMI (Case Mix Index) and CC/MCC

> [!abstract] CMI Connection
> CMI is the average DRG relative weight for a hospital or physician group's inpatient discharges. It is a proxy for case complexity and drives reimbursement benchmarks. **CC/MCC capture rate is a direct driver of CMI.** Improved documentation and coding accuracy of CCs and MCCs raises CMI — appropriately.

- **CC capture rate** = % of discharges with at least one CC or MCC
- **MCC rate** = % with at least one MCC
- Targets vary by specialty and payer mix; typically benchmarked against national IPPS norms
- Under-coded CCs/MCCs = **lost reimbursement** and potentially inaccurate quality metrics (sicker patients appear healthier on paper)

> [!warning] Compliance Note
> CC/MCC capture must be based on **documented, clinically supported conditions**. Query for underdocumented conditions is appropriate; **adding codes without documentation** is upcoding and a compliance violation. All CC/MCC designations must be supported by physician documentation in the medical record.

---

## CC/MCC Coding Quick Reference

```
For every inpatient encounter, ask:
1. What are all the secondary diagnoses?
2. Does each SDx have a CC or MCC designation in the grouper?
3. Is each SDx POA = Y? (Or W/1?)
4. Is any SDx also a HAC? (If POA = N/U → loses CC/MCC status)
5. Are any SDx pairs on the CC Exclusion List for the PDx?
6. What is the highest applicable severity level? (MCC > CC > none)
7. Is there documentation supporting a higher-severity SDx not yet captured?
   → Physician query opportunity?
```

---

## Related Notes

- [[MS-DRG System Overview]]
- [[POA Indicators — Inpatient Reference]]
- [[HAC Reduction Program]]
- [[Physician Query — Compliance and Templates]]
- [[Sepsis Coding — Inpatient Reference]]
- [[Malnutrition Coding — Inpatient Reference]]
- [[Acute Kidney Injury — ICD-10 Reference]]
- [[N17.9]] — Acute kidney injury, unspecified
- [[A41.9]] — Sepsis, unspecified organism
- [[E43]] — Unspecified severe protein-calorie malnutrition
- [[J69.0]] — Pneumonitis due to solids and liquids (aspiration)
- [[J96.00]] — Acute respiratory failure, unspecified
- [[N18.6]] — End stage renal disease

---

## Citations and Sources

1. CMS. *MS-DRG Definitions Manual, Version 41.0.* FY2024 IPPS Final Rule. <sup>1</sup>
2. AHA Coding Clinic for ICD-10-CM/PCS. *2Q 2012: Urosepsis.* <sup>2</sup>
3. CMS. *Hospital-Acquired Conditions (HAC) Reduction Program.* CMS.gov. <sup>3</sup>
4. CMS. *Present on Admission (POA) Indicator Reporting.* MLN Matters. <sup>4</sup>
5. AAPC. *Certified Inpatient Coder (CIC) Exam Content — DRG Grouping and CC/MCC Logic.* <sup>5</sup>
6. OptumInsight. *ICD-10-CM Expert for Hospitals.* Current edition. <sup>6</sup>
