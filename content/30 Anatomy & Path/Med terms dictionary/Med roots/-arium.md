---
tags:
  - medroot
  - medterm
  - otolaryngology
aliases: []
roots:
  - -arium
  - -ium
forms:
  - suffix
  - combining
  - compound suffix form
  - suffix form
"alphabet:": A
definition:
  - denotes a place for something
  - place for
---
>[!Note] DEFINITION of [[-arium]]
>**Forms nouns**: denotes a place for something, place for; **-arium** is a Latin-derived suffix used in medical and scientific terminology to denote a place, structure, or container associated with a particular function or substance. In medical contexts, it typically refers to **anatomical spaces, receptacles**, or areas that contain or are related to specific biological materials or processes.
>
_____
>[!info]+ ETYMOLOGY of [[-arium]]
>#latin Derived from the Latin neuter suffix **[[-arium]]**, which is the singular form of **[[-aria]]**. It is closely related to the suffix **[[-ary]]**, which also indicates a place or connection. From Latin **-arium** (neuter form of [[-arius]]), meaning "**place for**" or "**pertaining to**." The suffix derives from the Latin adjective-forming ending that creates nouns indicating location, container, or association.
_____
>[!example]+ RELATED TERMS to [[-arium]]
>
| [[-arium]] | place for |       -       |
|:----------:|:---------:|:-------------:|
|  [[-ary]]  |    YES    | pertaining to |
| [[-orium]] |    YES    |       -       |
|  [[-ory]]  |    YES    |       -       |
>
>***
>
>**Medical Examples**
>
>- **Ovarium** - ovary (place where ova are produced)
>- **Aquarium** - water container (non-medical, but demonstrates the suffix)
>- **Vivarium** - place for living specimens
>
_____
>[!tip]- DERIVATIONS of [[-arium]]
>```dataview
>TABLE definition AS Definition 
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