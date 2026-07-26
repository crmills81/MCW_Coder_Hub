---
tags:
  - poa
  - present-on-admission
  - hac
  - inpatient
  - coding-fundamentals
  - drg
  - compliance
title: POA Indicator Guide - Present on Admission Assignment Logic
aliases:
  - POA
  - Present on Admission
  - POA Indicators
  - POA Guide
specialty: All Inpatient
code_type: POA Reference
system: CMS IPPS / UB-04
version_current: FY2025
updated: 2025-05-05
related_systems:
  - ICD-10-CM
  - MS-DRG
  - HAC
  - IPPS
  - UHDDS
status: complete
---

# 🏥 POA Indicator Guide - Present on Admission Assignment Logic

> [!abstract] One-Line Definition
> A **Present on Admission (POA) indicator** is a one-character flag assigned to every secondary ICD-10-CM diagnosis code on a Medicare inpatient claim that identifies whether the condition was present at the time of the inpatient admission — a determination that directly controls whether that diagnosis can qualify as a CC or MCC and whether a Hospital-Acquired Condition (HAC) is triggered.

---

## 📌 Why This Matters to Coders

POA indicators are one of the most compliance-sensitive elements of inpatient coding because they sit at the intersection of payment accuracy, quality metrics, and fraud risk. Assigning POA = Y to a condition that developed during the hospital stay can artificially inflate the DRG tier and shield the hospital from a rightful HAC penalty. Assigning POA = N to a condition that was clearly present at admission can deflate the DRG and underrepresent the severity of illness the patient arrived with. Both are audit targets.

> [!important] Core Principle
> POA is not a clinical judgment — it is a **documentation-based determination**. The coder assigns POA based on what is documented in the medical record about the timing of a condition. When documentation is unclear, the appropriate response is a query — not an assumption.

---

## 🗂️ Section Index

1. [[#📖 Background & Authority]]
2. [[#🔢 The Five POA Indicator Values]]
3. [[#📐 Defining "Present at the Time of Admission"]]
4. [[#🔁 POA Assignment Rules — By Scenario]]
5. [[#🚫 POA-Exempt Diagnosis Codes]]
6. [[#🏗️ HAC Interaction — Where POA Has Payment Consequences]]
7. [[#⚠️ High-Risk POA Assignment Scenarios]]
8. [[#🧪 Coding Scenarios — Applied POA Logic]]
9. [[#🛠️ Practical Workflow]]
10. [[#📚 References & Resources]]

---

## 📖 Background & Authority

CMS implemented mandatory POA reporting for Medicare inpatient claims effective **January 1, 2008** as part of the Deficit Reduction Act of 2005. The program was designed to enable CMS to identify and exclude hospital-acquired conditions from CC/MCC status — eliminating the financial incentive for hospitals to profit from preventable complications.

| Authority                                            | Description                                                  |
| ---------------------------------------------------- | ------------------------------------------------------------ |
| **Deficit Reduction Act of 2005**                        | Mandated POA reporting and HAC program                       |
| **42 CFR § 412.64**                                      | CMS regulation implementing POA requirements                 |
| **ICD-10-CM Official Coding Guidelines, Section I.C.19** | POA reporting guidelines                                     |
| **CMS POA Exempt List**                                  | Annually updated list of codes exempt from POA reporting     |
| **UB-04 Claim Form**                                     | POA indicator submitted in FL 67 (diagnosis qualifier field) |

> [!note] POA Applies to Principal Diagnosis Too
> The principal diagnosis always receives POA = Y (it is, by definition, the reason for admission — it was present at admission). POA = Y is assigned to all diagnoses present at the time of the formal admission order, including conditions identified in the ED prior to admission.

---

## 🔢 The Five POA Indicator Values

| Indicator | Value                   | Full Meaning                                                              | CC/MCC Eligible?                     |
| --------- | ----------------------- | ------------------------------------------------------------------------- | ------------------------------------ |
| **Y**     | Yes                     | Diagnosis was present at the time of inpatient admission                  | **✅ Yes**                                |
| **N**     | No                      | Diagnosis was NOT present at the time of admission; developed during stay | **⚠️ Only if NOT a HAC**                 |
| **U**     | Unknown                 | Documentation insufficient to determine timing                            | **❌ No — treated as N for HAC purposes** |
| **W**     | Clinically Undetermined | Provider is unable to determine whether the condition was POA             | **✅ Yes**                                |
| **1**     | Exempt                  | Diagnosis is on the CMS POA-exempt list                                   | **✅ Yes — always qualifies**             |

> [!warning] U Is Not a Safe Default
> Assigning **POA = U** is not a neutral choice — CMS treats U the same as N for HAC-triggering purposes. U should only be assigned when documentation is genuinely absent or insufficient after a reasonable review of the entire record. If the timing can be clinically inferred, assign Y or N and document your rationale. If it cannot, initiate a query before defaulting to U.

### Key Difference: U vs W

| Indicator | When to Use |
|-----------|------------|
| **U** | Documentation exists but **does not address timing** — cannot determine from the record |
| **W** | Provider has documented that the condition's onset is **clinically uncertain** — the provider themselves cannot clinically determine when it began |

---

## 📐 Defining "Present at the Time of Admission"

A condition is considered present on admission if it exists at the time the **formal inpatient admission order** is written — even if it was not recognized, diagnosed, or documented at that moment.

### Included in "At Time of Admission"

- Conditions present in the **Emergency Department** prior to admission
- Conditions identified during **observation status** before formal inpatient admission
- Conditions that were **clinically present** but not yet diagnosed at admission (if later confirmed to have been present)
- Conditions documented in the **H&P** at the time of admission
- **Chronic conditions** that are ongoing (always POA = Y)

### Not "Present at Time of Admission"

- Conditions that **first manifest** after the admission order is written
- Hospital-acquired infections that develop after admission
- Post-procedural complications that arise during the stay
- New conditions diagnosed during the stay that have no clinical basis in the pre-admission presentation

> [!tip] ED Documentation Is Part of the Admission Record
> When a patient comes through the ED and is subsequently admitted, the ED notes, nursing assessments, and physician documentation are all part of the inpatient record for POA purposes. A diagnosis documented only in the ED triage note but not repeated in the H&P is still codeable — and still POA = Y — if it meets UHDDS secondary diagnosis criteria.

---

## 🔁 POA Assignment Rules — By Scenario

### Chronic Conditions

All **chronic, ongoing conditions** are POA = Y. They were present before admission and continue through the stay.

| Condition                                 | POA                |
| ----------------------------------------- | ------------------ |
| **Type 2 Diabetes Mellitus [[E11.9]]**    | Y — always chronic |
| **Essential Hypertension [[I10]]**        | Y — always chronic |
| **ESRD [[N18.6]]**                        | Y — always chronic |
| **COPD [[J44.1]]**                        | Y — always chronic |
| **Chronic Atrial Fibrillation [[I48.2]]** | Y — always chronic |
| **CKD Stage 3b [[N18.32]]**               | Y — always chronic |

### Acute Conditions — Timing Clear from Documentation

| Scenario | POA |
|----------|-----|
| AKI documented in ED or H&P | Y |
| AKI develops on hospital day 3; no evidence at admission | N |
| Creatinine trending up — AKI documented on day 2 but labs at admission also abnormal | Requires query or clinical determination |
| Sepsis documented as reason for admission | Y |
| Sepsis develops after surgery during hospitalization | N |

### Conditions Developing Post-Procedure

Post-procedural complications (e.g., post-op hemorrhage, surgical site infection, post-op respiratory failure) are **always POA = N** — they are, by definition, not present at admission.

| Complication | POA | Notes |
|-------------|-----|-------|
| Post-op wound infection | N | Surgical site infection — HAC consideration |
| Post-op DVT after TKA | N | HAC-listed condition |
| Post-op AKI after contrast administration | N | Unless AKI present at admission |
| CAUTI in catheterized patient admitted with UTI | Depends | If same UTI → Y; if new catheter-related → N |

> [!warning] CAUTI POA Is a Frequent Audit Target
> Catheter-associated UTI (CAUTI) is both a HAC and a high-volume diagnosis. POA = Y is appropriate only if the infection was clearly present at admission. If the catheter was placed after admission and infection developed during stay, POA = N — triggering HAC designation and loss of CC/MCC status. See [[HAC_List]] for CAUTI HAC criteria.

### Conditions Documented as "Possible" or "Probable"

Per **OGCR**, when a condition is coded as "probable" or "suspected" in the inpatient setting:
- If the stated condition was being evaluated at the time of admission → POA = Y
- If the condition is first raised as a possibility during the hospitalization → POA = N

### Obstetric Conditions

For obstetric patients, POA is assessed at the time of **admission for delivery**. Pre-existing conditions (**chronic HTN, pre-gestational diabetes**) are POA = Y. Conditions that develop in labor or post-partum are POA = N.

---

## 🚫 POA-Exempt Diagnosis Codes

CMS publishes an annual list of ICD-10-CM codes that are **exempt from POA reporting**. These codes receive the **"1" indicator** and always qualify for CC/MCC status regardless of timing.

### Categories of POA-Exempt Codes

| Category                                    | Examples                                                            |
| ------------------------------------------- | ------------------------------------------------------------------- |
| **External cause codes (V, W, X, Y codes)**     | Mechanism of injury — not a condition with onset timing             |
| **Status codes (Z codes for outcomes)**         | [[Z87.891]] History of nicotine dependence                          |
| **Codes representing categories of conditions** | Select codes where onset determination is not clinically meaningful |
| **Specific instructional codes**                | Per CMS table published annually                                    |

> [!tip] Your Encoder Handles Exemptions Automatically
> Any ICD-10-CM code on the POA-exempt list will be flagged in your encoder as exempt — the system assigns the "1" indicator automatically. The coder's job is to ensure the code is appropriate; the exemption is applied by the system. Always verify your encoder's exempt list reflects the current FY.

---

## 🏗️ HAC Interaction — Where POA Has Payment Consequences

The HAC-POA interaction is the highest-stakes application of POA logic. When a **HAC-listed condition** has POA = N, it is excluded from CC/MCC consideration AND may contribute to the hospital's HAC Reduction Program score.

### HAC-POA Mechanism
```
Diagnosis coded → Check: Is it on the HAC list?
↓ YES
Check: What is the POA indicator?
┌──────────────────────────────────────┐
│ POA = Y → Qualifies as CC/MCC │
│ No HAC triggered │
└──────────────────────────────────────┘
┌──────────────────────────────────────┐
│ POA = N → Does NOT qualify as CC/MCC │
│ HAC triggered │
│ Hospital faces penalty │
└──────────────────────────────────────┘
┌──────────────────────────────────────┐
│ POA = U → Treated same as N │
│ Does NOT qualify as CC/MCC │
└──────────────────────────────────────┘
```


### HAC Categories Where POA = N Is Critical

| HAC                                   | ICD-10-CM Codes Involved               | POA = N Consequence     |
| ------------------------------------- | -------------------------------------- | ----------------------- |
| Pressure Ulcer, Stage 3/4/Unstageable | **L89.xx3, L89.xx4, L89.xx0**          | MCC lost; HAC triggered |
| Falls and Trauma                      | **[[S72.001A]], [[W19.XXXA]], others** | CC/MCC lost             |
| CAUTI                                 | **[[T83.511A]] + [[N39.0]]**           | CC lost; HAC triggered  |
| Central Line-Associated BSI           | **[[T80.211A]]**                       | MCC lost                |
| Surgical Site Infection (specific)    | **Post-op infection codes**            | CC/MCC lost             |
| DVT/PE Post-Orthopedic                | **[[I26.09]], [[I82.401]]**            | CC/MCC lost             |
| Glycemic Control Failures             | **[[E11.649]], [[E11.641]]**           | CC lost                 |
| Iatrogenic Pneumothorax               | **[[J95.811]]**                        | CC lost                 |

For the complete current HAC list, see [[HAC_List]].

---

## ⚠️ High-Risk POA Assignment Scenarios

These are the scenarios that generate the most audit findings and compliance risk.

### Pressure Injuries

**The Challenge:** Pressure injuries are often underdocumented at admission. Skin assessments may be charted by nursing but not referenced by the physician.

**Best Practice:**
- Review **nursing skin assessment** at time of admission — this is the primary POA documentation source for pressure injuries
- If a wound is documented on the admission skin assessment → POA = Y even if not in the physician's H&P
- If first documented on day 3 with no admission skin assessment → POA = N unless query clarifies
- Always check the admission nursing assessment before assigning POA = N for pressure injuries

> [!important] Nursing Documentation Is Valid for POA
> POA is determined from the **entire medical record** — not just physician notes. Nursing admission assessments, wound care notes, and therapy assessments all contribute to POA determination. A wound documented on the nursing admission assessment is POA = Y.

### AKI

**The Challenge:** Creatinine is sometimes abnormal at admission but AKI is not documented until day 2 or 3. Did AKI exist at admission?

**Best Practice:**
- If admission labs show elevated creatinine AND AKI is subsequently documented → high likelihood POA = Y; query if unclear
- If all admission labs are normal and creatinine rises post-admission → POA = N
- Contrast-induced nephropathy (administered during stay) → POA = N

### CAUTI

**The Challenge:** Catheter placed at admission; UTI documented later in stay. Was the infection present at admission or acquired?

**Best Practice:**
- UTI documented in ED pre-admission → POA = Y
- Catheter placed during stay, UTI subsequently develops → POA = N; HAC applies
- Patient admitted with existing catheter from a SNF/home, UTI confirmed at admission → POA = Y

### Sepsis That Develops During Stay

**The Challenge:** Patient admitted for pneumonia; develops sepsis on day 2. POA for sepsis?

**Best Practice:**
- Review ED notes and H&P — were SIRS criteria present at admission?
- If SIRS criteria present at admission but sepsis not explicitly documented → query
- If clinical picture at admission was clearly infectious source + SIRS → POA = Y is supportable
- If patient was stable at admission and sepsis develops clearly post-op or after day 2 → POA = N

---

## 🧪 Coding Scenarios — Applied POA Logic

### Scenario 1: Pressure Injury Discovered on Day 3

**Facts:** 76F admitted for hip fracture. Nursing skin assessment on admission is incomplete. On day 3, wound care nurse documents Stage 3 sacral pressure ulcer.

**POA Analysis:**
- Incomplete admission skin assessment → timing unknown
- No documentation suggesting wound was present at admission
- Stage 3 wounds typically take days to develop — but may have existed before admission
- **Correct Action:** Query physician and wound care nurse about wound timeline

**POA Options:**
- If wound confirmed to have existed at admission → Y (qualifies as MCC)
- If wound confirmed to have developed during stay → N (HAC triggered, MCC lost)
- If clinically undetermined → W (qualifies for CC/MCC; compliant)

---

### Scenario 2: AKI — Elevated Admission Creatinine

**Facts:** 68M admitted for sepsis. Admission BMP: Cr 2.1 (baseline per PCP records: 0.9). AKI not documented until hospital day 2 progress note.

**POA Analysis:**
- Creatinine elevated at admission (2.1 vs baseline 0.9) — meets KDIGO AKI definition at admission
- AKI documentation lag does not change the biological onset
- **Correct Action:** Assign POA = Y — the condition existed at admission based on lab evidence
- If uncertain, query physician to confirm AKI was present at admission

**Result:** POA = Y → [[N17.9]] qualifies as MCC ✅

---

### Scenario 3: DVT Post-TKA

**Facts:** 62F admitted for elective TKA. Post-op day 4: bilateral lower extremity ultrasound confirms DVT. No prior DVT history; no admission ultrasound performed.

**POA Analysis:**
- DVT developed during hospitalization following surgery
- No evidence of DVT at admission
- **POA = N** → HAC triggered → DVT does NOT qualify as CC/MCC
- Hospital may face HAC Reduction Program penalty

**Code:** [[I82.401]] POA = N

---

## 🛠️ Practical Workflow
```
FOR EACH secondary diagnosis coded:

1. IDENTIFY the timing of onset
→ When was this condition first documented?
→ Was it present in the ED? In the H&P? In nursing admission assessment?
→ Is it a chronic, ongoing condition?

2. APPLY the POA value
→ Chronic / pre-existing → Y
→ Documented at admission / in ED → Y
→ Developed during stay, clearly post-admission → N
→ Documentation exists but timing not addressed → U (query first if HAC-listed)
→ Provider documents clinically unable to determine onset → W

3. CHECK against the HAC list
→ Is this diagnosis on the CMS HAC list? (See [[HAC_List]])
→ If YES and POA = N → CC/MCC status removed; HAC triggered
→ If YES and POA = Y → CC/MCC qualifies normally

4. CHECK POA-exempt list
→ External cause codes, certain Z codes → assign "1" (encoder handles automatically)

5. QUERY if needed
→ POA is unclear and diagnosis is HAC-listed → query before defaulting to U
→ Pressure injury timing undocumented → query wound care / physician
→ AKI timing ambiguous given admission labs → query or document clinical rationale

6. DOCUMENT your POA rationale
→ For any HAC-listed diagnosis with POA = N or W, note your source
→ Audit defense starts with documentation of your determination process
```


---

## 📚 References & Resources

| Resource                                      | Description                                 | URL                                                                                       |
| --------------------------------------------- | ------------------------------------------- | ----------------------------------------------------------------------------------------- |
| **CMS POA Reporting Guidelines**                  | Official POA indicator instructions         | cms.gov/Medicare/Coding/ICD10                                                             |
| **ICD-10-CM Official Guidelines, Section I.C.19** | OGCR POA reporting section                  | cms.gov                                                                                   |
| **CMS POA-Exempt Code List**                      | Annual list of exempt codes                 | Included in IPPS Final Rule                                                               |
| **CMS HAC Reduction Program**                     | HAC list and program details                | cms.gov/Medicare/Medicare-Fee-for-Service-Payment/AcuteInpatientPPS/HAC-Reduction-Program |
| **AHIMA POA Practice Brief**                      | Implementation guidance                     | ahima.org                                                                                 |
| **UB-04 Billing Manual**                          | FL 67 POA indicator submission instructions | nubc.org                                                                                  |

---

## 🔗 Related Notes

- [[HAC_List]] — Full HAC condition list; conditions where POA = N has payment impact
- [[CC-MCC Reference]] — POA must be Y/W/1 for CC/MCC to qualify
- [[MS-DRG Overview]] — How POA affects DRG tier via CC/MCC exclusion
- [[IPPS_Payment_Overview]] — HAC Reduction Program payment penalty context
- [[UHDDS_Principal_Diagnosis]] — PDx is always POA = Y
- [[CDI Query Templates]] — Query templates for POA timing clarification
- [[MDC 11 - Urology]] — CAUTI POA scenarios
- [[MDC 03 - ENT]] — Post-op complication POA scenarios
- [[MDC 02 - Eye]] — Post-procedural complication POA
- [[N17.9]] — AKI — high-value MCC; POA timing critical
- [[L89.xx3]] — Stage 3 pressure injury — HAC; POA-sensitive
- [[T83.511A]] — CAUTI — HAC; POA = N removes CC status

---

*POA-exempt code list and HAC designations update annually (October 1) with the IPPS Final Rule. Verify current-year exemptions and HAC list in your encoder before each fiscal year transition.*