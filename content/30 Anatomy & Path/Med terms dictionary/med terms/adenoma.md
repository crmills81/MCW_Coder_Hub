---
tags:
  - medterm
aliases:
  - Adenoma
  - glandular tumor
  - benign glandular neoplasm
roots:
  - aden-
  - -oma
forms:
  - noun
  - suffix
alphabet: A
definition:
  - A benign tumor that arises in or resembles glandular tissue.
---
>[!Note] DEFINITION of [[adenoma]]
>The term **adenoma** refers to a **benign neoplasm** (**non-cancerous tumor**) of **epithelial** tissue with **glandular** origin, or one that exhibits glandular characteristics. **Adenomas** can grow from many glandular organs, including the **colon**, **pituitary gland**, **thyroid**, **adrenal glands**, and **prostate**. Although they are benign and do not metastasize, they can cause significant clinical issues by compressing surrounding structures (**mass effect**) or by overproducing hormones (**e.g., a functioning pituitary adenoma causing acromegaly or Cushing's disease**). Critically, some adenomas — particularly **adenomatous polyps** in the colon — are considered **precancerous** and have a high potential to transform into malignant **adenocarcinomas** if left unremoved.
_____
>[!info]+ ETYMOLOGY of [[adenoma]]
>#greek
>
>|Component|Origin|Meaning|
>|---|---|---|
>|**[[aden]]-**|Greek _adēn_ (ἀδήν)|"**Gland**"|
>|**[[-oma]]**|Greek _-oma_ (-ωμα)|"**Tumor**", "**mass**", or "**fluid collection**"|
>
> The roots combine to directly translate as a "**glandular tumor.**" The term reflects early pathologists' observations of these tumors under a microscope, where they noted the growths maintained the organized, secretory-like structural patterns of normal glands.
_____

> [!success]+ ### 🔀 ALIASES / ALTERNATE TERMS
> 
> - **Glandular tumor**
> - **Benign glandular neoplasm**
> - **Adenomatous polyp** _(when growing on a mucosal surface, like the colon)_
> - **Fibroadenoma** _(a mixed tumor containing both glandular and fibrous tissue, common in the breast)_
> - **Pituitary adenoma** _(microadenoma or macroadenoma)_
> 
_____

> [!danger]+ ### 🔗 RELATED TERMS
> 
> - **[[Adenocarcinoma]]** — the malignant, cancerous counterpart of an adenoma.
> - **[[Polyp]]** — a macroscopic descriptive term for a growth protruding from a mucous membrane; many colon polyps are histologically adenomas.
> - **[[Hyperplasia]]** — a non-neoplastic overgrowth of cells, which can sometimes be confused with or precede an adenoma.
> - **Endocrine** — relating to glands that secrete hormones directly into the blood; many adenomas are found in the endocrine system.
> - **Colonoscopy** — the primary endoscopic procedure used to screen for, identify, and remove colon adenomas.
> - **Prolactinoma** — a specific type of functioning pituitary adenoma that overproduces the hormone prolactin.
> 
_____


> [!example]+ #### CODING CORNER
> <br>
> 
> ### 🏥 ICD-10-CM CODES
> 
> #### **Gastrointestinal Adenomas**
> 
> |Code|Description|
> |---|---|
> |[[D12.0]]|Benign neoplasm of cecum|
> |[[D12.2]]|Benign neoplasm of ascending colon|
> |[[D12.5]]|Benign neoplasm of sigmoid colon|
> |[[D12.6]]|Benign neoplasm of colon, unspecified|
> |[[D13.2]]|Benign neoplasm of duodenum|
> 
> #### **Endocrine & Other Adenomas**
> 
> |Code|Description|
> |---|---|
> |[[D35.2]]|Benign neoplasm of pituitary gland|
> |[[D34]]|Benign neoplasm of thyroid gland|
> |[[D35.01]]|Benign neoplasm of right adrenal gland|
> |[[D35.02]]|Benign neoplasm of left adrenal gland|
> |[[D35.1]]|Benign neoplasm of parathyroid gland|
> |[[D24.1]]|Benign neoplasm of right breast _(often used for fibroadenomas)_|
> |[[D24.2]]|Benign neoplasm of left breast _(often used for fibroadenomas)_|
> 
> ---
> 
> ### 🔧 COMMON CPT CODES (Adenoma-Related Procedures)
> 
> |CPT Code|Description|
> |---|---|
> |**[[45385]]**|Colonoscopy, flexible; with removal of tumor(s), polyp(s), or other lesion(s) by snare technique _(Standard polypectomy for colonic adenomas)_|
> |**[[45384]]**|Colonoscopy, flexible; with removal of tumor(s), polyp(s), or other lesion(s) by hot biopsy forceps|
> |**[[60200]]**|Excision of cyst or adenoma of thyroid, or transection of isthmus|
> |**[[61548]]**|[[Hypophysectomy]] or excision of pituitary tumor, transnasal or transseptal approach, nonstereotactic|
> |**[[19120]]**|Excision of cyst, [[fibroadenoma]], or other benign or malignant tumor, aberrant breast tissue, duct lesion, nipple or areolar lesion (**except [[19300]]**), open, male or female, 1 or more lesions|
> |**[[88305]]**|Level IV - Surgical pathology, gross and microscopic examination _(The standard pathology evaluation used to confirm a polyp/tumor is an adenoma rather than an adenocarcinoma)_|
> 
> ---
> 
> > ⚠️ **Coding Note:** In ICD-10-CM, adenomas are classified under **Benign Neoplasms** (`D10`-`D36`). When coding colon polyps, do not confuse adenomatous polyps (**which map to the `D12.-` benign neoplasm codes**) with hyperplastic polyps or inflammatory polyps, which map to `K62.1` (**Rectal polyp**) or `K62.0` (Anal polyp). Always wait for the pathology report to confirm the histologic type before assigning a definitive [[neoplasm]] code. If the provider dictates an excision of an "**adenoma**," but the pathology report returns as "[[adenocarcinoma]]," the malignant code (`C`-category) must be used.
> 
_____
>[!tip]- DERIVATIONS of [[adenoma]]
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