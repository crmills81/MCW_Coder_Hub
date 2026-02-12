---
tags:
  - " #medroot"
  - medroot
  - medterm
aliases:
  - abdomin-
roots:
  - gastr-
  - gastro-
forms:
  - combining
  - prefix
"alphabet:": G
definition:
  - stomach
---
>[!Note] DEFINITION of gastr-
>stomach (see also: [[abdomin-]])
_____
>[!info]+ ETYMOLOGY of gastr-
>#greek gaster, gastros; gastro-::also [[gastero-]], before vowels [[gastr-]], scientific word-forming element meaning "stomach," from Greek gastro-, combining form of gastēr (*genitive gastros*) "**belly, paunch; womb**" (see gastric). Also used in compounds in ancient Greek, as gastrobarys "heavy with child."
_____
>[!example]+ RELATED TERMS to gastr-
>
_____
>[!tip]+ DERIVATIONS of gastr-
>```dataview
>TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
>SORT file.name ASC
>```
____
>[!faq]- Query
>```dataview
>TABLE definition AS Definition
>FROM #medroot
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```

[[Med roots dictionary]]