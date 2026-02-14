---
tags:
  - medroot
aliases: []
roots:
  - -otomy
forms:
  - suffix
alphabet: O
definition:
  - surgical incision into
  - cutting into or opening a structure
---

# **Suffix: -otomy**

## **Short Definition**
A surgical incision into an organ, tissue, or anatomical structure.

---

## **Long Definition**
The suffix **-otomy** refers to a **surgical procedure in which an incision is made into a body structure**. This incision may be temporary or permanent and is often performed to access deeper tissues, relieve pressure, drain fluid, explore anatomy, or prepare for a more definitive procedure.

Unlike **[[-ectomy]]** (removal) or **[[-plasty]]** (reconstruction), **-otomy** does **not** involve removing tissue. It simply means **opening** or **cutting into** a structure for diagnostic or therapeutic purposes.

In coding, recognizing **-otomy** helps confirm that the procedure performed was an **incision**, not an excision or repair — a distinction that directly affects CPT code selection.

---

## **Etymology**
- From #greek **tomē** (τομή) → “a cutting”
- From Greek verb **temnein** → “to cut”
- Combined with **o-** (linking vowel) to form **-otomy**, meaning “to cut into”

---

## **Related Terms**
| Term | Meaning | Notes for Coders |
|------|---------|------------------|
| **[[-ectomy]]** | Removal/excision | Tissue is removed, not just opened. |
| **[[-plasty]]** | Reconstruction/repair | Reshaping or rebuilding, not simply incising. |
| **[[-ostomy]]** | Creating a surgical opening | A permanent or semi-permanent stoma; not just an incision. |
| **[[-rrhaphy]]** | Suturing/repair | Closing tissue, not opening it. |
| **[[-lysis]]** | Loosening/freeing | Often performed *after* an -otomy to access structures. |

---

## **Common Medical Terms Using [[-otomy]]**

### **General Surgery**
- **[[Laparotomy]]** - Incision into the abdominal cavity  
- **[[Thoracotomy]]** - Incision into the chest cavity  

### **ENT**
- **[[Tracheotomy]]** - Incision into the trachea  
- **[[Phlebotomy]]** - Incision into a vein (commonly for blood withdrawal)  

### **Neurosurgery**
- **[[Craniotomy]]** - Opening the skull  

### **Obstetrics / Gynecology**
- **[[Episiotomy]]** - Incision of the perineum during childbirth  

---

## **Common Uses in Clinical Documentation**
You’ll see **[[-otomy]]** when the surgeon:

- Opens a cavity or organ for exploration  
- Creates temporary access to deeper structures  
- Drains fluid or abscesses  
- Relieves pressure (e.g., compartment syndrome)  
- Performs a diagnostic incision  

**Documentation clues**:
- “Incised”
- “Opened”
- “Explored”
- “Entered the cavity”
- “Access obtained via incision”

---

## **Coder’s Notes**
- Confirm **purpose**: incision vs. removal vs. repair.  
- Look for **approach** (open vs. percutaneous vs. endoscopic).  
- Identify whether the -otomy was **primary** or **incidental** (incidental openings are usually bundled).  
- Check for **additional procedures** performed through the incision.  

_____
>[!tip]+ DERIVATIONS of [[-otomy]]
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