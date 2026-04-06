---
tags:
  - medterm
  - medroot
  - otolaryngology
  - ENT
aliases:
  - Auricle
  - little ear
roots:
  - aur-
  - -cle
  - a-
  - -icle
"definition:": portion of external ear not contained within the head
forms:
  - noun
  - diminutive
"alphabet:": a
---
>[!note]+ Definition of [[auricle]]
>[[aur-]]i-[[-cle]] - portion of external ear not contained within the head (**little ear**)
>In human anatomy, the auricle serves two primary functions depending on its location:
>- **Otology**: It is the visible, cartilaginous part of the outer ear that captures and funnels sound waves into the external auditory canal. It consists of several distinct regions including the helix, antihelix, tragus, and lobule.
>- **Cardiology**: It refers to the **atrial appendage**, a small, wrinkled, muscular pouch extending from the right and left atria of the heart. These structures act as reservoirs to increase atrial volume and are clinically significant in conditions like atrial fibrillation, where blood may pool and form clots.
___
>[!info]+ Etymology of [[auricle]]
>The word "[[auricle]]" is rooted in the diminutive form of the #latin word for ear:
>- **Latin**: Derived from _auricula_, meaning "*little ear*".
>- **Root**: _Auris_ (ear) combined with the diminutive suffix _[[-cula]]_.​
>- **Heart Connection**: The cardiac [[auricle]] were named for their perceived similarity in shape to an animal's ear.
_____
>[!tip]- DERIVATIONS of [[auricle]]
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