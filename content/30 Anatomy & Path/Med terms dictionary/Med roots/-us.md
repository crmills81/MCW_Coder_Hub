---
tags:
  - medroot
aliases: []
roots:
  - -us
forms:
  - suffix
  - noun
alphabet: U
definition:
  - condition
  - person
---
>[!Note] DEFINITION of [[-us]]
>1. forms nouns: condition
>2. forms nouns: person
_____
>[!info]+ ETYMOLOGY of [[-us]]
>#latin
>
>|Component|Origin|Meaning|
>|---|---|---|
>|**[[-us]]**|Latin _-us_ (-us), masculine singular noun ending (1st conjugation)|Noun-forming suffix — "**condition**," "**state**," "**person/agent**" — retained as the Latin masculine noun ending in borrowed medical terms|
>
> The suffix entered English in the **1400s** as part of Latin borrowings (**noun-forming suffix**), derived from Late Latin ***-us***, the standard masculine singular ending of the first conjugation, from Proto-Indo-European **\*[[-os]]** — related to Greek **-ος** (-os). The earliest medical borrowings (e.g., *abscess*, *status*) appeared in the **1400s–1500s**. The root *-us* ("**condition, agent**") connects [[-us]] to the entire **[[noun-forming suffixes]]**: ***[[abscessus]]*** (**ab- + cessus $\rightarrow$ condition of suppuration/running away**), ***[[pulsus]]*** (**[[puls-]] + -us $\rightarrow$ condition of pulsing/beat**), and ***[[status]]*** (**stat- + [[-us]] $\rightarrow$ state or condition of being**). The **noun-forming suffix** [[-us]] appears in a limited but recognizable set of Latin-derived medical terms: e.g., ***[[tonus]]***, ***[[focus]]***, ***[[sensus]]***, ***[[status]]***, and ***[[abscessus]]***.
_____
>[!example]+ RELATED TERMS to [[-us]]
>
>| [[-us]]  | condition |   person   |       -       |  -   |
>|:--------:|:---------:|:----------:|:-------------:|:----:|
>| [[-tic]] |     -     | YES, agent | pertaining to | drug |
>
_____
>[!tip]- DERIVATIONS of [[-us]]
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