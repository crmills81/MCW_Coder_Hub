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
>[!tip]+ DERIVATIONS of [[embolus]]
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

## Types of Emboli

| Type                  | Composition/Source                          | Destination/Consequence                  |
|-----------------------|---------------------------------------------|------------------------------------------|
| **[[Thromboembolus]]**   | Clot fragment (DVT, AFib mural thrombus)   | [[Pulmonary embolism (PE)]], [[stroke]], [[limb ischemia]].[1] |
| **Fat embolus**      | Marrow/bone fat (long bone fx)             | Cerebral fat [[embolism]] syndrome, ARDS.[1] |
| **Air/gas embolus**  | IV air, surgery, decompression             | Coronary/pulmonary [[occlusion]] ([[paradoxical]] via PFO).[1] |
| **Septic embolus**   | Infected vegetation ([[endocarditis]])         | [[abscess]]es, mycotic aneurysm.[1] |
| **Cholesterol embolus** | Atheroma plaque ([[catheterization]])       | Blue toe syndrome, renal failure.[1] |
| **[[Amniotic]]**         | Fetal debris ([[placental abruption]])         | **DIC**, maternal collapse.[9] |
| **Tumor embolus**    | Malignant cells                            | [[Metastasis]].[1] |

## Coding Context

**ICD-10-CM:**[10]
| Code         | Description                                      |
|--------------|--------------------------------------------------|
| **[[I26.9]]**   | Pulmonary embolism w/o acute [[cor pulmonale]].     |
| **[[I74.9]]**   | [[Arterial embolism]]/[[thrombosis]] (specify site).    |
| **[[O88.1]]**   | Amniotic embolism.                              |
| **[[T82.0]]**   | Air embolism post [[vascular]] procedure.           |

**ICD-10-PCS:** **03L00DZ** – [[Occlusion pulmonary artery]] intraluminal device.

## Related Terms

- **[[Thrombus]]:** Attached clot (vs. mobile embolus).[8][1]
- **Embolism:** Consequence of embolus occlusion.[1]
- **[[Thromboembolism]]:** Clot-derived embolus (most common).[1]
- **[[Paradoxical embolism]]:** [[Venous]] embolus → systemic via PFO/ASD.[1]

**Pathophysiology:**  
Embolus lodges → [[stasis]] → [[infarction]] (wedge infarct lung, pale MI heart, hemorrhagic stroke).[8]

**Risk factors (Virchow's triad):** Stasis (immobility, HF), [[endothelial]] injury (trauma, [[catheters]]), hypercoagulability (cancer, pregnancy, [[thrombophilia]]).[1]

## Clinical Details

**Saddle embolus:** Bifurcation occlusion (aortic/pulmonary).  
**Diagnostic:** CT-PA (PE gold standard), V/Q scan, echo (RV strain).  
**Prevention:** LMWH, IVC filter (DVT), DOACs.[1]

**Prognosis:** PE mortality 15–30% untreated; 2–8% treated.[1]

**One-Sentence Summary**  
**Embolus** (Greek *émbolos* "**plug**," Virchow 1848), a mobile [[intravascular]] mass (thrombus > fat > air), lodges distally causing embolism ([[I26.9]] PE, [[I74.9]] arterial) via Virchow's triad, treatable by [[thrombolysis]]/[[anticoagulation]].[2][5][8][1]

Sources
[1] Embolus - Wikipedia https://en.wikipedia.org/wiki/Embolus
[2] Embolus - Etymology, Origin & Meaning https://www.etymonline.com/word/embolus
[3] Embolism—The journey from a calendar to the clot via the Lord's ... https://onlinelibrary.wiley.com/doi/10.1111/jth.15610
[4] Embolism - Etymology, Origin & Meaning https://www.etymonline.com/word/embolism
[5] EMBOLUS Definition & Meaning - Dictionary.com https://www.dictionary.com/browse/embolus
[6] embolus - Wiktionary, the free dictionary https://en.wiktionary.org/wiki/embolus
[7] Embolus - Clinical Anatomy Associates Inc. https://www.clinicalanatomy.com/mtd/932-embolus
[8] Thrombi & Emboli | The Autopsy Book https://theautopsybook.com/emboli/
[9] Embolism | Definition, Types & Causes - Lesson - Study.com https://study.com/learn/lesson/embolus-what-is-an-embolism.html
[10] Oncology ICD-10 Codes - Cancer Therapy Advisor https://www.cancertherapyadvisor.com/home/tools/oncology-icd10-codes/



[[Med roots]]
[[Appendix A Prefixes]]
[[Appendix B Combining Forms]]
[[Appendix C Suffixes]]
[[Appendix D Suffix forms]]
