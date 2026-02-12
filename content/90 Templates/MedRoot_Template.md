---
tags: [medroot]
aliases: []
roots: ["<% tp.file.title %>"]
forms: [prefix, suffix]
alphabet: <% tp.file.title.replace(/[^a-zA-Z]/g, "").charAt(0).toUpperCase() %>
definition: [INPUT_SHORT_DEF]
---
>[!Note] DEFINITION of <% tp.file.title %>
>INPUT_FULL_DEF
_____
>[!info]+ ETYMOLOGY of <% tp.file.title %>
>#latin OR #greek
_____
>[!example]+ RELATED TERMS to <% tp.file.title %>
>
|          Term           |    Meaning    | Prefix/Suffix? | Notes |
| :---------------------: | :-----------: | :------------: | :---: |
| [[<% tp.file.title %>]] | INPUT_MEANING |       -        |   -   |
|    [[RELATED_TERM]]     |    YES/NO     |    MEANING     | NOTES |
_____
>[!tip]+ DERIVATIONS of <% tp.file.title %>
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