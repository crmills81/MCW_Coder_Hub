---
tags:
  - medroot
  - medterm
aliases: []
roots:
  - a-
  - an-
forms:
  - prefix
alphabet: A
definition:
  - without
  - lack of
  - absence of
---

# **Prefix: a- / an-**

## Short Definition
Without, lacking, or absence of.

## Long Definition
The prefixes **a-** and **an-** indicate the absence, lack, or complete loss of something. They are commonly used in medical terminology to describe conditions where a normal function, substance, or structure is missing.

## Etymology
- Greek **a-/an-** → “not, without”

## Related Terms
| Term       | Meaning             |
| ---------- | ------------------- |
| [[dys-]]   | abnormal, difficult |
| [[hypo-]]  | below normal        |
| [[hyper-]] | above normal        |

## Common Medical Terms
- **[[Anemia]]** – lack of blood/hemoglobin  
- **[[Anuria]]** – absence of urine  
- **[[Aphasia]]** – absence of speech  
- [[**Aseptic**]] – without infection  

## Documentation Clues
- “No output”
- “Absent function”
- “Lack of…”

## Coder’s Notes
Often used in diagnosis coding to indicate **complete absence**, not reduction.

---

_____
>[!tip]+ DERIVATIONS of [[-a/-an]]
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
