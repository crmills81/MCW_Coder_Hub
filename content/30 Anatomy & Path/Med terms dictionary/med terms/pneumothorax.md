---
tags:
  - specialty
  - medterm
aliases: []
roots:
  - pneumat-
  - thorac-
  - ax-
  - thorax-
"definition:": air filling pleura
forms:
  - noun
"alphabet:": P
---
>[!note]+ Definition of pneumothorax
>[[pneumat-|pneum(at)-]]o-[[thorac-|thorax-]] - air filling [[pleur-]]al space due to perforation (chest air)
___
>[!info]+ Etymology of pneumothorax
>**pneumothorax** (n.) "presence of air in the pleural cavity," 1821, from French **pneumothorax** (1803), coined by French physician Jean Marc Gaspard Itard (1774-1838)
>The term "pneumothorax" refers to the presence of air in the pleural cavity and was coined by French physician Jean Marc Gaspard Itard in 1803, with its earliest known use in English appearing in **1821 in a translation by John Forbes**. The word itself is a composite of Greek origin, combining "pneuma" (air) and "thorax" (chest).

_____
>[!tip]- DERIVATIONS of [[]]
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

