---
tags:
  - medroot
  - medterm
  - ophthalmology
aliases:
  - globe
roots:
  - glob-
forms:
  - prefix
  - combining
alphabet: G
definition:
  - eyeball proper
  - globe
  - sphere
---
>[!Note] DEFINITION of [[glob-]]
>In medical terminology, [[glob-]] combines with roots to describe **globular forms**, such as in leukocyte types or proteins; it emphasizes rounded, droplet-like shapes in anatomy and pathology.
_____
>[!info]+ ETYMOLOGY of [[glob-]]
>#latin Derived from Latin "**globus**," meaning a **ball, sphere, or round mass**, entering medical Neo-Latin via classical roots for descriptive anatomy
_____
>[!example]+ RELATED TERMS to [[glob-]]
>
|          Term           |    Meaning    | Prefix/Suffix? | Notes |
| :---------------------: | :-----------: | :------------: | :---: |
| [[glob-]] | [[globe]] |       -        |   -   |
|    [[globe]]     |    YES     |    -     | - |
_____
>[!tip]+ DERIVATIONS of [[glob-]]
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