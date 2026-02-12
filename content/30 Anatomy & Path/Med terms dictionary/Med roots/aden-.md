---
tags:
  - medroot
  - medterm
aliases: []
roots:
  - aden-
forms:
  - combining
  - prefix
"alphabet:": A
definition:
  - gland
---
>[!Note] DEFINITION of [[aden-]]
>gland; The combining form **[[aden-]]** refers to glands or glandular tissue, including endocrine and exocrine glands. It appears frequently in pathology, oncology, and diagnostic terminology.
_____
>[!info]+ ETYMOLOGY of [[aden-]]
>#greek aden
_____
>[!example]+ RELATED TERMS to [[aden-]]
>
_____
>[!tip]+ DERIVATIONS of [[aden-]]
>```dataview
>TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
>SORT file.name ASC
>```
_____
>[!faq]- Query
>```dataview
>TABLE definition AS Definition
>FROM #medroot
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```

---

# **Combining Form: aden-**

## Short Definition
Relating to a gland.

## Long Definition
The combining form **aden-** refers to glands or glandular tissue, including endocrine and exocrine glands. It appears frequently in pathology, oncology, and diagnostic terminology.

## Etymology
- Greek **adēn** → “gland”

## Related Terms
| Term | Meaning |
|------|---------|
| adenoid | resembling a gland |
| adenoma | glandular tumor |

## Common Medical Terms
- **Adenitis** – inflammation of a gland  
- **Adenoma** – benign glandular tumor  
- **Adenocarcinoma** – malignant glandular tumor  

## Documentation Clues
- “Mass in gland”
- “Swollen lymph node”
- “Glandular tissue involved”

## Coder’s Notes
Critical in oncology coding; adenocarcinomas have **site‑specific ICD‑10 rules**.

---

[[Med roots dictionary]]
[[Appendix A Prefixes]]
[[Appendix B Combining Forms]]
[[Appendix C Suffixes]]
[[Appendix D Suffix forms]]
