---
tags:
  - medroot
aliases: [-cele]
roots:
  - -coele
forms:
  - suffix
alphabet: C
definition:
  - cavity
  - ventricle
  - hollow space
---
>[!Note] DEFINITION of [[-coele]]
>In anatomical and medical terminology, **[[-coele]]** designates a **cavity, chamber, or fluid-filled space** within a structure, particularly the brain's ventricles (_diencephalocoeles_), spinal canal, or embryonic body cavities (coelom). It differs slightly from **[[-cele]]** (hernia/protrusion) by emphasizing the hollow space itself rather than a herniated sac, though the terms overlap in clinical use for congenital defects.
_____
>[!info]+ ETYMOLOGY of [[-coele]]
>#greek - From **Ancient Greek _koilos_ (κοῖλος)**, meaning **"hollow, concave, cavity."**
>- Latinized as **[[-coele]]** in scientific nomenclature (e.g., _blastocoel_), entering English medical vocabulary in the 19th century alongside **[[-cele]]** (from _kēlē_, "hernia").
>- The spelling **[[-coele]]** preserves the Greek "oe" diphthong for precision in embryology and neuroanatomy.
_____
>[!example]+ RELATED TERMS to [[-coele]]
>
|          Term           |    Meaning    | Prefix/Suffix? | Notes |
| :---------------------: | :-----------: | :------------: | :---: |
| [[-coele]] | **cavity, ventricle** |       -        |   -   |
|    [[hydrocele]]     |    Fluid-filled cavity (alt. hydrocele)  |    [[hydr-]] + [[-coele]] variant     | - |
_____
>[!tip]+ DERIVATIONS of [[-coele]]
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