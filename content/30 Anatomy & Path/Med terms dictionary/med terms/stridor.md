---
tags:
  - medterm
  - medroot
  - Respiratory
aliases:
  - Laryngeal wheeze
roots:
  - stridor
forms:
  - prefix
  - suffix
  - combining
  - diminutive
alphabet: S
definition:
  - a high-pitched wheezing sound caused by disrupted airflow
---

>[!Note] DEFINITION of [[stridor]]
>**Stridor is a respiratory sign characterized by a harsh, high-pitched vibratory noise heard during [[inspiration]], expiration, or both.** It results from turbulent airflow through a partially obstructed upper airway. It is distinct from wheezing (**which usually originates in the lower airways**) and is often indicative of conditions such as [[croup]], [[epiglottitis]], [[laryngomalacia]], or foreign body aspiration.
_____
>[!info]+ ETYMOLOGY of [[stridor]]
>#latin Derived from the Latin word _stridor_, meaning "**creaking**," "**grating**," "**hissing**," or "**harsh sound**," from the verb _stridere_ (**to creak or hiss**)
_____

> [!success]+  **Related Terms**
> - [[Dyspnea]] (**Difficulty breathing**)
> - Wheezing (**Lower airway sound**)
> - [[Croup]] (**Laryngotracheobronchitis**)
> - Laryngomalacia (**Softening of laryngeal tissues**)
> - [[Epiglottitis]] (**Inflammation of the epiglottis**)
> - Airway Obstruction
_____

> [!example]+ **Coding and Coding Nuances:**
> **ICD-10 Codes**
> 
> - **[[R06.1]]** (Stridor) — _Note: ICD-10-CM codes vary in length from 3 to 7 characters. R06.1 is a complete, valid code without further subdivision._
> - **[[Q31.2]]** (Congenital laryngeal stridor) — _Used if the stridor is congenital._
> - **[[P28.89]]** (Other specified respiratory conditions originating in the perinatal period) — _Sometimes used for newborns with stridor not elsewhere classified._
> 
> **CPT Codes**
> 
> - **N/A** (Stridor is a symptom/diagnosis, not a procedure. CPT codes represent medical services.)
> - **[[31575]]** (Laryngoscopy, flexible; diagnostic) — _Common procedure code used to evaluate the cause of stridor._
> - **[[31579]]** (Laryngoscopy, flexible; with biopsy) — _Used if tissue sample is taken during evaluation._

_____
>[!tip]- DERIVATIONS of [[stridor]]
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