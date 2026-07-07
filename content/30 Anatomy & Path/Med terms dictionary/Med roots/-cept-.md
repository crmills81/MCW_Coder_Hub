---
tags:
  - medroot
aliases:
  - cepto-
roots:
  - -cept-
forms:
  - combining
  - prefix
  - suffix
"alphabet:": C
definition:
  - take
  - receive
---
>[!Note] DEFINITION of [[-cept-]]
>take; In medical terminology, particularly pharmacology and immunology, **[[-cept-]]** derives from the Latin root for "take/seize," used in drug names ending in **[[-cept-]]** to indicate **receptor-binding fusion proteins** or biologics engineered to capture/block specific molecular targets (e.g., cytokines, growth factors). These are typically monoclonal antibody-like-like therapies (e.g., _etanercept_) that "take" or neutralize inflammatory mediators by binding them, distinct from pure receptor agonists/antagonists; the convention follows FDA/ICH naming guidelines for biologics.
_____
>[!info]+ ETYMOLOGY of [[-cept-]]
>#latin capere, captus
_____
>[!example]+ RELATED TERMS to [[-cept-]]
>
>| [[-cept-]] | take |
| :----------: |: ---- :|
| [[-cip-]]  | YES     |
_____
>[!tip]+ DERIVATIONS of [[-cept-]]
>```dataview
>TABLE definition AS Definition 
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