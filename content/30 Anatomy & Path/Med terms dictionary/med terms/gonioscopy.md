---
tags:
  - medterm
  - medroot
  - ophthalmology
aliases:
  - Anterior chamber angle evaluation
roots:
  - Gonioscopy
  - gon-
  - go-
  - -scopy
forms:
  - prefix
  - suffix
  - diminutive
  - noun
alphabet: G
definition:
  - A diagnostic ophthalmic procedure using a mirrored contact lens (goniolens) and slit lamp to directly visualize the iridocorneal angle
---
>[!Note] DEFINITION of [[gonioscopy]]
>**Gonioscopy** is a specialized ophthalmic examination technique in which a [[gonioscope]] (**a goniolens coupled with a [[slit-lamp]] biomicroscope**) is placed on the anesthetized cornea to neutralize the total internal reflection that normally prevents direct visualization of the anterior chamber angle. The procedure allows the clinician to assess the trabecular meshwork, **Schlemm's canal**, the iris insertion, the [[ciliary body]] band, and the scleral spur. It is the gold standard for classifying **[[glaucoma]] as open-angle vs. angle-closure, grading the angle using systems such as the Shaffer, Spaeth, or Van Herick grading scales**, identifying angle pathology (**recession, neovascularization, pigment dispersion, synechiae**), and guiding surgical planning (e.g., [[trabeculectomy]], [[goniotomy]], iStent placement).
_____
>[!info]+ ETYMOLOGY of [[gonioscopy]]
>#greek 
>**[[gonio-]]** Greek _gōnia_ (γωνία); **Angle, corner**
>**[[-scopy]]** Greek _skopein_ (σκοπεῖν); **To examine, to look**
>
>**Literally**: _"examination of the angle."_
>
_____

> [!question]+ **RELATED TERMS**
> 
> - **Goniolens / Gonioscope** — the contact lens used (**e.g., Goldmann 3-mirror, Zeiss 4-mirror, Sussman, Koeppe**)
> - **[[Trabecular]] meshwork** — primary drainage structure visualized
> - **[[Iridocorneal]] angle** — the anatomic target
> - **[[Synechiae]] (peripheral anterior)** — **PAS**; adhesions closing the angle, identified on gonioscopy
> - **Angle recession** — traumatic tearing of the ciliary body; a key gonioscopic finding
> - **[[Neovascularization]] of the angle (NVA)** — [[rubeosis iridis]] extending to the angle
> - **Shaffer grading system** — grades angle width 0-4
> - **Goniotomy** — surgical procedure guided by gonioscopy
> - **[[Trabeculoplasty]] (SLT/ALT)** — laser procedures targeting the trabecular meshwork
>
_____

> [!example]+ **CODING AND NUANCE**
> **CPT CODE**
> 
> |Code|Description|
> |---|---|
> |**[[92020]]**|Gonioscopy (separate procedure)|
> 
> > ⚠️ Note: [[92020]] is billable per session, **not** per eye. It is often bundled into a comprehensive ophthalmologic exam ([[92004]]/[[92014]]) when performed the same day by the same provider, so check for bundling edits (NCCI).
> 
> ---
> 
> **RELEVANT ICD-10-CM DIAGNOSIS CODES**
> 
> _(Common indications for gonioscopy — full codes as applicable)_
> 
> **Glaucoma — Open Angle**
> 
> |Code|Description|
> |---|---|
> |[[H40.10X0]]|Unspecified open-angle glaucoma, stage unspecified|
> |[[H40.10X1]]|Unspecified open-angle glaucoma, mild stage|
> |[[H40.10X2]]|Unspecified open-angle glaucoma, moderate stage|
> |[[H40.10X3]]|Unspecified open-angle glaucoma, severe stage|
> 
> **Glaucoma — Angle Closure**
> 
> |Code|Description|
> |---|---|
> |[[H40.211]]|Acute angle-closure glaucoma, right eye|
> |[[H40.213]]|Acute angle-closure glaucoma, bilateral|
> |[[H40.231]]|Intermittent angle-closure glaucoma, right eye|
> |[[H40.233]]|Intermittent angle-closure glaucoma, bilateral|
> 
> **Primary Angle Closure (without glaucoma damage)**
> 
> |Code|Description|
> |---|---|
> |[[H40.061]]|Primary angle closure without glaucoma damage, right eye|
> 
> **Anterior Chamber Angle Pathology**
> 
> |Code|Description|
> |---|---|
> |[[H21.211]]|Degeneration of chamber angle, right eye|
> |[[H21.212]]|Degeneration of chamber angle, left eye|
> |[[H21.213]]|Degeneration of chamber angle, bilateral|
> |[[H21.219]]|Degeneration of chamber angle, unspecified eye|
> |[[H21.551]]|Recession of chamber angle, right eye|
> |[[H21.552]]|Recession of chamber angle, left eye|
> |[[H21.553]]|Recession of chamber angle, bilateral|
> |[[H21.559]]|Recession of chamber angle, unspecified eye|
> 
> 
>  💡 **Coding tip:** For glaucoma codes in the **H40.1x** family, the 7th character represents the **stage** (**0=unspecified, 1=mild, 2=moderate, 3=severe, 4=indeterminate**), and the **"X" is a placeholder** used to hold the 6th character position when no 6th character is defined — making them effectively 7 characters total (**e.g., [[H40.10X0]]**). Always confirm stage documentation supports the character selected.
>
_____
>[!tip]- DERIVATIONS of [[gonioscopy]]
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