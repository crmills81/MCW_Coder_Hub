---
tags:
  - medroot
aliases: []
roots:
  - -rrhaphy
  - -rrhaph-
forms:
  - suffix
alphabet: R
definition:
  - surgical suturing
  - surgical stitching or repair by suturing
---

# **Suffix: -rrhaphy**

## **Short Definition**
Surgical suturing or stitching of a tissue, organ, or anatomical structure.

---

## **Long Definition**
The suffix **[[-rrhaphy]]** refers to a **surgical procedure in which tissue is repaired by suturing**. This may involve stitching together torn structures, closing incisions, reinforcing weakened tissue, or restoring anatomical continuity after trauma or surgical separation.

In medical coding, **[[-rrhaphy]]** indicates that the surgeon performed a **repair using sutures**, not a reconstruction (**-plasty**) or removal (**-ectomy**). Recognizing this suffix helps confirm that the CPT code selected reflects a **suturing-based repair**, often categorized under simple, intermediate, or complex repair depending on the tissue type and depth.

---

## **Etymology**
- From ##greek **rhaphē** (ῥαφή) → “a seam, suture, stitching”
- From Greek verb **rháptein** → “to sew or stitch”
- Adopted into medical terminology to describe **surgical suturing techniques**

---

## **Related Terms**
| Term | Meaning | Notes for Coders |
|------|---------|------------------|
| **[[-plasty]]** | Surgical repair/reconstruction | More extensive reshaping; not limited to suturing. |
| **[[-pexy]]** | Surgical fixation | Secures an organ in place; not stitching tissue edges together. |
| **[[30 Anatomy & Path/Med terms dictionary/Med roots/-desis]]** | Fusion or binding | Used for joints or bones; not soft‑tissue suturing. |
| **[[-otomy]]** | Incision/cutting into | Opening tissue, not repairing it. |
| **[[-ectomy]]** | Removal/excision | Tissue is removed, not sutured. |

---

## **Common Medical Terms Using [[-rrhaphy]]**

### **General Surgery**
- **[[Herniorrhaphy]]** – Suturing and repair of a hernia defect  
- **[[Gastrorrhaphy]]** – Suturing of the stomach wall  

### **Orthopedic**
- **[[Tenorrhaphy]]** – Suturing of a tendon  
- **[[Myorrhaphy]]** – Suturing of muscle tissue  

### **Urology / Gynecology**
- **[[Cystorrhaphy]]** – Suturing of the bladder  
- **[[Colporrhaphy]]** – Suturing of the vaginal wall (often for prolapse repair)  

### **Trauma / Wound Repair**
- **[[Neurorrhaphy]]** – Suturing of a severed nerve  
- **[[Angiorrhaphy]]** – Suturing of a blood vessel  

---

## **Common Uses in Clinical Documentation**
You’ll see **-rrhaphy** used when the surgeon:

- Repairs torn tissue  
- Closes an incision or defect  
- Reattaches severed structures (e.g., tendons, nerves)  
- Reinforces weakened anatomical areas  
- Repairs trauma-related lacerations  

**Documentation clues**:
- “Sutured”
- “Reapproximated”
- “Edges brought together”
- “Closed with sutures”
- “Primary repair”
- “Reinforced with sutures”

---

## **Coder’s Notes**
- Confirm **tissue type** (skin, fascia, tendon, nerve) — CPT codes differ.  
- Look for **depth** and **complexity** of repair (simple vs. intermediate vs. complex).  
- Identify **trauma vs. surgical repair**, as this affects coding categories.  
- Check for **additional procedures** (e.g., debridement, grafts).  
- Laterality matters for tendon and nerve repairs.  

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
