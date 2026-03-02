---
tags:
  - greek
  - medical_coding
  - medterm
  - specialty/ophthalmology
aliases:
  - erythropsia
roots:
  - erythr-
  - op-
  - -ia
"definition:": see everything through a red haze
forms:
  - adjective
  - combining
"alphabet:": E
---
>[!note]+ Definition of [[erythropia]]
>[[erythr-]][[ops-]][[-ia]] - see everything through a red haze (**condition of seeing red**)
>**Erythropia** (or **erythropsia**) is a **visual disturbance** where everything appears reddish, a type of [[chromatopsia]], often occurring after bright light exposure (**like cataract surgery**), carbon monoxide poisoning, or due to retinal bleeding, making vision tinged with red hues. It's a temporary or pathological symptom indicating issues with color perception or underlying conditions affecting the retina or visual cortex, with "**erythropia**" sometimes used interchangeably.
___
>[!info]+ Etymology of [[erythropia]]
>#greek
>The term "**erythropia**" is a variant spelling of "[[erythropia|erythropsia]]," which derives from Greek roots: "[[erythro-]]" meaning red, and "**ōps" meaning eye, with "[[-se]][[-ah]]"** as a suffix indicating a condition. 

_____
>[!tip]- DERIVATIONS of [[erythropia]]
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