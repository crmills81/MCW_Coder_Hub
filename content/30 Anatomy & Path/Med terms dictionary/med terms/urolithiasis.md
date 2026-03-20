---
tags:
  - medterm
  - medroot
aliases: []
roots:
  - ur-
  - uro
  - lith-
  - -iasis
  - -sis
forms:
  - noun
  - prefix
  - suffix
"alphabet:": U
definition:
  - "'forms present participle'"
  - Stone(s) within the urinary tract.
---

>[!Note] DEFINITION of [[urolithiasis]]
>Formation of, and thus also presence of, [calculi] in the [urinary tract]. [[urolithiasis]] is **the formation of urinary calculi (“stones”) in the urinary system**. [[nephrolithiasis]] or. “kidney stones” refers to calculi or stones in the kidney and is the most common form of urinary tract. stone disease. Ureter and bladder calculi almost always originate in the kidneys.
_____
>[!info]+ ETYMOLOGY of [[urolithiasis]]
>[surface analysis], _[uro-]_ +‎ _[lithiasis], or, by [surface analysis] _[urolith] +‎ _[-iasis]. [[u·ro·li·thi·a·sis]] [ yoo r-oh-li-thahy-uh-sis ]
_____
>[!example]+ RELATED TERMS to [[urolithiasis]]
>- [[nephropathy]]
>- [[pyelonephritis]]
>- calculi
>- [[hyperuricemia]]

_____
>[!tip]- DERIVATIONS of [[urolithiasis]]
>```dataview
>TABLE definition AS Definition
>FROM #medterm 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
>SORT file.name ASC
>```
___
>[!faq]- Query
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