---
tags:
  - medterm
aliases: []
roots:
  - amnio-
  - -tic
"definition:": Pertaining to the amnion
forms:
  - adjective
"alphabet:": A
---
>[!note] Definition of [[amniotic]]
>[[amnio-]][[-tic]] - Pertaining to the [amnion](https://en.wiktionary.org/wiki/amnion#English "amnion") **The amniotic fluid is the protective liquid contained by the amniotic sac** of a gravid amniote. This fluid serves as a cushion for a growing fetus.

_____
>[!tip]+ DERIVATIONS of [[amniotic]]
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