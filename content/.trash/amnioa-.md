---
tags:
  - medroot
aliases: []
roots:
  - amnio-
forms:
  - prefix
  - suffix
alphabet: U
definition:
  - <% tp.file.cursor(1) %>
---
>[!Note] DEFINITION of Untitled
>
_____
>[!info]+ ETYMOLOGY of Untitled
>#latin OR #greek
_____
>[!example]+ RELATED TERMS to Untitled
>
| [[amnioa-]] |  | - | - |
|:---:|:---:|:---:|:---:|
| [[amniotic]] | YES/NO | MEANING | NOTES |
| [[RELATED_TERM_2]] | YES/NO | MEANING | NOTES |
_____
>[!tip]+ DERIVATIONS of Untitled
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