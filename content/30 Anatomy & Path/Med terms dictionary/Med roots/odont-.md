---
tags:
  - " #medroot"
  - medroot
  - medterm
aliases:
  - odonto‑
  - odont/o‑
roots:
  - odont-
  - dent-
  - odonto‑
forms:
  - combining
  - prefix
  - noun
"alphabet:": O
definition:
  - tooth
---
>[!Note] DEFINITION of [[odont-]]
>tooth; [[Odont‑]] labels **anatomy, pathology, and procedures involving teeth, such as tooth development** ([[odontogenesis]]), enamel ([[odontoblasts]]), or specialties like [[odontology]] (*forensic dentistry*) and [[orthodontics]] (*tooth alignment*). It’s prevalent in dentistry ([[periodontitis]], [[endodontics]]) and zoology (e.g., acrodont teeth).[dictionary+3](https://www.dictionary.com/browse/odont)
_____
>[!info]+ ETYMOLOGY of [[odont-]]
>#greek [[odous]], [[odontos]]; From Ancient Greek _ὀδούς_ (_odoús_), **genitive** _ὀδόντος_ (_odontos]]_), meaning “**tooth**,” from Proto‑Indo‑European _h₃dónts_ (“**tooth**”). The Latin equivalent **[[dent‑]] / [[denti‑]]** parallels it (e.g., dentist).[merriam-webster+3](https://www.merriam-webster.com/dictionary/odont-)
_____
>[!example]+ RELATED TERMS to [[odont-]]
>
>| [[dent-]]  | tooth |
| :----------: | :-----: |
| ------------ | ------- |
| [[odont-]]   | YES     |
|   [[odonto‑]]           |    YES     |
_____
>[!tip]+ DERIVATIONS of odont-
>```dataview
>TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
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