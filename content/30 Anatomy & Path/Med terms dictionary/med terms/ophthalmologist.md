---
tags:
  - medterm
  - medroot
aliases:
  - oculist
roots:
  - ophthalmologist
  - ophthalmo-
  - -logia
  - -ist
forms:
  - prefix
  - suffix
  - combining
  - compound suffix form
alphabet: O
definition:
  - a physician trained in ophthalmology
---
>[!Note]+ DEFINITION of [[ophthalmologist]]
>**Ophthalmologists** complete medical school, followed by residency (**typically 4 years in the US**) and often fellowships for subspecialties like retina, [[glaucoma]], or pediatric [[ophthalmology]]. They perform **comprehensive eye exams, prescribe medications or glasses, conduct laser procedures, and execute surgeries such as cataract removal or LASIK**. Unlike optometrists (**who focus on vision correction**) or opticians (**who fit lenses**), ophthalmologists are equipped for surgical interventions and systemic disease management affecting the eyes.
_____
>[!info]+ ETYMOLOGY of [[ophthalmologist]]
>#greek From Greek [[ophthalmo-]] (ὀφθαλμός, **ophthalmos**, "*eye*") + [[-logy]] (-λογία, "[[-logia]]," *study*) for **ophthalmology**, plus [[-ist]] ("**one who practices**"), first attested around 1825. The root **ophthalmos** likely derives from *ops* ("*eye/sight*") + *thalamos* ("**inner chamber**").

_____

> [!success]+ RELATED TERMS
> **Ophthalmology**: The field/study itself.
> **Optometrist**: Non-surgical eye care provider.
> **Optician**: Lens dispenser.
> **Subspecialties**: Neuro-[[ophthalmology]], [[vitreoretinal]] surgery, oculoplastics.
> **Other**: [[Optometry]] (**vision measurement**), oculis

_____
>[!tip]- DERIVATIONS of [[ophthalmologist]]
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