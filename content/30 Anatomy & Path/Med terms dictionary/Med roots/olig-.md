---
tags:
  - medroot
  - medterm
  - urology
aliases:
  - oligo‑
roots:
  - olig-
  - oligo‑
forms:
  - combining
  - prefix
"alphabet:": O
definition:
  - few
  - deficient
  - few, little, scanty, scant
---
>[!Note] DEFINITION of [[olig-]]
>few, deficient; [[Olig‑]] prefixes terms for low counts, volumes, or degrees in medicine, such as [[oliguria]] (**urine output <400-500 mL/day**), [[oligohydramnios]] (**low amniotic fluid**), [[oligodactyly]] (**few digits**), and [[oligospermia]] (**low sperm count**). It signals pathology involving insufficiency, contrasting with [[poly‑]] (“**many**”).[oreateai+4](https://www.oreateai.com/blog/understanding-the-prefix-oligo-in-medical-terminology/2ef822d05956af8cb5a316fd1778c385)
>
>|Term|Breakdown|Brief meaning|
|---|---|---|
|[[oliguria]]|[[olig‑]] “**few**” + [[‑uria]] “**urine**”|Reduced urine output (<400-500 mL/day).[rxlist+1](https://www.rxlist.com/oligo-_prefix/definition.htm)|
|[[Oligospermia]]|[[olig‑]] “**few**” + [[sperm-]] “**sperm**” + [[‑ia]]|Low sperm count in semen.[rxlist+1](https://www.rxlist.com/oligo-_prefix/definition.htm)|
|[[Oligohydramnios]]|[[olig‑]] “**scant**” + [[-hydro-]] “**water**” + [[-amnion]]|Too little amniotic fluid.[rxlist](https://www.rxlist.com/oligo-_prefix/definition.htm)​|
|[[Oligodactyly]]|[[olig‑]] “**few**” + [[-dactyl]] “**finger/toe**”|Fewer than 5 digits on hand/foot.[disorders.eyes.arizona+1](https://disorders.eyes.arizona.edu/category/clinical-features/oligodactyly)|
|[[Oligotrophic]]|[[olig‑]] “**few**” + [[-troph]] “**nourishment**”|Nutrient‑poor (e.g., lakes).[etymonline](https://www.etymonline.com/word/oligo-)​|
_____
>[!info]+ ETYMOLOGY of [[olig-]]
>#greek [[oligos]]; From Ancient Greek _ὀλίγος_ (_olígos_) meaning “**few, small, little, scanty,**” of uncertain origin but Proto‑Indo‑European roots related to paucity.
_____
>[!example]+ RELATED TERMS to [[olig-]]
>
>| [[olig-]] | few | deficient |  -  |        -         |
|:---------:|:---:|:---------:|:---:|:----------------:|
|  [[a-]]   |  -  |    YES    | not | without, lacking |
| [[hypo-]] |  -  |    YES    | low | below normal, under                 |
_____
>[!tip]+ DERIVATIONS of olig-
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