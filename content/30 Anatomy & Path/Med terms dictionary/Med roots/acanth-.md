---
tags:
  - medroot
aliases: []
roots:
  - acanth
forms:
  - combining
  - prefix
alphabet: A
definition:
  - thorn
  - spine
---
>[!Note] DEFINITION of [[acanth-]]
>thorn, spine  (I don't think this is the backbone spine?)
_____
>[!info]+ ETYMOLOGY of [[acanth-]]
>#greek
>
>|Component|Origin|Meaning|
>|---|---|---|
>|**[[acanth-]]** / **[[acantho-]]**|Greek _ἀκάνθη_ (akanthē)|"**thorn**," "**spiny projection**," "**thorny plant**" — morphological combining form denoting thorn-like or spiculated structures|
>
> The word entered English in the **1550s** as *acanthus* (**noun**), borrowed from French *acanthe*, from Late Latin ***acanthus***, from Greek ***ἀκάνθη*** (akanthē) — literally "**thorn**." The medical adjective *acanthous* appeared in the **1840s**, and the noun *acanthosis* in the **1870s**. The root *akanthē* ("**thorn**") connects [[acanth-]] to the entire **[[spine and projection roots]]**: ***[[acanthosis]]*** (**acanth- + -osis $\rightarrow$ thorn-like thickening of the skin**), ***[[acanthocyte]]*** (**acanth- + kytos $\rightarrow$ thorn-shaped red blood cell**), and ***[[acanthoma]]*** (**acanth- + -oma $\rightarrow$ benign epidermal growth with thorn-like projections**). The **combining form** [[acanth-]] is productive in dermatology, hematology, and histology: e.g., ***[[acanthosis nigricans]]***, ***[[acanthoblastic]]***, ***[[acanthocele]]***, and ***[[acantholysis]]***.
_____
>[!example]+ RELATED TERMS to [[acanth-]]
>
_____
>[!tip]- DERIVATIONS of [[acanth-]]
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