---
tags:
  - medroot
  - medterm
  - otolaryngology
aliases: []
roots:
  - -glossia
  - -sia
  - -ia
forms:
  - prefix
  - suffix
alphabet: G
definition:
  - a condition or state of the tongue
---
>[!Note] DEFINITION of [[-glossia]]
>In medical terminology, **[[-glossia]]** serves as a terminal combining form to **describe the anatomical, structural, or functional status of the tongue**. It is most frequently used with prefixes that define size ([[macro-]], [[micro-]]), absence ([[a-]]), or **restriction** ([[ankylo-]]). While the root _gloss/o_ or _glott/o_ is used as a prefix for inflammatory or procedural terms (like [[glossitis]] or [[glossectomy]]), the suffixal form _-[[-glossia]]_ is primarily reserved for developmental anomalies and diagnostic classifications.
_____
>[!info]+ ETYMOLOGY of [[-glossia]]
> #greek The suffix originates from Ancient Greek and reflects the dual meaning of the organ in human biology:
> - **Greek Root**: Derived from _glōssa_ (γλῶσσα), which translates to both "**tongue**" (*the physical organ*) and "**language**".[](https://en.wikipedia.org/wiki/List_of_medical_roots_and_affixes)
> - **Linguistic Structure**: It is a combination of the root _[[gloss-]]_ and the suffix _[[-ia]]_, which creates an abstract noun denoting a pathological condition or state.[](https://wtcs.pressbooks.pub/medterm/chapter/1-5-common-suffixes/)
> - **Cognates**: It shares its origin with the Greek _glōtta_, the source of the English word "[[glottis]]".[](https://en.wikipedia.org/wiki/List_of_medical_roots_and_affixes)​
_____
>[!example]+ RELATED TERMS to [[-glossia]]
>
|          **Term**           |    **Meaning**    | Prefix/Suffix? | Notes |
| :---------------------: | :-----------: | :------------: | :---: |
| [[-glossia]] | a condition or state of the tongue |       -        |   -   |
|**Term**|**Definition**|**Coding/Clinical Note**|
|**[[Ankyloglossia]]**|Tongue-tie|Restrictive lingual frenulum; coded as Q38.1 [publications.aap+1](https://publications.aap.org/codingnews/article/doi/10.1542/pcco_book117_document004/28039/You-Code-It).|
|**[[Macroglossia]]**|Enlarged tongue|Often associated with syndromes; coded as Q38.2 [aapc](https://www.aapc.com/codes/icd-10-codes/Q38.1)​.|
|**[[Microglossia]]**|Small tongue|Abnormally small tongue; coded as Q38.3 [aapc](https://www.aapc.com/codes/icd-10-codes/Q38.1)​.|
|**[[Aglossia]]**|Absence of tongue|Complete congenital absence; coded under Q38.3 [aapc](https://www.aapc.com/codes/icd-10-codes/Q38.1)​.|
|**[[Schistoglossia]]**|Cleft tongue|A "bifid" or split tongue; coded as Q38.3 [aapc](https://www.aapc.com/codes/icd-10-codes/Q38.1)​.|
|**[[Pachyglossia]]**|Thick tongue|Abnormal thickening of the lingual tissues.|
_____
>[!tip]+ DERIVATIONS of [[-glossia]]
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