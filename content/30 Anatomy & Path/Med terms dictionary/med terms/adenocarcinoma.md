---
tags:
  - medterm
aliases:
  - glandular cancer
roots:
  - Adenocarcinoma
  - aden-
  - -carcinoma
  - adeno-
  - -oma
forms:
  - prefix
  - suffix
  - combining
  - noun
alphabet: A
definition:
  - malignant neoplasm originating from glandular epithelial tissue
---
>[!Note] DEFINITION of [[adenocarcinoma]]
>[[adenocarcinoma]] is cancer arising from glandular epithelium, forming gland‑like structures or secreting mucin. Adenocarcinoma is a malignant tumor of epithelial origin derived from glandular or secretory epithelium ([[endoderm]], [[mesoderm]], or [[ectoderm]]), exhibiting morphological features such as glandular/acinar differentiation, mucin production, or ductal structures. It represents the most common type of non‑small cell lung cancer (**NSCLC**), colorectal cancer, pancreatic cancer, esophageal cancer, and many others, with subtypes including mucinous, signet‑ring cell, [[papillary]], [[bronchioloalveolar]] (now reclassified), and others based on histologic patterns and molecular features.
_____
>[!info]+ ETYMOLOGY of [[adenocarcinoma]]
>#greek 
>•	[[Adeno-]]: Greek adēn, [[adēn‑]] = “**gland**” (cf. [[adenoma]]).
>•	[[Carcin-]]: Greek *karkinos* = “**crab**” (due to vein pattern resembling crab legs; → *Latin* cancer).
>•	[[-oma]]: Greek [[‑oma]] = “**tumor, growth**.”
>•	Literal meaning: “**Glandular tumor**” or “**gland cancer**.”

***

> [!example]+ Key Clinical and Histologic Features
> **Hallmarks:**  
> - **Gland formation:** Acini, tubules, ducts lined by atypical epithelial cells.  
> - **Mucin production:** Intracellular or extracellular mucin (e.g., mucinous [[adenocarcinoma]]).  
> - **Architectural disorder:** Crowded glands, cribriform patterns, back‑to‑back glands, invasion into [[stroma]].  
> - **Grading:** Based on gland formation, nuclear atypia, mitotic rate (e.g., Gleason for prostate adenocarcinoma).  
> 
> **Common sites and subtypes:**
> 
> | Site                  | Subtypes/Notes                                      |  
> |-----------------------|-----------------------------------------------------|  
> | **Lung**             | [[Bronchioloalveolar]] (lepidic), mucinous, solid, papillary (8140/3). |  
> | **[[Colorectum]]**       | Tubular, mucinous, signet‑ring, serrated (8140/3, 8480/3). |  
> | **Pancreas**         | Ductal adenocarcinoma (8140/3, [[pancreatobiliary]] type). |  
> | **Prostate**         | Acinar adenocarcinoma (Gleason grading).|  
> | **Breast**           | Ductal (NOS), lobular, mucinous (8140/3, 8480/3, 8520/3).|  
> | **Esophagus/Stomach**| Intestinal‑type, diffuse (signet‑ring), Barrett’s‑related. |
> 
> ***
> 
> **<u>Coding Context (ICD‑O‑3 / ICD‑10‑CM Notes)</u>**
> 
> **Morphology codes (ICD‑O‑3):**[2][1]
> - **8140/3** - Adenocarcinoma, NOS (most common; used when subtype unspecified).  
> - **8480/3** - Mucinous adenocarcinoma.  
> - **8260/3** - Signet‑ring cell carcinoma (subtype of adenocarcinoma).  
> - **8255/3** - Adenocarcinoma with mixed subtypes.  
> - Behavior: **/3** = malignant.[2]
> 
> **ICD‑10‑CM:** No standalone code; **site‑specific** (e.g.):  
> - **C34.x** - Malignant neoplasm of bronchus/lung (with adenocarcinoma histology).  
> - **C18.x** - Malignant neoplasm of colon.  
> - **[[C25.3]]** - Malignant neoplasm of pancreatic duct.  
> - **C50.x** - Malignant neoplasm of breast.[5][3]
> 
> **Coding tips:**  
> - Pair **histology (8140/3)** with **primary site** code.  
> - For **metastatic adenocarcinoma**, use **C77-C80** series + primary site if known.  
> - **Carcinoma in situ** variants: **D05.x** (breast), **D01.x** (GI tract).[5]
> 
> ***
> 
> **<u>Related Terms</u>**
> 
> **Benign counterpart:**  
> - **[[adenoma]]** (adenomatous polyp): Benign glandular tumor (/0 in ICD‑O); precursor to adenocarcinoma in colon, stomach.[2]
> 
> **Other glandular malignancies:**  
> - **[[Cystadenocarcinoma]]:** Cystic [[glandular cancer]].  
> - **Papillary adenocarcinoma:** With [[papillary]] projections.  
> - **Tubular adenocarcinoma:** Predominantly tubular glands.  
> 
> **Precursors:**  
> - **[[dysplasia]] / [[adenoma]] / [[metaplasia]]** (e.g., [[Barrett’s esophagus]] → esophageal adenocarcinoma).  
> 
> **Molecular markers:**  
> - **KRAS**, **EGFR**, **BRAF** mutations (lung, colorectal); **HER2** amplification (breast, gastric); MSI‑high (colorectal Lynch syndrome).[2]
> 
> ***
> 
> **<u>Clinical Details</u>**
> 
> **Risk factors (site‑specific):**  
> - **Colorectal:** Polyps, IBD, Lynch syndrome, diet.  
> - **Lung:** Smoking (especially adenocarcinoma in non‑smokers).  
> - **Pancreas:** Smoking, chronic pancreatitis, [[diabetes]], BRCA2.  
> - **Prostate:** Age, family history, African ancestry.  
> 
> **Prognosis:** Varies widely by site/stage (poor for pancreatic; better for early colorectal).  
> 
> **One‑Sentence Summary**  
> **Adenocarcinoma** (8140/3), the most common [[epithelial]] malignancy, arises from glandular tissue across organs like lung (C34.x), colon (C18.x), and pancreas ([[C25.3]]), forming disorganized glands or mucin and often progressing from benign adenomas via [[dysplasia]].
_____
>[!tip]- DERIVATIONS of [[adenocarcinoma]]
>```dataview
>TABLE definition AS Definition
>FROM #medterm 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != this.file.name
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

[[Med roots]]
[[Appendix A Prefixes]]
[[Appendix B Combining Forms]]
[[Appendix C Suffixes]]
[[Appendix D Suffix forms]]