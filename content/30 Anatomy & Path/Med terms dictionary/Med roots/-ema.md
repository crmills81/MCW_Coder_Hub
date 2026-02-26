---
tags:
  - medroot
  - medterm
aliases: []
roots:
  - -ema
  - -ma
forms:
  - suffix
  - noun
  - suffixes
"alphabet:": E
definition:
  - condition (of)
  - state (of)
---
>[!Note] DEFINITION of [[-ema]]
>Forms abstract nouns: **condition (of), state (of)**; The suffix **-ema** is used in medical terminology to **denote a condition, state, or pathological result that affects the body**. It commonly indicates the presence of **fluid accumulation, swelling, tissue changes, or disease states that result from underlying pathological processes.** This suffix is particularly prevalent in terms describing abnormal collections of material (**such as fluid, blood, or pus**) in body tissues or cavities. The conditions denoted by [[-ema]] typically represent the end result or manifestation of a disease process rather than the disease mechanism itself. Terms using this suffix often describe **observable or measurable pathological states that can be diagnosed clinically or through imaging studies**.
_____
>[!info]+ ETYMOLOGY of [[-ema]]
>#greek - **Origin**: *Greek*
>- **Root word**: _-ēma_ (ἦμα)
>- **Meaning**: The Greek suffix derives from the neuter form of nouns indicating "**result of**" or "**condition of**"
>- **Historical development**: The suffix entered medical Latin through Greek medical texts and became standardized in Western medical terminology during the development of scientific medicine in the Renaissance and Enlightenment periods
>
_____
>[!example]+ RELATED TERMS to [[-ema]]
>
>|   [[-ema]]   | condition (of) | state (of) |       -        |
|:----------:|:--------------:|:----------:|:--------------:|
|  [[-a]]  |      Yes       |    Yes     |       -        |
| [[-esis]]  |      Yes       |    Yes     |       -        |
|  [[-ia]]   |      Yes       |    Yes     |       -        |
|  [[-ism]]  |      Yes       |    Yes     |       quality of       |
| [[-ismus]] |      Yes       |    Yes     | muscular spasm |
|  [[-sis]]  |      Yes       |    Yes     |       -        |
|  [[-ty]]   |      Yes       |    Yes     |       -        |
|   [[-y]]   |      Yes       |    Yes     |       -        |
>
>**Terms Using [[-ema]]:**
>
>1. **[[Edema]]** (oedema) - Swelling caused by excess fluid trapped in body tissues
>2. **[[Empyema]]** - Collection of pus in a body cavity, especially the pleural space
>3. **Eczema** - Inflammatory skin condition causing itching and rashes
>4. **Erythema** - Redness of the skin due to capillary dilation
>5. **Emphysema** - Lung condition involving damaged air sacs (**alveoli**)
>6. **[[Hematoma]]** - Collection of blood outside blood vessels
>7. **[[Lymphedema]]** - Swelling due to lymphatic fluid accumulation
>8. **[[Myxedema]]** - Severe [[hypothyroidism]] with skin and tissue swelling
>9. **[[Papilledema]]** - Optic disc swelling (**relevant to your ophthalmology specialty**)
>10. **Pyoderma** - Bacterial skin infection producing pus
>
_____
>[!tip]- DERIVATIONS of [[-ema]]
>```dataview
>TABLE definition AS Definition
>FROM #medroot
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
>SORT file.name ASC
>```
_____
>[!faq]- Query functionality
>
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