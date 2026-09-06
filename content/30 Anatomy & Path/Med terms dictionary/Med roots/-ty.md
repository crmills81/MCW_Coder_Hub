---
tags:
  - medroot
aliases:
  - -ity
roots:
  - -ty
  - -ity
forms:
  - suffix
  - noun
alphabet: T
definition: A suffix used to form abstract nouns indicating a state, quality, or condition.
---

>[!Note] DEFINITION of [[-ty]]
>**[[-ty]]** (and its common variant [[-ity]]) is a Latin-derived suffix used to transform an adjective into a noun that describes a **state, quality, or condition**. Unlike suffixes such as [[-osis]] (which typically denotes a pathological process) or [[-ia]] (which often denotes a specific medical disease), [[-ty]] usually describes a **characteristic or a measurable state** of being. For example, *Toxicity* is the state of being toxic, and *Obesity* is the state of being obese. In clinical documentation, terms ending in [[-ty]] are often used to describe the severity or nature of a patient's condition (e.g., *fragility*, *intensity*, *morbidity*), providing the qualitative data necessary to assign specific ICD-10-CM codes.

_____

>[!info]+ ETYMOLOGY of [[-ty]]
>#latin
>
>|Component|Origin|Meaning|
>|---|---|---|
>|**[[-ty]]** / **[[-ity]]**|[Latin] _-tas / -tatis_ ([tās])|"**state**," "**quality**," or "**condition**" — used to create abstract nouns.|
>
> The suffix entered English via Old French, originating from the Latin ***-tas***. It is a highly productive suffix in both general and medical English. It belongs to a family of "condition-markers" that allow clinicians to move from a description (the adjective "morbid") to a diagnostic entity (the noun "morbidity"). It is linguistically related to the Greek suffix [[-sis]] and [[-ia]], though it carries a more "characteristic" rather than "disease-process" connotation.

_____

> [!success]+  ALIASES / ALTERNATE TERMS
> 
> - **[[-ity]]** _(the most frequent clinical form; e.g., Toxicity, Elasticity, Morbidity)_
> - **STATE** _(lay synonym; the condition of being)_
> - **QUALITY** _(lay synonym; a characteristic property)_
> - **CONDITION** _(clinical synonym; the state of a patient's health)_

_____

> [!danger]+  RELATED TERMS
> 
> - **[[-ia]]** — similar meaning ("condition of"); however, [[-ia]] is more common in specific disease names (e.g., *Insomnia*), whereas [[-ty]] is used for states (e.g., *Toxicity*).
> - **[[-osis]]** — denotes a condition, but specifically an **abnormal** or **disease** process (e.g., *Scoliosis*).
> - **[[-ism]]** — denotes a condition or a belief/practice; often used for metabolic states (e.g., *Hyperthyroidism*).
> - **[[-sis]]** — denotes a process or condition; often refers to a "forming" or "occurring" state (e.g., *Diagnosis*).
> - **[[-ema]]** — denotes a condition, usually involving a fluid or swelling (e.g., *Edema*).

_____

> [!example]+ CODING CORNER 
> 
> While `[[-ty]]` is a root, the terms it forms are central to 2026 medical coding, particularly regarding "state-based" diagnoses and statistical reporting.
> 
> ###  ICD-10-CM CODES (Root-Derived Terms)
> 
> #### Toxicity (Toxicity-derived | T-Series)
> 
> |Code|Description|
> |---|---|
> |**T38.0-**|Toxicity due to systemic medications|
> |**T51.0-**|Toxic effect of organic solvents (Systemic toxicity)|
> |**T65.9-**|Other specified toxic effects (General toxicity state)|
> 
> #### Obesity (Obesity-derived | E66 Series)
> 
> |Code|Description|
> |---|---|
> |**[[E66.01]]**|Morbid obesity due to undernutrition|
> |**[[E66.9]]**|Obesity, unspecified (The state of being obese)|
> 
> #### Morbidity & Mortality (Reporting Metrics)
> 
> *Note: These are not coded as individual patient diagnoses but are the primary metrics for Hospital Quality Reporting (HQR) and Risk Adjustment.*
> 
> |Term|Coding Impact|
> |---|---|
> |**Morbidity**|Used to calculate the "Comorbidity" index (CC/MCC), which increases the DRG weight for inpatient reimbursement.|
> |**Mortality**|Used for outcomes-based coding and quality audits.|
> 
> ---
> 
> ###  COMMON CPT CODES (State-Based Assessment)
> 
> |CPT Code|Description|
> |---|---|
> |**[[80048]]**|Basic Metabolic Panel (Used to assess the **toxicity** or metabolic state of the patient)|
> |**[[99202]]-[[99205]]**|Evaluation and Management (E/M) codes (Levels are determined by the **complexity** and **morbidity** of the patient's state)|
> 
> ---
> 
> >  **Coding Note:** For 2026 guidelines, avoid using generic "**condition**" or "**state**" descriptions in the medical record. For example, instead of documenting "**toxicity present**," the coder requires a specific agent (e.g., "Acetaminophen toxicity"). When documenting *Obesity*, the distinction between "**Obesity**" and "**Morbid** Obesity" is a critical trigger for higher-weighted DRGs and surgical clearance for bariatric procedures.
_____
>[!tip]- DERIVATIONS of [[-ty]]
>```dataview
>TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
>SORT file.name ASC
>```
_____
>[!faq]- Query
>```dataview
>TABLE definition AS Definition
>FROM #medroot
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```


<br>

[[Med terms dictionary]]
[[Appendix A Prefixes]]
[[Appendix B Combining Forms]]
[[Appendix C Suffixes]]
[[Appendix D Suffix forms]]
