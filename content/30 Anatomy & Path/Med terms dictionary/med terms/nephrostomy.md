---
tags:
  - medterm
  - medroot
  - urology
  - specialty/urology
aliases:
  - ostomy
roots:
  - nephrostomy
  - nephr-
  - nephro-
  - -ectomy
  - -ostomy
  - -my
forms:
  - prefix
  - suffix
  - noun
  - combining
alphabet: N
definition:
  - percutaneous kidney puncture
---
>[!Note] DEFINITION of [[nephrostomy]]
>[[nephrostomy]] is **the creation of a surgical opening ([[ostomy]]) into the kidney for drainage or access, typically percutaneous**. Nephrostomy ([[percutaneous]] nephrostomy tube, **PCNT**) involves ultrasound/fluoro‑guided flank puncture (18G needle) into **[[renal]] [[calyx]] → guidewire → serial [[dilation]] → 8-14 Fr pigtail/locking‑loop [[catheter]] for urine diversion, relieving [[hydronephrosis]] from stones, strictures, tumors, or infection**; allows antegrade access for [[pyelography]], stenting, or [[biopsy]]; temporary (days-weeks) or [[palliative]].
_____
>[!info]+ ETYMOLOGY of [[nephrostomy]]
>#greek nephrectomy(n.)::"**excision of a kidney**," 1880, from [[nephro-]] "**kidney**" + [[-ectomy]] "**a cutting out**."
>•	[[Nephro-]]: Greek *nephrós* (νεφρός) = “**kidney**.”
>	•	[[-stomy]]: Greek *stóma* (στόμα) = “**mouth, opening.**”
>	•	**Literal**: “**Kidney opening**” (coined mid‑20th century for percutaneous technique).
_____
>[!tip]+ DERIVATIONS of [[nephrostomy]]
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

**Primary Codes:**[4][2][3][1]
| Code     | Description                                                                 |
|----------|-----------------------------------------------------------------------------|
| **[[50432]]** | Placement nephrostomy catheter percutaneous (incl. [[nephrostogram]], imaging). |
| **[[50433]]** | Placement [[nephroureteral]] [[catheter]] percutaneous (kidney to bladder).        |
| **[[50395]]** | Dilation/establish nephrostomy tract percutaneous (add‑on for PCNL).       |
| **[[50434]]** | Convert nephrostomy to [[nephroureteral]] catheter via existing tract.         |
| **[[50435]]** | Exchange nephrostomy/nephroureteral catheter via existing tract.           |
| **[[50389]]** | Removal nephrostomy tube w/fluoro.                                         |
| **[[50040]]** | Open nephrostomy/[[nephrotomy]] w/drainage (rare).                             |

**Imaging:** Bundled; [[75984]] nephrostogram if separate.[5]

## Procedure Steps (PCNT)

1. **Position:** Prone/oblique; US/fluoro locate [[calyx]].  
2. **Access:** 18-22G Chiba needle → urine aspirate/opacify.  
3. **Wire:** 0.035-0.038" J‑wire coiled in pelvis.  
4. **Dilate:** Fascial dilators or peel‑away sheath.  
5. **Tube:** Pigtail/lock catheter positioned; cap or drain.[3][1]

**Indications:** Acute obstruction ([[sepsis]], pain), **PCNL** access, antegrade stenting.[1]

## Related Terms

- **[[Nephrotomy]]:** Incision into kidney parenchyma ([[50040]] open).  
- **[[Nephroureteral Catheter]]:** Nephrostomy + ureteral stent extension ([[50433]]).  
- **PCNL:** Uses nephrostomy tract for stones ([[50080]]/81).  
- **[[Suprapubic Catheter]]:** Bladder analog ([[51100]] CPT).  

**Complications:** [[Hemorrhage]] (1-3%), infection (4%), dislodgement (10-20%), [[pneumothorax]] ([[supracostal]]).[3]

**Maintenance:** Flush daily, exchange q1-3mo, monitor output/color.[6]

**ICD-10-PCS:** **0T9530Z** - Drainage kidney percutaneous.[7]
**Diagnoses:** [[N13.9]] (obstruction), [[N20.0]] (stones).[8]

**One-Sentence Summary**  
**Nephrostomy** (Greek *[[nephro-]] [[-stomy]]* “kidney mouth,” CPT [[50432]] percutaneous placement), diverts urine via flank tube for obstruction/sepsis/PCNL access ([[N13.9]]), using Seldinger technique with bundled imaging.[2][4][1][3]

Sources
[1] CPT Code 50040: What It Is, Modifiers, Reimbursement - MD Clarity https://www.mdclarity.com/cpt-code/50040
[2] CPT® Code 50040 - Incision Procedures on the Kidney - AAPC https://www.aapc.com/codes/cpt-codes/50040
[3] Tactical Understanding of Urinary Therapeutic Procedure ... https://medlearn.com/tactical-understanding-of-urinary-therapeutic-procedure-coding/
[4] CPT® Code 50432 - Other Renal Introduction (Injection/ ... https://www.aapc.com/codes/cpt-codes/50432
[5] Percutaneous Procedure CPT Code Update - PMC - NIH https://pmc.ncbi.nlm.nih.gov/articles/PMC4859928/
[6] Urological Supplies - Policy Article (A52521) - CMS https://www.cms.gov/medicare-coverage-database/view/article.aspx?articleid=52521&ver=38
[7] Cardiac Catheterization Coding in ICD-10-PCS https://hiacode.com/blog/education/cardiac-catheterization-coding-in-icd-10-pcs
[8] Oncology ICD-10 Codes - Cancer Therapy Advisor https://www.cancertherapyadvisor.com/home/tools/oncology-icd10-codes/
[9] Clearing up confusion surrounding percutaneous ... https://www.urologytimes.com/view/clearing-up-confusion-surrounding-percutaneous-nephrolithotomy-coding
[10] 50040 - Nephrostomy, nephrotomy with drainage https://genhealth.ai/code/cpt4/50040-nephrostomy-nephrotomy-with-drainage
[11] [PDF] Percutaneous Nephrostolithotomy (PCNL) - Boston Scientific https://www.bostonscientific.com/content/dam/bostonscientific/Reimbursement/Urology/2015/2015%20PCNL%20Reimbursement%20Guide.pdf
[12] Nephrostomy, Nephroureteral Stent and Nephrolothotomy ... https://hialearn.com/coding-course/nephrostomy-nephroureteral-stent-nephrolothotomy-cpt




[[Med roots]]
[[Appendix A Prefixes]]
[[Appendix B Combining Forms]]
[[Appendix C Suffixes]]
[[Appendix D Suffix forms]]