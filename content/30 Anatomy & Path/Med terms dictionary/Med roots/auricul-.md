---
tags:
  - medroot
  - medterm
  - otolarngology
aliases: []
roots:
  - aur-
  - auricul-
forms:
  - combining
alphabet: A
definition:
  - ear
  - hearing structure
---

# **Combining Form: [[aur-]] / [[auricul-]]**

## Short Definition
Relating to the ear.

## Long Definition
The combining forms **[[aur-]]** and **[[auricul-]]** refer to the ear or ear-shaped structures. They appear in ENT terminology, anatomy descriptions, and procedural documentation. The prefix **"[[auricul-]]" means "ear"** and is derived from the Latin word "auricula," meaning "a little ear" or the external ear. It appears in medical terms such as "auricular" and "auricle."

## Etymology
- Latin **auris** → “ear”; Defines the Latin root _"Auricula"_ as a diminutive of "auris" meaning "a little ear," clarifying its use in anatomical terms like "auricular surface," and notes the shortened "-aur(i)-" for terms like "auricle.

## Related Terms
| Term | Meaning |
|------|---------|
| [[ot-]] | ear |
| [[audi-]] | hearing |

## Common Medical Terms
- **Auricular hematoma** - blood collection in ear cartilage  
- **Auricle** - external ear  
- **Postauricular** - behind the ear  

## Documentation Clues
- “External ear swelling”
- “Ear cartilage involvement”
- “Behind the ear incision”

## Coder’s Notes
Important in ENT procedures: **postauricular approaches** affect CPT coding.




_____
>[!tip]+ DERIVATIONS of [[auricul-]]
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