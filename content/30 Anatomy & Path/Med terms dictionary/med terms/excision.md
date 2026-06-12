---
tags:
  - medterm
  - surgery
aliases:
  - surgical removal
  - -ectomy
  - partial removal
roots:
  - excision
  - ex-
  - -cis-
  - -ion
forms:
  - prefix
  - suffix
  - verb
alphabet: E
definition:
  - The surgical cutting out or removal of a portion of a body part
  - mass
  - or lesion without replacement
---
>[!Note] DEFINITION of [[excision]]
>**Excision** is a **fundamental surgical procedure involving the sharp, deliberate removal of tissue, a mass, or a specific anatomical structure**. Clinically, an **excision** implies that the surgeon is cutting around and under the target **tissue to remove it completely from its surrounding bed,** often with the intent of sending the intact specimen to pathology for histological examination. In dermatology and oncology, **excisions** usually include a "**margin**" of healthy tissue to ensure that no diseased cells (**like melanoma or basal cell carcinoma**) remain.
_____
>[!info]+ ETYMOLOGY of [[excision]]
>#latin 
>- **[[ex-]]** (Latin): prefix meaning "**out**" or "**away from**."
>    
>- **[[-cis-]]** (Latin _caedere_ or _cisum_): root meaning "**to cut.**"
>    
>- **[[-ion]]** (Latin _-io_): suffix denoting an action, process, or state.
>    
>- _**Literal Meaning**:_ The act or process of cutting out.
>
_____

> [!success]+ **Coding & Documentation Nuances**
> 
> - **ICD-10-PCS (Inpatient Coding):** * **The Golden Rule of PCS:** Excision vs. Resection. In PCS, **Excision** is defined strictly as cutting out or off, without replacement, a _portion_ of a body part (e.g., a [[lumpectomy]], a wedge biopsy of the liver, or removal of a single lobe of the thyroid). If the surgeon removes the _entire_ body part (e.g., a total [[thyroidectomy]] or total [[cholecystectomy]]), the Root Operation is **Resection**, regardless of whether the physician called it an "excision" in their note.
>     
>     - **Biopsy:** If the excision is performed solely for diagnostic purposes, the qualifier "**Diagnostic**" (X) is used in the 7th character position.
>         
> - **CPT (Current Procedural Terminology):** * **Benign vs. Malignant:** CPT heavily divides **integumentary excisions** by the pathology of the lesion (**benign vs. malignant**). You often must wait for the pathology report before finalizing the code.
>     
>     - **Measuring for CPT:** The coded size is determined by taking the maximum clinical diameter of the lesion _plus_ the narrowest margins required for complete excision (**Lesion size + margin + margin = total excised diameter**).
>         
>     - **Closure Rules:** Simple closure is included in the [[excision]] code. However, if an intermediate or complex closure is required to repair the surgical defect, it is coded separately.
>         

_____
> [!danger]+ **Clinical Indicators**
> 
> To accurately code an [[excision]], a coder should look for the following in the operative report:
> 
> 1. **Method of Removal:** Clear documentation of sharp dissection (**e.g., scalpel, electrosurgical needle, scissors**) cutting entirely through the dermis or deep tissue.
>     
> 2. **Intent of Margins:** Mentions of "**elliptical incision**," "**margins taken,**" or "**oriented with sutures for pathology**."
>     
> 3. **Pathology Submission:** The specimen is almost always sent to surgical pathology (**unlike destructive methods, where nothing is left to send**).
>     
> 4. **Measurements:** Pre-excision measurements of the lesion and the planned margins in centimeters (**vital for outpatient/CPT coding**).
>     
> 5. **Extent of Removal:** To determine if it's an **ICD-10-PCS Excision or Resection**, look for language indicating whether a part of the organ or the whole organ was taken.
>     
_____


> [!example]+ **Related Terms & Differentials**
> 
> - **[[resection]]:** (**PCS specific**) The removal of an _entire_ body part. If a surgeon does a "**partial [[gastrectomy]]**," it's an [[excision]]. If they do a "t**otal gastrectomy**," it's a **Resection**.
>     
> - **[[Destruction]]:** Eradicating tissue by means other than sharp excision, such as laser, liquid nitrogen (**[[cryosurgery]]**), or **[[electrocautery]]**. There is no tissue left to send to pathology.
>     
> - **[[Shaving]]:** The horizontal slicing of an **epidermal** or dermal lesion. It does not go through the full thickness of the dermis into the [[subcutaneous]] fat, making it clinically and fundamentally different from an excision.
>     
> - **[[Extirpation]]:** A **PCS Root Operation** meaning taking or cutting out solid matter from a body part (**e.g., removing a blood clot, a bullet, or a gallstone**). You are removing _matter_ from the body part, not the body part itself.
>     
> - **[[Extraction]]:** Pulling or stripping out a portion or all of a body part (**e.g., pulling a tooth, stripping a varicose vein**). It implies force or pulling rather than sharp cutting.

_____
>[!tip]- DERIVATIONS of [[excision]]
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