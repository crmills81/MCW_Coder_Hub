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
>late 19th century: from modern Latin _myringa_ ‘eardrum’ + [-tomy](https://www.google.com/search?num=10&newwindow=1&sca_esv=c03ec876592c9bde&rlz=1C5CHFA_enUS1186US1186&sxsrf=ANbL-n5KQdc3Grpf9atf90wEBr8vqpYN4g:1768798054490&q=-tomy&si=AL3DRZHjR2DXC91SS53JKt2Rcfi1GAfK0Aex7qVbswVGaUiS_4WFcb2j7O5ddcJ3nENQIeVqJMotQakjDHkCOW7XAGv_PjqNtg%3D%3D&expnd=1&sa=X&ved=2ahUKEwj0oN6d5paSAxWfKFkFHUBEOI0QgCt6BAgXEBI).
_____
>[!example]+ RELATED TERMS to [[myringotomy]]
>
_____
>[!tip]+ DERIVATIONS of [[myringotomy]]
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