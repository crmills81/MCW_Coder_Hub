---
tags:
  - medterm
aliases: []
roots:
  - hyper-
  - capn-
  - -ia
"definition:": too much CO2
"alphabet:": H
forms:
  - combining
  - noun
  - diminutive
---
>[!note]+ Definition of hypercapnia
>[[hyper-]][[capn-]][[-ia]] - too much CO2
___
>[!info]+ Etymology of hypercapnia

_____
>[!tip]- DERIVATIONS of [[]]
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


[[Med roots]]
[[Appendix A Prefixes]]
[[Appendix B Combining Forms]]
[[Appendix C Suffixes]]
[[Appendix D Suffix forms]]