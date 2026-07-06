---
tags:
  - medterm
  - medroot
aliases:
  - Postnasal drip
  - Rhinorrhea
roots:
  - -rrhea
  - rhino-
  - rhin-
forms:
  - prefix
  - suffix
alphabet: R
definition: a thin clear nasal discharge; commonly known as a runny nose
---
>[!Note] DEFINITION of [[rhinorrhea]]
>**Rhinorrhea** is the **free discharge of thin nasal mucus through the nostrils**. It is a common symptom associated with various conditions including allergic [[rhinitis]], viral upper respiratory infections, [[sinusitis]], and [[cerebrospinal fluid leaks]]. The discharge can be **clear, watery, or mucoid depending on the underlying cause**. When the discharge is cerebrospinal fluid rather than mucus, it may indicate a serious condition such as a skull base fracture or spontaneous CSF leak.
_____
>[!info]+ ETYMOLOGY of [[rhinorrhea]]
>#greek From Greek _[[rhino-]]_ meaning "**nose**" + _[[-rrhea]]_ meaning "flow" or "discharge" (from _rhein_, to flow).
_____

> [!abstract]+ **Related Terms**
> - [[Rhinitis]] (inflammation of the nose)
> - [[epistaxis]] (nosebleed)
> - [[sinusitis]]
> - Allergic rhinitis
> - Nasal congestion ([[R09.81]])
>     
> - Cerebrospinal fluid leak ([[G96.01]])

_____
> [!example]+ **Coding and Coding Nuances**
> 
> **ICD-10 Codes**
> 
> - **R09.82** (Postnasal drip/rhinorrhea) — _Primary code for symptomatic rhinorrhea_
> - **G96.01** (Cranial cerebrospinal fluid leak, spontaneous) — _For CSF rhinorrhea_
> - **J00.0** (Acute nasopharyngitis) — _When due to common cold_
> - **J30.9** (Allergic rhinitis, unspecified) — _When allergy-related_
> - **J34.89** (Other specified disorders of nose and nasal sinuses) — _For other nasal conditions
>     
> 
> **CPT Codes**
> 
> - **N/A** (Rhinorrhea is a symptom/diagnosis, not a procedure)
> - **62100** (Craniotomy for repair of dural/cerebrospinal fluid leak, including surgery for rhinorrhea/otorrhea) — _Specific to CSF leak repair_
>     
> - **31231** (Nasal endoscopy, diagnostic) — _Common procedure to evaluate cause of rhinorrhea_
> - **31233** (Nasal endoscopy with biopsy) — _If tissue sample is taken_

_____
>[!tip]- DERIVATIONS of [[rhinorrhea]]
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
>WHERE file.name != this.file.name
>AND any(contains(this.definition, definition))
>```

[[Med roots]]
[[Appendix A Prefixes]]
[[Appendix B Combining Forms]]
[[Appendix C Suffixes]]
[[Appendix D Suffix forms]]