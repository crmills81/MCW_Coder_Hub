---
tags:
  - medroot
  - medterm
  - ophthalmology
  - otolarngology
  - urology
aliases:
  - -ian
roots:
  - -an
forms:
  - suffix
"alphabet:": A
definition:
  - pertaining to
  - located in
---
>[!Note] DEFINITION of [[-an]]
>Forms adjectives: pertaining to, located in; **-an** is a nominal and adjectival suffix used extensively in medical terminology to form words that indicate **relationship, association, or pertaining to a specific anatomical structure, body part, organ system, condition, or medical concept**. It transforms root words (**typically from Latin or Greek origins**) into adjectives or nouns that describe something connected to or characteristic of the base term. This suffix is particularly common in anatomical terminology, where it designates structures, regions, or characteristics associated with specific body parts or physiological systems.
_____
>[!info]+ ETYMOLOGY of [[-an]]
>#latin 
>- **Origin**: Latin suffix _[[-anus]]_, _[[-ana]]_, _[[-anum]]_ (**masculine, feminine, neuter forms**)
>- **Meaning**: "*pertaining to*," "*connected with*," "*belonging to*"
>- **Greek influence**: Also derived from Greek _[[-anos]]_ (ἄνος)
>- **Historical usage**: Used in classical Latin to form adjectives from nouns, carried into medical Latin and subsequently into modern medical English
>

_____
>[!example]+ RELATED TERMS to [[-an]]
>
>|  [[-an]]  |   pertaining to   | located in |         -          |       -       |
|:---------:|:-----------------:|:----------:|:------------------:|:-------------:|
|  [[-ac]]  |        YES        |    YES     |         -          |       -       |
|  [[-al]]  |        YES        |    YES     |         -          |       -       |
|  [[-ar]]  |        YES        |    YES     |         -          |       -       |
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
>
>**Urological Terms (relevant to your specialty)**
>
>- **[[Vesican]]**: pertaining to the bladder (**vesica**)
>- **[[Urethan]]** compounds: related to the urethra
>- **Renan**: archaic term meaning renal/pertaining to kidneys
>
>**Ophthalmological Terms**
>
>- **[[Ocular]]** is more common, but **oculan** appears in compound pharmaceutical names
>- **Corneान**: pertaining to the cornea (**less common than corneal**)
>
>**Body Systems & Regions**
>
>- **[[cutaneous]]** ([[cutan-]] + [[-eous]], related): pertaining to the skin
>- **[[Perinean]]**: variant of perineal, pertaining to the perineum
>- **[[Subphrenic]]** contains -_an_ elements: below the diaphragm
>
_____
>[!tip]- DERIVATIONS of [[-an]]
>```dataview
>TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
>SORT file.name ASC
>```
_____
>[!faq]-  Query functionality
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