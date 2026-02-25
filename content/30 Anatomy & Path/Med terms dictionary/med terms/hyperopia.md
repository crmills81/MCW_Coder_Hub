---
tags:
  - medterm
  - medroot
aliases:
  - long-sightedness
  - farsightedness
  - hypermetropia
roots:
  - hyperopia
  - hyper-
  - -opia
  - -pia
  - -op(s)-
  - -ia
forms:
  - prefix
  - suffix
  - disease
  - combining
  - compound suffix form
alphabet: H
definition:
  - a refractive condition in which parallel light rays entering the eye are focused behind the retina rather than directly on it
  - causing difficulty seeing close objects clearly
---
>[!Note] DEFINITION of [[hyperopia]]
>In a **hyperopic eye**, the eyeball is typically too short (**axial hyperopia**) or the cornea/lens has insufficient curvature (**refractive hyperopia), meaning incoming light hasn't converged enough by the time it reaches the retina. The eye compensates by using the ciliary muscle to increase lens curvature (accommodation**), which works well in children and young adults with flexible lenses but becomes increasingly strained or impossible with age. Symptoms include **blurred near vision, eye fatigue, squinting, and headaches after close work**. **Severe hyperopia affects both near and distant vision**. It is the most common refractive error in childhood and is often present from birth. Treatment includes convex (**plus-power**) corrective lenses, contact lenses, or refractive surgery (**e.g., LASIK, PRK**).
_____
>[!info]+ ETYMOLOGY of [[hyperopia]]
>#greek First attested in English in 1861 as Modern Latin [[hyperopia]]. Greek ὑπέρ (hypér) — **"over, beyond, above, to excess**," from PIE root meaning "**over**" Greek ὤψ (ōps) — "**eye, sight, face**" (genitive ὠπός, ōpos), from PIE root okʷ- ("**to see**")[[-ia]] — Greek abstract noun suffix denoting a state or condition. Literally translates to "**over-sight**" or "**beyond sight**," reflecting the idea that the focal point falls beyond (**behind**) the retina.
_____

> [!success]+ CLINICAL CLASSIFICATION
> **Hyperopia** is categorized in multiple ways:
> - **Simple**: Naturally occurring biological variation
> - **Pathological**: Due to disease, trauma, or abnormal development
> - **Functional**: From [[paralysis]] of accommodation (e.g., [[CN III palsy]])
> - **Facultative**: Portion overcome by the patient's own accommodation
> - **Absolute**: Residual portion that cannot be compensated by accommodation
> - **Latent**: Hidden hyperopia masked by ciliary muscle tone, only revealed by [[cycloplegic]] refraction

_____

> [!warning]+ RELATED TERMS
> | Term | Meaning |
> |---|---|
> | [[Myopia]] | [[Nearsightedness]]; opposite of hyperopia — focal point falls *in front* of the retina  |
> | [[Presbyopia]] | Age-related loss of near accommodation, compounding hyperopia in older patients  |
> | [[Emmetropia]] | Normal vision; focal point falls *exactly* on the retina |
> | [[Astigmatism]] | **Irregular corneal**/lens curvature causing distorted focus at all distances  |
> | [[Amblyopia]] | "**Lazy eye**"; can develop from uncorrected **hyperopia** in childhood   |
> | [[Esotropia]] | Inward eye turn; frequently associated with **hyperopia** in children  |
> | Accommodation | The eye's ability to adjust lens curvature to focus at varying distances |
> | [[Cycloplegia]] | **Paralysis** of accommodation, used diagnostically to reveal total/latent hyperopia  |
> | [[Anisometropia]] | Different refractive errors in each eye, often involving one hyperopic eye  |

_____
>[!tip]- DERIVATIONS of [[hyperopia]]
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