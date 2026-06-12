---
tags:
  - medterm
  - medroot
  - radiology
  - ophthalmology
aliases:
  - fluoroscopic imaging
roots:
  - fluoroscopy
  - fluoro-
  - -scopy
forms:
  - prefix
  - suffix
  - combined
  - noun
alphabet: F
definition:
  - A real-time continuous X-ray imaging technique that produces live moving images of internal body structures on a monitor
---

>[!Note] DEFINITION of [[fluoroscopy]]
>[[fluoroscopy]] is **a dynamic radiographic imaging modality in which a continuous or pulsed X-ray beam is passed through the body and projected onto a fluorescent screen or digital image intensifier, producing real-time video-like visualization of internal anatomy and physiological function**. It is widely used for procedural guidance (**e.g., catheter placement, stone extraction**), contrast studies (**e.g., retrograde pyelography, voiding cystourethrography**), and assessment of organ movement and function. The image is captured live, allowing the clinician to observe motion, flow, and positioning in real time.
_____
>[!info]+ ETYMOLOGY of [[fluoroscopy]]
>#latin **[[fluoro-]]** Latin  _fluere_  /  _fluor_ "**to flow**" / "f**luorescent light**" (from >fluorite mineral) **[[-scopy]]** Greek _skopein_ (σκοπεῖν)|"t**o examine / to look at**"|
>
>→ **Literally**: _"to examine with fluorescent light"_
>
_____

> [!question]+ **Related Terms**
> 
> - **Fluoroscope** — the device used to perform [[fluoroscopy]]
> - **Image intensifier** — the component that amplifies the X-ray signal into a visible image
> - **Contrast fluoroscopy** — fluoroscopy performed with contrast media (e.g., iodinated contrast, barium)
> - **Retrograde [[pyelography]]** — contrast study of the upper urinary tract using fluoroscopy _(highly relevant in urology)_
> - **VCUG (Voiding Cystourethrography)** — fluoroscopic study of bladder and urethra during voiding
> - **KUB (Kidneys, Ureters, Bladder)** — plain radiograph often paired with fluoroscopic studies
> - **[[Nephrostography]]** — fluoroscopic contrast study through a [[nephrostomy]] tube
> - **Loopogram** — fluoroscopic contrast study of a urinary ileal conduit
> - **Fluoroscopic guidance** — use of fluoroscopy to direct needle, wire, or catheter placement
> - **Pulsed fluoroscopy** — technique using intermittent X-ray pulses to reduce radiation dose
> - **Scatter radiation** — secondary radiation emitted during fluoroscopy, safety concern for OR staff
>
_____

> [!bug]+ **CODING AND NUANCES**
> ### ICD-10-PCS Codes _(Inpatient — Section B: Imaging / Root Operation 1: Fluoroscopy)_
> 
> #### 🫘 Urinary System _(Body System: T)_
> 
> |Code|Description|
> |---|---|
> |**BT110ZZ**|Fluoroscopy of Right Kidney using High Osmolar Contrast|
> |**BT111ZZ**|Fluoroscopy of Right Kidney using Low Osmolar Contrast|
> |**BT11YZZ**|Fluoroscopy of Right Kidney using Other Contrast|
> |**BT11ZZZ**|Fluoroscopy of Right Kidney (no contrast)|
> |**BT120ZZ**|Fluoroscopy of Left Kidney using High Osmolar Contrast|
> |**BT121ZZ**|Fluoroscopy of Left Kidney using Low Osmolar Contrast|
> |**BT12YZZ**|Fluoroscopy of Left Kidney using Other Contrast|
> |**BT12ZZZ**|Fluoroscopy of Left Kidney (no contrast)|
> |**BT130ZZ**|Fluoroscopy of Bilateral Kidneys using High Osmolar Contrast|
> |**BT131ZZ**|Fluoroscopy of Bilateral Kidneys using Low Osmolar Contrast|
> |**BT13YZZ**|Fluoroscopy of Bilateral Kidneys using Other Contrast|
> |**BT13ZZZ**|Fluoroscopy of Bilateral Kidneys (no contrast)|
> |**BT14ZZZ**|Fluoroscopy of Kidneys, Ureters and Bladder|
> |**BT1DZZZ**|Fluoroscopy of Right Kidney, Ureter and Bladder|
> 
> #### 👂 Ear, Nose, Mouth & Throat _(Body System: 9)_
> 
> |Code|Description|
> |---|---|
> |**B91JZZZ**|Fluoroscopy of Larynx|
> 
> #### 🫁 Respiratory _(Body System: B)_
> 
> |Code|Description|
> |---|---|
> |**BB12ZZZ**|Fluoroscopy of Right Lung|
> |**BB16ZZZ**|Fluoroscopy of Diaphragm|
> |**BB1CZZZ**|Fluoroscopy of Mediastinum|
> 
> ---
> 
> ### CPT Codes _(Outpatient/Professional Reference)_
> 
> |Code|Description|
> |---|---|
> |**76000**|Fluoroscopy (separate procedure), up to 1 hour|
> |**76001**|Fluoroscopy, physician time more than 1 hour (e.g., [[nephrostolithotomy]], **ERCP**)|
> |**77002**|Fluoroscopic guidance for needle placement|
> |**74420**|[[Urography]], retrograde (with or without KUB)|
> |**74455**|[[Urethrocystography]], voiding|
> |**74430**|[[Cystography]], minimum 3 views|
> |**74425**|Urography, antegrade (e.g., [[nephrostogram]])|


---

> 💡 **Coding tip for inpatient:** In ICD-10-PCS, [[fluoroscopy]] is always **Root Operation = 1** under **Section B (Imaging)**. The 4th character identifies the body part, the 5th identifies contrast type (0=High Osmolar, 1=Low Osmolar, Y=Other, Z=None), and characters 6-7 are typically **ZZ** for fluoroscopy unless a qualifier applies. Always verify laterality and contrast agent documented in the operative/radiology report.
_____
>[!tip]- DERIVATIONS of [[fluoroscopy]]
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