---
tags:
  - medroot
  - medterm
  - surgery
  - urology
  - ophthalmology
  - otolaryngology
aliases: []
roots:
  - -desis
  - -sis
  - -esis
forms:
  - suffix
  - suffix form
alphabet: D
definition:
  - surgical fusion
  - binding or stabilization of a structure
---

# **Suffix: [[-desis]]**

## **Short Definition**
Surgical fusion or stabilization of a joint, bone, or anatomical structure.

---

## **Long Definition**
The suffix **[[-desis]]** refers to a **surgical procedure in which two structures are fused, fixed, or stabilized**. This may involve bone grafts, hardware, sutures, or other fixation techniques. The goal is to eliminate motion, restore stability, correct deformity, or relieve chronic pain.

In medical coding, **[[-desis]]** indicates a **fusion procedure**, which is distinct from repairs (**[[-rrhaphy]]**), reconstructions (**[[-plasty]]**), or incisions (**[[-otomy]]**). Fusion procedures often involve multiple CPT components, including:

- Bone grafts  
- Hardware placement  
- Imaging guidance  
- Additional stabilization techniques  

---

## **Etymology**
- From #greek **desis** (δέσις) → “a binding or fastening”
- From Greek verb **dein** → “to bind or tie”
- Used in medical terminology to describe **surgical fixation or fusion**

---

## **Related Terms**
| Term | Meaning | Notes for Coders |
|------|---------|------------------|
| **[[-plasty]]** | Reconstruction/reshaping | Not intended to fuse or immobilize. |
| **[[-rrhaphy]]** | Suturing/repair | Soft-tissue repair, not fusion. |
| **[[-pexy]]** | Surgical fixation | Similar but usually refers to organ fixation, not bone/joint fusion. |
| **[[-otomy]]** | Incision | Opening tissue, not stabilizing it. |
| **[[arthrodesis]]** | Joint fusion | Most common [[-desis]] term in orthopedics. |

---

## **Common Medical Terms Using [[-desis]]**

### **Orthopedic**
- **[[Arthrodesis]]** – Fusion of a joint (e.g., ankle, spine, wrist)  
- **[[Syndesmosis]]** – Fusion or stabilization of bones connected by ligaments  

### **Podiatry**
- **[[Tarsodesis]]** – Fusion of tarsal bones  
- **[[Hallux interphalangeal joint desis]]** – Fusion of the big toe joint  

### **Hand Surgery**
- **[[Carpodesis]]** – Fusion of carpal bones  

---

## **Common Uses in Clinical Documentation**
You’ll see **[[-desis]]** when the surgeon:

- Eliminates painful or unstable joint motion  
- Stabilizes fractures or deformities  
- Corrects chronic instability  
- Fuses bones after arthritis or trauma  
- Uses grafts or hardware to achieve fusion  

**Documentation clues**:
- “Fused”
- “Stabilized”
- “Immobilized”
- “Joint prepared for fusion”
- “Bone graft placed”
- “Hardware inserted for fixation”

---

## **Coder’s Notes**
- Identify **which joint or bones** were fused — CPT codes are highly specific.  
- Look for **bone grafts** (autograft vs. allograft) — may be separately billable.  
- Confirm **approach** (open vs. percutaneous).  
- Check for **hardware placement** (plates, screws, rods).  
- Fusion procedures often require **imaging guidance** — sometimes separately reportable.  

_____
>[!tip]+ DERIVATIONS of [[-desis]]
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
