---
tags:
  - medroot
  - medterm
aliases: []
roots:
  - dia-
forms:
  - prefix
  - combining
  - compound suffix form
alphabet: D
definition:
  - passage through, across, between, apart, or thoroughness
  - through
  - across
  - between
---
>[!Note] DEFINITION of [[dia-]]
>In medical contexts, [[30 Anatomy & Path/Med terms dictionary/Med roots/dia-|dia-]] conveys ideas like passing through (e.g., [[diuresis]] for **urine passage**), complete examination (**diagnosis**), separation (**[[dialysis]] for blood filtering**), or transmission across (**diathermy for heat through tissues**). It originates as a preposition in Greek, adapting to denote directional or intensive processes in compound terms.
_____
>[!info]+ ETYMOLOGY of [[dia-]]
> #greek [[dia-]] derives from Ancient Greek _diá_ (διά), a preposition meaning "**through**," "**between**," "**across**," or "**by**," akin to _dýo_ (*two*) from PIE root _dwóh₁_ suggesting division or passage.
_____
>[!example]+ RELATED TERMS to [[dia-]]
>
|          Term           |    Meaning    | Prefix/Suffix? | Notes |
| :---------------------: | :-----------: | :------------: | :---: |
| [[dia-]] | passage through |       -        |   -   |
|    [[dia-]][[-gnosis]]     |    YES   |    -     | - |
|  [[dis-]]  |    -    |   -    |  YES  |       away       |
|  [[per-]]  |   YES   |   -    |   -   | very, thoroughly |
|  [[se-]]   |    -    |   -    |  YES  |    away from     |
| [[trans-]] |    through    |  YES   |   -   | -     |

_____
>[!tip]+ DERIVATIONS of [[dia-]]
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