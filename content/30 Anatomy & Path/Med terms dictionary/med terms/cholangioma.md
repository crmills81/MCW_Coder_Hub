---
tags:
  - " #medterm "
  - medterm
  - medroot
aliases: []
roots:
  - chol-
  - angi-
  - -oma
"definition:":
  - Bile duct tumor
  - benign neoplasm of the bile ducts
forms:
  - noun
  - combining
"alphabet:": C
---
>[!note]+ Definition of [[cholangioma]]
>[[chol-]][[angi-]][[-oma]] - **Bile duct tumor**; [[Cholangiomas]] present as discrete nodular growths lined by uniform cuboidal [[epithelium]], proliferating biliary structures without invasion. They arise from bile duct cells and may occur intrahepatically; while rare, they contrast with aggressive [[cholangiocarcinomas]], which are [[adenocarcinomas]] with poor prognosis.[](https://medical-dictionary.thefreedictionary.com/cholangioma)
___
>[!info]+ Etymology of [[cholangioma]]
> #greek [[Cholangiomas]] combines _[[cholangio-]]_ (from Greek _kholḗ_ "**bile**" + _angeîon_ "**vessel**," **meaning bile duct**) + _[[-oma]]_ (Greek for "**tumor**" or "**swelling**").

_____
>[!tip]+ DERIVATIONS of [[cholangioma]]
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