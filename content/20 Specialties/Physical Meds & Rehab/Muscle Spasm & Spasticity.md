---
tags:
  - PMR
  - spasticity
  - muscle-spasm
  - paralysis
  - stroke-sequela
  - TBI
  - nTBI
  - hemiplegia
  - paraplegia
  - quadriplegia
  - CC-MCC
  - inpatient
  - UMN
  - LMN
title: Muscle Spasm & Spasticity — PMR Inpatient Coding Reference
aliases:
  - spasticity
  - muscle spasm PMR
  - spastic hemiplegia
  - flaccid hemiplegia
  - cramp and spasm
  - R25.2
  - G81
specialty: PMR
code_families: G81, G82, G83, R25, I69, S06, G93, M62
created: 2026-05-28
updated: 2026-05-28
status: complete
---

# Muscle Spasm & Spasticity — PMR Inpatient Coding Reference

## Table of Contents

- [[#Clinical Background]]
- [[#Spasm vs. Spasticity — The Coding Distinction]]
- [[#UMN vs. LMN — Why It Matters for Code Selection]]
- [[#Hemiplegia — G81]]
- [[#Dominant vs. Nondominant Assignment Rules]]
- [[#Paraplegia & Quadriplegia — G82]]
- [[#Monoplegia — G83]]
- [[#Cramp & Spasm — R25.2]]
- [[#Muscle Contracture — M62.4x]]
- [[#Etiology Crosswalk]]
  - [[#Stroke Sequela — I69]]
  - [[#Traumatic Brain Injury — S06]]
  - [[#Nontraumatic Brain Injury — G93]]
- [[#Excludes Notes & G81 vs. I69 Decision Tree]]
- [[#Sequencing Rules]]
- [[#CC/MCC Impact Table]]
- [[#CDI Query Triggers]]
- [[#Coding Scenarios]]
- [[#Spasticity Management — Treatment Codes]]
- [[#Related Notes]]

---

## Clinical Background

> [!note] PMR Context
> In **Physical Medicine & Rehabilitation**, **[[spasticity]]** and **muscle spasm** are among the most clinically significant and commonly coded complications of neurological injury. They affect rehabilitation planning, length of stay, functional outcomes, and DRG assignment. Accurate documentation and code selection directly impact resource allocation, quality metrics, and appropriate reimbursement.

Spasticity and muscle spasm arise most commonly in the inpatient PMR setting following:

- **Ischemic or hemorrhagic stroke** — the single most common etiology in PMR inpatient
- **Traumatic brain injury (TBI)** — any severity, from concussion sequelae to diffuse axonal injury
- **Nontraumatic brain injury (nTBI)** — anoxic, hypoxic, toxic, or metabolic etiologies
- **Spinal cord injury (SCI)** — traumatic or nontraumatic
- **Multiple sclerosis ([[G35]])** and other demyelinating diseases
- **Cerebral palsy ([[G80.0]]-[[G80.9]])** — occasionally seen in adult PMR admissions

> [!tip] Why This Matters for Inpatient Abstraction
> Many of these codes carry **CC or MCC** status. Spasticity type (**flaccid vs. spastic**), side, and dominance are all required for the most specific billable code. Vague documentation like "**[[paralysis]]**" or "**weakness**" without qualifiers leaves **DRG weight** on the table.

---

## Spasm vs. Spasticity — The Coding Distinction

> [!important] Do Not Use These Terms Interchangeably
> They are clinically and codingly distinct. A **coder** should never substitute one for the other during code selection or **documentation** review.

| Term                 | Clinical Definition                                                       | Mechanism                                          | Primary ICD-10-CM                                              |
| -------------------- | ------------------------------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------------------- |
| **[[Muscle spasm]]** | Sudden, involuntary, often painful contraction                            | Reflex arc overactivation; local or central origin | [[R25.2]]                                                      |
| **[[Spasticity]]**   | Velocity-dependent increase in muscle tone (UMN sign)                     | Loss of descending inhibition from UMN lesion      | Captured via G81.1x qualifier; no standalone code              |
| **Flaccidity**       | Loss of muscle tone; reduced or absent reflexes                           | LMN lesion or acute UMN disruption (spinal shock)  | Captured via G81.0x qualifier                                  |
| **Rigidity**         | Constant resistance to passive movement (lead-pipe or cogwheel)           | Basal ganglia dysfunction (e.g., Parkinson's)      | [[G20]], G21.x — not a PMR spasticity code                     |
| **[[Contracture]]**  | Fixed shortening of muscle/tendon due to chronic spasticity or immobility | Downstream sequela of unresolved spasticity        | [[M62.40]]-[[M62.48]]                                          |
| **Clonus**           | Rhythmic oscillating contractions in response to sustained stretch        | UMN lesion; associated with spasticity             | Documented but coded through underlying dx; no standalone code |

> [!warning] No Standalone "Spasticity" Code in ICD-10-CM
> Spasticity is captured through:
> 1. The **qualifier** on G81 (**[[spastic]] vs. flaccid hemiplegia**)
> 2. The I69.x [[hemiplegia]] codes when etiology is [[stroke]] sequela
> 3. [[R25.2]] when muscle spasm/cramping is separately documented
>
> There is no **ICD-10-CM code** for "**spasticity NOS**."

---

## UMN vs. LMN — Why It Matters for Code Selection

> [!info] Neurology Refresher
> The **upper motor neuron (UMN)** pathway runs from the motor cortex through the internal capsule, brainstem, and descends via the corticospinal tract. The **lower motor neuron (LMN)** pathway runs from the anterior horn cells of the spinal cord out through peripheral nerves to the muscle.

| Lesion Level                                     | Paralysis Type                               | Muscle Tone                             | Reflexes                                                                 | Clinical Signs                        | Code Pattern                               |
| ------------------------------------------------ | -------------------------------------------- | --------------------------------------- | ------------------------------------------------------------------------ | ------------------------------------- | ------------------------------------------ |
| **UMN** (cortex, brainstem, corticospinal tract) | Spastic                                      | Increased (**[[hypertonia]]**)          | **[[Hyperreflexia]]**, clonus, Babinski+                                 | Scissor gait, fisted hand             | **[[G81.10]]-[[G81.14]] or I69.x5x**           |
| **LMN** (anterior horn, peripheral nerve)        | Flaccid                                      | Decreased or absent (**[[hypotonia]]**) | **[[Hyporeflexia]]**, **[[areflexia]]**, **[[atrophy]]**, fasciculations | Foot drop, wasted limb                | **[[G81.00]]-[[G81.04]]**                      |
| **Acute SCI** (spinal shock phase)               | Initially flaccid even with UMN-level lesion | Decreased                               | Areflexia                                                                | Evolves to spastic over days to weeks | **[[G81.00]]-[[G81.04]] initially → reassess** |

> [!example] Why This Matters for Coding
> **Stroke** and **TBI** produce **UMN lesions → spastic paralysis**. If a physician documents only "**hemiplegia**" post-**[[stroke]]** without specifying type, a CDI query is warranted. Spastic (G81.1x) and flaccid (G81.0x) codes are both CC — but accurate specificity is required for clinical integrity and quality metrics.

> [!caution] Spinal Shock Exception
> In acute **SCI**, the **first hours to days** may present as **flaccid** **[[paralysis]]** due to **spinal shock**, even when the lesion is at a **UMN** level. Once **spinal shock** resolves (**days to weeks**), the tone typically converts to **spasticity**. Code what is documented at the time of encounter — and query when tone changes are clinically documented but not updated in the coding diagnoses.

---

## Hemiplegia — G81

> [!note] Definition
> **[[Hemiplegia]]** = complete [[paralysis]] of one side of the body (arm + leg, same side). **[[Hemiparesis]]** = weakness (partial loss) of one side. Both are captured under G81.

> [!caution] Excludes1 — Critical Before Using G81
> G81 has an **Excludes1** for **hemiplegia** and **hemiparesis** due to sequela of **cerebrovascular disease** (**I69.0-, I69.1-, I69.2-, I69.3-, I69.8-, I69.9-**). before assigning any G81 code.

### G81 Code Table

| Code       | Description                                     | CC/MCC                 |
| ---------- | ----------------------------------------------- | ---------------------- |
| **[[G81.00]]** | Flaccid hemiplegia, unspecified side            | Verify — may be Non-CC |
| **[[G81.01]]** | Flaccid hemiplegia, right dominant side         | CC                     |
| **[[G81.02]]** | Flaccid hemiplegia, left dominant side          | CC                     |
| **[[G81.03]]** | Flaccid hemiplegia, right nondominant side      | CC                     |
| **[[G81.04]]** | Flaccid hemiplegia, left nondominant side       | CC                     |
| **[[G81.10]]** | Spastic hemiplegia, unspecified side            | Verify — may be Non-CC |
| **[[G81.11]]** | Spastic hemiplegia, right dominant side         | CC                     |
| **[[G81.12]]** | Spastic hemiplegia, left dominant side          | CC                     |
| **[[G81.13]]** | Spastic hemiplegia, right nondominant side      | CC                     |
| **[[G81.14]]** | Spastic hemiplegia, left nondominant side       | CC                     |
| **[[G81.90]]** | Hemiplegia, unspecified, unspecified side       | Non-CC                 |
| **[[G81.91]]** | Hemiplegia, unspecified, right dominant side    | CC                     |
| **[[G81.92]]** | Hemiplegia, unspecified, left dominant side     | CC                     |
| **[[G81.93]]** | Hemiplegia, unspecified, right nondominant side | CC                     |
| **[[G81.94]]** | Hemiplegia, unspecified, left nondominant side  | CC                     |

> [!tip] Specificity Drives Value
> The "**unspecified side**" codes (x0) may be **Non-CC**. Query for side and dominance to reach the **CC**-level codes whenever clinically documented. Always verify against current **FY IPPS CC/MCC tables**.

---

## Dominant vs. Nondominant Assignment Rules

> [!important] ICD-10-CM Official Guidelines — Section I.C.6.a
> When the affected side is documented **but not specified as dominant or nondominant**, apply the following defaults:

| Scenario                                   | Default Assignment         | Example Code             |
| ------------------------------------------ | -------------------------- | ------------------------ |
| Right-handed patient, right side paralyzed | **Right dominant**         | **[[G81.11]]**               |
| Right-handed patient, left side paralyzed  | **Left nondominant**       | **[[G81.14]]**               |
| Left-handed patient, left side paralyzed   | **Left dominant**          | **[[G81.12]]**               |
| Left-handed patient, right side paralyzed  | **Right nondominant**      | **[[G81.13]]**               |
| Ambidextrous patient, either side affected | **Dominant**               | **[[G81.11]] or [[G81.12]]** |
| Side documented, dominance NOS in record   | Apply above defaults       | **—**                        |
| Neither side nor dominance documented      | **Unspecified** (x0 codes) | **[[G81.10]], [[G81.90]]**   |

> [!tip] CDI Query Opportunity — Dominance
> **Hand dominance** is frequently undocumented. Query if the side is known but dominance is not stated. Right side is assumed dominant under the guideline default — which is usually correct but not always (**approximately 10% of the population is left-handed**). Dominance documentation matters for functional outcome documentation in **PMR**, not just coding.

---

## Paraplegia & Quadriplegia — G82

> [!note] Scope
> G82 covers bilateral **[[paralysis]]** of the lower limbs (**paraplegia**) or all four limbs (**quadriplegia / tetraplegia**). Most common etiologies in PMR: spinal cord injury (SCI), anoxic brain injury, bilateral **[[cerebral infarcts]]**, and advanced MS or ALS.

### G82 Code Table

| Code       | Description                    | CC/MCC |
| ---------- | ------------------------------ | ------ |
| **[[G82.20]]** | Paraplegia, unspecified        | CC     |
| **[[G82.21]]** | Paraplegia, complete           | CC     |
| **[[G82.22]]** | Paraplegia, incomplete         | CC     |
| **[[G82.50]]** | Quadriplegia, unspecified      | MCC    |
| **[[G82.51]]** | Quadriplegia, C1-C4 complete   | MCC    |
| **[[G82.52]]** | Quadriplegia, C1-C4 incomplete | MCC    |
| **[[G82.53]]** | Quadriplegia, C5-C7 complete   | MCC    |
| **[[G82.54]]** | Quadriplegia, C5-C7 incomplete | MCC    |

> [!important] Complete vs. Incomplete
> - **Complete (ASIA A):** No motor or sensory function preserved below the level of injury
> - **Incomplete (ASIA B-D):** Some preservation of function below the lesion
>
> This distinction is clinically essential and affects both **DRG** assignment and rehabilitation prognosis documentation. Query if not documented.

> [!warning] No Flaccid/Spastic Qualifier in G82
> Unlike G81, the G82 category does not have a **flaccid** vs. **spastic** sub-qualifier. **[[Spasticity]]** in a patient with SCI-related **[[paraplegia]]** or **[[quadriplegia]]** is additionally captured with **[[R25.2]]** when separately documented. Query the physician when tone type has a significant impact on the rehabilitation plan.

> [!tip] Quadriplegia = MCC
> All G82.5x codes carry **MCC** status — one of the highest-impact diagnoses in **PMR** inpatient. Ensure the level of injury (C1-C4 vs. C5-C7) and completeness are documented and queried if absent.

---

## Monoplegia — G83

> [!note] Definition
> **[[Monoplegia]]** = [[paralysis]] or [[plegia]] of a single limb. Less common than [[hemiplegia]] in PMR inpatient, but coded under G83 when present and documented. The same dominant/nondominant rules apply as G81.

### G83 — Monoplegia of Lower Limb (G83.1x)

| Code       | Description                                      |
| ---------- | ------------------------------------------------ |
| **[[G83.10]]** | Monoplegia of lower limb, unspecified side       |
| **[[G83.11]]** | Monoplegia of lower limb, right dominant side    |
| **[[G83.12]]** | Monoplegia of lower limb, left dominant side     |
| **[[G83.13]]** | Monoplegia of lower limb, right nondominant side |
| **[[G83.14]]** | Monoplegia of lower limb, left nondominant side  |

### G83 — Monoplegia of Upper Limb (G83.2x)

| Code       | Description                                      |
| ---------- | ------------------------------------------------ |
| **[[G83.20]]** | Monoplegia of upper limb, unspecified side       |
| **[[G83.21]]** | Monoplegia of upper limb, right dominant side    |
| **[[G83.22]]** | Monoplegia of upper limb, left dominant side     |
| **[[G83.23]]** | Monoplegia of upper limb, right nondominant side |
| **[[G83.24]]** | Monoplegia of upper limb, left nondominant side  |

### Other G83 Codes of Clinical Relevance in PMR

| Code       | Description                                      | Notes                                                              |
| ---------- | ------------------------------------------------ | ------------------------------------------------------------------ |
| **[[G83.40]]** | Cauda equina syndrome without neurogenic bladder | Lower SCI pattern; LMN flaccid                                     |
| **[[G83.44]]** | Cauda equina syndrome with neurogenic bladder    | Adds urologic complication                                         |
| **[[G83.5]]**  | Locked-in state                                  | Severe brainstem injury; ventral pontine lesion; MCC-tier severity |

---

## Cramp & Spasm — R25.2

> [!note] When to Use R25.2
> **[[R25.2]]** (**Cramp and spasm**) is appropriate when muscle spasm or cramping is **documented as a distinct clinical finding** not already subsumed by a more specific paralytic syndrome code.

| Scenario                                                                                      | **Use R25.2?**         | Rationale                                                                                     |
| --------------------------------------------------------------------------------------------- | ------------------ | --------------------------------------------------------------------------------------------- |
| **[[Spastic hemiplegia]]** coded as **[[G81.11]]**; spasticity implied                        | **❌ No**               | Already captured in G81.1x qualifier                                                          |
| **[[[Spastic hemiplegia]]]** coded as **[[I69.351]]**; **spasticity** implied by I69 code     | **❌ Typically No**     | I69 implies the neurological deficit; **[[R25.2]]** is redundant unless separately documented |
| **[[Paraplegia]]** (**[[G82.21]]**) with separately documented severe **spasticity/cramping** | **✅ Yes**              | G82 has no flaccid/spastic qualifier; **[[R25.2]]** adds clinical documentation               |
| **[[Muscle spasm]]** as primary admission complaint, no neurological etiology                 | **✅ Yes — may be PDX** | No G81/G82 warranted; **[[R25.2]]** or underlying musculoskeletal code                        |
| Documented muscle cramps from metabolic/electrolyte cause                                     | **✅ Yes**              | Code underlying cause (e.g., [[hypokalemia]] **[[E87.6]]**) + **[[R25.2]]**                   |
| "**[[Spasticity]]**" documented in SCI patient without hemiplegia qualifier                   | **✅ Consider**         | G82 can't capture it; **[[R25.2]]** gives clinical completeness                               |

> [!caution] CC/MCC Status
> **[[R25.2]]** is **not a CC or MCC**. Its value is clinical accuracy and documentation completeness. It supports medical necessity for therapy services but does not independently shift DRG weight.

---

## Muscle Contracture — M62.4x

> [!note] Clinical Relationship to Spasticity
> Contractures are a **downstream, preventable sequela of chronic or untreated spasticity and prolonged immobility**. In PMR inpatient admissions, contractures frequently appear as additional diagnoses when the patient has had spasticity undertreated prior to admission or was immobile at a prior facility.

| Code       | Description                             | CC/MCC                     |
| ---------- | --------------------------------------- | -------------------------- |
| **[[M62.40]]** | Contracture of muscle, unspecified site | Verify current IPPS tables |
| **[[M62.41]]** | Contracture of muscle, shoulder         | CC                         |
| **[[M62.42]]** | Contracture of muscle, upper arm        | CC                         |
| **[[M62.43]]** | Contracture of muscle, forearm          | CC                         |
| **[[M62.44]]** | Contracture of muscle, hand             | CC                         |
| **[[M62.45]]** | Contracture of muscle, thigh            | CC                         |
| **[[M62.46]]** | Contracture of muscle, lower leg        | CC                         |
| **[[M62.47]]** | Contracture of muscle, ankle and foot   | CC                         |
| **[[M62.48]]** | Contracture of muscle, other site       | CC                         |

> [!tip] CDI Opportunity — Contractures
> **[[Contractures]]** are **frequently visible in PT/OT notes** (**e.g., "patient presents with bilateral elbow flexion contractures, limited passive ROM"**) but absent from the physician's problem list. A targeted **CDI** query asking whether documented range-of-motion limitations represent clinically addressable contractures can convert an invisible complication into a properly documented **CC**.

---

## Etiology Crosswalk

### Stroke Sequela — I69

> [!important] Timing Rule for I69 Codes
> **I69 codes** apply to **any sequela of stroke regardless of how much time has elapsed** since the acute event. There is no **30-day or 90-day cutoff.** The clinical relationship must be documented. If a provider notes the patient has **hemiplegia** from a **stroke 10 years ago**, I69.x5x is the correct code — not G81.x.

The **I69 category** contains dedicated hemiplegia subcodes (**the x5x pattern**) that **replace G81.x** when stroke is the etiology:

| Stroke Type                                | I69 Subgroup | Hemiplegia Code Pattern | Example: Right Dominant |
| ------------------------------------------ | ------------ | ----------------------- | ----------------------- |
| **Nontraumatic subarachnoid hemorrhage**       | I69.0        | I69.05x                 | **I69.051**             |
| **Nontraumatic intracerebral hemorrhage**      | I69.1        | I69.15x                 | **I69.151**             |
| **Other nontraumatic intracranial hemorrhage** | I69.2        | I69.25x                 | **I69.251**             |
| **Cerebral infarction (ischemic stroke)**      | I69.3        | I69.35x                 | **I69.351**             |
| **Other cerebrovascular disease**              | I69.8        | I69.85x                 | **I69.851**             |
| **Unspecified cerebrovascular disease**        | I69.9        | I69.95x                 | **I69.951**             |

**I69 Side Qualifiers (6th character):**

| 6th Character | Meaning                |
| ------------- | ---------------------- |
| **1**             | Right dominant side    |
| **2**             | Left dominant side     |
| **3**             | Right nondominant side |
| **4**             | Left nondominant side  |
| **9**             | Unspecified side       |

> [!example] Decoding I69.351
> - **I69** = Sequelae of cerebrovascular disease
> - **.3** = Following cerebral infarction
> - **5** = Hemiplegia and hemiparesis
> - **1** = Right dominant side
> → *Hemiplegia following cerebral infarction, right dominant side*

> [!caution] I69 Does NOT Distinguish Spastic from Flaccid
> This is a known **ICD-10-CM limitation**. The I69.x5x codes do not have a **flaccid/spastic subqualifier**. If the rehabilitation team is specifically managing **spastic** vs. **flaccid** patterns (**which affects treatment choice significantly**), this distinction cannot be coded with I69 alone. Consider raising this as a clinical documentation gap with your **CDI** team.

---

### Traumatic Brain Injury — S06

> [!note] 7th Character "S" = Sequela
> When coding **TBI-related neurological deficits** in a **PMR** or **rehabilitation** context, the TBI code carries the **7th character "S"** (sequela). The active deficit (**[[paralysis]], [[spasticity]], cognitive impairment**) is coded separately as an additional diagnosis.

**Key S06 Codes — Sequela (7th Character S)**

| Code         | Description                                        |
| ------------ | -------------------------------------------------- |
| **[[S06.0XXS]]** | Concussion, sequela                                |
| **[[S06.1X0S]]** | Traumatic cerebral edema, no LOC, sequela          |
| **[[S06.2X0S]]** | Diffuse TBI, no LOC, sequela                       |
| **[[S06.2X1S]]** | Diffuse TBI, LOC 30 minutes or less, sequela       |
| **[[S06.2X9S]]** | Diffuse TBI, LOC unspecified duration, sequela     |
| **[[S06.3X0S]]** | Focal TBI, no LOC, sequela                         |
| **[[S06.4X0S]]** | Epidural hemorrhage, no LOC, sequela               |
| **[[S06.5X0S]]** | Traumatic subdural hemorrhage, no LOC, sequela     |
| **[[S06.6X0S]]** | Traumatic subarachnoid hemorrhage, no LOC, sequela |

> [!tip] G81.x IS Valid with TBI
> Because G81's Excludes1 only restricts use alongside **I69 stroke sequela codes**, G81.x codes are **valid as additional diagnoses** paired with TBI S06.xxxS codes. This means the spastic vs. flaccid distinction CAN be captured for TBI-related hemiplegia, unlike stroke sequelae.

**Standard TBI + Spastic Hemiplegia Code Set:**
```
PDX: S06.2x0S  (diffuse TBI, no LOC, sequela)
ADD: G81.11    (spastic hemiplegia, right dominant)
ADD: [additional PMR diagnoses as applicable]
```

---

### Nontraumatic Brain Injury — G93

> [!note] Common PMR Causes of nTBI
> **Nontraumatic acquired brain injury** (**nTBI**) results from: **cardiac arrest**, near-drowning, respiratory failure (**anoxic/hypoxic**), **toxic encephalopathy** (**alcohol, drug, metabolic**), CNS infections, and metabolic crises. These patients frequently arrive in PMR with residual spasticity and paralysis identical in presentation to **stroke** or **TBI** patients.

| Code       | Description                                   | CC/MCC |
| ---------- | --------------------------------------------- | ------ |
| **[[G93.1]]**  | Anoxic brain damage, not elsewhere classified | MCC    |
| **[[G93.40]]** | Encephalopathy, unspecified                   | CC     |
| **[[G93.41]]** | Metabolic encephalopathy                      | CC     |
| **[[G93.49]]** | Other encephalopathy                          | CC     |
| **[[G92.9]]**  | Unspecified toxic encephalopathy              | MCC    |
| **[[G92.8]]**  | Other toxic encephalopathy                    | CC     |

> [!tip] G81.x is Valid with nTBI Codes
> Like **TBI**, G93.x codes do not have an **Excludes1 relationship** with G81. Spastic or flaccid **[[hemiplegia]]** can and should be separately coded when documented.

**Standard nTBI + Spastic Hemiplegia Code Set:**
```
PDX: G93.1     (anoxic brain damage — MCC)
ADD: G81.12    (spastic hemiplegia, left dominant — if left, right-handed)
ADD: [additional PMR diagnoses as applicable]
```

---

## Excludes Notes & G81 vs. I69 Decision Tree

> [!caution] G81 Excludes1 — Cannot Use G81.x with I69.x
> **G81 has a formal Excludes1** for **hemiplegia** and **hemiparesis** due to sequela of cerebrovascular disease (**I69.0-, I69.1-, I69.2-, I69.3-, I69.8-, I69.9-**). An **Excludes1** means the conditions cannot coexist in the same coding encounter — you must choose one.

```
┌─────────────────────────────────────────────────────┐
│ Is the hemiplegia/paresis documented as a sequela   │
│ of stroke or cerebrovascular disease?               │
└──────────────────────┬──────────────────────────────┘
                       │
         ┌────── YES ──┤── NO ──────────────────────┐
         │             │                            │
         ▼             │             ┌──────────────▼──────────┐
  Use I69.x5x          │             │ Is the etiology TBI?    │
  Do NOT use G81.x     │             └──────────────┬──────────┘
                       │                            │
                       │             ┌──── YES ─────┤─── NO ──────────────────┐
                       │             │              │                          │
                       │             ▼              │       ┌──────────────────▼──────┐
                       │     S06.xxxS + G81.x       │       │ Is etiology nTBI/anoxic?│
                       │     (Excludes1 does         │       └──────────────────┬──────┘
                       │      not apply to TBI)      │                          │
                       │                             │         ┌──── YES ───────┤──── NO ──────────┐
                       │                             │         │                │                  │
                       │                             │         ▼                │                  ▼
                       │                             │  G93.x + G81.x     No neurological    G81.x alone;
                       │                             │  (valid pairing)    etiology known     query for cause
```

> [!warning] Common Coding Error
> Adding **[[G81.11]]** alongside **[[I69.351]]** to "capture spasticity type" is **incorrect under the Excludes1**. The I69.3x5x codes do not allow simultaneous G81.x. Document this limitation for your CDI team — it's a genuine gap in ICD-10-CM's ability to capture spasticity type post-stroke.

---

## Sequencing Rules

> [!note] PDX Definition — UHDDS
> The principal diagnosis is the condition, **established after study**, chiefly responsible for occasioning the admission.

### Acute Inpatient Admission (Non-IRF)

| Admission Reason                                 | PDX                                                                               | Additional Codes                                                            |
| ------------------------------------------------ | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| **Acute ischemic stroke with new hemiplegia**        | I63.x (type-specific)                                                             | Hemiplegia may be I69.x5x if established sequela; G81.x if TBI/nTBI context |
| **Management of spasticity (Botox, baclofen trial)** | G81.1x or R25.2                                                                   | Underlying neurological etiology                                            |
| **Acute TBI**                                        | S06.xxx with appropriate 7th character (A = initial, D = subsequent, S = sequela) | G81.x if paralysis present                                                  |
| **Acute SCI**                                        | S14.x / S24.x / S34.x (level and completeness)                                    | G82.x                                                                       |
| **Contracture release**                              | M62.4x                                                                            | Underlying neurological diagnosis                                           |

### PMR Inpatient / IRF Admission

> [!important] IRF PDX Convention
> At an IRF, the PDX is the **condition requiring intensive multidisciplinary rehabilitation** — typically the neurological deficit itself, not the original acute illness (which may have resolved).

| Scenario                       | PDX                                  | Key Additional Diagnoses                                            |
| ------------------------------ | ------------------------------------ | ------------------------------------------------------------------- |
| **Post-stroke IRF (hemiplegia)**   | I69.351 (or applicable I69.x5x code) | R25.2 if spasm documented, M62.4x if contracture, dysphagia I69.3x1 |
| **Post-TBI IRF (hemiplegia)**      | S06.xxxS                             | G81.1x, R25.2, cognitive deficits F07.81                            |
| **Post-anoxic injury IRF**         | G93.1                                | G81.x, R25.2, behavioral codes                                      |
| **SCI + spastic paraplegia IRF**   | G82.21 or G82.22 + etiology code     | R25.2, N31.9 neurogenic bladder, L89.x pressure injuries            |
| **SCI + spastic quadriplegia IRF** | G82.5x + etiology code               | R25.2, N31.9, respiratory complications, pressure injuries          |

---

## CC/MCC Impact Table

> [!warning] Verify Against Current FY IPPS Tables
> **CC/MCC** designations are updated annually with each **IPPS Final Rule**. The table below reflects generally stable classifications; always verify against the current year's **IPPS** **CC/MCC** list before relying on these for **DRG** optimization queries.

| Code                  | Description                               | CC/MCC |
| --------------------- | ----------------------------------------- | ------ |
| **[[G81.01]]-[[G81.04]]** | Flaccid hemiplegia (specific sides)       | CC     |
| **[[G81.11]]-[[G81.14]]** | Spastic hemiplegia (specific sides)       | CC     |
| **[[G81.91]]-[[G81.94]]** | Hemiplegia, unspecified (specific sides)  | CC     |
| **[[G82.20]]-[[G82.22]]** | Paraplegia (all subcodes)                 | CC     |
| **[[G82.50]]**            | Quadriplegia, unspecified                 | MCC    |
| **[[G82.51]]-[[G82.54]]** | Quadriplegia (C1-C4 and C5-C7, specified) | MCC    |
| **[[G93.1]]**             | Anoxic brain damage, NEC                  | MCC    |
| **[[G92.9]]**             | Toxic encephalopathy, unspecified         | MCC    |
| **[[G93.40]]**            | Encephalopathy, unspecified               | CC     |
| **[[G93.41]]**            | Metabolic encephalopathy                  | CC     |
| **[[M62.41]]-[[M62.48]]** | Contracture of muscle (site-specific)     | CC     |
| **[[R25.2]]**             | Cramp and spasm                           | Non-CC |

> [!tip] DRG Impact Summary
> - **Quadriplegia (G82.5x)** as MCC significantly elevates DRG weight in almost any base MS-DRG pairing
> - **Spastic/flaccid hemiplegia (G81.x1-x4)** as CC can shift a no-CC DRG to the CC tier
> - **Contractures (M62.4x)** as CC add weight when the principal diagnosis is neurological or rehabilitation-focused
> - **R25.2** contributes clinical documentation completeness but does not independently shift DRG tiers

---

## CDI Query Triggers

> [!example] 
> When to **Query** — **Spasm & Spasticity** in PMR

| Clinical Finding in the Record                                    | CDI Query Focus                                                         | Potential Code Gain                                  |
| ----------------------------------------------------------------- | ----------------------------------------------------------------------- | ---------------------------------------------------- |
| **"Hemiplegia" documented without flaccid/spastic qualifier**     | Spastic or flaccid?                                                     | G81.1x vs. G81.0x (or I69.x5x)                       |
| **"Hemiplegia" without side or dominance documented**             | Which side is affected? Right- or left-handed?                          | Unspecified → site-specific CC code                  |
| **Stroke + hemiplegia, but stroke type not linked to hemiplegia** | Confirm relationship; specify stroke type                               | Determines I69.0x5x vs. I69.1x5x vs. I69.3x5x        |
| **PT/OT notes describe contractures not documented by physician** | Are these separately addressable contractures?                          | M62.4x as CC                                         |
| **SCI with "paralysis" — complete vs. incomplete not stated**     | ASIA classification? Complete or incomplete?                            | G82.21 vs. G82.22; affects CDI and prognosis metrics |
| **Quadriplegia documented but level (C1-C4 vs. C5-C7) absent**    | What is the spinal level of injury?                                     | G82.50 → G82.51-G82.54 (all MCC)                     |
| **"Spasticity" documented without hemiplegia/paralysis pattern**  | What is the pattern and distribution?                                   | Clarify mono/hemi/para/quad; add G81.x or context    |
| **"Brain injury" without trauma/nontrauma distinction**           | Is there a documented mechanism? Was this traumatic?                    | S06.xxxS vs. G93.1/G92.x — MCC implications          |
| **Spasms documented in SCI patient post-acute phase**             | Is spasticity now present, requiring clinical management?               | R25.2 — adds documentation completeness              |
| **Anoxic injury without explicit "anoxic brain damage" language** | Does the chart support anoxic brain damage as an established diagnosis? | G93.1 = MCC if not currently coded                   |

---

## Coding Scenarios

### Scenario 1 — Post-Stroke Spastic Hemiplegia (IRF Admission)

**Clinical Situation:** 68-year-old right-handed male admitted to IRF 3 weeks post-ischemic stroke (left MCA territory infarction). Physician documents: right-sided spastic hemiplegia, dysphagia, and urinary retention.

| Role       | Code        | Description                                              | Rationale                           |
| ---------- | ----------- | -------------------------------------------------------- | ----------------------------------- |
| PDX        | **[[I69.351]]** | Hemiplegia following cerebral infarction, right dominant | Right side; right-handed = dominant |
| Additional | **[[I69.391]]** | Dysphagia following cerebral infarction                  | Directly documented sequela         |
| Additional | **[[R33.9]]**   | Retention of urine, unspecified                          | Additional complication             |

> [!caution] 
> Do **NOT** add **[[G81.11]]** alongside **[[I69.351]]** — **Excludes1** prohibits this combination.

---

### Scenario 2 — Severe TBI with Spastic Quadriplegia (Acute Inpatient)

**Clinical Situation:** 24-year-old male, 8 weeks post-MVA diffuse axonal injury. Transferred to acute inpatient for management of severe **spasticity** and **aspiration pneumonia**. Documentation confirms **[[spastic quadriplegia]]** (**bilateral UE and LE involvement**).

| Role           | Code           | Description                  | Rationale                                                             |
| -------------- | -------------- | ---------------------------- | --------------------------------------------------------------------- |
| **PDX**        | **[[J18.9]]**  | Pneumonia, unspecified       | Reason for this acute admission                                       |
| **Additional** | **S06.2X0S**   | Diffuse TBI, no LOC, sequela | TBI history with sequela character                                    |
| **Additional** | **[[G82.50]]** | Quadriplegia, unspecified    | No C-level specified — query if available                             |
| **Additional** | **[[R25.2]]**  | Cramp and spasm              | Separately documented spasticity burden; G82 has no spastic qualifier |

> [!tip] 
> Query here for cervical level and completeness: **[[G82.51]]-[[G82.54]]** are all **MCC** and would require one additional documented element.

---

### Scenario 3 — Anoxic Brain Injury + Spastic Hemiplegia (Acute Inpatient)

**Clinical Situation:** 55-year-old right-handed female. Post-cardiac arrest anoxic brain injury. PMR consult documents: **spastic hemiplegia**, left side; right-handed patient.

| Role       | Code           | Description                          | Rationale                                              |
| ---------- | -------------- | ------------------------------------ | ------------------------------------------------------ |
| **PDX**        | **[[G93.1]]**  | Anoxic brain damage, NEC             | MCC — primary neurological diagnosis driving admission |
| **Additional** | **[[G81.14]]** | Spastic hemiplegia, left nondominant | Left side + right-handed = left nondominant            |

> [!tip] 
> **[[G81.14]]** is valid here — **[[G93.1]]** is not an I69 code, so the **Excludes1** does not apply. This is one of the key scenarios where you **CAN** capture the spastic qualifier.

---

### Scenario 4 — Muscle Spasm, Musculoskeletal Only (No Neurological Etiology)

**Clinical Situation:** 42-year-old male admitted for severe lumbar paraspinal muscle spasm following a heavy lifting injury. No neurological deficit, no prior stroke or TBI.

| Role       | Code       | Description                | Rationale                                             |
| ---------- | ---------- | -------------------------- | ----------------------------------------------------- |
| PDX        | **[[M54.50]]** | Low back pain, unspecified | Primary complaint driving admission                   |
| Additional | **[[R25.2]]**  | Cramp and spasm            | Documented muscle spasm — appropriate standalone here |

> [!note] 
> No **G81/G82/G83 codes** are appropriate in this scenario. **R25.2** is the correct spasm code in a purely **musculoskeletal** context.

---

### Scenario 5 — Acute SCI with Evolving Tone (Spinal Shock → Spasticity)

**Clinical Situation:** 30-year-old male, T6 level complete SCI. Day 1-6: flaccid paraplegia (spinal shock). By day 12: spasticity developing bilaterally in lower extremities, documented by physiatrist.

| Phase                           | PDX                                               | Additional                            | Rationale                                             |
| ------------------------------- | ------------------------------------------------- | ------------------------------------- | ----------------------------------------------------- |
| Days 1-10 (spinal shock)        | **S24.111A (T6 complete SCI, initial encounter)** | **[[G82.21]] (paraplegia, complete)** | Flaccid phase — G82 has no tone qualifier             |
| Day 12+ (spasticity documented) | **[[S24.111A]]**                                  | **[[G82.21]], [[R25.2]]**             | Add **[[R25.2]]** once physician documents spasticity |

> [!warning] 
> G82 cannot capture tone type —  Only **R25.2** can signal the transition from flaccid to spastic in these patients. Document the change in your query follow-up.

---

### Scenario 6 — Post-Hemorrhagic Stroke Flaccid Hemiplegia (Sequela, Outpatient Reference)

**Clinical Situation:** 74-year-old right-handed female, PMR follow-up visit after right intracerebral hemorrhage 6 months ago. Documentation: flaccid hemiplegia, left side. *(Note: Profee context for reference.)*

| Code            | Description                                                                  | Rationale                                               |
| --------------- | ---------------------------------------------------------------------------- | ------------------------------------------------------- |
| **[[I69.154]]** | Hemiplegia following nontraumatic intracerebral hemorrhage, left nondominant | Left side; right-handed = left nondominant; follows ICH |

> [!note] I69.154 (not G81.0x) is correct — stroke etiology + Excludes1 on G81. 
> The flaccid pattern cannot be captured in the I69 code structure, which is a known ICD-10-CM limitation.

---

## Spasticity Management — Treatment Codes

> [!note] Inpatient Treatment Context
> **Spasticity** management procedures performed during an inpatient stay use **ICD-10-PCS** coding. **CPT** codes below are provided for profee and outpatient reference.

### CPT Reference (Profee / Outpatient)

| CPT           | Description                                    | Notes                       |
| ------------- | ---------------------------------------------- | --------------------------- |
| **[[64644]]** | Chemodenervation of one extremity, 1-4 muscles | Botulinum toxin injection   |
| **[[64645]]** | Chemodenervation of one extremity, 5+ muscles  | Higher-dose/more complex    |
| **[[64646]]** | Chemodenervation of trunk muscles, 1-5 muscles | Axial spasticity management |
| **[[64647]]** | Chemodenervation of trunk muscles, 6+ muscles  | —                           |
| **[[96002]]** | Dynamic surface EMG                            | Spasticity assessment tool  |
| **[[97110]]** | Therapeutic exercises                          | Standard PMR rehab          |
| **[[97530]]** | Therapeutic activities                         | Functional ADL training     |

### ICD-10-PCS — Botulinum Toxin Injection (Inpatient)

> [!info] PCS Section for Chemodenervation
> **Botulinum toxin injection inpatient** is coded from the **Administration section (3)**, using:
> - Body System: **E** (Physiological Systems and Anatomical Regions)
> - Operation: **0** (Introduction)
> - Body Part: **M** (Muscle)
> - Approach: **3** (Percutaneous)
> - Substance: **G** (Other Therapeutic Substance)
>
> **Always** verify the complete **7-character string** in the **current year's ICD-10-PCS tables** — substance and qualifier characters are agent-specific and subject to annual updates.

### Intrathecal Baclofen Pump — Related Codes

| Code             | Description                                                                                 | Context                  |
| ---------------- | ------------------------------------------------------------------------------------------- | ------------------------ |
| **[[Z45.49]]**   | Encounter for adjustment/management of other implanted nervous system device                | **Pump titration visit** |
| **[[T85.615A]]** | Infection and inflammatory reaction due to intrathecal infusion catheter, initial encounter | **Pump complication**    |
| **[[Z96.89]]**   | Presence of other specified functional implants                                             | **Pump status code**     |

---

## Related Notes

- [[Stroke Residuals Coding — G81, R47, R13]]
- [[Z Codes in PMR — Aftercare, Dependency, History]]
- [[Amputation Status Codes in PMR]]
- [[CC MCC Reference — PMR Specialty]]
- [[Functional Dependency Z Codes]]
- [[Facial Fractures — OTO Coding Reference]]
