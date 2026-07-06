---
tags:
  - medterm
  - proptosis
aliases:
  - exophthalmos
  - Ocular protrusion
roots:
  - proptosis
  - -ptosis
  - -osis
  - -sis
  - pro-
forms:
  - prefix
  - suffix
  - combining
alphabet: P
definition:
  - Abnormal forward protrusion or bulging of the eyeball out of the eye socket
---
>[!Note] DEFINITION of [[proptosis]]
>**Proptosis** is a clinical condition characterized by the anterior [[displacement]] of the eyeball. It occurs when the volume of orbital contents (**such as fat, [[extraocular]] muscles, blood, or neoplastic tissue**) increases within the fixed **bony space of the orbit**, pushing the eye forward. It can be unilateral or bilateral and may result from various etiologies including [[thyroid]] eye disease ([[Graves' ophthalmopathy]]), orbital tumors, inflammation (**[[orbital cellulitis]]**), [[vascular]] abnormalities, or trauma. Severe cases can lead to [[exposure keratopathy]], [[optic nerve compression]], and vision loss.
_____
>[!info]+ ETYMOLOGY of [[proptosis]]
>#greek Derived from the Greek _pro-_ meaning "forward" and _ptōsis_ meaning "**a falling**" or "**drooping**" (in this specific context, interpreted as a falling forward or [[protrusion]]).
_____

> [!success]+ **RELATED TERMS**
> - **[[Enophthalmos]]:** Posterior displacement of the eyeball (opposite of proptosis).
> - **Exophthalmometry:** The measurement of the degree of eye protrusion.
> - **Thyroid Eye Disease (Graves' Ophthalmopathy):** A common autoimmune cause of bilateral proptosis.
> - **Orbital [[Cellulitis]]:** Infection of the orbit causing inflammation and proptosis.
> - **Orbital Decompression:** Surgical procedure to create more space in the orbit to relieve proptosis.
> - **Lid Lag / Lid Retention:** Often seen concomitantly with thyroid-related proptosis.
_____

> [!example]+ CODING AND NUANCES
> **ICD-10 Codes** _Note: These codes are 6 characters; a 7th character is not applicable for this category in the current ICD-10-CM tabular list._
> 
> - **[[H05.201]]:** Unspecified proptosis, right eye
> - **[[H05.202]]:** Unspecified proptosis, left eye
> - **[[H05.203]]:** Unspecified proptosis, bilateral
> - **[[H05.209]]:** Unspecified proptosis, unspecified eye
> - **[[H05.211]]:** Axial proptosis, right eye
> - **[[H05.212]]:** Axial proptosis, left eye
> - **[[H05.213]]:** Axial proptosis, bilateral
> - **[[H05.219]]:** Axial proptosis, unspecified eye
> - **[[H05.221]]:** Eccentric proptosis, right eye
> - **[[H05.222]]:** Eccentric proptosis, left eye
> - **[[H05.223]]:** Eccentric proptosis, bilateral
> - **[[H05.229]]:** Eccentric proptosis, unspecified eye
> 
> **CPT Codes** _**Note**: CPT codes represent procedures/services. The following is the specific diagnostic measurement code for this condition._
> 
> - **[[92340]]:** Determination of [[proptosis]], [[exophthalmometry]], unilateral or bilateral (with or without lateral [[canthus]] measurement)
> - **[[67515]] - [[67550]]:** [[Orbital]] surgery codes (e.g., orbital [[decompression]]) may apply depending on the surgical treatment required for the underlying cause.

_____
>[!tip]- DERIVATIONS of [[proptosis]]
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

[[Med roots]]
[[Appendix A Prefixes]]
[[Appendix B Combining Forms]]
[[Appendix C Suffixes]]
[[Appendix D Suffix forms]]