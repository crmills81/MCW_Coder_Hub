---
tags:
  - medterm
  - medroot
  - ophthalmology
aliases:
roots:
  - angle-closure glaucoma
  - Glauc(o)-
  - glaucoma
  - -oma
  - glauc
forms:
  - prefix
  - suffix
  - combining
  - noun
alphabet: A
definition:
  - a type of glaucoma where the iris blocks the eye's drainage angle
---
>[!Note] DEFINITION of angle-closure [[glaucoma]]
>In this condition, **the peripheral iris contacts the trabecular meshwork due to pupillary block or other mechanisms like lens thickening, causing fluid backup in the anterior chamber**. Acute attacks present with **severe eye pain, blurred vision, halos around lights, red eye, headache, nausea, and high IOP often exceeding 40 mmHg; chronic forms develop gradually with optic nerve damage and visual field loss**. Diagnosis involves [[gonioscopy]] showing a closed angle, while treatment starts with IOP-lowering drugs, followed by laser peripheral iridotomy to create an iris opening for fluid flow. 
>
>|Term|Description|
|---|---|
|Primary [[angle-closure glaucoma]]|Narrow angle with optic nerve damage from closure. [eyewiki+1](https://eyewiki.org/Primary_vs._Secondary_Angle_Closure_Glaucoma) [willseye](https://www.willseye.org/angle-closure-glaucoma-faqs/)​|
|Acute [[angle-closure glaucoma]]|Sudden symptomatic attack with high IOP. [aao+1](https://www.aao.org/education/munnerlyn-laser-surgery-center/angleclosure-glaucoma-19)|
|[[Pupillary block]]|Iris blocks [[aqueous]] flow from posterior to anterior chamber. [glaucoma](https://glaucoma.org/types/angle-closure-glaucoma)​Ureteroscopy.md​|
|Laser peripheral iridotomy|Procedure to relieve blockage by perforating the iris. [clevelandclinic+1](https://my.clevelandclinic.org/health/diseases/angle-closure-glaucoma)|
|[[Peripheral anterior synechiae]]|Adhesions causing chronic closure. [aao](https://www.aao.org/education/munnerlyn-laser-surgery-center/angleclosure-glaucoma-19)​|
_____
>[!info]+ ETYMOLOGY of angle-closure [[glaucoma]]
>#greek The term "[[glaucoma]]" derives from Ancient Greek _glaukós_ (γλαυκός), meaning "**gleaming, blue-green, or gray,**" referring to the eye's appearance in advanced cases. "Angle-closure" describes the blocked iridocorneal angle; roots include *[[glauc(o)-]]* (**grayish**) and _**[[-oma]]**_ (condition or mass).
_____
>[!tip]- DERIVATIONS of angle-closure [[glaucoma]]
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
>WHERE file.name != this.file.name
>AND any(contains(this.definition, definition))
>```

[[Med roots dictionary]]
[[Appendix A Prefixes]]
[[Appendix B Combining Forms]]
[[Appendix C Suffixes]]
[[Appendix D Suffix forms]]