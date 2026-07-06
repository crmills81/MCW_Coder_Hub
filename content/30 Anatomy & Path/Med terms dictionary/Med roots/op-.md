---
tags:
  - medroot
aliases:
  - opt
  - ops
  - opo
roots:
  - ops-
forms:
  - prefix
  - suffix
alphabet: O
definition:
  - vision
  - sight
  - eye
---
>[!Note] DEFINITION of [[op-]]
>In medical terminology, the prefix *op-* (and its related forms *opt-* or *opo-*) primarily refers to vision, sight, or the eye. 
_____
>[!info]+ ETYMOLOGY of [[op-]]
>#latin - **Latin _Ob-_:** In some general medical terms, an "op-" start may be an assimilated form of the Latin prefix _ob-_ (meaning toward, against, or across), as seen in words like **Opposite**. - **Indo-European Root:** Some terms derive from the PIE root op-, meaning "to work" or "produce," which leads to the modern medical word **Operation.
_____
>[!example]+ RELATED TERMS to [[op-]]
>
|     Term      |    Meaning    | Prefix/Suffix? | Notes |
|:-------------:|:-------------:|:--------------:|:-----:|
|    [[op-]]    | vision, sight |       -        |   -   |
| [[Optometry]] |  professional practice of measuring vision & prescribing corrective lenses  |    -     | - |
| [[Optic/Optical]] | science of light & vision  |    -     | - |
|  [[Optokinetic]] | Relating to eye movements that track a moving object |       -         |    -   |

_____
>[!tip]+ DERIVATIONS of op-
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