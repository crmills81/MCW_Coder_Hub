---
tags:
  - medterm
  - medroot
aliases:
roots:
  - auto-
  - -une
forms:
  - prefix
  - suffix
  - combining
  - disease
alphabet: A
definition:
  - an immune response directed against the body's own cells
---
>[!Note] DEFINITION of [[autoimmune]]
>An autoimmune disease arises from the adaptive immune system's anomalous reaction, mistakenly targeting self-tissues as foreign invaders, affecting over 80 conditions and nearly any body part, **with symptoms including fatigue, joint pain, and rashes that fluctuate in flares and remissions**
_____
>[!info]+ ETYMOLOGY of [[autoimmune]]
>#greek The term "**autoimmune**," coined around 1952, combines Greek "[[auto-]]" (self, from αὐτός/autós) and English "*immune*" (**from Latin immunis, exempt from public service or obligation**).
_____

> [!warning]+ RELATED TERMS
>
>- **Autoantibody**: Antibody targeting self-antigens.​
>- **Autoimmunity**: The state of immune response against self​
>- **Examples of diseases**: Type 1 diabetes (pancreas attack), multiple sclerosis (myelin sheath), systemic lupus erythematosus (multi-organ).​

_____
>[!tip]- DERIVATIONS of [[autoimmune]]
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