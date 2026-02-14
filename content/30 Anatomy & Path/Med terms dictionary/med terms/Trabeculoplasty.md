---
tags:
  - medterm
aliases:
  - argon laser trabeculoplasty
  - selective laser trabeculoplasty
roots:
  - Trabeculoplasty
  - trab-
  - -plasty
  - -plast
  - trabecul(o)- 
forms:
  - prefix
  - suffix
alphabet: T
definition:
  - used to treat open-angle glaucoma by applying laser energy to the trabecular meshwork
---
>[!Note] DEFINITION of [[Trabeculoplasty]]
>[[Trabeculoplasty]] is typically performed at a slit lamp using a [[gonioscopy]] lens to deliver laser energy to the trabecular meshwork in the anterior chamber angle, aiming to increase outflow and lower IOP.  Common clinical types include **argon laser trabeculoplasty** **(ALT)** and **selective laser trabeculoplasty (SLT)**, both used to increase aqueous outflow in [[open-angle glaucoma]]. ​
>#### CPT/HCPCS Code(s):
>**[[65855]] - Trabeculoplasty by laser surgery, 1 or more sessions (defined treatment series)**
>	- **Explanation:** This code covers the use of a laser (**SLT** or **ALT**) to treat the **trabecular meshwork**. The code description "1 or more sessions" means that if the procedure is performed in stages on the same eye within the global period, it is only billed once.
>	- **wRVU:** 4.14
>	- **Global Period:** <font color="#ff0000">010 days</font> (Minor surgery).
>	- **Assistant Payable:** **No**.
>	- **Bundling & NCCI Edits:** * **Inclusives:** Includes internal eye exam (**gonioscopy**) and local anesthesia.
>	- **Mutually Exclusive:** Generally cannot be billed with other [[glaucoma]] surgeries (like [[66170]] [[trabeculectomy]]) in the same eye on the same day.

_____
>[!info]+ ETYMOLOGY of [[Trabeculoplasty]]
>#latin “[[Trabeculoplasty]]” breaks down as **[[trabecul(o)-]]** ([[trabecula]]; here referring to the trabecular meshwork) + **[[-plasty]]** (*plastic surgery/reshaping*).​ 
>
>Merriam-Webster defines it generally as plastic surgery of a trabecula and, specifically in [[ophthalmology]], as laser surgery creating small openings in the trabecular meshwork to reduce IOP in open-angle glaucoma.
_____
>[!tip]+ DERIVATIONS of [[Trabeculoplasty]]
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