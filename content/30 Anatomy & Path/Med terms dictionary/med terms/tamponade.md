---
tags:
  - medterm
  - ophthalmology
  - otolaryngology
aliases:
  - intraocular tamponade
  - Tamponade
  - cardiac tamponade
roots:
  - tamponade
  - tam-
  - tamp-
  - -nade
  - -ade
forms:
  - prefix
  - suffix
  - noun
alphabet: T
definition: blockage, closure, or compression of a space or organ by packing, fluid, gas, or other material, most often to stop bleeding or to exert pressure
---
>[!Note] DEFINITION of [[tamponade]]
>**Tamponade** is **a mechanical method of [[hemostasis]] or stabilization in which a cavity, vessel, or organ is intentionally or pathologically filled or compressed so that flow (usually blood) is obstructed.** <sup>2</sup> Clinically, the term is most often used in two settings: **cardiac tamponade**, where [[pericardial]] fluid compresses the heart and impairs filling, and [[intraocular]]/**retinal tamponade**, where gas or silicone oil is used after [[vitrectomy]] to hold the retina in place. <sup>2</sup><sup>3</sup> **Cardiac tamponade** is a medical emergency that produces obstructive shock, while **retinal tamponade** is a therapeutic step in [[retinal detachment]] repair and other [[vitreoretinal]] procedures. <sup>3</sup><sup>4</sup>
_____
>[!info]+ ETYMOLOGY of [[tamponade]]
>#french
>- From French _tampon_ = **plug**, **stopper** + suffix _[[-ade]]_ (action/result of). <sup>5</sup>
>    
>- Ultimately from medieval French _tampion_ — **a piece of cloth or plug used to stop a hole**. <sup>6</sup>
>    
>
>So **tamponade** literally means _“the act or result of plugging/stopping with a tampon (**plug**)”_. <sup>5</sup>
_____

> [!success]+ ## Aliases & Related Terms
> 
> - **Cardiac tamponade** — compression of the heart by pericardial fluid, blood, or gas. <sup>3</sup>
>     
> - **Pericardial tamponade** — synonym emphasizing the pericardial sac. <sup>3</sup>
>     
> - **Intraocular tamponade** — internal support of the retina with gas or silicone oil after vitrectomy. <sup>3</sup>
>     
> - **Retinal tamponade** — often used interchangeably with intraocular tamponade. <sup>3</sup>
>     
> - **Bladder tamponade** — obstruction of the bladder outlet by large blood clots. <sup>2</sup>
>     
> - **Nasal tamponade / uterine tamponade** — packing to stop epistaxis or postpartum hemorrhage. <sup>2</sup>
>     
> - Related [[vitreoretinal]] procedures: **pneumatic retinopexy**, **[[vitrectomy]] with gas/oil**, **scleral buckle**, all of which may utilize tamponade as a step. <sup>3</sup><sup>7</sup>
>     

_____


> [!example]+ ### CODING CORNER
> ## ICD-10-CM Codes
> 
> ### Cardiac Tamponade
> 
> |ICD-10-CM Code|Description|
> |---|---|
> |[[I31.4]]|Cardiac tamponade (disease of pericardium; code first underlying cause) <sup>8</sup>|
> 
> > **Coder note (inpatient profee):** Follow the “**code first**” note for [[I31.4]] — e.g., code the underlying **trauma, malignancy, myocardial rupture, uremic pericarditis**, etc., before the tamponade. <sup>8</sup><sup>9</sup>
> 
> There are currently **no dedicated ICD-10-CM diagnosis codes** for “**retinal tamponade**” or “[[intraocular]] gas/oil tamponade” — these are captured via the underlying [[retinal detachment]] or **macular** pathology codes plus the procedure **CPT**. <sup>7</sup>
> 
> ---
> 
> ### CPT Codes 
> 
> (Tamponade-Related Retina Procedures)
> 
> **In ophthalmology, tamponade is _included_ in many [[vitrectomy]]/[[retinal detachment]] codes**. <sup>7</sup><sup>10</sup>
> 
> |CPT Code|Description|
> |---|---|
> |[[67110]]|Repair of retinal detachment by injection of air or other gas (pneumatic retinopexy) — gas [[tamponade]] only, no [[vitrectomy]].|
> |[[67025]]|Injection of [[vitreous]] substitute, pars plana or limbal approach (**fluid-gas exchange**), with or without aspiration; often used to adjust or re-establish gas tamponade.|
> |[[67036]]|**Vitrectomy**, mechanical, pars plana approach; without additional membrane/ILM/subretinal work (base PPV — intraocular tamponade may be performed but is not called out in the descriptor).|
> |[[67042]]|**Vitrectomy**, mechanical, pars plana approach; with removal of internal limiting membrane of retina (**e.g., macular hole, DME**), includes, if performed, intraocular tamponade (**air, gas, or silicone oil**) and laser photocoagulation.|
> |[[67043]]|[[Vitrectomy]], mechanical, pars plana approach; with removal of subretinal membrane (**e.g., choroidal [[neovascularization]]**), includes, if performed, intraocular tamponade (**air, gas, or silicone oil**) and laser [[photocoagulation]].|
> |[[67108]]|Repair of [[retinal detachment]] with [[vitrectomy]] (any method), including, when performed, air or gas [[tamponade]], focal endolaser, cryotherapy, drainage of subretinal fluid, scleral buckle, and/or lens removal.|
> |[[67113]]|Repair of complex **retinal detachment** with **vitrectomy** and membrane peeling, including air, gas, or silicone oil tamponade, cryotherapy, endolaser, drainage of subretinal fluid, scleral buckle, and/or lens removal, when performed.|
> 
> Coding pearl (**retina focus**): Because [[intraocular]] [[tamponade]] is bundled into [[67108]], [[67113]], [[67042]], and [[67043]], you do not report a separate code for “**gas injection**” or “**silicone oil tamponade**” when those codes are used. A separate code is appropriate only when the op note supports a distinct fluid-gas exchange outside the global surgical package. <sup>7</sup><sup>10</sup>

_____
>[!tip]- DERIVATIONS of [[tamponade]]
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

<br>

[[Med terms dictionary]]
[[Appendix A Prefixes]]
[[Appendix B Combining Forms]]
[[Appendix C Suffixes]]


<br>


#### Sources

<sup>1</sup> Merriam-Webster Medical, _Tamponade_, 2024  
<sup>2</sup> Wikipedia, _Tamponade_, 2005  
<sup>3</sup> Wikipedia, _Vitrectomy_ (retinal tamponade section), 2003  
<sup>4</sup> StatPearls, _Cardiac Tamponade_, 2023  
<sup>5</sup> Dictionary.com, _Tamponade — Origin_, 2024  
<sup>6</sup> Wikipedia, _Tampon — Etymology_, 2003  
<sup>7</sup> Retina Today, _Properly Coding Retina Surgeries_, 2019  
<sup>8</sup> AAPC Codify, _I31.4 Cardiac tamponade_, 2024  
<sup>9</sup> ICD-10-CM manual, _I31 Other diseases of pericardium_ chapter notes, 2026  
<sup>10</sup> Retinal Physician, _A Look at the New Vitreoretinal Surgical Codes_, 2023  
<sup>11</sup> Retina Today, _Five Tricks of the Retina Coding Trade_, 2021