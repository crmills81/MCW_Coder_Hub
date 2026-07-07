---
tags:
  - medroot
  - medterm
aliases:
  - -ectasia
roots:
  - -ectasis
  - -tasis
  - -sis
forms:
  - suffix
"alphabet:": E
definition: Dilation, expansion, or stretching of a structure or organ beyond its normal size
---
>[!Note] DEFINITION of [[-ectasis]]
>**-ectasis** is a medical suffix derived from Greek that denotes the **abnormal dilation, expansion, distention, or stretching of a tubular structure, hollow organ, vessel, or duct**. This expansion occurs beyond the structure's normal anatomical dimensions and can result from various pathological processes including **obstruction, weakness of structural walls, increased internal pressure, inflammatory processes, or congenital abnormalities**. The dilation described by [[-ectasis]] is typically permanent or chronic in nature, distinguishing it from temporary distention. This suffix is commonly used in diagnostic terminology to describe conditions where anatomical structures have become pathologically **enlarged or dilated**, often leading to functional impairment of the affected organ or system.
_____
>[!info]+ ETYMOLOGY of [[-ectasis]]
>- **Origin**: Ancient Greek
>- **Root word**: _ἔκτασις_ (_ektasis_)
>    - _ἐκ-_ (_ek-_) = "**out, outward**"
>    - _τάσις_ (_tasis_) = "**stretching, tension**" (from _τείνειν_ [_teinein_] = "**to stretch**")
>- **Literal meaning**: "*a stretching out*" or "*extension*"
>- **Medical adoption**: The term entered medical Latin and subsequently modern medical terminology to specifically describe pathological expansion of anatomical structures
>- **-ectasia** (*alternative form, functionally identical*)
>    - **Note**: Both [[-ectasis]] and [[-ectasia]] are used interchangeably in medical terminology
>    - Some terms preferentially use one form over the other by convention
>    - **Example**: [[bronchiectasis]] vs. [[telangiectasia]]
>
_____
>[!example]+ RELATED TERMS to [[-ectasis]]
>**<u>Related Suffixes with Similar Meanings:</u>**
>
>- **-ectasia**: Alternate form meaning dilation or expansion (**interchangeable with -ectasis**)
>- **[[-megaly]]**: Abnormal enlargement (**differs in that it refers to solid organ enlargement rather than hollow structure dilation**)
>- **[[-cele]]**: Herniation or protrusion (**involves bulging rather than simple dilation**)
>- **[[-stenosis]]**: Narrowing or constriction (**opposite concept**)
>
>**Common Medical Terms Using [[-ectasis]]/[[-ectasia]]:**
>
>**<u>Urological relevance</u>:**
>
>- **[[Ureterectasis]]**: Dilation of the ureter
>- **[[Pyeloectasis]]**: Dilation of the renal pelvis
>
>**<u>Ophthalmological relevance:</u>**
>
>- **[[Angiectasis]]**: Dilation of blood vessels (**relevant in retinal conditions**)
>- **[[telangiectasia]]**: Dilation of small blood vessels near the skin/mucosal surface
>
>**<u>Otolaryngological relevance:</u>**
>
>- None directly specific to this specialty, though [[vascular]] [[ectasias]] can affect head/neck structures
>
>**<u>General medical terms:</u>**
>
>- **Bronchiectasis**: Permanent dilation of the bronchi
>- **[[Atelectasis]]**: Incomplete expansion or collapse of lung tissue (**note: despite etymology, this represents an exception to the typical dilation meaning**)
>- **Ectasia cordis**: Cardiac dilation
>- **Vasoectasis**: Dilation of blood vessels
>- **[[Lymphangiectasia]]**: Dilation of lymphatic vessels
>- **Gastrectasis**: Dilation of the stomach
>- **Phlebectasia**: Dilation of veins
>
>**<u>Contrasting Terms:</u>**
>
>- **[[Stenosis]]**: Narrowing of a passage or opening
>- **[[Stricture]]**: Abnormal narrowing of a tubular structure
>- **[[Atresia]]**: Absence or abnormal closure of a body opening
>
_____
>[!tip]- DERIVATIONS of [[-ectasis]]
>```dataview
>TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name !=[[]].file.name
>SORT file.name ASC
>```
___
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