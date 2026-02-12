---
tags:
  - medroot
aliases:
  - cystoscope
roots:
  - cyst-
  - scop-
  - -scopy
forms:
  - noun
"alphabet:": C
definition:
  - an instrument for examining
  - urinary tract
---
>[!Note] DEFINITION of [[cystoscopy]]
>**Endoscopic examination of the urinary bladder and urethra using a [[cystoscope]]**. The procedure uses flexible or rigid [[cystoscopes]], often with local anesthesia for flexible types and general for rigid, to inspect for issues like [[hematuria]], [[incontinence]], blockages, or tumors; it can also enable biopsies or treatments like stone removal. Fluid fills the bladder for better views, typically lasting 15-20 minutes, with possible post-procedure discomfort like burning urination.
>
_____
>[!info]+ ETYMOLOGY of [[cystoscopy]]
>#Greek *kystis* (**bladder/sac**) + skopein (**to look**)
>[[cystoscopy]] derives from Greek _kystis_ (κύστις, "**bladder**") + _skopein_ (σκοπεῖν, "to examine"), coined around 1889-1910 for bladder examination via [[cystoscope]]. The root _[[cyst(o)-]]_ means bladder or [[cyst-]].
>
_____
>[!example]+ RELATED TERMS to [[cystoscopy]]
>- [[cystitis]] Bladder inflammation
>- [[Urethroscopy]]
>- [[hematuria]]
_____
>[!tip]+ DERIVATIONS of [[cystoscopy]]
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