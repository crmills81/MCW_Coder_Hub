---
tags:
  - medroot
aliases:
  - albin-
roots:
  - alb-
  - albin-
forms:
  - combining
  - prefix
alphabet: A
definition:
  - white
  - lacking pigment
---

# **Combining Form: alb- / albin-**

## Short Definition
Relating to whiteness or lack of pigment.

## Long Definition
The combining forms **[[alb-]]** and **[[albin-]]** refer to whiteness, pale coloration, or absence of pigment. These terms appear in dermatology, genetics, and pathology.

## Etymology
>[!info]+ ETYMOLOGY of [[alb-]]
>#latin
>
>|Component|Origin|Meaning|
>|---|---|---|
>|**[[alb-]]** / **[[albin-]]**|Latin _albus_ (al-bus)|"**white**," "**pale**," "**lacking pigment**" — qualitative/color-describing combining form|
>
> The word entered English in the **1770s** as *albino* (**noun/adjective**), borrowed from Portuguese *albino*, from Latin ***albus*** — literally "**white**." The adjective *albinotic* appeared in the **1830s**, and the noun *albinism* in the **1820s**. The root *albus* ("**white**") connects [[alb-]] to the entire **[[color and pigment roots]]**: ***[[albinism]]*** (**alb- + -ism $\rightarrow$ congenital absence of pigment**), ***[[albumin]]*** (**alb- + -umen $\rightarrow$ "white" protein of blood plasma**), and ***[[albino]]*** (**alb- + -ino $\rightarrow$ person lacking pigment**). The **combining form** [[alb-]] is productive in dermatology, genetics, and biochemistry: e.g., ***[[albinuria]]***, ***[[albescence]]***, and ***[[subalbinus]]***.

## Related Terms
| Term | Meaning |
|------|---------|
| [[leuk-]] | white (blood cells) |
| [[melan-]] | black/dark pigment |

## Common Medical Terms
- **[[Albinism]]** - congenital absence of pigment  
- **[[Albino]]** - person with albinism  
- **[[Albumin]]** - “white” protein found in plasma  

## Documentation Clues
- “Pale skin”
- “Lack of pigment”
- “Low albumin levels”

## Coder’s Notes
Albumin levels are key in **severity scoring** and **malnutrition coding**.

_____
>[!tip]- DERIVATIONS of [[alb-]] [[albin-]]
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

[[Med terms dictionary]]
[[Appendix A Prefixes]]
[[Appendix B Combining Forms]]
[[Appendix C Suffixes]]
[[Appendix D Suffix forms]]