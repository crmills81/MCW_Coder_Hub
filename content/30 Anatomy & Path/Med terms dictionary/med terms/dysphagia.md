---
tags:
  - medterm
  - otolaryngology
aliases:
  - swallowing difficulty
  - aphagia
  - Dysphagia
roots:
  - dys-
  - -phagia
  - -gia
forms:
  - prefix
  - suffix
  - noun
alphabet: D
definition: Difficulty swallowing
---

> [!NOTE]  DEFINITION of [[dysphagia]]
> **Dysphagia** is **difficulty or inability to swallow** solids, liquids, or both due to impaired [[oropharyngeal]] or [[esophageal]] function.[^2][^5][^1] **Dysphagia** is **an abnormal delay in the movement of a food bolus from the mouth to the stomach, classified as oropharyngeal (difficulty initiating swallow from weakened throat muscles or neurological problems) or esophageal (difficulty moving food through the esophagus from blockages, strictures, motility disorders, or extrinsic compression)**; causes include neurological disorders ([[stroke]], [[Parkinson's disease]]), structural abnormalities ([[strictures]], tumors, [[achalasia]], Zenker [[diverticulum]]), inflammatory conditions ([[GERD]], [[eosinophilic]] [[esophagitis]]), and muscular conditions ([[scleroderma]]); complications include aspiration [[pneumonia]], malnutrition, [[dehydration]], and weight loss, requiring multidisciplinary diagnostic evaluation and treatment.

_______

> [!info]+  ETYMOLOGY of [[dysphagia]]
> #greek
> 
> - **[[Dys-]]:** #greek prefix *[[dus-]]* = "**bad, difficult, abnormal**."
> - **[[-phagia]]:** Greek *phageîn* (φαγεῖν) = "**to eat, swallow.**"
> - **Literal:** "**Difficulty swallowing**" or "**abnormal eating/swallowing**."[^5]
_____

> [!success]+ ### Classification and Types
> 
> | Type | Location/Phase | Characteristics |
> | :-- | :-- | :-- |
> | **Oropharyngeal dysphagia** | Mouth/throat (**oral  & pharyngeal phases**) | Difficulty initiating swallow; choking, coughing, nasal regurgitation; weak throat muscles; neurological causes.[^2][^4] |
> | **Esophageal dysphagia** | Esophagus (**esophageal phase**) | Food stuck in chest; sensation after swallowing initiated; structural or motility problems.[^2][^4][^5] |
> 
_____

> [!warning]+ ## Coding Context
> 
> **ICD-10-CM:**
> 
> 
> | Code | Description |
> | :-- | :-- |
> | **[[R13.10]]** | Dysphagia, unspecified. |
> | **[[R13.11]]** | Dysphagia, oral phase. |
> | **[[R13.12]]** | Dysphagia, oropharyngeal phase. |
> | **[[R13.13]]** | Dysphagia, pharyngeal phase. |
> | **[[R13.14]]** | Dysphagia, pharyngoesophageal phase. |
> | **[[R13.19]]** | Other dysphagia. |
> 
> **Associated diagnoses:**
> 
> - **[[I69.391]]** - Dysphagia following cerebral infarction ([[stroke]]).
> - **[[K22.0]]** - [[Achalasia]] of cardia.
> - **[[K22.2]]** - Esophageal obstruction.
> - **[[K21.9]]** - [[GERD]].
> 
> **CPT Codes (Procedures):**
> 
> - **[[43197]]** - [[Esophagoscopy]], flexible, diagnostic.
> - **[[74230]]** - Swallowing function study (modified barium swallow/[[videofluoroscopy]]).
> - **[[91010]]** - Esophageal motility study ([[manometry]]).
> - **[[92610]]-[[92617]]** - Swallowing evaluation/training by SLP.
> - **[[43450]]** - Dilation of esophagus.
> 
_____

> [!example]+ ## Causes and Etiology
> 
> 
> **Oropharyngeal dysphagia causes:**[^6][^2][^3]
> 
> - **Neurological:** Stroke, Parkinson's disease, MS, [[muscular dystrophy]], brain injury, [[ALS]].
> - **Structural:** Zenker diverticulum, tumors, cleft palate, dental problems.
> - **Muscular:** [[myasthenia gravis]], [[dermatomyositis]], scleroderma.
> 
> **Esophageal dysphagia causes:**[^1][^2][^5]
> 
> - **Motility disorders:** Achalasia, [[diffuse esophageal spasm]], scleroderma.
> - **Structural/obstructive:** [[Esophageal strictures]], tumors, Schatzki rings, webs, [[paraesophageal]] hernia.
> - **Inflammatory:** GERD, eosinophilic esophagitis, radiation [[esophagitis]], caustic ingestion.
> - **Extrinsic compression:** Enlarged blood vessels, thyroid, lymph nodes.
> 
> ***
> 
> ## Clinical Features
> 
> **Symptoms:**[^4][^7][^2][^6]
> 
> - Sensation of food stuck in throat or chest.
> - Pain while swallowing (odynophagia).
> - Choking, coughing, or gagging when swallowing.
> - Regurgitation of food or liquids.
> - Nasal regurgitation.
> - Drooling, inability to control saliva.
> - Hoarseness, wet voice.
> - Frequent heartburn.
> - Weight loss, malnutrition.
> - Recurrent [[pneumonia]] (aspiration).
> 
> **Three phases of swallowing:**[^6]
> 
> 1. **Oral phase:** Voluntary; chewing, tongue movement to form bolus.
> 2. **Pharyngeal phase:** Involuntary; [[epiglottis]] closes, bolus passes through throat.
> 3. **Esophageal phase:** Involuntary; [[peristalsis]] moves bolus to stomach.
> 

_____


> [!danger]+ ## Related Terms
> 
> - **[[odynophagia]]:** Painful swallowing (**different from [[dysphagia]]**).
> - **[[Aspiration]]:** Food/liquid entering airway/lungs.
> - **Achalasia:** Failure of lower esophageal sphincter to relax.
> - **Zenker diverticulum:** Pouch in upper esophagus collecting food.
> - **Eosinophilic esophagitis (EoE):** Allergic/immune esophageal inflammation.
> - **[[Stricture]]:** Narrowing of esophagus from scarring.
> - **Videofluoroscopy/VFSS:** Modified barium swallow study (**gold standard diagnostic**).
> - **FEES:** Fiberoptic endoscopic evaluation of swallowing.

_____
>[!tip]- DERIVATIONS of [[dysphagia]]
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
>AND any(contains(definition, split(this.definition, " ")))
>```

[[Med roots]]
[[Appendix A Prefixes]]
[[Appendix B Combining Forms]]
[[Appendix C Suffixes]]
[[Appendix D Suffix forms]]