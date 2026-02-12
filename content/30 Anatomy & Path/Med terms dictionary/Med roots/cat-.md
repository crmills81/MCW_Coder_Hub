---
tags:
  - medroot
  - medterm
aliases:
  - cata-
roots:
  - cat-
  - cata-
forms:
  - prefix
  - combining
  - adjective
alphabet: C
definition:
  - down
  - downward
  - against
  - back
  - completely
---
>[!Note] DEFINITION of [[cat-]]
>In medicine, [[cat-]] denotes processes like breakdown (**catabolism**), descent ([[cataracts]]), or opposition (**cataplexy**). It modifies roots to imply **reduction**, **reversal**, or **thoroughness**, as in catatonic states or **catadromous** migrations.
_____
>[!info]+ ETYMOLOGY of [[cat-]]
>#latin & #greek From Latinized Greek _kata-_ (κατά), a preposition meaning "**down from**," "**against**," "**back**," or "**thoroughly**," from Proto-Indo-European *km̥t- ("down, with, along").
_____
>[!example]+ RELATED TERMS to [[cat-]]
>
|          Term           |    Meaning    | Prefix/Suffix? | Notes |
| :---------------------: | :-----------: | :------------: | :---: |
| [[cat-]] | downward |       -        |   -   |
|    [[cata-]]     |    YES     |    -     | - |
_____
>[!tip]+ DERIVATIONS of [[cat-]]
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