---
tags:
  - medroot
aliases: []
roots:
  - alg-
forms:
  - combining
alphabet: A
definition:
  - pain
---
>[!Note] DEFINITION of alg-
>pain 
>*see also: [[alges-]]*
_____
>[!info]+ ETYMOLOGY of [[alg-]]
>#greek
>
>|Component|Origin|Meaning|
>|---|---|---|
>|**[[alg-]]**|Greek _ἄλγος_ (algos)|"**pain**," "**grief**," "**suffering**" — combining form denoting pain|
>
> The word entered English in the **1870s** as *analgesia* (**noun**), borrowed from Modern Latin ***analgesia***, from Greek ***ἄλγος*** (algos) — literally "**pain**." The root *algos* ("**pain**") connects [[alg-]] to the entire **[[pain and sensation roots]]**: ***[[analgesia]]*** (**[[an-]] + alg- + -ia $\rightarrow$ absence of pain**), ***[[neuralgia]]*** (**neur- + alg- + -ia $\rightarrow$ nerve pain**), and ***[[myalgia]]*** (**[[myo-]] + alg- + -ia $\rightarrow$ muscle pain**). The **combining form** [[alg-]] is highly productive in neurology, rheumatology, and pain medicine: e.g., ***[[analgesic]]***, ***[[arthralgia]]***, ***[[fibromyalgia]]***, and ***[[hyperalgesia]]***.
_____
>[!example]+ RELATED TERMS to alg-
>
>| [[alg-]]  | pain |  -   |
>|:---------:|:----:|:----:|
>| [[-agra]] | YES  | gout |
>| [[odyn-]] | YES  |  -   |
>
_____
>[!tip]- DERIVATIONS of alg-
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