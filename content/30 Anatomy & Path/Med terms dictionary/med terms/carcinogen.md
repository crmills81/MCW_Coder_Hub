---
tags:
  - medterm
aliases: []
"roots:":
  - carci-
  - -gen
forms:
  - prefix
  - suffix
alphabet: C
definition:
  - causing cancer; incite cancer
---
>[!Note] **DEFINITION** of [[carcinogen]]
>A [[carcinogen]] a physical, chemical, or biological agent that increases the risk of cancer by altering cellular metabolism or damaging DNA directly within a cell. This damage interferes with normal biological processes, leading to uncontrolled cell growth and the eventual formation of tumors. [[carcinogen]]s are classified by international health agencies, such as the IARC, into categories ranging from "Group 1" (definitely [[carcinogenic]] to humans) to Group 3 (not classifiable) based on the level of scientific evidence available.
_____
>[!info]+ **ETYMOLOGY** of [[carcinogen]]
>#greek; - **Roots:** _Karkinos_ (meaning "crab" or "cancer") + _[[-gen]]_ (meaning "producer" or "source").
>- **Historical Context:** The term was coined as a shorthand for "cancer-generator," first appearing in English medical texts in the mid-19th century. carcinogen(n.)::"cancer-causing substance," 1853, from carcinoma "malignant tumor, cancer" + [[-gen]].
_____
>[!tip]+ **DERIVATIONS** of [[carcinogen]]
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