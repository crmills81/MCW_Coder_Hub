---
tags:
  - coding/ncci
  - ncci
  - inpatient
  - profee
  - bundling
  - compliance
  - ptp
  - mue
title: National Correct Coding Initiative (NCCI) Edits for Inpatient & Observation ProFee Coding
updated: 2026-09-04
category: NCCI / Bundling & Compliance
specialty: Inpatient ProFee / Hospital Medicine
status: Active (2026 CMS & NCCI Manual Compliant)
---

# 🛡️ National Correct Coding Initiative (NCCI) Edits for Inpatient & Observation ProFee Coding

**Last Updated:** September 2026  
**Regulatory Framework:** CMS National Correct Coding Initiative (NCCI) Policy Manual for Medicare Services (CY 2026 Update), Medicare Claims Processing Manual (CMS IOM Pub. 100-04, Ch. 12 & Ch. 23), Social Security Act § 1862(a)(1)(A), & AMA CPT Coding Guidelines  

---

## 📌 Executive Summary & Regulatory Purpose

The **National Correct Coding Initiative (NCCI)** was developed by the Centers for Medicare & Medicaid Services (CMS) to promote national correct coding methodologies and eliminate improper coding that leads to inappropriate Part B and commercial fee-for-service reimbursement.

In inpatient hospital (**Place of Service 21**) and observation (**Place of Service 22**) Professional Fee (ProFee) billing, NCCI controls:
1. **Unbundling:** Preventing providers from billing separate component codes of a comprehensive procedure or service.
2. **Mutually Exclusive Services:** Blocking combinations of services that cannot reasonably be performed together on the same patient on the same calendar day.
3. **Overlapping E/M Encounters:** Enforcing single-encounter daily rules for inpatient rounding, same-day admissions/discharges, and initial care.
4. **Bedside Procedure Inclusions:** Ensuring invasive procedures performed during critical care or inpatient E/M visits are carved out accurately while bundled routine services remain included.
5. **Volume Caps (MUEs):** Limiting units of service to clinically plausible anatomical and temporal maximums per calendar date.

```
CMS NCCI Architecture for Inpatient ProFee
├── Procedure-to-Procedure (PTP) Edits
│   ├── Column 1 (Payable / Comprehensive Code)
│   ├── Column 2 (Component / Bundled Code)
│   └── Correct Coding Modifier Indicators (CCMI: 0, 1, 9)
├── Medically Unlikely Edits (MUE)
│   ├── Unit of Service (UOS) Daily Maximum
│   └── MUE Adjudication Indicators (MAI: 1 Claim Line, 2 Date of Service Policy, 3 Date of Service Clinical)
└── NCCI PTP-Associated Modifiers
    ├── E/M & Global Surgery: -25, -57, -24, -58, -78, -79, -FT
    ├── Distinct Procedural: -59, -XE, -XS, -XP, -XU
    └── Clinical / Anatomical: -RT, -LT, -50, -76, -77, -91, Digit/Eyelid/Coronary Modifiers
```

---

## ⚙️ Core NCCI Edit Architecture & Indicators

### 1. Procedure-to-Procedure (PTP) Edits & CCMI Values
NCCI PTP edits define pairs of CPT and HCPCS Level II codes that should not be reported together by the same physician/group for the same beneficiary on the same date of service (DOS).

- **Column 1 Code (Payable Code):** The broader, more comprehensive, or higher-relative-value service.
- **Column 2 Code (Component / Bundled Code):** The subsidiary, incidental, or mutually exclusive service bundled into Column 1.

Each PTP edit pair is assigned a **Correct Coding Modifier Indicator (CCMI)**:

| CCMI Indicator | Definition | Billing Rule & Claim Impact | Inpatient Compliance Requirement |
| :---: | :--- | :--- | :--- |
| **`0`** | **Modifier NOT Allowed** | The Column 2 code will **never** be reimbursed if billed with Column 1 on the same date by the same provider/group. Modifiers cannot bypass this edit. | Do not unbundle. Bill only the comprehensive Column 1 code. Any modifier appended will be ignored or denied. |
| **`1`** | **Modifier ALLOWED** | The Column 2 code is bundled by default, but **may be reimbursed separately** if clinical criteria for a distinct encounter, separate anatomical site, or different provider are documented and an appropriate NCCI modifier is appended. | Review medical record. If distinct criteria are met, append **[[-25]]**, **[[-57]]**, **[[-59]]**, or **[[-XE]]/[[-XS]]/[[-XP]]/[[-XU]]** to the Column 2 code (or E/M code). |
| **`9`** | **Not Applicable / Deleted** | Edit was deleted or retroactive policy change removed the restriction. | Edit is inactive. Both codes are adjudicated under standard fee schedule rules. |

---

### 2. Medically Unlikely Edits (MUE) & MAI Classifications
An **MUE** defines the maximum units of service (UOS) that a provider would report under most circumstances for a single beneficiary on a single date of service.

CMS classifies every MUE into one of three **MUE Adjudication Indicators (MAI)**:

```
┌─────────────────────────────────────────────────────────────────────────────────────────────┐
│                             MUE ADJUDICATION INDICATORS (MAI)                               │
├───────────────────────────────┬───────────────────────────────┬─────────────────────────────┤
│ MAI 1: Claim Line Edit        │ MAI 2: Absolute DOS Limit     │ MAI 3: Clinical DOS Limit   │
├───────────────────────────────┼───────────────────────────────┼─────────────────────────────┤
│ • Adjudicated on EACH line    │ • Absolute policy-based limit │ • Clinical-based daily limit│
│ • Units exceeding MUE on one  │   across the entire DOS       │   across the entire DOS     │
│   line are denied             │ • Cannot bypass with modifier │ • Cannot bypass on initial  │
│ • Separate lines with NCCI    │ • Cannot report on multiple   │   electronic claim          │
│   modifiers (-59, -XS, -76)   │   claim lines                 │ • Can be appealed with      │
│   CAN be paid if supported    │ • Appeals denied by regulation│   clinical medical necessity│
└───────────────────────────────┴───────────────────────────────┴─────────────────────────────┘
```

- **`MAI 1` (Claim Line Edit):** Applied to each claim line individually. If medically necessary units exceed the MUE, they can be reported on separate claim lines with distinct modifiers (e.g., bilateral anatomical modifiers, modifier [[-76]], modifier [[-XS]]).
- **`MAI 2` (Absolute Date of Service Edit — Policy/Regulation):** Policy-based limit per calendar day (e.g., Initial Hospital Care [[99221]]–[[99223]] has MUE = 1; an individual patient cannot be admitted more than once per day). Cannot be bypassed under any circumstance.
- **`MAI 3` (Clinical Date of Service Edit — Medical Practice):** Clinical practice benchmark per calendar day. If clinical necessity required units beyond the MUE (e.g., multiple units of Critical Care Add-on +[[99292]]), the initial excess units will deny automatically, but can be **reimbursed on appeal / redetermination** with supporting medical records.

---

## 🧩 NCCI PTP-Associated Modifier Reference Hierarchy

When a PTP edit has **CCMI = 1**, specific modifiers must be appended to the appropriate code to communicate clinical distinctness. CMS enforces a strict hierarchy: **Anatomical and specific modifiers must be utilized before generic unbundling modifiers**.

```
NCCI Modifier Selection Hierarchy
├── 1. Primary Choice: Exact Anatomical Modifiers (-RT, -LT, -FA-F9, -TA-T0, -E1-E4, -LC/-LD/-RC)
├── 2. E/M & Global Modifiers: -25 (Minor/Critical Care), -57 (Major Pre-op), -24 (Global Post-op)
├── 3. CMS X{EPSU} Modifiers: -XE (Separate Encounter), -XS (Separate Structure), -XP (Separate Provider), -XU (Distinct Service)
└── 4. Modifier of Last Resort: -59 (Distinct Procedural Service — Use ONLY if no specific modifier applies)
```

### Master NCCI Modifier Reference Table

| Modifier | Regulatory Description | Inpatient Use Case & Clinical Applicability | Audit Risk & Documentation Rule |
| :---: | :--- | :--- | :--- |
| **[[-25]]** | Significant, Separately Identifiable E/M by Same Physician on Same DOS of Procedure | Hospital E/M (**[[99221]]–[[99233]]**) performed on same day as a minor bedside procedure (000/010 global) or Critical Care (**[[99291]]**). | **High Risk.** E/M documentation must stand alone above and beyond standard pre/post-procedure work. |
| **[[-57]]** | Decision for Surgery | Inpatient E/M visit where the initial clinical decision for **major surgery (090-day global)** was formulated on the DOS or day prior. | **Moderate Risk.** Operative report and E/M note must establish the decision occurred during that specific visit. |
| **[[-24]]** | Unrelated E/M During Postoperative Global Period | Hospitalist or surgeon managing an acute medical problem unrelated to a surgical procedure within the 10- or 90-day global window. | **High Risk.** ICD-10 diagnosis must clearly differ from surgical pathology. |
| **[[-58]]** | Staged / Related Procedure in Post-op Period | Planned return to OR, escalation in surgical care, or therapeutic re-intervention following original surgery. | **Moderate Risk.** Resets the global period clock; requires documentation of staged intent or greater complexity. |
| **[[-78]]** | Unplanned Return to OR/Procedure Room for Related Complication | Return to OR or specialized procedure suite for post-op bleeding, wound dehiscence, or hematoma evacuation. | **High Risk.** Must occur in an OR/procedure suite (not bedside); does NOT reset global clock; paid at intra-op reduction. |
| **[[-79]]** | Unrelated Procedure During Postoperative Global Period | Distinct surgical intervention on an unrelated organ/system during the global period of a prior operation. | **Moderate Risk.** Resets global period clock; paid at 100% of allowable fee schedule. |
| **[[-FT]]** | Unrelated Critical Care in Global Surgical Period | Critical care (**[[99291]]**) performed by the operating surgeon for an acute organ failure unrelated to the surgical procedure. | **High Risk.** CMS-specific modifier. Must document that critical care was entirely distinct from post-op recovery. |
| **[[-XE]]** | Separate Encounter | Bedside procedure or diagnostic test performed during a separate, distinct encounter or session on the same calendar day. | **Moderate Risk.** Must document separate times, distinct physical visits, or return trips to the patient's room. |
| **[[-XS]]** | Separate Structure / Organ | Surgical or diagnostic procedure performed on a completely separate anatomical organ, bone, joint, or contralateral side. | **Low–Moderate Risk.** Prefer specific anatomical modifiers (**[[-RT]]/[[-LT]]**) where applicable. |
| **[[-XP]]** | Separate Practitioner | Distinct procedural service performed by a different physician/APP within the same group practice on the same DOS. | **Low Risk.** Claim lines must reflect distinct performing NPIs. |
| **[[-XU]]** | Unusual Non-Overlapping Service | Distinct clinical service components that do not overlap the work of the comprehensive code. | **High Risk.** Most scrutinized of X{EPSU} modifiers; requires explicit clinical proof of non-duplication. |
| **[[-59]]** | Distinct Procedural Service | Generic unbundling modifier. CMS designates as **modifier of last resort**; use only if no X{EPSU} or anatomical modifier applies. | **Highest Audit Trigger.** Top target of CERT, RAC, and MAC pre-payment probe reviews. |

---

## 🏥 Hospital Inpatient & Observation E/M PTP Edits

Inpatient Evaluation and Management coding is heavily governed by NCCI PTP edits that prevent duplicate billing, split-encounter double dipping, and inappropriate code combinations.

```
Inpatient E/M Single-Encounter Rules
├── Initial Hospital Care (99221–99223): Only ONE per admission per specialty (CCMI = 0 for internal pairs)
├── Subsequent Care (99231–99233): Only ONE per calendar day per specialty (Aggregate multiple daily visits)
├── Same-Day Admit & Discharge (99234–99236): Mutually exclusive with Initial (99221–99223) & Discharge (99238–99239)
├── Subsequent Care + Discharge: Mutually exclusive on same DOS (Bill 99238/99239 ONLY)
└── ED / Outpatient Visit + Admission: Pre-admission E/M bundled into Initial Hospital Care (99221–99223)
```

### Inpatient E/M Procedure-to-Procedure (PTP) Edit Matrix

| Column 1 (Payable Code) | Column 2 (Bundled Code) | Modifier Allowed? (CCMI) | Policy Rationale & Billing Rule |
| :--- | :--- | :---: | :--- |
| **Initial Care [[99223]]** | **Initial Care [[99221]], [[99222]]** | **`0` (No)** | **Mutually Exclusive:** Only one initial level can be selected per encounter. |
| **Subsequent Care [[99233]]** | **Subsequent Care [[99231]], [[99232]]** | **`0` (No)** | **Daily Aggregation:** Multiple rounding encounters by the same provider/group on the same DOS must be aggregated into one code. |
| **Same-Day Admit/DC [[99236]]** | **Initial Care [[99221]]–[[99223]]** | **`0` (No)** | **Mutually Exclusive:** If stay $\ge 8$ hours with 2 visits, bill 99234–99236. If $< 8$ hours, bill 99221–99223 only. |
| **Same-Day Admit/DC [[99236]]** | **Discharge [[99238]], [[99239]]** | **`0` (No)** | **Bundled:** Discharge work is built into 99234–99236. Separate discharge cannot be billed. |
| **Discharge [[99238]] / [[99239]]** | **Subsequent Care [[99231]]–[[99233]]** | **`0` (No)** | **Same DOS Restriction:** When a provider rounds and discharges a patient on the same day, all work is rolled into the Discharge code. |
| **Initial Care [[99221]]–[[99223]]** | **ED E/M [[99281]]–[[99285]]** | **`0` (No)** | **Pre-Admission Bundling:** Same-day ED work by admitting physician/group is bundled into Initial Hospital Care. |
| **Initial Care [[99221]]–[[99223]]** | **Outpatient Clinic [[99202]]–[[99215]]** | **`0` (No)** | **Pre-Admission Bundling:** Same-day clinic visit resulting in admission by same provider is bundled into Initial Hospital Care. |
| **Critical Care [[99291]]** | **Subsequent Care [[99231]]–[[99233]]** | **`1` (Yes)** | **Allowed with [[-25]]:** Payable only if subsequent rounding occurred *prior* to patient deteriorating into critical status, or by different specialty. |
| **Critical Care [[99291]]** | **Initial Care [[99221]]–[[99223]]** | **`1` (Yes)** | **Allowed with [[-25]]:** Admitting E/M performed earlier in the day prior to acute critical decompensation. |
| **Subsequent Care [[99232]]** | **Inpatient Consult [[99252]]–[[99255]]** | **`0` (No)** | **Mutually Exclusive:** Cannot bill both consult and subsequent care on same DOS by same provider. |

---

## 🚨 Critical Care Bundling & Bedside Procedure Carve-Outs

CPT guidelines and CMS NCCI Chapter 11 establish that **[[99291]]** and **[[99292]]** encompass a wide range of routine bedside diagnostic and therapeutic services.

```
Critical Care Code Inclusions vs. Carve-Outs
├── BUNDLED INTO 99291/99292 (Do NOT Bill Separately)
│   ├── Routine Vascular Access: Peripheral IV (36000), Venipuncture (36410, 36415)
│   ├── Arterial Puncture / Blood Gas Draws (36600)
│   ├── Ventilator Management (94002–94004, 94660 CPAP, 94662 BiPAP)
│   ├── Gastric Tubes: NG Tube Insertion (43752, 43753)
│   ├── Transcutaneous Pacing (92953)
│   ├── Chest X-Ray Interpretation (71045, 71046)
│   └── Pulse Oximetry (94760–94762) & Record Review
└── SEPARATELY REPORTABLE BEDSIDE PROCEDURES (Carve Out Procedure Time!)
    ├── Endotracheal Intubation (31500)
    ├── Central Venous Catheter (36556 non-tunneled, 36558 tunneled)
    ├── Arterial Line Placement (36620 percutaneous)
    ├── Tube Thoracostomy / Chest Tube (32551)
    ├── Cardiopulmonary Resuscitation / CPR (92950)
    ├── Diagnostic Lumbar Puncture (62270)
    └── Temporary Transvenous Pacing (33210)
```

### 1. Bundled Services Table (Included in Critical Care)

The following procedures are **inherent to Critical Care** and cannot be billed separately by the critical care provider on the same date:

| Bundled Service Category | CPT Codes | NCCI Status | Billing Rule |
| :--- | :--- | :---: | :--- |
| **Vascular Access (Routine)** | **[[36000]]**, **[[36410]]**, **[[36415]]** | **Bundled** | Peripheral line insertion and routine blood draws are included. |
| **Arterial Puncture** | **`36600`** | **Bundled** | Single arterial puncture for blood gas extraction is included. |
| **Ventilator Management** | **`94002`**, **`94003`**, **`94004`**, **`94660`**, **`94662`** | **Bundled** | Initial/subsequent ventilator management, CPAP, and BiPAP are included. |
| **Gastric Intubation** | **[[43752]]**, **`43753`** | **Bundled** | Diagnostic or therapeutic NG tube/gastric tube placement is included. |
| **Transcutaneous Pacing** | **`92953`** | **Bundled** | Non-invasive external pacing application is included. |
| **Chest X-Ray Reading** | **`71045`**, **`71046`** | **Bundled** | Review and interpretation of chest radiographs are included. |
| **Pulse Oximetry** | **`94760`**, **`94761`**, **`94762`** | **Bundled** | Continuous or spot oximetry interpretation is included. |

---

### 2. Separately Reportable Bedside Procedures & Time Carve-Out Rule

Invasive bedside procedures are **not** bundled into critical care. They are billed separately with appropriate modifiers. However, **CMS and CPT mandate that the time spent performing separately billable procedures CANNOT be counted toward the critical care time threshold**.

| Procedure Description | CPT Code | Modifier Required | Global Days | Time Carve-Out Rule |
| :--- | :---: | :---: | :---: | :--- |
| **Emergency Endotracheal Intubation** | **[[31500]]** | None (on procedure) / **[[-25]]** on 99291 | **000** | Deduct ~15–20 min procedure time from critical care minutes. |
| **Central Venous Catheter (Age $\ge 5$)** | **[[36556]]** | None (on procedure) / **[[-25]]** on 99291 | **000** | Deduct ~25–35 min line placement time from critical care minutes. |
| **Arterial Line Insertion (Percutaneous)** | **[[36620]]** | None (on procedure) / **[[-25]]** on 99291 | **000** | Deduct ~15–20 min line placement time from critical care minutes. |
| **Tube Thoracostomy (Chest Tube)** | **[[32551]]** | None (on procedure) / **[[-25]]** on 99291 | **000** | Deduct ~20–30 min procedure time from critical care minutes. |
| **Cardiopulmonary Resuscitation (CPR)** | **[[92950]]** | None (on procedure) / **[[-25]]** on 99291 | **000** | Deduct hands-on CPR duration from critical care minutes. |
| **Diagnostic Lumbar Puncture** | **`62270`** | None (on procedure) / **[[-25]]** on 99291 | **000** | Deduct LP procedure time (~20–30 min) from critical care minutes. |
| **Temporary Transvenous Pacing** | **`33210`** | None (on procedure) / **[[-25]]** on 99291 | **000** | Deduct transvenous wire placement time from critical care minutes. |
| **Ultrasound Guidance for Vascular Access** | **`76937`** | None / **[[-26]]** | **XXX** | Dynamic ultrasound guidance reportable with [[36556]] if documented. |

#### Time Carve-Out Audit Defense Calculation Example:
```
Gross ICU Encounter Time:                        95 minutes
Minus: Arterial Line Placement (36620):         - 15 minutes
Minus: Central Venous Access (36556):           - 25 minutes
─────────────────────────────────────────────────────────────
Net Critical Care Qualifying Time:               55 minutes

Claim Coding:
Line 1: 99291-25  (Critical Care, 55 net qualifying minutes)
Line 2: 36556     (Central Line insertion)
Line 3: 36620     (Arterial Line insertion)
Line 4: 76937-26  (Ultrasound guidance for CVC)
```

---

## 🔬 Common Inpatient Bedside Procedures & Diagnostic PTP Edits

Inpatient hospitalists, intensivists, and specialists frequently perform diagnostic studies and therapeutic procedures that trigger NCCI edits:

| Column 1 (Payable Code) | Column 2 (Bundled Code) | CCMI | Modifier Options | Clinical Coding Rule |
| :--- | :--- | :---: | :---: | :--- |
| **Central Line [[36556]]** | **Venipuncture [[36415]]** | **`0`** | None | Venipuncture on the same encounter is unbundled and denied. |
| **Central Line [[36556]]** | **US Guidance `76937`** | **`1`** | **[[-26]]** | Separately reportable if permanent image recorded and formal report documented. |
| **Chest Tube [[32551]]** | **Pleural Biopsy `32400`** | **`1`** | **[[-59]]**, **[[-XS]]** | Allowed only if biopsy is performed at a distinct site/incision. |
| **Thoracentesis `32555`** | **US Guidance [[76942]]** | **`0`** | None | Image guidance is included in `32555` descriptor; do not unbundle `76942`. |
| **Paracentesis `49083`** | **US Guidance [[76942]]** | **`0`** | None | Image guidance is included in `49083` descriptor; do not unbundle `76942`. |
| **Wound Debridement `11042`** | **Subsequent E/M [[99232]]** | **`1`** | **[[-25]]** | Append [[-25]] to E/M if significant medical evaluation is documented beyond debridement. |
| **Hemodialysis [[90935]]** | **Subsequent E/M [[99232]]** | **`1`** | **[[-25]]** | Allowed with [[-25]] if nephrologist manages unrelated medical conditions during dialysis. |
| **Therapeutic Ex `97110`** | **Gait Training `97116`** | **`1`** | **[[-59]]**, **[[-XE]]** | Inpatient PM&R: distinct timed therapy blocks or separate therapy sessions. |

---

## 📊 Inpatient Medically Unlikely Edits (MUE) Master Reference Table

The following table outlines the **Practitioner MUE limits** and **MAI designations** for core inpatient E/M codes, critical care, prolonged care, and top bedside procedures:

| CPT / HCPCS Code | Description | Practitioner MUE Limit | MAI Designation | Clinical & Compliance Rationale |
| :---: | :--- | :---: | :---: | :--- |
| **[[99221]]** | Initial Hospital Care, Low | **1** | **`MAI 2`** | Absolute limit: 1 initial encounter per beneficiary per calendar day. |
| **[[99222]]** | Initial Hospital Care, Moderate | **1** | **`MAI 2`** | Absolute limit: 1 initial encounter per beneficiary per calendar day. |
| **[[99223]]** | Initial Hospital Care, High | **1** | **`MAI 2`** | Absolute limit: 1 initial encounter per beneficiary per calendar day. |
| **[[99231]]** | Subsequent Hospital Care, Low | **1** | **`MAI 2`** | Absolute limit: Multiple daily visits are aggregated into a single code. |
| **[[99232]]** | Subsequent Hospital Care, Mod | **1** | **`MAI 2`** | Absolute limit: Multiple daily visits are aggregated into a single code. |
| **[[99233]]** | Subsequent Hospital Care, High | **1** | **`MAI 2`** | Absolute limit: Multiple daily visits are aggregated into a single code. |
| **[[99234]]** | Same-Day Admit/DC, Low | **1** | **`MAI 2`** | Absolute limit: 1 same-day admission/discharge per calendar day. |
| **[[99235]]** | Same-Day Admit/DC, Mod | **1** | **`MAI 2`** | Absolute limit: 1 same-day admission/discharge per calendar day. |
| **[[99236]]** | Same-Day Admit/DC, High | **1** | **`MAI 2`** | Absolute limit: 1 same-day admission/discharge per calendar day. |
| **[[99238]]** | Discharge Management $\le 30$ min | **1** | **`MAI 2`** | Absolute limit: Only 1 discharge service allowed per hospital stay. |
| **[[99239]]** | Discharge Management $> 30$ min | **1** | **`MAI 2`** | Absolute limit: Only 1 discharge service allowed per hospital stay. |
| **[[99252]]–[[99255]]** | Inpatient Consultations | **1** | **`MAI 2`** | Absolute limit: 1 initial consultation per specialty per day. |
| **[[99291]]** | Critical Care, First 30–74 min | **1** | **`MAI 2`** | Absolute limit: Only 1 initial critical care code per DOS across all providers. |
| **+[[99292]]** | Critical Care, Each Addl 30 min | **4** | **`MAI 3`** | Clinical limit: 4 units = 120 add-on min (total 194 min). Extra units payable on appeal. |
| **+[[99418]]** | Prolonged Inpatient E/M (CPT) | **4** | **`MAI 3`** | Clinical limit: 4 units (60 addl min). Extra units payable on redetermination. |
| **+[[G0316]]** | Prolonged Inpatient E/M (CMS) | **4** | **`MAI 3`** | Clinical limit: 4 units (60 addl min). Extra units payable on redetermination. |
| **[[31500]]** | Emergency Intubation | **1** | **`MAI 1`** | Claim line limit: If repeated later in day, bill line 2 with modifier [[-76]]. |
| **[[36556]]** | Central Venous Catheter | **1** | **`MAI 1`** | Claim line limit: If line fails and second placed, bill line 2 with modifier [[-76]]. |
| **[[36620]]** | Arterial Line Insertion | **1** | **`MAI 1`** | Claim line limit: If bilateral or repeated, bill with modifier [[-59]] or [[-76]]. |
| **[[32551]]** | Tube Thoracostomy (Chest Tube) | **2** | **`MAI 1`** | Claim line limit: Supports bilateral chest tubes (report 2 units or modifier [[-50]]). |
| **[[92950]]** | Cardiopulmonary Resuscitation | **1** | **`MAI 1`** | Claim line limit: If arrest recurs later in day, bill line 2 with modifier [[-76]]. |

---

## 🛑 NCCI Denial Handling, Claims Scrubbing, & Appeals Hierarchy

When an automated payer claim scrubber or Medicare Administrative Contractor (MAC) applies an NCCI edit, claims are denied or reduced based on specific Claim Adjustment Reason Codes (**CARC**) and Remittance Advice Remark Codes (**RARC**):

```
NCCI Claim Scrubbing & Denial Resolution Path
├── Step 1: Identify Denial Reason (CARC 97 "Benefit included in primary service" / CARC 151)
├── Step 2: Check NCCI Table for PTP Code Pair & CCMI Value
│   ├── If CCMI = 0: Re-bundle. Remove Column 2 code; verify Column 1 captures full acuity.
│   └── If CCMI = 1: Audit medical record for true distinctness criteria.
├── Step 3: Modifier Evaluation (Hierarchy Check)
│   ├── Is there an Anatomical Modifier? (-RT, -LT, -FA-F9, -TA-T0)
│   ├── Is it a Separate Encounter or Session? (-XE)
│   ├── Is it a Separate Organ / Structure? (-XS)
│   ├── Is it a Different Provider / NPI? (-XP)
│   └── Is it a Distinct Non-Overlapping Service? (-XU / -59)
└── Step 4: Resubmission vs. Redetermination (Level 1 Appeal)
    ├── Corrected Claim: If modifier was mistakenly omitted on an eligible CCMI = 1 pair.
    └── Level 1 Redetermination: If MAI 3 MUE was exceeded with documented clinical necessity.
```

### Denial Scenarios & Corrective Actions

1. **Denial for CCMI = 0 (Unbundle Attempt):**
   - *Scenario:* Provider billed **[[99232]]** (Subsequent Care) and **[[99238]]** (Discharge) on the same date.
   - *Resolution:* Cannot be unbundled with any modifier. Submit corrected claim removing `99232` and billing `99238` (or `99239` if total cumulative time was $>30$ minutes).
2. **Denial for CCMI = 1 without Modifier:**
   - *Scenario:* Admitting hospitalist billed **[[99223]]** and bedside central line **[[36556]]** on the same date without modifiers. `36556` was paid; `99223` was denied under CARC 97.
   - *Resolution:* Review E/M note. Verify that full admission H&P and management were documented separately from line placement. Submit corrected claim appending modifier **[[-25]]** to **[[99223]]**.
3. **Denial for MUE Excess (MAI 3 Clinical Limit):**
   - *Scenario:* Intensivist spent 235 minutes of critical care managing refractory septic shock and billed **[[99291]]** × 1 and **[[99292]]** × 6. Units beyond 4 were denied under CARC 151.
   - *Resolution:* Because +[[99292]] is an `MAI 3` edit, file a **Level 1 MAC Redetermination Appeal**. Include the full ICU flow sheet, time-stamped provider notes, and an appeal cover letter itemizing the 235 minutes of non-procedural critical care.

---

## 📋 Auditor-Proof NCCI & Bundling Compliance Checklist

To protect inpatient professional claims against **CERT, RAC, MAC, and OIG audits**, verify adherence to the following NCCI rules before claim submission:

- [ ] **1. PTP Edit Verification:** Checked current-quarter CMS NCCI PTP tables for all code combinations billed on the same calendar date of service.
- [ ] **2. CCMI 0 Compliance:** Verified that no modifiers are appended to code pairs with CCMI = 0. Bundled component services have been combined into the primary comprehensive code.
- [ ] **3. Strict Modifier [[-25]] Support:**
  - E/M documentation stands independently from any bedside procedure performed on the same date.
  - History, exam, and medical decision making address the systemic patient condition rather than just standard pre/post-procedure evaluation.
- [ ] **4. Critical Care Procedure Time Carve-Out:**
  - Separately billable invasive bedside procedures (**[[31500]]**, **[[36556]]**, **[[36620]]**, **[[32551]]**, **[[92950]]**) are documented with explicit start/stop times.
  - Procedure times have been completely deducted from total critical care time before calculating units of **[[99291]]** / **[[99292]]**.
  - No bundled services (**[[36000]]**, **[[36415]]**, `94002`–`94004`, **[[43752]]**, `71045`) were unbundled or billed separately from critical care.
- [ ] **5. Inpatient E/M Single-Encounter Integrity:**
  - Multiple daily inpatient rounding visits by providers of the same specialty in the same group are aggregated into a single subsequent care code (**[[99231]]–[[99233]]**).
  - Subsequent care and discharge management are never billed on the same date by the same group; only discharge (**[[99238]]/[[99239]]**) is reported.
- [ ] **6. MUE Adjudication Review:**
  - Total billed units for each CPT/HCPCS code do not exceed published practitioner MUE limits.
  - Where `MAI 3` limits are exceeded for medically necessary prolonged care or critical care, an appeal package is prepared with time-stamped clinical documentation.
- [ ] **7. Modifier Specificity Hierarchy:**
  - Anatomical modifiers (**[[-RT]]/[[-LT]]**) or X{EPSU} modifiers (**[[-XE]]/[[-XS]]/[[-XP]]/[[-XU]]**) were utilized in preference to generic modifier **[[-59]]**.

---

## 🔗 Related Vault Resources

- [[00 Inpatient ProFee Coding MOC]] — Master Map of Content for Inpatient Professional Fee Coding
- [[01 Inpatient ProFee Overview]] — Inpatient Coding Foundations & Regulatory Guidelines
- [[Inpatient E&M Codes]] — Master Reference Guide for Inpatient & Observation E/M Services
- [[Initial Hospital Care]] — Initial Hospital Inpatient & Observation Care Guidelines ([[99221]]–[[99223]])
- [[Subsequent Hospital Care]] — Daily Inpatient Rounding & Aggregation Guidelines ([[99231]]–[[99233]])
- [[Discharge Services]] — Hospital Inpatient & Observation Discharge Day Management ([[99238]], [[99239]])
- [[Critical Care Codes]] — Critical Care Coding, Time Rules, & Bundling ([[99291]], [[99292]])
- [[Consultation Codes]] — Inpatient Consultation Coding Rules & Payer Policies ([[99252]]–[[99255]])
- [[Prolonged Services]] — Inpatient Prolonged Services Guidelines ([[99418]] vs. [[G0316]])
- [[Major vs. Minor Surgery]] — Global Surgical Package Bundling, Indicators, & Rules
- [[Medical Necessity for Inpatient]] — Documenting Medical Necessity & Hospital Level of Care
- [[Inpatient Modifiers]] — Comprehensive Modifiers Reference for Inpatient Professional Claims
- [[Modifier -25 vs -57]] — Decision Hierarchy for Modifiers 25 and 57
- [[Proper Use of Modifiers 59, XE, XP, XS & XU]] — CMS Guidelines for Distinct Procedural Modifiers
- [[CMS Medicare Guidelines for Inpatient]] — CMS Payment Rules & Policy Manuals
- [[CPT Assistant References for Inpatient]] — Master Index of CPT Assistant Inpatient Precedents
- [[External Links for Inpatient Coding]] — Official Regulatory Portals, MAC Directory, & Code Scrubbers
- [[NATIONAL PHYSICIAN FEE SCHEDULE RELATIVE VALUE FILE CALENDAR YEAR 2026]] — CY 2026 RVU & Fee Schedule Data
- **Primary CPT Code Notes:** [[99221]], [[99222]], [[99223]], [[99231]], [[99232]], [[99233]], [[99234]], [[99235]], [[99236]], [[99238]], [[99239]], [[99291]], [[99292]], [[31500]], [[36000]], [[36415]], [[36556]], [[36620]], [[32551]], [[43752]], [[92950]]
- **Key Modifiers:** [[-25]], [[-57]], [[-24]], [[-58]], [[-78]], [[-79]], [[-FT]], [[-59]], [[-XE]], [[-XS]], [[-XP]], [[-XU]], [[-AI]], [[-FS]], [[-GC]], [[-RT]], [[-LT]], [[-50]], [[-76]], [[-77]], [[-91]]
