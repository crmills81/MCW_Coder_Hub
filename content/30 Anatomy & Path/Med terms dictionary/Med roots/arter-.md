---
tags:
  - medroot
  - medterm
aliases:
  - arteri-
roots:
  - arter-
  - arteri-
  - art-
forms:
  - combining
  - prefix
  - prefixes
alphabet: A
definition:
  - artery
  - arterial vessel
---

# **Combining Form: arter- / arteri-**

## Short Definition
Relating to an artery.

## Long Definition
The combining forms **[[arter-]]** and **[[arteri-]]** refer to arteries, the thick‑walled vessels that carry oxygenated blood away from the heart. These terms appear constantly in cardiovascular, vascular surgery, and interventional radiology documentation.

## Etymology
- Greek **artēria** → “windpipe, artery”

## Related Terms
| Term | Meaning |
|------|---------|
| [[angi-]] | vessel |
| [[phleb-]] | vein |
| [[cardi-]] | heart |

## Common Medical Terms
- **[[Arteriosclerosis]]** - hardening of arteries  
- **[[Arteriogram]]** - imaging of arteries  
- **[[Arteritis]]** - inflammation of an artery  

## Documentation Clues
- “Arterial stenosis”
- “Pulsatile”
- “Arterial access obtained”

## Coder’s Notes
Arterial procedures often require **selective catheterization coding** and **laterality**.

_____
>[!tip]+ DERIVATIONS of [[arter-]]
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