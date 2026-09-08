---
tags:
  - medroot
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
>[!info]+ ETYMOLOGY of [[amni-]]
>#greek
>
>|Component|Origin|Meaning|
>|---|---|---|
>|**[[amni-]]** / **[[amnio-]]**|Greek _ἀμνίον_ (amnion), from _amnion_ (amnion)|"**amnion**," "**membrane**," "**membrane surrounding the fetus**"|
>
> The word entered English in the **1640s** as *amnion* (**noun**), borrowed from Late Latin ***amnion***, from Greek ***amnion*** — literally "**membrane**." The root *amnion* ("**membrane**") connects [[amni-]] to the entire **[[embryonic membranes]]**: ***[[amniocentesis]]*** (**amni- + kentein $\rightarrow$ puncture of the amnion**), ***[[amniotomy]]*** (**amni- + tome $\rightarrow$ incision into the amnion**), and ***[[amniotic]]*** (**pertaining to the amnion**). The **combining form** [[amni-]] is highly productive in obstetrics and embryology: e.g., ***[[amniochoreosis]]***, ***[[amniopathy]]***, and ***[[amniochorion]]***.
_____
>[!example]+ RELATED TERMS to amni-
>
_____
>[!tip]- DERIVATIONS of amni-
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

[[Med terms dictionary]]


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
- **[[Amniocentesis]]** - sampling of amniotic fluid  
- **Amnionitis** - inflammation of the amniotic sac  
- **Amniotic fluid** - protective fetal fluid  

## Documentation Clues
- “Rupture of membranes”
- “Amniotic fluid index”
- “[[Chorioamnionitis]]”

## Coder’s Notes
OB coding requires **timing**, **complications**, and **maternal vs. fetal** distinctions.
