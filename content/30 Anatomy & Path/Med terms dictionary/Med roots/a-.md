---
tags:
  - medroot
aliases:
  - an-
forms:
  - prefix
roots:
  - a-
  - an-
alphabet: A
definition:
  - not
  - without
  - lacking
  - deficient
---
 >[!Note] Definition of [[a-]]
>not, without, lacking, deficient
_____
>[!info]+ ETYMOLOGY of [[a-]]
>#greek
>
>|Component|Origin|Meaning|
>|---|---|---|
>|**[[a-]]** / **[[an-]]**|Greek _ἀ- (a-), ἀν- (an-)_|"**not**," "**without**," "**lacking**" — negating/privative prefix (becomes *an-* before *h* or a vowel)|
>
> The word entered English in the **1600s** as a Greek-derived prefix (**prefix**), borrowed from Late Latin ***[[a-]]***, from Greek ***ἀ-*** (a-) — literally "**not, without**." The root *a-* ("**absence**") connects [[a-]] to the entire **[[negative and privative roots]]**: ***[[anemia]]*** (**an- + haima $\rightarrow$ without blood**), ***[[anoxia]]*** (**an- + oxys $\rightarrow$ without oxygen**), and ***[[asymptomatic]]*** (**a- + symptoma $\rightarrow$ without symptoms**). The **privative** prefix [[a-]] is one of the most productive negating prefixes in medical terminology: e.g., ***[[anhydrosis]]***, ***[[aneurysm]]***, ***[[aphonia]]***, ***[[asystole]]***, and ***[[achylia]]***.
_____
>[!example]+ Related terms of [[a-]]
>
>|    [[a-]]    | not | without | lacking, deficient |         -         |   -   |     
> |:------------:|:---:|:-------:|:------------------:|:-----------------:|:-----:| 
> |  [[hypo-]]   |  -  |    -    |        YES         | low, below normal | under |     
> | [[in(not)-]] | YES |    -    |         -          |         -         |   -   |     
> |   [[non-]]   | YES |    -    |         -          |         -         |   -   |     
> |  [[olig-]]   |  -  |    -    |        YES         |        few        |   -   |     
>
_____
>[!tip]- Derivations of [[a-]]
>```dataview
TABLE definition AS Definition 
WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
SORT file.name ASC
>```
_____
>[!faq]- Query
>```dataview
>TABLE definition AS DEFI
>FROM #medroot
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```

[[Med terms dictionary]]