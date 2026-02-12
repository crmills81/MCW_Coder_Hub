---
tags: medroot
aliases:
"roots:":
  - rhino-
  - -plasty
forms:
  - verb
  - combining
alphabet: R
definition: surgical alteration of the nose’s structure
---

>[!Note] DEFINITION of [[rhinoplasty]]
>**Rhinoplasty** is a plastic surgery procedure in which the bony–cartilaginous framework and overlying soft tissues of the nose are modified to achieve a more proportionate nasal shape and/or restore normal nasal airflow. It may be performed as cosmetic [[rhinoplasty]] (to change size, shape, profile, tip, or nostril width) or functional [[rhinoplasty]] (to correct obstruction, often combined with septoplasty or turbinate reduction). Reconstructive [[rhinoplasty]] addresses deformities from trauma, tumor resection, infection, or prior surgery, often using cartilage grafts from septum, ear, or rib. Approaches include closed (endonasal) rhinoplasty, using internal incisions only, and open (external) [[rhinoplasty]], using a transcolumellar incision for better exposure of the nasal framework. Common maneuvers include dorsal hump reduction, osteotomies to narrow or straighten nasal bones, tip refinement, spreader graft placement to support the internal nasal valve, and septal extension grafts to control projection and rotation.
_____
>[!info]+ ETYMOLOGY of [[rhinoplasty]]
>#greek “Rhinoplasty” is formed from the Greek combining form _rhino-_ meaning “nose” (from Greek _[[rhis]], rhino-_, nose) and _-plasty_ from Greek _[[-plastia]]_ / _[[-plastos]]_ meaning “molded, formed.” Literally, it denotes “molding/shaping of the nose.”
_____
>[!tip]+ DERIVATIONS of [[rhinoplasty]]
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

[[Med roots]]
[[Appendix A Prefixes]]
[[Appendix B Combining Forms]]
[[Appendix C Suffixes]]
[[Appendix D Suffix forms]]