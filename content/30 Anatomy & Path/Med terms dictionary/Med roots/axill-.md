---
tags:
  - medroot
  - medterm
aliases:
  - ax-
roots:
  - axill-
  - ax-
forms:
  - combining
  - prefixes
  - prefixes
alphabet: A
definition:
  - armpit
  - axillary region
---

# **Combining Form: axill-**

## Short Definition
Relating to the armpit or axillary region.

## Long Definition
The combining form **[[axill-]]** refers to the axilla (armpit), a region containing lymph nodes, vessels, and nerves. It appears frequently in oncology, vascular surgery, and breast surgery terminology.

## Etymology
- #latin **[[axilla]]** → “armpit”

## Related Terms
| Term | Meaning |
|------|---------|
| [[lymph-]] | lymphatic system |
| [[brachi-]] | arm |

## Common Medical Terms
- **Axillary lymph nodes** - nodes in the armpit  
- **Axillofemoral bypass** - vascular graft from axilla to femoral artery  
- **Axillary dissection** - removal of lymph nodes  

## Documentation Clues
- “Axillary incision”
- “Node dissection”
- “Drain placed in axilla”

## Coder’s Notes
Breast cancer surgeries often include **axillary node procedures**, which have distinct CPT codes.

_____
>[!tip]+ DERIVATIONS of [[axill-]]
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