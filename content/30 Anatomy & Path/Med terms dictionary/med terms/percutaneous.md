---
tags:
  - medterm
  - medroot
aliases:
roots:
  - percutaneous
  - per-
  - -eous
  - -ous
  - -neous
forms:
  - prefix
  - suffix
  - adjective
  - combining
alphabet: P
definition:
  - performed through the skin
---
>[!Note] DEFINITION of [[percutaneous]]
>[[percutaneous]] describes **procedures, access, or drug delivery passing through the skin without surgical incision (e.g., needle sticks, catheters)**. **Percutaneous** (adj.) refers to methods effecting entry, intervention, or absorption via skin puncture using **needles, wires, sheaths, or devices, often employing the Seldinger technique** (**needle → guidewire → catheter over wire**), minimizing invasiveness compared to open surgery; examples span [[vascular]] access ([[angiography]]/PCI), biopsies, drainages ([[nephrostomy]]), [[gastrostomy]] (**PEG**), [[nephrolithotomy]] (**PCNL**), and transdermal patches.
_____
>[!info]+ ETYMOLOGY of [[percutaneous]]
>#latin
>•	Per-: Latin per = “**through**.”
>	•	[[cutaneous]]: *Latin* cutis = “**skin**” (PIE keu(t)- “**to cover, conceal**”).
>	•	**Coined**: 1862 as percutaneus (“**through the skin**”).
>	•	**Pronunciation**: /ˌpɜr kjuˈteɪ ni əs/ (“per-kyoo-TAY-nee-us”).
_____
>[!tip]- DERIVATIONS of [[percutaneous]]
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

## Common Applications Table

| Procedure                  | Description                                              |
|----------------------------|----------------------------------------------------------|
| **PCI (Percutaneous Coronary Intervention)** | [[Catheter]]/[[stent]] via femoral/radial artery.[3]     |
| **PEG (Percutaneous Endoscopic Gastrostomy)** | Feeding tube through abdominal wall.                   |
| **PCNL (Percutaneous Nephrolithotomy)** | Kidney stone removal via flank puncture.                |
| **Biopsy (Percutaneous)** | Needle core/aspiration (liver/lung/breast).             |
| **Drainage**              | [[abscess]]/[[nephrostomy]]/pigtail pleural.                    |
| **Transdermal**           | Patches/creams (nicotine, fentanyl).[1]           |

## Coding Context

**No standalone CPT/ICD code** - modifier for **approach**:

**CPT Modifiers:**  
- **[[-53]]** (discontinued [[percutaneous]] procedure).  
Embedded in codes:  
- **[[37213]]** - [[percutaneous]] IVUS.  
- **[[52301]]** - [[Cystourethroscopy]] w/percutaneous [[nephrostomy]].  

**ICD-10-PCS Approach Value:**  
- **Percutaneous (3)** - Via skin puncture (e.g., 0TJB3ZZ bladder inspection percutaneous).[6]

**ICD-10-CM Complications:**  
- **[[T80.218A]]** - Infection due to percutaneous [[vascular]] cath.  
- **[[T81.43xA]]** - Infection post percutaneous drainage.[7]

## Related Terms

- **[[Transcutaneous]]:** Similar, through skin (**non-puncture, e.g., pacing**).  
- **Seldinger Technique:** Standard percutaneous vascular access (**needle/wire/sheath**).[3]
- **Minimally Invasive:** Broader category including percutaneous.  
- **Open/Surgical:** Contrast (**larger incision**).  
- **Examples:** **PTCA** (**percutaneous transluminal coronary angioplasty**), **PTA** (peripheral).  

**Advantages:** Reduced pain, infection, recovery time vs. open.[3]
**Risks:** Bleeding, infection, vessel injury (mitigated by ultrasound).[3]

**One-Sentence Summary**  
**Percutaneous** (Latin *per cutem* “**through skin**,” coined 1862), denotes needle-puncture access (ICD-10-PCS approach “3”) for minimally [[invasive]] procedures like PCI or biopsies, contrasting open surgery via Seldinger method.[2][1][3]



[[Med roots dictionary]]
[[Appendix A Prefixes]]
[[Appendix B Combining Forms]]
[[Appendix C Suffixes]]
[[Appendix D Suffix forms]]