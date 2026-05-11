---
tags:
  - medroot
  - medterm
  - ENT
  - otolaryngology
aliases:
  - acou
  - aur/i‑
  - aur/o‑
roots:
  - aur-
  - oto‑
forms:
  - combining
  - prefix
  - diminutive
"alphabet:": A
definition:
  - ear
---
>[!Note] DEFINITION of [[aur-]]]]
>ear (hear also: [[acou-]]); [[Aur‑]] denotes the ear structure, especially the external ear (**[[pinna]]/[[auricle]]**), or hearing/perception by ear. In clinical contexts, it appears in abbreviations like **aur. sin.** (**auris sinistra, left ear**) and terms for ear anatomy, pathology, or procedures, often alongside [[oto-]] terms. For example, **[[auricular]]** refers to ear‑shaped or pertaining to the ear, and auriscope is an otoscope for viewing the ear canal.
>
>|Term|Breakdown|Brief meaning|
|---|---|---|
|[[auricle]]|[[aur‑]] + [[‑icle]] “small”|Pinna or external ear; also the ear‑like appendage of the atrium.|
|Aural|[[aur‑]] + [[‑al]] “**pertaining to**”|Related to the ear or hearing.|
|[[Auricular]]|[[auricul‑]] (diminutive) + [[‑ar]]|Pertaining to the ear or ear‑shaped.|
|Auriscope|[[aur/i‑]] “ear” + [[‑scope]] “**instrument**”|Instrument for examining the ear ([[otoscope]] synonym).​|
|Au. sin./ Au. dext.|auris sinistra/ dextra|Left/right ear (abbreviations).​|
_____
>[!info]+ ETYMOLOGY of [[aur-]]
>#latin auris; From Latin _auris_ (“**ear**”), a third‑declension feminine noun with genitive _auris_ and diminutive _auricula_ (“*little ear*,” [[auricle]]). Cognate with Greek _ous/ōtos_ ([[oto‑]]), both from Proto‑Indo‑European _h₂ṓws_ (“ear”), explaining the parallel usage in med‑term.
_____
>[!example]+ RELATED TERMS to [[aur-]]
>
| Term       | Meaning | Prefix/Suffix? |
| ---------- | ------- | -------------- |
| [[aur/o‑]] | ear     | -              |
| [[aur-]]   | ear     | -              |
| [[ot-]]    | YES     | -              |
_____
>[!tip]+ DERIVATIONS of [[aur-]]
>```dataview
>TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
>SORT file.name ASC
>```
_____
>[!faq]- Query
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