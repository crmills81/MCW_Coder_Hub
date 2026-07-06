---
tags:
  - medroot
aliases: []
roots:
  - amnio-
forms:
  - prefix
  - suffix
alphabet: A
definition:
  - "'forms present participle'"
---
>[!Note] DEFINITION of amnio-
>
_____
>[!info]+ ETYMOLOGY of amnio-
>#latin OR #greek
_____
>[!example]+ RELATED TERMS to amnio-
>
| [[amnio-]] |  | - | - |
|:---:|:---:|:---:|:---:|
| [[amniotic]] | YES/NO | MEANING | NOTES |
| [[RELATED_TERM_2]] | YES/NO | MEANING | NOTES |
_____
>[!tip]+ DERIVATIONS of amnio-
>```dataview
>TABLE definition AS Definition
>FROM #medroot
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
>SORT file.name ASC
>```
_____
>[!faq]- Query functionality
>
>```dataview
>TABLE definition AS Definition
>FROM #medroot
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```

[[Med roots dictionary]]