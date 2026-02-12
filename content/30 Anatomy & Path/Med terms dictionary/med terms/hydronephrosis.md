---
tags:
  - medterm
  - medroot
aliases:
roots:
  - hydr-
  - hydro-
  - -osis
  - -sis
  - -nephrosis
forms:
  - prefix
  - suffix
  - combining
  - noun
alphabet: H
definition:
  - kidney enlargement from distension
---
>[!Note] DEFINITION of [[hydronephrosis]]
>**This condition arises when urine cannot drain properly from the kidney, leading to pressure buildup in the renal collecting system; it may be unilateral or bilateral, acute or chronic, and graded by severity (mild to severe based on pelvic dilation).** Untreated, it risks renal damage, infection, or failure via tubular atrophy and fibrosis; common in adults from stones or tumors, and in fetuses from congenital anomalies like [[ureteropelvic junction obstruction]].
_____
>[!info]+ ETYMOLOGY of [[hydronephrosis]]
>#greek- From Greek _hydr-_ (ὕδωρ, "**water**") + _nephros_ (νεφρός, "**kidney**") + _[[-osis]]_ ("**condition, state**"), literally "**watery kidney swelling,**" coined in the 19th century for pathological dilation.[](https://en.wikipedia.org/wiki/List_of_medical_roots_and_affixes)
_____
>[!tip]+ DERIVATIONS of [[hydronephrosis]]
>```dataview
>TABLE definition AS Definition
>FROM #medterm 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
>SORT file.name ASC
>```
_____
>[!faq]- Query functionality
>```dataview
>TABLE definition AS Definition
>FROM #medterm  
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```

[[Med roots]]
[[Appendix A Prefixes]]
[[Appendix B Combining Forms]]
[[Appendix C Suffixes]]
[[Appendix D Suffix forms]]