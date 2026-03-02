---
tags:
  - medroot
  - medterm
aliases:
  - Bone misalignment
roots:
  - displaced
forms:
  - prefix
  - suffix
alphabet: D
definition:
  - bone fragments
  - creating a gap
  - put apart from proper place
---
>[!Note] DEFINITION of [[displaced]]
>In orthopedics and radiology, a **displaced** [[fracture]] occurs when the bone breaks and the resulting fragments lose their proper positional relationship relative to each other along the bone's long axis. **Displacement** is quantified by abnormal translation (side-to-side shift), [[angulation]] (tilt of one fragment relative to the other), rotation (twisting), or change in bone length (usually shortening from fragment overlap). This misalignment often requires intervention—closed [[reduction]], open reduction with internal fixation (ORIF), or other procedures—to restore alignment, unlike [[nondisplaced]] fractures which maintain position.
_____
>[!info]+ ETYMOLOGY of [[displaced]]
>#latin 
>- **[[dis-]]**: Latin prefix meaning "apart," "asunder," or "in different directions" (from _dis_, "twice, apart").  
>- **Placed**: From Latin _placere_ ("to please, be pleasing"), but in this compound via _[[displaced]]_ ("to put out of place"), entering English medical use in the 19th century to describe mechanical misalignment.
>- Literally: **"put apart from proper place."** The term gained orthopedic precision in the early 20th century with X-ray imaging.[](https://www.radiologymasterclass.co.uk/tutorials/musculoskeletal/trauma/trauma_x-ray_page3)
_____
>[!tip]- DERIVATIONS of [[displaced]]
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