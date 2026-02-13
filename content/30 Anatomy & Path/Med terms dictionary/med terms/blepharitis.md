---
tags:
  - general
  - medterm
  - ophthalmology
aliases: []
roots:
  - blephar-
  - -itis
  - Blepharo-
forms:
  - noun
"alphabet:": b
definition:
  - inflammation of the eyelid
  - (often) one side of the body
  - eyelid
---
>[!Note] DEFINITION of [[blepharitis]]
>**bleph·a·ri·tis /ˌblefəˈrīdəs/** - **[[blepharitis]]** is an **inflammation of the eyelids** in which they become red, irritated and itchy with dandruff-like scales that form on the eyelashes. It is a common eye disorder caused by either bacteria or a skin condition, such as dandruff of the scalp or rosacea.
_____
>[!info]+ ETYMOLOGY of [[blepharitis]]
>mid 19th century: from #Greek _blepharon_ ‘eyelid’ + [-itis](https://www.google.com/search?num=10&newwindow=1&sa=X&sca_esv=18c82b472cdad13f&biw=1847&bih=872&aic=0&sxsrf=ANbL-n7vC8WRM0lbBZR6MO77EPYIwaFjPw:1768767137227&q=-itis&si=AL3DRZHjR2DXC91SS53JKt2Rcfi1qTUxKSRr-tWVcc0oZaJjYlXr4Al7UT9uAhX_kWVy03amI0MOJCkn65JWZdf7bAkneAlviw%3D%3D&expnd=1&ved=2ahUKEwiglJ6H85WSAxUYLFkFHQA6MM0QgCt6BAgiEBQ).
_____
>[!example]+ RELATED TERMS to [[blepharitis]]
>[Demodicosis](https://eyewiki.org/Blepharitis#Demodicosis)
>[Dry Eye](https://eyewiki.org/Blepharitis#Dry_Eye)
>[[ptosis]]  **([[blepharoptosis]])**: Drooping of the eyelid
_____
>[!tip]+ DERIVATIONS of [[blepharitis]]
>```dataview
>TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name !=[[]].file.name
>SORT file.name ASC
>```
___
>[!faq]- Query
>```dataview
>TABLE definition AS Definition
>FROM #medroot
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```

[[Med roots dictionary]]