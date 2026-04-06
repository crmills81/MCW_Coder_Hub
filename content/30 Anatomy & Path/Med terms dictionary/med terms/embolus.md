---
tags:
  - medroot
  - medterm
aliases:
  - thrombus
  - emboli
roots:
  - en-
  - bol-
  - -lus
  - -us
forms:
  - prefix
  - suffix
  - combining
  - noun
"alphabet:": E
"definition:":
  - loding of a blockage-causing material within a blood vessel
  - a free-floating mass
---
>[!note]+ Definition of [[embolus]]
>[[en-|em-]][[bol-]]us - lodging of a blockage-causing material within a blood vessel (**cast within**); An [[embolus]] is any detached solid, liquid, or gaseous material (**most commonly thrombus fragment, fat globule, air bubble, cholesterol crystal, amniotic debris, or septic vegetation**) circulating freely in blood/[[lymph]] until lodging in narrower [[vasculature]], causing downstream [[ischemia]]/[[infarction]]; distinct from [[thrombus]] (**fixed clot at origin site**).
>*see also: [[thromb-]]us*
___
>[!info]+ Etymology of [[embolus]]
>#greek
>•	**Origin**: Greek *émbolos* (ἔμβολος) = “**wedge, plug, stopper, piston**,” from *embállein* = “**to throw/insert in**” ([[en-]] “**in**” + *bállein* “**to throw**”).
>	•	**Coined**: 1848 by Rudolf Virchow distinguishing mobile [[emboli]] from fixed thrombi.
>	•	**Pronunciation**: /*ˈɛmbələs*/ (“EM-buh-luss”).

_____
>[!tip]- DERIVATIONS of [[embolus]]
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

---


> [!example]+ **Types of Emboli**
> 
> | Type                  | Composition/Source                          | Destination/Consequence                  |
> |-----------------------|---------------------------------------------|------------------------------------------|
> | **[[Thromboembolus]]**   | Clot fragment (DVT, AFib mural thrombus)   | [[Pulmonary embolism (PE)]], [[stroke]], [[limb ischemia]].[1] |
> | **Fat embolus**      | Marrow/bone fat (long bone fx)             | Cerebral fat [[embolism]] syndrome, ARDS.[1] |
> | **Air/gas embolus**  | IV air, surgery, decompression             | Coronary/pulmonary [[occlusion]] ([[paradoxical]] via PFO).[1] |
> | **Septic embolus**   | Infected vegetation ([[endocarditis]])         | [[abscess]]es, mycotic aneurysm.[1] |
> | **Cholesterol embolus** | Atheroma plaque ([[catheterization]])       | Blue toe syndrome, renal failure.[1] |
> | **[[Amniotic]]**         | Fetal debris ([[placental abruption]])         | **DIC**, maternal collapse.[9] |
> | **Tumor embolus**    | Malignant cells                            | [[metastasis]].[1] |
> 
> ## Coding Context
> 
> **ICD-10-CM:**[10]
> | Code         | Description                                      |
> |--------------|--------------------------------------------------|
> | **[[I26.9]]**   | Pulmonary embolism w/o acute [[cor pulmonale]].     |
> | **[[I74.9]]**   | [[Arterial embolism]]/[[thrombosis]] (specify site).    |
> | **[[O88.1]]**   | Amniotic embolism.                              |
> | **[[T82.0]]**   | Air embolism post [[vascular]] procedure.           |
> 
> **ICD-10-PCS:** **03L00DZ** - [[Occlusion pulmonary artery]] intraluminal device.
> 
> ## Related Terms
> 
> - **[[Thrombus]]:** Attached clot (vs. mobile embolus).
> - **Embolism:** Consequence of embolus occlusion.
> - **[[Thromboembolism]]:** Clot-derived embolus (most common).
> - **[[Paradoxical embolism]]:** [[Venous]] embolus → systemic via PFO/ASD.
> 
> **Pathophysiology:**  
> Embolus lodges → [[stasis]] → [[infarction]] (wedge infarct lung, pale MI heart, hemorrhagic stroke).
> 
> **Risk factors (Virchow's triad):** Stasis (immobility, HF), [[endothelial]] injury (trauma, [[catheters]]), hypercoagulability (cancer, pregnancy, [[thrombophilia]]).
> 
> ## Clinical Details
> 
> **Saddle embolus:** Bifurcation occlusion (aortic/pulmonary).  
> **Diagnostic:** CT-PA (PE gold standard), V/Q scan, echo (RV strain).  
> **Prevention:** LMWH, IVC filter (DVT), DOACs.
> 
> **Prognosis:** PE mortality 15-30% untreated; 2-8% treated.
> 
> **One-Sentence Summary**  
> **Embolus** (Greek *émbolos* "**plug**," Virchow 1848), a mobile [[intravascular]] mass (thrombus > fat > air), lodges distally causing embolism ([[I26.9]] PE, [[I74.9]] arterial) via Virchow's triad, treatable by [[thrombolysis]]/[[anticoagulation]].
> 


[[Med roots]]
[[Appendix A Prefixes]]
[[Appendix B Combining Forms]]
[[Appendix C Suffixes]]
[[Appendix D Suffix forms]]
