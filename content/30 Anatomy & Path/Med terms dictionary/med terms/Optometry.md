---
tags:
  - medroot
  - ophthalmology
  - medterm
aliases: []
roots:
  - Optometry
  - opt-
  - -metry
  - opto-
forms:
  - prefix
  - suffix
alphabet: O
definition:
  - professional practice of measuring vision & prescribing corrective lenses
---
>[!Note] DEFINITION of [[Optometry]]
>[[Optometry]] is a **healthcare practice** focused on **examining eyes for visual defects, prescribing corrective lenses, and detecting eye abnormalities**. Optometrists are healthcare providers who examine, diagnose, treat, and manage diseases and disorders of the eye and visual system, including performing vision tests and prescribing corrective lenses.
_____
>[!info]+ ETYMOLOGY of [[Optometry]]
>#greek 
>- **[[Opto-]] (Combining Form):** Derived from the Ancient Greek _optos_, meaning "**seen**" or "**visible**". This root is related to _[[-opsis]]_ ("**view**" or "**sight**") and _ophthalmos_ ("**eye**"). It traces further back to the Proto-Indo-European root **okw-**, meaning "to see". 
>- **[[-metry]] (Suffix):** Derived from the Ancient Greek _metria_, meaning "**a measuring of**". This comes from metron ("measure"), which stems from the PIE root **[[me-]]**, meaning "to measure".
>
_____
>[!example]+ RELATED TERMS to [[Optometry]]
>
|        Term         |                                  Meaning                                  |       Prefix/Suffix?        | Notes |
|:-------------------:|:-------------------------------------------------------------------------:|:---------------------------:|:-----:|
|    [[Optometry]]    | professional practice of measuring vision & prescribing corrective lenses |  -   |   -   |
| [[ophthalmologist]] |  MD/DO who provides full medical & surgical eye care   |        [[ophthalm-]]  |   -   |
|     [[myopia]]      |  Nearsightedness  | [[op-]], [[myo-]], [[-pia]] | difficulty seeing far away |
|   [[hyperopia]]    |    Farsightedness    | [[hyper-]], [[-ia]]  |  difficulty seeing up close  |
_____
>[!tip]- DERIVATIONS of [[Optometry]]
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