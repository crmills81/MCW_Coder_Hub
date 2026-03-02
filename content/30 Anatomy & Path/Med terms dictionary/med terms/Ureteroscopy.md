---
tags:
  - medterm
  - medroot
aliases: ureteroscope
roots:
  - Ureteroscopy
  - ureter
  - ur-
  - -scopy
  - ur
  - -py
  - ur-
  - uro
forms:
  - prefix
  - suffix
  - noun
  - combining
alphabet: U
definition:
  - minimally invasive medical procedure used to examine the upper urinary tract infection
---
>[!Note] DEFINITION of [[ureteroscopy]]
>**[[ureteroscopy]]** involves the insertion of a thin, fiber-optic instrument called a **[[ureteroscopy|ureteroscope]]** through the urethra and bladder, then directly into the [[ureter]]. This technique allows [[urologists]] to visualize internal structures without making external incisions, making it a primary method for treating kidney stones ([[lithotripsy]]) and diagnosing urothelial cancers.
_____
>[!info]+ ETYMOLOGY of [[ureteroscopy]]
>#greek The term is constructed from three distinct linguistic components:[](https://www.ncbi.nlm.nih.gov/books/NBK607447/)
>- **[[Ureter-]]**: Derived from the Greek _oureter_, referring to the tube that carries urine from the kidney to the bladder.[](https://en.wiktionary.org/wiki/ureteroscopy)
>- **[[-o]]-**: A combining vowel used in medical terminology to connect word roots and suffixes for ease of pronunciation.[](https://www.ncbi.nlm.nih.gov/books/NBK607447/)​
>- **[[-scopy]]**: Derived from the Greek _skopia_, meaning "**to look at**" or "**visual examination**".
_____
>[!tip]- DERIVATIONS of [[ureteroscopy]]
>```dataview
>TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name !=[[]].file.name
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