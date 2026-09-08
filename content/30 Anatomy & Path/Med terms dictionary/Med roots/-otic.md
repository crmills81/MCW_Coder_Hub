---
tags:
  - medroot
aliases: []
roots:
  - -otic
forms:
  - suffix
  - adjective
  - suffix form
alphabet: O
definition:
  - pertaining to
---
>[!Note] DEFINITION of [[-otic]]
>forms adjectives from nouns: pertaining to (modifies [[-osis]])
_____
>[!info]+ ETYMOLOGY of [[-otic]]
>#greek
>
>|Component|Origin|Meaning|
>|---|---|---|
>|**[[-y]]** (adjectival form of **[[-osis]]**)|Greek _-ωτικός_ (-ōtikos), from _-ωσις_ (-ōsis)|Adjective-forming suffix — "**pertaining to** (a named condition or structure)" — adjectival counterpart to the noun-forming suffix [[-osis]]|
>
> The suffix entered English in the **1820s** as *neurotic* (**adjective**), borrowed from Modern Latin ***neuroticus***, from Greek ***νευρωτικός*** (neurotikos) — literally "**pertaining to the nerves**" (neuron + -ōtikos "pertaining to"). The adjective *psychotic* appeared in the **1900s**, and *nephrotic* in the **1920s**. The suffix *-ōtikos* ("**pertaining to**") connects [[-otic]] to the entire **[[adjective-forming suffixes]]**: ***[[neurotic]]*** (**neuro- + -otic $\rightarrow$ pertaining to the nerves/a neurosis**), ***[[psychotic]]*** (**psycho- + -otic $\rightarrow$ pertaining to the mind/a psychosis**), and ***[[nephrotic]]*** (**nephr- + -otic $\rightarrow$ pertaining to the kidneys/a nephrosis**). The **adjective-forming suffix** [[-otic]] is productive in neurology, psychiatry, nephrology, and dentistry: e.g., ***[[odotontic]]***, ***[[corticotropic]]*** (cf. *-otic*), ***[[hepatic]]*** (cf. *-ic* variant), and ***[[pulmonic]]*** (cf. *-ic* variant).
_____
>[!example]+ RELATED TERMS to [[-otic]]
>
>|  [[-otic]]  |   pertaining to   | - |         -          |       -       |
> |:---------:|:-----------------:|:----------:|:------------------:|:-------------:|
> |  [[-ac]]  |        YES        |    located in     |         -          |       -       |
> |  [[-an]]  |        YES        |    located in     |         -          |       -       |
> |  [[-ar]]  |        YES        |    located in     |         -          |       -       |
> | [[-ary]]  |        YES        |     -      |     place for      |       -       |
> | [[-al]]  |        YES        |    located in     |         -          |       -       |
> | [[-eal]]  |        YES        |    located in     |         -          |       -       |
> | [[-etic]] |        YES        |     -      |         -          |       -       |
> |  [[-ic]]  |        YES        |     -      |        drug        |     agent     |
> |  [[-id]]  |        YES        |     -      |   condition (of)   |  state (of)   |
> | [[-ile]]  |        YES        |     -      | capable of (being) |     like      |
> | [[-ean]]  |        YES        |    located in     |         -          |       -       |
> | [[-itic]] | (to inflammation) |     -      |        drug        |     agent     |
> | [[-ine]]  |        YES        |     -      |         -          |       -       |
> | [[-ive]] |        YES        |     -      |         -          |       -       |
> | [[-ous]]  |        YES        |     -      |  characterized by  |    full of    |
> | [[-tic]]  |        YES        |     -      |        drug        | agent, person |
>
_____
>[!tip]- DERIVATIONS of [[-otic]]
>```dataview
>TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
>SORT file.name ASC
>```
_____
>[!faq]- Query
>
>```dataview
>TABLE definition AS Definition
>FROM #medroot
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```

[[Med terms dictionary]]