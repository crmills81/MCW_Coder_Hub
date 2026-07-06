---
tags:
  - medterm
  - medroot
  - ophthalmology
  - eye-disorders
aliases:
  - corneal ulcer
  - ulcerative keratitis
  - photokeratitis
roots:
  - keratitis
  - kerat-
  - -titis
  - -itis
forms:
  - prefix
  - suffix
  - combined
  - noun
  - disease
alphabet: K
definition:
  - inflammation of the cornea
---
>[!Note] DEFINITION of keratitis
>**Keratitis** is an **inflammatory condition of the cornea** — the clear, dome-shaped front surface of the eye — that can involve the [[epithelium]], [[stroma]], or endothelium depending on the type and causative agent. It may be infectious (**bacterial, viral, fungal, or parasitic**) or non-infectious (**autoimmune, exposure-related, UV-induced, or neurotrophic**). Symptoms typically include eye pain, [[photophobia]], tearing, blurred vision, and a foreign-body sensation. Severe or untreated **keratitis** can progress to [[corneal ulceration]], scarring, perforation, and permanent vision loss. It is one of the leading causes of preventable corneal blindness worldwide.
>
_____
>[!info]+ ETYMOLOGY of [[keratitis]]
>#greek "**Keratitis**" derives from the Greek _keras_ (κέρας), meaning "**horn**" — a reference to the horn-like transparency and hardness of the cornea. The suffix _[[-itis]]_ is from Greek _[[-itis]]_, meaning "**inflammation of**." Together: **"inflammation of the cornea."** The _[[kerat-]]_ root appears throughout ophthalmologic terminology wherever the cornea is involved.
>
_____

> [!warning]+ **ICD-10-CM CODES — Category H16**
> 
> **All codes below require a final digit specifying laterality: 1 = right eye, 2 = left eye, 3 = bilateral, 9 = unspecified eye**.
> 
> **Corneal Ulcer (H16.0x)** [[H16.001]]-[[H16.009]] — Unspecified corneal ulcer [[H16.011]]-[[H16.013]] — Central corneal ulcer [[H16.021]]-[[H16.029]] — Ring corneal ulcer [[H16.031]]-[[H16.039]] — Corneal ulcer with hypopyon [[H16.041]]-[[H16.049]] — Marginal corneal ulcer [[H16.051]]-[[H16.059]] — Mooren's corneal ulcer [[H16.061]]-[[H16.069]] — Mycotic (fungal) corneal ulcer [[H16.071]]-[[H16.079]] — Perforated corneal ulcer
> 
> **Superficial Keratitis Without Conjunctivitis (H16.1x)** [[H16.101]]-[[H16.109]] — Unspecified superficial keratitis [[H16.111]]-[[H16.119]] — [[Macular]] keratitis [[H16.121]]-[[H16.129]] — Filamentary keratitis [[H16.131]]-[[H16.139]] — [[Photokeratitis]] (UV/arc eye/snow blindness) [[H16.141]]-[[H16.149]] — Punctate keratitis (SPK)
> 
> **Keratoconjunctivitis (H16.2x)** [[H16.201]]-[[H16.209]] — Unspecified [[keratoconjunctivitis]] [[H16.211]]-[[H16.219]] — Exposure keratoconjunctivitis [[H16.221]]-[[H16.229]] — Keratoconjunctivitis sicca, not specified as [[Sjögren's]] [[H16.231]]-H16.239]] — [[Neurotrophic]] keratoconjunctivitis [[H16.241]]-[[H16.249]] — Ophthalmia nodosa [[H16.251]]-[[H16.259]] — [[Phlyctenular]] keratoconjunctivitis [[H16.261]]-[[H16.269]] — Vernal keratoconjunctivitis with limbar and corneal involvement [[H16.291]]-[[H16.299]] — Other keratoconjunctivitis
> 
> **Interstitial & Deep Keratitis (H16.3x)** [[H16.301]]-[[H16.309]] — Unspecified interstitial keratitis [[H16.311]]-[[H16.319]] — Corneal abscess [[H16.321]]-[[H16.329]] — Diffuse interstitial keratitis [[H16.331]]-[[H16.339]] — Sclerosing keratitis [[H16.391]]-[[H16.399]] — Other interstitial and deep keratitis
> 
> **Corneal Neovascularization (H16.4x)** _(sequela of/associated with keratitis)_ [[H16.401]]-[[H16.409]] — Unspecified corneal [[neovascularization]] [[H16.411]]-[[H16.419]] — Ghost vessels (corneal) [[H16.421]]-[[H16.429]] — Pannus (corneal) [[H16.431]]-[[H16.439]] — Localized [[vascularization]] of cornea [[H16.441]]-[[H16.449]] — Deep vascularization of cornea
> 
> **Other/Unspecified** [[H16.8]] — Other keratitis [[H16.9]] — Unspecified keratitis
_____

> [!example]+ **RELEVANT CPT CODES**
> [[65430]] — Scraping of cornea for smear and/or culture 
> [[65435]] — Removal of corneal [[epithelium]] (chemical or physical means), with or without chemocauterization 
> [[65600]] — Multiple punctures of anterior cornea (e.g., for recurrent erosion or superficial keratitis)
>  [[65710]] — [[keratoplasty]] (corneal transplant) — lamellar 
>  [[65730]] — Keratoplasty — penetrating, except in aphakia or pseudophakia 
>  [[65750]] — Keratoplasty — penetrating, in [[aphakia]] 
>  [[65755]] — Keratoplasty — penetrating, in [[pseudophakia]] 
>  [[65756]] — [[Endothelial]] keratoplasty (DSEK/DMEK) 
>  [[65771]] — Radial keratotomy 
>  [[92025]] — Corneal topography 
>  [[92285]] — External ocular photography (to document corneal findings)
> 
> ---
> 
> **💡 CODING TIPS**
> 
> When the physician documents [[herpetic keratitis]], verify whether it is HSV (**herpes simplex**) or HZV (**herpes zoster**) — both require an additional code from the B00.x or B02.x series as the underlying cause, and the [[keratitis]] code is sequenced as an additional diagnosis. For example, HSV [[keratoconjunctivitis]] would pair [[B00.52]] with the appropriate H16.2xx code. Similarly, acanthamoeba keratitis should be coded with [[B60.13]] as the primary causative organism. Corneal ulcer with [[hypopyon]] (H16.03x) is a red flag for aggressive infection and often warrants concurrent culture codes. Always check laterality — unspecified eye (x9) should only be used when the record genuinely does not specify.
>
_____
>[!tip]- DERIVATIONS of [[keratitis]]
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