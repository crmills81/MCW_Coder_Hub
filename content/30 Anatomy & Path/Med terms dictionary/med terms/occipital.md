---
tags:
  - specialty/ophthalmology
  - medterm
  - ophthalmology
aliases:
  - occipital bone
roots:
  - ob-
  - capit-
  - -al
"definition:": back part of the head
forms:
  - adjective
"alphabet:": O
---
>[!note]+ Definition of occipital
>[[ob-|oc-]][[capit-]][[-al]] - back part of the head (referring to back part of head)
>1. ([anatomy]) Of, pertaining to, or located within or near the [occiput] (back of the head) or the [occipital bone].
___
>[!info]+ Etymology of occipital
>Borrowing from [Middle French] [occipital], from [Medieval Latin]_[occipitālis]_, from _[occiput]_ (“the back of the head, occiput”) +‎ [-ālis] (“-al”, adjectival suffix), equivalent of _[occiput]_ +‎ _[-al]_. [Doublet] of [occipitalis] occipital bone." - [enPR]: ŏk-sĭp'-ĭt-əl
_____
>[!tip]- DERIVATIONS of Optometry
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