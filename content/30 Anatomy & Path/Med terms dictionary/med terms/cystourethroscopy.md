---
tags:
  - medterm
  - medroot
  - urology
  - specialty/urology
aliases:
  - cystoscopy
roots:
  - cystourethroscopy
  - cyst-
  - cysto-
  - urethr-
  - -scopy
forms:
  - prefix
  - suffix
  - combining
  - noun
alphabet: C
definition:
  - direct visualization of the urethra and bladder via a cystoscope
---
>[!Note] DEFINITION of [[cystourethroscopy]]
>[[cystourethroscopy]] is **an endoscopic procedure using a [[cystoscopy|cystoscope]] to visualize the urethra and bladder lining for diagnosis or treatment**. **Cystourethroscopy** (also called [[cystoscopy]]) involves inserting a thin, lighted endoscope ([[cystoscopy|cystoscope]], 12-30 Fr) through the urethra into the bladder after local anesthesia (*lidocaine jelly*), **irrigating with saline to distend the bladder, and inspecting for abnormalities like tumors, stones, [[strictures]], [[trabeculation]], [[diverticula]], or prostate enlargement**; therapeutic tools can biopsy, resect (**TURBT**), fulgurate, or stent via the working channel.
_____
>[!info]+ ETYMOLOGY of [[cystourethroscopy]]
>#greek
>•	[[Cysto-]]: Greek *kústis* (κύστις) = “**bladder, bag**.”
>	•	[[Urethro-]]: Greek *ourēthra* (οὐρήθρα) = “[[urethra]]” (from ouron “**urine**” + thra “**passage**”).
>	•	[[-scopy]]: Greek *skopeîn* = “**to examine, look at**.”
>	•	**Literal**: “Bladder-urethra examination.”
_____
>[!tip]+ DERIVATIONS of [[cystourethroscopy]]
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

## Coding Context

**CPT Codes (52000 series):**[11]
| Code      | Description                                      |
|-----------|--------------------------------------------------|
| **[[52000]]** | Cystourethroscopy (separate procedure).          |
| **[[52005]]** | w/ [[ureteral]] [[catheterization]].                     |
| **[[52204]]** | w/ biopsy(es).                                   |
| **[[52224]]** | w/ [[fulguration]] small tumor(s) (<0.5 cm).         |
| **[[52234]]** | w/ fulguration large tumor(s) (>0.5 cm).         |
| **[[52310]]** | w/ removal [[calculus]].                             |
| **[[52332]]** | w/ insertion indwelling [[ureteral stent]].          |

**ICD-10-PCS (Inpatient):**  
- **0TJB8ZZ** - Inspection of bladder, via natural or artificial opening endoscopic.  
- **0TJD8ZZ** - Inspection of urethra, endoscopic.[12]

**Diagnoses justifying:** [[N39.0]] (UTI), [[R32]] (incontinence), N20.x (stones), [[D49.4]] (bladder [[neoplasm]]).[13]

## Common Indications

- **Diagnostic:** [[Hematuria]], recurrent [[UTI]], [[incontinence]], irritative voiding, stones, suspected tumors/[[diverticula]].[1][2][3]
- **Therapeutic:** TURBT ([[transurethral]] [[resection]] bladder tumor), biopsy, stone removal, stricture dilation, foreign body extraction, stent placement.[4][1]
- **Male-specific:** Evaluate BPH/prostate, [[urethral stricture]].[6]

## Procedure Details

1. **Prep:** Antibiotics if UTI risk; hold anticoagulants; local jelly or sedation/general anesthesia.
2. **Insertion:** Urethra lubed/numbed; scope advanced (flexible office-based, rigid OR).
3. **Bladder fill:** Saline irrigation expands wall for 360° view.
4. **Duration:** 5-20 min office; longer if therapeutic.
5. **Post:** [[Dysuria]]/[[hematuria]] 1-2 days; rare fever/infection.[5][2][1]

## Related Terms

- **[[Cystoscopy]]:** Synonym (urethra often implied).  
- **[[ureteroscopy]]:** [[Ureter]]/renal pelvis ([[52351]] CPT).  
- **[[TURBT]]:** Therapeutic resection via cystoscope.  
- **[[Cystolitholapaxy]]:** Stone fragmentation ([[52317]] CPT).  
- **Complications:** UTI (10%), bleeding, perforation (<1%), stricture.[1][4]

**One-Sentence Summary**  
**Cystourethroscopy** (CPT [[52000]]), combining *[[cysto-]]* (**bladder**) + *[[urethro-]]* ([[urethra]]) + *[[-scopy]]* (examine), endoscopically inspects/ treats via urethral scope for [[hematuria]] (R31.2x), tumors ([[D41.8]]), or stones ([[N20.0]]), typically office-based with 52000-5235x CPT coding.[2][3][4][1]

Sources
[1] Cystoscopy - Mayo Clinic https://www.mayoclinic.org/tests-procedures/cystoscopy/about/pac-20393694
[2] Cystoscopy: Purpose, Procedure, Risks & Recovery - Cleveland Clinic https://my.clevelandclinic.org/health/diagnostics/16553-cystoscopy
[3] Cystourethroscopy - UROGYN Savannah https://urogynsavannah.com/diagnostics-treatment/cystourethroscopy/
[4] Cystoscopy - StatPearls - NCBI Bookshelf https://www.ncbi.nlm.nih.gov/sites/books/NBK493180/
[5] Cystoscopy - UCSF Benioff Children's Hospitals https://www.ucsfbenioffchildrens.org/medical-tests/cystoscopy
[6] Cystoscopy for Men - UR Medicine - University of Rochester https://www.urmc.rochester.edu/encyclopedia/Content?contentTypeID=92&ContentID=P07771
[7] Cystoscopy (overactive bladder) - YouTube https://www.youtube.com/watch?v=0faFfYsaOKs
[8] About Your Cystoscopy in the Operating Room https://www.mskcc.org/cancer-care/patient-education/about-your-cystoscopy
[9] Cystoscopy | Cigna https://www.cigna.com/knowledge-center/hw/medical-tests/cystoscopy-hw210556
[10] What is a cystoscopy? | MD Anderson Cancer Center https://www.mdanderson.org/cancerwise/what-is-a-cystoscopy.h00-159699123.html
[11] Medical Coding Cardiac Catheterization https://codingclarified.com/medical-coding-cardiac-catheterization/
[12] Cardiac Catheterization Coding in ICD-10-PCS https://hiacode.com/blog/education/cardiac-catheterization-coding-in-icd-10-pcs
[13] Oncology ICD-10 Codes - Cancer Therapy Advisor https://www.cancertherapyadvisor.com/home/tools/oncology-icd10-codes/


[[Med roots]]
[[Appendix A Prefixes]]
[[Appendix B Combining Forms]]
[[Appendix C Suffixes]]
[[Appendix D Suffix forms]]