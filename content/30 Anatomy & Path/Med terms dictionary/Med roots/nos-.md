---
tags: [" #medroot"]
aliases: []
roots: [nos-]
forms: [combining]
alphabet:: N
definition: [disease, illness]
---
>[!Note] DEFINITION of nos-
>disease, illness
_____
>[!info]+ ETYMOLOGY of nos-
>#greek nosos
_____
>[!example]+ RELATED TERMS to nos-
>
>|  [[nos-]]  | disease | illness |                -                 |
|:----------:|:-------:|:-------:|:--------------------------------:|
| [[-iasis]] |   YES   |    -    | abnormal condition/presence (of) |
|  [[30 Anatomy & Path/Med terms dictionary/Med roots/-oma]]  |   YES   |    -    |              tumor               |
| [[path-]]  |   YES   |    -    |                -                 |
| [[-pathy]] |   YES   |    -    | -                                 |
_____
>[!tip]+ DERIVATIONS of nos-
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