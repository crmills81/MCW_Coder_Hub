---
tags:
  - medterm
  - medroot
aliases:
  - Meibomian cyst
  - stye
  - hordeolum
roots:
  - chalazion
  - cha-
  - -zion
  - -ion
  - -ala-
forms:
  - prefix
  - suffix
  - combining
  - diminutive
alphabet: C
definition:
  - a localized usually painless lump in the eyelid caused by blockage and chronic inflammation of a meibomian (oil) gland
---
>[!Note] DEFINITION of [[chalazion]]
>A **chalazion** is a **non‑neoplastic, slowly enlarging, circumscribed eyelid nodule that results from obstruction of a [[meibomian]] gland duct with retention of secretions and secondary chronic [[granulomatous]] inflammation in the tarsal plate**.  It typically begins as a tender, [[erythematous]] swelling of the upper (**more common**) or lower lid, then evolves into a painless, firm “*pea‑like*” [[subcutaneous]] lump that may induce [[astigmatism]] or blurred vision if large enough to press on the globe.  Clinically it is considered an eyelid cyst rather than an infectious process, though it may follow or be confused with a [[hordeolum]] ([[stye]]) and can become secondarily infected.
_____
>[!info]+ ETYMOLOGY of [[chalazion]]
>#greek The term “**chalazion**” is the Latinized form of the Greek word _khalazion_, a diminutive of _khalaza_, meaning “**hail, hailstone; small lump or knot; pimple**,” referring to the small, hard lump‑like feel in the eyelid.​  
The word has been in medical use in English since the early 1700s, and is related to “**chalaza**” and “**chalazal**” (**terms used in other biological contexts but sharing the same root idea of a small knot or lump**). 
Modern dictionaries trace the origin as “1700–10; < Greek, diminutive of _chálaza_ ‘**chalaza**’.”​
_____
> [!example]+ **<u>ICD‑10‑CM codes:</u>**
> **Base category (non‑billable for specificity):**
> 
> - H00.1 Chalazion.
>     
> 
> **Billable, site‑specific codes:**
> 
> - [[H00.11]] Chalazion, right upper eyelid.
>     
> - [[H00.12]] Chalazion, right lower eyelid.
>     
> - [[H00.13]] Chalazion, right eye, unspecified eyelid.
>     
> - [[H00.14]] Chalazion, left upper eyelid.
>     
> - [[H00.15]]] Chalazion, left lower eyelid.
>     
> - [[H00.16]] Chalazion, left eye, unspecified eyelid.
>     
> - [[H00.19]] Chalazion, unspecified eye, unspecified eyelid.[](https://icdlist.com/icd-10/H00.1)​
>     
> 
> (ICD‑10 note: Meibomian (**gland**) cyst is indexed to H00.1 “**Chalazion**,” with an Excludes2 note for infected meibomian gland at H00.02‑.)​
> 
> **CPT/procedure‑related notes (common ophthalmic context)**  
> No unique CPT code exists that is named “chalazion” itself; instead, chalazion treatment is typically coded with the chalazion‑specific minor procedure codes when [[excision]]/[[incision]] and curettage is performed.  
> Look up current CPT under “Excision, [[chalazion]]; single/multiple, same lid/different lids” in the lesion‑removal section for exact code numbers, and apply appropriate eyelid and bilateral modifiers per payer rules (**since code sets and descriptions are periodically updated, always verify against the current year’s CPT manual or encoder**).

_____
>[!tip]- DERIVATIONS of [[chalazion]]
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