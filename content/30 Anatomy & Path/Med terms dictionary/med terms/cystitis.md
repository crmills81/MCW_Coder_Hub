---
tags:
  - medterm
  - medroot
  - urology
  - specialty/urology
aliases:
roots:
  - cysti-
  - -itis
  - cyst-
forms:
  - prefix
  - suffix
  - combining
alphabet: C
definition:
  - inflammation of the bladder lining
ICD-10 Code: N30.00
---
>[!Note] DEFINITION of **[[cystitis]]**
>**Acute bacterial [[cystitis]]** causes **[[dysuria]], urgency, frequency, and sometimes [[hematuria]]**; it resolves with antibiotics but recurs in many cases, while interstitial cystitis (IC/BPS) is chronic with pelvic pain and no infection. Risk factors include **female anatomy, sexual activity, catheters, and menopause; complications like [[pyelonephritis]]** can arise if untreated.
>
>#### Diagnosis Code(s):
>**1. [[N30.00]] - Acute cystitis without [[hematuria]]**
>- **Explanation:** This is the most common code for a typical sudden-onset bladder infection.
>	- **Note:** If blood is present in the urine, use **[[N30.01]]** (**Acute cystitis with hematuria**).
>	- **2. [[N30.10]] - Interstitial cystitis (chronic) without hematuria**
>- **Explanation:** A chronic, painful bladder syndrome not caused by bacteria.
>	- **Note:** If blood is present, use **[[N30.11]]** (**Interstitial cystitis with hematuria**).
>	- **3. [[N30.40]] - Irradiation cystitis without hematuria**
>- **Explanation:** Used for patients experiencing bladder inflammation as a side effect of radiation therapy (common in prostate or cervical cancer treatment).
_____
>[!info]+ ETYMOLOGY of **[[cystitis]]**
>#greek From Greek _kystis_ (κύστις, "bladder") + _[[-itis]]_ ("**inflammation**"), first used in 1774. Interstitial **[[cystitis]]** traces to 1808 descriptions by Philip Syng Physick of bladder inflammation without stones.
_____
>[!tip]+ DERIVATIONS of **[[cystitis]]**
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
>FROM #medroot  
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```

![[Pasted image 20260208232625.png]]

[[Med roots]]
[[Appendix A Prefixes]]
[[Appendix B Combining Forms]]
[[Appendix C Suffixes]]
[[Appendix D Suffix forms]]