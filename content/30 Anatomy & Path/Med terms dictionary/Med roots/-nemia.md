---
tags:
  - medroot
aliases:
  - -emia
  - -aemia
roots:
  - -ne-
  - -mia
  - -emia
forms:
  - suffix
  - suffixes
  - suffix form
"alphabet:": N
definition:
  - condition of the blood especially an abnormal blood state
---
>[!Note] DEFINITION of [[-nemia]]
> In medical terminology, **-emia / -aemia** is a combining suffix used to form nouns that describe pathological or quantitative conditions of the blood, such as deficiency, excess, or abnormal presence of cells, substances, or organisms. Examples include **anemia** (**reduced RBCs/hemoglobin**), **bacteremia** (**bacteria in the blood**), and **hyperlipidemia** (**elevated lipids in the blood**).
_____
>[!info]+ ETYMOLOGY of [[-nemia]]
> #latin - From Neo-Latin **[[-emia]]**, based on Greek compound stem **[[-aimia]]** −αιμιˊα−αιμιˊα, from **haima** (αἷμα)(αἷμα) meaning “blood.”
>  
>- British spelling often shows up as **[[-aemia]]** (**e.g., anaemia, leukaemia**); American spelling simplifies to **-emia** ([[anemia]], [[leukemia]]).
_____
>[!example]+ RELATED TERMS to [[-nemia]]
> - **Aliases / spelling variants:**
>    
>    - **[[-emia]]** (**American**)
>       
>    - **[[-aemia]]** (British; often seen in older literature)
>        
>- **Closely related roots/prefixes:**
>    
>    - **[[hem-]] / haem- /[[ hemat-]] / haemat-** = blood (**e.g., hemoglobin, hematology**), often paired with **-emia** in blood-condition terms.
>        
>- **Conceptually related suffixes:**
 >   
 >   - **[[-penia]]** = deficiency, too few (e.g., [[leukopenia]]), sometimes used with blood cell lines rather than -emia.​
>        
>    - **[[-osis]]** = condition, often abnormal (e.g., [[leukocytosis]]), frequently used for increased counts where [[-emia]] might also appear.
>
_____

> [!example]+ **Coding angle (how you’ll see it in ICD-10-CM / CPT)**
> 
> The suffix itself doesn’t have standalone codes, but you’ll see it in many diagnosis names. Common **[[-emia]]** diagnoses (**just to anchor it in your coder brain; verify specifics in your encoder/ICD-10-CM book when assigning**):
> 
> - [[anemia]] (various types, e.g., iron deficiency, B12 deficiency, [[aplastic]])​
>     
> - Thalassemia
>     
> - Hyperlipidemia
>     
> - Hyperglycemia / hypoglycemia
>     
> - Bacteremia
>     
> 
> Each of these conditions will have its **own** ICD-10-CM code(s); **-emia** just tells you “this word is describing a blood condition,” so it’s a quick mental flag that you’re in the heme/metabolic space.
>
_____
>[!tip]- DERIVATIONS of [[-nemia]]
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
