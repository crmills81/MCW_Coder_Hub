---
tags:
  - general
  - medterm
aliases:
  - headache
roots:
  - hemi-
  - crani-
  - -a
"definition:": Pain on one side of the head
"alphabet:": M
forms:
  - noun
---
>[!note]+ Definition of [[migraine]]
> [[hemi-]][[crani-]][[-a]] - Pain on one side of the head (condition of half-skull [pain] )
___
>[!info]+ Etymology of [[migraine]]
>#greek hemikrania -> hemicrania (latin) -> emicránia (italian) -> migraine (french)

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


