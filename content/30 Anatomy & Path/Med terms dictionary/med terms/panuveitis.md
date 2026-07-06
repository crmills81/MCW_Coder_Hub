---
tags:
  - medterm
  - medroot
  - ophthalmology
aliases:
  - diffuse uveitis
  - sympathetic uveitis
roots:
  - panuveitis
  - pan-
  - -uveitis
  - -itis
  - -is
forms:
  - prefix
  - suffix
alphabet: P
definition:
  - inflammation involving all three layers of the uveal tract simultaneously
---
>[!Note] DEFINITION of [[panuveitis]]
>**Panuveitis** is a severe form of [[intraocular]] inflammation characterized by simultaneous involvement of both the anterior segment (**iris and [[ciliary body]]**) and posterior segment (**[[choroid]] and retina**) of the uvea, along with inflammation of the vitreous humor. This represents diffuse inflammation without a specific focal point and is considered a serious threat to vision due to its extensive nature. Common causes include systemic infections (**tuberculosis**, [[syphilis]]), autoimmune conditions (**Vogt-Koyanagi-Harada syndrome, Behçet's disease, sarcoidosis**), [[sympathetic ophthalmia]], and malignancies, though many cases remain idiopathic. If the etiology is documented, code the underlying cause first (**code first/etiology-manifestation convention may apply depending on cause**):  [[sarcoidosis]] → D86.83]] (**sarcoid iridocyclitis**) — note sarcoid [[uveitis]] has its own code Behçet's disease → [[M35.2[[]] Tuberculosis → [[A18.54]] Syphilis → [[A52.71]] [[Toxoplasmosis]] → [[B58.01]] VKH (**Vogt-Koyanagi-Harada**) → H20.82-  Infectious vs. non-infectious — **Infectious panuveitis** should be coded to the infectious organism when identified, with the uveitis as a manifestation. Complications to capture additionally:  **Cystoid macular edema** (H35.81-) [[Epiretinal membrane (ERM)]]  (H35.37-) [[hypotony]] (H44.40-) Secondary glaucoma (H40.4- or H40.5-) **Posterior synechiae** / iris changes
_____
>[!info]+ ETYMOLOGY of [[panuveitis]]
>#greek - **[[Pan-]]** (Greek: πᾶν) = all, entire, whole
>- **Uvea** (Latin: _uva_) = grape (**referring to the pigmented vascular layer that resembles a peeled grape**)
>- **[[-itis]]** (Greek: -ῖτις) = inflammation
>
_____

> [!example]+ **ICD-10 Codes** (Full 7-character codes)
> 
> - **[[H44.111]]** - Panuveitis, right eye
> - **[[H44.112]]** - Panuveitis, left eye
> - **[[H44.113]]** - Panuveitis, bilateral
> - **[[H44.119]]** - Panuveitis, unspecified eye
> 
> _Note: H44.11 alone is non-billable; requires 7th character for laterality_
> 
> **Related CPT Codes** (Common procedures for diagnosis/treatment)
> 
> - **[[92201]]** - [[ophthalmoscopy]], extended (with [[retinal]] drawing and scleral depression)
> - **[[92250]]** - Fundus photography with interpretation and report
> - **[[67028]]** - [[Intravitreal]] injection of pharmacologic agent
> - **[[67036]]** - [[Vitrectomy]], mechanical, pars plana approach (for diagnostic purposes)
> - **[[67039]]** - Vitrectomy with endolaser [[photocoagulation]]
> - **[[67040]]** - Vitrectomy with endophthalmitis treatment
> - **[[92002]]-[[92014]]** - Ophthalmological examination codes (new/established patient)

_____
>[!tip]- DERIVATIONS of [[panuveitis]]
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

[[Med roots dictionary]]
[[Appendix A Prefixes]]
[[Appendix B Combining Forms]]
[[Appendix C Suffixes]]
[[Appendix D Suffix forms]]