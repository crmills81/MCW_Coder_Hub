---
tags:
  - medterm
  - medroot
  - urology
  - BPH
  - specialty/urology
aliases:
  - BPH
  - benign prostatic hyperplasia
roots:
  - pro-
  - -tic
  - hyper-
  - -plasia
  - -static
  - -ia
forms:
  - prefix
  - suffix
  - noun
alphabet: B
definition:
  - noncancerous enlargement of the prostate gland
---
>[!Note] DEFINITION of [[Benign Prostatic Hyperplasia (BPH)]]
>[[Benign Prostatic Hyperplasia (BPH)]] is a histological diagnosis characterized by the proliferation of **[[epithelial]]** and **stromal cells** in the **[[periurethral]]** and transition zones of the prostate. As the gland enlarges, it compresses the prostatic urethra, leading to **lower urinary tract symptoms (LUTS)** such as frequency, urgency, [[nocturia]], and a weak urinary stream. While not a precursor to prostate cancer, it affects nearly 90% of men by their eighties and is primarily driven by hormonal changes involving **dihydrotestosterone (DHT)** during the aging process.
_____
>[!info]+ ETYMOLOGY of [[Benign Prostatic Hyperplasia (BPH)]]
>#latin The term is derived from three distinct linguistic roots that describe its nature and location:
>- **[[Benign]]**: From the Latin _benignus_, meaning "**kind**" or "**favorable**," used in medicine to indicate a condition that is not malignant or cancerous.[](https://www.cancer.gov/publications/dictionaries/cancer-terms/def/benign-prostatic-hyperplasia)​
>- **[[Prostatic]]**: Derived from the Greek _prostatēs_, meaning "**one who stands before**" (**referring to the gland's position in front of the bladder**), combined with the suffix _[[-ic]]_ meaning "relating to".[](https://en.wikipedia.org/wiki/Benign_prostatic_hyperplasia)​
>- **[[Hyperplasia]]**: Formed from the #Greek _[[hyper-]]_ ("*over*" or "*excessive*") and _[[-plasis]]_ ("*formation*" or "*molding*"), referring specifically to an increase in the number of cells. *[[gene-]]::*genə-, also *[[gen-]], Proto-Indo-European root meaning "give birth, beget," with derivatives referring to procreation and familial and tribal groups.
_____
>[!tip]+ DERIVATIONS of [[Benign Prostatic Hyperplasia (BPH)]]
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


## Related Terms and Coding

For professional medical coding, the following terms and ICD-10-CM classifications are essential for accurate documentation:

|Term/Code|Description|
|---|---|
|**[[N40.0]]**|[[Benign Prostatic Hyperplasia (BPH)]] without lower urinary tract symptoms (LUTS) [](https://imedclaims.com/icd-10-code-for-benign-prostatic-hyperplasia-bph/).|
|**[[N40.1]]**|[[Benign Prostatic Hyperplasia (BPH)]] with lower urinary tract symptoms [](https://imedclaims.com/icd-10-code-for-benign-prostatic-hyperplasia-bph/).|
|**LUTS**|Lower Urinary Tract Symptoms, the clinical manifestation of BPH [](https://www.ncbi.nlm.nih.gov/books/NBK558920/).|
|**DHT**|Dihydrotestosterone, the primary androgen responsible for prostate growth [](https://www.yalemedicine.org/conditions/enlarged-prostate-benign-prostatic-hyperplasia-bph)​.|
|**TURP**|Transurethral Resection of the Prostate, a common surgical treatment for BPH [](https://www.laiic.com/blogs/laiichouse-radiology-blog/what-is-benign-prostatic-hyperplasia-bph-anyways)​.|
|**PSA**|Prostate-Specific Antigen, a blood test used to screen for prostate issues [](https://imedclaims.com/icd-10-code-for-benign-prostatic-hyperplasia-bph/)​.|

- **[[hypertrophy]]**: Often used interchangeably with hyperplasia, but technically refers to an increase in cell size rather than cell number.[](https://emedicine.medscape.com/article/437359-overview)
    
- **Prostatism**: An older clinical term used to describe the symptoms associated with an enlarged prostate.
    
- **Detrusor Overactivity**: A condition where the bladder muscle contracts involuntarily, often secondary to chronic BPH obstruction.[](https://www.ncbi.nlm.nih.gov/books/NBK558920/)

[[Med roots]]
[[Appendix A Prefixes]]
[[Appendix B Combining Forms]]
[[Appendix C Suffixes]]
[[Appendix D Suffix forms]]