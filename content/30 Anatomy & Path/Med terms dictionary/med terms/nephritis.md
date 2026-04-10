---
tags:
  - medterm
aliases:
  - Nephritis
  - Kidney inflammation
  - Bright's disease
roots:
  - nephr-
  - -itis
forms:
  - prefix
  - suffix
  - noun
alphabet: N
definition:
  - Inflammation of the kidneys, potentially affecting the glomeruli, tubules, or interstitial tissue
---
>[!Note] DEFINITION of [[nephritis]]
>The term **[[nephritis]]** refers to the inflammation of the **kidneys**. It is a broad category of conditions that can affect different structural parts of the kidney, including the filtering units (**glomerulonephritis**), the tubules and surrounding tissue (**tubulointerstitial nephritis**), or the renal pelvis (**[[pyelonephritis]]**). Etiologies range from bacterial or viral infections and toxic exposure to severe **[[autoimmune]]** processes (**like [[lupus]] nephritis or IgA [[nephropathy]]**). If untreated, **acute nephritis** can lead to progressive renal damage, culminating in **[[chronic kidney disease (CKD)]]** and **[[end-stage renal disease (ESRD)]]**.
_____
>[!info]+ ETYMOLOGY of [[nephritis]]
>#greek
>
>|Component|Origin|Meaning|
>|---|---|---|
>|**[[nephr-]]**|Greek _nephros_ (νεφρός)|"**Kidney**"|
>|**[[-itis]]**|Greek _-itis_ (-ιτις)|"**Inflammation**" or "**disease of**"|
>
> The roots combine directly to form the literal medical definition: "**inflammation of the kidney.**" Historically, this condition was widely referred to as **Bright's disease** in the 19th and early 20th centuries.
_____

> [!success]+ ### 🔀 ALIASES / ALTERNATE TERMS
> 
> - **Kidney inflammation**
> - **Bright's disease** _(historical)_
> - **Glomerulonephritis (GN)** _(when specifically affecting the glomeruli)_
> - **[[Tubulointerstitial nephritis]] (TIN)** _(when affecting tubules/interstitium)_
> - **[[Pyelonephritis]]** _(when involving the renal pelvis, typically infectious)_
> 
_____

> [!danger]+ ### 🔗 RELATED TERMS
> 
> - **Nephropathy** — a general term for kidney disease or damage (e.g., [[diabetic nephropathy]]), which may or may not be inflammatory.
> - **Nephrotic syndrome** — a kidney disorder causing massive proteinuria, often without the active cellular inflammation seen in nephritic syndrome.
> - **[[Pyelonephritis]]** — specifically, a bacterial infection causing inflammation of the kidney and its pelvis.
> - **[[hematuria|Hematuria]]** — blood in the urine, a hallmark clinical sign of nephritic syndromes.
> - **[[Proteinuria]]** — excess protein in the urine, indicating glomerular basement membrane damage.
> - **End-stage renal disease (ESRD)** — complete or near-complete failure of the kidneys, sometimes the end result of chronic **nephritis**.
> 
_____


> [!example]+ #### CODING CORNER
> <br>
> 
> ### 🏥 ICD-10-CM CODES
> 
> #### **Tubulointerstitial Nephritis**
> 
> |Code|Description|
> |---|---|
> |[[N10]]|Acute tubulointerstitial nephritis _(also maps to acute pyelonephritis)_|
> |[[N11.9]]|Chronic tubulointerstitial nephritis, unspecified|
> |[[N12]]|Tubulointerstitial nephritis, not specified as acute or chronic|
> |[[N14.1]]|Nephropathy induced by other drugs, medicaments and biological substances|
> 
> #### **[[Glomerulonephritis]] / Nephritic Syndrome**
> 
> |Code|Description|
> |---|---|
> |[[N00.9]]|Acute nephritic syndrome with unspecified morphologic changes|
> |[[N03.9]]|Chronic nephritic syndrome with unspecified morphologic changes|
> |[[N04.9]]|Nephrotic syndrome with unspecified morphologic changes|
> |[[N05.9]]|Unspecified nephritic syndrome with unspecified morphologic changes|
> 
> #### **Manifestation / Autoimmune (Requires Underlying Condition Code First)**
> 
> |Code|Description|
> |---|---|
> |[[M32.14]]|Glomerular disease in systemic lupus erythematosus _(Code first SLE, e.g., M32.10)_|
> |[[M32.15]]|Tubulointerstitial nephropathy in systemic lupus erythematosus|
> |[[M31.0]]|Hypersensitivity angiitis _(Goodpasture's syndrome)_|
> 
> ---
> 
> ### 🔧 COMMON CPT CODES (Nephritis-Related Labs & Procedures)
> 
> |CPT Code|Description|
> |---|---|
> |**[[50200]]**|Renal biopsy; percutaneous, by trocar or needle|
> |**[[76770]]**|Ultrasound, retroperitoneal (e.g., renal, aorta, nodes), real time with image documentation; complete|
> |**[[81000]]**|Urinalysis, by dip stick or tablet reagent... non-automated, with microscopy|
> |**[[82565]]**|Creatinine; blood|
> |**[[82040]]**|Albumin; serum, plasma or whole blood|
> 
> ---
> 
> > ⚠️ **Coding Note:** Medical coders must carefully distinguish between **nephritis** (**inflammation, often presenting with hematuria/RBC casts, i.e., "nephritic syndrome"**) and **nephrosis** (podocyte damage leading to massive [[proteinuria]] and edema, i.e., "**nephrotic syndrome**"). Furthermore, always check for underlying etiologies. If the provider documents [[lupus|Lupus]] **Nephritis**, ICD-10 guidelines dictate "**coding the underlying systemic disease first**" (e.g., an `M32.-` code followed by `M32.14` or `M32.15`). Look for **acute kidney injury (AKI)** codes ([[N17.9]]) if the inflammation has caused an acute drop in kidney function.
> 
_____
>[!tip]- DERIVATIONS of [[nephritis]]
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