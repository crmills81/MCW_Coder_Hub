---
tags:
  - medroot
aliases:
  - ac-
  - af-
  - ag-
  - al-
  - an-
  - ap-
  - as-
  - a(d)-
  - at-
forms:
  - prefix
roots:
  - ad-
  - ac-
  - af-
  - ag-
  - al-
  - an(d)-
  - ap-
  - as-
  - a(d)-
  - at-
alphabet: A
definition:
  - to
  - toward
---
>[!Note] DEFINITION of [[ad-]]
>to, toward
_____
>[!info]+ ETYMOLOGY of [[ad-]]
>#latin
>
>|Component|Origin|Meaning|
>|---|---|---|
>|**[[ad-]]** / **[[ac-]]** / **[[af-]]** / **[[ag-]]** / **[[al-]]** / **[[an-]]** / **[[ap-]]** / **[[as-]]** / **[[at-]]**|Latin _ad_ (ad)|"**to**," "**toward**," "**near**" — directional prefix (assimilates to the initial consonant of the following root: *ac-* before c, *af-* before f, *ag-* before g, *al-* before l, *an-* before n, *ap-* before p, *as-* before s, *at-* before t)|
>
> The word entered English in the **1400s** as a Latin-derived prefix (**prefix**), borrowed from French *a-*, from Latin ***ad*** — literally "**to, toward**." The prefix *ad-* ("**toward**") connects [[ad-]] to the entire **[[directional prefixes]]**: ***[[adduct]]*** (**ad- + ducere $\rightarrow$ to lead toward**), ***[[adhesion]]*** (**ad- + haerere $\rightarrow$ to stick to**), and ***[[adrenal]]*** (**ad- + renalis $\rightarrow$ toward the kidney**). The **directional prefix** [[ad-]] is one of the most productive prefixes in medical terminology: e.g., ***[[adduction]]***, ***[[adjuvant]]***, ***[[afferent]]***, ***[[append]]***, and ***[[attrition]]***.
_____
>[!example]+ RELATED TERMS to [[ad-]]
>
> | [[ad-]] | toward |    to    |        -         |
> |:-------:|:------:|:-------:|:----------------:|
> | [[-ad]] | YES |       |        -         |
> | [[ob-]] |  YES   | against | very, thoroughly |

_____
>[!tip]- DERIVATIONS of [[ad-]]
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