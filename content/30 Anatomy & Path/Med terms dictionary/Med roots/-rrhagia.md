---
tags:
  - medroot
aliases: []
roots:
  - -rrhagia
forms:
  - compound suffix form
  - noun
alphabet: R
definition:
  - profuse discharge
  - hemorrhage
---
>[!Note] DEFINITION of [[-rrhagia]]
>forms nouns: [[rhag-]][[-ia]] - profuse discharge, hemorrhage
_____
>[!info]+ ETYMOLOGY of [[-rrhagia]]
>#greek
>
>|Component|Origin|Meaning|
>|---|---|---|
>|**[[rhag-]]** / **[[-ia]]**|Greek _ῥήγνυμι_ (rhēgnymi), from _ῥαγνύω_ (rhagnyō)|"**hemorrhage**," "**bursting out**," "**profuse discharge of blood**" — Noun-forming compound suffix — "**condition of violent or profuse bleeding/discharge**"|
>
> The word entered English in the **1540s** as *hemorrhage* (**noun/verb**), borrowed from French *hémorragie*, from Late Latin ***haemorrhagia***, from Greek ***αἱμόρροια*** (haimorroia) — literally "**a bursting-out of blood**" (haima "blood" + rhagia "a bursting"). The suffix form *-rrhagia* in medical compounds appeared in the **1800s**. The root *rhēgnymi* ("**to burst, to break**") connects [[-rrhagia]] to the entire **[[rupture and hemorrhage suffixes]]**: ***[[menorrhagia]]*** (**meno- + rrhagia $\rightarrow$ profuse menstrual bleeding**), ***[[melorrhagia]]*** (**melo- + rrhagia $\rightarrow$ profuse discharge of menses**), and ***[[rhinorrhagia]]*** (**rhino- + rrhagia $\rightarrow$ violent nasal bleeding**). The **compound suffix** [[-rrhagia]] is productive in surgery, gynecology, and hematology: e.g., ***[[uterine hemorrhage]]***, ***[[cerebral hemorrhage]]***, ***[[rectorrhagia]]***, ***[[splenorrhagia]]***, and ***[[urethrorrhagia]]***.
_____
>[!example]+ RELATED TERMS to [[-rrhagia]]
>
>| [[-rrhagia]] | profuse discharge | hemorrhage |  -  |
>|:------------:|:-----------------:|:----------:|:---:|
>|  [[-rrhea]]  |        YES        |     -      | excessive secretion    |
_____
>[!tip]- DERIVATIONS of [[-rrhagia]]
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