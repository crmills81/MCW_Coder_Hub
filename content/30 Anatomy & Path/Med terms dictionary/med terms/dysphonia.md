---
tags:
  - medterm
  - medroot
  - otolaryngology
  - ENT
aliases:
  - hypophonia
  - Dysphonia
  - dysphrasia
  - aphagia
  - xenophonia
roots:
  - Dysphonia
  - dys-
  - -phonia
  - -nia
  - -ia
forms:
  - prefix
  - suffix
  - combining
alphabet: D
definition: impaired voice production
---
>[!Note] DEFINITION of [[dysphonia]]
>**[[Dysphonia]]** e**ncompasses voice disorders affecting vocal quality, pitch, loudness, or effort due to abnormalities in vocal cord vibration, muscle tension, neural control, or structural lesions;** presentations range from mild hoarseness (**rough/raspy voice**) to severe breathiness, strain, voice breaks, or complete [[aphonia]] (**voice loss**); etiologies include inflammation (**[[laryngitis]], [[GERD]]), structural lesions (nodules, [[polyps]], cysts**), neurological disorders (**[[spasmodic dysphonia]], [[vocal cord paralysis]])**, functional disorders (**muscle tension [[dysphonia]]**), and [[neoplasms]]; impacts communication, professional voice users (**teachers, singers**), and quality of life. 
>

_____
>[!info]+ ETYMOLOGY of [[dysphonia]]
>#greek
>- **[[Dys-]]:** Greek prefix _[[dus-]]_ = "**bad, difficult, abnormal**."
>- **[[-phonia]]:** Greek _phōnḗ_ (φωνή) = "**voice, sound**."
>- **Literal:** "**Abnormal voice**" or "**difficulty with voice**."
>
_____

> [!example] ## CODING CORNER AND KEYWORDS
> 
> ### Classification and Types
> 
> |Type|Characteristics/Mechanism|Presentation|
> |---|---|---|
> |**[[spasmodic dysphonia]]**|Neurological; laryngeal dystonia with involuntary vocal cord [[spasms]] from overactive brain signals.|Strained/strangled (**adductor**) or breathy (**abductor**); voice breaks every few sentences.|
> |**Muscle tension dysphonia (MTD)**|Excessive laryngeal muscle tension; abnormal muscle activation patterns.|Strained, effortful voice; most common voice disorder.|
> |**Functional dysphonia**|No anatomical/neurological cause; voice impairment from overuse or psychological factors.|Hypofunctional (**incomplete cord closure**) or hyperfunctional (overuse).|
> |**Hoarseness/laryngitis**|Vocal cord inflammation/swelling from infection, overuse, irritants.|Rough, raspy voice; lasts ~2 weeks with viral infection.|
> |**Vocal cord paralysis**|Nerve damage interrupting laryngeal innervation (recurrent laryngeal nerve).|Weak, breathy voice; aspiration risk.|
> |**[[Phonotraumatic lesions]]**|[[Nodules]], [[polyps]], cysts from vocal abuse/overuse.|Hoarseness, pitch breaks, vocal fatigue in professional voice users.|
> 
> ---
> 
> ### Coding Context
> 
> **ICD-10-CM:**
> 
> |Code|Description|
> |---|---|
> |**[[50 Medical Coding/ICD-10 Codes/R49.0]]**|Dysphonia (unspecified hoarseness).|
> |**[[R49.1]]**|[[aphonia]] (complete voice loss).|
> |**[[J38.3]]**|Vocal cord paralysis.|
> |**[[J04.0]]**|Acute laryngitis.|
> |**[[G24.4]]**|[[Idiopathic orofacial dystonia]] (spasmodic dysphonia).|
> 
> **CPT Codes (Procedures):**
> 
> - **[[31575]]** - Laryngoscopy, flexible fiberoptic; diagnostic.
> - **[[31579]]** - Laryngoscopy w/ stroboscopy.
> - **[[64617]]** - Botulinum toxin injection into laryngeal muscles (spasmodic dysphonia).
> - **[[92520]]** - Laryngeal function studies.
> 
> ---
> 
> ## Causes and Risk Factors
> 
> **Common etiologies:**
> - **Inflammation:** [[Viral laryngitis]], **GERD** ([[laryngopharyngeal reflux]]), allergies.
> - **Overuse/trauma:** Excessive talking, yelling, singing (**teachers, singers, coaches**).
> - **Structural lesions:** Vocal nodules ("**singer's nodes**"), polyps, cysts, [[papillomas]] (**HPV**).
> - **Neurological:** Spasmodic dysphonia, Parkinson's disease, stroke, MS.
> - **[[Iatrogenic]]:** Post-intubation, thyroid/cardiac surgery (recurrent laryngeal nerve injury).
> - **[[Neoplastic]]:** Laryngeal cancer, [[leukoplakia]].
> 
> ---
> 
> ## Clinical Details
> 
> ###### Symptoms:
> - Hoarse, raspy, breathy, or strained voice.
> - Voice breaks/pitch changes.
> - Throat pain, rawness with speaking.
> - Difficulty projecting voice.
> - Loss of vocal range (singers).
> - Vocal fatigue.
> 
> ###### Diagnostic workup:
> - **History:** Duration, triggers, voice use patterns.
> - **Laryngoscopy:** Flexible fiberoptic or [[videostroboscopy]] (visualize vocal cord motion, lesions).
> - **Acoustic analysis:** Voice quality measures.
> - **Labs:** If systemic disease suspected (**thyroid, [[autoimmune]]**).​
> 
> ###### Management:
> 
> |Condition|Treatment|
> |---|---|
> |**MTD/functional**|Voice therapy with SLP (**speech-language pathologist**); vocal hygiene.|
> |**Laryngitis**|Voice rest, hydration, treat underlying cause (**antivirals, antibiotics if bacterial**).|
> |**GERD**|PPIs, H2 blockers, lifestyle modifications.|
> |**Spasmodic dysphonia**|Botulinum toxin injections q3-4 months ([[64617]] CPT).|
> |**Nodules/polyps**|Voice therapy; surgery if refractory ([[microlaryngoscopy]]).|
> |**Vocal cord paralysis**|Voice therapy, medialization procedures, injection [[laryngoplasty]].|
> 
> **Prognosis:** Excellent for acute [[laryngitis]] (2 weeks); chronic conditions require ongoing management; 70-80% improve with voice therapy for MTD​
> 
> ---
> 
> ## Red Flags (Urgent Evaluation)
> 
> - [[Dysphonia]] >2-3 weeks without improvement.
> - History of smoking/alcohol (malignancy risk).
> - [[hemoptysis]], [[dysphagia]], [[odynophagia]].
> - Weight loss, neck mass.
> - Acute airway compromise.​
> 
> ---
> 
> ### One-Sentence Summary
> 
> **Dysphonia** ([[R49.0]], Greek _dys[[-phonia]]_ "**abnormal voice**"), manifests as hoarseness/strain/breathiness from vocal cord inflammation (**[[laryngitis]]**), lesions (**nodules**), neurological disorders (**spasmodic dystonia [[64617]] botox**), or muscle tension (**MTD**), treated via voice therapy/surgery/medical management.
> 
_____
>[!tip]- DERIVATIONS of [[dysphonia]]
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