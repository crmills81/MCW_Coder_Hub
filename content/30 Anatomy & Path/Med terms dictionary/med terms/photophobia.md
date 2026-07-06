---
tags:
  - medterm
  - medroot
  - ophthalmology
aliases:
roots:
  - photophobia
  - photo-
  - -phobi
  -  -ia
  - -phobia
  - -bia
forms:
  - prefix
  - suffix
  - combining
  - compound suffix form
  - adjective
alphabet: P
definition:
  - abnormal sensitivity or intolerance to light
  - producing discomfort or pain in the eyes upon light exposure
---
>[!Note] DEFINITION of [[photophobia]]
>**Photophobia** is technically a **misnomer** — despite [[phobia]] meaning "**fear**," it does not represent a psychological fear of light in the clinical sense, but rather a **pathophysiological hypersensitivity**. Mechanistically, it arises from overstimulation of photoreceptors in the retina, excessive signaling along the [[optic nerve]], or [[hyperactivation]] within the **central nervous system**, particularly via [[trigeminal nerve]] pathways.  It manifests on a spectrum from mild squinting in bright light to debilitating pain in even dim ambient light. Severity varies considerably: **a patient with [[corneal abrasion]] may be transiently photophobic, while those with chronic migraines or meningitis may experience profound, persistent photophobia**. It is one of the most common patient-reported symptoms in both [[ophthalmology]] and neurology.
_____
>[!info]+ ETYMOLOGY of [[photophobia]]
>#greek First attested in English in 1799. Greek φῶς, φωτ- (phōs, phōt-) — "**light**," from PIE root bʰā- ("**to shine, gleam**") Greek φόβος (*phóbos*) — "**fear, panic, flight**," from φέβομαι (*phébomai*, "**to flee in fear**"), from PIE root bʰegʷ- ("**to flee**") [[-ia]] — Greek abstract noun suffix indicating a state or condition. Literally translates to "**fear of light**," though as noted above, the clinical meaning is more accurately "*intolerance or painful sensitivity to light.*" **Components**: [[photo-]] (**light**) + [[-phobia]] (**fear/intolerance**) + [[-ia]] (**condition**)
_____

> [!question] COMMON CAUSES
> **Photophobia** is a symptom of many conditions across multiple specialties: 
> **Ophthalmologic**
> - [[Corneal abrasion]] or ulcer
> - [[Uveitis]] / [[iritis]]
> - [[Keratitis]] (**including [[keratoconjunctivitis]]**)
> - [[Cataracts]]
> - Dry eye disease
> - [[Glaucoma]] (**acute angle-closure**)
> - [[Albinism]] (**lack of iris pigment**)
> **Neurologic**
> - [[Migraine]] (**most common neurologic caus**e)
> - [[meningitis]] / [[encephalitis]]
> - **Traumatic brain injury (TBI/MTBI)**
> - Subarachnoid [[hemorrhage]]
> - Progressive [[supranuclear]] palsy
> **Systemic / Other**
> - [[Sjögren syndrome]]
> - Medications (tetracyclines, quinine, furosemide, others)
> - [[Measles]] 
> - [[blepharospasm]]

_____

> [!warning]+ RELATED TERMS
> | Term | Meaning |
> |---|---|
> | **[[Phonophobia]]** | Hypersensitivity to sound; frequently co-occurs with photophobia in migraine [3] |
> | **[[Osmophobia]]** | Hypersensitivity to smells; another [[migraine]]-associated sensory sensitivity [8] |
> | **[[Heliophobia]]** | Specific aversion or fear of sunlight or sun exposure  |
> | **[[Scotophobia]]** | Fear of darkness; opposite sensory aversion  |
> | **[[blepharospasm]]** | Involuntary eyelid closure, often photophobia-driven |
> | **[[miosis]]** | Pupil constriction reflex in response to light; impaired in some photophobic states [4] |
> | **[[Hyperacusis]]** | Heightened sensitivity to sound; analogous condition to photophobia  |
> | **Photophobic** | Adjectival form; "pertaining to or characterized by photophobia"  |
> | **[[Photalgia]]** | "Light pain" — a rare alternate term specifically emphasizing the pain component (*[[photo-]]* + *[[-algia]]*)  |
_____
>[!tip]- DERIVATIONS of [[photophobia]]
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