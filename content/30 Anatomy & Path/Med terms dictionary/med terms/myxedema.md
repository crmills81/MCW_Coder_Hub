---
tags: [" #medterm "]
aliases: []
roots: [myx-, edema]
definition:: mucus swelling
---
>[!note]+ Definition of myxedema
>[[myx-]][[edema]] - mucus swelling of skin due to hypothyroidism ( mucus swelling)
___
>[!info]+ Etymology of myxedema

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
