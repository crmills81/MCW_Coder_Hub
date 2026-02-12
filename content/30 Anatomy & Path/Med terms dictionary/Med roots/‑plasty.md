---
tags:
  - medroot
  - medterm
  - otolaryngology
aliases: []
roots:
  - ‑plasty
  - -plast
  - -y
forms:
  - suffix
  - combining
  - compound suffix form
  - suffix form
  - noun
alphabet: P
definition:
  - plastic surgery
  - surgical repair or reconstruction of a (specified) part
---
>[!Note] DEFINITION of [[‑plasty]]
>The suffix [[‑plasty]] denotes **operative procedures that restore, reshape, or reconstruct a structure using plastic surgical techniques, often involving tissue grafts, flaps, or implants**. It implies more than simple incision ([[‑tomy]]) or removal ([[‑ectomy]])—it focuses on functional or cosmetic restoration, as in [[otoplasty]] (**ear reshaping**) or [[angioplasty]] (**artery repair**). In coding, terms ending in [[‑plasty]] map to specific **CPT codes** (e.g., *69000* series for ear [[tympanoplasty]]).
_____
>[!info]+ ETYMOLOGY of [[‑plasty]]
> #greek From Greek _[[‑plastía]]_ meaning “**molding, forming**,” derived from _plastós_ “**molded, formed**” (verbal adjective of _plássein_ “**to mold, shape**”). The root evokes clay or wax modeling, hence its use in “**plastic**” surgery for reshaping body parts.
_____
>[!example]+ RELATED TERMS to [[‑plasty]]
>
|    Term     |     Meaning     | Prefix/Suffix? | Notes |
|:-----------:|:---------------:|:--------------:|:-----:|
| [[‑plasty]] | surgical repair |       -        |   -   |
| [[‑ectomy]] |    excision     |     suffix     |   -   |
|   [[‑tomy]]   |    incision     |   suffix     |   -   |
_____
>[!tip]+ DERIVATIONS of [[‑plasty]]
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