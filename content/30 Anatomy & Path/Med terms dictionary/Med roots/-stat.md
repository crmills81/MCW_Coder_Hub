---
tags:
  - medroot
aliases: []
roots:
  - -stat
forms:
  - combining
  - prefix
  - suffix
  - suffix form
alphabet: S
definition:
  - device or agent for stopping the flow
---
>[!Note] DEFINITION of [[-stat]]
>device or agent for stopping the flow (of something)
>*see also: [[sta-]] (stop)
>not to be confused with: [[statim]] (immediately)*
_____
>[!info]+ ETYMOLOGY of [[-stat]]
>#greek
>
>|Component|Origin|Meaning|
>|---|---|---|
>|**[[-stat]]** / **[[-stasis]]** / **[[-static]]**|Greek _ἵστημι_ (histēmi), from _στήνω_ (stēnō)|"**that which stops**," "**instrument for halting**," "**agent of arrest**" — instrumental/agentive suffix denoting a device that arrests flow|
>
> The word entered English in the **1820s** as *haemostat* (**noun**), borrowed from Modern Latin ***haemostatus***, from Greek ***αἷμα*** (haima) + ***ἵστημι*** (histēmi) — literally "**blood-stopper**." The adjective *haemostatic* appeared in the **1830s**, and *haemostasis* in the **1720s**. The root *histēmi* ("**to stand, to stop**") connects [[-stat]] to the entire **[[motion and arrest roots]]**: ***[[haemostasis]]*** (**haima + histēmi $\rightarrow$ stopping of blood flow**), ***[[haemostatic]]*** (**haima + stasis + -tic $\rightarrow$ tending to arrest bleeding**), and ***[[myostat]]*** (**mys + stat $\rightarrow$ instrument that relaxes/paralyzes muscle fibers by stopping contraction**). The **instrumental/agentive suffix** [[-stat]] is productive in surgery, hematology, and pharmacology: e.g., ***[[haemostat]]***, ***[[myostat]]***, ***[[vasostat]]***, ***[[osteostat]]***, and ***[[cardiostat]]***.
_____
>[!example]+ RELATED TERMS to [[-stat]]
>
_____
>[!tip]- DERIVATIONS of [[-stat]]
>```dataview
>TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
>SORT file.name ASC
>```
_____
>[!faq]- Query
>```dataview
>TABLE definition AS Definition
>FROM #medroot
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```

[[Med terms dictionary]]