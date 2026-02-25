---
tags:
  - medterm
  - medroot
  - ophthalmology
aliases:
  - lacrimal apparatus
roots:
  - lacrim-
  - lachr-
  -  dacry/o-
  -  lacrim/o-
  - -al
forms:
  - prefix
  - suffix
  - adjective
  - compound suffix form
alphabet: L
definition:
  - relating to tears
  - the tear glands
  - and the tear drainage structures of the eye
---
>[!Note] DEFINITION of [[lacrimal]]
>The **lacrimal system** — formally called the **lacrimal apparatus** — is a network of **glands, sacs, canals, and ducts** around each eye responsible for tear production and drainage. Tears are produced in the lacrimal gland (**located in the upper outer corner of the orbit**), sweep across the eye's surface with each blink, and drain through the **lacrimal puncta → canaliculi → lacrimal sac → nasolacrimal duct → into the nasal cavity**. Tears serve to lubricate and protect the cornea/conjunctiva, flush foreign particles, and even deliver **antimicrobial enzymes** (**like lysozyme**). Pathologies range from [[dry eye syndrome]] (**insufficient production**) to [[dacryostenosis]] (**duct narrowing**) and [[dacryocystitis]] (**sac infection**).
_____
>[!info]+ ETYMOLOGY of [[lacrimal]]
>#latin From Medieval Latin lacrimalis, "**pertaining to tears**," derived from Latin **lacrima** / **lacryma**, "**a tear**." That Latin root is itself a dialect-altered borrowing of Greek δάκρυμα (*dákryma*), "**a tea**r," from δάκρυ (*dákry*), tracing back to Proto-Indo-European dákru- ("**tear**"). The corrupted spelling variant **lachr-** (**as in lachrymal**) crept in during Medieval Latin.
>**Aliases and Components**
>**Aliases**: [[Lachrymal]], [[lacrymal]] (**variant spellings, esp. in older literature**); the Greek-derived equivalent combining form is [[dacry/o-]].
>**Combining forms**: [[lacrim/o-]] **(Latin-based**) and [[dacry/o-]] (**Greek-based**) are interchangeable in medical word building, both meaning "**tear or tear duct**."

_____

> [!attention]+ RELATED TERMS
> - **Lacrimal gland**: Produces [[aqueous]] (**watery**) layer of tears.
> - **Lacrimal sac** (**dacryocyst/o-**): Reservoir collecting tears before draining into the nasolacrimal duct.
> - **Lacrimal canaliculi**: Small channels draining tears from puncta to lacrimal sac.
> - **[[Dacryocystitis]]**: Infection/inflammation of the **lacrimal sac**. 
> - **[[Dacryostenosis]]**: Narrowing of the lacrimal (**tear**) duct. 
> - **[[Dacryocystorhinostomy]] (DCR)**: Surgical procedure creating a new tear drainage path into the nasal cavity. 
> - **[[Epiphora]]**: Excessive tearing/overflow due to blocked drainage. 
> - **[[Nasolacrimal]] duct**: Final drainage channel from lacrimal sac to nasal cavity. 
> - Lachrymose: Non-medical adjective meaning "*tearful*" or "*given to weeping*," from the same root.

_____
>[!tip]- DERIVATIONS of [[lacrimal]]
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