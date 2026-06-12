---
tags:
  - medterm
  - medroot
aliases: []
roots:
  - arthr-
  - -agra
  - arth-
  - -ra
"definition:":
  - acute joint paint
  - gouty arthritis
  - acute gout
forms:
  - adjective
"alphabet:": A
---
>[!note]+ Definition of [[arthragra]]
>[[arthr-]][[-agra]] - acute joint pain; [[Arthragra]] refers to an acute manifestation of gout characterized by the sudden onset of **intense pain, swelling, and inflammation in one or more joints**. It is caused by the **crystallization of uric acid** (*monosodium urate*) within the joint space, often triggered by hyperuricemia. While "**podagra**" specifically refers to the big toe, [[arthragra]] serves as the broader anatomical equivalent for such attacks when they occur in other joints like the elbows, wrists, or shoulders.
___
>[!info]+ Etymology of [[arthragra]]
>#greek The word is a composite of two Greek roots that highlight the sudden and painful nature of the condition:
>- **Arthr-**: From the Greek _arthron_, meaning "*joint*"
>- **-agra**: From the Greek _agra_, meaning a "seizure," "catch," or "trap".
>- **Historical Context**: The suffix _[[-agra]]_ was traditionally added to the name of a body part to denote a *gouty* attack in that specific area (e.g., _[[pod-]]_ for foot, _[[chir-]]_ for hand).

_____

> [!example]+ **Related Terms and Coding**
> As a profee coder, you will find that "[[arthragra]]" is rarely used in modern EMRs, but the underlying condition (*gout*) is highly specific in ICD-10-CM:
> 
> |Term|Meaning|ICD-10-CM/Clinical Context|
> |---|---|---|
> |**Podagra**|Gout in the big toe|Most common manifestation; coded under **M10.0-**  |
> |**Chiragra**|Gout in the hand|Historically specific; now coded as gout of hand/wrist   |
> |**Gonagra**|Gout in the knee|Specifically denotes acute gouty arthritis of the knee joint.|
> |**[[arthralgia]]**|Joint pain|A general symptom code (**M25.5-**) for pain without inflammation  .|
> |**[[Hyperuricemia]]**|High uric acid|The metabolic precursor to [[arthragra]] (**[[E79.0]]**) .|
> 
> - **Tophi**: Permanent deposits of urate crystals in tissues, common in chronic cases of ​
>     
> - **[[Monoarticular]]**: Affecting only one joint; typical of early [[arthragra]] attacks​
>     
> - **[[Polyarticular]]**: Affecting multiple joints; more common in advanced or untreated gout
> 

_____
>[!tip]- DERIVATIONS of [[arthragra]]
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
