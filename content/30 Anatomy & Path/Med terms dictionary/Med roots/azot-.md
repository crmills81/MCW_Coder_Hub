---
tags:
  - medroot
  - medterm
aliases:
  - az-
roots:
  - azot-
  - azo-
forms:
  - combining
  - prefix
  - prefixes
alphabet: A
definition:
  - nitrogen
  - nitrogenous waste
---

# **Combining Form: [[azot-]]**

## Short Definition
Relating to nitrogen or nitrogenous waste.

## Long Definition
The combining form **[[azot-]]** refers to nitrogen compounds, especially waste products such as urea and ammonia. It appears in nephrology and metabolic terminology.

## Etymology
- Greek **[[azote]]** → “lifeless” (early term for nitrogen)

## Related Terms
| Term | Meaning |
|------|---------|
| [[ur-]] | urine |
| [[nephro-]] | kidney |

## Common Medical Terms
- **[[Azotemia]]** – elevated nitrogen waste in blood  
- **[[Azoturia]]** – excess nitrogen compounds in urine  

## Documentation Clues
- “Elevated BUN”
- “Renal failure labs”
- “Nitrogen retention”

## Coder’s Notes
Azotemia is a key indicator in **kidney failure coding** and affects severity levels.

_____
>[!tip]+ DERIVATIONS of [[azot-]]
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