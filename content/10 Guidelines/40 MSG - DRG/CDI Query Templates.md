---
tags:
  - cdi
  - query
  - documentation
  - drg
  - cc-mcc
  - compliance
  - inpatient
title: CDI Query Templates
aliases:
  - CDI Queries
  - Clinical Documentation Improvement
  - Query Library
  - CDI Query Bank
specialty: All Inpatient
code_type: CDI Reference
updated: 2025-05-05
related:
  - MS-DRG_Overview
  - CC-MCC_Reference
  - MDC_11_Urology
  - MDC_03_ENT
  - MDC_02_Eye
status: complete
---

# 📝 CDI Query Templates — Compliant Query Language Library

> [!abstract] Purpose
> This note contains **ready-to-use, compliance-vetted query templates** organized by DRG trigger category. All queries follow AHIMA and ACDIS guidelines: non-leading, multiple-choice format, clinically grounded, and documentation-supported. Never issue a query to chase a DRG — issue it to resolve a documentation gap.

---

## ⚖️ Query Compliance Rules — Know Before You Query

> [!important] Non-Negotiable Compliance Standards
> Per AHIMA Practice Brief and ACDIS CDI guidelines, every query must:
> - Present **clinically reasonable options only** — do not include diagnoses not supported by the record
> - Always include **"Clinically undetermined"** as a choice
> - Be based on **clinical indicators documented in the chart** — list them explicitly
> - Never reference **DRG, reimbursement, or payment** in the query text
> - Be **physician/provider-directed** — coders cannot self-determine
> - Be **documented and trackable** — concurrent or retrospective, both are valid

| Query Format | Use Case |
|---|---|
| **Multiple choice** | Preferred; provider selects or writes in response |
| **Yes/No** | Acceptable only when the single issue is binary |
| **Open-ended** | Use when the options are truly unknown; least preferred |

---

## 🗂️ Query Index

1. [[#🫘 Sepsis & Infection Queries]]
2. [[#🫁 Respiratory Failure Queries]]
3. [[#🧪 Acute Kidney Injury (AKI) Queries]]
4. [[#🧠 Encephalopathy Queries]]
5. [[#🍽️ Malnutrition Queries]]
6. [[#🩸 Anemia Queries]]
7. [[#💉 Fluid & Electrolyte Queries]]
8. [[#🫀 Heart Failure Queries]]
9. [[#🤕 Pressure Injury / Wound Queries]]
10. [[#🦠 Organism Specificity Queries]]
11. [[#🔪 Procedure Clarification Queries]]
12. [[#🏥 Specialty-Specific Queries — Urology, ENT, Ophthalmology]]

---

## 🫘 Sepsis & Infection Queries

### Template S-1: Sepsis Clarification (General)

**Clinical Indicators to Document Before Sending:**
- Fever / hypothermia
- Tachycardia, tachypnea
- Elevated WBC or bandemia
- Suspected or confirmed infection source
- Antibiotic initiation

> **Query Text:**
> The patient was admitted with [clinical indicators: e.g., WBC 18.2, temp 38.9°C, HR 118, suspected UTI source, broad-spectrum antibiotics initiated on DOA]. Based on the clinical presentation, please clarify whether the patient's condition is best described as:
>
> ☐ Sepsis (infection + systemic response)
> ☐ Severe Sepsis (sepsis + acute organ dysfunction — specify organ: _________)
> ☐ Septic Shock (sepsis + vasopressor-refractory hypotension)
> ☐ Systemic Inflammatory Response Syndrome (SIRS) without sepsis
> ☐ Infection without SIRS criteria
> ☐ Clinically undetermined
>
> If sepsis is present, please identify the causative organism if known: _____________
> If sepsis is present, please identify the source/site: _____________

**DRG Impact:** [[A41.xx]] = MCC; [[R65.20]] Severe sepsis = MCC; [[R65.21]] Septic shock = MCC

---

### Template S-2: Urosepsis Clarification

> [!warning] "Urosepsis" Has No ICD-10-CM Code
> When a provider documents "urosepsis," a query is required. Coding only [[N39.0]] misses the MCC.

> **Query Text:**
> The term "urosepsis" was documented in the [note type, date]. ICD-10-CM does not recognize "urosepsis" as a standalone diagnosis. Based on the clinical presentation [list indicators], please clarify:
>
> ☐ Sepsis due to urinary tract infection — code to [[A41.9]] or organism-specific [[A41.xx]] + [[N39.0]]
> ☐ Urinary tract infection with SIRS response — [[N39.0]] + [[R65.10]]/[[R65.11]]
> ☐ Urinary tract infection without sepsis — [[N39.0]]
> ☐ Clinically undetermined

---

### Template S-3: Sepsis Source / Organism Specificity

> **Query Text:**
> Sepsis is documented. Blood/urine cultures resulted [organism, date]. Please clarify the causative organism for accurate coding:
>
> ☐ Sepsis due to Staphylococcus aureus — [[A41.01]] (MSSA) / [[A41.02]] (MRSA)
> ☐ Sepsis due to Streptococcus — [[A41.1]]
> ☐ Sepsis due to Escherichia coli — [[A41.51]]
> ☐ Sepsis due to Pseudomonas — [[A41.52]]
> ☐ Sepsis due to other gram-negative organism — [[A41.59]]
> ☐ Sepsis, organism unspecified — [[A41.9]]
> ☐ Clinically undetermined

---

## 🫁 Respiratory Failure Queries

### Template R-1: Acute Respiratory Failure

**Clinical Indicators:**
- SpO₂ < 90% on room air
- PaO₂ < 60 mmHg or PaCO₂ > 50 mmHg on ABG
- Supplemental O₂ requirement escalation
- Mechanical ventilation initiated

> **Query Text:**
> The patient required [supplemental oxygen / BiPAP / mechanical ventilation] during this admission. ABG results on [date]: [values]. Please clarify:
>
> ☐ Acute Respiratory Failure with Hypoxia — [[J96.01]]
> ☐ Acute Respiratory Failure with Hypercapnia — [[J96.02]]
> ☐ Acute Respiratory Failure, unspecified — [[J96.00]]
> ☐ Acute-on-Chronic Respiratory Failure with Hypoxia — [[J96.21]]
> ☐ Acute-on-Chronic Respiratory Failure with Hypercapnia — [[J96.22]]
> ☐ Chronic Respiratory Failure — [[J96.10]]-[[J96.12]]
> ☐ Respiratory Insufficiency / Difficulty, not failure
> ☐ Clinically undetermined

**DRG Impact:** [[J96.01]], [[J96.02]] = MCC

---

### Template R-2: Post-Op Respiratory Failure

> **Query Text:**
> The patient required prolonged ventilatory support / re-intubation following [procedure, date]. Please clarify whether this represents:
>
> ☐ Postprocedural respiratory failure — [[J95.821]] (acute) / [[J95.822]] (acute-on-chronic)
> ☐ Acute respiratory failure unrelated to procedure — [[J96.0x]]
> ☐ Expected post-op ventilatory management, not failure
> ☐ Clinically undetermined

---

## 🧪 Acute Kidney Injury (AKI) Queries

### Template K-1: AKI Clarification

**Clinical Indicators:**
- Rise in creatinine ≥ 0.3 mg/dL within 48 hrs or ≥ 1.5× baseline within 7 days
- Decrease in urine output < 0.5 mL/kg/hr for ≥ 6 hrs
- IV fluid resuscitation, nephrology consult, or Foley monitoring documented

> **Query Text:**
> The patient's creatinine on admission was [X] and peaked at [Y] on [date]. [Additional indicators: IV fluids, nephrology consult, etc.] Please clarify:
>
> ☐ Acute Kidney Injury (AKI) — [[N17.9]]
> ☐ Acute-on-Chronic Kidney Disease — N18.xx + [[N17.9]]
> ☐ Pre-renal azotemia — [[N17.0]]
> ☐ Chronic Kidney Disease without acute injury — N18.xx
> ☐ Contrast-induced nephropathy — [[N14.11]]
> ☐ Baseline elevated creatinine, no acute process
> ☐ Clinically undetermined

**DRG Impact:** [[N17.9]] = MCC across most DRGs

---

### Template K-2: CKD Stage Specificity

> **Query Text:**
> CKD is documented. The most recent GFR was [value] on [date]. Please document the CKD stage:
>
> ☐ CKD Stage 1 — [[N18.1]] (GFR ≥ 90)
> ☐ CKD Stage 2 — [[N18.2]] (GFR 60-89)
> ☐ CKD Stage 3a — [[N18.31]] (GFR 45-59)
> ☐ CKD Stage 3b — [[N18.32]] (GFR 30-44)
> ☐ CKD Stage 4 — [[N18.4]] (GFR 15-29) — CC
> ☐ CKD Stage 5 — [[N18.5]] (GFR < 15, not on dialysis) — MCC
> ☐ ESRD on dialysis — [[N18.6]] — MCC
> ☐ Clinically undetermined

---

## 🧠 Encephalopathy Queries

### Template E-1: Encephalopathy Type

**Clinical Indicators:**
- Altered mental status, confusion, disorientation
- Abnormal lab values (ammonia, BMP, LFTs, drug levels)
- Neuro consult or brain imaging performed

> **Query Text:**
> The patient exhibited [altered mental status / confusion / agitation] during this admission. [List relevant labs/imaging]. Please clarify the etiology of the encephalopathy:
>
> ☐ Metabolic Encephalopathy — [[G93.41]] — MCC
> ☐ Toxic Encephalopathy (medication/substance) — [[G92.9]] — MCC
> ☐ Hepatic Encephalopathy — [[K72.90]] or [[K72.91]] — MCC
> ☐ Hypoxic Encephalopathy — [[G93.1]] — MCC
> ☐ Septic Encephalopathy — [[G93.41]] + sepsis codes
> ☐ Delirium (specify: hyperactive / hypoactive / mixed) — [[F05]]
> ☐ Dementia with behavioral disturbance
> ☐ Clinically undetermined

**DRG Impact:** Most encephalopathy types = MCC; delirium = CC in many DRGs

---

## 🍽️ Malnutrition Queries

### Template M-1: Malnutrition Severity

**Clinical Indicators:**
- BMI < 18.5, or significant weight loss (>5% in 1 month, >10% in 6 months)
- Albumin < 3.0 g/dL, prealbumin < 15 mg/dL (used as supporting evidence)
- Nutrition consult placed; dietitian assessment documents malnutrition
- Oral intake severely reduced; tube feeding initiated

> **Query Text:**
> Nutrition assessment on [date] documented [albumin X, BMI Y, weight loss Z%]. A dietitian consultation was placed and findings are as noted in [note]. Please clarify the degree of malnutrition:
>
> ☐ Severe (protein-calorie) malnutrition — [[E43]] — MCC
> ☐ Moderate malnutrition — [[E44.0]] — CC
> ☐ Mild malnutrition — [[E44.1]] — CC
> ☐ Cachexia — [[R64]] — CC
> ☐ Abnormal weight loss without malnutrition — [[R63.4]]
> ☐ No malnutrition
> ☐ Clinically undetermined

---

## 🩸 Anemia Queries

### Template A-1: Anemia Type Clarification

> **Query Text:**
> The patient's hemoglobin on admission was [X]. [Treatment: transfusion / iron infusion / B12 / EPO] was administered. Please clarify the type of anemia:
>
> ☐ Acute blood loss anemia — [[D62]] — CC
> ☐ Chronic blood loss anemia — [[D50.0]] — CC
> ☐ Iron deficiency anemia — [[D50.9]] — CC
> ☐ Anemia due to CKD — [[D63.1]] — CC
> ☐ Anemia due to malignancy — [[D63.0]] — CC
> ☐ Aplastic anemia — [[D61.9]] — MCC
> ☐ Anemia, unspecified — [[D64.9]] — CC
> ☐ Clinically undetermined

---

## 💉 Fluid & Electrolyte Queries

### Template F-1: Hyponatremia

> **Query Text:**
> Sodium on [date] was [value]. IV sodium replacement / fluid restriction was initiated. Please clarify:
>
> ☐ Hyponatremia — [[E87.1]] — MCC when severe/treated aggressively
> ☐ Dilutional hyponatremia (SIADH) — [[E22.2]] — CC
> ☐ Hypovolemic hyponatremia
> ☐ Lab value, not clinically significant
> ☐ Clinically undetermined

### Template F-2: Dehydration / Volume Depletion

> **Query Text:**
> The patient received [X liters IV fluids]. BUN/Cr ratio was [Y]. Please clarify:
>
> ☐ Volume depletion / Dehydration — [[E86.0]] — CC
> ☐ Hypovolemia — [[E86.1]] — CC
> ☐ IV fluids for maintenance, not for volume deficit
> ☐ Clinically undetermined

---

## 🫀 Heart Failure Queries

### Template H-1: Heart Failure Type & Acuity

> **Query Text:**
> Echocardiogram on [date] showed EF [X%]. BNP was [Y]. [Diuresis/IV Lasix/BiPAP] was initiated. Please clarify:
>
> ☐ Acute Systolic Heart Failure — [[I50.21]] — MCC
> ☐ Chronic Systolic Heart Failure — [[I50.22]] — CC
> ☐ Acute-on-Chronic Systolic Heart Failure — [[I50.23]] — MCC
> ☐ Acute Diastolic Heart Failure — [[I50.31]] — MCC
> ☐ Chronic Diastolic Heart Failure — [[I50.32]] — CC
> ☐ Acute-on-Chronic Diastolic Heart Failure — [[I50.33]] — MCC
> ☐ Heart Failure with Preserved EF (HFpEF) — [[I50.30]]-[[I50.33]]
> ☐ Heart Failure, unspecified — [[I50.9]] — CC
> ☐ Clinically undetermined

---

## 🤕 Pressure Injury / Wound Queries

### Template W-1: Pressure Injury Stage

> **Query Text:**
> Wound care nursing notes and/or wound consult on [date] document a pressure injury at [location]. Please clarify the stage:
>
> ☐ Stage 1 — Non-blanchable erythema — L89.xx1
> ☐ Stage 2 — Partial thickness skin loss — L89.xx2 — CC
> ☐ Stage 3 — Full thickness skin loss — L89.xx3 — MCC
> ☐ Stage 4 — Full thickness tissue loss — L89.xx4 — MCC
> ☐ Unstageable — L89.xx0 — MCC
> ☐ Deep tissue pressure injury — L89.xx6 — CC
> ☐ Clinically undetermined
>
> (Site: sacral / coccyx / heel / hip / other: _________)

> [!warning] POA Indicator Critical Here
> Stage 3/4/Unstageable pressure injuries are **HACs** if they develop during the stay (POA = N). This removes MCC status AND triggers HAC penalty. Accurate POA documentation is essential.

---

## 🦠 Organism Specificity Queries

### Template O-1: MRSA vs MSSA

> **Query Text:**
> Culture results on [date] confirmed Staphylococcus aureus. Sensitivity panel showed [MRSA/MSSA]. Please confirm:
>
> ☐ Infection due to MRSA — use [[Z16.11]] (resistance) + [[B95.62]] (MRSA as cause)
> ☐ Infection due to MSSA — [[B95.61]]
> ☐ Colonization only, not active infection — [[Z22.322]]
> ☐ Clinically undetermined

---

## 🔪 Procedure Clarification Queries

### Template P-1: Tracheostomy Indication (ENT/Critical Care)

> **Query Text:**
> The patient underwent tracheostomy on [date]. Please clarify the clinical indication:
>
> ☐ Prolonged mechanical ventilation — anticipated > 14 days
> ☐ Upper airway obstruction — specify etiology: _______
> ☐ Airway protection due to neurological deficit
> ☐ Weaning failure from endotracheal intubation
> ☐ Other: _______
> ☐ Clinically undetermined

**DRG Impact:** Tracheostomy with MV ≥ 96 hrs → Pre-MDC DRG 003 (RW ≈ 18+)

### Template P-2: Principal Procedure Clarification

> **Query Text:**
> Multiple procedures were performed during this admission: [list procedures]. Please clarify which procedure was performed for the definitive treatment of the principal diagnosis and/or was the most resource-intensive:
>
> ☐ [Procedure A] — [date]
> ☐ [Procedure B] — [date]
> ☐ Both equally principal
> ☐ Clinically undetermined

---

## 🏥 Specialty-Specific Queries — Urology, ENT, Ophthalmology

### 🫘 Urology

**Query U-1: Obstructive Uropathy + AKI**
> The patient presented with [hydronephrosis / ureteral obstruction / BPH with retention]. Creatinine was [X baseline] → [Y peak]. Please clarify:
>
> ☐ Obstructive nephropathy with AKI — [[N13.30]] + [[N17.9]]
> ☐ Hydronephrosis without AKI — [[N13.30]]
> ☐ BPH with urinary retention — [[N40.1]]
> ☐ Clinically undetermined

**Query U-2: Cystostomy vs Nephrostomy Intent**
> Drainage procedure was performed on [date]. Please clarify the primary intent:
>
> ☐ Suprapubic catheter — temporary vs permanent
> ☐ Nephrostomy — therapeutic vs diagnostic
> ☐ Combined drainage approach
> ☐ Clinically undetermined

---

### 👂 ENT / Otolaryngology

**Query ENT-1: Airway Obstruction Etiology**
> The patient required [intubation / tracheostomy / emergent airway management] on [date]. Please clarify the primary cause of airway compromise:
>
> ☐ Angioedema — [[T78.3XXA]] — MCC
> ☐ Epiglottitis — [[J05.10]] / [[J05.11]]
> ☐ Laryngeal edema — [[J38.4]]
> ☐ Post-operative edema / hematoma — J95.xx
> ☐ Malignancy-related obstruction — specify: ______
> ☐ Clinically undetermined

**Query ENT-2: Neck Dissection Extent**
> Operative report documents lymph node dissection of the neck on [date]. Please clarify the extent:
>
> ☐ Radical neck dissection — [[38720]] equivalent PCS
> ☐ Modified radical neck dissection
> ☐ Selective neck dissection — specify levels: _______
> ☐ Sentinel lymph node biopsy only — [[38900]] equivalent
> ☐ Clinically undetermined

---

### 👁️ Ophthalmology

**Query OPH-1: Endophthalmitis Etiology**
> The patient was admitted for intraocular infection. Please clarify:
>
> ☐ Acute endophthalmitis, post-procedural — [[H59.031]]-[[H59.039]]
> ☐ Purulent endophthalmitis — [[H44.001]]-[[H44.009]]
> ☐ Panophthalmitis — [[H44.011]]-[[H44.019]]
> ☐ Sympathetic uveitis
> ☐ Clinically undetermined

**Query OPH-2: Diabetic Eye Disease Specificity**
> Diabetic retinopathy is documented with [laser / injection / vitrectomy] performed. Please clarify:
>
> ☐ Proliferative diabetic retinopathy with tractional detachment — [[E11.3511]] right / [[E11.3512]] left
> ☐ Proliferative diabetic retinopathy without detachment — [[E11.3531]]
> ☐ Severe non-proliferative diabetic retinopathy — [[E11.3491]]
> ☐ Moderate non-proliferative — [[E11.3392]]
> ☐ Diabetic macular edema — specify: ______
> ☐ Clinically undetermined

---

## 🔗 Related Notes

- [[MS-DRG_Overview]]
- [[CC-MCC Reference]]
- [[MDC 11 - Urology]]
- [[MDC 03 - ENT]]
- [[MDC 02 - Eye]]
- [[POA_Indicator_Guide]]
- [[HAC_List]]

---

*Templates are compliance frameworks — always populate clinical indicators from the actual chart before sending. Never send a blank template.*
