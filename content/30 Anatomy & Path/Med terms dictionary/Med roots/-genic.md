---
tags:
  - medroot
  - medterm
aliases:
  - -genous
roots:
  - -genic
  - -ic
  - gen-
forms:
  - compound suffix form
  - suffix
  - adjective
"alphabet:": G
definition:
  - causing
  - producing
  - caused by
  - produced by or in
---
>[!Note] DEFINITION of [[-genic]]
>1. forms adjectives: [[gen-]] [[-ic]] - causing, producing
>2. forms adjectives: [[gen-]][[-ous]] - caused by, produced by or in
>In medical and biological contexts, **[[-genic]]** is an adjectival suffix that indicates a relationship to creation or causation. It can be used in two primary ways:
>**Causative:** Describing something that _produces_ a specific effect or condition (e.g., _carcinogenic_ substances produce cancer).
>**Origin-based:** Describing something that is _produced by_ a specific organ or process (e.g., _neurogenic_ pain originates in the nerves).
_____
>[!info]+ ETYMOLOGY of [[-genic]]
>- **Origin:** Ancient #greek[](https://www.wikidoc.org/index.php/List_of_medical_roots,_suffixes_and_prefixes)​
>- **Root:** Derived from _genes_ (meaning "born of" or "produced by").[](https://www.wikidoc.org/index.php/List_of_medical_roots,_suffixes_and_prefixes)​
>- **Transformation:** It shares the same linguistic root as **-genesis**, stemming from the Greek verb _gignesthai_ ("to become" or "to be born").
_____
>[!example]+ RELATED TERMS to [[-genic]]
>|Medical Term|Focus|Meaning|
|---|---|---|
|**carcinogenic**|Causative|Substance that produces cancer|
|**Iatrogenic**|Origin|Condition caused by medical intervention|
|**pathogenic**|Causative|Organism that produces disease|
|**neurogenic**|Origin|Stemming from the nervous system [wikipedia](https://en.wikipedia.org/wiki/List_of_medical_abbreviations:_N)​|
|**[[nephrogenic]]**|Origin|Stemming from the kidneys (e.g., _nephrogenic diabetes insipidus_) [wikipedia](https://en.wikipedia.org/wiki/List_of_medical_abbreviations:_N)​|
_____
>[!tip]+ DERIVATIONS of [[-genic]]
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