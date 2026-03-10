---
tags:
  - medterm
  - medroot
  - ophthalmology
aliases:
  - pingueculae
  - pterygium
  - conjunctival degeneration
roots:
  - pinguecula
  - pin-
  - -cula
forms:
  - prefix
  - suffix
  - combined
  - noun
alphabet: P
definition:
  - benign, yellowish-white, slightly raised deposit on the bulbar conjunctiva
---
>[!Note] DEFINITION of [[pinguecula]]
>A **pinguecula** is a **common degenerative condition of the [[conjunctiva]] in which collagen fibers undergo elastotic degeneration, accumulating as a yellowish-white or gray, slightly elevated plaque on the bulbar conjunctiva — most often on the nasal side, between the eyelid margins**. It does **not** invade or grow over the cornea (**which distinguishes it from a [[pterygium]]**). Histologically, it shows [[subepithelial]] hyalinization and basophilic degeneration of connective tissue, often with calcium or lipid deposits. It is strongly associated with chronic UV exposure, dry environments, wind, and dust. It is generally asymptomatic but can become inflamed (**pingueculitis**), causing redness, irritation, and a foreign-body sensation. Surgical excision is rarely required and reserved for persistent inflammation, cosmetic concerns, or contact lens interference.
_____
>[!info]+ ETYMOLOGY of [[pinguecula]]
>#latin - **Origin:** Latin
>- **Root Word:** _pinguis_ = "**fat**" or "**grease**"
>- **Suffix:** _[[-cula]]_ = diminutive suffix (meaning "**small**")
>- **Literal Meaning:** "**Little fat**" or "**small greasy thing**" — referring to the shiny yellow, greasy appearance of the lesion
>- **Latin Etymons:** _pinguicula, pinguiculus_
>
_____
> [!danger]+ **ICD-10-CM CODES** (Full 7 Characters)
> 
> |Code|Description|Billable|
> |---|---|---|
> |**H11.151**|Pinguecula, right eye|✅ Yes |
> |**H11.152**|Pinguecula, left eye|✅ Yes |
> |**H11.153**|Pinguecula, bilateral|✅ Yes |
> |**H11.159**|Pinguecula, unspecified eye|✅ Yes |
> |**H11.15**|Pinguecula (parent code)|❌ No – requires more specificity|
>
>**Category:** H11 – Other disorders of [[conjunctiva]]  
>**Chapter:** H00-H59 – Diseases of the eye and adnexa
>
>✅ All four codes are valid for HIPAA transactions. These codes fall under category **H11.15** (**Diseases of conjunctiva**). Note: If [[pingueculitis]] (**inflamed pinguecula**) is the reason for the encounter, these same codes apply — there is no separate ICD-10-CM code for pingueculitis; laterality specificity should always be used when documented.
_____

> [!example]+ **CPT CODES and CLINICAL NOTES**
> 
> |Code|Description|
> |---|---|
> |**[[68110]]**|Excision of [[pinguecula]] (smaller lesions) |
> |**[[68115]]**|Excision of pinguecula with [[conjunctival]] graft (larger lesions) |
> | **[[68130]]** | Excision of lesion, conjunctiva; with adjacent sclera |
> 
> _**Note**: Code selection depends on lesion size and whether a conjunctival graft is performed_
> 
> ---
> 
> ## **CLINICAL NOTES**
> 
> - **Benign condition** – non-cancerous
>     
> - **Common** – frequently seen in general population
>     
> - **Appearance** – slightly elevated, elastic tissue deposit in the conjunctiva
>     
> - **Does NOT cover the cornea** – distinguishes it from pterygium
>     
> - **ICD-9 Historical Code:** 372.51

_____
>[!tip]- DERIVATIONS of [[pinguecula]]
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