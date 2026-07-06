---
tags:
  - CPT
  - coding
cpt_code: <% tp.file.title %>
description: <% tp.user.prompt("Brief Description") %>
global_days: <% tp.user.prompt("Global Period", ["000", "010", "090", "XXX", "ZZZ"]) %>
aliases:
---

# CPT <% tp.file.title %>: <% tp.user.prompt("Short Procedure Name") %>

## !Note PROCEDURE DEFINITION
**Code Description:** 
> <% tp.user.prompt("Full CPT Descriptor") %>

**Clinical Responsibility:**
- Highlights of what the physician must document (e.g., approach, specific anatomy like the *meatus* or *maxilla*).
- Key inclusions/exclusions (e.g., "Includes local anesthesia; do not report with...").

## !info MEDICAL ROOTS & TERMINOLOGY
| Component | Type | Meaning |
| :--- | :--- | :--- |
| **<% tp.user.prompt("Root 1") %>** | Root | <% tp.user.prompt("Meaning 1") %> |
| **<% tp.user.prompt("Root 2") %>** | Root | <% tp.user.prompt("Meaning 2") %> |
| **<% tp.user.prompt("Suffix") %>** | Suffix | <% tp.user.prompt("Suffix Meaning") %> |

## !example CODING GUIDELINES & MODIFIERS
- **Common Modifiers:** -RT/-LT (Bilateral), -50, -51, -59/XS.
- **CCI Edits:** Check for mutually exclusive codes in the <% tp.date.now("YYYY") %> NCCI tables.
- **Cross-Reference:** Linked to ICD-10-CM <% tp.user.prompt("Primary DX Code") %> for medical necessity.

## !tip BILLING NOTES (Etsy Seller Brain)
- **Time Spent:** Average pre/intra/post-op time.
- **RVU Value:** Work RVU: <% tp.user.prompt("wRVU") %> | Total RVU: <% tp.user.prompt("Total RVU") %>
- **Documentation Tip:** Look for "quantifiable" elements like volume (for urology) or size/depth (for oto).

---
### Related CPT Codes
```dataview
TABLE description AS Description, global_days AS Global
FROM #CPT
WHERE cpt_code != this.cpt_code
SORT cpt_code ASC
```


### How to use this for your specialties
1.  **Ophthalmology:** When the prompt asks for a "Root," you might use **ocul-** (eye) or **ophthalm-** (eye) and suffixes like **-plasty** (repair) for eyelid procedures.
2.  **Otolaryngology:** Use roots like **oto-** (ear), **rhin-** (nose), or **laryng-** (throat). For example, a note for CPT 31255 would break down **ethmoid-** and **-ectomy**.
3.  **[[Urology]]:** Use roots like **[[nephr-]]** (kidney), **[[cyst-]]** (bladder), or **[[urethr-]]** (urethra). A note for a TURP (52601) would link to **trans-** (through) and **-urethr-**.

