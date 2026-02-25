---
tags:
  - medterm
  - medroot
aliases:
  - keratoconjunctivitis sicca
roots:
  - conjunctiv-
  - -itis
  - kerato-
  - -tivitis
forms:
  - prefix
  - suffix
  - combining
  - disease
alphabet: K
definition:
  - combined inflammation of the cornea (keratitis) and conjunctiva (conjunctivitis)
---
>[!Note]+ DEFINITION of [[keratoconjunctivitis]]
>This condition involves the transparent front part of the eye (**cornea**) and the thin mucous membrane covering the [[sclera]] and lining the eyelids (**[[conjunctiva]]**), leading to symptoms like redness, pain, tearing, [[photophobia]], and blurred vision. Causes range from viral (**e.g., adenovirus in epidemic keratoconjunctivitis**), bacterial (**e.g., [[Staphylococcus]]**), allergic (**e.g., vernal or atopic forms**), [[autoimmune]], toxic, or dry eye (**[[keratoconjunctivitis sicca]]**). Severe cases risk corneal scarring or vision loss if untreated.
_____
>[!info]+ ETYMOLOGY of [[keratoconjunctivitis]]
>#greek Derived from Greek [[kerato-]] (κερατ-, from κέρας kéras, "*horn*," referring to the cornea's **horn-like texture**), [[conjunctiv-]] (from Latin **conjunctivus**, "**connecting**," for the conjunctiva), and [[-itis]] (-ῖτις, **inflammation**).
_____
>[!info]+ Aliases and Components
>**Aliases**: Epidemic keratoconjunctivitis (**adenoviral**), vernal keratoconjunctivitis (**VKC**), atopic keratoconjunctivitis (**AKC**), keratoconjunctivitis sicca (**dry eye**).
>Components: [[kerato-]] (**cornea/horn**);[[ conjunctiv-]] (**conjunctiva**); -itis (**inflammation**).
_____
>[!warning]+ Related Terms
>**Keratitis**: Corneal inflammation alone.
>**Conjunctivitis**: Conjunctival inflammation alone ("**pink eye**").
>**Types**: Superior limbic keratoconjunctivitis, **phlyctenular keratoconjunctivitis**, infectious bovine keratoconjunctivitis (**veterinary**).
>**Associated**: [[Blepharitis]] (**eyelid inflammation**), [[uveitis]].
_____
>[!tip]- DERIVATIONS of [[keratoconjunctivitis]]
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