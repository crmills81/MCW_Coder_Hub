---
tags: ["medroot"]
aliases: [-ella, -ellum]
roots: [-ellus, -ella, -ellum]
forms: [suffix, noun, diminutive]
alphabet:: E
definition: [biological genera, small]
---
>[!Note] DEFINITION of [[-ellus]]
>1. forms biological genera
>2. forms diminutives: small
>In anatomical terminology, **[[-ellus]]** appears as a diminutive suffix attached to Latin roots to name **small versions** of organs, vessels, or structures, emphasizing their miniature size relative to a larger counterpart (e.g., _arteriola_ = small artery). It follows classical Latin grammar where **[[-ellus]]/[[-ellus|-ella]]/[[-ellus|-ellum]]** denotes smallness or endearment, retained in modern medical Latin for precision in histology, embryology, and microanatomy; not productive in English neologisms but fixed in established terms
_____
>[!info]+ ETYMOLOGY of [[-ellus]]
>#latin From Latin [[-ellus]], a first-declension diminutive suffix (masculine/feminine), parallel to [[-ule|-ulus]]/-ula (second declension). Used since Republican Latin to form "little [noun]" (e.g., puerulus = little boy); anatomical adoption during Renaissance via Vesalius/ Fabricius for micro-structures visible via early microscopy. Literally "little form of [root]," preserving Roman naming conventions.
_____
>[!example]+ RELATED TERMS to [[-ellus]]
>
>|  [[-ellus]]  | small |         biological genera         |
|:----------:| :-----: |:-----------------:|
| [[-cle]]  | YES   |         -         |
| [[micr-]] | YES   | - |
|  [[-il]]   | YES   |         -         |
|  [[-ole]]  | YES   |         -         |
|  [[-ule]]  | YES   |         -         |
>
_____
>[!tip]+ DERIVATIONS of [[-ellus]]
>```dataview
>TABLE definition AS Definition
>FROM #medroot
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
>SORT file.name ASC
>```
_____
>[!faq]- Query functionality
>
>```dataview
>TABLE definition AS Definition
>FROM #medroot
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```

[[Med roots dictionary]]
[[Appendix A Prefixes]]
[[Appendix B Combining Forms]]
[[Appendix C Suffixes]]
[[Appendix D Suffix forms]]