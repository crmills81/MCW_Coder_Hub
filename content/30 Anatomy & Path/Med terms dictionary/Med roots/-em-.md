---
tags:
  - medroot
aliases: []
roots:
  - -em-
forms:
  - combining
  - prefix
  - suffix
"alphabet:": E
definition:
  - blood
---
>[!Note] DEFINITION of [[-em-]]
>blood; No standard medical morpheme -em- exists as a prefix or suffix with independent meaning in modern terminology; searches across standard references yield no entries. It may represent a misremembered or transitional element within Greek/Latin compounds—most likely alluding to -emia ("blood condition," e.g., anemia, leukemia) or hemo-/[[hem-]] ("blood") where [[-em-]] serves as a phonetic bridge between roots. If from a specific term you're referencing (e.g., embolism, emphysema), clarify and I can break that word down instead.
_____
>[!info]+ ETYMOLOGY of [[-em-]]
>#greek haima, haimatos; - No direct etymology for isolated **[[-em-]]**; if related to **[[-emia]]**, derives from **Greek _haima_ (αἷμα)** "blood" + abstract noun suffix **-ia**.
>- In _hemo-_ forms, _[[-em-]]_ reflects Greek **stem variation** (_haim-_, _[[hem-]]_) before vowels/consonants for euphony.
>- Common in hematology terms but not a detachable prefix/suffix like _[[-itis]]_ or _[[-ectomy]]_.
_____
>[!example]+ RELATED TERMS to [[-em-]]
>
>| [[-em-]]    | blood |
| ----------- | ----- |
| [[hem-]]    | YES   |
| [[sangui-]] | YES      |
_____
>[!tip]+ DERIVATIONS of [[-em-]]
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