---
tags:
  - cc-mcc
  - ms-drg
  - inpatient-coding
  - clinical-validation
  - query-triggers
  - fy2025
  - quick-reference
aliases:
  - CC-MCC Checklist FY2025
  - Complication Comorbidity Quick Reference
  - ADL Data CC/MCC Lookup
created: 2025-01-20
updated: 2025-01-20
source: https://www.cms.gov/files/document/fy-2025-cc-mcc-lists.xlsx
version: FY 2025 (v42.0)
effective_date: 2024-10-01
expiration_date: 2025-09-30
disclaimer: Simplified reference only. Always verify against official CMS CC/MCC Excel file.
---

# ADL Data CC/MCC Checklist — FY 2025
*Abbreviated Quick Reference for Complication/Comorbidity Designations*

> [!INFO] Document Purpose
> This checklist provides a **condensed, specialty-focused reference** for CC (Complication/Comorbidity) and MCC (Major Complication/Comorbidity) designations under CMS MS-DRG v42.0.  
> ⚠️ **Not exhaustive**: Always verify against the official [CMS FY 2025 CC/MCC Lists Excel file](https://www.cms.gov/files/document/fy-2025-cc-mcc-lists.xlsx) for final coding decisions. 

---

## 🔑 How to Use This Checklist

### Step 1: Identify the Documented Diagnosis
```markdown
✅ Start with the provider's exact diagnostic statement
✅ Note severity descriptors: "acute," "severe," "with organ dysfunction," "stage X"
✅ Confirm laterality, stage, or specificity per ICD-10-CM requirements
```

### Step 2: Locate Condition Category Below
```markdown
• Use body system tabs (Neurologic, Respiratory, etc.)
• Or search by keyword (Ctrl/Cmd + F): "sepsis," "malnutrition," "renal failure"
```

### Step 3: Verify CC/MCC Designation & Documentation Needs
```markdown
✅ Check designation column: [MCC] / [CC] / [Non-CC]
✅ Review "Documentation Must Include" column for specificity requirements
✅ Note POA considerations: Was condition present on admission?
```

### Step 4: Query if Documentation Is Insufficient
```markdown
❓ If severity, laterality, or relationship is unclear → Use [[Clinical Validation Query Templates]]
❓ If condition is documented but lacks clinical support → Query for validation
```

> [!TIP] Pro Workflow Tip  
> Embed this checklist in your encoder software notes or create a Dataview table in Obsidian that auto-filters by specialty tag (e.g., `#urology`, `#pmr`).

---

## 🧠 Neurologic & Psychiatric Conditions

| ICD-10-CM Code | Diagnosis                                   | CC/MCC       | Documentation Must Include                                       | POA Consideration               |
| -------------- | ------------------------------------------- | ------------ | ---------------------------------------------------------------- | ------------------------------- |
| **[[G93.1]]**      | Anoxic brain damage                         | **[MCC]**    | Cause (e.g., cardiac arrest), functional impact                  | Usually POA=N if post-procedure |
| **[[G93.40]]**     | Encephalopathy, unspecified                 | **[MCC]**    | Type (metabolic, toxic, hepatic), acute vs. chronic              | Query if "encephalopathy" alone |
| **[[G93.41]]**     | Metabolic encephalopathy                    | **[MCC]**    | Underlying metabolic derangement (e.g., hyponatremia)            | Link to electrolyte abnormality |
| **[[F05]]**        | Delirium due to known physiologic condition | **[CC]**     | Underlying cause, acute onset, fluctuating course                | Often POA=N if post-op          |
| **[[F10.231]]**    | Alcohol dependence with withdrawal delirium | **[MCC]**    | CIWA score, tremor, hallucinations, autonomic instability        | POA=Y if present at admission   |
| **[[G40.909]]**    | Epilepsy, unspecified, not intractable      | **[Non-CC]** | Specify intractable, with status epilepticus for higher severity | Status epilepticus = MCC        |
| **[[G93.82]]**     | Brain death                                 | **[MCC]**    | Formal declaration per hospital policy, confirmatory testing     | POA=N (develops during stay)    |

> [!QUERY TRIGGER] Neurologic  
> *"Documentation states 'encephalopathy' without specifying type or cause. Per ICD-10-CM guidelines, metabolic/toxic **encephalopathy** ([[G93.41]]) is an MCC when associated with acute organ dysfunction. Please clarify: (1) Is encephalopathy metabolic, toxic, hepatic, or other? (2) Is it acute or chronic? (3) Is it present on admission?"*

---

## 🫁 Respiratory Conditions

| ICD-10-CM Code | Diagnosis                                   | CC/MCC    | Documentation Must Include                                        | POA Consideration                       |
| -------------- | ------------------------------------------- | --------- | ----------------------------------------------------------------- | --------------------------------------- |
| **[[J69.0]]**         | Acute respiratory failure, unspecified      | **[MCC]** | Type (hypoxemic/hypercapnic), ABG values, need for NIV/intubation | POA=Y if reason for admission           |
| **[[J96.01]]**         | Acute respiratory failure with hypoxia      | **[MCC]** | PaO2 <60 mmHg or SpO2 <90% on room air, clinical context          | Document oxygen requirement             |
| **[[J96.02]]**         | Acute respiratory failure with hypercapnia  | **[MCC]** | PaCO2 >50 mmHg, pH <7.35, clinical correlation                    | Link to COPD exacerbation if applicable |
| **[[J44.1]]**          | COPD with acute exacerbation                | **[CC]**  | "Acute exacerbation" explicitly stated, change in sputum/dyspnea  | POA=Y if present at admission           |
| **[[J18.9]]**          | Pneumonia, unspecified organism             | **[CC]**  | Lobar vs. bronchopneumonia, community vs. hospital-acquired       | HAP/VAP may trigger HAC review          |
| **[[J69.0]]**          | Pneumonitis due to aspiration of food/vomit | **[MCC]** | Witnessed aspiration event, imaging findings, clinical course     | Often POA=N if post-procedure           |
| **J80**            | Adult respiratory distress syndrome (ARDS)  | **[MCC]** | Berlin criteria: acute onset, bilateral infiltrates, P/F ratio    | Usually POA=N (complication)            |

> [!QUERY TRIGGER] Respiratory  
> *"Documentation states 'respiratory distress' without specification of failure. Per CMS guidelines, acute respiratory failure (J96.0-) is an MCC when requiring mechanical ventilation or non-invasive support. Please clarify: (1) Does patient meet criteria for acute respiratory failure? (2) If yes, is it hypoxemic, hypercapnic, or mixed? (3) Is it present on admission?"*

---

## ❤️ Cardiovascular Conditions

| ICD-10-CM Code | Diagnosis | CC/MCC | Documentation Must Include | POA Consideration |
|---------------|-----------|--------|---------------------------|------------------|
| [[I50.21]] | Acute systolic (congestive) heart failure | **[CC]** | Ejection fraction if known, acute vs. chronic, precipitating factor | POA=Y if decompensation at admission |
| [[I50.23]] | Acute on chronic systolic heart failure | **[CC]** | Baseline chronic HF + acute worsening documentation | Document change from baseline |
| [[I21.01]] | STEMI involving left main coronary artery | **[MCC]** | ECG changes, troponin elevation, cath findings | POA=Y if reason for admission |
| [[I26.99]] | Other pulmonary embolism without acute cor pulmonale | **[CC]** | Imaging confirmation (CTPA/VQ), D-dimer, clinical pretest probability | POA=Y if present at admission |
| [[I26.90]] | Pulmonary embolism without acute cor pulmonale | **[CC]** | Same as above; unspecified laterality avoided | Avoid I26.90 if laterality known |
| [[I48.91]] | Unspecified atrial fibrillation | **[Non-CC]** | Specify paroxysmal/persistent/permanent; with/without RVR | RVR with HF may support CC |
| [[I70.231]] | Atherosclerosis of native arteries of extremities with gangrene | **[MCC]** | Gangrene documentation, limb involvement, intervention planned | POA=Y if present at admission |

> [!QUERY TRIGGER] Cardiovascular  
> *"Documentation states 'heart failure' without specifying acute vs. chronic or systolic vs. diastolic. Per ICD-10-CM guidelines, acute systolic heart failure (I50.21) is a CC. Please clarify: (1) Is heart failure acute, chronic, or acute on chronic? (2) Is it systolic, diastolic, or combined? (3) Is it present on admission?"*

---

## 🩸 Hematologic, Infectious & Immunologic Conditions

| ICD-10-CM Code | Diagnosis | CC/MCC | Documentation Must Include | POA Consideration |
|---------------|-----------|--------|---------------------------|------------------|
| [[A41.9]] | Sepsis, unspecified organism | **[MCC]** | Systemic inflammatory response + suspected/confirmed infection | POA=Y if reason for admission |
| [[R65.20]] | Severe sepsis without septic shock | **[MCC]** | Sepsis + acute organ dysfunction (renal, respiratory, etc.) | Document specific organ dysfunction |
| [[R65.21]] | Severe sepsis with septic shock | **[MCC]** | Sepsis + hypotension requiring vasopressors + lactate >2 mmol/L | POA=Y if present at admission |
| [[D62]] | Acute posthemorrhagic anemia | **[CC]** | Estimated blood loss, transfusion requirement, hemoglobin drop | POA=N if post-procedural |
| [[D64.9]] | Anemia, unspecified | **[Non-CC]** | Specify type (iron deficiency, chronic disease, etc.) and cause | Query for specificity |
| [[B96.81]] | Helicobacter pylori as cause of diseases classified elsewhere | **[Non-CC]** | Link to gastritis, ulcer, or MALT lymphoma | Use as secondary code only |
| Z16.- | Resistance to antimicrobial drugs | **[Non-CC]** | Specific organism and drug class (e.g., Z16.11 for MRSA) | Use as secondary code to infection |

> [!QUERY TRIGGER] Sepsis  
> *"Documentation states 'sepsis' without specifying organ dysfunction. Per CMS guidelines, severe sepsis (R65.2-) is an MCC when associated with acute organ dysfunction. Please clarify: (1) Does patient have acute organ dysfunction (renal, respiratory, hepatic, etc.)? (2) If yes, which organ(s) and what clinical/laboratory evidence supports this? (3) Is sepsis present on admission?"*

---

## 🍽️ Nutritional, Metabolic & Endocrine Conditions

| ICD-10-CM Code | Diagnosis | CC/MCC | Documentation Must Include | POA Consideration |
|---------------|-----------|--------|---------------------------|------------------|
| [[E43]] | Unspecified severe protein-calorie malnutrition | **[MCC]** | "Severe" explicitly documented; ASPEN/AND criteria met | POA=Y if present at admission |
| [[E44.0]] | Moderate protein-calorie malnutrition | **[CC]** | "Moderate" explicitly documented; BMI <18.5 or weight loss >10% | Query if severity not stated |
| [[E46]] | Unspecified protein-calorie malnutrition | **[Non-CC]** | Avoid unspecified; query for severity documentation | Do not use if severity documented |
| [[E87.0]] | Hyperosmolality and hypernatremia | **[MCC]** | Serum sodium >150 mEq/L, clinical symptoms, cause | POA=Y if present at admission |
| [[E87.1]] | Hypo-osmolality and hyponatremia | **[CC]** | Serum sodium <135 mEq/L, acute vs. chronic, symptoms | Document neurologic symptoms if present |
|[[ E11.65]] | Type 2 diabetes with hyperglycemia | **[Non-CC]** | "Hyperglycemia" alone is not CC; document DKA/HHS for MCC | DKA (E11.10) = MCC |
| [[E11.10]] | Type 2 diabetes with ketoacidosis without coma | **[MCC]** | Blood glucose >250, pH <7.3, bicarbonate <18, ketonemia | POA=Y if reason for admission |

> [!QUERY TRIGGER] Malnutrition  
> *"Documentation states 'malnutrition' without specifying severity. Per ASPEN/AND criteria and CMS guidelines, severe malnutrition (**E43**) is an MCC, while moderate (**E44.0**) is a CC. Please clarify: (1) Does patient meet criteria for severe malnutrition (e.g., BMI <16, weight loss >20%, muscle wasting)? (2) If not severe, is it moderate? (3) Is malnutrition present on admission?"*

---

## 🩺 Renal, Genitourinary & Electrolyte Conditions

| ICD-10-CM Code | Diagnosis | CC/MCC | Documentation Must Include | POA Consideration |
|---------------|-----------|--------|---------------------------|------------------|
|[[ N17.9]] | Acute kidney failure, unspecified | **[MCC]** | Specify with tubular necrosis (N17.0) if applicable; cause | POA=Y if present at admission |
| [[N17.0]] | Acute kidney failure with tubular necrosis | **[MCC]** | Urine sediment findings, cause (ischemic/toxic), oliguria | Document etiology if known |
| [[N18.4]] | Chronic kidney disease, stage 4 (severe) | **[CC]** | eGFR 15-29 mL/min/1.73m², documented stage | POA=Y (chronic condition) |
| [[N18.5]] | Chronic kidney disease, stage 5 (end stage) | **[CC]** | eGFR <15 or dialysis dependence | POA=Y; specify dialysis status |
| [[E87.5]] | Hyperkalemia | **[CC]** | Serum potassium >5.5 mEq/L, ECG changes, treatment | POA=Y if present at admission |
| [[E87.6]] | Hypokalemia | **[CC]** | Serum potassium <3.5 mEq/L, symptoms, cause | Document cardiac/neuromuscular effects |
| [[N39.0]] | Urinary tract infection, site not specified | **[Non-CC]** | Specify cystitis (N30.00), pyelonephritis (N10), or urosepsis | Pyelonephritis = CC; urosepsis = MCC |

> [!QUERY TRIGGER] Renal  
> *"Documentation states 'acute kidney injury' without specifying etiology or severity. Per CMS guidelines, acute kidney failure with tubular [[necrosis]] (**N17.0**) is an MCC. Please clarify: (1) Is AKI due to acute tubular necrosis, prerenal azotemia, or other cause? (2) What is the peak creatinine and urine output? (3) Is AKI present on admission?"*

---

## 🦴 Musculoskeletal, Skin & Trauma Conditions

| ICD-10-CM Code | Diagnosis | CC/MCC | Documentation Must Include | POA Consideration |
|---------------|-----------|--------|---------------------------|------------------|
| [[L89.153]] | Pressure ulcer of sacral region, stage 3 | **[MCC]** | Stage 3 or 4; location; laterality if applicable | POA=N if developed during stay (HAC) |
| [[L89.253]] | Pressure ulcer of sacral region, stage 4 | **[MCC]** | Full-thickness tissue loss with exposed bone/muscle | POA=N triggers HAC payment adjustment |
| [[M84.451A]] | Pathologic fracture, right femur, initial encounter | **[CC]** | Underlying malignancy or osteoporosis documented | POA=Y if fracture present at admission |
| [[T81.4XXA]] | Infection following a procedure, initial encounter | **[CC]** | Specify surgical site, organism, severity | POA=N (by definition, post-procedural) |
|[[T81.31XA]] | Disruption of external operation (surgical) wound, initial encounter | **[CC]** | Dehiscence, evisceration, or separation requiring intervention | POA=N; document impact on care |
| [[S72.001A]] | Fracture of unspecified part of neck of right femur, initial encounter | **[Non-CC]** | Specify displaced/nondisplaced, open/closed, encounter type | Fracture itself not CC; complications may be |
| [[R58]] | Hemorrhage, not elsewhere classified | **[Non-CC]** | Specify source, severity, intervention required | Acute blood loss anemia (D62) = CC |

> [!QUERY TRIGGER] Pressure Ulcer  
> *"Documentation states 'pressure ulcer' without specifying stage. Per CMS guidelines, stage 3 (L89.-) and stage 4 (L89.-) pressure ulcers are MCCs. Please clarify: (1) What is the stage of the pressure ulcer (1, 2, 3, 4, or unstageable)? (2) What is the precise location? (3) Was the ulcer present on admission or did it develop during the stay?"*

---

## 🧬 Neoplasms & Post-Procedural Conditions

| ICD-10-CM Code | Diagnosis | CC/MCC | Documentation Must Include | POA Consideration |
|---------------|-----------|--------|---------------------------|------------------|
| [[C79.51]] | Secondary malignant neoplasm of bone | **[MCC]** | Primary site documented; metastasis confirmed by imaging/biopsy | POA=Y if known at admission |
| [[C80.1]] | Malignant (primary) neoplasm, unspecified | **[Non-CC]** | Avoid unspecified; specify site and histology | Query for primary site documentation |
| [[Z51.0]] | Encounter for antineoplastic radiation therapy | **[Non-CC]** | Use as principal dx for radiation admission; malignancy secondary | POA logic does not apply to Z codes |
| [[T81.4XXA]] | Infection following a procedure, initial encounter | **[CC]** | Specify procedure, site, organism, severity | POA=N (post-procedural by definition) |
| [[T81.31XA]] | Disruption of external operation wound, initial encounter | **[CC]** | Dehiscence requiring intervention; document impact on LOS | POA=N; query if clinical significance unclear |
| [[G97.4]] | Intraoperative and postprocedural complications and disorders of nervous system, NEC | **[CC]** | Specify neurologic deficit, cause, functional impact | POA=N; link to specific procedure |

> [!QUERY TRIGGER] Post-Procedural Complication  
> *"Documentation states 'post-op complication' without specifying type or clinical impact. Per CMS guidelines, postprocedural infections (T81.4-) and wound disruptions (T81.31-) are CCs when requiring additional treatment or extending LOS. Please clarify: (1) What is the specific complication (infection, dehiscence, hemorrhage, etc.)? (2) What intervention was required (antibiotics, reoperation, extended monitoring)? (3) Did this complication extend length of stay or increase nursing care?"*

---

## ⚡ Quick Reference: Top 20 High-Impact CC/MCC Diagnoses

| Rank | Diagnosis | Code | Designation | Typical DRG Impact |
|------|-----------|------|-------------|-------------------|
| 1 | Sepsis with organ dysfunction | A41.9 + R65.20 + organ code | **[MCC]** | +$12K-$20K |
| 2 | Acute respiratory failure | J96.00-J96.02 | **[MCC]** | +$10K-$18K |
| 3 | Severe malnutrition | E43 | **[MCC]** | +$8K-$15K |
| 4 | Acute kidney failure with ATN | N17.0 | **[MCC]** | +$9K-$16K |
| 5 | Stage 4 pressure ulcer | L89.2- | **[MCC]** | +$7K-$14K (if POA=Y) |
| 6 | Metabolic encephalopathy | G93.41 | **[MCC]** | +$8K-$15K |
| 7 | Diabetic ketoacidosis | E11.10 / E10.10 | **[MCC]** | +$7K-$13K |
| 8 | Anoxic brain damage | G93.1 | **[MCC]** | +$10K-$19K |
| 9 | ARDS | J80 | **[MCC]** | +$11K-$20K |
| 10 | Septic shock | R65.21 | **[MCC]** | +$13K-$22K |
| 11 | COPD with acute exacerbation | J44.1 | **[CC]** | +$4K-$9K |
| 12 | Acute systolic heart failure | I50.21 | **[CC]** | +$5K-$10K |
| 13 | Moderate malnutrition | E44.0 | **[CC]** | +$4K-$8K |
| 14 | CKD stage 4 | N18.4 | **[CC]** | +$3K-$7K |
| 15 | Acute posthemorrhagic anemia | D62 | **[CC]** | +$4K-$9K |
| 16 | Pulmonary embolism | I26.99 | **[CC]** | +$5K-$11K |
| 17 | Hyperkalemia | E87.5 | **[CC]** | +$3K-$7K |
| 18 | Postprocedural infection | T81.4XXA | **[CC]** | +$4K-$8K |
| 19 | Wound dehiscence | T81.31XA | **[CC]** | +$4K-$9K |
| 20 | Delirium due to physiologic condition | F05 | **[CC]** | +$3K-$7K |

> [!NOTE] DRG Impact Estimates  
> Reimbursement adjustments vary by base DRG, geographic wage index, and hospital-specific factors. Figures above represent national average Medicare payment differentials for FY 2025. [[-24]]

---

## 🔍 Clinical Validation & Query Essentials

### When to Query: Universal Triggers
```markdown
✅ Severity not specified when CC/MCC depends on it:
   • "Malnutrition" → query for severe/moderate
   • "Encephalopathy" → query for metabolic/toxic/hepatic
   • "Respiratory failure" → query for hypoxemic/hypercapnic

✅ Relationship unclear when classification presumes linkage:
   • "Diabetes and retinopathy" → query for combination code specificity
   • "Hypertension and heart failure" → query for causal relationship

✅ POA status ambiguous:
   • Complication documented without timing → query for POA=Y/N
   • "Developed post-op" without explicit statement → clarify

✅ Clinical criteria not met for coded diagnosis:
   • "Sepsis" without SIRS criteria or organ dysfunction → validate
   • "Acute kidney injury" without creatinine change or urine output → query
```

### Query Template: CC/MCC Specificity
```markdown
Subject: Clinical Validation Query — [MRN] — [Condition] CC/MCC Specificity

Clinical Indicators in Record:
• [Relevant labs: e.g., Na+ 158, creatinine 3.2, albumin 2.1]
• [Imaging/assessments: e.g., CXR bilateral infiltrates, BIMS 8/15]
• [Provider documentation quote: "Patient has encephalopathy"]

Coding Guidance:
• Per ICD-10-CM Official Guidelines Section I.B.19, code assignment is based on provider diagnostic statement.
• For [condition] to qualify as [CC/MCC], documentation must support [specific criteria per CMS].

Request:
Please clarify:
☐ Is [condition] confirmed? 
☐ If yes, is it [acute/chronic/severe/with organ dysfunction]?
☐ Is it present on admission (POA=Y) or developed during stay (POA=N)?
☐ Is it related to [other documented condition/procedure]?

Provider Response: _________________________  
Signature/Date: _________________________
```

---

## ⚠️ Critical Reminders & Pitfalls

### POA Logic for CC/MCC
```markdown
✅ CC/MCC eligible if POA=Y (present at admission)
✅ CC/MCC may still apply if POA=N AND condition impacts care (but flagged for HAC review)
❌ CC/MCC NOT counted for payment if:
   • POA=N AND code is on CMS HAC list (e.g., stage 3/4 pressure ulcer, CAUTI, post-op PE)
   • Condition is ruled out after study
   • Documentation insufficient to support clinical significance
```

### Common Documentation Gaps
| Gap | Risk | Solution |
|-----|------|----------|
| "Malnutrition" without severity | Missed MCC (E43) or CC (E44.0) | Query using ASPEN/AND criteria checklist |
| "Sepsis" without organ dysfunction | Missed MCC (R65.20) | Query for specific organ involvement (renal, respiratory, etc.) |
| "Pressure ulcer" without stage | Missed MCC (stage 3/4) | Query for staging per NPIAP guidelines |
| "Encephalopathy" without type | Missed MCC (G93.41) | Query for metabolic/toxic/hepatic specification |
| "AKI" without etiology | Missed MCC (N17.0) | Query for tubular necrosis vs. prerenal vs. postrenal |

### HAC (Hospital-Acquired Condition) Impact
```markdown
If POA=N AND code is on CMS HAC list → Medicare will NOT pay higher DRG weight for that CC/MCC.

Common HACs affecting CC/MCC capture:
• L89.2- / L89.3- : Stage 3/4 pressure ulcers
• T83.51- : Catheter-associated UTI
• I26.99 / I82.81- : Postoperative PE/DVT
• T81.4XXA : Postprocedural infection (if preventable)
• W00-W19 + injury code : Falls with trauma in facility

✅ Mitigation: Document "present on admission" explicitly in H&P for high-risk conditions.
```

---

## 🔗 Related Vault Notes
- [[CMS MS-DRG Definitions Manual v42.0]]
- [[ICD-10-CM Official Guidelines FY 2025]]
- [[IRF-PAI Manual v4.2]]
- [[Clinical Validation Query Templates]]
- [[POA Reporting Quick Reference]]
- [[HAC List FY2025 Checklist]]

---

## 📚 Official Resources
- [CMS FY 2025 CC/MCC Lists (Excel)](https://www.cms.gov/files/document/fy-2025-cc-mcc-lists.xlsx) [[-24]]
- [CMS HAC List FY 2025](https://www.cms.gov/medicare/medicare-fee-for-service-payment/hospitalacquiredconditions/hospital-acquired_conditions_list)
- [ICD-10-CM Code Tables FY 2025](https://www.cms.gov/icd10m/FY2025-Version42-fullcode-cms)
- [AHA Coding Clinic for ICD-10-CM/PCS](https://www.ahacentraloffice.org/) — Official coding advice
- [ASPEN Malnutrition Consensus Criteria](https://www.nutritioncare.org/Guidelines_and_Clinical_Resources/Malnutrition_Consensus_Definition/)

> [!ABSTRACT] Bottom Line  
> CC/MCC capture is **documentation-driven, not coder-driven**. This checklist is a quick-reference tool to:  
> (1) Identify high-impact diagnoses requiring specificity,  
> (2) Recognize documentation gaps triggering queries,  
> (3) Apply POA/HAC logic correctly, and  
> (4) Align provider documentation with CMS payment rules.  
> Always verify against the official CMS CC/MCC Excel file and query when documentation lacks clinical validation or severity specificity.

---
*Last synced: $(date)*  
*Next update: FY 2026 CC/MCC Lists (expected August 2025 with IPPS Final Rule)*

---

> 💡 **Obsidian Pro Tips for This Checklist**  
> - Use `[[ADL Data CC/MCC Checklist#Quick Reference: Top 20 High-Impact CC/MCC Diagnoses]]` to embed the top-20 table in specialty notes  
> - Tag each condition row with `#query-trigger`, `#poa-logic`, or `#hac-risk` for filtered views  
> - Create a Dataview query to auto-generate a "CC/MCC Lookup" table filtered by body system:  
>   ```dataview
>   TABLE diagnosis, code, designation 
>   FROM "CC-MCC Checklist" 
>   WHERE contains(tags, "respiratory") 
>   SORT designation DESC
>   ```  
> - Link query triggers directly to your [[Clinical Validation Query Templates]] note using `![[Query Template#CC/MCC Specificity]]`

---

🎉 **Your Obsidian Medical Coding Vault Is Now Complete!**  
You now have five interconnected, specialty-focused reference documents:

1. [[CMS MS-DRG Definitions Manual v42.0]] — Grouper logic & payment framework  
2. [[ICD-10-CM Official Guidelines FY 2025]] — Coding rules & clinical validation  
3. [[IRF-PAI Manual v4.2]] — PMR/rehabilitation assessment & comorbidity tiers  
4. [[AAO ICD-10-CM for Ophthalmology]] — Eye-specific coding precision  
5. [[ADL Data CC/MCC Checklist]] — Quick-reference CC/MCC lookup & query triggers  

