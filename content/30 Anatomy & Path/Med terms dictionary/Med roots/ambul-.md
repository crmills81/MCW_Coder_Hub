---
tags:
  - medroot
aliases: []
roots:
  - ambul-
  - amb-
forms:
  - combining
  - prefix
  - prefixes
alphabet: A
definition:
  - walk
  - walking or mobility
  - ambulatory
---

# Combining Form: ambul-

## Short Definition
Relating to walking or mobility. 

## Long Definition
The combining form **[[ambul-]]** refers to walking, movement, or mobility. It appears in physical therapy, rehabilitation, and functional status documentation. The prefix "[[ambul-]]" originates from the Latin word "**ambulare**," meaning "**to walk, to take steps, or to go around**," and words containing this prefix typically relate to movement or transportation. This root is present in English words such as "**amble**," "**ambulance**," and "**perambulator**," with its sense broadening in French to encompass anything related to **general movement, leading to words like "ambulant" (itinerant/mobile) and "somnambule" (sleepwalker)**.

## Etymology

>[!info]+ ETYMOLOGY of [[ambul-]]
>#latin
>
>|Component|Origin|Meaning|
>|---|---|---|
>|**[[ambul-]]**|Latin _ambulāre_ (ambulāre), from _ambulāre_ (to walk)|"**to walk**," "**to move about**," "**to take steps**"|
>
> The word entered English in the **1400s** as *amble* (**verb**), borrowed from French *ambuler*, from Latin ***ambulāre*** — literally "**to walk**." The root *ambulāre* ("**to walk**") connects [[ambul-]] to the entire **[[mobility roots]]**: ***[[somnambulism]]*** (**somnus + ambulāre $\rightarrow$ sleep walking**), ***[[ambulance]]*** (**a vehicle that moves/transports the sick**), and ***[[perambulate]]*** (**per- + ambulāre $\rightarrow$ to walk through or around**). The **combining form** [[ambul-]] is highly productive in physical therapy and functional status documentation: e.g., ***[[ambulation]]***, ***[[ambulatory]]***, and ***[[non-ambulatory]]***.

## Related Terms
| Term | Meaning |
|------|---------|
| [[gait]] | manner of walking |
| mobility | ability to move |

## Common Medical Terms
- **[[Ambulatory]]** - able to walk  
- **[[Ambulation]]** - the act of walking  
- **Ambulatory care** - outpatient care  

## Documentation Clues
- “Ambulates with assistance”
- “Non‑ambulatory”
- “Gait abnormality”

## Coder’s Notes
Mobility status affects **functional scoring**, **therapy coding**, and **risk adjustment**.


_____
>[!tip]- DERIVATIONS of [[ambul-]]
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

[[Med terms dictionary]]
[[Appendix A Prefixes]]
[[Appendix B Combining Forms]]
[[Appendix C Suffixes]]
[[Appendix D Suffix forms]]