---
tags:
  - medterm
  - coding-vault
  - medroot
  - otolaryngology
  - ENT
aliases:
  - temporal bone
  - temporal lobe
  - temporal artery
  - temporooccipital
roots:
  - tempor-
  - -al
forms:
  - adjective
  - anatomical region
alphabet: T
definition: Pertaining to the lateral region of the head (the temples), encompassing the temporal bone, the temporal lobe of the brain, and the associated neurovascular structures.
---
> [!note] DEFINITION of [[temporal]]
> 
> In medical terminology and anatomy, **temporal** is a regional descriptor referring to the lateral aspect of the skull (**the temples**). Because it is a topographical term, it modifies several distinct anatomical structures that require high specificity in medical coding:
> 
> 1. **The Temporal Bone:** A complex bilateral bone at the base and sides of the skull that houses the structures of the middle and inner ear (**hearing and equilibrium**). It consists of the squamous, [[tympanic]], mastoid, and petrous parts.
> 2. **The Temporal Lobe:** The region of the cerebral cortex located inferior to the lateral fissure, primarily responsible for processing auditory information, memory acquisition (**hippocampus**), and emotional regulation (**amygdala**).
> 3. **The Temporal Artery:** A major superficial artery of the head, branching from the external carotid artery, highly relevant in rheumatologic conditions like [[Giant Cell Arteritis]].
_____
>[!info]+ ETYMOLOGY of [[temporal]]
> #latin - **Latin Root:** _tempus_ (plural _tempora_), meaning "**the temples of the head**." Interestingly, _tempus_ also translates to "**time**." Classical anatomists believed the temples were the first place where the passage of time manifested (***via graying hair***), or alternatively, that a blow to this fragile area of the skull was the fastest way to end a person's "**time**" (***life***).
>    
>- **Suffix:** _[[-al]]_ (from Latin _[[-alis]]_), meaning "pertaining to."
>    
>- **Literal Meaning:** "*Pertaining to the temples*."
>
_____

> [!success]+ Coding & Documentation Nuances
> 
> - **ICD-10-CM:** Laterality is paramount. Conditions involving the temporal region almost always require specifying right, left, or bilateral.
>     
>     - _Examples:_ S02.1- (**Fracture of base of skull, including temporal bone**), G40.0- (**Localization-related (focal) (partial) idiopathic epilepsy and epileptic syndromes with seizures of localized onset [temporal lobe]**), [[M31.6]] (**Other giant cell arteritis / Temporal arteritis**).
>         
> - **ICD-10-PCS:** The term "**temporal**" does not usually appear as an independent body part in PCS. The coder must translate the anatomy.
>     
>     - _Brain:_ Coded to "**Cerebral Hemisphere**" (Central Nervous System). A partial temporal lobectomy is coded to **Root Operation: Excision** (cutting out or off, without replacement, a portion of a body part), whereas removing the entire hemisphere would be **Resection**.
>         
>     - _Bone:_ Coded to "Skull" (**Head and Facial Bones**).
>         
>     - _Artery:_ Coded to "*External Carotid Artery*" or its branches.
>         
> - **CPT:** Procedure codes are often specific to the structure. For example, CPT **[[37609]]** denotes a temporal artery biopsy (**often unilateral; modifier [[-50]] needed for bilateral**). Cranial procedures require identifying the approach, such as a "temporal craniotomy" or "infratemporal approach" to skull base lesions.
_____

> [!example]+ **Related Terms & Differentials**
> 
> - **[[Parietal]]:** Pertaining to the bones or brain lobes located superior and posterior to the temporal region. _Differential:_ Codes for parietal injuries/lobectomies map to different specific cerebral or cranial pathways than temporal ones.
>     
> - **[[Mastoid]]:** Pertaining specifically to the nipple-like downward projection of the temporal bone. _Differential:_ While technically part of the temporal bone, conditions like **mastoiditis** (H70.-) and procedures like mastoidectomy have entirely distinct CPT and ICD-10 codes due to their relationship with the middle ear.
>     
> - **[[Sphenoid]]:** A butterfly-shaped bone at the anterior base of the skull. _Differential:_ Often forms a junction with the temporal bone, but requires different coding, especially in endoscopic sinus surgeries or **transsphenoidal** **hypophysectomies**.
>     
> - **[[Temporomandibular]]:** Pertaining to the joint (TMJ) between the temporal bone and the mandible. _Differential:_ Coded specifically under musculoskeletal or dental/maxillofacial sections, distinct from pure temporal bone pathology.
>     
> - **[[Occipital]]:** Pertaining to the back of the head/skull. _Differential:_ Houses the visual cortex; completely different functional and diagnostic pathways from the temporal lobe's auditory/memory functions.
_____
>[!tip]- DERIVATIONS of [[temporal]]
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

![[Pasted image 20260309022207.png]]

---

![[Pasted image 20260309022252.png]]


[[Med terms dictionary]]
[[Appendix A Prefixes]]
[[Appendix B Combining Forms]]
[[Appendix C Suffixes]]
[[Appendix D Suffix forms]]