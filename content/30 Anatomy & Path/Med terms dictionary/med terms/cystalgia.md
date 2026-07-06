---
tags:
  - medterm
  - specialty/urology
  - medroot
aliases:
  - cystodynia
  - Cystalgia
roots:
  - cyst-
  - alg-
  - -ia
forms:
  - adjective
  - combining
  - diminutive
"alphabet:": C
subclass: Ureteral Diseases; Urolithiasis
"definition:": Bladder pain
---
>[!note]+ Definition of [[cystalgia]]
>[[cyst-]][[alg-]][[-ia]] - Bladder pain (**condition of pain of bladder**); **Cystalgia** refers to pain or discomfort that originates from the urinary bladder. It is a symptom rather than a standalone disease entity. Clinically, patients typically describe this pain as being located in the [[suprapubic]] or pelvic region. The pain frequently fluctuates in intensity depending on the volume of urine in the bladder—often worsening as the bladder fills and temporarily improving immediately after voiding. **Cystalgia** is a hallmark manifestation of Interstitial Cystitis/Bladder Pain Syndrome (IC/BPS), but can also be triggered by acute bacterial infections (UTIs), bladder spasms, [[calculi]] ([[stones]]), or radiation [[cystitis]].
___
>[!info]+ Etymology of [[cystalgia]]
>#greek From _[cyst]_ +‎ _[[-algia]]_
>The term is constructed from two Greek elements:
>
>- **cyst- (κύστις):** Root meaning "**bladder**," "**sac**," or "**pouch**."
>    
>- **[[-algia]] (ἄλγος):** Suffix meaning "**pain**."
>    
>- **Literal Meaning:** "Bladder pain."
>
_____
>[!tip]- DERIVATIONS of [[cystalgia]]
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
____


> [!example]+ **ICD-10-CM Code(s):**
> 
> - **[[R39.89]] - Other GU Symptoms**: This code is used to report [[cystalgia]] or bladder pain when a more specific diagnosis has not yet been established.
>     
> - **[[N30.10]] - Interstitial Cystitis (no [[hematuria]])**: Used for chronic bladder pain syndrome (interstitial cystitis) without blood in the urine.
>     
> - **[[N30.11]] - Interstitial Cystitis (w/ hematuria)**: Used for chronic bladder pain syndrome where blood is present in the urine.
>     
> - **[[N30.20]] - Other Chronic Cystitis**: Reported for chronic bladder inflammation not specified as interstitial, which presents with persistent pain.
>     
> - **[[N32.89]] - Other Bladder Disorders**: Frequently used for "**Bladder Pain Syndrome**" or cases of cystalgia not elsewhere classified.
>     
> - **R10.2 - Pelvic and Perineal Pain**: A broad symptom code for localized pain in the pelvic region, often used for initial encounters.
>     
> 
> ### **CPT/HCPCS Code(s):**
> 
> - **52000 - Cystourethroscopy, diagnostic**: A procedure where a scope is used to visually inspect the bladder and urethra to identify the cause of pain (e.g., stones, tumors, or inflammation).
>     
>     - **WRVU**: 1.10
>         
>     - **Assistant Payable**: No
>         
> - **[[52260]] - Cystourethroscopy, with bladder distension (interstitial cystitis)**: A surgical treatment/diagnostic procedure involving the expansion of the bladder under general or spinal anesthesia, specifically for patients with chronic bladder pain.
>     
>     - **WRVU**: 2.80
>         
>     - **Assistant Payable**: No
>         
> - **51700 - Bladder irrigation, simple, lavage and/or instillation**: Used for the delivery of therapeutic agents (like "bladder cocktails") directly into the bladder to relieve pain.
>     
>     - **WRVU**: 0.35
>         
>     - **Assistant Payable**: No
>         
> 
> ### **Global Periods:**
> 
> - **[[52000]]**: 000 days (Minor Procedure)
>     
> - **[[52260]]**: 000 days (Minor Procedure)
>     
> - **[[51700]]**: 000 days (Minor Procedure)
>     
> 
> ### **HCC Information:**
> 
> - Symptoms codes (R-series) such as **[[R39.89]]** and **R10.2** do not typically carry an HCC weight.
>     
> - Standard diagnostic codes for cystitis (N30 series) generally do not carry HCC weight unless associated with severe systemic complications like sepsis.
>     
> 
> ### **Exclusives/Inclusives:**
> 
> - **52000** is defined as a "**separate procedure**." Per NCCI guidelines, it is bundled into any more comprehensive therapeutic bladder procedure (like a biopsy [[52204]] or fulguration [[52234]]) performed in the same session.
>     
> - **Excludes1**: Interstitial cystitis (**N30.1-**) cannot be coded with acute cystitis (**N30.0-**) if they represent the same inflammatory episode.
>     
> - **Inclusives**: Diagnostic cystoscopy (**52000**) includes minor urethral calibration and/or specimen collection (e.g., washings).



[[Med roots dictionary]]
[[Appendix A Prefixes]]
[[Appendix B Combining Forms]]
[[Appendix C Suffixes]]
[[Appendix D Suffix forms]]