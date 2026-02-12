---
tags:
  - medroot
aliases: []
roots:
  - -oma
forms:
  - suffix
  - noun
  - suffix form
"alphabet:": O
definition:
  - tumor
  - disease
---
>[!Note] DEFINITION of [[30 Anatomy & Path/Med terms dictionary/Med roots/-oma]]
>1. forms nouns: tumor (common)
>2. forms nouns: disease (rare, usually in ophthamology)
_____
>[!info]+ ETYMOLOGY of [[30 Anatomy & Path/Med terms dictionary/Med roots/-oma]]
>#greek
_____
>[!example]+ RELATED TERMS to [[30 Anatomy & Path/Med terms dictionary/Med roots/-oma]]
>
>|  [[30 Anatomy & Path/Med terms dictionary/Med roots/-oma]]  | tumor | disease |         -          |           -            |
|:----------:|:-----:|:-------:|:------------------:|:----------------------:|
| [[-cel-]]  |  YES  |    -    |       hernia       |        swelling        |
| [[-iasis]] |   -   |   YES   | abnormal condition | abnormal presence (of) |
|  [[nos-]]  |   -   |   YES   |      illness       |           -            |
|  [[onc-]]  |  YES  |    -    |         -          |           -            |
| [[path-]]  |   -   |   YES   |         -          |           -            |
| [[-pathy]] |   -   |   YES   |         -          |           -            |
_____
>[!tip]+ DERIVATIONS of [[30 Anatomy & Path/Med terms dictionary/Med roots/-oma]]
>```dataview
>TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
>SORT file.name ASC
>```
_____
>[!faq]- Query
>
>```dataview
>TABLE definition AS Definition
>FROM #medroot
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```

[[Med roots dictionary]]