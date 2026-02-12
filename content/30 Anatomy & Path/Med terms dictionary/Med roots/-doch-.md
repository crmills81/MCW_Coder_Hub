---
tags:
  - medroot
aliases:
  - dolich-
roots:
  - -doch-
forms:
  - combining
  - prefix
  - suffix
"alphabet:": D
definition:
  - duct
  - passage
---
>[!Note] DEFINITION of [[-doch-]]
>duct (see also: [[dolich-]]); The element **-doch-** appears inside compound anatomical terms to denote a **duct, passage, or conveying channel** that carries a fluid (such as bile) from one structure to another. You see it most clearly in hepatobiliary anatomy: the _ductus choledochus_ is the common bile duct that conveys bile from the liver and gallbladder into the duodenum, and related derivative terms keep the -doch- piece as the “duct” morpheme.  
So while it is not a productive everyday prefix or suffix like _-itis_ or _-ectomy_, **[[-doch-]]** functions as a **combining root** that reliably signals “duct/channel” in specific anatomic names.[](https://en.wikipedia.org/wiki/List_of_medical_roots_and_affixes)
_____
>[!info]+ ETYMOLOGY of [[-doch-]]
>#greek dochos; - From **Ancient Greek** **δοχός (_dokhós_) / δέχομαι (_déchomai_)**, meaning **“to receive, to take, to accept,”** giving the sense of a **receptive channel** that takes in or carries fluid.
>- In **χοληδόχος (_cholēdóchos_)**, “gall-bile holding/receiving,” this becomes the classical source of _choledochus_ (common bile duct), where _cholē--_ = bile and _[[-doch-]]_ = “receiving/duct.”
>- Latinized into anatomical Latin as **ductus choledochus**, then carried forward unchanged into modern medical terminology.
_____
>[!example]+ RELATED TERMS to [[-doch-]]
>
>| [[-doch-]] | duct |   -    |
|:----------:|:----:|:------:|
| [[angi-]]  | YES  | vessel |
|  [[por-]]  | YES  | passage, opening, pore, cavity       |
_____
>[!tip]+ DERIVATIONS of [[-doch-]]
>```dataview
>TABLE definition AS Definition
>FROM #medroot
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
>SORT file.name ASC
>```
_____
>[!faq]- Query functionality
>
>```dataview
>TABLE definition AS Definition
>FROM #medroot
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```

[[Med roots dictionary]]
[[Appendix A Prefixes]]
[[Appendix B Combining Forms]]
[[Appendix C Suffixes]]
[[Appendix D Suffix forms]]