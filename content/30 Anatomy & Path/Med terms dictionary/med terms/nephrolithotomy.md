---
tags:
  - medterm
  - urology
  - specialty/urology
aliases:
  - Nephrolithotomy
roots:
  - nephrolithotomy
  - nephr-
  - nephro-
  - -litho-
  - lith-
  - -otomy
forms:
  - prefix
  - suffix
  - combining
  - noun
alphabet: N
definition:
  - incision into the kidney
---
>[!Note] DEFINITION of [[nephrolithotomy]]
>[[nephrolithotomy]] is a **surgical procedure to remove kidney stones ([[calculi]]) through an incision into the kidney or renal pelvis**. **Nephrolithotomy** is the surgical removal of kidney/upper [[ureteral stones]] via direct incision, most commonly [[percutaneous]] nephrolithotomy (**PCNL**) where a tract is created through the flank skin to the collecting system under fluoro/ultrasound guidance, dilating to 24-30 Fr for [[nephroscope]] access, fragmentation (laser/ultrasonic [[lithotripsy]]), and extraction/basketing; reserved for large (>2 cm), [[staghorn]], or complex stones after failed **ESWL**/[[ureteroscopy]].
_____
>[!info]+ ETYMOLOGY of [[nephrolithotomy]]
>#greek
>•	[[Nephro-]]: Greek *nephrós* (νεφρός) = “**kidney**.”
>	•	[[Litho-]]: Greek *líthos* (λίθος) = “**[[calculus|stone]]**.”
>	•	[[-tomy]]: Greek *tomḗ* (τομή) = “**incision, cutting**.”
>	•	**Literal**: “**Kidney stone cutting/incision**” (*coined 19th century*).
_____
>[!tip]- DERIVATIONS of [[nephrolithotomy]]
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

## CPT Coding

**Primary Codes ([[50060]]-[[50081]]):**[3][6][2][4][1]
| Code    | Description (Stone Size/Complexity)                          | RVU/Notes                     |
|---------|--------------------------------------------------------------|-------------------------------|
| **50060** | Nephrolithotomy; complicated/extended pyelolithotomy (*open*). | Open approach.               |
| **[[50080]]** | [[Percutaneous nephrolithotomy]]/[[pyelolithotomy]] ≤2 cm (*simple*). | Includes [[dilation]], [[lithotripsy]], [[stent]]/tube. |
| **50081** | Percutaneous nephrolithotomy/pyelolithotomy >2 cm/complex ([[staghorn]], branching). | High complexity; mutually exclusive w/50080. |

**Access/Dilation Add-ons (if separate):**  
- **[[50395]]** - Establish percutaneous [[nephrostomy]] tract.  
- **[[50436]]/[[50437]]** - Dilation of existing tract (NCCI edits apply).[5][2]

**Modifiers:** [[-22]] (increased work), [[-51]] (multiple), [[-66]] (team).[1]

**ICD-10-PCS:**  
- **0TC03ZZ** - Resection kidney stone percutaneous.[7]

**Diagnoses:** [[N20.0]] (kidney/ureter [[calculus]]).[8]

## Procedure Types

- **Open Nephrolithotomy (50060):** Flank incision; rare (<1% cases).  
- **[[percutaneous]] Nephrolithotomy (PCNL, [[50800]]/81):** Prone/supine; tract via 18G needle → Amplatz dilators → [[nephroscope]]; mini-PCNL (14-20 Fr tracts).[2][4]
- **Endourologic:** Flexible [[nephroscopy]] via tract.[4]

**Indications:** Stones >2 cm, staghorn, **ESWL** failure, morbid obesity, abnormal anatomy.[2]

## Related Terms

- **[[Nephrolithiasis]]:** Kidney stones (presence).  
- **[[Pyelolithotomy]]:** Incision into renal pelvis (subset).  
- **ESWL:** Extracorporeal shock wave [[lithotripsy]] (non-[[invasive]]).  
- **[[ureteroscopy]] (URS):** Endoscopic for lower stones.  
- **Staghorn Calculi:** Branching [[struvite]] stones ([[50081]]).  

**Complications (5-30%):** Bleeding (transfusion 1-5%), infection/[[sepsis]] (3%), pleural injury ([[supracostal]]), colon perforation; Clavien III+ ~10%.[2]

**Outcomes:** [[stone]]-free rate 75-95% (complex cases lower); hospital stay 1-3 days.

**One-Sentence Summary**  
**Nephrolithotomy** (Greek *nephro[[-litho-]][[-tomy]]* “**kidney-stone-cut**”), primarily PCNL (CPT [[50080]] simple ≤2 cm / [[50081]] complex >2 cm), surgically extracts large renal [[calculi]] (**N20.0**) via percutaneous flank tract with lithotripsy/stenting for staghorn/**ESWL** failures.



[[Med roots dictionary]]
[[Appendix A Prefixes]]
[[Appendix B Combining Forms]]
[[Appendix C Suffixes]]
[[Appendix D Suffix forms]]