---
tags:
  - medroot
  - medterm
aliases: []
roots:
  - -uria
  - -ia
forms:
  - prefix
  - suffix
  - combining
  - nouns
alphabet: U
definition:
  - related to urine
  - urinary presence
  - urinary absence
  - urinary excess
  - indicating a urinary condition, quantity, or substance in urine
---
>[!Note] DEFINITION of [[-uria]]
>In medical terminology, **[[-uria]]** attaches to roots or prefixes to describe **abnormal urine production, composition, or related disorders.** It quantifies volume (e.g., [[polyuria]]: excessive urine), notes substances (e.g., [[hematuria]]: blood in urine), or indicates pathology (e.g., [[proteinuria]]: protein in urine). Unlike frequency ([[pollakiuria]]), [[-uria]] terms focus on urine volume or content per voiding episode or 24 hours.
_____
>[!info]+ ETYMOLOGY of [[-uria]]
>#greek From Greek _ouron_ (οὖρον), meaning "urine." Entered medical Latin as _[[-uria]]_, forming nouns for urinary states or conditions.
_____
>[!example]+ RELATED TERMS to [[-uria]]
>
|    Term    |                Meaning                | Prefix/Suffix? | Notes |
|:----------:|:-------------------------------------:|:--------------:|:-----:|
| [[-uria]]  |           urinary condition           |       -        |   -   |
| [[Anuria]] | Absent or negligible urine production |     [[-uria]]    |   -   |
| [[hematuria]]      |  blood in urine  |   [[-uria]]      |   -  |
_____
>[!tip]+ DERIVATIONS of [[-uria]]
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