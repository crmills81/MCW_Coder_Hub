---
tags:
  - medterm
  - medroot
  - otolaryngology
aliases:
  - lockjaw
roots:
  - trismus
  - tri-
  - -us
  - -ismus
forms:
  - prefix
  - suffix
  - noun
alphabet: T
definition:
  - lockjaw
  - painful limitation in mouth opening caused by muscle spasm
---
>[!Note] DEFINITION of [[trismus]]
>Medically, **[[trismus]]** describes any reduction in the jaw's range of motion, typically from tonic contraction of masticatory muscles like the **[[masseter]]** or **[[temporalis]]**, mediated by the **trigeminal nerve.** It impairs eating, speaking, swallowing, and oral hygiene, raising risks like aspiration or infection; temporary cases often resolve in under two weeks, while permanent forms stem from trauma, tumors, or radiation.
>
>**Related Terms**
>- **[[Lockjaw]]**: Historical synonym, especially for tetanus-induced trismus.[](https://en.wikipedia.org/wiki/Trismus)​
>- **[[Masticatory muscles]]**: [[Masseter]], [[temporalis]], [[pterygoids]]—primary sites of spasm.[](https://www.physio-pedia.com/Trismus)​
>- **[[Temporomandibular disorder]] (TMD)**: Often overlaps, causing similar jaw restriction.[](https://www.physio-pedia.com/Trismus)​
>- **[[Bruxism]]**: Teeth grinding, sometimes confused with [[trismus]] but allows mouth opening.
_____
>[!info]+ ETYMOLOGY of [[trismus]]
>#greek The term derives from Greek _trismos_ (τρισμός), meaning "*a scream, grinding, or gnashing of teeth,*" akin to _trizein_ "*to squeak or gnash*," entered English via New #latin around 1693 to denote tetanus-related lockjaw
_____
>[!tip]+ DERIVATIONS of [[trismus]]
>```dataview
>TABLE definition AS Definition
>FROM #medterm 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
>SORT file.name ASC
>```
_____
>[!faq]- Query functionality
>```dataview
>TABLE definition AS Definition
>FROM #medterm 
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```

[[Med roots]]
[[Appendix A Prefixes]]
[[Appendix B Combining Forms]]
[[Appendix C Suffixes]]
[[Appendix D Suffix forms]]