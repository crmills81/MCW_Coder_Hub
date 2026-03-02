---
tags:
  - medterm
  - medroot
aliases:
  - epithelium
roots:
  - epithelial
  - ep-
  - epi-
  - -al
forms:
  - prefix
  - suffix
  - combining
  - noun
alphabet: E
definition:
  - avascular sheets of cells
---
>[!Note] DEFINITION of [[epithelial]]
>[[epithelial]] refers to **tissue forming continuous sheets of tightly packed cells that cover body surfaces, line cavities/organs, and compose glands**. Epithelial tissue consists of contiguous layers of polarized cells (**apical free surface, basal attachment to basement membrane**) with minimal extracellular matrix, classified by cell shape ([[squamous]]/flat, [[cuboidal]]/cube-like, columnar/tall) and layers (**simple/single, stratified/multi, pseudostratified/appears layered, transitional/distensible**); it derives from all [[embryonic]] germ layers ([[ectoderm]] → skin; [[endoderm]] → GI/respiratory; mesoderm → endothelium/mesothelium), lacks blood vessels (nutrient diffusion from [[stroma]]), and renews rapidly via stem cells.
_____
>[!info]+ ETYMOLOGY of [[epithelial]]
>#greek
>•	[[Epitheli-]]: Greek [[epi-]] (“**upon, over**”) + *thēlē* (“**nipple**,” extended to “**covering, tissue**”).
>	•	Coined 18th century from [[epithelium]] = “**surface tissue covering**.”
>	•	Related: [[Endothelium]] (inner lining), [[mesothelium]] (serous cavities).
_____
>[!tip]- DERIVATIONS of [[epithelial]]
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

---

> [!example]+ **Classification Table**
> 
> | Type/Shape          | Layers          | Locations/Functions                          |
> |---------------------|-----------------|----------------------------------------------|
> | **Simple [[Squamous]]**| Single         | [[Alveoli]], capillaries, endothelium (diffusion). |
> | **Simple [[Cuboidal]]** | Single         | Kidney tubules, glands (secretion/absorption). |
> | **Simple Columnar** | Single         | Stomach/intestines (absorption, goblet cells mucus). |
> | **Pseudostratified Columnar** | Single (nuclei staggered) | Respiratory (ciliated, mucus trap). |
> | **Stratified [[Squamous]]** | Multiple     | Skin (keratinized protection), esophagus/vagina (non-keratinized). |
> | **Stratified Cuboidal** | 2+         | Ducts (sweat/salivary glands, protection). |
> | **Transitional**    | Variable       | Bladder/ureters (stretch for urine storage). |
> | **[[Glandular]]**       | Specialized    | Endocrine (hormones), exocrine (ducts: sweat, mucus). |
> 
> ## Related Terms
> 
> **Specializations:**  
> - **Ciliated:** Respiratory epithelium (mucociliary clearance).  
> - **Keratinized:** Epidermis ( **waterproof barrier**).  
> - **Microvilli/brush border:** Intestines/kidney (**absorption**).  
> 
> **Pathology:**  
> - **[[Dysplasia]]/[[metaplasia]]:** Precancerous changes (e.g., [[Barrett's esophagus]]).  
> - **Carcinomas:** 90% cancers from epithelium ([[adenocarcinoma]] glandular; [[squamous cell carcinoma]]).[1]
> - **Epithelialization:** Wound healing via [[keratinocyte]] migration.
> 
> **Contrasts:** Connective (loose matrix, [[vascular]]), muscle, nervous tissues.
> 
> ## Functions
> 
> - **Protection:** Mechanical/chemical barrier (**skin, GI [[mucosa]]**).  
> - **Secretion:** Glands/mucus (**goblet cells**).  
> - **Absorption:** Nutrients (**intestines**), gases (**lungs**).  
> - **Filtration:** Kidney [[glomeruli]].  
> - **Sensory:** Taste buds, olfactory epithelium.
> 
> **No specific ICD/CPT codes for "epithelial" alone** - pathology context (e.g., [[D13.7]] epithelial [[neoplasm]] benign; [[C34.9]] lung [[carcinoma]] w/epithelial histology).
> 
> **One-Sentence Summary**  
> **[[Epithelial]]** tissue, Greek *[[epi-]]thēlē* (“upon covering”), forms avascular sheets (simple squamous alveoli to stratified skin) for protection/secretion/absorption across ecto/meso/endoderm origins, prone to carcinomas like adenocarcinoma.
> 
> 



[[Med roots]]
[[Appendix A Prefixes]]
[[Appendix B Combining Forms]]
[[Appendix C Suffixes]]
[[Appendix D Suffix forms]]
