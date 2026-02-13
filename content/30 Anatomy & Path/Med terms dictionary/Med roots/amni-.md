---
tags:
  - medroot
  - medterm
aliases:
  - amnio-
roots:
  - amni-
  - amino-
forms:
  - combining
  - prefix
alphabet: A
definition:
  - amnion
  - amniotic sac
---

>[!Note] DEFINITION of amni-
>fetal membrane, amniotic sac, amnion
_____
>[!info]+ ETYMOLOGY of amni-
>#greek amnion
_____
>[!example]+ RELATED TERMS to amni-
>
_____
>[!tip]+ DERIVATIONS of amni-
>```dataview
>TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
>SORT file.name ASC
>```
_____
>[!faq]- Query
>```dataview
>TABLE definition AS Definition
>FROM #medroot
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```

[[Med roots dictionary]]


---

# **Combining Form: amni-**

## Short Definition
Relating to the amniotic sac.

## Long Definition
The combining form **[[amni]]-** refers to the amnion, the thin membrane surrounding the fetus. It appears in obstetrics, prenatal care, and fetal diagnostic terminology.

## Etymology
- Greek **amnion** → “membrane around a fetus”

## Related Terms
| Term | Meaning |
|------|---------|
| [[embry-]] | embryo |
| [[fet-]] | fetus |

## Common Medical Terms
- **[[Amniocentesis]]** – sampling of amniotic fluid  
- **Amnionitis** – inflammation of the amniotic sac  
- **Amniotic fluid** – protective fetal fluid  

## Documentation Clues
- “Rupture of membranes”
- “Amniotic fluid index”
- “[[Chorioamnionitis]]”

## Coder’s Notes
OB coding requires **timing**, **complications**, and **maternal vs. fetal** distinctions.
