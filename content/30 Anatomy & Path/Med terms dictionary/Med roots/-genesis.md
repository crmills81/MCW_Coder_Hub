---
tags:
  - medroot
aliases: []
roots:
  - -genesis
  - -sis
  - -esis
forms:
  - compound suffix form
  - suffix
  - suffix form
  - adjective
"alphabet:": G
definition:
  - formation
  - origin
  - production
---
>[!Note] DEFINITION of [[-genesis]]
>forms nouns: [[gen-]][[-esis]] - formation, origin (*state of formation*); In medical terminology, **[[-genesis]]** refers to the biological process of forming or producing something new. It can describe physiological development (*e.g., the formation of new nerves*) or the progression of a disease state (*e.g., the development of cancer*). While it is often used for constructive biological processes, it also applies to the initiation of pathological conditions. It is functionally related to the suffix **[[-genic]]**, which describes something that _produces_ or is _produced by_ a specific agent.
_____
>[!info]+ ETYMOLOGY of [[-genesis]]
>- **Root:** _[[-genesis]]_ (meaning "**origin**," "**source**," "**birth**," or "**becoming**").[](https://www.wikidoc.org/index.php/List_of_medical_roots,_suffixes_and_prefixes)​
>- **Derivation:** Derived from the #greek verb _gignesthai_ ("**to be born**" or "**to become**").
_____
>[!example]+ RELATED TERMS to [[-genesis]]
>
>| [[-genesis]] | formation | origin | 
>| --- | --- | ---| 
| [[arche-]]     | YES      | beginning |
| ---| ----- | ---- |
| **Medical Term**    | **Combined Root**  | **Meaning of Process** |                               
| **Neurogenesis**    | Nerve (_neuro-_)   | Production of new neurons [youtube](https://www.youtube.com/watch?v=PDVq6KwtHCE)​                                                     |
| **Angiogenesis**    | Vessel (_angio-_)  | Formation of new blood vessels [youtube](https://www.youtube.com/watch?v=PDVq6KwtHCE)​                                                |
| **Osteogenesis**    | Bone (_osteo-_)    | Formation of bone tissue [hunterbusinessschool](https://hunterbusinessschool.edu/what-is-a-root-prefix-and-suffix-in-medical-terms/)​ |
| **Pathogenesis**    | Disease (_patho-_) | The origin and development of a disease                                                                                               |
| **Spermatogenesis** | Seed (_spermato-_) | The production of sperm cell                                                                                                          |
_____
>[!tip]+ DERIVATIONS of [[-genesis]]
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