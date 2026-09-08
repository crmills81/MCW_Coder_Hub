---
tags:
  - medroot
aliases: []
roots:
  - alges-
forms:
  - combining
alphabet: A
definition:
  - sensitivity to pain
---
>[!Note] DEFINITION of alges-
>sensitivity to pain (see also [[alg-]])
_____
>[!info]+ ETYMOLOGY of [[alges-]]
>#greek
>
>|Component|Origin|Meaning|
>|---|---|---|
>|**[[alges-]]**|Greek _ἄλγησις_ (algesis), from _ἄλγος_ (algos)|"**sensitivity to pain**," "**sensation of pain**," "**pain perception**"|
>
> The word entered English in the **1860s** as *algesia* (**noun**), borrowed from Modern Latin ***algesia***, from Greek ***ἄλγησις*** (algesis) — literally "**sensation of pain**." The adjective *analgesic* appeared in the **1870s**. The root *algos* ("**pain**") connects [[alges-]] to the entire **[[pain and sensation roots]]**: ***[[hyperalgesia]]*** (**hyper- + [[alges-]] + [[-ia]] $\rightarrow$ increased sensitivity to pain**), ***[[analgesia]]*** (**an- + alges- + -ia $\rightarrow$ absence of pain sensation**), and ***[[algesimeter]]*** (**alges- + -meter $\rightarrow$ instrument measuring pain sensitivity**). The **combining form** [[alges-]] is productive in neurology and pain medicine: e.g., ***[[hypoalgesia]]***, ***[[algesic]]***, and ***[[algesimetry]]***.
_____
>[!example]+ RELATED TERMS to alges-
>
_____
>[!tip]- DERIVATIONS of alges-
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