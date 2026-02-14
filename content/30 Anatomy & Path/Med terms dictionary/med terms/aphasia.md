---
tags:
  - medterm
  - medroot
  - otolaryngology
aliases: []
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
>1. ([pathology](https://en.wiktionary.org/wiki/pathology#English "pathology")) A [partial](https://en.wiktionary.org/wiki/partial#English "partial") or [total](https://en.wiktionary.org/wiki/total#English "total") [loss](https://en.wiktionary.org/wiki/loss#English "loss") of [language](https://en.wiktionary.org/wiki/language#English "language") [skills](https://en.wiktionary.org/wiki/skill#English "skill") due to [brain](https://en.wiktionary.org/wiki/brain#English "brain") [damage](https://en.wiktionary.org/wiki/damage#English "damage"). Usually, damage to the left [perisylvian](https://en.wiktionary.org/wiki/perisylvian#English "perisylvian") region, including [Broca's area](https://en.wiktionary.org/wiki/Broca%27s_area#English "Broca's area") and [Wernicke's area](https://en.wiktionary.org/wiki/Wernicke%27s_area#English "Wernicke's area"), causes aphasia. **Aphasia** results from damage to dominant (usually left) hemisphere perisylvian language areas (Broca’s frontal, Wernicke’s [[temporal]], [[arcuate fasciculus]]), disrupting phonology, syntax, semantics, or fluency; classified as fluent (Wernicke’s: nonsensical [[verbosity]]), nonfluent (Broca’s: effortful telegraphic speech), conduction (**repetition deficit**), anomic (**word-finding**), global (total loss), or primary progressive (**degenerative**); spares intelligence but isolates socially.

___
>[!info]+ Etymology of [[aphasia]]
>mid 19th century: from #greek, from _aphatos_ ‘**speechless**’, from _[[a-]]_ ‘not’ + _phanai_ ‘speak’.
>•	A-: Greek prefix = “**without, not**.”
>	•	[[-phasia]]: Greek *phásis* (φάσις) = “**speech, utterance**” (from *phánai* “**to speak**”).
>	•	**Literal**: “Without speech” (coined 1864 by Armand Trousseau).

_____

>[!example]+ RELATED TERMS to [[aphasia]]
>- [monophasia](https://en.wiktionary.org/wiki/monophasia#English "monophasia")
_____

>[!tip]+ DERIVATIONS of [[aphasia]]
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

## Classification Table

| Type                  | Location/Characteristics                        | Speech Pattern/Key Deficit                  |
|-----------------------|-------------------------------------------------|---------------------------------------------|
| **Broca's (nonfluent)** | Frontal (Broca's area, IFG)                   | Telegraphic ("want...home"), good comprehension, effortful, agrammatic.[1][3] |
| **Wernicke's (fluent)** | [[Temporal]] (superior temporal gyrus)            | Fluent, nonsensical ("word salad"), [[neologisms]], poor comprehension.[1][3] |
| **Conduction**       | Arcuate fasciculus ([[supramarginal]]/[[angular]])     | Fluent, good comprehension, poor repetition ("no way José").[3] |
| **[[Anomic]]**           | Temporal-parietal (angular gyrus)              | Word-finding pauses, [[circumlocution]] ("thingy").[4] |
| **Global**           | Perisylvian (large MCA stroke)                 | Minimal output, poor comprehension.[1] |
| **Primary Progressive (PPA)** | [[Frontotemporal]] degeneration              | Gradual worsening (nonfluent, semantic, logopenic variants).[3] |

## Coding Context

**ICD-10-CM:**  
| Code      | Description                                      |
|-----------|--------------------------------------------------|
| **[[R47.01]]** | Aphasia (unspecified).                          |
| **[[I69.320]]** | Aphasia post [[cerebral infarction]] ([[stroke]]).[10] |
| **[[G11.4]]** | **PPA** ([[frontotemporal dementia]] variant).          |

## Causes and Risk Factors

- **[[Vascular]] (70%):** [[Ischemic]]/hemorrhagic stroke (left MCA).[2]
- **Traumatic:** [[TBI]], contusion.[3]
- **[[Neoplastic]]:** Brain tumor, [[abscess]].[1]
- **Degenerative:** PPA (tauopathy).[3]
- **Other:** [[Encephalitis]], seizures, [[hypoxia]].[2]

## Related Terms

- **[[Dysarthria]]:** Motor speech (**slurring**) vs. [[linguistic aphasia]].  
- **Apraxia of speech:** Motor planning deficit (often w/Broca's).  
- **[[Alexia]]:** Reading deficit; **[[agraphia]]:** writing.  
- **[[Anomia]]:** Naming deficit (**all types**).  
- **NIHSS:** Includes aphasia score (0-4).[3]

## Clinical Details

**Assessment:** Boston Naming Test, Token Test, repetition ("no ifs ands buts").  
**Symptoms:** Paraphasias (**literal: "spoon"→"poon"; semantic: "spoon"→"fork"**), neologisms, jargon, perseveration.[1]
**Prognosis:** 30-50% significant recovery (1st 3 months); speech therapy key.[2]
**Management:** Speech-language pathology, constraint-induced therapy, apps (Constant Therapy).[4]

**One-Sentence Summary**  
**Aphasia** ([[R47.01]]/[[I69.320]], Greek *[[a-]] [[-phasia]]* "without speech"), disrupts language post-stroke (Broca's telegraphic/Wernicke's fluent/global/PPA), spares cognition; speech therapy yields 30-50% recovery.[1][2][3]

Sources
[1] Aphasia - Symptoms & causes - Mayo Clinic https://www.mayoclinic.org/diseases-conditions/aphasia/symptoms-causes/syc-20369518
[2] Aphasia: Causes, Symptoms & Treatment https://my.clevelandclinic.org/health/diseases/5502-aphasia
[3] Aphasia - NIDCD - NIH https://www.nidcd.nih.gov/health/aphasia
[4] What is Aphasia? Symptoms, Types and Treatment https://www.brownhealth.org/be-well/what-aphasia-symptoms-types-and-treatment
[5] Types of aphasia https://www.stroke.org.uk/stroke/effects/aphasia/types-of-aphasia
[6] Aphasia https://www.nm.org/conditions-and-care-areas/neurosciences/comprehensive-stroke-centers/aphasia
[7] Aphasia https://medlineplus.gov/aphasia.html
[8] Aphasia https://www.childneurologyfoundation.org/disorder/aphasia/
[9] Doctor explains APHASIA - definition, symptoms, causes ... - YouTube https://www.youtube.com/watch?v=nvaZXSsvF4I
[10] Oncology ICD-10 Codes - Cancer Therapy Advisor https://www.cancertherapyadvisor.com/home/tools/oncology-icd10-codes/
