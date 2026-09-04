---
title: Major vs. Minor Surgery — Clinical Definitions, Global Periods, and Coding Rules
aliases:
  - Major vs Minor Surgery
  - Major Surgery vs Minor Surgery
  - Global Surgery Periods
  - Major vs. Minor Surgical Package
  - Global Days Coding
tags:
  - pmr
  - urology
  - otolaryngology
  - ophthalmology
  - surgery
  - InpatientProfee
  - global-surgical-package
  - modifiers
  - 2026-pfs
  - compliance
publish: true
date_created: 2026-08-21
date_modified: 2026-09-03
status: active
---

# Major vs. Minor Surgery: Clinical Definitions, Global Periods, and 2026 Regulatory Guidelines

## Executive Overview

In medical coding, clinical documentation improvement (CDI), and professional fee (ProFee) reimbursement, the distinction between **major surgery** and **minor surgery** is governed simultaneously by **clinical invasiveness** and formal **regulatory global surgical package rules** established by the **Centers for Medicare & Medicaid Services (CMS)** and the **American Medical Association (AMA)**.

While clinical teams classify procedures based on physiological risk, tissue trauma, and anesthesia depth, professional coding and reimbursement rules classify surgical procedures strictly by their assigned **Global Days Indicator** on the **[[NATIONAL PHYSICIAN FEE SCHEDULE RELATIVE VALUE FILE CALENDAR YEAR 2026|CMS Medicare Physician Fee Schedule (MPFS / PFS)]]**:

- **Major Surgery**: Assigned a **90-day global surgical period** (`090`), which bundles all routine preoperative work **1 day prior** to surgery, all intraoperative services on the **date of service (DOS)**, and all related postoperative care for **90 days** following surgery into a single comprehensive reimbursement.
- **Minor Surgery**: Assigned either a **0-day global period** (`000`) or a **10-day global period** (`010`), which bundles preoperative and postoperative care solely on the **date of service** (`000`) or the **DOS plus 10 postoperative days** (`010`).

Understanding this boundary is vital for inpatient and outpatient coding compliance, proper unbundling of Evaluation and Management (E/M) services using modifiers [[-25]] versus [[-57]], managing postoperative complications using modifiers [[-78]] versus [[-58]], and defending claims against payer audits.

---

## Master Comparison: Major vs. Minor Surgery

| Parameter | Minor Surgery (0-Day Global) | Minor Surgery (10-Day Global) | Major Surgery (90-Day Global) |
| :--- | :--- | :--- | :--- |
| **CMS Global Indicator** | `000` | `010` | `090` |
| **Pre-Op Window** | Day of procedure only | Day of procedure only | **1 calendar day prior** + Day of procedure |
| **Post-Op Window** | 0 days (DOS only) | **10 calendar days** post-procedure | **90 calendar days** post-procedure |
| **Inherent Pre-Op Evaluation** | Included in procedure wRVU | Included in procedure wRVU | Included in surgical package (unless initial decision) |
| **Unbundle Pre-Op / Same-Day E/M** | Modifier [[-25]] (Significant, separately identifiable) | Modifier [[-25]] (Significant, separately identifiable) | Modifier [[-57]] (Decision for major surgery) |
| **Unrelated E/M in Post-Op Window** | N/A (No post-op period) | Modifier [[-24]] | Modifier [[-24]] / Modifier [[-FT]] |
| **Staged / Related Procedure** | Modifier [[-58]] (Starts new 000/010) | Modifier [[-58]] (Starts new 010/090) | Modifier [[-58]] (Starts new 090 global) |
| **Unplanned Return to OR** | Modifier [[-78]] (No new global) | Modifier [[-78]] (No new global) | Modifier [[-78]] (No new global; intra-op % paid) |
| **Unrelated Procedure in Global** | Modifier [[-79]] (Starts new global) | Modifier [[-79]] (Starts new global) | Modifier [[-79]] (Starts new global) |
| **Typical Anesthesia** | Local, topical, or digital block; minimal sedation | Local, regional block, or moderate (MAC) sedation | General anesthesia, spinal/epidural, deep sedation |
| **Typical Inpatient Stay** | None (Outpatient / Same-day discharge) | Rare (Outpatient or observation; < 24 hrs) | Typical (Inpatient POS 21 or extended Observation) |
| **Surgical Invasiveness** | Superficial, endoscopic, needle, non-cavity | Cutaneous, simple excision, minor biopsy | Major body cavity (abdomen, thorax, cranium, joint) |

---

## CMS Global Concept Indicators (MPFS / PFS)

The CMS Relative Value File defines the exact global period category for every CPT and HCPCS Level II code through the `GLOB DAYS` indicator:

```
┌────────────────────────────────────────────────────────────────────────┐
│               CMS GLOBAL SURGICAL PERIOD INDICATORS                    │
├────────────┬─────────────────────────────┬─────────────────────────────┤
│ Indicator  │ Classification              │ Policy & Description        │
├────────────┼─────────────────────────────┼─────────────────────────────┤
│ 000        │ Minor Surgery (0-Day)       │ Endoscopic/superficial; DOS │
│ 010        │ Minor Surgery (10-Day)      │ Minor cutaneous/biopsies    │
│ 090        │ Major Surgery (90-Day)      │ 1 day pre-op + DOS + 90 post│
│ XXX        │ Global Concept N/A          │ Diagnostic/imaging/lab/E&M  │
│ YYY        │ Contractor/MAC Priced       │ Unlisted codes; MAC rules   │
│ ZZZ        │ Add-on Surgical Codes       │ Inherits primary code global│
│ MMM        │ Maternity Global Concept    │ Antepartum, delivery, post  │
└────────────┴─────────────────────────────┴─────────────────────────────┘
```

### 1. `090` — Major Surgical Procedures
- **Preoperative Period**: Includes the day before surgery and the day of surgery.
- **Postoperative Period**: Includes 90 calendar days following the day of surgery (starts day 1 post-op).
- **Core Rule**: All standard pre-op visits, intraoperative steps, post-op hospital rounding, recovery room time, and outpatient follow-up visits within 90 days are bundled into the global surgical package.

### 2. `010` — Minor Procedures with Postoperative Period
- **Preoperative Period**: Day of procedure only.
- **Postoperative Period**: Includes 10 calendar days following the procedure.
- **Core Rule**: Common for minor skin excisions, simple wound repairs, biopsies, and soft tissue procedures requiring follow-up (e.g., suture removal, initial wound check).

### 3. `000` — Minor Procedures without Postoperative Period
- **Preoperative & Postoperative Window**: Day of procedure only.
- **Core Rule**: Common for diagnostic endoscopies, minor injections, superficial foreign body removals, and minor laser treatments. Routine follow-up on subsequent days is billable with standard E/M codes if medically indicated.

### 4. `XXX` — Global Concept Does Not Apply
- Applies to diagnostic tests (radiology interpretations, laboratory assays, echocardiography, pulmonary function tests) and non-surgical procedures.
- Distinct E/M services provided on the same day do **not** require global surgical package unbundling modifiers (unless NCCI Column 1/Column 2 edits mandate modifier [[-59]] or [[-25]]).

### 5. `ZZZ` — Add-On Codes
- Applies to add-on surgical codes (e.g., additional levels in spine surgery, additional lesions in dermatology, complex secondary reconstructions).
- Add-on codes have no standalone global period; they inherit the global period of the primary procedure code billed on the same claim.

### 6. `YYY` — Carrier/MAC-Priced Unlisted Codes
- Assigned to unlisted surgical codes (e.g., [[Unlisted Surgery Guidelines|unlisted surgical procedures]]). The Medicare Administrative Contractor (MAC) determines the applicable global period upon manual review of the operative report.

---

## Components of the Global Surgical Package

CMS Internet-Only Manual (IOM) Pub. 100-04, Chapter 12, §40 defines what is bundled versus what is separately reimbursable in a surgical package.

```
┌──────────────────────────────────────────────────────────────────────────┐
│                   GLOBAL SURGERY BUNDLING TIMELINE                       │
├───────────────────┬───────────────────────────┬──────────────────────────┤
│ Pre-Op (1 Day)    │ Day of Surgery (DOS)      │ Post-Op (10 or 90 Days)  │
├───────────────────┼───────────────────────────┼──────────────────────────┤
│ • Major Surgery   │ • Operative procedure     │ • PACU / Floor rounding │
│   pre-op exams    │ • Local/regional block    │ • Wound & drain care     │
│   (bundled)       │ • Surgical approach       │ • Suture/staple removal  │
│ • Initial Decision│ • Supplies & dressings    │ • Bedside complications  │
│   for Major Surg  │ • Pre-op exam (minor surg)│ • Routine pain mgmt      │
│   → [[-57]] ONLY   │ • Distinct E/M → [[-25]]  │ • Unrelated E/M → [[-24]]│
└───────────────────┴───────────────────────────┴──────────────────────────┘
```

### Services Included in the Global Surgical Package (Non-Billable Separately)

1. **Preoperative Care**:
   - Pre-op visits occurring the calendar day prior to a 90-day major surgery (once the decision to operate has already been made).
   - Pre-op evaluation and decision to perform a minor procedure (000/010 days) on the date of service.
2. **Intraoperative Work**:
   - The surgical approach, opening, exploration, and closure.
   - Local infiltration, digital block, or topical anesthesia administered by the operating surgeon.
   - Intraoperative imaging guidance, monitoring, or scoping when designated as inclusive in CPT parenthetical instructions or [[NCCI PTP Edits — Specialty Reference|NCCI PTP edits]].
   - Surgical supplies, instruments, standard trays, and routine intraoperative medications.
3. **Postoperative Hospital & Bedside Care**:
   - Inpatient floor rounding, intensive care unit visits, and recovery room visits related to the surgical recovery.
   - Management of uncomplicated postoperative symptoms (nausea, minor surgical pain, mild fever, urinary retention, ileus).
   - Routine bedside procedures: dressing changes, incision cleansing, suture/staple removal, packing changes, catheter removal, drain removal, NG tube insertion/removal.
4. **Postoperative Complications Managed Non-Operatively**:
   - All medical care and bedside interventions provided by the surgeon for complications (e.g., superficial wound dehiscence treated at bedside, localized seroma aspiration in clinic) that **do not require a return to the operating room**.
5. **Administrative Work**:
   - Operative note drafting, discharge planning, orders, prescription writing, and family discussions directly related to the surgical procedure.

---

### Services Excluded from the Global Package (Separately Billable with Modifiers)

1. **Initial Decision for Major Surgery (Modifier [[-57]])**:
   - The initial cognitive E/M encounter during which the surgeon evaluates the patient and decides to perform a **90-day major surgery** (billed on the day of or the calendar day before surgery).
2. **Significant, Separately Identifiable E/M with Minor Surgery (Modifier [[-25]])**:
   - An E/M encounter on the same day as a **0-day or 10-day minor surgery** that addresses a clinical problem above and beyond the standard pre- and post-procedure work.
3. **Unrelated E/M During Postoperative Period (Modifier [[-24]])**:
   - An E/M visit provided by the operating surgeon during the 10-day or 90-day global window for an acute or chronic condition **completely unrelated** to the original surgery.
4. **Critical Care for Post-Op Patients (Modifier [[-24]], [[-FT]], or [[-25]])**:
   - Critical care services ([[99291]] / [[99292]]) provided to an unstable postoperative patient when organ system failure is unrelated to the surgery or requires extensive, complex critical care beyond typical surgical aftercare.
5. **Staged or Related Subsequent Procedures (Modifier [[-58]])**:
   - A planned, staged, or more extensive surgical procedure performed by the original surgeon during the postoperative period of the initial surgery (starts a **new** global period).
6. **Unplanned Return to the Operating Room for Complications (Modifier [[-78]])**:
   - An unplanned surgical procedure requiring a return to the operating room (or procedural suite) during the postoperative global period to manage an operative complication (e.g., postoperative hemorrhage control, deep wound debridement). **Does not reset the global period**.
7. **Unrelated Surgical Procedures (Modifier [[-79]])**:
   - An independent, unrelated surgical procedure performed by the same surgeon during the postoperative period of a previous surgery (starts a **new** global period).
8. **Diagnostic Tests & Separate Biopsies**:
   - Distinct diagnostic biopsies, endoscopic diagnostic examinations performed prior to the decision for major open resection, and diagnostic imaging/laboratory tests.
9. **Division of Global Care (Split-Care Modifiers)**:
   - When different physicians handle distinct phases of the surgical package:
     - Modifier [[-54]]: Surgical Care Only (Surgeon performs intra-op only).
     - Modifier [[-55]]: Postoperative Management Only (Provider assumes post-op care).
     - Modifier [[-56]]: Preoperative Management Only (Provider performs pre-op prep).
10. **Surgical Team Modifiers**:
    - Modifier [[-62]]: [[Co-Surgeries|Two Surgeons (Co-Surgery)]] — each surgeon handles a distinct portion of the same single procedure (paid at 62.5% each).
    - Modifier [[-80]] / [[-81]] / [[-82]] / [[-AS]]: Assistant at surgery.

---

## E/M Unbundling Rules: Modifier -25 vs. Modifier -57

A frequent cause of payer audits and denials is confusing **Modifier [[-25]]** with **Modifier [[-57]]**.

```
                         E/M ENCOUNTER ON OR NEAR DATE OF SURGERY
                                            │
               ───────────────────────────────────────────────────────────
               │                                                         │
       MINOR SURGERY (000 / 010)                                 MAJOR SURGERY (090)
               │                                                         │
   Did the visit involve significant,                       Was this the encounter where the
   separate E/M work beyond the standard                   initial decision for major surgery
   pre/post-op work inherent to procedure?                             was made?
               │                                                         │
        ───────┴───────                                           ───────┴───────
        │             │                                           │             │
       YES           NO                                          YES           NO
        │             │                                           │             │
   Append [[-25]]   BUNDLED                                  Append [[-57]]   BUNDLED
   to E/M code   (Do not bill E/M)                          to E/M code   (Do not bill E/M)
```

### Detailed Modifier Comparison

```
┌─────────────────────────┬───────────────────────────────┬───────────────────────────────┐
│ Criteria                │ Modifier [[-25]]              │ Modifier [[-57]]              │
├─────────────────────────┼───────────────────────────────┼───────────────────────────────┤
│ Procedure Type          │ Minor Surgery ONLY (000, 010) │ Major Surgery ONLY (090)      │
│ Timeframe               │ Same calendar day as procedure│ Day of or 1 day prior to surg │
│ Clinical Rationale      │ Significant, separate E/M work│ Initial decision for surgery  │
│ Routine Pre-Op Included?│ YES — routine pre-op bundled  │ YES — routine pre-op bundled  │
│ Diagnosis Requirement   │ Same or different ICD-10      │ Same or different ICD-10      │
│ Fatal Coding Error      │ Appending 25 to 090 decision  │ Appending 57 to minor surgery │
└─────────────────────────┴───────────────────────────────┴───────────────────────────────┘
```

> [!CAUTION] Critical Audit Trigger: Modifier Misuse
> - **Never** append Modifier [[-57]] to a minor procedure (`000` or `010` global). Payers will automatically downcode or deny the E/M service.
> - **Never** append Modifier [[-25]] to an E/M service where the sole purpose was evaluating a patient for a scheduled minor procedure (e.g., evaluating a skin lesion on the day of a scheduled biopsy without an independent E/M problem).
> - **Never** append Modifier [[-57]] to a pre-scheduled, staged, or elective major surgery when the decision was documented weeks earlier in an outpatient clinic.

---

## Postoperative Modifier Decision Matrix (Modifiers -58, -78, -79)

When a patient undergoes a secondary surgical procedure during the postoperative global period of a previous surgery, the following matrix dictates modifier selection:

| Modifier | Modifier Name | Related to Primary Surgery? | Planned vs. Unplanned | Location Requirement | Resets Global Period? | Payment Allowance |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **[[-58]]** | Staged / Related Procedure | **YES** | **Planned / Staged** (or more extensive) | Any setting (OR, bedside, clinic) | **YES** (Starts full new global period) | **100%** of MPFS allowable |
| **[[-78]]** | Unplanned Return to OR | **YES** (Complication) | **Unplanned** | **Operating / Procedure Room ONLY** | **NO** (Original global clock continues) | **Intra-op value only** (~70–80% of allowable) |
| **[[-79]]** | Unrelated Procedure | **NO** | Either | Any setting | **YES** (Starts full new global period) | **100%** of MPFS allowable |

### Clinical Scenarios for Modifiers -58, -78, and -79

1. **Modifier [[-58]] Example (Staged/Related)**:
   - *Scenario*: Patient undergoes wide excision of a malignant melanoma (090 global). The surgeon documents that a delayed local advancement flap reconstruction will occur 5 days later once margin clearance is confirmed.
   - *Coding*: Secondary reconstruction coded with modifier [[-58]]. Full fee is paid and a new 90-day global period begins.

2. **Modifier [[-78]] Example (Unplanned Return to OR for Complication)**:
   - *Scenario*: Patient undergoes total hip arthroplasty (090 global). On postoperative day 2, acute hematoma with active bleeding occurs requiring an urgent return to the operating suite for surgical evacuation and hemostasis.
   - *Coding*: Evacuation code billed with modifier [[-78]]. Payment is reduced to the intraoperative work value; the original 90-day global period continues without resetting.

3. **Modifier [[-79]] Example (Unrelated Procedure in Global Period)**:
   - *Scenario*: Patient undergoes laparoscopic cholecystectomy (090 global). On postoperative day 20, patient falls and sustains a closed displaced distal radius fracture requiring open reduction internal fixation (ORIF, 090 global) by the same multi-specialty surgical group.
   - *Coding*: ORIF procedure billed with modifier [[-79]]. Full fee is paid and a new independent 90-day global period begins for the wrist.

---

## Specialty-Specific Clinical Examples

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                        SPECIALTY SURGICAL CODE COMPARISONS                             │
├────────────────────┬─────────────────────────────┬─────────────────────────────────────┤
│ Specialty          │ Minor Procedures (000 / 010)│ Major Surgeries (090)               │
├────────────────────┼─────────────────────────────┼─────────────────────────────────────┤
│ PM&R / Pain        │ [[20552]] (Trigger points)  │ [[62362]] (Intrathecal pump implant)│
│                    │ [[20610]] (Joint injection) │ [[63685]] (Spinal cord stimulator)  │
│                    │ [[62323]] (Epidural steroid)│ [[22551]] (Spinal arthrodesis/fusion│
├────────────────────┼─────────────────────────────┼─────────────────────────────────────┤
│ Urology            │ [[52000]] (Cystoscopy)      │ [[50546]] (Lap radical nephrectomy) │
│                    │ [[52005]] (Ureteral cath)   │ [[52601]] (TURP - Prostatectomy)    │
│                    │ [[55700]] (Prostate biopsy) │ [[55866]] (Lap radical prostatectomy│
├────────────────────┼─────────────────────────────┼─────────────────────────────────────┤
│ Otolaryngology     │ [[31575]] (Diag laryngoscopy│ [[31360]] (Total laryngectomy)      │
│ (ENT)              │ [[31574]] (Larynx injection)│ [[31267]] (Maxillary antrostomy)    │
│                    │ [[31237]] (Nasal debridement│ [[38724]] (Radical neck dissection) │
├────────────────────┼─────────────────────────────┼─────────────────────────────────────┤
│ Ophthalmology      │ [[67820]] (Trichiasis epil) │ [[66984]] (Cataract surgery w/ IOL) │
│                    │ [[65222]] (Corneal FB rem)  │ [[67036]] (Pars plana vitrectomy)   │
│                    │ [[66821]] (YAG capsulotomy) │ [[65850]] (Trabeculectomy)          │
├────────────────────┼─────────────────────────────┼─────────────────────────────────────┤
│ General / Ortho    │ [[10060]] (Simple I&D)      │ [[49000]] (Exploratory laparotomy)  │
│                    │ [[11104]] (Punch biopsy)    │ [[27447]] (Total knee arthroplasty) │
│                    │ [[29881]] (Knee meniscectomy│ [[27130]] (Total hip arthroplasty)  │
└────────────────────┴─────────────────────────────┴─────────────────────────────────────┘
```

### 1. Physical Medicine & Rehabilitation (PM&R) and Interventional Pain
- **Minor Procedures (`000` / `010`)**:
  - [[20552]] / [[20553]] — Injection(s); single or multiple trigger points, 1–2 / 3+ muscle groups (`000` days).
  - [[20610]] / [[20611]] — Arthrocentesis, aspiration, and/or injection; major joint or bursa (`000` days).
  - [[62322]] / [[62323]] — Injection, interlaminar epidural or subarachnoid, lumbar/sacral (`000` days).
  - *Rule*: Same-day E/M requires modifier [[-25]] and documentation of a comprehensive evaluation distinct from the standard injection positioning/prep.
- **Major Procedures (`090`)**:
  - [[62362]] — Implantation or replacement of programmable intrathecal pump (`090` days).
  - [[63685]] — Insertion or replacement of spinal neurostimulator pulse generator or receiver (`090` days).
  - *Rule*: Pre-implantation cognitive decision encounter billed with modifier [[-57]]; 90-day global covers routine incision checks and suture removal.

### 2. Urology
- **Minor Procedures (`000` / `010`)**:
  - [[52000]] — Cystourethroscopy (separate procedure) (`000` days).
  - [[52005]] — Cystourethroscopy with ureteral catheterization (`000` days).
  - [[55700]] — Biopsy, prostate; needle or punch, single or multiple (`000` days).
  - *Rule*: Diagnostic cystoscopy performed on the same day as an initial consult does not permit modifier [[-57]]. If a significant separate E/M is documented, append modifier [[-25]].
- **Major Procedures (`090`)**:
  - [[50546]] — Laparoscopy, surgical; radical nephrectomy (`090` days).
  - [[52601]] — Transurethral resection of prostate (TURP) (`090` days).
  - [[55866]] — Laparoscopy, surgical; radical prostatectomy (`090` days).
  - *Rule*: Emergency or urgent inpatient consultations that determine the need for emergent TURP or nephrectomy support modifier [[-57]] appended to [[99221]]–[[99223]] or [[99252]]–[[99255]].

### 3. Otolaryngology (ENT)
- **Minor Procedures (`000` / `010`)**:
  - [[31575]] — Laryngoscopy, flexible; diagnostic (`000` days).
  - [[31574]] — Laryngoscopy, flexible; with injection into vocal cord (`000` days).
  - [[31237]] — Nasal/sinus endoscopy, surgical; with biopsy, polypectomy or debridement (`000` days).
  - *Rule*: Endoscopy performed during a routine clinic visit is inclusive of the decision to scope. An independent E/M problem (e.g., refractory otitis media in a patient scoped for hoarseness) is required to append modifier [[-25]].
- **Major Procedures (`090`)**:
  - [[31360]] — Laryngectomy; total, without radical neck dissection (`090` days).
  - [[31267]] — Nasal/sinus endoscopy, surgical; with maxillary antrostomy and removal of tissue (`090` days).
  - [[38724]] — Cervical lymphadenectomy (radical neck dissection) (`090` days).
  - *Rule*: Pre-op decision-making for extensive sinus or oncologic resection supports modifier [[-57]]. Postoperative endoscopic debridement ([[31237]]) during the 90-day global requires modifier [[-58]] if planned/staged.

### 4. Ophthalmology
- **Minor Procedures (`000` / `010`)**:
  - [[67820]] — Correction of trichiasis; epilation, by forceps only (`000` days).
  - [[65222]] — Removal of foreign body, external eye; corneal, with slit lamp (`000` days).
  - [[66821]] — Discission of secondary membranous cataract (after-cataract); laser surgery (YAG capsulotomy) (`090` days for Medicare historically / check payer LCD; standard minor laser codes carry `000` or `010`).
  - [[65855]] — Trabeculoplasty by laser surgery (`010` days).
  - *Rule*: Routine slit lamp examination performed as part of a corneal procedure cannot be unbundled.
- **Major Procedures (`090`)**:
  - [[66984]] — Extracapsular cataract removal with insertion of intraocular lens prosthesis (`090` days).
  - [[67036]] — Vitrectomy, mechanical, pars plana approach (`090` days).
  - [[65850]] — Trabeculectomy ab externo in absence of previous surgery (`090` days).
  - *Rule*: Preoperative surgical clearance and IOL calculation visits that culminate in the decision for cataract extraction support modifier [[-57]] when performed within 1 day of surgery.

---

## Inpatient vs. Outpatient Dynamics (ProFee vs. Facility)

For hospital inpatient professional fee coding, coders must separate **Physician Global Period Rules** from **Hospital Facility Reimbursement**:

```
┌────────────────────────────────────────────────────────────────────────┐
│               PROFESSIONAL (PROFFEE) VS. FACILITY (MS-DRG)             │
├──────────────────────────┬─────────────────────────────────────────────┤
│ Dimension                │ Inpatient Professional Fee (Part B)         │
├──────────────────────────┼─────────────────────────────────────────────┤
│ Payment System           │ Medicare Physician Fee Schedule (MPFS)      │
│ Global Package Concept   │ YES — 000, 010, 090 Day Rules Apply         │
│ Post-Op Hospital Rounding│ BUNDLED into surgeon's 090 global fee       │
│ Unrelated Medical Care   │ Medical hospitalist bills [[99231]]–[[99233]]│
│ Return to OR for Bleed   │ Surgeon bills code + Modifier [[-78]]       │
├──────────────────────────┼─────────────────────────────────────────────┤
│ Dimension                │ Hospital Inpatient Facility (Part A)        │
├──────────────────────────┼─────────────────────────────────────────────┤
│ Payment System           │ Inpatient Prospective Payment (IPPS/MS-DRG) │
│ Global Package Concept   │ NO — Reimbursed per Inpatient Stay (DRG)    │
│ Post-Op Hospital Care    │ Covered under base MS-DRG payment           │
│ Return to OR for Bleed   │ Triggers OR Procedure CC/MCC DRG shift      │
└──────────────────────────┴─────────────────────────────────────────────┘
```

### Inpatient Co-Management & Concurrent Care Rules
1. **Surgeon Inpatient Rounding**:
   - The primary surgeon **cannot** bill Subsequent Hospital Care ([[99231]]–[[99233]]) or Inpatient Discharge Management ([[99238]] / [[99239]]) during the 90-day global period for normal recovery.
2. **Hospitalist Medical Co-Management**:
   - A medical hospitalist managing distinct systemic medical conditions (e.g., acute decompensated heart failure, diabetes ketoacidosis, chronic kidney disease exacerbation) during the surgical stay **can** bill Subsequent Hospital Care without modifiers, provided their diagnosis codes reflect the distinct medical management.
3. **Surgical Complications Managed by Hospitalists**:
   - If a hospitalist is consulted to manage medical complications (e.g., post-op pneumonia [[J18.9]], deep vein thrombosis [[I82.401]]), they report the appropriate inpatient E/M code linking the medical complication.

---

## 2026 Audit Defense & Compliance Checklist

To ensure compliance during Medicare Recovery Audit Contractor (RAC), Unified Program Integrity Contractor (UPIC), or commercial payer audits:

- [ ] **Global Days Verification**: Cross-reference the procedure code against the [[NATIONAL PHYSICIAN FEE SCHEDULE RELATIVE VALUE FILE CALENDAR YEAR 2026|CY 2026 MPFS Relative Value File]] to confirm whether the global period is `000`, `010`, or `090`.
- [ ] **Modifier 57 vs. 25 Accuracy**: Ensure Modifier [[-57]] is used *exclusively* for `090` major surgeries and Modifier [[-25]] is used *exclusively* for `000`/`010` minor surgeries or distinct non-decision services.
- [ ] **Timing of Decision for Surgery**: Confirm that Modifier [[-57]] documentation explicitly shows the initial decision for major surgery was formulated on the day of or the calendar day immediately preceding the surgery.
- [ ] **Separate Identifiable E/M Documentation**: For Modifier [[-25]], verify that the medical record contains a clearly distinct history, examination, and medical decision-making (MDM) addressing a condition separate from the routine minor procedure preparation.
- [ ] **Modifier 58 Staged Procedure Criteria**: Confirm that subsequent surgical notes during the 90-day window substantiate that the secondary procedure was (a) prospectively planned, (b) more extensive than the initial procedure, or (c) for therapy following a diagnostic surgical procedure.
- [ ] **Modifier 78 OR Location Rule**: Confirm that any procedure billed with Modifier [[-78]] was performed in an **Operating Room suite, endoscopy suite, or cardiac catheterization lab**; bedside complication debridements are bundled and non-billable under 78.
- [ ] **Split Care Synchronization**: When billing surgical care only (Modifier [[-54]]), ensure formal written transfer of care agreements exist with the physician assuming postoperative care (Modifier [[-55]]).
- [ ] **Teaching Physician Attestation**: When residents participate in major surgery, ensure the teaching physician operative note documents direct physical presence during all **critical or key portions** of the operation per [[GC -- Teaching Physician Rules|Modifier -GC rules]].

---

## Related Notes & Vault Hierarchy

### Specialty & Guidelines MOCs
- [[00 Inpatient ProFee Coding MOC]] — Master Map of Content for Inpatient Professional Fee Coding
- [[50 Medical Coding/Modifiers/Global Surgical Package MOC|Global Surgical Package MOC]] — Master Guide for Global Surgical Period Modifiers
- [[CMS Medicare Guidelines for Inpatient]] — Inpatient Regulatory Guidelines
- [[Co-Surgeries]] — Co-Surgery Rules for Modifier -62
- [[Modifier -25 vs -57]] — In-depth E/M Unbundling Guide

### Evaluation & Management (E/M) Notes
- [[Initial Hospital Care]] — CPT 99221–99223 Coding & Guidelines
- [[Subsequent Hospital Care]] — CPT 99231–99233 Daily Rounding Guidelines
- [[Discharge Services]] — CPT 99238–99239 Discharge Management
- [[Consultation Codes]] — CPT 99252–99255 Inpatient Consultations
- [[Critical Care Codes]] — CPT 99291–99292 Critical Care Management

### Modifiers Reference
- [[-25]] — Significant, Separately Identifiable E/M Service
- [[-57]] — Decision for Major Surgery
- [[-24]] — Unrelated E/M During Postoperative Period
- [[-58]] — Staged or Related Procedure by Same Physician During Global Period
- [[-78]] — Unplanned Return to Operating/Procedure Room for Related Procedure
- [[-79]] — Unrelated Procedure by Same Physician During Postoperative Period
- [[-54]] — Surgical Care Only
- [[-55]] — Postoperative Management Only
- [[-56]] — Preoperative Management Only
- [[-62]] — Two Surgeons (Co-Surgery)
- [[-FT]] — Unrelated Critical Care During Global Period
- [[-FS]] — Split/Shared Evaluation and Management Visits
- [[-GC]] — Teaching Physician Services
