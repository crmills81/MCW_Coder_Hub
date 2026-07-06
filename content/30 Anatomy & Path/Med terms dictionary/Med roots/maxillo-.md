---
tags:
  - medroot
aliases:
  - maxilla-
roots:
  - maxillo-
  - max-
  - -illo
forms:
  - prefix
  - suffix
alphabet: M
definition:
  - the upper jaw
  - maxilla
---
>[!Note] DEFINITION of [[maxillo-]]
>In medical terminology, **[[maxillo-]]** combines with other roots or suffixes to describe structures, conditions, or procedures involving the [[maxilla]] (**upper jawbone**), which forms the central upper face, supports the upper teeth, and contributes to the nasal and orbital cavities. It often appears in terms like [[maxillofacial]] (**upper jaw and face**), [[maxillomandibular]] (upper and lower jaws), and [[maxillectomy]] (surgical removal of the maxilla)
_____
>[!info]+ ETYMOLOGY of [[maxillo-]]
>#latin From Latin _[[maxilla]]_, meaning "*upper jaw*" or "*jawbone*," a diminutive of _mala_ ("*jaw, cheekbone*"). Entered English medical use in the 17th century; related to Proto-Italic _smakslā_ with diminutive suffix _-elos_, evolving through sound changes.[](https://en.wiktionary.org/wiki/maxilla)
_____
>[!example]+ RELATED TERMS to [[maxillo-]]
>
|     Term     |  Meaning  | Prefix/Suffix? | Notes |
|:------------:|:---------:|:--------------:|:-----:|
| [[maxillo-]] | upper jaw |       -        |   -   |
| [[maxilla]]  |    YES    |      YES       |   -   |
| [[Maxillofacial]]     | the jaws and face |     [[maxillo-]] [[-facial]]    |    -   |
_____
>[!tip]+ DERIVATIONS of [[maxillo-]]
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