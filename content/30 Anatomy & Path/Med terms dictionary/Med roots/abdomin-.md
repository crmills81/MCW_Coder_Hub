---
tags:
  - medroot
aliases: []
roots:
  - abdomin-
forms:
  - combining
  - prefix
alphabet: A
definition:
  - belly
  - abdomen
---

>[!Note] DEFINITION of [[abdomin-]]
>belly, abdomen
_____
>[!info]+ ETYMOLOGY of [[abdomin-]]
>#latin
>
>|Component|Origin|Meaning|
>|---|---|---|
>|**[[abdomin-]]** / **[[abdomino-]]**|Latin _abdomen, abdominis_ (ab-do-men)|"**belly**," "**abdomen**," "**lower belly**" — anatomical combining form|
>
> The word entered English in the **1400s** as *abdomen* (**noun**), borrowed from Old French *abdomen*, from Latin ***abdomen, abdominis*** — literally "**swollen belly**" (possibly from *ab-* "away from" + *doma* "dwelling," or from a root meaning "to swell"). The adjective *abdominal* appeared in the **1550s**. The root *abdomen* ("**belly**") connects [[abdomin-]] to the entire **[[abdominal and pelvic roots]]**: ***[[abdominocentesis]]*** (**abdomin- + centesis $\rightarrow$ puncture of the abdomen**), ***[[abdominoplasty]]*** (**abdomin- + -plasty $\rightarrow$ surgical reshaping of the abdomen**), and ***[[abdominopelvic]]*** (**abdomin- + pelvis $\rightarrow$ pertaining to the abdomen and pelvis**). The **combining form** [[abdomin-]] is highly productive in surgery, radiology, and gynecology: e.g., ***[[abdominocentesis]]***, ***[[abdominoperineal]]***, ***[[abdominopelvic]]***, and ***[[abdominocystoplasty]]***.
_____
>[!example]+ RELATED TERMS to [[abdomin-]]
>
>| [[abdomin-]] | belly | abdomen |        -         |   -    |
> |:------------:|:-----:|:-------:|:----------------:|:------:|
> |   [[cel-]]   |   -   |   YES   |        -         |   -    |
> |  [[lapar-]]  |   -   |   YES   |  abdominal wall  |   -    |
> |  [[uter-]]   |  YES  |    -    |       womb       | uterus |
> |  [[ventr-]]  |  YES  |   YES   | abdominal cavity | -       |
>

_____

>[!tip]- DERIVATIONS of [[abdomin-]]
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