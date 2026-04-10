---
tags:
  - medterm
aliases:
  - Hyperplasia
  - cellular proliferation
  - overgrowth
roots:
  - hyper-
  - -plasia
forms:
  - prefix
  - suffix
  - noun
alphabet: H
definition:
  - An abnormal increase in the number of normal cells in an organ or tissue, often resulting in an increase in its size.
---
>[!Note] DEFINITION of [[hyperplasia]]
>The term **hyperplasia** refers to an increase in the **amount of organic tissue** resulting from cellular proliferation. It frequently leads to the gross enlargement of an organ. **Hyperplasia** is generally a reversible, physiological, or pathological response to a specific stimulus (**such as hormonal surges, chronic irritation, or compensatory demand**). Crucially, the cells in **hyperplasia** remain normal in appearance and organization, distinguishing it from **[[dysplasia]]** (**abnormal cell changes**) and **neoplasia** (**cancerous or benign tumors**). Common clinical manifestations include **Benign Prostatic Hyperplasia (BPH)** and **endometrial hyperplasia**.
_____
>[!info]+ ETYMOLOGY of [[hyperplasia]]
>#greek
>
>|Component|Origin|Meaning|
>|---|---|---|
>|**hyper-**|Greek _hyper_ (ὑπέρ)|"**Over**", "**above**", or "**excessive**"|
>|**-plasia**|Greek _-plasia_ (-πλασία), from _plassein_| "**Formation**", "**growth**", or "**molding**"|
>
> The roots combine directly to mean "**excessive formation**" or "**overgrowth.**" The term emerged in the mid-19th century as microscopic pathology evolved, allowing physicians to distinguish between tissue enlargement caused by larger cells (**hypertrophy**) versus more numerous cells (**hyperplasia**).
_____

> [!success]+ ### 🔀 ALIASES / ALTERNATE TERMS
> 
> - **Cellular proliferation**
> - **Tissue overgrowth**
> - **Benign prostatic hyperplasia (BPH)** _(common clinical variant)_
> - **Endometrial hyperplasia**
> - **Congenital adrenal hyperplasia (CAH)**
> - **Gingival hyperplasia**
> - **Atypical hyperplasia** _(when the proliferating cells show slight abnormalities)_
> 
_____

> [!danger]+ ### 🔗 RELATED TERMS
> 
> - **[[Hypertrophy]]** — an increase in the *size* of individual cells, rather than the number of cells (**e.g., muscle hypertrophy**).
> - **[[Dysplasia]]** — abnormal development or alteration in the shape, size, and organization of cells; often a **precancerous state**.
> - **Neoplasia** — uncontrolled, autonomous new cellular growth (**tumors**), which can be benign or malignant.
> - **Metaplasia** — the reversible transformation of one differentiated mature cell type into another.
> - **Hypoplasia** — underdevelopment or incomplete tissue formation (the antonym of hyperplasia).
> - **Atypia** — structural abnormality in a cell; atypical hyperplasia carries a higher risk of progressing to cancer.
> 
_____


> [!example]+ #### CODING CORNER
> <br>
> 
> ### 🏥 ICD-10-CM CODES
> 
> #### **Prostatic Hyperplasia**
> 
> |Code|Description|
> |---|---|
> |[[N40.0]]|Benign prostatic hyperplasia without lower urinary tract symptoms|
> |[[N40.1]]|Benign prostatic hyperplasia with lower urinary tract symptoms|
> |[[N40.2]]|Nodular prostate without lower urinary tract symptoms|
> |[[N40.3]]|Nodular prostate with lower urinary tract symptoms|
> 
> #### **Endometrial Hyperplasia**
> 
> |Code|Description|
> |---|---|
> |[[N85.00]]|Endometrial hyperplasia, unspecified|
> |[[N85.01]]|Benign endometrial hyperplasia|
> |[[N85.02]]|Endometrial intraepithelial neoplasia [EIN]|
> 
> #### **Other Specified Hyperplasias**
> 
> |Code|Description|
> |---|---|
> |[[K06.1]]|Gingival enlargement _(includes gingival hyperplasia)_|
> |[[E25.0]]|Congenital adrenogenital disorders associated with enzyme deficiency _(Congenital adrenal hyperplasia)_|
> |[[N60.31]]|Fibrosclerosis of right breast _(includes hyperplasia of breast)_|
> |[[N60.32]]|Fibrosclerosis of left breast _(includes hyperplasia of breast)_|
> 
> ---
> 
> ### 🔧 COMMON CPT CODES (Hyperplasia-Related Procedures)
> 
> |CPT Code|Description|
> |---|---|
> |**[[52601]]**|Transurethral electrosurgical resection of prostate, including control of postoperative bleeding, complete ([[vasectomy]], [[meatotomy]], [[cystourethroscopy]], **urethral calibration** and/or [[dilation]], and internal [[urethrotomy]] are included) _(TURP for BPH)_|
> |**[[53850]]**|Transurethral destruction of prostate tissue; by microwave thermotherapy _(TUMT for BPH)_|
> |**[[58100]]**|Endometrial sampling (**biopsy**) with or without endocervical sampling (biopsy), without cervical dilation, any method (separate procedure)|
> |**[[58558]]**|[[Hysteroscopy]], surgical; with sampling (biopsy) of endometrium and/or polypectomy, with or without D & C|
> |**[[41820]]**|Gingivectomy, excision gingiva, each quadrant|
> |**[[88305]]**|Level IV - Surgical pathology, gross and microscopic examination _(the standard path evaluation to confirm hyperplasia vs. neoplasia)_|
> 
> ---
> 
> > ⚠️ **Coding Note:** Context is critical when coding hyperplasia, as it manifests differently depending on the organ system. For **Benign Prostatic Hyperplasia (BPH)**, ICD-10 requires knowing if the patient has associated **Lower Urinary Tract Symptoms (LUTS)** to choose between `N40.0` and `N40.1`. If `N40.1` is used, an additional code must be assigned to identify the specific symptoms (**e.g., incomplete bladder emptying, urinary frequency**). For **endometrial hyperplasia**, coders must look closely at pathology reports to determine if it is benign (`N85.01`) or if there is atypia/EIN (`N85.02`), as the latter carries a significantly higher risk for malignancy and drives different clinical management.
> 
_____
>[!tip]- DERIVATIONS of [[hyperplasia]]
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