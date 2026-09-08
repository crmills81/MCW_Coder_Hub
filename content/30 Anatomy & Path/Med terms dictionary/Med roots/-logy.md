---
tags:
  - medroot
aliases: []
roots:
  - -logy
forms:
  - suffix form
  - noun
  - suffix
alphabet: L
definition:
  - study
  - science
  - the study or science of
---
>[!Note] DEFINITION of [[-logy]]
>forms nouns: [[log-]][[-y]] - study, science, the study or science of
_____
>[!info]+ ETYMOLOGY of [[-logy]]
>#greek
>
>|Component|Origin|Meaning|
>|---|---|---|
>|**[[log-]]** / **[[logo-]]**|Greek _λόγος_ (logos), from _λέγειν_ (legein)|"**study**," "**science**," "**the study or science of**" — Noun-forming suffix — "**the branch of knowledge or science dealing with (a named subject)**"|
>
> The suffix entered English in the **1550s** as *etymology* (**noun**), borrowed from French *étymologie*, from Late Latin ***aetymologia***, from Greek ***ἐτυμολογία*** (etymologia) — literally "**the science of the true meaning**" (etos "true" + logos "word, study"). The modern medical use of *-logy* as a productive suffix proliferated in the **1800s**. The root *logos* ("**word, study, reason**") connects [[-logy]] to the entire **[[study and science suffixes]]**: ***[[pathology]]*** (**path- + logy $\rightarrow$ the study of disease**), ***[[cardiology]]*** (**cardio- + logy $\rightarrow$ the study of the heart**), and ***[[neurology]]*** (**neuro- + logy $\rightarrow$ the study of the nervous system**). The **noun-forming suffix** [[-logy]] is one of the most productive suffixes in medical terminology: e.g., ***[[pharmacology]]***, ***[[toxicology]]***, ***[[hematology]]***, ***[[nephrology]]***, and ***[[radiology]]***.
_____
>[!example]+ RELATED TERMS to [[-logy]]
_____
>[!tip]- DERIVATIONS of [[-logy]]
>```dataview
>TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
>SORT file.name ASC
>```
_____
>[!faq]- Query
>>```dataview
>TABLE definition AS Definition
>FROM #medroot
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```

[[Med terms dictionary]]