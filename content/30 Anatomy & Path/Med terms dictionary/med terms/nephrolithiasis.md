---
tags:
  - medterm
  - medroot
  - urology
aliases:
  - Nephrolithiasis
roots:
  - nephr-
  - lith-
  - -iasis
"alphabet:": N
definition:
  - "'forms present participle'"
  - (often) one side of the body
  - The presence of calculi (stones) in the kidneys.
forms:
  - combined
  - noun
  - disease
  - diminutive
---
>[!Note] DEFINITION of [[nephrolithiasis]]
> Condition marked by the presence of renal calculi, abnormal concretions within the kidney, usually of mineral salts. [[nephrolithiasis]] refers to the presence of crystalline stones ([[calculus|calculi]]) within the urinary system (kidneys and [[ureter]]). Such renal stones are composed of varying amounts of crystalloid and organic matrix. Ureteric stones almost always originate in the kidney but then pass down into the ureter.
_____
>[!info]+ ETYMOLOGY of [[nephrolithiasis]]
>Greek _nephros_ = kidney + _lithos_ = stone + _[[-iasis]]_ = condition
_____
>[!example]+ RELATED TERMS to [[nephrolithiasis]]
>- kidney stones
>- renal calculi
>- nephroliths
>- [[urolithiasis]]

____
>[!tip]- DERIVATIONS of [[nephrolithiasis]]
>```dataview
>TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name !=[[]].file.name
>SORT file.name ASC
>```
___
>[!faq]- Query
>```dataview
>TABLE definition AS Definition
>FROM #medterm 
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```

[[Med roots dictionary]]