---
tags:
  - medroot
aliases:
  - poisonous
  - toxifying
roots:
  - -toxic
  - tox-
  - -ic
forms:
  - suffix
  - adjective
alphabet: T
definition: Pertaining to poison; causing damage, dysfunction, or death to specific cells, tissues, or organs.
---

>[!Note] DEFINITION of [[-toxic]]
>**[[-toxic]]** is a compound adjective formed by the root **[[tox-]]** (poison) and the suffix **[[-ic]]** (pertaining to). It describes a substance or agent that is poisonous to a biological system. In clinical practice, this suffix is rarely used alone; it is almost always attached to a prefix denoting a specific organ to describe **targeted toxicity**. For example, *nephrotoxic* (poisonous to the kidneys), *hepatotoxic* (poisonous to the liver), and *ototoxic* (poisonous to the ear/hearing nerve). Distinguishing between a substance that is simply "toxic" and one that is "organ-toxic" is essential for selecting the correct diagnostic codes and determining the appropriate antidote or supportive care.

_____

>[!info]+ ETYMOLOGY of [[-toxic]]
>#greek | #latin
>
>|Component|Origin|Meaning|
>|---|---|---|
>|**tox-**|[Greek] _toxikon_ ([tɔksikon])|"**bow**" or "**arrow**" — referring to the poison applied to arrows.|
>|**-ic**|[Latin/Greek] _-icus / -ikos_|[Suffix] "**pertaining to**" or "**having the nature of**."|
>
> The term evolved from the Greek description of weaponry into a biochemical descriptor. The addition of the suffix **[[-ic]]** transforms the root from a noun (poison) into a descriptor (poisonous). This allows the medical community to categorize agents not just by their chemical structure, but by their **pathophysiological impact** on the human body.

_____

> [!success]+ 🔀 ALIASES / ALTERNATE TERMS
> 
> - **POISONOUS** _(lay term; generally describes any substance that causes harm upon ingestion/contact)_
> - **TOXIFYING** _(the active process of making a tissue or organ toxic)_
> - **CYTOTOXIC** _(specifically pertaining to the poisoning/killing of cells, commonly used in oncology)_
> - **DETRIMENTAL** _(broad clinical synonym for an agent that causes organ damage)_

_____

> [!danger]+ 🔗 RELATED TERMS
> 
> - **[[-toxin]]** — the noun form; the actual poisonous substance itself.
> - **[[-ty]]** — as in *toxicity*; the state or degree of being poisonous.
> - **ANTITOXIC** — an agent that works against or neutralizes a toxin.
> - **DETOXIFICATION** — the process of removing a toxic substance from the body.
> - **IDIOSYNCRATIC** — often used alongside *toxic* to describe an unpredictable, non-dose-dependent toxic reaction.

_____

> [!example]+ CODING CORNER 
> 
> For 2026 guidelines, `[[-toxic]]` terms are the primary markers for **Drug-Induced (DI)** conditions. Coding "renal failure" is generic; coding "drug-induced nephrotoxicity" is specific and clinically actionable.
> 
> ### 🏥 ICD-10-CM CODES (Targeted Toxicity)
> 
> |Toxicity Term|Common Clinical Example|Relevant ICD-10-CM Range|
> |---|---|---|
> |**Nephrotoxic**|Aminoglycoside-induced AKI|**N17.x** (Acute Kidney Failure) + **T-code** (Adverse effect)|
> |**Hepatotoxic**|Acetaminophen-induced liver failure|**K71.x** (Toxic liver disease)|
> |**Ototoxic**|Cisplatin-induced hearing loss|**H91.x** (Sensorineural hearing loss) + **T-code**|
> |**Cardiotoxic**|Anthracycline-induced cardiomyopathy|**I42.x** (Cardiomyopathy) + **T-code**|
> 
> ---
> 
> ### 🔧 CODING NUANCE: Adverse Effect vs. Poisoning
> 
> When documenting a `[[-toxic]]` reaction, 2026 guidelines require a strict distinction between:
> 
> - **Adverse Effect**: The drug was taken **correctly** (right dose, right route), but the patient had a toxic reaction (e.g., "the drug is nephrotoxic to this patient").
> - **Poisoning**: The drug was taken **incorrectly** (overdose, wrong drug, wrong patient).
> 
> > ⚠️ **Documentation Tip:** To ensure maximum reimbursement and accuracy, clinicians should avoid writing "Toxicity" in isolation. Instead, use the organ-specific adjective: **"Patient exhibiting signs of [Organ]-toxicity secondary to [Drug]."** This allows the coder to link the external cause code (T-series) to the manifestation code (N, K, H, or I series) with 100% certainty.

_____

>[!tip]- DERIVATIONS of [[-toxic]]
>```dataview
>TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
>SORT file.name ASC
>```

_____

>[!faq]- Query
>```dataview
>TABLE definition AS Definition
>FROM #medroot
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```

<br>

[[Med terms dictionary]]
[[Appendix A Prefixes]]
[[Appendix B Combining Forms]]
[[Appendix C Suffixes]]
[[Appendix D Suffix forms]]