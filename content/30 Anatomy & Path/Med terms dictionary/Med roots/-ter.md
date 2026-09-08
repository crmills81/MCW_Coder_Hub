---
tags:
  - medroot
aliases: []
roots:
  - -ter
forms:
  - suffix
  - noun
alphabet: T
definition:
  - instrument
  - device
---
>[!Note] DEFINITION of [[-ter]]
>forms nouns: instrument, device
_____
>[!info]+ ETYMOLOGY of [[-ter]]
>#greek
>
>|Component|Origin|Meaning|
>|---|---|---|
>|**[[-ter]]**|Greek _-τήρ_ (-tēr)|Noun-forming suffix — "**instrument**," "**device**," "**one who**" — agentive/instrumental suffix denoting a tool or implement|
>
> The suffix entered English in the **1600s** as part of *catheter* (**noun**), borrowed from French *cathéter*, from Late Latin ***catheter***, from Greek ***καθητήρ*** (kathētēr) — literally "**that which flows down**" (from *kath-hesthai* "to sit down, flow down"). The root *-tēr* ("**instrument, agent**") connects [[-ter]] to the entire **[[agentive and instrumental suffixes]]**: ***[[catheter]]*** (**kath- + tēr $\rightarrow$ instrument for draining or channeling fluid**), ***[[sotera]]*** (**sō- + tēr $\rightarrow$ instrument of salvation/relief**), and ***[[stethotactic]]*** (**steth- + taktikos $\rightarrow$ pertaining to auscultation**). The **instrumental suffix** [[-ter]] appears in a limited set of medical and technical terms: e.g., ***[[catheter]]***, ***[[sotera]]***, ***[[thermistor]]*** (cf. *-istor*), and ***[[spherometer]]*** (cf. *-eter* variant).
_____
>[!example]+ RELATED TERMS to [[-ter]]
>
>| [[-ter]]  | instrument | device |   -   |
> |:---------:|:----------:|:------:|:-----:|
> | [[-ment]] |    YES     |   -    | agent |
> |  [[-or]]  |    YES     |   -    | agent      |
> 

_____
>[!tip]- DERIVATIONS of [[-ter]]
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