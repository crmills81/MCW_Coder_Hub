---
tags:
  - medroot
aliases: []
roots:
  - all-
forms:
  - combining
alphabet: A
definition:
  - other
  - divergence
  - difference from
---
>[!Note] DEFINITION of all-
>other, divergence, difference from
_____
>[!info]+ ETYMOLOGY of [[all-]]
>#greek
>
>|Component|Origin|Meaning|
>|---|---|---|
>|**[[all-]]**|Greek _ἄλλος_ (allos)|"**other**," "**different**," "**another**" — qualitative/distinguishing prefix|
>
> The word entered English in the **1600s** as a combining form (**prefix**), borrowed from Late Latin ***allos***, from Greek ***allos*** — literally "**other**." The root *allos* ("**other**") connects [[all-]] to the entire **[[divergence roots]]**: ***[[allopathy]]*** (**all- + pathos $\rightarrow$ treatment with a different/opposite remedy**), ***[[allogeneic]]*** (**all- + genes $\rightarrow$ originating from another individual of the same species**), and ***[[allostasis]]*** (**all- + [[-stasis]] $\rightarrow$ achieving stability through change/different states**). The **qualitative** prefix [[all-]] is productive in immunology, pharmacology, and pathology: e.g., ***[[allograft]]***, ***[[allotype]]***, and ***[[allochromatic]]***.
_____
>[!example]+ RELATED TERMS to all-
>
>| -  | - |-|-  |-  |
>| ----------- | ----- | ---------- | --------------- | --- |
>| [[all-]]    | other | divergence | difference from | -   |
>| [[hetero-]] | YES   | -          | different       | relationship to another    |
>

_____
>[!tip]- DERIVATIONS of all-
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