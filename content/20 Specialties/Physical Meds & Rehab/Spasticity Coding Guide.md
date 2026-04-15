---
tags:
  - ICD-10
  - neurology
  - physical-medicine
  - spasticity
  - pmr
title: Spasticity Coding Guidelines
date: 2026-03-26
category: PM&R
aliases:
  - Muscle Spasticity
  - Cramp and Spasm
---

# Spasticity Coding Guide

## 1. The Default Code: R25.2 (Cramp and spasm)
If the documentation states "**spasticity**" with no underlying cause, syndrome, or specific limb involvement, the Alphabetic Index directs here.
* **Index Path:** Spastic, spasticity -> see also Spasm -> [[R25.2]]
* **Type 1 Excludes:** M62.- (Other disorders of muscle)

## 2. Stiff-Man Syndrome: G25.82
This code is specific to a rare autoimmune neurological disorder and should **never** be used as a catch-all for general spasticity. 
* **Type 1 Excludes:** Tic disorder NOS ([[F95.9]])
* **Type 2 Excludes:** Sleep-related movement disorders (G47.6-)
* **Clinical Validation Risk:** High. Expect denials or audits if anti-GAD antibodies or the specific syndrome are not documented.

## 3. Top PM&R Spasticity Categories
In **Physical Medicine & Rehabilitation**, [[spasticity]] is usually a manifestation of a central nervous system injury. Always look for the underlying cause to code first, or look for specific paralytic patterns.

### Paralytic Syndromes (Chapter 6)
If spasticity is documented as part of a paralytic pattern, use the specific codes:
* **Spastic Hemiplegia (G81.1-)**: Requires 5th/6th characters for side and dominance (e.g., [[G81.11]] for right dominant side).
* **Spastic Paraplegia (G82.2-)**: Often seen with spinal cord injuries.
* **Spastic Quadriplegia (G82.5-)**: Affects all four limbs.

### Cerebral Palsy (Chapter 6)
Spasticity is the most common presentation of CP.
* **Spastic Quadriplegic CP ([[G80.0]])**
* **Spastic Diplegic CP ([[G80.1]])**
* **Spastic Hemiplegic CP ([[G80.2]])**
* **Type 1 Excludes:** Hereditary spastic paraplegia ([[G11.4]]) cannot be coded with G80.-.

## 4. Inpatient vs. Profee Considerations
When navigating the inpatient facility side compared to professional fee coding, the sequencing and weight of spasticity codes shift:
* **CC/MCC Impact:** **R25.2** is generally a non-CC (Complication or Comorbidity). However, underlying causes of spasticity (like acute spinal cord injuries or acute stroke sequelae) carry significant DRG weight. 
* **Sequencing:** For inpatient coding, if the patient is admitted primarily for spasticity management (e.g., severe contractures requiring surgery, or a baclofen pump failure), the underlying cause (**like CP or traumatic brain injury**) is typically sequenced first, followed by the specific spasticity manifestation.


## 5. Common PM&R Interventions & CPT Codes
When spasticity is documented, these are the typical procedural treatments and corresponding CPT codes used to manage the condition. 

### Chemodenervation (Botulinum Toxin / Botox)
Used for targeted muscle relaxation. Code selection is driven by the body area and the number of muscles injected, not the number of injections or units of drug (the drug itself is billed with a HCPCS code like **J0585**).

* **Extremities (Arms/Legs):**
  * **64642**: Chemodenervation of one extremity; 1-4 muscle(s)
  * +**64643**: Each additional extremity, 1-4 muscle(s) *(Add-on code)*
  * **64644**: Chemodenervation of one extremity; 5 or more muscle(s)
  * +**64645**: Each additional extremity, 5 or more muscle(s) *(Add-on code)*
* **Trunk & Neck:**
  * **64646**: Chemodenervation of trunk muscle(s); 1-5 muscle(s)
  * **64647**: Chemodenervation of trunk muscle(s); 6 or more muscle(s)
  * **64616**: Chemodenervation of neck muscle(s) (excluding larynx)
* **Needle Guidance (Crucial to capture if documented):**
  * +**95873**: Electrical stimulation guidance
  * +**95874**: Needle electromyography (EMG) guidance
  * **76942**: Ultrasound guidance for needle placement

### Intrathecal Baclofen (ITB) Therapy
For severe, **systemic spasticity**, a pump delivers baclofen directly into the cerebrospinal fluid. 

* **Pump Analysis & Refills (High volume in the outpatient clinic):**
  * **62367**: Electronic analysis of programmable pump; *without* reprogramming or refill
  * **62368**: Electronic analysis; *with* reprogramming
  * **62369**: Electronic analysis; *with* reprogramming and refill
  * **62370**: Electronic analysis; *with* reprogramming and refill (specifically requiring the skill of a physician or qualified healthcare professional)
* **Implantation (Surgical/Facility):**
  * **62362**: Implantation or replacement of a programmable intrathecal pump
  * **62350**: Implantation, revision, or repositioning of the intrathecal catheter

### Neurotoxin HCPCS J-Codes (Chemodenervation Drugs)
When billing for the drug supply alongside the administration (**CPT**) codes, use the specific J-code for the brand administered. Always verify the exact number of units wasted versus administered, and append the [[-JW]] (drug wasted) or [[-JZ]] (zero drug wasted) modifiers as required by the payer.

* **Botox (onabotulinumtoxinA)**
  * **Code:** J0585
  * **Unit Measurement:** Per 1 unit
  * **Note:** The most commonly used toxin; heavily audited for exact unit counts.

* **Dysport (abobotulinumtoxinA)**
  * **Code:** J0586
  * **Unit Measurement:** Per 5 units
  * **Note:** Requires careful math. If 500 units are given, you bill 100 units of **J0586** (500 / 5 = 100).

* **Myobloc (rimabotulinumtoxinB)**
  * **Code:** J0587
  * **Unit Measurement:** Per 100 units
  * **Note:** Less commonly used for limb spasticity; often seen in cervical dystonia.

* **Xeomin (incobotulinumtoxinA)**
  * **Code:** J0588
  * **Unit Measurement:** Per 1 unit
  * **Note:** Similar unit billing to Botox (1 to 1 ratio).

---

The most direct and specific code for neurological spasticity—when it isn't linked to a [[stroke]], MS, or Cerebral Palsy—is [[G25.82]].

1. **The "Gold Standard" Code: [[G25.82]] (Spasticity)**
This code was added to the ICD-10-CM set specifically to capture spasticity as a primary neurological symptom when a more specific diagnosis (**like a paralytic syndrome**) isn't the focus.
 * Use when: The patient has velocity-dependent hypertonia, but the provider hasn't documented it as part of a stroke (I69.-), MS (G35.-), or CP (G80.-).
 * Excludes 1: * Cerebral palsy (G80.-)
   * Multiple sclerosis (G35.-)
 * Coding Tip: While the index for "**Spasticity**" has traditionally pointed to [[R25.2]], [[G25.82]] is significantly more specific for the neurological condition of **spasticity**.

1. **Codes for Specific Patterns**
If the **spasticity** is localized to a specific "**pattern**" of [[paralysis]] (even if not fully paralyzed), Chapter 6 codes are often more appropriate:

| Pattern | ICD-10 Code | Notes |
|---|---|---|
| Spastic Hemiplegia | G81.1- | Requires a 5th/6th character for side (right/left) and dominance. |
| Spastic Paraplegia | G82.2- | Often used for spinal cord injury or hereditary spastic paraplegia ([[G11.4]]). |
| Spastic Quadriplegia | G82.5- | Used for spasticity affecting all four limbs (non-congenital). |

3. **Avoiding the "Symptom" Trap**
You may see [[R25.2]] (Cramp and spasm) or [[M62.838]] (Other muscle spasm) in the index, but for a professional coder, these are usually sub-optimal:
 * **R25**.2 (**Cramp and spasm**): This is a Chapter 18 "Symptom" code. It’s generally used for general muscle cramps or when the clinical documentation is very thin.
 * **M62.838** (**Other muscle spasm**): This is a Chapter 13 "**Musculoskeletal**" code. It is best reserved for spasms related to local issues like back strain or "**charley horses**," rather than the **upper motor neuron (UMN)** involvement seen in true spasticity.

Quick Checklist for Your Charts:
 * Is a cause known? If it's due to a **Traumatic Brain Injury (TBI)**, code the sequela of the **TBI** (S06.-) first, followed by the spasticity code.
 * Is it a pattern? If it’s strictly one side, G81.1- is your friend.
 * Is it "**just**" spasticity? Use [[G25.82]].

Since there is no documentation of a **stroke** or **Cerebral Palsy (CP**), and no other primary neurological diagnosis like [[multiple sclerosis]] is noted, your coding will focus on the most specific manifestations documented.

The mention of [[ileus]] is a significant clinical clue. In many neurological cases, spasticity and [[ileus]] (specifically paralytic ileus) coexist because they are both symptoms of disrupted nerve signaling—one affecting the skeletal muscles and the other affecting the smooth muscles of the gut.

1. The Spasticity Code: **G25.82**
As long as the spasticity is documented as a neurological finding and not just a minor "muscle cramp," [[G25.82]] (**Spasticity**) remains the most accurate choice.
 * Why not [[R25.2]]? **R25.2** (Cramp and spasm) is a symptom code. **G25.82** is a more specific "Movement Disorder" code that better reflects the complexity of neurological spasticity.
 * Check for **Myelopathy**: If the record mentions "[[myelopathy]]" or "spinal cord compression," you would likely move to a G95.- code, which often includes [[spasticity]] as an inherent component.
1. The [[Ileus]] Code: [[K56.0]] vs. [[K56.7]]

The "best" code for ileus depends on how the provider describes it:
 * [[K56.0]] (**Paralytic ileus**): Use this if the ileus is caused by a lack of muscle contraction (very common in neurological patients). Interestingly, the ICD-10 index also points "Spastic ileus" to this same code.
 * [[K56.7]] (**Ileus, unspecified**): Use this only if the provider simply writes "ileus" without further clarification.

1. Searching for a "Connecting" Diagnosis

Since these two conditions are often linked, you may want to do a "Ctrl+F" or a deep dive in the record for the following terms. If found, they might provide a more "complete" diagnostic picture:
 * **Spinal Cord Injury (SCI)** or Lesion: Patients with chronic spinal issues often have both spasticity and "Neurogenic Bowel" (which can manifest as [[ileus]]).
 * Hereditary Spastic Paraplegia ([[G11.4]]): A rarer condition that causes progressive limb stiffness.
 * Autonomic Dysreflexia ([[G90.4]]): If the ileus is part of a larger autonomic storm.
 * 
Coding Summary Table

| Condition | Preferred ICD-10 Code | Note |
|---|---|---|
| Neurological Spasticity | [[G25.82]] | Specific to movement disorders; excludes CP/Stroke. |
| Paralytic/Spastic Ileus | [[K56.0]] | Includes "paralysis of bowel" and "spastic ileus." |
| Unspecified Ileus | [[K56.7]] | Use as a last resort if documentation is thin. |

> Pro Tip: If the patient is receiving treatment for both (e.g., a Baclofen pump for [[spasticity]] and a bowel regimen for ileus), coding both [[G25.82]] and [[K56.0]] accurately reflects the increased **Medical Decision Making (MDM**) and complexity of the case.
> 

<sup>CMS ICD-10-CM Official Guidelines for Coding and Reporting FY 2025</sup>
<sup>CMS-HCC Risk Adjustment Model V28 Summary</sup>
<sup>CMS MS-DRG Definitions Manual v42</sup>
<sup>NCHS ICD-10-CM Tabular List 2025</sup>
<sup>FindICD10 G25.82 Stiff-man syndrome 2026</sup>
<sup>Practical Neurology Stiff-person syndrome 2025</sup>
<sup>MedGenius ICD-10-CM G25.82 2026</sup>