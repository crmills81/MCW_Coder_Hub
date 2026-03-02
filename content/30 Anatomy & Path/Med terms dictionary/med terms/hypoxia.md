---
tags:
  - medterm
aliases: []
roots:
  - hypo-
  - hyp-
  - ox-
  - -ia
"definition:": Oxygen deficiency in tissue
"alphabet:": H
forms:
  - noun
  - combining
---
>[!note] Definition of hypoxia
>[[hypo-|hyp-]][[ox-]][[-ia]] - Oxygen deficiency in tissue (condition of low oxygen)

___
>[!info]+ Etymology of [[]]

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