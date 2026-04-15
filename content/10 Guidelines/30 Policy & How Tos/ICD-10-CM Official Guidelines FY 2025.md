---
tags:
  - icd-10-cm
  - coding-guidelines
  - inpatient-coding
  - outpatient-coding
  - fy2025
  - reference
aliases:
  - ICD-10-CM Guidelines 2025
  - Coding Guidelines FY25
  - Cooperating Parties Guidelines
created: 2025-01-20
updated: 2025-01-20
source: https://www.cms.gov/files/document/fy-2025-icd-10-cm-coding-guidelines.pdf
version: FY 2025
effective_date: 2024-10-01
expiration_date: 2025-09-30
approved_by:
  - AHA
  - AHIMA
  - CMS
  - NCHS
---

# ICD-10-CM Official Guidelines for Coding and Reporting — FY 2025
*Approved by the Cooperating Parties: AHA, AHIMA, CMS, NCHS*

> [!INFO] Authority & Scope
> These guidelines are official under HIPAA and must be followed for all healthcare settings when assigning ICD-10-CM diagnosis codes. They complement—but do not override—the conventions and instructions in the ICD-10-CM Tabular List and Alphabetic Index. [[12]]

---

## 📚 Document Structure

```
Section I: Conventions, General Guidelines & Chapter-Specific Guidelines
├── A. Conventions for ICD-10-CM
│   ├── Alphabetic Index vs. Tabular List usage
│   ├── Format, placeholders, 7th characters
│   ├── Abbreviations (NEC, NOS), punctuation, Excludes notes
│   └── Etiology/manifestation conventions
├── B. General Coding Guidelines  
│   ├── Code selection, specificity, signs/symptoms
│   ├── Acute/chronic, combination codes, sequela
│   ├── Laterality, documentation standards, clinical criteria
│   └── Chapter-specific rules (HIV, neoplasms, diabetes, etc.)
└── C. Chapter-Specific Guidelines (Chapters 1-22)
    ├── Infectious diseases, neoplasms, endocrine, circulatory...
    ├── Injury poisoning, external causes, Z codes
    └── Special topics: sepsis, malnutrition, opioid use, etc.

Section II: Selection of Principal Diagnosis (Inpatient)
Section III: Reporting Additional Diagnoses (Inpatient)  
Section IV: Outpatient Coding & Reporting Guidelines
Appendix I: Present on Admission (POA) Reporting Guidelines
```

---

## 🔑 Section I.A: Core Conventions (Must-Know)

### 1. Alphabetic Index → Tabular List Workflow
```markdown
✅ ALWAYS:
1. Locate term in Alphabetic Index
2. Verify code in Tabular List
3. Confirm full character count (3-7 characters + 7th if required)
4. Check for instructional notes (Includes, Excludes, Code first, Use additional)

❌ NEVER:
- Code directly from Alphabetic Index without Tabular verification
- Assign incomplete codes (missing required characters)
```

### 2. Excludes Notes: Critical Distinction [[12]]
| Type | Meaning | Can Codes Be Used Together? |
|------|---------|----------------------------|
| **Excludes1** | "NOT CODED HERE!" – Mutually exclusive conditions | ❌ No (unless unrelated per provider documentation) |
| **Excludes2** | "Not included here" – Condition is separate but may coexist | ✅ Yes, if both documented |

> [!EXAMPLE] Excludes1 Application  
> F45.8 (Other somatoform disorders) Excludes1: G47.63 (Sleep related teeth grinding)  
> → Do NOT report both for teeth grinding alone.  
> → MAY report both if patient has psychogenic dysmenorrhea (F45.8) AND sleep bruxism (G47.63) as unrelated conditions.

### 3. "With" / "In" Presumption Rule
```markdown
When "with" or "in" appears in:
• Code title
• Alphabetic Index entry  
• Tabular List instructional note

→ Classification PRESUMES causal relationship.
→ Code as related EVEN WITHOUT provider documentation linking them.

EXCEPTIONS:
• Documentation explicitly states conditions are unrelated
• Specific guideline requires documented linkage (e.g., sepsis + organ dysfunction)
```

> [!TIP] Query Trigger  
> If documentation is ambiguous about relationship between conditions linked by "with" in the classification, query for clarification—but default to coding as related if no conflict exists.

### 4. Placeholder "X" and 7th Characters
```icd10
// Example: Poisoning by aspirin, accidental, initial encounter
T39.011A → Requires 7th character "A" for initial encounter

// If code has fewer than 6 characters before 7th char:
T36.0X5A → "X" fills 5th character position to allow 7th char in 7th position
```

---

## ⚙️ Section I.B: General Coding Guidelines (High-Yield)

### Specificity Hierarchy
```markdown
1. Code to HIGHEST number of characters available (3-7)
2. Code to HIGHEST level of specificity DOCUMENTED
3. Use "unspecified" ONLY when documentation lacks detail for more specific code

✅ Documented: "Type 2 diabetes with mild nonproliferative retinopathy, right eye"  
→ E11.3211 (7 characters)

❌ Documented: "Diabetes with eye problems"  
→ E11.9 + H53.9 (unspecified) — then QUERY for specificity
```

### Signs/Symptoms vs. Definitive Diagnosis
| Scenario | Coding Approach |
|----------|----------------|
| Definitive diagnosis established | Code the diagnosis; do NOT code associated routine signs/symptoms |
| No definitive diagnosis after study | Code sign/symptom as principal/first-listed |
| Sign/symptom NOT routinely associated with dx | Code both if clinically significant |

### Acute + Chronic Same Condition
```markdown
IF Alphabetic Index has separate subentries at same indentation level for:
• Acute [condition]  
• Chronic [condition]

→ CODE BOTH, sequence ACUTE first.

Example:  
Alphabetic Index under "Bronchitis":  
• acute  
• chronic  
• acute and chronic  

Documentation: "Acute exacerbation of chronic bronchitis"  
→ J44.1 (COPD with acute exacerbation) — combination code captures both
```

### Sequela (Late Effects) Coding Rule
```markdown
General Rule:  
1. Code for NATURE/CONDITION of sequela FIRST  
2. Code for SEQUELA (late effect) SECOND  

Exception:  
If sequela code INCLUDES manifestation in its title or expanded characters,  
→ Use ONLY the sequela code.

NEVER code acute phase injury/illness with sequela code.

Example:  
Old cerebral infarction with residual aphasia  
→ I69.321 (Aphasia following cerebral infarction) — single code captures both
```

---

## 🎯 Section I.C: Chapter-Specific Highlights (Specialty Focus)

### Chapter 1: Infectious Diseases (A00-B99) — Sepsis Guidelines [[12]]
```markdown
SEPSIS CODING SEQUENCE:
1. Code underlying systemic infection FIRST (e.g., A41.9 Sepsis)
2. Code severe sepsis IF documented: R65.20 or R65.21
3. Code associated acute organ dysfunction(s) SECONDARY

❗ Critical:  
• "Urosepsis" is non-specific — query for sepsis vs. UTI  
• "Sepsis syndrome" = code as sepsis (A41.9) unless provider specifies otherwise  
• Organ dysfunction must be DOCUMENTED (not inferred) to code separately
```

### Chapter 2: Neoplasms (C00-D49) — Key Rules
```markdown
PRIMARY vs. SECONDARY MALIGNANCY:
• Admission for treatment of primary site → Code primary malignancy as principal dx
• Admission for treatment of metastasis → Code secondary malignancy as principal dx  
• Both treated → Sequence based on reason for admission

CHEMOTHERAPY/IMMUNOTHERAPY/RADIATION:
• Z51.0 (Encounter for antineoplastic radiation) or Z51.11/Z51.12 (chemo) as principal dx  
• Malignancy code as secondary (unless complication of therapy is reason for admission)

HISTORY OF MALIGNANCY:
• Use Z85.- codes ONLY when primary treatment completed AND no current evidence of disease  
• Do NOT use Z85.- if patient is still receiving treatment or has active disease
```

### Chapter 4: Endocrine (E00-E89) — Diabetes Mellitus
```markdown
DIABETES CODING HIERARCHY:
1. Type (E10.- Type 1, E11.- Type 2, etc.)  
2. Complication category (e.g., .3- for ophthalmic, .4- for neurological)  
3. Specific manifestation (e.g., .311 = with mild NPDR, right eye)  
4. Control status (if documented: uncontrolled, in remission, etc.)

✅ Documented: "Type 2 diabetes with chronic kidney disease stage 4"  
→ E11.22 (Type 2 DM with diabetic CKD) + N18.4 (CKD stage 4)

❗ Query if:  
• Type not specified AND no clues in record (default to E11.- per guidelines)  
• "Diabetic" used without specifying type or complication
```

### Chapter 9: Circulatory (I00-I99) — Hypertension & Heart Disease
```markdown
HYPERTENSION WITH HEART/KIDNEY DISEASE:
• "Hypertensive heart disease" → I11.- (code also heart failure if present: I50.-)  
• "Hypertensive CKD" → I12.- (code also N18.- stage)  
• "Hypertensive heart AND CKD" → I13.- (code also I50.- and N18.- as needed)

❗ Do NOT assume relationship:  
If documentation says "hypertension and heart failure" without linking,  
→ Code I10 (Essential hypertension) + I50.9 (Heart failure) separately  
→ Query if clinical picture suggests causal relationship
```

### Chapter 19: Injury/Poisoning (S00-T88) — 7th Character Rules
```markdown
7TH CHARACTER REQUIREMENTS (Chapter 19):
A = Initial encounter (active treatment)  
D = Subsequent encounter (routine healing)  
S = Sequela (late effects)

FRACTURE CODING:
• Must specify: open/closed, displaced/nondisplaced, laterality, encounter type  
• Pathologic fracture: M84.4- (code also underlying cause, e.g., C79.51 for metastasis)

ADVERSE EFFECT vs. POISONING:
• Adverse effect: Drug correctly prescribed/administered → T36-T50 + 5th/6th char "5"  
• Poisoning: Wrong drug/dose/intent → T36-T50 + 5th/6th char "1-4" + intent code (X40-X44, etc.)
```

### Chapter 21: Z Codes (Z00-Z99) — When to Use
```markdown
Z CODES AS PRINCIPAL/FIRST-LISTED:
✅ Z00-Z13: Examinations (when no complaint/diagnosis)  
✅ Z20-Z29: Potential health hazards (e.g., Z20.828 Contact with COVID-19)  
✅ Z30-Z39: Reproductive services  
✅ Z40-Z53: Aftercare/follow-up (when treatment completed)  
✅ Z55-Z65: Social determinants impacting care  
✅ Z71-Z76: Other health service encounters  
✅ Z85-Z87: Personal history (when no current disease)

❌ Z codes NOT for principal dx when:  
• Current illness/injury is reason for encounter  
• Z code describes circumstance only (use as secondary)

EXAMPLE:  
Patient admitted for chemotherapy for breast cancer  
→ Z51.11 (Encounter for antineoplastic chemotherapy) = principal  
→ C50.911 (Malignant neoplasm of right breast) = secondary
```

---

## 🏥 Sections II-III: Inpatient Diagnosis Selection

### Principal Diagnosis Definition (Section II)
> *"That condition established after study to be chiefly responsible for occasioning the admission of the patient to the hospital for care."* [[12]]

#### Key Application Rules
| Scenario | Principal Dx Guidance |
|----------|----------------------|
| Symptom → Confirmed diagnosis during stay | Code confirmed diagnosis |
| Two equally valid dx | Sequence based on circumstances of admission |
| Uncertain diagnosis at discharge | Code as if condition exists (inpatient only) |
| Complication of care | Code complication as principal IF it is reason for admission |
| Observation → Admission | Code reason for observation as principal if it becomes reason for admission |

### Additional Diagnoses Criteria (Section III)
Code ALL conditions that:
```markdown
✅ Require clinical evaluation  
✅ Require therapeutic treatment  
✅ Require diagnostic procedures  
✅ Extend length of stay  
✅ Increase nursing care/monitoring  

❌ Do NOT code:  
• Historical conditions with no current impact  
• Abnormal findings without clinical significance  
• Conditions ruled out after study (use Z03.- for observation only)
```

---

## 🚑 Section IV: Outpatient Guidelines (Key Differences)

### Uncertain Diagnosis Rule
```markdown
OUTPATIENT:  
❌ NEVER code "probable," "suspected," "rule out" as confirmed  
✅ Code signs/symptoms or reason for encounter instead  

INPATIENT:  
✅ Code uncertain diagnoses as if confirmed (per Section II.H)
```

### First-Listed Diagnosis Selection
```markdown
For outpatient encounters:  
1. Reason for encounter (chief complaint)  
2. If multiple reasons: sequence based on resources used/provider focus  
3. For routine prenatal visits: Z34.- as first-listed  
4. For post-op follow-up: Z48.- + procedure code + any complications
```

---

## 📋 Appendix I: POA Reporting Guidelines

### POA Indicator Assignment Logic
| Condition Status | POA Value | Notes |
|-----------------|-----------|-------|
| Clearly present at admission | Y | Most common |
| Clearly developed after admission | N | May trigger HAC payment adjustment |
| Documentation insufficient | U | Treated as "N" for payment |
| Clinically undeterminable | W | Query provider |
| Exempt code (e.g., external cause) | 1 | Per CMS exempt list |

### HAC (Hospital-Acquired Condition) Impact
```markdown
If POA = "N" AND code is on CMS HAC list:  
→ Medicare will NOT pay higher DRG weight for that CC/MCC  
→ Hospital absorbs cost of complication  

Common HACs affecting CC/MCC:  
• Stage 3/4 pressure ulcers (L89.2-, L89.3-)  
• Catheter-associated UTI (T83.51-)  
• Postoperative PE/DVT (I26.99, I82.81-)  
• Falls/trauma in facility (W00-W19 + injury code)
```

> [!TIP] POA Best Practice  
> Document "present on admission" status explicitly in H&P or progress notes when clinically relevant. Reduces query burden and supports accurate POA assignment.

---

## 🔍 Clinical Validation & Query Essentials

### When to Query (Per Guidelines)
```markdown
✅ Documentation conflicts (e.g., progress note vs. discharge summary)  
✅ Diagnosis stated without supporting clinical criteria  
✅ Severity not specified when CC/MCC depends on it  
✅ Relationship between conditions unclear when classification presumes linkage  
✅ "Rule out" diagnosis in inpatient record at discharge  

❌ Do NOT query for:  
• Coder preference when documentation is clear  
• Clinical judgment calls within provider discretion  
• Adding diagnoses not documented anywhere in record
```

### Query Template Structure
```markdown
Subject: Clinical Validation Query — [Patient MRN] — [Condition]

Clinical Indicators in Record:  
• [List relevant labs, imaging, assessments]  
• [Quote provider documentation]

Coding Guidance:  
• Per ICD-10-CM Official Guidelines Section I.B.19, code assignment is based on provider diagnostic statement.  
• For [condition] to be reported, documentation must support [specific criteria per guideline].

Request:  
Please clarify:  
☐ Is [condition] confirmed?  
☐ If yes, is it [acute/chronic/severe/etc.]?  
☐ Is it present on admission or developed during stay?  
☐ Is it related to [other documented condition]?

Provider Response: _________________________  
Signature/Date: _________________________
```

---

## 🔗 Related Vault Notes
- [[CMS MS-DRG Definitions Manual v42.0]]
- [[CC-MCC Reference List FY2025]]
- [[Clinical Validation Query Templates]]
- [[POA Reporting Quick Reference]]
- [[Chapter-Specific Coding Cheat Sheets]]

---

## 📚 Official Resources
- [FY 2025 ICD-10-CM Guidelines (PDF)](https://www.cms.gov/files/document/fy-2025-icd-10-cm-coding-guidelines.pdf) [[12]]
- [ICD-10-CM Code Tables FY 2025](https://www.cms.gov/icd10m/FY2025-Version42-fullcode-cms)
- [Cooperating Parties Website](https://www.cdc.gov/nchs/icd/cooperating_parties.htm)
- [AHA Coding Clinic for ICD-10-CM/PCS](https://www.ahacentraloffice.org/) — Official coding advice

> [!ABSTRACT] Bottom Line  
> The ICD-10-CM Official Guidelines are the *rulebook* for diagnosis coding. Mastery requires: (1) understanding conventions (Excludes, "with", placeholders), (2) applying chapter-specific rules (sepsis, diabetes, trauma), (3) distinguishing inpatient vs. outpatient rules (uncertain dx, principal selection), and (4) integrating POA/HAC logic. Always pair guideline knowledge with clinical documentation review—and query when in doubt.

---
*Last synced: $(date)*  
*Next update: FY 2026 Guidelines (expected July 2025)*
