---
tags:
  - medroot
  - medterm
aliases:
  - -ize
  - -ise
roots:
  - -ate
forms:
  - suffix
  - suffixes
  - suffix form
  - compound suffix form
  - verb
"alphabet:": A
definition:
  - chemical substance
  - having the form of
  - possessing
---
>[!Note] DEFINITION of [[-ate]]
>The suffix **-ate** is one of the most multifunctional and productive endings in medical and scientific terminology, serving three distinct grammatical roles: **verbal, nominal, and adjectival**. As a **verb-forming suffix**, **-ate** creates action words that indicate causing a state or performing a process (**ventilate = to cause air flow; medicate = to treat with medicine; intubate = to insert a tube**). As a **noun-forming suffix**, **-ate** primarily designates chemical compounds, particularly salts and esters in biochemistry and pharmacology (**phosphate, citrate, sulfate**), as well as body structures or the results of processes (**prostrate, concentrate**). As an **adjective-forming suffix**, [[-ate]] describes something possessing a quality or characteristic (**articulate, vertebrate, compassionate**). In medical contexts, the verbal form is particularly significant for describing clinical procedures and interventions (**resuscitate, defibrillate, anesthetize becomes anesthetate in archaic usage**), while the noun form is essential in laboratory medicine, pharmacology, and biochemistry for naming ions, drug compounds, and metabolic products. Understanding the **-ate** suffix is crucial for medical coding professionals because it appears in procedure terminology (**CPT codes**), drug nomenclature (**HCPCS codes**), and diagnostic terminology (**ICD-10**), particularly when documenting interventions, chemical laboratory values, and medication administration. The suffix's Latin origin gives it a formal, technical quality that makes it standard in professional medical documentation.
_____
>[!info]+ ETYMOLOGY of [[-ate]]
>#greek
>#latin - **Origin**: Latin suffix _-ātus_ (**masculine**), _-āta_ (**feminine**), _-ātum_ (**neuter**)
>- **Grammatical function in Latin**: Past participle ending of first-conjugation verbs
>- **Meaning evolution**:
>    - **Verbal**: From Latin verb stems + _-ātus_ → "**having been [verb]ed**" → English "to cause to be [verb]ed"
>    - **Nominal**: From Latin _-ātus_ as a noun → office, position, or result of action
>   - **Chemical**: Extended in modern scientific Latin (**18th-19th century**) to name salt compounds
>- **Entry into English**: Via Old French _[[-at]]_ and directly from Latin _[[-atus]]_
>- **Chemical nomenclature**: Systematized by Antoine Lavoisier (1787) who established -ate for oxygen-containing salts with higher oxidation states
>- **Medical adoption**: Became standard in anatomical, procedural, and pharmaceutical terminology through New Latin medical vocabulary
>

_____
>[!example]+ RELATED TERMS to [[-ate]]
>
| [[-ate]] | chemical substance | having the form of, possessing |    -    |
|:--------:|:------------------:|:------------------------------:|:-------:|
| [[-ide]] |        YES         |               -                |    -    |
| [[-ite]] |        YES         |               -                |    -    |
| [[-one]] |        YES         |               -                |    -    |
| [[-ose]] |        YES         |          (resembling)          | full of |
>
_____

> [!warning]+  VERBAL USES (-ate verbs: medical procedures and actions)
> **Urological Procedures (relevant to your specialty):**
> 
> - **Catheterize**: To insert a [[catheter]] (**urinary [[catheterization]] coding**)
> - **Dilate**: To widen (**urethral dilation**)
> - **[[Irrigate]]**: To flush (**bladder irrigation**)
> - **Lithotripsy** (**related**): Though not [[-ate]], the process to **fragmentate** stones
> - **Micturate**: To urinate (**older term; [[micturition]]**)
> 
> **Ophthalmological:**
> 
> - **Dilate**: [[Pupillary]] [[dilation]] ([[mydriasis]]) for eye exams
> - **[[Constrict]]** vs **Dilate**: Pupillary responses
> - **[[Enucleate]]**: To surgically remove the eyeball
> - **[[Irrigate]]**: Eye irrigation for foreign bodies or chemicals
> 
> **Otolaryngological:**
> 
> - **[[Intubate]]**: [[Endotracheal intubation]] (**airway management**)
> - **[[tracheostomy]]** vs **Tracheotomize**: Related to [[tracheal]] procedures
> - **[[Cauterize]]**: Nasal cauterization for [[epistaxis]]
> - **Irrigate**: Sinus irrigation, ear irrigation
> - **[[Perforate]]**: [[Tympanic membrane perforation]]
>
_____
>[!tip]- DERIVATIONS of [[-ate]]
>```dataview
>TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
>SORT file.name ASC
>```
_____
>[!faq]- Query functionality
>
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