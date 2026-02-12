---
tags:
  - " #medroot"
  - specialty/ophthalmology
  - medterm
  - ophthalmology
  - medroot
aliases: []
roots:
  - Blepharo-
  - plast-
  - blephar-
  - -plasty
forms:
  - noun
  - combining
  - prefixes
  - suffixes
"alphabet:": b
definition:
  - Eyelid repair surgery
  - (often) one side of the body
  - eyelid
cpt:
  - "15820"
  - "15821"
  - "15822"
  - "15823"
---
>[!Note] DEFINITION of [[blepharoplasty]]
>Surgical repair or reconstruction of the eyelid, often to correct drooping ([[ptosis]]) or remove excess skin. [[Blepharoplasty]] is a surgical procedure that improves the appearance of the eyelids by removing **drooping skin** from upper lids and reducing the look of tired eyes or "*bags*" from lower lids, sometimes **improving vision by treating loose skin that impairs it**.
>
>#### ICD-10-CM Code(s):
>**1. H02.83- – [[Dermatochalasis]] of eyelid:**
>- **Explanation:** This is the most common diagnosis for functional [[blepharoplasty]]. It refers to "*baggy*" or redundant skin of the eyelids.
>	- **Note:** Requires a 6th digit for laterality: **[[H02.831]]** (**Right upper**), **[[H02.832]]** (**Right lower**), **[[H02.834]]** (**Left upper**), **[[H02.835]]** (**Left lower**).
>- **2. H02.3- – [[Blepharochalasis]]:**
>- **Explanation:** Used when the eyelid skin is thin and wrinkled due to recurrent episodes of edema (swelling), often seen in younger patients.
>	- **Note:** Requires a 6th digit: **[[H02.31]]** (Right upper), **[[H02.34]]** (Left upper).
>- **3. H02.40- – Unspecified [[ptosis]] of eyelid:**
>- **Explanation:** Used when the eyelid margin itself is drooping. While [[blepharoplasty]] treats excess skin, it is often performed alongside or to address "[[pseudoptosis]]" caused by heavy skin.
>	- **Note:** Requires a 6th digit: **[[H02.401]]** (Right), **[[H02.402]]** (Left), **[[H02.403]]** (**Bilateral**).
_____
>[!info]+ ETYMOLOGY of [[blepharoplasty]]
>#Greek blepharon (**eyelid**) + *plassein* (to mold/form); _[[Blephar(o)-]]_ comes from Greek _blépharon_, meaning “**eyelid**.”  
_[[-plasty]]_ derives from Greek concepts meaning “*to form/mold*,” aligning with “**forming/repair**” surgery rather than simple incision. blepharoplasty(n.)::"surgical operation of making a new eyelid from transplanted skin," 1839, from blepharo-, from Greek blepharon "eyelid" (related to blepein "to look, see") + -plasty.
>
_____
>[!example]+ RELATED TERMS to [[blepharoplasty]]
>- **[[Blepharo-]] (combining form):** “**pertaining to the eyelid**,” seen in terms like _[[blepharitis]]_ and _[[blepharoplasty]]_.​
>- **[[ptosis]]:** drooping of the upper eyelid that may be assessed/managed alongside upper blepharoplasty in some patients.​
>- **[[Dermatochalasis]] / [[steatoblepharon]]:** age-related excess eyelid skin and prominent fat pads that often motivate evaluation for blepharoplasty.​
>- **Transconjunctival blepharoplasty / East Asian blepharoplasty:** specific technique/approach variants (e.g., internal lower-lid approach; creation or adjustment of a supratarsal fold in “double eyelid” surgery).

_____
>[!tip]+ DERIVATIONS of [[blepharoplasty]]
>```dataview
>TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name !=[[]].file.name
>SORT file.name ASC
>```
___
>[!faq]- Query
>```dataview
>TABLE definition AS Definition
>FROM #medroot
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```

[[Med roots dictionary]]