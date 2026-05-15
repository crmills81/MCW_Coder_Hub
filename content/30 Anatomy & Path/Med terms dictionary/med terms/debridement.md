---
tags:
  - medterm
  - surgery
  - pmr
aliases:
  - wound debridement
  - Debridement
  - excisional debridement
  - non-excisional debridement
  - selective debridement
  - devascularisation
roots:
  - de-
  - -bride-
  - -ment
forms:
  - prefix
  - suffix
  - noun
alphabet: D
definition: The medical removal of dead, damaged, or infected tissue to improve the healing potential of the remaining healthy tissue
---
>[!Note] DEFINITION of [[debridement]]
>**Debridement** is the **medical and surgical process of thoroughly removing non-viable tissue** (**such as [[necrosis]], slough, or eschar**), debris, and infected material from a wound bed or burn. The primary clinical objective is to convert a **chronic or contaminated wound into an acute, clean wound**, thereby promoting [[granulation]], re-[[epithelialization]], and normal healing. [[debridement]] can be categorized by its method: surgical/excisional (**using sharp instruments like scalpels or scissors to cut away tissue), mechanical (wet-to-dry dressings, hydrotherapy**), enzymatic/chemical (**applying topical agents to dissolve dead tissue**), autolytic (**using the body's own enzymes under moisture-retentive dressings**), or biological (**maggot therapy**).
_____
>[!info]+ ETYMOLOGY of [[debridement]]
>#latin - **[[de-]]** (French/Latin): prefix meaning "**removal**," "**separation**," or "**down from**."
>    
>- **bride** (**French**): root meaning "**bridle**" or "**restraint**" (originally from Germanic roots).
>    
>- **[[-ment]]** (Latin _-mentum_): suffix denoting an **action, process, or the resulting state**.
>    
>- _**Literal Meaning**:_ The term derives from the 18th-century French word _débridement_, meaning "**unbridling**." Early surgeons used the term to describe the cutting of strictures, bands, or [[fascia]] to release tension and "unbridle" the constricted tissue, which later evolved to mean clearing away the restrictive dead tissue in a wound.
>
_____

> [!example]+  **Related Terms & Differentials**
> 
> - **Excision:** The surgical removal of an entire organ, mass, or lesion (**e.g., a cyst or tumor**). While excisional [[debridement]] uses the same **Root Operation in PCS**, clinical "**excision**" usually aims to remove a specific pathological structure with margins, whereas debridement aims to clean a generalized wound bed.
>     
> - **Amputation:** The complete surgical removal of a limb or appendage. [[debridement]] may remove bone from a toe, but if the entire toe is removed, it is an [[amputation]] (**PCS Root Operation: Detachment**).
>     
> - **Escharotomy:** A surgical incision made _through_ a burn eschar to relieve pressure and restore circulation (**often in circumferential burns**). It is an incision, not a removal (**debridement**) of the eschar.
>     
> - **Curettage:** The use of a curette to scrape tissue. Depending on the intent and depth, it can be a method of **debridement**, but in **dermatology**, it is often paired with [[electrodesiccation]] for lesion destruction rather than wound prep.
>     
> - **Slough:** The actual stringy, yellow/white dead tissue present in a wound. **Slough** is the _object_ being removed; **debridement** is the _action_ of removing it.
>
_____
> [!question]+ **Coding & Documentation Nuances**
> 
> - **CPT (Current Procedural Terminology):** * **Depth is King:** CPT codes for debridement (e.g., [[11042]]-[[11047]]) are driven by the _depth of the tissue removed_, **not** the depth of the wound itself. If a wound extends to the bone, but the surgeon only debrides [[necrotic]] skin and [[subcutaneous]] tissue, it is coded only to the [[subcutaneous]] level.
>     
>     - **Surface Area:** CPT requires the total surface area of the debrided tissue (in square centimeters). Multiple wounds debrided at the same depth are added together.
>         
>     - **Active Wound Care vs. Surgical Debridement:** Non-excisional or selective debridement (**e.g., using high-pressure water jets, scissors to snip loose edges, or enzymatic agents**) is coded in the Active Wound Care Management section ([[97597]], [[97598]]), not the surgical integumentary section.
>         
> - **ICD-10-PCS (Inpatient Coding):**
>     
>     - **Excisional Debridement:** Maps to the Root Operation **Excision** **(cutting out or off, without replacement, a portion of a body part**). The documentation must explicitly state that sharp [[dissection]] (**e.g., scalpel, Mayo scissors**) was used to cut away tissue.
>         
>     - **Non-Excisional Debridement:** Maps to the Root Operation **Extraction** (**pulling or stripping out or off all or a portion of a body part**). This includes mechanical debridement, Versajet, or blunt debridement.
>         
>     - **Irrigation/Washing:** Maps to the Root Operation **Irrigation**. Washing a wound does not qualify as [[excision]] or extraction.
> 
_____


> [!abstract]+ **Clinical Indicators**
> 
> To compliantly code _excisional_ [[debridement]], a coder must look for the following in the operative report or procedure note:
> 
> 1. **Instrument Used:** Clear mention of a sharp instrument (**e.g., "used a #15 scalpel," "sharp dissection with tissue scissors," "curette"**).
>     
> 2. **Action Performed:** Words indicating cutting or excising (e.g., "**excised**," "**cut away**"). Words like "**scrubbed**," "**washed**," or "**wiped**" indicate non-excisional [[debridement]].
>     
> 3. **Nature of Tissue Removed:** Specifically identifying what was removed (e.g., [[necrotic fascia]], devitalized muscle, eschar).
>     
> 4. **Depth of Removal:** Explicit documentation of the deepest layer of tissue _that was actually cut away_ (**epidermis**, **dermis**, [[subcutaneous]], [[fascia]], **muscle**, or **bone**).
>     
> 5. **Dimensions:** Length and width (in cm) of the **debrided** area prior to closure or dressing.
>     

_____
>[!tip]- DERIVATIONS of [[debridement]]
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

[[Med roots dictionary]]
[[Appendix A Prefixes]]
[[Appendix B Combining Forms]]
[[Appendix C Suffixes]]
[[Appendix D Suffix forms]]