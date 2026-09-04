**Tags:** #coding/rules #inpatient #medicare

## Definition
A split/shared visit is an E/M service provided jointly by a **physician and a non-physician practitioner (NPP)** in the same group. See **[[-FS]]** for more details.

> [!example]
> If the ANP wrote the note (Name at the very top) and MD came in and wrote their attestation "**I saw and evaluated the patient**", it would be billed with ANP and MD with **[[-FS]]** modififer
> 
> If the MD states that they saw the patient and provided the substantive portion, then it would be billed as MD/MD with **[[-FS]]** modifier
---

## 2024 Medicare Changes

> [!IMPORTANT] Substantive Portion
> Starting 2024, the **substantive portion** determines who bills:
> - More than half of total time, OR
> - Most of the MDM

## Requirements

| Element | Requirement |
| :--- | :--- |
| **Same Group** | Must be same specialty/group |
| **Same Day** | Services on same calendar date |
| **Face-to-Face** | <mark style="background:rgba(240, 200, 0, 0.2)">Both must have face-to-face contact</mark> |
| **Documentation** | <mark style="background:rgba(240, 200, 0, 0.2)">Both must document their portio</mark>n |

## Billing Rules

### Physician Bills When
- Physician performs substantive portion
- Modifier **[[-FS]]** required

### NPP Bills When
- NPP performs substantive portion
- No modifier required

## Documentation
Split/Shared Visit Documentation:

- **Provider A**: 20 minutes, reviewed labs
- **Provider B**: 25 minutes, patient exam
- **Total time**: 45 minutes
- **Substantive portion**: Provider B
- **Billing provider**: Provider B

> [!WARNING] Teaching Settings
> Split/shared rules do **NOT** apply in teaching physician settings. Different rules apply.

## Not Allowed For

- **Critical care services** (**[[99291]]-[[99292]]**)
- Consultation codes
- **Procedures (only E/M)**
- Different specialties (generally)

> [!TIP] Time Tracking
> Each provider should document their individual time and activities for compliance.

---

## The -FS Modifier, Decoded

**What it is:** **[[-FS]]** = "**Split (or Shared) E/M Visit.**" It tells **Medicare** that two clinicians — a **physician** and an **NPP (NP/PA)** from the _same group_ — both contributed to one E/M encounter, **but only one of them is billing for it**. Modifier **[[-FS]]** (Split or Shared E/M Visit) must be reported on claims for split (or shared) visits

---

### The Setting Rule (this is where most confusion happens)

Modifier **[[-FS]]** is **facility-only**. Split or shared E/M services performed in an office setting must follow incident-to rules instead, and modifier -FS must not be reported in those cases — **so if you're inpatient/observation/ED/outpatient hospital, FS is in play**; private office or freestanding clinic, it's off the table entirely.

---

### Who Gets to Bill (the "substantive portion" test)

Payment goes to whoever performed the **substantive portion** of the visit, defined as either:

- **More than half of the total time**, or
- **The substantive part of Medical Decision Making (MDM)**

Beginning in calendar year 2024, **the practitioner who spends more than half of the total time, or performs the substantive part of MDM can be considered to have performed the substantive portion and can bill for the split (or shared) E/M visit**

A quirk worth flagging: **if MDM is the chosen method and the physician documents their own MDM, it is not necessarily required for the patient to be seen by the physician** — though most hospitals still require physician face-to-face contact as an internal compliance policy, so check facility rules before leaning on this.

**Payment impact:** whoever bills determines the rate — **physician bills at 100%**, **NPP bills at 85%**. If the physician did the substantive portion, **the claim pays at 100%; if the APP did, it pays at 85%.**

---

### Critical Care Gets Its Own Rule

For **[[99291]]**/**[[99292]]**, forget **MDM** entirely — it's **time-only**. **Split or shared visits** occur when the total critical care service time furnished by a **physician** and **NPP** in the same group on a given calendar date to a patient is summed, and the practitioner who furnishes the substantive portion of the cumulative critical care time reports the critical care service — **meaning you add both clinicians' time together, and whoever contributed the majority bills**, with **[[-FS]]** appended to the critical care code.

---

### Documentation Requirements

- **Medical record** must **identify both practitioners** involved
- The **billing practitioner must sign and date** the note
- One of the **practitioners** must have **face-to-face contact** with the patient, but it doesn't necessarily have to be the physician, nor the practitioner who performs the substantive portion and bills for the visit — so the physician doesn't have to be the one who laid eyes on the patient, but _someone_ on the team had to.

---

### Where Coders Get Tripped Up

| Pitfall                                             | Fix                                                                                                                                                                                                      |
| --------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Applying [[-FS]] in an office/clinic visit**               | [[-FS]] is facility-only — office split visits fall under incident-to, not FS                                                                                                                                 |
| **Using modifier [[-52]] for a "partial" split visit**      | The modifier for reduced services ([[-52]]) cannot be used to report partial E/M visits, including split/shared visits — FS is the only correct modifier here                                                |
| **Applying split/shared logic to SNF visits**           | SNF E/M visits don't meet the definition of split or shared services because "incident to" payment is available in the NF setting — those visits must be performed in their entirety by one practitioner |
| **Defaulting to "whoever saw the patient first" bills** | Billing goes to whoever did the _substantive_ portion (time or MDM), not necessarily the first clinician in the room                                                                                     |

---

### Quick Decision Checklist

1. **Facility setting** (not office)? → proceed
2. **Physician + NPP, same group, same patient, same calendar date? → proceed**
3. Determine substantive portion by **time** (>50%) or **MDM** — **<font color="#ff0000">pick one method consistently per encounter</font>**
4. Bill under whoever met that threshold
5. Append **[[-FS]]** to the **E/M (or critical care)** code
6. Confirm documentation names both clinicians and is signed by the billing provider

---

<sub>Sources: CMS MLN006764, Evaluation and Management Services (May 2026); CMS Medicare Claims Processing Manual, Pub. 100-04, Ch. 12, §30.6.18; Noridian JE Part B, Split or Shared Services; PCG Software, Modifier FS for E/M Visits (2026); EM Consulting, Split-Shared Visit Rules Remain for 2026; Verimedix, Incident-to & Split/Shared Visit Billing (July 2026).</sub>

<br>

[[-FS]]
[[00 Inpatient ProFee Coding MOC]]
[[GC -- Teaching Physician Rules]]
[[Inpatient Modifiers]]