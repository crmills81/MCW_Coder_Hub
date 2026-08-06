---
tags:
  - medterm
  - endocrinology
  - urology
aliases:
  - Glycosuria
  - glucosuria
  - Glucosuria
  - renal glycosuria
  - sugar in the urine
roots:
  - glyc-
  - glyco-
  - -uria
forms:
  - prefix
  - suffix
  - combining
  - noun
alphabet: G
definition:
  - the presence of glucose in the urine
---
>[!Note] DEFINITION of [[glycosuria]]
>**[[Glycosuria]]** is the **presence of glucose in the urine**, detected via dipstick (**semiquantitative**) or **quantitative** urine glucose testing. Normally, nearly all filtered glucose is reabsorbed by the proximal renal tubule (**via SGLT2/SGLT1 transporters**), so urine glucose is undetectable; **[[glycosuria]]** occurs when the **plasma glucose exceeds the renal threshold** (typically ~180 mg/dL, causing "**overflow [[glycosuria]]**," most commonly from uncontrolled diabetes mellitus) or when **tubular reabsorption is impaired despite normal blood glucose** ("**renal [[glycosuria]]**," a benign, often hereditary condition, or one seen with **SGLT2-inhibitor therapy, Fanconi syndrome, or pregnancy**). It is distinguished from **glucosuria of pregnancy**, a transient, benign finding caused by increased **glomerular filtration rate (GFR)** and reduced tubular reabsorption capacity during gestation, and from **[[ketonuria]]**, which reflects fat metabolism rather than carbohydrate spillover. **Persistent [[glycosuria]]** with normal serum glucose warrants evaluation for **primary renal [[glycosuria]]** or **proximal [[tubulopathy]]** rather than **[[diabetes]]**.
_____
>[!info]+ ETYMOLOGY of [[glycosuria]]
>#greek 
>From Greek *glykys* (γλυκύς, "**sweet**") + *ouron* (οὖρον, "**urine**") + [[-ia]], literally "**sweet urine**."
>- **[[glyco-]]**: combining form meaning "**sugar, sweetness**," seen in **[[glycolysis]], [[glycogen]], [[hypoglycemia]], [[hyperglycemia]].**
>- **[[-uria]]**: suffix meaning "**condition of the urine**," seen in **[[hematuria]], [[proteinuria]], [[polyuria]], [[dysuria]]**.
>- Historical note: physicians historically diagnosed diabetes ("*diabetes mellitus*," literally "**sweet-tasting siphon**") by the sweet taste of urine — the clinical ancestor of the modern glucose dipstick.
_____
>[!success]+ ALIASES / ALTERNATE TERMS of [[glycosuria]]
>| Term | Notes |
>|---|---|
>| **Glucosuria** | Interchangeable synonym, used equally in clinical literature |
>| **Renal glycosuria** | Glucose in urine with **normal** serum glucose, due to isolated tubular reabsorption defect (SLC5A2 mutation) or SGLT2-inhibitor drug effect |
>| **Gestational glycosuria** | Transient, benign glycosuria of pregnancy from increased GFR |
>| **Overflow (diabetic) glycosuria** | Glucose in urine **secondary to hyperglycemia** exceeding the renal threshold; most common clinical cause |
_____
>[!danger]+ RELATED TERMS of [[glycosuria]]
>- **[[hyperglycemia]]** — elevated blood glucose; the usual driver of overflow glycosuria.
>- **[[Fanconi syndrome]]** — generalized proximal tubular dysfunction causing glycosuria along with [[proteinuria]], phosphaturia, and aminoaciduria.
>- **[[polyuria]]** — often accompanies glycosuria due to the osmotic diuretic effect of unreabsorbed glucose.
>- **SGLT2 inhibitors** — diabetes medication class (e.g., empagliflozin) that intentionally induces glycosuria as its mechanism of glucose lowering.
>- **[[ketonuria]]** — urinary ketones; frequently assessed alongside glycosuria to screen for diabetic ketoacidosis.
>- **[[diabetes mellitus]]** — the most common underlying diagnosis when glycosuria is detected on routine urinalysis.
_____
> [!example]+ CODING CORNER
>
> **ICD-10-CM Codes**
>
> | Code | Description |
> |---|---|
> | **[[R81]]** | Glycosuria (isolated finding, unspecified cause; billable 3-character code) |
> | **[[E74.8]]** | Other specified disorders of carbohydrate metabolism (**includes primary/renal glycosuria**) |
>
>
>>[!NOTE]
>> _**Note**: When glycosuria is a documented manifestation of diabetes mellitus, do **not** code R81 separately — code only the appropriate diabetes category (E08–E13) per ICD-10-CM guidelines, since glycosuria is an inherent/integral finding of uncontrolled diabetes._
>
>
> **CPT Codes**
>
> | Code | Description |
> |---|---|
> | **[[81000]]** | Urinalysis, dipstick/tablet reagent (glucose, protein, blood, etc.); non-automated, with microscopy |
> | **[[81001]]** | Urinalysis, dipstick/tablet reagent; automated, with microscopy |
> | **[[81002]]** | Urinalysis, dipstick/tablet reagent; non-automated, without microscopy |
> | **[[81003]]** | Urinalysis, dipstick/tablet reagent; automated, without microscopy |
> | **[[82945]]** | Glucose, urine, quantitative, each specimen |
>
>> ⚠️ **Coding Note:** **[[R81]]** is used only when glycosuria is an **isolated, unexplained finding** — **e.g., an incidental dipstick result pending workup** — and should not be assigned when the underlying diabetic etiology is already documented, in which case the diabetes code alone captures the clinical picture per **ICD-10-CM Chapter 4 guidelines**. If the note documents "**renal glycosuria**" or a tubular reabsorption defect without **[[hyperglycemia]]**, use **[[E74.8]]** instead of **R81**. Watch for **SGLT2-inhibitor therapy** noted in the medication list — **[[glycosuria]]** in that context is an expected drug effect, not usually reportable as a separate diagnosis unless the provider flags it as clinically significant (**e.g., recurrent UTI risk**).

_____
>[!tip]- DERIVATIONS of [[glycosuria]]
>```dataview
>TABLE definition AS Definition
>FROM #medterm 
>WHERE length(filter(roots, (word) => econtains([[glycosuria]].roots, word))) > 0 AND file.name != [[glycosuria]].file.name
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