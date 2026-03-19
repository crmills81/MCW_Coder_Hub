---
tags:
  - modifier
  - hcpcs
  - anesthesia
  - medical-supervision
  - anesthesiologist
  - concurrent
aliases:
  - AD
  - Modifier -AD
  - Modifier AD
  - -AD
descriptor: Medical supervision by a physician; more than four concurrent anesthesia procedures
code: -AD
code_type: HCPCS Level II Modifier
category: Anesthesia Modifiers
global_period: Follows Primary Procedure
wRVU: N/A (Adjusts Primary Procedure)
peRVU: N/A
mpRVU: N/A
total_RVU: N/A
assistant_surgeon_payable: N/A (Anesthesia Supervision)
ncci_modifier_indicator: N/A (Applied to Anesthesia Code)
separate_procedure: false
ms_drg_primary: Follows Primary Procedure
last_updated: 2026-03-14
---

# ⚕️ Modifier AD - Medical Supervision by a Physician; More Than Four Concurrent Anesthesia Procedures

> [!INFO] Quick Reference
> **Descriptor**: Medical supervision by a physician; more than four concurrent **anesthesia** procedures <sup>1</sup>  
> **Global Period**: Follows the primary **anesthesia** procedure code <sup>2</sup>  
> **Provider Type**: **Anesthesiologist** (**MD/DO**) supervising >4 concurrent procedures <sup>3</sup>  
> **Reimbursement**: Medicare pays based on medical supervision rates (**typically reduced compared to direction**) <sup>4</sup>  
> **NCCI Status**: Subject to medical supervision rules (**Tefra regulations**) <sup>5</sup>  
> **Approach**: Appended to Anesthesia CPT® codes (00100-01999)

---

## 📋 Code Description & Clinical Context

**Modifier [[-AD]]** is a **HCPCS Level II** modifier used to identify when an **anesthesiologist** is medically supervising **more than four concurrent anesthesia procedures** <sup>1</sup>. This modifier indicates a level of oversight that exceeds the standard medical direction limits (**which cap at four concurrent procedures under Tefra regulations**). It is used when the anesthesiologist is responsible for more than four cases simultaneously, often in large surgical centers or trauma situations <sup>3</sup>.

**Key Usage Indications**:
- An **anesthesiologist** is medically supervising more than four concurrent **anesthesia** procedures
- The **anesthesiologist** is not personally performing the anesthesia
- The relationship exceeds the standard medical direction cap (**-QK/-QY**)
- Documentation supports the medical supervision relationship

> [!NOTE] Medical Supervision vs. Direction
> Medical **direction** (modifiers [[-QY]], [[-QK]]) is limited to four concurrent procedures. Medical **supervision** (modifier [[AD]]) applies when the number exceeds four. Reimbursement rates and requirements differ significantly between direction and supervision <sup>6</sup>.

---

## 🌲 Code Hierarchy / Context

```
HCPCS Level II Modifiers
└─ Anesthesia Modifiers
   ├─ -AA Anesthesia services performed personally by anesthesiologist
   ├─ -QK Medical direction of two, three, or four CRNAs
   ├─ -QY Anesthesiologist directing one certified registered nurse anesthetist
   ├─ -AD Medical supervision by a physician; more than four concurrent anesthesia procedures ← THIS CODE
   └─ -QZ CRNA service without medical direction by a physician
```

**Parent Category**: Anesthesia Modifiers <sup>7</sup>  
**Related Modifiers**: [[-AA]], [[-QK]], [[-QY]], [[-QX]], [[-QZ]]  
**Primary Code Dependency**: Must be appended to a valid Anesthesia CPT® code (e.g., [[00100]], [[00300]])

---

## 💰 Reimbursement & Valuation

| Component | Rate | Notes |
|-----------|------|-------|
| **Base Rate** | 100% | Based on the allowed amount for the Anesthesia CPT® code <sup>4</sup> |
| **Supervision Rate** | Varies | Typically reduced compared to medical direction rates <sup>4</sup> |
| **Concurrency Limit** | >4 Cases | Defines the threshold for using [[AD]] vs [[-QK]] <sup>6</sup> |
| **Final [[AD]] Rate** | **Varies** | Depends on payer policy for supervision >4 cases <sup>4</sup> |
| **Global Period** | Same as Primary | Anesthesia services are paid per unit/time; no global period in surgical sense <sup>2</sup> |

**Assistant Surgeon Payable**: N/A (Anesthesia Supervision)  
- Medicare Status Indicator: Depends on primary anesthesia code coverage <sup>7</sup>
- If medical supervision requirements are not met, reimbursement may be denied
- Commercial payers may have specific contracts for supervision >4 cases

**Medicare Payment Estimate**: Varies by anesthesia base units + time units × Conversion Factor × Supervision Rate <sup>4</sup>

---

## 🚫 Includes / Excludes & NCCI Guidance

### ✅ Includes
- Medical supervision of more than four concurrent anesthesia procedures
- Oversight of CRNAs or Anesthesiologists in training
- Availability for emergencies across multiple ORs
- Post-operative care oversight

### ❌ Excludes / Bundled Per NCCI
- Medical direction of 1-4 procedures (use [[-QY]] or [[-QK]]) <sup>3</sup>
- Personal performance of anesthesia (use [[-AA]]) <sup>3</sup>
- Services not meeting medical supervision criteria (may be denied) <sup>6</sup>
- CRNA services without physician involvement (CRNA uses [[QZ]]) <sup>3</sup>

> [!IMPORTANT] Tefra Regulations Critical Note
> Modifier [[AD]] indicates supervision beyond the standard Tefra limit of four concurrent procedures. Some payers may not reimburse for supervision beyond four cases, or may require additional documentation justifying the need for such concurrency <sup>6</sup>.

---

## 🏥 MS-DRG Assignment (Inpatient Facility)

Modifier [[AD]] does not directly impact MS-DRG assignment, as DRGs are based on the primary surgical procedure and diagnoses. It affects physician reimbursement under Medicare Part B.

| Scenario | Impact | Description |
|----------|--------|-------------|
| Anesthesia medically supervised (>4) | Payment Allowed | Anesthesiologist paid supervision rate <sup>4</sup> |
| Anesthesia medically directed (1-4) | Payment Allowed | Anesthesiologist bills [[QY]] or [[QK]] <sup>4</sup> |
| Inpatient Status | Part B Billing | Anesthesia services billed on CMS-1500/837P <sup>8</sup> |

> [!Note] 
> Facility reimbursement (**Part A**) is not affected by modifier [[AD]]; this modifier is for professional fee billing only <sup>8</sup>.

---

## 🏷️ Common ICD-10-CM Diagnosis Codes

*Modifier [[AD]] does not change diagnosis coding requirements. Diagnosis codes must support the medical necessity of the **primary surgical procedure** and anesthesia.*

### Primary Diagnosis Options (Dependent on Procedure)
| ICD-10-CM Code | Description | HCC Status* |
|----------------|-------------|-------------|
| [[K80.20]] | Calculus of gallbladder without cholecystitis | ❌ Not HCC |
| [[M17.11]] | Unilateral primary osteoarthritis, right knee | ❌ Not HCC |
| [[C67.9]] | Malignant neoplasm of bladder | ✅ HCC (Cancer) |
| [[Z40.01]] | Encounter for prophylactic surgery for malignant neoplasm | ✅ HCC (History of Cancer) |
| [[I10]] | Essential (primary) hypertension | ✅ HCC (Cardiovascular) |

\* *HCC Status*: Hierarchical Condition Category mapping for Medicare Advantage risk adjustment. Diagnosis codes determine HCC status, not the modifier. Modifier [[AD]] has no impact on risk adjustment scores <sup>9</sup><sup>10</sup>.

### Supporting/Comorbid Codes (Document When Applicable)
- [[N18.30]] Chronic kidney disease, stage 3 unspecified (HCC applicable)
- [[E11.9]] Type 2 diabetes mellitus without complications (HCC applicable)
- [[J44.9]] Chronic obstructive pulmonary disease, unspecified (HCC applicable)

---

## ✏️ Modifiers Guidance

| Modifier | Use Case for [[AD]] | Payable? |
|----------|------------------------|----------|
| [[AA]] | Anesthesia performed personally by anesthesiologist | ❌ Do not use with [[AD]] |
| [[QK]] | Medical direction of 2-4 CRNAs | ❌ Do not use with [[AD]] |
| [[QY]] | Anesthesiologist directing one CRNA | ❌ Do not use with [[AD]] |
| [[QX]] | CRNA service with medical direction | ⚠️ CRNA may use [[QX]] or [[QZ]] depending on relationship |
| [[QZ]] | CRNA service without medical direction | ✅ May be used by CRNA if supervision exceeds direction limits |
| [[47]] | Anesthesia by Surgeon | ❌ Mutually exclusive |
| [[23]] | Unusual Anesthesia | ✅ Can be used with [[AD]] if unusual circumstances exist |

> [!CAUTION] Modifier [[AD]] vs [[QK]]
> Do not use modifier [[AD]] if the anesthesiologist is directing four or fewer CRNAs. Use [[QK]] for 2-4 CRNAs. [[AD]] is strictly for >4 concurrent procedures <sup>3</sup>.

---

## 📝 Coding Examples

### ✅ Example 1: Anesthesiologist Supervising Five Cases
> **Scenario**: Anesthesiologist medically supervises five concurrent anesthesia cases in a high-volume ASC.  
> **Report**:  
> - Anesthesiologist: [[00402]]-[[AD]] (for each case)  
> - Diagnosis: [[M17.11]]  
> **Rationale**: >4 concurrent procedures; correct modifier for supervision <sup>11</sup>.

### ❌ Example 2: Anesthesiologist Directing Three CRNAs
> **Scenario**: Anesthesiologist directs three CRNAs. Bills [[AD]].  
> **Report**: [[00402]]-[[AD]]  
> **Rationale**: **Incorrect**. For 2-4 CRNAs, modifier [[QK]] must be used. [[AD]] is for >4 cases <sup>3</sup>.

### ⚠️ Example 3: Personal Performance
> **Scenario**: Anesthesiologist performs all anesthesia services personally. Bills [[AD]].  
> **Report**: [[00402]]-[[AD]]  
> **Rationale**: **Incorrect**. If personally performed, modifier [[AA]] should be used for 100% reimbursement <sup>3</sup>.

### ✅ Example 4: Unusual Anesthesia with Supervision
> **Scenario**: Patient has severe cardiac disease. Anesthesiologist supervises >4 cases including this one.  
> **Report**:  
> - Anesthesiologist: [[00402]]-[[AD]]-[[23]]  
> - Diagnosis: [[I10]], [[M17.11]]  
> **Rationale**: Modifier [[23]] indicates unusual anesthesia; [[AD]] indicates supervision relationship <sup>11</sup>.

---

## 🔍 Documentation Essentials for Support

To support modifier [[AD]] and mitigate audit risk, anesthesia documentation should include:

1. **Concurrency Count**: Document the number of concurrent procedures being supervised (must be >4) <sup>6</sup>.
2. **Supervision Tasks**: Document oversight activities (availability, monitoring, post-op care).
3. **Availability**: Anesthesiologist must be available for emergencies across all cases.
4. **Signatures**: Anesthesiologist must sign the anesthesia record.
5. **Time**: Document start and stop times for anesthesia care.
6. **Justification**: Some payers may require justification for >4 concurrent cases.

> [!TIP] Medical Record Language
> Ensure the anesthesia record states: "Anesthesiologist medically supervised more than four concurrent anesthesia procedures. Available for emergencies. Monitored cases throughout procedure."

---

## ⚠️ Common Pitfalls & Audit Risks

| Pitfall | Consequence | Prevention |
|---------|-------------|------------|
| Using [[AD]] for ≤4 CRNAs | Claim denial or recoupment | Use [[QK]] for 2-4 CRNAs <sup>3</sup> |
| Failing to meet supervision criteria | Payment denial | Ensure supervision requirements are documented <sup>6</sup> |
| Using [[AD]] for personal performance | Underpayment | Use [[AA]] if anesthesiologist performs all services <sup>3</sup> |
| Inadequate concurrency documentation | Audit failure | Document exact number of concurrent cases <sup>11</sup> |
| Inadequate time documentation | Payment reduction | Document exact anesthesia time units <sup>11</sup> |

---

## 🔗 Related Codes & Crosswalks

| Code Type | Code | Relationship to [[AD]] |
|-----------|------|---------------------------|
| HCPCS Modifier | [[AA]] | Anesthesia services performed personally by anesthesiologist |
| HCPCS Modifier | [[QK]] | Medical direction of two, three, or four CRNAs |
| HCPCS Modifier | [[QY]] | Anesthesiologist directing one certified registered nurse anesthetist |
| HCPCS Modifier | [[QX]] | CRNA service with medical direction by a physician |
| HCPCS Modifier | [[QZ]] | CRNA service without medical direction by a physician |
| CPT® | [[00100]]-[[01999]] | Anesthesia Procedure Codes |
| CMS Form | CMS-1500 | Professional claim form where [[AD]] is reported |

---

<sup>1</sup> CMS HCPCS Level II Modifier Definitions  
<sup>2</sup> CMS Global Surgery Factsheet  
<sup>3</sup> Medicare Claims Processing Manual Ch. 12  
<sup>4</sup> CMS Medicare Physician Fee Schedule 2024  
<sup>5</sup> CMS NCCI Policy Manual 2024  
<sup>6</sup> CMS Tefra Regulations Guidance  
<sup>7</sup> NIH VSAC HCPCS Hierarchy  
<sup>8</sup> Medicare Claims Processing Manual Ch. 1  
<sup>9</sup> CMS-HCC Model V28 Documentation  
<sup>10</sup> Find-A-Code HCC Mapping Tool  
<sup>11</sup> AAPC Coding Modifier Guidelines  
<sup>12</sup> ASA Guidelines for Medical Direction