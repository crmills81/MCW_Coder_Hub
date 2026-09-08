---
tags:
  - medroot
aliases: []
roots:
  - -y
forms:
  - suffix
  - noun
alphabet: Y
definition:
  - condition (of)
  - state (of)
---
>[!Note] DEFINITION of [[-y]]
>forms abstract nouns: condition (of), state (of)
_____
>[!info]+ ETYMOLOGY of [[-y]]
>#latin
>
>|Component|Origin|Meaning|
>|---|---|---|
>|**[[-y]]**|English _-y_ (from Old English _-ig_ / _-u_), adapted from Latin _-ia_ and Greek _-ία_ (ia)|Noun-forming suffix — "**condition of**," "**state of**," "**quality of**"|
>
> The suffix entered English medical usage in the **1800s** as *-y* (**noun-forming suffix**), used to form abstract condition/state nouns from Greek and Latin roots, often adapting the Latin *-ia* or Greek *-ία* ending into the native English *-y* pattern. The root *-y* ("**condition**") connects [[-y]] to the entire **[[condition and state suffixes]]**: ***[[astheny]]*** (**asthen- + [[-y]] $\rightarrow$ condition of weakness**), ***[[cachexy]]*** (**[[cachex-]] + -y $\rightarrow$ condition of bad nutrition/emaciation**), and ***[[arthralgy]]*** (**arthro- + [[alg-]] + -y $\rightarrow$ condition of joint pain**). The **noun-forming suffix** [[-y]] is productive in medicine, pathology, and general clinical description: e.g., ***[[dyspnea]]*** (cf. *dyspnoea* $\rightarrow$ *dyspnea*), ***[[somnolency]]*** (cf. *-ence*), ***[[febrility]]*** (cf. *[[-ity]]*), and ***[[cachexy]]***.
_____
>[!example]+ RELATED TERMS to [[-y]]
>
>|   [[-y]]   | condition (of) | state (of) |       -        |
> |:----------:|:--------------:|:----------:|:--------------:|
> |  [[-a]]  |      Yes       |    Yes     |       -        |
> | [[-ema]]  |      Yes       |    Yes     |       -        |
> |  [[-esis]]   |      Yes       |    Yes     |       -        |
> |  [[-ism]]  |      Yes       |    Yes     |        quality (of)      |
> | [[-ismus]] |      Yes       |    Yes     | muscular spasm |
> |  [[-ia]]  |      Yes       |    Yes     |       -        |
> |  [[-sis]]   |      Yes       |    Yes     |       -        |
> |   [[-ty]]   |      Yes       |    Yes     |       -        |
>
_____
>[!tip]- DERIVATIONS of [[-y]]
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