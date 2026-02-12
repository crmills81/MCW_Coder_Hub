---
tags:
  - " #medroot"
  - specialty/ophthalmology
aliases: []
roots:
  - phac-
  - em
  - -fic-
  - -ation
forms:
  - adjective
"alphabet:": P
definition:
  - Cataract removal via ultrasound
---
>[!Note] DEFINITION of phacoemulsification
>A procedure using an ultrasonic handpiece to break up (emulsify) the clouded lens and aspirate it from the eye.
_____
>[!info]+ ETYMOLOGY of phacoemulsification
>Greek phakos (lentil/lens) + Latin emulgere (to milk out)
_____
>[!example]+ RELATED TERMS to phacoemulsification
>Aphakia
>Pseudophakia
>Nucleus
>
_____
>[!tip]+ DERIVATIONS of phacoemulsification
>```dataview
>TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name !=[[]].file.name
>SORT file.name ASC
>```
___
>[!faq]- Query
>```dataview
>TABLE definition AS Definition
>FROM #medroot
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```

[[Med roots dictionary]]