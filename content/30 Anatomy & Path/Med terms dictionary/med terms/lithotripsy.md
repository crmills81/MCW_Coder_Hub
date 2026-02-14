---
tags:
  - medterm
aliases: []
roots:
  - lith-
  - sy-
  - lit-
forms:
"alphabet:": L
definition:
  - Crushing kidney stones
---
>[!Note] DEFINITION of [[lithotripsy]]
>Using shock waves (ESWL) or lasers to break stones (calculi) into small fragments for passing.
_____
>[!info]+ ETYMOLOGY of [[lithotripsy]]
>Greek *lithos* (stone) + *tribein* (to rub/grind)
_____
>[!example]+ RELATED TERMS to [[lithotripsy]]
>[[nephrolithiasis]]
>[[calculus]]
>[[ureteroscopy]]
_____
>[!tip]+ DERIVATIONS of [[lithotripsy]]
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