---
tags:
  - medterm
  - medroot
  - otolaryngology
aliases:
  - voicebox removal
  - larynx resection
roots:
  - laryngectomy
  - laryng-
  - -ectomy
  - -tomy
  - -my
forms:
  - prefix
  - suffix
  - combined
  - noun
alphabet: L
definition:
  - surgical procedure to remove all or part of the larynx (voice box)
---
>[!Note] DEFINITION of [[laryngectomy]]
>A **laryngectomy** is a **surgical procedure involving the removal of all or part of the larynx, the area of the throat that contains the vocal cords**. In a **total laryngectomy**, the entire larynx is removed including the vocal folds, hyoid bone, **epiglottis**, and thyroid cartilage. The surgery involves creating a new airway that allows the patient to breathe. This procedure affects how the patient **breathes, speaks, and swallows**. It is almost exclusively performed due to laryngeal tumor, primarily [[squamous cell carcinoma]]. The first total **laryngectomy** for cancer was performed by Billroth on December 31, 1873.
_____
>[!info]+ ETYMOLOGY of [[laryngectomy]]
>#greek 
>- **Origin**: First recorded in 1885-90;
>- **Components**:
>    - **[[laryng-]]**: from Greek _larynx_ (**windpipe, throat, larynx**)
>    - **[[-ectomy]]**: from Greek _ek_ "**out**" + _tomia_ "**a cutting**" (from _temnein_ "**to cut**")
>- **Literal meaning**: "**cutting out of the larynx**"
_____

> [!question]+ **Related Terms**
> 
> | Term | Definition |
> |------|------------|
> | **Larynx** | The voice box; contains vocal cords   |
> | **Total Laryngectomy** | Complete removal of the larynx  |
> | **Partial Laryngectomy** | Removal of part of the larynx   |
> | **[[Hemilaryngectomy]]** | Removal of one half of the larynx   |
> | **Radical Neck [[dissection]]** | Removal of lymph nodes and surrounding tissue, often done with laryngectomy   |
> | **[[Tracheostoma]]** | Permanent opening in the neck for breathing after laryngectomy   |
> | **[[Laryngectomee]]** | A person who has had a laryngectomy  |
> | **[[-ectomy]]** | Suffix meaning "surgical removal"   |
> | **[[laryngo-]]** | Prefix meaning "pertaining to the larynx"  |
>
_____
> [!example]+ **CODING AND NUANCES**
> ### **ICD-10-CM (Diagnosis Codes)**
> | Code | Description |
> |------|-------------|
> | **[[Z90.02]]** | Acquired absence of larynx (history of laryngectomy)   |
> | **[[C32.0]]** | Malignant neoplasm of glottis   |
> | **[[C32.1]]** | Malignant neoplasm of supraglottis   |
> | **[[C32.2]]** | Malignant neoplasm of subglottis  |
> | **[[C32.3]]** | Malignant neoplasm of laryngeal cartilage  |
> | **[[C32.8]]** | Malignant neoplasm of overlapping lesion of larynx   |
> | **[[C32.9]]** | Malignant neoplasm of larynx, unspecified   |
> | **[[J38.7]]** | Other diseases of larynx   |
> 
> ### **ICD-10-PCS (Procedure Codes)**
> | Code | Description |
> |------|-------------|
> | **0CTS0ZZ** | Resection of Larynx, Open Approach   |
> | **0CTS4ZZ** | Resection of Larynx, [[Percutaneous]] Endoscopic Approach |
> | **0CTS7ZZ** | Resection of Larynx, Via Natural or Artificial Opening |
> | **0CTS8ZZ** | Resection of Larynx, Via Natural or Artificial Opening Endoscopic |
> | **0CRS07Z** | Replacement of Larynx with Autologous Tissue Substitute, Open Approach  |
> | **0CRS0JZ** | Replacement of Larynx with Synthetic Substitute, Open Approach   |
> 
> ## **CPT Codes**
> 
> | Code | Description |
> |------|-------------|
> | **[[31360]]** | Laryngectomy; total, without radical neck dissection   |
> | **[[31365]]** | Laryngectomy; total, with radical neck dissection   |
> | **[[31367]]** | Laryngectomy; subtotal [[supraglottis]], without radical neck dissection   |
> | **[[31368]]** | Laryngectomy; subtotal supraglottis, with radical neck dissection   |
> | **[[31370]]** | Laryngectomy; partial, without radical neck dissection (hemilaryngectomy)   |
> | **[[31371]]** | Laryngectomy; partial, with radical neck dissection   |
> | **[[31372]]** | Laryngectomy; partial, with [[pharyngectomy]]   |
> | **[[31373]]** | Laryngectomy; partial, with pharyngectomy and radical neck dissection   |
> | **[[31375]]** | Laryngectomy; partial, with [[epiglottectomy]]  |
> 
> ---
> 
> **Note**: ICD-10-CM diagnosis codes are typically 3-7 characters. ICD-10-PCS procedure codes are always 7 characters. CPT codes are 5 digits. Some codes may require additional characters/modifiers based on specific clinical circumstances. DRG 012 and 013 cover tracheostomy or laryngectomy procedures with or without complications/comorbidities
> _____

>[!tip]- DERIVATIONS of [[laryngectomy]]
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