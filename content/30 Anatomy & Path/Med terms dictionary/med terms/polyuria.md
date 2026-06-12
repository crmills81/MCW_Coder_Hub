---
tags:
  - medterm
  - medroot
aliases:
roots:
  - polyuria
  - poly-
  - -uria
  - -ia
forms:
  - prefix
  - suffix
  - combining
alphabet: P
definition:
  - large urine volume
---
>[!Note] DEFINITION of [[polyuria]]
>[[polyuria]] refers to **increased urine volume**, not just going more often; many patients with frequency alone pass only small amounts and do not meet criteria for polyuria. **Adults with [[polyuria]] may produce up to 10-15 liters of urine per day**, often accompanied by [[polydipsia]] (excessive thirst) and nocturia (waking at night to void). Common causes include uncontrolled diabetes mellitus (osmotic diuresis), diabetes insipidus (ADH deficiency or resistance), primary polydipsia, use of diuretics, and excessive fluid intake.
_____
>[!info]+ ETYMOLOGY of [[polyuria]]
>#greek - [[poly-]]: Greek _polýs_, meaning “*many*” or “*much*.”
>- [[-uria]]: from Greek _ouron_, meaning “[[urine]].”  
>- Together, [[polyuria]] literally means “much urine” or “excessive urination by volume.”
_____
>[!tip]- DERIVATIONS of [[polyuria]]
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

[[Med roots dictionary]]
[[Appendix A Prefixes]]
[[Appendix B Combining Forms]]
[[Appendix C Suffixes]]
[[Appendix D Suffix forms]]