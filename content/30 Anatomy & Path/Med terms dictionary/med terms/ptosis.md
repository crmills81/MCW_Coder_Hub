---
tags:
  - medterm
  - medroot
  - ophthalmology
  - specialty/ophthalmology
  - medical_coding
aliases: -ptosis
roots:
  - ptosis
  - -ptosis
  - -sis
forms:
  - prefix
  - suffix
alphabet: P
definition:
  - drooping of the upper eyelid over the eye
ICD-10 Code:
  - H02.401
  - H02.402
  - H02.403
  - H02.409
---
>[!Note] DEFINITION of [[ptosis]]
>Eyelid [[ptosis]] (also called [[blepharoptosis]]) is **when the upper lid droops, sags, or falls and may reduce or block vision depending on severity**.  It can be congenital (**present at birth**) or acquired later, and may relate to problems with the muscles/ligaments that raise the eyelid or with the nerves controlling them.​ Ptosis (**[[blepharoptosis]]**) refers to a drooping of the upper eyelid margin. It is clinically distinct from "[[dermatochalasis]]" (**excess skin**). Ptosis is caused by weakness or separation of the levator muscle or a nerve abnormality, whereas **dermatochalasis** is a skin-only issue.
>
>#### ICD-10-CM Code(s):
>**H02.40- - Unspecified ptosis of eyelid**
>- **Explanation:** This is the most common code for acquired ptosis. It requires a 6th digit for laterality: **[[H02.401]]** (**Right**), **[[H02.402]]** (**Left**), **[[H02.403]]** (**Bilateral**).
>	- **Use Case:** Standard age-related (**involutional**) drooping of the eyelid muscle.
>**[[Q10.0]] - Congenital ptosis**
>- **Explanation:** Used when the ptosis is present from birth due to improper development of the levator muscle.
    >- **Use Case:** Pediatric patients or adults with a documented lifelong history of the condition.
>- **H02.41- - Mechanical ptosis**
>- **Explanation:** Used when the eyelid is **drooping** because of a physical weight, such as a large cyst or tumor, pushing the lid down. Requires a 6th digit for laterality: **[[H02.411]]** (**Right**), **[[H02.412]]** (**Left**), **[[H02.413]]** (**Bilateral**).
>
>#### Related terms
>- **[[Blepharoptosis]]:** another term for eyelid [[ptosis]] (“**droopy eyelid**”).
>	- **[[-ptosis]] (suffix/ending):** used broadly for drooping/prolapse in terms like _[[nephroptosis]]_ (kidney drooping).​
>	- **BPES:** [[blepharophimosis]], ptosis, epicanthus inversus syndrome (a named syndrome where [[ptosis]] is a key feature).
_____
>[!info]+ ETYMOLOGY of [[ptosis]]
>#greek _Ptosis_ comes from Greek _**ptōsis**_, literally “*a falling/a fall*,” from a verb meaning “*to fall.*”​  
In medical word-building lists, _[[-ptosis]]_ is explicitly glossed as “*falling, drooping, downward placement, prolapse*,” reflecting that original sense.
_____
>[!tip]- DERIVATIONS of [[ptosis]]
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