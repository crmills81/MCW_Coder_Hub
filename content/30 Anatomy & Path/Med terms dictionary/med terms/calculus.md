---
tags:
  - medterm
  - medroot
  - urology
aliases:
  - urinal stone
  - calculi
  - stone
  - ureter calculus
roots:
  - calc-
  - -ulus
  - Calx
forms:
  - noun
  - combining
  - diminutive
"alphabet:": C
definition:
  - a concretion of material, typically mineral salts, that forms in an organ or duct of the body
  - The presence of calculi (stones) in the kidneys.
---
>[!Note] DEFINITION of [[calculus]]
>In medical terms, "[[calculus]]" refers to a **concretion of material, typically mineral salts, that forms in an organ or duct of the body**, often called a [[calculus|stone]]. These can occur in various locations such as the **gallbladder, kidneys, ureters, bladder, or urethra, and their formation is known as [[lithiasis]].**
_____
>[!info]+ ETYMOLOGY of [[calculus]]
>The word "[[calculus]]" comes from #latin, meaning "**small pebble**" or "**[[calculus|stone]]**," derived from [[calx]] (**limestone**). This name originated because ancient Romans used small stones ([[calculus|calculi]]) as counters for counting and calculating on boards, leading to the word's association with computation, a sense used by Cicero. The modern mathematical field, shortened from "**differential [[calculus]]**," developed by Newton and Leibniz, adopted this term to describe a system of calculation with infinitesimals, though it's also used for other systems like 
>
_____
>[!example]+ RELATED TERMS to [[calculus]]
>[Nephrolithiasis](https://en.wikipedia.org/wiki/Nephrolithiasis)
>[Urolithiasis](https://en.wikipedia.org/wiki/Urolithiasis)
>[Cholelithiasis](https://en.wikipedia.org/wiki/Cholelithiasis)
_____
>[!tip]+ DERIVATIONS of [[calculus]]
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