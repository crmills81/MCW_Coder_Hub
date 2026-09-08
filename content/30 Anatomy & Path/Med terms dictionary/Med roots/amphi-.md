---
tags:
  - medroot
aliases:
  - ampho-
forms:
  - prefix
roots:
  - amphi-
  - ampho-
alphabet: A
definition:
  - on both sides
  - both
  - around
---
>[!Note] DEFINITION of [[amphi-]]
>1. On both sides, both
>2. Around
_____
>[!info]+ ETYMOLOGY of [[amphi-]]
>#greek
>
>|Component|Origin|Meaning|
>|---|---|---|
>|**[[amphi-]]** / **ampho-**|Greek _ἀμφί_ (amphí)|"**on both sides**," "**around**" — directional/quantitative prefix|
>
> The word entered English in the **1600s** as *amphi-* (**prefix**), borrowed from Late Latin ***amphi-***, from Greek ***amphí*** — literally "**on both sides**." The root *amphi* ("**both**") connects [[amphi-]] to the entire **[[dual-directional roots]]**: ***[[amphibian]]*** (**amphi- + bios $\rightarrow$ living on both land and water**), ***[[amphoteric]]*** (**amphi- + ergon $\rightarrow$ acting in both ways/acid-base**), and ***[[amphitheater]]*** (**around the theater**). The **directional** prefix [[amphi-]] is productive in medical and biological terminology: e.g., ***[[amphioxus]]***, ***[[amphigamy]]***, and ***[[amphidromic]]***.
_____
>[!example]+ RELATED TERMS to [[amphi-]]
>
>| [[amphi-]]  | both | on both sides | around |     -     |        -         |
> |:-----------:|:----:|:-------------:|:------:|:---------:|:----------------:|
> |   [[bi-]]   | YES  |       -       |   -    |    two    |  twice, double   |
> |  [[ambi-]]  | YES  |       -       |   -    |     -     |        -         |
> | [[circum-]] |  -   |       -       |  YES   |     -     |        -         |
> |  [[para-]]  |  -   |       -       |  YES   | alongside | beyond, abnormal |
> |  [[peri-]]  |  -   |       -       |  YES   | surrounding          |                  |

_____
>[!tip]- DERIVATIONS of amphi-
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