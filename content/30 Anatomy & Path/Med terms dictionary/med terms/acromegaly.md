---
tags:
  - medterm
  - medroot
aliases:
  - growth hormone excess
  - pituitary gigantism
roots:
  - acr-
  - mega-
  - -y
  - -o-
"definition:": abnormal enlargement of hands, feet, jaw, and/or other extrmities
"alphabet:": A
forms:
  - combining
  - noun
---
>[!note]+ Definition of [[acromegaly]]
>[[acr-]][[o-]][[mega-|megal-]][[-y]] - abnormal enlargement of hands, feet, jaw, and/or other extremities, often due to too much GH ( **condition of enlarged extremities**); The keyword **"abduct"** (**or abduction**) can refer to several different clinical scenarios. It commonly refers to the movement of a body part away from the midline, which can present as a joint contracture (**abduction contracture**), a nerve condition (**abducens nerve palsy affecting the eye's ability to abduct**), or procedures involving abductor muscles or abduction splinting.
___
>[!info]+ Etymology of [[acromegaly]]
>- **acr-**: From the Greek _akron_, meaning "**extremity**" or "**end**."
>    
>- **mega-**: From the Greek _megas_, meaning "**large**" or "**great**."
>    
>- **-y**: A suffix denoting a "**condition**" or "**process**."
>    
>- **Literal Meaning**: The condition of having large extremities.
>

____
> [!example]+ ICD-10-CM Code(s):
> **Code – Short Title: Explanation**
> 
> - **M24.551 / M24.552** – Contracture, right hip / Contracture, left hip: Used for an abduction contracture of the hip, where the joint is restricted and fixed in an abducted position.
>     
> - **M24.511 / M24.512** – Contracture, right shoulder / Contracture, left shoulder: Used for an [[abduction]] contracture of the shoulder joint.
>     
> - **M24.50** – Contracture, unspecified joint: Used when an abduction contracture is documented but the specific joint is not identified.
>     
> - [[**H49.21]] / [[H49.22]]** – Sixth [abducens] [[nerve palsy]], right eye / left eye: The abducens nerve controls the lateral rectus muscle, which abducts the eye. A palsy results in an inability to abduct the eye outward.
>     
> - **M62.40** – Contracture of muscle, unspecified site: Used if the abduction contracture is strictly muscular rather than involving the joint capsule itself.
>     
> - **R26.2** – Difficulty walking, not elsewhere classified: Used as an ancillary code if there is documented functional gait impairment due to an abduction/adduction deformity of the lower extremities.
>     
> 
> **CPT/HCPCS Code(s):**
> 
> **Code – Long Title: Explanation**
> 
> - **28240** – Tenotomy, lengthening, or release, abductor hallucis muscle: Surgical release or lengthening of the abductor hallucis muscle in the foot, commonly performed to relieve foot pain or correct toe deformities.
>     
>     - **WRVU:** ~4.41
>         
>     - **Assistant Payable:** Yes
>         
> - **[[27256]]** – Treatment of spontaneous hip dislocation (developmental, including congenital or pathological), by abduction, splint or traction; without anesthesia, without manipulation: Non-surgical closed treatment of a hip dislocation utilizing an abduction splint or traction to realign the joint.
>     
>     - **WRVU:** 4.17
>         
>     - **Assistant Payable:** Yes
>         
> - **27257** – Treatment of spontaneous hip dislocation (developmental, including congenital or pathological), by abduction, splint or traction; with anesthesia, without manipulation: Similar to 27256, but performed under anesthesia.
>     
>     - **WRVU:** 5.25
>         
>     - **Assistant Payable:** Yes
>         
> - **L1652** – Hip orthosis, bilateral thigh cuffs with adjustable abductor spreader bar, adult size, prefabricated, includes fitting and adjustment: HCPCS code for an adjustable hip abduction brace or orthosis.
>     
>     - **WRVU:** N/A
>         
>     - **Assistant Payable:** N/A
>         
> 
> **Global Periods:**
> 
> - **28240:** 090 days
>     
> - **27256, 27257:** 090 days
>     
> - **L1652:** XXX (Not subject to global period rules)
>     
> 
> **HCC Information:**
> 
> - Uncomplicated joint contractures (M24.5-) and isolated cranial nerve palsies (H49.2-) do not typically risk-adjust under the CMS-HCC model unless they are manifestations of a broader hierarchical condition (such as advanced neuromuscular disease or stroke sequelae).
>     
> 
> **Exclusives/Inclusives:**
> 
> - **ICD-10 M24.5- (Contractures):** _Excludes1:_ contracture of muscle without contracture of joint (M62.4-), contracture of tendon (sheath) without contracture of joint (M62.4-), and Dupuytren's contracture (M72.0).
>     
> - **CPT 28240:** Mutually exclusive to comprehensive bunionectomies or major foot reconstructions (e.g., CPT 28292-28299) when performed on the same toe, as the soft tissue release is considered an inclusive component of the primary correction.
>     
> - **CPT 27256 / 27257:** Mutually exclusive to one another; do not report together. These are also generally bundled into open hip reductions or arthroplasties if performed on the same hip during the same operative session.
> 
_____
>[!tip]- DERIVATIONS of [[acromegaly]]
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