---
tags:
  - medroot
  - medterm
aliases: []
roots:
  - omphal-
  - o-
  - omphalo‑
  - omphal/o‑
forms:
  - combining
  - prefix
"alphabet:": O
definition:
  - navel
  - umibilicus
---
>[!Note] DEFINITION of [[omphal-]]
>navel, [[umbilicus]]; [[Omphal‑]] refers to the [[umbilicus]], the scar on the abdomen where the umbilical cord attached during fetal life. In pediatrics and surgery, it builds terms for birth defects like [[omphalocele]] (**umbilical hernia with organs protruding in a sac**) and infections like [[omphalitis]] (**neonatal umbilical inflammation**). Surgical terms include [[omphalotomy]] (**cutting the umbilical cord**) and [[omphalectomy]] (**navel excision**).
_____
>[!info]+ ETYMOLOGY of [[omphal-]]
>#greek [[omphalos]]; From Ancient Greek _ὀμφαλός_ (_omphalós_) meaning “**navel, belly‑button**,” considered the “**central point**” (as in the mythic Omphalos stone at Delphi, “navel of the earth”). Cognate with Latin _umbilicus_ (giving **[[umbilic‑]]/[[omphal‑]]** parallels)
_____
>[!example]+ RELATED TERMS to [[omphal-]]
>
|     Term     |    Meaning    | Prefix/Suffix? | Notes |
|:------------:|:-------------:|:--------------:|:-----:|
| [[omphal-]] | umbilicus/navel |      prefix     |   -   |
| [[omphalo‑]] |    YES     |    prefix     | - |
|  [[omphal/o‑]] |  YES    |       prefix         |  -    |
_____
>[!tip]+ DERIVATIONS of [[omphal-]]
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

[[Med roots dictionary]]