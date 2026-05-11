---
tags:
  - medterm
  - medroot
aliases:
  - abduction
  - abductive
  - abducent
  - abductor
roots:
  - ab-
  - duct-
forms:
  - verb
"alphabet:": A
"definition:": To draw away from an axis or the median plane
---
>[!note] Definition of [[abduct]]
>[[ab-]][[duct-]] - **To draw away from an axis or the median plane** (**To bring away**); In kinesiology and anatomy, to **abduct** is to move a body part, such as a limb, laterally away from the sagittal (**median**) plane of the body. For example, raising the arms horizontally to the sides is shoulder [[abduct|abduction]]. In the context of fingers or toes, abduction refers to spreading the digits away from the longitudinal axis of the hand or foot (**the middle finger or the second toe, respectively**). Clinically, assessing a patient's ability to abduct is fundamental in evaluating joint mobility, neuromuscular function, and structural integrity during orthopedic, neurological, and physical therapy examinations.

___
>[!info]+ Etymology of [[abduct]]
>- **[[ab-]]**: From the Latin prefix _[[ab-]]_, meaning "**away from**."
>    
>- **[[-duct]]**: From the Latin verb _ducere_, meaning "**to lead**," "**to draw**," or "to pull."
>    
>- **Literal Meaning**: To lead or draw away.
>
_____
>[!tip]- DERIVATIONS of [[abduct]]
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
>AND any(contains(definition, split(this.definition, " ")))
>```
_____

> [!example]+ **Coding & Documentation Nuances**
> - **CPT Constraints**: Abduction is heavily referenced in the Physical Examination section of Evaluation and Management (E/M) visits, specifically when calculating Range of Motion (ROM). It is also a key component in justifying Physical Therapy and Occupational Therapy codes (e.g., **97110** for Therapeutic Exercises, focusing on strength and ROM).
>     
> - **ICD-10-CM Implications**: A documented inability or limitation in the ability to abduct a joint frequently points a coder toward specific musculoskeletal conditions, such as:
>     
>     - **M24.5-** (Contracture of joint)
>         
>     - **M24.4-** (Recurrent dislocation of joint)
>         
>     - **M75.0-** (Adhesive capsulitis of shoulder)
>         
> - **Surgical Positioning**: Operative reports often detail the patient's intraoperative position (e.g., "the right arm was abducted to 90 degrees"). While this does not drive the procedural code itself, it is critical medicolegal documentation regarding the prevention of perioperative nerve injuries (like brachial plexus palsy).
>     
> 
> **Clinical Indicators**
> 
> - **Physical Exam Findings**: Documentation noting the exact degrees of motion (e.g., "Active shoulder abduction is limited to 45° with pain").
>     
> - **Therapy Notes**: Rehabilitation flowsheets detailing progress in "abductor strengthening" or "abduction stretches."
>     
> - **Symptoms**: Patient complaints of pain when reaching out to the side or spreading the fingers/toes.
>     
> 
> **Related Terms & Differentials**
> 
> - **Adduct**: The direct anatomical antagonist to abduct; moving a body part _toward_ the midline.
>     
> - **Flexion**: Bending a joint to decrease the angle between two bones, typically moving anteriorly (forward) rather than laterally.
>     
> - **Extension**: Straightening a joint to increase the angle between two bones.
>     
> - **Circumduction**: A conical, circular movement of a limb that combines abduction, adduction, flexion, and extension in sequence.
>     
> - **Valgus**: An outward angulation of the distal segment of a bone or joint, which can sometimes be confused with an abducted position, though valgus refers to a structural deformity rather than a dynamic movement.
>

[[Med roots dictionary]]
[[Appendix A Prefixes]]
[[Appendix B Combining Forms]]
[[Appendix C Suffixes]]
[[Appendix D Suffix forms]]