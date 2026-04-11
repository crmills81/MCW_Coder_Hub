---
tags:
  - medterm
aliases:
  - Malignant
  - cancerous
  - malignancy
roots:
  - malign-
  - -ant
forms:
  - adjective
  - noun
alphabet: M
definition:
  - Tending to produce death or deterioration; typically describing a tumor that is cancerous, invasive, and capable of metastasis, or a clinical condition that is exceptionally severe.
---
>[!Note] DEFINITION of [[malignant]]
>The term **malignant** is most commonly used in oncology and pathology to describe a **neoplasm** (**tumor**) that is **cancerous**. Malignant tumors exhibit uncontrolled cellular proliferation, aggressive local invasion into surrounding normal tissues, and the dangerous potential to **metastasize** (**spread**) to distant organs via the lymphatic or circulatory systems. Beyond oncology, the term is also used clinically to describe non-cancerous conditions that are exceptionally severe, rapidly progressive, or life-threatening if left untreated (e.g., **malignant hyperthermia**, **neuroleptic malignant syndrome**, or the historical term **malignant hypertension**).
_____
>[!info]+ ETYMOLOGY of [[malignant]]
>#latin
>
>|Component|Origin|Meaning|
>|---|---|---|
>|**[[malign-]]**|Latin _malignus_, from _malus_|"**Bad**", "**wicked**", or "**malicious**"|
>|**[[-ant]]**|Latin _-antem_|"**Characterized by**" or "**serving in the capacity of**"|
>
> The Latin term originates from _malus_ ("**bad**") combined with the root of _gignere_ ("**to bear**" or "**beget**"). Historically, diseases were often personified by their perceived "**disposition**." A "**malignant**" illness was considered wicked, aggressive, and intent on causing destruction or death, standing in stark contrast to "**benign**" (**kind or well-born**) conditions.
_____

> [!success]+ ### 🔀 ALIASES / ALTERNATE TERMS
> 
> - **Cancerous**
> - **Malignancy**
> - **Malignant tumor**
> - **Malignant neoplasm**
> - **CA** _(common clinical abbreviation)_
> 
_____

> [!danger]+ ### 🔗 RELATED TERMS
> 
> - **[[benign]]** — non-cancerous, localized, and not prone to metastasis.
> - **[[Metastasis]]** — the spread of malignant cells from a primary site to a secondary site.
> - **[[carcinoma]]** — a malignant tumor arising from [[epithelial]] tissue (e.g., lung, breast, colon).
> - **[[sarcoma]]** — a malignant tumor arising from mesenchymal/connective tissue (e.g., bone, muscle).
> - **[[neoplasm]]** — an abnormal mass of tissue resulting from excessive cell division (can be benign or malignant).
> - **Oncology** — the medical specialty dedicated to the study, diagnosis, and treatment of malignancies.
> - **Malignant hyperthermia** — a severe, potentially fatal reaction to certain anesthetic drugs (not a cancer).
> - **Neuroleptic malignant syndrome** — a life-threatening neurological emergency associated with antipsychotic medication use.
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
> |[[C43.9]]|Malignant melanoma of skin, unspecified|
> |[[C34.91]]|Malignant neoplasm of unspecified part of right bronchus or lung|
> |[[C50.911]]|Malignant neoplasm of unspecified site of right female breast|
> |[[C79.9]]|Secondary malignant neoplasm of unspecified site|
> 
> #### **Non-Neoplastic "Malignant" Conditions**
> 
> |Code|Description|
> |---|---|
> |[[T88.4XXA]]|Malignant hyperthermia due to anesthesia, initial encounter|
> |[[G21.0]]|Malignant neuroleptic syndrome|
> |[[H62.40]]|Malignant otitis externa, unspecified ear|
> 
> ---
> 
> ### 🔧 COMMON CPT CODES (Malignancy-Related Procedures)
> 
> |CPT Code|Description|
> |---|---|
> |**[[11600]]**|Excision, malignant lesion including margins, trunk, arms, or legs; excised diameter 0.5 cm or less|
> |**[[11642]]**|Excision, malignant lesion including margins, face, ears, eyelids, nose, lips; excised diameter 1.1 to 2.0 cm|
> |**[[38500]]**|Biopsy or excision of lymph node(s); open, superficial|
> |**[[88305]]**|Level IV - Surgical pathology, gross and microscopic examination _(the standard path evaluation to confirm malignancy)_|
> |**[[96413]]**|Chemotherapy administration, intravenous infusion technique; up to 1 hour, single or initial substance/drug|
> 
> ---
> 
> > ⚠️ **Coding Note:** In the ICD-10-CM manual, the term "malignant" directs coders primarily to the **Table of Neoplasms**. You must accurately differentiate between **Primary** (**where the cancer originated**) and **Secondary** (**where the cancer metastasized**). However, always be vigilant of the context: if the provider documents "malignant hypertension," "malignant hyperthermia," or "malignant otitis externa," these are *not* cancers, and you must consult the Alphabetic Index for these specific clinical syndromes rather than the Neoplasm Table. 
> 
_____
>[!tip]- DERIVATIONS of [[malignant]]
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