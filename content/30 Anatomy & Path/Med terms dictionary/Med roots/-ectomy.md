---
tags:
  - medroot
  - surgery
aliases:
  - -ectomia
roots:
  - -ectomy
forms:
  - compound suffix form
  - noun
"alphabet:": E
definition:
  - surgical excision
  - removal of all or part of an organ
---
>[!Note] DEFINITION of [[-ectomy]]
forms nouns: >[[ecto-|ect-]][[tom-]][[-y]] - surgical excision, removal of an organ (**condition of cutting out**); [[-ectomy]] denotes the surgical removal or resection of all or part of an anatomical structure, organ, or pathological growth, typically via incision and excision, leaving a wound that is closed or reconstructed. Common in general, orthopedic, and oncologic [[surgery]] (**e.g., appendectomy, hysterectomy**), it implies complete or partial extirpation rather than repair ([[-plasty]]) or incision ([[-tomy]]); modern usage includes minimally invasive and robotic techniques, with precise documentation critical for coding (**e.g., CPT 40000-series**).
_____
>[!info]+ ETYMOLOGY of [[-ectomy]]
>From #greek ἐκτομή (ektomḗ), meaning "*a cutting out*."
>Breakdown: ἐκ- (ek-) ("**out**") + τομή (tomḗ) ("**cutting, incision**").
>Latinized as [[-ectomia]] in 19th-century surgical nomenclature; widespread by early 20th century as [[laparotomy]]/lobectomy terms proliferated.
_____
>[!example]+ RELATED TERMS to [[-ectomy]]
>| Term            | Root + [[-ectomy]]                     | Meaning                                  |
>|-----------------|------------------------------------|------------------------------------------|
>| Appendectomy    |[[ appendic-]] (appendix) + [[-ectomy]]  | Surgical removal of appendix.            |
>| Hysterectomy    | [[hyster-]] (uterus) + [[-ectomy]]        | Surgical removal of uterus.              |
>| Mastectomy      | [[mast-]] (breast) + [[-ectomy]]        | Surgical removal of breast.              |
>| Lobectomy       | lob- (lobe) + [[-ectomy]]          | Surgical removal of a lobe (lung/liver). |
>| [[tonsillectomy]]   | tonsill- (tonsils) + [[-ectomy]]       | Surgical removal of tonsils.             |
>| Cholecystectomy | [[cholecyst-]] (gallbladder) + [[-ectomy]] | Surgical removal of gallbladder.      |
_____
>[!tip]- DERIVATIONS of [[-ectomy]]
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