---
tags:
  - medroot
aliases: []
roots:
  - ambly-
forms:
  - combining
alphabet: A
definition:
  - dull
  - faint
---
>[!Note] DEFINITION of [[ambly-]]
>dull, faint
_____
>[!info]+ ETYMOLOGY of [[ambly-]]
>#greek
>
>|Component|Origin|Meaning|
>|---|---|---|
>|**[[ambly-]]**|Greek _ἀμβλύς_ (amblys), from _amblys_ (blunt)|"**blunt**," "**dull**," "**faint**"|
>
> The word entered English in the **1830s** as a **combining form** (appearing in terms like *amblyopia*), borrowed from Modern Latin ***ambly-***, from Greek ***amblys*** — literally "**blunt**." The root *amblys* ("**dull**") connects [[ambly-]] to the entire **[[sensory-deficit roots]]**: ***[[amblyopia]]*** (**ambly- + ops $\rightarrow$ dull/dim vision**), ***[[amblystoma]]*** (**ambly- + stoma $\rightarrow$ blunt mouth**), and ***[[amblygon]]*** (**blunt angle**). The **combining form** [[ambly-]] is primarily productive in ophthalmology and biological morphology: e.g., ***[[amblyopia]]***, ***[[amblyopic]]***, and ***[[amblystomatidae]]***.
_____
>[!example]+ RELATED TERMS to [[ambly-]]
>
>| [[ambly-]] | dull | faint |  -   |   -   |
> |:----------:|:----:|:-----:|:----:|:-----:|
> | [[bary-]]  | YES  |   -   | hard | heavy |

_____
>[!tip]- DERIVATIONS of [[ambly-]]
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