---
tags:
  - medroot
aliases: []
roots:
  - -eal
forms:
  - suffix
"alphabet:": E
definition:
  - pertaining to
  - located in
  - relating to
---
>[!Note] DEFINITION of [[-eal]]
>forms adjectives: pertaining to, located in; In medical terminology, **[[-eal]]** converts nouns (often anatomical structures or processes) into adjectives that indicate **relationship, location, or resemblance** to that root, frequently used in diagnostics, pathology, and pharmacology to describe conditions or features "of" or "like" something. It parallels other "pertaining to" suffixes like **[[-ac]]**, **[[-al]]**, **[[-ar]]**, and **[[-ic]]**, appearing in precise descriptors such as _[[esophageal]]_ (pertaining to the esophagus) or _neural_ (pertaining to nerves); less common than **-al** but standardized in specific organ/system terms.[](https://www.homeofbob.com/health/wordRootsAndAnatomy.html)
_____
>[!info]+ ETYMOLOGY of [[-eal]]
>#latin - From **Latin** **-alis** or **-ealis**, adjectival endings meaning **"of, belonging to, relating to"** (e.g., _corporealis_ "bodily").
>- Entered English via **Old French** and directly from **Medieval Latin** in scientific contexts by the 14th century, anglicized as **-eal** in certain borrowings while **-al** became more dominant.
_____
>[!example]+ RELATED TERMS to [[-eal]]
>
>|  [[-eal]]  |   pertaining to   | located in |         -          |       -       |
|:---------:|:-----------------:|:----------:|:------------------:|:-------------:|
|  [[-ac]]  |        YES        |    YES     |         -          |       -       |
|  [[-an]]  |        YES        |    YES     |         -          |       -       |
|  [[-ar]]  |        YES        |    YES     |         -          |       -       |
| [[-ary]]  |        YES        |     -      |     place for      |       -       |
| [[-al]]  |        YES        |    YES     |         -          |       -       |
| [[-ean]]  |        YES        |    YES     |         -          |       -       |
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
>[!tip]+ DERIVATIONS of [[-eal]]
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