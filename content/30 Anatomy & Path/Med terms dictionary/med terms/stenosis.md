---
tags:
  - medterm
  - medroot
aliases:
  - stricture
  - coarctation
  - Stenosis
roots:
  - -stenosis
  - -osis
  - -sis
forms:
  - prefix
  - suffix
alphabet: S
definition:
  - abnormal narrowing of a bodily passage
  - canal
  - or orifice
---
>[!Note] DEFINITION of [[stenosis]]
>**Stenosis** refers to any pathological reduction in the lumen (**inner space**) of a tubular structure — such as a blood vessel, heart valve, spinal canal, or airway. It can be congenital (**present at birth**) or acquired (**due to [[atherosclerosis]], fibrosis, [[calcification]], inflammation, or prior interventions**). The narrowing **impedes normal flow of blood, air, cerebrospinal fluid, or other substances, producing symptoms specific to the affected structure** — for example, chest pain in **aortic stenosis** or leg pain in **spinal stenosis**. Treatment ranges from medication and dilation to surgical repair or replacement.
_____
>[!info]+ ETYMOLOGY of [[stenosis]]
>#latin  First attested in English in 1846, from medical Latin stenosis, itself from Greek στένωσῐς (*stēnōsis*), meaning "**a narrowing**," derived from στενόειν (stenoun, "**to narrow**"), from στενός (stenós, "**narrow, shor**t") + the Greek noun-forming suffix -σῐς ([[-sis]], **expressing a state or process**). 
>**Suffix form**: [[-stenosis]] (**denoting abnormal narrowing of a specific structure, e.g., [[angiostenosis]]**).**Combining root**: **sten(o)-** ("**narrow**") + [[-osis]] ("**condition of**").[[-sten(o)-]] as a Root. The root [[sten(o)-]] means "**narrow in shape**" and appears independently of the full [[-stenosis]] suffix. Stenography — lit. "**narrow writing**" (**shorthand**) Stenotic — adjectival form, meaning "**of or relating to stenosis**"

_____

> [!warning] RELATED TERMS
> | Term | Meaning |
> |---|---|
> | **Restenosis** | Recurrence of stenosis after treatment  |
> | **Aortic stenosi**s | Narrowing of the aortic valve  |
> | **Spinal stenosis** | Narrowing of the spinal canal  |
> | **Subglottic stenosi**s | Narrowing below the vocal cords  |
> | **Pyloric stenosis** | Narrowing of the stomach outlet  |
> | **Mitral stenosi**s | Narrowing of the mitral heart valve  |
> | **Bronchostenosis** | Narrowing of a bronchial tube  |
> | **Dacryostenosis** | Narrowing of the lacrimal (tear) duct  |
> | **Craniostenosis** | Premature fusion/narrowing of skull sutures  |

_____
>[!tip]- DERIVATIONS of [[stenosis]]
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

[[Med roots]]
[[Appendix A Prefixes]]
[[Appendix B Combining Forms]]
[[Appendix C Suffixes]]
[[Appendix D Suffix forms]]

