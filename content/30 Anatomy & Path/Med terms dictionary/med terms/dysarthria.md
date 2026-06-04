---
tags:
  - medterm
  - otolaryngology
  - SpeechTherapy
aliases:
  - anarthria
  - Dysarthria
roots:
  - dysarthria
  - dys-
  - -arthria
  - -arth-
  - -ria
forms:
  - prefix
  - suffix
  - noun
alphabet: D
definition:
  - motor speech disorder caused by weakness
  - paralysis
  - or incoordination of the muscles used for speech
---
>[!Note] DEFINITION of [[dysarthria]]
>**Dysarthria** is a **neurogenic motor speech disorder resulting from damage to the central or peripheral nervous system that disrupts the muscular control of speech production**. It affects one or more of the components of speech: respiration, phonation, resonance, articulation, and prosody. Unlike [[aphasia]] (**which is a language disorder**), [[dysarthria]] does not impair language processing or comprehension — the patient knows what they want to say but cannot physically produce the sounds clearly. It can range from mild **slurring** to complete unintelligibility ([[anarthria]]). Common causes include **[[stroke]], traumatic brain injury, [[cerebral palsy]], Parkinson's disease, ALS, MS, and cerebellar disorders**. There are multiple subtypes (**[[spastic]], [[flaccid]], [[ataxic]], hypokinetic, hyperkinetic, mixed**) based on the neurological lesion involved.
_____
> [!info]+ ETYMOLOGY of [[dysarthria]]
> #greek
>
> |Component|Origin|Meaning|
> |---|---|---|
> |**[[dys-]]**|Greek _dys-_ (δυσ-)|Bad, difficult, abnormal, or impaired|
> |**[[-arthria]]**|Greek _arthroun_ (ἀρθροῦν), from _arthron_ (ἄρθρον)|To articulate, to joint; specifically "to utter distinctly"|
> 
> > **Literally**: _"difficulty articulating"_ — referring to impaired ability to form and produce speech sounds clearly.
> 
> > **Note**: _arthron_ in this context refers to the _jointing_ or _articulation_ of speech sounds, not skeletal joints — though both meanings share the same root.
_____

> [!success]+ ### 🔀 ALIASES / ALTERNATE TERMS
> 
> - **Anarthria** — severe/complete loss of articulate speech (the extreme end of dysarthria)
> - **Motor speech disorder**
> - **Slurred speech** _(lay term)_
> - **[[Dysarthrophonia]]** _(when both articulation and voice/phonation are affected)_
> - **[[Spastic]] dysarthria** — due to upper motor neuron damage (**e.g., bilateral stroke**)
> - **Flaccid dysarthria** — due to lower motor neuron/cranial nerve damage
> - **Ataxic dysarthria** — due to cerebellar lesions (**irregular, scanning speech**)
> - **Hypokinetic dysarthria** — classic of Parkinson's disease (**soft, monotone**)
> - **Hyperkinetic dysarthria** — due to basal ganglia disorders
> - **Mixed dysarthria** — e.g., ALS (combined flaccid + spastic)
>
_____

> [!danger]+ ### 🔗 RELATED TERMS
> 
> - **[[Aphasia]]** — language disorder (comprehension/expression), not motor; often co-occurs with dysarthria post-stroke
> - **[[apraxia]] of speech** — motor planning disorder; distinct from dysarthria
> - **[[Dysphagia]]** — difficulty swallowing; shares the same motor neuron pathways, frequently co-occurring
> - **[[Anarthria]]** — complete inability to articulate speech
> - **[[Dysphonia]]** — impaired voice/phonation, often a component of dysarthria
> - **Bulbar [[palsy]]** — LMN disorder affecting cranial nerves IX-XII; causes flaccid dysarthria
> - **Pseudobulbar palsy** — UMN disorder causing spastic dysarthria
> - **[[cerebral infarction]] / TIA** — common acute cause
> - **Parkinson's disease** — common degenerative cause
> - **ALS (Amyotrophic Lateral Sclerosis)** — causes progressive mixed dysarthria
> - **Multiple [[sclerosis]]** — can cause ataxic or mixed dysarthria
> - **Speech-Language Pathology (SLP)** — primary treatment discipline
> - **Augmentative and Alternative Communication (AAC)** — used in severe cases
_____

> [!example]+ #### CODING CORNER
> 
> <br>
> 
> ### 🏥 ICD-10-CM CODES
> 
> #### **Primary / Symptom Code**
> 
> |Code|Description|
> |---|---|
> |**R47.1**|Dysarthria and anarthria _(use when not documented as sequela of a specific cerebrovascular event)_|
> 
> #### **Dysarthria as Sequela of Cerebrovascular Disease (Category I69)**
> 
> |Code|Description|
> |---|---|
> |**[[I69.022]]**|Dysarthria following nontraumatic subarachnoid hemorrhage|
> |**[[I69.122]]**|Dysarthria following nontraumatic intracerebral hemorrhage|
> |**[[I69.222]]**|Dysarthria following other nontraumatic intracranial hemorrhage|
> |**[[I69.322]]**|Dysarthria following cerebral infarction|
> |**[[I69.822]]**|Dysarthria following other cerebrovascular disease|
> |**[[I69.922]]**|Dysarthria following unspecified cerebrovascular disease|
> 
> ---
> 
> ### 🔧 COMMON CPT CODES (Dysarthria-Related Evaluation & Treatment)
> 
> |CPT Code|Description|
> |---|---|
> |**[[92521]]**|Evaluation of speech fluency|
> |**[[92522]]**|Evaluation of speech sound production (articulation, phonological processing, motor planning)|
> |**[[92523]]**|Evaluation of speech sound production with evaluation of language comprehension and expression|
> |**[[92524]]**|Behavioral and qualitative analysis of voice and resonance|
> |**[[92507]]**|Treatment of speech, language, voice, communication, and/or auditory processing disorder (individual)|
> |**[[92508]]**|Treatment of speech, language, voice, communication, and/or auditory processing disorder (group)|
> |**[[92597]]**|Evaluation for use and/or fitting of voice prosthetic device|
> |**[[92609]]**|Therapeutic services for use of speech-generating device|
> |**[[96105]]**|Assessment of [[aphasia]] (with interpretation and report)|
> |**[[70553]]**|MRI brain with and without contrast _(imaging to identify causative lesion)_|
> |**[[70498]]**|CT angiography, neck _(if carotid/vertebral etiology being worked up)_|
> 
> ---
> 
> > ⚠️ **Coding Note:** For inpatient coding, **dysarthria** is a **CC** (Complication/Comorbidity) under MS-DRG grouping when coded as **[[R47.1]]**. When [[dysarthria]] is documented as a sequela of stroke, use the appropriate **I69.x22** code rather than R47.1 — the I69 sequela codes carry the stroke history context and are preferred for specificity. Always check the physician's documentation carefully: [[dysarthria]] (**motor**) should not be coded as [[aphasia]] (language/[[R47.01]]) — they are distinct and not interchangeable, though they may coexist.
_____
>[!tip]- DERIVATIONS of [[dysarthria]]
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

[[Med roots dictionary]] 
[[Appendix A Prefixes]]
[[Appendix B Combining Forms]]
[[Appendix C Suffixes]]
[[Appendix D Suffix forms]]