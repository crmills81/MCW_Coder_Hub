---
tags:
  - medterm
aliases: []
roots:
  - sial-
  - agog-
  - -agogue
"definition:": agent that increases saliva flow
"alphabet:": S
forms:
  - noun
  - combining
---
>[!note]+ Definition of sialagogue
>[[sial-]][[agog-|-agogue]] - agent that increases saliva flow
>- **-agogue (-αγωγός):** From Greek _[agein]_ (to lead, induce, bring forth).
___
>[!info]+ Etymology of sialagogue
>late 18th century: from French, from Greek _sialon_ ‘saliva’ + _agōgos_ ‘leading’

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