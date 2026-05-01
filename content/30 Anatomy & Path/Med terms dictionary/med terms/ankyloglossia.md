---
tags:
  - medterm
  - medroot
  - otolaryngology
aliases:
  - ankylochilia
  - Tongue-tie
roots:
  - ankyloglossia
  - ankyl-
  - -ia
  - -glossia
forms:
  - prefix
  - suffix
  - noun
alphabet: A
definition: tongue-tie, a restrictive lingual frenulum
---
>[!Note] DEFINITION of [[ankyloglossia]]
>[[Ankyloglossia]] is a **developmental condition present at birth in which the lingual frenulum**—the **membrane connecting the underside of the tongue to the floor of the mouth**—is unusually **short, tight, or thick**. This tethering can vary from a thin mucous membrane band to a **total fusion of the tongue to the mouth floor**, often resulting in a heart-shaped appearance when the patient attempts to protrude the tongue. Clinical complications include breastfeeding difficulties in infants (*e.g., poor latch or maternal nipple pain*) and potential speech impediments or mechanical issues like difficulty licking the lips in older children.
_____
>[!info]+ ETYMOLOGY of [[ankyloglossia]]
>#greek The term is derived from two Ancient Greek roots that describe the physical "tethering" of the organ:
>-[[Ankylo-]]: From the Greek ankýlos, meaning "*bent*," "*crooked*," or "*loop*," and in medical contexts, "*stiff*" or "*fused*".
>[[-glossia]]: From the Greek *glōssa*, meaning "*tongue*".
>**Suffix**: The suffix [[-ia]] denotes a medical condition or state.
_____

> [!example]+ **Related Terms and Coding**
> For professional medical coding, the following diagnostic and procedural codes are standard for documenting [[ankyloglossia]]:
>
>
> |Term/Code|Context|Description|
> |---|---|---|
> |**[[Q38.1]]**|ICD-10-CM|The primary diagnostic code for [[ankyloglossia]] (*tongue-tie*), categorized under congenital malformations |
> |**[[41010]]**|CPT Code|**[[Frenotomy]]**: Incision of the [[lingual frenulum]] (usually for infants) .|
> |**[[Lingual Frenulum]]**|Anatomy|The vertical fold of mucous membrane that connects the tongue to the floor of the mouth |
> |**[[Frenuloplasty]]**|Procedure|Surgical repair or repositioning of the frenulum to increase mobility.|
>> 
> - **[[Macroglossia]]**: An abnormally large tongue, often associated with specific syndromes (ICD-10-CM **[[Q38.2]]**).​
>     
> - **Microglossia**: An abnormally small tongue (ICD-10-CM **[[Q38.3]]**).​
>     
> - **Bifid Tongue**: A cleft or "***forked***" tongue due to incomplete fusion during development.
>
____
>[!tip]- DERIVATIONS of [[ankyloglossia]]
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
>WHERE length(filter(definition, (word) => econtains([[ankyloglossia]].definition, word))) > 0 AND file.name != [[ankyloglossia]].file.name
>```
____

[[Med roots]]
[[Appendix A Prefixes]]
[[Appendix B Combining Forms]]
[[Appendix C Suffixes]]
[[Appendix D Suffix forms]]