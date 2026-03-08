---
title: "Global Surgical Package MOC"
aliases:
  - Global Surgery MOC
  - Global Period Reference
  - Surgical Global Package Rules
  - CMS Global Surgery Policy
  - Global Surgical Package Rules
tags:
  - CPT
  - MOC
  - global-period
  - global-surgery
  - CMS
  - Medicare
  - MPFS
  - modifiers
  - billing
  - coding-rules
  - shared-infrastructure
  - all-specialties
note_type: MOC
specialty: All Specialties
source_authority: "CMS Medicare Physician Fee Schedule; CMS MLN Booklet Global Surgery (MLN907166)"
status: active
date_created: 2026-02-23
date_modified: 2026-02-23
related_notes:
  - "[[Ophthalmology CPT Codes Reference]]"
  - "[[Otolaryngology CPT Codes Reference]]"
  - "[[Urology CPT Codes Reference]]"
  - "[[Nephrectomy Procedures Family MOC]]"
  - "[[Procedure Status & Complexity Modifiers]]"
  - "[[H20 Iridocyclitis Family MOC]]"
---

# Global Surgical Package MOC

## What Is the Global Surgical Package

The **global surgical package** is a Medicare and commercial payer policy that bundles a defined set of pre-operative, intra-operative, and post-operative services into a single surgical fee for a given CPT procedure code. When a surgeon bills a surgical CPT code, the reimbursement is intended to cover all services within the global package — separately billing for included services is incorrect and constitutes overbilling.

The global package applies to the **operating surgeon only** — it does not restrict the billing of other providers (**e.g., hospitalists, anesthesiologists, consulting physicians**) who independently evaluate or treat the patient.

---

## Global Period Designations

CMS assigns one of the following global period indicators to every CPT surgical code on the Medicare Physician Fee Schedule:

| Indicator | Description                                                                                                      | Examples                                                                                                                                                                                                                           |
| --------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **000**   | Endoscopic or minor procedure — no pre-op E/M included the day before; no post-op visits included                | Intravitreal injection ([[67028]]), cerumen removal ([[69511]]), punctal plug ([[68761]]), diagnostic laryngoscopy ([[31575]])                                                                                                     |
| **010**   | Minor procedure — includes 1 related E/M visit on day of procedure; all related post-op visits for 10 days after | YAG capsulotomy ([[66821]]), tympanostomy tubes ([[69436]]), chalazion ([[67800]]), [[epistaxis]] control ([[30901]]/[[30905]]), turbinate reduction ([[30130]])                                                                   |
| **090**   | Major procedure — includes pre-op visit 1 day before; all related post-op visits for 90 days after               | Cataract ([[66984]]), nephrectomy ([[50220]]/[[50230]]/[[50546]]), tonsillectomy ([[42820]]/[[42826]]), septoplasty ([[30520]]), FESS ([[31254]]-[[31298]]), trabeculectomy ([[66170]]), PPV ([[67036]]), laryngectomy ([[31360]]) |
| **MMM**   | Maternity — global period does not apply in standard way                                                         | OB procedures                                                                                                                                                                                                                      |
| **XXX**   | Global concept does not apply                                                                                    | Diagnostic imaging, pathology, some E/M codes                                                                                                                                                                                      |
| **YYY**   | Payer determines global period                                                                                   | Facility-specific                                                                                                                                                                                                                  |
| **ZZZ**   | Add-on code — follows primary code global period                                                                 | Add-on CPT codes always use ZZZ                                                                                                                                                                                                    |

---

## What Is ALWAYS Included in the Global Package

Regardless of whether the global period is 010 or 090, the following services are **always included** in the surgical fee and may NOT be separately billed by the operating surgeon:

**Pre-operative:**
- One E/M visit the day before major surgery (090 global only).
- On the day of surgery — all E/M visits related to the decision to perform surgery (when the decision was made at a prior encounter — if the decision to operate was made at the same visit as surgery and is separately identifiable, modifier -57 may apply).

**Intra-operative:**
- All services provided in the operating room or procedure room as part of the surgery.
- Local or topical anesthesia administered by the operating surgeon.
- Topical or local infiltration of anesthetic.
- Writing post-operative orders.
- Evaluating the patient in the recovery room.

**Post-operative:**
- All routine follow-up visits within the global period related to the surgery.
- Suture, staple, clip, and drain removal.
- Dressing changes performed by the surgeon or surgeon's staff.
- Management of routine post-operative pain and infection treated conservatively (no return to OR).

---

## What Is NEVER Included — Always Separately Billable

The following services are **explicitly excluded** from the global package and ARE separately billable:

| Service                                                           | Modifier Required | Notes                                                                               |
| ----------------------------------------------------------------- | ----------------- | ----------------------------------------------------------------------------------- |
| **Initial decision to perform surgery (when made at separate visit)** | [[-57]]           | When the decision to operate is made at a separate encounter, not the operative day |
| **Diagnostic tests ordered during global period**                     | None              | Labs, imaging, pathology — always separately billable                               |
| **Treatment of unrelated conditions during global period**            | [[-24]]           | E/M for conditions unrelated to the surgery                                         |
| **Unplanned return to OR for complications**                          | [[-78]]           | Post-op hemorrhage, wound dehiscence, infection requiring OR                        |
| **Unrelated surgical procedure during global period**                 | [[-79]]           | Different surgical problem during same surgeon's global period                      |
| **Staged or planned additional procedures**                           | [[-58]]           | Planned second-stage procedure known at time of original surgery                    |
| **Critical care services**                                            | None              | Separately reportable even during global period                                     |
| **Other physician or provider services**                              | None              | Global package applies only to the operating surgeon                                |
| **Supplies beyond standard post-op care**                             | Appropriate HCPCS | Special wound care materials, grafts billed separately by facility                  |
| **Anesthesia**                                                        | Anesthesia codes  | Billed separately by anesthesiologist or CRNA                                       |

---

## The Decision to Operate — Modifier -57

**Modifier -57** is required when:
- An E/M service on the day of or one day before a **major surgery (090 global)** represents the **decision to perform surgery**.
- Without modifier -57, the E/M would be bundled into the 090-day global package.
- The E/M must represent a substantive, separately documented encounter at which the surgical decision was made — not simply a routine pre-operative check.

**Modifier -57 does NOT apply to minor procedures (000 or 010 global)** — for those, modifier -25 is used when an E/M on the same day as the minor procedure is separately identifiable.

| Scenario                                                                                                      | Correct Modifier | Global Period |
| ------------------------------------------------------------------------------------------------------------- | ---------------- | ------------- |
| **E/M visit where surgeon decides patient needs cataract surgery — surgery performed same day**                   | -57 on E/M       | 090           |
| **E/M visit where decision to do tympanostomy tubes is made — tubes placed same day**                             | [[-25]] on E/M   | 010           |
| **E/M visit where intravitreal injection is administered — patient also has unrelated retinal concern addressed** | -25 on E/M       | 000           |

---

## Post-Operative Period Modifiers — Full Framework

| Modifier    | Full Description                                                  | When to Use                                                                                                                       |
| ----------- | ----------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| **[[-24]]** | **Unrelated E/M during post-op period**                               | Patient presents during global period for a condition unrelated to the surgery — must use ICD-10 code for the unrelated condition |
| **[[-25]]** | **Significant, separately identifiable E/M on same day as procedure** | Most common modifier in ophthalmology (injection + E/M) and ENT (cerumen removal + ETD eval); E/M must be separately documented   |
| **[[-57]]** | **Decision for surgery**                                              | E/M on day of or day before major (090) surgery at which the operative decision was made                                          |
| **[[-58]]** | **Staged or related procedure during post-op period**                 | Planned second procedure — second eye cataract, second-stage FESS, completion nephrectomy                                         |
| **[[-78]]** | **Unplanned return to OR, same surgeon, related to original surgery** | Post-op hemorrhage, wound dehiscence, tube dislodgement — procedure required to manage complication                               |
| **[[-79]]** | **Unrelated procedure by same surgeon during post-op period**         | Different surgical site, different problem — no relation to the original surgery                                                  |

---

## Split Global — Modifiers -54, -55, and -56

When surgical care is split among different surgeons or providers:

| Modifier    | Description                    | When to Use                                                                                                       |
| ----------- | ------------------------------ | ----------------------------------------------------------------------------------------------------------------- |
| **[[-54]]** | **Surgical care only**             | Surgeon performs the operation but will NOT provide post-operative care — transfers follow-up to another provider |
| **[[-55]]** | **Post-operative management only** | Provider takes over post-operative care after surgery performed by another surgeon                                |
| **[[-56]]** | **Pre-operative management only**  | Provider performs and bills for the pre-operative work when a different surgeon will perform the operation        |

**Example:** Patient travels from rural area for surgery. Local ophthalmologist did the pre-op evaluation (-56). Out-of-town surgeon performs cataract surgery (-54). Local ophthalmologist manages all post-op care (-55).

**Claims notes:**
- Both providers must report the same CPT code.
- The dates of service must reflect when each component of care was provided.
- Payers may prorate the global fee among the providers.
- Some payers do not recognize split global billing — verify payer policy before using -54/-55/-56.

---

## 090-Day Global — Visual Timeline

Day -1 Day 0 Day +90
|----------------|-------------------------------|
Pre-op E/M SURGERY End of global period
(bundled) 
Intra-op all bundled
Recovery room bundled
Same-day post-op orders bundled

All related follow-up visits bundled
Suture/drain removal bundled
Routine post-op pain management bundled

SEPARATELY BILLABLE events:
- Unrelated conditions (-24)
- Return to OR complications (-78)
- Staged planned procedures (-58)
- Unrelated procedures (-79)
- Diagnostic tests (no modifier needed)

---

## Concurrent Care and the Global Package

The global package restricts **only the operating surgeon** — other providers caring for the patient during the global period bill normally:

| Provider                        | Restricted by Global Package?                    |
| ------------------------------- | ------------------------------------------------ |
| **Operating surgeon**               | Yes — all related services bundled               |
| **Surgical assistant**              | No — bills separately with -80, -82, or -AS      |
| **Anesthesiologist/CRNA**           | No — separate anesthesia codes                   |
| **Hospitalist/internist**           | No — bills E/M independently                     |
| **Consulting cardiologist**         | No — consultation or E/M billed independently    |
| **Physical/occupational therapist** | No — therapy codes billed independently          |
| **Radiologist**                     | No — imaging interpretation billed independently |
| **Pathologist**                     | No — surgical pathology billed independently     |

---

## Assistant at Surgery — Global Package Interaction

The surgical assistant's services are NOT bundled into the operating surgeon's global package. The assistant bills separately using the appropriate modifier:

| Modifier | Provider | Medicare Payable |
|----------|---------|-----------------|
| [[-80]] | MD/DO surgical assistant | Payable when Medicare MPFS indicator allows; typically 16% of the surgical fee |
| [[-82]] | MD/DO assistant when qualified resident not available | Payable with documentation that a qualified resident was not available |
| [[-AS]] | PA, NP, CNS first assist | Payable at 85% of the -80 rate |

**Medicare assistant-at-surgery indicator on MPFS:**
- **0** — Assistant at surgery not payable (e.g., 50220 simple nephrectomy).
- **1** — Restriction on assistant at surgery does not apply.
- **2** — Assistant at surgery may be payable if documentation of medical necessity is provided.
- **9** — Concept does not apply.

Always verify the current-year MPFS assistant indicator for each CPT code before billing.

---

## Common Global Period Errors — Audit Checklist

- **Billing routine follow-up within global period** — the most common error; routine wound checks, suture removal, and related post-op care are never separately billable during the global period without a modifier.
- **Missing modifier -24** — when treating an unrelated condition during the global period, failure to append -24 will result in a denial or bundling of the E/M.
- **Missing modifier -25** — when performing a minor procedure (000 or 010 global) and a separately identifiable E/M on the same day, failure to use -25 results in E/M denial.
- **Using -25 instead of -57** — for major (090 global) procedures, the decision-to-operate E/M on the day of or day before surgery requires -57, not -25.
- **Billing both the pre-op E/M and the surgery** — the day-before E/M for a 090 global procedure is bundled; do not bill it separately.
- **Not using -78 for return to OR** — complications requiring return to OR within the global period must use -78 or the claim will be bundled or denied.
- **Using -79 instead of -78** — -79 is for UNRELATED procedures; -78 is for RELATED complications; using the wrong modifier triggers audit flags.
- **Failing to document the separately identifiable service** — modifiers -24, -25, and -57 require documentation that clearly supports the separately billed service as distinct from the procedure.
- **Billing technical services (injections, dressing changes) within 090 global** — nursing or clinical staff services that are part of post-op routine care are bundled; do not bill supply codes for standard dressings.

---

## Global Package by Specialty — Quick Reference

**Ophthalmology**

| Procedure                              | Global  | Most Common Modifier Issue                                 |
| -------------------------------------- | ------- | ---------------------------------------------------------- |
| **Cataract ([[66984]])**               | **090** | -58 for second eye; -79 for unrelated eye procedure        |
| **Intravitreal injection ([[67028]])** | **000** | -25 when separate E/M also provided; -LT/-RT laterality    |
| **YAG capsulotomy ([[66821]])**        | **010** | Do not bill within 90 days of cataract (bundled in global) |
| **Trabeculectomy ([[66170]])**         | **090** | -78 for bleb leak requiring OR; -58 for staged needling    |
| **PPV ([[67036]])**                    | **090** | -78 for re-operation; -58 for planned second procedure     |
| **Ptosis repair ([[67904]])**          | **090** | [[-E1]][[-E4]] eyelid laterality **required**              |

**Otolaryngology**

| Procedure                                | Global  | Most Common Modifier Issue                                   |
| ---------------------------------------- | ------- | ------------------------------------------------------------ |
| **Tonsillectomy ([[42820]]/[[42826]])**  | **090** | -78 for post-tonsillectomy hemorrhage return to OR           |
| **Septoplasty ([[30520]])**              | **090** | -51 when turbinate reduction (30140) added same day          |
| **FESS ([[31254]]/[[31255]]/[[31267]])** | **090** | -50 for bilateral; -51 for multiple sinus codes same session |
| **Tympanostomy tubes ([[69436]])**       | **010** | -50 for bilateral; -78 for tube revision for complication    |
| **Cerumen removal ([[69511]])**          | **000** | -25 when separate E/M; -50 for bilateral                     |
| **Laryngectomy ([[31360]])**             | **090** | -78 for return to OR; [[-62]] for co-surgeon                 |

**Urology**

| Procedure                                         | Global | Most Common Modifier Issue                               |
| ------------------------------------------------- | ------ | -------------------------------------------------------- |
| **Open simple nephrectomy ([[50220]])**               | **090**    | -78 for hemorrhage; -24 for unrelated post-op conditions |
| **Open radical nephrectomy ([[50230]])**              | **090**    | -78 for return to OR; -62 for co-surgeon (IVC thrombus)  |
| **Laparoscopic radical nephrectomy with LND (50546)** | **090**    | -53 if converted to open; -78 for complication           |
| **Cystoscopy ([[52000]])**                            | **000**    | -25 when separate E/M; -50 if bilateral                  |
| **TURBT ([[52240]])**                                 | **010**    | -78 for post-TURBT clot evacuation                       |

---

## Suggested Obsidian Linkouts

- [[Ophthalmology CPT Codes Reference]]
- [[Otolaryngology CPT Codes Reference]]
- [[Urology CPT Codes Reference]]
- [[Nephrectomy Procedures Family MOC]]
- [[Otolaryngology Practice Coding Scenarios]]
- [[H20 Iridocyclitis Family MOC]]
- [[Procedure Status & Complexity Modifiers]]
- [[-24]] - Modifier 24
- [[-25]] - Modifier 25
- [[-54]] - Modifier 54, surgical care only
- [[-55]] - Modifier 55, post-operative management only
- [[-56]] - Modifier 56, pre-operative management only
- [[-57]] - Modifier 57, decision for surgery
- [[-58]] - Modifier 58, staged procedure
- [[-78]] - Modifier 78, unplanned return to OR
- [[-79]] - Modifier 79, unrelated procedure during global period
- [[-80]] - Modifier 80, surgical assistant
- [[-AS]] - Modifier AS, PA/NP first assist
