---
tags:
  - medroot
  - medterm
aliases:
  - angioma
roots:
  - tel-
  - angi-
  - -oma
"definition:":
  - tumor made up of dilated capillaries
  - benign vascular lesion
"alphabet:": T
forms:
  - noun
  - combining
---
>[!note]+ Definition of [[telangioma]]
>[[tel-]][[angi-]][[30 Anatomy & Path/Med terms dictionary/Med roots/-oma]] - tumor made up of dilated capillaries; [[Telangioma]] can be understood as a subtype of [[hemangioma]] in which the predominant change is **abnormal dilation ([[ectasia]]) of end‑vessels rather than proliferation of large vascular channels**. These lesions correspond histologically to clusters of dilated superficial vessels and clinically may resemble spider veins or focal telangiectatic macules. They are usually benign but, depending on size and location, may bleed or be cosmetically bothersome, similar to other telangiectatic lesions.
___
>[!info]+ Etymology of [[telangioma]]
>#latin “[[Telangioma]]” breaks down as **[[tel‑]]/[[telo‑]]** (“**end**,” referring to terminal vessels) + **angio‑** (“vessel”) + **‑oma** (“**tumor**” or “**swelling**”). This parallels the related term **[[telangiectasia]]**, which comes from [[tel‑]] “**end**” + [[angio‑]] “**vessel**” + [[ectasia]] “**dilation**,” and denotes dilated end vessels visible on skin or mucosa.
_____
>[!tip]- DERIVATIONS of  [[telangioma]]
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

[[Med terms dictionary]]
[[Appendix A Prefixes]]
[[Appendix B Combining Forms]]
[[Appendix C Suffixes]]
[[Appendix D Suffix forms]]