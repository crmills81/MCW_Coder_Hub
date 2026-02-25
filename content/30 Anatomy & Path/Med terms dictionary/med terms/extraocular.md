---
tags:
  - medterm
  - medroot
  - ophthalmology
aliases:
  - extrinsic eye muscles
roots:
  - extraocular
  - extra-
  - -ocular
  - -cular
  - ocul(o)-
forms:
  - prefix
  - suffix
  - combining
  - adjective
alphabet: E
definition:
  - outside of the eyeball
---
>[!Note] DEFINITION of [[extraocular]]
>The term most frequently appears in the **clinical context of the extraocular muscles** (**EOMs**) — the seven muscles extrinsic to the eyeball that govern its movements and the position of the upper eyelid. Six of these muscles move the eyeball itself (**four recti and two obliques**), while the seventh — the **levator palpebrae superioris** — elevates the upper eyelid. These are distinct from the [[intraocular]] (**intrinsic**) muscles inside the eye (**e.g., the ciliary muscle, pupillary sphincter, and dilator**). The EOMs work in coordinated, paired fashion (**Sherrington's law of reciprocal innervation: when an agonist contracts, its antagonist relaxes**), enabling smooth, precise binocular gaze. They are innervated by three cranial nerves: CN III ([[oculomotor]]), CN IV ([[trochlear]]), and CN VI ([[abducens]]). Beyond muscles, **extraocular** can also describe any structure, disease, or implant located outside the globe itself.
_____
>[!info]+ ETYMOLOGY of [[extraocular]]
>#greek A modern compound formed from two classical roots: Latin [[extra-]] — "**outside of, beyond, except**," from exter ("**outward**"), from Proto-Indo-European h₁eǵʰs ("out")Latin oculus — "**eye**," from PIE okʷ- ("**to see**"), the same root as Greek *ops/ophthalmos*; Latin [[-ar]] ([[-aris]]) — adjectival suffix meaning "**pertaining to**"
>**Literally**: "**pertaining to that which is outside the eye.**"

_____

> [!success]+ THE SEVEN EXTRAOCULAR MUSCLES
> | Muscle | Cranial Nerve | Primary Action |
> |---|---|---|
> | **Superior rectus** | CN III ([[oculomotor]]) | Elevation  |
> | **Inferior rectus** | CN III (**oculomotor**) | Depression  |
> | **Medial rectus** | CN III (**oculomotor**) | [[Adduction]] (**inward**)  |
> | **Lateral rectu**s | CN VI (**abducens**) | [[Abduction]] (**outward**)  |
> | **Superior oblique** | CN IV ([[trochlear]]) | [[Incyclotorsion]], depression, abduction  |
> | **Inferior oblique** | CN III (**oculomotor**) | [[Excyclotorsion]], elevation, abduction  |
> | **Levator palpebrae superioris** | CN III (**oculomotor**) | Upper eyelid elevation  |
_____

> [!warning]+ RELATED TERMS
> - **[[Intraocular]]**: Situated *inside* the eyeball — contrasts directly with **extraocular** (e.g., [[intraocular]] pressure, intraocular lens).
> - **[[Strabismus]]**: Misalignment of the eyes due to extraocular muscle imbalance; umbrella term for [[esotropia]], [[exotropia]], [[hypertropia]].
> - **[[Ophthalmoplegia]]**: [[Paralysis]] of extraocular muscles; can be partial or complete.
> - **EOM palsy / Cranial nerve palsy**: CN III, IV, or VI palsies directly impair specific extraocular muscles, producing diplopia and abnormal eye position.
> - **Thyroid eye disease (TED) / Graves' [[orbitopathy]]**: [[Autoimmune]] condition causing extraocular muscle inflammation and enlargement.
> - **Strabismus surgery**: Surgical tightening (**resection**) or loosening (**recession**) of extraocular muscles to correct misalignment.
> - **[[Diplopia]]**: Double vision; a hallmark symptom of extraocular muscle dysfunction.
> - **Congenital [[fibrosis]] of the extraocular muscles (CFEOM)**: Rare genetic disorder replacing EOM tissue with fibrous tissue.
> - **[[Exophthalmos]] / [[Proptosis]]**: Forward protrusion of the eyeball, often from extraocular/[[orbital]] pathology.
> - **[[Nystagmus]]**: Involuntary, rhythmic eye movements involving abnormal extraocular muscle activity.
_____
>[!tip]- DERIVATIONS of [[extraocular]]
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