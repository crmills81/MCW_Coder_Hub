---
tags:
  - medterm
  - medroot
  - ophthalmology
aliases:
  - episcleritis
  - Episcleritis periodica fugax
roots:
  - Episcleritis
  - epi-
  - -scleritis
  - -itis
  - -is
forms:
  - prefix
  - suffix
  - combining
  - diminutive
alphabet: E
definition:
  - Inflammation of the episclera
---
>[!Note] DEFINITION of [[episcleritis]]
>**Episcleritis** is **a benign, usually idiopathic inflammatory condition affecting the episcleral tissue**, which is the superficial layer overlying the white of the eye (**sclera**). It manifests as sectoral or diffuse injection (**redness**) of the eye, often accompanied by **mild tenderness, irritation, and lacrimation**, but notably without significant visual disturbance or pain severe enough to suggest [[scleritis]]. It occurs in two primary clinical forms: simple (**diffuse**) and nodular. **A third variant, episcleritis periodica fugax, is a transient, recurrent form that resolves spontaneously within hours to days. While most cases are [[idiopathic]], episcleritis can be associated with systemic conditions such as rheumatoid arthritis, inflammatory bowel disease, [[gout]], rosacea, or — less commonly — [[tuberculosis]]**. It is differentiated from the more serious [[scleritis]] by the blanching of episcleral vessels with topical phenylephrine (**the "phenylephrine blanching test"**), the absence of deep boring pain, and its generally benign, self-resolving course. **Related / Differential Terms:** [[scleritis]], [[conjunctivitis]], [[uveitis]], [[keratitis]], [[pinguecula]], [[pterygium]]
_____
>[!info]+ ETYMOLOGY of [[episcleritis]]
>greek 
>
>|Component|Origin|Meaning|
|---|---|---|
|**[[Epi-]]**|Greek _ἐπί (epí)_|Upon / over|
|**Sclera**|Greek _σκληρός (sklērós)_|Hard|
|**[[-itis]]**|Greek _-ῖτις (-îtis)_|Inflammation|
>
>Literally: _"inflammation upon the hard [coat of the eye]"_
>
_____

> [!example]+ **CODING AND NUANCES**
> 
> **🏥 ICD-10-CM Codes**
> 
> **Primary Episcleritis (H15.1xx)**
> 
> |Code|Description|
> |---|---|
> |**[[H15.101]]**|Unspecified episcleritis, right eye|
> |**[[H15.102]]**|Unspecified episcleritis, left eye|
> |**[[H15.103]]**|Unspecified episcleritis, bilateral|
> |**[[H15.109]]**|Unspecified episcleritis, unspecified eye|
> |**[[H15.111]]**|Episcleritis periodica fugax, right eye|
> |**[[H15.112]]**|Episcleritis periodica fugax, left eye|
> |**[[H15.113]]**|Episcleritis periodica fugax, bilateral|
> |**[[H15.119]]**|Episcleritis periodica fugax, unspecified eye|
> |**[[H15.121]]**|Nodular episcleritis, right eye|
> |**[[H15.122]]**|Nodular episcleritis, left eye|
> |**[[H15.123]]**|Nodular episcleritis, bilateral|
> |**[[H15.129]]**|Nodular episcleritis, unspecified eye|
> 
> **Infectious Etiology**
> 
> |Code|Description|
> |---|---|
> |**[[A18.51]]**|Tuberculous episcleritis|
> 
> ⚠️ **Coding notes**
>  All H15.1xx codes are 7 characters and valid for HIPAA transactions. Laterality must be specified when documented. If associated with a systemic disease (**e.g., rheumatoid arthritis, IBD**), code the underlying condition additionally per etiology/manifestation convention.
>
> 
> 
>  **🔧 CPT Codes**
> 
> **Episcleritis** is treated medically (topical NSAIDs, corticosteroids, lubricants), so there are **no procedure-specific CPT codes** for episcleritis itself. Relevant CPT codes are for the associated **E&M and diagnostic services**:
> 
> |CPT Code|Description|
> |---|---|
> |**[[92002]]**|Ophthalmological services, new patient, intermediate|
> |**[[92004]]**|Ophthalmological services, new patient, comprehensive|
> |**[[92012]]**|Ophthalmological services, established patient, intermediate|
> |**[[92014]]**|Ophthalmological services, established patient, comprehensive|
> |**[[92250]]**|Fundus photography (if performed to r/o posterior involvement)|
> |**[[92285]]**|External ocular photography (anterior segment)|
> 

_____
>[!tip]- DERIVATIONS of [[episcleritis]]
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