---
tags:
  - medroot
  - medterm
aliases: []
roots:
  - -metry
forms:
  - suffix
  - noun
alphabet: M
definition:
  - process of measuring
---
>[!Note] DEFINITION of [[-metry]]
>Used to name techniques or fields involving **measurement**, such as in instruments ([[-meter]]) extended to the study or procedure; common in [[Ophthalmology]], cardiology, and geometry-related terms like symmetry.
_____
>[!info]+ ETYMOLOGY of [[-metry]]
> #greek From Greek _metrein_ ("**to measure**"), from _metron_ ("**a measure**"), forming nouns for measurement processes in scientific and medical nomenclature.[](https://www.tabers.com/tabersonline/view/Tabers-Dictionary/754837/all/_metry)
_____
>[!example]+ RELATED TERMS to [[-metry]]
>
|          Term           |    Meaning    | Prefix/Suffix? | Notes |
| :---------------------: | :-----------: | :------------: | :---: |
| [[-metry]] | measuring |       -        |   -   |
|    [[Optometry]]     |    Measurement of vision     |    no     | - |
_____
>[!tip]+ DERIVATIONS of [[-metry]]
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