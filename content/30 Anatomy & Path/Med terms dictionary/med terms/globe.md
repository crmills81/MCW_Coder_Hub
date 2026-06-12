---
tags:
  - medterm
  - medroot
  - ophthalmology
  - optometry
aliases:
  - eyeball
roots:
  - globe
  - glob-
forms:
  - prefix
  - suffix
alphabet: G
definition: eyeball proper
---
>[!Note] DEFINITION of [[globe]]
>The [[globe]] is a hollow, roughly 24-25 mm diameter sphere in adults, filled with [[aqueous humor]], lens, and [[vitreous]] body, and responsible for receiving light and converting it to neural signals via the retina and optic nerve. Its wall has three main layers: **outer fibrous coat (cornea anteriorly, sclera posteriorly), middle vascular uvea ([[iris]], [[ciliary body]], [[choroid]]), and inner neurosensory retina**. The [[globe]] occupies about one‑third of the [[orbital]] volume, with the vitreous comprising roughly two‑thirds of the globe’s internal volume. Clinically, “[[globe]]” is used in phrases like globe rupture, open‑globe injury, or globe abnormalities on CT/MRI, referring specifically to damage or pathology of the eyeball itself rather than surrounding orbital structures.
>****
>|Term|Breakdown / note|Brief meaning|
|---|---|---|
|**Bulbus oculi**|Latin “*bulb of the eye*”|Anatomical term equivalent to globe/eyeball.|
|**Eyeball**|Common English term | The globe of the eye excluding appendages like eyelids and muscles.|
|**Ocular globe** | ocular “*of the eye*” + [[globe]]|Eyeball, about 25 mm in diameter when emmetropic.|
|**Globe rupture** | descriptive | Full‑thickness injury of the eyewall (*cornea/sclera*) causing open‑globe trauma. |
|**Globe abnormalities** | imaging term | Structural changes of the eyeball seen on CT/MR (size, shape, wall, contents). |

_____
>[!info]+ ETYMOLOGY of [[globe]]
>#latin “[[globe]]” comes from Latin _globus_ meaning “*round mass, sphere, ball*,” describing its nearly spherical shape. The phrase “ocular [[globe]]” simply pairs “**ocular**” (Latin _ocularis_, “of the eye”) with “**globe**” to emphasize the spherical eye structure.
_____
>[!tip]- DERIVATIONS of [[globe]]
>```dataview
>TABLE definition AS Definition
>FROM #medterm 
>WHERE length(filter(roots, (word) => econtains([[globe]].roots, word))) > 0 AND file.name != [[globe]].file.name
>SORT file.name ASC
>```
_____
>[!faq]- Query functionality
>```dataview
>TABLE definition AS Definition
>FROM #medterm 
>WHERE length(filter(definition, (word) => econtains([[globe]].definition, word))) > 0 AND file.name != [[globe]].file.name
>```

[[Med roots dictionary]]
[[Appendix A Prefixes]]
[[Appendix B Combining Forms]]
[[Appendix C Suffixes]]
[[Appendix D Suffix forms]]