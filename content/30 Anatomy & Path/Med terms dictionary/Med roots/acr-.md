---
tags:
  - medroot
aliases: []
roots:
  - acr-
forms:
  - combining
  - prefix
alphabet: A
definition:
  - extremities
---
>[!Note] DEFINITION of [[acr-]]
>extremities (particularly hands and feet)
_____
>[!info]+ ETYMOLOGY of [[acr-]]
>#greek
>
>|Component|Origin|Meaning|
>|---|---|---|
>|**[[acr-]]** / **[[acro-]]**|Greek _ἄκρον_ (akron), from _ἄκρος_ (akros)|"**extremities**," "**highest point**," "**tip**" — anatomical combining form denoting distal body parts|
>
> The word entered English in the **1880s** as *acromegaly* (**noun**), coined by Pierre Marie in 1886, borrowed from Modern Latin ***acro-***, from Greek ***ἄκρον*** (akron) — literally "**highest point**" or "**extremity**." The adjective *acral* appeared in the **1950s**. The root *akron* ("**highest point, extremity**") connects [[acr-]] to the entire **[[extremity and position roots]]**: ***[[acromegaly]]*** (**acro- + megas $\rightarrow$ enlargement of the extremities**), ***[[acrocyanosis]]*** (**acro- + kyanos + -osis $\rightarrow$ bluish discoloration of the extremities**), and ***[[acromion]]*** (**acro- + ōmos $\rightarrow$ highest point of the shoulder**). The **combining form** [[acr-]] is highly productive in rheumatology, dermatology, and endocrinology: e.g., ***[[acropathy]]***, ***[[acrodermatitis]]***, ***[[acromioplasty]]***, and ***[[acromelalgia]]***.
_____
>[!example]+ RELATED TERMS to [[acr-]]
>
_____
>[!tip]- DERIVATIONS of [[acr-]]
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