---
tags:
  - medroot
aliases: []
roots:
  - -ce
forms:
  - suffix
"alphabet:": C
definition:
  - the act of (being)
  - the state of (being)
  - quality (of)
  - action
---
>[!Note] DEFINITION of [[-ce]]
>forms nouns: the act of (being), the state of (being); In medical terminology, endings like **-ence/-ance** (where _-[[ce]]_ completes the form) derive from Latin and create nouns that describe **the quality, state, or result of an action** tied to the root verb.  
>- Examples include _continence_ ("ability to retain") or _impedance_ ("resistance to flow"), often seen in pharmacology, physiology, and diagnostics to denote measurable properties or conditions; they parallel **[[-tion]]/[[-ation]]** but emphasize ongoing states rather than discrete processes.
_____
>[!info]+ ETYMOLOGY of [[-ce]]
>#latin - From **Latin** **-entia/-antia**, noun-forming suffixes from present participles (e.g., _dependentia_ "state of hanging upon").
>- Entered English via **Old French** (_-ance/-ence_) in the 13th century, later systematized in scientific Latin for medical nouns by the Renaissance.
>- _-ce_ itself is the phonetic/spelling vestige of Latin _-tia/-tia_, adapted to English pronunciation rules.
_____
>[!example]+ RELATED TERMS to [[-ce]]
>
>| [[-ce]]    | the act of (being) | the state of (being) | -                     | -                |
| ---------- | ------------------ | -------------------- | --------------------- | ---------------- |
| [[-ation]] | YES                | -                    | the result of (being) | something that is |
| [[-cy]]    | YES                | YES                  | -                     | -                 |
_____
>[!tip]+ DERIVATIONS of [[-ce]]
>```dataview
>TABLE definition AS Definition 
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

[[Med roots dictionary]]
[[Appendix A Prefixes]]
[[Appendix B Combining Forms]]
[[Appendix C Suffixes]]
[[Appendix D Suffix forms]]