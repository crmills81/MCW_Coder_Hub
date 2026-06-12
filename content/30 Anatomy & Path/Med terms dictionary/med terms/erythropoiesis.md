---
tags:
  - greek
  - general
  - medical_coding
  - medterm
aliases:
  - erythrocyte formation
roots:
  - erythr-
  - poie-
  - -sis
forms:
  - noun
  - combining
"alphabet:": E
"definition:": erythrocyte formation; the production of red blood cells
---
>[!note]+ Definition of [[erythropoiesis]]
>[[erythr-]]o-[[poie-]][[-sis]] - **erythrocyte** formation
>(eh-**RITH**-roh-poy-**EE**-sis) **The formation of red blood cells in blood-forming tissue**. In the early development of a fetus, **erythropoiesis** takes place in the yolk sac, spleen, and liver. After birth, all **erythropoiesis** occurs in the bone marrow.
___
>[!info]+ Etymology of [[erythropoiesis]]
>**(from Greek ἐρυθρός, _erythros_, meaning _red_, and ποίησις, _poiēsis_, meaning _creation_, _production_, _making_)** is the process which produces [red blood cells] ([[erythrocytes]]), which is the development from erythropoietic stem cell to mature red blood cell.
>
_____
>[!tip]- DERIVATIONS of [[erythropoiesis]]
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


[[Med roots dictionary]]
[[Appendix A Prefixes]]
[[Appendix B Combining Forms]]
[[Appendix C Suffixes]]
[[Appendix D Suffix forms]]