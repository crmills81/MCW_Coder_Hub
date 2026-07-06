---
tags:
  - medroot
  - medterm
aliases: []
roots:
  - onc-
  - o-
forms:
  - combining
  - prefix
"alphabet:": O
definition:
  - tumor
---
>[!Note] DEFINITION of [[onc-]]
>tumor
_____
>[!info]+ ETYMOLOGY of [[onc-]]
>#greek onkos
_____
>[!example]+ RELATED TERMS to onc-
>
>| [[onc-]]  | tumor |    -    |    -     |
|:---------:|:-----:|:-------:|:--------:|
| [[-cel-]] |  YES  | hernia  | swelling |
| [[30 Anatomy & Path/Med terms dictionary/Med roots/-oma]]  |  YES  | disease | -         |
_____
>[!tip]+ DERIVATIONS of [[onc-]]
>```dataview
>TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
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