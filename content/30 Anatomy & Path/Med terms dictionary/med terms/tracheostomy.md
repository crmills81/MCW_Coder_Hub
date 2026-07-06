---
tags:
  - medterm
  - medroot
  - otolaryngology
  - ENT
aliases:
  - Tracheostomy
  - tracheotomy
  - trach
  - decannulation
  - stoma
  - tracheostoma
roots:
  - tracheostomy
  - trach-
  - trache-
  - -ostomy
  - -tomy
  - -my
forms:
  - prefix
  - suffix
  - combined
  - noun
alphabet: T
definition:
  - a surgical procedure in which an opening (stoma) is created through the anterior neck into the trachea to establish a direct
  - secure airway
---
>[!Note] DEFINITION of [[tracheostomy]]
>A **tracheostomy** (**also called a tracheotomy when referring strictly to the incision**) is a surgical intervention performed to create a patent airway by making an incision through the skin of the anterior neck, typically between the 2nd and 4th tracheal rings, and inserting a **tracheostomy** tube to maintain the opening. The procedure bypasses the **mouth, nose, pharynx, and larynx** entirely, delivering air directly to the lower respiratory tract. Tracheostomies may be performed as emergency, urgent, or elective procedures and may be carried out via open surgical technique or [[percutaneous]] dilational **tracheostomy** (PDT), the latter now commonly performed at the bedside in ICU settings under **bronchoscopic** guidance. Surgical [[tracheostomy]] is the traditional open approach performed in the OR. Common indications include prolonged mechanical ventilation, upper airway obstruction (**secondary to tumor, trauma, [[angioedema]], or foreign body**), facilitation of pulmonary toilet in patients who cannot manage secretions, severe [[obstructive sleep apnea]] refractory to other treatment, post-[[laryngectomy]] airway management, neurological conditions impairing airway protection (**ALS, spinal cord injury, CVA**), and head and neck malignancy — the last of which makes this highly relevant in the [[otolaryngology]]/head & neck surgery setting. The **tracheostomy** tube itself consists of an outer [[cannula]], inner cannula (**for cleaning**), and an [[obturator]] used during insertion. Tubes may be cuffed (**to create a seal for mechanical ventilation or aspiration prevention**) or uncuffed, and may be fenestrated (**to allow airflow through the larynx for speech**). A speaking valve such as a Passy-Muir valve may be placed on uncuffed or deflated-cuff tubes to restore phonation. [[Decannulation]] — the planned removal of the **tracheostomy** tube — occurs when the original indication resolves and the patient can maintain and protect the airway independently. The [[stoma]] typically closes spontaneously after tube removal, though surgical closure may be required.
_____
>[!info]+ ETYMOLOGY of [[tracheostomy]]
>#greek 
>**Trachea** - Greek tracheia (τραχεῖα) from [[trachy]]; Rough — referring to the ridged cartilaginous rings [[-ostomy]]; Greek [[stoma]] (στόμα)Mouth, opening — **a surgically created permanent or semi-permanent opening** [[-otomy]] Greek tomē (τομή)A cutting or incision; - **[[tracheo-]]**: from Latinized Greek _trakheia_ (**windpipe**), from _trakhys_ meaning "rough, uneven, stony"
>- **[[-tomy]]**: from Greek _[[-tomia]]_ "**a cutting of**," from _tome_ "**a cutting, section**" (from PIE root _*tem-_ "**to cut**")
>
> ⚠️ **[[Tracheostomy]] vs. [[Tracheotomy]]:** Technically, **tracheotomy** refers to the _incision_ into the trachea, while **tracheostomy** refers to the creation of a _stoma_ (**a sustained opening with a tube**). In modern clinical practice, the terms are used interchangeably, but **tracheostomy** is the preferred and more commonly documented term in inpatient coding and operative reports.
_____
> [!example]+ **RELATED TERMS AND CODES**
> 
> | Term | Definition |
> |------|------------|
> | **[[Tracheostomy]]** | The actual opening/[[stoma]] created in the trachea   |
> | **[[Cricothyroidotomy]]** | Emergency procedure making incision in cricothyroid membrane   |
> | **Tracheostomy tube** | [[Catheter]] inserted into the tracheostomy for breathing   |
> | **Trachea** | The windpipe; the tube connecting larynx to bronchi   |
> | **[[-tomy]]** | Suffix meaning "a cutting" (surgical incision or removal)   |
> | **[[tracheo-]]** | Prefix meaning "of or pertaining to the trachea"   |
> | **[[Tracheotomize]]** | To perform a tracheotomy   |
> | **[[Tracheotome]]** | Knife used in tracheotomy   |
> 
> ## **ICD-10 Codes**
> 
> | Code | Description |
> |------|-------------|
> | **[[Z93.0]]** | Tracheostomy status (presence of tracheostomy)   |
> | **[[Z43.0]]** | Encounter for attention to tracheostomy   |
> | **[[J95.00]]** | Unspecified tracheostomy complication  |
> | **J95.01-** | Hemorrhage from tracheostomy (requires 7th character) |
> | **J95.02-** | Infection of tracheostomy (requires 7th character) |
> | **J95.03-** | Mechanical complication of tracheostomy (requires 7th character) |
> | **J95.04-** | Tracheostomy stenosis (requires 7th character) |
> | **J95.05-** | [[Tracheoesophageal]] fistula following tracheostomy (requires 7th character) |
> | **J95.06-** | Tracheoinnominate fistula following tracheostomy (requires 7th character) |
> | **J95.08-** | Other tracheostomy complication (requires 7th character) |
> | **0B113F4** | ICD-10-PCS: Bypass Trachea to Cutaneous, Percutaneous Approach   |
> | **0B21XFZ** | ICD-10-PCS: Change Tracheostomy Device in Trachea, External Approach   |
> | **0BP1XFZ** | ICD-10-PCS: Removal of Tracheostomy Device from Trachea, External Approach   |
> | **0BW10FZ** | ICD-10-PCS: Revision of Tracheostomy Device in Trachea, Open Approach   |
> 
> **CPT Codes**
> 
> | Code | Description |
> |------|-------------|
> | **[[31600]]** | Tracheostomy, planned (separate procedure)   |
> | **[[31601]]** | Tracheostomy, planned (separate procedure); younger than 2 years   |
> | **[[31603]]** | Tracheostomy, emergency procedure; [[transtracheal]]   |
> | **[[31605]]** | Tracheostomy, emergency procedure; cricothyroidotomy    |
> | **[[31610]]** | Tracheostomy, fenestration procedure with skin flaps   |
> 
> ---
> 
> **Note**: ICD-10-CM diagnosis codes are typically 3-7 characters. ICD-10-PCS procedure codes are always 7 characters. CPT codes are 5 digits. Some codes may require additional characters/modifiers based on specific clinical circumstances
> 

_____
>[!tip]- DERIVATIONS of [[tracheostomy]]
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

[[Med terms dictionary]]
[[Appendix A Prefixes]]
[[Appendix B Combining Forms]]
[[Appendix C Suffixes]]
[[Appendix D Suffix forms]]