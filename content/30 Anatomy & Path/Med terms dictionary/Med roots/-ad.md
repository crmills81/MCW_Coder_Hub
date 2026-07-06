---
tags:
  - medroot
aliases:
  - -ads
  - -ally
  - ad-
roots:
  - -ad
  - -ads
  - ad-
forms:
  - suffix
  - suffixes
alphabet: A
definition:
  - indicates direction toward a part of the body
  - toward
---
>[!Note] DEFINITION of [[30 Anatomy & Path/Med terms dictionary/Med roots/-ad]]
>**Forms adverbs**: indicates direction toward a part of the body, toward; The suffix **-ad** means "**toward**," "**in the direction of,**" or "**near to**" a specified anatomical structure or region. It is a directional/positional suffix used to construct adverbs and adjectives that describe movement toward or proximity to a particular anatomical landmark. It is most commonly encountered in **anatomical terminology to indicate spatial orientation or direction of movement relative to a body part, plane, or structure**. Unlike purely adjectival suffixes (such as **[[-al]]** or [[-ac]]), **[[30 Anatomy & Path/Med terms dictionary/Med roots/-ad]]** often functions adverbially — meaning it describes _direction of movement_ rather than simply _association_ with a structure.
>
In gross anatomy and surgical operative reporting, **-ad** constructions help precisely describe the trajectory of [[dissection]], the location of pathology, or the orientation of anatomical structures relative to one another. This has direct relevance in operative **note documentation and inpatient coding**, where anatomical precision in the health record supports accurate ICD-10-PCS root operation and body part selection.
>
**For example**, in otolaryngology, terms like _cephalad_ (**toward the head**) and _caudad_ (**toward the tail/feet**) are routine in operative reports describing the superior or inferior extent of dissection. In ophthalmology, directional terms built with **-ad** may describe movement toward specific ocular structures. In urology, these terms orient the coder to the surgical field when selecting body part values in ICD-10-PCS.

_____
>[!info]+ ETYMOLOGY of -ad
>#latin From **Latin** _ad_ — a preposition and prefix meaning "**to**," "**toward**," "**near**," or "**at**." One of the most productive prepositions in Latin, used extensively in the formation of both classical Latin and modern medical/anatomical terminology. The same Latin root underlies the prefix **ad-** (which assimilates to _[[ac-]]_, _[[af-]]_, _[[ag-]]_, _[[al-]]_, _[[an-]]_, _[[ap-]]_, _[[ar-]]_, _[[as-]]_, _[[at-]]_ depending on the following consonant). As a suffix in anatomical adverbs, **-ad** was systematized in modern **anatomical nomenclature** to produce consistent directional descriptors.
_____
>[!example]+ RELATED TERMS to [[30 Anatomy & Path/Med terms dictionary/Med roots/-ad]]
>
>- **[[Cephalad]]** — toward the head (**superior direction; common in ENT/head and neck operative notes**)
>- **Caudad** — toward the tail or feet (**inferior direction**)
>- **Cephalocaudad** — in the direction from head to tail
>- **Mesiad** — toward the midline
>- **[[Ectad]]** — toward the outside/superficial surface
>- **Entad** — toward the inside/deeper structures
>- **Dextrad** — toward the right
>- **Sinistrad** — toward the left
>- **[[Dorsad]]** — toward the back/posterior
>- **Ventrad** — toward the front/anterior
>- **[[Ad-]]** — the prefix counterpart, meaning "toward" (**e.g., _adrenal_ — toward/near the kidney; _adnexa_ — structures toward/near a main organ**)
>- **[[-al]]** — adjectival suffix that often pairs with these roots (**e.g., _cephalal_, _caudal_**)
>- **[[Afferent]]** — carrying toward (**from _ad-_ + _ferre_, to carry**); relevant in neural and vascular contexts
>- **[[Adnexa]]** — accessory structures situated near a main organ ([[ophthalmology]]: ocular [[adnexa]]; urology: adnexal structures)
>- **[[Adrenal]]** — situated toward/near the kidney (**directly relevant in urology**)
>

_____
>[!tip]- DERIVATIONS of [[30 Anatomy & Path/Med terms dictionary/Med roots/-ad]]
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