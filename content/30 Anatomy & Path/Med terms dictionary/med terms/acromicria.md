---
tags:
  - medterm
  - medroot
aliases:
  - acromikria
roots:
  - acr-
  - acro-
  - micr-
  - -ia
forms:
  - combining
  - noun
"alphabet:": A
"definition:": abnormal smallness of the extremities
---
>[!note]+ Definition of [[acromicria]]
>**[[acr-]]o-[[micr-]][[-ia]]** - abnormal smallness of the extremities (**condition of small extremities**); **Acromicria** (also spelled *acromikria*) is a morphological and pathophysiological condition marked by the abnormal smallness and underdevelopment of the body's extremities, most notably the hands and feet, but occasionally involving the **ears, nose, and jaws**. It is the clinical opposite of [[acromegaly]]. **Acromicria** is rarely an isolated diagnosis; it is typically a phenotypic manifestation of a broader systemic, genetic, or endocrinological disorder. Most commonly, it is observed in pediatric patients with congenital syndromes such as **Prader-Willi syndrome, Down syndrome**, or in cases of severe growth hormone deficiency ([[hypopituitarism]]) leading to pituitary dwarfism.
___
>[!info]+ Etymology of [[acromicria]]
>- **[[acr/o-]]**: From Greek _akron_ or _akros_, meaning "**extremity**," "**highest point**," or "**tip**."
>    
>- **[[micr/o-]]**: From Greek _mikros_, meaning "**small**."
>    
>- **[[-ia]]**: Latin/Greek suffix meaning "**condition of**" or "**state of**."
>    
>- **Literal Meaning**: "Condition of small extremities."
>
____



> [!example]+ Coding & Documentation Nuances
> 
> - **<u>ICD-10-CM Sequencing & Selection</u>**:
>     
>     - There is no single, specific ICD-10-CM code for "acromicria" alone, as it is considered a clinical sign rather than a definitive disease process.
>         
>     - A coder must look for the **underlying etiology** or syndrome. For example, if the acromicria is attributed to Prader-Willi syndrome, code **[[Q87.11]] (Prader-Willi syndrome)** is assigned.
>         
>     - If it is a result of growth hormone deficiency, code **E23.0 (Hypopituitarism)** is utilized.
>         
>     - If it represents an isolated congenital limb reduction defect, codes from category **Q71.- (Reduction defects of lower limb)** or **Q73.- (Reduction defects of unspecified limb)** may be applicable depending on provider specification.
>         
> - **Excludes Notes**: Always check the Excludes1 and Excludes2 notes under the congenital anomaly chapters (Q00-Q99) to ensure the specific limb deformity and the underlying genetic syndrome can or cannot be coded together.
>     
> 
> **<u>Clinical Indicators</u>**
> 
> To support the coding of the underlying conditions associated with acromicria, a coder should look for:
> 
> - **Physical Examination Findings**: Anthropometric measurements documenting hand and foot lengths significantly below the normative percentiles for the patient's age and sex.
>     
> - **Endocrinology Reports**: Laboratory workups showing deficient serum Growth Hormone (GH) or Insulin-like Growth Factor 1 (IGF-1) levels.
>     
> - **Genetics/Pathology**: Cytogenetic testing or chromosomal microarray results confirming a syndrome (e.g., deletion on chromosome 15q11-q13 for Prader-Willi).
>     
> - **Radiology**: X-rays of the extremities showing delayed bone age or hypoplasia of the metacarpals, metatarsals, and phalanges.
>     
> 
> **<u>Related Terms & Differentials</u>**
> 
> - **[[Acromegaly]]**: A hormonal disorder resulting from too much growth hormone in adulthood, leading to the abnormal _enlargement_ of the hands, feet, and face (the clinical opposite of acromicria).
>     
> - **[[Brachydactyly]]**: An inherited condition characterized specifically by abnormally short fingers and toes. While patients with acromicria may have brachydactyly, acromicria implies a generalized smallness of the entire extremity, not just the digits.
>     
> - **[[Micromelia]]**: A congenital condition characterized by abnormally small and short limbs. Micromelia affects the entire limb (including long bones), whereas acromicria focuses on the distal extremities (hands/feet).
>     
> - **[[Hypopituitarism]]**: A condition in which the pituitary gland does not produce normal amounts of some or all of its hormones, directly leading to acquired acromicria if growth hormone is deficient during developmental years.
>     
> - **[[Achondroplasia]]**: A genetic disorder causing a specific type of short-limbed dwarfism (affecting the cartilage and bone growth of the proximal limbs like the humerus and femur), distinct from the distal extremity smallness seen in pure acromicria.

_____
>[!tip]- DERIVATIONS of [[acromicria]]
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


[[Med roots]]
[[Appendix A Prefixes]]
[[Appendix B Combining Forms]]
[[Appendix C Suffixes]]
[[Appendix D Suffix forms]]
