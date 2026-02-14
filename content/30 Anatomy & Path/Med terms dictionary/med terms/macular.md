---
tags:
  - medterm
  - medroot
  - ophthalmology
aliases:
roots:
  - mac-
  - macular
  - -lar
  - -ar
  - -cular
forms:
  - prefix
  - suffix
  - combining
  - adjective
alphabet: M
definition:
  - pertaining to a spot
---
>[!Note] DEFINITION of [[macular]]
>[[macular]] (adj.) refers broadly to anything characterized by or involving small spots, such as **macular skin lesions composed of flat, discolored areas without elevation or depression**. In eye disease, it describes conditions that affect the retinal [[macula]], for example [[macular degeneration]], [[macular edema]], and [[macular holes]], where pathology in this central retinal zone impairs fine visual tasks like reading and driving. The underlying noun macula denotes a small spot or blotch, either on the skin or in the eye, and in [[Ophthalmology]] is shorthand for macula lutea, the yellowish, oval central retinal region with the highest visual acuity. 
>
>|Term|Breakdown|Meaning|
|---|---|---|
|Allograft|[[allo‑]] “**other**” + graft|The actual organ/tissue transplanted between genetically different individuals of same species.[wikipedia+1](https://en.wikipedia.org/wiki/Allotransplantation)|
|Allotransplant|[[allo‑]] + transplant|The graft or the act of transplanting between such individuals (verb or noun).[yourdictionary+1](https://www.yourdictionary.com/allotransplant)|
|Autotransplantation|[[auto‑]] “**self**” + transplantation|Transplant from one site to another in the same individual ([[autograft]]).[wikipedia+1](https://en.wikipedia.org/wiki/Allotransplantation)|
|Isograft/syngeneic transplant|[[iso‑]] “**equal**” + graft|Graft between genetically identical individuals (e.g., identical twins).[wikipedia+1](https://en.wikipedia.org/wiki/Allotransplantation)|
|Xenotransplantation|[[xeno‑]] “**foreign**” + transplantation|Transplant of cells/tissues/organs between different species (e.g., pig to human).[wikipedia+1](https://en.wikipedia.org/wiki/Allotransplantation)|
|Alloimmunity / allogeneic|[[allo‑]] + immunity / [[‑genic]]|Immune responses directed against antigens from a genetically different member of the same species, as in graft rejection.[nature+1](https://www.nature.com/subjects/allograft)|
_____
>[!info]+ ETYMOLOGY of [[macular]]
>#latin “[[macular]]” is formed from Latin _[[macula]]_ meaning “**spot, stain**” plus the adjectival suffix _[[‑ar]]_ “**pertaining to.**” The base noun _[[macula]]_ has been used in English since about the 15th century for spots or blotches, especially on the skin or eye. In ophthalmic usage, _macula lutea_ (“*yellow spot*”) appears in the 19th century for the central retinal area opposite the pupil where vision is most distinct. The adjective “[[macular]]” is attested by the early 1800s in the sense “**spotted**,” and by the late 1800s specifically as “pertaining to the macula lutea of the eye.”[pmc.ncbi.nlm.nih+2](https://pmc.ncbi.nlm.nih.gov/articles/PMC4177979/)
_____
>[!tip]+ DERIVATIONS of [[macular]]]]
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