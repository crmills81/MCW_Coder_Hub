---
tags:
  - " #medroot"
  - medterm
  - medroot
aliases:
  - strabismos
roots:
  - st
  - -ismus
  - -us
forms:
  - noun
"alphabet:": S
definition:
  - a squinting of the eyes
---
>[!Note] DEFINITION of [[strabismus]]
>**[[Strabismus]]**, also known as **crossed eyes or eye misalignment**, is a vision problem where both eyes do not look at the same object at the same time, often due to **poor eye muscle control or farsightedness.**
_____
>[!info]+ ETYMOLOGY of [[strabismus]]
>1680s, medical #latin, from Greek *strabismos*, from *strabizein* "to squint," which is from strabos "*squinting, squint-eyed*"
_____
>[!tip]+ DERIVATIONS of [[strabismus]]
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