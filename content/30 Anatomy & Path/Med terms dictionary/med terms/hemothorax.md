---
tags:
  - medterm
  - medroot
  - Respiratory
aliases:
  - Hemothorax
roots:
  - hem-
  - thorac-
  - hemo-
  - -thorax
  - -rax
forms:
  - combining
  - noun
  - diminutive
"alphabet:": H
"definition:": accumulation of blood within the pleura
---
>[!note]+ Definition of [[hemothorax]]
>[[hem-]]o-[[thorac-|thorax-]] - accumulation of blood within the [[pleur-]]a due to blood vessels rupturing (chest blood)
___
>[!info]+ Etymology of [[hemothorax]]
>

_____
>[!tip]- DERIVATIONS of [[hemothorax]]
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
>WHERE file.name != this.file.name
>AND any(contains(definition, split(this.definition, " ")))
>```


[[Med roots dictionary]]
[[Appendix A Prefixes]]
[[Appendix B Combining Forms]]
[[Appendix C Suffixes]]
[[Appendix D Suffix forms]]

