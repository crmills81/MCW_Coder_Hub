---
tags:
  - medterm
  - medroot
  - otolaryngology
aliases:
  - bradyphasia
roots:
  - bradylalia
  - brady-
  - -ia
  - -lalia
forms:
  - prefix
  - suffix
  - combining
alphabet: B
definition:
  - abnormally slow speech
---
>[!Note] DEFINITION of [[bradylalia]]
>[[bradylalia]] is a medical term defining **abnormally slow speech**. It is often categorized as a form of [[dysarthria]] and is associated with various neurological conditions, such as Parkinson's disease or the aftermath of a stroke. **Bradylalia** is a type of speech disorder characterized by an abnormally slow rate of articulation. Unlike simple slowness in thought ([[bradyphrenia]]), **bradylalia** specifically involves the physical and motor execution of speech. It is frequently associated with lesions in the extrapyramidal system, **particularly in the basal ganglia**, and is a hallmark clinical sign in Parkinson’s disease. It can also manifest in cases of severe depression, hypothyroidism, or as a side effect of certain neuroleptic medications. The objective is to identify whether the slowness is a primary motor speech deficit or secondary to a cognitive processing delay.
_____
>[!info]+ ETYMOLOGY of [[bradylalia]]                 
>#greek The term is constructed from two primary Greek roots that describe the pace and nature of the condition.
>- **[[brady-]]**: A prefix derived from the Greek _bradýs_, meaning "slow," "delayed," or "*tardy*".
>- **[[-lalia]]**: A suffix derived from the Greek _lalein_, meaning "*to talk*," "to babble," or "*speech*".
____


> [!example]+ **Coding & Documentation Nuances**
> - **ICD-10-CM:** **Bradylalia** is generally classified under **[[R47.89]]** (Other speech and language abnormalities). However, if it is a documented symptom of a primary condition, the underlying disease (e.g., **[[G20]]** for Parkinson's disease) should be sequenced first.
>     
> - **Symptom vs. Diagnosis:** According to ICD-10-CM Official Guidelines for Coding and Reporting, signs and symptoms that are associated routinely with a disease process should not be assigned as additional codes unless otherwise instructed by the classification.
>     
> - **Documentation Nuance:** It is critical to differentiate bradylalia from **bradyphemia** (slowness in initiating speech) or **dysarthria** (difficult or unclear articulation of speech). Precise documentation of the _nature_ of the speech delay is required for accurate E/M (Evaluation and Management) leveling when neurological deficits are being assessed.
>     
> 
> ### Clinical Indicators
> 
> To support this term in a medical record or neurology consult:
> 
> - **Speech-Language Pathology (SLP) Evaluation:** Documentation of "decreased speaking rate" or "increased pauses between syllables."
>     
> - **Neurological Exam:** Findings of bradykinesia (slow movement) in other muscle groups, masked facies (hypomimia), or a resting tremor.
>     
> - **Quantitative Measures:** Words per minute (WPM) significantly below the average range (typically 120–150 WPM for standard English).
>     
> 
> ### Related Terms & Differentials
> 
> - **[[Tachylalia]]:** The opposite of bradylalia; abnormally rapid speech, often seen in manic episodes.
>     
> - **[[Bradykinesia]]:** General slowness of movement; bradylalia is essentially bradykinesia of the vocal apparatus.
>     
> - **[[Bradyphrenia]]:** Slowness of mental activity; while often appearing alongside bradylalia, it refers to the _thought process_ rather than the _speech output_.
>     
> - **[[Dysarthria]]:** A motor speech disorder where muscles used for speech are weak or difficult to control, which may result in slow speech but includes distorted sounds.
>     
> - **[[Aphasia]]:** A language disorder affecting production or comprehension (the "what" of speech), whereas bradylalia is the "speed" of speech.
>     
> - **[[Alalia]]:** The total loss of the ability to speak.

_____
>[!tip]- DERIVATIONS of [[bradylalia]]
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