---
tags:
  - medroot
  - medterm
aliases:
  - an-
roots:
  - -a
forms:
  - suffix
  - compound suffix form
"alphabet:": A
definition:
  - condition (of)
  - Negation or absence
---
>[!Note] DEFINITION of [[-a]]
>**Forms** nouns: condition (of), state (of); As a prefix, a- is a privative (**negating**) morpheme meaning "**without**," "**not**," or "**lacking**" — indicating the absence of a structure, function, or condition. It attaches to Greek-derived roots. When the root begins with a vowel, it typically becomes [[an-]] to ease pronunciation. As a suffix, [[-a]] serves primarily as a grammatical/nominative ending in Latin and Greek nouns (**especially neuter plural Latin forms and feminine singular forms**), giving medical terms their standard noun form rather than carrying independent clinical meaning.
_____
>[!info]+ ETYMOLOGY of [[-a]]
>#greek a- / [[an-]] — the Greek alpha privative, one of the oldest and most productive prefixes in medical terminology. Parallel to Latin in- (**also meaning "not/without"**). The suffix use derives from Latin and Greek nominative noun endings
_____ 
>[!example]+ RELATED TERMS to [[-a]]


|   [[-a]]   | condition (of) | state (of) |       -        |
|:----------:|:--------------:|:----------:|:--------------:|
|  [[-ema]]  |      Yes       |    Yes     |       -        |
| [[-esis]]  |      Yes       |    Yes     |       -        |
|  [[-ia]]   |      Yes       |    Yes     |       -        |
|  [[-ism]]  |      Yes       |    Yes     |       quality of        |
| [[-ismus]] |      Yes       |    Yes     | muscular spasm |
|  [[-sis]]  |      Yes       |    Yes     |       -        |
|  [[-ty]]   |      Yes       |    Yes     |       -        |
|   [[-y]]   |      Yes       |    Yes     |       -        |

_____
>[!tip]- DERIVATIONS of -a
>```dataview
>TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
>SORT file.name ASC
>``` 
_____
>[!faq]- Query functionality (default defines synonyms)
>````dataview
>TABLE aliases AS Aliases, definition AS Definition
>FROM #medroot
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>````

[[Med roots dictionary]]
[[Appendix A Prefixes]]
[[Appendix B Combining Forms]]
[[Appendix C Suffixes]]
[[Appendix D Suffix forms]]
