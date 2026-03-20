---
tags:
  - medroot
aliases:
  - ureter
roots:
  - Ureter-
  - ur-
forms:
  - prefix
  - suffix
  - combining
alphabet: U
definition:
  - denoting the ureter
  - muscular tube transporting urine from kidney to bladder
---
>[!Note] DEFINITION of Ureter-
>In medical **nomenclature, [[ureter-]]** specifies the [[ureter]] —a **retroperitoneal**, **[[urothelium]]-lined structure** with longitudinal/circular smooth **muscle** layers (*extra longitudinal in distal third*)—extending from renal pelvis over psoas muscle, crossing iliac vessels, to bladder trigone at [[ureterovesical junction]]. It prevents reflux via oblique entry and mucosal folds; obstructions cause [[hydronephrosis]], while [[peristalsis]] originates from renal pacemakers.
_____
>[!info]+ ETYMOLOGY of Ureter-
>#latin From New Latin _ureter_, borrowed from Greek _[[-oureter]]_ (οὐρητήρ), "[[ureter]]," from _ourein_ (οὐρεῖν, "to urinate") + [[-agentive]] suffix _-tēr_; roots in Proto-Indo-European *ūr- ("to moisten, flow"). Entered anatomical use via Galen.
_____
>[!example]+ RELATED TERMS to Ureter-
>
|          Term           |    Meaning    | Prefix/Suffix? | Notes |
| :---------------------: | :-----------: | :------------: | :---: |
| [[ureter-]] | denoting the ureter |       -        |   -   |
|    [[ur-]]     |    YES    |   -      | - |
_____
>[!tip]+ DERIVATIONS of Ureter-
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