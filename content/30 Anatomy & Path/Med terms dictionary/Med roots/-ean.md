---
tags:
  - medroot
aliases: []
roots:
  - -ean
forms:
  - suffix
  - adjective
"alphabet:": E
definition:
  - pertaining to
  - located in
---
>[!Note] DEFINITION of [[-ean]]
>forms adjectives: pertaining to, located in; In medical terminology, **[[-ean]]** functions as a rare adjectival suffix forming words that indicate **resemblance, belonging, or relation** to a root noun, often used in pathology, ethnicity-related conditions, or historical descriptors (e.g., _caucasian_ in racial classification, _proteinaceous_ via related forms). It overlaps semantically with more common **[[-al]]**, **[[-eal]]**, **[[-ic]]**, but carries a slightly more formal or classical tone; not productive in modern neologisms but retained in established terms for precision in dermatology, genetics, and epidemiology.
_____
>[!info]+ ETYMOLOGY of [[-ean]]
>#latin From Latin -eānus or Greek -εανός (-eanós), adjectival suffixes meaning "of or belonging to" (e.g., caesareanus "of Caesar").
>Entered English via Medieval Latin and Old French by the 14th century, with medical adoption during Renaissance anatomy for relational adjectives.
_____
>[!example]+ RELATED TERMS to [[-ean]]
>
>|  [[-ean]]  |   pertaining to   | located in |         -          |       -       |
|:---------:|:-----------------:|:----------:|:------------------:|:-------------:|
|  [[-ac]]  |        YES        |    YES     |         -          |       -       |
|  [[-an]]  |        YES        |    YES     |         -          |       -       |
|  [[-ar]]  |        YES        |    YES     |         -          |       -       |
| [[-ary]]  |        YES        |     -      |     place for      |       -       |
| [[-al]]  |        YES        |    YES     |         -          |       -       |
| [[-eal]]  |        YES        |    YES     |         -          |       -       |
| [[-etic]] |        YES        |     -      |         -          |       -       |
|  [[-ic]]  |        YES        |     -      |        drug        |     agent     |
|  [[-id]]  |        YES        |     -      |   condition (of)   |  state (of)   |
| [[-ile]]  |        YES        |     -      | capable of (being) |     like      |
| [[-ine]]  |        YES        |    YES     |         -          |       -       |
| [[-itic]] | (to inflammation) |     -      |        drug        |     agent     |
| [[-ive]]  |        YES        |     -      |         -          |       -       |
| [[-otic]] |        YES        |     -      |         -          |       -       |
| [[-ous]]  |        YES        |     -      |  characterized by  |    full of    |
| [[-tic]]  |        YES        |     -      |        drug        | agent, person |
_____
>[!tip]+ DERIVATIONS of <% tp.file.title %>
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