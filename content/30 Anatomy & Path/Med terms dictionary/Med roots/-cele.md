---
tags:
  - medroot
aliases: []
roots:
  - -cele
forms:
  - prefix
  - suffix
alphabet: C
definition:
  - hernia
  - protrusion of an organ
---
>[!Note] DEFINITION of [[-cele]]
>**[[-cele]]** refers to a **hernia, tumor-like swelling, or abnormal herniation** where an organ, fluid-filled sac, or tissue protrudes through a defect in the surrounding wall or membrane, often requiring surgical correction. It commonly describes congenital or acquired defects like meningeal herniations (e.g., spina bifida cystica) or pelvic organ prolapses, distinguishing them from solid tumors (-oma).
_____
>[!info]+ ETYMOLOGY of [[-cele]]
>#greek - From **Ancient Greek _kēlē_ (κῆλη)**, meaning **"hernia, tumor, rupture, swelling."**
>- Adopted into **Latin _[[coele]]_**, then anglicized as **[[-cele]]** in 18th-century medical English to denote protrusive defects.
_____
>[!example]+ RELATED TERMS to [[-cele]]
>
|   Term    | Meaning | Prefix/Suffix? | Notes |
|:---------:|:-------:|:--------------:|:-----:|
| [[-cele]] | hernia  |       -        |   -   |
| [[-cel-]] |   YES   |       -        |   -   |
|   [[hydrocele]]    |  Fluid-filled sac around testis  | [[hydr-]] (water) + [[-cele]]  |       |
_____
>[!tip]+ DERIVATIONS of [[-cele]]
>```dataview
>TABLE definition AS Definition
>FROM #medroot
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
>SORT file.name ASC
>```
_____
>[!faq]- Query functionality
>
>```dataview
>TABLE definition AS Definition
>FROM #medroot
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```

[[Med roots dictionary]]