---
tags:
  - " #medroot"
  - medroot
  - medterm
aliases:
  - ant-
forms:
  - prefix
roots:
  - anti-
  - ant-
"alphabet:": A
definition:
  - against
  - opposed to
  - preventing
  - relieving
---
>[!Note] DEFINITION of [[anti-]]
>1. Against, opposed to
>2. Preventing
>3. Relieving
_____
>[!info]+ ETYMOLOGY of[[ anti-]]
>#greek
>- [[ant-]] before "h" or {vowel}
_____
>[!example]+ RELATED TERMS to anti-
>
>|  [[anti-]]  | against | opposed to | preventing | relieving |    -     |        -         |
|:-----------:|:-------:|:----------:|:----------:|:---------:|:--------:|:----------------:|
|  [[ana-]]   |   YES   |     -      |     -      |     -     |    up    |       back       |
| [[contra-]] |   YES   |     -      |     -      |     -     | opposite |        -         |
|   [[ob-]]   |   YES   |     -      |     -      |     -     |  toward  | very, thoroughly |
_____
>[!tip]+ DERIVATIONS of [[anti-]]
>```dataview
>TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
>SORT file.name ASC
>```
_____
>[!faq]- Query
>
>```dataview
>TABLE definition AS Definition
>FROM #medroot
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```

[[Med roots dictionary]]



# **Prefix: [[anti-]]**

## Short Definition
Against or preventing.

## Long Definition
The prefix **anti-** indicates opposition, prevention, or action against something. It appears in pharmacology, immunology, and infectious disease terminology.

## Etymology
- Greek **anti** → “against, opposite”

## Related Terms
| Term | Meaning |
|------|---------|
| [[contra-]] | against |
| [[prophylactic]] | preventive |

## Common Medical Terms
- **[[Antibiotic]]** – against bacteria  
- **[[Anticoagulant]]** – prevents clotting  
- **[[Antiviral]]** – against viruses  

## Documentation Clues
- “[[Prophylaxis]]”
- “Preventive therapy”
- “Anti‑inflammatory treatment”

## Coder’s Notes
Anti‑medications often require **indication coding** (e.g., anticoagulants →[[ Z79.01]]).
