---
tags:
  - specialty/ent
  - medical_coding
  - medterm
aliases: []
roots:
  - odont-
  - -agra
"definition:": toothache
"alphabet:": O
forms:
  - noun
  - combining
---
>[!note]+ Definition of [[odontagra]]
>[[odont-]][[-agra]] - toothache, especially from gout (tooth pain)
>A sharp, sudden tooth pain, often linked to gout or rheumatic conditions.
___
>[!info]+ Etymology of [[odontagra]]
>From _[ὀδούς] Greek "ὀδούς")_ (odoús, “tooth”) +‎ _[ἄγρᾱ]_ (ágrā, “catching”)
>The term "odontagra" originates from Ancient Greek, combining ὀδούς (odoús), meaning "tooth," and ἄγρᾱ (ágrā), meaning "catching" or "seizure." 
>/o.don.tá.ɡraː/ → /o.ðonˈta.ɣra/ → /o.ðonˈda.ɣra/

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

