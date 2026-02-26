---
tags:
  - medroot
  - medterm
aliases: []
roots:
  - -agra
forms:
  - combining
"alphabet:": A
definition:
  - pain
  - gout
---
>[!Note] DEFINITION of [[-agra]]
>(**sudden**) pain, gout; The suffix **-agra** denotes a sudden, violent, or acute seizure of pain in a specific body part or region. It implies not just generalized pain but a paroxysmal, intense, often debilitating quality of pain — the kind associated with acute inflammatory joint disease, cramping, or spasmodic pain episodes. It is most classically associated with conditions involving crystal deposition, inflammatory arthropathy, or severe acute pain syndromes localized to a particular anatomical site.
>
The distinction between **-agra** and other pain suffixes is important. While **-algia** refers broadly to pain of any character or intensity in a region, **-agra** carries the connotation of a sudden _attack_ or _seizure_ of pain — reflecting an acute, episodic, and often excruciating quality. This nuance is rooted in its earliest and most famous application in the word _podagra_ (**gout of the foot**), which Hippocrates described as one of the most painful conditions known to medicine. The suffix was subsequently extended to describe similarly acute pain presentations in other anatomical locations.
>
In the context of inpatient coding, conditions carrying the **-agra** suffix often map to inflammatory arthropathy categories in ICD-10-CM (**particularly the M10–M11 range for gout and crystal arthropathies**) or to acute pain diagnoses depending on etiology and documentation. Recognizing the suffix helps the coder understand the clinical urgency and acuity implied in physician documentation, which can support medical necessity and severity of illness determinations.
>
In urology, **gonagra** (knee) and **chiragra** (*hand/wrist*) may appear incidentally, but more relevant is the strong association between **-agra** conditions like gout (_podagra_) and uric acid nephrolithiasis — a direct urological complication of hyperuricemia that frequently drives inpatient admissions and requires precise ICD-10-CM coding of both the gouty arthropathy and the associated [[calculus]].
_____
>[!info]+ ETYMOLOGY of [[-agra]]
>#greek [[-agra]] (**hunting**) From **Greek** _ἄγρα_ (_agra_) — meaning "*a catching*," "*a seizure*," "*a trap*," or "*a hunt*." Derived from the Greek verb _ἀγρεύω_ (_agreuō_) — "*to catch*," "*to seize,*" or "*to hunt*." The imagery is viscerally apt: the pain _seizes_ the affected part suddenly and forcefully, as if caught in a trap. The suffix entered medical Latin essentially unchanged from Greek and was well established in Hippocratic and Galenic medical writing.
_____
>[!example]+ RELATED TERMS to [[-agra]]
> 
| [[-agra]] | pain | gout |
|:---------:|:----:|:----:|
| [[alg-]]  | YES  |  -   |
| [[odyn-]] | YES  |  -   |
>**Related Terms**
>
>- **Podagra** — acute gout/seizure of pain in the foot (most classic usage; from Greek _pous/podos_, foot); maps to ICD-10-CM **M10.071–M10.072** (gout of ankle and foot)
>- **Chiragra** — acute seizure of pain in the hand or wrist (from Greek _cheir_, hand)
>- **Gonagra** — acute seizure of pain in the knee (from Greek _gony_, knee)
>- **Meragra** — acute seizure of pain in the thigh (from Greek _meros_, thigh)
>- **Omalgra** — acute seizure of pain in the shoulder (from Greek _omos_, shoulder)
>- **Pellagra** — literally "skin seizure/roughness" (from Italian _pelle_, skin + _agra_); a niacin deficiency disease characterized by acute dermatitis, diarrhea, and dementia — a notable exception where **-agra** does not strictly denote joint pain
>- **[[Gout]]** — the prototypical **-agra** disease; caused by monosodium urate crystal deposition; strongly associated with uric acid nephrolithiasis and urological comorbidity
>- **[[Hyperuricemia]]** — the metabolic precursor to gouty **-agra** conditions; directly relevant in [[urology]] for uric acid stone disease
>- **Uric acid [[nephrolithiasis]]** — a key urological complication of the same metabolic process underlying podagra and related conditions
>- **[[-algia]]** — broader pain suffix for comparison (e.g., _arthralgia_, _[[neuralgia]]_)
>- **[[-dynia]]** — pain suffix with more chronic/functional connotation (e.g., _vulvodynia_, _coccydynia_)
>- **Arthropathy** — general term for joint disease; the disease category under which most **-agra** conditions are coded in ICD-10-CM
>- **Crystal arthropathy** — ICD-10-CM category M10–M11; the primary coding home for gout and related **-agra** conditions
>

_____
>[!tip]- DERIVATIONS of [[-agra]]
>```dataview
>TABLE definition AS Definition 
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

[[Med roots dictionary]]
[[Appendix A Prefixes]]
[[Appendix B Combining Forms]]
[[Appendix C Suffixes]]
[[Appendix D Suffix forms]]


