---
tags:
  - medroot
  - medterm
aliases: []
roots:
  - adip-
  - adipo-
forms:
  - combining
  - prefix
  - prefixes
"alphabet:": A
definition:
  - fat
  - fatty tissue
---
>[!Note] DEFINITION of [[adip-]]
>fat; The prefix "[[adip-]]" or "[[adipo-]]" means **"fat" or "fatty tissue"** and is derived from the Latin word "adeps." It is commonly used in medical and scientific terms, such as "adipocyte" (fat cells) or "adipose" (body fat), and can also appear as "adip-" when combined with words starting with a vowel.
_____
>[!info]+ ETYMOLOGY of [[adip-]]
>#greek adeps, adipis; borrowed from Latin _adip-, adeps_ "animal fat, lard, fatty tissue" (perhaps borrowed, through another Italic language or Etruscan, from Greek _áleiphar, áleipha,_ derivative of _aleíphein_ "to smear, rub [with oil]") + [-o-](https://www.merriam-webster.com/dictionary/-o-) — more at [aliphatic](https://www.merriam-webster.com/dictionary/aliphatic)
_____
>[!example]+ RELATED TERMS to [[adip-]]
>
>| [[adip-]]  | fat |   -   |        -         |
|:----------:|:---:|:-----:|:----------------:|
|  [[lip-]]  | fat |   -   |        -         |
| [[stear-]] | fat | sebum | sebaceous glands |
_____
>[!tip]+ DERIVATIONS of [[adip-]]
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

---

# **Combining Form: adip-**

## Short Definition
Relating to fat or fatty tissue.

## Long Definition
The combining form **[[adip-]]** refers to fat, adipose tissue, or fatty deposits. It appears in metabolic, endocrine, and surgical terminology.

## Etymology
- #latin **adeps** → “fat”

## Related Terms
| Term | Meaning |
|------|---------|
| [[lip-]] | fat |
| [[steat-]] | fat |

## Common Medical Terms
- **Adipose** - fatty tissue  
- **Adipocyte** - fat cell  
- **Adiposis** - abnormal accumulation of fat  

## Documentation Clues
- “Fatty mass”
- “Lipomatous tissue”
- “Adipose layer dissected”

---

## Coder’s Notes
Often appears in **operative reports** describing dissection layers.

[[Med roots dictionary]]
[[Appendix A Prefixes]]
[[Appendix B Combining Forms]]
[[Appendix C Suffixes]]
[[Appendix D Suffix forms]]

