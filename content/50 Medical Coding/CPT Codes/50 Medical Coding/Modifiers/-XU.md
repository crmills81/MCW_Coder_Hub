---
tags:
  - modifier
  - NCCI
  - distinct-procedural-service
  - XEPSU
  - modifier-59-subset
  - bundling
  - HCPCS
  - non-overlapping
  - complex-modifier
description: CPT Modifier XU - Unusual Non-Overlapping Service
aliases:
  - Modifier -XU
  - Modifier XU
  - XU Modifier
  - Unusual Non-Overlapping Service Modifier
modifier_code: XU
modifier_family: X{EPSU}
modifier_type: HCPCS Level II
full_name: Unusual Non-Overlapping Service
short_definition: Service is distinct because it does not overlap the usual components of the main service, even though the two codes are typically bundled.
reason_for_distinctness: Does not overlap usual components of main service
replaces_modifier: 59 (when non-overlapping service components is the specific reason)
use_with_em: false
audit_risk: High
cms_approved: true
ncci_bypass: true
documentation_intensity: High
clinical_reasoning_required: true
related_modifiers:
  - "[[-XP]]"
  - "[[-XE]]"
  - "[[-XS]]"
  - "[[-59]]"
date_created: 2026-02-22
date_modified: 2026-02-22
note_type: modifier-reference
status: active
source: CMS MLN Matters / NCCI Policy
---


# Modifier XU - Unusual Non-Overlapping Service

## Short Definition
A service that is distinct because it **does not overlap the usual components** of the main service — even though the two codes are typically bundled together.

## Long Definition
Modifier XU is a HCPCS Level II modifier and part of the **X{EPSU} modifier family** — CMS-created subsets of modifier 59. Modifier XU is used when two procedures that are normally bundled by NCCI edits were both performed, but one of them was performed for a **completely separate and distinct clinical purpose** that does not overlap with the components of the other service. In other words, the secondary procedure's work does not duplicate or overlap the pre-service, intra-service, or post-service work of the primary procedure.

This is the most nuanced of the X{EPSU} modifiers. It is used when the procedures are performed during the **same encounter, by the same provider, on the same or adjacent structure**, but the clinical purpose or service components are genuinely non-overlapping.

## When to Use
- Two procedures subject to NCCI bundling were performed during the same encounter by the same provider.
- The procedures involve components of work that **do not overlap** — each procedure's pre-service, intra-service, and post-service work is distinct.
- The procedures are not performed on separate structures (XS) and not during separate encounters (XE) and not by different providers (XP).
- The secondary service is being performed for an entirely separate and distinct clinical indication that does not overlap the typical components of the primary procedure.

## When NOT to Use
- When the procedures are performed during separate encounters — use XE.
- When the procedures are performed on separate anatomical structures — use XS.
- When performed by a different practitioner — use XP.
- When the procedures do overlap in their components and cannot be distinguished clinically — NCCI edit stands; do not use any distinct modifier.
- Do **not** use XU and modifier 59 on the same claim line.
- Do **not** append to E/M services.
- XU should not be used as a default modifier simply because the other X{EPSU} modifiers don't seem to fit — documentation must affirmatively support that work components are truly non-overlapping.

## Documentation Requirements
- The clinical note must clearly explain:
  - What the **primary procedure** was and what its typical components included.
  - What the **secondary procedure** was and why its components were entirely distinct and non-overlapping from the primary.
  - That the two procedures were medically necessary for separate, distinct clinical reasons.
- Documentation should be specific enough to withstand audit scrutiny — generic language such as "both procedures were medically necessary" is insufficient.

## Key Facts
- XU is a **HCPCS Level II** modifier (two alpha characters).
- This is considered the most complex of the X{EPSU} modifiers because it requires clinical reasoning about service component overlap.
- CMS bypasses NCCI edits for claim lines with XU in the same manner as modifier 59.
- Because XU is harder to define objectively, it carries a higher audit risk and requires the most detailed supporting documentation of the four X{EPSU} modifiers.
- Modifier 59 was previously the default for this type of situation; CMS now expects providers to use XU when the reason for distinctness is non-overlapping service components.

## X{EPSU} Modifier Family — Quick Reference
| Modifier | Full Name | Reason for Distinctness |
|----------|-----------|------------------------|
| [[-XE]] | Separate Encounter | Different encounter, same DOS |
| [[-XP]] | Separate Practitioner | Different provider performed the service |
| [[-XS]] | Separate Structure | Different organ or anatomical structure |
| [[-XU]] | Unusual Non-Overlapping Service | Does not overlap usual components of main service |
| [[-59]] | Distinct Procedural Service | Use ONLY if no X{EPSU} modifier applies |

## Quick Example
- An otolaryngologist performs a rigid diagnostic nasal endoscopy ([[31231]]) for nasal complaints.
- During the same visit, the physician performs a separate flexible laryngoscopy ([[31575]]) because the patient also reports coughing, throat clearing, and difficulty swallowing — a completely separate clinical complaint with no overlapping service components.
- These two codes are typically bundled, but because the laryngoscopy work does not overlap the nasal endoscopy's components, modifier **XU** is appended to the laryngoscopy.
- Documentation: the note addresses two distinct complaints, explains the clinical necessity of each procedure, and demonstrates non-overlapping work.

## Related Notes
- [[-XP]]
- [[-XE]]
- [[-XS]]
- [[-59]]
