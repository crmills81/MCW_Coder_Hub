---
tags:
  - medterm
aliases:
roots:
  - Vitreous hemorrhage
  - vi- -eous
  - -ous
forms:
  - prefix
  - suffix
  - combining
  - noun
alphabet: V
definition:
  - the leakage of blood into the vitreous humor
---

<br>

>[!Note] DEFINITION of [[vitreous hemorrhage]]
>[[vitreous hemorrhage]] occurs when **blood leaks into the vitreous body, which accounts for approximately two-thirds of the eye's volume**. The blood can be located within the gel itself, in the [[retro-hyaloid space]] (**sub-hyaloid**), or in the Canal of Cloquet.
_____
>[!info]+ ETYMOLOGY of [[vitreous hemorrhage]]
>#latin 
>- **[[Vitreous]]**: Derived from the Latin _vitreus_, meaning "**glassy**" or "**transparent**," from the root _vitrum_ ("glass"). This refers to the clear, gel-like consistency of the healthy **vitreous humor.**
>- **Hemorrhage**: Derived from the Greek _haimorrhagia_.
>	- _Haima_: "**Blood**"
>	- _Rhegnunai_: "**To break**" or "**burst**"
>	- Combined, it literally means a "**bursting forth of blood**".
_____
>[!tip]+ DERIVATIONS of [[vitreous hemorrhage]]
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

## Related Clinical Terms

|Term|Definition|
|---|---|
|**[[Posterior Vitreous Detachment (PVD)]]**|Separation of the [[vitreous gel]] from the [[retina]]; a common mechanical cause of VH [](https://www.ncbi.nlm.nih.gov/books/NBK559131/)​.|
|**[[Neovascularization]]**|Growth of new, fragile blood vessels (often due to diabetes) that are prone to leaking into the vitreous [](https://eyewiki.org/Vitreous_Hemorrhage)​.|
|**[[Terson Syndrome]]**|[[vitreous hemorrhage]] occurring in association with a [[subarachnoid]] hemorrhage (intracranial bleed) [](https://pmc.ncbi.nlm.nih.gov/articles/PMC10155538/)​.|
|**[[Ghost Cell Glaucoma]]**|A complication where degenerated red blood cells (rigid "[[ghost cells]]") block the trabecular meshwork, raising intraocular pressure [](https://pmc.ncbi.nlm.nih.gov/articles/PMC10155538/)​.|
|**[[Pars Plana Vitrectomy (PPV)]]**|The surgical procedure to remove the vitreous humor and blood; often required if the blood does not clear spontaneously [](https://eyewiki.org/Vitreous_Hemorrhage)​.|

<br>

## Coder's Corner: ICD-10-CM & CPT

**ICD-10-CM Codes (Category [[H43.11]] - Vitreous Hemorrhage)**[](https://www.outsourcestrategies.com/blog/coding-for-diabetic-retinopathy/)

- **[[H43.11]]**: Vitreous hemorrhage, right eye
    
- **[[H43.12]]**: Vitreous hemorrhage, left eye
    
- **[[H43.13]]**: Vitreous hemorrhage, bilateral
    
- **[[H43.10]]**: Vitreous hemorrhage, unspecified eye
    

<br>

**Coding Tips:**

- **Excludes1 Notes:** Standard coding guidelines typically exclude traumatic [[vitreous hemorrhage]] from [[H43.11]], directing coders to injury codes (**S05.-**) if the bleed is due to current trauma.
    
- **Diabetes Hierarchy:** If the patient has [[Proliferative Diabetic Retinopathy (PDR)]] with VH, look to combination codes (e.g., **E11.35-**) rather than coding [[H43.11]] separately, unless specific payer rules apply.[](https://www.outsourcestrategies.com/blog/coding-for-diabetic-retinopathy/)​
    
- **Common Procedures (CPT):**
    
    - **[[67036]]**: Vitrectomy, mechanical, [[pars plana]] approach.
        
    - **[[76510]]**: Ophthalmic ultrasound, diagnostic; B-scan (often medically necessary to view the retina when hemorrhage obscures the fundus view).

<br>

[[Med roots]]
[[Appendix A Prefixes]]
[[Appendix B Combining Forms]]
[[Appendix C Suffixes]]
[[Appendix D Suffix forms]]