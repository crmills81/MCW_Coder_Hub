---
tags:
  - medroot
  - medterm
aliases:
  - -ary
roots:
  - -ar
  - -ar-
forms:
  - suffix
  - suffixes
  - suffix form
"alphabet:": A
definition:
  - pertaining to
  - located in
---
>[!Note] DEFINITION of [[-ar]]
>Forms adjectives: pertaining to, located in; **-ar** is a Latin-derived adjectival suffix that transforms nouns into adjectives, indicating a **relationship, characteristic, or association with the base word.** In medical terminology, it creates descriptive terms that specify anatomical structures, physiological processes, or pathological conditions by denoting "**pertaining to**," "**relating to**," or "**connected with**" the root word it modifies.
_____
>[!info]+ ETYMOLOGY of [[-ar]]
>#latin 
>- **Origin**: Latin suffix _-āris_ (**masculine/feminine**) or _-āre_ (**neuter**)
>- **Meaning**: "*pertaining to*," "*connected with*"
>- **Evolution**: Directly borrowed into medical Latin and subsequently into English medical terminology
>
_____
>[!example]+ RELATED TERMS to [[-ar]]
>
|  [[-ar]]  |   pertaining to   | located in |         -          |       -       |
|:---------:|:-----------------:|:----------:|:------------------:|:-------------:|
|  [[-ac]]  |        YES        |    YES     |         -          |       -       |
|  [[-an]]  |        YES        |    YES     |         -          |       -       |
|  [[-al]]  |        YES        |    YES     |         -          |       -       |
| [[-ary]]  |        YES        |     -      |     place for      |       -       |
| [[-eal]]  |        YES        |    YES     |         -          |       -       |
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
>***
>
>**Related Terms (Medical Examples)**
>
>- **[[Ocular]]** ([[ocul-]]/[[-ar]]) - pertaining to the eye
>- **[[Vascular]]** ([[vascul-]]/-ar) - pertaining to blood vessels
>- **Muscular** ([[muscul-]]/-ar) - pertaining to muscles
>- **[[Auricular]]** ([[auricul-]]/-ar) - pertaining to the ear or atrium
>- **[[Icular]]** ([[ilic-]]/-ar) - pertaining to the ilium
>- **Molecular** ([[molecul-]]/-ar) - pertaining to molecules
>- **Cellular** ([[cellul-]]/-ar) - pertaining to cells
>- **[[Glandular]]** ([[glandul-]]/-ar) - pertaining to glands
>- **[[Tubular]]** ([[tubul-]]/-ar) - pertaining to tubes
>- **Ventricular** ([[ventricul-]]/-ar) - pertaining to a ventricle
>
_____
>[!tip]- DERIVATIONS of [[-ar]]
>```dataview
>TABLE definition AS Definition 
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