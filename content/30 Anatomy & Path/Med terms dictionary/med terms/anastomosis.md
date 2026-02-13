---
tags:
  - medterm
aliases: []
roots:
  - ana-
  - stom-
  - -osis
  - -sis
"definition:": Connection of two things normally diverging, Formation of passage between two normally distinct spaces or organs
alphabet: A
forms:
  - combining
  - noun
  - diminutive
---
>[!note]+ Definition of [[anastomosis]]
>[[ana-]][[stom-]][[-osis]] - 
>1. Connection of two things normally diverging (abnormal opening back [aka re-joining/re-opening])
>2. Formation of passage between two normally distinct spaces or organs 
___
>[!info]+ Etymology of [[anastomosis]]
>#greek
_____
>[!tip]+ DERIVATIONS of [[anastomosis]]
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

