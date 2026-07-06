---
tags: [medroot]
aliases: 
 - Cribriform
roots: Cribrum- forms
forms: [prefix, suffix]
alphabet: C
definition: [small holes]
---

>[!Note] **DEFINITION** of [[cribriform]]
>In medical anatomy, the term most commonly refers to the [[cribriform]] plate of the ethmoid bone. This horizontal plate forms the roof of the nasal cavity and the floor of the **anterior cranial fossa**. It is characterized by numerous tiny openings called olfactory foramina, which allow the passage of olfactory nerve fibers (**Cranial Nerve I**) from the nasal mucosa to the olfactory bulbs in the brain. Beyond gross anatomy, the term is also used in pathology to describe a "[[cribriform]] pattern"—a histological appearance where sheets of cells are punctuated by clear, gland-like spaces, often seen in certain types of breast or prostate carcinomas.
_____
>[!info]+ **ETYMOLOGY** of [[cribriform]]
>#latin; - **Root:** _Cribrum_ (meaning "a sieve") + _[[-form]]_ (meaning "shaped like").
>- **History:** The term has been used since the 18th century to describe the unique, perforated structure of the ethmoid bone.
_____
>[!tip]- **DERIVATIONS** of [[cribriform]]
>```dataview
>TABLE definition AS Definition
>FROM #medroot
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
>SORT file.name ASC
>```
_____
>[!faq]- **Query functionality**
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