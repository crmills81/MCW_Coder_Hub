---
tags:
  - medroot
aliases:
  - onk-
roots:
  - onc-
  - o-
forms:
  - combining
  - prefix
alphabet: O
definition:
  - tumor
---
>[!Note] DEFINITION of [[onc-]]
>The medical root **onc-** (or **onco-**) is a prefix that fundamentally means ==**a swelling, mass, bulk, or tumor**==.
> 
> In modern healthcare, it serves as the universal linguistic building block for anything related to **cancer study, diagnosis, and treatment**.

_____

>[!info]+ ETYMOLOGY of **onc-**
>#Greek
>
>|Component|Origin|Meaning|
>|---|---|---|
>|**[[onc-]]**|[Greek] *ὄγκον* (*onkon*)|"**Tumor**," "**Swelling**," "**Lump**" — Noun-forming root|
>|**[[onk-]]**|[Greek] *ὄγκον* (*onkon*), from *onkos* (ὄγκον)|"**Tumor**," "**Swelling**," "**Lump**," "**Mass**"|"**Tumor**," "**Mass**," "**Swelling**"|
>|**[[-oma]]**|[Greek] *-ωμα* (*-oma*)|Noun-forming suffix — "**mass or tumor**"|
>
> The word entered English in the **1800s** as *tumor* (**noun**), borrowed from Latin *tumor*, from Greek ***ὄγκον*** (*onkon*) — literally **"swelling"** or **"lump."** The root *onkos* ("**swelling**") connects **[[onc-]]** to the entire **Oncological** family: ***oncology*** (**onkos + logos → study of tumors**), ***oncogenesis*** (**onkos + genesis → formation of tumors**), and *[[neoplasm]]* (**new growth**). The root *[[onc-]]* is highly productive in medical terminology, appearing in terms such as **[[oncology]], oncologist, [[oncotype]], and [[oncocytoma]]**.
>
_____
>[!example]+ RELATED TERMS to onc-
>
> - **[[Oncology]]**: The branch of medicine dedicated to diagnosing, treating, and preventing cancer.
> - **Oncologist**: A physician who specializes in treating cancer.
> - **[[Oncogenesis]]**: The process by which normal cells are transformed into cancer cells (also called [[carcinogenesis]]).
> - **[[Oncogene]]**: A gene that has the potential to cause cancer when mutated or expressed at high levels.
> - **[[Oncolytic]]**: Something that destroys tumor cells (e.g., an oncolytic virus used in targeted cancer therapy).
>
_____
>[!tip]- DERIVATIONS of [[onc-]]
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