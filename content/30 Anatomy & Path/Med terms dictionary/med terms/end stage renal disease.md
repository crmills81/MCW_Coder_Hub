---
tags:
  - medterm
  - nephrology
  - internal-medicine
  - chronic-disease
aliases:
  - End stage renal disease
  - ESRD
  - end-stage kidney disease
  - ESKD
  - CKD stage 5 requiring dialysis
  - uremia
roots:
  - ren-
  - -al
forms:
  - noun
  - condition
  - disease
alphabet: E
definition: The final, irreversible stage of chronic kidney disease, characterized by a severe reduction in kidney function (typically a GFR < 15 mL/min/1.73 m²) that cannot sustain life without chronic renal replacement therapy such as dialysis or a kidney transplant.
icd10cm: N18.9
---
>[!Note] DEFINITION of [[end stage renal disease]]
>**End stage renal disease (ESRD)**, increasingly referred to in clinical literature as **end-stage kidney disease (ESKD)**, represents the terminal culmination of chronic, progressive nephron destruction. **At this stage, the kidneys have permanently lost their ability to filter metabolic waste** (**resulting in severe [[uremia]]**), excrete excess fluid, and regulate critical electrolytes (**leading to life-threatening [[hyperkalemia]] and metabolic acidosis**). Unlike [[acute kidney injury]] (**which is sudden and potentially reversible**), **ESRD** is the permanent endpoint of conditions such as diabetic [[nephropathy]], hypertensive [[nephrosclerosis]], or chronic **[[glomerulonephritis]]**. To survive, the patient is entirely dependent on **renal replacement therapy (RRT)**, which includes either chronic [[hemodialysis]], peritoneal [[dialysis]], or kidney transplantation. **Clinical Indicators:** For coding and documentation purposes, coders should look for explicit physician diagnoses of "**ESRD**," documentation of chronic **dialysis** orders (**e.g., "HD MWF"**), the presence of an [[arteriovenous fistula]] (AVF) or **peritoneal catheter** for chronic access, or a documented eGFR consistently below 15 mL/min accompanied by **dialysis** dependence. A critical distinction for ICD-10-CM coding is that a patient with an eGFR < 15 who is *not* on or slated for **chronic dialysis** should technically be coded as **Stage 5 CKD**, whereas **ESRD signifies the absolute end-stage requiring artificial organ support**.
_____
>[!info]+ ETYMOLOGY of [[end stage renal disease]]
>#latin
>
>|Component|Origin|Meaning|
>|---|---|---|
>|**[[ren-]]**|Latin _renes_|**"Kidneys"** — the primary anatomical organ involved; appears in [[renal]], [[renin]], [[renovascular]]|
>|**[[-al]]**|Latin _-alis_|Adjectival suffix — **"pertaining to"**|
>
> **Literally**: _"The final stage of the disease pertaining to the kidneys."_ The term "**end stage**" was adopted by the medical community to demarcate the absolute limit of the chronic disease continuum where native organ function is practically zero. In recent years, nephrology societies have pushed for "**End-Stage Kidney Disease (ESKD)**" to use more patient-friendly plain English (**"kidney" vs. the Latin "renal"**), but "**ESRD**" remains the universally entrenched terminology for Medicare billing, legislation, and the ICD-10-CM alphabetical index.
_____

> [!success]+ ### 🔀 ALIASES / ALTERNATE TERMS
>
> | Term | Context |
> |---|---|
> | **ESRD** | The universal clinical and billing acronym; deeply ingrained in Medicare policy. |
> | **End-stage kidney disease (ESKD)** | A modern synonym preferred by some nephrologists for plain-language clarity. |
> | **CKD stage 5 requiring dialysis** | A descriptive clinical assessment; directly maps to the ESRD diagnosis code when dialysis dependence is confirmed. |
> | **Uremia** | The systemic clinical syndrome caused by ESRD (**toxin buildup**); historically used interchangeably with end-stage failure. |

_____

> [!danger]+ ### 🔗 RELATED TERMS
>
> - **[[Chronic kidney disease]] (CKD)** — **[[N18.9]]** (Unspecified); the progressive umbrella condition. ESRD is the final phase of CKD.
> - **[[Dialysis]]** — The primary life-sustaining procedure for ESRD, replacing the kidney's filtration function.
> - **[[Acute kidney injury]] (AKI)** — **[[N17.9]]**; a sudden drop in kidney function. Patients can have "acute on chronic" failure, but AKI itself is not ESRD.
> - **[[Arteriovenous fistula]] (AVF)** — A surgical connection between an artery and a vein created to provide durable vascular access for chronic [[hemodialysis]].
> - **[[Uremia]]** — **[[N19]]**; the severe physiological sickness caused by un-filtered nitrogenous waste. If a patient has ESRD, [[uremia]] is generally considered inherent and not coded separately unless specifically directed.
> - **[[Secondary hyperparathyroidism]]** — **[[E21.1]]**; a near-universal metabolic complication of ESRD due to the kidney's failure to convert vitamin D and excrete phosphorus.

_____

> [!example]+ #### CODING CORNER
>
> <br>
>
> ### 🏥 ICD-10-CM CODES
>
> #### **Primary Diagnosis — End Stage Renal Disease**
>
> > ⚠️ **ICD-10-CM / Chapter Nuances**: Coding ESRD requires mandatory secondary codes. If the patient is on chronic [[dialysis]], you MUST code the dialysis dependence. Furthermore, if the patient has hypertension or [[diabetes]], combination codes linking the systemic disease to the renal failure are required.
>
> | Code | Description |
> |---|---|
> | **[[N18.6]]** | End stage renal disease _(The definitive code for ESRD)_ |
> | **[[Z99.2]]** | Dependence on renal dialysis _(Mandatory secondary code to report alongside N18.6 for patients actively undergoing chronic dialysis)_ |
> | **[[N18.5]]** | Chronic kidney disease, stage 5 _(Use instead of N18.6 if the patient has profound kidney failure but is NOT on or requiring chronic dialysis, e.g., conservative/palliative management)_ |
> | **[[Z94.0]]** | Kidney transplant status _(If the patient had ESRD but now has a functioning transplanted kidney, their CKD stage typically reverts to N18.3 or N18.4 based on the transplant's function, and N18.6 is no longer used unless the transplant has completely failed)_ |
>
> #### **Common Combination Codes (Hypertension & Diabetes)**
>
> | Code | Description |
> |---|---|
> | **[[I12.0]]** | Hypertensive chronic kidney disease with stage 5 chronic kidney disease or end stage renal disease _(Must be used if the patient has hypertension; ICD-10 assumes a cause-and-effect relationship between HTN and CKD)_ |
> | **[[E11.22]]** | Type 2 diabetes mellitus with diabetic chronic kidney disease _(Sequence first, followed by N18.6, if the patient's ESRD is attributed to diabetic nephropathy)_ |
>
> ---
>
> ### 🔧 COMMON CPT CODES (ESRD Management)
>
> #### **Outpatient ESRD Monthly Capitation Payments (MCP)**
>
> > ⚠️ **CPT Nuance**: Nephrologists bill for the chronic, ongoing management of an ESRD patient using age-specific codes that are tiered based on the exact number of face-to-face visits performed in a calendar month.
>
> | CPT Code | Description |
> |---|---|
> | **[[90960]]** | End-stage renal disease (ESRD) related services monthly, for patients 20 years of age and older; with 4 or more face-to-face visits by a physician or other qualified health care professional |
> | **[[90961]]** | ESRD related services monthly, for patients 20 years of age and older; with 2-3 face-to-face visits |
> | **[[90962]]** | ESRD related services monthly, for patients 20 years of age and older; with 1 face-to-face visit |
> | **[[90966]]** | End-stage renal disease (ESRD) related services for home dialysis per full month, for patients 20 years of age and older _(Used for patients managing their dialysis at home, such as peritoneal dialysis)_ |
>
> #### **Inpatient Hemodialysis Procedures**
>
> | CPT Code | Description |
> |---|---|
> | **[[90935]]** | Hemodialysis procedure with single evaluation by a physician or other qualified health care professional _(Used for a hospitalized ESRD patient receiving a dialysis treatment)_ |
> | **[[90937]]** | Hemodialysis procedure requiring repeated evaluation(s) with or without substantial revision of dialysate prescription |
>
> #### **Modifiers Commonly Used**
>
> | Modifier | Usage |
> |---|---|
> | **[[-25]]** | Significant, separately identifiable E&M service — Append to a hospital E&M code (e.g., **[[99222]]**) if a significant evaluation is performed for a completely separate medical issue on the same day as an inpatient dialysis procedure (**[[90935]]**). |
>
> ---
>
> ⚠️ **Coding Note:** The most critical compliance and audit risk for **ESRD** is the failure to link systemic conditions and properly utilize the **[[Z99.2]]** dialysis dependence code. Per ICD-10-CM guidelines, hypertension and CKD are presumed to have a causal relationship. If a patient has HTN and ESRD, you must *never* code them as I10 and N18.6 separately; you must use the combination code **[[I12.0]]**, followed by **[[N18.6]]** to explicitly state the stage, followed by **[[Z99.2]]**. Additionally, for outpatient professional billing, the Monthly Capitation Payment (MCP) codes (like **[[90960]]**) require rigorous counting of face-to-face encounters. Billing the highest tier (4+ visits) without four distinct, documented encounters in that specific calendar month will result in immediate recoupment upon audit.

_____
>[!tip]- DERIVATIONS of [[end stage renal disease]]
>```dataview
>TABLE definition AS Definition
>FROM #medterm 
>WHERE length(filter(roots, (word) => econtains(this.roots, word))) > 0 AND file.name != this.file.name
>SORT file.name ASC
>```
_____
>[!faq]- Query functionality
>```dataview
>TABLE definition AS Definition
>FROM #medterm 
>WHERE file.name != this.file.name
>AND any(contains(this.definition, definition))
>```

[[Med roots dictionary]]
[[Appendix A Prefixes]]
[[Appendix B Combining Forms]]
[[Appendix C Suffixes]]
[[Appendix D Suffix forms]]