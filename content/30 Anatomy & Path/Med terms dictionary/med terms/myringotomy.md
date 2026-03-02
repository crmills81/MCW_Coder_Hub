---
tags:
  - specialty/ent
  - medical_coding
  - medterm
aliases: []
roots:
  - my_-
  - my-
  - -tomy
  - myringo-
forms:
  - noun
"alphabet:": M
definition:
  - small incision in the eardrum to release accumulated fluid from the middle ear
  - ear
  - (often) one side of the body
---
>[!Note] DEFINITION of [[myringotomy]]
>Myringotomy is a surgical procedure involving an incision in the eardrum to relieve pressure and drain fluid from the middle ear, often treating conditions like ear infections or glue ear. In many cases, **small tubes are inserted into the incision to maintain drainage, equalize pressure, and prevent recurring infections or fluid buildup**.
_____
>[!info]+ ETYMOLOGY of [[myringotomy]]
>late 19th century: from modern Latin _myringa_ ‘eardrum’ + [-tomy]
_____
>[!example]+ RELATED TERMS to [[myringotomy]]
>
_____
>[!tip]- DERIVATIONS of [[myringotomy]]
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

[[Med roots]]
[[Appendix A Prefixes]]
[[Appendix B Combining Forms]]
[[Appendix C Suffixes]]
[[Appendix D Suffix forms]]