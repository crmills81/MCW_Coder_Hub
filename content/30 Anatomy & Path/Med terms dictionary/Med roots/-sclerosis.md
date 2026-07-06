---
tags:
  - medroot
aliases: []
roots:
  - -sclerosis
forms:
  - suffix form
  - noun
  - suffix
  - combining
  - compound suffix form
"alphabet:": S
definition:
  - hardening of
  - abnormal hardening of a body tissue or organ
---
>[!Note] DEFINITION of [[-sclerosis]]
>forms nouns: [[scler-]][[-osis]] - hardening (of tissues) of; The medical suffix **[[-sclerosis]]** refers to the abnormal hardening of a body tissue or organ. In clinical practice, this often involves the replacement of normal functional tissue with fibrous connective tissue, leading to a loss of elasticity.
_____
>[!info]+ ETYMOLOGY of [[-sclerosis]]
>#greek The term originates from the Ancient Greek word **sklērōsis** (σκλήρωσις), meaning "*hardening*". This is derived from the root **sklēros** (σκληρός), which translates to "hard". It entered English via Medieval Latin in the late 14th century, initially describing hard tumors or morbid tissue hardening.
_____
>[!example]+ RELATED TERMS to [[-sclerosis]]
>## **Related Terms and Concepts**
>- **-malacia**: The opposite of *sclerosis*, this suffix denotes the abnormal softening of tissues (e.g., *osteomalacia*).[](https://germanna.edu/sites/default/files/2022-03/Guide%20to%20Common%20Medical%20Terminology.pdf)
>- **[[-osis]]**: Often combined with the root _[[scler-]]_ (as in *sclerosis*), this suffix generally indicates an abnormal condition or disease state.[](https://globalrph.com/medical-terms-introduction/)
>- **Fibrosis**: While similar, *fibrosis* specifically refers to the scarring and development of excess fibrous connective tissue.
_____
>[!tip]+ DERIVATIONS of [[-sclerosis]]
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