---
tags:
  - medroot
aliases:
  - -gen
  - -genic
  - -genesis
roots:
  - -gn-
forms:
  - combining
  - prefix
  - suffix
"alphabet:": G
definition:
  - be born
  - originating from
---
>[!Note] **DEFINITION** of [[-gn-]]
>be born
>*see also: [[nat-]]* 
>In medical terminology, **-gen / -genic / -genesis** all track the idea of _origin and production_:
>- **Etiologic sense (cause)**
>- _Carcinogenic_: capable of producing cancer.
>- _Cardiogenic shock_: shock caused by heart failure as the primary origin.[](https://en.wikipedia.org/wiki/List_of_medical_roots_and_affixes)​
>	- **Source/location sense**
>	- _Endogenous_: originating within the body or the specific organ/system.
>	- _Exogenous_: originating outside the organism (e.g., exogenous infection, exogenous >insulin).[](https://en.wikipedia.org/wiki/List_of_medical_roots_and_affixes)
	>- **Process/formation sense**
	>- _Osteogenesis_: process of bone formation.
	>- _Hemopoiesis_ overlaps conceptually (blood formation), but uses a different root.[](https://www.cliffsnotes.com/study-notes/21300305)
	>- For coding/clinical reading, you can mentally substitute **“origin / production / formation”** whenever you see a _-gen-_ family ending in a diagnosis or pathophysiology phrase.
_____
>[!info]+ **ETYMOLOGY** of [[-gn-]]
>#latin (g)nasci, natus; - From #Greek **-γενής (-genēs)** = “born of, produced by, of a certain kind.”[](https://en.wikipedia.org/wiki/List_of_medical_roots_and_affixes)​
>- Ultimately from the Greek verbal root **γεν-** as in **γεννάειν (gennaein)** = “to beget, to give birth, to be born.”[](http://biblehub.com/greek/1085.htm)
>- Related to Greek **γένος (genos)** = “kind, race, stock, family, offspring, class,” which underlies words like _genetics, genotype, genocide._
_____
>[!example]+ **RELATED TERMS** to [[-gn-]]
>
|          Term           |    Meaning    | Prefix/Suffix? | Notes |
| :---------------------: | :-----------: | :------------: | :---: |
| [[-gn-]] | be born |       -        |   -   |
|    [[nat-]]     |    YES     |    -     | - |
_____
>[!tip]+ **DERIVATIONS** of [[-gn-]]
>```dataview
>TABLE definition AS Definition
>FROM #medroot
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
>SORT file.name ASC
>```
_____
>[!faq]- **Query functionality**
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