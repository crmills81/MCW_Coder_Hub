---
tags:
  - medroot
  - medterm
aliases:
  - alges-
roots:
  - alges-
  - algia-
  - alg-
forms:
  - combining
  - prefix
alphabet: A
definition:
  - pain
  - sensitivity to pain
---

# **Combining Form: [[alges-]] / [[algia-]]**

## Short Definition
Relating to pain.

## Long Definition
The combining forms **[[alges-]]** and **[[-algia]]** refer to pain, painful conditions, or heightened sensitivity to pain. These appear frequently in neurology, orthopedics, and general medicine.

## Etymology
- Greek **algos** → “pain”

## Related Terms
| Term | Meaning |
|------|---------|
| [[dys-]] | difficult, painful |
| [[hyperalgesia]] | increased sensitivity to pain |

## Common Medical Terms
- **[[Neuralgia]]** - nerve pain  
- **[[Myalgia]]** - muscle pain  
- **[[Analgesic]]** - pain-relieving medication  

## Documentation Clues
- “Pain reported”
- “Tenderness”
- “Chronic pain syndrome”

## Coder’s Notes
Pain terms often require **laterality** and **chronic vs. acute** distinctions in ICD‑10.

_____
>[!tip]+ DERIVATIONS of [[algia-]]
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
[[Appendix A Prefixes]]
[[Appendix B Combining Forms]]
[[Appendix C Suffixes]]
[[Appendix D Suffix forms]]