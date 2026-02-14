---
tags:
  - medroot
  - medterm
aliases: []
forms:
  - prefix
  - combining
roots:
  - apo-
"alphabet:": A
definition:
  - away from
  - separate
  - derived from
---
>[!Note] DEFINITION of [[apo-]]
>away from
_____
>[!info]+ ETYMOLOGY of [[apo-]]
>#greek
_____
>[!example]+ RELATED TERMS to [[apo-]]
>
>| [[apo-]]  | away from |   -    |   -    |
|:--------:|:---------:|:------:|:------:|
| [[ab-]] |    YES    |   -    |   -    |
| [[de-]]  |    YES    |  down  | absent |
| [[ec-]]  |    YES    | out of |   -    |
| [[ex-]]  |    YES    | out of |   -    |
| [[se-]]  |    ES     | out of | -       |
>
_____
>[!tip]+ DERIVATIONS of apo-
>```dataview
>TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
>SORT file.name ASC
>```
_____
>[!faq]- Query
>```dataview
>TABLE definition AS Definition
>FROM #medroot
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```

[[Med roots dictionary]]



# **Prefix: [[apo-]]**

## Short Definition
Away from or separated from.

## Long Definition
The prefix **[[apo-]]** indicates separation, derivation, or movement away from something. It appears in anatomy, physiology, and biochemical terminology.

## Etymology
- Greek **apo** → “from, away from”

## Related Terms
| Term | Meaning |
|------|---------|
| [[ab-]] | away from |
| [[dia-]] | through, apart |

## Common Medical Terms
- **[[Apocrine]]** - glands that secrete by “separating off” part of the cell  
- **[[Apoptosis]]** - programmed cell death (cells “fall away”)  

## Documentation Clues
- “Cellular breakdown”
- “Glandular secretion type”

## Coder’s Notes
Apoptosis terminology appears in **oncology and pathology reports**.
