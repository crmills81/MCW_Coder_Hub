---
tags:
  - medroot
aliases:
  - carcinogen
roots:
  - carcin-
  - -genic
forms:
  - prefix
  - suffix
alphabet: C
definition:
  - cancer; Cancer-causing
---

>[!Note] **DEFINITION** of [[carcinogenic]]
>A [[carcinogenic]] agent works by damaging the DNA of a cell or disrupting metabolic processes, leading to uncontrolled cell division and the formation of [[malignant]] tumors. These agents are classified by organizations like the *International Agency for Research on Cancer (IARC)* into groups based on the strength of evidence for their cancer-causing potential. While some [[carcinogen]]s act directly on DNA (genotoxic), others promote cancer through chronic inflammation or immunosuppression.
_____
>[!info]+ **ETYMOLOGY** of [[carcinogenic]]
>#greek; - **Roots:**
>- _Carcinoma_ (Greek _karkinoma_, "a cancer," literally "a crab").
>- _-genic_ (Greek _genes_, "born of" or "produced by").[](https://www.etymonline.com/word/carcinogenic)​
>- **History:** The term "carcinogen" was first used in 1853, with the adjectival form "carcinogenic" appearing in medical literature by 1926.
_____
>[!tip]+ **DERIVATIONS** of [[carcinogenic]]
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