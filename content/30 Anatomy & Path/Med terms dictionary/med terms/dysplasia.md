---
tags:
  - medterm
aliases:
  - Dysplasia
  - atypical cell growth
  - precancer
roots:
  - dys-
  - -plasia
forms:
  - prefix
  - suffix
  - noun
alphabet: D
definition:
  - Abnormal development, growth, or alteration of cells, tissues, or bone.
---
>[!Note] DEFINITION of [[dysplasia]]
>The term **dysplasia** refers broadly to the abnormal growth, development, or maturation of cells, tissues, or organs. In cellular pathology, it describes the presence of abnormal cells within a tissue, which often signifies a **precancerous** condition (**e.g., cervical dysplasia or gastric dysplasia**). The cells show altered size, shape, and organization but have not yet invaded surrounding tissue. In a macroscopic or developmental context, dysplasia refers to abnormal tissue or anatomical development, such as **developmental dysplasia of the hip (DDH)**, where the hip joint fails to form correctly, or **fibromuscular dysplasia**, which affects blood vessel walls.
_____
>[!info]+ ETYMOLOGY of [[dysplasia]]
>#greek
>
>|Component|Origin|Meaning|
>|---|---|---|
>|**[[dys-]]**|Greek _dys-_ (δυσ-)|"**Bad**", "**difficult**", or "**abnormal**"|
>|**[[-plasia]]**|Greek _-plasia_ (-πλασία), from _plassein_| "**Formation**", "**growth**", or "**molding**"|
>
> The roots combine to literally mean "**abnormal formation**" or "**bad growth.**" It was introduced into medical terminology in the late 19th/early 20th century to describe irregular cellular/tissue changes.
_____

> [!success]+ ### 🔀 ALIASES / ALTERNATE TERMS
> 
> - **Atypical cell growth**
> - **Precancerous changes**
> - **Cervical Intraepithelial Neoplasia (CIN)** _(specific to cervical dysplasia)_
> - **Developmental Dysplasia of the Hip (DDH)** _(macroscopic tissue level)_
> - **Fibromuscular dysplasia (FMD)**
> - **Myelodysplastic syndrome (MDS)**
> 
_____

> [!danger]+ ### 🔗 RELATED TERMS
> 
> - **[[Neoplasia]]** — new, uncontrolled growth of cells (can be benign or malignant); **dysplasia** often precedes this.
> - **[[hyperplasia]]** — an increase in the *number* of normal cells in a tissue or organ.
> - **Metaplasia** — the reversible replacement of one mature cell type by another mature cell type.
> - **Carcinoma in situ (CIS)** — severe **dysplasia** where abnormal cells involve the full thickness of the epithelium but haven't broken through the basement membrane.
> - **Colposcopy** — a procedure closely examining the cervix, vagina, and vulva for signs of dysplasia.
> - **[[osteotomy]]** — a surgical cutting of a bone, often performed to correct macroscopic skeletal dysplasias (**like hip dysplasia**).
> 
_____


> [!example]+ #### CODING CORNER
> <br>
> 
> ### 🏥 ICD-10-CM CODES
> 
> #### **Cervical / Vulvovaginal Dysplasia**
> 
> |Code|Description|
> |---|---|
> |[[N87.0]]|Mild cervical dysplasia (CIN I)|
> |[[N87.1]]|Moderate cervical dysplasia (CIN II)|
> |[[N87.9]]|Dysplasia of cervix uteri, unspecified|
> |[[D06.9]]|Carcinoma in situ of cervix, unspecified _(Used for Severe Dysplasia / CIN III)_|
> |[[N89.3]]|Dysplasia of vagina, unspecified|
> 
> #### **Gastrointestinal / Other Cellular Dysplasia**
> 
> |Code|Description|
> |---|---|
> |[[K31.A21]]|Gastric dysplasia, low grade|
> |[[K31.A22]]|Gastric dysplasia, high grade|
> |[[D46.9]]|Myelodysplastic syndrome, unspecified|
> 
> #### **Macroscopic / Developmental Dysplasia**
> 
> |Code|Description|
> |---|---|
> |[[Q65.89]]|Other specified congenital deformities of hip _(often used for congenital hip dysplasia)_|
> |[[M24.851]]|Other specific joint derangements of right hip, not elsewhere classified _(acquired)_|
> |[[M24.852]]|Other specific joint derangements of left hip, not elsewhere classified _(acquired)_|
> |[[I77.3]]|Arterial fibromuscular dysplasia|
> 
> ---
> 
> ### 🔧 COMMON CPT CODES (Dysplasia-Related Procedures)
> 
> |CPT Code|Description|
> |---|---|
> |**[[88142]]**|Cytopathology, cervical or vaginal (any reporting system), collected in preservative fluid, automated thin layer preparation; manual screening under physician supervision|
> |**[[57455]]**|Colposcopy of the cervix including upper/adjacent vagina; with biopsy(s) of the cervix|
> |**[[57460]]**|Colposcopy of the cervix including upper/adjacent vagina; with loop electrode biopsy(s) of the cervix (**LEEP**)|
> |**[[57522]]**|Conization of cervix, with or without fulguration, with or without dilation and curettage, with or without repair; loop electrode [[excision]]|
> |**[[43239]]**|Esophagogastroduodenoscopy, flexible, transoral; with biopsy, single or multiple _(commonly used to diagnose gastric dysplasia)_|
> |**[[27146]]**|Osteotomy, iliac, acetabular or innominate bone _(used in correcting hip dysplasia)_|
> |**[[88305]]**|Level IV - Surgical pathology, gross and microscopic examination _(standard for evaluating dysplasia biopsies)_|
> 
> ---
> 
> > ⚠️ **Coding Note:** Context is critical when coding "dysplasia." Medical coders must determine if the provider is describing a **cellular** precancerous change (**e.g., cervical or gastric dysplasia**) or an **anatomical/developmental** anomaly (**e.g., hip or fibromuscular dysplasia**). For **cervical dysplasia,** severity grades (**CIN I, II, or III**) guide the ICD-10-CM selection. Note that CIN III (**severe dysplasia**) crosses over into the [[neoplasm]] chapter as Carcinoma In Situ (`D06.-`).
> 
_____
>[!tip]- DERIVATIONS of [[dysplasia]]
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