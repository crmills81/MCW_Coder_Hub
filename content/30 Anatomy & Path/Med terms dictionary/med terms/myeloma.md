---
tags:
  - medterm
aliases: []
roots:
  - myel-
  - -oma
"definition:": tumor originating in the bone marrow
"alphabet:": M
forms:
  - noun
  - combining
---
>[!note]+ Definition of myeloma
>[[myel-]][[30 Anatomy & Path/Med terms dictionary/Med roots/-oma]] - tumor originating in the bone marrow (bone marrow tumor)
___
>[!info]+ Etymology of myeloma

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


[[Med roots dictionary]]
[[Appendix A Prefixes]]
[[Appendix B Combining Forms]]
[[Appendix C Suffixes]]
[[Appendix D Suffix forms]]

