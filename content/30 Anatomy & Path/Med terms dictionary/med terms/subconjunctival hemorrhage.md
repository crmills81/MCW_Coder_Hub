---
tags:
  - medterm
  - medroot
aliases:
  - hyposphagma
  - Subconjunctival bleeding
roots:
  - -al
  - sub-
  - conjunctiv-
  - -val
  - hem-
  - -rrhage
forms:
  - prefix
  - suffix
  - combining
  - noun
alphabet: S
definition:
  - bleeding into the space between the conjunctiva and the sclera
---

>[!Note] DEFINITION of [[subconjunctival hemorrhage]]
>A **subconjunctival hemorrhage** occurs when **a small blood vessel ruptures beneath the conjunctiva — the thin, transparent membrane covering the sclera**. Because the [[conjunctiva]] cannot absorb blood quickly, it becomes trapped and visibly pools, creating a sharply demarcated red or reddish-brown discoloration on the surface of the eye. It is typically painless, does not affect vision, and usually resolves spontaneously within 1-3 weeks. It may occur spontaneously, after trauma, Valsalva maneuvers (**e.g., coughing, sneezing, straining**), or as a complication of ocular or systemic conditions.
_____
>[!info]+ ETYMOLOGY of [[subconjunctival hemorrhage]]
>#greek **Sub- Latin, Under, beneath [[conjunctiv-]]** Latin - conjunctivus; That which joins/connects (**the membrane that "joins" the eyelid to the [[globe]]) **[[-al]]** Latin suffixRelating to** [[hemo-]]** Greek  _haima_ Blood **[[-rrhage]] **Greek  _rhegnynai_ To burst forth
_____

> [!example] **CODING AND NUANCES**
> 🏥 **ICD-10-CM Codes**
> 
> > These codes are 5 characters — ICD-10-CM codes do **not** always require 7 characters; 7th characters are only applicable when the code structure demands it (**e.g., fractures, injuries**). H11.3x codes are complete at 5 characters.
> 
> |Code|Description|HIPAA Valid|
> |---|---|---|
> |**[[H11.30]]**|Conjunctival hemorrhage, unspecified eye|✅|
> |**[[H11.31]]**|Conjunctival hemorrhage, right eye|✅|
> |**[[H11.32]]**|Conjunctival hemorrhage, left eye|✅|
> |**[[H11.33]]**|Conjunctival hemorrhage, bilateral|✅|
> 
> > ⚠️ **H11.3** (**without the 5th character**) is the category header — **not valid** for HIPAA transactions. Always code to the highest level of specificity (laterality).
> 
> ---
> 
> 🔗 Related ICD-10-CM Codes
> 
> |Code|Description|When to Consider|
> |---|---|---|
> |**[[H59.311]]**|Postprocedural hemorrhage of right eye/adnexa following ophthalmic procedure|Post-op eye surgery complication|
> |**[[H59.312]]**|Postprocedural hemorrhage of left eye/adnexa following ophthalmic procedure|Post-op eye surgery complication|
> |**[[H59.321]]**|Postprocedural hemorrhage of right eye/adnexa following other procedure|Post-non-ophthalmic procedure|
> |**[[H59.322]]**|Postprocedural hemorrhage of left eye/adnexa following other procedure|Post-non-ophthalmic procedure|
> |**[[H43.11]]**|[[Vitreous]] hemorrhage, right eye|Deeper hemorrhage, more serious|
> |**[[H43.12]]**|[[Vitreous hemorrhage]], left eye|Deeper hemorrhage, more serious|
> |**[[H35.61]]**|[[Retinal]] hemorrhage, right eye|Deeper hemorrhage, more serious|
> |**[[S05.10XA]]/D/S**|Contusion of eyeball/orbital tissues|If traumatic in origin|
> 
> ---
> 
> 🔧 **Related CPT Codes**
> 
> > **Subconjunctival hemorrhage** is almost exclusively managed conservatively (**observation**), so procedural coding is rare. Related CPTs would apply to **underlying cause workup or associated procedures**:
> 
> |CPT|Description|Notes|
> |---|---|---|
> |**[[92002]]**|Ophthalmological services, new patient, intermediate|E&M for evaluation|
> |**[[92012]]**|Ophthalmological services, established patient, intermediate|E&M for follow-up|
> |**[[92014]]**|Ophthalmological services, established patient, comprehensive|Full eye exam|
> |**[[92250]]**|Fundus photography|If retinal pathology suspected|
> |**[[92004]]**|Ophthalmological services, new patient, comprehensive|New pt full exam|
> |**[[65205]]**|Removal of foreign body, conjunctival, superficial|If traumatic etiology with FB|


_____
>[!tip]- DERIVATIONS of [[subconjunctival hemorrhage]]
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

---

> [!success]+ 💡 **INPATIENT CODING TIPS**
> - **Query for laterality** — unspecified eye ([[H11.30]]) should be a last resort.
> - If the [[hemorrhage]] is a **complication of an inpatient procedure**, use the **H59.3xx** series instead of H11.3x, and sequence appropriately per **POA** guidelines.
> - A **subconjunctival hemorrhage** found **incidentally** during admission for another condition should be coded as an **additional diagnosis** only if it receives clinical evaluation or treatment per **UHDDS** guidelines.
> - If associated with **hypertension, bleeding disorder, or anticoagulation**, code those conditions as well — they support medical necessity.


[[Med roots]]
[[Appendix A Prefixes]]
[[Appendix B Combining Forms]]
[[Appendix C Suffixes]]
[[Appendix D Suffix forms]]