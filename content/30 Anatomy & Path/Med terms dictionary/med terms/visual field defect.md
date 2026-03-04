---
tags:
  - medterm
  - medroot
  - ophthalmology
aliases:
  - visual field loss
  - scotoma
  - anopsia
  - hemianopsia
  - hemianopia
  - peripheral vision loss
roots:
  - visual field defect
  - VFD
forms:
  - prefix
  - suffix
  - combined
alphabet: V
definition:
  - a blind spot (scotoma) or area of vision lossros
  - around measure)
---
>[!Note] DEFINITION of [[visual field defect]]
>**Visual field defects** represent **abnormalities in peripheral or central vision resulting from damage to the visual pathway, manifesting as blind spots, diminished vision, or complete loss in specific regions**; these can be unilateral (**affecting one eye**) or [[binocular]] (**both eyes**), with patterns like [[hemianopia]] indicating lesion location (**e.g., optic nerve for monocular loss, optic chiasm for bitemporal defects, or post-chiasmal for homonymous defects**). Common causes include [[glaucoma]] (**peripheral loss**), stroke/tumors (**homonymous hemianopia**), retinal disorders (**e.g., detachment causing curtain-like shadows**), [[optic neuritis]], or trauma; diagnosis relies on perimetry testing, and patterns help localize pathology—e.g., **right optic tract damage** causes left **homonymous defects** in both eyes.
_____
>[!info]+ ETYMOLOGY of [[visual field defect]]
>#latin "**Visual field**" derives from Latin visus (**sight**) + English "*field*" (**area of vision**); "*defect*" from Latin deficere (**to fail, desert**). **Combined**, it literally means "*failure in the area of sight*," with medical usage emerging in 19th-century [[ophthalmology]] to describe mapped vision losses via perimetry (**from Greek perimetros, around measure**).
_____

> [!attention]+ **Related Terms**
> 
> - **[[Hemianopia]]**: Loss of half the visual field ([[homonymous]]: same side both eyes; [[bitemporal]]: outer halves; [[binasal]]: inner halves).
> - **[[Quadrantanopia]]**: Loss of one quadrant (superior/inferior homonymous).
> - **[[Scotoma]]**: Isolated blind spot (central, paracentral, or peripheral).
> - **Altitudinal defect**: Upper/lower half loss (e.g., from [[ischemic]] optic [[neuropathy]]).
> - **Tunnel vision**: Generalized peripheral [[constriction]] (e.g., [[glaucoma]]).
_____

> [!example]+ **CODING and NUANCES**
> 
> **ICD-10 Codes**
> 
> Billable ICD‑10 Codes
> 
> (All valid ICD‑10‑CM codes)
> 
> **Unspecified**
> - **H53.40 — Unspecified visual field defects**
> 
> **Central Scotoma**
> - **[[H53.411]] — Scotoma involving central area, right eye**
> - **[[H53.412]] — Scotoma involving central area, left eye**
> - **[[H53.413]] — Scotoma involving central area, bilateral**
> - **[[H53.419]] — Scotoma involving central area, unspecified eye**
> 
> **Blind Spot Scotoma**
> - **[[H53.421]] — Scotoma of blind spot area, right eye**
> - **[[H53.422]] — Scotoma of blind spot area, left eye**
> - **[[H53.423]] — Scotoma of blind spot area, bilateral**
> - **[[H53.429]] — Scotoma of blind spot area, unspecified eye**
> 
> **Sector / Arcuate Defects**
> 
> - **[[H53.431]] — Sector or arcuate defects, right eye**
> - **[[H53.432]] — Sector or arcuate defects, left eye**
> - **[[H53.433]] — Sector or arcuate defects, bilateral**
> - **[[H53.439]] — Sector or arcuate defects, unspecified eye**
> 
> **Other Localized Defects**
> 
> - **[[H53.451]] — Other localized visual field defect, right eye**
> - **[[H53.452]] — Other localized visual field defect, left eye**
> - **[[H53.453]] — Other localized visual field defect, bilateral**
> - **[[H53.459]] — Other localized visual field defect, unspecified eye**
> 
> **Homonymous Bilateral Field Defects**
> 
> - **[[H53.461]] — Homonymous bilateral field defects, right side**
> - **[[H53.462]] — Homonymous bilateral field defects, left side**
> - **[[H53.469]] — Homonymous bilateral field defects, unspecified side**
> 
> **Heteronymous Bilateral Field Defects**
> 
> - **[[H53.47]] — Heteronymous bilateral field defects**
> 
> **Generalized Contraction**
> 
> - **[[H53.481]] — Generalized contraction of visual field, right eye**
> - **[[H53.482]] — Generalized contraction of visual field, left eye**
> - **[[H53.483]] — Generalized contraction of visual field, bilateral**
> - **[[H53.489]] — Generalized contraction of visual field, unspecified eye**
> 
> **No specific CPT codes exist for "visual field defect" as a diagnosis; related procedures include:**
> 
> - **[[92081]]**: Visual field examination, unilateral or bilateral, with interpretation and report; limited examination (e.g., tangent screen).
> - **[[92082]]**: Visual field examination, unilateral or bilateral, with interpretation and report; intermediate examination (e.g., automated suprathreshold screening).
> - **[[92133]]**: Scanning computerized ophthalmic diagnostic imaging, posterior segment, with interpretation and report, unilateral or bilateral (for optic nerve/retina assessment).

_____
>[!tip]- DERIVATIONS of [[visual field defect]]
>```dataview
>TABLE definition AS Definition
>FROM #medterm 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
>SORT file.name ASC
>```
_____
>[!faq]- Query functionality
>```dataview
>TABLE definition AS Definition
>FROM #medterm 
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```

[[Med roots]]
[[Appendix A Prefixes]]
[[Appendix B Combining Forms]]
[[Appendix C Suffixes]]
[[Appendix D Suffix forms]]