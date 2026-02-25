---
tags:
  - medroot
aliases: []
roots:
  - auto-
  - aut-
forms:
  - prefix
alphabet: A
definition:
  - self
  - originating within the same individual
---

# **Prefix: auto-**

## Short Definition
Self; originating from the same individual.

## Long Definition
The prefix **[[auto-]]** refers to something that arises from, acts on, or relates to the **self**. In medical terminology, it often indicates that a process, immune response, graft, or condition originates within the patient’s own body.

## Etymology
- Greek **autos** → “self”

## Related Terms
| Term | Meaning |
|------|---------|
| [[allo-]] | other, different |
| [[idio-]] | self, distinct, personal |

## Common Medical Terms
- **[[Autograft]]** - graft taken from the same person  
- **[[autoimmune]]** - immune system attacks self  
- **[[Autonomic]]** - self-regulating nervous system  

## Documentation Clues
- “Patient’s own tissue used”
- “Self-directed response”
- “Intrinsic function”

## Coder’s Notes
Important in graft coding: **autografts** differ from **allografts** in CPT and supply billing.


_____
>[!tip]+ DERIVATIONS of [[auto-]]
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