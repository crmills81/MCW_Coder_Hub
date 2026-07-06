---
tags:
  - medroot
  - medterm
aliases: []
roots:
  - brady-
forms:
  - combining
  - prefix
"alphabet:": B
definition:
  - slow
  - delayed action
---
>[!Note] DEFINITION of [[brady-]]
>**slow**; - A combining form used as a prefix meaning "*slow*," "*delayed*," or "*tardy*" in scientific and medical contexts.[](https://www.dictionary.com/browse/brady)
_____
>[!info]+ ETYMOLOGY of [[brady-]]
>#greek bradys; - Derived from the Ancient Greek word _bradús_ (βραδύς), meaning "slow" or "heavy".[](https://www.etymonline.com/word/brady-)
_____
>[!example]+ RELATED TERMS to [[brady-]]
>- **Tachy-:** The direct opposite prefix, meaning "fast" or "rapid" (e.g., *tachycardia*).[](https://wordpandit.com/word-root-brady/)
>- **Brachy-:** A common phonetic look-alike that actually means "short" (e.g., brachycephaly).[](https://en.wikipedia.org/wiki/List_of_medical_roots_and_affixes)​
>- **Bradypus:** The scientific genus name for three-toed sloths, literally translating to "slow-footed".[](https://wordpandit.com/word-root-brady/)​
_____
>[!tip]+ DERIVATIONS of [[brady-]]
>```dataview
>TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
>SORT file.name ASC
>```
_____
>[!faq]- Query
>```dataview
>TABLE definition AS Definition
>FROM #medroot
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```

[[Med roots dictionary]]