---
tags:
  - medroot
  - medterm
aliases:
  - -ode
  - -(o)id
roots:
  - -oid
  - -(o)id
forms:
  - suffix
  - noun
  - adjective
"alphabet:": O
definition:
  - resembling
  - indicating a particular shape form or resemblance
---

>[!Note] DEFINITION of [[-oid]]
>forms nouns or adjectives: resembling, indicating a particular shape, form, or resemblance; The suffix _[[-oid]]_ attaches to a root (**Greek, Latin, or Modern**) to form adjectives meaning "resembling [root]" or nouns naming things that resemble [root]. Critically, it carries a subtle shade of meaning beyond a simple synonym — it suggests a _likeness_ that is structural or visual in nature, not an identity. For example, _mucoid_ means "**mucus-like**" (**not actual mucus**), and _typhoid_ means "**typhus-like**" (**not typhus itself**). In anatomy, _-oid_ frequently names structures based on their shape — _sigmoid_ (**S-shaped**), _cricoid_ (**ring-shaped**), _sphenoid_ (**wedge-shaped**). In pathology it often marks a condition resembling a disease — _[[sarcoidosis]]_, _[[lymphoid]]_, _rheumatoid_. In pharmacology it marks substance classes — _opioids_ (**opium-like**), _steroids_ (**sterol-like**). The "[[-o-]]" that often appears before "**-oid**" (as in "**android**") is technically the final vowel of the preceding stem, not a separate morpheme.
_____
>[!info]+ ETYMOLOGY of [[-oid]]
>#greek - First attested in English in the **early 19th century** as a learned borrowing.
 >   
>- From **Latinized** Greek _-oeidēs_ (three syllables: _-o-ei-dēs_), from **Greek _εἶδος_ (_eîdos_)** — "**form, shape, appearance, likeness**," related to _idein_ ("**to see**") and _eidenai_ ("**to know**"), from PIE root ***weid-** ("to see").
>    
>- The _-o-_ is the connecting/stem vowel from the preceding element; _-eidēs_ is the operative part meaning "**having the form of**."
>    
>- Latin form: _-oīdēs_ → condensed in English to simply **[[-oid]]**.
_____
>[!example]+ RELATED TERMS to [[-oid]]
>
>| [[-oid]] | resembling | -       | -   |
| -------- | ---------- | ------- | --- |
| [[-ose]] | YES        | full of | chemical substance    |
| [[-eid]] | YES        | form |  appearance    |

_____

> [!success]+ Root Breakdown
> |Component|Meaning|Origin|
> |---|---|---|
> |_[[-o-]]_|Connecting/stem vowel|Greek, from preceding root's final vowel |
> |_[[-eid-]]_|Form, shape, appearance|Greek _εἶδος_ (_eîdos_), "**form, likeness**" |
> |_[[-s]]_ → _[[-d]]_|Greek suffix ending, condensed to _-oid_ in English|Greek ​|
> 

_____
>[!tip]- DERIVATIONS of [[-oid]]
>```dataview
>TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
>SORT file.name ASC
>```
_____
>[!faq]- Query
>
>```dataview
>TABLE definition AS Definition
>FROM #medroot
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```



> [!warning] Medical Examples by Category
> **Anatomy — Named by Shape**
> 
> |Term|Root|Meaning|
> |---|---|---|
> |**Sigmoid**|Greek _sigma_ (Σ, the letter S)|S-shaped; the sigmoid colon |
> |**Sphenoid**|Greek _sphēn_ ("wedge")|Wedge-shaped; a skull bone |
> |**Cricoid**|Greek _krikos_ ("ring")|Ring-shaped; laryngeal cartilage |
> |**Arytenoid**|Greek _arytaina_ ("ladle")|Ladle-shaped; laryngeal cartilages |
> |**Trapezoid**|Greek _trapeza_ ("table")|Table-shaped; a carpal bone |
> |**Rhomboid**|Greek _rhombos_ ("rhombus")|Diamond/rhombus-shaped; back muscles |
> 
> **Anatomy — Named by Resemblance**
> 
> |Term|Root|Meaning|
> |---|---|---|
> |**Deltoid**|Greek _delta_ (Δ)|Delta-shaped; shoulder muscle |
> |**Mastoid**|Greek _mastos_ ("**breast**")|Breast-shaped; temporal bone process |
> |**Adenoid**|Greek _adēn_ ("**gland**")|Gland-like; lymphoid tissue in nasopharynx ​|
> |**Arachnoid**|Greek _arakhnē_ ("**spider**")|Spider web-like; middle meningeal layer |
> |**Hemorrhoid**|Greek _haimorrhois_ ("**blood-flowing**")|Blood-flow-related swelling of rectal veins ​|
> 
> **Pathology / Disease**
> 
> |Term|Root|Meaning|
> |---|---|---|
> |**[[Rheumatoid]]**|Greek _rheuma_ ("**flow, flux**")|Resembling rheumatic disease ​|
> |**[[sarcoidosis]]**|Greek _sarx_ ("**flesh**")|Flesh-like granuloma disease ​|
> |**[[Typhoid]]**|Greek _typhos_ ("**stupor**")|Typhus-like fever illness ​|
> |**[[Mongoloid]]**|(**older/deprecated**)|Now considered offensive; historically misused diagnostic term|
> 
> **Pharmacology / Substance Classes**
> 
> |Term|Root|Meaning|
> |---|---|---|
> |**Opioid**|Latin _opium_ ("**poppy juice**")|Opium-like; receptor-binding analgesics |
> |**Steroid**|Greek _stereos_ ("**solid**")|Sterol-like; cholesterol-ring molecules |
> |**Alkaloid**|Arabic _al-qali_ ("**plant ash**")|Alkali-like; nitrogen-containing plant compounds |
> |**Toxoid**|Greek _toxikon_ ("**poison**")|Toxin-like; deactivated toxin used as vaccine |
> 
> **Hematology / Immunology**
> 
> |Term|Root|Meaning|
> |---|---|---|
> |**Myeloid**|Greek _myelos_ ("**marrow**")|Marrow-like; bone marrow cell lineage |
> |**Lymphoid**|Latin _lympha_ ("**water, lymph**")|Lymph-like; lymphatic tissue ​|
> |**Plasmoid**|Latin _plasma_|Plasma-like structure ​|
> 


[[Med roots dictionary]]
[[Appendix A Prefixes]]
[[Appendix B Combining Forms]]
[[Appendix C Suffixes]]
[[Appendix D Suffix forms]]