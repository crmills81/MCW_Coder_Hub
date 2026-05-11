---
tags:
  - medroot
  - medterm
  - otolaryngology
aliases:
  - audio-
roots:
  - audi-
  - audio-
forms:
  - combining
  - prefix
  - prefixes
alphabet: A
definition:
  - hearing
  - sound perception
---

# **Combining Form: audi- / audio-**

## Short Definition
Relating to hearing or sound; The prefix **[[audi-]]** (or **[[audio-]]**) ==originates from the Latin word _audire_, meaning "to hear" or "listen"==. It is a foundational root used in English to denote sound, listening, or the sense of hearing. Common words using this prefix include **audible**.

## Long Definition
The combining form **[[audi-]]/[[audio-]]** refers to hearing, sound perception, or auditory function. It appears frequently in ENT, neurology, and diagnostic testing terminology.

## Etymology
- Latin **audire** → “to hear”

## Related Terms
| Term | Meaning |
|------|---------|
| [[ot-]] | ear |
| [[phon-]] | sound |

## Common Medical Terms
- **Audiogram** - hearing test  
- **Audiology** - study of hearing  
- **Auditory nerve** - nerve responsible for hearing  

## Documentation Clues
- “Hearing loss”
- “Audiometric testing”
- “Sound perception deficit”

## Coder’s Notes
Audiology services have **specific CPT codes** and often require **modifiers** for unilateral vs. bilateral testing.


_____
>[!tip]+ DERIVATIONS of [[audi-]]
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