---
tags:
  - medroot
aliases: []
roots:
  - -rrhea
forms:
  - compound suffix form
  - noun
  - prefix
  - suffix
alphabet: R
definition:
  - profuse discharge
  - excessive secretion
---
>[!Note] DEFINITION of [[-rrhea]]
>forms nouns: [[rhe-]][[-a]] - profuse discharge, excessive secretion
_____
>[!info]+ ETYMOLOGY of [[-rrhea]]
>#greek
>
>|Component|Origin|Meaning|
>|---|---|---|
>|**[[rhe-]]** / **[[rhoeo-]]**|Greek _ῥεῖν_ (rhein), from _ῥοία_ (rhoea)|"**profuse discharge**," "**excessive secretion**," "**a flowing, a stream**" — Noun-forming compound suffix — "**condition of profuse discharge or secretion of (a fluid or substance)**"|
>
> The word entered English in the **1540s** as *diarrhea* (**noun**), borrowed from Middle French *diarrhée*, from Late Latin ***diarrhea***, from Greek ***διάρροια*** (diarroia) — literally "**a flowing through**" (dia- "through" + rrhea "a discharge"). The suffix form *-rrhea* in medical compounds appeared in the **1800s**. The root *rhein* ("**to flow**") connects [[-rrhea]] to the entire **[[flow and discharge suffixes]]**: ***[[diarrhea]]*** (**dia- + rrhea $\rightarrow$ flowing through / profuse intestinal discharge**), ***[[galactorrhea]]*** (**galacto- + rrhea $\rightarrow$ profuse milk secretion**), and ***[[rhinorrhea]]*** (**rhino- + rrhea $\rightarrow$ profuse nasal discharge**). The **compound suffix** [[-rrhea]] is extremely productive across all medical specialties: e.g., ***[[menorrhea]]***, ***[[polyrrhea]]***, ***[[sialorrhea]]***, ***[[urinorrhea]]***, and ***[[otorrhea]]***.
_____
>[!example]+ RELATED TERMS to [[-rrhea]]
>
>| [[-rrhea]] | profuse discharge | excessive secretion |  -  |
>|:------------:|:-----------------:|:----------:|:---:|
>|  [[-rrhagia]]  |        YES        |     -      | hemorrhage    |
>
_____
>[!tip]- DERIVATIONS of [[-rrhea]]
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