---
tags:
  - medterm
  - medroot
aliases:
  - diabetes mellitus
  - Diabetes
  - DMI
  - DMII
roots:
  - diabetes
  - dia-
  - -etes
  - -tes
  - di-
forms:
  - prefix
  - suffix
  - combining
  - noun
  - suffix form
alphabet: D
definition:
  - diabetes mellitus
  - a chronic endocrine disorder
---
>[!Note] DEFINITION of [[diabetes]]
>[[Diabetes]] mellitus encompasses types such as *type 1* (**autoimmune beta-cell destruction causing absolute insulin deficiency**), *type 2* (**insulin resistance with relative insulin deficiency**), **gestational diabetes, and others like maturity-onset diabetes of the young (MODY)**. It results in complications including macrovascular (e.g., cardiovascular disease) and microvascular damage (e.g., [[retinopathy]], [[nephropathy]]).
_____
>[!info]+ ETYMOLOGY of [[diabetes]]
>#greek The term "[[diabetes]]" derives from Greek _diabētēs_, meaning "**a siphon**" or "**to pass through**" (_[[30 Anatomy & Path/Med terms dictionary/Med roots/dia-]]_ "*through*" + _bainein_ "*to go*"), coined around 250 BCE by Apollonius of Memphis to describe **excessive urination**. "[[Mellitus]]," added by Thomas Willis in 1674, comes from #Latin for "**honey-sweet**," noting the **sweet urine due to glucose**.
_____
>[!tip]- DERIVATIONS of [[diabetes]]
>```dataview
>TABLE definition AS Definition
>FROM #medterm 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
>SORT file.name ASC
>```
_____
>[!faq]- Query functionality
>```dataview
>TABLE definition AS Definition
>FROM #medterm 
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```

[[Med roots dictionary]]
[[Appendix A Prefixes]]
[[Appendix B Combining Forms]]
[[Appendix C Suffixes]]
[[Appendix D Suffix forms]]