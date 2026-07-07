---
tags:
  - medterm
  - medroot
aliases:
roots:
  - allotransplantation
  - all-
  - allo-
  - -ation
  - -ion
forms:
  - prefix
  - suffix
  - combining
  - verb
alphabet: A
definition:
  - transplantation of cells
  - tissues
  - or organs between two genetically different individuals of the same species.
---
>[!Note] DEFINITION of [[allotransplantation]]
>[[allotransplantation]] contrasts with [[autotransplantation]](**self‑to‑self**), syngeneic [[transplantation]] or [[isografting]] (**between genetically identical individuals, such as identical twins**), and [[xenotransplantation]] (**between different species**). Most solid organ and tissue transplants in humans (**kidney, liver, heart, [[cornea]], many bone and soft‑tissue grafts**) are allotransplants because donors and recipients are usually not genetically identical. Because donor and recipient differ genetically, the recipient immune system recognizes [[alloantigens]] on the graft and may mount rejection responses, requiring [[immunosuppression]] to maintain graft survival. In some tissues like processed bone or cartilage, the allograft can be relatively biologically inert (“**homostatic**”), reducing immunogenicity.
>
>|Term|Breakdown|Meaning|
|---|---|---|
|[[Allograft]]|[[allo‑]] “*other*” + **graft**|The actual organ/tissue transplanted between genetically different individuals of same species.|
|[[Allotransplant]]|[[allo‑]] + **transplant**|The graft or the act of transplanting between such individuals (verb or noun).|
|Autotransplantation]]|[[auto‑]] “**self**” + [[transplantation]]|Transplant from one site to another in the same individual (**autograft**). |
|[[Isograft]]/syngeneic transplant|[[iso‑]] “**equal**” + [[graft]]|Graft between genetically identical individuals (e.g., **identical twins**).[|
|[[Xenotransplantation]]|[[xeno‑]] “**foreign**” + [[transplantation]]|Transplant of cells/tissues/organs between different species (e.g., **pig to human**).[|
|[[Alloimmunity]] / [[allogeneic]]|[[allo‑]] + immunity / [[‑genic]]|Immune responses directed against antigens from a genetically different member of the same species, as in graft rejection.|
_____
>[!info]+ ETYMOLOGY of [[allotransplantation]]
>#greek “[[allotransplantation]]” is built from the combining form **[[allo‑]]** (Greek _allos_ meaning “**other**” or “**different**”) plus **transplantation** (“**transfer of tissue/organ to another site or person**”). The same _[[allo‑]]_ root appears in related terms like [[allograft]], [[allogeneic]], and [[alloimmune]], all referring to interactions between genetically different members of the same species.
_____
>[!tip]- DERIVATIONS of [[allotransplantation]]
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
>WHERE file.name != this.file.name
>AND any(contains(this.definition, definition))
>```

[[Med roots dictionary]]
[[Appendix A Prefixes]]
[[Appendix B Combining Forms]]
[[Appendix C Suffixes]]
[[Appendix D Suffix forms]]