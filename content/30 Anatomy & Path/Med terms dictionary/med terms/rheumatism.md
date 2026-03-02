---
tags:
  - medterm
aliases: []
roots:
  - rheumat-
  - -ism
"definition:": chronic pain affecting joints and connective tissue
"alphabet:": R
forms:
  - combining
  - noun
---
>[!note]+ Definition of rheumatism
>[[rhe-|rheumat-]][[-ism]] - chronic pain affecting joints and connective tissue
___
>[!info]+ Etymology of rheumatism
>originally thought to be caused by a flowing of the humors in the body

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