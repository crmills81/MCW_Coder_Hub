---
tags:
  - medterm
  - medroot
  - ophthalmology
  - specialty/ophthalmology
aliases:
  - anterior uveitis
roots:
  - Iridocyclitis
  - irid-
  - -cy
  - -cyclitis
  - -itis
  - -is
forms:
  - prefix
  - suffix
  - combining
  - noun
alphabet: I
definition:
  - inflammation of the iris and ciliary body
---
>[!Note] DEFINITION of [[Iridocyclitis]]
>[[Iridocyclitis]] is **inflammation affecting both the iris and [[ciliary body]], classified as [[anterior uveitis]].** [[Iridocyclitis]], the most common form of anterior uveitis, involves acute or chronic inflammation of the [[anterior uvea]] (iris + ciliary body), leading to anterior chamber cells/flare, keratic precipitates, synechiae (*posterior/anterior*), and potential complications like [[glaucoma]], [[cataracts]], or [[macular edema]]; often [[idiopathic]] (50%), but linked to **HLA-B27**, infections (**HSV**, **TB**), or systemic diseases (JIA, [[ankylosing spondylitis]], [[sarcoid]]). 
_____
>[!info]+ ETYMOLOGY of [[Iridocyclitis]]
>#greek
>•	[[Irido-]]: Greek íris, [[írid-]] (ἶρις) = “**rainbow, iris (colored circle)**.”
>	•	[[Cyclo-]]: Greek *kúklos* (κύκλος) = “**circle**” (**ciliary body circular muscle**).
>	•	[[-itis]]: Greek = “**inflammation**.”
>	•	**Literal**: “Iris-circle inflammation” (*coined 19th century*).
_____
>[!tip]+ DERIVATIONS of [[Iridocyclitis]]
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

## Coding Context

**ICD-10-CM:**  
| Code      | Description                                      |
|-----------|--------------------------------------------------|
| **[[H20.9]]** | Unspecified iridocyclitis.                      |
| **[[H20.0]]** | Primary iridocyclitis (acute).                  |
| **[[H20.1]]** | Chronic iridocyclitis.                          |
| **[[H20.2]]** | Secondary iridocyclitis (post-op/infectious).   |

**Associated:** [[M08.2]] (**JIA**), [[M45.9]] ([[ankylosing spondylitis]]), [[B00.81]] (**HSV**).[11]

## Clinical Features

**Symptoms:**[1][3][4]
- Unilateral > bilateral eye pain.  
- Ciliary flush ([[perilimbal]] injection).  
- [[Photophobia]], blurred vision.  
- [[Miosis]] (reactive spasm).  

**Slit-lamp signs:**  
- AC cells/flare (SUN grading).  
- **KP** (keratic precipitates, fine granulomatous vs. large non-granulomatous).  
- Posterior synechiae (iris-lens adhesions).  
- [[Hypopyon]] (pus layer, severe).  

**Types:** Acute ([[iritis]]), chronic (**JIA**), [[granulomatous]] (**TB**), non-granulomatous (HLA-B27).[4]

## Related Terms

- **Iritis:** Iris-only (subset).  
- **Uveitis:** General uveal inflammation (anterior/intermediate/posterior/pan).  
- **Keratic Precipitates (KP):** Inflammatory cells on cornea.  
- **Synechiae:** Adhesions (posterior: pupil; anterior: iris angle).  
- **SUN Criteria:** Standardization of Uveitis [[Nomenclature]] (cell/flare grading).  

**Causes:** Idiopathic (50%), HLA-B27 (25%), JIA (children), infections, [[sarcoid]], IBD.[3][1]

## Management and Complications

**Treatment:**  
- **[[Cycloplegics]]:** Atropine/cyclopentolate (**dilate, break synechiae, relieve spasm**).  
- **Steroids:** Prednisolone acetate 1% qid (**taper**).  
- **[[Periocular]]/systemic:** For non-responders.  
- **Treat systemic:** Methotrexate (JIA), biologics (TNF-i).  

**Complications:** [[Glaucoma]] (angle closure), [[cataract]], band [[keratopathy]], [[macular]] edema, vision loss.[3][4]

**Prognosis:** Excellent acute; chronic risks scarring (monitor **IOP, OCT**).[1]

**One-Sentence Summary**  
**[[Iridocyclitis]]** ([[H20.9]], Greek *[[iris-]] kuklos [[-itis]]*), anterior uveitis inflaming iris/[[ciliary body]], presents with pain/[[photophobia]]/AC cells (SUN graded), managed via steroids/cycloplegics; idiopathic or **HLA-B27/JIA**-associated with synechiae/glaucoma risks.[7][4][1][3]

Sources
[1] Iridocyclitis: Causes, symptoms and treatments - All About Vision https://www.allaboutvision.com/conditions/infections-allergies/iridocyclitis/
[2] Iridocyclitis: What Is It, Causes, Diagnosis, Treatment, and More https://www.osmosis.org/answers/iridocyclitis
[3] Iridocyclitis: What It Is, Symptoms & Treatments - Cleveland Clinic https://my.clevelandclinic.org/health/diseases/iridocyclitis
[4] Iridocyclitis: What is it? Causes and Treatment https://beacheye.com/blog/iridocyclitis-what-is-it-causes-and-treatment/
[5] A to Z: Iridocyclitis - - Dayton Children's Hospital https://childrensdayton.org/kidshealth/az-iridocyclitis/
[6] Iridocyclitis – Knowledge and References - Taylor & Francis https://taylorandfrancis.com/knowledge/Medicine_and_healthcare/Immunology/Iridocyclitis/
[7] IRIDOCYCLITIS Definition & Meaning | Merriam-Webster Medical https://www.merriam-webster.com/medical/iridocyclitis
[8] iridocyclitis | Taber's Medical Dictionary https://www.tabers.com/tabersonline/view/Tabers-Dictionary/764998/all/iridocyclitis?q=eye
[9] Iridocyclitis - an overview | ScienceDirect Topics https://www.sciencedirect.com/topics/medicine-and-dentistry/iridocyclitis
[10] Iridocyclitis | Profiles RNS - The University of Chicago https://profiles.uchicago.edu/profiles/profile/29559
[11] Oncology ICD-10 Codes - Cancer Therapy Advisor https://www.cancertherapyadvisor.com/home/tools/oncology-icd10-codes/


[[Med roots]]
[[Appendix A Prefixes]]
[[Appendix B Combining Forms]]
[[Appendix C Suffixes]]
[[Appendix D Suffix forms]]