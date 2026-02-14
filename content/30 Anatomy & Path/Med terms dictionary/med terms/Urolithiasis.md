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
>Formation of, and thus also presence of, [calculi](https://en.wiktionary.org/wiki/calculus#English:_medical_concretion "calculus") in the [urinary tract](https://en.wiktionary.org/wiki/urinary_tract#English "urinary tract"). [[urolithiasis]] is **the formation of urinary calculi (“stones”) in the urinary system**. [[nephrolithiasis]] or. “kidney stones” refers to calculi or stones in the kidney and is the most common form of urinary tract. stone disease. Ureter and bladder calculi almost always originate in the kidneys.
_____
>[!info]+ ETYMOLOGY of [[urolithiasis]]
>[surface analysis](https://en.wiktionary.org/wiki/Appendix:Glossary#surface_analysis "Appendix:Glossary"), _[uro-](https://en.wiktionary.org/wiki/uro-#English "uro-")_ +‎ _[lithiasis](https://en.wiktionary.org/wiki/lithiasis#English "lithiasis")_, or, by [surface analysis](https://en.wiktionary.org/wiki/Appendix:Glossary#surface_analysis "Appendix:Glossary"), _[urolith](https://en.wiktionary.org/wiki/urolith#English "urolith")_ +‎ _[-iasis](https://en.wiktionary.org/wiki/-iasis#English "-iasis")_. [[u·ro·li·thi·a·sis]] [ yoo r-oh-li-thahy-uh-sis ]
_____
>[!example]+ RELATED TERMS to [[urolithiasis]]
>- [[nephropathy]]
>- [[pyelonephritis]]
>- calculi
>- [[hyperuricemia]]

_____
>[!tip]+ DERIVATIONS of [[urolithiasis]]
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

[[Med roots dictionary]]