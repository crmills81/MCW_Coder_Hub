---
tags:
  - medterm
  - pmr
aliases:
  - Nondisplaced
roots:
  - non-
  - -dis-
  - -placed
  - -place
  - -ace
forms:
  - adjective
"alphabet:": N
definition: Not displaced, in pieces
---
>[!Note] DEFINITION of [[nondisplaced]]
>In medical imaging and documentation, a **nondisplaced fracture** is a break in the bone where the cortical continuity is interrupted, but the fracture fragments have **not shifted significantly from their anatomic alignment** relative to each other. The joint surfaces and overall axis of the bone are usually preserved, and there is little to no measurable gap, angulation, or rotation between fragments, so the bone essentially maintains its original shape and alignment. Clinically, nondisplaced fractures often require less invasive treatment (**such as immobilization in a cast or splint**) compared with **displaced** fractures, which may need manipulation or surgical fixation to restore alignment.
_____
>[!info]+ ETYMOLOGY of [[nondisplaced]]
>From _[non-] (https://en.wiktionary.org/wiki/non-#English "non-")_ +‎ _[displaced](https://en.wiktionary.org/wiki/displaced#English "displaced")_. - **[[non-]]**: A productive English and Latin‑derived prefix meaning “**not**” or “**without**.”
>- **[[displaced]]**: From Latin _[[dis-]]_ (“**apart, in different directions**”) + _placere_ (“to place”), giving the sense “**moved from its usual or proper place**.” 
>- Together, **nondisplaced** literally means **“not moved out of place.”**
_____
>[!tip]- DERIVATIONS of [[nondisplaced]]
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
[[Appendix A Prefixes]]
[[Appendix B Combining Forms]]
[[Appendix C Suffixes]]
[[Appendix D Suffix forms]]