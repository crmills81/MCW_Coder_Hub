---
tags:
  - medterm
  - medroot
aliases:
  - Homoeostasis
  - hemostasis
roots:
  - homeostasis
  - homeo-
  - -stasis
  - -sis
  - -ostasis
forms:
  - prefix
  - suffix
  - combining
alphabet: H
definition:
  - the maintenance of stable internal conditions in the body despite external changes
---
>[!Note] DEFINITION of [[homeostasis]]
>**Homeostasis** involves dynamic equilibrium regulated by feedback mechanisms, including receptors that detect changes, control centers like the [[hypothalamus]] that process signals, and effectors such as muscles or glands that respond to restore balance. This process ensures optimal functioning for variables like **blood glucose, where insulin lowers high levels and glucagon raises low ones, preventing conditions like hyperglycemia or hypoglycemia**.
_____
>[!info]+ ETYMOLOGY of [[homeostasis]]
>#greek 
>Coined in 1926 by physiologist Walter Cannon from Greek [[homeo-]] (ὅμοιος, homoios, "**similar**") meaning "**like**" or "**similar to**," and [[-stasis]] (*στάσις, stasis, "standing still*") meaning "**stopping**" or "**standing**," conveying "**staying the same**." It builds on Claude Bernard's 19th-century concept of the internal environment (milieu intérieur). 

-----
>[!Important] Related Terms of [[homeostasis]]
**[[Allostasis]]**: Adaptive adjustment to anticipated changes, differing from strict homeostasis.
**Negative feedback**: Primary mechanism (e.g., **thermoregulation**).
**Positive feedback**: Amplifies changes (e.g., labor contractions).
**Examples**: **[[Cytostasis]]** (*cell stopping*), [[hemostasis]] (*blood stopping*).
_____
>[!tip]- DERIVATIONS of [[homeostasis]]
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

---

[[Med roots]]
[[Appendix A Prefixes]]
[[Appendix B Combining Forms]]
[[Appendix C Suffixes]]
[[Appendix D Suffix forms]]