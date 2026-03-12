---
tags:
  - medterm
  - medroot
  - urology
aliases:
  - voiding cystourethrogram
  - cystogram
  - cystourethrogram
roots:
  - urethrocystography
  - ure-
  - ur-
  - -urethro-
  - -cysto-
  - -graphy
forms:
  - prefix
  - suffix
  - combined
  - noun
alphabet: U
definition:
  - radiographic/fluoroscopic contrast study that simultaneously images both the urethra and the urinary bladder
---
>[!Note] DEFINITION of [[urethrocystography]]
>**Urethrocystography** is a **fluoroscopic imaging procedure in which contrast medium is introduced into the lower urinary tract to opacify and visualize both the urethra and bladder together.** It encompasses two primary techniques that may be performed independently or in combination: 1. [[Retrograde Urethrogram]] (RUG): Contrast is injected in a **retrograde** fashion directly into the urethral [[meatus]] under [[fluoroscopy]], filling the urethra from distal to proximal. Best for evaluating the anterior urethra (**penile and bulbar urethra**), strictures, trauma/disruption, fistulas, and diverticula. 2. Voiding [[Cystourethrogram]] (VCUG): The bladder is filled with contrast (**via [[catheter]] or after IV contrast excretion**), and images are obtained while the patient voids. This demonstrates the bladder neck, posterior urethra, **vesicoureteral reflux** (VUR), and bladder wall abnormalities **(e.g., trabeculation, diverticula**). When combined, the full urethra and bladder are evaluated in one study session. It is widely used in urology for post-traumatic urethral injuries, [[urethral strictur]]e disease, post-[[prostatectomy]] anastomotic leaks, stress urinary incontinence workup, pediatric VUR evaluation, and assessment of bladder fistulas.
_____
>[!info]+ ETYMOLOGY of [[urethrocystography]]
>#greek **Urethra**Greek _ourethra_ (οὐρήθρα), from _ourein_" **To urinate**"; the canal conveying urine from bladder to exterior **[[-o-]]** Connecting vowel **[[Cyst-]]** Greek _kystis_ (κύστις) "**Bladder**" or "sac" **-o-** Connecting vowel **[[-graphy]]** Greek _graphia_ (γραφία), from _graphein_"**To write/record**" → a radiographic imaging study **Full meaning**_"Radiographic recording of the urethra and bladder"_
_____

> [!example]+ 🔧 **CPT Codes _(Outpatient/Professional Reference)_**
> 
> |Code|Description|
> |---|---|
> |**[[74450]]**|Urethrocystography, retrograde (RUG)|
> |**[[74455]]**|Urethrocystography, voiding (VCUG)|
> |**[[74430]]**|Cystography, minimum 3 views|
> |**[[74420]]**|Urography, retrograde (ureter/pelvis focus)|
> |**[[74240]]**|Radiologic examination, GI tract — upper (for context/contrast)|
> |**[[76000]]**|Fluoroscopy, up to 1 hour (add-on when applicable)|
> 
> ---
> 
> ### 📝 **Inpatient Coder Notes**
> 
> - **BT1Bxxx is your primary code** for a true [[urethrocystography]] (**combined bladder + urethra study**). If the study only documents one structure, use the urethra-only or bladder-only codes accordingly.
> - **Contrast character is critical**: Low osmolar contrast (character 1) is most commonly used in modern practice — but always verify the radiology/procedure note for the specific contrast agent used.
> - **VCUG vs. RUG distinction**: Both are types of urethrocystography. In PCS, both map to fluoroscopy of bladder and urethra (BT1B) when the full combined study is performed. If only RUG is done without bladder filling, use the urethra-only codes (BT15x).
> - **Post-prostatectomy anastomotic leak study**: Commonly seen in your urology cases — this is typically a cystogram or VCUG coded with BT1B or BT10 codes depending on whether the urethra was also imaged.
> - **Pediatric VUR workup**: VCUG is the gold standard — same PCS codes apply regardless of age; the diagnosis codes for VUR ([[N13.70]]-[[N13.729]]) would be assigned separately.
_____


> [!danger]+ 🏥 **ICD-10-PCS Codes _(Inpatient)_**
> 
> **Section B - Imaging | Body System T - Urinary System**
> 
> #### 🔬 Fluoroscopy — Bladder and Urethra Combined _(primary urethrocystography codes)_:
> 
> |Code|Description|
> |---|---|
> |**BT1B0ZZ**|Fluoroscopy of Bladder and Urethra using High Osmolar Contrast|
> |**BT1B1ZZ**|Fluoroscopy of Bladder and Urethra using Low Osmolar Contrast|
> |**BT1BYZZ**|Fluoroscopy of Bladder and Urethra using Other Contrast|
> |**BT1BZZZ**|Fluoroscopy of Bladder and Urethra (no contrast specified)|
> 
> #### 🔬 Fluoroscopy — Urethra Only _(RUG without bladder filling)_:
> 
> |Code|Description|
> |---|---|
> |**BT150ZZ**|Fluoroscopy of Urethra using High Osmolar Contrast|
> |**BT151ZZ**|Fluoroscopy of Urethra using Low Osmolar Contrast|
> |**BT15YZZ**|Fluoroscopy of Urethra using Other Contrast|
> |**BT15ZZZ**|Fluoroscopy of Urethra (no contrast specified)|
> 
> #### 🔬 Fluoroscopy — Bladder Only _(cystogram without urethral component)_:
> 
> |Code|Description|
> |---|---|
> |**BT100ZZ**|Fluoroscopy of Bladder using High Osmolar Contrast|
> |**BT101ZZ**|Fluoroscopy of Bladder using Low Osmolar Contrast|
> |**BT10YZZ**|Fluoroscopy of Bladder using Other Contrast|
> |**BT10ZZZ**|Fluoroscopy of Bladder (no contrast specified)|
> 
> #### 🔬 Plain Radiography — Bladder and Urethra _(static images only, no fluoroscopy)_:
> 
> |Code|Description|
> |---|---|
> |**BT0B0ZZ**|Plain Radiography of Bladder and Urethra using High Osmolar Contrast|
> |**BT0B1ZZ**|Plain Radiography of Bladder and Urethra using Low Osmolar Contrast|
> |**BT0BYZZ**|Plain Radiography of Bladder and Urethra using Other Contrast|
> |**BT0BZZZ**|Plain Radiography of Bladder and Urethra (no contrast)|

_____
>[!tip]- DERIVATIONS of [[urethrocystography]]
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