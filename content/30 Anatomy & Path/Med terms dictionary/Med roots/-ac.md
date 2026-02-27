---
tags:
  - medroot
aliases:
  - -ic
  - -al
  - -ar
  - -ary
roots:
  - -ac
forms:
  - suffix
  - suffixes
  - combining
  - negation
"alphabet:": A
definition:
  - pertaining to
  - located in
---
>[!Note] DEFINITION of [[-ac]]
>forms adjectives: pertaining to, located in; As a prefix, **a-** is a privative (**negating**) morpheme meaning "**without**," "**not**," or "**lacking**" — indicating the absence of a structure, function, or condition. It attaches to Greek-derived roots. When the root begins with a vowel, it typically becomes **an-** to ease pronunciation. As a suffix, **-a** serves primarily as a grammatical/nominative ending in Latin and Greek nouns (**especially neuter plural Latin forms and feminine singular forms**), giving medical terms their standard noun form rather than carrying independent clinical meaning. 
_____
>[!info]+ ETYMOLOGY of [[-ac]]
>#greek From Greek -akos — an adjectival suffix denoting "of," "belonging to," or "pertaining to." Passed into Latin as -acus and into English via French -ac or directly from Latin/Greek. Closely related to the more common suffix -ic (also from Greek -ikos)
_____
>[!example]+ RELATED TERMS to [[-ac]]
>
>- **Cardiac** — pertaining to the heart
>- **Iliac** — pertaining to the ilium (**relevant in urology for iliac vessel proximity in renal/ureteral surgery**)
>- **Celiac** — pertaining to the abdomen
>- **Maniac** — pertaining to madness
>- **Hypochondriac** — pertaining to the hypochondrium
>- **[[-al]]** — parallel adjectival suffix (Latin origin)
>- **[[-ic]]** — parallel adjectival suffix (Greek origin)
>- **[[-ary]]** — parallel adjectival suffix (Latin origin)
>
>-  [[-ac]]    |       pertaining to    |      located in        
>- [[-al]]     |     YES         |         YES             |                                  
>-  [[-an]]     |           YES         |         YES         |                                   
>-  [[-ar]]      |          YES       |           YES        |                                             
>- [[-ary]]     |           YES        |           -          |       place for      |                         
>- [[-eal]]       |         YES        |          YES        |                                
>- [[-ean]]       |        YES       |           YES        |                                  
>- [[-etic]]      |         YES        |           -        |                                  
>-  [[-ic]]       |         YES         |          -          |          drug         |          agent               
>- [[-id]]      |          YES       |            -        |       condition (of)     |      state (of)             
>- [[-ile]]      |          YES          |         -         |    capable of (being)     |       like                
>- [[-ine]]       |         YES         |         YES         |                                    
>- [[-itic]]  (to inflammation)    |        -         |           drug      |             agent               
>- [[-ive]]       |         YES          |         -         |                                  
>- [[-otic]]        |       YES         |          -         |                              
>- [[-ous]]      |         YES        |           -        |      characterized by     |       full of              
>- [[-tic]]        |        YES         |         -          |          drug     |          agent, person           
>
_____
>[!tip]- DERIVATIONS of [[-ac]]
>```dataview
>TABLE definition AS Definition 
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

[[Med roots dictionary]]
[[Appendix A Prefixes]]
[[Appendix B Combining Forms]]
[[Appendix C Suffixes]]
[[Appendix D Suffix forms]]

