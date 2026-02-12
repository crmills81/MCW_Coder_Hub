---
tags:
  - medroot
aliases:
  - -culus
  - -cula
  - -culum
roots:
  - -cle
  - -culus
  - -cula
  - -culum
forms:
  - suffix
  - diminutive
"alphabet:": C
definition:
  - small
---
>[!Note] DEFINITION of [[-cle]]
> small
_____
>[!info]+ ETYMOLOGY of [[-cle]]
>#latin
_____
>[!example]+ RELATED TERMS to [[-cle]]
>
>|  [[-cle]]  | small |         -         |
|:----------:| :-----: |:-----------------:|
| [[micr-]]  | YES   |         -         |
| [[-ellus]] | YES   | biological genera |
|  [[-il]]   | YES   |         -         |
|  [[-ole]]  | YES   |         -         |
|  [[-ule]]  | YES   |         -         |
_____
>[!tip]+ DERIVATIONS of [[-cle]]
>```dataview
>TABLE definition AS Definition
>FROM #medroot
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
>SORT file.name ASC
>```
_____
>[!faq]- Query functionality
>
>```dataview
>TABLE definition AS Definition
>FROM #medroot
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```

[[Med roots dictionary]]
[[Appendix A Prefixes]]
[[Appendix B Combining Forms]]
[[Appendix C Suffixes]]
[[Appendix D Suffix forms]]