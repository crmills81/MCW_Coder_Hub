---
tags:
  - modifier
  - hcpcs
  - physical-therapy
  - outpatient-therapy
  - plan-of-care
  - discipline-identifier
  - reimbursement
code: "GP"
code_type: HCPCS Level II Modifier
descriptor: Services Delivered Under an Outpatient Physical Therapy Plan of Care
category: Therapy Discipline Modifiers
global_period: N/A (Follows primary therapy CPT® code)
wRVU: N/A (Discipline Identifier — Does Not Adjust RVU)
assistant_surgeon_payable: N/A (Not a Surgical Modifier)
ncci_modifier_indicator: "1 (Allowed; required for PT discipline identification)"
separate_procedure: false
ms_drg_primary: N/A (Outpatient/Part B Billing)
last_updated: 2026-04-08
status: Active ✅
---

# ⚕️ Modifier GP: Services Delivered Under an Outpatient Physical Therapy Plan of Care

> [!INFO] Quick Reference
> **Descriptor**: Services Delivered Under an Outpatient Physical Therapy Plan of Care <sup>1</sup>
> **Global Period**: N/A — follows the global period of the billed PT CPT® code <sup>2</sup>
> **Provider Type**: Physical Therapist (PT) / Physical Therapy Assistant (PTA) under PT supervision <sup>3</sup>
> **Reimbursement**: Paid at Medicare Physician Fee Schedule rate for PT services when medically necessary <sup>4</sup>
> **NCCI Status**: Required on all PT services billed to Medicare Part B; Modifier Indicator 1 <sup>5</sup>
> **Approach**: Appended to every PT CPT® or HCPCS code on each line of the claim

---

## 📋 Code Description & Clinical Context

**Modifier [[-GP]]** is a Level II HCPCS modifier that identifies services performed under an **outpatient physical therapy plan of care** <sup>1</sup>. Because many therapy CPT® codes are shared across physical therapy (PT), occupational therapy (OT), and speech-language pathology (SLP), Medicare requires discipline-specific modifiers to accurately track utilization, apply the correct payment thresholds, and determine which therapy type delivered the service <sup>6</sup>. Without [[-GP]], Medicare cannot process a physical therapy claim correctly and will deny it.

The three therapy discipline modifiers are:
- **[[-GP]]** — Physical Therapy
- **[[-GO]]** — Occupational Therapy
- **[[-GN]]** — Speech-Language Pathology

**Key Usage Indications**:
- All PT evaluation and re-evaluation codes ([[97161]], [[97162]], [[97163]], [[97164]])
- All PT treatment procedure codes on the same date of service ([[97110]], [[97112]], [[97116]], [[97140]], [[97530]], [[97535]], [[97542]], [[97750]], [[97760]], [[97761]], [[97763]])
- Group therapy billed by a PT ([[97150]])
- Aquatic therapy ([[97113]]) billed under a PT plan of care
- RTM monitoring codes billed under a PT plan ([[98975]], [[98976]], [[98977]], [[98980]], [[98981]])
- HCPCS G-codes for PT services (e.g., [[G0283]])
- PT services billed in SNF Part B, outpatient hospital, private clinics, patient home (not under home health), and telehealth

> [!NOTE] Every Line Item — No Exceptions
> **Modifier [[-GP]]** must be appended to **every** CPT® code on the claim where a physical therapist provided the service — including evaluations, re-evaluations, and all procedure codes. Omitting [[-GP]] from even one line may result in denial of that line <sup>3</sup>.

---

## 🌲 Code Hierarchy / Context

```
HCPCS Level II Modifiers
└─ Therapy Discipline Modifiers
   ├─ -GP Services Under PT Plan of Care ← THIS MODIFIER
   ├─ -GO Services Under OT Plan of Care
   ├─ -GN Services Under SLP Plan of Care
   └─ -KX Therapy Threshold Exception (co-billed with -GP when threshold exceeded)
```

**Parent Category**: Therapy Discipline Modifiers (HCPCS Level II) <sup>7</sup>
**Related Modifiers**: [[-GO]] (OT), [[-GN]] (SLP), [[-KX]] (therapy threshold attestation, co-billed with [[-GP]]), [[-GA]] (ABN on file, co-billed with [[-GP]] when Medicare likely to deny), [[-59]] (distinct service when needed on timed code pairs)
**Primary Code Dependency**: Must be appended to a valid PT CPT® or HCPCS code on a CMS-1500 / 837P claim

---

## 💰 Reimbursement & Valuation

| Component | Rate | Notes |
|-----------|------|-------|
| **Base Rate** | 100% | Paid at Medicare Physician Fee Schedule (MPFS) for the billed PT CPT® code <sup>4</sup> |
| **PTA Reduction** | 85% | When a PTA provides services under PT supervision, append [[-CQ]] alongside [[-GP]]; paid at 85% of MPFS <sup>4</sup> |
| **Therapy Threshold (2026)** | $2,330 (PT/SLP combined) | When exceeded, [[-KX]] must be appended alongside [[-GP]] to attest to continued medical necessity <sup>8</sup> |
| **Targeted Medical Review Trigger** | $3,000 | Claims may be selected for medical review once therapy costs surpass this amount <sup>8</sup> |
| **Medicare Advantage** | Follows original Medicare | Most MA plans follow CMS rules; confirm individual plan requirements <sup>6</sup> |
| **Telehealth** | GP required | -GP applies to PT telehealth services; additional telehealth modifiers also required <sup>3</sup> |

**Assistant/Support Modifier Note**:
- When a **Physical Therapy Assistant (PTA)** delivers the service, append **[[-CQ]]** alongside [[-GP]] on every affected line — payment reduces to 85% of MPFS <sup>4</sup>
- When a **student PT** (not yet licensed) furnishes services in whole or in part, append **[[-CO]]** alongside [[-GP]] — payment reduces to 85% <sup>4</sup>

---

## 🚫 Includes / Excludes & NCCI Guidance

### ✅ Includes
- All PT evaluation codes ([[97161]]-[[97164]]) <sup>3</sup>
- All PT procedure codes (timed and untimed) performed under a PT plan of care <sup>3</sup>
- Group PT therapy ([[97150]]) <sup>3</sup>
- Aquatic therapy ([[97113]]) performed under a PT plan of care
- RTM supply ([[98976]], [[98977]]) and monitoring management codes ([[98980]], [[98981]]) when under PT plan <sup>9</sup>
- HCPCS [[G0283]] (Electrical stimulation for wound care, billed under PT plan by chiropractors/PTs) <sup>10</sup>
- SNF Part B long-term care resident PT claims (not under a Part A stay) <sup>3</sup>
- Telehealth PT services (also requires applicable telehealth modifier) <sup>3</sup>

### ❌ Excludes / Not Used With -GP
- **SNF Part A covered stay**: Therapy is bundled into facility payment; facility bills Medicare, not the individual PT <sup>3</sup>
- **Home health episode**: Under a Medicare home health plan of care, the HHA bills therapy services; [[-GP]] is not separately appended by the individual PT <sup>3</sup>
- **OT or SLP services**: Those services require [[-GO]] and [[-GN]] respectively — do NOT apply [[-GP]] to non-PT discipline codes <sup>6</sup>
- **CPT® codes that describe a series or protocol by definition** that are beyond the scope of outpatient PT (e.g., physician-only E/M codes, surgical procedures, non-therapy HCPCS)
- **Modifier [[-GY]]**: Statutory exclusion — if a service is excluded by statute, [[-GP]] cannot make it billable

> [!IMPORTANT] Do Not Mix Discipline Modifiers
> If a patient receives both PT and OT services on the same date, PT codes get [[-GP]] and OT codes get [[-GO]]. Never apply [[-GP]] to OT or SLP service lines — this misidentifies the discipline and can trigger overpayment recovery <sup>6</sup>.

---

## 🏥 MS-DRG Assignment (Inpatient Facility)

Modifier [[-GP]] is used exclusively on **outpatient professional (Part B)** claims and does not apply to inpatient MS-DRG assignment. However, the diagnoses supporting the PT plan of care are critical to ensuring appropriate care coordination documentation across care settings.

| Scenario | Impact | Description |
|----------|--------|-------------|
| **Post-acute outpatient PT after hospital discharge** | No DRG impact | [[-GP]] applies to post-discharge Part B claims only <sup>11</sup> |
| **SNF Part B PT (long-term resident)** | No DRG impact | Billed directly to Medicare Part B with [[-GP]]; facility Part A not affected <sup>3</sup> |
| **Therapy threshold exceeded** | KX required | Add [[-KX]] alongside [[-GP]]; no DRG effect but impacts Part B payment <sup>8</sup> |
| **Documentation supports functional diagnosis** | Supports CC/MCC on prior inpatient stay | Diagnoses like [[M54.50]], [[G81.91]], [[S72.001A]] may have been CC/MCC during inpatient stay <sup>12</sup> |

> [!Note]
> Facility reimbursement (**Part A / MS-DRG**) is **not** affected by modifier [[-GP]]. This modifier is a Part B professional billing element only <sup>11</sup>.

---

## 🏷️ Common ICD-10-CM Diagnosis Codes

*Modifier [[-GP]]** does not change diagnosis coding requirements. The diagnosis must support the **medical necessity** of the physical therapy plan of care and the specific PT services billed.*

### Primary Diagnosis Options (Supporting PT Plan of Care)

| ICD-10-CM Code | Description | HCC Status* |
|----------------|-------------|-------------|
| **[[M54.50]]** | **Low back pain, unspecified** | ❌ Not HCC |
| **[[M17.11]]** | **Primary osteoarthritis, right knee** | ❌ Not HCC |
| **[[M17.12]]** | **Primary osteoarthritis, left knee** | ❌ Not HCC |
| **[[S72.001A]]** | **Fracture of unspecified part of neck of right femur, initial encounter** | ❌ Not HCC |
| **[[G81.91]]** | **Hemiplegia, unspecified, affecting right dominant side** | ✅ HCC (Neurological) |
| **G35.-** | **Multiple sclerosis** | ✅ HCC (Neurological) |
| **G20.-** | **Parkinson's disease** | ✅ HCC (Neurological) |
| **[[I69.351]]** | **Hemiplegia and hemiparesis following cerebral infarction affecting right dominant side** | ✅ HCC (Stroke/Neuro) |
| **[[Z96.641]]** | **Presence of right artificial hip joint (post-THA PT)** | ❌ Not HCC |
| **[[Z96.651]]** | **Presence of right artificial knee joint (post-TKA PT)** | ❌ Not HCC |

\* *HCC Status*: Hierarchical Condition Category mapping for Medicare Advantage risk adjustment. The diagnosis — not the modifier — drives HCC assignment. Modifier [[-GP]] has no direct impact on risk scores <sup>13</sup><sup>14</sup>.

### Supporting/Comorbid Codes (Document When Applicable)
- [[R26.89]] Other abnormalities of gait and mobility (supports gait training [[97116]])
- [[M62.81]] Muscle weakness, generalized (supports therapeutic exercise [[97110]])
- [[R53.1]] Weakness (supports neuromuscular re-education [[97112]])
- [[Z87.39]] Personal history of musculoskeletal disorders (supports continued PT)
- [[Z96.641]] / [[Z96.651]] Presence of artificial joint (post-surgical PT support)

---

## ✏️ Modifiers Guidance

| Modifier | Relationship to [[-GP]] | Payable Together? |
|----------|------------------------|-------------------|
| [[-GO]] | OT discipline modifier — mutually exclusive with [[-GP]] for same service line | ❌ Never on the same line |
| [[-GN]] | SLP discipline modifier — mutually exclusive with [[-GP]] for same service line | ❌ Never on the same line |
| [[-KX]] | Therapy threshold attestation — append alongside [[-GP]] when annual threshold exceeded | ✅ Required together when threshold exceeded |
| [[-GA]] | ABN on file — append alongside [[-GP]] when service expected to be denied but ABN is signed | ✅ Use together when ABN obtained |
| [[-GY]] | Statutory exclusion — service not a Medicare benefit | ❌ Mutually exclusive; if GY applies, service is non-covered |
| [[-CQ]] | Services furnished in whole or part by PTA — payment reduced to 85% | ✅ Required alongside [[-GP]] when PTA provides service |
| [[-CO]] | Services furnished in whole or part by PT student — payment reduced to 85% | ✅ Required alongside [[-GP]] when student furnishes service |
| [[-59]] | Distinct procedural service — used on timed code pairs to prevent bundling when truly separate | ✅ May be used with [[-GP]] when appropriate |

> [!CAUTION] Modifier [[-GP]] vs [[-GO]] vs [[-GN]]
> These three modifiers are **mutually exclusive on the same service line**. Apply the correct discipline modifier based on who actually delivered the service under which plan of care. Misapplication leads to overpayment, audit risk, and compliance violations <sup>6</sup>.

---

## 📝 Coding Examples

### ✅ Example 1: New Patient PT Evaluation + Treatment, Same Day
> **Scenario**: New Medicare patient presents to outpatient PT clinic with left knee OA ([[M17.12]]) post-TKA ([[Z96.652]]). PT performs a moderate complexity evaluation and provides 30 min therapeutic exercise.
> **Report**:
> - [[97162]]-[[-GP]] (PT Evaluation, Moderate Complexity)
> - [[97110]]-[[-GP]] × 2 (Therapeutic Exercise, 2 × 15 min units)
> - Diagnosis: [[M17.12]], [[Z96.652]]
> **Rationale**: Every PT code appended with [[-GP]] on initial visit. ✅ Clean claim <sup>3</sup>.

### ✅ Example 2: PT and OT Same Day — Different Modifiers
> **Scenario**: Patient with stroke ([[I69.351]]) receives PT gait training (30 min) and OT ADL training (30 min) on the same day.
> **PT Bills**:
> - [[97116]]-[[-GP]] × 2 (Gait Training, 2 × 15 min)
> **OT Bills**:
> - [[97535]]-[[-GO]] × 2 (Self-Care/ADL Training)
> - Diagnosis both claims: [[I69.351]]
> **Rationale**: Each discipline uses their correct modifier. [[-GP]] is NOT placed on OT codes. ✅ Correct <sup>6</sup>.

### ✅ Example 3: Therapy Threshold Exceeded — KX Required
> **Scenario**: Medicare patient with Parkinson's (G20.-) has accumulated $2,330 in PT/SLP services for the year. PT continues skilled balance and gait training.
> **Report**:
> - [[97116]]-[[-GP]]-[[-KX]] (Gait Training — threshold exceeded)
> - [[97112]]-[[-GP]]-[[-KX]] (Neuromuscular Re-education)
> - Diagnosis: G20.-, [[R26.89]]
> **Rationale**: [[-KX]] appended alongside [[-GP]] to attest that skilled PT remains medically necessary above the threshold. ✅ Required <sup>8</sup>.

### ❌ Example 4: Missing GP on Eval Code
> **Scenario**: PT bills [[97163]] (High-Complexity Evaluation) and [[97110]]-[[-GP]] (Therapeutic Exercise) for a new patient visit. The eval code is billed without [[-GP]].
> **Report**: [[97163]] (no modifier), [[97110]]-[[-GP]]
> **Rationale**: **Incorrect.** [[-GP]] is required on every PT code including evaluation codes. The eval line will likely deny <sup>3</sup>.

### ❌ Example 5: GP Applied to OT Service Line
> **Scenario**: A clinic bills [[97535]]-[[-GP]] (Self-Care/Home Management ADL Training — an OT service) in error.
> **Report**: [[97535]]-[[-GP]]
> **Rationale**: **Incorrect.** [[97535]] in this context is an OT service and requires [[-GO]]. Applying [[-GP]] misidentifies the discipline. Creates overpayment risk and audit exposure <sup>6</sup>.

### ✅ Example 6: PTA Delivering Services — CQ Required
> **Scenario**: A PTA under PT supervision provides therapeutic exercise ([[97110]]) and manual therapy ([[97140]]) to a Medicare patient with low back pain ([[M54.50]]).
> **Report**:
> - [[97110]]-[[-GP]]-[[-CQ]] × 2
> - [[97140]]-[[-GP]]-[[-CQ]] × 1
> - Diagnosis: [[M54.50]]
> **Rationale**: [[-GP]] identifies PT plan of care; [[-CQ]] identifies PTA delivery → paid at 85% of MPFS. ✅ Correct <sup>4</sup>.

---

## 🔍 Documentation Essentials for Support

To support modifier [[-GP]] and ensure clean claims with audit readiness, documentation should include:

1. **Provider Credentials**: Document PT name and credentials (PT, DPT, MPT) in every note <sup>3</sup>.
2. **Plan of Care on File**: A signed, dated PT plan of care must be established and on file before billing [[-GP]] services <sup>7</sup>.
3. **Physician/NPP Certification**: For Medicare, the PT plan of care must be certified (signed) by a physician or NPP within required timelines <sup>7</sup>.
4. **Discipline Specificity**: Notes must clearly identify the service as **physical therapy** (not just "therapy"). State functional goals, objective measures, and PT-specific interventions <sup>3</sup>.
5. **Time for Timed Codes**: Document exact start/stop times or total timed minutes per code for timed CPT® codes (8-Minute Rule compliance) <sup>7</sup>.
6. **Medical Necessity**: Functional limitations, objective findings, and skilled PT need must be documented in each visit note <sup>8</sup>.
7. **KX Attestation (When Applicable)**: If [[-KX]] is co-billed, documentation must explicitly support continued skilled need beyond the threshold <sup>8</sup>.
8. **ABN (When Applicable)**: If [[-GA]] is co-billed, a valid signed ABN must be on file prior to the date of service <sup>15</sup>.

> [!TIP] Documentation Language
> Avoid generic entries like "therapy performed." Use specific language: **"Skilled physical therapy provided by Jane Smith, DPT, for gait training and neuromuscular re-education. Patient demonstrates measurable functional deficit in ambulation secondary to Parkinson's disease. Today's session focused on improving step length and balance reaction time."**

---

## ⚠️ Common Pitfalls & Audit Risks

| Pitfall | Consequence | Prevention |
|---------|-------------|------------|
| Omitting [[-GP]] from eval codes | Denial of evaluation line | Apply [[-GP]] to ALL PT codes including [[97161]]-[[97164]] <sup>3</sup> |
| Using [[-GP]] on OT or SLP service lines | Overpayment, audit risk | Confirm discipline and apply [[-GO]] or [[-GN]] for non-PT services <sup>6</sup> |
| Failing to add [[-KX]] when threshold exceeded | Claim denial | Monitor cumulative PT/SLP costs; add [[-KX]] when $2,330 is reached <sup>8</sup> |
| Not appending [[-CQ]] when PTA delivers service | Overpayment at full rate | Track PTA vs PT service delivery; reduce to 85% with [[-CQ]] <sup>4</sup> |
| Missing or unsigned PT plan of care | Medical necessity denial | Ensure plan of care is established, certified, and updated per CMS timelines <sup>7</sup> |
| Vague documentation | Audit vulnerability | Use discipline-specific functional language and objective measures in every note <sup>3</sup> |
| Billing SNF Part A therapy with [[-GP]] | Billing error | Confirm payer source; Part A SNF therapy is bundled — do not bill separately with [[-GP]] <sup>3</sup> |

---

## 🔗 Related Codes & Crosswalks

| Code Type | Code | Relationship to [[-GP]] |
|-----------|------|--------------------------|
| HCPCS Modifier | [[-GO]] | OT discipline modifier; mutually exclusive with [[-GP]] on same service line |
| HCPCS Modifier | [[-GN]] | SLP discipline modifier; mutually exclusive with [[-GP]] on same service line |
| HCPCS Modifier | [[-KX]] | Therapy threshold exception; co-appended with [[-GP]] when threshold exceeded |
| HCPCS Modifier | [[-GA]] | ABN on file; co-appended with [[-GP]] when service expected to be denied |
| HCPCS Modifier | [[-CQ]] | PTA-delivered service; co-appended with [[-GP]]; payment at 85% |
| HCPCS Modifier | [[-CO]] | PT student-delivered service; co-appended with [[-GP]]; payment at 85% |
| CPT® | [[97161]] | PT Evaluation — Low Complexity; requires [[-GP]] |
| CPT® | [[97162]] | PT Evaluation — Moderate Complexity; requires [[-GP]] |
| CPT® | [[97163]] | PT Evaluation — High Complexity; requires [[-GP]] |
| CPT® | [[97164]] | PT Re-evaluation; requires [[-GP]] |
| CPT® | [[97110]] | Therapeutic Exercise (timed, 15-min units); requires [[-GP]] |
| CPT® | [[97112]] | Neuromuscular Re-education (timed); requires [[-GP]] |
| CPT® | [[97116]] | Gait Training (timed); requires [[-GP]] |
| CPT® | [[97140]] | Manual Therapy Techniques (timed); requires [[-GP]] |
| CPT® | [[97150]] | Therapeutic Procedure Group (untimed); requires [[-GP]] |
| CPT® | [[97530]] | Therapeutic Activities (timed); requires [[-GP]] |
| CPT® | [[97535]] | Self-Care/Home Management Training (timed); requires [[-GP]] when under PT plan |
| CPT® | [[97750]] | Physical Performance Test or Measurement; requires [[-GP]] |
| CPT® | [[97760]] | Orthotic Management and Training, Initial (timed); requires [[-GP]] |
| CPT® | [[97761]] | Prosthetic Training (timed); requires [[-GP]] |
| CPT® | [[97763]] | Orthotic/Prosthetic Management, Subsequent (timed); requires [[-GP]] |
| HCPCS | [[G0283]] | Electrical stimulation (wound care) — used by PTs/chiropractors; requires [[-GP]] |
| CPT® | [[98975]] | RTM Setup; requires [[-GP]] when under PT plan |
| CPT® | [[98976]] | RTM Supply — Respiratory; requires [[-GP]] when under PT plan |
| CPT® | [[98980]] | RTM Management, First 20 min; requires [[-GP]] when under PT plan |
| CMS Form | CMS-1500 | Professional claim form where [[-GP]] is reported |

---

<sup>1</sup> AAPC HCPCS Level II Modifier Reference — Modifier GP
<sup>2</sup> CMS Medicare Claims Processing Manual Ch. 5 — Part B Outpatient Therapy
<sup>3</sup> Sirius Solutions Global — Modifier GP Guide 2026: Physical Therapy Medicare Billing Rules
<sup>4</sup> CMS Medicare Physician Fee Schedule 2026 — Therapy Services
<sup>5</sup> CMS NCCI Policy Manual 2025 — Chapter 10
<sup>6</sup> Medbridge — How to Use GP, KX & GA Modifiers in Therapy Billing
<sup>7</sup> CMS Medicare Benefit Policy Manual Ch. 15 — Covered Medical and Other Health Services (Therapy)
<sup>8</sup> APTA Medicare Payment Thresholds for Outpatient Therapy Services 2026
<sup>9</sup> CMS Billing Examples Using CQ/CO Modifiers — RTM Services 2025
<sup>10</sup> Illinois Chiropractic Society — Medicare Requiring Modifier GP on Physical Therapy Services
<sup>11</sup> Medicare Claims Processing Manual Ch. 1 — General Billing Requirements
<sup>12</sup> CMS MS-DRG Manual v41.0
<sup>13</sup> CMS-HCC Model V28 Documentation
<sup>14</sup> Find-A-Code HCC Mapping Tool
<sup>15</sup> Medicare Claims Processing Manual Ch. 1 — Section 60.4.1 Outpatient Billing with an ABN
