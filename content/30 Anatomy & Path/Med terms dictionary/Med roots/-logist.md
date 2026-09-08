---
tags:
  - medroot
aliases: []
roots:
  - -logist
forms:
  - suffix form
  - noun
  - suffix
alphabet: L
definition:
  - one who specializes in a certain study or science
---
>[!Note] DEFINITION of [[-logist]]
>[[log-]][[-ist]] - one who specializes in a certain study or science
>*see also: [[-ist]], [[-ian]]*
_____
>[!info]+ ETYMOLOGY of [[-logist]]
>#greek
>
>|Component|Origin|Meaning|
>|---|---|---|
>|**[[log-]]** / **[[logo-]]**|Greek _λόγος_ (logos), from _λέγειν_ (legein)|"**study**," "**science**," "**discourse**" — the "field" element|
>|**[[-ist]]**|Greek _-ιστής_ (-istēs)|"**one who**," "**specialist in**" — Agent-forming suffix — "**person who practices or specializes in**"|
>
> The suffix entered English in the **1640s** as *physiologist* (**noun**), borrowed from French *physiologiste*, from Late Latin ***physiologus***, from Greek ***φυσιολόγος*** (physiologos) — literally "**one who discourses on nature**" (physis "nature" + logos "word, study"). The term *toxicologist* appeared in the **1840s**, and *pathologist* in the **1790s**. The root *logos* + *-istēs* ("**one who studies**") connects [[-logist]] to the entire **[[specialist and practitioner suffixes]]**: ***[[cardiologist]]*** (**cardio- + logist $\rightarrow$ one who studies the heart**), ***[[neurologist]]*** (**neuro- + logist $\rightarrow$ one who studies the nervous system**), and ***[[pharmacologist]]*** (**pharmaco- + logist $\rightarrow$ one who studies drugs**). The **agent-forming compound suffix** [[-logist]] is one of the most productive suffixes in medical terminology: e.g., ***[[toxicologist]]***, ***[[radiologist]]***, ***[[hematologist]]***, ***[[nephrologist]]***, and ***[[dermatologist]]***.
_____
>[!example]+ RELATED TERMS to [[-logist]]
>
_____
>[!tip]- DERIVATIONS of [[-logist]]
>```dataview
>TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
>SORT file.name ASC
>```
___
>[!faq]- Query
>```dataview
>TABLE definition AS Definition
>FROM #medroot
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```

[[Med terms dictionary]]