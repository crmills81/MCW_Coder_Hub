---
tags:
  - medroot
aliases:
  - -ible
roots:
  - -able
  - -ab
forms:
  - suffix
  - compound suffix form
"alphabet:": A
definition:
  - capable of (being)
  - able to
---
>[!Note] DEFINITION of [[-able]]
>Forms adjectives: capable of (**being**), able to; **-able** is a productive adjectival suffix in medical terminology that transforms **verbs and nouns into adjectives expressing capability, susceptibility, or fitness for a particular action or state**. When attached to a medical term, it indicates that something can undergo, receive, or be subjected to the action described by the root word. In clinical documentation and medical coding, this suffix frequently appears in **descriptions of tissue characteristics, treatment possibilities, and physiological capacities**. The suffix conveys passive capability—meaning the subject can receive or undergo an action rather than actively performing it.
_____
>[!info]+ ETYMOLOGY of [[-able]]
>#latin 
>- **Origin**: From Latin _-abilis_, through Old French _-able_
>- **Latin root**: _[[-abilis]]_ (**capable of, worthy of, deserving of**)
>- **Related to**: Latin verb _habere_ (**to have, to hold**)
>- **Entry into medical language**: Via medieval Latin medical texts and later French medical terminology during the Renaissance
>- **Linguistic note**: When the root ends in a hard '**c**' or '**g**', the form becomes _[[-cable]]_ or _[[-gable]]_ to preserve pronunciation
>
_____
>[!example]+ RELATED TERMS to [[-able]]
>
> **Opposite/Contrasting Suffixes:**
>
>- **-resistant**: Unable to be affected by
>- **-proof**: Impervious to
>- **[[in-]]/[[-im-]]** (**prefix**): Creates negative form (**inoperable, immeasurable**)
>
>**Related Suffixes with Similar Functions:**
>
>- **[[-ible]]**: Parallel form with same meaning
>- **[[-ile]]**: Capable of (**less common variant**)
>- **-worthy**: Deserving of
>
_____

> [!hint]+ Coding & Documentation Relevance:
> In ICD-10-CM and procedural coding, terms with **-able** often indicate:
> 
> - **Appropriateness for procedures** (**operable tumor = surgical candidate**)
> - **Tissue characteristics** affecting code selection
> - **Treatment feasibility** documented in medical necessity
> - **Contraindications** when negated (**non-excisable, inoperable**)
> 
> **Clinical Significance:**
> 
> The presence or absence of **[[-able]]** characteristics frequently determines:
> 
> - Surgical planning and approach
> - Treatment protocols and sequencing
> - Prognosis and expected outcomes
> - Medical necessity justification for procedures
> - Assignment of more specific vs. unspecified codes
_____


> [!attention]+ Related Medical Terms (Detailed Examples):
> **Common in Surgical Documentation:**
> 
> - **Operable**: Capable of being operated upon; amenable to surgical treatment
> - **Excisable**: Capable of being surgically removed or cut out
> - **Resectable**: Capable of being surgically resected or removed with clear margins
> - **Viable**: Capable of living, developing, or functioning successfully
> 
> **Tissue & Pathology Descriptions:**
> 
> - **Palpable**: Capable of being felt by touch during physical examination
> - **Visible**: Capable of being seen with the naked eye or optical instruments
> - **Irrigable**: Capable of being washed out or flushed (relevant in [[urology]])
> - **Dilatable**: Capable of being expanded or widened ([[urethral strictures]], [[lacrimal ducts]])
> 
> **Treatment & Intervention Related:**
> 
> - **Treatable**: Capable of receiving medical or surgical treatment
> - **Correctable**: Capable of being fixed or amended
> - **Salvageable**: Capable of being saved or preserved
> - **Repairable**: Capable of being fixed or restored to function
> 
> **Diagnostic & Procedural:**
> 
> - **Measurable**: Capable of being quantified or assessed
> - **Identifiable**: Capable of being recognized or distinguished
> - **Accessible**: Capable of being reached or approached (**surgical access**)
> - **Visualizable**: Capable of being seen via imaging or endoscopy
> 
> **Urology-Specific Examples:**
> 
> - **[[Catheterizable]]**: Capable of having a [[catheter]] inserted
> - **Distensible**: Capable of being stretched (**bladder capacity**)
> - **Drainable**: Capable of being emptied or drained
> 
> **Ophthalmology-Specific Examples:**
> 
> - **[[Refractable]]**: Capable of bending light (**lens properties**)
> - **[[Correctable]]** (**vision**): Capable of vision improvement with lenses
> - **Detectable** (**retinal changes**): Capable of being identified on examination
> 
> **Otolaryngology-Specific Examples:**
> 
> - **Intubatable**: Capable of having an [[endotracheal]] tube placed
> - **Perforable**: Capable of being punctured ([[tympanic membrane]])
> - **Removable** ([[cerumen]]): Capable of being extracted
> 

_____
>[!tip]- DERIVATIONS of [[-able]]
>```dataview
>TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
>SORT file.name ASC
>```
_____ 
>[!faq]- Query functionality (default define synonyms)
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