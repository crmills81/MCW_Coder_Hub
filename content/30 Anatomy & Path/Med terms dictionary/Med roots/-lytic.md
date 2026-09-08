---
tags:
  - medroot
aliases: []
roots:
  - -lytic
forms:
  - compound suffix form
  - adjective
  - suffix
alphabet: L
definition:
  - pertaining to dissolution or decomposition
  - disintegration
---
>[!Note] DEFINITION of [[-lytic]]
>forms adjectives: [[ly-]][[-tic]] - pertaining to dissolution or decomposition, disintegration
>*see also: [[-lysis]]*
_____
>[!info]+ ETYMOLOGY of [[-lytic]]
>#greek
>
>|Component|Origin|Meaning|
>|---|---|---|
>|**[[ly-]]** / **[[-tic]]**|Greek _λύειν_ (lyein), from _λύσις_ (lysis)|"**pertaining to dissolution**," "**tending to decompose**," "**loosening**" — Adjective-forming compound suffix — "**pertaining to dissolution or disintegration of (a named substance or structure)**"|
>
> The suffix entered English in the **1820s** as *analeptic* and *lytic* (**adjective**), borrowed from Modern Latin ***lyticus***, from Greek ***λύσις*** (lysis) — literally "**a loosening**" (from *lyein* "to loose, to untie"). The term *analgesic*... no. The adjective *lytic* in medical compounds appeared in the **1830s**. The root *lyein* ("**to loose, to dissolve**") connects [[-lytic]] to the entire **[[dissolution and decomposition roots]]**: ***[[lytic]]*** (**ly- + -tic $\rightarrow$ tending to dissolve**), ***[[analgesic]]*** (cf. *an- + alg- + -ic*), and ***[[diuresis]]*** (**dia- + eurein $\rightarrow$ a setting free / passing through**). The **adjective-forming compound suffix** [[-lytic]] is productive in pharmacology, hematology, and toxicology: e.g., ***[[hemolytic]]***, ***[[lytic]]***, ***[[lytic agent]]***, ***[[neurolytic]]***, and ***[[thrombolytic]]***.
_____
>[!example]+ RELATED TERMS to [[-lytic]]
>
_____
>[!tip]- DERIVATIONS of [[-lytic]]
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