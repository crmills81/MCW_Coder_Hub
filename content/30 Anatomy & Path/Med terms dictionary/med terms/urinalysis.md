---
tags:
  - medterm
  - medroot
aliases:
roots:
  - urina-
  - ur-
  - -lysis
  - -sis
forms:
  - prefix
  - suffix
  - noun
alphabet: U
definition:
  - diagnostic test of urine
---
>[!Note] DEFINITION of [[urinalysis]]
>The test includes macroscopic checks for color (*yellow from urochrome, changes indicate dehydration or blood*), clarity (cloudy suggests infection), odor, and specific gravity (1.003-1.035 normal); **dipstick for pH (5-7), glucose, ketones, protein, blood, leukocytes, nitrite, bilirubin, urobilinogen; microscopy for RBCs, WBCs, epithelial cells, casts, crystals, bacteria**. Used for UTI diagnosis, [[hematuria]] evaluation, [[proteinuria]] screening in pregnancy, and monitoring diabetes or kidney function.
_____
>[!info]+ ETYMOLOGY of [[urinalysis]]
>#latin From "**urine**" (Latin _urina_, from PIE _ur-_, "water, liquid") + "analysis" (Greek _análysis_, "breaking up"); coined 1889, evolving from ancient [[uroscopy]] around 6000 years ago.
_____
>[!tip]- DERIVATIONS of [[urinalysis]]
>```dataview
>TABLE definition AS Definition
>FROM #medterm 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
>SORT file.name ASC
>```
_____
>[!faq]- Query functionality
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