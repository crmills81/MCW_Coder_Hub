---
tags:
  - medterm
  - oncology
  - urology
  - ophthalmology
  - otolaryngology
aliases:
  - Carcinoma
  - cancer
  - malignant neoplasm
  - CA
roots:
  - carcin-
  - -oma
forms:
  - prefix
  - suffix
  - noun
alphabet: C
definition: A malignant tumor that begins in the epithelial tissue of the skin or in tissues that line or cover internal organs.
---
>[!Note] DEFINITION of [[carcinoma]]
>The term **carcinoma** refers to the most common type of **cancer** ([[malignant neoplasm]]), which arises from **epithelial cells** that form the lining of internal organs and the outer surfaces of the body. Carcinomas are capable of aggressive local invasion and distant **[[metastasis]]**, frequently spreading through the lymphatic system before entering the bloodstream. Major subtypes include **[[adenocarcinoma]]** (**arising in glandular tissue**), **squamous cell carcinoma** (**arising in squamous epithelium**), **basal cell carcinoma** (**affecting the basal layer of the epidermis**), and **transitional cell carcinoma** (**affecting the urinary tract**). 
_____
>[!info]+ ETYMOLOGY of [[carcinoma]]
>#greek
>
>|Component|Origin|Meaning|
>|---|---|---|
>|**[[carcin-]]**|Greek _karkinos_ (καρκίνος)|"**Crab**" or "**cancer**"|
>|**[[-oma]]**|Greek _-oma_ (-ωμα)|"**Tumor**", "**mass**", or "**fluid collection**"|
>
> Hippocrates and Galen used the term _karkinos_ to describe malignant tumors because the swollen, distended blood vessels radiating from the central mass resembled the legs of a crab. 
_____

> [!success]+ ### 🔀 ALIASES / ALTERNATE TERMS
> 
> - **Cancer** _(general term)_
> - **Malignant neoplasm**
> - **CA** _(common clinical abbreviation)_
> - **[[Adenocarcinoma]]** _(glandular carcinoma)_
> - **Squamous cell carcinoma (SCC)**
> - **Basal cell carcinoma (BCC)**
> - **Carcinoma in situ (CIS)** _(early form that has not invaded surrounding tissue)_
> 
_____

> [!danger]+ ### 🔗 RELATED TERMS
> 
> - **[[sarcoma]]** — a malignant tumor arising from connective tissue (bone, cartilage, fat, muscle), distinct from epithelial carcinoma.
> - **[[melanoma]]** — a malignancy of melanocytes (pigment-producing cells), often highly aggressive.
> - **[[Metastasis]]** — the spread of carcinoma cells from the primary site to distant organs or lymph nodes.
> - **[[neoplasm]]** — an abnormal mass of tissue resulting from uncontrolled cell division; can be benign or malignant.
> - **[[dysplasia]]** — abnormal development or growth of cells, often a precursor to carcinoma in situ.
> - **Tumor markers** — substances (like CEA or CA-125) produced by cancer cells or the body in response to cancer, measurable in blood.
> - **Oncology** — the medical specialty dedicated to the study, diagnosis, and treatment of cancer.
> 
_____


> [!example]+ #### CODING CORNER
> <br>
> 
> ### 🏥 ICD-10-CM CODES
> 
> #### **Primary Malignant Neoplasms (Examples)**
> 
> |Code|Description|
> |---|---|
> |[[C80.1]]|Malignant (primary) neoplasm, unspecified|
> |[[C44.311]]|Basal cell carcinoma of skin of nose|
> |[[C44.321]]|Squamous cell carcinoma of skin of nose|
> |[[C50.911]]|Malignant neoplasm of unspecified site of right female breast|
> |[[C34.91]]|Malignant neoplasm of unspecified part of right bronchus or lung|
> |[[C61]]|Malignant neoplasm of prostate|
> 
> #### **Secondary (Metastatic) Malignant Neoplasms**
> 
> |Code|Description|
> |---|---|
> |[[C79.9]]|Secondary malignant neoplasm of unspecified site|
> |[[C77.0]]|Secondary and unspecified malignant neoplasm of lymph nodes of head, face and neck|
> |[[C78.7]]|Secondary malignant neoplasm of liver and intrahepatic bile duct|
> |[[C78.01]]|Secondary malignant neoplasm of right lung|
> 
> #### **Carcinoma In Situ & History Codes**
> 
> |Code|Description|
> |---|---|
> |[[D04.4]]|Carcinoma in situ of skin of scalp and neck|
> |[[D05.91]]|Unspecified type of carcinoma in situ of right breast|
> |[[Z85.89]]|Personal history of malignant neoplasm of other organs and systems|
> |[[Z85.3]]|Personal history of malignant neoplasm of breast|
> 
> ---
> 
> ### 🔧 COMMON CPT CODES (Carcinoma-Related Procedures)
> 
> |CPT Code|Description|
> |---|---|
> |**[[11102]]**|Tangential biopsy of skin (e.g., shave, scoop, saucerize, curette); single lesion|
> |**[[11642]]**|Excision, malignant lesion including margins, face, ears, eyelids, nose, lips; excised diameter 1.1 to 2.0 cm|
> |**[[17262]]**|Destruction, malignant lesion (e.g., laser, electrosurgery, cryosurgery, chemosurgery), trunk, arms or legs; lesion diameter 1.1 to 2.0 cm|
> |**[[38500]]**|Biopsy or excision of lymph node(s); open, superficial|
> |**[[88305]]**|Level IV - Surgical pathology, gross and microscopic examination|
> |**[[19301]]**|Mastectomy, partial (e.g., lumpectomy, tylectomy, quadrantectomy, segmentectomy)|
> 
> ---
> 
> > ⚠️ **Coding Note:** In ICD-10-CM, coding for carcinoma requires strict adherence to the **Neoplasm Guidelines**. Always determine the **primary** vs. **secondary** (metastatic) sites. If the primary malignancy has been excised/eradicated and there is no adjunct treatment occurring, code a "Personal history of" (`Z85.-` category) rather than an active malignancy code. Treatment encounters directed at the malignancy (e.g., chemotherapy, radiation) require the therapy Z-code (like [[Z51.11]] for antineoplastic chemotherapy) as the principal diagnosis, followed by the active carcinoma code.
> 
_____
>[!tip]- DERIVATIONS of [[carcinoma]]
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