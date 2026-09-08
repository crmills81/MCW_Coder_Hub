---
tags:
  - medroot
aliases: []
forms:
  - prefix
roots:
  - ambi-
alphabet: A
definition:
  - both
---
>[!Note] DEFINITION of [[ambi-]]
>Both
_____
>[!info]+ ETYMOLOGY of [[ambi-]]
>#latin
>
>|Component|Origin|Meaning|
>|---|---|---|
>|**[[ambi-]]**|Latin _ambi_ (ambi)|"**both**," "**on both sides**" — quantitative/directional prefix|
>
> The word entered English in the **1500s** as *ambi-* (**prefix**), borrowed from Latin ***ambi-*** — literally "**both**." The root *ambi* ("**both**") connects [[ambi-]] to the entire **[[dual-directional roots]]**: ***[[ambidextrous]]*** (**ambi- + dexter $\rightarrow$ skillful with both hands**), ***[[ambivalent]]*** (**ambi- + valentia $\rightarrow$ having both values/conflicting feelings**), and ***[[ambiguous]]*** (**ambi- + agere $\rightarrow$ driven both ways/uncertain**). The **quantitative** prefix [[ambi-]] is productive in psychological, anatomical, and general descriptive terminology: e.g., ***[[ambilateral]]***, ***[[ambisextrous]]***, and ***[[ambivert]]***.
_____
>[!example]+ RELATED TERMS to [[ambi-]]
>
>| [[ambi-]]  | both | -             | -      |
> | ---------- | ---- | ------------- | ------ |
> | [[amphi-]] | YES  | on both sides | around |
> | [[bi-]]    | YES  | twice, double | two       |

_____
>[!tip]- DERIVATIONS of [[ambi-]]
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