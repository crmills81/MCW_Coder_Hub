---
tags:
  - medroot
  - medterm
aliases: [Amoeba]
roots:
  - amoeba
forms:
  - combining
"alphabet:": A
definition:
  - amoeba
---
>[!Note] DEFINITION of [[amoeba]]
>amoeba A large genus of protozoa of the class Sarcodina, in the kingdom Protista, found in fresh and salt water and moist soil. Some species are parasitic in humans, but most parasitic species have been reclassified in the genus _Entamoeba_.
_____
>[!info]+ ETYMOLOGY of [[amoeba]]
>#greek amoibe (change)
_____
>[!example]+ RELATED TERMS to [[amoeba]]
>
_____
>[!tip]- DERIVATIONS of [[amoeba]]
>```dataview
>TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
>SORT file.name ASC
>```
_____
>[!faq]- Query
>```dataview
>TABLE definition AS Definition
>FROM #medterm 
>WHERE file.name != this.file.name
>AND any(contains(this.definition, definition))
>```

[[Med roots]]
[[Appendix A Prefixes]]
[[Appendix B Combining Forms]]
[[Appendix C Suffixes]]
[[Appendix D Suffix forms]]