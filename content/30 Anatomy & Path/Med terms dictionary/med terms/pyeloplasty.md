---
tags:
  - specialty/urology
  - medical_coding
  - general
aliases: []
roots:
  - py-
  - pyel-
  - plas
  - plast-
forms:
  - noun
"alphabet:": P
definition:
  - Kidney pelvis repair
  - (often) one side of the body
  - kidney
---
>[!Note] DEFINITION of [[pyeloplasty]]
>Reconstruction of the renal pelvis to drain and decompress the kidney (treats UPJ obstruction). Pyeloplasty is a surgical procedure performed to treat a blockage or narrowing where the kidney meets the ureter, known as a ureteropelvic junction (UPJ) obstruction. **This operation removes a blockage that is keeping urine from reaching the bladder**, and has high success rates.
_____
>[!info]+ ETYMOLOGY of [[pyeloplasty]]
>From pyelo- +‎ -plasty. Noun. **pyeloplasty** (plural pyeloplasties). English Wikipedia has an article on: **pyeloplasty**
_____
>[!example]+ RELATED TERMS to [[pyeloplasty]]
>[[colinephritis]]
>Hydronephrosis
>[endopyeloplasty](https://en.wiktionary.org/wiki/endopyeloplasty "endopyeloplasty")
>
_____
>[!tip]+ DERIVATIONS of [[pyeloplasty]]
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