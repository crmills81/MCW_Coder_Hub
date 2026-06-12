---
tags:
  - medterm
aliases: []
roots:
  - pod-
  - -agra
"definition:": gout in the foot or large toe
"alphabet:": P
forms:
  - combining
  - noun
---
>[!note]+ Definition of [[podagra]]
>[[pod-]][[-agra]] - gout in the foot or large toe
___
>[!info]+ Etymology of [[podagra]]
>The word "podagra" (likely the intended spelling of "fpodagra") originates from Latin and Ancient Greek. It combines "pod-" (from the PIE root "*ped-" meaning "foot") and **"agra" ("a catching, seizure" or "trap")**, referring to "gout in the foot." This etymology dates back to the late 14th century in English, with earlier uses in Old English before 1150. Etymology. **Ultimately from Ancient Greek** ποδάγρα (podágra, “foot trap; podagra”).

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

