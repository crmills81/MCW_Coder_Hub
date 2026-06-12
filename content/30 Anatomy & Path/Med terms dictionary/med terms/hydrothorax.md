---
tags:
  - medterm
aliases: []
roots:
  - hydr-
  - thorac-
"definition:": accumulation of fluid within the pleura
"alphabet:": h
forms:
  - combining
  - noun
---
>[!note]+ Definition of hydrothorax
>[[hydr-]]o-[[thorac-|thorax-]] - accumulation of fluid within the [[pleur-]]a (chest fluid)
___
>[!info]+ Etymology of hydrothorax
>
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
