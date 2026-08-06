---
tags:
  - specialty/urology
  - medterm
aliases:
  - pyelonephritis
  - Colinephritis
  - E. coli nephritis
roots:
  - coli-
  - nephr-
  - -itis
forms:
  - noun
  - combining
"alphabet:": C
"definition:": Inflammation of kidney caused by E. coli
---
>[!note]+ Definition of [[colinephritis]]
> [[col-|coli-]][[nephr-]][[-itis]] - Inflammation of kidney, caused by E. coli (*kidney inflammation by E.coli*)
> [[pyelonephritis]] is a type of urinary tract infection where **one or both kidneys become infected**. They can be infected by bacteria or a virus. 
> **Colinephritis** is a highly specific term for a bacterial infection and subsequent inflammation of the kidney (**renal parenchyma and renal pelvis**) driven by _Escherichia coli_. Clinically, this almost always presents as acute [[pyelonephritis]]. _E. coli_, a normal resident of the gastrointestinal tract, is the most common [[uropathogen]] responsible for ascending [[urinary tract infection (UTI)]]. The bacteria typically colonize the [[periurethral]] area, ascend into the bladder (**causing [[cystitis]])**, and then travel up the ureters to invade the kidney. Severe cases can result in systemic [[bacteremia]], renal abscesses, or permanent renal scarring.
___
>[!info]+ Etymology of [[colinephritis]]
>[[colinephritis]] combines "**coli**" (*E. coli*), "[[nephr-]]/o" (*kidney*), and "[[-itis]]" (*inflammation*) to mean E. coli-caused kidney inflammation;
>- **[[coli-]] (from _Escherichia coli_ / Greek _kolon_):** Refers to the specific bacterium, named for its typical habitat in the colon.
>    
>- **[[nephr-]] (νεφρός):** Root meaning "**kidney**."
>    
>- **[[-itis]] (-ῖτις):** Suffix denoting "**inflammation**."
>    
>- **Literal Meaning:** "Inflammation of the kidney caused by _E. coli_.
>
_____

> [!example]+ **Coding & Documentation Nuances**
> - **ICD-10-CM Dual Coding:** There is no single, all-encompassing code for [[colinephritis]]. The "Use additional code" instruction in the ICD-10 tabular list dictates that two codes are required:
>     
>     1. The localized condition: typically **[[N10]]** (Acute tubulo-interstitial nephritis / Acute pyelonephritis) or **[[N15.9]]** (Renal tubulo-interstitial disease, unspecified).
>         
>     2. The organism: **[[B96.20]]** (Unspecified _Escherichia coli_ [_E. coli_] as the cause of diseases classified elsewhere) or a more specific _E. coli_ code if the exact strain is documented.
>         
> - **Sepsis Guidelines:** If the colinephritis leads to sepsis, sequencing rules change. The systemic infection (**[[A41.51]]**, [[Sepsis due to _Escherichia coli]]_ [_E. coli_]) would generally be sequenced as the principal diagnosis, followed by the localized kidney infection (N10).
>     
> 
> ### Clinical Indicators
> 
> To support this diagnosis and the associated dual-coding requirement, coders should look for:
> 
> 1. **Microbiology Reports:** A definitive urine culture or blood culture isolating _Escherichia coli_ as the causative organism.
>     
> 2. **[[Urinalysis]] (UA):** Findings consistent with severe infection, such as significant pyuria (**white blood cells**), [[bacteriuria]], positive [[leukocyte]] esterase, and positive nitrites.
>     
> 3. **Physical Exam:** Documentation of systemic signs of kidney infection, notably costovertebral angle (CVA) tenderness or flank pain, accompanied by fever and chills.
>     
> 4. **Provider Linkage:** The attending physician must explicitly link the organism to the condition (e.g., "Pyelonephritis secondary to E. coli"). Coders cannot assume the causal relationship solely from a lab report.
>     
> 
> ### Related Terms & Differentials
> 
> - **[[Pyelonephritis]]:** A broader anatomical term for inflammation of the renal pelvis and kidney. Colinephritis is the etiological subset of this condition.
>     
> - **[[Cystitis]]:** Inflammation confined to the bladder. While _E. coli_ often causes cystitis, the infection has not yet ascended to the kidneys.
>     
> - **[[Glomerulonephritis]]:** Inflammation of the kidney's filtering units (glomeruli). This is typically an immune-mediated process (e.g., post-streptococcal) rather than a direct, acute bacterial invasion like colinephritis.
>     
> - **[[bacteriuria]]:** The simple presence of bacteria in the urine, which can be asymptomatic and does not inherently imply kidney inflammation.
>     
> - **[[Hydronephrosis]]:** Swelling of a kidney due to a build-up of urine (often from an obstruction like a stone). While it can predispose a patient to colinephritis by causing urinary stasis, it is a structural issue, not an infectious one.
> 

_____
>[!tip]- DERIVATIONS of [[colinephritis]]
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

