---
tags:
  - medroot
aliases: []
roots:
  - alve-
forms:
  - combining
alphabet: A
definition:
  - hollow
  - cavity
---
>[!Note] DEFINITION of[[ alve-]]
>hollow, cavity
_____
>[!info]+ ETYMOLOGY of [[alve-]]
>#latin
>
>|Component|Origin|Meaning|
>|---|---|---|
>|**[[alve-]]**|Latin _alveus_ (al-ve-us), from _alveus_ (trough/basin)|"**hollow**," "**cavity**," "**trough**"|
>
> The word entered English in the **1600s** as *alveolus* (**noun**), borrowed from Latin ***alveolus*** (a diminutive of *alveus*), from Latin ***alveus*** — literally "**trough**" or "**hollow**." The root *alveus* ("**hollow**") connects [[alve-]] to the entire **[[cavity roots]]**: ***[[alveoli]]*** (**plural of alveolus $\rightarrow$ small hollow sacs in lungs**), ***[[alveolar bone]]*** (**alve- + os $\rightarrow$ bone containing tooth sockets**), and ***[[alveolate]]*** (**honeycomb-like cavity structure**). The **combining form** [[alve-]] is highly productive in pulmonary and dental anatomy: e.g., ***[[alveolar]]***, ***[[alveolitis]]***, and ***[[alveolar-capillary membrane]]***.
_____
>[!example]+ RELATED TERMS to [[alve-]]
>
>|  [[alve-]]  | hollow | cavity |            -             |
>|:-----------:|:------:|:------:|:----------------------------:|
>|  [[por-]]   |   -    |  YES   | passage, opening, duct, pore |
>| [[syring-]] |   -    |  YES   | fistula, oviduct, sweat glands, syringe       |
>

_____
>[!tip]- DERIVATIONS of alve-
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