---
tags: medroot
aliases:
  - -a
roots:
  - -a
  - -e
  - -ae
forms:
  - noun
  - suffixes
  - suffix
"alphabet:": A
definition:
  - this word is plural
---
>[!Note] DEFINITION of [[-ae]]
> In medical/anatomical terminology derived from [[Latin]], words ending in **[[-a]]** (**1st declension**) often form their plural with **-ae**, so many structures are documented in the plural with -**ae**, such as **vertebrae**, **patellae**, **fossae**, or **scapulae**.  
>Functionally, **-ae** is **grammatical**, not semantic: it does not mean “*pertaining to*,” “*condition*,” etc.; it simply marks number (**plural**) based on Latin rules that medical language inherited.
_____
>[!info]+ ETYMOLOGY of [[-ae]]
> #latin - Comes from **Classical Latin 1st declension** nouns, where:
 >   
>    - Singular nominative: **[[-a]]**
>        
>    - Plural nominative: **[[-ae]]**.
>        
>- Medical and anatomical terms borrowed from Latin kept this plural pattern, which is why gross anatomy texts, atlases, and some radiology/anatomy reports still use **[[-ae]]** in formal plurals.
>
_____
>[!example]+ RELATED TERMS to [[-ae]]
> - **Aliases / related grammatical endings (Latin plurals):**
 >   
>    - **-a → -ae**: vertebra → vertebrae, scapula → scapulae, fossa → fossae.
>        
>    - Other Latin plural patterns you’ll bump into alongside -ae:
>        
>        - **-us → -i**: bronchus → bronchi, nucleus → nuclei.
>            
>        - **-um → -a**: bacterium → bacteria, ovum → ova.
>            
>        - **-is → -es**: diagnosis → diagnoses.
>            
>- **Not a true “medical suffix”:**  
 >   Many medical suffix lists don’t even list **-ae** because it doesn’t add a clinical meaning; it’s strictly a carryover **plural marker** from Latin grammar.
 >   
_____

> [!abstract]+ **Coding angle (how it hits your encoder brain)**
> 
> - In ICD‑10‑CM and CPT descriptors, you’ll usually see **standard English plurals** (“vertebrae,” “patellae,” “fossae”) where appropriate, but the code meaning doesn’t change just because the label uses -ae.[](https://uen.pressbooks.pub/medicalenglish/chapter/singular-and-plural-forms-of-a-word/)​
>     
> - For you as an inpatient profee coder, treat **-ae** as a visual cue that the term is plural, which can help:
>     
>     - Clarify documentation (e.g., “C5-C6 vertebrae” vs “C5 vertebra”).
>         
>     - Cross‑check with imaging and op notes when counting levels or structures for CPT selection.
> 
_____
>[!tip]- DERIVATIONS of -ae
>```dataview
>TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name !=[[]].file.name
>SORT file.name ASC
>```
___
>[!faq]- Query
>```dataview
>TABLE definition AS Definition
>FROM #medroot
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```

[[Med roots dictionary]]
[[Appendix A Prefixes]]
[[Appendix B Combining Forms]]
[[Appendix C Suffixes]]
[[Appendix D Suffix forms]]
