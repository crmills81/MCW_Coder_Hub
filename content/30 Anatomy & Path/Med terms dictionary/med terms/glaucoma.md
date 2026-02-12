---
tags:
  - medterm
  - medroot
  - ophthalmology
aliases:
  - Glauc(o)-
roots:
  - glaucoma
  - -oma
  - -ma
  - Glauc(o)-
forms:
  - prefix
  - suffix
alphabet: G
definition:
  - conditions damaging the optic nerve
---
>[!Note] DEFINITION of [[glaucoma]]
>It includes open-angle (**drainage blockage buildup**) and angle-closure (**iris blocks drainage**) types; risk factors are age over 40, family history, ethnicity (**higher in African/Asian descent**), and **diabetes**. Early detection via exams prevents blindness; treatment lowers pressure with drops, laser, or surgery.
_____
>[!info]+ ETYMOLOGY of [[glaucoma]]
>#greek From Greek "glaukōma" (γλαύκωμα), derived from "*glaukos*" (γλαυκός), meaning gleaming, blue-green, or gray, originally describing the cloudy, bluish hue of affected eyes (like [[cataracts]] or acute angle-closure).
_____
>[!tip]+ DERIVATIONS of [[glaucoma]]
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