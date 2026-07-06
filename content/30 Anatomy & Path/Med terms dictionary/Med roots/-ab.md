---
tags:
  - medroot
aliases: []
roots:
  - ab-
forms:
  - suffix
alphabet: A
definition:
  - away from
  - departing from
---

# **Prefix: [[ab-]]**

## Short Definition
Away from or departing from.

## Long Definition
The prefix **[[ab-]]** indicates movement or direction **away from** a structure. It is commonly used in anatomical descriptions and procedural terminology.

## Etymology
- Latin **ab** → “from, away from”
- [#latin](http://localhost/#latin)
- a- (rarely) before certain consonants
- abs- before "c" and "t"

## Related Terms
| Term | Meaning |
|------|---------|
| [[ad-]] | toward |
| [[abduction]] | movement away from midline |

## Common Medical Terms
- **Abduction** - movement away from the midline  
- **Abnormal** - away from normal  
- **Ablation** - removal or destruction away from original tissue  

## Documentation Clues
- “Moved away”
- “Deviation from normal”

## Coder’s Notes
Important in musculoskeletal coding for describing **movement direction**.

_____
>[!tip]- DERIVATIONS of ab-
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