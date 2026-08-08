---
tags:
  - medterm
  - urology
aliases:
  - Ureterolithotomy, upper ureter
  - Ureterolithotomy, middle ureter
  - Ureterolithotomy, lower ureter
roots:
  - ureter-
  - ureter/o-
  - lith-
  - -otomy
forms:
  - noun
alphabet: U
definition:
  - surgical incision into the ureter to remove a stone
---
>[!Note] DEFINITION of [[ureterolithotomy]]
>**[[ureterolithotomy]]** is an **open (or laparoscopic) surgical procedure** in which the surgeon makes an incision directly into the **[[ureter]]** to extract an impacted **[[calculus]]**. It differs from **[[pyelolithotomy]]**, which incises the renal pelvis rather than the ureter, and from **[[ureteroscopy|ureterolithotripsy]]**, which fragments the stone endoscopically without an open incision. The approach and CPT billing depend on the stone's location along the ureter's course — **upper third** (**from the renal pelvis to the crossing of the iliac vessels**), **middle third** (**between the iliac vessels and the pelvic brim), or lower third (from the pelvic brim to the bladder**) — since access and technique differ by segment. After the stone is removed, the **[[ureterotomy]]** is closed, often over a ureteral **[[stent]]** or **[[catheter]]** to prevent stricture and support healing. Because most ureteral stones are now managed with **[[ureteroscopy]]** and laser **[[lithotripsy]]** or **[[lithotripsy|extracorporeal shock wave lithotripsy]] (ESWL)**, open ureterolithotomy today is reserved for large, impacted, or endoscopically inaccessible stones.

_____

>[!info]+ ETYMOLOGY of [[ureterolithotomy]]
>#greek
>
>|Component|Origin|Meaning|
>|---|---|---|
>|**[[ureter/o-]]**|Greek _ourētēr_ (οὐρητήρ), from _ouron_ ("urine")|"**ureter**" — the duct carrying urine from kidney to bladder|
>|**[[lith-]]**|Greek _lithos_ (λίθος), "stone"|"**stone**," "**calculus**"|
>|**[[-otomy]]**|Greek _-tomia_, from _temnein_ ("**to cut**")|Noun-forming suffix — "**incision into**," "**cutting**"|
>
> Like its counterpart **[[pyelolithotomy]]**, this is a modern surgical compound assembled directly from Greek roots rather than inherited from everyday speech: _[[ureter/o-]]_ ("**ureter**") + _[[lith-]]_ ("**stone**") + _[[-otomy]]_ ("**incision into**"), literally **"cutting into the ureter to remove a stone."** The _ureter/o-_ root ties this term to the broader ureteral vocabulary, including ***[[ureterolithiasis]]*** (the condition of having ureteral stones), ***[[ureteroscopy]]*** (endoscopic examination of the ureter), and ***[[ureteroplasty]]*** (surgical repair of the ureter). The shared _[[lith-]]_ root links it to ***[[nephrolithiasis]]***, ***[[pyelolithotomy]]***, and ***[[lithotripsy]]***, while _[[-otomy]]_ is the same productive incision suffix seen in ***[[-tomy|nephrotomy]]*** and ***[[-tomy|cystotomy]]*** — distinct from _[[-ectomy]]_ ("**removal of an organ**") and _[[-ostomy]]_ ("**creation of a permanent opening**").

_____

> [!success]+ ### 🔀 ALIASES / ALTERNATE TERMS
>
> - **Laparoscopic [[ureterolithotomy]]** _(minimally invasive variant performed through small port incisions rather than an open flank incision, most often for lower-ureteral stones)_
> - **Open ureterolithotomy** _(the traditional flank- or abdominal-incision approach; distinguishes it from the laparoscopic variant)_

_____

> [!danger]+ ### 🔗 RELATED TERMS
>
> - **[[pyelolithotomy]]** — the analogous open procedure for a stone in the renal pelvis rather than the ureter; shares the same _[[lith-]]/[[-otomy]]_ roots.
> - **[[ureteroscopy]]** — the endoscopic, non-incisional alternative for removing or fragmenting ureteral stones; has largely replaced open ureterolithotomy for most cases.
> - **[[lithotripsy]]** — fragmentation of a stone by laser, ultrasonic, or shock-wave energy as an alternative to surgical extraction.
> - **[[ureterolithiasis]]** — the clinical condition (presence of a stone in the ureter) that ureterolithotomy is performed to treat.
> - **[[calculus]]** — the mineral concretion being removed; when located in the ureter it is coded as **[[N20.1]]**.
> - **[[Hydroureteronephrosis]]** — dilation of the ureter and renal pelvis from obstruction by the impacted stone; often documented alongside the indication for surgery.
> - **ureteral stent** — a tube placed after ureterotomy closure to maintain patency and support healing during recovery.

_____

> [!example]+ #### CODING CORNER
>
> ### 🏥 ICD-10-CM CODES
>
> #### Ureteral and Renal Calculus (Indication for Ureterolithotomy)
>
> |Code|Description|
> |---|---|
> |**[[N20.1]]**|Calculus of ureter|
> |**[[N20.2]]**|Calculus of kidney with calculus of ureter|
> |**[[N20.9]]**|Urinary calculus, unspecified|
> |**[[N13.2]]**|Hydronephrosis with renal and ureteral calculous obstruction|
>
> ---
>
> ### 🔧 COMMON CPT CODES (Ureterolithotomy by Ureteral Segment)
>
> |CPT Code|Description|
> |---|---|
> |**[[50610]]**|Ureterolithotomy; upper one-third of ureter|
> |**[[50620]]**|Ureterolithotomy; middle one-third of ureter|
> |**[[50630]]**|Ureterolithotomy; lower one-third of ureter|
> |**[[52352]]**|Cystourethroscopy, with ureteroscopy and/or pyeloscopy; with removal or manipulation of calculus (endoscopic alternative)|
> |**[[50590]]**|Extracorporeal shock wave lithotripsy (ESWL, non-invasive alternative)|
>
> ---
>
> > ⚠️ **Coding Note:** Selection among **[[50610]]**, **[[50620]]**, and **[[50630]]** depends entirely on the documented anatomic segment of the ureter where the incision was made — **upper, middle, or lower third** — so operative reports lacking this detail should trigger a physician query before code assignment. These codes are mutually exclusive per encounter for a **single stone**; do not report more than one unless the operative note clearly documents separate incisions at distinct **ureteral segments**. Sequence the underlying calculus diagnosis (**[[N20.1]]** or **[[N20.2]]**) as the reason for surgery, and append laterality via modifier **[[-RT]]**/**[[-LT]]** since none of the 506xx codes carry inherent laterality. As with **[[pyelolithotomy]]**, payers increasingly expect documentation showing why less **invasive ureteroscopic** or **[[lithotripsy]]** options were unsuitable (**e.g., a large impacted stone with failed prior endoscopic attempt**) before authorizing an open or laparoscopic **[[ureterolithotomy]]**.

_____

>[!tip]- DERIVATIONS of [[ureterolithotomy]]
>```dataview
>TABLE definition AS Definition
>FROM #medterm 
>WHERE length(filter(roots, (word) => econtains([[ureterolithotomy]].roots, word))) > 0 AND file.name != [[ureterolithotomy]].file.name
>SORT file.name ASC
>```

_____

>[!faq]- Query functionality
>```dataview
>TABLE definition AS Definition
>FROM #medterm 
>WHERE file.name != this.file.name
>AND any(contains(this.definition, definition))
>```

[[Med terms dictionary]]
[[Appendix A Prefixes]]
[[Appendix B Combining Forms]]
[[Appendix C Suffixes]]
[[Appendix D Suffix forms]]