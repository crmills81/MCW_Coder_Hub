---
tags:
  - medterm
  - medroot
  - ophthalmology
aliases:
  - infarction
  - transient ischemic attack
  - ischemic event
  - hypoperfusion
roots:
  - ischemia
  - isch-
  - -emia
  - -hemia
forms:
  - prefix
  - suffix
  - combined
  - noun
alphabet: I
definition: insufficient blood supply to an organ, causing oxygen deprivation and potential cell injury or death
---
>[!Note] DEFINITION of [[ischemia]]
>**Ischemia** is a pathophysiological condition in which blood flow — and therefore oxygen and nutrient delivery — to a tissue is reduced or completely obstructed. This can result from arterial narrowing ([[stenosis]]), [[thrombosis]], [[embolism]], [[vasospasm]], or systemic hypoperfusion. If prolonged, ischemia progresses to [[infarction]] (**irreversible tissue death**). The severity depends on the **organ affected, duration of deprivation, availability of collateral circulation, and metabolic demands** of the tissue.
_____
>[!info]+ ETYMOLOGY of [[ischemia]]
>#greek **[[isch-]]** Greek _ischein_ (ἰσχαίνω) to hold back, restrain, suppress
>**[[-emi]]a** Greek _haima_ (αἷμα) blood
>**Literally**: **"holding back of blood"** First used in modern medical literature in the 19th century.
_____


> [!example]+ 🔑 SPECIALTY-RELEVANT ICD-10-CM CODES
> 
> #### 👁️ Ophthalmology
> 
> |Code|Description|
> |---|---|
> |**H35.82**|Retinal ischemia|
> 
> #### 🫘 Urology
> 
> |Code|Description|
> |---|---|
> |**N28.0**|Ischemia and infarction of kidney|
> 
> #### 🧠 Neurology/General
> 
> |Code|Description|
> |---|---|
> |**I67.82**|Cerebral ischemia (chronic)|
> |**P91.0**|Neonatal cerebral ischemia|
> 
> #### ❤️ Cardiac
> 
> |Code|Description|
> |---|---|
> |**I25.6**|Silent myocardial ischemia|
> |**P29.4**|Transient myocardial ischemia in newborn|
> 
> #### 🦴 Musculoskeletal / Trauma
> 
> |Code|Description|
> |---|---|
> |**T79.6XXA**|Traumatic ischemia of muscle — initial encounter|
> |**T79.6XXD**|Traumatic ischemia of muscle — subsequent encounter|
> |**T79.6XXS**|Traumatic ischemia of muscle — sequela|
> 
> #### 🫁 Intestinal
> 
> |Code|Description|
> |---|---|
> |**K55.011**|Focal acute (reversible) ischemia of small intestine|
> |**K55.012**|Diffuse acute (reversible) ischemia of small intestine|
> |**K55.031**|Focal acute (reversible) ischemia of large intestine|
> |**K55.032**|Diffuse acute (reversible) ischemia of large intestine|
> 
> ---
> 
> ### 💡 CODING TIPS (Inpatient)
> 
> - **Ischemia ≠ Infarction** — always distinguish. If the physician documents infarction, code it as such (e.g., renal infarction still falls under **N28.0**, but myocardial infarction uses the I21.x series).
> - For **retinal ischemia** (H35.82), verify whether it's part of a larger vascular diagnosis (e.g., central retinal artery occlusion **H34.1x**) — you may need to code the underlying cause instead.
> - **Cerebral ischemia (I67.82)** is used for _chronic_ cerebral ischemia; acute cerebrovascular ischemia without infarction may map to TIA (**G45.9**) or other I60–I67 codes.
> - **N28.0** covers both ischemia _and_ infarction of the kidney — no separate code exists for renal infarction alone.
> - CPT codes for ischemia are procedure/intervention-based (e.g., revascularization, thrombectomy) and are selected based on the site and method of treatment rather than the ischemia diagnosis itself.

_____
>[!tip]- DERIVATIONS of [[ischemia]]
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