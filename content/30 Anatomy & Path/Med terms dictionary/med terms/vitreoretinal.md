---
tags:
  - medterm
  - ophthalmology
aliases:
  - posterior segment
roots:
  - -al
  - vitre(o)-
  - retin(o)-
  - vitreo-
  - retin-
forms:
  - prefix
  - suffix
  - combining
  - compound suffix form
alphabet: V
definition: of or relating to the vitreous humor and the retina
---
>[!Note] DEFINITION of [[vitreoretinal]]
>The **vitreoretinal interface** is where the clear, gel-like [[vitreous]] body (**which fills approximately 80% of the eye's interior**) makes direct contact with the light-sensitive retinal tissue lining the back of the eye. This interface is clinically critical because traction, inflammation, or degeneration here leads to some of [[ophthalmology]]'s most vision-threatening conditions, including[[ retinal detachment]], [[macular]] holes, and [[epiretinal]] membranes. The [[macula]] — the central retina responsible for sharp, detailed, and color vision — sits at the center of this zone and is a focal point for vitreoretinal disease. Vitreoretinal surgery (**a formal subspecialty**) addresses these conditions through procedures like [[vitrectomy]], laser [[photocoagulation]], and [[scleral]] buckling.
_____
>[!info]+ ETYMOLOGY of [[vitreoretinal]]
>#latin A modern compound combining form built from two Latin-origin roots: [[vitreo-]] : from Latin **vitreus** ("**glassy, glass-like**"), from **vitrum** ("**glass**"), describing the clear, glass-like gel of the [[vitreous]] humor. 
>**retinal**: from Medieval Latin [[retina]], believed to derive from Latin rete ("**net**"), describing the net-like appearance of the retinal blood vessels. The compound [[vitreoretinal]] is a 20th-century clinical coinage linking these two anatomical structures as a functional and surgical unit.
_____

> [!caution]+ RELATED TERMS
> **[[Vitrectomy]]**: Surgical removal of vitreous gel, the hallmark vitreoretinal procedure. 
> **[[Vitreoretinopathy]]**: Disease of the vitreous and retina (e.g., proliferative vitreoretinopathy/PVR). 
> **[[retinal detachment]]**: Separation of the retina from the underlying RPE; a key vitreoretinal emergency. 
> **[[Posterior vitreous detachment (PVD)]]**: Age-related separation of vitreous from retinal surface. 
> **[[Epiretinal membrane (ERM)]]**: Scar tissue forming on the retinal surface at the vitreoretinal interface. 
> **[[Macular hole]]**: Full-thickness defect in the [[fovea]], often [[vitreoretinal]] traction-related.
> **[[diabetic retinopathy]]**: [[Vascular]] damage to the retina; a leading vitreoretinal disease. 
> **[[Vitritis]]**: Inflammation of the vitreous itself. 
> **[[Vitreology]]**: The scientific study of the [[vitreous]] body. 
> **[[Scleral buckling]]**: Vitreoretinal surgical technique using an external band to support retinal reattachment.

_____
>[!tip]- DERIVATIONS of [[vitreoretinal]]
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

[[Med terms dictionary]]
[[Appendix A Prefixes]]
[[Appendix B Combining Forms]]
[[Appendix C Suffixes]]
[[Appendix D Suffix forms]]