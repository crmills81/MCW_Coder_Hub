---
title: "FS -- Split-Shared Visits"
tags:
  - coding/rules
  - inpatient
  - profee
  - medicare
  - modifiers
  - evaluation-management
description: "Comprehensive 2026 CMS, AAPC, and AHIMA guidelines for split (or shared) evaluation and management (E/M) visits, modifier -FS usage, substantive portion determination, and documentation rules."
last_updated: 2026-09-30
type: coding-guide
aliases:
  - Split-Shared Visits
  - Split/Shared E/M Visits
  - Modifier -FS Guidelines
---

# 🏥 Split (or Shared) Evaluation and Management Visits (Modifier -FS)

> [!cite] 2026 Regulatory Framework (CMS, AAPC, AHIMA)
> Under **Centers for Medicare & Medicaid Services (CMS)** regulations and **AMA/CPT** guidelines, a **split (or shared) visit** is an Evaluation and Management (E/M) encounter jointly furnished by a **physician** and a **non-physician practitioner (NPP)** (such as a Nurse Practitioner [NP], Physician Assistant [PA], or Clinical Nurse Specialist [CNS]) who belong to the **same group practice** (same tax identification number [TIN]) in an approved **facility setting**.
> 
> Payment is attributed to the practitioner who personally performs the **substantive portion** of the encounter. **Modifier [[-FS]] must be appended to the claim regardless of whether the physician or the NPP bills the service.**

---

## 📋 Core Qualifying Criteria

For an encounter to be billable as a split (or shared) E/M service under 2026 Medicare guidelines:

| Element | Regulatory Requirement | 2026 Rule Clarification |
| :--- | :--- | :--- |
| **Provider Types** | Physician + Qualified NPP | Must be an MD/DO and an NPP (NP, PA, CNS) recognized under Medicare Part B. |
| **Same Group Practice** | Same Group / Same Specialty | Practitioners must belong to the **same group practice** (defined under CMS policy as practicing under the **same Tax Identification Number [TIN]**). |
| **Same Calendar Date** | Same Date of Service | Both clinicians must provide their personally performed components on the **same calendar date** (not 24-hour cycle). |
| **Facility Setting** | Facility Place of Service (POS) Only | Applicable **only** in facility settings (Inpatient POS 21, On-Campus Outpatient/Observation POS 22, Emergency Department POS 23, Off-Campus Outpatient POS 19, or SNF/NF POS 31/32). **Prohibited in private office settings (POS 11).** |
| **Face-to-Face Contact** | At Least One Clinician | **Only one of the practitioners is required to have face-to-face contact** with the patient. It does not have to be both, nor does it necessarily have to be the billing provider (unless required by internal hospital bylaws). |
| **Individual Documentation** | Discrete & Attributed | Both practitioners must document their own personally performed contributions, with the billing provider signing and dating the final record. |

---

## ⚖️ Substantive Portion Determination (2026 Rules)

The practitioner who performs the **substantive portion** reports the E/M code under their NPI. The substantive portion is determined by either **Total Time** or **Medical Decision Making (MDM)**.

```
                         ┌────────────────────────────────────────┐
                         │   Split/Shared E/M Visit Encounter     │
                         │ (Physician + NPP, Same Group, POS Fac) │
                         └──────────────────┬─────────────────────┘
                                            │
                             Choose Method for Encounter
                                            │
                  ┌─────────────────────────┴─────────────────────────┐
                  ▼                                                   ▼
       ┌──────────────────────┐                           ┌──────────────────────┐
       │   TIME-BASED PATH    │                           │    MDM-BASED PATH    │
       │ (Sum non-overlapping │                           │ (Critical Components │
       │   cumulative time)   │                           │     of 2026 MDM)     │
       └──────────┬───────────┘                           └──────────┬───────────┘
                  │                                                   │
        > 50% of Combined Time?                         Performed / Independently
                  │                                     Reviewed Substantive MDM?
        ┌─────────┴─────────┐                               ┌─────────┴─────────┐
        ▼                   ▼                               ▼                   ▼
     Physician             NPP                           Physician             NPP
    (100% MPFS)         (85% MPFS)                      (100% MPFS)         (85% MPFS)
   Append [[-FS]]      Append [[-FS]]                  Append [[-FS]]      Append [[-FS]]
```

### 1. Time-Based Method (>50% of Cumulative Time)
- The practitioner who personally spends **more than 50% of the total cumulative time** furnished jointly by both practitioners is the billing practitioner.
- **Combined Non-Overlapping Time:** Sum the distinct time spent by each provider on the date of encounter. When both clinicians meet with the patient or family together, that joint time can only be counted **once**.
- Qualifying activities include:
  - Reviewing tests, records, and history.
  - Obtaining or reviewing separately obtained history.
  - Performing a medically appropriate examination.
  - Counseling and educating the patient, family, or caregiver.
  - Ordering medications, tests, or procedures.
  - Independent interpretation of diagnostic tests (not separately reported).
  - Documenting clinical notes in the EHR.
  - Care coordination (when not separately reported).

### 2. Medical Decision Making (MDM) Method
Under CMS and CPT guidelines, to satisfy the substantive portion using MDM:
- The practitioner must personally perform or independently review and assume ultimate responsibility for the critical components of the MDM level reported:
  - **Number and Complexity of Problems Addressed** at the encounter, AND/OR
  - **Risk of Complications and/or Morbidity or Mortality** of patient management.
- The clinician must perform the components of MDM necessary to substantiate the final code level (e.g., establishing the treatment plan, modifying medication regimens, determining high-risk interventions).
- **Audit Warning:** Merely signing an attestation statement (e.g., *"Agree with NP assessment"*) without documenting independent thought process, clinical synthesis, and personal engagement in the decision-making will **fail an audit**.

---

## 💰 Reimbursement & Modifier -FS Mechanics

| Factor | Physician Billed | NPP Billed |
| :--- | :--- | :--- |
| **Billing NPI** | Rendering Physician NPI | Rendering NPP NPI |
| **Modifier** | **Append [[-FS]]** | **Append [[-FS]]** *(Mandatory for both)* |
| **Reimbursement Rate** | **100%** of MPFS Allowable | **85%** of MPFS Allowable |
| **Payer Identification** | Signals joint physician/NPP service | Signals joint physician/NPP service |

> [!IMPORTANT] Critical Modifier Rule
> Modifier **[[-FS]]** is required on the claim line regardless of whether the physician or the NPP performs the substantive portion. Do **not** omit modifier [[-FS]] when the NPP is the billing provider.

---

## 🚨 Critical Care Special Rules ([[99291]] / [[99292]])

Split/shared billing **is permitted** for critical care services (**[[99291]]**, **[[99292]]**), but carries unique constraints:

1. **Strictly Time-Based:** MDM **cannot** be used to determine the substantive portion for critical care. Cumulative time is the sole determinant.
2. **Cumulative Group Time:** Total critical care time personally provided by the physician and NPP in the same group on the calendar date is summed.
3. **Thresholds:**
   - **[[99291]]** requires a cumulative total of **30–74 minutes**.
   - Each add-on unit of **[[99292]]** requires an additional **30 minutes** (e.g., 75–104 min for 1 unit; 105–134 min for 2 units).
4. **Who Reports:**
   - The practitioner who furnishes the majority (>50%) of the cumulative critical care time reports the critical care code(s) with modifier **[[-FS]]**.
   - If the physician furnishes >50% of the cumulative time, all units are billed under the physician's NPI with **[[-FS]]**.
   - If the NPP furnishes >50% of the cumulative time, all units are billed under the NPP's NPI with **[[-FS]]**.
   - **No Splitting Units:** Clinicians cannot bill one unit under the physician and the second unit under the NPP; all cumulative units for that calendar date are reported under the single practitioner who provided the substantive portion.

---

## 🏥 Nursing Facility (SNF/NF) Specifics

- **Initial Comprehensive NF Care ([[99304]], [[99305]], [[99306]]):** By federal statute (Social Security Act § 1819(b)(6)(A) / 42 CFR § 483.30), the initial comprehensive visit in a Skilled Nursing Facility (SNF - POS 31) **must be personally performed in its entirety by a physician**. Split/shared billing is **prohibited** for initial SNF visits.
- **Subsequent NF Care ([[99307]], [[99308]], [[99309]], [[99310]]):** Split/shared visits **are permitted** for subsequent nursing facility care when performed jointly in the facility setting, provided all general split/shared criteria are fulfilled.

---

## 🚫 Prohibited Scenarios (When NOT to Use Split/Shared)

1. **Private Office Settings (POS 11):**
   - Split/shared rules **never apply** to office visits or freestanding non-facility clinics.
   - Dual-provider office visits must comply with **"Incident-To"** guidelines (requires physician established plan of care, direct in-suite physician supervision, and specific employment relationships).
2. **Procedures and Surgical Services:**
   - Split/shared billing applies exclusively to **Evaluation and Management** services. Minor or major surgical procedures, bedside diagnostic procedures (e.g., central lines, lumbar punctures), and diagnostic test interpretations cannot be split/shared.
3. **Teaching Physician Scenarios (Residents/Fellows):**
   - Encounters involving residents or fellows are governed strictly by the **Teaching Physician Guidelines** (42 CFR § 415.172; Modifier **[[GC -- Teaching Physician Rules|GC]]** or **GE**), **not** split/shared rules.
4. **Practitioners in Different Groups:**
   - Clinicians from different practices or billing under different Tax Identification Numbers (TINs) cannot split/share a visit. Each must bill solo or coordinate consultative care.
5. **Services Spanning Multiple Calendar Dates:**
   - Both practitioners' contributions must occur on the **same calendar date**.

---

## 📝 Documentation & Audit Requirements

To defend split/shared claims during an internal compliance or MAC/RAC audit:

1. **Dual Identification:** The medical record must explicitly identify both practitioners who participated in the visit.
2. **Discrete Contribution Records:**
   - If using **Time**: Each practitioner must record their specific, non-overlapping start/stop times or total minutes spent in qualifying activities.
   - If using **MDM**: The billing practitioner's note must reflect personal clinical synthesis, management plan formulation, risk evaluation, or direct changes to patient care.
3. **Billing Signature:** The practitioner reporting the substantive portion must personally review, sign, and date the combined medical record.
4. **Face-to-Face Notation:** The note must document which practitioner conducted the in-person face-to-face evaluation.

> [!WARNING] Common Audit Deficiency: "Cookie-Cutter" Attestations
> Statements like *"I have reviewed the PA's note, agree with findings, and personally examined the patient"* do **not** establish the substantive portion of MDM. The physician must document their specific clinical findings, differential assessment, or management rationale to bill under MDM.

---

## 💡 Clinical Billing Scenarios

### Scenario A: Inpatient Care — Time-Based (Physician Bills)
- **Setting:** Inpatient Hospital (POS 21)
- **Clinical Event:** Subsequent hospital visit for worsening heart failure.
  - **NP:** Performs exam, reviews AM labs, documents note (20 minutes).
  - **Physician:** Reviews telemetry, performs medication adjustment, counsels patient at bedside, coordinates cardiology consult (25 minutes).
  - **Total Cumulative Time:** 45 minutes.
- **Determination:** Physician time (25 min) is >50% of total time (45 min).
- **Coding:** **[[99233]]-[[-FS]]** reported under Physician NPI.
- **Reimbursement:** 100% MPFS.

### Scenario B: Emergency Department — Time-Based (NPP Bills)
- **Setting:** Emergency Department (POS 23)
- **Clinical Event:** Evaluation of acute abdominal pain.
  - **PA:** Performs comprehensive history, physical exam, orders CT abdomen/pelvis, administers initial IV medications (40 minutes).
  - **Physician:** Reviews CT scan results and bedside consult with PA (15 minutes).
  - **Total Cumulative Time:** 55 minutes.
- **Determination:** PA spent 40/55 minutes (>50%).
- **Coding:** **99284-[[-FS]]** reported under PA NPI.
- **Reimbursement:** 85% MPFS.

### Scenario C: Observation Care — MDM-Based (Physician Bills)
- **Setting:** Hospital Observation (POS 22)
- **Clinical Event:** Patient admitted for syncope workup.
  - **NP:** Obtains interval history, performs physical exam, records vital signs and initial telemetry trends.
  - **Physician:** Conducts focused exam, analyzes EKG and echo findings, diagnoses high-grade AV block, formulates treatment plan, and initiates emergent pacemaker placement consult. Documents independent management and risk analysis.
- **Determination:** Physician personally performed and documented the substantive portion of MDM (problem complexity and high risk).
- **Coding:** **[[99223]]-[[-FS]]** reported under Physician NPI.
- **Reimbursement:** 100% MPFS.

### Scenario D: Critical Care Joint Management
- **Setting:** Intensive Care Unit (POS 21)
- **Clinical Event:** Septic shock resuscitation.
  - **Physician:** Bedside resuscitation, arterial line titration, ventilator adjustment (45 minutes).
  - **NP:** Bedside monitoring, lab titration, family update, resuscitation documentation (35 minutes).
  - **Total Cumulative Time:** 80 minutes (qualifies for **[[99291]]** [first 74 min] + **[[99292]]** [1 unit for 80 min]).
- **Determination:** Physician contributed 45 of 80 minutes (>50%).
- **Coding:**
  - Line 1: **[[99291]]-[[-FS]]** under Physician NPI.
  - Line 2: **[[99292]]-[[-FS]]** under Physician NPI.
- **Reimbursement:** 100% MPFS.

---

## ⚡ Quick Decision Checklist

1. [ ] **Setting:** Is this a facility POS (Inpatient 21, Obs/Outpatient 22, ED 23, SNF 31/32)? *(If office POS 11, stop: use incident-to or solo billing).*
2. [ ] **Group:** Are both clinicians under the exact same TIN and group practice?
3. [ ] **Date:** Were all documented services performed on the same calendar date?
4. [ ] **Face-to-Face:** Did at least one of the practitioners conduct face-to-face contact?
5. [ ] **Substantive Method:** Was the substantive portion established via:
   - Cumulative time (>50% non-overlapping), OR
   - Substantive portion of MDM (personally performed/reviewed critical components)?
6. [ ] **Critical Care Check:** If reporting [[99291]]/[[99292]], was substantive portion determined **strictly by time**?
7. [ ] **Claim Setup:** Is modifier **[[-FS]]** appended to the E/M code under the billing practitioner's NPI?

---

<small>

**Sources & Regulatory References**

1. Centers for Medicare & Medicaid Services (CMS). *Medicare Claims Processing Manual, Pub. 100-04, Chapter 12, §30.6.18 (Split/Shared E/M Visits).* CMS; 2024–2026.
2. Centers for Medicare & Medicaid Services (CMS). *Medicare Physician Fee Schedule (MPFS) Final Rules: CY 2024, CY 2025, and CY 2026.* 42 CFR Parts 405, 410, 414.
3. American Academy of Professional Coders (AAPC). *Split/Shared Visits: Coding, Billing, and Modifier -FS Compliance.* AAPC Knowledge Center; 2025–2026.
4. American Health Information Management Association (AHIMA). *Navigating Split (or Shared) Visits in Facility Settings.* AHIMA Journal & Practice Insights; 2025–2026.
5. American Medical Association (AMA). *Current Procedural Terminology (CPT®) Professional Edition: Evaluation and Management (E/M) Services Guidelines.* AMA Press; 2025–2026.
6. Noridian Healthcare Solutions / Novitas Solutions / Palmetto GBA. *MAC Part B Guidelines: Modifier -FS Split or Shared Visits.* 2025–2026.

</small>

<br>

<small>Sources listed above correspond to statutory and regulatory citations throughout this note. Verify all Medicare payment figures against your current CMS PFS Lookup tool and applicable MAC LCD prior to claim submission. Please use the latest AAPC/AHIMA Coding Books to verify each code within this note.</small>

<br>

[[-FS]]
[[00 Inpatient ProFee Coding MOC]]
[[GC -- Teaching Physician Rules]]
[[Inpatient Modifiers]]
[[Initial Hospital Care]]
[[Inpatient E&M Codes]]
[[Critical Care Codes]]
