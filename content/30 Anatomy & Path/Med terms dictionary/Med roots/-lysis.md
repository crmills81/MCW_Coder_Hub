---
tags:
  - medroot
aliases: []
roots:
  - -lysis
forms:
  - compound suffix form
  - noun
  - suffix
alphabet: L
definition:
  - dissolution
  - reduction
  - decomposition
  - disintegration
---
>[!Note] DEFINITION of [[-lysis]]
> forms nouns: [[ly-]][[-sis]] - dissolution, reduction, decomposition, disintegration
> *see also: [[-lytic]]*
_____
>[!info]+ ETYMOLOGY of [[-lysis]]
>#greek
>
>|Component|Origin|Meaning|
>|---|---|---|
>|**[[ly-]]** / **[[-sis]]**|Greek _λύειν_ (lyein), from _λύσις_ (lysis)|"**dissolution**," "**decomposition**," "**disintegration**," "**loosening**" — Noun-forming compound suffix — "**process of dissolution, decomposition, or disintegration of (a named substance or structure)**"|
>
> The word entered English in the **1820s** as *lysis* (**noun**), borrowed from Modern Latin ***lysis***, from Greek ***λύσις*** (lysis) — literally "**a loosening**" or "**a dissolution**" (from *lyein* "to loose, to untie, to release"). The adjective *lytic* appeared in the **1830s**, and *hemolysis* in the **1900s**. The root *lyein* ("**to loose, to dissolve**") connects [[-lysis]] to the entire **[[dissolution and decomposition roots]]**: ***[[hemolysis]]*** (**hemo- + lysis $\rightarrow$ dissolution of red blood cells**), ***[[thrombolysis]]*** (**thrombo- + lysis $\rightarrow$ dissolution of a blood clot**), and ***[[autolysis]]*** (**auto- + lysis $\rightarrow$ self-dissolution or self-destruction of tissue**). The **noun-forming compound suffix** [[-lysis]] is extremely productive across all medical specialties: e.g., ***[[hemolysis]]***, ***[[thrombolysis]]***, ***[[autolysis]]***, ***[[cell lysis]]***, and ***[[lysis]]***.
_____
>[!example]+ RELATED TERMS to [[-lysis]]
>
_____
>[!tip]- DERIVATIONS of [[-lysis]]
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