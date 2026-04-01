---
tags:
  - medterm
aliases:
  - Hypertension
  - HTN
  - high blood pressure
  - hyperpiesia
  - essential hypertension
roots:
  - hyper-
  - -tens-
  - -ion
  - -sion
forms:
  - prefix
  - suffix
  - noun
alphabet: H
definition:
  - Persistently elevated arterial blood pressure
---
>[!Note] DEFINITION of [[hypertension]]
> **Hypertension** is a **chronic cardiovascular condition in which the force exerted by circulating blood against the vessel walls remains consistently above normal thresholds**. It is classified as **primary (essential)** — accounting for roughly **90–95%** of all cases with no identifiable underlying cause — or **secondary**, where a distinct cause such as renal artery [[stenosis]], primary **aldosteronism**, or medication side effects can be identified. Often called the "**silent killer**," hypertension rarely causes symptoms until it has already damaged target organs including the **heart, kidneys, brain, and retina**. The term entered medical use in 1863–1896, and true clinical measurement became possible only after Scipione Riva-Rocci invented the cuff-based sphygmomanometer in 1896. The concept of _essential hypertension_ was formally coined by **Eberhard Frank** in 1911 to describe elevated BP with no identifiable etiology.
_____
>[!info]+ ETYMOLOGY of [[hypertension]]
>#greek
>
>Three components combine to form the word:
>
>|Component | Origin| Meaning|
>|---|---|---|
>|**[[hyper-]]**|Greek _ὑπέρ (hypér)_|Over, above, excessive, beyond normal|
>|**[[tens-]]**|Latin _tendere_|To stretch, to be tense|
>|**[[-ion]]**|Latin _[[-io]]_|Condition/state of|
>
>The word literally means _"**the condition of excessive tension/stretching**"_ — referring to the tension within the arterial walls under pressure. It was likely modeled after the French _hypertension_, first recorded in English around 1893.
>
_____

> [!success]+ ## Aliases & Related Terms
> 
> - **HTN** — standard clinical abbreviation
>     
> - **High blood pressure (HBP)** — lay/patient-facing term
>     
> - **Essential hypertension** — primary HTN with no identifiable cause
>     
> - **Secondary hypertension** — HTN driven by an underlying condition (renal, endocrine, drug-induced)
>     
> - **Malignant hypertension** — severe HTN with [[retinopathy]] and rapid organ failure; coined 1928 at the Mayo Clinic
>     
> - **Resistant hypertension** — BP remaining uncontrolled on ≥3 antihypertensive agents
>     
> - **Hypertensive crisis** — umbrella term for urgency and emergency
>     
> - **Hyperpiesia** — older term used by Sir Clifford Allbutt
>     
> - **Renovascular hypertension** — secondary HTN from renal artery stenosis
>     
> - **Isolated systolic hypertension (ISH)** — elevated systolic with normal diastolic; common in elderly patients
>
_____


> [!example]+ #### CODING CORNER
> 
> ## ICD-10-CM Codes
> 
> Hypertension codes fall under **Chapter 9: Diseases of the Circulatory System**, category range **I10–I1A**. Note the ICD-10-CM coding guideline: when a causal relationship between hypertension and heart disease **or** CKD is documented, use the combination codes from I11–I13 rather than coding them separately.aapc+1
> 
> | ICD-10-CM Code | Description                                                   |
> | -------------- | ------------------------------------------------------------- |
> | **[[I10]]**    | Essential (primary) hypertension                              |
> | **[[I11.0]]**  | Hypertensive heart disease **with** heart failure             |
> | **[[I11.9]]**  | Hypertensive heart disease **without** heart failure          |
> | **[[I12.9]]**  | Hypertensive chronic kidney disease, stage 1–4 or unspecified |
> | **[[I12.10]]** | Hypertensive CKD with stage 5 CKD or ESRD, without HD         |
> | **[[I13.0]]**  | Hypertensive heart & CKD **with** HF and stage 1–4 CKD        |
> | **[[I13.2]]**  | Hypertensive heart & CKD **with** HF and stage 5 CKD/ESRD     |
> | **[[I15.0]]**  | Renovascular hypertension                                     |
> | **[[I15.1]]**  | HTN secondary to other renal disorders                        |
> | **[[I15.2]]**  | HTN secondary to endocrine disorders                          |
> | **[[I16.0]]**  | Hypertensive urgency                                          |
> | **[[I16.1]]**  | Hypertensive emergency                                        |
> 
> > 🩺 **Inpatient profee coder tip:** Per FY2026 ICD-10-CM Official Guidelines, hypertension with conditions classified to **I50.- (Heart Failure), I51.4 (Myocarditis, unspecified), I51.89, and I51.9** is now assigned to category **I11**, not separately. Always check for updated Chapter 9 combination code guidance each fiscal year — it trips up even experienced coders!
> 
> ---
> 
> ## CPT & Monitoring Codes
> 
> |Code|Description|
> |---|---|
> 
> | Code              | Description                                                                                                                                                                                                      |
> | ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
> | **[[99212]]–[[99215]]**   | E/M established patient visit for HTN management                                                                                                  |
> | **[[99473]]**         | Self-measured BP using validated device; patient education/training                                                                                                                                              |
> | **[[99474]]**         | Self-measured BP; 30-day data collection (min. 12 readings), report of averages, treatment plan                                                  |
> | **[[93784]]**         | Ambulatory blood pressure monitoring (ABPM), 24-hour, with interpretation                                                                                                                                        |
> | **[[93788]]**         | ABPM, 24-hour recording without interpretation                                                                                                                                                                   |
> | **[[93790]]**         | ABPM review with physician interpretation and report                                                                                                                                                             |
> | **[[3074F]] / [[3075F]]** | CPT II: most recent BP < 140/90 mmHg / BP ≥ 140/90 mmHg (HEDIS quality measures) |
> | **[[3078F]] / [[3079F]]** | CPT II: diastolic BP reading reported

_____
>[!tip]- DERIVATIONS of [[hypertension]]
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

[[Med roots]]
[[Appendix A Prefixes]]
[[Appendix B Combining Forms]]
[[Appendix C Suffixes]]
[[Appendix D Suffix forms]]