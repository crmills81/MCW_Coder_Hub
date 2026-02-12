---
tags:
  - medroot
aliases: []
roots:
  - anthrop-
forms:
  - prefix
  - suffix
alphabet: A
definition:
  - INPUT_SHORT_DEF
---
>[!Note] DEFINITION of anthrop-
>INPUT_FULL_DEF
_____
>[!info]+ ETYMOLOGY of anthrop-
>#latin OR #greek
_____
>[!example]+ RELATED TERMS to [[anthrop-]]
>
>| [[asc-]]   | sac | bag | bladder | -    |
| ---------- | --- | --- | ------- | ---- |
| [[cyst-]]  | -   | -   | YES     | cyst |
| [[vesic-]] | -   | -   | bladder | -     |
_____
>[!tip]+ DERIVATIONS of anthrop-
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