---
tags:
  - medterm
  - medical-coding
  - urology
  - specialty/urology
  - kidney
  - nephrectomy
aliases:
  - Partial nephrectomy
  - Radical nephrectomy
  - Simple nephrectomy
  - Robotic‑assisted nephrectomy
  - Laparoscopic nephrectomy
  - Single-port laparoscopy
  - Nephrectomy
roots:
  - nephrectomy
  - nephr-
  - nephro-
  - -ectomy
  - -tomy
forms:
  - prefix
  - suffix
  - combining
  - noun
alphabet: N
definition:
  - Surgical removal of a kidney (partial or total)
---
>[!Note] DEFINITION of [[nephrectomy]]
>A **nephrectomy** is **a surgical procedure involving the partial or complete removal of one kidney.** It may be performed to treat **malignancy**, **severe trauma**, **nonfunctioning kidneys**, **congenital abnormalities**, or **to procure a kidney for transplantation**.  From a medical‑coding perspective, nephrectomy documentation must clarify:  Extent (**partial vs. total**)  Approach (**open, laparoscopic, robotic**)  Indication (**tumor, obstruction, infection, donation**)  Laterality (**right, left**)  Additional procedures ([[lymphadenectomy]], [[adrenalectomy]], [[ureterectomy]])  These distinctions directly affect CPT and ICD‑10‑PCS code selection. **Nephrectomy** is the surgical removal of a kidney, performed to treat kidney cancer, severe kidney damage, non-functioning kidneys, or to harvest a healthy kidney from a donor for transplantation. The term derives from the Greek _nephros_ (**kidney**) and _-ektomia_ (**a cutting out**), dating to 1880.
_____
>[!info]+ ETYMOLOGY of [[nephrectomy]]
>#greek - The word is composed of two Greek roots:
>
>[[nephr-]]/[[nephro-]]: From Greek nephros meaning "**kidney**," which traces back to Proto-Indo-European *negwhro-* (**kidney**)
>
>[[-ectomy]]: From Greek *-ektomia* meaning "*a cutting out of*," derived from ektemnein ("**to cut out**"), combining ek ("**out**") + temnein ("**to cut**")
>**[[Nephr‑]]** → Greek _nephros_ (νεφρός), meaning “**kidney**”
>- **[[‑ectomy]]** → Greek _ektomē_, meaning “**cutting out**” or “**excision**”
>- **[[Nephrectomy]]** literally means **“cutting out the kidney.”**
_____
> [!example]+ ## **Related Terms**
> |Term|Meaning|Coding Relevance|
> |---|---|---|
> |**[[nephrotomy]]**|Incision into the kidney|Not removal; used for stone extraction or exploration.|
> |**[[Nephrolithiasis]]**|Kidney stones|May lead to nephrectomy if kidney is nonfunctional.|
> |**[[Nephropexy]]**|Surgical fixation of a kidney|Opposite of removal; kidney is preserved.|
> |**[[Nephrolysis]]**|Freeing the kidney from adhesions|No removal; often done during complex renal surgery.|
> |**[[ureterectomy]]**|Removal of the ureter|Sometimes performed with radical nephrectomy.|
> |**[[adrenalectomy]]**|Removal of adrenal gland|May be bundled or separately coded depending on documentation.|
> |**[[nephroureterectomy]]**|Removal of kidney _and_ ureter|Distinct CPT/PCS coding.|
> 
_____

> [!success]+ ## **Common Medical Terms Using the Root**
> 
> - **Radical nephrectomy** - Removal of the entire kidney plus surrounding tissue, possibly adrenal gland and lymph nodes
>     
> - **Partial nephrectomy** - Removal of only the diseased portion of the kidney
>     
> - **Simple nephrectomy** - Removal of the kidney without extensive surrounding tissue
>     
> - **Laparoscopic nephrectomy** - Minimally invasive approach
>     
> - **Robotic‑assisted nephrectomy** - Robotic surgical technique
>     
_____

> [!tip]+ ## **Common Clinical Indications** 
> - Renal cell carcinoma
>     
> - Severe [[hydronephrosis]] with loss of function
>      
> - Polycystic kidney disease (nonfunctioning kidney)
>      
> - Trauma
>      
> - Chronic infection
>      
> - Living kidney donation
> 
> ## Types of Nephrectomy (from Perplexity AI)
> 
> There are two main types for treating diseased kidneys
> 
> - **Partial nephrectomy** (**nephron-sparing surgery**): Removes only the diseased or injured portion of the kidney while preserving healthy tissue, typically for tumors under 4 cm
>     
> - **Radical nephrectomy**: Removes the entire kidney along with the surrounding fatty tissue, the [[ureter]] section, adrenal gland, and sometimes regional lymph nodes
>     
> - **Bilateral nephrectomy**: Removal of both kidneys simultaneously​
>     
> 
> ## Surgical Approaches
> 
> The procedure can be performed through
> 
> - **Open surgery**: Through a side or midline incision in the abdomen
>     
> - **Laparoscopic surgery**: Using 3-4 small incisions (5-10 mm) with instruments and a camera
>     
> - **Single-port laparoscopy**: Advanced technique through one incision in the navel
> 
_____

> [!quote]+ ## **Documentation Clues for Coders**
> 
> Look for phrases such as:
> 
> - “Kidney removed”
>     
> - “Radical excision”
>     
> - “Partial resection of renal mass”
>     
> - “Gerota’s fascia removed”
>     
> - “Adrenal gland taken en bloc”
>     
> - “Specimen sent to pathology”
>     
> - “Lymph nodes dissected”
>     
> - “Warm [[ischemia]] time” (common in partial nephrectomy)
>     
> 
> These help determine **extent**, **approach**, and **bundled vs. separate** procedures.
> 
> ## **Coder’s Notes**
> 
> - **Partial vs. total** nephrectomy changes CPT/PCS codes significantly.
>     
> - **Radical nephrectomy** may include adrenalectomy or lymphadenectomy—documentation must specify.
>     
> - **Approach matters**: open, laparoscopic, robotic, or converted.
>     
> - **Laterality** is essential for ICD‑10‑CM and PCS.
>     
> - For **living donor nephrectomy**, coding rules differ from oncologic or traumatic indications.
>     
> - Check for **concurrent procedures**: ureterectomy, tumor thrombectomy, nephrolithotomy, nephropexy.
> 
_____
>[!tip]- DERIVATIONS of [[nephrectomy]]
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