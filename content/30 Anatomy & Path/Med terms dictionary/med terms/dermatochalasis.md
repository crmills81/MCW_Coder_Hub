---
tags:
  - medterm
  - medroot
  - ophthalmology
aliases:
  - baggy eyelids
  - Dermatochalasis
  - senile blepharoptosis
  - hooded eyelids
roots:
  - dermatochalasis
forms:
  - prefix
  - suffix
  - combined
  - disease
  - noun
alphabet: D
definition:
  - a condition characterized by excessive loose or redundant skin on the eyelids
---
>[!Note] DEFINITION of **[[dermatochalasis]]**
>**Dermatochalasis** is an acquired condition involving the laxity and redundancy of the eyelid skin and [[orbicularis]] oculi muscle. It is primarily a result of the aging process (**senile [[dermatochalasis]]**), where collagen and elastin fibers in the dermis degrade, causing the skin to stretch and hang. 
>	**Clinical Presentation**: Patients present with folds of excess skin that may drape over the eyelashes ([[pseudoptosis]]) or obscure the superior visual field. In severe cases, patients must consciously lift their brows or tilt their heads back to see clearly. It can also cause eyelid heaviness, fatigue, and difficulty applying makeup.
>	**Differentiation**: It is distinct from blepharochalasis (see below), which is a rare inflammatory condition affecting younger people. **Dermatochalasis** is strictly degenerative and age-related. 
>	**Functional vs. Cosmetic**: While often treated for cosmetic reasons, it is considered a functional impairment if the redundant skin blocks the visual axis (**superior visual field loss**), warranting surgical intervention covered by insurance.
_____
>[!info]+ ETYMOLOGY of **[[dermatochalasis]]**
>#greek 
>Derived from three Greek roots:
>
>- **Derma**: Meaning "**skin**."
>- **[[Chalasis]]**: Meaning "**relaxation**," "**loosening**," or "**slackening**" (from _chalan_, to loosen).
>- Literally translates to "**loose skin**" or "**relaxation of the skin**."
>- _Note:_ Do not confuse with _[[Blepharochalasis]]_ ("**eyelid relaxation**"), which is a distinct pathological entity involving recurrent [[edema]].
>
_____

> [!attention]+ **RELATED TERMS**
> 
> - **[[Blepharoplasty]]:** The surgical procedure to remove excess skin, fat, and muscle from the eyelids; the primary treatment for symptomatic dermatochalasis.
> - **[[Ptosis]] ([[blepharoptosis]]):** True drooping of the upper eyelid margin due to levator muscle dysfunction. Often co-exists with dermatochalasis but requires a different surgical repair.
> - **[[Steatoblepharon]]:** Herniation of orbital fat pads, often accompanying [[dermatochalasis]] (the "*bags*" under the eyes).
> - **Brow Ptosis:** Drooping of the eyebrow, which can exacerbate the appearance of dermatochalasis.
> - **Visual Field Test (Goldmann or Humphrey):** A diagnostic test required by most insurers to prove that the excess skin is obstructing vision (typically showing >12-30 degrees of superior field loss).
> - **[[Blepharochalasis]]:** A rare condition of recurrent, painless eyelid swelling in adolescents/young adults leading to thin, wrinkled skin ("cigarette paper" skin). Distinct from age-related dermatochalasis.

_____
> [!example]+ **CODING AND NUANCES**
> 
> **ICD-10-CM Codes** _Note: Specificity regarding laterality (right, left, bilateral) and the specific eyelid (upper, lower) is required._
> 
> **Disorders of Eyelid (H02.-)**
> 
> - **[[H02.831]]**: Dermatochalasis of right upper eyelid
> - **[[H02.832]]**: Dermatochalasis of right lower eyelid
> - **[[H02.833]]**: Dermatochalasis of right upper and lower eyelid
> - **[[H02.834]]**: Dermatochalasis of left upper eyelid
> - **[[H02.835]]**: Dermatochalasis of left lower eyelid
> - **[[H02.836]]**: Dermatochalasis of left upper and lower eyelid
> - **[[H02.839]]**: Dermatochalasis of unspecified eyelid
> 
> _(If the documentation does not specify upper/lower, **H02.839** is used, though payers often require specificity for surgical approval)._
> 
> **CPT Codes** _CPT codes depend on whether the surgery is performed for functional reasons (vision obstruction) or cosmetic reasons. Functional [[blepharoplasty]] is covered by insurance; cosmetic is not._
> 
> **Blepharoplasty (Surgical Removal of Excess Skin)**
> 
> - **[[15822]]**: Blepharoplasty, upper eyelid; with excessive skin weighting down lid. _(The standard code for functional upper eyelid dermatochalasis repair)._
> - **[[15823]]**: Blepharoplasty, upper eyelid; with removal of excess orbital fat. _(Often bundled with 15822 if done on the same lid, but specific payer rules apply)._
> - **[[15820]]**: Blepharoplasty, upper eyelid. _(General code, often used if "excessive skin" isn't explicitly the primary descriptor, but 15822 is preferred for functional cases)._
> - **[[15821]]**: Blepharoplasty, upper eyelid; with removal of excess orbital fat.
> - **[[15824]]**: Blepharoplasty, lower eyelid. _(Typically considered cosmetic unless there is significant functional impairment, which is rare for lower lids)._
> - **[[15825]]**: Blepharoplasty, lower eyelid; with removal of excess orbital fat.
> 
> **Combined Procedures**
> 
> - If **Ptosis Repair** is also needed (true muscle droop):
>     - **[[67904]]**: Repair of blepharoptosis; (suture of levator tendon or tarsal plate) or other ptosis codes (67901-67908).
>     - _Modifier [[-51]]_ (Multiple Procedures) or _[[-59]]_ (Distinct Procedural Service) may be required if billing 15822 and a Ptosis code together, depending on payer guidelines.
> 
> **Ancillary Tests (Required for Insurance Approval)**
> 
> - **[[92083]]**: Visual field examination, unilateral or bilateral, with interpretation and report; perimetry performed with kinetic quantification (e.g., Goldmann).
> - **[[92081]]**: ... screening examination.
> - **Photography:** Often billed as **[[92285]]** (External ocular photography with interpretation and report for documentation of medical progress...) to document the visual obstruction pre-operatively.
> 
> **Important Coding Note:** For **15822** to be covered by insurance, the medical record must typically document:
> 
> 1. Symptoms of visual obstruction (**difficulty reading, driving, lifting brows**).
> 2. Physical exam showing skin resting on lashes or obscuring the pupil.
> 3. **Visual Field Testing** showing significant superior field loss (often >12 degrees or 30% improvement with taping).
> 4. Photographs documenting the redundancy. Without this documentation, the procedure is deemed cosmetic (Code **15822** may be denied, and patient is responsible).

_____
>[!tip]- DERIVATIONS of [[dermatochalasis]]
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
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```

[[Med roots dictionary]]
[[Appendix A Prefixes]]
[[Appendix B Combining Forms]]
[[Appendix C Suffixes]]
[[Appendix D Suffix forms]]