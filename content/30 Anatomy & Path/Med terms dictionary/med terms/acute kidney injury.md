---
tags:
  - medterm
  - nephrology
  - internal-medicine
  - critical-care
aliases:
  - Acute kidney injury
  - AKI
  - acute renal failure
  - ARF
  - acute kidney failure
roots:
  - acut-
  - nephr-
  - nephro-
  - ren-
forms:
  - noun
  - condition
alphabet: A
definition: A sudden and often reversible decline in renal function, characterized by a rapid drop in glomerular filtration rate (GFR), retention of nitrogenous waste products, and disruption of fluid and electrolyte homeostasis.
icd10cm: N17.9
---
>[!Note] DEFINITION of [[acute kidney injury]]
>**Acute kidney injury (AKI)**, historically referred to and still coded as **acute renal failure (ARF)**, is **a sudden, rapid deterioration of kidney function occurring over a period of hours to days**. It is characterized by an abrupt drop in the glomerular filtration rate (GFR), leading to the accumulation of nitrogenous wastes (**urea and creatinine**) in the blood (**azotemia**) and severe dysregulation of fluid, electrolyte, and acid-base balance. AKI is classically categorized by its underlying pathophysiology into three distinct etiologies: **prerenal** (caused by decreased renal blood flow/perfusion, such as in severe dehydration, shock, or heart failure), **intrinsic/renal** (**caused by direct damage to the renal parenchyma, most commonly [[acute tubular necrosis]] [ATN] from profound ischemia or nephrotoxins**), and **postrenal** (caused by urinary tract obstruction, such as BPH or bilateral kidney stones). **Clinical Indicators:** For coding and documentation purposes, coders should look for explicit physician diagnoses of "AKI" alongside laboratory evidence, most commonly referencing the **KDIGO criteria** (an absolute increase in serum creatinine by $\ge$ 0.3 mg/dL within 48 hours, or a $\ge$ 1.5 times increase from baseline) and/or **oliguria** (urine output $< 0.5$ mL/kg/hr for 6 hours). The most critical nuance for ICD-10-CM coding is recognizing that the modern clinical term "**acute kidney injury**" maps directly to the ICD-10 descriptor "acute kidney failure" (**[[N17.9]]**), and coders must look for specific intrinsic pathologies (**like ATN**) to assign a higher-specificity code.
_____
>[!info]+ ETYMOLOGY of [[acute kidney injury]]
>#latin #greek
>
>|Component|Origin|Meaning|
>|---|---|---|
>|**[[acut-]]**|Latin _acutus_|**"Sharp, pointed, severe"** — denotes a sudden onset and rapid clinical progression, distinguishing it from chronic, insidious conditions|
>|**[[nephr-]]** / **[[nephro-]]**|Ancient Greek _νεφρός_ (_nephrós_)|**"Kidney"** — the primary anatomical organ involved; appears in [[nephritis]], [[nephrotoxic]], [[nephron]]|
>|**[[ren-]]**|Latin _renes_|**"Kidneys"** — the Latin equivalent root; appears in [[renal]], [[renin]]|
>
> **Literally**: _"A sudden, sharp damage to the kidney."_ The medical community formally shifted the nomenclature from "**acute renal failure**" to "**acute kidney injury**" in the early 2000s (**codified by the RIFLE and later AKIN/KDIGO criteria**) to emphasize that the condition exists on a continuum of cellular damage, rather than only being recognized when the organ has completely "**failed**." Despite this clinical shift, the ICD-10-CM classification system still utilizes "failure" in its code descriptions.
_____

> [!success]+ ### 🔀 ALIASES / ALTERNATE TERMS
>
> | Term | Context |
> |---|---|
> | **Acute kidney injury (AKI)** | The modern, preferred clinical standard term used by nephrologists and hospitalists to describe the condition. |
> | **Acute renal failure (ARF)** | The historical clinical term; while outdated in clinical literature, it perfectly matches the ICD-10-CM code descriptors. |
> | **Acute kidney failure** | The exact nomenclature used by the ICD-10-CM alphabetical index and tabular list. |
> | **Acute on chronic kidney failure** | A common clinical presentation where AKI occurs in a patient with pre-existing baseline **Chronic Kidney Disease (CKD)**. |

_____

> [!danger]+ ### 🔗 RELATED TERMS
>
> - **[[Chronic kidney disease]] (CKD)** — **[[N18.9]]** (Unspecified); a slow, progressive, irreversible loss of kidney function. AKI frequently occurs superimposed on CKD.
> - **[[Acute tubular necrosis]] (ATN)** — **[[N17.0]]**; the most common intrinsic cause of AKI, characterized by the death of tubular epithelial cells due to ischemia or toxins. 
> - **[[Azotemia]]** — **[[R79.89]]**; the biochemical abnormality of elevated BUN and serum creatinine, often before clinical symptoms of full injury manifest.
> - **[[Oliguria]]** — **[[R34]]**; decreased urine output; a hallmark clinical symptom and diagnostic criterion for AKI.
> - **[[Anuria]]** — **[[R34]]**; the complete absence of urine output, indicating severe organ shutdown.
> - **[[dialysis]]** — Extracorporeal renal replacement therapy utilized emergently in severe AKI when life-threatening **fluid overload, hyperkalemia, or profound acidemia occur.**

_____

> [!example]+ #### CODING CORNER
>
> <br>
>
> ### 🏥 ICD-10-CM CODES
>
> #### **Primary Diagnosis — Acute Kidney Failure (Category N17)**
>
> > ⚠️ **ICD-10-CM / Chapter Nuances**: In the ICD-10-CM Alphabetic Index, looking up "Injury > kidney > acute" instructs the coder to "see Failure, kidney, acute." Therefore, AKI maps directly to the N17 category. Do not use a traumatic injury code (**S-code**) unless the kidney was physically lacerated or traumatized by external force.
>
> | Code | Description |
> |---|---|
> | **[[N17.9]]** | Acute kidney failure, unspecified _(The default code for Acute Kidney Injury [AKI] when no specific intrinsic pathology is documented)_ |
> | **[[N17.0]]** | Acute kidney failure with tubular necrosis _(Use when the provider explicitly documents ATN as the cause of the AKI)_ |
> | **[[N17.1]]** | Acute kidney failure with acute cortical necrosis |
> | **[[N17.2]]** | Acute kidney failure with medullary necrosis |
> | **[[N17.8]]** | Other acute kidney failure |
>
> #### **Common Associated Conditions**
>
> | Code | Description |
> |---|---|
> | **[[N18.9]]** | Chronic kidney disease, unspecified _(Must be coded alongside N17.9 if the physician documents "acute on chronic kidney injury")_ |
> | **[[E87.5]]** | Hyperkalemia _(A common, dangerous complication of AKI that frequently drives the need for urgent dialysis)_ |
> | **[[R34]]** | Anuria and oliguria _(Symptom codes; typically bundled with the N17.9 diagnosis unless treated independently, depending on payer guidelines)_ |
>
> ---
>
> ### 🔧 COMMON CPT CODES (Evaluation & Intervention)
>
> #### **Inpatient Hemodialysis (For Severe AKI)**
>
> | CPT Code | Description |
> |---|---|
> | **[[90935]]** | Hemodialysis procedure with single evaluation by a physician or other qualified health care professional _(Used for a standard acute inpatient dialysis session)_ |
> | **[[90937]]** | Hemodialysis procedure requiring repeated evaluation(s) with or without substantial revision of dialysate prescription _(Used when the patient is hemodynamically unstable during the AKI and requires multiple physician assessments during the session)_ |
>
> #### **Diagnostic Imaging**
>
> | CPT Code | Description |
> |---|---|
> | **[[76770]]** | Ultrasound, [[retroperitoneal]] (**e.g., renal, aorta, nodes**), real time with image documentation; complete _(The standard initial imaging modality to rule out postrenal/obstructive causes of AKI, such as hydronephrosis)_ |
>
> #### **Modifiers Commonly Used**
>
> | Modifier | Usage |
> |---|---|
> | **[[-25]]** | Significant, separately identifiable E&M service — Append to a hospital E&M code (e.g., **[[99222]]**, **[[99232]]**) if a significant evaluation is performed for a reason unrelated to the acute dialysis procedure (**[[90935]]**) on the same day. |
> | **[[-26]]** | Professional component — Used by the radiologist interpreting the renal ultrasound (**[[76770]]**). |
>
> ---
>
> ⚠️ **Coding Note:** The most frequent audit finding related to **Acute Kidney Injury** involves "**Acute on Chronic**" presentations. If a provider documents "**Acute on chronic kidney injury**," you must code *both* the acute failure (**[[N17.9]]**) and the appropriate CKD stage (e.g., **[[N18.32]]** for Stage 3b, or **[[N18.9]]** if unspecified). Secondly, never assume an etiology. Even if the patient was severely dehydrated (**prerenal**), do not code ATN (**[[N17.0]]**) unless the physician explicitly writes "acute tubular necrosis." Finally, if the patient is admitted specifically for AKI, ensure that **dehydration** (**[[E86.0]]**) or [[sepsis]] (**[[A41.9]]**) are sequenced correctly based on the circumstances of admission, as AKI is frequently a secondary manifestation (a complication) of a broader systemic shock state.

_____
>[!tip]- DERIVATIONS of [[acute kidney injury]]
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

[[Med roots]]
[[Appendix A Prefixes]]
[[Appendix B Combining Forms]]
[[Appendix C Suffixes]]
[[Appendix D Suffix forms]]