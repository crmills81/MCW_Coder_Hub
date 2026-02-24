---
description: "CPT Modifier XP - Separate Practitioner"
aliases:
  - Modifier -XP
  - Modifier XP
  - XP Modifier
  - Separate Practitioner Modifier
tags:
  - modifier
  - NCCI
  - distinct-procedural-service
  - XEPSU
  - modifier-59-subset
  - bundling
  - HCPCS
  - multi-provider
modifier_code: XP
modifier_family: X{EPSU}
modifier_type: HCPCS Level II
full_name: Separate Practitioner
short_definition: "Service is distinct because it was performed by a different practitioner than the one who performed the primary bundled service."
reason_for_distinctness: Different provider performed the service
replaces_modifier: "59 (when separate practitioner is the specific reason)"
use_with_em: false
audit_risk: Moderate
cms_approved: true
ncci_bypass: true
related_modifiers:
  - "[[-XE]]"
  - "[[-XS]]"
  - "[[-XU]]"
  - "[[-59]]"
date_created: 2026-02-22
date_modified: 2026-02-22
note_type: modifier-reference
status: active
source: CMS MLN Matters / NCCI Policy
---


# Modifier XP - Separate Practitioner

## Short Definition
A service that is distinct because it was performed by a **different practitioner** than the one who performed the primary (bundled) service.

## Long Definition
Modifier XP is a HCPCS Level II modifier and part of the **X{EPSU} modifier family** — CMS-created subsets of modifier 59. Modifier XP is used when two services would normally be bundled by NCCI edits, but the procedures were performed by two **different practitioners** on the same date of service. Because different providers independently provided the services, the services are clinically and administratively distinct, even if they occurred on the same day.

This modifier is especially relevant in group practices, hospital-based settings, or situations where multiple specialists provide services to the same patient on the same date, and those services would otherwise trigger NCCI edit bundling.

## When to Use
- Two or more procedures that are subject to NCCI bundling edits were performed by **different providers** on the same date of service.
- Each provider is billing their own service under their own NPI.
- The providers are in the same group practice or different practices but their individual services, if combined on a claim, would otherwise be bundled.
- The services are distinct and medically necessary for each individual practitioner to perform.

## When NOT to Use
- When the **same provider** performed both bundled services — use a different X{EPSU} modifier if applicable, or modifier 59 if no other applies.
- When the distinctness is about separate encounters (same provider, different time) — use XE instead.
- When the distinctness is about different anatomical structures — use XS instead.
- Do **not** combine XP with modifier 59 on the same claim line.
- Do **not** append to E/M services.

## Documentation Requirements
- The medical record must clearly identify **both practitioners** by name and NPI.
- Each provider's service should be documented in a separate, attributable note.
- It must be clear that different practitioners performed the respective services.
- Medical necessity for each service, as provided by each practitioner, must be supported in the documentation.

## Key Facts
- XP is a **HCPCS Level II** modifier (two alpha characters).
- CMS treats XP as a more specific version of modifier 59 when the reason for distinctness is provider identity.
- Bypasses NCCI edits in the same manner as modifier 59 when properly used.
- Per CMS guidance, the X{EPSU} modifiers should always be used in preference to modifier 59 when they accurately describe the clinical circumstance.

## X{EPSU} Modifier Family — Quick Reference
| Modifier | Full Name | Reason for Distinctness |
|----------|-----------|------------------------|
| [[-XE]] | Separate Encounter | Different encounter, same DOS |
| -XP | Separate Practitioner | Different provider performed the service |
| [[-XS]] | Separate Structure | Different organ or anatomical structure |
| [[-XU]] | Unusual Non-Overlapping Service | Does not overlap usual components of main service |
| [[-59]] | Distinct Procedural Service | Use ONLY if no X{EPSU} modifier applies |

## Quick Example
- A colorectal surgeon performs a colonoscopy with biopsy ([[45380]]) on a patient.
- Later the same day, the patient's gastroenterologist (separate group, separate NPI) performs a flexible sigmoidoscopy for a distinct clinical reason.
- The gastroenterologist's service would normally bundle with the colonoscopy, but since a **different practitioner** performed it, modifier **XP** is appended to indicate the services are distinct due to separate practitioners.
- Both providers bill under their own NPIs with appropriate documentation in separate notes.

## Related Notes
- [[-XE]]
- [[-XS]]
- [[-XU]]
- [[-59]]
