---
tags:
  - medroot
aliases: []
roots:
  - -e
forms:
  - suffix
  - combining
"alphabet:": E
definition:
  - linking
---
>[!Note] DEFINITION of [[-e]]
>forms nouns. THE DEFINITIVE NOUN-FORMER das it... In medical terminology construction, **-[[e]]** most commonly serves as a **linking vowel** between word roots or root + suffix when the subsequent element begins with a consonant or certain vowels, facilitating pronunciation (e.g., _[[gastr-]][[-e]]-[[ctomy]]_, _[[leuk-]][[-e]]-mia_).  
It also appears as a **terminal vowel** in standalone roots (e.g., _[[bronch-]] [[-e]]_, _[[stom-]]e_) or finalizes certain nouns/adjectives from Greek/Latin (e.g., _promethe_, _cachexie_); unlike productive suffixes like _[[-itis]]_, its role is **structural/orthographic** rather than semantic.[](https://www.transcendwithwords.com/post/medical-terminology-greek-and-latin-origins-and-word-formation-guidelines)
_____
>[!info]+ ETYMOLOGY of [[-e]]
>Derived from Ancient #greek nominative endings (-ē, [[-e]]) and #Latin first-declension markers, retained in combining forms for euphony. The connecting [[-e]]- follows Greek/Latin phonetic rules: used after roots ending in a consonant when joining to another root/suffix starting with a consonant (e.g., [[phleb-]]-e-lith); omitted before vowels. Standardized in 19th-century medical nomenclature to preserve classical word formation.
_____
>[!example]+ RELATED TERMS to [[-e]]
>[[bronch-]]- + -e-  [[-ectasis]]
>[[stom-]]- + -e-? + [[-itis]] (at root end)
>[[phleb-]] + -e? + [[-itis]]
_____
>[!tip]+ DERIVATIONS of [[-e]]
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