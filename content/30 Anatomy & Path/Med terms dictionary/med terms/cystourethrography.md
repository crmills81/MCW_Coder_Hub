---
tags:
  - medterm
  - medroot
  - urology
aliases:
  - retrograde urethrogram
  - Cystourethrography
  - cystourethroram
  - cystogram
roots:
  - cystourethrography
  - cysto-
  - cyst-
  - -ography
  - -urethro-
  - -graphy
forms:
  - prefix
  - suffix
  - combined
  - 
alphabet: C
definition:
  - radiography of the bladder and urethra
---
>[!Note] DEFINITION of [[cystourethrography]]
>**Cystourethrography** is a fluoroscopic or radiographic procedure in which radiopaque contrast material is introduced into the bladder and urethra to evaluate their anatomical structure and functional dynamics. It can be performed in two primary ways: **retrograde** (**contrast is instilled via catheter from the urethra upward into the bladder**) or **voiding/anterograde** (**the patient voids while imaging captures contrast flow from the bladder through the urethra**). It is used to detect abnormalities such as [[vesicoureteral]] reflux, [[urethral strictures]], bladder neck obstruction, posterior urethral valves, fistulae, diverticula, and neuromuscular dysfunction of the lower urinary tract.
_____
>[!info]+ ETYMOLOGY of [[cystourethrography]]
>#greek [[cysto-]] **Greek _kystis_bladder, sac**
>[[urethr(o)-]] Greek _ourēthra_ urethra
>[[-graphy]] Greek _graphia_ process of recording/imaging
>
_____

> [!success]+ **RELATED TERMS**
> 
> - **[[Cystography]]** — imaging of the bladder only (no urethral assessment)
> - **[[Urethrocystography]]** — synonym; term used interchangeably in CPT nomenclature
> - **Vesicoureteral reflux (VUR)** — retrograde flow of urine from bladder into ureters; primary diagnosis driving VCUG in pediatric patients
> - **Posterior urethral valves (PUV)** — obstructive urethral leaflets detected on VCUG in males
> - **[[Urethral stricture]]** — narrowing of the urethra, well-visualized on retrograde urethrography
> - **[[Neurogenic bladder]]** — bladder dysfunction due to neurological impairment; VCUG helps characterize
> - **Bladder diverticulum** — outpouching of bladder wall seen on cystourethrography
> - **Urodynamics** — functional bladder study; often complementary to VCUG
> - **Fluoroscopy** — the real-time X-ray modality used to capture the study
>
_____

> [!example]+ **ICD-10-CM Diagnostic Codes ✅ _(common indications, verified)_**
> 
> 
> |Code|Description|
> |---|---|
> |**[[N13.70]]**|Vesicoureteral reflux, unspecified|
> |**[[N13.71]]**|Vesicoureteral reflux without reflux nephropathy|
> |**[[N13.721]]**|VUR with reflux nephropathy w/o hydroureter, unilateral|
> |**[[N13.722]]**|VUR with reflux nephropathy w/o hydroureter, bilateral|
> |**[[50 Medical Coding/ICD-10 Codes/N31.9]]**|Neuromuscular dysfunction of bladder, unspecified|
> |**[[N31.8]]**|Other neuromuscular dysfunction of bladder|
> |**[[N35.811]]**|Other urethral stricture, male, meatal|
> |**[[N35.812]]**|Other bulbous urethral stricture, male|
> |**[[N35.813]]**|Other membranous urethral stricture, male|
> |**[[N35.82]]**|Other urethral stricture, female|
> 
> ---
> 
> ### CPT Codes _(from coding knowledge — always verify against current AMA CPT)_
> 
> |Code|Description|
> |---|---|
> |**[[74450]]**|Urethrocystography, retrograde — radiology S&I|
> |**[[74455]]**|Urethrocystography, voiding (VCUG) — radiology S&I|
> |**[[51600]]**|Injection procedure for cystography or voiding urethrocystography|
> |**[[51605]]**|Injection for cystography/voiding urethrocystography with calibration chain|
> |**[[51610]]**|Injection procedure for retrograde urethrocystography|
> 
> > ⚠️ _CPT 74450/74455 are the radiology S&I codes; 51600/51610 are the procedural injection codes — both components are typically reported together when the urologist performs both._
>
_____
>[!tip]- DERIVATIONS of [[cystourethrography]]
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