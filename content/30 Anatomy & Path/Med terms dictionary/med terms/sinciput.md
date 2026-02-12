---
tags:
  - medterm
aliases: []
roots:
  - semi-
  - ciput-
"definition:": fore and upper part of the cranium
"alphabet:": S
forms:
  - adjective
---
>[!note]+ Definition of [[sinciput]]
>[[semi-]][[capit-]] - fore and upper part of the cranium, upper half of the skull (half head)
___
>[!info]+ Etymology of [[sinciput]]
_____
>[!tip]+ DERIVATIONS of [[sinciput]]
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

