---
tags:
  - " #medroot"
aliases:
  - urin/o
roots:
  - ur-
forms:
  - combining
"alphabet:": U
definition: Urine, urinary tract
---
>[!Note] DEFINITION of urin-
>You eliminate **urine** through the **urinary tract**, which is your body’s waste removal system. Wastes and water make up **urine**. Your kidneys, ureters, and bladder make up the **urinary tract**. The **urinary tract** needs to work as a unit in order to urinate properly.
_____
>[!info]+ ETYMOLOGY of urin-
>**ur/o** or **urin/o**
_____
>[!example]+ RELATED TERMS to urin-
>urinary
>urinate
>urine
_____
>[!tip]+ DERIVATIONS of urin-
>```dataview
>TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name !=[[]].file.name
>SORT file.name ASC
>```
___
>[!faq]- Query
>```dataview
>TABLE definition AS Definition
>FROM #medroot
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```

[[Med roots dictionary]]