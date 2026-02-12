---
tags:
  - medterm
  - medroot
  - urology
  - specialty/urology
aliases:
  - pyelogram
roots:
  - pyelography
  - py-
  - pyel-
  - -graphy
  - -lo-
forms:
  - prefix
  - suffix
  - combining
  - noun
alphabet: P
definition:
  - X-ray visualization of the kidneys’ renal pelvis and ureters
---
>[!Note] DEFINITION of [[pyelography]]
>[[pyelography]] is **radiographic imaging of the renal pelvis, [[ureter]]s, and urinary tract using injected contrast dye.** [[pyelography]] encompasses techniques to **opacify the upper urinary tract (renal pelvis, calyces, ureters) for fluoroscopic/radiographic assessment of anatomy, function, obstructions, stones, or tumors**; primary types include [[intravenous]] [[pyelogram]] (IVP: systemic contrast excretion), retrograde [[pyelogram]] (cystoscopic [[ureteral catheter]] injection), and antegrade pyelogram ([[percutaneous nephrostomy]] injection).
_____
>[!info]+ ETYMOLOGY of [[pyelography]]
>#greek
>•	[[Pyelo-]]: Greek *pyelos* (πυελός) = “**basin, trough**” (*renal pelvis*).
>	•	[[-graphy]]: Greek *graphḗ* = “**writing, recording**.”
>	•	**Literal**: “**Basin imaging**” (*coined early 20th century with iodinated contrast*).
_____
>[!tip]+ DERIVATIONS of [[pyelography]]
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

## Types and CPT Codes

| Type                  | Method/Details                                      | CPT Code(s)                  |
|-----------------------|-----------------------------------------------------|------------------------------|
| **IVP/IVU**          | IV contrast → renal filtration/excretion (KUB timed series).[1][2] | **[[74400]]** (IVP), **[[74150]]** (CT [[urogram]] modern equiv). |
| **Retrograde**       | Cystoscopic ureteral catheter injection (no renal function).[7][8] | **[[52351]]** (w/[[ureteroscopy]]), **[[52005]]** (diagnostic). |
| **Antegrade**        | [[Percutaneous]] [[nephrostomy]] contrast injection.[5] | **[[50392]]** ([[nephrostogram]]), **[[50434]]** ([[fluoroscopy]]). |

**ICD-10-PCS:** **BT1D0ZZ** – Fluoroscopy urinary system.[9]

## Procedure Details

**IVP Protocol:**[1][2][4]
1. Scout KUB (pre-contrast).  
2. IV iodinated contrast (1–2 mL/kg).  
3. [[Nephrogram]] (1–5 min), [[pyelogram]] (5–15 min), [[ureter]]/bladder views.  
4. Compression/release films; post-void.  

**Indications:** [[Hematuria]], flank pain, stones ([[N20.0]]), obstruction ([[N13.8]]), congenital anomalies.[3]

## Related Terms

- **[[Urography]]:** Broader (kidney-bladder); IVU = IV pyelogram.  
- **[[Nephrogram]]:** Kidney [[parenchyma]] phase.  
- **[[Cystogram]]:** Bladder-only (VCUG 51600 CPT).  
- **CT Urogram:** Modern replacement (higher sensitivity).[2]

**Complications:** Contrast [[nephropathy]] (rare, hydrate), allergy (1%), UTI (retrograde).[4]

**Obsolescence Note:** IVP largely replaced by **CT urogram** (74178 CPT) for superior [[stone]]/tumor detection.[2]

**One-Sentence Summary**  
**Pyelography** (Greek *[[pyelo-]][[-graphy]]* “pelvis imaging,” CPT 74400 IVP), opacifies renal pelvis/ureters via IV/retrograde/antegrade contrast for stones ([[N20.0]]), obstruction, or hematuria, with IVP protocol capturing nephrogram/pyelogram phases.[7][1][2][4]

Sources
[1] Intravenous pyelogram - Mayo Clinic https://www.mayoclinic.org/tests-procedures/intravenous-pyelogram/about/pac-20394475
[2] Intravenous Pyelogram (IVP) - Radiologyinfo.org https://www.radiologyinfo.org/en/info/ivp
[3] Intravenous pyelogram: MedlinePlus Medical Encyclopedia https://medlineplus.gov/ency/article/003782.htm
[4] Intravenous Pyelogram - StatPearls - NCBI Bookshelf https://www.ncbi.nlm.nih.gov/books/NBK559034/
[5] Antegrade Pyelography | Clinical Keywords - Yale Medicine https://www.yalemedicine.org/clinical-keywords/antegrade-pyelography
[6] Definition of intravenous pyelography - NCI Dictionary of Cancer ... https://www.cancer.gov/publications/dictionaries/cancer-terms/def/intravenous-pyelography
[7] Retrograde Pyelogram: Procedure, Risks & Advantages https://my.clevelandclinic.org/health/treatments/22684-retrograde-pyelogram
[8] Retrograde Pyelography: Symptoms, Diagnosis & Treatment https://www.urologyhealth.org/urology-a-z/r/retrograde-pyelography
[9] Cardiac Catheterization Coding in ICD-10-PCS https://hiacode.com/blog/education/cardiac-catheterization-coding-in-icd-10-pcs


[[Med roots]]
[[Appendix A Prefixes]]
[[Appendix B Combining Forms]]
[[Appendix C Suffixes]]
[[Appendix D Suffix forms]]