---
tags:
  - medroot
  - medterm
aliases:
  - angi-
roots:
  - angi-
  - angio-
forms:
  - combining
  - prefix
  - prefixes
alphabet: A
definition:
  - vessel
  - blood vessel
---

# **Combining Form: [[angi-]] / [[angio-]]**

## Short Definition
Relating to a vessel, usually a blood vessel.

## Long Definition
The combining form **angi-/angio-** refers to vessels, typically blood or lymphatic vessels. It is widely used in cardiovascular, vascular surgery, and interventional radiology terminology.

## Etymology
- Greek **angeion** → “vessel”

## Related Terms
| Term | Meaning |
|------|---------|
| [[vas-]] | vessel |
| [[phleb-]] | vein |
| [[arter-]] | artery |

## Common Medical Terms
- **[[Angioplasty]]** - vessel repair  
- **[[Angiogram]]** - imaging of vessels  
- **[[Angiogenesis]]** - formation of new vessels  

## Documentation Clues
- “[[stenosis]]”
- “[[occlusion]]”
- “Contrast injected into vessel”

## Coder’s Notes
Critical in CPT coding for **vascular interventions** (e.g., angioplasty, stenting).

_____
>[!tip]+ DERIVATIONS of {{Title}}
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