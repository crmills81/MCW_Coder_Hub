---
tags:
  - medterm
aliases:
  - Sarcoma
  - soft tissue sarcoma
  - bone cancer
  - mesenchymal tumor
roots:
  - sarc-
  - -oma
forms:
  - noun
  - suffix
alphabet: S
definition:
  - A malignant tumor arising from connective or mesenchymal tissue, such as bone, cartilage, fat, muscle, or blood vessels.
---
>[!Note] DEFINITION of [[sarcoma]]
>The term **sarcoma** refers to a broad group of malignant **neoplasms** (**cancers**) that originate in the **mesenchymal** or connective tissues of the body. Unlike **carcinomas**, which develop in [[epithelial]] linings (**like skin or internal organs**), **sarcomas** arise in the structural tissues: **bones**, **cartilage**, **muscles**, **tendons**, **fat**, **blood vessels**, and **nerves**. They are typically highly aggressive and often **metastasize** through the bloodstream (**hematogenous spread**) rather than the lymphatic system. **Sarcomas** are generally divided into two main categories: **soft tissue sarcomas** (e.g., [[liposarcoma]], [[leiomyosarcoma]]) and **primary bone sarcomas** (e.g., [[osteosarcoma]], Ewing [[sarcoma]]).
_____
>[!info]+ ETYMOLOGY of [[sarcoma]]
>#greek
>
>|Component|Origin|Meaning|
>|---|---|---|
>|**[[sarc-]]**|Greek _sark-_, from _sarx_ (σάρξ)|"**Flesh**" or "**connective tissue**"|
>|**[[-oma]]**|Greek _-oma_ (-ωμα)|"**Tumor**", "**mass**", or "**fluid collection**"|
>
> The literal translation is a "**fleshy tumor.**" Historically, the term was coined by early anatomists and pathologists because the cut surface of these tumors often resembled the texture and appearance of raw fish or animal flesh, distinct from the harder, more fibrous nature of many **carcinomas**.
_____

> [!success]+ ### 🔀 ALIASES / ALTERNATE TERMS
> 
> - **Soft tissue sarcoma (STS)**
> - **Bone cancer** / **Primary bone tumor**
> - **Malignant mesenchymal tumor**
> - **Osteosarcoma** _(specific to bone)_
> - **[[Liposarcoma]]** _(specific to fat tissue)_
> - **[[Leiomyosarcoma]]** _(specific to smooth muscle)_
> - **Angiosarcoma** _(specific to blood vessels)_
> 
_____

> [!danger]+ ### 🔗 RELATED TERMS
> 
> - **Carcinoma** — a cancer arising from epithelial tissue, which is the most common type of cancer (**distinguishing it from the rarer sarcoma**).
> - **Mesenchyme** — the embryonic connective tissue from which all **sarcomas** ultimately derive.
> - **[[Metastasis]]** — the spread of cancer cells; **sarcomas** most frequently **metastasize** to the lungs via the bloodstream.
> - **Radical resection** — an aggressive surgical procedure aimed at removing the tumor along with a wide margin of normal surrounding tissue to prevent recurrence.
> - **Oncology** — the medical specialty dedicated to cancer diagnosis and treatment.
> - **Kaposi's sarcoma** — a specific vascular **sarcoma** caused by Human Herpesvirus 8 (**HHV-8**), most commonly seen in immunocompromised patients (**e.g., HIV/AIDS**).
> 
_____


> [!example]+ #### CODING CORNER
> <br>
> 
> ### 🏥 ICD-10-CM CODES
> 
> #### **Soft Tissue Sarcomas (Category C49)**
> 
> |Code|Description|
> |---|---|
> |[[C49.11]]|Malignant neoplasm of connective and soft tissue of right upper limb, including shoulder|
> |[[C49.12]]|Malignant neoplasm of connective and soft tissue of left upper limb, including shoulder|
> |[[C49.21]]|Malignant neoplasm of connective and soft tissue of right lower limb, including hip|
> |[[C49.22]]|Malignant neoplasm of connective and soft tissue of left lower limb, including hip|
> |[[C49.3]]|Malignant neoplasm of connective and soft tissue of thorax|
> |[[C49.9]]|Malignant neoplasm of connective and soft tissue, unspecified|
> 
> #### **Bone and Articular Cartilage Sarcomas (Category C40-C41)**
> 
> |Code|Description|
> |---|---|
> |[[C40.21]]|Malignant neoplasm of long bones of right lower limb|
> |[[C40.22]]|Malignant neoplasm of long bones of left lower limb|
> |[[C41.2]]|Malignant neoplasm of vertebral column|
> |[[C41.9]]|Malignant neoplasm of bone and articular cartilage, unspecified|
> 
> #### **Specific & Other Sarcomas**
> 
> |Code|Description|
> |---|---|
> |[[C46.0]]|Kaposi's sarcoma of skin|
> |[[C22.3]]|Angiosarcoma of liver|
> |[[Z85.831]]|Personal history of malignant neoplasm of soft tissue|
> |[[Z85.830]]|Personal history of malignant neoplasm of bone|
> 
> ---
> 
> ### 🔧 COMMON CPT CODES (Sarcoma-Related Procedures)
> 
> |CPT Code|Description|
> |---|---|
> |**[[20206]]**|Biopsy, muscle, percutaneous needle|
> |**[[20240]]**|Biopsy, bone, open; superficial|
> |**[[21931]]**|Excision, tumor, soft tissue of back or flank, subcutaneous; 3 cm or greater|
> |**[[27615]]**|Radical resection of tumor (e.g., sarcoma), soft tissue of leg or ankle area; less than 5 cm|
> |**[[27365]]**|Radical resection of tumor, bone, femur or knee|
> |**[[88309]]**|Level VI - Surgical pathology, gross and microscopic examination _(Extensive resections for soft tissue or bone sarcomas require high-level pathology)_|
> 
> ---
> 
> > ⚠️ **Coding Note:** Coding for sarcomas in ICD-10-CM requires navigating the **Neoplasm Table** under "Connective tissue" or "Bone," rather than the specific organ it may be attached to. You must determine the exact **anatomic site** and **laterality** (right vs. left) for extremities. For CPT coding, surgical excisions of sarcomas are complex. You must distinguish between a simple **excision** and a **radical resection** (which involves removing the tumor along with a significant margin of surrounding normal tissue/compartment). Pay close attention to the depth (subcutaneous vs. subfascial/intramuscular) and the size of the tumor documented in the operative report.
> 
_____
>[!tip]- DERIVATIONS of [[sarcoma]]
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