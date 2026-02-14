---
tags:
  - medterm
  - medroot
  - ophthalmology
aliases:
roots:
  - ophthalmology
  - ophthalm-
  - -logy
forms:
  - prefix
  - suffix
  - combining
  - noun
alphabet: O
definition:
  - branch of medicine dealing with the structure
  - function
  - and diseases of the eye.
---
>[!Note] DEFINITION of [[Ophthalmology]]
>It encompasses **comprehensive eye exams, prescription of medications or glasses, laser procedures, and surgeries for conditions like [[cataracts]], [[glaucoma]], and retinal issues**; [[ophthalmologists]] are MD-trained physicians with residency in eye care.
_____
>[!info]+ ETYMOLOGY of [[Ophthalmology]]
>#greek From Greek "*ophthalmos*" (ὀφθαλμός, **eye**) + "[[-logia]]" (-λογία, *study/discourse*), literally "**the study of eyes**."
_____
>[!tip]+ DERIVATIONS of [[Ophthalmology]]
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