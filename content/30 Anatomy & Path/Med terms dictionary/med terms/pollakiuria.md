---
tags:
  - medterm
  - medroot
  - urology
aliases:
roots:
  - poll-
  - -uria
  - -ia
forms:
  - prefix
  - suffix
alphabet: P
definition:
  - frequent urination
---
>[!Note] DEFINITION of [[pollakiuria]]
>[[pollakiuria]] (also called pollakuria or frequent daytime urination syndrome) primarily **affects toilet-trained children aged 3-8 years, causing urges to urinate every 5-30 minutes (up to 40 times daily) during waking hours, but normal nighttime sleep and no pain, incontinence, fever, or excessive thirst.** Unlike [[polyuria]] (high urine volume from causes like diabetes), [[pollakiuria]] involves normal total output in frequent small amounts, often resolving spontaneously in weeks to months; it may recur and is diagnosed by excluding UTI, diabetes, or infection via [[urinalysis]].
_____
>[!info]+ ETYMOLOGY of [[pollakiuria]]
>#greek - Pollaki-: Greek _pollakis_ (πολλάκις), meaning “*frequently*” or “*often*.”
>- [[-uria]]: Greek _ouron_ (οὖρον), “urine” (as in prior query).  
>- Literally “*frequent urination*,” distinguishing it from volume-based terms like [[polyuria]].
_____
>[!tip]+ DERIVATIONS of [[pollakiuria]]
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
>FROM #medterm 
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```

[[Med roots]]
[[Appendix A Prefixes]]
[[Appendix B Combining Forms]]
[[Appendix C Suffixes]]
[[Appendix D Suffix forms]]