---
tags:
  - medroot
aliases: []
roots:
  - -osis
forms:
  - suffix
  - noun
  - suffix form
alphabet: O
definition:
  - abnormal or diseased condition
---
>[!Note] DEFINITION of [[-osis]]
>forms abstract nouns: abnormal or diseased condition
_____
>[!info]+ ETYMOLOGY of [[-osis]]
>#greek
>
>|Component|Origin|Meaning|
>|---|---|---|
>|**[[-osis]]**|Greek _-ωσις_ (-ōsis)|Noun-forming suffix — "**state or condition of**," "**abnormal or diseased process**," "**pathological change**"|
>
> The suffix entered English in the **1500s** as part of *phthisis* and *leucosis* (**noun**), borrowed from Latin *-osis*, from Greek ***-ωσις*** (-ōsis) — literally "**a state or condition**." The term *cirrhosis* appeared in the **1820s**, and *neurosis* in the **1820s**. The suffix *-ōsis* ("**condition, state**") connects [[-osis]] to the entire **[[condition and state suffixes]]**: ***[[cirrhosis]]*** (**kirros + -osis $\rightarrow$ condition of hardening/fibrosis**), ***[[neurosis]]*** (**neuron + -osis $\rightarrow$ abnormal condition of the nerves**), and ***[[leukosis]]*** (**leukos + -osis $\rightarrow$ white blood cell disorder**). The **noun-forming suffix** [[-osis]] is extremely productive across nearly all medical specialties: e.g., ***[[arthritis]]*** (cf. *-itis*), ***[[fibrosis]]***, ***[[cirrhosis]]***, ***[[leukosis]]***, ***[[neurosis]]***, and ***[[osteosclerosis]]*** (cf. *-osis* variant).
_____
>[!example]+ RELATED TERMS to [[-osis]]
>
>| [[-osis]] | abnormal or diseased condition |     -     |
>|:---------:|:------------------------------:|:---------:|
>|  [[-ma]]  |              YES               | substance |
_____
>[!tip]- DERIVATIONS of [[-osis]]
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