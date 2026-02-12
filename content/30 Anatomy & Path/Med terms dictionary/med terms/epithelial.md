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
>[!tip]+ DERIVATIONS of [[epithelial]]
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

## Classification Table

| Type/Shape          | Layers          | Locations/Functions                          |
|---------------------|-----------------|----------------------------------------------|
| **Simple [[Squamous]]**| Single         | [[Alveoli]], capillaries, endothelium (diffusion).[2][6] |
| **Simple [[Cuboidal]]** | Single         | Kidney tubules, glands (secretion/absorption).[2] |
| **Simple Columnar** | Single         | Stomach/intestines (absorption, goblet cells mucus).[2] |
| **Pseudostratified Columnar** | Single (nuclei staggered) | Respiratory (ciliated, mucus trap).[2] |
| **Stratified Squamous** | Multiple     | Skin (keratinized protection), esophagus/vagina (non-keratinized).[1] |
| **Stratified Cuboidal** | 2+         | Ducts (sweat/salivary glands, protection).[6] |
| **Transitional**    | Variable       | Bladder/ureters (stretch for urine storage).[2] |
| **Glandular**       | Specialized    | Endocrine (hormones), exocrine (ducts: sweat, mucus).[1][2] |

## Related Terms

**Specializations:**  
- **Ciliated:** Respiratory epithelium (mucociliary clearance).  
- **Keratinized:** Epidermis ( **waterproof barrier**).  
- **Microvilli/brush border:** Intestines/kidney (**absorption**).  

**Pathology:**  
- **[[Dysplasia]]/[[metaplasia]]:** Precancerous changes (e.g., [[Barrett's esophagus]]).  
- **Carcinomas:** 90% cancers from epithelium ([[adenocarcinoma]] glandular; [[squamous cell carcinoma]]).[1]
- **Epithelialization:** Wound healing via [[keratinocyte]] migration.[5]

**Contrasts:** Connective (loose matrix, [[vascular]]), muscle, nervous tissues.[2]

## Functions

- **Protection:** Mechanical/chemical barrier (**skin, GI [[mucosa]]**).  
- **Secretion:** Glands/mucus (**goblet cells**).  
- **Absorption:** Nutrients (**intestines**), gases (**lungs**).  
- **Filtration:** Kidney [[glomeruli]].  
- **Sensory:** Taste buds, olfactory epithelium.[6][4][1]

**No specific ICD/CPT codes for "epithelial" alone** – pathology context (e.g., [[D13.7]] epithelial [[neoplasm]] benign; [[C34.9]] lung [[carcinoma]] w/epithelial histology).[1]

**One-Sentence Summary**  
**Epithelial** tissue, Greek *[[epi-]]thēlē* (“upon covering”), forms avascular sheets (simple squamous alveoli to stratified skin) for protection/secretion/absorption across ecto/meso/endoderm origins, prone to carcinomas like adenocarcinoma.[5][6][2][4][1]

Sources
[1] Epithelium: What It Is, Function & Types - Cleveland Clinic https://my.clevelandclinic.org/health/articles/22062-epithelium
[2] Epithelial Tissue - SEER Training Modules - National Cancer Institute https://training.seer.cancer.gov/anatomy/cells_tissues_membranes/tissues/epithelial.html
[3] Epithelial Tissue: Crash Course Anatomy & Physiology #3 - YouTube https://www.youtube.com/watch?v=lUe_RI_m-Vg
[4] Epithelium - Wikipedia https://en.wikipedia.org/wiki/Epithelium
[5] Physiology, Epithelialization - StatPearls - NCBI Bookshelf https://www.ncbi.nlm.nih.gov/books/NBK532977/
[6] 4.2 Epithelial Tissue - Anatomy and Physiology 2e | OpenStax https://openstax.org/books/anatomy-and-physiology-2e/pages/4-2-epithelial-tissue
[7] Epithelial Tissue: What Is It, Where It's Found, and More | Osmosis https://www.osmosis.org/answers/epithelial-tissue
[8] Epithelial and connective tissue (video) - Khan Academy https://www.khanacademy.org/test-prep/mcat/cells/eukaryotic-cells/v/epithelial-and-connective-tissue
[9] Types of Tissue Part 1: Epithelial Tissue - YouTube https://www.youtube.com/watch?v=oe-Z9t0KBfU



[[Med roots]]
[[Appendix A Prefixes]]
[[Appendix B Combining Forms]]
[[Appendix C Suffixes]]
[[Appendix D Suffix forms]]
