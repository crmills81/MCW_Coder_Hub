---
tags:
  - medterm
  - oncology
aliases:
  - Benign
  - non-cancerous
  - benign tumor
  - benign neoplasm
roots:
  - benign-
forms:
  - adjective
alphabet: B
definition:
  - Refers to a condition, tumor, or growth that is not cancerous, does not invade surrounding tissue, and does not metastasize.
---
>[!Note] DEFINITION of [[benign]]
>The term **benign** in medicine typically describes a condition that is mild, non-progressive, or not life-threatening. Most frequently, it is used in oncology and pathology to describe a **neoplasm** (**tumor**) that is **non-cancerous**. Benign tumors are generally well-differentiated (**resembling normal tissue**), grow slowly, and are often encapsulated (**enclosed within a fibrous capsule**). Critically, benign growths **do not invade** adjacent healthy tissues and **do not metastasize** (**spread**) to distant parts of the body. While not cancerous, a benign tumor can still require surgical intervention if its growth causes a mass effect, compressing surrounding organs, nerves, or blood vessels (**e.g., a benign meningioma in the brain)**.
_____
>[!info]+ ETYMOLOGY of [[benign]]
>#latin
>
>|Component|Origin|Meaning|
>|---|---|---|
>|**benign**|Latin _benignus_| "**Kind**", "**good**", or "**well-born**"|
>
> The Latin term originates from _bene_ ("**well**" or "**good**") combined with the root of _gignere_ ("**to bear**" or "**beget**"). In early medical history, diseases were often anthropomorphized by their "**disposition**." A "benign" illness was considered mild, relatively harmless, and expected to have a favorable outcome, standing in stark contrast to "**malignant**" (**wicked or maliciou**s) conditions.
_____

> [!success]+ ### 🔀 ALIASES / ALTERNATE TERMS
> 
> - **Non-cancerous**
> - **Non-malignant**
> - **Benign tumor**
> - **Benign neoplasm**
> - **Innocent murmur** _(when applied to cardiology, meaning a harmless heart murmur)_
> - **Benign prostatic hyperplasia (BPH)** _(a specific benign enlargement condition)_
> 
_____

> [!danger]+ ### 🔗 RELATED TERMS
> 
> - **Malignant** — cancerous, aggressive, capable of invading local tissue and metastasizing.
> - **Neoplasm** — an abnormal mass of tissue resulting from excessive cell division; can be benign or malignant.
> - **[[lipoma]]** — a very common benign tumor composed of adipose (fat) tissue.
> - **[[adenoma]]** — a benign tumor arising from glandular epithelial tissue (e.g., colon polyps, pituitary adenomas).
> - **Fibroadenoma** — a common benign solid tumor of the breast.
> - **Hyperplasia** — a non-neoplastic increase in the number of normal cells in an organ or tissue.
> - **Cyst** — a closed sac with a distinct membrane, often containing fluid or semi-solid material; usually benign but structurally distinct from a solid tumor.
> 
_____


> [!example]+ #### CODING CORNER
> <br>
> 
> ### 🏥 ICD-10-CM CODES
> 
> #### **Benign Neoplasms (Examples)**
> 
> |Code|Description|
> |---|---|
> |[[D12.6]]|Benign neoplasm of colon, unspecified|
> |[[D17.9]]|Benign lipomatous neoplasm, unspecified _(Lipoma)_|
> |[[D22.9]]|Melanocytic nevi, unspecified _(Benign mole)_|
> |[[D24.9]]|Benign neoplasm of unspecified breast|
> |[[D32.0]]|Benign neoplasm of cerebral meninges|
> |[[D36.9]]|Benign neoplasm, unspecified site|
> 
> #### **Other Benign Conditions**
> 
> |Code|Description|
> |---|---|
> |[[N40.0]]|[[Benign prostatic hyperplasia]] without lower urinary tract symptoms|
> |[[I10]]|Essential (primary) hypertension _(historically termed "benign hypertension")_|
> |[[D25.9]]|[[Leiomyoma]] of uterus, unspecified _(Benign uterine fibroid)_|
> 
> ---
> 
> ### 🔧 COMMON CPT CODES (Benign Lesion Procedures)
> 
> |CPT Code|Description|
> |---|---|
> |**[[11400]]**|Excision, benign lesion including margins, except skin tag (unless listed elsewhere), trunk, arms or legs; excised diameter 0.5 cm or less|
> |**[[11420]]**|Excision, benign lesion including margins, except skin tag (unless listed elsewhere), scalp, neck, hands, feet, genitalia; excised diameter 0.5 cm or less|
> |**[[45385]]**|Colonoscopy, flexible; with removal of tumor(s), polyp(s), or other lesion(s) by snare technique|
> |**[[88305]]**|Level IV - Surgical pathology, gross and microscopic examination _(The standard pathology evaluation used to confirm a lesion is benign)_|
> 
> ---
> 
> > ⚠️ **Coding Note:** In ICD-10-CM, you must use the **Table of Neoplasms** to locate the exact site and then select the code from the **"Benign"** column (typically in the `D10`-`D36` range). 
> > 
> > **Crucial rule:** Do not assign a "**Benign**" code based purely on a physician's clinical impression if a pathology report is pending. If the excision is done and pathology is sent, wait for the path report. If coding must be completed before the path report is available, use a code for the physical sign/symptom (**e.g., "mass," "lump," "lesion"**) or a code from the "Unspecified behavior" column (`D49.-`), depending on specific facility guidelines.
> 
_____
>[!tip]- DERIVATIONS of [[benign]]
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
>WHERE file.name != this.file.name
>AND any(contains(this.definition, definition))
>```

[[Med roots dictionary]]
[[Appendix A Prefixes]]
[[Appendix B Combining Forms]]
[[Appendix C Suffixes]]
[[Appendix D Suffix forms]]