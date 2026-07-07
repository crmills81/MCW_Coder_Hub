---
tags:
  - specialty/urology
  - medterm
  - medroot
  - urology
aliases:
  - bladder prolapse
  - Cystocele
roots:
  - cyst-
  - -cel-
  - cysto-
  - -cele
forms:
  - noun
  - combining
"alphabet:": C
"definition:": Bladder hernia
---
>[!note]+ Definition of [[cystocele]]
> [[cyst-]]o[[-cel-]][[-e]] - **Bladder hernia**; A cystocele, also known as a prolapsed or dropped bladder, occurs when **the wall between a woman's bladder and the vagina weakens, causing the bladder to sag or bulge into the vagina**
___
>[!info]+ Etymology of [[cystocele]]
>#greek 
>From [French], from [Ancient Greek] "κύστις")_ (kústis, “**anatomical sac**”). By [surface analysis], _[[cysto-]]_ +‎ _[[-cele]]_; 
>The term is formed from two Greek roots:
>
>- **[[cyst-]] (κύστις):** Root meaning "**bladder**," "**sac**," or "**pouch**."
>    
>- **[[-cele]] (κήλη):** Suffix meaning "**hernia**," "**swelling**," or "**tumor**."
>    
>- **Literal Meaning:** "Bladder hernia."
>
_____

> [!example]+ **Coding & Documentation Nuances**
> - **ICD-10-CM:** Cystoceles are classified under category **N81.1-** (Cystocele). Specificity is driven by the anatomical nature of the defect, requiring coders to distinguish between midline (N81.11) and lateral/paravaginal (N81.12) cystoceles. If the prolapse involves both the bladder and the urethra, use a code for cystourethrocele (**N81.0-**). If it occurs with uterine prolapse, combination codes (e.g., **[[N81.2]]** to **[[N81.4]]**) take precedence.
>     
> - **CPT (Current Procedural Terminology):** The standard surgical correction for a cystocele is an anterior colporrhaphy, coded as **[[57240]]**. If the surgeon performs a combined anterior and posterior repair (A&P repair for both cystocele and rectocele), the code is **[[57260]]**.
>     
> - **ICD-10-PCS Root Operations:** * If the surgeon uses the patient's native tissue to fix the defect (plication of fascia), the root operation is **Repair** (Restoring, to the extent possible, a body part to its normal anatomic structure and function).
>     
>     - If a synthetic mesh or biological graft is inserted to reinforce the vaginal wall, the root operation changes to **Supplement** (Putting in or on biological or synthetic material that physically reinforces and/or augments the function of a portion of a body part).
>         
> 
> ### Clinical Indicators
> 
> To support the diagnosis and subsequent surgical coding, coders should identify the following in the clinical documentation:
> 
> 1. **POP-Q Exam:** Pelvic Organ Prolapse Quantification scores in the physical exam, specifically positive values for points Aa and Ba, which measure the anterior vaginal wall.
>     
> 2. **Operative Report Language:** Phrases such as "plication of the pubocervical fascia," "dissection of the anterior vaginal mucosa," or "Kelly plication."
>     
> 3. **Patient Symptoms:** Chief complaints of a "bulge falling out of the vagina," "splinting" (having to manually push the bulge up to urinate), or stress incontinence.
>     
> 
> ### Related Terms & Differentials
> 
> - **[[Rectocele]]:** Prolapse of the rectum into the _posterior_ vaginal wall. It often occurs alongside a cystocele but requires a separate or combined repair technique (posterior colporrhaphy).
>     
> - **[[Enterocele]]:** Herniation of the small intestine into the vaginal vault, usually occurring at the apex of the vagina (apical prolapse).
>     
> - **[[Urethrocele]]:** Prolapse of the urethra into the vaginal wall. When it occurs with a cystocele, it is documented as a cystourethrocele.
>     
> - **[[Colporrhaphy]]:** The surgical procedure (suturing of the vaginal wall) used to repair a cystocele or rectocele. It is the treatment, whereas cystocele is the condition.
>     
> - **Uterine Prolapse:** The descent of the uterus into the vaginal canal due to the weakening of the cardinal and uterosacral ligaments.

_____
>[!tip]- DERIVATIONS of [[cystocele]]
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
>WHERE file.name != this.file.name
>AND any(contains(definition, split(this.definition, " ")))
>```


[[Med roots dictionary]]
[[Appendix A Prefixes]]
[[Appendix B Combining Forms]]
[[Appendix C Suffixes]]
[[Appendix D Suffix forms]]

