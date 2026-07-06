---
tags:
  - medroot
  - medterm
aliases:
  - stat
  - Statim
roots:
  - statim
  - stat-
  - -im-
forms:
  - compound suffix form
"alphabet:": S
definition: immediately,at once
---
>[!Note] DEFINITION of statim
>immediately, at once
>ironically, has a homonym that literally means the opposite: [[-stat]] (greek for stop). Also, has a homonym, "stat" (from the latin "stare" meaning to stay) 
_____
>[!info]+ ETYMOLOGY of statim
>#latin statim
_____
>[!example]+ RELATED TERMS to statim
>
_____
>[!tip]+ DERIVATIONS of statim
>```dataview
>TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
>SORT file.name ASC
>```
___
>[!faq]- Query
>```dataview
>TABLE definition AS Definition
>FROM #medterm 
>WHERE file.name != this.file.name
>AND any(contains(this.definition, definition))
>```

[[Med roots dictionary]]