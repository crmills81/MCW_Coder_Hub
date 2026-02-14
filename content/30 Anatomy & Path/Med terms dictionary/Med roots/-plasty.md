---
tags:
  - medroot
  - medterm
  - urology
  - ophthalmology
  - otolaryngology
aliases: []
roots:
  - -plasty
  - -plast
  - -plasto
forms:
  - suffix
alphabet: P
definition:
  - surgical repair
  - surgical reconstruction
  - reshaping or restoration of a body part
---

# **Suffix: -plasty**

## **Short Definition**

**[[-plasty]]** → Surgical repair, reconstruction, or reshaping of a body part.

---

## **Long Definition**

The suffix **[[-plasty]]** refers to a **surgical procedure performed to repair, restore, reshape, or reconstruct** a tissue or anatomical structure. This may involve altering the shape, improving function, correcting deformities, or restoring normal anatomy after trauma, disease, or congenital abnormalities. Procedures ending in **[[-plasty]]** often involve grafts, implants, reshaping, or removal of damaged tissue.

In coding, **[[-plasty]]** signals that the surgeon performed a **reconstructive or restorative** operation rather than a removal (**[[-ectomy]]**) or fixation ([[**-desis]]**). Understanding this suffix helps confirm that the CPT code selected aligns with the documented surgical intent.

---

## **Etymology**

- From ##greek **plastos** (πλαστός) → “formed, molded, shaped”
    
- Related to Greek verb **plassein** → “to form or fashion”
    
- Adopted into medical terminology to describe **reshaping or reconstructive** surgical techniques

---

## **Related Terms**

|Term|Meaning|Notes for Coders|
|---|---|---|
|**[[-ectomy]]**|Removal/excision|Opposite of reconstruction; tissue is removed, not reshaped.|
|**[[-rrhaphy]]**|Suturing/repair|Often used for closing or stitching, not reshaping.|
|**[[30 Anatomy & Path/Med terms dictionary/Med roots/-desis]]**|Surgical fusion|Stabilization rather than reconstruction.|
|**[[-pexy]]**|Surgical fixation|Securing an organ in place, not reshaping it.|
|**[[-otomy]]**|Cutting/incision|Opening tissue, not repairing or reconstructing.|
|**[[-oplasty]]**|Variant form of -plasty|Same meaning; used in some terms.|

---

## **Common Medical Terms Using -plasty**

### **Orthopedic Examples**

- **[[Arthroplasty]]** - Surgical reconstruction or replacement of a joint
    
- **[[Osteoplasty]]** - Surgical reshaping of bone
    
- **[[Rhinoplasty]]** - Reshaping of the nose (ENT but often orthopedic-adjacent in trauma cases)
    

### **Cardiovascular Examples**

- **[[Angioplasty]]** - Widening or repairing a blood vessel
    
- **[[Valvuloplasty]]** - Repair of a heart valve
    

### **General Surgery Examples**

- **[[Gastroplasty]]** - Reshaping of the stomach (e.g., bariatric surgery)
    
- **[[Herniaplasty]]** - Repair of a hernia defect
    

### **Plastic Surgery Examples**

- **[[Mammoplasty]]** - Reconstruction or reshaping of the breast
    
- **[[Blepharoplasty]]** - Eyelid reshaping
    

---

## **Common Uses in Clinical Documentation**

Coders will often see **[[-plasty]]** used in operative reports describing:

- **Reconstruction after trauma** (e.g., nasal fracture → [[rhinoplasty]])
    
- **Cosmetic or functional reshaping** (e.g., [[blepharoplasty]] for ptosis)
    
- **Restoration of normal anatomy** (e.g., arthroplasty for degenerative joint disease)
    
- **Repair of congenital defects** (e.g., [[valvuloplasty]] for congenital valve stenosis)
    
- **Minimally invasive vascular repairs** (e.g., balloon [[angioplasty]])
    

**Documentation clues** that signal a -plasty procedure:

- “Reconstructed”
    
- “Reshaped”
    
- “Repaired”
    
- “Restored”
    
- “Recontoured”
    
- “Implant placed”
    
- “Graft used to rebuild”
    

---

## **Coder’s Notes**

- **[[-plasty]] ≠ replacement unless specified.** Example: _arthroplasty_ may be partial or total — CPT selection depends on documentation.
    
- Look for **grafts, implants, or prosthetics** — these often affect coding and supply charges.
    
- Confirm **laterality** for orthopedic and ENT procedures.
    
- Verify **medical necessity** through diagnosis codes (e.g., [[osteoarthritis]] → [[arthroplasty]])

_____
>[!tip]+ DERIVATIONS of [[-rrhaphy]]
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
[[Appendix A Prefixes]]
[[Appendix B Combining Forms]]
[[Appendix C Suffixes]]
[[Appendix D Suffix forms]]