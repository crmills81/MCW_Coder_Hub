---
tags:
  - ipps
  - inpatient
  - reimbursement
  - cms
  - drg
  - payment-methodology
  - coding-fundamentals
title: IPPS Payment Overview - Inpatient Prospective Payment System
aliases:
  - IPPS
  - Inpatient Prospective Payment System
  - Medicare Inpatient Payment
specialty: All Inpatient
code_type: Payment Methodology
system: CMS IPPS
version_current: FY2025
updated: 2025-05-05
related_systems:
  - MS-DRG
  - ICD-10-CM
  - ICD-10-PCS
  - MDC
  - CC-MCC
  - UHDDS
  - HAC
  - POA
status: complete
---

# 💵 IPPS Payment Overview - Inpatient Prospective Payment System

> [!abstract] One-Line Definition
> The **Inpatient Prospective Payment System (IPPS)** is the CMS payment model under which Medicare pays acute care hospitals a **fixed, predetermined amount** per inpatient stay based on the assigned MS-DRG — regardless of the hospital's actual costs for that case.

---

## 📌 Why This Matters to Coders

Every ICD-10-CM and ICD-10-PCS code you assign feeds directly into IPPS payment logic. IPPS is not just a billing concept — it is the framework that makes your coding decisions real money. Missed MCCs, wrong principal diagnosis sequencing, or incomplete PCS coding doesn't just affect the DRG number; it affects whether the hospital is paid accurately for the resources actually consumed.

> [!important] Core Principle
> IPPS pays for the **episode** — not individual services. One DRG payment is intended to cover everything from admission through discharge: nursing, labs, imaging, pharmacy, therapy, and OR time. Accurate coding is the only mechanism the hospital has to ensure that one bundled payment reflects actual clinical complexity.

---

## 🗂️ Section Index

1. [[#📖 Background & Legislative Authority]]
2. [[#🏗️ How IPPS Payment Is Calculated]]
3. [[#🏦 Hospital-Specific Rate Components]]
4. [[#📐 Relative Weights and Their Impact]]
5. [[#📊 Payment Adjustments and Add-Ons]]
6. [[#🚨 Penalty Programs Under IPPS]]
7. [[#📅 IPPS Annual Update Cycle]]
8. [[#🔁 IPPS vs Other CMS Payment Systems]]
9. [[#🛠️ Practical Implications for Coders]]
10. [[#📚 References & Resources]]

---

## 📖 Background & Legislative Authority

### Origins

IPPS was established by **Congress under the Social Security Amendments of 1983 (Public Law 98-21)** and took effect **October 1, 1983**. It replaced retrospective cost-based reimbursement, where Medicare simply paid hospitals whatever they reported spending on a patient. That system created zero incentive for efficiency and contributed to rapid Medicare expenditure growth in the 1970s.

Under IPPS, hospitals shifted from "bill what you spent" to "receive what CMS says the case is worth." This was a seismic change — hospitals that treated patients efficiently kept the surplus; hospitals that ran over the DRG payment absorbed the loss. The DRG system developed at Yale became the classification engine that made IPPS possible.

### Legal Framework

| Authority              | Description                                                                    |
| ---------------------- | ------------------------------------------------------------------------------ |
| **42 U.S.C. § 1395ww**     | Core statutory authority for Medicare inpatient hospital payment               |
| **42 CFR Part 412**        | CMS regulations governing IPPS implementation                                  |
| **Annual IPPS Final Rule** | Federal Register publication updating rates, DRG weights, and policies each FY |
| **CMS Transmittals**       | Sub-regulatory guidance on specific payment policy updates                     |

> [!note] Fiscal Year vs Calendar Year
> IPPS updates on **October 1** of each year (federal fiscal year). ICD-10-CM/PCS updates also take effect October 1. This alignment is intentional — new codes, new DRG weights, and new payment policies all go live simultaneously.

---

## 🏗️ How IPPS Payment Is Calculated

The IPPS payment formula is a multiplication of two components:

$$\text{IPPS Payment} = \text{DRG Relative Weight} \times \text{Hospital-Adjusted Base Rate}$$

The hospital-adjusted base rate is itself a composite:

$$\text{Hospital Base Rate} = \text{Standard Federal Rate} \times \text{Wage Index Adjustment} + \text{DSH} + \text{IME} + \text{Other Add-Ons}$$

---

### Step-by-Step Payment Logic


```
STEP 1: ICD-10-CM and ICD-10-PCS codes are submitted on UB-04 claim  
↓  
STEP 2: DRG grouper assigns MS-DRG based on PDx, procedures, CCs/MCCs, age, discharge status  
↓  
STEP 3: CMS retrieves the DRG Relative Weight for the assigned DRG  
↓  
STEP 4: Multiply RW × Hospital-Adjusted Base Rate  
↓  
STEP 5: Apply payment adjustments (outlier, transfer, HAC reduction, readmission penalty)  
↓  
STEP 6: Final payment issued (typically 14-day cycle for clean claims)
```

> [!warning] The Grouper Does Not Maximize — It Classifies
> The grouper assigns the DRG that matches the coded data, not the DRG with the highest payment. Only accurate and complete coding produces the appropriate DRG. Neither the grouper nor the payer corrects for missing codes.

---

## 🏦 Hospital-Specific Rate Components

The **standardized federal rate** is published by CMS annually. But hospitals do not all receive the same base rate — it is adjusted by several hospital-specific factors.

### Component Breakdown

| Component | What It Reflects | Who Gets It |
|-----------|-----------------|-------------|
| **Labor portion** (~68%) | Adjusted by local wage index (Core-Based Statistical Area) | All hospitals; higher in high-wage markets |
| **Non-labor portion** (~32%) | Fixed; same for all hospitals in a geographic class | All hospitals |
| **Disproportionate Share (DSH)** | Add-on for hospitals serving high % of low-income patients | DSH-qualifying hospitals |
| **Indirect Medical Education (IME)** | Add-on for teaching hospitals based on intern/resident-to-bed ratio | Teaching hospitals only |
| **Low-Volume Adjustment** | Add-on for small, rural hospitals with low Medicare volume | Qualifying rural hospitals |
| **Rural SCH/MDH status** | Sole community hospitals / Medicare-dependent hospitals receive special rates | Rural safety-net hospitals |

> [!tip] Teaching Hospital Impact
> A hospital with a high IME ratio (many residents per bed) may receive an effective base rate **30-50% higher** than a community hospital for the same DRG. This means that academic medical centers are compensated for the greater resource intensity associated with training programs and complex case referrals.

### Wage Index

The wage index is recalibrated annually using the **Occupational Mix Survey** and **Core-Based Statistical Area (CBSA)** data. A hospital in a high-wage area (e.g., San Francisco) receives a higher labor portion adjustment than a rural hospital in a low-wage area, reflecting the actual cost of employing clinical staff.

---

## 📐 Relative Weights and Their Impact

The **DRG Relative Weight (RW)** is the single most important number in IPPS payment calculations from a coding standpoint.

### What Relative Weight Means

- RW **1.0000** = the theoretical average-resource case across all Medicare inpatients
- RW **2.5000** = this DRG consumes 2.5× the average resources
- RW **0.5000** = this DRG consumes half the average resources
- CMS recalibrates all relative weights **annually** using hospital cost report data

### Relative Weight Examples (FY2025 Approximate)

| DRG | Description                                       | Approx RW |
| --- | ------------------------------------------------- | --------- |
| **003** | ECMO or tracheostomy w/ MV 96+ hrs                | 18.0+     |
| **001** | Heart transplant w/ MCC                           | 26.5+     |
| **682** | Renal failure w/ MCC                              | 1.85      |
| **683** | Renal failure w/ CC                               | 1.10      |
| **684** | Renal failure w/o CC/MCC                          | 0.72      |
| **291** | HF & shock w/ MCC                                 | 1.75      |
| **470** | Major joint replacement lower extremity w/o MCC   | 2.05      |
| **853** | Infectious & parasitic diseases w/ OR proc w/ MCC | 5.90      |
| **116** | Other disorders of the eye w/ MCC                 | 1.10      |
| **596** | Male reproductive malignancy w/ CC/MCC            | 1.45      |

> [!important] Every 0.1 RW Unit = Real Dollars
> At a $6,000 hospital base rate, 0.1 RW = **$600**. The difference between DRG 682 (RW 1.85) and DRG 684 (RW 0.72) is **1.13 RW units = ~$6,780** — representing a single appropriately documented secondary diagnosis like AKI [[N17.9]]. Multiply that across hundreds of cases per year.

---

## 📊 Payment Adjustments and Add-Ons

The calculated DRG payment is not always final. Several adjustments can increase or decrease the actual amount paid.

### Outlier Payments (Upward)

When the **cost of a case significantly exceeds** the DRG payment, CMS provides additional "outlier" payments.

- **Threshold**: The hospital's charges must exceed the DRG payment + a fixed-loss amount (updated annually; ~$38,788 in FY2025)
- **Payment**: CMS pays 80% of costs above the threshold
- **Purpose**: Protects hospitals from catastrophic financial loss on extremely complex cases

> [!note] Charges vs Costs
> Outlier calculations use **charges**, not costs. CMS applies a hospital-specific cost-to-charge ratio to convert billed charges into estimated costs before calculating outlier eligibility.

### Short-Stay / Transfer Adjustments (Downward)

When a patient is discharged early or **transferred to another acute care hospital** before reaching the geometric mean LOS for the DRG:

- Per diem payment method applies: hospital receives a daily rate, not the full DRG payment
- The **receiving hospital** gets the full DRG payment at discharge
- Transfer to **post-acute care** (SNF, IRF, LTCH, home health) under certain DRGs also triggers per diem adjustment

### Post-Acute Care Transfer (PACT) Policy

CMS has designated specific DRGs where **transfer to post-acute care** (not just another acute hospital) triggers per diem adjustment. These are typically DRGs for conditions where home health or SNF admission shortly after discharge is common.

| Transfer Destination           | Payment Rule                  |
| ------------------------------ | ----------------------------- |
| **Another IPPS hospital**          | Per diem (capped at full DRG) |
| **Long-Term Care Hospital (LTCH)** | Per diem; special rules apply |
| **Skilled Nursing Facility (SNF)** | Per diem under PACT DRGs      |
| **Inpatient Rehab Facility (IRF)** | Per diem under PACT DRGs      |
| **Home Health Agency**             | Per diem under PACT DRGs      |
| **Home without service**           | Full DRG payment              |

---

## 🚨 Penalty Programs Under IPPS

CMS has layered several **value-based penalty programs** onto IPPS. These do not change individual claim payment but affect **aggregate hospital payment adjustments**.

### Hospital-Acquired Condition (HAC) Reduction Program

- Hospitals in the **worst-performing quartile** for HAC rates receive a **1% reduction** to all their IPPS payments for the entire fiscal year
- HACs also affect individual claims: a secondary diagnosis flagged as hospital-acquired (POA = "N") that appears on the HAC list **cannot serve as a CC or MCC**
- See [[HAC_List]] for the current HAC conditions

### Hospital Readmissions Reduction Program (HRRP)

- CMS compares each hospital's **excess readmission ratio** for target conditions against national averages
- Target conditions include: AMI, HF, pneumonia, COPD, CABG, THA/TKA, ESRD dialysis
- Penalty: Up to **3% reduction** in all IPPS base operating payments
- CDI and coder impact: Accurate comorbidity capture helps stratify risk adjustment, as CMS adjusts readmission rates for patient complexity

### Hospital Value-Based Purchasing (VBP) Program

- Adjusts IPPS payments (up or down) based on **quality and patient experience scores**
- Funded by a 2% withhold from all IPPS payments; hospitals earn back varying amounts based on performance
- Net effect for poor performers: additional payment reduction layered on top of HAC and HRRP penalties

> [!warning] Penalty Stacking
> A hospital in the worst quartile for HACs, with excess readmissions, and poor VBP scores can face cumulative payment reductions exceeding **5-6% of base IPPS payments**. This makes CDI, accurate POA assignment, and complete comorbidity capture not just a revenue issue — it is a hospital financial survival issue.

---

## 📅 IPPS Annual Update Cycle

| Timeline | Event |
|----------|-------|
| **January-March** | CMS publishes proposed IPPS rule (Federal Register) |
| **March-May** | Public comment period; hospitals and associations submit comments |
| **August** | CMS publishes Final IPPS Rule |
| **October 1** | New rates, DRG weights, and policies take effect (start of federal fiscal year) |
| **October 1** | ICD-10-CM/PCS code updates also effective (align with IPPS) |

> [!tip] Review the Final Rule Every Year
> Key changes to track annually: new DRG additions or deletions, relative weight changes, changes to the CC/MCC list, new HAC additions, changes to the CC Exclusion List, and wage index recalibration. The CMS IPPS page at **cms.gov/Medicare/Medicare-Fee-for-Service-Payment/AcuteInpatientPPS** posts the Final Rule tables in downloadable Excel format.

---

## 🔁 IPPS vs Other CMS Payment Systems

Not all inpatient settings use IPPS. Knowing which system applies is critical for coders who work across facility types.

| Payment System | Applies To | Classification Tool | Updates |
|---------------|-----------|---------------------|---------|
| **IPPS / MS-DRG** | Acute care hospitals (Medicare) | MS-DRG grouper | October 1 |
| **IRF-PPS** | Inpatient Rehabilitation Facilities | CMG (Case Mix Groups) | October 1 |
| **LTCH-PPS** | Long-Term Care Hospitals (avg LOS >25 days) | MS-LTC-DRG | October 1 |
| **IPF-PPS** | Inpatient Psychiatric Facilities | Per diem + patient-day adjustments | October 1 |
| **SNF-PPS** | Skilled Nursing Facilities | PDPM (Patient-Driven Payment Model) | October 1 |
| **OPPS** | Hospital Outpatient Departments | APC (Ambulatory Payment Classifications) | January 1 |
| **MPFS** | Physician / Professional services | RVU-based | January 1 |

> [!note] IPPS ≠ All Hospital Inpatient
> Critical access hospitals (CAHs), IRFs, LTCHs, and IPFs are **excluded from IPPS** and have their own payment systems. If you are coding for a CAH, the hospital is paid based on reasonable costs, not DRGs. Always confirm what payment system your facility operates under.

---

## 🛠️ Practical Implications for Coders

### How Coding Decisions Directly Affect IPPS Payment

| Coding Action                                  | IPPS Impact                                      |
| ---------------------------------------------- | ------------------------------------------------ |
| **Correct principal diagnosis selection**          | Determines MDC and DRG pathway                   |
| **Capturing all CCs and MCCs**                     | Moves DRG to higher-weighted tier                |
| **Complete ICD-10-PCS procedure coding**           | May qualify case for surgical DRG                |
| **Correct POA assignment**                         | Determines HAC trigger; protects CC/MCC validity |
| **Coding tracheostomy + MV ≥96 hrs**               | Triggers Pre-MDC DRG (RW 14-18+)                 |
| **Avoiding "urosepsis" — code sepsis**             | Captures MCC A41.xx vs low-value UTI code    |
| **Specificity in diagnosis codes**                 | Determines CC vs MCC vs Non-CC tier              |
| **Querying for AKI, malnutrition, encephalopathy** | Unlocks MCC opportunities via CDI                |

### Quick DRG Optimization Checklist

□ Principal diagnosis correctly selected per UHDDS / OGCR Section II?
□ All secondary diagnoses documented and codeable?
□ Each secondary dx checked against CC/MCC list?
□ CC Exclusion List reviewed for each secondary dx vs PDx?
□ All ICD-10-PCS procedures coded (including incidental)?
□ OR procedure status verified for DRG surgical pathway?
□ POA indicators assigned to every secondary dx?
□ Tracheostomy / MV / transplant / ECMO — Pre-MDC screening done?
□ CDI query initiated if clinical indicators exceed documentation?
□ Final DRG run through grouper and reviewed against clinical complexity?



---

## 📚 References & Resources

| Resource                             | Description                                                | URL                                                                                           |
| ------------------------------------ | ---------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| **CMS Acute Inpatient PPS**              | Official IPPS landing page; Final Rules, grouper downloads | cms.gov/Medicare/Medicare-Fee-for-Service-Payment/AcuteInpatientPPS                           |
| **Federal Register IPPS Final Rule**     | Full regulatory text published annually                    | federalregister.gov                                                                           |
| **CMS ICD-10 MS-DRG Definitions Manual** | Official DRG logic documentation                           | cms.gov                                                                                       |
| **CMS HAC Reduction Program**            | Program overview and HAC list                              | cms.gov/Medicare/Medicare-Fee-for-Service-Payment/AcuteInpatientPPS/HAC-Reduction-Program     |
| **CMS HRRP**                             | Hospital Readmissions Reduction Program details            | cms.gov/Medicare/Quality-Initiatives-Patient-Assessment-Instruments/Value-Based-Programs/HRRP |
| **CMS VBP Program**                      | Value-Based Purchasing Program details                     | cms.gov                                                                                       |
| **AHIMA ICD-10-CM/PCS Coding Clinic**    | Official coding guidance publication                       | ahima.org                                                                                     |
| **AAPC CIC Study Guide**                 | Inpatient coding certification prep                        | aapc.com                                                                                      |

---

## 🔗 Related Notes

- [[MS-DRG Overview]] — Full MS-DRG classification system deep-dive
- [[CC-MCC Reference]] — CC and MCC designation tables by specialty
- [[UHDDS_Principal_Diagnosis]] — Principal diagnosis sequencing rules
- [[POA_Indicator_Guide]] — Present on admission assignment logic
- [[HAC_List]] — Hospital-acquired conditions affecting CC/MCC
- [[ICD-10-PCS_Overview]] — PCS structure and table navigation
- [[CDI Query Templates]] — Compliant query language library
- [[MDC 11 - Urology]] — MDC 11 DRG reference
- [[MDC 12 - Male Reproductive]] — MDC 12 DRG reference
- [[MDC 03 - ENT]] — MDC 03 DRG reference
- [[MDC 02 - Eye]] — MDC 02 DRG reference
- [[N17.9]] — Acute kidney injury (MCC)
- [[A41.9]] — Sepsis (MCC)
- [[G93.41]] — Metabolic encephalopathy (MCC)

---

*Note compiled for inpatient coding and CDI reference. IPPS rates and DRG weights update each October 1. Always verify against the current fiscal year CMS Final Rule tables.*