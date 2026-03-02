---
tags:
  - medterm
aliases: []
roots:
  - dys-
  - phor-
  - -ia
"definition:": sense of discomfort
"alphabet:": D
forms:
  - combining
  - noun
---
>[!note]+ Definition of dysphoria
>[[dys-]][[phor-]][[-ia]] - sense of discomfort (condition bearing pain/abnormality)
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