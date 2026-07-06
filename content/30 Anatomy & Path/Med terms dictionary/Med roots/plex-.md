---
tags:
  - medroot
aliases: []
roots:
  - plex-
forms:
  - combining
alphabet: P
definition:
  - plexus
---
>[!Note] DEFINITION of [[plex-]]
>plexus
_____
>[!info]+ ETYMOLOGY of [[plex-]]
>#latin plexus (braid)
_____
>[!example]+ RELATED TERMS to [[plex-]]
>
>| [[plex-]] | plexus |  -  |
|:----------:|:------:|:---:|
|  [[ret-]]  |  YES   | retina, network    |
_____
>[!tip]+ DERIVATIONS of [[plex-]]
>```dataview
>TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[TERM]].roots, word))) > 0 AND file.name != [[TERM]].file.name
>SORT file.name ASC
>```
___
>[!faq]- Query
>```dataview
>TABLE definition AS Definition
>FROM #medroot
>WHERE length(filter(definition, (word) => econtains([[TERM]].definition, word))) > 0 AND file.name != [[TERM]].file.name
>```

[[Med roots dictionary]]