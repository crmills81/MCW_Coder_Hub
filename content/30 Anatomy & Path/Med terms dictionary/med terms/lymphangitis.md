---
tags:
  - medterm
  - medroot
aliases:
  - angiolymphitis
  - blood poisoning
roots:
  - lymphangitis
forms:
  - prefix
  - suffix
alphabet: L
definition:
  - Inflammation of the lymphatic vessels
---
>[!Note] DEFINITION of [[lymphangitis]]
>**Lymphangitis** is the inflammation or infection of the lymphatic channels (**the thin-walled vessels of the lymphatic system**) that occurs as a result of a distal infection — meaning the infection starts somewhere else in the body (**a wound, abscess, skin infection**) and then travels proximally through the lymphatic system toward regional lymph nodes. It presents classically as **red, warm, tender streaks visible along the skin following the path of the lymphatic vessels** toward the nearest lymph node group and is considered a potential medical emergency because the lymphatic network can rapidly carry pathogens system-wide, leading to [[sepsis]] and death within hours if untreated.
_____
>[!info]+ ETYMOLOGY of [[lymphangitis]]
>#latin 
>The term was first recorded in **1835-1845** as a New Latin coinage in medical literature. The root _lympha_ comes from Classical Latin meaning "**water**" or "**clear water**," with the spelling influenced by folk etymology connecting it to the Greek _nýmphē_ ("*nymph*"). The combining element _lymphangi-_ (or _[[lymphangei-]]_) combines the Latin lymph root with the Greek vessel root _ángos_, which also appears in related terms like _angiogram_ and _angioplasty_. The suffix _[[-itis]]_ is from the Greek feminine adjectival form meaning "pertaining to *a disease of*," standardized through centuries of Galenic and Hippocratic tradition to indicate inflammatory pathology.
>
>**Pronunciation:** _lim-fan-JY-tis_ (American English) / _lim-fan-jee-EYE-tis_ (**alternate**)
>>
_____

> [!tip]+ Word Breakdown:
> **Lymphangitis** is a **compound medical term** built from three distinct roots — it is not a simple prefix or suffix but a full clinical noun formed by combining:
> 
> |Component|Origin|Meaning|
> |---|---|---|
> |**[[lymph-]]**|Latin _lympha_ ("**water**," "**clear water**")|Refers to lymph fluid / the lymphatic system ​|
> |**[[angi-]]**|Greek _ἄγγος_ (_ángos_, "**vessel**," "**container**")|Refers to a vessel or channel  ​|
> |**[[-itis]]**|Greek _-ῖτις_ (_-îtis_, "**disease pertaining to**")|Denotes inflammation  |
> 
> ☑️ So broken down: **lymph** (l*ymph fluid*) + **angi** (*vessel*) + **itis** (*inflammation*) = _inflammation of the lymphatic vessels_.
> >
_____

> [!warning]+ ICD-10 Codes (AAPC/Coding Relevance):
> **Lymphangitis** appears under **two different ICD-10-CM chapters** depending on acuity and context:
> 
> |Code|Description|Chapter|
> |---|---|---|
> |**[[I89.1]]**|[[lymphangitis]] (chronic/subacute, noninfective) |Chapter 9 — Diseases of the Circulatory System (I00-I99)  |
> |**[[L03.9]]**|[[Cellulitis]] and **acute** lymphangitis, unspecified | Chapter 12 — Diseases of the Skin and Subcutaneous Tissue (L00-L99)  ​|
> 
>  ⚠️ **Coding tip:** The _L03_ category covers **acute** infectious lymphangitis (**almost always bacterial, often coded with cellulitis together**). The _I89.1_ code covers **chronic or subacute** lymphangitis and specifically excludes filarial causes. Don't mix these up on your query reviews!
> >
_____
>[!tip]- DERIVATIONS of [[lymphangitis]]
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