---
tags:
  - medroot
aliases: []
roots:
  - -scope
forms:
  - compound suffix form
  - noun
  - suffix
alphabet: S
definition:
  - an instrument for examining
---
>[!Note] DEFINITION of [[-scope]]
>forms nouns: [[scop-]][[-e]]- instrument for examining
>*see also: [[-graph]], [[-tome]], [[-stat]]*
_____
>[!info]+ ETYMOLOGY of [[-scope]]
>#greek
>
>|Component|Origin|Meaning|
>|---|---|---|
>|**[[scop-]]** / **[[-e]]** / **[[-scope]]**|Greek _σκοπεῖν_ (skopein), from _σκοπός_ (skopos)|"**to look**," "**to examine**," "**to observe**" — Noun-forming suffix — "**instrument for examining or viewing**"|
>
> The word entered English in the **1820s** as *microscope* (**noun**), borrowed from French *microscope*, from Late Latin ***microscopium***, from Greek ***μικροσκοπεῖν*** (mikroskopein) — literally "**to look at small things**." The term *stethoscope* appeared in the **1810s** (coined by Laënnec), and *ophthalmoscope* in the **1850s**. The root *skopein* ("**to look**") connects [[-scope]] to the entire **[[observation and examination suffixes]]**: ***[[microscope]]*** (**mikros + skopein $\rightarrow$ instrument for viewing small things**), ***[[stethoscope]]*** (**stethos + skopein $\rightarrow$ instrument for listening to the chest**), and ***[[ophthalmoscope]]*** (**ophthalmos + skopein $\rightarrow$ instrument for viewing the eye**). The **instrument-forming suffix** [[-scope]] is extremely productive across nearly all medical specialties: e.g., ***[[laryngoscope]]***, ***[[endoscope]]***, ***[[gonioscope]]***, ***[[retinoscope]]***, and ***[[cardioscope]]***.
_____
>[!example]+ RELATED TERMS to [[-scope]]
>
_____
>[!tip]- DERIVATIONS of [[-scope]]
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