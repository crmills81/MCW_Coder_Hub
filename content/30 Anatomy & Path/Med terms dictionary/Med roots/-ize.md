---
tags:
  - medroot
aliases: []
roots:
  - -ize
forms:
  - suffix
  - verb
  - suffix form
alphabet: I
definition:
  - (to) make
  - (to) become
  - (to) cause to be
  - (to) subject to
  - (to) engage in
---
>[!Note] DEFINITION of [[-ize]]
>forms verbs: (to) make, (to) become, (to) cause to be, (to) subject to, (to) engage in
>*see also: [[fac-]]*
_____
>[!info]+ ETYMOLOGY of [[-ize]]
>#greek
>
>|Component|Origin|Meaning|
>|---|---|---|
>|**[[-ize]]**|Greek _-ίζω_ (-izō), infinitive _-ίζειν_ (-izein)|Verb-forming suffix — "**to make**," "**to become**," "**to cause to be**," "**to subject to**," "**to engage in**"|
>
> The suffix entered English in the **1530s** as *authorize* and *civilize* (**verb**), borrowed from French *-iser*, from Latin ***-izare***, from Greek **_-ίζειν_** (-izein) — literally "**to make**" or "**to cause to be**." The suffix is extremely productive in English, with hundreds of medical and technical compounds coined in the **1700s–1900s**. The root *-izō* ("**to make, to cause**") connects [[-ize]] to the entire **[[verb-forming suffixes]]**: ***[[immobilize]]*** (**immobil- + -ize $\rightarrow$ to make immobile/fixed in place**), ***[[stabilize]]*** (**stabil- + -ize $\rightarrow$ to make stable/firm**), and ***[[mobilize]]*** (**mobil- + -ize $\rightarrow$ to make mobile/capable of movement**). The **verb-forming suffix** [[-ize]] is one of the most productive suffixes in English medical and clinical terminology: e.g., ***[[immobilize]]***, ***[[stabilize]]***, ***[[mobilize]]***, ***[[immobilize]]***, and ***[[stabilize]]***.
_____
>[!example]+ RELATED TERMS to [[-ize]]
>
_____
>[!tip]- DERIVATIONS of [[-ize]]
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