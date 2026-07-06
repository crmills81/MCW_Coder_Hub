---
tags:
  - medterm
aliases:
  - Lipoma
  - fatty tumor
  - adipose tumor
roots:
  - lip-
  - -oma
forms:
  - noun
  - suffix
  - prefix
alphabet: L
definition:
  - A slow-growing, benign soft-tissue tumor composed of mature adipose (fat) tissue.
---
>[!Note] DEFINITION of [[lipoma]]
>The term **lipoma** refers to a slow-growing, **benign** soft-tissue tumor composed of mature **adipocytes** (**fat cells**) enclosed within a thin, fibrous capsule. They are the most common benign soft-tissue neoplasms in adults, typically presenting as **painless, movable, doughy [[subcutaneous]] nodules**. They can occur anywhere on the body where fat is present, but are most frequently found on the **trunk, shoulders**, **neck**, and **axilla**. While generally **harmless** and ** **, they may be surgically excised for cosmetic reasons, if they grow large enough to compress surrounding nerves or tissues (**causing pain**), or to definitively rule out a malignancy such as a **liposarcoma**.
_____
>[!info]+ ETYMOLOGY of [[lipoma]]
>#greek
>
>|Component|Origin|Meaning|
>|---|---|---|
>|**[[lip-]]**|Greek _lipos_ (λίπος)|"**Fat**"|
>|**[[-oma]]**|Greek _-oma_ (-ωμα)|"**Tumor**", "**mass**", or "**fluid collection**"|
>
> The roots combine directly to form the literal medical definition: "**fatty tumor.**" 
_____

> [!success]+ ### 🔀 ALIASES / ALTERNATE TERMS
> 
> - **Fatty tumor**
> - **Adipose tumor**
> - **Benign lipomatous [[neoplasm]]**
> - **[[Subcutaneous]] lipoma**
> 
_____

> [!danger]+ ### 🔗 RELATED TERMS
> 
> - **Liposarcoma** — a rare, malignant (**cancerous**) tumor of fat cells; the [[malignant]] counterpart to a **lipoma**.
> - **Lipomatosis** — a condition characterized by the presence of multiple **lipomas** spread across the body.
> - **Angiolipoma** — a benign tumor composed of both adipose tissue and prominent blood vessels, which is frequently painful.
> - **Fibrolipoma** — a benign **lipoma** that contains prominent fibrous connective tissue.
> - **Sebaceous cyst** — a closed sac under the skin containing keratin or sebum; often confused clinically with a **lipoma** but structurally different.
> - **Adipocyte** — a mature fat cell; the primary cellular building block of a **lipoma**.
> 
_____


> [!example]+ #### CODING CORNER
> <br>
> 
> ### 🏥 ICD-10-CM CODES
> 
> #### **Benign Lipomatous Neoplasms of Skin and Subcutaneous Tissue**
> 
> |Code|Description|
> |---|---|
> |[[D17.0]]|Benign lipomatous neoplasm of skin and subcutaneous tissue of head, face and neck|
> |[[D17.1]]|Benign lipomatous neoplasm of skin and subcutaneous tissue of trunk|
> |[[D17.21]]|Benign lipomatous neoplasm of skin and subcutaneous tissue of right arm|
> |[[D17.22]]|Benign lipomatous neoplasm of skin and subcutaneous tissue of left arm|
> |[[D17.23]]|Benign lipomatous neoplasm of skin and subcutaneous tissue of right leg|
> |[[D17.24]]|Benign lipomatous neoplasm of skin and subcutaneous tissue of left leg|
> 
> #### **Benign Lipomatous Neoplasms of Other Sites**
> 
> |Code|Description|
> |---|---|
> |[[D17.39]]|Benign lipomatous neoplasm of other intra-thoracic organs|
> |[[D17.4]]|Benign lipomatous neoplasm of intra-abdominal organs|
> |[[D17.79]]|Benign lipomatous neoplasm of other specified sites|
> |[[D17.9]]|Benign lipomatous neoplasm, unspecified|
> 
> ---
> 
> ### 🔧 COMMON CPT CODES (Lipoma Excision & Pathology)
> 
> |CPT Code|Description|
> |---|---|
> |**[[11402]]**|Excision, benign lesion including margins, except skin tag (unless listed elsewhere), trunk, arms or legs; excised diameter 1.1 to 2.0 cm|
> |**[[21930]]**|Excision, tumor, soft tissue of back or flank, subcutaneous; less than 3 cm|
> |**[[21931]]**|Excision, tumor, soft tissue of back or flank, subcutaneous; 3 cm or greater|
> |**[[21932]]**|Excision, tumor, soft tissue of back or flank, subfascial (e.g., intramuscular); less than 5 cm|
> |**[[25075]]**|Excision, tumor, soft tissue of forearm and/or wrist area, subcutaneous; less than 3 cm|
> |**[[88304]]**|Level III - Surgical pathology, gross and microscopic examination _(Lipomas are typically Level III, whereas most other skin lesion excisions are Level IV)_|
> 
> ---
> 
> > ⚠️ **Coding Note:** Coding the surgical removal of a **lipoma** depends heavily on the **depth** of the tumor documented in the operative report. If the **lipoma** is confined to the skin/superficial [[subcutaneous]] tissue and removed via a simple [[excision]], the **Integumentary System** codes (`11400`-`11446`) are used based on the excised diameter. However, **CPT guidelines** state that if the [[lipoma]] is a distinct soft tissue tumor requiring deep [[subcutaneous]], **subfascial**, or **intramuscular** [[dissection]], coders must use the **Musculoskeletal System** excision codes (e.g., the `20000` series, such as `21930` or `25075`). Always verify the anatomical location, size (**including margins**), and surgical depth before selecting the **CPT code**.
> 
_____
>[!tip]- DERIVATIONS of [[lipoma]]
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