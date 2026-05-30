---
tags:
  - medterm
  - medroot
  - ophthalmologyy
aliases:
  - laryngomicroscopy
  - direct microlaryngoscopy
roots:
  - micro-
  - micr-
  - -laryng-
  - laryngo-
  - -scopy
  - -oscopy
forms:
  - prefix
  - suffix
  - combined
  - noun
alphabet: M
definition:
  - magnified
  - direct surgical visualization of the larynx using a microscope
---
>[!Note] DEFINITION of [[microlaryngoscopy]]
>A procedure performed under general anesthesia in which a **rigid laryngoscope** is suspended to provide hands-free access to the larynx, and an operating microscope is used to achieve high magnification of [[laryngeal]] structures. This allows **precise visualization and surgical manipulation of vocal cords and surrounding tissues for diagnostic or therapeutic purposes**. It is the gold-standard approach for most benign vocal cord lesion removal and [[laryngeal]] microsurgery.
_____
>[!info]+ ETYMOLOGY of [[microlaryngoscopy]]
>#greek **[[Micro-]] **Greek  _mikros_ Small / magnified **[[Laryngo-]]** Greek  _larynx_ The larynx (**voice box**) **[[-scopy]]** Greek _skopein_ To examine / to look
>
_____

> [!success]+ **Related Terms**
> - **[[laryngoscopy]]** — broader term; includes indirect and flexible methods
> - **Suspension Laryngoscopy** — the setup technique used during microlaryngoscopy
> - **[[Phonosurgery]]** — surgery to improve or restore voice
> - **[[Panendoscopy]]** — combined scope exam of larynx, esophagus, and bronchi
> - **[[laryngoplasty]]** — reconstructive laryngeal surgery
> - **Vocal Cord Stripping** — older technique; removal of vocal cord epithelium
> - **Cold Steel Excision** — instrument-based (**non-laser**) lesion removal
> - **KTP / CO₂ Laser Laryngoscopy** — laser energy used instead of/alongside cold instruments
> - **[[Stroboscopy]]** — functional vocal cord assessment, often done pre/post-op
> - **[[Tracheoscopy]]** — related scope exam of the trachea
>
_____
> [!example]+  **CODING AND NUANCES**
> 
> ## CPT Codes
> 
> These are the **-with operating microscope or telescope** variants — the true microlaryngoscopy codes:
> 
> |CPT Code|Description|
> |---|---|
> |**[[31531]]**|[[laryngoscopy]], direct, operative; foreign body removal **with operating microscope**|
> |**[[31536]]**|Laryngoscopy, direct, operative; with biopsy **with operating microscope**|
> |**[[31541]]**|Laryngoscopy, direct, operative; excision of tumor and/or stripping of vocal cord(s) or epiglottis **with operating microscope**|
> |**[[31545]]**|Direct operative laryngoscopy with microscope; [[submucosal]] removal of non-neoplastic lesion(s), **with reconstruction using local tissue flap(s)**|
> |**[[31546]]**|Same as 31545, **with reconstruction using other than local tissue flap**|
> |**[[31561]]**|Laryngoscopy, direct, operative; with arytenoidectomy **with operating microscope**|
> |**[[31571]]**|Laryngoscopy, direct, operative; with injection into vocal cord(s) **with operating microscope**|
> 
>> [!note] **Note:** 
>> The "without microscope" counterparts ([[31530]], [[31535]], [[31540]], [[31560]], [[31570]]) are direct [[laryngoscopy]] only and should _not_ be coded when a microscope is documented.
> 
> ---
> 
> ## ICD-10-CM Diagnosis Codes
> 
> _(Codes represent the most common diagnoses leading to **microlaryngoscopy**)_
> 
> |ICD-10 Code|Description|
> |---|---|
> |**[[J38.1]]**|Polyp of vocal cord and larynx|
> |**[[J38.2]]**|Nodules of vocal cords|
> |**[[J38.3]]**|Other diseases of vocal cords _(includes [[granuloma]], [[leukoplakia]], [[pachyderma]])_|
> |**[[J38.4]]**|[[Edema]] of larynx _(includes Reinke's edema)_|
> |**[[J38.6]]**|[[Stenosis]] of larynx|
> |**[[J38.00]]**|Paralysis of vocal cords and larynx, unspecified|
> |**[[J38.01]]**|Paralysis of vocal cords and larynx, unilateral|
> |**[[J38.02]]**|Paralysis of vocal cords and larynx, bilateral|
> |**[[D14.1]]**|Benign neoplasm of larynx|
> |**[[C32.0]]**|Malignant neoplasm of [[glottis]]|
> |**[[C32.1]]**|Malignant neoplasm of [[supraglottis]]|
> |**[[C32.2]]**|Malignant neoplasm of [[subglottis]]|
> |**[[C32.9]]**|Malignant neoplasm of larynx, unspecified|
> |**[[B08.5]]**|Enteroviral [[vesicular]] pharyngitis _(recurrent respiratory papillomatosis workup)_|
> |**[[D10.5]]**|Benign neoplasm of other parts of oropharynx|
> 
> > [!note] **7th Character Note:** 
> > These laryngeal/vocal cord ICD-10 codes are complete as listed — a 7th character extension is **not applicable** to this code set. 7th characters are required primarily for trauma (S/T codes) and certain obstetric/neonatal categories.
> 
> ---
> 
>> [!note] **Coding tip (Inpatient):** 
>> When [[microlaryngoscopy]] is the principal procedure, confirm documentation specifies _"operating microscope"_ or _"microscopic technique"_ — this distinction drives the code selection (e.g., [[31541]] vs. [[31540]]). Laser use (**CO₂, KTP**) may be separately documented but is generally bundled.

_____
>[!tip]- DERIVATIONS of [[microlaryngoscopy]]
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