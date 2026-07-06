---
tags:
  - physical_therapy
  - occupational_therapy
  - speech-language_pathology
  - PT
  - OT
  - SLP
  - modifiers
  - Medicare
  - therapy
  - pmr
title: -KX
description: "Modifier -KX: Services Exceed Medicare Annual Therapy Threshold — Medical Necessity Attested"
last_updated: 2026-05-22
type: coding-guide
aliases:
  - Modifier -KX
  - Modifier KX
  - KX
---

# Modifier -KX: Therapy Services Exceed Medicare Annual Threshold — Medical Necessity Attested

## Quick reference
- **What it signals:** [[-KX]] is the provider's **attestation to Medicare** that outpatient therapy services are medically necessary and reasonable beyond the annual therapy threshold, and that supporting documentation exists in the medical record.
- **Enables payment above the cap:** Without [[-KX]], any Medicare outpatient therapy claim **over the threshold is automatically denied**. Appending [[-KX]] is the mechanism that triggers the automatic exception to continue coverage.
- **Not a reduction modifier:** [[-KX]] does not reduce payment. It is a compliance attestation that unlocks continued reimbursement.
- **Does not guarantee payment:** Appending [[-KX]] does not guarantee coverage. Medicare contractors may still review the claim and deny for lack of documented medical necessity.

---

## CY 2026 Medicare Therapy Thresholds
| Discipline Bucket | CY 2026 Threshold | Targeted Medical Review Threshold |
|-------------------|------------------|----------------------------------|
| PT + SLP combined | **$2,480** | $3,000 |
| OT (separate bucket) | **$2,480** | $3,000 |

- **PT and SLP share a single combined threshold.** Every dollar of PT and SLP services for a patient within a calendar year counts toward the same $2,480 bucket.
- **OT has its own separate $2,480 threshold** that does not intermingle with PT/SLP.
- These are **incurred expense** thresholds (what Medicare counts/allows), not the billed charges.
- Thresholds reset every **January 1** (calendar year, not per episode of care).

---

## Core Medicare/CMS rules (high yield)
- **Apply [[-KX]] at the point of crossing the threshold:** [[-KX]] is not applied to all claims — only to claim lines for services rendered **at or above the threshold dollar amount**. Claims below the threshold do not need [[-KX]].
- **Apply to each applicable line:** [[-KX]] must be on **every over-threshold claim line** for the applicable discipline. It is not a one-time modifier applied to the first over-threshold claim and forgotten.
- **Discipline modifier always paired:** [[-KX]] always stacks with the applicable discipline modifier: [[-GP]] for PT, [[-GO]] for OT, [[-GN]] for SLP. All three are on the same line when over threshold.
- **Targeted Medical Review (MR) threshold — $3,000:** When the patient's incurred therapy expenses exceed $3,000 (for PT/SLP or OT), the claim is flagged for potential targeted medical review by the Medicare contractor. [[-KX]] is still required; the provider just needs to be prepared to submit records if reviewed.
- **Functional reporting:** CMS eliminated the mandatory G-code functional reporting requirement for therapy services (effective 2019), so no G-codes are required alongside [[-KX]] in current billing.
- **GA modifier interaction:** If you believe the service is medically necessary but expect Medicare may deny (e.g., documentation is borderline), [[-GA]] is used to document that an ABN was issued to the patient. [[-GA]] and [[-KX]] are generally **not** stacked together — if you're confident in medical necessity, use [[-KX]]; if you're not, issue an ABN and use [[-GA]].

---

## Documentation checklist (what to show)
- **Medical necessity clearly established in the record:** Documentation must demonstrate that the patient's condition requires **continued skilled therapy** — that without ongoing skilled intervention, the patient's functional status would decline or they cannot achieve their maximum expected functional status.
- **Functional progress documented:** Show measurable progress toward established goals. Lack of progress without a clear clinical rationale is a red flag for audit.
- **Plan of care recertification current:** The POC must be recertified by the physician/NPP. A lapsed POC means [[-KX]] means nothing — the claim can still be denied.
- **Skilled need documented:** The record must support that the services require the skills of a licensed therapist (PT, OT, or SLP) and cannot be safely or effectively performed by an unskilled caregiver.
- **Audit-ready:** Once [[-KX]] is used, the claim is on Medicare's radar. Ensure every note that corresponds to a [[-KX]] claim line is defensible on its own.

---

## Common CPT codes billed with -KX (by discipline)
### Physical Therapy ([[-GP]] + [[-KX]])
- [[97110]] — Therapeutic exercise
- [[97530]] — Therapeutic activities
- [[97112]] — Neuromuscular reeducation
- [[97116]] — Gait training
- [[97140]] — Manual therapy
- [[97535]] — Self-care/home management training

### Occupational Therapy ([[-GO]] + [[-KX]])
- [[97165]], [[97166]], [[97167]] — OT evaluations (though evaluations rarely push you over threshold by themselves)
- [[97530]] — Therapeutic activities
- [[97535]] — Self-care/ADL training
- [[97110]] — Therapeutic exercise (under OT POC)
- [[97129]] / [[97130]] — Cognitive-linguistic function therapy

### Speech-Language Pathology ([[-GN]] + [[-KX]])
- [[92507]] — Speech/language/voice treatment (individual)
- [[92526]] — Swallowing therapy
- [[97129]] — Therapeutic interventions for cognitive function (first 15 min)
- [[92521]], [[92522]], [[92523]], [[92524]] — Speech/language evaluations (shared threshold with PT)

---

## Billing line examples
| Date       | CPT       | Modifiers               | Note                                                               |
| ---------- | --------- | ----------------------- | ------------------------------------------------------------------ |
| MM/DD/YYYY | **[[97110]]** | **[[-GP]]**                 | PT therapeutic exercise — below $2,480 threshold; no KX needed     |
| MM/DD/YYYY | **[[97110]]** | **[[-GP]] [[-KX]]**         | PT therapeutic exercise — AT or over $2,480 threshold; KX required |
| MM/DD/YYYY | **[[97530]]** | **[[-GO]] [[-KX]]**         | OT therapeutic activities — at/over separate $2,480 OT threshold   |
| MM/DD/YYYY | **[[92507]]** | **[[-GN]] [[-KX]]**         | SLP individual treatment — PT/SLP combined threshold exceeded      |
| MM/DD/YYYY | **[[97110]]** | **[[-GP]] [[-CQ]] [[-KX]]** | PT exercise by PTA, over threshold; 15% CQ reduction + KX required |

---

## Payer considerations
- **Medicare Part B:** [[-KX]] is required above the threshold. No [[-KX]] = automatic denial above $2,480.
- **Medicare Advantage (replacement plans):** Many MA plans follow Medicare's [[-KX]] rules, but some have different threshold amounts or require prior auth at a certain dollar level. Always verify individual plan policy (Humana, UHC Medicare Advantage, Aetna Medicare, BCBS Medicare supplemental, etc.).
- **Commercial payers (UHC, BCBS, Aetna, Cigna):** [[-KX]] is a Medicare-specific modifier. Commercial payers typically do not use or require [[-KX]] — their medical necessity attestation occurs via prior authorization rather than a claim modifier.
- **Wisconsin Medicaid:** Verify ForwardHealth therapy billing guidance — Medicaid does not necessarily follow the Medicare therapy threshold framework.

---

## Quick self-check (before you append -KX)
1. Has the patient's Medicare-incurred therapy expense reached or exceeded **$2,480** for the applicable discipline bucket this calendar year?
2. Is there a **current, signed plan of care** and adequate documentation supporting continued skilled need?
3. Is the **discipline modifier** ([[-GP]], [[-GO]], or [[-GN]]) also on the same line?
4. If the patient's expenses are approaching or exceed **$3,000**, is the documentation exceptionally thorough in preparation for targeted medical review?
5. If you are **not** confident in medical necessity (borderline documentation), have you issued an **ABN** and used [[-GA]] instead of [[-KX]]?
