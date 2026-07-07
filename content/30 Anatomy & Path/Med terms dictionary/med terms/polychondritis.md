---
tags:
  - medterm
  - medroot
  - otolaryngology
  - ENT
aliases:
  - relapsing polychondritides
  - atrophic polychondritis
  - Meyenburg-Altherr-Uehlinger syndrome
  - 
roots:
  - polychondritis
  - poly-
  - -chondritis
  - -itis
  - -tis
forms:
  - prefix
  - suffix
  - combining
alphabet: P
definition:
  - inflammation of cartilage at multiple sites in the body
---
>[!Note] DEFINITION of [[polychondritis]]
>**Relapsing Polychondritis (RP)** is a **chronic, systemic autoimmune disease of unknown etiology with a tendency to recur in episodic flares.**  The body's immune system mistakenly attacks its own cartilage tissue, leading to inflammation and subsequent degeneration. While it can affect any cartilage, it has a predilection for specific areas.  Key manifestations include:  **Auricular Chondritis**: The most common sign, presenting as sudden, severe pain, redness, and swelling of the cartilage of one or both outer ears (**pinnae**),  the earlobes. Recurrent episodes can lead to deformities known as "**cauliflower ear**" or "**floppy ear**".  **Nasal Chondritis**: The second most common manifestation, causing pain, swelling, and redness over the bridge of the nose. It can lead to the collapse of the nasal bridge, resulting in a "*saddle nose deformity"* .  **Arthritis**: Joint inflammation is common, ranging from mild joint pain (**[[arthralgia]]**) to a non-erosive, asymmetric, or symmetric inflammatory arthritis, often affecting the [[costochondral]] joints (**where ribs meet the sternum**) and **knees**.  **Respiratory Tract Involvement:** Inflammation of the **larynx, trachea, and bronchi** is a serious complication. It can cause **hoarseness, cough, and tenderness**. Severe inflammation can lead to cartilage collapse, resulting in shortness of breath (**[[dyspnea]]**) and life-threatening airway obstruction.  Ocular Involvement: The eyes can be affected in various ways, including [[episcleritis]], [[scleritis]], [[keratitis]], and [[iritis]].  **Other Systems**: Less commonly, the disease can impact heart valves, blood vessels (**vasculitis**), skin, and kidneys.  The disease affects men and women equally, with a typical onset in middle age. It is sometimes associated with other systemic rheumatic diseases like rheumatoid arthritis (RA) and [[systemic lupus erythematosus (SLE)]].
_____

>[!info]+ ETYMOLOGY of [[polychondritis]]
>#greek - **Polychondritis**: Derived from Greek roots. "[[Poly-]]" (πολύς, polús) means "**many**" or "**multiple**," referring to the involvement of multiple cartilage sites. "[[Chondr-]]" (χόνδρος, chóndros) means "**cartilage**." "[[-Itis]]" (from -ῖτις, -îtis) denotes "inflammation." Thus, "**polychondritis**" literally means "**inflammation of multiple cartilages**."
>- **Relapsing**: From Latin "*relapsus*" (**past participle of "relabi," meaning "to slip back**"), indicating the recurrent or episodic nature of the disease flares.
>- The full term "**relapsing polychondritis**" was first coined in 1960 by Pearson et al. to describe the condition's chronic, recurring pattern, building on earlier descriptions of "[[panchondritis]]" or "**systemic chondromalacia**" in the 1920s.
>
_____
> [!done]+ **Related Medical Terms**
> 
> - **[[Chondritis]]**: Inflammation of a single area of cartilage.
> - **Auricular Chondritis**: Inflammation of the cartilage of the ear.
> - **Saddle Nose Deformity**: A collapse of the nasal bridge, often a complication of nasal chondritis.
> - **Cauliflower Ear**: A deformity of the ear caused by trauma or inflammation leading to cartilage [[necrosis]] and fibrosis.
> - **Autoimmune Disease**: A condition in which the body's immune system attacks its own tissues.
> - **[[vasculitis]]**: Inflammation of blood vessels, which can be a feature of polychondritis.
> - **[[scleritis]]**: Inflammation of the sclera (the white outer layer of the eyeball).
> - **[[episcleritis]]**: Inflammation of the [[episclera]], a thin layer of tissue between the sclera and [[conjunctiva]].
> - **[[arthralgia]]**: Pain in a joint.
_____

> [!example]+ **CODING AND NUANCES**
> ⚕️ **ICD-10 Codes**
> 
> - **[[M94.1]]**: Relapsing polychondritis (primary diagnosis code).
> - **[[M94.111]]**: [[Chondromalacia]], right shoulder (_Note: Region-specific cartilage breakdown_).
> - **[[H61.13]]**: [[Chondritis]] of pinna (**external ear**), bilateral.
> - **[[J38.7]]**: Diseases of vocal cords (due to laryngeal involvement).
> - **[[M32.9]]**: Systemic lupus erythematosus (SLE) if associated.
> 
> 💼 **CPT Codes**
> 
> - **[[88305]]**: Biopsy of cartilage (e.g., [[auricular]]/nasal histopathology).
> - **[[70498]]**: CT scan of head/neck (assess [[laryngotracheal]] damage).
> - **[[92511]]**: [[Nasopharyngoscopy]] (evaluate airway involvement).
> - **[[95000]]+**: Autoantibody panels (e.g., RF, ANA, anti-type II collagen antibodies).
> - **[[96413]]**: Chemotherapy administration for immunosuppressants (_e.g., cyclophosphamide_).
> - **[[11102]]**: Tangential biopsy of skin (e.g., for ear or nasal cartilage biopsy; full code is 11102, often with add-ons like +11103 for additional lesions).
> - **[[31551]]**: [[laryngoplasty]]; for subglottic stenosis repair (common complication; full 5-character code).
> - **[[31600]]**: [[tracheostomy]], planned (for airway management in severe cases; full 5-character code).
> - **[[99214]]**: Office or other outpatient visit for evaluation and management (E/M code for ongoing care; level 4 established patient).
> - **[[96365]]**: [[Intravenous]] infusion, for hydration, therapeutic, prophylactic, or diagnostic injection (e.g., for administering immunosuppressants like infliximab; full 5-character code).
_____
>[!tip]- DERIVATIONS of [[polychondritis]]
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