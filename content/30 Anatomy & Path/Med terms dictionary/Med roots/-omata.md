---
tags: medroot
aliases:
  - -oma
roots:
  - -oma
  - -ta
  - -ma-
forms:
  - suffixes
  - suffix
  - noun
"alphabet:": O
definition:
  - multiple tumors/masses
  - irregular plural form of -oma
---
>[!Note] DEFINITION of [[-omata]]
> In classical/Greek-based medical terminology, many singular nouns ending in **-oma** (e.g., _hematoma, fibroma, carcinoma, sarcoma_) can take the plural **-omata** (_hematomata, fibromata, carcinomata, sarcomata_). This is the older, more classical plural; in modern clinical English, you will also see and chart **-omas** as an acceptable plural (**e.g., “multiple fibromas”**), but **-omata** is still correct and shows up in pathology texts and some formal writing.
_____

> [!info]+ ETYMOLOGY of [[-omata]]
> - **[[-oma]]** comes from Greek **-ōma** −ωμα−ωμα, a noun-forming suffix meaning “**result**,” “**product**,” or “**swelling/tumor**,” especially in a pathological sense.
>     
> - The **plural in Greek** is **-ōmata** −ωˊματα−ωˊματα, which is anglicized as **[[-omata]]** in medical terms.
>     
> - English later also created the simpler regular plural **-omas**, so you now have **two plurals in use**: _sarcomas_ and _sarcomata_ are both correct.
>
_____

> [!example]+ RELATED TERMS to [[-omata]]
>  - **Singular vs plural:**
>     
>     - Singular: **-oma** = tumor, neoplasm, swelling (e.g., _lymphoma, melanoma, osteoma_).
>         
>     - Plural: **-omata** (classical) or **-omas** (modern/colloquial clinical).
>         
> - **Related “mass / lesion” suffixes:**
>     
>     - **-cele** = hernia, protrusion (e.g., hydrocele).
>         
>     - **[[-cyst]] / [[cyst-|-cystis]]** = sac, bladder, cyst.
>         
>     - **-itis** (inflammation) and **[[-oma]]** can intersect in cancer terms historically (e.g., _lymphoma_ vs _lymphadenitis_).
> 
_____

> [!quote]+ **Coding angle (ICD-10-CM/CPT)**
> 
> - Coding systems don’t distinguish between **[[-oma]]** and **[[-omata]] / [[-omas]]**; they just care about:
>     
>     - The **type** of tumor (**benign vs malignant, site, histology**).
>         
>     - The **number** and **location** when that impacts code choice or modifiers.
>         
> - Examples you’ll see conceptually (no single code for “**-omata**”):
>     
>     - Malignant neoplasms (e.g., various C codes in ICD-10-CM for carcinomas, sarcomas).
>         
>     - Benign neoplasms (**D codes**) or neoplasms of uncertain behavior, all built on -oma roots in the diagnostic term.
>         
> 
> For your Obsidian setup, I’d give **-oma** its main entry and note **-omata** under it as “classical plural of [[-oma]] = multiple tumors/masses,” with a quick reminder that modern charts often use **-omas** instead.

_____
>[!tip]- DERIVATIONS of [[-omata]]
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
