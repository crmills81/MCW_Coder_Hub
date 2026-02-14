---
tags:
  - medroot
  - medterm
aliases: []
roots:
  - atel-
  - ate-
forms:
  - combining
  - prefix
  - prefixes
alphabet: A
definition:
  - incomplete
  - imperfect
---

# **Combining Form: atel-**

## Short Definition
Incomplete or imperfect development.

## Long Definition
The combining form **[[atel-]]** refers to something that is incomplete, imperfect, or not fully developed. It appears most commonly in pulmonary terminology.

## Etymology
- #greek **atelēs** → “imperfect, incomplete”

## Related Terms
| Term      | Meaning             |
| --------- | ------------------- |
| [[dys-]]  | abnormal            |
| [[hypo-]] | under, below normal |

## Common Medical Terms
- **[[Atelectasis]]** - incomplete expansion of the lung  
- **[[Atelomyelia]]** - incomplete development of the spinal cord  

## Documentation Clues
- “Partial collapse”
- “Incomplete expansion”
- “Segmental atelectasis”

## Coder’s Notes
Atelectasis is often **secondary** and may not always be separately reportable.

_____
>[!tip]+ DERIVATIONS of [[atel-]]
>```dataview
>TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name !=[[]].file.name
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
[[Appendix A Prefixes]]
[[Appendix B Combining Forms]]
[[Appendix C Suffixes]]
[[Appendix D Suffix forms]]