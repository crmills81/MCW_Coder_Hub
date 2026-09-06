---
tags:
  - medroot
aliases:
  - -ulus
  - -ula
  - -ulum
roots:
  - -ule
  - -ulus
  - -ula
  - -ulum
forms:
  - suffix
  - diminutive
alphabet: U
definition: A diminutive suffix used to denote a small version of a structure, organ, or entity.
---

>[!Note] DEFINITION of [[-ule]]
>**[[-ule]]** (**and its variants [[-ulus]], [[-ula]], [[-ulum]]**) is a Latin diminutive suffix meaning "**small**." In medical terminology, it is used to distinguish a smaller anatomical structure from its larger counterpart, such as an **[[arteriole]] (small artery)** or a **[[venule]] (small vein)**. Unlike the Greek root **[[micr-]]**, which often implies microscopic or abnormally small size, **[[-ule]]** typically describes a functional, smaller version of a known structure. This suffix is essential for precise anatomical mapping in pathology and surgical coding to specify the exact vessel or chamber involved. It is most commonly confused with **[[-ole]]**, which is also a diminutive but often used in different linguistic lineages (e.g., *alveole*).

_____

>[!info]+ ETYMOLOGY of [[-ule]]
>#latin
>
>|Component|Origin|Meaning|
>|---|---|---|
>|**[[-ule]]** / **[[-ulus]]** / **[[-ula]]**|[Latin] _-ulus, -ula, -ulum_ ([ʊ.lʊs])|"**small**," "**little**" — Diminutive suffix used to indicate smaller size or endearment/insignificance.|
>
> The suffix entered English in the **14th-16th centuries** as a morphological marker for size, borrowed from Late Latin ***[[-ulus]]***. The root connects the term to the broader **-ROOT FAMILY** of anatomical diminutives: ***[[-cle]]*** (**small/entity**), ***[[-ole]]*** (**small/hole**), and ***[[micr-]]*** (**small/Greek origin**). The productivity of this suffix is extremely high in anatomy, appearing in terms such as ***[[ventricle]]***, ***[[capsule]]***, and ***[[nodule]]***.

_____

> [!success]+ 🔀 ALIASES / ALTERNATE TERMS
> 
> - **[[-ulus]]** _(masculine Latin form — used in terms like [[ventriculus]] / ventricle)_
> - **[[-ula]]** _(feminine Latin form — used in terms like [[capsula]] / capsule)_
> - **[[-ulum]]** _(neuter Latin form — used in terms like [[granulum]] / granule)_
> - **DIMINUTIVE** _(the linguistic function of the root; denotes a smaller version of the base word)_

_____

> [!danger]+ 🔗 RELATED TERMS
> 
> - **[[-megaly]]** — the opposite of **[[-ule]]**; denotes abnormal enlargement (e.g., *cardiomegaly* vs *ventricle*).
> - **[[-cle]]** — shares the "small" meaning; often used in biological entities (e.g., *muscle* from *musculus* "little mouse").
> - **[[micr-]]** — Greek equivalent of "small"; typically used for microscopic levels (e.g., *microscope*) whereas [[-ule]] is often macroscopic but small (e.g., *nodule*).
> - **[[-ole]]** — a closely related diminutive suffix; used in *arteriole* and *alveole*.
> - **NODE** — the base structure for [[nodule]]; a node is a point of intersection, while a nodule is a small, palpable lump.

_____

> [!example]+ CODING CORNER 
> 
> Because **[[-ule]]** is a root, coding guidelines apply to the derived terms. In 2026 **ICD-10-CM guidelines**, specificity regarding "**small**" vs "**large**" structures (e.g., *artery* vs *arteriole*) is critical for site-specificity.
> 
> ### 🏥 ICD-10-CM CODES (Root-Derived Terms)
> 
> #### Pulmonary Nodules (Nodule-derived)
> 
> |Code|Description|
> |---|---|
> |**[[R91.1]]**|Solitary pulmonary nodule|
> |**[[R91.8]]**|Other nonspecific abnormal findings of lung field (includes multiple nodules)|
> 
> #### Ventricular Issues (Ventricle-derived)
> 
> |Code|Description|
> |---|---|
> |**[[I50.9]]**|Heart failure, unspecified (often involving ventricular dysfunction)|
> |**[[I42.0]]**|Hypertrophic cardiomyopathy (affecting the ventricle)|
> 
> #### Vascular Diminutives (Arteriole/Venule)
> 
> |Code|Description|
> |---|---|
> |**[[I73.9]]**|Peripheral vascular disease, unspecified (often involves arteriole dysfunction)|
> 
> ---
> 
> ### 🔧 COMMON CPT CODES (Derived Procedures)
> 
> |CPT Code|Description|
> |---|---|
> |**[[31622]]**|Bronchoscopy with biopsy of a pulmonary **nodule**|
> |**[[93620]]**|Percutaneous transluminal coronary angioplasty (targeting small vessel/arteriole occlusion)|
> 
> ---
> 
> > ⚠️ **Coding Note:** When documenting structures using the [[-ule]] suffix, avoid using "**small**" as a descriptive adjective if a specific medical term exists (e.g., use "**arteriole**" instead of "**small artery**"). For 2026 inpatient profee claims, the distinction between a *nodule* (usually <3cm) and a *mass* (>3cm) is a primary trigger for different ICD-10 codes and surgical approach modifiers. Ensure documentation explicitly states "**nodule**" to support **[[R91.1]]**.

_____

>[!tip]- DERIVATIONS of [[-ule]]
>```dataview
>TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name !=[[]].file.name
>SORT file.name ASC
>```

_____

>[!faq]- Query functionality
>```dataview
>TABLE definition AS Definition
>FROM #medroot
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```

<br>

[[Med terms dictionary]]
[[Appendix A Prefixes]]
[[Appendix B Combining Forms]]
[[Appendix C Suffixes]]
[[Appendix D Suffix forms]]