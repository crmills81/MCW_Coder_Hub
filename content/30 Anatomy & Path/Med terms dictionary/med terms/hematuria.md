---
tags:
  - medterm
  - medroot
  - specialty/urology
  - urology
aliases: []
roots:
  - hemat-
  - ur-
  - -ia
"definition:": blood in urine
ICD-10 Code: R31.9
"alphabet:": H
forms:
  - noun
  - combining
---
>[!note]+ Definition of [[hematuria]]
>[[hem-|hemat-]][[ur-]][[-ia]] - **blood in urine (condition of blood in urine)**; [[Hematuria]] refers to blood or red blood cells mixing with urine, with bleeding that can originate anywhere in the urinary system (kidney, [[ureter]], bladder, urethra) and in men also the prostate. **Gross hematuria** may change urine color and can include clots that may cause pain or obstruct urine flow, while microscopic hematuria often has no symptoms.
>
>#### **Diagnosis Codes:**
>- **[[R31.0]]:** [[gross hematuria]]
>	- **Explanation:** Used when the patient or clinician can see blood in the urine. The urine may appear bright red, pink, or "tea-colored."
>- **[[R31.21]]:** Asymptomatic microscopic hematuria
>	- **Explanation:** Specifically for cases where blood is found during a routine test or screening in a patient who has no other symptoms (like pain or frequency).
>- **[[R31.9]]:** [[hematuria]], unspecified
>	- **Explanation:** The default code used when the documentation states "hematuria" but does not specify if it is gross or microscopic.
>
>#### CPT/HCPCS Code(s) (Common Diagnostic Procedures):
>When a patient presents with hematuria, a workup is performed to find the source. These are the most common codes associated with that evaluation:
>- **[[52000]] - Cystourethroscopy (separate procedure)**
>- **Explanation:** A diagnostic procedure where a scope is inserted into the bladder to look for tumors, stones, or bleeding sites.
>	- **wRVU:** 1.10 (Facility) / 2.06 (Non-Facility)
>	- **Global Period:** 000
>- **Assistant Payable:** No
>	- **Bundling:** Bundled into more extensive procedures (e.g., if a biopsy 52204 is performed, 52000 is not billed).
>- **[[81001]] - Urinalysis, automated, with microscopy**
>- **Explanation:** Used to confirm the presence of red blood cells (RBCs) and screen for infection (nitrites/leukocytes) as a cause.
>	- **Global Period:** XXX
>- **[[74177]] - CT Abdomen and Pelvis with contrast**
>- **Explanation:** Often referred to as a "CT Urogram," this is used to check the kidneys and ureters for stones or masses.
>- **Global Period:** XXX
___
>[!info]+ Etymology of [[hematuria]]
>_Hematuria_ is built from #greek roots: “**haima**” (**blood**) + “*ouron*/[[-uria]]” (**urine/urination**). 
>In word-part terms used in med terminology, it’s essentially [[hemat-]]/[[hem-]] (**blood**) + [[-uria]] (**urine condition**).
___
>[!note]+ Related terms]
>- **[[Microhematuria]] / microscopic [[hematuria]]:** small amounts of blood in urine not visible to the eye.​
>- **[[Gross hematuria]]:** visible blood/discoloration in urine.
>- **Red urine ≠ [[hematuria]] (look-alikes):** discoloration can also come from hemoglobin, myoglobin, porphyrins, some drugs, or foods (e.g., beets), so confirmation is typically by [[urinalysis]]/microscopy.

_____
>[!tip]- DERIVATIONS of [[hematuria]]
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


