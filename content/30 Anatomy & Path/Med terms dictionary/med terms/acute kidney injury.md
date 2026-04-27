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

> [!caution]+ #### CODING CORNER
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

> [!cite]+ ## A Word from MedlinePlus
> Acute kidney failure is the rapid (less than 2 days) loss of your kidneys' ability to remove waste and help balance fluids and [electrolytes](https://medlineplus.gov/ency/article/002350.htm) in your body.
> 
> ## Causes
> 
> There are many possible causes of kidney damage. They include:
> 
> - [Acute tubular necrosis](https://medlineplus.gov/ency/article/000512.htm) (ATN; damage to the tubule cells of the kidneys)
> - Autoimmune kidney disease
> - Blood clot in the blood vessels to the kidneys
> - Decreased blood flow from cholesterol (cholesterol emboli)
> - Decreased blood flow due to very low blood pressure, which can result from [burns](https://medlineplus.gov/ency/article/000030.htm), [dehydration](https://medlineplus.gov/ency/article/000982.htm), hemorrhage, injury, [septic shock](https://medlineplus.gov/ency/article/000668.htm), serious illness, or surgery
> - Disorders that cause clotting within the kidney blood vessels
> - Infections that directly injure the kidney, such as acute [pyelonephritis](https://medlineplus.gov/ency/article/000521.htm) or [septicemia](https://medlineplus.gov/ency/article/001355.htm)
> - Pregnancy complications, including [placental abruption](https://medlineplus.gov/ency/article/000901.htm) or [placenta previa](https://medlineplus.gov/ency/article/000900.htm)
> - [Urinary tract blockage](https://medlineplus.gov/ency/article/000507.htm)
> - Illicit drugs such as cocaine and heroin
> - Medicines including non-steroidal anti-inflammatory drugs (NSAIDs), certain antibiotics and blood pressure medicines, intravenous contrast (dye), some cancer and HIV medicines
> 
> ## Symptoms
> 
> Symptoms of acute kidney failure may include any of the following:
> 
> - Blood in the stools
> - Blood in the urine
> - [Breath odor](https://medlineplus.gov/ency/article/003058.htm) and metallic taste in the mouth
> - Bruising easily
> - [Changes in mental status](https://medlineplus.gov/ency/article/003205.htm) or mood
> - Decreased appetite
> - [Decreased sensation](https://medlineplus.gov/ency/article/003206.htm), especially in the hands or feet
> - [Fatigue](https://medlineplus.gov/ency/article/003088.htm) or slow sluggish movements
> - [Flank pain](https://medlineplus.gov/ency/article/003113.htm) (between the ribs and hips)
> - [Hand tremor](https://medlineplus.gov/ency/article/003192.htm)
> - [Heart murmur](https://medlineplus.gov/ency/article/003266.htm)
> - High blood pressure
> - Nausea or vomiting, may last for days
> - Nosebleeds
> - Persistent hiccups
> - Prolonged bleeding
> - [Seizures](https://medlineplus.gov/ency/article/003200.htm)
> - Shortness of breath
> - [Swelling](https://medlineplus.gov/ency/article/003103.htm) due to the body keeping in fluid (may be seen in the legs, ankles, and feet)
> - Urination changes, such as little or no urine, [excessive urination at night](https://medlineplus.gov/ency/article/003141.htm), or urination that stops completely
> 
> ## Exams and Tests
> 
> Your health care provider will examine you.
> 
> Tests to check how well your kidneys are working include:
> 
> - [BUN](https://medlineplus.gov/ency/article/003474.htm) (blood urea nitrogen)
> - [Creatinine clearance](https://medlineplus.gov/ency/article/003611.htm)
> - [Serum creatinine](https://medlineplus.gov/ency/article/003475.htm)
> - [Serum potassium](https://medlineplus.gov/ency/article/003484.htm) and electrolyte levels
> - [Urinalysis](https://medlineplus.gov/ency/article/003579.htm)
> 
> Other blood tests may be done to find the underlying cause of kidney failure.
> 
> A kidney or abdominal ultrasound is the preferred test for diagnosing a blockage in the urinary tract. [X-ray](https://medlineplus.gov/ency/article/003337.htm), [CT scan](https://medlineplus.gov/ency/article/003330.htm), or [MRI of the abdomen](https://medlineplus.gov/ency/article/003796.htm) can also tell if there is a blockage.
> 
> ## Treatment
> 
> Once the cause is found, the goal of treatment is to help your kidneys work again and prevent fluid and waste from building up in your body while they heal. Usually, you will have to stay overnight in the hospital for treatment.
> 
> The amount of liquid you drink will be limited to the amount of urine you can produce. You will be told what you may and may not eat to reduce the buildup of toxins that the kidneys would normally remove. Your diet may need to be high in [carbohydrates](https://medlineplus.gov/ency/article/002469.htm) and low in [protein](https://medlineplus.gov/ency/article/002467.htm), salt, and potassium.
> 
> You may need antibiotics to treat or prevent infection. Water pills (diuretics) may be used to help remove fluid from your body.
> 
> Medicines will be given through a vein to help control your blood potassium level.
> 
> You may need [dialysis](https://medlineplus.gov/ency/patientinstructions/000707.htm). This is a treatment that does what healthy kidneys normally do -- rid the body of harmful wastes, extra salt, and water. Dialysis can save your life if your potassium levels are dangerously high. Dialysis will also be used if:
> 
> - Your mental status changes
> - You develop [pericarditis](https://medlineplus.gov/ency/article/000182.htm)
> - You retain too much fluid
> - You cannot remove nitrogen waste products from your body
> 
> Dialysis will most often be short term. In some cases, the kidney damage is so great that dialysis is needed permanently.
> 
> ## When to Contact a Medical Professional
> 
> Contact your provider if your urine output slows or stops or you have other symptoms of acute kidney failure.
> 
> ## Prevention
> 
> To prevent acute kidney failure:
> 
> - Health problems such as high blood pressure or diabetes should be well controlled.
> - Avoid drugs and medicines that can cause kidney injury.
> 
> ## Alternative Names
> 
> Kidney failure; Renal failure; Renal failure - acute; ARF; Kidney injury - acute
> 
> ## Images
> 
> - ![Kidney anatomy](https://medlineplus.gov/ency/images/ency/tnails/1101t.jpg "Kidney anatomy") [Kidney anatomy](https://medlineplus.gov/ency/imagepages/1101.htm)
> 
> ##### References
> 
> Agarwal A, Barasch J. Acute kidney injury. In: Goldman L, Cooney KA, eds. *Goldman-Cecil Medicine*. 27th ed. Philadelphia, PA: Elsevier; 2024:chap 106.
> 
> Oh MS, Briefel G, Pincus MR. Evaluation of renal function, water, electrolytes, and acid-base balance. In: McPherson RA, Pincus MR, eds. *Henry's Clinical Diagnosis and Management by Laboratory Methods*. 24th ed. Philadelphia, PA: Elsevier; 2022:chap 15.
> 
> Weisbord SD, Palevsky PM. Prevention and management of acute kidney injury. In: Yu ASL, Chertow GM, Luyckx VA, Marsden PA, Skorecki K, Taal MW, eds. *Brenner and Rector's The Kidney*. 11th ed. Philadelphia, PA: Elsevier; 2020:chap 29.
> 
> ##### Review Date 5/6/2024
> 
> Updated by: Walead Latif, MD, Nephrologist and Clinical Associate Professor, Rutgers Medical School, Newark, NJ. Review provided by VeriMed Healthcare Network. Also reviewed by David C. Dugdale, MD, Medical Director, Brenda Conaway, Editorial Director, and the A.D.A.M. Editorial team.




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