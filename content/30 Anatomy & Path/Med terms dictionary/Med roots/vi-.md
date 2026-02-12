---
tags:
  - " #medroot"
aliases: []
roots:
  - vi/o
  - vi-
  - root3
forms:
  - combining
  - compound suffix form
  - prefix
"alphabet:": V
definition:
  - way
  - force
  - virus
---
>[!Note] DEFINITION of vi-
>is a variant or alteration of another lexical item
_____
>[!info]+ ETYMOLOGY of vi-
>_Vi_ is proper Latin, and it means "with violence, violently", the ablative of _vis_, "force, violence", from Proto-Indo-European *_u̯i-_, with similar meaning, and probably related to various other roots and their reflexes. Words like _vir_ "man", _virtus_ "might, virtue", _violo_ "violate" (all senses) come from *_vi-_*
_____
>[!example]+ RELATED TERMS to vi-
>virtual
>virus
_____
>[!tip]+ DERIVATIONS of vi-
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