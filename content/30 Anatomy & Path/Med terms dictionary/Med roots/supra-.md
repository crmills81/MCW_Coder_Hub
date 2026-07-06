---
tags:
  - medroot
aliases: []
roots:
  - supra-
forms:
  - prefix
  - suffix
alphabet: S
definition:
  - above
  - higher than
  - over
---
>[!Note] DEFINITION of [[supra-]]
>A position above the part indicated by the word to which it is joined; in this sense, the same as [super-](https://medical-dictionary.thefreedictionary.com/super-); opposite of [infra-](https://medical-dictionary.thefreedictionary.com/infra-). [L. _supra,_ on the upper side]
_____
>[!info]+ ETYMOLOGY of [[supra-]]
>#latin OR #greek
>word-forming element of Latin origin meaning "above, higher than, over; beyond; before," from Latin _supra_ (adv./prep.) "above, over, before, beyond, on the upper side," originally _supera_, in _supera (parte)_, literally "on the upper (side)." This is from old fem. ablative singular of _superus_ (adj.) "above," which is related to _super_ "above, over" (from PIE root [*uper](https://www.etymonline.com/word/*uper "Etymology, meaning and definition of *uper") "over")
>
_____
>[!example]+ RELATED TERMS to [[supra-]]
>
|       Term        |    Meaning    | Prefix/Suffix? | Notes |
|:-----------------:|:-------------:|:--------------:|:-----:|
|    [[supra-]]     | higher than, above |      Suffix       |   -   |
| [[suprascapular]] |  upper part of the scapula   |    -     | _supra-scapular_ |
|[[Suprarenal]]|  Above the kidney  |        -        |  _supra-renal_   |
|[[Supraspinatus]]|  muscle located above the spine of the scapula  |        -        |  _supra-spinatus_  |

_____
>[!tip]+ DERIVATIONS of [[supra-]]
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

![[Pasted image 20260123105522.png]]