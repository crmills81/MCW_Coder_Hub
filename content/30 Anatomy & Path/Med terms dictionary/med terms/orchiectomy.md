---
tags:
  - specialty/urology
  - expert
  - medroot
aliases: []
roots:
  - orchi-
  - orch-
  - -ectomy
forms:
  - verb
"alphabet:": O
definition:
  - Removal of testicle
---
>[!Note] DEFINITION of [[orchiectomy]]
>Surgical removal of one or both testicles, used for cancer treatment or hormonal management.
_____
>[!info]+ ETYMOLOGY of [[orchiectomy]]
>Greek orchis (testicle) + ektome (excision)
_____
>[!example]+ RELATED TERMS to [[orchiectomy]]
>Orchidopexy
>Cryptorchidism
>Scrotum
_____
>[!tip]- DERIVATIONS of [[orchiectomy]]
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