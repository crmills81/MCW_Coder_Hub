---
tags:
  - uhdds
  - principal-diagnosis
  - sequencing
  - ogcr
  - inpatient
  - coding-fundamentals
  - drg
title: UHDDS Principal Diagnosis — Sequencing Rules & Application Guide
aliases:
  - UHDDS
  - Principal Diagnosis
  - PDx
  - Uniform Hospital Discharge Data Set
  - Principal Dx Sequencing
specialty: All Inpatient
code_type: Sequencing Reference
system: UHDDS / OGCR
version_current: FY2025
updated: 2025-05-05
related_systems:
  - ICD-10-CM
  - MS-DRG
  - MDC
  - IPPS
  - POA
  - UHDDS
status: complete
---

# 🏷️ UHDDS Principal Diagnosis — Sequencing Rules & Application Guide

> [!abstract] One-Line Definition
> The **principal diagnosis** is defined by UHDDS as "the condition established after study to be chiefly responsible for occasioning the admission of the patient to the hospital for care." It is the single most DRG-impactful code decision an inpatient coder makes, because it drives MDC assignment and the entire DRG grouper pathway.

---

## 📌 Why This Matters to Coders

Getting the principal diagnosis right is the foundation of everything else in inpatient coding. The wrong principal diagnosis sends the case to the wrong MDC, which produces the wrong DRG pathway, which may result in an incorrect relative weight — regardless of how accurately every other code in the claim is assigned. It is also the most audited element of inpatient claims because it drives the largest share of payment variance.

> [!important] Core Principle
> The principal diagnosis is not necessarily the most severe condition, the admitting diagnosis, or the condition that consumed the most resources. It is the condition **established after study** to be chiefly responsible for **the decision to admit**. These are critically different concepts.

---

## 🗂️ Section Index

1. [[#📖 UHDDS — Background & Authority]]
2. [[#📐 The Definition — Unpacked]]
3. [[#🔢 OGCR Section II — The Official Sequencing Rules]]
4. [[#⚖️ Two or More Diagnoses That Equally Meet the Definition]]
5. [[#🔁 Sequencing in Specific Scenarios]]
6. [[#🚨 Common Sequencing Errors and Their DRG Impact]]
7. [[#🧪 Coding Scenarios — Applied Sequencing]]
8. [[#🛠️ Practical Workflow]]
9. [[#📚 References & Resources]]

---

## 📖 UHDDS — Background & Authority

The **Uniform Hospital Discharge Data Set (UHDDS)** was established by the Department of Health, Education, and Welfare in **1974** as a standardized set of data elements to be collected for every Medicare and Medicaid inpatient hospital discharge. Its definitions provide the legal and regulatory foundation for inpatient diagnosis sequencing.

### Legal Framework

| Authority           | Description                                                                |
| ------------------- | -------------------------------------------------------------------------- |
| **45 CFR Part 162**     | HIPAA transaction standards incorporating UHDDS definitions                |
| **OGCR Section II**     | Official ICD-10-CM/PCS Coding Guidelines for principal diagnosis selection |
| **OGCR Section III**    | Secondary diagnosis reporting criteria                                     |
| **AHA Coding Clinic**   | Official Q&A guidance on specific sequencing scenarios                     |
| **CMS IPPS Final Rule** | Indirectly governs sequencing through DRG assignment logic                 |

> [!note] UHDDS + OGCR Work Together
> UHDDS provides the **definition** of principal diagnosis. OGCR Section II provides the **application rules** for how to select the principal diagnosis when the definition alone does not resolve ambiguity. Both are required knowledge for inpatient coders. Neither overrides the other — they are complementary.

---

## 📐 The Definition — Unpacked

> *"The condition established after study to be chiefly responsible for occasioning the admission of the patient to the hospital for care."*

Every word in this definition carries meaning:

| Phrase | What It Means Clinically |
|--------|--------------------------|
| **"established after study"** | Not the admitting diagnosis or presumptive working diagnosis — the condition confirmed by workup, labs, imaging, biopsy, or clinical assessment at or before discharge |
| **"chiefly responsible"** | The single condition that, above all others, drove the decision to admit — not a contributing factor or coincidental finding |
| **"occasioning the admission"** | The reason the clinician decided inpatient care was required — if this condition could have been managed outpatient, it is likely not the PDx |
| **"for care"** | Implies active management, evaluation, or treatment during the stay — not historical conditions requiring no inpatient intervention |

> [!warning] Admitting Diagnosis ≠ Principal Diagnosis
> The admitting diagnosis (the working diagnosis at presentation) frequently changes after workup. The coder must use the **final** established diagnosis — not the initial impression. If the discharge summary lists a different diagnosis than the admitting H&P, the discharge summary governs.

---

## 🔢 OGCR Section II — The Official Sequencing Rules

The Official Coding Guidelines, Section II, provides specific direction for principal diagnosis selection. These rules are **mandatory** — deviating from them constitutes a coding error.

### Section II.A — Codes for Symptoms, Signs, and Ill-Defined Conditions

> Per OGCR II.A: Symptoms, signs, and ill-defined conditions from Chapter 18 (R codes) are **not acceptable** as the principal diagnosis when a definitive diagnosis has been established.

| Scenario                                       | Correct PDx                                       |
| ---------------------------------------------- | ------------------------------------------------- |
| Chest pain, final diagnosis: NSTEMI            | **[[I21.4]] NSTEMI — not [[R07.9]] chest pain**       |
| Dysuria, final diagnosis: UTI                  | **[[N39.0]] UTI — not [[R30.0]] dysuria**             |
| AMS, final diagnosis: metabolic encephalopathy | **[[G93.41]] — not [[R41.3]] AMS**                    |
| Hematuria, final diagnosis: bladder tumor      | **[[C67.9]] or [[D41.40]] — not [[R31.9]] hematuria** |

> [!tip] Symptom Codes Are Still Codeable as Secondary
> Even when a definitive diagnosis has been established, the presenting symptom may still be coded as a **secondary diagnosis** if it represents a condition evaluated and managed separately. Example: Chest pain coded secondary to NSTEMI if the chest pain required separate diagnostic workup beyond standard MI management.

### Section II.B — Two or More Interrelated Conditions

When two conditions potentially meeting the PDx definition are related (cause and effect), code the **underlying condition** as principal unless OGCR provides specific guidance otherwise.

| Example                                 | Correct PDx                                                                        |
| --------------------------------------- | ---------------------------------------------------------------------------------- |
| **Hypertensive chronic kidney disease** | Code the underlying condition per combination code rules                           |
| **Diabetic retinopathy**                | Diabetes code (E11.3xxx) includes retinopathy — one code covers both               |
| **Sepsis due to pneumonia**             | Sepsis A41.xx principal; pneumonia J18.x secondary (unless OGCR directs otherwise) |

### Section II.C — Two or More Diagnoses That Equally Meet the Definition

See dedicated section below — this is the most commonly tested sequencing scenario.

### Section II.D — Two or More Comparative/Contrasting Diagnoses

When two diagnoses are documented as "either/or" or compared as possibilities (e.g., "pneumonia vs aspiration pneumonitis"):
- **Both** conditions are coded as if confirmed
- Either may be sequenced as principal
- The condition that drives the most appropriate MDC may be selected

> [!warning] This Rule Is Inpatient-Only
> Coding probable/suspected/possible diagnoses as confirmed applies **only in the inpatient setting** per OGCR. In outpatient coding, code the sign or symptom — never an unconfirmed diagnosis. This is one of the most important distinctions between inpatient and outpatient coding rules.

### Section II.E — Symptoms Followed by Contrasting/Comparative Diagnoses

If the documentation includes a symptom followed by two contrasting diagnoses (e.g., "syncope due to either cardiac arrhythmia or vasovagal episode"), code both contrasting diagnoses — not the symptom.

### Section II.F — Original Treatment Plan Not Carried Out

When a patient is admitted for a procedure but the procedure is not performed:
- Still code the **condition for which the procedure was planned** as principal
- Code the reason the procedure was not performed as secondary

| Scenario | PDx |
|----------|-----|
| Admitted for TURP; cancelled due to severe hypertension | [[N40.1]] BPH with LUTS — not the hypertension |
| Admitted for cataract surgery; cancelled due to elevated INR | Cataract code as PDx — not the coagulopathy |

### Section II.G — Complications of Surgery and Other Medical Care

When the admission is for a complication of a prior procedure:
- Code the complication as the principal diagnosis
- Code the nature of the complication as an additional code when applicable

| Scenario                                                   | PDx                                                                         |
| ---------------------------------------------------------- | ----------------------------------------------------------------------- |
| Admitted for post-op wound infection after hip replacement | **[[T84.50XA]] Infection of internal joint prosthesis — complication code** |
| Admitted for post-cataract lens dislocation                | **[[H59.031]] Cataract fragment in vitreous post-procedure**                |
| Admitted for CAUTI post-urologic surgery                   | **[[T83.511A]] Infection of indwelling catheter**                           |

### Section II.H — Uncertain Diagnosis (Inpatient)

If a condition is documented as "**probable**," "**suspected**," "**likely**," "**questionable**," "**possible**," or "**still to be ruled out**" at the time of discharge, code the condition as if established.

> [!important] OGCR II.H Is Inpatient-Specific
> This rule exists because inpatient stays often end before a definitive workup conclusion. The coder codes the clinical thinking at the time of discharge summary — not what was ultimately proven. If the physician writes "**probable sepsis**" at discharge, code sepsis.

---

## ⚖️ Two or More Diagnoses That Equally Meet the Definition

This is the scenario that generates the most real-world sequencing questions and the most CDI/coding disagreements.

### The Rule (OGCR II.C)

> When there are two or more interrelated conditions (such as diseases in the same ICD-10-CM chapter or manifestation/etiology codes) that both potentially meet the definition of principal diagnosis, **either condition may be sequenced first**, unless the coding conventions, tabular list instructions, or the guidelines provide otherwise.

### Practical Application

| Scenario                                                          | Options                                    | Coder Decision Guidance                                                                                |
| ----------------------------------------------------------------- | ------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| **Patient admitted with pneumonia AND HF, both treated aggressively** | Either may be PDx                          | Select the condition that drove the **decision to admit** per clinical documentation; query if unclear |
| **COPD exacerbation AND acute bronchitis both documented**            | Either; but combination code may apply     | Check for instructional notes at the code level                                                        |
| **AKI AND sepsis both present and treated**                           | Either; but OGCR sepsis guidance may apply | If sepsis meets criteria and is the dominant condition, sepsis is typically PDx per coding convention  |
| **Bilateral procedures, bilateral diagnoses**                         | Code most specifically documented          | Use bilateral codes where available                                                                    |

> [!tip] Use the Discharge Summary as the Tie-Breaker
> When two diagnoses genuinely equally meet the definition, look to the **physician's own language** in the discharge summary. The condition listed first in the "final diagnoses" list often reflects the physician's own PDx hierarchy — though this is not conclusive, it is meaningful clinical context.

---

## 🔁 Sequencing in Specific Scenarios

### Sepsis and Infection

| Clinical Scenario                                                         | PDx Sequencing Rule                                                                                  |
| ------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| **Sepsis + localized infection source**                                   | Sepsis (A41.xx) is **principal**; infection source (e.g., [[N39.0]]) is secondary — OGCR I.C.1.d.1.b |
| **Patient admitted for localized infection, sepsis develops during stay** | **Localized infection** is PDx; sepsis is secondary with POA = N                                     |
| **Severe sepsis (with organ dysfunction)**                                | Sepsis code first, then [[R65.20]], then organ dysfunction codes                                     |
| **Septic shock**                                                          | Sepsis first, then [[R65.21]]                                                                        |
| **"Urosepsis" documented**                                                | Query required — see [[CDI Query Templates]] Template S-2                                            |

### Pregnancy and Obstetric Conditions

**Codes from Chapter 15 (O codes)** take priority when a pregnant patient is admitted and the pregnancy complicates or is complicated by the condition — the obstetric code generally sequences first.

### HIV and Related Conditions

| Scenario                                          | PDx                                              |
| ------------------------------------------------- | ------------------------------------------------ |
| **Admitted for HIV-related illness**                  | [[B20]] HIV disease as PDx                       |
| **HIV-positive but admitted for unrelated condition** | Unrelated condition as PDx; [[Z21]] as secondary |
| **Asymptomatic HIV**                                  | [[Z21]] — not [[B20]]                            |

### Neoplasms

| Scenario                                                           | PDx                                                                           |
| ------------------------------------------------------------------ | ----------------------------------------------------------------------------- |
| **Admitted for treatment of primary malignancy**                       | Primary malignancy as PDx                                                     |
| **Admitted for treatment of complication (anemia, pain, dehydration)** | Complication as PDx; neoplasm as secondary                                    |
| **Admitted for chemotherapy**                                          | [[Z51.11]] Encounter for antineoplastic chemo as PDx; malignancy as secondary |
| **Admitted for surgery on primary tumor**                              | Neoplasm as PDx; surgical procedure drives DRG                                |

### Signs and Symptoms with No Definitive Diagnosis Established

When a patient is discharged without a definitive diagnosis established:
- Code the sign or symptom as principal
- Do **not** code a "probable" or "suspected" diagnosis if the discharge summary does not confirm it
- Exception: Discharge summary itself documents a probable/suspected diagnosis → code as confirmed per OGCR II.H

---

## 🚨 Common Sequencing Errors and Their DRG Impact

| Sequencing Error                                                         | DRG Impact                                                       | Correction                                                 |
| ------------------------------------------------------------------------ | ---------------------------------------------------------------- | ---------------------------------------------------------- |
| **Coding symptom as PDx when definitive dx established**                     | Wrong MDC; lower-severity DRG                                    | Sequence definitive diagnosis per OGCR II.A                |
| **Coding the complication (e.g., AKI) as PDx when it is a secondary**        | Misassigns MDC to Renal when admission was for another condition | Identify the admission trigger; AKI as secondary MCC       |
| **Sepsis sequenced as secondary when it drove admission**                    | Case stays in infection-of-site MDC (lower RW) instead of MDC 18 | Per OGCR I.C.1, sepsis is PDx when it drove admission      |
| **Coding admitting (working) diagnosis as PDx vs final confirmed diagnosis** | Wrong MDC assignment; may be compliance issue                    | Use discharge summary as authoritative source              |
| **Coding "urosepsis" as [[N39.0]] (UTI only)**                               | Misses MCC; DRG stays low tier                                   | Query for sepsis documentation                             |
| **Principal diagnosis changed after query response not updated in grouper**  | Incorrect DRG submitted                                          | Re-run grouper after every query response                  |
| **Sequencing a Z code when an active disease code applies**                  | Z codes rarely drive surgical MDCs; missed DRG opportunity       | Active condition as PDx; Z code as secondary if applicable |

---

## 🧪 Coding Scenarios — Applied Sequencing

### Scenario 1: Sepsis with UTI Source

**Admit:** 68F, fever 39.1°C, WBC 22k, HR 124. UA positive. BC → E. coli. Started on IV pip/tazo. Physician documents "sepsis secondary to UTI."

| Code       | Type    | Rationale                                                 |
| ---------- | ------- | --------------------------------------------------------- |
| **[[A41.51]]** | **PDx** | Sepsis due to E. coli — drove admission; OGCR I.C.1.d.1.b |
| **[[N39.0]]**  | SDx     | UTI — infection source; secondary per OGCR                |
| **[[N17.9]]**  | SDx     | AKI — creatinine 0.9→2.1; MCC                             |

**DRG:** 872 — Septicemia or severe sepsis w/o MV ≥96 hrs w/ MCC (due to [[N17.9]])
**Key Sequencing Point:** Sepsis = PDx even though UTI is explicitly documented as the source.

---

### Scenario 2: CHF vs Pneumonia — Both Treated

**Admit:** 74M, SOB, bilateral infiltrates, BNP 1,840, EF 35%. Started on IV Lasix and IV antibiotics. Discharge summary: "Acute-on-chronic systolic HF; bilateral pneumonia."

| Codes | Type | Rationale |
|-------|------|-----------|
| [[I50.23]] | **PDx** | Acute-on-chronic systolic HF — physician listed first in final dx; drove diuresis |
| [[J18.9]] | SDx | Pneumonia — actively treated; CC |

**Alternative Acceptable Sequencing:** [[J18.9]] as PDx is also defensible — document rationale.
**DRG:** 291 (HF & shock w/ MCC) if MCC present; 293 if only CC.

---

### Scenario 3: Cancelled Procedure

**Admit:** 58M admitted for elective laparoscopic radical prostatectomy. Pre-op EKG shows new LBBB. Cardiology consulted. Surgery cancelled. Cardiac workup completed; LBBB attributed to pre-existing cardiomyopathy. Patient discharged for outpatient cardiac clearance.

| Code | Type | Rationale |
|------|------|-----------|
| [[C61]] | **PDx** | Prostate cancer — reason for planned surgery; OGCR II.F |
| [[I25.10]] | SDx | CAD/cardiomyopathy — reason procedure was not performed |
| [[I44.7]] | SDx | LBBB — evaluated; CC |

**DRG:** Medical DRG (no procedure performed) — MDC 12 medical pathway.

---

## 🛠️ Practical Workflow
```
STEP 1: Read the discharge summary
→ What is listed as the final diagnosis?
→ What did the physician state was the reason for admission?

STEP 2: Compare to admitting diagnosis
→ Did the clinical picture change after workup?
→ If yes, the final established diagnosis governs (OGCR II — "established after study")

STEP 3: Apply OGCR Section II rules
→ Is a definitive diagnosis established? (II.A)
→ Is there a probable/suspected diagnosis at discharge? (II.H)
→ Are two conditions competing? (II.C)
→ Does a specific sequencing rule apply? (Sepsis, neoplasm, HIV, OB)

STEP 4: Verify MDC assignment
→ Does the selected PDx route to the expected MDC?
→ Is the MDC clinically appropriate for the admission reason?

STEP 5: Query if needed
→ Documentation unclear or conflicting across notes?
→ Final diagnosis different in different parts of the record?
→ Open compliant query per [[CDI Query Templates]]

STEP 6: Document your sequencing rationale
→ In your encoder or abstraction system, note why you selected the PDx
→ Especially document when two conditions equally met the definition
```


---

## 📚 References & Resources

| Resource                             | Description                                         | URL                           |
| ------------------------------------ | --------------------------------------------------- | ----------------------------- |
| **OGCR Section II**                  | Official ICD-10-CM principal diagnosis guidelines   | cms.gov/Medicare/Coding/ICD10 |
| **OGCR Section III**                 | Secondary diagnosis reporting criteria              | cms.gov                       |
| **AHA Coding Clinic**                | Quarterly guidance on specific sequencing questions | ahacentraloffice.org          |
| **UHDDS Definitions**                | Original UHDDS data element definitions             | hhs.gov                       |
| **AHIMA Practice Brief: Sequencing** | Principal diagnosis selection guidance              | ahima.org                     |
| **AAPC CIC Study Guide**             | Inpatient coding certification — sequencing section | aapc.com                      |

---

## 🔗 Related Notes

- [[MS-DRG Overview]] — How PDx drives MDC and DRG pathway
- [[IPPS_Payment_Overview]] — Why sequencing accuracy has payment impact
- [[POA_Indicator_Guide]] — PDx is always POA = Y; secondary dx POA logic
- [[CC-MCC Reference]] — Secondary diagnoses that improve DRG tier
- [[HAC_List]] — HACs affect secondary dx, not PDx
- [[CDI Query Templates]] — Compliant query language for documentation gaps
- [[MDC 11 - Urology]] — Sepsis sequencing in urology context
- [[MDC 03 - ENT]] — Sepsis sequencing in ENT context
- [[N17.9]] — AKI as secondary MCC
- [[A41.9]] — Sepsis PDx sequencing
- [[ICD-10-PCS_Overview]] — Procedure coding; PDx and principal procedure interact

---

*OGCR guidelines update annually (October 1). Review Section II updates in each year's ICD-10-CM Official Guidelines for any new scenario-specific guidance. AHA Coding Clinic is the authoritative Q&A source for edge cases.*