---
tags:
  - medroot
  - medterm
  - foundational_suffix
  - urology
  - ophthalmology
  - otolaryngology
aliases:
  - -alis
roots:
  - -al
  - -al-
forms:
  - suffix
  - suffix form
  - adjective
"alphabet:": A
definition:
  - pertaining to
  - located in
  - of
---
>[!Note] DEFINITION of [[-al]]
>The suffix **-al** is one of the most frequently encountered and broadly applied adjectival suffixes in all of medical terminology. It means "**pertaining to**," "**relating to**," "**of**," or "**having the character or nature of**" the root word to which it is attached. It transforms nouns — most commonly Latin-derived anatomical, physiological, or pathological root words — into adjectives that describe a relationship, association, location, or quality connected to that root. In some instances, **-al** terms have been substantivized (**converted into nouns**) through common clinical usage, functioning as both adjective and noun depending on context (**e.g., _removal_, _referral_, _denial_ in administrative contexts; _renal_, _urethral_, _corneal_ as pure adjectives in clinical contexts**).
>
The suffix **-al** is so pervasive in medical language that it appears across virtually every organ system, specialty, and domain of medicine — from anatomical descriptors (_renal_, _urethral_, _corneal_, _[[tympanic]]_) to physiological descriptors (_hormonal_, _neural_, _vascular_) to pathological descriptors (_tumoral_, _bacterial_, _fungal_) to procedural descriptors (_surgical_, _procedural_, _intravesical_). Its ubiquity makes it one of the foundational building blocks of medical vocabulary.
>
In the context of **urology**, **-al** constructions are omnipresent in both ICD-10-CM diagnosis coding and ICD-10-PCS procedure coding. Body part descriptors, approach qualifiers, and device/substance qualifiers all rely heavily on **-al** adjectives to characterize the anatomical site, nature of the condition, or surgical approach. Terms such as _renal_, _[[ureteral]]_, _urethral_, _vesical_, _gonadal_, _scrotal_, _perineal_, _adrenal_, and _prostatic_ (**the latter from -ic but parallel in function**) are foundational to urological coding specificity.
>
In **ophthalmology**, terms such as _corneal_, _retinal_, _[[scleral]]_, _choroidal_, _[[orbital]]_, _[[lacrimal]]_, _conjunctival_, _uveal_, _macular_, and _vitreal_ are essential adjectival descriptors that directly drive ICD-10-CM code selection for ocular conditions and **ICD-10-PCS** body part value assignment for ophthalmic procedures.
>
In **otolaryngology**, terms such as _tympanic_, _mastoid_ (note: **[[-oid]]** suffix but parallel anatomical function), _[[laryngeal]]_, _pharyngeal_, _nasal_, _sinal_ (or _sinusal_), _labyrinthial_, _cochlear_, _vestibular_, _septal_, _turbinal_, and _tonsillar_ rely on or parallel **-al** constructions to localize pathology and drive coding decisions.
>
Understanding **[[-al]]** as a suffix also helps coders recognize when a term is functioning as a descriptor of anatomical site versus a descriptor of etiology or quality — a distinction that can affect whether a code is assigned as a **principal diagnosis, secondary diagnosis**, or qualifier in ICD-10-PCS table navigation.
_____
>[!info]+ ETYMOLOGY of [[-al]]
>#latin From **Latin** _-alis_ — a highly productive Latin adjectival suffix meaning "**of**," "**belonging to**," "**pertaining to**," or "of the nature of." The suffix _[[-alis]]_ attached to Latin nouns and stems to form adjectives, and this pattern was carried directly into medieval and modern medical Latin, then into English through Old French _[[-al]]_ or directly from Latin. Some **-al** terms also derive from **Greek** roots that were Latinized before receiving the _-alis_ ending. The suffix is closely cognate with and functionally parallel to other Latin adjectival endings including _-aris_ (→ **-ar**), _[[-arius]]_ (→ **[[-ary]]**), and _[[-ilis]]_ (→ **[[-ile]]**), with the choice among them often determined by the phonological character of the root rather than any difference in meaning.

***

>[!important] Aliases / Parallel Suffixes
>- **[[-ar]]** — variant of **-al** used after roots containing the letter _l_ to avoid awkward repetition (e.g., _muscular_ not _muscular_; _[[vascular]]_ not _vasalic_; _[[glandular]]_, _[[tubular]]_, _[[cochlear]]_) — from Latin _-aris_
>- **[[-ary]]** — Latin _[[-arius]]_; functionally equivalent adjectival suffix (e.g., _[[urinary]]_, _pulmonary_, _coronary_, _[[salivary]]_)
>- **[[-ic]]** — Greek _[[-ikos]]_; broadly equivalent adjectival suffix, preferred for Greek-derived roots (e.g., _gastric_, _[[hepatic]]_, _[[optic]]_, _[[tympanic]]_)
>- **[[-eal]]** — variant form, often seen with Greek-derived roots ending in specific phonemes (e.g., _[[corneal]]_, _[[laryngeal]]_, _[[pharyngeal]]_, _[[perineal]]_, _[[tracheal]]_)
>- **[[-ial]]** — variant form appearing after certain roots (e.g., _[[urethral]]_ vs. _bronchial_, _arterial_, _[[epithelial]]_)
>


_____
>[!example]+ RELATED TERMS to [[-al]]
> 
>|  [[-al]]  |   pertaining to   | located in |         -          |       -       |
|:---------:|:-----------------:|:----------:|:------------------:|:-------------:|
|  [[-ac]]  |        YES        |    YES     |         -          |       -       |
|  [[-an]]  |        YES        |    YES     |         -          |       -       |
|  [[-ar]]  |        YES        |    YES     |         -          |       -       |
| [[-ary]]  |        YES        |     -      |     place for      |       -       |
| [[-eal]]  |        YES        |    YES     |         -          |       -       |
| [[-ean]]  |        YES        |    YES     |         -          |       -       |
| [[-etic]] |        YES        |     -      |         -          |       -       |
|  [[-ic]]  |        YES        |     -      |        drug        |     agent     |
|  [[-id]]  |        YES        |     -      |   condition (of)   |  state (of)   |
| [[-ile]]  |        YES        |     -      | capable of (being) |     like      |
| [[-ine]]  |        YES        |    YES     |         -          |       -       |
| [[-itic]] | (to inflammation) |     -      |        drug        |     agent     |
| [[-ive]]  |        YES        |     -      |         -          |       -       |
| [[-otic]] |        YES        |     -      |         -          |       -       |
| [[-ous]]  |        YES        |     -      |  characterized by  |    full of    |
| [[-tic]]  |        YES        |     -      |        drug        | agent, person |
_____
>[!tip]- DERIVATIONS of [[-al]]
>```dataview
>TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
>SORT file.name ASC
>```
_____
>[!faq]- Query functionality
>```dataview
>TABLE definition AS Definition
>FROM #medroot
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```

[[Med roots dictionary]]
[[Appendix A Prefixes]]
[[Appendix B Combining Forms]]
[[Appendix C Suffixes]]
[[Appendix D Suffix forms]]