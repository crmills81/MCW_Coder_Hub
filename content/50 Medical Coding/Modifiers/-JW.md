---
tags:
  - drugs_biologicals
  - injectables
  - Medicare_Part_B
  - modifiers
  - drug_waste
  - ophthalmology
  - oncology
  - infusion
title: -JW
description: "Modifier -JW: Drug Amount Discarded/Not Administered to Any Patient (Single-Dose Container Waste)"
last_updated: 2026-05-22
type: coding-guide
aliases:
  - Modifier -JW
  - Modifier JW
  - JW
---

# Modifier -JW: Drug Amount Discarded/Not Administered to Any Patient

## Quick reference
- **What it signals:** [[-JW]] is appended to a HCPCS drug code to report the quantity of a **single-dose container drug or biological that was discarded/wasted** and not administered to any patient — enabling the provider to receive reimbursement for the discarded amount.
- **Companion modifier [[-JZ]]:** Effective **July 1, 2023**, CMS requires **[[-JZ]]** on all single-dose container drug claims where there is **zero waste** (full dose was administered). Together, [[-JW]] (waste exists) and [[-JZ]] (no waste) are now mandatory for all separately payable single-dose drug claims on Medicare Part B. Do not use one without the other being on the claim in the correct context.
- **Single-dose only:** [[-JW]] and [[-JZ]] apply **only** to single-dose containers (vials, prefilled syringes, packages) based on FDA-approved labeling. Multi-dose vials are **excluded** from this requirement.

---

## Core Medicare/CMS rules (high yield)
- **Mandatory as of July 1, 2023:** CMS Transmittal 12067 (CR 13056) made [[-JW]] and [[-JZ]] required on all Medicare Part B and outpatient facility (CMS-1450) claims for single-dose drugs. Claims submitted without one or the other may be subject to audit.
- **Two-line billing when waste exists:** When a portion of a single-dose vial is discarded, bill on **two separate claim lines**:
  - **Line 1:** HCPCS drug code + units administered — **no [[-JW]] on this line** (units = amount given to patient).
  - **Line 2:** Same HCPCS drug code + units discarded + [[-JW]] — Medicare reimburses the wasted amount on this line.
- **One-line billing when no waste:** When the entire contents of the single-dose container are administered, bill on **one line**: HCPCS drug code + [[-JZ]] + total units administered.
- **Overfill excluded:** CMS confirmed that overfill (medication exceeding the labeled amount, such as extra volume in a prefilled syringe) is **not billable** with [[-JW]]. Do not bill for overfill waste.
- **Samples and white-bagged drugs excluded:** Drugs provided as samples or via specialty/white-bag pharmacy arrangements are **not** eligible for [[-JW]] billing — the provider did not purchase them.
- **Commercial payers:** [[-JW]]/[[-JZ]] are Medicare-specific requirements tied to CMS drug rebate tracking. Most commercial payers (BCBS, UHC, Aetna, Cigna) do **not** currently require [[-JW]] or [[-JZ]].
- **NDC requirement:** CMS and many MACs require a valid **National Drug Code (NDC)** to be reported alongside the HCPCS drug code on the claim line. Confirm your MAC's specific NDC reporting requirements.

---

## Documentation checklist (what to show)
- **Discarded amount documented in the medical record:** CMS requires that the discarded drug quantity be documented in the patient's medical record (MAR, nursing note, or administration record) on the date of service.
- **Administered dose documented separately:** The record must show the amount actually administered to the patient, supporting the units billed on Line 1.
- **Single-dose labeling confirmed:** Confirm the vial/package is FDA-labeled as single-dose (not multi-dose) before applying [[-JW]]/[[-JZ]].
- **No rounding up:** Units are reported in whole numbers (no decimal points). If the waste is less than one billable unit (e.g., 0.02 mg when 1 unit = 0.1 mg), report only [[-JZ]] on one line — there is no separately billable waste.

---

## Common drug HCPCS codes billed with -JW (specialty-specific examples)
*Note: The HCPCS drug J-code is wikilinkable if it is a valid, separately payable code. Below are examples — always verify unit definitions for each code.*
- **Intravitreal injections (Ophthalmology):**
  - [[J0178]] (aflibercept/Eylea) — 1 mg; prefilled syringe, single-dose; [[-JZ]] typically (no waste when full dose given from prefilled syringe).
  - [[J2778]] (ranibizumab/Lucentis) — 0.1 mg; single-dose vial; [[-JW]] if partial vial discarded.
  - [[J3396]] (bevacizumab/Avastin compounded) — 0.25 mg; single-dose drawn syringe; [[-JW]] if any waste.
- **Oncology/Infusion examples:**
  - Large-molecule biologicals drawn from single-dose vials (e.g., trastuzumab, pembrolizumab) frequently generate [[-JW]] waste due to weight-based dosing leaving residual in the vial.
- **Rheumatology/Infusion examples:**
  - Single-dose infusion biologicals (e.g., tocilizumab, abatacept) with weight-based dosing — [[-JW]] for residual waste from single-dose vials.

---

## Billing line examples
| Line | HCPCS     | Modifier | Units | Description                                                                |
| ---- | --------- | -------- | ----- | -------------------------------------------------------------------------- |
| 1    | **[[J0178]]** | **[[-JZ]]**  | **2**     | Aflibercept 2 mg administered (full dose from prefilled syringe, no waste) |
| 1    | **[[J2778]]** | ***(none)*** | **3**     | Ranibizumab 0.3 mg administered (units given to patient)                   |
| 2    | **[[J2778]]** | **[[-JW]]**  | **2**     | Ranibizumab 0.2 mg discarded from single-dose vial                         |

---

## Payer considerations
- **Medicare Part B (professional and HOPD):** [[-JW]] and [[-JZ]] are both mandatory for single-dose container drugs as of July 1, 2023. Non-compliance = audit risk.
- **Medicare Advantage/Part C:** Many MA plans follow CMS guidance but may have delayed implementation timelines. Verify plan-specific policy.
- **Wisconsin Medicaid / State Medicaid:** Verify ForwardHealth drug waste billing guidance — state Medicaid programs may or may not require [[-JW]].
- **Commercial (BCBS, UHC, Aetna, Cigna):** Currently **not required** by most commercial payers. Adding it won't typically cause a denial, but it may be ignored for processing purposes.

---

## Quick self-check (before you append -JW)
1. Is the drug from a **single-dose container** (FDA-labeled as single-dose)?
2. Was a portion of the drug **discarded and not administered** to any patient?
3. Are you billing the administered amount on **Line 1** (no [[-JW]]) and the discarded amount on **Line 2** with [[-JW]]?
4. Is the discarded amount **≥1 billable unit** (whole number — no decimals)? If <1 unit, use [[-JZ]] on a single line instead.
5. Is the discard **documented in the medical record**?
6. Is this a **Medicare claim** (not a commercial payer that doesn't require it)?
