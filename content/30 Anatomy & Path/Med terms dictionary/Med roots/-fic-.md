---
tags:
  - medroot
  - medterm
aliases: [-facient]
roots:
  - -fic-
forms:
  - combining
  - prefixes
  - suffixes
  - suffix
"alphabet:": F
definition:
  - make
  - producing
  - causing
---
>[!Note] DEFINITION of [[-fic-]]
>make; `-fic-` is a Latin bound adjectival/verbal combining form meaning **"making, doing, producing, or causing."** It appears most commonly as a **suffix** that transforms a noun or adjective into a word meaning _"that which makes [X]"_ or _"pertaining to making [X]."_ In medical and scientific vocabulary, it is the engine behind terms describing agents that **produce a physiological effect**, such as _soporific_ (**sleep-making**), _abortifacient_ (**abortion-producing**), and _calcific_ **(calcium-depositing**). It never stands alone — it always requires a preceding base to supply the "what" that is being made.
_____
>[!info]+ ETYMOLOGY of [[-fic-]]
>#latin `-fic-` is a **combining form of the Latin verb `facere`** (**to do, to make**), specifically derived from its **adjectival/verbal combining stem `-ficus`**, meaning "doing, making." The full chain is:​
>
> **PIE root `*dheh₁-`** ("**to set, put**") → Latin **`facere`** (**to make, to do**) → Latin adjective-forming suffix **`-ficus`** → combining form **`-fic-`**​
>
>When `facere` was compounded with a preceding base in Latin, it took one of two forms:
>
>- **`-fic-`** → adjectival form: _pacificus_ ("**peace-making**") → _Pacific_
>    
>- **`-ficare`** → verbal form (**the infinitive**): _pacificare_ ("**to make peace**") → _pacify_
>    
>- **`-fication`** → abstract noun form: _pacificatio_ → _pacification_ 
>
>These three almost always travel together as a family. Where you see `-fic-`, you can almost always predict a paired `-fy` verb and a `-fication` noun.
>
_____
>[!example]+ RELATED TERMS to [[-fic-]]
>
>| [[-fic-]] | make |    -    |
|:---------:|:----:|:-------:|
| [[fac-]]  | YES  |    -    |
| [[-fect]] | YES  |    -    |
| [[poie-]] | YES  | produce |
>
>
_____


> [!success]+ Key Medical & Scientific Derivatives
> |Term|Breakdown|Medical Meaning|
> |---|---|---|
> |**calcific**|_calc-_ (calcium) + _-fic_|Pertaining to calcium deposit formation; e.g., _calcific tendinitis_  |
> |**calcification**|_[[calc-]]_ + _-fic-_ + _[[-ation]]_|Process of calcium salt deposition in soft tissue  ​|
> |**ossification**|_oss-_ (bone) + _-fic-_ + _-ation_|Process of tissue being "made into" bone  ​|
> |**ossify**|_[[oss-]]_ + _-ify]]_|To harden or turn into bone   ​|
> |**soporific**|_[[sopor-]]_ (sleep) + _-fic_|An agent or quality that "makes" sleep; sedating  ​|
> |**abortifacient**|_[[abort-]]_ + _[[-i-]]_ + _[[-facient]]_|An agent that "makes" an abortion/termination; e.g., mifepristone  ​|
> |**rubefacient**|_[[rube-]]_ (red) + _-facient_|An agent that "makes" the skin red/causes vasodilation  ​|
> |**tumefacient**|_[[tume-]]_ (to swell) + _-facient_|An agent or process that "makes" swelling  ​|
> |**liquefaction**|_[[lique-]]_ (liquid) + _[[-fac-]]_ + _[[-tion]]_|The process of "making" a solid become liquid; e.g., _liquefaction necrosis_   ​|
> |**putrefaction**|_[[putre-]]_ (rotten) + _-fac-_ + _-tion_|The "making" of rotting; tissue decomposition ​|
> |**[[orifice]]**|_[[or-]]_ (mouth) + _[[-ifice]]_|A "mouth-making" — an opening or aperture in the body  ​|
> |**[[prolific]]**|_[[proles-]]_ (offspring) + _-fic_|"Making offspring"; productive/fertile  ​|
> |**specific**|_[[spec-]]_ (kind/type) + _-fic_|"Making a kind"; pertaining to a particular species or type  |
> |**terrific / horrific**|_terror/horror_ + _-fic_|Originally "making terror/horror"; now largely semantic drift in English |
> |**beneficial**|_[[bene-]]_ (well) + _-fic-_ + _[[-ial]]_|"Making good"; producing a favorable result  ​|
> |**deficient**|_[[de-]]_ (away) + _-fic-_ + _[[-ient]]_|"Made lacking"; below the normal required amount  ​|
> |**efficient**|_[[ex-]]_ (out) + _-fic-_ + _-ient_|"Making outward/thoroughly"; productive with minimal waste  ​|
> |**significant**|_[[signi-]]_ (mark) + _-fic-_ + _[[-ant]]_|"Making a mark"; clinically meaningful  ​|
> |**artificial**|_[[art-]]_ (skill) + _-fic-_ + _-ial_|"Made by human skill" — as in _artificial valve_, _artificial airway_  ​|
> |**rectify**|_[[rect-]]_ (right) + _[[-ify]]_|To "make right"; to correct  ​|
> |**nullify**|_null-_ (none) + _-ify_|To "make nothing"; to cancel out  ​|
> >

_____
>[!tip]- DERIVATIONS of [[-fic-]]
>```dataview
>TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.nameF
>SORT file.name ASC
>```
_____
>[!faq]- Query
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