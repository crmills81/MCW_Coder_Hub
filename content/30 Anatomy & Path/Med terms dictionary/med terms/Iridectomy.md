---
tags:
  - medterm
  - ophthalmology
  - surgery
aliases:
  - surgical iridectomy
  - corectomy
roots:
  - irid-
  - -ectomy
  - ir-
  - tom-
forms:
  - noun
  - prefixes
  - suffixes
  - combining
alphabet: I
definition:
  - Surgical removal of part of the iris
---

>[!Note] DEFINITION of [[Iridectomy]]
>An **iridectomy** (also known as *corectomy*) is **a surgical procedure involving the removal of a specific piece of iris tissue**. It is most commonly performed to treat **[[closed-angle glaucoma]]** by creating a new pathway for aqueous humor to drain from the posterior to the **anterior chamber**, thereby relieving **intraocular pressure**. The procedure can be classified by the amount of tissue removed: 
>- **[[Peripheral Iridectomy]]:** Removal of a small portion of the iris root, often used for glaucoma (standard or laser). 
>- **Sector (Complete) Iridectomy:** Removal of a radial section extending from the pupil margin to the root, leaving a "**keyhole**" pupil [web:24]. 
>- **Optical (Stenopeic) Iridectomy:** Creation of an artificial pupil to improve vision when the natural pupil is obstructed
_____
>[!info]+ ETYMOLOGY of [[Iridectomy]]
>#greek *iris* + *ektomē* The term is a compound of two primary Greek roots: * **[[irid-]]**: Derived from the Greek *iris* (genitive *iridos*), meaning "**rainbow**" or "**halo**," referring to the colored circle of the eye. * **[[-ectomy]]**: Derived from the Greek *ektomē* ("excision"), which comes from *ek* ("**out**") + *temnein* ("**to cut**")
_____
>[!tip]- DERIVATIONS of [[Iridectomy]]
>```dataview
>TABLE definition AS Definition
>FROM #medterm 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
>SORT file.name ASC
>```

---
>[!example] RELATED TERMS to [[Iridectomy]]
>| Term | Root Breakdown | Meaning |
| :---                | :---                                    | :---                                                  |
| **Iridotomy**       | *[[irid-]]* + *[[-tomy]]*               | Incision into the iris (often by laser) without tissue removal. |                                    
| **Iridoplasty**     | *[[irid-]]* + *[[-plasty]]*             | Surgical repair or restructuring of the iris.                   |                                    
| **Iridocyclitis**   | *[[irid-]]* + *[[cycl-]]* + *[[-itis]]* | Inflammation of the iris and [[ciliary]] body.                  |                                    
| **Corectomy**       | *[[cor-]]* (pupil) + *[[-ectomy]]*      | A synonym for iridectomy (removal of part of the iris/pupil).   |                                    
| **Aniridia**        | *[[an-]]* + *[[irid-]]* + *[[-ia]]*     | Congenital absence of the iris.                                 |                                    
| **Rubeosis Iridis** | *[[rube-]]* + *[[irid-]]*               | [[Neovascularization]] (new blood vessels) of the iris.          |

>[!Note] CODING NOTES (CPT & ICD-10)
>*For professional coding context:*
>*   **CPT [[66600]]**: Iridectomy, with [[corneoscleral]] or corneal section; for removal of lesion.
>*   **CPT [[66625]]**: Iridectomy... peripheral for [[glaucoma]] (separate procedure).
>*   **CPT [[66630]]**: Iridectomy... sector for glaucoma (separate procedure).
>*   **CPT [[66761]]**: [[iridotomy]]/[[Iridectomy]] by laser surgery (e.g., for glaucoma) (per session).
>*   **CPT [[00147]]**: Anesthesia for [[Iridectomy]]

[[Med roots]]
[[Appendix A Prefixes]]
[[Appendix B Combining Forms]]
[[Appendix C Suffixes]]
[[Appendix D Suffix forms]]
