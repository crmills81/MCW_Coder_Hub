---
tags:
  - specialty/pmr
  - pmr
  - coding/modifiers
  - therapy-modifiers
  - compliance
  - physical-therapy
  - occupational-therapy
  - speech-language-pathology
  - cms/guidelines
  - mpfs
title: Therapy Modifiers (-GP, -GO, -GN, -CQ, -CO, -KX) - PM&R Coding Reference
specialty: Physical Medicine and Rehabilitation
topic: Outpatient Therapy Plan of Care & Billing Modifiers
category: Modifiers & Compliance
modifiers:
  - "[[-GP]]"
  - "[[-GO]]"
  - "[[-GN]]"
  - "[[-CQ]]"
  - "[[-CO]]"
  - "[[-KX]]"
code_set: CPT / HCPCS Level II
fy_version: 2026
status: active
last_updated: 2026-09-16
---

# ⚕️ Outpatient Therapy Modifiers Reference Guide (CMS / Medicare Part B)

> [!INFO] Executive Summary & Regulatory Authority
> **Governing Regulations:** CMS Internet-Only Manual (IOM) Pub. 100-04 (*Medicare Claims Processing Manual*), **Chapter 5**, §20; Pub. 100-02 (*Medicare Benefit Policy Manual*), **Chapter 15**, §§220–230; 42 CFR §414.64.
> **Mandatory Scope:** Therapy modifiers are required on **all outpatient therapy claims** billed to **Medicare Part B** and commercial payers following CMS policy, regardless of provider setting (**private practice, outpatient hospital, CORF, SNF Part B, HHA Part B, or physician clinic**).

---

## 1. Primary Discipline Modifiers (Plan of Care Identifiers)

Therapy discipline modifiers are **mandatory** **Level II HCPCS modifiers** that indicate services were rendered under an established, certified outpatient therapy plan of care. They are mutually exclusive for the same service line.

|  Modifier   | Plan of Care Discipline             | Qualified Billing Practitioners                                                                                    | CMS Claims Processing Manual Rule                                                                              |
| :---------: | :---------------------------------- | :----------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------- |
| **[[-GP]]** | **Physical Therapy (PT)**           | Physical Therapist (PT), Physical Therapist Assistant (PTA under supervision), Physician / NPP furnishing PT       | Required on all PT services (evaluations, re-evaluations, timed/untimed modalities, and procedures)            |
| **[[-GO]]** | **Occupational Therapy (OT)**       | Occupational Therapist (OT), Occupational Therapy Assistant (OTA under supervision), Physician / NPP furnishing OT | Required on all OT services (evaluations, re-evaluations, ADL training, cognitive, and therapeutic modalities) |
| **[[-GN]]** | **Speech-Language Pathology (SLP)** | Speech-Language Pathologist (SLP), Physician / NPP furnishing speech therapy                                       | Required on all SLP speech, swallowing, cognitive, and voice evaluation and treatment services                 |

### Scope of Mandate (Where Modifiers Are Required)
Discipline modifiers are **not** restricted to physician or incident-to billing; they are required on all professional and institutional claims:
- **Professional Claims (CMS-1500 / 837P):** Private practices, physician/NPP clinics (POS 11), home visits (POS 12), telehealth (POS 02/10).
- **Institutional Outpatient Claims (UB-04 / 837I):**
  - Hospital Outpatient Departments (HOPD) — Type of Bill (TOB) `13X`
  - Skilled Nursing Facilities (SNF Part B long-term residents) — TOB `22X`, `23X`
  - Comprehensive Outpatient Rehabilitation Facilities (CORFs) — TOB `75X`
  - Outpatient Rehabilitation Facilities / Rehabilitation Agencies (ORFs) — TOB `74X`
  - Home Health Agencies billing Part B outpatient therapy — TOB `34X`

---

## 2. Assistant Payment Reduction Modifiers (-CQ & -CO)

Under Section 53107 of the Bipartisan Budget Act of 2018 and **42 CFR §414.64**, services furnished in whole or in part by a therapy assistant are reimbursed at **85% of the Medicare Physician Fee Schedule (MPFS)**.

|  Modifier   | Assistant Discipline                     | Required Companion Modifier    | Payment Differential              |
| :---------: | :--------------------------------------- | :----------------------------- | :-------------------------------- |
| **[[-CQ]]** | **Physical Therapist Assistant (PTA)**   | Appended alongside **[[-GP]]** | Paid at **85%** of MPFS allowable |
| **[[-CO]]** | **Occupational Therapy Assistant (OTA)** | Appended alongside **[[-GO]]** | Paid at **85%** of MPFS allowable |

### The CMS 10% De Minimis Standard
- **De Minimis Standard:** The assistant modifier (`-CQ` or `-CO`) is triggered whenever a PTA or OTA furnishes **more than 10%** of a service independently of the supervising therapist.
- **Timed 15-Minute Units:** 10% of a 15-minute unit equals **1.5 minutes**. In practice, if a PTA/OTA provides **2 or more minutes** of a 15-minute unit without the therapist actively participating, the unit must be billed with `-CQ` or `-CO`.
- **Untimed Codes (e.g., [[97150]] Group Therapy, Unlisted):** If the assistant furnishes >10% of the total session time independently, append the assistant modifier.
- **Full Service by Assistant:** If the assistant provides the entire service independently under general supervision, the assistant modifier is mandatory for all units.
- **Students:** Services provided by therapy students are **not billable** under **Medicare Part B** unless the licensed clinician is physically present in the room actively directing and participating throughout the entire service. Modifiers `-CQ` and `-CO` apply **only** to licensed/certified **PTAs** and **OTAs**, never to students.

---

## 3. CY 2026 Therapy Thresholds & Modifier -KX

Section **50202** of the Bipartisan Budget Act of 2018 permanently repealed the former **Medicare** "therapy cap" and established an annual **statutory threshold** system linked to the **Medicare Economic Index** (MEI).

### CY 2026 Medicare Part B Threshold Amounts

| Threshold Category                         | 2026 Amount | Statutory Rule & Billing Requirement                                                                                                                                                     |
| :----------------------------------------- | :---------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **PT & SLP Combined Threshold**            | **$2,480**  | Once incurred Part B expenses exceed $2,480, **[[-KX]] must be appended** to all subsequent PT and SLP claims to attest to continued medical necessity.                                  |
| **OT Separate Threshold**                  | **$2,480**  | Monitored on an independent financial track; **[[-KX]] must be appended** once incurred OT expenses exceed $2,480.                                                                       |
| **Targeted Medical Review (MR) Threshold** | **$3,000**  | Fixed at **$3,000 through CY 2028**. Claims exceeding $3,000 do not face automatic denial, but are subject to targeted review by Supplemental Medical Review Contractors (SMRC) or MACs. |

### Attestation Function of Modifier -KX
- Appending **[[-KX]]** is a binding legal attestation that:
  1. The patient requires continuing, complex, skilled therapy services beyond the financial threshold.
  2. The medical record contains explicit, objective documentation supporting medical necessity and justification for exceeding the cap.
- **Automatic Claim Denial:** Claims submitted above $2,480 in cumulative allowable expenses without `-KX` are **automatically denied** by **Medicare** adjudication systems (**Remittance Advice Remark Code MA01 / Claim Adjustment Reason Code 119**).

---

## 4. Beneficiary Financial Liability Modifiers (ABN Rules)

When therapy services fail to meet **Medicare coverage criteria** or medical necessity guidelines, the provider must issue a valid **Advance Beneficiary Notice of Noncoverage (Form CMS-R-131)** prior to delivering care:

|  Modifier   | Regulatory Meaning                    | Impact on Claim & Liability                                                                                                                                                                                |
| :---------: | :------------------------------------ | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **[[-GA]]** | **Waiver of Liability / ABN on File** | Provider obtained a signed, valid ABN prior to treatment because service is expected to deny as not medically necessary (e.g., non-skilled maintenance). Medicare denies claim; patient is legally liable. |
| **[[-GX]]** | **Notice of Voluntary ABN Issued**    | ABN issued voluntarily for services that are statutorily excluded from Medicare benefits.                                                                                                                  |
| **[[-GY]]** | **Statutory Exclusion**               | Service is statutorily non-covered by Medicare (not a covered benefit under Title XVIII). Claim denies; patient is liable even without an ABN.                                                             |
| **[[-GZ]]** | **No ABN on File (Expected Denial)**  | Service expected to deny as not medically necessary, but **no ABN was obtained**. Claim is denied, and provider **cannot balance-bill the patient** (provider writes off balance).                         |

---

## 5. CMS "Always Therapy" vs. "Sometimes Therapy" Codes

*CMS categorizes physical medicine and rehabilitation codes to govern modifier requirements (CMS IOM Pub. 100-04, Ch. 5, §20.1):*

### "Always Therapy" Codes
- Must **always** have a therapy discipline modifier (`-GP`, `-GO`, or `-GN`) appended on every claim line, regardless of whether furnished by a therapist, physician, or NPP.
- Subject to the **[[The 8 Minute Rule|8-Minute Rule]] (timed units)** and the therapy financial threshold.
- **Common Examples:**
  - Evaluations / Re-evaluations: **[[97161]], [[97162]], [[97163]], [[97164]] (PT); 97165, 97166, 97167, 97168 (OT)**
  - Timed Procedures: **[[97110]]** (Therapeutic Exercise), **[[97112]]** (Neuromuscular Re-education), **[[97116]]** (Gait Training), 97140 (Manual Therapy), **[[97530]]** (Therapeutic Activities), **97535** (Self-Care / ADL)
  - Speech Services: **[[92507]]** (Speech/Language Treatment), **92526** (Swallowing Therapy), **97129** / **97130** (Cognitive Intervention)

### "Sometimes Therapy" Codes
- Codes that are physical medicine procedures but can be provided either under a certified therapy plan of care or outside of one (**e.g., by a physician acting as a physician**).
- **If furnished under a therapy plan of care:** Must be appended with `-GP`, `-GO`, or `-GN`.
- **If furnished outside a therapy plan of care by a physician:** Billed **without** a therapy discipline modifier (not counted against the therapy threshold).
- **Common Examples:**
  - Active wound care management: **[[97597]]**, **[[97598]]**, **[[97602]]**
  - Orthotic / prosthetic management: **[[97760]]**, **[[97761]]**, **[[97763]]**
  - Strapping / casting: **[[29105]]**, **[[29125]]**, **[[29540]]**

---

## 6. Modifier Sequencing & Multi-Modifier Positioning

**CMS-1500** (Item 24D) and **electronic 837P/837I transactions** allow up to four modifiers per line item. Sequence therapy modifiers logically to avoid processing errors:

```
Claim Line Multi-Modifier Sequencing Structure:
[CPT/HCPCS Code] ➔ [Position 1: Primary Discipline (-GP/-GO/-GN)]
                 ➔ [Position 2: Assistant Differential (-CQ/-CO, if PTA/OTA >10%)]
                 ➔ [Position 3: Threshold Attestation (-KX, if >$2,480)]
                 ➔ [Position 4: NCCI Distinct Service (-59/-XS) or Liability (-GA)]
```

### Claim Scenarios & Reporting Syntax

| Clinical & Billing Scenario | Proper Coding & Modifier Structure |
| :--- | :--- |
| **Standard PT Visit (Under Threshold)** | `97110-GP` (Therapeutic exercise delivered directly by PT) |
| **Standard OT Visit (Under Threshold)** | `97530-GO` (Therapeutic activity delivered directly by OT) |
| **Standard SLP Treatment** | `92507-GN` (Speech/language therapy delivered by SLP) |
| **PTA Providing Services (>10% Time)** | `97110-GP-CQ` (PT plan of care; PTA-delivered $\rightarrow$ 85% reimbursement) |
| **OTA Providing Services (>10% Time)** | `97535-GO-CO` (OT plan of care; OTA-delivered $\rightarrow$ 85% reimbursement) |
| **Threshold Exceeded (PT Direct)** | `97116-GP-KX` (Gait training; expenses >$2,480; medical necessity certified) |
| **Threshold Exceeded (PTA Delivered)** | `97110-GP-CQ-KX` (PTA-delivered service exceeding statutory threshold) |
| **Same-Day PT & OT on Same Patient** | Line 1: `97110-GP` (PT)<br>Line 2: `97530-GO` (OT) |
| **NCCI Mutually Exclusive Pair (Distinct Body Part)** | `97140-GP` (Manual therapy, cervical) + `97530-GP-59` or `-XS` (Separate limb/site) |
| **Maintenance Therapy (Non-Skilled, ABN Signed)** | `97110-GP-GA` (Patient liable upon Medicare medical necessity denial) |

---

## 7. Clinical Documentation Requirements

Under CMS Benefit Policy Manual Chapter 15, §220, documentation must substantiate each appended modifier:

1. **Certified Plan of Care (POC):**
   - Established before treatment begins; signed and dated by the qualified therapist.
   - Certified (physician/NPP signature) within **30 calendar days** of initial evaluation.
   - Recertification required at least every **90 calendar days** or when significant changes occur.
2. **Discipline-Specific Clinical Justification:**
   - Clearly delineate physical therapy vs. occupational therapy vs. speech therapy goals.
   - Objective baseline measurements, measurable functional goals, and documented skilled interventions (preventing duplicate billing between concurrent PT and OT).
3. **Timed Minutes Record ([[The 8 Minute Rule]]):**
   - Document both **Total Timed Treatment Minutes** and **Total Overall Session Time**.
   - Clear documentation of who provided each minute of service (PT vs. PTA) to substantiate `-CQ` / `-CO` application.
1. **-KX Modifier Justification:**
   - Explicit clinical notes outlining why the patient requires skilled care beyond the $2,480 threshold (e.g., post-operative complexity, high fall risk, severe neurological deficit, multi-trauma).

---

## 8. Compliance Warnings & Audit Pitfalls

> [!DANGER] Critical PM&R Audit Triggers
> 1. **Cross-Discipline Mismatch:** Billing OT codes with `-GP` or PT codes with `-GO`. Never apply `-GP` to OT or SLP plan of care lines.
> 2. **Omission of -GP/-GO/-GN on Evaluation Codes:** Many practices mistakenly believe modifiers only apply to treatment codes. Omission of `-GP` on **[[97161]]–[[97163]]** results in automatic front-end claim rejections.
> 3. **Failure to Report -CQ / -CO:** Failing to report **PTA/OTA modifiers** when assistants perform $>10\%$ of care constitutes improper billing and false claims exposure under the MPFS 15% payment differential.
> 4. **Inappropriate Code Selection (e.g., 97110 with -GN):** Billing CPT `97110-GN` (**Therapeutic exercise by an SLP**) is an audit trigger. **SLPs** must bill speech/language/cognitive/swallowing **CPT** codes within their statutory scope of practice (**e.g., [[92507]], [[92526]], [[97129]]**).
> 5. **Routine KX Appending:** Appending `-KX` as an automated billing rule without verifying whether the threshold has been reached or without clinical justification documented in the chart constitutes **fraudulent [[attestation]]**.

---

## 🔗 Related References & Vault Notes

- **Clinical MOC & specialty guides:**
  - [[00 PM&R Coding MOC]]
  - [[CMS Medicare Guidelines]]
  - [[The 8 Minute Rule]]
  - [[Medical Necessity in Rehab]]
- **Individual Modifier Files:**
  - [[-GP]] — Services under PT plan of care
  - [[-GO]] — Services under OT plan of care
  - [[-GN]] — Services under SLP plan of care
  - [[-CQ]] — Services by PTA (15% reduction)
  - [[-CO]] — Services by OTA (15% reduction)
  - [[-KX]] — Medical policy requirements met (Therapy threshold)
  - [[50 Medical Coding/Modifiers/Modifiers]]

---
<small>Regulatory citations: CMS IOM Pub. 100-04, Ch. 5; CMS IOM Pub. 100-02, Ch. 15, §§220-230; 42 CFR §414.64; CMS Calendar Year 2026 Medicare Physician Fee Schedule (MPFS) Final Rule. Verify local MAC LCD policies for jurisdiction-specific medical necessity criteria.</small>
