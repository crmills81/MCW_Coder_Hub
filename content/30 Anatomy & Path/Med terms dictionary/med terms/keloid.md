---
tags:
  - medterm
aliases: []
roots:
  - -cel-
  - -oid
"definition:": Scarlike growth of tissue on the skin
"alphabet:": K
forms:
  - combining
  - noun
---
>[!note]+ Definition of keloid
>[[-cel-|kel-]][[-oid]] - scarlike growth of tissue on the skin (resembling tumor)
___
>[!info]+ Etymology of keloid

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

