---
tags:
  - medterm
  - medroot
aliases: []
roots:
  - sial-
  - syring-
"definition:": fistula into salivary glands
"alphabet:": S
forms:
  - noun
---
>[!note]+ Definition of sialosyrinx
>[[sial-]]o-[[syring-|-syrinx]] - fistula into salivary glands (saliva fistula)
___
>[!info]+ Etymology of sialosyrinx
>Greek root **SYRING- (SYRINX) which means 'pipe' or 'tube**
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