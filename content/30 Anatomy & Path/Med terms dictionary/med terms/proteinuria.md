---
tags:
  - medterm
  - urology
aliases:
  - Proteinuria
roots:
  - proteinuria
  - prot-
  - -ia
forms:
  - prefix
  - suffix
alphabet: P
definition: excess protein in the urine
---
>[!Note] DEFINITION of [[proteinuria]]
>A condition where the kidney's filtration system (the glomeruli) allows large molecules like proteins—*most commonly albumin*—to leak from the blood into the urinary tract. While trace amounts can be normal, persistent elevated levels typically indicate **Chronic Kidney Disease (CKD) or systemic issues like hypertension and diabetes**. Persistent [[proteinuria]] is a hallmark of various renal conditions, including **[[glomerulonephritis]]** and **diabetic [[nephropathy]]**. In professional medical coding (ProFee), unspecified [[proteinuria]] is typically reported using **ICD-10 code R80.9**. In obstetric cases, it is a key component of the "EPH" triad (Edema, [[proteinuria]], Hypertension) used to diagnose preeclampsia.
_____
>[!info]+ ETYMOLOGY of [[proteinuria]]
>#greek The term is a straightforward medical construct derived from:
>- **Protein**: From the Greek _prōteios_, meaning "**primary**" or "**first rank**."
>- **[[-uria]]**: A suffix derived from the Greek _ouron_, meaning "urine" or "**condition of the urine**."
_____
>[!tip]- DERIVATIONS of [[proteinuria]]
>```dataview
>TABLE definition AS Definition
>FROM #medterm 
>WHERE length(filter(roots, (word) => econtains([[proteinuria]].roots, word))) > 0 AND file.name != [[proteinuria]].file.name
>SORT file.name ASC
>```
_____
>[!faq]- Query functionality
>```dataview
>TABLE definition AS Definition
>FROM #medterm 
>WHERE length(filter(definition, (word) => econtains([[proteinuria]].definition, word))) > 0 AND file.name != [[proteinuria]].file.name
>```

[[Med roots dictionary]]
[[Appendix A Prefixes]]
[[Appendix B Combining Forms]]
[[Appendix C Suffixes]]
[[Appendix D Suffix forms]]