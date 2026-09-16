---
tags:
  - specialty/pmr
  - pmr
  - coding/rules
  - medicare
  - therapy
  - timed-codes
  - physical-therapy
  - occupational-therapy
  - compliance
title: The 8 Minute Rule - PM&R Coding & Billing Reference
specialty: Physical Medicine and Rehabilitation
topic: Timed Therapy Services Unit Calculation & Aggregation Logic
category: Billing & Compliance Rules
code_set: CPT / Medicare Part B
fy_version: 2026
status: active
---

# The 8-Minute Rule: Timed Therapy Services & Calculation Logic

## Regulatory Authority & Scope
- **Authoritative Source:** CMS Internet-Only Manual (IOM), Pub. 100-04, *Medicare Claims Processing Manual*, Chapter 5 (Part B Outpatient Rehabilitation and CORF/OPT Services), §20.2 (*Counting Minutes for Timed Codes in 15-Minute Units*).
- **Applicability:** Mandatory for **Medicare Part B** claims (including outpatient physical therapy, occupational therapy, and private practice clinics) and payers that contractually adopt CMS rehabilitation payment policies.
- **Code Scope:** Applies exclusively to **direct, skilled, one-on-one timed CPT codes** in the [[CPT 97000 Series; Physical Medicine]] (e.g., [[97110]], [[97112]], 97116, 97140, [[97530]], 97535).
- **Untimed Code Exclusion:** Supervised modalities (e.g., hot/cold packs [[97010]], mechanical traction 97012, unattended e-stim 97014/G0283) and evaluations/re-evaluations (97161–97168) are **untimed** (billed as 1 unit per discipline per day) and **do not** count toward total timed minutes.

---

## The CMS 8-Minute Rule (Cumulative Aggregation)

### The Core Logic
Under CMS rules, the total number of billable units is constrained by the **total cumulative minutes of skilled, direct one-on-one timed therapy** delivered across all timed codes on a single date of service.

1. **Calculate Total Timed Minutes:** Add together the minutes spent delivering all one-on-one timed services.
2. **Determine Maximum Units:** Match the total timed minutes against the CMS threshold schedule. The total units billed across all timed CPT codes **cannot exceed** the maximum units permitted by this total time.
3. **Assign Units for 15-Minute Blocks:** Assign 1 unit for each full 15-minute increment spent in a specific CPT service.
4. **Resolve Mixed Remainders (Residual Minutes):**
   - Combine the residual minutes leftover after assigning full 15-minute increments, along with any timed service lasting fewer than 15 minutes.
   - If the sum of residual minutes is **8 minutes or greater**, an additional unit is billable (provided the total unit count does not exceed the CMS ceiling established in Step 2).
   - **CMS Allocation Hierarchy:** Bill the remainder unit under the CPT code that represents the **largest portion of the remaining time**.
   - If residual minutes are identical between two codes, the clinician may bill either code.

---

## CMS Total Timed Minutes Threshold Table

| Total Timed Treatment Minutes | Maximum Allowable Units |
| :---------------------------- | :---------------------- |
| **0 – 7 minutes**             | 0 units                 |
| **8 – 22 minutes**            | 1 unit                  |
| **23 – 37 minutes**           | 2 units                 |
| **38 – 52 minutes**           | 3 units                 |
| **53 – 67 minutes**           | 4 units                 |
| **68 – 82 minutes**           | 5 units                 |
| **83 – 97 minutes**           | 6 units                 |
| **98 – 112 minutes**          | 7 units                 |
| **113 – 127 minutes**         | 8 units                 |

*Each additional unit requires passing the 8-minute midpoint threshold into the next 15-minute block (+15 minutes to each range).*

---

## CMS (Medicare) vs. AMA / CPT (Commercial) Comparison

Payers differ in how they calculate timed units. Billing CMS logic to an AMA-only payer, or vice-versa, can trigger audit clawbacks or claims denials:

| Policy Element | CMS / Medicare 8-Minute Rule | AMA / CPT Midpoint Rule (Rule of Eights) |
| :--- | :--- | :--- |
| **Governing Entity** | CMS (Medicare Part B, Medicaid, Railroad Medicare) | AMA CPT Guidelines (Commercial / Private Payers) |
| **Calculation Method** | **Cumulative:** Total timed minutes across all codes govern total allowed units. | **Individual:** Each CPT code is calculated independently. |
| **Threshold per Unit** | Total timed minutes must fall into the CMS chart; remainder ≥ 8 mins yields a unit. | Minutes per code ÷ 15. Requires ≥ 8 minutes to bill the first unit of each code. |
| **Mixed Remainders** | **Permitted & aggregated:** Remainders from different codes combine. | **Prohibited:** Minutes cannot be pooled across different CPT codes. |
| **Documentation** | Must document both Total Timed Minutes and Total Session Minutes. | Requires documentation of time spent per individual code. |

---

## Clinical Coding Scenarios

### Scenario 1: Standard Multi-Code Allocation
**Treatment Time:**
- [[97110]] (Therapeutic Exercise): 15 minutes
- 97140 (Manual Therapy): 10 minutes
- **Total Timed Minutes:** 25 minutes (Falls into 23–37 min bracket = **2 units max**)

**Billing Breakdown:**
- [[97110]]: 15 minutes = 1 unit (0 min remainder)
- 97140: 10 minutes = 1 unit (meets ≥ 8-minute threshold)
- **Total Billed:** 1 unit [[97110]], 1 unit 97140 (Total: 2 units).

---

### Scenario 2: Mixed Remainders (The Critical CMS Distinction)
**Treatment Time:**
- [[97110]] (Therapeutic Exercise): 20 minutes
- 97140 (Manual Therapy): 18 minutes
- **Total Timed Minutes:** 38 minutes (Falls into 38–52 min bracket = **3 units max**)

**Billing Breakdown:**
1. Assign full 15-minute units:
   - [[97110]]: 15 minutes = 1 unit (Remainder: **5 minutes**)
   - 97140: 15 minutes = 1 unit (Remainder: **3 minutes**)
2. Aggregate residual minutes:
   - 5 minutes ([[97110]]) + 3 minutes (97140) = **8 minutes total remainder**.
   - 8 minutes meets the threshold for 1 additional unit (1 + 1 + 1 = 3 units total, within the 38-minute ceiling).
3. Assign the remainder unit:
   - Compare remainders: 5 minutes ([[97110]]) > 3 minutes (97140).
   - The remaining unit is assigned to [[97110]].
- **Total Billed:** 2 units [[97110]], 1 unit 97140 (Total: 3 units).

> [!NOTE] AMA / CPT Contrast
> Under pure AMA/CPT rules, 20 minutes of [[97110]] = 1 unit (need 23 mins for 2 units), and 18 minutes of 97140 = 1 unit (need 23 mins for 2 units). Because remainders cannot cross CPT codes, **only 2 units total** could be billed under AMA guidelines.

---

### Scenario 3: Equal Residuals Below 15 Minutes
**Treatment Time:**
- [[97110]] (Therapeutic Exercise): 7 minutes
- 97140 (Manual Therapy): 7 minutes
- **Total Timed Minutes:** 14 minutes (Falls into 8–22 min bracket = **1 unit max**)

**Calculation & Ruling:**
- **Under Medicare (CMS):** Total timed minutes = 14. 14 minutes is ≥ 8 minutes, which allows **1 billable unit**. Because both codes are 7 minutes, the provider may choose to bill **either 1 unit of [[97110]] OR 1 unit of 97140** (not both).
- **Under Commercial (AMA / CPT):** Neither service reached 8 minutes independently. Remainders cannot be aggregated. **0 units** may be billed.

---

### Scenario 4: Medicare Total Time Cap (Overbilling Audit Trap)
**Treatment Time:**
- [[97110]]: 10 minutes
- 97112 (Neuromuscular Reeducation): 10 minutes
- 97140: 10 minutes
- **Total Timed Minutes:** 30 minutes (Falls into 23–37 min bracket = **2 units max**)

**Audit Warning:**
- If coded independently under AMA logic, an auditor might see that 10 minutes ≥ 8 minutes for all 3 codes and attempt to bill 1 unit of each (3 units).
- **Medicare Denial / Recoupment Risk:** Under CMS, 30 total minutes strictly caps reimbursement at **2 units**. Billing 3 units constitutes overbilling on Medicare claims.
- **CMS Billing Resolution:** Two codes are billed at 1 unit each (the two services that were the most clinically intensive or primary), and the third cannot be billed.

---

## Documentation & Billing Requirements

1. **Mandatory Time Documentation:**
   - **Total Timed Minutes:** Explicit record of direct one-on-one contact with the patient.
   - **Total Treatment Time:** Total elapsed time of the encounter, including untimed services (e.g., prep, rest intervals, [[97010]] hot packs, unweighted mechanical traction).
2. **Mandatory Therapy Discipline Modifiers:**
   - Every outpatient therapy claim line must append the designated therapy modifier:
     - `[[-GP]]`: Physical Therapy plan of care
     - `[[-GO]]`: Occupational Therapy plan of care
     - `[[-GN]]`: Speech-Language Pathology plan of care
3. **Therapy Assistant Modifiers (10% De Minimis Rule):**
   - Append `CQ` (PTA) or `CO` (OTA) when an assistant furnishes more than 10% of a 15-minute service independently or in collaboration with the therapist.

---

## Related Notes & MOC Links
- [[00 PM&R Coding MOC]]
- [[CPT 97000 Series; Physical Medicine]]
- [[Therapy Modifiers]]
- [[Documentation Requirements for PM&R]]
- [[50 Medical Coding/CPT Codes/97110|CPT 97110 - Therapeutic Exercise]]
- [[NCCI Edits for Rehab]]
- [[Audit Triggers in PM&R]]
