---
tags: [medterm]
aliases: 
roots: ["catheterization"]
forms: [prefix, suffix]
alphabet: C
definition: [insertion of a catheter (thin tube)]

---
>[!Note] DEFINITION of [[catheterization]]
>[[catheterization]] is the [[percutaneous]] or surgical insertion of a [[catheter]] into **vessels, heart chambers, bladder, or ducts to measure pressures, inject contrast, drain fluids, or deliver therapy**. **Catheterization** involves advancing a flexible tube (catheter) via a peripheral access site (e.g., **femoral/groin artery/vein, radial artery, neck vein, urethra**) to targeted sites like coronary arteries, heart chambers (left/right), pulmonary arteries, or urinary bladder, enabling [[hemodynamic]] measurements, angiography (**contrast injection for imaging**), biopsy, [[angioplasty]]/stenting, or drainage. Common types include cardiac (diagnostic/therapeutic), urinary (Foley/straight cath), [[central venous]] (CVC), and peripheral arterial; it carries risks like bleeding, infection, [[arrhythmia]], [[embolism]], or vessel injury.
_____
>[!info]+ ETYMOLOGY of [[catheterization]]
>#latin 
>•	Catheter: Late *Latin* catheter from #Greek kathetēr (καθετήρ) = “**instrument to let something flow in**” or “**probe**,” from kathiénai = “**to let down/flow in**” ([[kata-]] “**down**” + *hiénai* “**to send**”).
>•	[[-ization]]: Suffix indicating “**process or action of**” (from Greek [[-sis]] via French/Latin).
>•	**Historical note**: First described by ancient Egyptians/Greeks (e.g., urinary catheters from papyrus); modern cardiac cath pioneered by Werner Forssmann (1929, self‑experiment).
_____
>[!tip]+ DERIVATIONS of [[catheterization]]
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

***

## Common Types and CPT Codes

**Cardiac Catheterization CPT Codes ([[93451]]-[[93461]], 935xx congenital):**[4][6][7][2][1]
| Code    | Description (Key Bundles: Catheter Placement, Injection, Imaging S&I)                  |  
|---------|---------------------------------------------------------------------------------------|  
| **[[93451]]** | **RHC** + coronary angiography + **LV** gram (if performed).                                 |  
| **[[93452]]** | **LHC** + coronary angiography + **LV** gram (if performed).                                 |  
| **[[93453]]** | **RHC** + pulmonary artery pressures (no coronary angio).                                |  
| **[[93456]]** | **RHC** + **LHC** (combined) + coronary angio + **LV** gram.                                     |  
| **[[93458]]** | **LHC** + coronary angio + **LV** gram (no **RHC**).                                             |  
| **[[92920]]-[[92944]]** | PCI ([[angioplasty]]/[[stents]]) bundled with diagnostic if same session.                     |  

**Urinary Catheterization CPT Codes:**[3]
| Code    | Description                                                 |  
|---------|-------------------------------------------------------------|  
| **[[51701]]** | Bladder instillation or straight cath for residual urine.   |  
| **[[51702]]** | Simple indwelling (Foley) catheter insertion.               |  
| **[[51703]]** | Complicated indwelling (stricture, obstruction).            |  

**Modifiers:** [[-22]] (increased work), [[-59]] (distinct procedure), [[-LT]]/[[-RT]] (lateral).[4][3]

***

## ICD-10 Coding

**ICD-10-PCS (Inpatient Procedure):**[8][2]
- **4A023N7** - Measure cardiac pressure/sampling, left heart, [[percutaneous]].  
- **4A023N6** - Right heart, percutaneous.  
- **4A023N8** - Bilateral (combined), percutaneous.  

**ICD-10-CM Diagnoses (support medical necessity):**[4]
- **I20.x** - [[Angina pectoris]].  
- **I21.x** - Acute MI.  
- **[[I25.1]]** - [[Atherosclerotic]] heart disease.  
- **I50.x** - Heart failure.  
- **[[N39.0]]** - UTI (urinary cath context).  
- **[[Z45.2]]** - Maintenance of [[vascular]] access (post‑cath).  

**No standalone ICD-10-CM for procedure** - use PCS for inpatient billing.[9][2]

***

## Related Terms

**Types of catheters/access:**  
- **RHC (Right Heart Cath):** RA/RV/PA pressures (pulmonary HTN, shunts).  
- **LHC (Left Heart Cath):** LV pressures, coronary arteries, ventriculography.  
- **CVC (Central Venous Cath):** **PICC**, tunneled (e.g., Hickman).  
- **Swan‑Ganz:** Pulmonary artery catheter for hemodynamics.  

**Complications (code separately):**  
- **[[T82.7xxA]]** - Infection/hemorrhage due to cardiac cath.  
- **[[I97.790]]** - Other postprocedural hemorrhage (circulatory system).  

**Alternatives:** Echocardiography (non‑invasive), CT/MR angiography.

***

## Clinical Details

**Indications:**  
- **Diagnostic:** Coronary artery disease, valve disease, [[cardiomyopathy]], congenital defects, pulmonary HTN.  
- **Therapeutic:** PCI (stents), [[valvuloplasty]], TAVR prep, [[electrophysiology]] studies.  
- **Urinary:** Retention, monitoring output (post‑op, [[neurogenic bladder]]).  

**Approach sites:** Femoral (common), radial (preferred for cardiac - lower bleeding risk), jugular/brachial, [[urethral]].[2][1]

**Documentation essentials (for coding):**  
- Access site/vessels catheterized.  
- Chambers/pressures measured/injected/imaged.  
- Findings (e.g., stenosis %, CTO).  
- Bundled: Dye injections, S&I (supervision & interpretation).[1][4]

**One‑Sentence Summary**  
**Catheterization** (CPT 9345x cardiac, 5170x urinary; ICD‑10‑PCS 4A02xNx) inserts a catheter via [[percutaneous]] access to diagnose/treat via [[angiography]]/[[hemodynamics]]/drainage, most commonly for CAD ([[I25.1]]) or urinary issues, bundling injections/imaging with risks like bleeding (T82.7).[6][2][3][1][4]

Sources
[1] Resuscitate Your Cardiac Catheterization Coding - AAPC https://www.aapc.com/blog/28538-resuscitate-your-cardiac-catheterization-coding/
[2] Cardiac Catheterization Coding in ICD-10-PCS https://hiacode.com/blog/education/cardiac-catheterization-coding-in-icd-10-pcs
[3] CPT Codes for Urinary Catheter Insertions | MBW RCM https://www.mbwrcm.com/the-revenue-cycle-blog/cpt-codes-urinary-catheter-insertions
[4] Medical Coding Cardiac Catheterization https://codingclarified.com/medical-coding-cardiac-catheterization/
[5] The etymology of microbial nomenclature and the diseases these ... https://pmc.ncbi.nlm.nih.gov/articles/PMC9562425/
[6] Cardiac Catheterization and Coronary Angiography (A52850) - CMS https://www.cms.gov/medicare-coverage-database/view/article.aspx?articleid=52850
[7] CARDIAC CATHETERIZATION CPT CODES FOR PART A AND B https://www.medicalbillersandcoders.com/blog/cardiac-catheterization-cpt-code-2020/
[8] Cardiac Catheterization Coding in ICD-10-PCS | AHIMA CEU https://hialearn.com/coding-course/cardiac-catheterization-procedure-coding-icd-10-pcs
[9] Oncology ICD-10 Codes - Cancer Therapy Advisor https://www.cancertherapyadvisor.com/home/tools/oncology-icd10-codes/
[10] [PDF] Billing and Coding Guidelines for Cardiac Catheterization ... - CMS https://downloads.cms.gov/medicare-coverage-database/lcd_attachments/30719_9/L30719_CV006_CBG_070111.pdf
[11] Medical Coding Services for Catheterization | Unity Connect https://unity-connect.com/our-resources/blog/medical-coding-software/
[12] Cardiac Catheterization - AI-Powered ICD-10 Documentation https://s10.ai/diagnoses/letter-C/cardiac_catheterization


[[Med roots]]
[[Appendix A Prefixes]]
[[Appendix B Combining Forms]]
[[Appendix C Suffixes]]
[[Appendix D Suffix forms]]