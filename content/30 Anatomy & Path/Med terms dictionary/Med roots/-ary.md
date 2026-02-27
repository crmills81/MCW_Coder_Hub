---
tags:
  - medroot
  - medterm
aliases:
  - -ar
roots:
  - -ary
forms:
  - suffix
  - suffix form
  - adjective
"alphabet:": A
definition:
  - pertaining to
  - place for
---
>[!Note] DEFINITION of [[-ary]]
>The suffix **-ary** is a productive adjectival and nominal ending used extensively in medical terminology to form words that indicate a **relationship, connection, or association with the root word it modifies**. When attached to **anatomical structures**, **organs**, or **body systems**, it creates adjectives that describe something as belonging to, located in, or associated with that particular structure. In medical contexts, **-ary** typically transforms a noun into an adjective that denotes "**of or relating to**" the base term, allowing precise description of anatomical locations, physiological processes, or pathological conditions. The suffix is versatile and appears in words describing body parts (**pulmonary, urinary**), functional systems (**circulatory, alimentary**), and medical specialties (**tertiary care**). It can also form nouns when referring to places or things connected to the root concept (**apothecary, aviary**).
_____
>[!info]+ ETYMOLOGY of [[-ary]]
>#latin 
>- **Origin**: Latin suffix _-ārius_ (**masculine**), _-āria_ (**feminine**), _-ārium_ (**neuter**)
>- **Meaning**: The Latin forms indicated "**pertaining to**," "**connected with**," or "**a place for**"
>- **Evolution**: Entered English through Old French _[[-aire]]_ and directly from Latin, maintaining its associative function
>- **Linguistic pattern**: Part of the larger family of Latin _-[[arius]]_ derivatives that create relational adjectives and nouns
>
_____
>[!example]+ RELATED TERMS to [[-ary]]
>
|  [[-ary]]  |   pertaining to   | place for |         -          |      -       |
|:----------:|:-----------------:|:---------:|:------------------:|:------------:|
| [[-arium]] |         -         |    YES    |         -          |      -       |
|  [[-ar]]   |        YES        |     -     |     located in     |      -       |
|  [[-an]]   |        YES        |     -     |     located in     |      -       |
|  [[-al]]   |        YES        |     -     |     located in     |      -       |
|  [[-ac]]   |        YES        |     -     |     located in     |      -       |
|  [[-eal]]  |        YES        |     -     |     located in     |      -       |
|  [[-ean]]  |        YES        |     -     |     located in     |      -       |
| [[-etic]]  |        YES        |     -     |         -          |      -       |
|  [[-ic]]   |        YES        |     -     |        drug        |    agent     |
|  [[-id]]   |        YES        |     -     |   condition (of)   |  state (of)  |
|  [[-ile]]  |        YES        |     -     | capable of (being) |     like     |
|  [[-ine]]  |        YES        |     -     |     located in     |      -       |
| [[-itic]]  | (to inflammation) |     -     |        drug        |    agent     |
|  [[-ive]]  |        YES        |     -     |         -          |      -       |
| [[-orium]] |         -         |    YES    |         -          |      -       |
|  [[-ory]]  |         -         |    YES    |         -          |      -       |
| [[-otic]]  |        YES        |     -     |         -          |      -       |
|  [[-ous]]  |        YES        |     -     |  characterized by  |   full of    |
|  [[-tic]]  |        YES        |     -     |        drug        | agent/person |
>
_____

> [!abstract]+ Related Suffixes with Similar Functions:
> - **-al**: "Pertaining to" (renal, neural, spinal)
> - **-ic**: "Pertaining to" (gastric, hepatic, optic - relevant to ophthalmology)
> - **-ous**: "Pertaining to" or "full of" (venous, mucous)
> - **-ine**: "Pertaining to" (uterine, intestine)
> - **-ory**: "Pertaining to" or "place for" (auditory - relevant to otolaryngology, sensory)
>
_____

> [!warning]+ Specialty-Specific Examples for Your Coding Work:
> **Urology:**
> 
> - [[Urinary]] (**system, tract, bladder**)
> - [[Vesicary]] (**pertaining to the bladder, though less common than "vesical"**)
> - [[Glomerulary]] (**pertaining to kidney glomeruli, though "glomerular" is more common**)
> 
> **Ophthalmology:**
> 
> - **Ciliary** (**body, muscle**)
> - Lacrimary/[[Lacrimal]] (**gland, duct**)
> - [[Ocular]] (**using** [[-ar]] **variant**)
> 
> **Otolaryngology:**
> 
> - [[Salivary]] (**glands - parotid, [[submandibular]], [[sublingual]]**)
> - [[Capillary]] (**as in capillary [[hemangiomas]] of the head and neck**)
> - [[Ancillary]] (**procedures often coded alongside primary ENT procedures**)
>

_____
>[!tip]- DERIVATIONS of [[-ary]]
>```dataview
>TABLE definition AS Definition 
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