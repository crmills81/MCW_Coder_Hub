---
tags:
  - medterm
  - medroot
  - otolaryngology
aliases:
roots:
  - bradylalia
  - brady-
  - -ia
forms:
  - prefix
  - suffix
  - combining
alphabet: B
definition:
  - abnormally slow speech
---
>[!Note] DEFINITION of [[bradylalia]]
>[[bradylalia]] is a medical term defining **abnormally slow speech**. It is often categorized as a form of [[dysarthria]] and is associated with various neurological conditions, such as Parkinson's disease or the aftermath of a stroke
_____
>[!info]+ ETYMOLOGY of [[bradylalia]]                 
>#greek The term is constructed from two primary Greek roots that describe the pace and nature of the condition.[](https://en.wikipedia.org/wiki/List_of_medical_roots_and_affixes)
>- **[[brady-]]**: A prefix derived from the Greek _bradýs_, meaning "slow," "delayed," or "*tardy*".[](https://www.etymonline.com/word/brady-)
>- **[[-lalia]]**: A suffix derived from the Greek _lalein_, meaning "*to talk*," "to babble," or "*speech*".
_____
>[!tip]+ DERIVATIONS of [[bradylalia]]
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