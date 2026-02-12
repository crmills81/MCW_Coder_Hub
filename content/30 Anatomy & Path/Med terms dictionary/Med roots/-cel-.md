---
tags:
  - medroot
aliases:
  - kel-
  - c(k)el-
roots:
  - -cel-
forms:
  - combining
  - prefix
  - suffix
"alphabet:": C
definition:
  - hernia
  - tumor
  - swelling
---
>[!Note] DEFINITION of [[-cel-]]
>hernia, tumor, swelling, *bulge*; In medical terminology, **[[-cele]]** (sometimes spelled **[[-coele]]**) denotes a **hernia, [[cyst-]], or abnormal protrusion/swelling** involving a hollow organ, cavity, or meningeal sac, often indicating a weakness in surrounding tissues. It is most common in terms related to abdominal wall defects, brain/spinal herniations, or fluid-filled sacs (e.g., _[[hydrocele]]_); clinically, these often require surgical repair to prevent complications like incarceration or rupture.[](https://louis.pressbooks.pub/medicalterminology/chapter/suffixes/)
_____
>[!info]+ ETYMOLOGY of [[-cel-]]
>#greek kele; - From **Greek _kēlē_ (κῆλη)**, meaning **"hernia, tumor, rupture."**
>- Entered medical English via **Latin _coele_** in the 17th–18th centuries, systematized during the anatomical revival; modern spelling **-cele** reflects anglicized pronunciation while retaining classical sense of "protrusion through a defect."
_____
>[!example]+ RELATED TERMS to [[-cel-]]
>
>| [[-cel-]] | tumor | swelling | hernia |    -    |
|:---------:|:-----:|:--------:|:------:|:-------:|
| [[edema]] |   -   |   YES    |   -    |    -    |
| [[30 Anatomy & Path/Med terms dictionary/Med roots/-oma]]  |  YES  |    -     |   -    | disease |
| [[onc-]]  |  YES  |    -     |   -    |    -    |
_____
>[!tip]+ DERIVATIONS of [[-cel-]]
>```dataview
>TABLE definition AS Definition 
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


