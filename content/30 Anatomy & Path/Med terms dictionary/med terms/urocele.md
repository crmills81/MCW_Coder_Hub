---
tags:
  - medterm
  - medroot
aliases:
  - uroscheocele
roots:
  - ur-
  - -cel-
  - -e
  - uro
"alphabet:": U
forms:
  - noun
"definition:": Accumulation of urine in scrotum
---
>[!note]+ Definition of [[urocele]]
>[[ur-]]o[[-cel-]][[-e]] - accumulation of urine (fluid) in scrotum (urine swelling) A [[urocele]], also known as a **[[uroscheocele]]**, occurs when urine leaks (extravasates) from the urinary tract into the surrounding scrotal tissues. This is typically a secondary condition resulting from trauma, severe infection, or a rupture in the urethra that allows urine to bypass its normal channel and collect in the tunica vaginalis or scrotal wall. Unlike a **common [[hydrocele]]**, which contains serous fluid, a [[urocele]] specifically contains urine and often requires immediate medical intervention to prevent tissue [[necrosis]] or infection.
___
>[!info]+ ETYMOLOGY of [[urocele]]
>#greek The word is formed from two Greek-derived components:
>- **[[uro-]]**: Derived from the Greek _oûron_, meaning "urine" or "**urinary tract**".
>- **[[-cele]]**: Derived from the Greek _kēlē_, meaning "tumor," "**hernia**," or "**swelling**".
_____
>[!tip]- DERIVATIONS of [[urocele]]
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
>FROM #medroot  
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```

[[Med terms dictionary]]
[[Appendix A Prefixes]]
[[Appendix B Combining Forms]]
[[Appendix C Suffixes]]
[[Appendix D Suffix forms]]