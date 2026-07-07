---
tags:
  - medterm
aliases:
  - tachylalia
roots:
  - tachy-
  - pha-
  - -sia
  - -phasia
"definition:": Rapid speech
forms:
  - verb
  - combining
  - diminutive
"alphabet:": T
---
>[!note] Definition of [[tachyphasia]]
>[[tachy-]][[pha-]][[-ia|-sia]] - Rapid speech (condition of speaking rapidly); Tachyphasia is a communication disorder characterized by **excessively rapid or voluble speech**, sometimes described as incoherent or unintelligible. It can be associated with conditions like mania and certain psychotic illnesses, and is also known by terms such as [[tachyphrasia]], [[tachyphasia|tachylalia]], and pressured speech.
___
>[!info]+ Etymology of [[tachyphasia]]
>The term "[[tachyphasia]]" originates from #greek words, combining "**tachys**" (**swift**) and "**phasis**" (**speech**), with **"phasis" itself derived from "phanai" (to speak)**. It is also known as tachyphresia and describes excessive volubility with rapid, pressured speech, often associated with conditions like **manic episodes of bipolar disorder** and **some cases of schizophrenia.**
_____
>[!tip]- DERIVATIONS of [[tachyphasia]]
>```dataview
>TABLE definition AS Definition
>FROM #medterm 
>WHERE length(filter(roots, (word) => econtains([[tachyphasia]].roots, word))) > 0 AND file.name != [[tachyphasia]].file.name
>SORT file.name ASC
>```
_____
>[!faq]- Query functionality
>```dataview
>TABLE definition AS Definition
>FROM #medterm 
>WHERE length(filter(definition, (word) => econtains([[tachyphasia]].definition, word))) > 0 AND file.name != [[tachyphasia]].file.name
>```

[[Med terms dictionary]]
[[Appendix A Prefixes]]
[[Appendix B Combining Forms]]
[[Appendix C Suffixes]]
[[Appendix D Suffix forms]]