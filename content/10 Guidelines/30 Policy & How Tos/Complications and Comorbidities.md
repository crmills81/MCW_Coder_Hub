# 🏥 Inpatient Medical Coding: CC/MCC by Specialty
*PMR • Urology • Otolaryngology • Ophthalmology*

> [!INFO] Quick Reference
> **CC** = Complication or Comorbidity (moderate severity)  
> **MCC** = Major Complication or Comorbidity (highest severity)  
> **POA** = Present on Admission indicator (Y/N/U/W)  
> **MS-DRG** = Medicare Severity Diagnosis Related Group [6]

---

## 📋 Core CC/MCC Principles (All Specialties)

### Documentation Standards
- **Principal diagnosis**: Condition established *after study* as the reason for admission [6]
- **Other diagnoses**: Must affect patient care by requiring clinical evaluation, therapeutic treatment, diagnostic procedures, extended LOS, or increased nursing care [6]
- **Clinical validation**: Provider documentation must support the diagnosis; coders cannot assign based on clinical criteria alone [6]
- **Query when unclear**: Use clinical validation queries to bridge gaps between documentation and coding requirements [6]

### FY 2025 Updates
- CMS added **4 ICD-10-CM codes to MCC list** and **29 codes to CC list** for FY 2025 [52]
- Total ICD-10-CM codes increased from 73,674 to 74,044 [49]
- All changes effective **October 1, 2024** [50]

### The Nine Guiding Principles for CC/MCC Analysis 
1. Represents end-of-life/near death or advanced systemic decompensation
2. Denotes organ system instability or failure
3. Involves chronic illness with susceptibility to exacerbations
4. Serves as marker for advanced disease across multiple comorbidities
5. Reflects systemic impact
6. Postoperative/post-procedure condition impacting recovery
7. Requires higher level of care (ICU, intensive monitoring, extended LOS)
8. Impedes patient cooperation or care management
9. Recent change in best practice affecting resource use

> [!TIP] Pro Tip
> Do not confuse *principal diagnosis* with *primary diagnosis*. Principal diagnosis is the reason for the inpatient admission after study; primary diagnosis sequencing is an outpatient concept [6].

---

## ♿ Physical Medicine & Rehabilitation (PMR/IRF)

### Unique Framework: IRF-PAI vs. UB-04
Inpatient Rehabilitation Facilities use **two parallel coding systems**:
- **IRF-PAI** (**Inpatient Rehabilitation Facility Patient Assessment Instrument**): Determines CMG (Case-Mix Group) payment under IRF PPS [11][14]
- **UB-04 claim form**: Uses MS-DRGs like acute care hospitals [15]

### Critical Documentation Requirements 
```markdown
✅ Pre-admission screening (PAS) documenting medical necessity
✅ Reasonable expectation of active participation in intensive rehab
✅ Need for multidisciplinary team (PT/OT/SLP minimum 3 hrs/day, 5 days/week)
✅ Physician supervision and face-to-face visits
✅ Comorbidities sequenced in FIRST 10 positions on IRF-PAI to impact payment [12]
```

### IRF-PAI Comorbidity Coding Tips
- Use ICD-10-CM codes for comorbid conditions in Item #24 [11]
- Only comorbidities meeting regulatory criteria (42 CFR 412.29) count toward case-mix adjustment [11]
- **Arthritis comorbidities**: Must meet specific regulatory requirements to qualify for IRF classification [11]
- **Complications during stay**: Code in Item #47 using ICD-10-CM (these are POA=N) [11]

### Common CC/MCC in PMR Patients
| Condition                         | Typical CC/MCC Status | Coding Consideration                                          |
| --------------------------------- | --------------------- | ------------------------------------------------------------- |
| **Pressure ulcer Stage III/IV**       | **MCC** [69]          | Document stage, location, laterality                          |
| **Malnutrition, severe**              | **MCC** [2][69]       | Must meet ASPEN/AND criteria; provider must document "severe" |
| **Acute renal failure with ATN**      | **MCC** [69]          | Differentiate from chronic kidney disease                     |
| **Encephalopathy, metabolic/toxic**   | **MCC** [1][69]       | Specify type; link to underlying cause                        |
| **Sepsis with organ dysfunction**     | **MCC**               | Document organ dysfunction explicitly                         |
| **COPD with acute exacerbation**      | **CC** [69]           | Must document "acute exacerbation"                            |
| **Chronic kidney disease Stage IV/V** | **CC** [69]           | Document stage; link to etiology if known                     |

> [!WARNING] IRF-Specific Pitfall
> A comorbidity assigned to a payment tier **must be sequenced within the first 10 comorbidities** on the IRF-PAI to be reported and impact reimbursement [12].

---

## 🚽 Urology Inpatient Coding

### Key MS-DRG Families (MDC 11: Kidney/Urinary Tract) 
```
┌─────────────────────────────────────────┐
│ SURGICAL DRGs                           │
├─────────────────────────────────────────┤
│ 650-651: Kidney transplant ± hemodialysis │
│ 652: Kidney transplant                   │
│ 653-655: Major bladder procedures        │
│ 656-661: Kidney/ureter procedures        │
│ 662-664: Minor bladder procedures        │
│ 665-667: Prostatectomy                   │
│ 668-670: Transurethral procedures        │
│ 671-672: Urethral procedures             │
│ 673-675: Other kidney/urinary procedures │
├─────────────────────────────────────────┤
│ MEDICAL DRGs                            │
├─────────────────────────────────────────┤
│ 682-684: Renal failure                   │
│ 686-688: Kidney/urinary neoplasms       │
│ 689-690: Kidney/urinary infections      │
│ 693-694: Urinary stones                  │
│ 695-696: Signs/symptoms                  │
│ 697: Urethral stricture                  │
│ 698-700: Other kidney/urinary diagnoses │
└─────────────────────────────────────────┘
```

### Urology-Specific CC/MCC Examples 
| Procedure/Condition                     | DRG w/ MCC   | DRG w/ CC    | DRG w/o CC/MCC | Common MCC/CC Triggers                           |
| --------------------------------------- | ------------ | ------------ | -------------- | ------------------------------------------------ |
| **Minor bladder procedures**                | 662: $22,278 | 663: $11,062 | 664: $7,618    | Sepsis, acute renal failure, severe malnutrition |
| **Penis procedures**                        | 709: $16,934 | —            | 710: $10,196   | Post-op infection, hemorrhage, DVT/PE            |
| **Transurethral prostatectomy**             | 668: $10,940 | 669: $7,694  | 670: $7,694    | Acute urinary retention with renal impairment    |
| **Kidney/ureter procedures (non-neoplasm)** | 673: $30,574 | 674: $17,017 | 675: $11,944   | Acute pyelonephritis with sepsis, obstruction    |

### High-Yield Urology CC/MCC Diagnoses
```icd10
// MCC Examples
N17.9  Acute kidney failure, unspecified (if with ATN: MCC)
A41.9  Sepsis, unspecified organism
E87.0  Hyperosmolality and hypernatremia (if diabetic ketoacidosis)
L89.3- Pressure ulcer, stage 4 (MCC); L89.2- stage 3 (MCC)
R65.20 Severe sepsis without septic shock

// CC Examples
N18.4  Chronic kidney disease, stage 4
N18.5  Chronic kidney disease, stage 5
J44.1  COPD with acute exacerbation
E44.0  Moderate protein-calorie malnutrition
I50.9  Heart failure, unspecified (chronic)
```

### Documentation Pearls for Urology 
- **"w/MCC" in DRG title** = at least one secondary diagnosis designated as MCC by CMS [22]
- **Prosthetic device complications**: Use T83.4- (**penile prosthesis**) or T83.5- (**urinary sphincter**) with 7th character A (**initial encounter**) for mechanical complications or infections [20]
- **Post-op urinary retention**: Document if acute vs. chronic; link to procedure if applicable
- **[[Hematuria]]**: Specify cause (**post-procedural, neoplasm, infection**) to avoid unspecified codes

> [!NOTE] Reimbursement Impact
> Adding a single MCC can increase MS-DRG reimbursement by **$5,000-$15,000+** depending on the base DRG [20][24].

---

## 👂 Otolaryngology (ENT) Inpatient Coding

### Common Inpatient ENT Scenarios & DRGs
| Clinical Scenario                  | Typical MDC        | Key CC/MCC Considerations                              |
| ---------------------------------- | ------------------ | ------------------------------------------------------ |
| **Airway compromise/post-op edema**    | MDC 3 (ENT)        | Respiratory failure (MCC), aspiration pneumonia (MCC)  |
| **Complex head/neck cancer resection** | MDC 3 or 17        | Malnutrition (MCC if severe), sepsis, wound dehiscence |
| **Epistaxis with transfusion**         | MDC 3              | Acute blood loss anemia (CC), coagulopathy             |
| **Post-tonsillectomy hemorrhage**      | MDC 3              | Hypovolemia, airway intervention                       |
| **Skull base surgery complications**   | MDC 1 (Neuro) or 3 | CSF leak with meningitis (MCC), cranial nerve injury   |

### ENT-Specific CC/MCC Documentation Tips 
```markdown
✅ Airway complications: Document stridor, laryngeal edema, need for reintubation
✅ Aspiration events: Specify "aspiration pneumonia" (J69.0) vs. "chemical pneumonitis" (J68.0)
✅ Post-op infections: Use T81.4- (infection following procedure) + organism code (B95-B96)
✅ Bleeding complications: Quantify blood loss; document transfusion requirements
✅ Neurologic deficits: Specify cranial nerve involved; document functional impact
```

### High-Yield ICD-10-CM Codes for ENT CC/MCC
```icd10
// MCC Candidates
J69.0   Pneumonitis due to inhalation of food/vomit
J96.00  Acute respiratory failure, unspecified
A41.9   Sepsis, unspecified
G93.1   Anoxic brain damage, not elsewhere classified
L89.3-  Pressure ulcer, stage 4 (if immobilized post-op)

// CC Candidates
D62    Acute posthemorrhagic anemia
E44.0  Moderate protein-calorie malnutrition
J44.1  COPD with acute exacerbation
I26.90 Pulmonary embolism without acute cor pulmonale
R13.10 Dysphagia, unspecified (if affecting nutrition/therapy)
```

### Query Triggers for ENT Documentation 
- Provider documents "infection" post-op but doesn't specify surgical site infection vs. pneumonia
- "Bleeding" documented without quantification or intervention
- "Respiratory distress" without specification of failure vs. insufficiency
- Malnutrition mentioned but severity not documented (critical for MCC capture)

> [!TIP] ENT Coding Alert
> Coders who fail to read the **entire operative report** may incorrectly report tissue removal codes that don't include excision of lesions or fail to capture complication codes [77].

---

## 👁️ Ophthalmology Inpatient Coding

### Important Context
> [!WARNING] Ophthalmology is **predominantly outpatient**
> **True inpatient admissions are rare and typically involve:**
> - Severe orbital cellulitis with systemic involvement
> - Traumatic globe rupture with associated injuries
> - Endophthalmitis with sepsis
> - Complex oculoplastic reconstruction post-trauma
> - Neuro-ophthalmologic emergencies (e.g., giant cell arteritis with vision loss)

### Relevant MS-DRGs (MDC 2: Eye Disorders)
```
DRG 113-125: Diseases & Disorders of the Eye
• 121: Acute major eye infections WITH CC/MCC
• 122: Acute major eye infections WITH CC  
• 123: Acute major eye infections WITHOUT CC/MCC
• 124-125: Other eye procedures with/without CC/MCC
```

### Ophthalmology-Specific CC/MCC Considerations 
| Condition                              | CC/MCC Potential                | Documentation Requirement                         |
| -------------------------------------- | ------------------------------- | ------------------------------------------------- |
| **Orbital cellulitis with abscess**        | MCC if sepsis/organ dysfunction | Document systemic signs, imaging findings         |
| **Endophthalmitis post-op**                | CC/MCC if systemic involvement  | Specify organism; link to procedure if applicable |
| **Traumatic hyphema with glaucoma**        | CC if acute angle closure       | Document IOP, visual acuity impact                |
| **Giant cell arteritis with vision loss**  | MCC if stroke/TIA co-occurs     | Document ESR/CRP, temporal artery findings        |
| **Chemical burn with corneal perforation** | CC if requiring surgery         | Document depth, laterality, visual prognosis      |

### High-Yield ICD-10-CM Codes
```icd10
// MCC Candidates (when systemic/organ involvement)
H05.011 Acute orbital cellulitis, right eye (with sepsis: MCC)
H44.001 Purulent endophthalmitis, unspecified eye, right
H21.81  Hyphema of iris and ciliary body (if causing acute glaucoma)
G45.9   Transient cerebral ischemic attack, unspecified (if GCA-related)
A41.9   Sepsis, unspecified (if orbital infection systemic)

// CC Candidates
H40.1110 Primary open-angle glaucoma, right eye, stage unspecified
H16.011 Corneal ulcer, right eye
H53.121 Subjective visual disturbance, right eye
E11.319 Type 2 diabetes mellitus with unspecified diabetic retinopathy
```

### Academy of Ophthalmology Resources 
- **ICD-10-CM for Ophthalmology: The Complete Reference** (updated annually)
- **Subspecialty decision trees**: Anterior uveitis, AMD, diabetes, etc. [88]
- **Quick-reference guides**: Cornea, Glaucoma, Retina, Uveitis [88]
- **Coding contact**: coding@aao.org for complex scenarios

> [!NOTE] Ophthalmology Coding Nuance
> Most eye conditions are managed outpatient. For inpatient coding, focus on **systemic complications** ([[sepsis]], respiratory failure, malnutrition) that drive CC/MCC status rather than the eye condition itself [86][92].

---

## 🔍 Universal CC/MCC Documentation Checklist

```markdown
## For EVERY secondary diagnosis, ask:
□ Is the condition clinically significant? 
□ Did it require: 
  □ Clinical evaluation beyond routine care?
  □ Therapeutic treatment (meds, procedure, therapy)?
  □ Diagnostic procedures (labs, imaging, consults)?
  □ Extended length of stay?
  □ Increased nursing care/monitoring?
□ Is the provider's diagnostic statement clear and specific?
□ Is the condition present on admission (POA=Y) or developed during stay (POA=N)?
□ Does documentation support the severity level (e.g., "severe" malnutrition, "acute" exacerbation)?
□ Are laterality, stage, and specificity documented per ICD-10-CM requirements?
```

---

## 📚 Key References for Your Vault
- [[CMS MS-DRG Definitions Manual v42.0]] - Official DRG/CC/MCC logic
- [[ICD-10-CM Official Guidelines FY 2025]] - Coding rules & POA guidance
- [[IRF-PAI Manual v4.2]] - PMR-specific assessment & comorbidity rules
- [[AAO ICD-10-CM for Ophthalmology]] - Eye-specific coding guidance
- [[ADL Data CC/MCC Checklist]] - Abbreviated CMS list of qualifying diagnoses [69]

> [!ABSTRACT] Bottom Line
> CC/MCC capture is **documentation-driven, not coder-driven**. Your role is to:
> 1. Ensure provider documentation supports clinical significance and severity
> 2. Apply ICD-10-CM guidelines accurately
> 3. Query when documentation is incomplete or conflicting
> 4. Sequence diagnoses per UHDDS and MS-DRG logic
> 
> When documentation is complete and specific, CC/MCC assignment follows naturally—and reimbursement reflects the true complexity of care [[6]].

---
*Last updated: $(date)*  
*Tags: #inpatient-coding #cc-mcc #ms-drg #pmr #urology #ent #ophthalmology #obsidian-vault*