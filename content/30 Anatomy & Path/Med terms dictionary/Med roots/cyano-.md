---
tags:
  - medroot
  - greek
aliases:
  - cyan-
roots:
  - cyan-
  - cyano-
forms:
  - adjective
"alphabet:": C
definition:
  - dark blue-green in colour
---
>[!Note] DEFINITION of cyano-
>1. dark [blue](https://en.wiktionary.org/wiki/blue#English "blue")-[green](https://en.wiktionary.org/wiki/green#English "green") in [colour](https://en.wiktionary.org/wiki/colour#English "colour")
>2. ([chemistry](https://en.wiktionary.org/wiki/chemistry#English "chemistry")) derived from [cyanogen](https://en.wiktionary.org/wiki/cyanogen#English "cyanogen") or a [cyanide](https://en.wiktionary.org/wiki/cyanide#English "cyanide") / [nitrile](https://en.wiktionary.org/wiki/nitrile#English "nitrile")
_____
>[!info]+ ETYMOLOGY of cyano-
>From [Ancient Greek](https://en.wikipedia.org/wiki/Ancient_Greek "w:Ancient Greek") _[κυάνεος](https://en.wiktionary.org/wiki/%CE%BA%CF%85%CE%AC%CE%BD%CE%B5%CE%BF%CF%82#Ancient_Greek "κυάνεος")_ (kuáneos, “dark blue”).
>
_____
>[!example]+ RELATED TERMS to cyano-
>cyanogen
>cyanide
>[cyanose](https://en.wiktionary.org/wiki/cyanose#French "cyanose")
_____
>[!tip]+ DERIVATIONS of cyano-
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