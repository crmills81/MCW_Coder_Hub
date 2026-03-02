---
tags:
  - medterm
  - medroot
aliases: []
roots:
  - cheir-
  - ergon
  - surg-
forms:
  - noun
"alphabet:": S
"definition:": Physician who does surgical procedures
---
>[!note]+ Definition of [[surgeon]]
>[[cheir-]][[erg-|ergon]] - Physician who does surgical procedures (hand work)
___
>[!info]+ Etymology of [[surgeon]]
>#greek Middle English: from Anglo-Norman French _surgien_, contraction of Old French _serurgien_, based on Latin _chirurgia_, from Greek _kheirourgia_ ‘handiwork, surgery’, from _kheir_ ‘hand’ + _ergon_ ‘work’
_____
>[!tip]- DERIVATIONS of [[surgeon]]
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
