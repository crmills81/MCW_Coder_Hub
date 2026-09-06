---
tags:
  - medroot
aliases:
  - incision
  - surgical cutting
roots:
  - -tomy
  - tom-
  - -y
forms:
  - suffix
  - noun
alphabet: T
definition: Surgical incision or the act of cutting into an organ or tissue.
---

>[!Note] DEFINITION of [[-tomy]]
>**[[-tomy]]** is a surgical suffix derived from the root **[[tom-]]** (to cut) and the suffix **[[-y]]** (process/condition). It specifically denotes the act of making a surgical incision into a body part or organ. It is critically distinguished from **[[-ectomy]]** (surgical removal of a part) and **[[-ostomy]]** (the creation of a permanent or semi-permanent opening/stoma). For example, a *laparotomy* is simply the act of cutting into the abdominal cavity, whereas a *laparectomy* would involve the removal of the abdominal wall (rare), and a *laparostomy* would be the creation of a permanent opening in the abdomen. In a clinical setting, a `-tomy` is often the first step (the approach) for a subsequent definitive procedure.

_____

>[!info]+ ETYMOLOGY of [[-tomy]]
>#greek
>
>|Component|Origin|Meaning|
>|---|---|---|
>|**tom-**|[Greek] _tomē_ ([to.meː])|"**a cutting**" or "**section**" — refers to the physical act of dividing or slicing.|
>|**-y**|[Greek/Latin]|**noun-forming suffix** — denotes a process, state, or medical procedure.|
>
> The root is also the foundation of the word **[[anatomy]]** (*ana-* "up" + *tomy* "cutting"), which literally means "cutting up" to study the structure of the body. The term entered medical English to standardize the nomenclature of surgical access, ensuring that the surgeon's intent (exploration vs. excision) is clearly communicated in the operative report.

_____

> [!success]+ 🔀 ALIASES / ALTERNATE TERMS
> 
> - **SURGICAL INCISION** _(the most common clinical equivalent)_
> - **Surgical Access** _(the act of gaining entry into a cavity or organ)_
> - **Cutting** _(lay term)_
> - **Sectioning** _(often used in pathology to describe cutting tissue for slides)_

_____

> [!danger]+ 🔗 RELATED TERMS
> 
> - **[[-ectomy]]** — the "Sibling Suffix" of removal; whereas `-tomy` opens, `-ectomy` takes out.
> - **[[-ostomy]]** — the "Sibling Suffix" of opening; refers to creating a mouth (*stoma*) for drainage or access.
> - **[[anatomy]]** — shares the `tom-` root; the study of structure via dissection.
> - **TOME** — a surgical instrument used for cutting (e.g., a microtome in pathology).
> - **PHLEBOTOMY** — the specific act of cutting into a vein to draw blood.

_____

> [!example]+ CODING CORNER 
> 
> For 2026 coding guidelines, the distinction of `[[-tomy]]` is essential for determining whether a procedure is "bundled" or "separate."
> 
> ### 🏥 CPT CODE LOGIC (The "Approach" Rule)
> 
> In CPT coding, an incision (`-tomy`) is usually considered the **approach** to the definitive procedure.
> 
> |Scenario|Coding Treatment|Example|
> |---|---|---|
> |**Diagnostic Only**|Coded as a standalone procedure|**49000** (Exploratory Laparotomy)|
> |**Approach to Excision**|Bundled into the definitive code|Laparotomy $\rightarrow$ Appendectomy (Coded only as Appendectomy)|
> |**Therapeutic Incision**|Coded as the primary procedure|**31500** (Tracheotomy)|
> 
> ---
> 
> ### 🔧 COMMON PROCEDURES
> 
> |Procedure|Root Breakdown|Coding Focus|
> |---|---|---|
> |**Phlebotomy**|Phleb (vein) + tomy (cut)|Coded by the nature of the draw (e.g., **36415**)|
> |**Craniotomy**|Crani (skull) + tomy (cut)|Coded based on the size of the opening and the objective (e.g., tumor removal)|
> |**Laparotomy**|Laparo (abdomen) + tomy (cut)|Focus on "Exploratory" vs "Open" approach|
> 
> ---
> 
> > ⚠️ **Coding Note:** A common audit error in 2026 is "unbundling." Coders must not bill for a `[[-tomy]]` (the incision) separately if it was merely the method used to perform an `[[-ectomy]]` (the removal). However, if the surgeon performs a *Diagnostic Laparotomy* and finds nothing, the `-tomy` is the primary billable event. Ensure the operative note specifies "Exploratory" to support the standalone code.

_____

>[!tip]- DERIVATIONS of [[-tomy]]
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