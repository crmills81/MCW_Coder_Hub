---
tags:
  - modifier
  - hcpcs
  - surgery
  - assistant
  - npp
  - physician-assistant
  - nurse-practitioner
aliases:
  - AS
  - -AS
  - modifier AS
  - Modifier -AS
  - modifier -as
modifier: AS
code_type: HCPCS Level II Modifier
descriptor: Physician assistant, nurse practitioner, or clinical nurse specialist assistant at surgery
category: Payment Modifiers
global_period: Follows Primary Procedure
wRVU: N/A (Adjusts Primary Procedure)
peRVU: N/A
mpRVU: N/A
total_RVU: N/A
assistant_surgeon_payable: Yes (Specific to NPPs)
ncci_modifier_indicator: N/A (Applied to Primary Code)
separate_procedure: false
ms_drg_primary: Follows Primary Procedure
last_updated: 2026-03-14
---

# ⚕️ Modifier AS Physician Assistant, Nurse Practitioner, or Clinical Nurse Specialist Assistant at Surgery

> [!INFO] Quick Reference
> **Descriptor**: Physician assistant, nurse practitioner, or clinical nurse specialist assistant at surgery <sup>1</sup>  
> **Global Period**: Follows the primary procedure code <sup>2</sup>  
> **Provider Type**: Non-Physician Practitioner (**NPP**) only (**PA, NP, CNS**) <sup>3</sup>  
> **Reimbursement**: Medicare pays 85% of the physician assistant rate (**approx. 72.25% of physician fee schedule**) <sup>4</sup>  
> **NCCI Status**: Subject to assistant surgery eligibility of primary code <sup>5</sup>  
> **Approach**: Appended to surgical CPT® codes

---

## 📋 Code Description & Clinical Context

Modifier [[-AS]] is a HCPCS Level II modifier used to identify when a **Physician Assistant (PA)**, **Nurse Practitioner (NP)**, or **Clinical Nurse Specialist (CNS)** assists a surgeon during a surgical procedure <sup>1</sup>. This modifier ensures correct reimbursement differentiation between physician assistants (modifiers [[-80]], [[-81]], [[-82]]) and non-physician practitioners assisting at surgery <sup>3</sup>.

**Key Usage Indications**:
- A **PA, NP, or CNS** provides essential assistance during a surgical procedure
- The primary surgeon is a physician (**MD/DO**) or another eligible provider
- The primary CPT® code allows for assistant surgeon reimbursement (Status Indicator "1")
- Documentation supports the medical necessity of the assistant's participation

> [!NOTE] Provider Specificity
> Modifier [[-AS]] is **exclusive** to Non-Physician Practitioners (NPPs). If a physician (MD/DO) assists, modifiers [[-80]], [[-81]], or [[-82]] must be used instead <sup>3</sup>. Using [[-AS]] for a physician assistant will result in denial.

---

## 🌲 Code Hierarchy / Context

```
HCPCS Level II Modifiers
└─ Payment Modifiers
   ├─ -80 Assistant Surgeon (Physician)
   ├─ -81 Minimum Assistant Surgeon (Physician)
   ├─ -82 Assistant Surgeon (when qualified resident not available)
   └─ -AS Physician assistant, nurse practitioner, or clinical nurse specialist assistant at surgery ← THIS CODE
```

**Parent Category**: Payment Modifiers (**Surgery**) <sup>6</sup>  
**Related Modifiers**: [[-80]], [[-81]], [[-82]] (**Physician Assistants**), [[-GC]] (Teaching Physician), [[-GE]] (Resident)  
**Primary Code Dependency**: Must be appended to a valid surgical CPT® code (e.g., [[51565]], [[50620]])

---

## 💰 Reimbursement & Valuation

| Component | Rate | Notes |
|-----------|------|-------|
| **Base Rate** | 100% | Based on the primary surgeon's allowed amount for the CPT® code <sup>4</sup> |
| **Physician Assistant Rate** | 85% | Standard reimbursement rate for PA/NP services <sup>4</sup> |
| **Assistant Surgery Rate** | 85% | Standard reduction for assistant surgery services <sup>4</sup> |
| **Final [[-AS]] Rate** | **~72.25%** | 85% of 85% of the primary physician fee schedule amount <sup>4</sup> |
| **Global Period** | Same as Primary | Follows the global days of the primary procedure (0, 10, or 90) <sup>2</sup> |

**Assistant Surgeon Payable**: Yes (Specific to NPPs)  
- Medicare Status Indicator: Must be "1" (Payment permitted for assistant at surgery) for the primary CPT® code <sup>7</sup>
- If primary code Status Indicator is "2" (Assistant at surgery not permitted), [[-AS]] will be denied
- Commercial payers may vary (some pay 16-25% of primary, others follow Medicare 72.25% rule)

**Medicare Payment Estimate**: Varies by primary procedure; calculated as 0.85 × 0.85 × Primary Allowance <sup>4</sup>

---

## 🚫 Includes / Excludes & NCCI Guidance

### ✅ Includes
- Assistance provided by a PA, NP, or CNS during a surgical procedure
- Pre-operative and post-operative services provided by the assistant within the global period (**if shared care**)
- Documentation of specific tasks performed by the NPP (retraction, suturing, [[hemostasis]])
- Services where the primary code allows assistant surgery (Status Indicator "1")

### ❌ Excludes / Bundled Per NCCI
- Assistance by a physician (use [[-80]], [[-81]], or [[-82]]) <sup>3</sup>
- Assistance when the primary code bundles assistant services (Status Indicator "0" or "2") <sup>7</sup>
- Services provided by a surgical resident (use [[-GC]] or [[-GE]] with teaching physician rules)
- Minimum assistant services by NPP (some payers prefer [[-AS]] for all NPP assistance, others distinguish)
- Co-surgery (use modifier [[-62]] if two surgeons of different specialties work together)

> [!IMPORTANT] Medicare Physician Fee Schedule (**MPFS**) Check
> Before billing [[-AS]], verify the primary CPT® code in the MPFS database. If the "Assistant at Surgery" column is marked "0" (**Not permitted**), modifier [[-AS]] will be denied regardless of documentation <sup>7</sup>.

---

## 🏥 MS-DRG Assignment (Inpatient Facility)

Modifier [[AS]] does not directly impact MS-DRG assignment, as DRGs are based on the primary procedure and diagnoses. However, it affects physician reimbursement under Medicare Part B.

| Scenario                            | Impact          | Description                                                                 |
| ----------------------------------- | --------------- | --------------------------------------------------------------------------- |
| **Primary procedure allows assistant**  | Payment Allowed | NPP assistant paid at 72.25% of physician fee schedule <sup>4</sup>         |
| **Primary procedure bundles assistant** | Payment Denied  | No separate payment for assistant services <sup>7</sup>                     |
| **Inpatient Status**                    | Part B Billing  | Assistant services billed on CMS-1500/837P, not facility claim <sup>8</sup> |

> [!Note] 
> Facility reimbursement (**Part A**) is not affected by modifier [[-AS]]; this modifier is for professional fee billing only <sup>8</sup>.

---

## 🏷️ Common ICD-10-CM Diagnosis Codes

*Modifier [[-AS]] does not change diagnosis coding requirements. Diagnosis codes must support the medical necessity of the **primary procedure**.*

### Primary Diagnosis Options (Dependent on Procedure)
| ICD-10-CM Code | Description                                       | HCC Status*    |
| -------------- | ------------------------------------------------- | -------------- |
| **[[N20.1]]**  | [[Calculus]] of ureter (Example for [[50620]])    | ❌ Not HCC      |
| **[[N32.81]]** | Diverticulum of bladder (Example for [[51555]])   | ❌ Not HCC      |
| **[[C67.9]]**  | Malignant neoplasm of bladder                     | ✅ HCC (Cancer) |
| **[[K80.20]]** | Calculus of gallbladder without [[cholecystitis]] | ❌ Not HCC      |
| **[[M17.11]]** | Unilateral primary osteoarthritis, right knee     | ❌ Not HCC      |

* *HCC Status*: Hierarchical Condition Category mapping for Medicare Advantage risk adjustment. Diagnosis codes determine HCC status, not the modifier. Modifier [[AS]] has no impact on risk adjustment scores <sup>9</sup><sup>10</sup>.

### Supporting/Comorbid Codes (Document When Applicable)
- [[N18.30]] Chronic kidney disease, stage 3 unspecified (HCC applicable)
- [[E11.9]] Type 2 diabetes mellitus without complications (HCC applicable)
- [[I10]] Essential (primary) hypertension (HCC applicable)

---

## ✏️ Modifiers Guidance

| Modifier            | Use Case for [[AS]]                                           | Payable?                                                         |
| ------------------- | ------------------------------------------------------------- | ---------------------------------------------------------------- |
| **[[80]]**          | **Assistant Surgeon (Physician/MD/DO)**                       | ❌ Do not use for NPPs                                            |
| **[[81]]**          | **Minimum Assistant Surgeon (Physician)**                     | ❌ Do not use for NPPs                                            |
| **[[82]]**          | **Assistant Surgeon (when qualified resident not available)** | ❌ Do not use for NPPs                                            |
| **[[50]]**          | **Bilateral Procedure**                                       | ✅ Can be used with [[AS]] if primary code is bilateral           |
| **[[51]]**          | **Multiple Procedures**                                       | ✅ Can be used with [[AS]] on secondary codes                     |
| **[[59]]**          | **Distinct Procedural Service**                               | ✅ Can be used with [[AS]] if primary code requires it            |
| **[[GC]]**          | **Teaching Physician**                                        | ⚠️ Do not use together; [[GC]] is for resident supervision       |
| **[[LT]] / [[RT]]** | **Laterality**                                                | ✅ Should be used with [[AS]] if primary code requires laterality |

> [!CAUTION] Modifier [[80]] vs [[AS]]
> Do not use modifier [[80]] for a Physician Assistant. Modifier [[80]] is strictly for physicians (MD/DO). Using [[80]] for an NPP may result in recoupment or audit flags <sup>3</sup>.

---

## 📝 Coding Examples

### ✅ Example 1: PA Assisting in Open Ureterolithotomy
> **Scenario**: 55 y/o M undergoes open ureterolithotomy [[50620]]. Primary surgeon is MD. Physician Assistant provides retraction and suturing assistance. Primary code allows assistant surgery.  
> **Report**:  
> - Primary Surgeon (MD): [[50620]]-[[RT]]  
> - Assistant (PA): [[50620]]-[[AS]]-[[RT]]  
> - Diagnosis: [[N20.1]]  
> **Rationale**: PA assistance documented; primary code allows assistant; correct modifier used <sup>11</sup>.

### ❌ Example 2: PA Assisting but Code Bundles Assistant
> **Scenario**: PA assists in minor procedure [[52000]] (Cystoscopy). Primary code Status Indicator is "0" (Assistant not permitted).  
> **Report**: [[52000]]-[[AS]]  
> **Rationale**: **Incorrect**. [[52000]] bundles assistant services. Modifier [[AS]] will be denied regardless of provider type <sup>7</sup>.

### ⚠️ Example 3: Physician Assistant Using Wrong Modifier
> **Scenario**: PA assists in colectomy. Bills with modifier [[80]].  
> **Report**: [[44140]]-[[80]]  
> **Rationale**: **Incorrect**. PA must use [[AS]]. Modifier [[80]] implies a physician assistant. Claim may be rejected or audited <sup>3</sup>.

### ✅ Example 4: NP Assisting in Bilateral Procedure
> **Scenario**: NP assists in bilateral carpal tunnel release [[64721]].  
> **Report**:  
> - Primary: [[64721]]-[[50]]  
> - Assistant (NP): [[64721]]-[[AS]]-[[50]]  
> - Diagnosis: [[G56.01]] (Carpal tunnel syndrome, right upper limb)  
> **Rationale**: Modifier [[AS]] appended with bilateral modifier [[50]] per payer policy <sup>11</sup>.

---

## 🔍 Documentation Essentials for Support

To support modifier [[AS]] and mitigate audit risk, operative documentation should include:

1. **Identity of Assistant**: Clearly state the name and credentials (PA, NP, CNS) of the assistant.
2. **Specific Tasks**: Document what the assistant did (e.g., "PA assisted with retraction," "NP performed suturing").
3. **Medical Necessity**: Why was an assistant needed? (Complexity, exposure, patient condition).
4. **Presence**: Assistant must be present during the key portions of the procedure.
5. **Signature**: Operative report must be signed by the primary surgeon; assistant may co-sign or document their participation separately.
6. **Primary Code Eligibility**: Ensure the primary procedure code allows assistant surgery (check MPFS) <sup>7</sup>.

> [!TIP] Operative Note Language
> Avoid vague phrases like "assisted by PA." Use specific language: "Physician Assistant [Name] assisted with exposure, hemostasis, and closure of the incision."

---

## ⚠️ Common Pitfalls & Audit Risks

| Pitfall | Consequence | Prevention |
|---------|-------------|------------|
| Using [[80]] for PA/NP | Claim denial or recoupment | Always use [[AS]] for NPP assistants <sup>3</sup> |
| Billing [[AS]] on bundled codes | Claim denial | Check MPFS Status Indicator before billing <sup>7</sup> |
| Insufficient operative documentation | Audit failure | Document specific tasks and medical necessity <sup>11</sup> |
| Using [[AS]] for residents | Claim denial | Use [[GC]] or [[GE]] for resident involvement <sup>12</sup> |
| Missing laterality modifiers | Claim rejection | Append [[LT]]/[[RT]] or [[50]] as required by primary code <sup>11</sup> |

---

## 🔗 Related Codes & Crosswalks

| Code Type | Code | Relationship to [[AS]] |
|-----------|------|---------------------------|
| HCPCS Modifier | [[80]] | Assistant Surgeon (Physician) |
| HCPCS Modifier | [[81]] | Minimum Assistant Surgeon (Physician) |
| HCPCS Modifier | [[82]] | Assistant Surgeon (No Resident Available) |
| HCPCS Modifier | [[62]] | Two Surgeons (Co-surgery) |
| HCPCS Modifier | [[GC]] | Teaching Physician (Resident involved) |
| CPT® | Varies | Primary surgical procedure code (e.g., [[51565]]) |
| CMS Form | CMS-1500 | Professional claim form where [[AS]] is reported |

---

<sup>1</sup> CMS HCPCS Level II Modifier Definitions  
<sup>2</sup> CMS Global Surgery Factsheet  
<sup>3</sup> Medicare Claims Processing Manual Ch. 12  
<sup>4</sup> CMS Medicare Physician Fee Schedule 2024  
<sup>5</sup> CMS NCCI Policy Manual 2024  
<sup>6</sup> NIH VSAC HCPCS Hierarchy  
<sup>7</sup> CMS MPFS Database Status Indicators  
<sup>8</sup> Medicare Claims Processing Manual Ch. 1  
<sup>9</sup> CMS-HCC Model V28 Documentation  
<sup>10</sup> Find-A-Code HCC Mapping Tool  
<sup>11</sup> AAPC Coding Modifier Guidelines  
<sup>12</sup> CMS Teaching Physician Guidelines