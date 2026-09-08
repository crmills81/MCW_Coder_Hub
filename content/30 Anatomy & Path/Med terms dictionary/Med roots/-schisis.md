---
tags:
  - medroot
aliases:
  - schist-
  - schiz-
roots:
  - -schisis
  - schist-
  - schiz-
forms:
  - combining
  - suffix
alphabet: S
definition:
  - split
  - cleft
  - fissure
---
>[!Note] DEFINITION of [[-schisis]]
>split, cleft, fissure
_____
>[!info]+ ETYMOLOGY of [[-schisis]]
>#greek
>
>|Component|Origin|Meaning|
>|---|---|---|
>|**[[-schisis]]** / **[[schiz-]]** / **[[schist-]]**|Greek _σχίζειν_ (skhizein), from _σχῖσις_ (skhisis)|"**split**," "**cleft**," "**fissure**" — condition-denoting suffix or combining form referring to splitting, cleft, or division|
>
> The word entered English in the **1870s** as *schistosoma* (**noun**), borrowed from Modern Latin ***schistosoma***, from Greek ***σχῖσις*** (skhisis) — literally "**a splitting**" (from *skhizein* "to split"). The term *schizophrenia* was coined in the **1910s** by Eugen Bleuler. The root *skhizein* ("**to split**") connects [[-schisis]] to the entire **[[division and cleft roots]]**: ***[[schizophrenia]]*** (**schizo- + phren + -ia $\rightarrow$ split mind**), ***[[myeloschisis]]*** (**myelo- + schisis $\rightarrow$ splitting of the spinal cord**), and ***[[schistosomiasis]]*** (**schisto- + soma + -iasis $\rightarrow$ disease caused by the split-body worm**). The **condition-denoting suffix/combining form** [[-schisis]] is productive in neurosurgery, psychiatry, and parasitology: e.g., ***[[encephaloschisis]]***, ***[[meningoschisis]]***, ***[[labioschisis]]***, ***[[urethroschisis]]***, and ***[[schizocytosis]]***.
_____
>[!example]+ RELATED TERMS to [[-schisis]]
>
_____
>[!tip]- DERIVATIONS of [[-schisis]]
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