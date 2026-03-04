---
tags:
  - medterm
  - medroot
aliases:
  - chalazia
  - meibomian cyst
  - meibomian gland cyst
roots:
  - chalazion
  - cha-
  - -zion
  - -ion
forms:
  - prefix
  - suffix
  - combining
alphabet: C
definition:
  - chronic sterile granulomatous cyst of the eyelid caused by obstruction of a meibomian (tarsal) gland
---
>[!Note] DEFINITION of chalazion
>**Chalazion** form when the [[meibomian glands]] — [[sebaceous]] glands embedded in the tarsal plates of the eyelid that secrete the oily layer of the tear film — become blocked. The retained secretions leak into surrounding tissue, triggering a localized, non-infectious [[lipogranulomatous]] inflammatory response. The result is a slow-growing, firm, painless nodule within the eyelid. Unlike a [[hordeolum]] ([[stye]]), chalazia are typically not infectious, are not tender to [[palpation]] once mature, and are not accompanied by systemic symptoms. They may resolve spontaneously, or may require treatment including warm compresses, steroid injections, or [[incision and curettage (I&C)]]. Recurrent [[chalazion]] warrant biopsy to rule out [[sebaceous gland carcinoma]]. A **chalazion** is a non-infectious, inflammatory [[lipogranuloma]] arising from retained secretions of a blocked meibomian gland (**or occasionally a Zeis gland**) within the tarsal plate of the eyelid. Unlike a hordeolum ([[stye]]), it is not caused by acute infection. The obstruction leads to rupture of the gland, releasing lipid material into surrounding tissue and triggering a chronic foreign-body granulomatous reaction. It typically presents as a firm, painless, slow-growing nodule on the upper or lower eyelid. It may cause mechanical [[ptosis]] or astigmatism if large enough to press on the globe. Treatment ranges from warm compresses and lid massage, to steroid injection, to surgical **incision and curettage (I&C).**
_____
>[!info]+ ETYMOLOGY of chalazion
>#greek - From **Greek** _χάλαζα (chalaza)_ — meaning **"hailstone"** or "**small lump**"
>- Reflects the hard, round [[nodular]] appearance of the [[lesion]]
>- Plural: **chalazia** (Greek) or colloquially **chalazions** 
>- The term “**chalazion**” is the Latinized form of the Greek word _khalazion_, a diminutive of _khalaza_, meaning “**hail, hailstone; small lump or knot; pimple**,” referring to the small, hard lump‑like feel in the eyelid.​  
The word has been in medical use in English since the early 1700s, and is related to “**chalaza**” and “**chalazal**” (**terms used in other biological contexts but sharing the same root idea of a small knot or lump**).  
Modern dictionaries trace the origin as “1700-10; < Greek, diminutive of _chálaza_ ‘**chalaza**’.”​
_____
> [!example]+ **CODING AND NUANCES**
> **ICD-10-CM Codes**
> 
> |Code|Description|
> |---|---|
> |**[[H00.11]]**|Chalazion, right upper eyelid|
> |**[[H00.12]]**|Chalazion, right lower eyelid|
> |**[[H00.13]]**|Chalazion, right eye, unspecified eyelid|
> |**[[H00.14]]**|Chalazion, left upper eyelid|
> |**[[H00.15]]**|Chalazion, left lower eyelid|
> |**[[H00.16]]**|Chalazion, left eye, unspecified eyelid|
> |**[[H00.19]]**|Chalazion, unspecified eye, unspecified eyelid|
> 
>  ⚠️ **Note**: These codes are **5 characters** — ICD-10-CM does not extend them further. All are valid for HIPAA transactions. Always code to the highest level of specificity; query for laterality and eyelid position (**upper vs. lower**) whenever possible.
> 
> ---
> 
> **CPT Codes (Procedural)**
> 
> |CPT|Description|
> |---|---|
> |**[[67800]]**|Excision of chalazion; single|
> |**[[67801]]**|Excision of chalazion; multiple, same lid|
> |**[[67805]]**|Excision of chalazion; multiple, different lids|
> |**[[67808]]**|Excision of chalazion; under general anesthesia and/or requiring hospitalization, single or multiple|
> |**[[67700]]**|Blepharotomy, drainage of abscess, eyelid _(used for I&D rather than excision)_|
> 
> > **Coding Tips:**
> > 
> > - 67800-67808 are **unilateral codes** — use eyelid modifier ([[-E1]]-[[-E4]]) to specify the lid
> > - Bilateral single chalazia → **67800 with modifier -50**
> > - One from upper lid + one from lower lid, same eye → **67801**
> > - Different lids, different eyes → **67805**
> > - **[[67840]]** (**excision of eyelid lesion**) explicitly **excludes** [[chalazion]] — do not use for this diagnosis

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