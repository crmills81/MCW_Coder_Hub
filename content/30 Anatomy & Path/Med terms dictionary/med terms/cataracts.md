---
tags:
  - medterm
  - medroot
  - ophthalmology
aliases:
  - cataract
roots:
  - cataracts
  - cat-
  - cata-
  - -racts
  - -ract
forms:
  - prefix
  - suffix
  - combining
  - noun
alphabet: C
definition:
  - cloudy areas in the eye's lens
---
>[!Note] DEFINITION of [[cataracts]]
>They develop slowly with **age, trauma, radiation, or diseases like [[diabetes]], leading to blindness if untreated**; surgery replaces the lens with an artificial one, restoring sight effectively.
>- **[[Nuclear sclerotic]]**: Central lens hardening.[](https://en.wikipedia.org/wiki/Cataract)​
>- **[[Cortical]]**: Wedge-like opacities.[](https://en.wikipedia.org/wiki/Cataract)​
>- **Posterior [[subcapsular]]**: Back lens clouding, glare-prone.[](https://en.wikipedia.org/wiki/Cataract)​
>- **[[Phacoemulsification]]**: Ultrasonic lens removal surgery.[](https://en.wikipedia.org/wiki/Cataract)​
>- **[[Glaucoma]]**: Often co-occurs, pressure-related damage.
_____
>[!info]+ ETYMOLOGY of [[cataracts]]
>#latin From Latin "cataracta" (**waterfall, portcullis**), from Greek "katarrhaktēs" (down-rushing), metaphorically describing the white opacity resembling rushing water or an obstruction.
_____
>[!tip]- DERIVATIONS of [[cataracts]]
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

[[Med roots dictionary]]
[[Appendix A Prefixes]]
[[Appendix B Combining Forms]]
[[Appendix C Suffixes]]
[[Appendix D Suffix forms]]