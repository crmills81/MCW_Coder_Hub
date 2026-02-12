---
tags:
  - medroot
  - medterm
aliases: []
roots:
  - ankyl-
  - ankyl-
forms:
  - combining
  - prefix
  - prefixes
alphabet: A
definition:
  - stiff
  - fused
  - crooked
---

# **Combining Form: ankyl-**

## Short Definition
Relating to stiffness or fusion.

## Long Definition
The combining form **[[ankyl-]]** refers to stiffness, immobility, or abnormal fusion of joints or structures. It appears in orthopedics and rheumatology.

## Etymology
- #greek **ankylos** → “bent, crooked, stiff”

## Related Terms
| Term | Meaning |
|------|---------|
| [[arthr-]] | joint |
| [[spondyl-]] | vertebra |

## Common Medical Terms
- **[[Ankylosis]]** – abnormal joint stiffness  
- **Ankylosing spondylitis** – inflammatory spinal fusion disorder  

## Documentation Clues
- “Limited ROM”
- “Fusion noted”
- “Stiffness with inflammation”

## Coder’s Notes
Ankylosing spondylitis has **specific ICD‑10 codes** based on spinal region.


_____
>[!tip]+ DERIVATIONS of 
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