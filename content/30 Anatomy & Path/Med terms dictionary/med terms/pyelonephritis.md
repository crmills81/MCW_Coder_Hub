---
tags:
  - medterm
aliases:
roots:
  - pyelonephritis
  - pyel-
  - -itis
  - -phritis
forms:
  - prefix
  - suffix
  - combining
alphabet: P
definition:
  - kidney infection
---
>[!Note] DEFINITION of [[pyelonephritis]]
>**Acute [[pyelonephritis]]** involves purulent inflammation of the renal pelvis and **parenchyma**, leading to **abscesses** and potential [[sepsis]] if untreated; chronic forms cause scarring and impaired function, often from recurrent infections or obstruction. Risk factors include **urinary tract abnormalities**, **diabetes**, **pregnancy**, and **[[catheterization]]**; diagnosis uses **[[urinalysis]]**, culture, and imaging like ultrasound or CT.
_____
>[!info]+ ETYMOLOGY of [[pyelonephritis]]
>#greek From Greek _pyelos_ (πύελος, "pelvis, basin") + _nephros_ (νεφρός, "kidney") + _[[-itis]]_ ("inflammation").
_____
>[!tip]- DERIVATIONS of [[pyelonephritis]]
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