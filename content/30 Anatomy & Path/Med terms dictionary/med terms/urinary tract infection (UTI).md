---
tags:
  - medterm
aliases:
  - UTI
roots:
  - ur-
  - uro
  - -ion
  - -tract
forms:
  - prefix
  - suffix
  - combining
  - noun
alphabet: U
definition:
  - infection of the urinary tract
---
>[!Note] DEFINITION of [[urinary tract infection (UTI)]]
>**A UTI typically causes urinary symptoms such as burning with urination, frequent urination/urgency, and sometimes cloudy or bloody urine**.  If the infection moves upward, it can involve the kidneys (kidney infection), which is more serious and can cause systemic symptoms like fever, chills, nausea/vomiting, and flank/back pain. 
>
>#### Diagnosis Code(s):
>**[[N39.0]] - Urinary tract infection, site not specified**
>	- **Explanation:** This is the default code for a UTI when the specific location (*like the bladder or kidney*) is not documented.
>	- **Note on "Use Additional Code":** Per ICD-10 guidelines, you must use an additional code ([[B95]]-[[B97]]) to identify the causative organism, such as **E. coli ([[B96.20]])**, if known.
>- **Related Alternatives:**
>	- **[[N30.00]] - Acute [[cystitis]] without [[hematuria]]:** Used when the infection is specifically identified as being in the bladder.
>	- **[[N10]] - Acute [[pyelonephritis]]:** Used when the infection has reached the kidneys (often presenting with flank pain and fever).
_____
>[!info]+ ETYMOLOGY of [[urinary tract infection (UTI)]]
>#latin _Urinary_ (“of or pertaining to urine”) traces back to Latin _urina_ (“**urine**”).[](https://www.etymonline.com/word/urinary)​  
_Tract_ comes from Latin _tractus_ (“course, passage”), from _trahere_ (“**to pull/draw**”), which fits the idea of a bodily “passage.”[](https://www.etymonline.com/word/tract)​  
_Infection_ comes from Late Latin _infectionem_/_infectio_, from Latin _inficere_ (“**to spoil, stain**”).

_____
>[!info]+ RELATED TERMS
>- **[[Cystitis]]:** **bladder infection**; people often use “**UTI**” to mean cystitis specifically.[](https://www.niddk.nih.gov/health-information/urologic-diseases/bladder-infection-uti-in-adults)
>- **[[Pyelonephritis]]:** **kidney infection** (an upper-tract **UTI**), often arising when a lower-tract infection spreads upward.[](https://www.niddk.nih.gov/health-information/urologic-diseases/kidney-infection-pyelonephritis/definition-facts)​
>- **[[Urethritis]]** (urethra infection) and **CAUTI** ([[catheter]]-associated UTI) are common related labels depending on the site/cause.

_____
>[!tip]+ DERIVATIONS of [[urinary tract infection (UTI)]]
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