---
tags:
  - medroot
aliases:
  - desis
roots:
  - -desis
forms:
  - suffix
  - suffixes
  - suffix form
  - verb
"alphabet:": D
definition:
  - binding
  - fixation
  - surgical fusion
---
>[!Note] DEFINITION of [[-desis]]
>The suffix **-desis** means **surgical binding, fixation, or fusion** of a joint or structure to create **deliberate immobility (ankylosis)**. It is used almost exclusively in **surgical procedure terminology** to describe operations that permanently stabilize a joint or body part by fusing bones or tissues together — typically using bone grafts, hardware (**screws, plates, rods**), or suturing techniques. Unlike [[-lysis]] (**loosening**) or [[-tomy]] (**cutting**), [[-desis]] implies a **permanent, intentional union** meant to eliminate painful or unstable motion. It differs from [[-pexy]] (**which suspends or anchors without fusing**) in that -desis results in true **structural fusion and loss of movement**. For AAPC-certified inpatient profee coders, **-desis procedures require precise documentation** of the **approach (anterior/posterior/lateral), spinal level(s), technique, and instrumentation** — all of which drive CPT code selection. Failing to capture these specifics is one of the most common sources of undercoding in orthopedic and spine surgery.
_____
>[!info]+ ETYMOLOGY of [[-desis]]
>#greek
>- **Origin**: Ancient Greek **_désis_** (δέσις) — "**a binding, tying, or fastening**"
>- **Root verb**: Greek **_déō_** (δέω) — "**to bind, to tie, to fetter**"
>- **Grammatical function in Greek**: Verbal noun (**nomen actionis**) expressing the act or result of binding
>- **Meaning evolution**:
>    - **Classical Greek**: Used in general contexts for physically tying, chaining, or binding
>    - **Medical Latin adoption**: Entered New Latin surgical vocabulary in the **19th century** as orthopedic surgery formalized
>    - **Modern usage**: Standardized in surgical nomenclature as a productive suffix for **fusion and fixation procedures**
>- **Entry into English**: Via New Latin surgical terminology, adopted broadly after [[arthrodesis]] was coined (~1905)
>- **Related Greek root**: Shares root with **[[syndesmosis]]** ([[syn-]] = **together** + desmos = ligament/bond) and **desmoid** (desmos = band)

_____

> [!example]+ RELATED TERMS to [[-desis]]
> 
> | [[-desis]] Term | Combining Root | Meaning |
> |:---:|:---:|:---:|
> | **[[arthrodesis]]** | [[arthr/o-]] (**joint**) | Surgical fusion of a joint |
> | **[[tenodesis]]** | [[ten/o-]] (**tendon**) | Surgical fixation of a tendon |
> | **[[spondylodesis]]** | [[spondyl/o-]] (**vertebra**) | Spinal/vertebral fusion |
> | **[[pleurodesis]]** | [[pleur/o-]] (**pleura**) | Fusion of pleural layers |
> | **[[cheilodesis]]** | [[cheil/o-]] (**lip**) | Surgical adhesion of the lip |

_____
>[!warning]+ SURGICAL USES (-desis procedures & coding applications)
>**Orthopedic & Spine (Primary -desis territory):**
>
>- **[[arthrodesis]]**: Fusion of a joint — the most common [[-desis]] procedure; coded by **site, approach, and technique**
>- **Spinal arthrodesis**: Fusion of vertebral segments; CPT family drives by **approach + level + instrumentation**
>- **[[Tenodesis]]**: Tendon anchored to bone to restore function (**e.g., biceps tenodesis**)
>- **Subtalar arthrodesis**: Fusion of hindfoot joint for flatfoot deformity or post-traumatic arthritis
>
>**Pulmonology:**
>
>- **[[Pleurodesis]]**: Chemical or mechanical fusion of visceral and parietal pleura — used for recurrent [[pneumothorax]] or malignant [[pleural effusion]]
>
>**Profee Coding Tips:**
>- Always query op note for: **approach, number of levels/interspaces, use of instrumentation, bone graft type (autograft/allograft)**
>- **Add-on codes matter**: e.g., [[22614]], [[22632]], [[22634]] for each additional level — easy to miss = undercoding
>- Modifier **[[-62]]**: Co-surgeon (two surgeons, same field — common in complex spinal fusions)
>- Modifier **[[-80]]**: Assistant surgeon
>- Modifier **[[-51]]**: Multiple procedures same session (**check NCCI edits before appending!**)
_____
>[!faq]+ ICD-10 & CPT Quick Reference
>
>**✅ Valid & Billable ICD-10-CM Diagnosis Codes:**
>
>| Code | Description |
>|:---:|:---|
>| **[[Z98.1]]** | Arthrodesis status (**post-fusion history/status**) |
>| **[[M43.22]]** | Fusion of spine, cervical region ([[spondylolisthesis]]) |
>| **[[M96.1]]** | Post-laminectomy syndrome — may drive fusion decision |
>| **[[J91.0]]** | Malignant [[pleural effusion]] — drives [[pleurodesis]] |
>| **[[J93.11]]** | Primary spontaneous pneumothorax — drives pleurodesis |
>| **[[J93.12]]** | Secondary spontaneous [[pneumothorax]] |
>
>**✅ Valid & Billable CPT Codes (Arthrodesis family):**
>
>| Code | Description |
>|:---:|:---|
>| **[[22551]]** | Arthrodesis, anterior interbody, cervical below C2; single interspace |
>| **[[22552]]** | Arthrodesis, anterior interbody, cervical; each additional interspace (AOC) |
>| **[[22600]]** | Arthrodesis, posterior/posterolateral, cervical below C2; single level |
>| **[[22612]]** | Arthrodesis, posterior/posterolateral, lumbar; single level |
>| **[[22614]]** | Each additional vertebral segment (AOC with [[22600]], [[22610]], [[22612]], [[22630]], [[22633]]) |
>| **[[22630]]** | Arthrodesis, posterior interbody, lumbar; single interspace |
>| **[[22632]]** | Each additional interspace (AOC with [[22612]], [[22630]], [[22633]]) |
>| **[[22633]]** | Arthrodesis, combined posterior/posterolateral + posterior interbody; single interspace |
>| **[[22634]]** | Each additional interspace (AOC with 22633) |
>| **[[32650]]** | Pleurodesis (e.g., chemical) |
>
>**✅ Valid Modifiers:**
>
>| Modifier | Use |
>|:---:|:---|
>| **[[-62]]** | Two surgeons — each performing distinct portions of spine fusion |
>| **[[-80]]** | Assistant surgeon |
>| **[[-51]]** | Multiple procedures — use cautiously; check NCCI edits |
>| **[[-59]]** | Distinct procedural service |
_____
>[!tip]- DERIVATIONS of [[-desis]]
>```dataview
>TABLE definition AS Definition
>WHERE length(filter(roots, (word) => econtains(this.roots, word))) > 0 AND file.name != this.file.name
>SORT file.name ASC
>```
_____
>[!faq]- Query functionality
>
>```dataview
>TABLE definition AS Definition
>FROM #medroot
>WHERE length(filter(definition, (word) => econtains(this.definition, word))) > 0 AND file.name != this.file.name
>```

[[Med roots dictionary]]
[[Appendix A Prefixes]]
[[Appendix B Combining Forms]]
[[Appendix C Suffixes]]
[[Appendix D Suffix forms]]