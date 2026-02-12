---
tags:
  - medroot
  - medterm
aliases: []
roots:
  - vi-
  - -ectomy
  - ecto-
  - vi/o
  - -tomy
forms:
  - noun
"alphabet:": V
definition:
  - Removal of eye gel
---
>[!Note] DEFINITION of [[vitrectomy]]
>Surgical removal of the [[vitreous]] humor (gel) from the eye, often to treat retinal detachments or bleeds. [[vitrectomy]] is an eye surgery that **removes the vitreous fluid from your eyeball** to treat problems with the retina and [[vitreous]], such as cloudy fluid, debris, retinal detachment, or [[macular]] holes. During the procedure, the vitreous is replaced with a clear fluid, gas bubble, saline solution, or silicone oil.
_____
>[!info]+ ETYMOLOGY of [[vitrectomy]]
>The word "[[vitrectomy]]" is formed in English by combining "[[vitreous]]" and the suffix "[[-ectomy]]." "[[Vitreous]]" is derived from the #latin word for "glass," while "[[-ectomy]]" comes from the Greek "ektomē," meaning **"act of cutting out" or surgical removal**. The term was first recorded between 1965 and 1970.
>The term "[[vitrectomy]]" combines "[[vitreous]]" and "[[-ectomy]]," first recorded in the 1960s.
_____
>[!example]+ RELATED TERMS to [[vitrectomy]]
>[[Intravitreal]]
>Retinal Tear
>[[vitreous]]
_____
>[!tip]+ DERIVATIONS of [[vitrectomy]]
>```dataview
>TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name !=[[]].file.name
>SORT file.name ASC
>```
___
>[!faq]- Query
>```dataview
>TABLE definition AS Definition
>FROM #medterm 
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```

[[Med roots dictionary]]