---
tags:
  - medroot
  - medterm
aliases: []
roots:
  - -oma
  - -ma
  - -omata
forms:
  - suffix
  - suffix form
  - compound suffix form
  - verbs
alphabet: O
definition:
  - swelling
  - mass
  - tumor
---
>[!Note] DEFINITION of [[-oma]]
>It describes any **abnormal growth or swelling**, historically benign but now often implying malignancy depending on context (e.g., [[carcinoma]] vs. [[hematoma]]); plural is [[-omata]].
_____
>[!info]+ ETYMOLOGY of [[-oma]]
> #greek From Greek -ωμα ([[-ōma]]), suffix added to verbs forming nouns for the result of an action or process, akin to English [[-tion]] or [[-ing]] (*e.g., from aorist stem*).
_____
>[!example]+ RELATED TERMS to [[-oma]]
>
|    Term    | Meaning | Prefix/Suffix? |       Notes        |   -       |
|:----------:|:-------:|:--------------:|:------------------:| ---------------------- |
| [[-oma]] | Growth  |       -        |         -          |       -       |
|  [[-ma]]   |   NO    |     suffix     |         -          |       -       |
| [[-omata]] |   YES   |     suffix     |         -          |       -       |
| [[-cel-]]  |   YES   |       -        |       hernia       | swelling       |
| [[-iasis]] |    -    |      YES       | abnormal condition | abnormal presence (of) |
|  [[nos-]]  |    -    |      YES       |      illness       | -           |
|  [[onc-]]  |   YES   |       -        |         -          | -       |
| [[path-]]  |    -    |      YES       |         -          | -         |
| [[-pathy]] |    -    |      YES       |         -          | -       |


_____
>[!tip]+ DERIVATIONS of [[-oma]]
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
[[Appendix A Prefixes]]
[[Appendix B Combining Forms]]
[[Appendix C Suffixes]]
[[Appendix D Suffix forms]]