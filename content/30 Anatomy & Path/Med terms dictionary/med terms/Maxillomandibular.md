---
tags:
  - medterm
  - medroot
  - ENT
  - otolaryngology
aliases:
roots:
  - Maxillomandibular
  - man-
  - -mandibular
  - -ar
  - max-
forms:
  - prefix
  - suffix
  - combining
alphabet: M
definition:
  - the upper jaw and lower jaw  together; mandible; maxilla;
---
>[!Note] DEFINITION of Maxillomandibular
>**Maxillomandibular** is an adjective used to describe structures, relationships, or procedures involving both the upper jaw ([[maxilla]]) and lower jaw ([[mandible]]). Examples include “[[Maxillomandibular]] relationship” in prosthodontics/occlusion and “[[Maxillomandibular]] advancement” in sleep surgery, where both jaws are moved forward to modify facial skeleton position and airway dimensions. In sleep medicine and craniofacial surgery, **maxillomandibular terms often imply coordinated movement or assessment of both jaws**, such as evaluating occlusion, facial profile, and airway patency together rather than in isolation. 
>- [[Maxilla]]: upper jaw bone, forms the upper dental arch and part of the facial skeleton.
>- [[Mandible]]: lower jaw bone, the only movable bone of the facial skeleton.
>- [[Maxillomandibular]] advancement (*MMA*): orthognathic/sleep surgery that advances both jaws forward to enlarge the airway and treat obstructive sleep apnea.[](https://sleep-doctor.com/surgical-treatment-overview/maxillomandibular-advancement/)
>- Bimaxillary: involving both jaws (often used synonymously with maxillomandibular in surgical contexts).[](https://en.wikipedia.org/wiki/Maxillomandibular_advancement)​
>- [[Maxillomandibular]] relationship (*MMR*): the positional relationship of the maxilla and mandible, crucial in prosthodontics and occlusion.
_____
>[!info]+ ETYMOLOGY of [[Maxillomandibular]]
>#latin - [[maxillo-]]: from Latin _[[maxilla]]_, meaning “*jaw*” or “*upper jaw.*”- [[Mandibular]]: from Latin _[[mandibula]]_, meaning “jaw,” especially the *lower jaw*.  
>Combined, [[Maxillomandibular]] literally means “*of the maxilla and mandible*.”
_____
>[!tip]+ DERIVATIONS of [[Maxillomandibular]]
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
>FROM #medroot  
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```

[[Med roots]]
[[Appendix A Prefixes]]
[[Appendix B Combining Forms]]
[[Appendix C Suffixes]]
[[Appendix D Suffix forms]]