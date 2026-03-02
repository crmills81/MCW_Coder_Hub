---
tags:
  - medical_coding
  - specialty
  - latin
  - medterm
aliases: []
roots:
  - per-
  - tuss-
  - -is
  - -sis
"definition:": whooping cough
forms:
  - noun
"alphabet:": P
---
>[!note]+ Definition of [[pertussis]]
>[[per-]][[tuss-]][[-is]] - whooping cough (thorough cough) per·tus·sis /pərˈtəsəs/
___
>[!info]+ Etymology of [[pertussis]]
>late 18th century: modern Latin, from [per-] ‘away, extremely’ + Latin _tussis_ ‘a cough’.

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

