---
tags:
  - medterm
  - medroot
aliases:
  - dehydrated
roots:
  - an-
  - hydr-
  - -ous
definition: Without water
"alphabet:": A
forms:
  - adjective
  - combining
  - diminutive
---
>[!note] Definition of [[anhydrous]]
>[[a-|an-]][[hydr-]][[-ous]] - Without water; In a clinical and chemical context, **anhydrous** refers to a substance that contains no water of crystallization or a physiological state where water has been completely removed. While often used in pharmacology to describe potent, undiluted powder forms of medications (**e.g., Caffeine Anhydrous**), in a clinical setting, it may describe specific cellular states or the properties of topical agents used to treat [[hyperhidrosis]] or wound care. It signifies a "dry" state that is often more stable or concentrated than its hydrous counterpart.

___
>[!info]+ Etymology of [[anhydrous]]
>#greek
>The term is a linguistic construction of three distinct Greek elements:
>
>- **an- (ἀν-)**: Prefix meaning "**without**" or "**not**."
>    
>- **hydr (ὕδωρ)**: Root meaning "**water**."
>    
>- **-ous (‑ος)**: Adjective-forming suffix meaning "**possessing**" or "**full of**" (**literally "having the quality of**").
>    
>- **Literal Meaning**: "Having the quality of being without water."
>
_____

> [!example]+ **Coding & Documentation Nuances**
> **ICD-10-CM (Clinical Modificatio**n)**: There is no singular "anhydrous" code. Coders must look for the manifestation of the anhydrous state. If referring to severe dehydration, see category E86 (Volume depletion). If used in the context of skin (xerosis), look to L85.3.
> 
> **ICD-10-PCS (Procedure Coding)**: When anhydrous agents are used in procedures (like anhydrous alcohol for nerve blocks or sclerotherapy), the root operation is typically Destruction (physical eradication of all or a portion of a body part by use of energy, force, or a destructive agent).
> 
> **CPT (Current Procedural Terminology)**: Documentation of anhydrous crystalline substances in compounding may impact "J-code" selection for pharmaceuticals, as the anhydrous form often has a different dosage weight-to-potency ratio than hydrated versions.
> 
> **<u>Clinical Indicators</u>**
> For a coder to validate the clinical relevance of this term, the documentation should include:
> 
> **Pharmacological Specs**: Explicit mention of an "anhydrous" formulation, which may indicate a higher potency or specific delivery method (e.g., anhydrous lanolin vs. hydrous).
> 
> **Lab Values**: Evidence of extreme hemoconcentration or cellular desiccation in pathology reports.
> 
> **Chemical Cauterization**: Use of anhydrous alcohols or acids in the destruction of lesions or nerves.
> 
> **<u>Related Terms & Differentials</u>**
> **Dehydration**: A physiological process of losing water; anhydrous is the state of being without it.
> 
> **Xerosis**: Specifically refers to dry skin; "anhydrous" is a broader chemical/biological descriptor.
> 
> **Desiccation**: The act of drying out thoroughly. In ICD-10-PCS, this is often the mechanism behind the root operation Destruction.
> 
> **Hygroscopic**: The opposite tendency; a substance that actively attracts and holds water molecules from the surrounding environment.
> 
> **Hydrophobic**: A property where a substance repels water, which is distinct from simply not containing water (**anhydrous**).
>

_____
>[!tip]- DERIVATIONS of [[anhydrous]]
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


[[Med roots]]
[[Appendix A Prefixes]]
[[Appendix B Combining Forms]]
[[Appendix C Suffixes]]
[[Appendix D Suffix forms]]