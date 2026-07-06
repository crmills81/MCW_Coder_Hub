---
tags:
  - medroot
aliases:
  - -fic-
roots:
  - -fici
forms:
  - combining
  - prefix
  - suffix
"alphabet:": F
definition:
  - face
  - appearance
  - surface
  - doing
  - or to make
---
>[!Note] DEFINITION of [[-fici]]
>face, appearance, surface; The segment **-fici-** represents a vowel-weakened combining form of two Latin roots:
>1. **Face/Surface:** Derived from Latin _facies_, meaning "shape, face, or appearance." In this context, it often refers to the outer surface of a structure or the face itself.
>2. **To Make/Do:** Derived from Latin _facere_, meaning "to make, do, or cause." In this context, it indicates the action of producing or causing a specific state (often seen in the form _-fication_ or _-ficial_).
_____
>[!info]+ ETYMOLOGY of [[-fici]]
>#latin facies (appearance, form, face); Transformation: The transition from fac- to -fic- (and subsequently -fici- when followed by a vowel) typically occurs due to Latin vowel reduction when the root appears in the middle of a compound word (e.g., super + facies → superficial).

_____
>[!example]+ RELATED TERMS to [[-fici]]
>
>|  [[-fici]]  | face | appearance | surface |   -    |
>|:-----------:|:----:|:----------:|:-------:|:------:|
>|  [[faci-]]  | YES  |    YES     |   YES   |   -    |
>| [[physi-]]  |  -   |    YES     |    -    | nature |
>| [[prosop-]] | YES  |     -      |    -    |   -    |
>
_____
>[!tip]+ DERIVATIONS of [[-fici]]
>```dataview
>TABLE definition AS Definition
>FROM #medroot
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
>SORT file.name ASC
>```
_____
>[!faq]- Query functionality
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