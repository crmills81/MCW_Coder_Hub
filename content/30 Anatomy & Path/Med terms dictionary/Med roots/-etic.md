---
tags:
  - medroot
  - medterm
aliases: [-etical]
roots:
  - -etic
  - -tic
  - -ic
forms:
  - suffix
  - adjective
"alphabet:": E
definition:
  - pertaining to
---
>[!Note] DEFINITION of [[-etic]]
>Forms adjectives, often from nouns ending in [[-esis]]: pertaining to; **-etic** is a suffix of Greek origin used extensively in medical and scientific terminology to form adjectives that indicate a **relationship to, characteristic of, or pertaining to the root word it modifies**. It transforms nouns into adjectives that describe qualities, properties, or states associated with the base term. In medical terminology, [[-etic]] is particularly common in describing physiological processes, pathological conditions, and therapeutic effects. The suffix indicates that something **possesses the nature of, relates to, or is affected by the concept expressed in the root word**. It functions similarly to other adjectival suffixes like [[-ic]], [[-ous]], and [[-al]], but often carries specific connotations within medical contexts, particularly regarding functional or dynamic states rather than static anatomical features.
_____
>[!info]+ ETYMOLOGY of [[-etic]]
>#greek **Origin:** Greek  
>**Root:** -ētikos (-ητικός)  
>**Meaning:** "**pertaining to**," "**suited for**," "**tending to**"  
>**Historical Development:** The suffix [[-etic]] derives from the Greek adjectival ending *-ētikos*, which was used to create adjectives from nouns and verbs. It entered medical Latin as [[-eticus]] and subsequently into English medical terminology through French and New Latin scientific vocabulary. The Greek root is related to [[-etos]] (**verbal adjective ending**) combined with [[-ikos]] (**adjectival suffix**), creating a compound suffix that emphasizes both action and quality.
>
_____
>[!example]+ RELATED TERMS to [[-etic]]
>
>|  [[-etic]]  |   pertaining to   | located in |         -          |       -       |
|:---------:|:-----------------:|:----------:|:------------------:|:-------------:|
|  [[-ac]]  |        YES        |    YES     |         -          |       -       |
|  [[-an]]  |        YES        |    YES     |         -          |       -       |
|  [[-ar]]  |        YES        |    YES     |         -          |       -       |
| [[-ary]]  |        YES        |     -      |     place for      |       -       |
| [[-al]]  |        YES        |    YES     |         -          |       -       |
| [[-eal]]  |        YES        |    YES     |         -          |       -       |
| [[-ean]] |        YES        |     -      |         -          |       -       |
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
>***
>
>**Terms Using -etic:**
>
>1. **Diuretic** ([[di-]][[u-]]ret[[-ic]])
>    - Pertaining to increased urine production
>    - Relevant to your coding: Common in urology procedures and diagnoses
>2. **Emetic** (e[[-met]][[-ic]])
>    - Pertaining to or causing vomiting
>    - Related to medications and adverse reactions
>3. **Genetic** ([[ge-]]net[[-ic]])
>    - Pertaining to genes or heredity
>    - Common in congenital conditions across all specialties
>4. **Sympathetic** ([[sym-]][[pa-]]thet[[-ic]])
 >   - Pertaining to the sympathetic nervous system or showing sympathy
>    - Important in ophthalmology (**sympathetic ophthalmia**)
>5. **Prosthetic** ([[pros-]]thet[[-ic]])
>    - Pertaining to artificial body parts or devices
>    - Relevant in otolaryngology (**prosthetic devices for hearing**)
>
>
_____
>[!tip]- DERIVATIONS of [[-etic]]
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