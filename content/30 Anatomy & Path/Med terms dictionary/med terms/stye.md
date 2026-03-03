---
tags:
  - medterm
  - medroot
aliases:
  - hordeolum
  - eyelid abscess
  - hordeolum externum
roots:
  - stye
  - st-
  - -ty
  - -ye
forms:
  - prefix
  - suffix
  - noun
  - combining
alphabet: S
definition:
  - painful
  - red
  - pimple-like lump on the edge of the eyelid caused by an acute bacterial infection
---
>[!Note] DEFINITION of [[stye]]
>A stye (**medically known as a hordeolum**) is an acute, localized, **suppurative inflammation of the glands of Zeis** (**[[sebaceous]] glands associated with eyelash follicles**) or Moll (**sweat glands**), or occasionally the meibomian glands within the tarsal plate of the eyelid. It typically presents as a tender, erythematous nodule that may develop a central point of [[purulence]] (**pus**). **External [[Hordeolum]]**: Infection of the glands of Zeis or Moll at the eyelid margin; usually points outward toward the skin. **Internal Hordeolum**: Infection of the [[meibomian glands]] deeper within the eyelid; usually points inward toward the [[conjunctival]] surface and can be more painful. Most styes are caused by [[Staphylococcus]] aureus and often resolve spontaneously within a few days to a week with warm compresses, though some may require incision and drainage or antibiotic therapy.
_____
>[!info]+ ETYMOLOGY of [[stye]]
>#latin - **Stye:** Derived from Old English _stīgend_, meaning "**rising**" or "**swelling**," which traces back to the Proto-Germanic _stīgan_ (**to climb/rise**). It refers to the rising swelling on the lid.
>- **Hordeolum:** Derived from the Latin _hordeum_, meaning "**barley**." The term _hordeolum_ literally translates to "**barley corn**," used because the shape and size of the lesion resemble a grain of barley.
_____

> [!danger]+ **Related Terms**
> - **Chalazion:** A chronic, sterile, lipogranulomatous inflammation of a meibomian gland. Unlike a stye, it is usually painless, lasts longer, and is not primarily an acute bacterial infection (though a stye can evolve into a chalazion).
> - **Blepharitis:** Chronic inflammation of the eyelid margins, which is a common predisposing factor for developing styes.
> - **Meibomian Gland Dysfunction (MGD):** Blockage or abnormality of the oil glands, leading to styes or chalazia.
> - **Cellulitis (Preseptal/Orbital):** A more serious, spreading infection of the eyelid or eye socket that can sometimes originate from an untreated stye.
_____
> [!example]+ **CODING AND NUANCES**
> 
> **ICD-10-CM Codes** _Note: ICD-10 codes require specific laterality (**right, left, bilateral**) and sometimes the specific type (**external vs. internal**) for full specificity. Below are the base categories; in practice, a 7th character is added for encounter type (**A=Initial, D=Subsequent, S=Sequela**), but standard coding for the diagnosis itself usually stops at the 6th character for the specific location unless an encounter modifier is strictly required by the payer context. However, per your request for full specificity where applicable, here are the most precise diagnostic codes:_
> 
> - **[[H00.011]]**: Hordeolum externum right upper eyelid
> - **[[H00.012]]**: Hordeolum externum right lower eyelid
> - **[[H00.013]]**: Hordeolum externum right upper and lower eyelid
> - **[[H00.014]]**: Hordeolum externum left upper eyelid
> - **[[H00.015]]**: Hordeolum externum left lower eyelid
> - **[[H00.016]]**: Hordeolum externum left upper and lower eyelid
> - **[[H00.019]]**: Hordeolum externum unspecified eyelid
> - **[[H00.021]]**: Hordeolum internum right upper eyelid
> - **[[H00.022]]**: Hordeolum internum right lower eyelid
> - **[[H00.023]]**: Hordeolum internum right upper and lower eyelid
> - **[[H00.024]]**: Hordeolum internum left upper eyelid
> - **[[H00.025]]**: Hordeolum internum left lower eyelid
> - **[[H00.026]]**: Hordeolum internum left upper and lower eyelid
> - **[[H00.029]]**: Hordeolum internum unspecified eyelid
> 
> _(If the documentation does not specify internal/external or exact location, the unspecified code **H00.019** or **H00.029** is used. If laterality is unknown entirely, **H00.019** is generally preferred over the completely unspecified H00.01 without laterality digits, as modern ICD-10 mandates laterality)._
> 
> **CPT Codes** _CPT codes depend entirely on the treatment provided. There is no CPT code for the diagnosis alone._
> 
> - **No Procedure (Conservative Management):** If treated only with warm compresses or topical antibiotics prescribed in an office visit, use an **E/M Code** (e.g., **[[99202]]–[[99215]]** for Office/Outpatient visits) based on medical decision making or time.
> - **Incision and Drainage (Simple):** **[[10040]]** – Acne surgery (includes marsupialization, opening or removal of multiple **comedones**, **cysts**, **pustules**). _Note: Some coders use this for simple stye expression, though it is technically for acne._
> - **Incision and Drainage (Complex/Specific):** **[[10060]]** – Incision and drainage of abscess (e.g., [[carbuncle]], [[suppurative hidradenitis]], [[cutaneous]] or [[subcutaneous]] [[abscess]], [[cyst]], [[furuncle]], or [[paronychia]]); simple or single. **(Most commonly used for a single stye requiring I&D)**.
> - **Incision and Drainage (Complicated):** **[[10061]]** – Incision and drainage of abscess; complicated or multiple.
> - **Excision of Chalazion/Stye:** **[[17380]]** – Excision of chalazion; single. (Often used if the lesion is excised rather than just drained, or if it has become a chalazion).
> - **Excision Multiple:** **[[17381]]** – Excision of [[chalazion]]; multiple, same eyelid.

_____
>[!tip]- DERIVATIONS of [[stye]]
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

