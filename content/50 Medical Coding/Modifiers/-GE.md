---
tags:
  - modifier
  - hcpcs
  - teaching-physician
  - resident
  - primary-care-exception
  - medicare
aliases:
  - GE
  - Modifier GE
  - modifier -ge
  - Modifier -GE
code: -GE
code_type: HCPCS Level II Modifier
descriptor: Resident provided service without the presence of a teaching physician under the primary care exception
category: Teaching Physician Modifiers
global_period: Follows Primary Procedure
wRVU: N/A (Adjusts Primary Procedure)
peRVU: N/A
mpRVU: N/A
total_RVU: N/A
assistant_surgeon_payable: N/A (Teaching Setting)
ncci_modifier_indicator: N/A (Applied to Primary Code)
separate_procedure: false
ms_drg_primary: Follows Primary Procedure
last_updated: 2026-03-14
---

# ⚕️ Modifier GE - Resident Provided Service Without the Presence of a Teaching Physician Under the Primary Care Exception

> [!INFO] Quick Reference
> **Descriptor**: Resident provided service without the presence of a **teaching physician** under the primary care exception <sup>1</sup>  
> **Global Period**: Follows the primary procedure code <sup>2</sup>  
> **Provider Type**: **Teaching Physician** billing for services performed by a resident under Primary Care Exception (**PCE**) <sup>3</sup>  
> **Reimbursement**: Medicare pays at 100% of the **Physician Fee Schedule** if **PCE** criteria are met <sup>4</sup>  
> **NCCI Status**: Subject to **Teaching Physician Guidelines** and **PCE** rules <sup>5</sup>  
> **Approach**: Appended to **Evaluation and Management (E/M)** CPT® codes

---

## 📋 Code Description & Clinical Context

**Modifier [[-GE]]** is a **HCPCS Level II** modifier used by a **teaching physician** to indicate that a service was performed by a **resident** without the physical presence of the teaching physician during the key portion(s) of the service, under the **Primary Care Exception (PCE)** <sup>1</sup>. This exception allows **teaching physicians** to bill for certain low-complexity services provided by residents in outpatient clinics without meeting the standard physical presence requirements, provided specific criteria are met <sup>3</sup>.

**Key Usage Indications**:
- Service is provided in an outpatient clinic setting (**hospital outpatient departments generally excluded**)
- Service is low complexity (typically **CPT**® [[99202]]-[[99213]])
- **Teaching physician** is immediately available to the resident during the service
- **Teaching physician** reviews the resident's note and provides documentation of participation
- Service does not involve critical care or high-risk procedures

> [!NOTE] Primary Care Exception (PCE) Specificity
> **Modifier [[-GE]]** is **exclusive** to the Primary Care Exception. If the teaching physician is present during the key portion(s) of the service, **modifier [[-GC]]** should be used instead. [[-GE]] signals that the physical presence requirement was waived under specific regulatory exceptions <sup>3</sup>.

---

## 🌲 Code Hierarchy / Context

```
HCPCS Level II Modifiers
└─ Payment Modifiers
   └─ Teaching Physician Modifiers
      ├─ -GC This service has been performed in part by a resident under the direction of a teaching physician
      ├─ -GE Resident provided service without the presence of a teaching physician under the primary care exception **← THIS CODE**
      ├─ -GR This service was performed in part by a resident in a department of veterans affairs medical center
      └─ -QX CRNA service with medical direction by a physician
```

**Parent Category**: Teaching Physician Modifiers <sup>6</sup>  
**Related Modifiers**: [[-GC]] (Standard Teaching Physician), **-GR** (**VA Medical Center**), [[-QX]] (Anesthesia Direction)  
**Primary Code Dependency**: Must be appended to a valid E/M CPT® code (e.g., [[99213]], [[50 Medical Coding/CPT Codes/99214]])

---

## 💰 Reimbursement & Valuation

| Component | Rate | Notes |
|-----------|------|-------|
| **Base Rate** | 100% | Based on the allowed amount for the E/M CPT® code <sup>4</sup> |
| **PCE Adjustment** | None | Payment is not reduced if PCE criteria are fully met <sup>4</sup> |
| **Non-Compliance** | Denial | If PCE criteria are not met, claim may be denied or recouped <sup>5</sup> |
| **Final [[-GE]] Rate** | **100%** | Of the total allowed physician fee schedule amount <sup>4</sup> |
| **Global Period** | Same as Primary | Follows the global days of the primary procedure (0, 10, or 90) <sup>2</sup> |

**Assistant Surgeon Payable**: N/A (**Teaching Setting**)  
- Medicare Status Indicator: Depends on primary E/M code coverage <sup>7</sup>
- If PCE requirements are not met, reimbursement may be denied
- Commercial payers may not recognize [[-GE]]; verify payer policy before billing

**Medicare Payment Estimate**: Varies by E/M level; calculated as Base Units × Conversion Factor <sup>4</sup>

---

## 🚫 Includes / Excludes & NCCI Guidance

### ✅ Includes
- Services performed by a resident in an outpatient clinic setting
- Low complexity E/M services (**typically [[99202]]-[[99213]]**)
- **Teaching physician** review and documentation of resident's note
- **Teaching physician** availability during the service
- Services where physical presence is waived under **PCE** rules

### ❌ Excludes / Bundled Per NCCI
- Services performed by the teaching physician personally (no modifier needed or use [[-GC]]) <sup>3</sup>
- High complexity E/M services (e.g., [[50 Medical Coding/CPT Codes/99214]], [[99215]]) generally do not qualify for PCE <sup>3</sup>
- Critical care services (e.g., [[99291]]) <sup>3</sup>
- Surgical procedures (PCE applies primarily to E/M) <sup>3</sup>
- Services in hospital outpatient departments (**PCE generally limited to clinics**) <sup>3</sup>

> [!IMPORTANT] Teaching Physician Guidelines Critical Note:
> **Modifier [[-GE]]** is governed by strict Medicare Teaching Physician Guidelines. If the teaching physician fails to document their participation (e.g., "*I reviewed the resident's note and agree with the plan*"), payment may be denied even if [[-GE]] is appended <sup>5</sup>.

---

## 🏥 MS-DRG Assignment (Inpatient Facility)

**Modifier [[GE]]** does not directly impact MS-DRG assignment, as DRGs are based on the primary procedure and diagnoses. It affects physician reimbursement under Medicare Part B.

| Scenario                  | Impact          | Description                                                     |
| ------------------------- | --------------- | --------------------------------------------------------------- |
| **Outpatient Clinic E/M** | Payment Allowed | **Teaching physician paid at 100% if PCE met <sup>4</sup>**         |
| **Inpatient Service**     | Not Applicable  | **PCE generally does not apply to inpatient services <sup>3</sup>** |
| **Inpatient Status**      | Part B Billing  | **Services billed on CMS-1500/837P <sup>8</sup>**                   |

>[!Note] 
>Facility reimbursement (**Part A**) is not affected by modifier [[-GE]]; this modifier is for professional fee billing only <sup>8</sup>.

---

## 🏷️ Common ICD-10-CM Diagnosis Codes

*Modifier [[-GE]] does not change diagnosis coding requirements. Diagnosis codes must support the medical necessity of the **E/M service**.*

### Primary Diagnosis Options (Dependent on Visit)
| ICD-10-CM Code | Description                                        | HCC Status*            |
| -------------- | -------------------------------------------------- | ---------------------- |
| **[[E11.9]]**      | Type 2 diabetes mellitus without complications     | ✅ HCC (Diabetes)       |
| **[[I10]]**        | Essential (**primary**) hypertension               | ✅ HCC (Cardiovascular) |
| **[[J44.9]]**      | Chronic obstructive pulmonary disease, unspecified | ✅ HCC (Respiratory)    |
| **[[M17.11]]**     | Unilateral primary osteoarthritis, right knee      | ❌ Not HCC              |
| **[[F41.1]]**      | Generalized anxiety disorder                       | ❌ Not HCC              |

* *HCC Status*: Hierarchical Condition Category mapping for Medicare Advantage risk adjustment. Diagnosis codes determine HCC status, not the modifier. **Modifier [[-GE]]** has no impact on risk adjustment scores <sup>9</sup><sup>10</sup>.

### Supporting/Comorbid Codes (Document When Applicable)
- [[N18.30]] Chronic kidney disease, stage 3 unspecified (HCC applicable)
- [[E66.01]] Morbid (**severe**) obesity due to excess calories (HCC applicable)
- [[Z79.4]] Long term (**current**) use of insulin (HCC applicable)

---

## ✏️ Modifiers Guidance

| Modifier | Use Case for [[GE]]                                           | Payable?                                                   |
| -------- | ------------------------------------------------------------- | ---------------------------------------------------------- |
| **[[-GC]]**  | **Service performed in part by resident (Standard)**              | ❌ Do not use with [[-GE]]                                  |
| **-GR**  | **Service performed in VA Medical Center**                        | ❌ Mutually exclusive setting                               |
| **[[-25]]**  | **Significant, Separately Identifiable E/M Service**              | ✅ Can be used with [[-GE]] on same day as procedure        |
| **[[-59]]**  | **Distinct Procedural Service**                                   | ✅ Can be used with [[-GE]] if distinct procedure performed |
| **[[-95]]**  | **Synchronous Telemedicine Service**                              | ✅ Can be used with [[-GE]] if PCE applies to telehealth    |
| **[[-24]]**  | **Unrelated E/M Service by Same Physician During Post-op Period** | ✅ Can be used with [[-GE]] during global period            |

> [!CAUTION] Modifier [[-GE]] vs [[-GC]]
> Do not use modifier [[-GE]] if the teaching physician was present during the key portion(s) of the service. Use [[-GC]] for standard teaching physician direction. [[-GE]] is strictly for the Primary Care Exception where presence is waived <sup>3</sup>.

---

## 📝 Coding Examples

### ✅ Example 1: Resident Provides Level 3 Visit Under PCE
> **Scenario**: Resident sees established patient for HTN follow-up in outpatient clinic. Teaching physician is immediately available but not in room. Resident documents visit. Teaching physician reviews note and documents agreement.  
> **Report**:  
> - Teaching Physician: [[99213]]-[[-GE]]  
> - Diagnosis: [[I10]]  
> - Documentation: "I reviewed the resident's note and agree with the assessment and plan."  
> **Rationale**: PCE criteria met; low complexity E/M; correct modifier used <sup>11</sup>.

### ❌ Example 2: High Complexity Visit Under PCE
> **Scenario**: Resident sees patient for complex multi-system complaint (**Level 5 visit**). Teaching physician bills [[-GE]].  
> **Report**: [[99215]]-[[-GE]]  
> **Rationale**: **Incorrect**. PCE generally applies only to low complexity visits (Level 1-3). High complexity visits require standard teaching physician presence ([[-GC]]) <sup>3</sup>.

### ⚠️ Example 3: Missing Teaching Physician Documentation
> **Scenario**: Resident documents visit. Teaching physician bills [[-GE]] but does not document their review/participation in the record.  
> **Report**: [[99213]]-[[-GE]]  
> **Rationale**: **Incorrect**. Teaching physician must document their participation (**review/agreement**) even under PCE. Claim may be denied <sup>5</sup>.

### ✅ Example 4: E/M with Procedure on Same Day
> **Scenario**: Patient sees resident for minor procedure (**e.g., lesion removal**) and significant E/M for separate problem. Teaching physician supervises under PCE for E/M.  
> **Report**:  
> - E/M: [[99213]]-[[-25]]-[[-GE]]  
> - Procedure: [[11401]]  
> - Diagnosis: [[I10]], [[D22.9]]  
> **Rationale**: Modifier [[-25]] indicates distinct E/M; [[-GE]] indicates PCE for E/M portion <sup>11</sup>.

---

## 🔍 Documentation Essentials for Support

To support modifier [[-GE]] and mitigate audit risk, medical documentation should include:

1. **Resident Note**: Complete documentation by the resident performing the service <sup>5</sup>.
2. **Teaching Physician Note**: Statement indicating review and agreement (e.g., "Reviewed resident's note, saw patient, agree with plan") <sup>5</sup>.
3. **Setting Confirmation**: Documentation must reflect outpatient clinic setting (PCE eligible) <sup>3</sup>.
4. **Availability**: Record should reflect teaching physician was immediately available <sup>3</sup>.
5. **Complexity**: E/M level should align with PCE limits (typically low complexity) <sup>3</sup>.
6. **Signature**: Both resident and teaching physician must sign the record <sup>5</sup>.

> [!TIP] Medical Record Language
> Ensure the teaching physician's note states: "I reviewed the resident's note, discussed the case with the resident, and agree with the findings and plan of care. I was immediately available during the service."

---

## ⚠️ Common Pitfalls & Audit Risks

| Pitfall                                        | Consequence    | Prevention                                                                    |
| ---------------------------------------------- | -------------- | ----------------------------------------------------------------------------- |
| **Using [[-GE]] for high complexity E/M**       | Claim denial   | **Reserve [[-GE]] for low complexity visits (Level 1-3) <sup>3</sup>**             |
| **Using [[-GE]] in hospital inpatient setting** | Claim denial   | **PCE generally applies to outpatient clinics only <sup>3</sup>**                 |
| **Missing teaching physician signature**       | Payment denial | **Ensure teaching physician signs the record <sup>5</sup>**                       |
| **Using [[-GE]] instead of [[-GC]]**             | Audit flag     | **Use [[-GC]] if teaching physician was present during key portions <sup>3</sup>** |
| **Commercial payer non-recognition**           | Claim denial   | **Verify commercial payer policy; many do not recognize [[GE]] <sup>11</sup>**    |

---

## 🔗 Related Codes & Crosswalks

| Code Type      | Code                | Relationship to [[GE]]                                                                              |
| -------------- | ------------------- | --------------------------------------------------------------------------------------------------- |
| HCPCS Modifier | **[[-GC]]**              | This service has been performed in part by a resident under the direction of a teaching physician   |
| HCPCS Modifier | **GR**              | This service was performed in part by a resident in a department of veterans affairs medical center |
| HCPCS Modifier | **[[-25]]**              | Significant, Separately Identifiable Evaluation and Management Service                              |
| CPT®           | **[[99202]]-[[99213]]** | Office or Other Outpatient Services (Typical PCE codes)                                             |
| CPT®           | **[[50 Medical Coding/CPT Codes/99214]]-[[99215]]** | Higher Level E/M (Generally not PCE eligible)                                                       |
| CMS Form       | **CMS-1500**            | Professional claim form where [[-GE]] is reported                                                    |
| CMS Pub        | **Pub 100-04 Ch 12**    | Medicare Claims Processing Manual (Teaching Physicians)                                             |

---

<sup>1</sup> CMS HCPCS Level II Modifier Definitions  
<sup>2</sup> CMS Global Surgery Factsheet  
<sup>3</sup> Medicare Claims Processing Manual Ch. 12 (Teaching Physicians)  
<sup>4</sup> CMS Medicare Physician Fee Schedule 2024  
<sup>5</sup> CMS Teaching Physician Guidelines  
<sup>6</sup> NIH VSAC HCPCS Hierarchy  
<sup>7</sup> CMS MPFS Database Status Indicators  
<sup>8</sup> Medicare Claims Processing Manual Ch. 1  
<sup>9</sup> CMS-HCC Model V28 Documentation  
<sup>10</sup> Find-A-Code HCC Mapping Tool  
<sup>11</sup> AAPC Coding Modifier Guidelines  
<sup>12</sup> AAMC Teaching Physician Resources