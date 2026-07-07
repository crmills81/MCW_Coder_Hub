---
tags:
  - medroot
  - medterm
  - ophthalmology
aliases: []
roots:
  - blepharo-
  - blephar-
forms:
  - prefix
  - combining
alphabet: B
definition:
  - of or pertaining to the eyelid
---
>[!Note] DEFINITION of [[blepharo-]]
>[[Blepharo-]] denotes **structures, inflammations, surgeries, or spasms involving the eyelid, such as [[blepharitis]] ([[inflammation]]), [[blepharoplasty]] (surgical repair), or [[blepharospasm]] (involuntary contraction**). It combines with suffixes like [[-itis]], [[-plasty]], or [[-spasm]] to form precise ophthalmic terms.[](https://www.oreateai.com/blog/understanding-blephar-the-eyelid-connection/aab01c030f631ec5c30c5b208a4040ce)
_____
>[!info]+ ETYMOLOGY of [[blepharo-]]
>#greek [[Blepharo-]] derives from Ancient Greek _blépharon_ (βλέφαρον), meaning "**eyelid**," related to _blépō_ (βλέπω), "to **look**" or "**see**," evoking the protective role of **eyelids** over the eyes.
_____
>[!example]+ RELATED TERMS to [[blepharo-]]
>
|          Term           |    Meaning    | Prefix/Suffix? | Notes |
| :---------------------: | :-----------: | :------------: | :---: |
| [[blepharo-]] | pertaining to the eyelid |       -        |   -   |
|    [[blephar-]]     |    YES     |    prefix     | - |
_____
>[!tip]+ DERIVATIONS of [[blepharo-]]
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