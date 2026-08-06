---
tags:
  - medterm
  - urology
  - cardiology
aliases:
  - cath
  - catheters
  - Foley catheter
  - suprapubic catheter
  - Catheter
  - indwelling catheter
  - urinary catheter
  - straight catheter
  - cardiac catheter
  - central venous catheter
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
definition: a medical tube (soft/flexible or rigid) inserted into vessels, cavities, ducts, or organs
---
>[!Note] DEFINITION of [[catheter]]
>A [[catheter]] is **a thin, flexible tube inserted into the body to drain fluids, deliver medications, measure pressures, or perform interventions**. A **catheter** is a thin tube made of medical‑grade materials (**latex, silicone, polyurethane, Teflon**) serving functions like urinary drainage (**Foley**), [[vascular]] access (**IV/central lines**), cardiac angiography/[[hemodynamics]] (diagnostic/PCI), [[gastrointestinal]] decompression (**NG tube**), or specialized uses (e.g., pigtail for [[abscess]]/[[pneumothorax]] drainage, Cobra/Sidewinder for angiography). Types vary by stiffness, tip (**straight/Cou dé**), coatings ([[hydrophilic]]/silicone), and indwelling status (**temporary/permanent**); inserted via natural orifices, [[percutaneous]] sites, or surgically, with risks including infection (CAUTI/ CLABSI), [[thrombosis]], [[embolism]], and trauma. **A catheter** is a **thin, flexible tube** inserted into the body to drain fluids, deliver medications, measure pressures, or perform interventions.

_____
>[!info]+ ETYMOLOGY of [[catheter]]
>#latin
>**Origin**: Late Latin [[catheter]] from Greek *kathetēr* (καθετήρ) = “**let down/flow in” instrument**, from *kathiénai* = “**to send/let down**” ([[kata-]] “**down**” + *hiénai* “**to send/throw**”).
>	•	**First use**: c. 1600 (English), originally for urinary drainage; ancient Egyptians/Greeks used reed/metal probes.
>	•	**Pronunciation**: /ˈkæθətər/ (“KATH‑uh‑ter”).
_____
> [!warning] RELATED TERMS
> **Insertion process:** **[[Catheterization]]** (e.g., urinary, cardiac).
> **Complications:**  
> - **CAUTI** (Catheter‑Associated [[urinary tract infection (UTI)|UTI]]): **[[T83.51XA]]**.  
> - **CLABSI** (Central Line‑Associated Bloodstream Infection).  
> **Alternatives:** [[Suprapubic]] catheter, [[nephrostomy]] tube.  
> **Sizes:** French (Fr) units (e.g., 14-16 Fr urinary adult).  
> **Materials:** Silicone (**low encrustation**), [[hydrophilic]] (**self‑lubricating**).
_____

> [!example] COMMON TYPES
> | Type                  | Description/Uses                                              | Examples/Sites                  |
> |-----------------------|---------------------------------------------------------------|---------------------------------|
> | **Urinary (Foley)**  | Indwelling balloon‑tip for bladder drainage.                  | [[Urethral]] ([[51702]] CPT simple). |
> | **Straight/Intermittent** | Temporary for residual urine/sampling (non‑indwelling).     | [[51701]] CPT. |
> | **Central Venous (CVC/PICC)** | Long‑term IV access, nutrition, monitoring.               | Subclavian/jugular; permcath. |
> | **Cardiac**          | Coronary angio, pressures, PCI.                               | Femoral/radial (9345x CPT). |
> | **Peripheral IV**    | Short‑term fluid/meds.                                        | Arm veins. |
> | **NG/NJT**           | Gastric/jejunal feeding/decompression.                        | Nose to stomach/intestine. |
> | **Pigtail**          | Drainage of [[abscess]]/pleural effusion/[[pneumothorax]].            | [[percutaneous]]. |
> | **Angiographic (Cobra/Sidewinder)** | Selective vessel cannulation.                   | Aorta branches. |

***

> [!important]+ **Coding Context (CPT / HCPCS / ICD‑10)**
> **Urinary Catheter HCPCS (DME/supplies)**:
> 
> | Code   | Description                                      |  
> |--------|--------------------------------------------------|  
> | **A4351** | Intermittent straight tip (Teflon/silicone).     |  
> | **A4352** | Intermittent Cou dé tip.                         |  
> | **A4353** | Intermittent with sterile insertion kit (“no‑touch”). |  
> 
> **Insertion CPT (Bladder):**[6][8][5]
> - **[[51701]]** - Non‑indwelling straight cath.  
> - **[[51702]]** - Simple indwelling (Foley).  
> - **[[51703]]** - Complicated (stricture/[[benign prostatic hyperplasia (BPH)|BPH]]).  
> 
> **Cardiac/Vascular:** See prior cardiac cath codes (9345x).
> 
> **ICD‑10‑PCS (Procedures):**  
> - **0T2B7ZZ** - Dilation of urethra w/intradevice (indwelling cath).  
> - Diagnoses: **[[Z46.6]]** - Encounter for fitting/adjustment urinary device; **[[T83.5xxA]]** - Infection due to indwelling urinary cath.

***

> [!caution] CLINICAL AND PRACTICAL USES
> **Indications:**  
> - **Urinary:** [[Retention]], [[incontinence]], post‑op monitoring, neurogenic bladder.
> - **Vascular:** Fluids/meds, TPN, chemotherapy, hemodynamics.  
> - **Drainage:** [[abscess]], pleural effusion.  
> - **Interventional:** [[Angioplasty]], embolization, embryo transfer (IVF).
> 
> **Care/Prevention:**  
> - Aseptic insertion, securement, daily review (“4 days or out”), chlorhexidine prep.  
> - **CAUTI bundle:** Avoid unnecessary use, alternatives, silver‑coated caths.
> 
> >[!notice] **Historical milestone:** 
> >Werner Forssmann (1929) self‑inserted first cardiac cath, proving safety.
> 
> **One‑Sentence Summary**  
> **Catheter** (Greek *kathetēr* “let down”), a versatile thin tube (e.g., Foley urinary A4351-3 HCPCS, cardiac via 9345x CPT), enables drainage/infusion/access across [[Urology]] (5170x CPT), cardiology, and beyond, with infection risks mitigated by aseptic protocols.
____
>[!tip]- DERIVATIONS of [[catheter]]
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



[[Med roots dictionary]]
[[Appendix A Prefixes]]
[[Appendix B Combining Forms]]
[[Appendix C Suffixes]]
[[Appendix D Suffix forms]]