---
title: "Global Surgery Period Modifiers – Comparison & Reference"
aliases:
  - Global Surgery Modifiers
  - Global Period Modifiers
  - Modifiers 24 25 57 58 78 79 77
  - Post-Op Period Modifiers
tags:
  - modifier
  - global-surgical-package
  - global-period
  - postoperative
  - E/M
  - CPT-modifier
  - NCCI
  - comparison
  - MOC
modifiers_covered:
  - "-24"
  - "-25"
  - "-57"
  - "-58"
  - "-77"
  - "-78"
  - "-79"
modifier_family: Global Surgery Modifiers
ncci_classification:
  global_surgery_modifiers: [24, 25, 57, 58, 78, 79]
  repeat_procedure_modifier_with_global_relevance: [77]
global_period_types:
  - "0-day (no post-op period)"
  - "10-day (minor procedures)"
  - "90-day (major procedures)"
applies_to: Surgical and E/M procedure codes
date_created: 2026-02-23
date_modified: 2026-02-23
note_type: comparison-reference
status: active
source: CMS MLN Global Surgery Booklet / CMS NCCI Policy Manual / AMA CPT
---

# Global Surgery Period Modifiers – Comparison & Reference

## The Correlation: Why These Modifiers Exist Together

Modifiers 24, 25, 57, 58, 78, and 79 are all **officially designated Global Surgery Modifiers** by CMS and the NCCI Policy Manual. They share one central purpose: to identify when a service should be **paid separately** despite falling within — or adjacent to — the global surgical package of a procedure.

The global surgical package bundles pre-operative, intra-operative, and post-operative care into a single payment. Without these modifiers, payers would automatically deny or bundle any related claim that falls within that window. Each modifier addresses a **specific situation** that justifies breaking out of the global package.

Modifier 77 is **not** an official global surgery modifier per the NCCI classification — it is a Repeat Procedure modifier. However, it is included here because its most clinically relevant use occurs when a *different* provider repeats the same procedure during the global period of the original service, making it a natural companion to this modifier family.

---

## Global Period Quick Review

| Global Period | Duration | Includes |
|---------------|----------|----------|
| 0-day | Day of procedure only | Procedure day bundled; no pre/post-op days |
| 10-day | Day of procedure + 10 days after | Minor procedures (e.g., laceration repair, simple excision) |
| 90-day | 1 day before + day of + 90 days after | Major procedures (e.g., total joint replacement, abdominal surgery) |

---

## At-a-Glance Comparison Table

| Modifier | Name | Applies To | Timing | Related or Unrelated | Initiates New Global Period? |
|----------|------|-----------|--------|----------------------|------------------------------|
| 24 | Unrelated E/M During Post-Op Period | E/M codes only | During post-op period | **Unrelated** to original surgery | No |
| 25 | Significant Separately Identifiable E/M Same Day as Procedure | E/M codes only | **Same day** as procedure (0 or 10-day global) | Separate clinical indication | No |
| 57 | Decision for Surgery | E/M codes only | Day of or day **before** a 90-day global surgery | The E/M is what led to the surgery decision | No |
| 58 | Staged or Related Procedure During Post-Op Period | Procedure codes only | During post-op period | **Related** — staged, more extensive, or therapy following original | **Yes** |
| 77 | Repeat Procedure by Another Physician | Procedure codes only | Same day or during post-op period | Same procedure, **different provider** | Yes (for the repeating provider) |
| 78 | Unplanned Return to OR for Treatment of Complication | Procedure codes only | During post-op period | **Related** — complication of original surgery | **No** — stays within original global |
| 79 | Unrelated Procedure During Post-Op Period | Procedure codes only | During post-op period | **Unrelated** to original surgery | **Yes** |

---

## Individual Modifier Breakdowns

---

### Modifier 24 – Unrelated E/M Service During Post-Op Period

**Short Definition**
An E/M service performed during the post-operative period of a previous surgery was for a completely unrelated condition.

**Long Definition**
When a patient is within the global period of a procedure, the surgeon (or same group practice) cannot normally bill a separate E/M — it is considered bundled into the global package. Modifier 24 overcomes this by signaling that the E/M was **not** for post-operative care, but rather for an entirely separate, unrelated clinical problem.

**Key Rules**
- Applies to **E/M codes only** — not procedure codes.
- Applies during 0-day, 10-day, and 90-day global periods.
- The ICD-10-CM diagnosis code on the E/M claim must reflect a condition **unrelated** to the surgery — this is the primary documentation tool for supporting modifier 24.
- Do **not** use modifier 24 on the same day as the original procedure.
- Do **not** use for treatment of wound infections or typical post-op complications — those are bundled.

**Documentation Requirements**
- Separate diagnosis code that clearly differs from the surgical condition.
- The note must address a new or unrelated problem — not post-op status or wound checks.

**Quick Example**
- Patient is in the 90-day global period following a total knee replacement.
- 3 weeks post-op, the same surgeon evaluates the patient for a new onset of a UTI.
- Surgeon bills: appropriate E/M level-24 with a UTI ICD-10-CM code.

---

### Modifier 25 – Significant, Separately Identifiable E/M Same Day as Procedure

**Short Definition**
On the same day a procedure with a 0-day or 10-day global period was performed, the provider also performed a significant, separately identifiable E/M service for a separate clinical problem.

**Long Definition**
Procedures with 0-day or 10-day global periods bundle the E/M on the same day as the procedure. Modifier 25 signals that the provider performed and documented a substantial E/M service that went beyond the typical pre-procedure evaluation and was driven by a **separate clinical reason**, making it separately billable.

**Key Rules**
- Applies to **E/M codes only** — not procedure codes.
- Most commonly used with **0-day and 10-day global procedures**.
- For **90-day global procedures**, use **modifier 57** when the E/M is the encounter at which the decision to perform the surgery was made.
- The E/M must be significant and separately identifiable — not simply the pre-service evaluation for the procedure performed the same day.
- A **different diagnosis** supporting the E/M strengthens the claim but is not always required; the documentation itself must support a separate problem was addressed.

**Documentation Requirements**
- The medical note must reflect a distinct, separately documented E/M service beyond the pre-procedure evaluation.
- A separate ICD-10-CM code for the problem addressed at the E/M visit is strongly recommended.

**Quick Example**
- A patient comes in for a scheduled wart removal (10-day global).
- During the visit, they also mention chest tightness; the provider performs a full E/M evaluation and orders an EKG.
- Provider bills: wart removal CPT + appropriate E/M level-25.
- Documentation: a complete, separately documented note addressing the chest complaint.

---

### Modifier 57 – Decision for Surgery

**Short Definition**
The E/M service performed on the day of or the day before a **major (90-day global) surgery** was the visit at which the decision to perform that surgery was made.

**Long Definition**
For major surgeries with a 90-day global period, the pre-operative period begins 1 day before surgery. An E/M visit the day before or the day of surgery would normally be bundled into the 90-day global payment. Modifier 57 breaks out this E/M when it was the actual clinical encounter at which the physician made the **initial decision** to perform the surgery — not just a routine pre-op clearance or post-decision workup.

**Key Rules**
- Applies to **E/M codes only** — not procedure codes.
- Used **only with 90-day global (major) surgeries**.
- For **0-day and 10-day global procedures**, use **modifier 25** for a same-day E/M, not modifier 57.
- The E/M must be the encounter at which surgery was first decided — not a scheduled, pre-planned pre-op visit when the surgery decision had already been made previously.

**Documentation Requirements**
- The E/M note should reflect the evaluation that led to the surgical decision.
- The documentation should clearly show this was the decision-making encounter, not a routine pre-op visit.

**Quick Example**
- A patient presents to their orthopedic surgeon with acute knee injury. After exam and imaging, the surgeon decides the patient needs urgent arthroscopic surgery and schedules it for the following morning.
- Surgeon bills: appropriate E/M level-57 for the decision-making visit.
- The next day: surgical CPT code for the arthroscopy (no modifier on the surgical code).

---

### Modifier 58 – Staged or Related Procedure During Post-Op Period

**Short Definition**
A procedure performed during the post-operative period of the original surgery was planned (staged), more extensive than the original procedure, or required because of the original procedure.

**Long Definition**
Modifier 58 is used when a follow-up **procedure** is performed within the global period of the original surgery, and it falls into one of three categories:
1. **Staged** — it was planned at the time of the original surgery as part of a multi-step treatment plan.
2. **More extensive** — the second procedure is more extensive than what was initially done.
3. **Required by the original procedure** — the original procedure necessitated the follow-up procedure.

Modifier 58 initiates a **new global period** for the second procedure.

**Key Rules**
- Applies to **procedure codes only** — not E/M codes.
- Initiates a **new global period** for the staged/related procedure.
- Use only during a 10-day or 90-day global period — procedures with 0-day globals do not have a post-op period to be within.
- Documentation should reflect the planned or clinically necessary nature of the follow-up procedure.

**Important Distinction: 58 vs. 78**
- Use **58** when the return to the OR was **planned or anticipated** (staged) or when the second procedure is more extensive.
- Use **78** when the return to the OR was **unplanned** due to a complication of the original surgery.

**Quick Example**
- Patient undergoes a wide excision of melanoma; surgeon documents that a planned sentinel lymph node biopsy will follow in two weeks.
- Two weeks later, the sentinel lymph node biopsy is performed while the patient is still in the global period.
- Surgeon bills: sentinel lymph node biopsy CPT-58.
- A new global period begins from the date of the staged procedure.

---

### Modifier 77 – Repeat Procedure by Another Physician

**Short Definition**
The same procedure that was already performed (by a different provider) was repeated — either on the same date of service or during the post-operative period of the original procedure — by a different physician.

**Long Definition**
Modifier 77 is technically a **Repeat Procedure modifier**, not an official global surgery modifier per the NCCI. However, it is functionally connected to the global period because a payer will typically deny a second claim for the same procedure code as a duplicate — especially within a global period — unless the repeat is flagged as being performed by a **different provider**. Modifier 77 communicates that the repeat was legitimate and performed by a different physician.

**Key Rules**
- Applies to **procedure codes only**.
- The repeat procedure must have been performed by a **different physician** than the original.
- Used on the **same date of service** or during the **post-operative period** of the original procedure.
- The companion modifier for the **same physician** repeating their own procedure is **modifier 76**.
- Does not fit neatly into the official global surgery modifier family (24, 25, 57, 58, 78, 79) — it is a repeat procedure modifier with global period implications.

**Documentation Requirements**
- Medical record must document the clinical necessity for repeating the procedure.
- Must clearly identify the different provider performing the repeat.

**Quick Example**
- An ER physician reduces a fracture for a patient (CPT 25600).
- The patient's orthopedic surgeon later the same day determines the reduction was inadequate and performs their own reduction.
- Orthopedic surgeon bills: 25600-77, identifying the repeat was performed by a different provider.

---

### Modifier 78 – Unplanned Return to OR for Treatment of Complication

**Short Definition**
The surgeon had to take the patient back to the operating room during the post-operative period of the original surgery to treat a **complication** of that surgery — this was unplanned and not staged.

**Long Definition**
Modifier 78 identifies an **unplanned, unscheduled return to the operating room** during the original procedure's global period, where the reason for the return was a **complication** of the original surgery. Because the complication arose from the original procedure, it is considered related — and therefore modifier 78 does **not** start a new global period; the original global period continues.

**Key Rules**
- Applies to **procedure codes only** — not E/M codes.
- The return must be to a formal **operating room** (or suite of equivalent level) — not just a bedside procedure or office procedure.
- Does **not** initiate a new global period — the patient remains within the original global period.
- Modifier 78 = related complication + unplanned = stays in original global.
- Modifier 58 = related/staged/planned = new global period begins.
- Modifier 79 = unrelated procedure + unplanned = new global period begins.

**Documentation Requirements**
- The operative note must clearly identify that the return was due to a complication of the original surgery.
- Documentation should state it was unplanned and identify the specific complication.

**Quick Example**
- Patient undergoes an open aortic valve replacement.
- 2 days post-op, the patient develops significant mediastinal bleeding requiring a return to the OR for exploration and control.
- Surgeon bills: exploration/hemostasis CPT code-78.
- The original global period continues; no new global period is started.

---

### Modifier 79 – Unrelated Procedure During Post-Op Period

**Short Definition**
A procedure performed during the post-operative period of the original surgery was **completely unrelated** to the original surgery or its post-operative care.

**Long Definition**
Modifier 79 is the procedure-code equivalent of modifier 24. Just as modifier 24 allows a separate E/M for an unrelated condition during the global period, modifier 79 allows a separate **procedure** for an unrelated condition or body system during the global period. The key distinction is that the procedure and its clinical indication must be entirely separate from the original surgery and its expected course of recovery.

Modifier 79 **initiates a new global period** for the unrelated procedure — unlike modifier 78 (which stays within the original global).

**Key Rules**
- Applies to **procedure codes only** — not E/M codes (use modifier 24 for unrelated E/Ms).
- Initiates a **new global period** for the unrelated procedure.
- The ICD-10-CM diagnosis supporting the unrelated procedure must differ from the original surgical diagnosis.
- Does **not** apply to procedures with 0-day global indicators, XXX, or ZZZ global indicators.

**Important Distinction: 79 vs. 78**
| | Modifier 78 | Modifier 79 |
|---|---|---|
| Related to original surgery? | Yes — it's a complication | No — completely unrelated |
| Planned? | No — unplanned | Irrelevant — unrelated |
| New global period? | No | Yes |

**Quick Example**
- Patient is in the 90-day global period following a lumbar spinal fusion.
- 6 weeks post-op, the patient develops a separate condition requiring an appendectomy.
- The appendectomy surgeon bills: appendectomy CPT code-79 (if the same surgeon) — or without any modifier if a different surgeon/group.
- A new global period begins for the appendectomy.

---

## Full Family Summary: How to Choose the Right Modifier

```
Is it an E/M or a Procedure?  
│  
├── E/M Service  
│ ├── Same day as a 0-day or 10-day global procedure → Modifier 25  
│ ├── Day of/day before a 90-day global surgery (decision for surgery) → Modifier 57  
│ └── During post-op period, unrelated to surgery → Modifier 24  
│  
└── Procedure  
├── During post-op period, staged/planned/more extensive → Modifier 58 (new global)  
├── During post-op period, unplanned complication of original surgery → Modifier 78 (stays in original global)  
├── During post-op period, completely unrelated → Modifier 79 (new global)  
└── Repeat of same procedure by a DIFFERENT provider → Modifier 77 (new global for that provider)
```


## Related Notes
- [[-54]]
- [[-55]]
- [[-56]]
- [[-76]]
- [[Global Surgical Package Modifiers MOC]]
