---
tags:
  - medroot
aliases:
  - -ura
roots:
  - -ure
  - -ura
forms:
  - suffix
  - noun
alphabet: U
definition: A suffix denoting the result, process, or state of an action.
---

>[!Note] DEFINITION of [[-ure]]
>**[[-ure]]** (**and its variant [[-ura]]**) is a Latin noun-forming suffix used to describe the **result, process, or state of an action**. In clinical terminology, it transforms a verb of action into a noun representing the outcome of that action (**e.g., *fracture* is the result of the action of breaking**). It is distinguished from the suffix **[[-ion]]**, which often describes the *process* of doing something, whereas **[[-ure]]** frequently emphasizes the *physical result* or the *permanent state* created by the action. Physiologically, terms ending in **[[-ure]]** often describe structural changes (**pathological, like a *fracture***) or applied mechanical forces (**physiological, like *pressure***). In coding, this suffix is **ubiquitous** in descriptions of traumatic injuries and surgical closures. It is commonly confused with the root *[[ur-]]* (**pertaining to urine**), but linguistically, [[-ure]] acts as a terminal marker of result.

_____

>[!info]+ ETYMOLOGY of [[-ure]]
>#latin
>
>|Component|Origin|Meaning|
>|---|---|---|
>|**[[-ure]]** / **[[-ura]]**|[Latin] _-ura_ ([ʊ.ra])|"**result of**," "**action of**" — Noun-forming suffix used to denote the outcome of a verb.|
>
> The suffix entered English in the **14th-15th centuries** as a **noun**, borrowed from Late Latin ***[[-ura]]***. The root connects the term to the broader **[[-ROOT FAMILY]]** of result-oriented markers: ***[[-ion]]*** (**process/state**), ***[[-osis]]*** (**condition/process**), and ***[[-ence]]*** (**quality/state**). The productivity of this suffix is high in anatomy and pathology, appearing in essential clinical terms such as ***[[fracture]]***, ***[[pressure]]***, ***[[ligature]]***, and ***[[closure]]***.

_____

> [!success]+  ALIASES / ALTERNATE TERMS
> 
> - **[[-ura]]** _(original Latin form; found in archaic texts or specific anatomical descriptions)_
> - **RESULTANT** _(clinical synonym describing the outcome of a process, e.g., "resultant deformity")_
> - **OUTCOME / PRODUCT** _(lay terms describing the state created by the action)_
> - **STATE OF ACTION** _(linguistic descriptor for the noun-form of a verb)_

_____

> [!danger]+  RELATED TERMS
> 
> - **[[-ion]]** — a sibling suffix; while [[-ure]] often denotes a physical result (a *fracture*), [[-ion]] often denotes a process (an *inflation*).
> - **[[-osis]]** — shares a "state of" meaning, but typically denotes an abnormal or pathological process (e.g., *scoliosis*).
> - **[[-ectomy]]** — represents the result of a surgical action (removal), though it uses a Greek root rather than a Latin suffix.
> - **TENSION** — a related mechanical concept; while *pressure* (from [[-ure]]) is a force applied to a surface, tension is a pulling force.
> - **FISSURE** — a specific result of splitting; shares the [[-ure]] suffix, denoting the result of a "cleaving" action.
> - **LIGATE** — the verb form of [[ligature]]; the action of tying off a vessel.

_____

> [!example]+ CODING CORNER 
> 
> Because **[[-ure]]** is a root, coding guidelines apply to the terms it forms. In **2026 guidelines**, specificity regarding the *result* (**the suffix meaning**) is paramount for injury and surgical codes.
> 
> ###  ICD-10-CM CODES
> 
> #### Traumatic Fractures (Fracture-derived | S-Series)
> 
> |Code|Description|
> |---|---|
> |**S42.0-**|Fracture of clavicle (The "result" of breaking the bone)|
> |**S52.5-**|Fracture of lower end of radius|
> |**S82.1-**|Fracture of upper end of tibia|
> 
> #### Pressure Ulcers (Pressure-derived | L89 Series)
> 
> |Code|Description|
> |---|---|
> |**L89.15-**|Pressure ulcer of sacral region (The "result" of sustained pressure)|
> |**L89.21-**|Pressure ulcer of right heel|
> |**L89.22-**|Pressure ulcer of left heel|
> 
> ---
> 
> ###  COMMON CPT CODES (Derived Procedures)
> 
> |CPT Code|Description|
> |---|---|
> |**[[12001]]**|Simple **closure** of surgical wound (The "result" of closing)|
> |**[[35001]]**|Ligation (creating a **ligature**) of an artery|
> |**[[20120]]**|Reduction of a **fracture** (treating the "result" of breaking)|
> 
> ---
> 
> >  **Coding Note:** For 2026 inpatient profee claims, the distinction between a *closure* (**primary intention**) and a *granulating wound* (**secondary intention**) is a critical modifier trigger. When documenting a "**fracture**," ensure the documentation specifies the "**result**" (**displaced vs. non-displaced**), as this determines the **CPT code** for the reduction procedure. Under-coding often occurs when "**pressure**" is documented without the "**ulcer**" result; always ensure the documentation links the force (pressure) to the clinical outcome (**ulcer/necrosis**) to support **L89 codes**.

_____

>[!tip]- DERIVATIONS of [[-ure]]
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

[[Med terms dictionary]]