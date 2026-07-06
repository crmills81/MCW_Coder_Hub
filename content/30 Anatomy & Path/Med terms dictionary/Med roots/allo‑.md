---
tags:
  - medroot
  - medterm
aliases: []
roots:
  - allo‑
  - all-
  - al-
forms:
  - prefix
  - suffix
alphabet: A
definition:
  - other
  - different from the normal/usual
---
>[!Note] DEFINITION of [[allo‑]]
>In medicine, [[allo-]] describes foreign or differing elements, such as nonself tissues from the same species (e.g., in **transplants**) or geometric isomers in chemistry. It contrasts with [[auto-]] ("**self**") and can denote opposition or addition in compounds.
>
>- **Allograft**: Transplant from another individual of the same species.[](https://en.wiktionary.org/wiki/allo-)​
>- **[[Allergy]]**: Altered reaction to a foreign substance.[](https://www.homeofbob.com/health/wordRootsAndAnatomy.html)​
>- **Allopathy**: Treatment using remedies producing opposite effects.[](https://en.wikipedia.org/wiki/Allopathic_medicine)​
>- **Alloantigen**: Antigen from another individual.​
>- **Allogenic**: Pertaining to nonself cells from the same species.
_____
>[!info]+ ETYMOLOGY of [[allo‑]]
> #greek [[Allo-]] originates from Greek _állos_ (ἄλλος), meaning "**other**," "**different**," or "**another**," cognate with Latin _alius_ ("other") from PIE root [[al-]] ("beyond"). [ from prior]
_____
>[!example]+ RELATED TERMS to [[allo‑]]
>
|          Term           |    Meaning    | Prefix/Suffix? | Notes |
| :---------------------: | :-----------: | :------------: | :---: |
| [[allo‑]] | different |       -        |   -   |
|    [[all-]]     |    NO     |    -     | - |
_____
>[!tip]+ DERIVATIONS of [[allo‑]]
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