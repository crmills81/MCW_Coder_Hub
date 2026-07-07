---
tags:
  - MOC
  - global-surgical-package
  - global-period
  - modifier
  - surgery
  - postoperative
  - preoperative
  - E/M
  - CPT-modifier
  - NCCI
  - medical-coding
  - index
title: Global Surgical Package MOC
aliases:
  - Global Surgery MOC
  - Global Surgical Package
  - Global Period MOC
  - Surgical Package Reference
  - Global Surgery Modifiers MOC
note_type: MOC
related_families:
  - Global Surgery Modifiers
  - Surgical Care Split Modifiers
  - Post-Op Period Modifiers
  - E/M with Procedure Modifiers
global_period_types:
  - 0-day (day of procedure only)
  - 10-day (minor procedures)
  - 90-day (major procedures — 1 day pre-op + DOS + 90 days post-op)
date_created: 2026-02-23
date_modified: 2026-02-23
status: active
source: CMS MLN Global Surgery Booklet / CMS NCCI Policy Manual / AMA CPT
---

# Global Surgical Package MOC

## What Is the Global Surgical Package?

The **global surgical package** (also called the global surgery package) is a CMS and AMA concept that bundles payment for all services considered part of a single surgical procedure into one fee. It covers three phases of care: pre-operative, intra-operative, and post-operative — paid as a single allowable amount to the operating surgeon.

Understanding the global package is the foundation of surgical coding. Every modifier in this MOC exists to identify a service that falls **outside** of that bundled payment — a legitimate reason to bill separately.

---

## The Three Global Period Windows

| Period | Duration | What Is Bundled |
|--------|----------|-----------------|
| Pre-operative | 1 day before surgery (90-day global only) | History, exam, and counseling related to the upcoming surgery |
| Intra-operative | Day of surgery | All services normally required to complete the procedure |
| Post-operative | 0, 10, or 90 days after surgery depending on procedure | Follow-up visits related to recovery, typical complications, and wound care |

> **0-day global:** Only the day of the procedure is bundled — no pre-op or post-op window.
> **10-day global:** Day of procedure + 10 post-op days bundled.
> **90-day global:** 1 day pre-op + day of procedure + 90 post-op days bundled.

---

## What Is Always Included in the Global Package (Cannot Be Billed Separately)

- Pre-operative visits the day before surgery (90-day global procedures).
- Intra-operative services that are a normal part of the surgery.
- Complications that do not require a return to the OR (treated in office or bedside).
- Post-operative follow-up visits directly related to recovery during the global period.
- Typical post-op pain management.
- Routine supplies and wound care during the global period.
- E/M services by the operating surgeon related to the surgical condition during the global period.

---

## What Can Be Billed Separately (With the Right Modifier)

This is where the modifier family comes in. Each modifier below unlocks a specific type of separately billable service during or adjacent to the global period.

---

## Cluster 1 — Surgical Care Split Modifiers
> Used when the pre-operative, intra-operative, and post-operative care is divided between different providers.

| Modifier | Note Link | Summary |
|----------|-----------|---------|
| [[-54]] | CPT Modifier 54 - Surgical Care Only | Surgeon performs the operation only; does not provide pre-op or post-op care |
| [[-55]] | CPT Modifier 55 - Postoperative Management Only | Provider takes over post-op care only; did not perform the surgery |
| [[-56]] | CPT Modifier 56 - Surgical Care Only; Guidelines, usage, and billing | Provider performed pre-op management only; did not perform the surgery |

> **Key rule:** When modifier 54 is used by the operating surgeon, modifiers 55 and/or 56 must be used by the respective providers taking over those phases of care. The global package must be fully accounted for.

---

## Cluster 2 — E/M Services Adjacent to or During the Global Period
> Used when a legitimate E/M service falls within the bundled window but deserves separate payment.

| Modifier | Note Link | When to Use |
|----------|-----------|------------|
| [[-25]] | CPT Modifier 25 - Significant Separately Identifiable E/M | Significant, separate E/M on the **same day** as a 0-day or 10-day global procedure |
|[[-57]] | CPT Modifier 57 - Decision for Surgery | E/M on the **day of or day before** a 90-day global surgery where the **decision for surgery** was made |
| [[-24]] | CPT Modifier 24 - Unrelated E/M During Post-Op Period | E/M **during the post-op period** for a condition **completely unrelated** to the surgery |

> **Quick rule:** 25 = same-day, minor global. 57 = pre-op day, major global. 24 = during post-op, unrelated condition.

---

## Cluster 3 — Procedures Performed During the Post-Op Period
> Used when a procedure falls within the global window but qualifies for separate reimbursement.

| Modifier | Note Link | Related or Unrelated | New Global Period? |
|----------|-----------|----------------------|-------------------|
| [[-58]] | CPT Modifier 58 - Staged or Related Procedure | **Related** — staged, more extensive, or required by original surgery | **Yes** |
| [[-78]] | CPT Modifier 78 - Unplanned Return to OR | **Related** — unplanned complication of original surgery | **No** — stays in original global |
| [[-79]] | CPT Modifier 79 - Unrelated Procedure During Post-Op Period | **Unrelated** to original surgery | **Yes** |
| [[-77]] | CPT Modifier 77 - Repeat Procedure by Another Physician | Same procedure, **different provider** | Yes (for repeating provider) |

> **Key distinction:** 58 vs. 78 — both are related to the original surgery, but 58 was **planned/staged** (new global) and 78 was **unplanned/complication** (no new global).

---

## Full Modifier Decision Tree

```
Is a service falling within or adjacent to a global surgical period?  
│  
├── Is it an E/M service?  
│ │  
│ ├── Same day as a 0-day or 10-day global procedure  
│ │ └── → Modifier 25 (significant, separate E/M)  
│ │  
│ ├── Day of or day before a 90-day global surgery  
│ │ └── Was this the visit where surgery was decided?  
│ │ ├── Yes → Modifier 57  
│ │ └── No → Bundled (do not bill separately)  
│ │  
│ └── During post-op period  
│ ├── Related to the surgery → Bundled (do not bill separately)  
│ └── Unrelated to the surgery → Modifier 24  
│  
└── Is it a Procedure?  
│  
├── Is the global package being split between providers?  
│ ├── Surgery only → Modifier 54  
│ ├── Post-op care only → Modifier 55  
│ └── Pre-op management only → Modifier 56  
│  
└── Is the procedure during the post-op period?  
├── Related + Planned/Staged/More Extensive  
│ └── → Modifier 58 (new global period begins)  
│  
├── Related + Unplanned Complication + Return to OR  
│ └── → Modifier 78 (no new global period)  
│  
├── Unrelated to original surgery  
│ └── → Modifier 79 (new global period begins)  
│  
└── Repeat of same procedure by a DIFFERENT provider  
└── → Modifier 77 (new global for repeating provider)
```


---

## Common Mistakes to Avoid

- **Using modifier 57 with a minor (0-day or 10-day) procedure** — use modifier 25 instead.
- **Using modifier 25 with a 90-day global surgery on the day of surgery** — use modifier 57 if it was the decision-making visit.
- **Using modifier 78 for a staged/planned return to the OR** — use modifier 58 if the return was anticipated.
- **Using modifier 79 for a complication-related procedure** — modifier 79 is for unrelated procedures; use modifier 78 for complications.
- **Billing a separate E/M for routine post-op follow-up** — this is always bundled, regardless of modifier.
- **Using modifier 55 without the operating surgeon using modifier 54** — the global must be fully accounted for when splitting care.
- **Forgetting that modifier 78 does NOT start a new global period** — the original global continues.
- **Forgetting that modifiers 58, 79, and 77 DO start a new global period.**

---

## Related Note Clusters in This Vault

### Surgical Care Split Family
- [[-54]]
- [[-56]]
- [[-55]]

### Global Period Exception Modifiers
- [[Global Surgery Period Modifiers - Comparison & Reference]]

### Procedure Status & Complexity Modifiers
- [[-22]]
- [[-52]]
- [[-53]]

### Anesthesia Modifier Family
- [[-AA]]
- [[-QK]]
- [[-QX]]
- [[-QZ]]

### Distinct Procedural Service / NCCI Family
- [[-XE]]
- [[-XP]]
- [[-XS]]
- [[-XU]]
- [[-59]]

### Assistant Surgeon Family
- [[-80]]
- [[-81]]
- [[-82]]
