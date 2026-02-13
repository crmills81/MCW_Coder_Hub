---
tags:
  - medterm
  - medroot
aliases: []
roots:
  - chol-
  - angi-
  - -graphy
"definition:": radiographic examination of hepatic bile ducts or cystic bile ducts
forms:
  - noun
  - combining
"alphabet:": C
---
>[!note]+ Definition of [[cholangiography]]
>[[chol-]][[angi-]]o-[[-graphy]]- radiographic examination of **hepatic bile ducts or cystic bile duct** (**recording of bile duct**); Types include **percutaneous transhepatic cholangiography (PTC, needle into liver)**, **endoscopic retrograde cholangiopancreatography (ERCP, diagnostic/therapeutic)**, **primary/perioperative (during surgery)**, and **secondary (post-drainage)**. It has largely replaced **intravenous methods**, with magnetic resonance cholangiopancreatography (MRCP) as a non-invasive alternative.
___
>[!info]+ Etymology of [[cholangiography]]
>#greek From _[[cholangio-]]_ (Greek _kholḗ_ "bile" + _angeîon_ "**vessel**") + _[[-graphy]]_ (Greek _graphḗ_ "**writing/drawing**"). Means "**imaging of the bile ducts**."

_____
>[!tip]+ DERIVATIONS of [[cholangiography]]
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

