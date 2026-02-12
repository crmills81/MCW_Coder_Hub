---
tags: [medroot]
aliases: []
roots: carcinoge
forms: [prefix, suffix]
alphabet: C
definition: [causing cancer; incite cancer]
---

>[!Note] DEFINITION of carcinoge
>A carcinogen is a physical, chemical, or biological agent that increases the risk of cancer by altering cellular metabolism or damaging DNA directly within a cell. This damage interferes with normal biological processes, leading to uncontrolled cell growth and the eventual formation of tumors. Carcinogens are classified by international health agencies, such as the IARC, into categories ranging from "Group 1" (definitely carcinogenic to humans) to Group 3 (not classifiable) based on the level of scientific evidence available.
_____
>[!info]+ ETYMOLOGY of carcinoge
>#greek
_____
>[!tip]+ DERIVATIONS of carcinoge
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

[[Med roots]]
[[Appendix A Prefixes]]
[[Appendix B Combining Forms]]
[[Appendix C Suffixes]]
[[Appendix D Suffix forms]]