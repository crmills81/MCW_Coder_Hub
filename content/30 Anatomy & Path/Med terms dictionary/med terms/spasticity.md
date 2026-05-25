---
tags:
  - medterm
  - pmr
  - nervous_system
aliases:
  - rigidity
  - Spasticity
  - spokiness
  - hyperreflexia
  - spasm
  - spastic
roots:
  - spasticity
  - spast-
  - -ic
  - -ity
forms:
  - prefix
  - suffix
  - noun
alphabet: S
definition: symptom of Upper Motor Neuron syndrome
---
>[!Note] DEFINITION of [[spasticity]]
>**Spasticity** is a **clinical symptom of Upper Motor Neuron (UMN) syndrome**. Physiologically, it occurs when there is a disruption in the descending **inhibitory pathways** of the central nervous system (**brain or spinal cord**). This loss of inhibition leads to **hyperexcitability** of the stretch reflex arc within the muscles. A hallmark characteristic of spasticity is that it is **velocity-dependent**; the faster a muscle is passively stretched by an examiner, the greater the resistance encountered. Over time, **untreated spasticity** can lead to painful **muscle spasms**, severe limitations in **range of motion (ROM)**, and permanent anatomical **contractures**. It is commonly seen in patients with **cerebral palsy**, **multiple sclerosis**, **traumatic brain injury, spinal cord injury**, and **stroke**.
_____
> [!info]+ ETYMOLOGY of [[spasticity]]
> 
> #greek - **[[spast-]]**: From Greek _spastikos_, meaning "**drawing in**," "**pulling**," or "**tugging**" (derived from _span_, to pull/draw).
>     
> - **[[-ic]]**: Suffix from Latin _-icus_ or Greek _-ikos_, meaning "**pertaining to**."
>     
> - **[[-ity]]**: Suffix from Latin _-itas_, meaning "**the state, quality, or condition of**."
>     
> - **Literal Meaning**: The state or condition of drawing/pulling (**referring to the tight, unyielding pull of the affected muscles**).
_____

> [!success]+ **Coding & Documentation Nuances**
> 
> - **ICD-10-CM**: **Spasticity** is rarely coded as an isolated symptom if the underlying etiology is known, as it is integral to many central nervous system disorders.
>     
>     - _Chapter 6 (Nervous System):_ Look for combination codes that specify spasticity, such as **G81.1-** (**Spastic hemiplegia**) or **[[G80.0]]** (**Spastic quadriplegic cerebral palsy**).
>         
>     - _Chapter 13 (Musculoskeletal):_ If documented as a localized muscle spasm without a central nervous system etiology, it may map to **[[M62.838]]** (**Other muscle spasm**).
>         
> - **ICD-10-PCS**: **Spasticity** itself is a condition, but it dictates the medical necessity for specific surgical and medical interventions.
>     
>     - **Introduction**: Intramuscular injections of **botulinum toxin (Botox)** to **paralyze** the spastic muscle. (**e.g., 3E023GC - Introduction of Other Therapeutic Substance into Muscle, [[Percutaneous]]**).
>         
>     - **Implantation**: Insertion of an intrathecal baclofen pump for severe, systemic **spasticity** (**e.g., 00H - Insertion of device into Spinal Canal**).
>         
> - **CPT**: Coders should look for **Chemodenervation** codes (e.g., [[64642]]-[[64647]]) when **Botox** is used to destroy the nerve-muscle connection temporarily to relieve **spasticity**.
>
_____

> [!danger]+ **Related Terms & Differentials**
> 1. **Rigidity:** An increase in muscle tone that is _not_ velocity-dependent (**the resistance is constant regardless of how fast you stretch the limb**). Typically presents as "lead-pipe" or "**cogwheel**" rigidity and is a sign of [[extrapyramidal]]/[[basal ganglia]] disorders like **Parkinson's disease**.
>     
> 2. **Spasm:** A sudden, involuntary, and often painful contraction of a muscle or group of muscles. While **spasticity** can _cause_ [[spasms]], a spasm is an event, whereas spasticity is a continuous state of high tone.
>     
> 3. **Contracture:** A permanent, physical shortening of the muscle, tendon, or joint capsule preventing normal articulation. **Spasticity** is neurological and can be overcome (**or treated with Botox**); a contracture is anatomical and usually requires surgical release (e.g., [[tenotomy]]).
>     
> 4. **[[dystonia]]:** A movement disorder characterized by sustained or intermittent **muscle contractions** causing abnormal, often **repetitive, movements, postures, or twisting**.
>     
> 5. **Flaccidity:** The exact opposite of **spasticity**. A state of completely absent muscle tone ([[hypotonia]]) and absent reflexes, typically resulting from a **Lower Motor Neuron (LMN)** lesion.
_____

> [!example]+ **Clinical Indicators**
> 
> To support a diagnosis involving **spasticity**, a medical coder should look for the following terminology and findings in the physical exam or neuro-assessment:
> 
> - **Measurement Scales**: Documentation of the **Modified Ashworth Scale (MAS)** or **Tardieu Scale** scores (**tools used to grade the severity of spasticity**).
>     
> - **Exam Findings**: "Clasp-knife" phenomenon (**initial resistance to movement followed by a sudden release**), **hyperreflexia** (**exaggerated deep tendon reflexes, e.g., 3+ or 4+**), positive Babinski sign, or clonus (**rhythmic, oscillating muscle contractions**).
>     
> - **Keywords**: "**Velocity-dependent resistance**," "**increased muscle tone**," "**spastic catch**," "**scissoring gait**."
>     
> - **Underlying UMN Lesions**: Clear documentation of an Upper Motor Neuron injury (**Stroke/CVA, Multiple Sclerosis, Spinal Cord Injury**).

_____
>[!tip]- DERIVATIONS of [[spasticity]]
>```dataview
>TABLE definition AS Definition
>FROM #medterm 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
>SORT file.name ASC
>```
_____
>[!faq]- Query functionality
>```dataview
>TABLE definition AS Definition
>FROM #medterm 
>WHERE file.name != this.file.name
>AND any(contains(this.definition, definition))
>```

[[Med roots]]
[[Appendix A Prefixes]]
[[Appendix B Combining Forms]]
[[Appendix C Suffixes]]
[[Appendix D Suffix forms]]