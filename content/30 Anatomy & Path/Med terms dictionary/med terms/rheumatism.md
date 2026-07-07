---
tags:
  - medterm
  - pmr
aliases:
  - Rheumatism
roots:
  - rheumat-
  - -ism
alphabet: R
forms:
  - combining
  - noun
definition: chronic pain affecting joints and connective tissue
---
>[!note]+ Definition of [[rheumatism]]
>[[rhe-|rheumat-]][[-ism]] - chronic pain affecting joints and connective tissue
___
>[!info]+ Etymology of [[rheumatism]]
>originally thought to be caused by a flowing of the humors in the body

_____
>[!tip]- DERIVATIONS of [[rheumatism]]
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
>AND any(contains(this.definition, definition))
>```


[[Med roots]]
[[Appendix A Prefixes]]
[[Appendix B Combining Forms]]
[[Appendix C Suffixes]]
[[Appendix D Suffix forms]]