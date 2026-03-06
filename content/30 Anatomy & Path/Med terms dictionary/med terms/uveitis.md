---
tags:
  - medterm
  - medroot
  - urology
  - specialty/urology
aliases:
roots:
  - Uveitis
  - uv-
  - -itis
  - -tis
  - -is
forms:
  - prefix
  - suffix
  - combining
  - noun
alphabet: U
definition:
  - inflammation of the uvea
---
>[!Note] DEFINITION of [[uveitis]]
>[[uveitis]] is inflammation of the [[uvea]]—**the middle vascular layer of the eye (iris, ciliary body, choroid)—threatening vision if untreated**. **Uveitis** encompasses [[intraocular]] inflammation primarily affecting the uvea (**iris/ciliary anteriorly, vitreous/pars plana intermediately, choroid/retina posteriorly, or all layers in panuveitis**), presenting acutely (hours-weeks) or chronically (>3 months) with cells/flare in anterior chamber/[[vitreous]], [[synechiae]], cystoid [[macular edema]] (CME), or retinal [[vasculitis]]; idiopathic (~50%) or associated with **HLA-B27** spondyloarthropathies, **JIA**, [[sarcoidosis]], infections (**HSV, TB**, [[toxoplasmosis]]), or **masquerade syndromes** ([[lymphoma]]).
_____
>[!info]+ ETYMOLOGY of [[uveitis]]
>#latin
>•	**Uvea**: Medieval Latin uva = “**grape**” (*resemblance of pigmented [[choroid]] to grape skin*).
>	•	[[-itis]]: Greek = “**inflammation**.”
>	•	**Literal**: “*Grape inflammation*” (coined 19th century)
_____
>[!tip]- DERIVATIONS of [[uveitis]]
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


## Coding Context

**ICD-10-CM:**[10]
| Code      | Description                                      |
|-----------|--------------------------------------------------|
| **[[H20.9]]** | Unspecified [[Iridocyclitis]] ([[anterior uveitis]]).   |
| **[[H30.9]]** | Unspecified uveitis ([[posterior]]).                |
| **[[H21.9]]** | Unspecified disorder of iris/[[ciliary body]].      |
| **[[H44.1]]** | [[Endophthalmitis]] (infectious uveitis).           |

## Anatomic Classification

| Type                  | Primary Location                        | Key Signs/Symptoms                          |
|-----------------------|-----------------------------------------|---------------------------------------------|
| **Anterior ([[iritis]])**| Iris/ciliary body                      | Pain, redness, [[photophobia]], AC cells/flare, KP, [[synechiae]]. |
| **Intermediate**     | [[Vitreous]]/[[pars plana]]                    | Floaters, blurred vision, snowballs/snowbanks, CME. |
| **Posterior**        | [[Choroid]]/retina                         | Vision loss, [[scotomas]], [[chorioretinal]] lesions. |
| **Panuveitis**       | All uveal layers                       | Combined symptoms; severe vision threat. |

**SUN Grading:** Anterior chamber cell (0-4+), flare (0-4+).

## Causes and Associations

- **Idiopathic/non-granulomatous:** HLA-B27 (AS, [[psoriatic]]), **JIA**.]
- **[[Granulomatous]]:** [[Sarcoid]], **TB**, [[syphilis]].
- **Infectious:** [[Toxoplasma]], [[herpesviruses]], Lyme.
- **Systemic:** IBD, Behçet's, MS, malignancy (masquerade).

## Related Terms

- **[[Iridocyclitis]]:** Anterior uveitis synonym.  
- **[[Keratic Precipitates]] (KP):** Inflammatory [[corneal]] deposits.  
- **[[Synechiae]]:** Iris adhesions (posterior: lens; anterior: cornea).  
- **CME:** [[Cystoid macular edema]] (OCT diagnosis).  
- **Vasculitis:** [[Retinal]] vessel [[sheathing]] (intermediate/posterior).  

## Management and Complications

**Treatment:**  
- **Anterior:** Topical steroids (Pred Forte qid), cycloplegics (homatropine).
- **Posterior/non-infectious:** Periocular/systemic steroids, [[immunosuppressants]] (methotrexate, adalimumab).
- **Infectious:** Antimicrobials (acyclovir, ganciclovir).  

**Complications:** [[cataracts|cataract]], [[glaucoma]], band [[keratopathy]], **CME**, [[retinal detachment]], blindness (5-10%).

**Prognosis:** Acute anterior excellent; posterior/chronic vision-threatening.

**One-Sentence Summary**  
**Uveitis** ([[H20.9]]/[[H30.9]], Latin *[[uva-i]][[-tis]]* “**grape inflammation**”), affects iris/choroid/vitreous in anterior/intermediate/posterior/pan forms with pain/floaters/CME, managed via steroids/immunosuppressants for HLA-B27/sarcoid/infectious causes.



[[Med roots]]
[[Appendix A Prefixes]]
[[Appendix B Combining Forms]]
[[Appendix C Suffixes]]
[[Appendix D Suffix forms]]