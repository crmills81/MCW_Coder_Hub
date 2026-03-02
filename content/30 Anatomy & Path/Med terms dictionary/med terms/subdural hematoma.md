---
tags:
  - medterm
aliases: []
roots:
  - sub-
  - dur-
  - -al
  - hemat-
  - -oma
alphabet: S
"definition:": venous blood oozing into subdural space of the brain
forms:
  - noun
  - combining
---
>[!note]+ Definition of [[subdural hematoma]]
>[[sub-]][[dur-]][[-al]] [[hem-|hemat-]][[30 Anatomy & Path/Med terms dictionary/Med roots/-oma]] - venous blood oozing into subdural (below the hard outer meninges) space of the brain (pertaining to blood swelling below dura)
>*see also: [[pachymeninx]]*
___
>[!info]+ Etymology of [[subdural hematoma]]
>The term "[[subdural hematoma]]" combines "*subdural*" and "*hematoma*." **"Subdural" originated in 1870 from "sub-" and "dura (mater)"**, referring to its location beneath the dura mater. "[[Hematoma]]" came into use in 1826, combining the *Greek* "[[haimato-]]" (blood) and "[[30 Anatomy & Path/Med terms dictionary/Med roots/-oma]]" (morbid growth or tumor)
_____
>[!tip]- DERIVATIONS of [[subdural hematoma]]
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