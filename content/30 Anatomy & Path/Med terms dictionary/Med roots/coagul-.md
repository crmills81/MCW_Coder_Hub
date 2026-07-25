---
tags:
  - medroot
  - circulatory
  - blood
aliases:
  - coagulo-
  - coag-
  - coagulat-
roots:
  - coagul-
forms:
  - combining
  - combining form
  - root
"alphabet:": C
definition: to clot,clotting,curdle,congeal
---
>[!Note] DEFINITION of [[coagul-]]
>**to clot, to curdle, to congeal**; The combining form **coagul-** denotes the process by which a liquid — most clinically, **blood** — changes into a solid or semisolid gel. In medicine it refers specifically to **coagulation**, the cascade of plasma-protein (**clotting-factor**) reactions that culminates in the conversion of soluble fibrinogen into insoluble **fibrin**, stabilizing the platelet plug and arresting bleeding (**[[hemostasis]]**). The root carries the literal sense of *curdling* or *congealing*, the same imagery as milk turning to curds.
>
>The clinical importance of **coagul-** lies in its two opposing failure states. **Hypercoagulability** (excess clotting) produces thrombosis, embolism, and conditions such as DVT, PE, and DIC; **hypocoagulability** (**deficient clotting**) produces bleeding disorders such as **[[hemophilia]]** and **[[coagulopathy]]**. The prefixed form **[[anti-]][[coagul-]]** (***[[anticoagulation]]***) names the therapeutic suppression of this cascade — warfarin, heparin, and the DOACs — a high-volume inpatient management and monitoring topic (**PT/INR, aPTT**).
>
>For inpatient/profee coding, **[[coagul-]]** terms map across several **ICD-10-CM neighborhoods**: **D65-D69** (**coagulation defects, purpura, and other hemorrhagic conditions — including DIC at D65 and hemophilia at D66/D67**), **D68.-** (**other coagulation defects, including the long-term anticoagulant-use and acquired-coagulation-factor-deficiency entries**), and the **Z79.01** status code for long-term anticoagulant use. Recognizing the root helps the coder distinguish a *coagulation-factor* problem from a *platelet* problem (**[[thromb-]]**) and capture the correct hemorrhagic-vs-thrombotic axis.
_____
>[!info]+ ETYMOLOGY of [[coagul-]]
>#latin From **Latin** _coagulāre_ — "**to curdle, to clot, to congeal**," from _coagulum_ ("**a means of curdling, rennet**"), itself from _cōgere_ ("**to drive together, to collect**"), a compound of _**[[co-]]**_ ("**together**") + _agere_ ("to drive, to do"). The literal image is of substances being *driven together* into a **mass** — milk into curds, blood into clot. The word passed through Late Latin and Old French into English; *coagulate* (verb) is attested from the **early 15th century**, and *coagulation* somewhat later. The root shares its _cōgere_ ancestry with words like *cogent* and *coagency*, all carrying the sense of forces driven together.
_____
>[!example]+ RELATED TERMS to [[coagul-]]
>
>- **[[Coagulation]]** — the clotting process itself; the fibrin-forming cascade of hemostasis
>- **[[Anticoagulation]]** — therapeutic inhibition of clotting (warfarin, heparin, DOACs); monitored by PT/INR and aPTT; status code **[[Z79.01]]**
>- **[[Coagulopathy]]** — any disorder impairing the blood's ability to clot; broad ICD-10-CM home in **D68.-** (acquired forms common in liver disease, DIC, anticoagulant effect)
>- **Hypercoagulable state / [[thrombophilia]]** — excess clotting tendency; **D68.5-/D68.6-** (primary/other [[thrombophilia]])
>- **Disseminated [[intravascular]] coagulation (DIC)** — pathologic systemic activation of clotting with consumption of factors; **D65**
>- **Procoagulant** — an agent or factor that promotes clotting
>- **[[Electrocoagulation]]** — surgical use of electric current to coagulate (seal) tissue/vessels; hemostatic technique in many procedures
>- **[[Photocoagulation]]** — use of light/laser energy to coagulate tissue (e.g., retinal photocoagulation); see [[photocoagulation]]
>- **[[-emia]]** — blood condition suffix often paired in related terms (e.g., disorders affecting the blood)
>- **[[thromb-]]** — closely related root meaning "clot"; *[[thromb-]]* emphasizes the **clot/platelet** itself, while *[[coagul-]]* emphasizes the **clotting process/cascade**
>- **[[hem-]] / [[hemat-]]** — "blood" roots; foundational to the [[hemostasis]] vocabulary
>- **[[-stasis]]** — "stopping/standing" suffix; combines as *[[hemostasis]]*, the physiologic goal of [[coagulation]]
>- **Fibrin / fibrinogen** — the end-product proteins of the coagulation cascade
>
_____
>[!tip]- DERIVATIONS of [[coagul-]]
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
