---
tags:
  - medterm
  - medroot
  - otolaryngology
aliases:
  - dysphrasia
  - Aphasia
  - dysarthria
  - dysphasia
roots:
  - a-
  - pha-
  - -sia
  - phasis-
"forms:":
  - adjective
  - combining
  - prefix
"alphabet:": a
"definition:":
  - Impaired ability to use or comprehend words
  - acquired impairment of language
---
>[!note] Definition of [[aphasia]]
>[[a-]][[pha-]][[-ia|-sia]] - Impaired ability to use or comprehend words (**condition of lacking communication**)
>1.  A [partial or [total](https://en.wiktionary.org/wiki/total#English "total") [loss]] **Aphasia** results from damage to dominant (usually left) hemisphere perisylvian language areas (Broca’s frontal, Wernicke’s [[temporal]], arcuate fasciculus), disrupting phonology, syntax, semantics, or fluency; classified as fluent (Wernicke’s: nonsensical verbosity), nonfluent (Broca’s: effortful telegraphic speech), conduction (**repetition deficit**), anomic (**word-finding**), global (total loss), or primary progressive (**degenerative**); spares intelligence but isolates socially.

___
>[!info]+ Etymology of [[aphasia]]
>mid 19th century: from #greek, from _aphatos_ ‘**speechless**’, from _[[a-]]_ ‘not’ + _phanai_ ‘speak’.
>•	A-: Greek prefix = “**without, not**.”
>	•	[[-phasia]]: Greek *phásis* (φάσις) = “**speech, utterance**” (from *phánai* “**to speak**”).
>	•	**Literal**: “Without speech” (coined 1864 by Armand Trousseau).

_____

> [!success] ## Classification Table
> 
> 
> | Type                  | Location/Characteristics                        | Speech Pattern/Key Deficit                  |
> |-----------------------|-------------------------------------------------|---------------------------------------------|
> | **Broca's (nonfluent)** | Frontal (Broca's area, IFG)                   | Telegraphic ("want...home"), good comprehension, effortful, agrammatic.[1][3] |
> | **Wernicke's (fluent)** | [[temporal]] (superior temporal gyrus)            | Fluent, nonsensical ("word salad"), neologisms, poor comprehension.[1][3] |
> | **Conduction**       | Arcuate fasciculus ([[supramarginal]]/[[angular]])     | Fluent, good comprehension, poor repetition ("no way José").[3] |
> | **[[anomic]]**           | Temporal-parietal (angular gyrus)              | Word-finding pauses, [[circumlocution]] ("thingy").[4] |
> | **Global**           | Perisylvian (large MCA stroke)                 | Minimal output, poor comprehension.[1] |
> | **Primary Progressive (PPA)** | [[frontotemporal]] degeneration              | Gradual worsening (nonfluent, semantic, logopenic variants).[3] |
> 

> [!important]+ ## Coding Context
> 
> **ICD-10-CM:**  
> | Code      | Description                                      |
> |-----------|--------------------------------------------------|
> | **[[R47.01]]** | Aphasia (unspecified).                          |
> | **[[I69.320]]** | Aphasia post [[cerebral infarction]] ([[stroke]]).[10] |
> | **[[G11.4]]** | **PPA** (frontotemporal dementia variant).          |


> [!caution]+ ## Causes and Risk Factors
> 
> 
> - **[[Vascular]] (70%):** [[Ischemic]]/hemorrhagic stroke (left MCA).[2]
> - **Traumatic:** TBI, contusion.[3]
> - **Neoplastic:** Brain tumor, [[abscess]].[1]
> - **Degenerative:** PPA (tauopathy).[3]
> - **Other:** [[encephalitis]], seizures, [[hypoxia]].[2]


> [!danger]+ ## Related Terms
> 
> - **[[dysarthria]]:** Motor speech (**slurring**) vs. linguistic aphasia.  
> - **Apraxia of speech:** Motor planning deficit (often w/Broca's).  
> - **[[Alexia]]:** Reading deficit; **[[agraphia]]:** writing.  
> - **[[Anomia]]:** Naming deficit (**all types**).  
> - **NIHSS:** Includes aphasia score (0-4).[3]
> - **[monophasia]**




> [!example]+ ## Clinical Details
> 
> **Assessment:** Boston Naming Test, Token Test, repetition ("no ifs ands buts").  
> **Symptoms:** Paraphasias (**literal: "spoon"→"poon"; semantic: "spoon"→"fork"**), neologisms, jargon, perseveration.[1]
> **Prognosis:** 30-50% significant recovery (1st 3 months); speech therapy key.[2]
> **Management:** Speech-language pathology, constraint-induced therapy, apps (Constant Therapy).[4]
> 
> **One-Sentence Summary**  
> **Aphasia** ([[R47.01]]/[[I69.320]], Greek *[[a-]] [[-phasia]]* "without speech"), disrupts language post-stroke (Broca's telegraphic/Wernicke's fluent/global/PPA), spares cognition; speech therapy yields 30-50% recovery.[1][2][3]
>
_____

>[!tip]- DERIVATIONS of [[aphasia]]
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

---


[[Med roots]]
[[Appendix A Prefixes]]
[[Appendix B Combining Forms]]
[[Appendix C Suffixes]]
[[Appendix D Suffix forms]]