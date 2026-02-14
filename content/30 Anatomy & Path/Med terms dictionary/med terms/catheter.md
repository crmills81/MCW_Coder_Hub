---
tags:
  - medterm
  - medroot
aliases:
  - cath
  - catheters
roots:
  - catheter
  - cat-
  - cath-
  - -ter
  - -er
forms:
  - prefix
  - suffix
  - combining
  - noun
alphabet: C
definition:
  - a medical tube (soft/flexible or rigid) inserted into vessels
  - cavities
  - ducts
  - or organs
---
>[!Note] DEFINITION of [[catheter]]
>A [[catheter]] is **a thin, flexible tube inserted into the body to drain fluids, deliver medications, measure pressures, or perform interventions**. A **catheter** is a thin tube made of medical‑grade materials (**latex, silicone, polyurethane, Teflon**) serving functions like urinary drainage (**Foley**), [[vascular]] access (**IV/central lines**), cardiac angiography/[[hemodynamics]] (diagnostic/PCI), [[gastrointestinal]] decompression (**NG tube**), or specialized uses (e.g., pigtail for [[abscess]]/[[pneumothorax]] drainage, Cobra/Sidewinder for angiography). Types vary by stiffness, tip (**straight/Cou dé**), coatings ([[hydrophilic]]/silicone), and indwelling status (**temporary/permanent**); inserted via natural orifices, [[percutaneous]] sites, or surgically, with risks including infection (CAUTI/ CLABSI), [[thrombosis]], [[embolism]], and trauma.
_____
>[!info]+ ETYMOLOGY of [[catheter]]
>#latin
>•	Origin: Late Latin [[catheter]] from Greek *kathetēr* (καθετήρ) = “**let down/flow in” instrument**, from *kathiénai* = “**to send/let down**” ([[kata-]] “**down**” + *hiénai* “**to send/throw**”).
>	•	**First use**: c. 1600 (English), originally for urinary drainage; ancient Egyptians/Greeks used reed/metal probes.
>	•	**Pronunciation**: /ˈkæθətər/ (“KATH‑uh‑ter”).
_____
>[!tip]+ DERIVATIONS of [[catheter]]
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

**A catheter** is a **thin, flexible tube** inserted into the body to drain fluids, deliver medications, measure pressures, or perform interventions.[1][2]


***

## Common Types

| Type                  | Description/Uses                                              | Examples/Sites                  |
|-----------------------|---------------------------------------------------------------|---------------------------------|
| **Urinary (Foley)**  | Indwelling balloon‑tip for bladder drainage.                  | [[Urethral]] ([[51702]] CPT simple).[5][2] |
| **Straight/Intermittent** | Temporary for residual urine/sampling (non‑indwelling).     | [[51701]] CPT.[5][6] |
| **Central Venous (CVC/PICC)** | Long‑term IV access, nutrition, monitoring.               | Subclavian/jugular; permcath.[1] |
| **Cardiac**          | Coronary angio, pressures, PCI.                               | Femoral/radial (9345x CPT).[7] |
| **Peripheral IV**    | Short‑term fluid/meds.                                        | Arm veins.[1] |
| **NG/NJT**           | Gastric/jejunal feeding/decompression.                        | Nose to stomach/intestine.[1] |
| **Pigtail**          | Drainage of [[abscess]]/pleural effusion/[[pneumothorax]].            | [[percutaneous]].[1] |
| **Angiographic (Cobra/Sidewinder)** | Selective vessel cannulation.                          | Aorta branches.[1] |

***

## Coding Context (CPT / HCPCS / ICD‑10)

**Urinary Catheter HCPCS (DME/supplies):**[5][3]
| Code   | Description                                      |  
|--------|--------------------------------------------------|  
| **A4351** | Intermittent straight tip (Teflon/silicone).     |  
| **A4352** | Intermittent Cou dé tip.                         |  
| **A4353** | Intermittent with sterile insertion kit (“no‑touch”). |  

**Insertion CPT (Bladder):**[6][8][5]
- **[[51701]]** - Non‑indwelling straight cath.  
- **[[51702]]** - Simple indwelling (Foley).  
- **[[51703]]** - Complicated (stricture/[[benign prostatic hyperplasia (BPH)|BPH]]).  

**Cardiac/Vascular:** See prior cardiac cath codes (9345x).[7]

**ICD‑10‑PCS (Procedures):**  
- **0T2B7ZZ** - Dilation of urethra w/intradevice (indwelling cath).  
- Diagnoses: **[[Z46.6]]** - Encounter for fitting/adjustment urinary device; **[[T83.5xxA]]** - Infection due to indwelling urinary cath.[9]

***

## Related Terms

**Insertion process:** **[[Catheterization]]** (e.g., urinary, cardiac).[1]
**Complications:**  
- **CAUTI** (Catheter‑Associated [[urinary tract infection (UTI)|UTI]]): **[[T83.51xA]]**.  
- **CLABSI** (Central Line‑Associated Bloodstream Infection).  
**Alternatives:** [[Suprapubic]] catheter, [[nephrostomy]] tube.  
**Sizes:** French (Fr) units (e.g., 14-16 Fr urinary adult).  
**Materials:** Silicone (low encrustation), [[hydrophilic]] (self‑lubricating).[2][3]

***

## Clinical and Practical Details

**Indications:**  
- **Urinary:** [[Retention]], [[incontinence]], post‑op monitoring, neurogenic bladder.[2]
- **Vascular:** Fluids/meds, TPN, chemotherapy, hemodynamics.  
- **Drainage:** [[abscess]], pleural effusion.  
- **Interventional:** [[Angioplasty]], embolization, embryo transfer (IVF).[1]

**Care/Prevention:**  
- Aseptic insertion, securement, daily review (“4 days or out”), chlorhexidine prep.  
- **CAUTI bundle:** Avoid unnecessary use, alternatives, silver‑coated caths.[2]

**Historical milestone:** Werner Forssmann (1929) self‑inserted first cardiac cath, proving safety.[10]

**One‑Sentence Summary**  
**Catheter** (Greek *kathetēr* “let down”), a versatile thin tube (e.g., Foley urinary A4351-3 HCPCS, cardiac via 9345x CPT), enables drainage/infusion/access across [[urology]] (5170x CPT), cardiology, and beyond, with infection risks mitigated by aseptic protocols.[3][5][4][1][2]

Sources
[1] Catheter - Wikipedia https://en.wikipedia.org/wiki/Catheter
[2] Urinary catheters: MedlinePlus Medical Encyclopedia https://medlineplus.gov/ency/article/003981.htm
[3] RETIRED - Correct Coding - Urinary "No-Touch" Catheters - JA DME https://med.noridianmedicare.com/web/jadme/policies/dmd-articles/correct-coding-urinary-no-touch-catheters
[4] Catheter - Etymology, Origin & Meaning https://www.etymonline.com/word/catheter
[5] CPT Codes for Urinary Catheter Insertions | MBW RCM https://www.mbwrcm.com/the-revenue-cycle-blog/cpt-codes-urinary-catheter-insertions
[6] CPT® Code 51701 - Introduction Procedures on the Bladder - AAPC https://www.aapc.com/codes/cpt-codes/51701
[7] Cardiac Catheterization and Coronary Angiography (A52850) - CMS https://www.cms.gov/medicare-coverage-database/view/article.aspx?articleid=52850
[8] CPT® Code 51702 - Introduction Procedures on the Bladder - AAPC https://www.aapc.com/codes/cpt-codes/51702
[9] Cardiac Catheterization Coding in ICD-10-PCS https://hiacode.com/blog/education/cardiac-catheterization-coding-in-icd-10-pcs
[10] Resuscitate Your Cardiac Catheterization Coding - AAPC https://www.aapc.com/blog/28538-resuscitate-your-cardiac-catheterization-coding/


[[Med roots]]
[[Appendix A Prefixes]]
[[Appendix B Combining Forms]]
[[Appendix C Suffixes]]
[[Appendix D Suffix forms]]