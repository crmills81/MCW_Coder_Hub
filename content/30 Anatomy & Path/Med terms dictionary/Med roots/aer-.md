---
tags:
  - medroot
aliases:
  - aero-
roots:
  - aer-
forms:
  - combining
  - prefix
alphabet: A
definition:
  - air
  - gas
---
>[!Note] DEFINITION of [[aer-]]
>air, gas
_____
>[!info]+ ETYMOLOGY of [[aer-]]
>#greek
>
>|Component|Origin|Meaning|
>|---|---|---|
>|**[[aer-]]** / **[[aero-]]**|Greek _ἀήρ_ (aēr)|"**air**," "**gas**," "**atmosphere**" — elemental/substance combining form|
>
> The word entered English in the **1640s** as *aerial* (**adjective**), borrowed from French *aérien*, from Latin ***aer***, from Greek ***ἀήρ*** (aēr) — literally "**air**" (originally "**mist**" or "**haze**" in Homeric usage). The adjective *aerobic* appeared in the **1870s**, coined by Pasteur. The root *aēr* ("**air**") connects [[aer-]] to the entire **[[air and gas roots]]**: ***[[aerobe]]*** (**aer- + bios $\rightarrow$ organism living in air/oxygen**), ***[[aerophagia]]*** (**aer- + [[phag-]] + [[-ia]] $\rightarrow$ swallowing of air**), and ***[[aeroembolism]]*** (**aer- + embolism $\rightarrow$ air bubble in blood**). The **combining form** [[aer-]] is highly productive in pulmonology, microbiology, and aviation medicine: e.g., ***[[aerobic]]***, ***[[aerocolia]]***, ***[[aerodontalgia]]***, and ***[[aerotitis]]***.
_____
>[!example]+ RELATED TERMS to [[aer-]]
>
>| [[aer-]]     | air | gas |
> | ------------ | --- | --- |
> | [[phys-]]    | YES | YES |
> | [[pneumat-]] | YES | YES    |

_____
>[!tip]- DERIVATIONS of [[aer-]]
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