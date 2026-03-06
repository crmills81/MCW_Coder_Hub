---
tags:
  - medroot
  - medterm
aliases: [Plexus]
roots:
  - plexus
  - plex-
  - -xus
  - -us
forms:
  - combining
"alphabet:": P
definition:
  - plexus
---
>[!Note] DEFINITION of [[plexus]]
>plexus
_____
>[!info]+ ETYMOLOGY of [[plexus]]
>#latin plexus (braid)
_____
>[!example]+ RELATED TERMS to [[plexus]]
>
>| [[plexus]] | plexus |  -  |
|:----------:|:------:|:---:|
|  [[ret-]]  |  YES   | retina, network    |
_____
>[!tip]- DERIVATIONS of [[plexus]]
>```dataview
>TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
>SORT file.name ASC
>```
___
>[!faq]- Query
>```dataview
>TABLE definition AS Definition
>FROM #medroot
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```

[[Med roots]]
[[Appendix A Prefixes]]
[[Appendix B Combining Forms]]
[[Appendix C Suffixes]]
[[Appendix D Suffix forms]]