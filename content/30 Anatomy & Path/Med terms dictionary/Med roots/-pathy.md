---
tags:
  - medroot
aliases: []
roots:
  - -pathy
forms:
  - compound suffix form
  - noun
alphabet: P
definition:
  - disease
---
>[!Note] DEFINITION of [[-pathy]]
>forms nouns: [[path-]][[-y]] - disease
_____
>[!info]+ ETYMOLOGY of [[-pathy]]
>#greek
>
>|Component|Origin|Meaning|
>|---|---|---|
>|**[[path-]]** / **[[-y]]**|Greek _πάθος_ (pathos), from _πάσχειν_ (paschein)|"**disease**," "**suffering**," "**disorder**" — Noun-forming compound suffix — "**disease of** (a named structure or system)"|
>
> The word entered English in the **1640s** as *pathos* (**noun**), borrowed from French *pathos*, from Late Latin ***pathos***, from Greek ***πάθος*** (pathos) — literally "**suffering**" or "**experience**." The medical suffix form *-pathy* appeared in the **1860s** (e.g., *neuropathy*). The root *pathos* ("**suffering, disease**") connects [[-pathy]] to the entire **[[disease and pathology suffixes]]**: ***[[neuropathy]]*** (**neuro- + pathy $\rightarrow$ disease of the nerves**), ***[[myopathy]]*** (**myo- + pathy $\rightarrow$ disease of muscle**), and ***[[cardiomyopathy]]*** (**cardio- + myo- + pathy $\rightarrow$ disease of the heart muscle**). The **compound suffix** [[-pathy]] is extremely productive across nearly all medical specialties: e.g., ***[[osteopathy]]***, ***[[nephropathy]]***, ***[[hepatopathy]]***, ***[[neurotoxicopathy]]***, and ***[[psychopathy]]***.
_____
>[!example]+ RELATED TERMS to [[-pathy]]
>
>| [[-pathy]] | disease |         -          |          -           |
> |:----------:|:-------:|:------------------:|:--------------------:|
> | [[-iasis]] |   YES   | abnormal condition | abnormal presence of |
> |  [[nos-]]  |   YES   |      illness       |          -           |
> |  [[-oma]]  |   YES   |       tumor        |          -           |
> | [[path-]]  |   YES   |         -          | -                     |
>

_____
>[!tip]- DERIVATIONS of [[-pathy]]
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