---
tags:
  - medroot
aliases:
  - -staxis
roots:
  - -staxia
  - -staxis
forms:
  - combining
  - suffix
alphabet: S
definition:
  - dripping
  - oozing
---
>[!Note] DEFINITION of [[-staxia]]
>dripping, oozing (of blood)
>*see also: [[-rrhea]]*
_____
>[!info]+ ETYMOLOGY of [[-staxia]]
>#greek
>
>|Component|Origin|Meaning|
>|---|---|---|
>|**[[-staxia]]** / **[[-staxis]]**|Greek _στάσις_ (stasis), from _ἵστημι_ (histēmi)|"**dripping**," "**oozing**," "**flow of blood**" — condition-denoting suffix referring to discharge or stagnation of blood|
>
> The suffix entered English in the **1640s** as *epistaxis* (**noun**), borrowed from Late Latin ***epistaxis***, from Greek ***ἐπίσταξις*** (epistaxis) — literally "**a standing flow**" (epi- "upon" + stasis "dripping, oozing"). The adjective *hemostatic* appeared in the **1720s**, and the noun *stasis* in its modern medical sense in the **1840s**. The root *stasis* ("**standing, dripping**") connects [[-staxia]] to the entire **[[flow and discharge suffixes]]**: ***[[epistaxis]]*** (**epi- + staxis $\rightarrow$ oozing of blood from the nose**), ***[[hemostasis]]*** (**hemo- + stasis $\rightarrow$ arrest of blood flow/bleeding**), and ***[[venous stasis]]*** (**ven- + stasis $\rightarrow$ stagnation of venous blood**). The **condition-denoting suffix** [[-staxia]] is productive in otolaryngology, surgery, and hematology: e.g., ***[[epistaxis]]***, ***[[hemostasis]]***, ***[[hemostatic]]***, ***[[venous stasis]]***, and ***[[cardiac stasis]]***.
_____
>[!example]+ RELATED TERMS to [[-staxia]]
>
_____
>[!tip]- DERIVATIONS of [[-staxia]]
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