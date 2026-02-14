---
tags:
  - medterm
  - medroot
  - otolaryngology
  - ENT
aliases:
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
definition:
  - impaired voice production
---
>[!Note] DEFINITION of [[Dysphonia]]
>[[Dysphonia]] encompasses **voice disorders affecting vocal quality, pitch, loudness, or effort due to abnormalities in vocal cord vibration, muscle tension, neural control, or structural lesions; presentations range from mild hoarseness (rough/raspy voice) to severe breathiness, strain, voice breaks, or complete aphonia (voice loss);** etiologies include inflammation ([[laryngitis]], [[GERD]]), structural lesions (nodules, polyps, cysts), neurological disorders ([[spasmodic dysphonia]], [[vocal cord paralysis]]), functional disorders (muscle tension [[Dysphonia]]), and neoplasms; impacts communication, professional voice users (teachers, singers), and quality of life. 
>
> #### Related Terms
>
>- **Hoarseness:** Synonym for dysphonia; rough vocal quality.[clevelandclinic](https://my.clevelandclinic.org/health/diseases/17105-hoarseness)​
>- **[[Aphonia]]:** Complete voice loss (**more severe than dysphonia**).[ncbi.nlm.nih](https://www.ncbi.nlm.nih.gov/books/NBK565881/)​
>- **Laryngitis:** Laryngeal inflammation causing dysphonia.[wexnermedical.osu](https://wexnermedical.osu.edu/ear-nose-throat/voice-and-swallowing-disorders/voice-disorders)​
>- **[[Dysarthria]]:** Motor speech disorder (**articulation**) vs. vocal quality.
>- **[[Vocal cord dysfunction ]](VCD):** Paradoxical vocal cord motion.[rush](https://www.rush.edu/conditions/dysphonia)​
>- **[[Stroboscopy]]:** Gold standard for visualizing vocal cord vibration.[ncbi.nlm.nih](https://www.ncbi.nlm.nih.gov/books/NBK565881/)
_____
>[!info]+ ETYMOLOGY of [[Dysphonia]]
>#greek
>- **[[Dys-]]:** Greek prefix _[[dus-]]_ = "**bad, difficult, abnormal**."
- **[[-phonia]]:** Greek _phōnḗ_ (φωνή) = "**voice, sound**."
- **Literal:** "**Abnormal voice**" or "**difficulty with voice**."
_____
>[!tip]+ DERIVATIONS of [[Dysphonia]]
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

---

## Classification and Types

|Type|Characteristics/Mechanism|Presentation|
|---|---|---|
|**[[Spasmodic dysphonia]]**|Neurological; laryngeal dystonia with involuntary vocal cord spasms from overactive brain signals.[wexnermedical.osu+1](https://wexnermedical.osu.edu/ear-nose-throat/voice-and-swallowing-disorders/voice-disorders)|Strained/strangled (adductor) or breathy (abductor); voice breaks every few sentences.|
|**Muscle tension dysphonia (MTD)**|Excessive laryngeal muscle tension; abnormal muscle activation patterns.[wexnermedical.osu+2](https://wexnermedical.osu.edu/ear-nose-throat/voice-and-swallowing-disorders/voice-disorders)|Strained, effortful voice; most common voice disorder.|
|**Functional dysphonia**|No anatomical/neurological cause; voice impairment from overuse or psychological factors.[wexnermedical.osu+1](https://wexnermedical.osu.edu/ear-nose-throat/voice-and-swallowing-disorders/voice-disorders)|Hypofunctional (incomplete cord closure) or hyperfunctional (overuse).|
|**Hoarseness/laryngitis**|Vocal cord inflammation/swelling from infection, overuse, irritants.[wexnermedical.osu+1](https://wexnermedical.osu.edu/ear-nose-throat/voice-and-swallowing-disorders/voice-disorders)|Rough, raspy voice; lasts ~2 weeks with viral infection.|
|**Vocal cord paralysis**|Nerve damage interrupting laryngeal innervation (recurrent laryngeal nerve).[wexnermedical.osu+2](https://wexnermedical.osu.edu/ear-nose-throat/voice-and-swallowing-disorders/voice-disorders)|Weak, breathy voice; aspiration risk.|
|**[[Phonotraumatic lesions]]**|[[Nodules]], [[polyps]], cysts from vocal abuse/overuse.[nationwidechildrens+1](https://www.nationwidechildrens.org/conditions/hoarse-voice-dysphonia)|Hoarseness, pitch breaks, vocal fatigue in professional voice users.|

---

## Coding Context

**ICD-10-CM:**

|Code|Description|
|---|---|
|**[[R49.0]]**|Dysphonia (unspecified hoarseness).|
|**[[R49.1]]**|[[Aphonia]] (complete voice loss).|
|**[[J38.3]]**|Vocal cord paralysis.|
|**[[J04.0]]**|Acute laryngitis.|
|**[[G24.4]]**|[[Idiopathic orofacial dystonia]] (spasmodic dysphonia).|

**CPT Codes (Procedures):**

- **[[31575]]** – Laryngoscopy, flexible fiberoptic; diagnostic.
- **[[31579]]** – Laryngoscopy w/ stroboscopy.
- **[[64617]]** – Botulinum toxin injection into laryngeal muscles (spasmodic dysphonia).
- **[[92520]]** – Laryngeal function studies.

---

## Causes and Risk Factors

**Common etiologies:**[mayoclinic+2](https://www.mayoclinic.org/diseases-conditions/voice-disorders/symptoms-causes/syc-20353022)
- **Inflammation:** [[Viral laryngitis]], **GERD** ([[laryngopharyngeal reflux]]), allergies.
- **Overuse/trauma:** Excessive talking, yelling, singing (teachers, singers, coaches).
- **Structural lesions:** Vocal nodules ("singer's nodes"), polyps, cysts, [[papillomas]] (HPV).
- **Neurological:** Spasmodic dysphonia, Parkinson's disease, stroke, MS.
- **[[Iatrogenic]]:** Post-intubation, thyroid/cardiac surgery (recurrent laryngeal nerve injury).
- **[[Neoplastic]]:** Laryngeal cancer, [[leukoplakia]].

---

## Clinical Details

**Symptoms:**[rush+1](https://www.rush.edu/conditions/dysphonia)
- Hoarse, raspy, breathy, or strained voice.
- Voice breaks/pitch changes.
- Throat pain, rawness with speaking.
- Difficulty projecting voice.
- Loss of vocal range (singers).
- Vocal fatigue.

**Diagnostic workup:**
- **History:** Duration, triggers, voice use patterns.
- **Laryngoscopy:** Flexible fiberoptic or [[videostroboscopy]] (visualize vocal cord motion, lesions).
- **Acoustic analysis:** Voice quality measures.
- **Labs:** If systemic disease suspected (thyroid, autoimmune).[[ncbi.nlm.nih](https://www.ncbi.nlm.nih.gov/books/NBK565881/)]​

**Management:**[pennmedicine+2](https://www.pennmedicine.org/conditions/spasmodic-dysphonia)

|Condition|Treatment|
|---|---|
|**MTD/functional**|Voice therapy with SLP (speech-language pathologist); vocal hygiene.|
|**Laryngitis**|Voice rest, hydration, treat underlying cause (antivirals, antibiotics if bacterial).|
|**GERD**|PPIs, H2 blockers, lifestyle modifications.|
|**Spasmodic dysphonia**|Botulinum toxin injections q3–4 months ([[64617]] CPT).|
|**Nodules/polyps**|Voice therapy; surgery if refractory ([[microlaryngoscopy]]).|
|**Vocal cord paralysis**|Voice therapy, medialization procedures, injection [[laryngoplasty]].|

**Prognosis:** Excellent for acute laryngitis (2 weeks); chronic conditions require ongoing management; 70–80% improve with voice therapy for MTD.[[wexnermedical.osu](https://wexnermedical.osu.edu/ear-nose-throat/voice-and-swallowing-disorders/voice-disorders)]​

---

## Red Flags (Urgent Evaluation)

- Dysphonia >2–3 weeks without improvement.
- History of smoking/alcohol (malignancy risk).
- Hemoptysis, dysphagia, odynophagia.
- Weight loss, neck mass.
- Acute airway compromise.[[ncbi.nlm.nih](https://www.ncbi.nlm.nih.gov/books/NBK565881/)]​

---

## One-Sentence Summary

**Dysphonia** ([[R49.0]], Greek _dys[[-phonia]]_ "abnormal voice"), manifests as hoarseness/strain/breathiness from vocal cord inflammation (**laryngitis**), lesions (**nodules**), neurological disorders (spasmodic dystonia [[64617]] botox), or muscle tension (MTD), treated via voice therapy/surgery/medical management.[clevelandclinic+3](https://my.clevelandclinic.org/health/diseases/17105-hoarseness)

---

**Document created:** February 13, 2026  
**Medical coding professional reference**

[[Med roots]]
[[Appendix A Prefixes]]
[[Appendix B Combining Forms]]
[[Appendix C Suffixes]]
[[Appendix D Suffix forms]]