---
tags:
  - " #medterm "
  - specialty/urology
  - medterm
aliases:
  - pyelonephritis
roots:
  - coli-
  - nephr-
  - -itis
"definition:": Inflammation of kidney caused by E. coli
forms:
  - noun
"alphabet:": C
---
>[!note]+ Definition of [[colinephritis]]
> [[col-|coli-]][[nephr-]][[-itis]] - Inflammation of kidney, caused by E. coli (*kidney inflammation by E.coli*)
> [[pyelonephritis]] is a type of urinary tract infection where **one or both kidneys become infected**. They can be infected by bacteria or a virus.
___
>[!info]+ Etymology of [[colinephritis]]
>[[colinephritis]] combines "**coli**" (*E. coli*), "[[nephr-]]/o" (*kidney*), and "[[-itis]]" (*inflammation*) to mean E. coli-caused kidney inflammation
_____
>[!tip]+ DERIVATIONS of [[colinephritis]]
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

