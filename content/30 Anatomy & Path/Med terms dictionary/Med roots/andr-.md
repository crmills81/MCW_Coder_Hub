---
tags:
  - medroot
  - medterm
aliases: []
roots:
  - andr-
  - andro-
forms:
  - combining
  - prefix
  - prefixes
alphabet: A
definition:
  - male
  - masculine
---
>[!Note] DEFINITION of [[andr-]]
>man, male
_____
>[!info]+ ETYMOLOGY of [[andr-]]
>#greek aner, andros
_____
>[!example]+ RELATED TERMS to [[andr-]]
>
_____
>[!tip]+ DERIVATIONS of [[andr-]]
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

# **Combining Form: [[andr-]]**

## Short Definition
Relating to males or male characteristics.

## Long Definition
The combining form **[[andr-]]** refers to male sex, male hormones, or male characteristics. It appears in endocrinology, reproductive medicine, and genetics.

## Etymology
- #greek **anēr/andros** → “man, male”

## Related Terms
| Term | Meaning |
|------|---------|
| [[test-]] | testes |
| [[gonad-]] | reproductive glands |

## Common Medical Terms
- **Androgen** – male hormone  
- **Andropause** – male hormonal decline  
- **Andrology** – study of male reproductive health  

## Documentation Clues
- “Low testosterone”
- “Male infertility”
- “Androgen deficiency”

## Coder’s Notes
Hormone‑related diagnoses often require **lab confirmation** for coding accuracy.