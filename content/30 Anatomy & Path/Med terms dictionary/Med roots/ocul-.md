---
tags:
  - medroot
  - medterm
  - ophthalmology
aliases:
  - oculo‑
roots:
  - ocul-
  - ocu-
  - opt-
  - oculo‑
forms:
  - combining
  - prefix
"alphabet:": O
definition:
  - eye
---
>[!Note] DEFINITION of [[ocul-]]
>eye; [[Ocul‑]] appears in [[ophthalmology]] and anatomy terms focusing on the [[eyeball]], vision, or eye‑related pathology, such as [[oculomotor]] (*eye movement*) and [[oculoplasty]] (eyelid/orbit surgery). It forms adjectives like [[ocular]] (“*of the eye*”) and professional titles like oculist (old term for [[ophthalmologist]]).
>
>|Term|Breakdown|Brief meaning|
|---|---|---|
|[[Ocular]]|[[ocul‑]] + [[‑ar]] “**pertaining to**”|Of or relating to the eye.[dictionary+2](https://www.dictionary.com/browse/ocul)|
|[[Oculomotor]]|[[ocul/o-]] “**eye**” + [[-motor]] “**movement**”|Pertaining to eye movement (CN III).[mastermedicalterms](https://mastermedicalterms.com/snax_item/14639/)​|
|[[Oculist]]|[[ocul‑]] + [[‑ist]] “**specialist**”|Archaic term for eye doctor.[dictionary+1](https://www.dictionary.com/browse/ocul)|
|[[Oculoplasty]]|[[ocul‑]] + [[‑plasty]] “**surgical repair**”|Plastic/reconstructive surgery of eyelids, orbit, tear ducts.[wikipedia+1](https://en.wikipedia.org/wiki/Oculoplasty)|
|[[Oculofacial]]|[[ocul‑]] + [[-facial]]|Pertaining to eyes and face.[wikipedia](https://en.wikipedia.org/wiki/Oculoplasty)​|
_____
>[!info]+ ETYMOLOGY of [[ocul-]]
>#latin [[oculus]]; From Latin _oculus_ (“**eye**”), from Proto‑Indo‑European *h₃ekʷ- (“**to see**”). The combining form [[ocul‑]] enters English via Late Latin _ocularis_ (“of the eye”).
_____
>[!example]+ RELATED TERMS to [[ocul-]]
>
>|   [[ocul-]]   | eye |  -  |
|:-------------:|:---:|:---:|
| [[ophthalm-]] | YES |  -  |
|   [[opt-]]    | YES | vision    |
_____
>[!tip]+ DERIVATIONS of [[ocul-]]
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


[[Med roots]]
[[Appendix A Prefixes]]
[[Appendix B Combining Forms]]
[[Appendix C Suffixes]]
[[Appendix D Suffix forms]]