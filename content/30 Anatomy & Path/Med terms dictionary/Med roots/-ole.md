---
tags:
  - medroot
aliases:
  - -olus
  - -ola
  - -olum
roots:
  - -ole
forms:
  - suffix
  - diminutive
alphabet: O
definition:
  - small
---
>[!Note] DEFINITION of [[-ole]]
>**[[-ole]]** is a diminutive suffix used in anatomical and medical terminology to denote a smaller version of a larger structure. It is primarily employed to describe **small vessels, ducts, or organs that maintain the same basic function as their larger counterparts** but exist on a microscopic or reduced scale. For example, an arteriole is a small branch of an artery that leads into the capillary beds. This suffix is essential for describing the hierarchical structure of **bodily systems, particularly within the cardiovascular and glandular systems**.
>
_____
>[!info]+ ETYMOLOGY of [[-ole]]
>#latin
>
>|Component|Origin|Meaning|
>|---|---|---|
>|**[[-ole]]**|Latin *-olus* (m.), *-ola* (f.), *-olum* (n.)|Diminutive suffix — "**small**," "**little**," or "**diminutive form**"|
>
> The suffix originates from the Latin diminutive endings ***-olus***, ***-ola***, and ***-olum***, which were used to indicate smaller size or to express endearment. It entered English medical nomenclature to provide a precise way of naming micro-structures without changing the root word of the primary organ or vessel. The root connects [[-ole]] to other **[[diminutive suffixes]]** such as ***[[-ule]]***, ***[[-cle]]***, and ***[[-ellus]]***. A primary clinical example is ***[[Arteriole]]*** (**[[arteri-]] + [[-ole]] $\rightarrow$ small artery**), as well as the root found in ***[[Follicle]]*** (from Latin *folliculus* $\rightarrow$ small bag).
_____
>[!example]+ RELATED TERMS to [[-ole]]
>
>|  [[-ole]]  | small |         -         |
> |:----------:| :-----: |:-----------------:|
> | [[-cle]]  | YES   |         -         |
> | [[micr-]] | YES   | - |
> |  [[-ellus]]   | YES   |         -         |
> |  [[-il]]  | YES   |         biological genera         |
> |  [[-ule]]  | YES   |         -         |
>
_____
>[!tip]- DERIVATIONS of [[-ole]]
>```dataview
>TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
>SORT file.name ASC
>```
_____
>[!faq]- Query
>
>```dataview
>TABLE definition AS Definition
>FROM #medroot
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```

[[Med terms dictionary]]