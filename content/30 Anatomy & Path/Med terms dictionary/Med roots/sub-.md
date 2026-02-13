---
tags:
  - medroot
aliases:
  - suf-
  - sup-
roots:
  - sub-
  - suf-
  - sup-
forms:
  - prefix
"alphabet:": S
definition:
  - under
---
>[!Note] DEFINITION of sub-
>under
_____
>[!info]+ ETYMOLOGY of sub-
>#latin
> - suf- before "f"
>- sup- before "p"
_____
>[!example]+ RELATED TERMS to sub-
>
>| [[sub-]]  | under |  -  |
|:---------:|:-----:|:---:|
| [[hypo-]] |  YES  | deficient, below normal, low    |
_____
>[!tip]+ DERIVATIONS of sub-
>```dataview
>TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
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

---

**<font color="#c00000">From the ETYMOLOGY plugin:</font>**

[[sub-]] :: word-forming element of Latin origin meaning "under, beneath; behind; from under; resulting from further division," from Latin preposition sub "under, below, beneath, at the foot of," also "close to, up to, towards;" of time, "within, during;" figuratively "subject to, in the power of;" also "a little, somewhat" (as in sub-horridus "somewhat rough"), from PIE *(s)up- (perhaps representing *ex-upo-), a variant form of the root *upo "under," also "up from under," which also yielded Greek hypo- and English up.

The Latin word also was used in Latin as a prefix and in various combinations. In Latin it was reduced to su- before -s- and assimilated to following -c-, -f-, -g-, -p-, and often -r- and -m-.

In Old French the prefix appears in the full Latin form only "in learned adoptions of old Latin compounds" [OED], and in popular use it was represented by sous-, sou-; as in French souvenir from Latin subvenire, souscrire (Old French souzescrire) from subscribere, etc.

The original meaning is now obscure in many words from Latin (suggest, suspect, subject, etc.). The prefix is active in Modern English; the indication generally being:

1. "under, beneath, at the bottom of;" in adverbs "down, low, lower;"

2. "inferior part, agent, division, or degree; inferior, having subordinate position" (subcontractor) also forming official titles (subaltern);

It also can indicate "division into parts or sections;" "next below, near, close to" (subantarctic); "smaller" (sub-giant); and it may be used generally as "somewhat, partial, incomplete" (subliterate).