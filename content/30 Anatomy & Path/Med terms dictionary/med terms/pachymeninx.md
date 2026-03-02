---
tags:
  - medterm
aliases: []
roots:
  - pachy-
  - mening-
"definition:": dura mater
"alphabet:": p
forms:
  - combining
  - noun
---
>[!note]+ Definition of [[pachymeninx]]
>[[pachy-]][[mening-|-meninx]] - dura mater (hard mother) outer tough membrane of brain and spinal cord (thick meninges)
___
>[!info]+ Etymology of [[pachymeninx]]
>- pia mater (devout mother) - inner of three meninges 
>- arachnoidea - middle of three meninges 
>- dura mater aka dura (hard mother) - outer of three meninges 

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