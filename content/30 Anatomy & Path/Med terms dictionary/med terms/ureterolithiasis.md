---
tags:
  - medterm
  - medroot
  - urology
aliases: []
roots:
  - ureter
  - -iasis
  - lith-
  - -asis
  - urethr-
  - -sis
  - ur-
"alphabet:": U
definition:
  - Formation of stones in the URETER
  - ureter stones
forms:
  - prefix
  - suffix
  - noun
---

>[!Note] DEFINITION of [[ureterolithiasis]]
>The presence of a [[calculus]] in the [[ureter]] of the kidney; this is most often composed of mineral salts and proteins. [[ureterolithiasis]] is associated with other systemic conditions, specifically **cardiovascular disease, diabetes mellitus, metabolic syndrome, and obesity**. The condition often manifests with exceedingly painful flank pain radiating toward the groin. The pain occurs suddenly without warning. Episodes often recur after resolution.
_____
>[!info]+ ETYMOLOGY of [[ureterolithiasis]]
>#Greek _ouron_ = urine + _[[-ter]]_ = the instrument + _lithos_ = stone + _-[[-iasis]]_ = condition; The term is a compound of three medical roots describing the location and nature of the pathology:
>- **Ureter/o**: Refers to the "[[ureter]]," the duct carrying urine from the kidney.[](https://en.wiktionary.org/wiki/ureterolithiasis)
>- **[[Lith/o]]**: Derived from the Greek _lithos_, meaning "**stone**".[](https://int.livhospital.com/ureter-stone-medical-term-5-key-facts-about-nephrolithiasis/)​
>- **[[-iasis]]**: A suffix originating from Greek, denoting a "**condition**," "**presence**," or "**process**" (usually pathological).
_____
>[!example]+ RELATED TERMS to [[ureterolithiasis]]
>- [[Ureteral stone]]
>- Ureteric calculus
>- [[ureterolithiasis]]
>- [[urolithiasis]] (umbrella term)
>- [[nephrolithiasis]]
>- Renal colic
>- - **ESWL**: Extracorporeal Shock Wave [[lithotripsy]], a non-invasive procedure to break up stones (CPT **50590**).
>- **[[ureteroscopy]]**: Endoscopic removal of the stone (CPT **52352**/**52353**/**52356**).
>- **Staghorn [[calculus]]**: A large, branched stone that fills the renal pelvis, distinct from a simple ureteral stone.
_____
>[!tip]+ DERIVATIONS of [[ureterolithiasis]]
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
>FROM #medroot  
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```


[[Med roots]]
[[Appendix A Prefixes]]
[[Appendix B Combining Forms]]
[[Appendix C Suffixes]]
[[Appendix D Suffix forms]]