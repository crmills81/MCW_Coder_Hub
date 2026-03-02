---
tags:
  - greek
  - medterm
aliases: []
roots:
  - pneumon-
  - -ia
  - pneum(on)-
  - pne-
"definition:": inflammation of the lungs
forms:
  - noun
"alphabet:": P
---
>[!note]+ Definition of pneumonia
>[[pneumon-]][[-ia]] - inflammation of lungs (lung condition)
___
>[!info]+ Etymology of pneumonia
>early 17th century: via Latin from Greek, from _pneumōn_ ‘lung’.

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

