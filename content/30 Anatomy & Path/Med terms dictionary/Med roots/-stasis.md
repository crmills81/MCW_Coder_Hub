---
tags:
  - medroot
  - medterm
aliases: []
roots:
  - -stasis
  - -sis
  - -is
forms:
  - suffixes
  - suffix form
  - compound suffix form
"alphabet:": S
definition: stopping standing still controlling or maintaining equilibrium
---
>[!Note] DEFINITION of [[-stasis]]
>_**-stasis**_ attaches to a root to form nouns or adjectives indicating either (1) the **cessation or arrest of flow/movement** of something (**e.g., [[hemostasis]] = stopping of bleeding**), (2) the **control or regulation** of a physiological substance or process (**e.g., [[homeostasis]] = maintaining stable internal balance**), or (3) a **pathological stagnation or stoppage** (**e.g., [[cholestasis]] = stoppage of bile flow**). The suffix carries a dual clinical meaning — it can describe a _desired_ therapeutic endpoint (**e.g., achieving hemostasis during surgery**) or an _undesirable_ pathological state (**e.g., cholestasis causing jaundice**). In oncology, _stasis_ terminology is also borrowed to describe inhibiting tumor cell spread, and _[[-static]]_ (adjectival form) signals an agent that _stops_ or _inhibits_ rather than _kills_ (**e.g., bacteriostatic vs. bactericidal**).
_____
>[!info]+ ETYMOLOGY of [[-stasis]]
>#greek 
>From Greek στάσῐς (stásis) — "**a standing still, a posture, a placing**," from the verb ἵστημι (**histēmi, "to cause to stand, to place, to set"**), from Proto-Indo-European root steh₂- ("**to stand**").
>
>The PIE root steh₂- is extraordinarily productive in both Greek and Latin, giving English words like **stand, stable, station, static, status, substance, and system**.
>As a medical suffix, [[-stasis]] entered English via New Latin medical coinage, first broadly appearing in the 18th–19th centuries.
> ***
> 
>**Root Breakdown**
>
>|Component|Meaning|Origin|
>|---|---|---|
>|_[[sta-]]_|Stand, place, stop|Greek _ἵστημι_ (_histēmi_), "**to stand, place**" |
>|_[[-sis]]_|State, process, condition|Greek abstract noun suffix ​|
>
_____
>[!example]+ RELATED TERMS to [[-stasis]]
>
>[[-stasis]] vs. [[-stalsis]]: Critical Distinction
>
>|Suffix|Meaning|Example|
>|---|---|---|
>|**[[-stasis]]**|Stopping, standing still, controlling|Hemostasis ("stopping blood") |
>|**[[-stalsis]]**|Contraction, movement|[[Peristalsis]] ("circular contractions") ​|
>
>These two are frequently confused due to their similar spelling — keep them straight by remembering **_stasis_ = "[[sta-]]" like "stationary"*** (**not moving**) vs. **_stalsis_ = "[[stal-]]" like "propel"*** (moving).
>
_____


> [!example]+ Examples by Category
> **Hematology / Surgery**
> 
> |Term|Root|Meaning|
> |---|---|---|
> |**[[Hemostasis]]**|_[[hemo-]]_ (blood)|Stopping / controlling blood flow; the physiological and surgical process of arresting bleeding |
> |**[[Hemostatic]]**|_hemo-_ + _-static_|Adjective: "blood-stopping"; also a noun for agents that stop bleeding |
> 
> **Gastroenterology / Hepatology**
> 
> |Term|Root|Meaning|
> |---|---|---|
> |**[[Cholestasis]]**|_[[chol/e-]]_ (bile)|Stoppage or impairment of bile flow ​|
> |**[[Cholestatic]]**|_chol/e-_ + _[[-static]]_|Pertaining to bile [[stasis]] |
> 
> **Physiology / Endocrinology**
> 
> |Term|Root|Meaning|
> |---|---|---|
> |**[[Homeostasis]]**|_[[home/o-]]_ (same/similar)|Maintenance of stable internal equilibrium |
> |**[[Thermoregulation]] / [[Thermostasis]]**|_[[therm/o-]]_ (heat)|Regulation and stability of body temperature |
> 
> **Vascular / Dermatology**
> 
> |Term|Root|Meaning|
> |---|---|---|
> |**Venous stasis**|_ven/o-_ (vein)|Stagnation/slowed flow of venous blood; leads to ulcers, DVT risk |
> |**[[Lymphostasis]]**|_[[lymph/o-]]_|Stoppage of lymphatic flow |
> 
> **Microbiology / Pharmacology**
> 
> |Term|Root|Meaning|
> |---|---|---|
> |**Bacteriostatic**|_[[bacteri/o-]]_ (bacteria)|Agent that _stops_ bacterial growth without killing (vs. bactericidal = kills) ​|
> |**Fungistatic**|_[[fung/i-]]_ (fungus)|Agent that stops fungal growth ​|
> |**[[Cytostatic]]**|_[[cyt/o-]]_ (cell)|Agent that stops cell growth/division |
> 
> **Oncology**
> 
> |Term|Root|Meaning|
> |---|---|---|
> |**Metastasis**|Greek _[[meta-]]_ ("change, beyond") + _stasis_|"Change of standing" — displacement of cancer cells from primary to distant sites ​|
> |**Metastatic**||Adjective form |
> 
> **Ophthalmology (connecting to prior notes!)**
> 
> |Term|Root|Meaning|
> |---|---|---|
> |**[[Dacryostasis]]**|_[[dacry/o-]]_ (tear)|Stagnation or obstruction of tear flow ​|
> 

_____
>[!tip]- DERIVATIONS of [[-stasis]]
>```dataview
>TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name !=[[]].file.name
>SORT file.name ASC
>```
___
>[!faq]- Query
>```dataview
>TABLE definition AS Definition
>FROM #medroot
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```

[[Med roots dictionary]]
[[Appendix A Prefixes]]
[[Appendix B Combining Forms]]
[[Appendix C Suffixes]]
[[Appendix D Suffix forms]]
