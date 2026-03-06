---
tags: [medterm]
aliases: []
roots: [poli-, myel-, -itis]
definition:: inflammation of the gray matter of the spinal cord
---
>[!note]+ Definition of [[poliomyelitis]]
>[[poli-]]o-[[myel-]][[-itis]] - inflammation of the gray matter of the spinal cord 
___
>[!info]+ Etymology of [[poliomyelitis]]
>The term "poliomyelitis" originates from Greek words: "polios" meaning **"gray," "myelos" meaning "marrow" (referring to the spinal cord), and the suffix "-itis" meaning "inflammation."** German physician Adolph Kussmaul coined the term around 1874, reflecting the inflammation of the spinal cord's gray matter that causes paralysis.

_____
>[!tip]- DERIVATIONS of [[poliomyelitis]]
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
