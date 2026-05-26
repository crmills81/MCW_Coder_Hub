---
tags:
  - medterm
  - classification
  - otolaryngology
  - surgery
aliases:
  - Antrotomy
  - antrotomy
  - Antrotomies
  - antrotomies
  - Sinusotomy
  - sinusotomy
  - Mastoid antrotomy
  - mastoid antrotomy
roots:
  - antr-
  - antro-
  - -tomy
forms:
  - noun
  - plural
alphabet:
  - A
definition: A surgical procedure involving an incision into an anatomical cavity or antrum, most commonly the maxillary sinus or mastoid antrum, to provide temporary drainage or allow for exploration.
---

>[!Note] DEFINITION of [[antrotomy]]
>**Antrotomy** is a surgical procedure defined by making an incision into an anatomical cavity, most frequently the maxillary sinus (**via the nasal cavity or canine fossa**) or the mastoid antrum (**within the temporal bone**). It distinguishes itself from an **[[antrostomy]]**, which involves intentionally creating and maintaining a permanent or semi-permanent artificial opening (**stoma**) for continuous drainage, and a puncture, which relies on a needle aspiration rather than a **scalpel incision**. The underlying mechanical process typically involves **cutting through bone or mucosa to relieve localized pressure from purulent fluid buildup, extract foreign bodies, or clear localized infection**. As a surgical intervention, it is performed strictly in response to pathological states. The clinically relevant forms most commonly encountered in coding are intranasal maxillary antrotomies for severe **[[sinusitis]]** (**coded under [[J32.0]] or [[J01.00]]**) and **transmastoid antrotomies** for acute **[[mastoiditis]]** (**coded in the H70.- family**). It is commonly confused with **[[antrostomy]]**; however, an **antrotomy** refers strictly to the initial cutting or incising action (**often allowed to heal closed**), whereas an antrostomy implies the creation of a durable, open window.

_____

>[!info]+ ETYMOLOGY of [[antrotomy]]
>#greek #latin
>
>|Component|Origin|Meaning|
>|---|---|---|
>|**[[antro-]]** / **[[antr-]]**|Greek: *antron*|"**cave**," "**cavity**"|
>|**[[-tomy]]**|Greek: *tomia*|"**incision**," "**cutting**"|
>
> The word entered English in the **1880s** as *antrotomy* (**noun**), borrowed from Late Latin, combining Greek roots — literally **"incision into a cavity."** The root *antron* ("**cave**") connects **antrotomy** to the entire **[[-antro]]** family: ***antrum*** (**a nearly closed cavity**), ***antritis*** (**inflammation of an antrum**), and *[[antrostomy]]* (**creation of an opening into an antrum**). The suffix *[[-tomy]]* is highly productive in surgical terminology, appearing in terms like ***[[craniotomy]]***, ***anatomy***, and ***[[tracheotomy]]***.

_____

> [!success]+ ### 🔀 ALIASES / ALTERNATE TERMS
> 
> - **[[Sinusotomy]]** _(clinical synonym — often used interchangeably in CPT descriptors for maxillary antrotomy)_
> - **Maxillary antrotomy** _(anatomic subtype — cutting into the maxillary sinus, often via the intranasal route or canine fossa)_
> - **Mastoid antrotomy** _(anatomic subtype — incision into the mastoid antrum to drain pus in severe mastoiditis; H70.00x)_
> - **Caldwell-Luc procedure** _(related clinical entity — a radical maxillary antrotomy using a sublabial approach to access the sinus)_

_____

> [!danger]+ ### 🔗 RELATED TERMS
> 
> - **[[Antrostomy]]** — the creation of a permanent or semi-permanent opening into an antrum; closely related but distinct from the simple incision of an antrotomy.
> - **[[mastoidectomy]]** — surgical removal of mastoid air cells, which traditionally includes or follows a transmastoid antrotomy.
> - **[[Sinusitis]]** — inflammation of the sinus; the primary pathological condition (acute or chronic) prompting a maxillary antrotomy.
> - **[[Mastoiditis]]** — infection of the mastoid bone; the primary indication for a mastoid antrotomy.
> - **Antrum** — the underlying anatomical target; a nearly closed cavity or chamber, especially within a bone.

_____

> [!caution]+ #### CODING CORNER 
> <br>
> 
> ### 🏥 ICD-10-CM CODES
> 
> #### Maxillary Indications (Sinusitis)
> 
> |Code|Description|
> |---|---|
> |**[[J01.00]]**|Acute maxillary sinusitis, unspecified|
> |**[[J01.01]]**|Acute recurrent maxillary sinusitis|
> |**[[J32.0]]**|Chronic maxillary sinusitis|
> 
> #### Mastoid Indications (Mastoiditis)
> 
> |Code|Description|
> |---|---|
> |**[[H70.001]]**|Acute mastoiditis without complications, right ear|
> |**[[H70.002]]**|Acute mastoiditis without complications, left ear|
> |**[[H70.003]]**|Acute mastoiditis without complications, bilateral|
> 
> ---
> 
> ### 🔧 COMMON CPT CODES (Antrotomy Procedures)
> 
> |CPT Code|Description|
> |---|---|
> |**[[31020]]**|Sinusotomy, maxillary (antrotomy); intranasal|
> |**[[31030]]**|Sinusotomy, maxillary (antrotomy); radical (Caldwell-Luc) without removal of antrochoanal polyps|
> |**[[31032]]**|Sinusotomy, maxillary (antrotomy); radical (Caldwell-Luc) with removal of antrochoanal polyps|
> |**[[69501]]**|Transmastoid antrotomy (simple mastoidectomy)|
> 
> ---
> 
> > ⚠️ **Coding Note:** For **inpatient profee and outpatient surgery coding**, distinguishing between an **[[antrotomy]]** and an **[[antrostomy]]** is critical for accurate code assignment. An **antrotomy** (**[[31020]]**) is simply an incision into the sinus, whereas an endoscopic **antrostomy** (e.g., **[[31256]]**) involves creating a surgical window and utilizes an endoscope. When coding a **transmastoid** **antrotomy** (**[[69501]]**), ensure the primary diagnosis code specifies laterality (**e.g., left, right, bilateral**) for conditions like acute **[[mastoiditis]]**. An undercoding/denial alert: coders frequently miss the distinction between a simple intranasal **[[antrotomy]]** and a radical Caldwell-Luc procedure (**[[31030]]**); carefully scan the operative report for the trigger phrase "sublabial incision" or "**canine fossa approach**" to justify the higher-valued radical procedure. Additionally, ensure laterality modifiers (**[[-RT]]**, **[[-LT]]**, or **[[-50]]**) are appended appropriately to the **CPT** codes to avoid **NCCI** edits.

_____

>[!tip]- DERIVATIONS of [[antrotomy]]
>```dataview
>TABLE definition AS Definition
>FROM #medterm 
>WHERE length(filter(roots, (word) => econtains([[antrotomy]].roots, word))) > 0 AND file.name != [[antrotomy]].file.name
>SORT file.name ASC
>```

_____

>[!faq]- Query functionality
>```dataview
>TABLE definition AS Definition
>FROM #medterm 
>WHERE length(filter(definition, (word) => econtains([[antrotomy]].definition, word))) > 0 AND file.name != [[antrotomy]].file.name
>```

[[Med roots]]
[[Appendix A Prefixes]]
[[Appendix B Combining Forms]]
[[Appendix C Suffixes]]
[[Appendix D Suffix forms]]