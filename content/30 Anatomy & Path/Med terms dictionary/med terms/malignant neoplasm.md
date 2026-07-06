---
tags:
  - medterm
  - oncology
aliases:
  - Cancer
  - malignancy
  - malignant tumor
  - CA
roots:
  - malign-
  - neo-
  - -plasm
forms:
  - adjective
  - noun
  - prefix
  - suffix
alphabet: M
definition:
  - A cancerous tumor that exhibits uncontrolled growth, invades surrounding tissues, and has the potential to metastasize.
---
>[!Note] DEFINITION of [[malignant neoplasm]]
>The term **malignant neoplasm** refers to a cancerous growth or tumor characterized by uncontrolled, abnormal cellular proliferation. Unlike benign tumors, malignant neoplasms have the aggressive ability to invade and destroy adjacent normal tissues and can spread (**metastasize**) to distant organs via the lymphatic system or bloodstream. Major histological categories include **carcinomas** (**arising from epithelial tissue**), **sarcomas** (**arising from connective or mesenchymal tissue**), **leukemias** (**affecting blood-forming tissue**), and **lymphomas** (affecting the immune system).
_____
>[!info]+ ETYMOLOGY of [[malignant neoplasm]]
>#latin #greek
>
>|Component|Origin|Meaning|
>|---|---|---|
>|**malignant**|Latin _malignus_|"**Wicked**", "**bad**", or "**malicious**"|
>|**neo-**|Greek _neos_ (νέος)|"**New**"|
>|**-plasm**|Greek _plasma_ (πλάσμα)|"**Formation**, **thing formed**, or **molded**"|
>
> The combined phrase translates essentially to a "**wicked new formation.**" Historically, the aggressive, destructive nature of these growths led ancient and medieval physicians to describe them with terms denoting malice or evil behavior, distinguishing them from harmless ("**benign**") swellings.
_____

> [!success]+ ### 🔀 ALIASES / ALTERNATE TERMS
> 
> - **Cancer**
> - **Malignancy**
> - **Malignant tumor**
> - **CA** _(common clinical abbreviation)_
> - **Primary malignancy** _(the original site of the tumor)_
> - **Secondary malignancy** _(a site of metastasis)_
> 
_____

> [!danger]+ ### 🔗 RELATED TERMS
> 
> - **[[metastasis|Metastasis]]** — the spread of cancer cells from the primary site to other parts of the body
> - **[[carcinoma|Carcinoma]]** — a malignant neoplasm of epithelial origin (e.g., skin, lung, breast, prostate)
> - **[[sarcoma|Sarcoma]]** — a malignant neoplasm of mesenchymal/connective tissue (e.g., bone, cartilage, muscle)
> - **Benign neoplasm** — a non-cancerous tumor that remains localized and does not invade or metastasize
> - **Oncology** — the branch of medicine focused on diagnosing, treating, and researching cancer
> - **[[chemotherapy]]** — the systemic use of chemical agents to destroy or slow the growth of cancer cells
> - **Carcinoma in situ (CIS)** — early-stage cancer that is confined to the layer of cells where it began and has not invaded surrounding tissue
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
> |[[C34.11]]|Malignant neoplasm of upper lobe, right bronchus or lung|
> |[[C50.111]]|Malignant neoplasm of central portion of right female breast|
> |[[C61]]|Malignant neoplasm of prostate|
> |[[C43.31]]|Malignant melanoma of nose|
> 
> #### **Secondary (Metastatic) Malignant Neoplasms (Examples)**
> 
> |Code|Description|
> |---|---|
> |[[C78.01]]|Secondary malignant neoplasm of right lung|
> |[[C78.7]]|Secondary malignant neoplasm of liver and intrahepatic bile duct|
> |[[C79.31]]|Secondary malignant neoplasm of brain|
> |[[C79.9]]|Secondary malignant neoplasm of unspecified site|
> 
> #### **Treatment & History Encounters**
> 
> |Code|Description|
> |---|---|
> |[[Z51.11]]|Encounter for antineoplastic chemotherapy|
> |[[Z51.0]]|Encounter for antineoplastic radiation therapy|
> |[[Z85.3]]|Personal history of malignant neoplasm of breast|
> |[[Z85.118]]|Personal history of other malignant neoplasm of bronchus and lung|
> 
> ---
> 
> ### 🔧 COMMON CPT CODES (Oncology-Related Procedures)
> 
> |CPT Code|Description|
> |---|---|
> |**[[11600]]**|Excision, malignant lesion including margins, trunk, arms, or legs; excised diameter 0.5 cm or less|
> |**[[38500]]**|Biopsy or excision of lymph node(s); open, superficial|
> |**[[88305]]**|Level IV - Surgical pathology, gross and microscopic examination _(standard for determining malignancy)_|
> |**[[96413]]**|Chemotherapy administration, intravenous infusion technique; up to 1 hour, single or initial substance/drug|
> |**[[77402]]**|Radiation treatment delivery, >1 MeV; simple|
> 
> ---
> 
> > ⚠️ **Coding Note:** In ICD-10-CM, coding for a malignant neoplasm strictly requires utilizing the **Table of Neoplasms** to determine if the site is **Primary** or **Secondary** (**metastatic**). If a patient is presenting *solely* for the administration of chemotherapy, radiation, or immunotherapy, the Z-code for the therapy (e.g., [[Z51.11]]) must be listed as the **principal/first-listed diagnosis**, followed immediately by the active malignant neoplasm code. If the cancer has been completely excised or eradicated and there is no longer active treatment directed at it, you must use a "Personal history of" (`Z85.-` category) code instead of the active active malignancy C-code.
> 
_____
>[!tip]- DERIVATIONS of [[malignant neoplasm]]
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