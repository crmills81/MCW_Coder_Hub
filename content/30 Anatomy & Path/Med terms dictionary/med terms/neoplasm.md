---
tags:
  - medterm
aliases:
  - Neoplasm
  - tumor
  - new growth
  - mass
roots:
  - neo-
  - -plasm
forms:
  - prefix
  - suffix
  - noun
alphabet: N
definition:
  - An abnormal and excessive growth of tissue, which can be benign, premalignant, or malignant.
---
>[!Note] DEFINITION of [[neoplasm]]
>The term **neoplasm** refers to an abnormal mass of tissue that forms when cells grow and divide more than they should, or do not die when they should. The growth of this "**new tissue**" is uncoordinated with that of the normal surrounding tissue and persists in the same excessive manner even after the cessation of the stimuli which evoked the change. **Neoplasms** are broadly categorized clinically and histologically into **benign** (non-cancerous, localized, non-invasive), **premalignant** (such as [[carcinoma]] in situ or severe [[dysplasia]]), and **malignant** (cancerous, capable of invading surrounding structures and distant **metastasis**). 
_____
>[!info]+ ETYMOLOGY of [[neoplasm]]
>#greek
>
>|Component|Origin|Meaning|
>|---|---|---|
>|**[[neo-]]**|Greek _neos_ (νέος)|"**New**"|
>|**[[-plasm]]**|Greek _plasma_ (πλάσμα)|"**Formation**, **thing formed**, or **molded**"|
>
> The roots combine directly to mean "**new formation.**" The term was introduced into English medical literature in the mid-to-late 19th century as cellular pathology advanced, providing a scientific descriptor for what laypeople and early physicians called "tumors."
_____

> [!success]+ ### 🔀 ALIASES / ALTERNATE TERMS
> 
> - **Tumor** _(originally meant any swelling, but now used synonymously with solid neoplasms)_
> - **Mass**
> - **New growth**
> - **Lesion** _(broad term, can include non-neoplastic conditions)_
> - **Nodule**
> - **Polyp** _(a macroscopic descriptive term for a neoplasm projecting from a mucosal surface)_
> 
_____

> [!danger]+ ### 🔗 RELATED TERMS
> 
> - **Carcinoma** — a malignant neoplasm arising from epithelial tissue.
> - **Sarcoma** — a malignant neoplasm arising from mesenchymal/connective tissue (bone, muscle, fat).
> - **[[benign]]** — a non-malignant neoplasm that does not invade or metastasize.
> - **[[malignant]]** — a cancerous neoplasm characterized by uncontrolled growth, invasion, and potential metastasis.
> - **Metastasis** — the spread of malignant neoplastic cells to secondary, distant organs.
> - **[[hyperplasia]]** — an increase in the number of normal cells in a tissue, which is a physiologic or appropriate response, unlike the uncontrolled growth in **neoplasia**.
> - **Dysplasia** — abnormal cellular development or organization, often considered a precursor to malignant **neoplasia**.
> - **Oncology** — the medical specialty dedicated to the study, diagnosis, and treatment of neoplasms.
> 
_____


> [!example]+ #### CODING CORNER
> <br>
> 
> ### 🏥 ICD-10-CM CODES
> 
> #### **Malignant Neoplasms (Examples)**
> 
> |Code|Description|
> |---|---|
> |[[C80.1]]|Malignant (primary) neoplasm, unspecified|
> |[[C34.90]]|Malignant neoplasm of unspecified part of unspecified bronchus or lung|
> |[[C50.919]]|Malignant neoplasm of unspecified site of unspecified female breast|
> |[[C79.9]]|Secondary malignant neoplasm of unspecified site|
> 
> #### **Benign Neoplasms (Examples)**
> 
> |Code|Description|
> |---|---|
> |[[D24.9]]|Benign neoplasm of unspecified breast|
> |[[D12.6]]|Benign neoplasm of colon, unspecified|
> |[[D17.9]]|Benign lipomatous neoplasm, unspecified _(Lipoma)_|
> |[[D22.9]]|Melanocytic nevi, unspecified _(Benign mole)_|
> 
> #### **Neoplasms of Uncertain & Unspecified Behavior**
> 
> |Code|Description|
> |---|---|
> |[[D48.9]]|Neoplasm of uncertain behavior, unspecified|
> |[[D39.10]]|Neoplasm of uncertain behavior of unspecified ovary|
> |[[D49.9]]|Neoplasm of unspecified behavior of unspecified site|
> |[[D49.2]]|Neoplasm of unspecified behavior of bone, soft tissue, and skin|
> 
> ---
> 
> ### 🔧 COMMON CPT CODES (Neoplasm-Related Procedures)
> 
> |CPT Code|Description|
> |---|---|
> |**[[11400]]**|Excision, benign lesion including margins, except skin tag (unless listed elsewhere), trunk, arms or legs; excised diameter 0.5 cm or less|
> |**[[11600]]**|Excision, malignant lesion including margins, trunk, arms, or legs; excised diameter 0.5 cm or less|
> |**[[11102]]**|Tangential biopsy of skin (e.g., shave, scoop, saucerize, curette); single lesion|
> |**[[19081]]**|Biopsy, breast, with placement of breast localization device(s) (e.g., clip, metallic pellet), when performed, and imaging of the biopsy specimen, when performed, percutaneous; first lesion, including stereotactic guidance|
> |**[[45380]]**|Colonoscopy, flexible; with biopsy, single or multiple|
> |**[[88305]]**|Level IV - Surgical pathology, gross and microscopic examination _(the standard path evaluation to determine benign vs. malignant)_|
> 
> ---
> 
> > ⚠️ **Coding Note:** In ICD-10-CM, coding for a neoplasm requires utilizing the **Table of Neoplasms**. You must determine the site and the behavior: **Malignant Primary**, **Malignant Secondary**, **Ca in situ**, **Benign**, **Uncertain**, or **Unspecified**. 
> > - **Uncertain behavior** (`D37`-`D48`) means the pathologist has examined the tissue and cannot predict whether it is benign or malignant. 
> > - **Unspecified behavior** (`D49`) means the physician simply documented "**tumor**" or "**mass**" without providing the pathology results or definitive diagnosis. Always query the provider or wait for the pathology report if a definitive diagnosis is pending before applying an "Unspecified" code.
> 
_____
>[!tip]- DERIVATIONS of [[neoplasm]]
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