---
tags:
  - general
  - context
  - medterm
aliases:
  - adduce
  - adduction
roots:
  - ad-
  - duct-
forms:
  - adjective
"alphabet:": A
"definition:": To draw towards an axis or the median line
---
>[!note] Definition of [[adduct]]
>[[ad-]][[duct-]] - To draw towards an axis or the median line (**to bring toward**); To **adduct** is to perform a biomechanical movement that pulls a structure or appendage toward the midline of the body or toward the midline of a limb. In the context of the limbs, bringing the arms down to the sides of the torso or squeezing the legs together are examples of adduction. In the context of digits (**fingers or toes**), adduction refers to bringing the digits together toward the central axis of the hand (**the middle finger**) or foot (**the second toe**). The primary muscles responsible for this movement in the lower extremity are the adductor longus, adductor brevis, and adductor magnus, located in the medial compartment of the thigh.

___
>[!info]+ Etymology of [[adduct]]
>mid 19th century: back-formation from late Middle English _adduction_, from late Latin _adductio(n-_ ) ‘bringing forward’, from the verb _adducere_ ‘bring in’; 
>- **[[ad-]]**: Latin prefix meaning "**to**," "**toward**," or "**near**."
>    
>- **duct**: From Latin _ducere_, meaning "**to lead**," "**to draw**," or "**to pull.**"
>    
>- **[[-ion]]**: (**in adduction**) Latin suffix denoting an "**action**" or "**process**."
>    
>- **Literal Meaning**: "To lead or draw toward."
>
_____

> [!example]+ **Coding & Documentation Nuances**
> - **ICD-10-CM Implications**: [[Adduction]] as a movement is frequently referenced in orthopedic and sports medicine coding, particularly for injuries to the adductor muscle group.
>     
>     - Look for specific anatomical injury codes, such as **S76.2- (Injury of adductor muscle, fascia and tendon of thigh)**, which require 6th and 7th characters to identify laterality and encounter type (**initial, subsequent, sequela**).
>         
>     - Pathological resting states, such as a severe adductor contracture, map to codes like **M62.45- (Contracture of muscle, thigh)**.
>         
> - **CPT/Surgical Operations**:
>     
>     - A coder must distinguish between procedures done _to_ the adductor muscles versus other regional structures. For example, **CPT [[27000]]** refers to a percutaneous tenotomy of the hip adductor, whereas **CPT [[27001]]** is the open version of the same procedure.
>         
>     - Physical therapy coding often relies on documentation of restricted adduction or abduction to justify the medical necessity of therapeutic exercises (CPT 97110).
>         
> 
> **<u>Clinical Indicators</u>**
> 
> To support the coding of an adductor-related pathology, a coder should locate the following in the clinical documentation:
> 
> - **Physical Examination Findings**: Documentation of "**groin pain**," "pain with resisted adduction," or "inability to adduct the right hip."
>     
> - **Gait Analysis**: Observations of a "scissoring gait," which is highly indicative of adductor spasticity often seen in cerebral palsy patients.
>     
> - **Imaging (MRI/Ultrasound)**: Findings detailing a sprain, tear, or avulsion in the adductor tendon/muscle belly or osteitis pubis.
>     
> - **Surgical Reports**: Operative notes detailing the release or lengthening of the adductor tendon to improve range of motion (ROM).
>     
> 
> **<u>Related Terms & Differentials</u>**
> 
> - **Abduct (Abduction)**: The direct biomechanical opposite of adduction; to move a limb or body part _away_ from the midline of the body (e.g., raising the arm out to the side).
>     
> - **Flexion**: The act of bending a joint to decrease the angle between two body parts, operating primarily in the sagittal plane rather than the frontal plane (where adduction occurs).
>     
> - **Adductor Spasticity**: A neurological and muscular condition characterized by continuous, involuntary contraction of the adductor muscles, causing the legs to cross over one another.
>     
> - **Osteitis Pubis**: Inflammation of the pubic symphysis and surrounding muscle insertions (including the adductors), which is a common differential diagnosis for adductor strain in athletes.

_____
>[!tip]- DERIVATIONS of [[adduct]]
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


[[Med roots dictionary]]
[[Appendix A Prefixes]]
[[Appendix B Combining Forms]]
[[Appendix C Suffixes]]
[[Appendix D Suffix forms]]