---
description: "CPT Modifier XE - Separate Encounter"
aliases:
  - Modifier -XE
  - Modifier XE
  - XE Modifier
  - Separate Encounter Modifier
tags:
  - modifier
  - NCCI
  - distinct-procedural-service
  - XEPSU
  - modifier-59-subset
  - bundling
  - HCPCS
modifier_code: XE
modifier_family: X{EPSU}
modifier_type: HCPCS Level II
full_name: Separate Encounter
short_definition: "Service is distinct because it occurred during a separate encounter on the same date of service."
reason_for_distinctness: Different encounter, same DOS
replaces_modifier: "59 (when separate encounter is the specific reason)"
use_with_em: false
audit_risk: Moderate
cms_approved: true
ncci_bypass: true
related_modifiers:
  - "[[-XP]]"
  - "[[-XS]]"
  - "[[-XU]]"
  - "[[-59]]"
date_created: 2026-02-22
date_modified: 2026-02-22
note_type: modifier-reference
status: active
source: CMS MLN Matters / NCCI Policy
---


# Modifier XE - Separate Encounter

## Short Definition
A service that is distinct because it occurred during a **separate encounter** on the same date of service.

## Long Definition
Modifier XE is a HCPCS Level II modifier and one of four modifiers collectively known as the **X{EPSU} modifiers**. These modifiers were introduced by CMS as more specific subsets of modifier 59 (Distinct Procedural Service). Modifier XE is used when two procedures that are normally bundled together via NCCI (National Correct Coding Initiative) edits actually occurred during separate, distinct encounters on the same calendar date — not simultaneously or within the same operative session.

The key distinction: both services happen on the **same day**, but they are separated by time and/or a different clinical encounter, making them legitimately distinct from one another.

## When to Use
- Two or more procedures that are bundled by NCCI edits were performed on the **same date of service** but during **separate, distinct encounters or sessions**.
- For example: a procedure performed in the morning office visit and a second procedure performed later that day in a separate session (e.g., afternoon or emergency visit).
- The procedures are not overlapping and were not performed simultaneously.

## When NOT to Use
- When procedures occurred during the **same encounter/session** — XE would be incorrect; consider XS, XP, or XU instead.
- When the service is on a **different date of service** — no modifier is needed for distinctiveness across dates.
- When a more specific X{EPSU} modifier (XP, XS, or XU) better describes the circumstances — always choose the most specific modifier.
- Do **not** use XE and modifier 59 together on the same claim line.
- Do **not** append to E/M services.

## Documentation Requirements
- The medical record must clearly document that the two services occurred at **separate times/encounters** on the same date.
- Each encounter should have its own note, timestamp, or documentation that establishes it as a separate clinical encounter.
- Rationale for the separate encounter must be clinically supported and not appear as unbundling without cause.

## Key Facts
- XE is a **HCPCS Level II** modifier (two alpha characters), not a CPT modifier.
- Per CMS guidelines, XE bypasses NCCI edits in the same manner as modifier 59.
- CMS prefers XE over modifier 59 whenever separate encounter is the specific reason for reporting the service separately.
- Modifier 59 is now considered a modifier of **last resort** — use XE (or another X{EPSU}) whenever it accurately applies.

## X{EPSU} Modifier Family — Quick Reference
| Modifier | Full Name | Reason for Distinctness |
|----------|-----------|------------------------|
| -XE | Separate Encounter | Different encounter, same DOS |
| [[-XP]] | Separate Practitioner | Different provider performed the service |
| [[-XS]] | Separate Structure | Different organ or anatomical structure |
| [[-XU]] | Unusual Non-Overlapping Service | Does not overlap usual components of main service |
| [[-59]] | Distinct Procedural Service | Use ONLY if no X{EPSU} modifier applies |

## Quick Example
- Patient sees an otolaryngologist in the morning for nasal congestion; a diagnostic nasal endoscopy is performed.
- The same patient returns later that afternoon for a separate complaint; another procedure is performed at that visit.
- The second procedure, which would normally bundle with the morning procedure, is billed with modifier **XE** to indicate it occurred during a separate encounter on the same DOS.
- Documentation: two distinct visit notes with separate timestamps confirming separate encounters.

## Related Notes
- [[-XP]]
- [[-XS]]
- [[-XU]]
- [[-59]]
