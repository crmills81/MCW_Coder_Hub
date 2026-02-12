---
tags:
  - " #medroot"
aliases: []
roots:
  - anter-
forms:
  - combining
  - prefix
  - prefixes
"alphabet:": a
definition:
  - front
  - in front
---
>[!Note] DEFINITION of [[anter-]]
>front, in front; The combining form **anter-** refers to the front or anterior aspect of the body. It appears in anatomical descriptions, imaging reports, and surgical approaches.
>*see also: [[ante-]]*
_____
>[!info]+ ETYMOLOGY of [[anter-]]
>#latin anterior
_____
>[!example]+ RELATED TERMS to [[anter-]]
>
>| [[anter-]] | in front | front | -      | -   |
| ---------- | -------- | ----- | ------ | --- |
| [[pro-]]   | YES      | -     | before | forward    |
_____
>[!tip]+ DERIVATIONS of [[anter-]]
>```dataview
>TABLE definition AS Definition 
WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
>SORT file.name ASC
>```
_____
>[!faq]- Query
>
>```dataview
>TABLE definition AS Definition
>FROM #medroot
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```

[[Med roots dictionary]]


# **Combining Form: [[anter-]]**

## Short Definition
Relating to the front or forward part of the body.

## Long Definition
The combining form **anter-** refers to the front or anterior aspect of the body. It appears in anatomical descriptions, imaging reports, and surgical approaches.

## Etymology
- Latin **[[anterior]]** → “before, in front of”

## Related Terms
| Term | Meaning |
|------|---------|
| [[post-]] | back |
| [[ventr-]] | belly/front |

## Common Medical Terms
- **Anterolateral** – front and side  
- **Anteroposterior (AP)** – front‑to‑back imaging view  

## Documentation Clues
- “Anterior approach”
- “AP view”
- “Anterior displacement”

## Coder’s Notes
Surgical approach (anterior vs. posterior) is critical in **spine and joint CPT coding**.
