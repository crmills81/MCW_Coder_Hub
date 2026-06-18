---
tags:
  - medical-coding
  - ICD-10-CM
  - PMR
  - neurology
  - stroke
  - cerebral-infarction
  - documentation-integrity
title: "Strokes: Cerebral Infarction Under PM&R"
aliases:
  - Stroke
  - Cerebral Infarction
  - Ischemic Stroke
  - CVA
  - Post-Stroke Rehabilitation
  - Sequelae of Cerebral Infarction
specialty: Physical Medicine and Rehabilitation
code_systems:
  - ICD-10-CM
  - MS-DRG
  - NIHSS
status: reference-note
last_reviewed: 2026-05-06
---

# Strokes: Cerebral Infarction Under PM&R

> [!summary] Coder takeaway
> For **PM&R and inpatient professional-fee coding**, **[[cerebral infarction]]** documentation should answer four questions every time: Is this an acute/current stroke, a history of stroke without residual deficits, or a sequela with active residual deficits? What is the vessel or vascular territory? What is the mechanism, such as [[thrombosis]], [[embolism]], unspecified [[occlusion]] or [[stenosis]], small-artery disease, [[venous]] [[thrombosis]], or other [[infarction]]? What residual deficits are being evaluated, treated, monitored, or used to justify rehabilitation intensity? Category I63 is for acute/current cerebral infarction, category **I69.3** is for sequelae of cerebral infarction, [[Z86.73]] is for personal history of TIA and cerebral infarction without residual deficits, and **NIHSS codes R29.700-R29.742** may be reported with acute stroke codes when documented and supported by the provider’s acute stroke diagnosis ([ICD10Data I63](https://www.icd10data.com/ICD10CM/Codes/I00-I99/I60-I69/I63-), [CDC FY 2026 ICD-10-CM Guidelines](https://ftp.cdc.gov/pub/Health_Statistics/NCHS/Publications/ICD10CM/2026-update/ICD-10-CM%20April%201%202026%20Guidelines%20Final.pdf), [CDC FY 2026 code descriptions](https://ftp.cdc.gov/pub/health_statistics/nchs/publications/ICD10CM/2026/icd10cm-Code%20Descriptions-2026.zip)).

## Table of Contents

- [[#Stroke Snapshot for Coders]]
- [[#Why This Matters in PM&R]]
- [[#Core Terminology]]
- [[#Clinical Definition and Pathophysiology]]
- [[#Major Stroke Types]]
- [[#Ischemic Stroke Etiology]]
- [[#Anatomy and Vascular Territory Cues]]
- [[#Documentation Elements That Drive Code Selection]]
- [[#ICD-10-CM Coding Framework]]
- [[#Acute Cerebral Infarction Category I63]]
- [[#I63 Code Family Navigation]]
- [[#Stroke Not Specified as Hemorrhage or Infarction Category I64]]
- [[#History of Stroke Without Residual Deficits]]
- [[#Sequelae of Cerebral Infarction Category I69.3]]
- [[#Dominant and Non-Dominant Side Rules]]
- [[#Residual Deficit Coding for PM&R]]
- [[#NIHSS Stroke Scale Codes]]
- [[#tPA rtPA Status Code Z92.82]]
- [[#MS-DRG and Facility Impact Awareness]]
- [[#PM&R Evaluation Focus]]
- [[#Common PM&R Stroke Deficits]]
- [[#Query Opportunities]]
- [[#Audit Traps and Coding Pitfalls]]
- [[#Supervisor-Level Review Checklist]]
- [[#Example Coding Scenarios]]
- [[#Obsidian Quick Reference Blocks]]
- [[#Related Notes]]

## Stroke Snapshot for Coders

A [[stroke]] occurs when blood supply to part of the brain is blocked or when a brain blood vessel bursts, **causing brain tissue damage or death**; ischemic stroke is the type caused by blood clots, other particles, or plaque-related blockage of vessels supplying the brain ([CDC About Stroke](https://www.cdc.gov/stroke/about/index.html)). Cerebral infarction is the ischemic tissue injury pattern in which an area of brain necrosis forms because arterial or venous blood flow is insufficient, and **ICD-10-CM category I63** captures cerebral infarction caused by occlusion or stenosis of cerebral or precerebral arteries when that vascular disease results in infarction .

For coding purposes, the word “**stroke**” alone is not enough detail if the record distinguishes **infarction**, **hemorrhage**, **TIA**, sequela, laterality, **vascular** distribution, or current residual deficit. **ICD-10-CM I64** is for stroke not specified as hemorrhage or infarction, while I63 is for cerebral infarction and I69.3 is for sequelae of cerebral infarction. In a PM&R chart, the provider may focus more on functional impairment than acute vascular workup, so the coder must determine whether the encounter is still treating an acute/current infarct or is treating residual deficits after the acute phase has ended under the I69.3 sequela framework.

## Why This Matters in PM&R

Stroke rehabilitation is specifically team-based care, and **AHA/ASA** rehabilitation guidance describes an ideal post-stroke rehabilitation team that includes physician leaders trained in **Physical Medicine and Rehabilitation or neurology, rehabilitation nursing, PT, OT, speech-language therapy, social work, psychology, psychiatry, and counselors**. This matters for coding because **PM&R** documentation often contains the clearest description of function: mobility, transfers, **ADLs**, **[[dysphagia]]**, **[[aphasia]]**, cognitive impairment, **[[hemiparesis]]**, **[[spasticity]]**, shoulder pain, neglect, mood symptoms, and discharge barriers.

The coder should treat the **PM&R note** as a high-value source for active residual deficits, functional severity, ongoing treatment, care coordination, therapy tolerance, and **medical complexity**, but the associated stroke diagnosis still needs provider documentation rather than therapy-only inference**. ICD-10-CM guidance** allows certain items such as **NIHSS**, laterality, and other limited elements to come from clinicians other than the patient’s provider, but the associated diagnosis, such as acute stroke, must be documented by the provider.

## Core Terminology

| Term                    | Coding meaning                                                                                                                                                                                                                                                                                   | PM&R documentation angle                                                                                                                                     | Coding caution                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Cerebral infarction** | Brain tissue infarction due to insufficient arterial or venous blood flow; I63 includes occlusion and stenosis of cerebral and precerebral arteries resulting in cerebral infarction.                            | Acute neurologic deficits, imaging confirmation, vascular territory, mechanism, tPA or thrombectomy history, residual deficits.                              | Do not code I65 or I66 instead of I63 when the provider documents infarction due to occlusion or stenosis; I65 and I66 describe occlusion/stenosis without the I63 “resulting in cerebral infarction” concept |
| **Ischemic stroke**     | Stroke caused by clots, particles, or plaque-related blockage of blood vessels to the brain.                                                                                                                                   | PM&R documents deficits and rehab needs after the ischemic event.                                                                                            | “Ischemic stroke” should be translated to the most specific documented cerebral infarction code when site and mechanism are documented.                                                                                                                                                                                                                                                                                                        |
| **CVA**                 | Often used clinically as “cerebrovascular accident.”                                                                                                                                                                                                                                             | May appear in problem lists or rehab diagnosis fields.                                                                                                       | CVA NOS maps to nonspecific stroke concepts unless the record states infarction, hemorrhage, or sequela; avoid assuming I63 from “CVA” alone if the record never clarifies type.                                                                                                                                                                                                                                                               |
| **TIA**                 | Blood flow blockage for a short time, usually no more than 5 minutes, and TIA is not one of the major stroke types in the same way as ischemic or hemorrhagic strok.                                                          | Often appears in history, stroke-risk, or differential documentation.                                                                                        | Do not code acute cerebral infarction for resolved TIA unless the provider documents infarction or inpatient uncertain-diagnosis rules apply at discharge.                                                                                                                                                                                                                                                                                     |
| **Sequela**             | Residual effect after the acute phase of an illness or injury has ended; there is no time limit on sequela code use | This is PM&R’s home base: persistent hemiparesis, aphasia, dysphagia, cognitive deficits, ataxia, apraxia, facial weakness, spasticity, and ADL limitations. | Use I69.3 only when a residual neurologic deficit exists; do not use I69.3 for “history of stroke” with no residual deficits .                                                                                                                                      |
| **History of stroke**   | A past cerebral infarction or TIA without current residual deficits.                                                                                                                                                                                                                             | Useful when PM&R is managing unrelated complaints or stroke risk but there is no active deficit.                                                             | Z86.73 is “Personal history of transient ischemic attack (TIA), and cerebral infarction without residual deficits”                                                                                                                                                                           |

## Clinical Definition and Pathophysiology

**Stroke** is a **brain attack in which blocked blood supply or bleeding causes parts of the brain to become damaged or die**, and rapid treatment matters because brain cells begin to die within minutes without oxygen . Ischemic stroke is the most common stroke type and occurs when clots, other particles, or plaque block vessels to the brain.

**ICD10Data’s clinical description** for **cerebral infarction** defines it as an ischemic brain condition producing a persistent focal neurologic deficit in the distribution of cerebral arteries, or necrosis in the cerebrum due to insufficient arterial or venous blood flow . The same **ICD10Data** clinical description notes that cerebral infarcts are commonly classified by hemisphere, lobe, arterial distribution, and etiology, which aligns with what coders need for **I63** specificity .

## Major Stroke Types

| Stroke type | Clinical concept | ICD-10-CM coding direction |
|---|---|---|
| Ischemic stroke or cerebral infarction | Blood clots, particles, or plaque block blood vessels to the brain, causing ischemic injury. | Usually I63.- when the provider documents cerebral infarction or ischemic stroke; select by mechanism and vessel when available. |
| Hemorrhagic stroke | A brain artery leaks blood or ruptures, putting pressure on brain cells and damaging them. | Not I63; look to nontraumatic subarachnoid, intracerebral, or other intracranial hemorrhage categories depending on provider documentation. |
| TIA | Blood flow is blocked briefly, usually no more than 5 minutes, and symptoms may resolve. | Not I63 unless infarction is documented or inpatient uncertain-diagnosis rules support coding the condition as established at discharge. |
| Stroke NOS | Stroke not specified as hemorrhage or infarction. | I64 is “Stroke, not specified as hemorrhage or infarction,” and includes cerebrovascular accident NOS |
| Sequela of stroke | Persistent neurologic deficits after the acute phase. | Use I69.- code family based on the original cerebrovascular disease type and the residual deficit; I69.3 is for sequelae of cerebral infarction. |

## Ischemic Stroke Etiology

The classic TOAST system classifies ischemic stroke into five etiologic subtypes: large-artery atherosclerosis, cardioembolism, small-vessel occlusion, stroke of other determined etiology, and stroke of undetermined etiology . TOAST was designed because ischemic stroke etiology affects prognosis, outcome, and management, and it uses clinical features plus ancillary diagnostic studies to classify cases).

| Etiology concept                          | Documentation clues                                                                                                                              | ICD-10-CM relevance                                                                                                                                                                                                                                                                                           |
| ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Large-artery atherosclerosis**              | Carotid, vertebral, basilar, MCA, ACA, PCA, cerebellar artery [[stenosis]] or [[occlusion]] with infarct; imaging may show large-vessel disease. | May support [[I63.0]]-[[I63.5]] depending on thrombosis, embolism, or unspecified occlusion/stenosis and whether the vessel is precerebral or cerebral ([CDC FY 2026 code descriptions](https://ftp.cdc.gov/pub/health_statistics/nchs/publications/ICD10CM/2026/icd10cm-Code%20Descriptions-2026.zip)).      |
| **Cardioembolism**                            | Atrial fibrillation, mural thrombus, valvular disease, [[cardiomyopathy]], [[endocarditis]], or embolic shower pattern.                          | May support embolism subfamilies such as [[I63.1]] or [[I63.4]] if the provider documents embolic cerebral infarction and the vessel territory is specified ([CDC FY 2026 code descriptions](https://ftp.cdc.gov/pub/health_statistics/nchs/publications/ICD10CM/2026/icd10cm-Code%20Descriptions-2026.zip)). |
| **Small-vessel occlusion or lacunar infarct** | Deep subcortical infarct, lacunar syndrome, chronic hypertension or diabetes context.                                                            | ICD-10-CM includes I63.81, “Other cerebral [[infarction]] due to [[occlusion]] or stenosis of small artery” ([CDC FY 2026 code descriptions](https://ftp.cdc.gov/pub/health_statistics/nchs/publications/ICD10CM/2026/icd10cm-Code%20Descriptions-2026.zip)).                                                 |
| **Other determined etiology**                 | Dissection, vasculitis, hypercoagulable state, sickle cell disease, unusual cause documented by provider.                                        | Code the infarction plus the causal condition when documented and reportable; use additional codes when they meet reporting criteria.                                                                                                                                                                         |
| **Undetermined or cryptogenic**               | Workup does not identify a source, multiple possible causes, or incomplete evaluation.                                                           | Avoid inventing a mechanism; use unspecified or other cerebral infarction codes only as supported by provider documentation.                                                                                                                                                                                  |

### Risk Factors Worth Capturing When Reportable

Prior **stroke or TIA** increases the chance of another **stroke**, **hypertension** is a leading cause of **stroke**, **high cholesterol** can contribute to arterial narrowing including arteries of the brain, and heart conditions such as atrial **[[fibrillation]]** can produce blood clots that break loose and cause stroke . **Diabetes** increases stroke risk, s**ickle cell disease** is linked to **ischemic stroke** when sickled cells block brain blood flow, and lifestyle factors such as tobacco exposure, inactivity, heavy alcohol use, and diet can raise stroke risk through vascular and metabolic pathways .

For **inpatient coding**, risk factors should be reported when they meet the definition of an additional diagnosis by affecting evaluation, treatment, diagnostic procedures, length of stay, nursing care, or monitoring . For professional-fee work, risk factors may also support medical decision making when they are assessed, managed, or materially affect treatment decisions, but diagnosis reporting still needs provider documentation and payer-specific relevance.

## Anatomy and Vascular Territory Cues

**I63 code** choice is heavily driven by whether the affected artery is precerebral or cerebral, **whether the mechanism is [[thrombosis]], [[embolism]], or unspecified occlusion]]**/**[[stenosis]]**, and whether laterality or bilateral involvement is documented .

| Territory or vessel language   | Common clinical shorthand                                         | I63 documentation target                                                                                                                                                                                                                                                     |
| ------------------------------ | ----------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Vertebral artery**           | Posterior circulation, vertebrobasilar disease.                   | Right, left, bilateral, or unspecified vertebral artery; mechanism thrombosis, embolism, or unspecified occlusion/stenosis ([CDC FY 2026 code descriptions](https://ftp.cdc.gov/pub/health_statistics/nchs/publications/ICD10CM/2026/icd10cm-Code%20Descriptions-2026.zip)). |
| **Basilar artery**             | Brainstem or posterior circulation infarct.                       | Basilar artery has specific I63 options by mechanism, but not right/left laterality because the basilar artery is midline ([CDC FY 2026 code descriptions](https://ftp.cdc.gov/pub/health_statistics/nchs/publications/ICD10CM/2026/icd10cm-Code%20Descriptions-2026.zip)).  |
| **Carotid artery**             | ICA disease, carotid stenosis, carotid occlusion.                 | Right, left, bilateral, or unspecified carotid artery; mechanism matters ([CDC FY 2026 code descriptions](https://ftp.cdc.gov/pub/health_statistics/nchs/publications/ICD10CM/2026/icd10cm-Code%20Descriptions-2026.zip)).                                                   |
| **Middle cerebral artery**     | MCA infarct, dominant hemisphere aphasia, contralateral weakness. | Right, left, bilateral, or unspecified MCA; mechanism matters ([CDC FY 2026 code descriptions](https://ftp.cdc.gov/pub/health_statistics/nchs/publications/ICD10CM/2026/icd10cm-Code%20Descriptions-2026.zip)).                                                              |
| **Anterior cerebral artery**   | ACA infarct, lower-extremity predominant weakness.                | Right, left, bilateral, or unspecified ACA; mechanism matters ([CDC FY 2026 code descriptions](https://ftp.cdc.gov/pub/health_statistics/nchs/publications/ICD10CM/2026/icd10cm-Code%20Descriptions-2026.zip)).                                                              |
| **Posterior cerebral artery**  | PCA infarct, visual field deficits, thalamic involvement.         | Right, left, bilateral, or unspecified PCA; mechanism matters ([CDC FY 2026 code descriptions](https://ftp.cdc.gov/pub/health_statistics/nchs/publications/ICD10CM/2026/icd10cm-Code%20Descriptions-2026.zip)).                                                              |
| **Cerebellar artery**          | Cerebellar infarct, ataxia, vertigo, dysmetria.                   | Right, left, bilateral, or unspecified cerebellar artery; mechanism matters ([CDC FY 2026 code descriptions](https://ftp.cdc.gov/pub/health_statistics/nchs/publications/ICD10CM/2026/icd10cm-Code%20Descriptions-2026.zip)).                                                |
| **Small artery**               | Lacunar or small-vessel infarct.                                  | I63.81 describes other cerebral infarction due to occlusion or stenosis of small artery ([CDC FY 2026 code descriptions](https://ftp.cdc.gov/pub/health_statistics/nchs/publications/ICD10CM/2026/icd10cm-Code%20Descriptions-2026.zip)).                                    |
| **Cerebral venous thrombosis** | Venous infarct, dural sinus thrombosis context if nonpyogenic.    | I63.6 describes cerebral infarction due to cerebral venous thrombosis, nonpyogenic ([CDC FY 2026 code descriptions](https://ftp.cdc.gov/pub/health_statistics/nchs/publications/ICD10CM/2026/icd10cm-Code%20Descriptions-2026.zip)).                                         |

## Documentation Elements That Drive Code Selection

> [!tip] Stroke documentation minimum
> A clean **stroke** diagnosis should document acute/current versus old/sequela, **ischemic versus hemorrhagic**, artery or vascular territory, right/left/bilateral when available, mechanism, neurologic deficits, **NIHSS** if applicable, treatments such as tPA or **thrombectomy**, complications, and **comorbidities** affecting care.

| Documentation element                        | Why the coder needs it                                                                                                                                                                                                                                                                                                                                                              | Query trigger                                                                                                            |     |
| -------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ | --- |
| **Acute/current infarct versus old infarct** | Determines whether **I63, I69.3, or Z86.73** is appropriate                                                                                                                                           | “History of CVA” appears with active **hemiparesis, aphasia, dysphagia**, or therapy for deficits but no causal linkage. |     |
| **Stroke type**                              | Separates infarction from hemorrhage and stroke NOS.                                                                                                                                                                     | “CVA” or “stroke” only, with imaging suggesting infarct or **hemorrhage** but no final provider statement.               |     |
| **Vessel or territory**                      | Drives **I63** subcategory selection and specificity.                                                                                                                                                                                                                                               | Imaging says “left MCA infarct,” but final diagnosis says only “stroke.”                                                 |     |
| **Mechanism**                                | Separates **thrombosis, embolism, unspecified occlusion or stenosis, venous thrombosis**, small artery, and other infarction.                                                                                                      | “Carotid infarct” without **thrombosis, embolism, or occlusion/stenosis** language.                                      |     |
| **Laterality or bilateral disease**          | Required for many artery and residual-deficit codes                                                                                                                                                                                | Vessel laterality conflicts across imaging, discharge summary, and **PM&R** note.                                        |     |
| **Dominant versus non-dominant side**        | Needed for **I69.3 hemiplegia, hemiparesis, monoplegia**, and other paralytic syndrome codes .                                                                                                           | **PM&R** says “left hemiparesis” but handedness is missing.                                                              |     |
| **Residual deficits**                        | Determines I69.3 specificity and supports medical necessity for PM&R care.                                                                                                                              | Past stroke is documented, but active deficits are listed only in therapy or nursing notes.                              |     |
| **NIHSS score**                              | R29.7-- codes can be reported with acute stroke I60-I63 and are sequenced after acute stroke diagnosis codes.                                                                                           | NIHSS is documented by nursing but provider never documents acute stroke.                                                |     |
| **tPA at outside facility**                  | **Z92.8**2 identifies status post tPA or rtPA administration in another facility within the last 24 hours before admission to the current facility. | Transfer patient received alteplase at outside hospital, but current chart omits **Z92.82** capture.                     |     |

## ICD-10-CM Coding Framework

| Clinical statement                                                                | Preferred coding bucket                                                                                                                                                     | Reasoning                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| “Acute ischemic stroke,” “acute cerebral infarct,” or **“CVA due to infarction**” | **I63.-**                                                                                                                                                                   | I63 is cerebral infarction and includes occlusion and stenosis of cerebral and precerebral arteries resulting in cerebral infarction                                                                                                                                                                                                                                                             |
| “Stroke” or “CVA” with no hemorrhage or infarction specified                      | **I64**                                                                                                                                                                     | **I64** is stroke not specified as hemorrhage or infarction and includes cerebrovascular accident NOS                                                                                                                                                                                                                                                                               |
| “Old CVA, no residual deficits”                                                   | **Z86.73**                                                                                                                                                                  | **Z86.73** is personal history of TIA and cerebral infarction without residual deficits.                                                                                                                                                                                                                                        |
| “History of cerebral infarction with residual left hemiparesis”                   | **I69.354 or another I69.3 residual-deficit code based on dominance and side**                                                                                              | Category I69 captures neurologic deficits that persist after initial onset of cerebrovascular disease, and I69.3 is sequelae of cerebral infarction descriptions |
| “Current stroke with deficits from old stroke”                                    | **I63.- plus I69.- as applicable**                                                                                                                                          | I69 may be assigned with I60-I67 when the patient has current cerebrovascular disease and deficits from an old cerebrovascular disease                                                                                                                                                               |
| “Possible stroke” at inpatient discharge                                          | **Code as established if it is documented at discharge as probable, suspected, likely, questionable, possible, still to be ruled out, compatible with, or consistent with** | The uncertain-diagnosis guideline applies only to inpatient admissions to short-term acute, long-term care, and psychiatric hospitals.                                                                                                                                                               |

## Acute Cerebral Infarction Category I63

**Category I63** is “**Cerebral infarction**,” and it includes **[[occlusion]]** and **[[stenosis]]** of **cerebral** and **precerebral** arteries, including **truncus** **brachiocephalicus**, resulting in cerebral infarction . **ICD10Data** lists a Type 1 Excludes note for neonatal cerebral infarction **P91.82** and Type 2 Excludes notes for chronic cerebral infarction without residual deficits **Z86.73** and sequelae of cerebral infarction **I69.3** .

**I63** also has a “**use additional code**” note for status post administration of tPA or rtPA in a different facility within the last 24 hours before admission to the current facility, reported with **Z92.82** when applicable . The practical I63 decision tree is mechanism first, vessel second, laterality third, and specificity last, while avoiding unspecified codes when provider documentation supports a more specific option.

### I63 Decision Tree

1. Confirm the provider documented acute/current cerebral infarction, ischemic stroke, or infarct-type **CVA**.
2. Identify the mechanism: **thrombosis, embolism, unspecified occlusion or stenosis, cerebral venous thrombosis**, **small artery occlusion/stenosi**s, other cerebral infarction, or unspecified **cerebral infarction**.
3. Identify whether the vessel is precerebral or cerebral.
4. Identify the vessel name: **vertebral, basilar, carotid, MCA, ACA, PCA, cerebellar, other, or unspecified**.
5. Identify laterality: right, left, bilateral, or unspecified when the code family supports laterality.
6. Capture NIHSS and **[[Z92.82]]** when applicable and supported.

## I63 Code Family Navigation

| I63 family     | Description                                                                                                                                                                                                                            | Specificity focus                                                                                           |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| **I63.0-**     | **Cerebral infarction due to thrombosis of precerebral arteries.**                        | Vertebral, basilar, carotid, other precerebral artery; right, left, bilateral, unspecified where available. |
| **I63.1-**     | **Cerebral infarction due to embolism of precerebral arteries**                          | Embolic mechanism plus vertebral, basilar, carotid, or other precerebral artery.                            |
| **I63.2-**     | **Cerebral infarction due to unspecified occlusion or stenosis of precerebral arteries** | Use when occlusion or stenosis is documented but not thrombosis or embolism.                                |
| **I63.3-**     | **Cerebral infarction due to thrombosis of cerebral arteries**                           | MCA, ACA, PCA, cerebellar artery, other cerebral artery, unspecified cerebral artery.                       |
| **I63.4-**     | **Cerebral infarction due to embolism of cerebral arteries**                             | Embolic MCA, ACA, PCA, cerebellar, other, or unspecified cerebral artery infarction.                        |
| **I63.5-**     | **Cerebral infarction due to unspecified occlusion or stenosis of cerebral arteries**    | Occlusion or stenosis documented without thrombosis or embolism.                                            |
| **[[I63.6]]**  | **Cerebral infarction due to cerebral venous thrombosis, nonpyogenic**                   | Venous thrombosis mechanism, nonpyogenic.                                                                   |
| **[[I63.81]]** | **Other cerebral infarction due to occlusion or stenosis of small artery**               | Lacunar or small-vessel infarction when documented and supported.                                           |
| **[[I63.89]]** | **Other cerebral infarction**                                                            | Specific infarction documented but not otherwise classified.                                                |
| **[[I63.9]]**  | **Cerebral infarction, unspecified**                                                     | Last-resort code when no mechanism or vessel specificity is documented.                                     |

## Stroke Not Specified as Hemorrhage or Infarction Category I64

**I64** is “**Stroke, not specified as haemorrhage or infarction**” in the ICD-10 connector output and includes cerebrovascular accident NOS . In U.S. ICD-**10-CM practice, I64** should be avoided when the chart supports a more specific acute cerebral infarction, hemorrhagic stroke, TIA, or sequela code, because official coding guidelines require diagnosis codes to be reported at the highest number of characters and highest level of specificity documented in the medical record .

Use **I64** only when the provider’s final diagnostic language remains nonspecific and there is no clear documentation that the stroke was an infarction or hemorrhage. If imaging, discharge summary, neurology assessment, and **PM&R** diagnosis disagree, query rather than selecting the most clinically likely stroke type from imaging alone.

## History of Stroke Without Residual Deficits

**Z86.73** is “Personal history of **transient ischemic attack (TIA)**, and cerebral infarction without residual deficits” in the official FY 2026 code descriptions . The **FY 2026 guidelines** specifically state that **I69** category codes should not be assigned if the patient does not have neurologic deficits, and the coder should refer to personal history guidance instead .

> [!warning] Common mistake
> Do **not** code **I69.3** for every patient with “**history of CVA**.” If there is no active neurologic deficit linked to the prior **cerebral infarctio**n, **Z86.73** is the appropriate history bucket, not a sequela code .

## Sequelae of Cerebral Infarction Category I69.3

**Category I69** is used for conditions classifiable to **I60-I67** as causes of neurologic deficits that persist after the initial onset of cerebrovascular disease, and those deficits may be present from onset or arise any time after onset ([CDC FY 2026 ICD-10-CM Guidelines](https://ftp.cdc.gov/pub/Health_Statistics/NCHS/Publications/ICD10CM/2026-update/ICD-10-CM%20April%201%202026%20Guidelines%20Final.pdf)). **I69.3** is the **cerebral infarction-specific sequela family**, and **official FY 2026 descriptions** include deficit-specific codes for **cognitive deficits**, **speech** and **language deficits, monoplegia, hemiplegia or hemiparesis, other paralytic syndrome, apraxia, dysphagia, facial weakness, ataxia, and other sequelae following cerebral infarction** .

Unlike many sequela situations that require the residual condition first and the sequela code second, **I69** codes are expanded to include the residual manifestation in the code title, such as “**hemiplegia** and **hemiparesis** following **cerebral infarction** affecting right dominant side” . The acute **I63** code should not be used with a late-effect code for the same prior **infarction** because the code for the acute phase of an illness or injury that led to the sequela is never used with a code for the late effect .

## Dominant and Non-Dominant Side Rules

**I69** codes that specify **hemiplegia, hemiparesis, and monoplegi**a identify whether the dominant or nondominant side is affected . If the affected side is documented but dominance is not specified and the classification does not provide another default, the **FY 2026 guidelines** state that ambidextrous patients default to dominant, left side defaults to non-dominant, and right side defaults to dominant.

| Documentation                                      | Default if dominance missing                                                                                                                                                                                    | Coding implication                                                                                                                                                                                                                                            |
| -------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Right-sided hemiparesis after cerebral infarction**  | Right side defaults to dominant     | I69.351 if coding hemiplegia and hemiparesis following cerebral infarction affecting right dominant side ([CDC FY 2026 code descriptions](https://ftp.cdc.gov/pub/health_statistics/nchs/publications/ICD10CM/2026/icd10cm-Code%20Descriptions-2026.zip)).    |
| **Left-sided hemiparesis after cerebral infarction**   | Left side defaults to non-dominant  | I69.354 if coding hemiplegia and hemiparesis following cerebral infarction affecting left non-dominant side ([CDC FY 2026 code descriptions](https://ftp.cdc.gov/pub/health_statistics/nchs/publications/ICD10CM/2026/icd10cm-Code%20Descriptions-2026.zip)). |
| **Ambidextrous patient with affected side documented** | Default to dominant           | Select the dominant-side option when the code family requires dominance.                                                                                                                                                                                      |
| **Side not documented**                                | Cannot apply right/left default because affected side is unknown.                                                                                                                                               | Use unspecified-side code only if no compliant query is needed or available.                                                                                                                                                                                  |

## Residual Deficit Coding for PM&R

**PM&R documentation** is often where residual deficits become codable because the physiatrist documents active impairments, treatment plans, functional limitations, safety issues, and discharge needs. The **AHA/ASA rehabilitation guideline** emphasizes formal assessment of **ADLs, IADLs**, communication abilities, functional mobility, residual neurologic deficits, cognitive and psychological status, swallowing ability, prior functional ability, **comorbidities**, caregiver support, likelihood of returning to community living, and ability to participate in rehabilitation .

| Residual deficit family        | Official I69.3 examples                                                                                                                                                                                                                                                                                                                                                                                                                                                    | PM&R documentation clues                                                                                                                                  |
| ------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Cognitive deficits**             | **[[I69.310]]** attention and concentration deficit, **[[I69.311]]** memory deficit, **[[I69.312]]** visuospatial deficit and spatial neglect, **[[I69.314]]** frontal lobe and executive function deficit, **[[I69.315]]** cognitive social or emotional deficit, and related cognitive codes after cerebral infarction ([CDC FY 2026 code descriptions](https://ftp.cdc.gov/pub/health_statistics/nchs/publications/ICD10CM/2026/icd10cm-Code%20Descriptions-2026.zip)). | Poor carryover, impaired safety awareness, neglect, impaired sequencing, reduced attention, executive dysfunction, neuropsych testing, cognitive therapy. |
| **Speech and language deficits**   | **[[I69.320]]** aphasia, **[[I69.321]]** dysphasia, **[[I69.322]]** dysarthria, **[[I69.323]]** fluency disorder, and **[[I69.328]]** other speech and language deficits after cerebral infarction ([CDC FY 2026 code descriptions](https://ftp.cdc.gov/pub/health_statistics/nchs/publications/ICD10CM/2026/icd10cm-Code%20Descriptions-2026.zip)).                                                                                                                       | SLP evaluation, expressive or receptive aphasia, dysarthria, apraxia of speech, communication partner training.                                           |
| **Monoplegia**                     | **[[I69.331]]-[[I69.339]]** for upper limb monoplegia and **[[I69.341]]-[[I69.349]]** for lower limb monoplegia after cerebral infarction, with dominance and side options ([CDC FY 2026 code descriptions](https://ftp.cdc.gov/pub/health_statistics/nchs/publications/ICD10CM/2026/icd10cm-Code%20Descriptions-2026.zip)).                                                                                                                                               | Single-limb weakness, bracing, splinting, gait or upper-limb functional training.                                                                         |
| **Hemiplegia or hemiparesis**      | **[[I69.351]]-[[I69.359]]** for hemiplegia and hemiparesis after cerebral infarction, with dominance and side options ([CDC FY 2026 code descriptions](https://ftp.cdc.gov/pub/health_statistics/nchs/publications/ICD10CM/2026/icd10cm-Code%20Descriptions-2026.zip)).                                                                                                                                                                                                    | Contralateral weakness, gait impairment, transfers, spasticity, shoulder subluxation, tone management, fall risk.                                         |
| **Other paralytic syndrome**       | **[[I69.361]]-[[I69.369]]** for other paralytic syndrome after cerebral infarction, including bilateral option ([CDC FY 2026 code descriptions](https://ftp.cdc.gov/pub/health_statistics/nchs/publications/ICD10CM/2026/icd10cm-Code%20Descriptions-2026.zip)).                                                                                                                                                                                                           | More complex motor deficit not captured by monoplegia or hemiparesis.                                                                                     |
| **Swallowing and facial deficits** | **[[I69.391]]** dysphagia and **[[I69.392]]** facial weakness after cerebral infarction ([CDC FY 2026 code descriptions](https://ftp.cdc.gov/pub/health_statistics/nchs/publications/ICD10CM/2026/icd10cm-Code%20Descriptions-2026.zip)).                                                                                                                                                                                                                                  | Modified diet, aspiration precautions, **FEES/VFSS**, oral motor weakness, facial droop.                                                                  |
| **Ataxia and apraxia**             | **[[I69.390]]** apraxia and **[[I69.393]]** ataxia after cerebral infarction ([CDC FY 2026 code descriptions](https://ftp.cdc.gov/pub/health_statistics/nchs/publications/ICD10CM/2026/icd10cm-Code%20Descriptions-2026.zip)).                                                                                                                                                                                                                                             | Dysmetria, coordination deficits, motor planning deficits, balance therapy, cerebellar signs.                                                             |
| **Other sequelae**                 | **[[I69.398]]** other sequelae of cerebral infarction ([CDC FY 2026 code descriptions](https://ftp.cdc.gov/pub/health_statistics/nchs/publications/ICD10CM/2026/icd10cm-Code%20Descriptions-2026.zip)).                                                                                                                                                                                                                                                                    | Use when provider documents a stroke residual not otherwise classified and the deficit is active/reportable.                                              |

## NIHSS Stroke Scale Codes

**NIHSS codes R29.7-**- can be used with acute stroke codes I60-I63 to identify neurologic status and stroke severity, and the stroke scale codes should be sequenced after the acute stroke diagnosis codes . The FY 2026 guidelines state that at minimum the initial **NIHSS** score should be reported, and a facility may choose to capture multiple scores if desired.

**NIHSS** is one of the limited data elements that may be documented by clinicians other than the patient’s provider, but the associated diagnosis of acute stroke must be documented by the provider. **Official FY 2026** code descriptions include **[[R29.700]]** through **[[R29.742]]** for **NIHSS** scores 0 through 42.

## tPA rtPA Status Code Z92.82

**[[Z92.82]]** is “Status post administration of **tPA (rtPA)** in a different facility within the last 24 hours prior to admission to current facility”. **ICD10Data** lists a use-additional-code instruction under I63 for this status code when applicable, and the **Z92.82** note says to code first the condition requiring tPA administration, such as acute cerebral infarction I63.- or acute myocardial infarction I21.- or I22.-.

For transfer charts, look for outside ED records, telestroke notes, EMS transfer summaries, medication administration records, neurology consults, and arrival documentation. Do **not** confuse “**received tPA at our facility**” with the **[[Z92.82]]** transfer-status concept, because the **ICD10Data** note specifically identifies tPA administered in a different facility within the last 24 hours before admission to the current facility.

## MS-DRG and Facility Impact Awareness

For facility awareness, **CMS MS-DRG** definitions group ischemic [[stroke]], precerebral [[occlusion]], or transient ischemia with thrombolytic agent into **DRGs 061, 062**, and **063** depending on **MCC, CC**, or without **CC/MCC** status, and intracranial hemorrhage or cerebral infarction into **DRGs 064, 065**, and **066** depending on **MCC, CC, tPA-in-24**-hours logic, or without **CC/MCC** status. Professional-fee coders generally do not assign **MS-DRGs**, but awareness helps identify why precise infarction type, tPA status, neurologic deficits, complications, and comorbidities receive extra **CDI** and facility review attention.

| Facility grouping concept | Practical coder awareness                                                                                                                                                                                                            |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **DRGs 061-063**              | Stroke, precerebral occlusion, or transient ischemia with thrombolytic agent, split by MCC, CC, and without CC/MCC logic ([CMS MS-DRG v36 definitions](https://www.cms.gov/icd10m/version36-fullcode-cms/fullcode_cms/P0060.html)).  |
| **DRGs 064-066**              | Intracranial hemorrhage or cerebral infarction, split by MCC, CC or tPA in 24 hours, and without CC/MCC logic ([CMS MS-DRG v42 definitions](https://www.cms.gov/icd10m/FY2025-NPRM-Version42-fullcode-cms/fullcode_cms/P0002.html)). |
| **CDI pressure points**       | Query clarity often centers on stroke type, acute versus sequela status, vessel specificity, clinical significance of deficits, POA status, tPA transfer status, and reportable comorbidities.                                       |

## PM&R Evaluation Focus

The **AHA/ASA guideline** recommends that **stroke** survivors who are candidates for post-acute **rehabilitation** receive organized, coordinated, interprofessional care, and it states that **[[stroke]]** survivors who qualify for and have access to IRF care should receive IRF care in preference to care. The guideline also states that stroke survivors should receive rehabilitation at an intensity commensurate with anticipated benefit and tolerance, while high-dose very early mobilization within 24 hours of stroke onset can reduce odds of favorable outcome at 3 months and is not recommended.

## 🔗 External Cause Coding (**Required**)

> [!warning] External Cause Codes Are Required
> Facial fractures require external cause coding. These do **NOT** drive DRG but are required for complete coding and trauma registry.

| External Cause Category    | Code Range       | Examples                    |
| -------------------------- | ---------------- | --------------------------- |
| **Motor vehicle accident** | **V20-V79**      | MVA most common mechanism   |
| **Assault**                | **X92-Y09**      | Interpersonal violence      |
| **Fall**                   | **W00-W19**      | Ground-level fall           |
| **Sports/recreation**      | **W21-W31, Y93** | Contact sports, cycling     |
| **Place of occurrence**    | **Y93.-**        | Where injury happened       |
| **Activity**               | **Y93.-**        | What patient was doing      |
| **Patient status**         | **Y99.-**        | Civilian, military, leisure |

---

For **PM&R** coding review, the strongest notes usually document baseline function, current impairments, therapy tolerance, medical stability, complications, discharge setting, caregiver support, safety risks, and whether deficits are linked to the cerebral infarction. **AHA/ASA guidance** supports formal functional assessment by a clinician with rehabilitation expertise for acute stroke patients with residual functional deficits and recommends **ADL, IADL**, communication, and functional mobility assessment before acute-care discharge .

### PM&R Documentation Targets

| PM&R domain           | Coder should look for                                                                    | Why it matters                                                                                                                                                                                                                                                                                                                    |
| --------------------- | ---------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Mobility**          | Bed mobility, transfers, gait, balance, assistive device, fall risk, endurance.          | Supports functional severity, therapy needs, discharge planning, and medical decision making.                                                                                                                                                                                                                                     |
| **ADLs and IADLs**    | Feeding, grooming, bathing, dressing, toileting, medication management, household tasks. | AHA/ASA recommends formal ADL/IADL assessment and incorporation into discharge planning ([AHA/ASA Adult Stroke Rehabilitation Guideline Slides](https://professional.heart.org/en/-/media/PHD-Files-2/Science-News/g/guidelines_for_adult_stroke_rehab_and_recovery_ucm_485182.pdf)).                                             |
| **Communication**     | Aphasia, dysarthria, apraxia of speech, cognitive-communication deficits.                | May support I69.320-I69.328 when linked to cerebral infarction and active.                                                                                                                                                                                                                                                        |
| **Swallowing**        | Diet level, aspiration risk, FEES/VFSS, enteral feeding, SLP plan.                       | AHA/ASA recommends dysphagia screening and swallow assessment before eating, drinking, or oral medications in acute stroke patients ([AHA/ASA Adult Stroke Rehabilitation Guideline Slides](https://professional.heart.org/en/-/media/PHD-Files-2/Science-News/g/guidelines_for_adult_stroke_rehab_and_recovery_ucm_485182.pdf)). |
| **Cognition**         | Attention, memory, executive function, neglect, safety awareness, carryover.             | Cognitive deficits after cerebral infarction have specific I69.31- options ([CDC FY 2026 code descriptions](https://ftp.cdc.gov/pub/health_statistics/nchs/publications/ICD10CM/2026/icd10cm-Code%20Descriptions-2026.zip)).                                                                                                      |
| **Motor and tone**    | Hemiparesis, monoplegia, spasticity, flaccidity, coordination, shoulder subluxation.     | Motor residuals after cerebral infarction have specific I69.33-I69.36 options ([CDC FY 2026 code descriptions](https://ftp.cdc.gov/pub/health_statistics/nchs/publications/ICD10CM/2026/icd10cm-Code%20Descriptions-2026.zip)).                                                                                                   |
| **Mood and behavior** | Depression, anxiety, emotional lability, pseudobulbar affect, adjustment.                | AHA/ASA recommends structured depression screening and reassessment of psychiatric symptoms in stroke survivors ([AHA/ASA Adult Stroke Rehabilitation Guideline Slides](https://professional.heart.org/en/-/media/PHD-Files-2/Science-News/g/guidelines_for_adult_stroke_rehab_and_recovery_ucm_485182.pdf)).                     |

## Common PM&R Stroke Deficits

| Deficit                       | Clinical/rehab note language                                                           | Coding note                                                                                                                                                                                                                                           |
| ----------------------------- | -------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Hemiparesis or hemiplegia** | “Left hemiparesis,” “right-sided weakness,” “dense hemiplegia,” “spastic hemiparesis.” | Use **I69.351-I69.359** when following cerebral infarction and active; determine side and dominance ([CDC FY 2026 code descriptions](https://ftp.cdc.gov/pub/health_statistics/nchs/publications/ICD10CM/2026/icd10cm-Code%20Descriptions-2026.zip)). |
| **Aphasia**                   | Expressive, receptive, global, Broca, Wernicke, word-finding difficulty.               | **I69.320** is aphasia following cerebral infarction ([CDC FY 2026 code descriptions](https://ftp.cdc.gov/pub/health_statistics/nchs/publications/ICD10CM/2026/icd10cm-Code%20Descriptions-2026.zip)).                                                |
| **Dysarthria**                | Slurred speech, impaired articulation, motor speech impairment.                        | **I69.322** is dysarthria following cerebral infarction ([CDC FY 2026 code descriptions](https://ftp.cdc.gov/pub/health_statistics/nchs/publications/ICD10CM/2026/icd10cm-Code%20Descriptions-2026.zip)).                                             |
| **Dysphagia**                 | Modified diet, aspiration precautions, tube feeding, abnormal swallow study.           | **I69.391** is dysphagia following cerebral infarction ([CDC FY 2026 code descriptions](https://ftp.cdc.gov/pub/health_statistics/nchs/publications/ICD10CM/2026/icd10cm-Code%20Descriptions-2026.zip)).                                              |
| **Spatial neglect**           | Left neglect, hemispatial neglect, inattention, visuospatial deficit.                  | **I69.312** is visuospatial deficit and spatial neglect following cerebral infarction ([CDC FY 2026 code descriptions](https://ftp.cdc.gov/pub/health_statistics/nchs/publications/ICD10CM/2026/icd10cm-Code%20Descriptions-2026.zip)).               |
| **Ataxia**                    | Cerebellar signs, impaired coordination, dysmetria, balance instability.               | **I69.393** is ataxia following cerebral infarction ([CDC FY 2026 code descriptions](https://ftp.cdc.gov/pub/health_statistics/nchs/publications/ICD10CM/2026/icd10cm-Code%20Descriptions-2026.zip)).                                                 |
| **Apraxia**                   | Motor planning deficit, ideomotor apraxia, difficulty sequencing skilled movements.    | **I69.390** is apraxia following cerebral infarction ([CDC FY 2026 code descriptions](https://ftp.cdc.gov/pub/health_statistics/nchs/publications/ICD10CM/2026/icd10cm-Code%20Descriptions-2026.zip)).                                                |
| **Facial weakness**           | Facial droop, facial palsy, oral motor weakness.                                       | **I69.392** is facial weakness following cerebral infarction ([CDC FY 2026 code descriptions](https://ftp.cdc.gov/pub/health_statistics/nchs/publications/ICD10CM/2026/icd10cm-Code%20Descriptions-2026.zip)).                                        |

## Query Opportunities

> [!question] Query mindset
> **Query** when the record contains clinically significant **ambiguity** that affects code assignment, severity, quality reporting, or payer **interpretation**. Do **not** query for information already clearly documented by a provider, and do not lead the provider to a diagnosis that is unsupported by the record.

| Situation                                                                    | Why it matters                                                                                         | Example compliant query focus                                                                                                           |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------- |
| **“CVA” documented, imaging shows acute infarct**                            | Stroke NOS versus cerebral infarction changes code family.                                             | “Can the type of CVA be further specified as cerebral infarction, hemorrhage, TIA, other, or unable to determine?”                      |
| **Imaging says “left MCA infarct,” final diagnosis says “stroke”**           | Vessel and laterality specificity may support a more specific I63 code.                                | “Can the documented stroke be further specified by vascular territory or artery involved?”                                              |
| **“Embolic appearing infarcts” in imaging, provider says “ischemic stroke”** | Mechanism may change I63 family.                                                                       | “Can the mechanism of the cerebral infarction be specified as embolism, thrombosis, occlusion/stenosis, other, or unable to determine?” |
| **“History of CVA” plus current hemiparesis**                                | **Z86.73** versus I69.3 depends on residual deficit linkage.                                           | “Is the current hemiparesis a residual effect of the prior cerebral infarction?”                                                        |
| **PM&R documents dysphagia but no provider links it to stroke**              | Dysphagia following cerebral infarction requires causal linkage.                                       | “Can the dysphagia be clinically attributed to the cerebral infarction, another cause, multifactorial causes, or unable to determine?”  |
| **Side affected documented, dominance absent**                               | Dominance default rules may apply, but handedness is better if easily clarified.                       | “For the documented hemiparesis, is the affected side dominant, non-dominant, **ambidextrous**, or unable to determine?”                |
| **Acute stroke and old stroke residuals both present**                       | Both current I63 and old I69 may be reportable if distinct.                                            | “Are the documented residual deficits due to the current stroke, a prior **stroke**, or both?”                                          |
| **tPA transfer status unclear**                                              | **Z92.82** applies only to tPA or rtPA given at a different facility within 24 hours before admission. | “Was tPA administered at an outside facility within 24 hours before admission to this facility?”                                        |

## Audit Traps and Coding Pitfalls

- **Coding I69.3 for history only**: **I69** should not be assigned when the patient has no neurologic deficits, and **Z86.73** is the history code for TIA and cerebral infarction without residual deficits ([CDC FY 2026 ICD-10-CM Guidelines](https://ftp.cdc.gov/pub/Health_Statistics/NCHS/Publications/ICD10CM/2026-update/ICD-10-CM%20April%201%202026%20Guidelines%20Final.pdf), [CDC FY 2026 code descriptions](https://ftp.cdc.gov/pub/health_statistics/nchs/publications/ICD10CM/2026/icd10cm-Code%20Descriptions-2026.zip)).
- **Coding acute I63 and I69.3 for the same old infarct**: The acute-phase code should never be used with the late-effect code for the same sequela-producing illness or injury ([CDC FY 2026 ICD-10-CM Guidelines](https://ftp.cdc.gov/pub/Health_Statistics/NCHS/Publications/ICD10CM/2026-update/ICD-10-CM%20April%201%202026%20Guidelines%20Final.pdf)).
- **Missing old deficits during new stroke admission**: **I69** may be assigned with **I60-I67** when the patient has current cerebrovascular disease and deficits from an old cerebrovascular disease ([CDC FY 2026 ICD-10-CM Guidelines](https://ftp.cdc.gov/pub/Health_Statistics/NCHS/Publications/ICD10CM/2026-update/ICD-10-CM%20April%201%202026%20Guidelines%20Final.pdf)).
- **Treating imaging as provider diagnosis**: ICD-10-CM code assignment is based on provider documentation, except for limited elements such as NIHSS, laterality, and other specified items, and the associated diagnosis still must be documented by the provider ([CDC FY 2026 ICD-10-CM Guidelines](https://ftp.cdc.gov/pub/Health_Statistics/NCHS/Publications/ICD10CM/2026-update/ICD-10-CM%20April%201%202026%20Guidelines%20Final.pdf)).
- **Ignoring dominance defaults**: If side is documented but dominance is missing and no other classification default applies, right side defaults to dominant, left side defaults to non-dominant, and ambidextrous defaults to dominant ([CDC FY 2026 ICD-10-CM Guidelines](https://ftp.cdc.gov/pub/Health_Statistics/NCHS/Publications/ICD10CM/2026-update/ICD-10-CM%20April%201%202026%20Guidelines%20Final.pdf)).
- **Forgetting NIHSS sequencing**: **NIHSS R29.7-**- codes are sequenced after acute stroke diagnosis codes **I60-I63** ([CDC FY 2026 ICD-10-CM Guidelines](https://ftp.cdc.gov/pub/Health_Statistics/NCHS/Publications/ICD10CM/2026-update/ICD-10-CM%20April%201%202026%20Guidelines%20Final.pdf)).
- **Using I63.9 when artery details exist**: **ICD-10-CM** requires coding to the highest level of specificity documented, so **I63.9** should not be used when the provider documents mechanism, vessel, and laterality that support a more specific code ([CDC FY 2026 ICD-10-CM Guidelines](https://ftp.cdc.gov/pub/Health_Statistics/NCHS/Publications/ICD10CM/2026-update/ICD-10-CM%20April%201%202026%20Guidelines%20Final.pdf)).
- **Confusing tPA at current facility with Z92.82**: **Z92.82** is for tPA or rtPA administered at a different facility within 24 hours before admission to the current facility ([ICD10Data I63](https://www.icd10data.com/ICD10CM/Codes/I00-I99/I60-I69/I63-)).
- **Overcoding therapy-only findings**: Therapy documentation is excellent for function, but the provider must document the associated diagnosis and causal linkage for diagnosis code assignment unless a specific guideline exception applies ([CDC FY 2026 ICD-10-CM Guidelines](https://ftp.cdc.gov/pub/Health_Statistics/NCHS/Publications/ICD10CM/2026-update/ICD-10-CM%20April%201%202026%20Guidelines%20Final.pdf)).

## Supervisor-Level Review Checklist

### Acute Stroke Review

- [ ] Provider documents acute/current **stroke** type as **ischemic infarction, hemorrhage, TIA, or stroke NOS**.
- [ ] Final diagnosis is reconciled against imaging, **neurology**, discharge summary, and **PM&R documentation**.
- [ ] I63 mechanism is captured when documented: **thrombosis**, **embolism**, unspecified **occlusion** or **stenosis**, **venous thrombosis**, **small artery**, other, or unspecified.
- [ ] Vessel or territory is captured when documented: **vertebral, basilar, carotid, MCA, ACA, PCA, cerebellar, other, or unspecified**.
- [ ] Laterality or bilateral disease is captured when available.
- [ ] **NIHSS R29.7-**- is reported only with acute stroke I60-I63 and sequenced after the acute **stroke** diagnosis when applicable ([CDC FY 2026 ICD-10-CM Guidelines](https://ftp.cdc.gov/pub/Health_Statistics/NCHS/Publications/ICD10CM/2026-update/ICD-10-CM%20April%201%202026%20Guidelines%20Final.pdf)).
- [ ] **Z92.82** is captured when tPA or rtPA was given at a different facility within 24 hours before admission to the current facility ([ICD10Data I63](https://www.icd10data.com/ICD10CM/Codes/I00-I99/I60-I69/I63-)).
- [ ] **POA** status is reviewed for **stroke**, complications, deficits, and **comorbidities** using official **POA** guidance ([CDC FY 2026 ICD-10-CM Guidelines](https://ftp.cdc.gov/pub/Health_Statistics/NCHS/Publications/ICD10CM/2026-update/ICD-10-CM%20April%201%202026%20Guidelines%20Final.pdf)).

### Sequela Review

- [ ] **Documentation** supports that the acute phase has ended and the current issue is a residual deficit.
- [ ] Residual deficit is active, evaluated, treated, monitored, or affects care.
- [ ] Provider links the residual deficit to the prior cerebral infarction.
- [ ] **I69.3** code selection matches the deficit: **cognitive, speech/language, monoplegia, hemiplegia/hemiparesis, other paralytic syndrome, apraxia, dysphagia, facial weakness, ataxia, or other.**
- [ ] Dominant/non-dominant side is assigned using documentation or official defaults when allowed.
- [ ] **Z86.73** is used instead of I69.3 when there are no residual deficits.

### PM&R Medical Necessity Review

- [ ] **PM&R note** documents prior level of function and current level of function.
- [ ] Functional impairments align with therapy plan, precautions, equipment, and discharge needs.
- [ ] Swallowing, communication, cognition, mobility, **ADL/IADL**, bowel/bladder, skin, **VTE** risk, pain, **[[spasticity]]**, and mood are assessed when clinically relevant.
- [ ] Therapy tolerance and rehab intensity are supported by medical stability and expected benefit.
- [ ] Discharge planning includes caregiver support, home environment, community return likelihood, and safety barriers.

## Example Coding Scenarios

### Scenario: Acute Left MCA Embolic Infarct With Aphasia

Provider documents “acute embolic infarct of left middle cerebral artery with expressive aphasia,” and NIHSS 9 is documented on admission. The I63 family supports cerebral infarction due to embolism of the left middle cerebral artery, and R29.709 describes NIHSS score 9 when reported with the acute stroke diagnosis and sequenced after it. If aphasia is part of the acute stroke presentation, do not automatically assign an I69.3 sequela code unless the documentation supports a residual deficit after the acute phase or a separate old stroke sequela.

### Scenario: Old Cerebral Infarction With Residual Left Hemiparesis

Provider documents “history of right MCA cerebral infarct with residual left hemiparesis; patient admitted to rehab for gait training and ADL retraining.” I69.354 is supported if the affected side is left and dominance is not specified, because left side defaults to non-dominant under the I69 dominance rules, and I69.354 describes hemiplegia and hemiparesis following cerebral infarction affecting the left non-dominant side.

### Scenario: History of Stroke With No Current Deficits

Provider documents “history of CVA, no residual deficits” during PM&R evaluation for lumbar radiculopathy. Z86.73 is the correct history code because it describes personal history of TIA and cerebral infarction without residual deficits, while the FY 2026 guidelines state that I69 should not be assigned when there are no neurologic deficits.

### Scenario: Transfer After Outside tPA

Patient received alteplase at an outside hospital for acute cerebral infarction and was transferred to the current facility within 24 hours. Report the acute I63 code supported by the provider documentation and add Z92.82 because ICD10Data instructs additional coding for tPA or rtPA administered in a different facility within 24 hours before admission to the current facility.

### Scenario: New Stroke Plus Old Stroke Deficit

Patient is admitted with acute right cerebellar infarct and has chronic expressive aphasia from a prior left MCA infarct. The FY 2026 guidelines allow category I69 codes to be assigned with I60-I67 when the patient has current cerebrovascular disease and deficits from an old cerebrovascular disease, so the coder may report the acute infarct code and the old-stroke aphasia sequela code if both are documented and reportable .

## Obsidian Quick Reference Blocks

### Quick Stroke Coding Decision Tree

```text
1. Is the stroke current/acute?
   - Yes: code I63.- if cerebral infarction/ischemic stroke is documented.
   - No: go to residual-deficit question.

2. Are there current residual deficits from the prior cerebral infarction?
   - Yes: code I69.3- based on the specific residual deficit.
   - No: code Z86.73 for history of TIA/cerebral infarction without residual deficits.

3. If acute I63:
   - Determine mechanism: thrombosis, embolism, occlusion/stenosis, venous thrombosis, small artery, other, unspecified.
   - Determine vessel: vertebral, basilar, carotid, MCA, ACA, PCA, cerebellar, other, unspecified.
   - Determine laterality: right, left, bilateral, unspecified.
   - Add NIHSS R29.7-- when supported.
   - Add Z92.82 when outside-facility tPA/rtPA was given within 24 hours before admission.
```

### PM&R Stroke Review Template

```markdown
## Stroke PM&R Coding Review

- Stroke status:
  - [ ] Acute/current infarction
  - [ ] Sequela of prior cerebral infarction
  - [ ] History without residual deficits
  - [ ] Stroke NOS, needs clarification if clinically supported

- Acute infarction specificity:
  - Vessel/territory:
  - Mechanism:
  - Laterality:
  - NIHSS:
  - tPA/rtPA at outside facility within 24 hours:

- Residual deficits:
  - Motor:
  - Speech/language:
  - Swallowing:
  - Cognition/neglect:
  - Ataxia/apraxia:
  - Mood/behavior:
  - ADL/IADL limitations:
  - Mobility/transfer limitations:

- Query opportunities:
  - [ ] Acute vs old/sequela unclear
  - [ ] Infarction vs hemorrhage vs stroke NOS unclear
  - [ ] Vessel/mechanism/laterality unclear
  - [ ] Residual deficit not linked to prior infarct
  - [ ] Dominance/affected side unclear
```

### High-Yield Phrase Bank for Notes

```text
Coding diagnosis:
- Acute cerebral infarction due to [mechanism] of [right/left/bilateral] [artery].
- Sequela of cerebral infarction with residual [deficit].
- Personal history of cerebral infarction without residual deficits.

PM&R documentation support:
- Residual [deficit] affects [mobility/ADLs/swallowing/speech/cognition/safety].
- Patient requires [PT/OT/SLP/rehab nursing/physiatry] for [specific functional goals].
- Deficit is attributed to prior cerebral infarction dated [date] or documented history.
```

