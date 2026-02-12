---
tags:
  - " #medroot"
  - latin
  - medterm
  - expert
aliases:
  - rise
roots:
  - sur
forms:
  - noun
"alphabet:": S
definition:
  - physician
  - surgeon
  - surgery
  - surgical excision
---
>[!Note] DEFINITION of surg-
>surgeon; surgery; surgical
_____
>[!info]+ ETYMOLOGY of surg-
>_[surgere](https://en.wiktionary.org/wiki/surgo#Latin "wikt:surgo")_ From _[subrigō](https://en.wiktionary.org/wiki/subrigo#Latin "subrigo")_, _[surrigō](https://en.wiktionary.org/wiki/surrigo#Latin "surrigo")_, from _[sub-](https://en.wiktionary.org/wiki/sub-#Latin "sub-")_ (“up from below”) +‎ _[regō](https://en.wiktionary.org/wiki/rego#Latin "rego")_ (“lead, rule”).
_____
>[!example]+ RELATED TERMS to surg-
>surgeon
>surgical
>surgery
_____
>[!tip]+ DERIVATIONS of surg-
>```dataview
>TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name !=[[]].file.name
>SORT file.name ASC
>```
___
>[!faq]- Query
>```dataview
>TABLE definition AS Definition
>FROM #medroot
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```

[[Med roots dictionary]]