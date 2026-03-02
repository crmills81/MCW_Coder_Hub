---
tags:
  - general
  - medterm
  - ophthalmology
  - medroot
aliases:
  - eyelid inflammation
roots:
  - blephar-
  - -itis
  - Blepharo-
  - -ritis
  - bleph-
forms:
  - noun
  - suffixes
  - prefixes
  - combining
"alphabet:": b
definition:
  - inflammation of the eyelid
  - (often) one side of the body
  - eyelid
---
>[!Note] DEFINITION of [[blepharitis]]
>**bleph·a·ri·tis /ˌblefəˈrīdəs/** - **[[blepharitis]]** is an **inflammation of the eyelids** in which they become red, irritated and itchy with dandruff-like scales that form on the eyelashes. It is a common eye disorder caused by either bacteria or a skin condition, such as dandruff of the scalp or rosacea. **Blepharitis** is a common, often chronic inflammatory process affecting the eyelids. It is clinically categorized into **[[anterior]]** (**affecting the base of the eyelashes**) and **[[posterior]]** (**associated with Meibomian gland dysfunction**). While rarely sight-threatening, it causes significant ocular discomfort and can lead to secondary changes like [[conjunctivitis]], hordeola ([[styes]]), or [[chalazia]]. The pathophysiology often involves bacterial colonization (**Staphylococcal**) or skin conditions such as [[seborrheic dermatitis]] and [[rosacea]].
_____
>[!info]+ ETYMOLOGY of [[blepharitis]]
>mid 19th century: from #Greek _blepharon_ ‘**eyelid**’ + [-itis]
>The term is derived from Ancient Greek:
>
>- **[[blephar-]] (βλέφαρον):** Root meaning "**eyelid**."
>    
>- **[[-itis]] (-ῖτις):** Suffix denoting "**inflammation**."
>    
>- **Literal Meaning:** "Inflammation of the eyelid."
>
_____
>[!example]+ RELATED TERMS to [[blepharitis]]
>[Demodicosis](https://eyewiki.org/Blepharitis#Demodicosis)
>[Dry Eye](https://eyewiki.org/Blepharitis#Dry_Eye)
>[[ptosis]]  **([[blepharoptosis]])**: Drooping of the eyelid
_____

> [!example]+ **Coding & Documentation Nuances**
> 
> - **ICD-10-CM Specificity:** Blepharitis requires high specificity in the **H01.0-** category. Coders must identify:
>     
>     - **Type:** Is it ulcerative (H01.01-), [[squamous]]/[[seborrheic]] (H01.02-), or unspecified?
>         
>     - **Laterality:** Codes are specific to the right eye, left eye, bilateral, or "unspecified eye."
>         
>     - **Eyelid Location:** Some sub-codes distinguish between the upper and lower eyelid.
>         
> - **Excludes1 Note:** Note that **blepharoconjunctivitis** (H10.5-) is an Excludes1 condition, meaning if both the lid and the conjunctiva are inflamed, the combined code must be used instead of coding blepharitis separately.
>     
> 
> ### Clinical Indicators
> 
> To support a diagnosis of blepharitis in an operative or encounter report, look for:
> 
> - **Physical Findings:** [[Erythema]] (**redness**) of the lid margins, "scurf" or "collarettes" (crusting) at the base of the lashes, or plugging of the Meibomian glands.
>     
> - **Patient Symptoms:** Foreign body sensation ("**grittiness**"), itching ([[pruritus]]), or burning of the eyes.
>     
> - **Diagnostic Tools:** Slit-lamp examination documentation is the standard for visualizing the lid margin architecture.
>     
> 
> ### Related Terms & Differentials
> 
> - **[[Blepharoptosis]]:** The drooping ([[prolapse]]) of the upper eyelid, usually due to nerve or muscle dysfunction; unlike blepharitis, it is not primarily inflammatory.
>     
> - **[[Hordeolum]]:** An acute focal infection ([[stye]]) of an eyelid gland; while blepharitis is a generalized inflammation of the margin.
>     
> - **[[chalazion]]:** A non-infectious granuloma of a Meibomian gland; often a chronic sequela of posterior blepharitis.
>     
> - **[[Blepharoconjunctivitis]]:** Inflammation involving both the eyelid margins and the bulbar or palpebral conjunctiva.
>     
> - **[[Entropion]]/[[Ectropion]]:** Malposition of the eyelid (turning inward or outward, respectively) which can be caused by chronic scarring from long-term [[blepharitis]].


_____
>[!tip]- DERIVATIONS of [[blepharitis]]
>```dataview
>TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name !=[[]].file.name
>SORT file.name ASC
>```
___
>[!faq]- Query
>```dataview
>TABLE definition AS Definition
>FROM #medroot
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```

[[Med roots]]
[[Appendix A Prefixes]]
[[Appendix B Combining Forms]]
[[Appendix C Suffixes]]
[[Appendix D Suffix forms]]