---
tags:
  - medterm
  - medroot
  - otolaryngology
  - ENT
aliases:
  - Barrett's syndrome
  - Specialized intestinal metaplasia of the esophagus
roots:
  - Barrett's esophagus
  - eso-
  - -agus
  - -gus
  - barr-
forms:
  - prefix
  - suffix
  - disease
  - noun
alphabet: B
definition:
  - condition in which the normal squamous epithelium lining of the lower esophagus is replaced by metaplastic columnar epithelium
---
>[!Note] DEFINITION of [[Barrett's esophagus]]
>**Barrett's esophagus** is a serious **complication of Gastroesophageal Reflux Disease (GERD)**. In this condition, the **stratified squamous [[epithelium]]** that normally lines the distal esophagus undergoes **metaplasia**, transforming into specialized intestinal-type columnar [[epithelium]] containing goblet cells. This change is an adaptive response to chronic injury from gastric acid and bile reflux.
>
>- **Diagnosis:** Requires endoscopic visualization of salmon-colored mucosa extending at least 1 cm above the [[gastroesophageal]] junction (**GEJ**), confirmed by biopsy showing intestinal [[metaplasia]] (goblet cells).
>- **Significance:** It is the only known precursor lesion for **esophageal adenocarcinoma**. Patients are monitored via surveillance endoscopy to detect dysplasia (**low-grade or high-grade**) or early cancer.
>- **Classification:** Often classified by the length of the segment (**Short-segment <3 cm; Long-segment ≥3 cm**) using the Prague C & M criteria.
>
_____
>[!info]+ ETYMOLOGY of [[Barrett's esophagus]]
>#greek Named after **Norman Barrett** (1903-1979), an Australian-born British thoracic surgeon.
>
>- In 1950, Barrett described the condition, originally believing it was a congenital shortening of the esophagus where the stomach had pulled up into the chest ("**short esophagus**").
>- It was later clarified by other researchers (**notably Allison and Johnstone**) that the condition was actually an acquired metaplastic change due to reflux, but the eponym "Barrett's esophagus" remained.
>- The term combines the proper noun **Barrett** + **esophagus** (from Greek _oisophagos_, meaning "**gullet**" or "**carrier of food**").
>
_____

> [!danger]+ **RELATED TERMS**
> 
> - **GERD (Gastroesophageal Reflux Disease):** The primary causative factor; chronic acid reflux leads to the tissue changes.
> - **[[Metaplasia]]:** The reversible replacement of one adult cell type by another adult cell type (squamous to columnar).
> - **[[dysplasia]]:** Abnormal cell growth within the Barrett's tissue; a precancerous stage categorized as Low-Grade Dysplasia (LGD) or High-Grade Dysplasia (HGD).
> - **[[Adenocarcinoma]]:** The type of cancer that arises from **Barrett's esophagus**.
> - **[[Squamous Cell Carcinoma]]:** A different type of esophageal cancer (usually linked to smoking/alcohol) that arises from the normal squamous lining, _not_ Barrett's.
> - **Radiofrequency Ablation (RFA):** A common endoscopic treatment used to destroy Barrett's tissue (e.g., HALO system).
> - **Prague C & M Criteria:** The standard endoscopic grading system (**C = Circumferential extent, M = Maximum extent**).
_____

> [!example]+ **CODING AND NUANCES**
> 
> **ICD-10-CM Codes** 
> _Note: Specificity regarding the presence of dysplasia is critical for coding Barrett's Esophagus._
> 
> **Without [[dysplasia]]**
> 
> - **K22.70-**: Barrett's esophagus without dysplasia
> 
> **With Dysplasia**
> 
> - **K22.71-**: Barrett's esophagus with low grade dysplasia
> - **K22.72-**: Barrett's esophagus with high grade dysplasia
> - **[[K22.710]]**: Barrett's esophagus with indefinite for dysplasia _(Note: Some coding systems map "indefinite" to low grade or unspecified depending on guidelines, but K22.71 is often used for LGD. If "indefinite" is explicitly documented, check current year guidelines; often coded as **K22.70-** or **K22.71-** depending on payer, but strictly speaking, there isn't a unique 6th character for "indefinite" in the base K22.7 list, so it often defaults to **K22.70** or **K22.71** based on physician intent. However, the official 2024/2026 code set includes:)_
>     - _Correction:_ The specific codes are:
>     - **K22.70-**: Barrett's esophagus without dysplasia
>     - **K22.71-**: Barrett's esophagus with low grade dysplasia
>     - **K22.72-**: Barrett's esophagus with high grade dysplasia
>     - _(If documented as "indefinite for [[dysplasia]]," it is typically coded as **K22.70** [without dysplasia] unless the provider indicates it should be managed as low grade, but strict coding rules usually default "indefinite" to the lower severity category i.e., without dysplasia)._
> 
> **Associated Code for GERD (if concurrent)**
> 
> - **[[K21.00]]**: Gastro-esophageal reflux disease with esophagitis
> - **[[K21.9]]**: Gastro-esophageal reflux disease without esophagitis
> 
> **CPT Codes** _CPT codes depend on the procedure performed (diagnostic vs. therapeutic)._
> 
> **Diagnostic Procedures**
> 
> - **[[43235]]**: [[esophagogastroduodenoscopy]] (EGD), flexible, transoral; diagnostic, including collection of specimen(s) by brushing or washing, when performed (separate procedure). _Used for initial diagnosis and surveillance biopsies._
> - **[[43239]]**: EGD with biopsy, single or multiple. _Often billed if biopsies are the primary focus, though 43235 includes brushing/washing; specific biopsy coding rules apply._ (Note: 43235 is the comprehensive diagnostic code often used for Barrett's surveillance).
> 
> **Therapeutic Procedures (Ablation/Resection)**
> 
> - **[[43216]]**: [[Esophagoscopy]], flexible, transoral; with ablation of tumor(s), polyp(s), or other lesion(s) not amenable to removal by hot biopsy forceps, bipolar cautery or snare technique. _Sometimes used for focal ablation._
> - **[[43228]]**: [[Esophagoscopy]], flexible, transoral; with thermal ablation of tumor(s), polyp(s), or other lesion(s) (includes pre- and post-dilation and guide wire passage, when performed). _Commonly used for Radiofrequency Ablation (RFA) of Barrett's._
> - **[[43257]]**: [[esophagogastroduodenoscopy]], flexible, transoral; with endoscopic mucosal resection (EMR). _Used for removing visible nodules or areas of high-grade dysplasia/early cancer within the Barrett's segment._
> - **[[43258]]**: ... with endoscopic submucosal dissection (ESD). _Advanced technique for en-bloc resection of large lesions._
> 
> **Other Related CPTs**
> 
> - **[[43236]]**: EGD with insertion of guide wire followed by dilation of esophagus (over guide wire). _If stricture dilation is needed alongside Barrett's management._

_____
>[!tip]- DERIVATIONS of [[Barrett's esophagus]]
>```dataview
>TABLE definition AS Definition
>FROM #medterm 
>WHERE length(filter(roots, (word) => econtains([[Barrett's esophagus]].roots, word))) > 0 AND file.name != [[Barrett's esophagus]].file.name
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

[[Med roots dictionary]]
[[Appendix A Prefixes]]
[[Appendix B Combining Forms]]
[[Appendix C Suffixes]]
[[Appendix D Suffix forms]]