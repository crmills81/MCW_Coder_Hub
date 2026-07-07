---
tags:
  - medroot
aliases: []
roots:
  - -gen
  - -gen-
forms:
  - compound suffix form
  - noun
  - suffix
"alphabet:": G
definition:
  - substance that produces
  - be born
---
>[!Note] DEFINITION of [[-gen]]
>forms nouns: [[gen-]] - produce; In medical and biological terminology, **[[-gen]]** indicates **something that generates, produces, or gives rise to** a substance, cell, condition, or process, often used for agents causing formation (e.g., _pathogen_ = disease-producer) or precursors/origins (e.g., _carcinogen_ = cancer-producer). It forms nouns for causal agents in pathology, genetics, and immunology, distinguishing producers (_[[-gen]]_) from products (_[[-genic|-genous]]_ or _[[-genesis]]_); common in [[pharmacology]] for drug classes and oncology for tumor inducers.[](https://globalrph.com/medical-terms-introduction/)
_____
>[!info]+ ETYMOLOGY of [[-gen]]
>From #greek genēs (γενής), meaning "born, produced, causing to be."
>Via #french -gène and Scientific Latin, abstracted from oxygen (acid-producer); productive since 19th century in chemistry/medicine.
>Literally "that which begets/produces," parallel to -genesis (process of formation).
_____
>[!example]+ RELATED TERMS to [[-gen]]
>| Term       | Root + [[-gen]]                       | Meaning                     |
>|------------|-----------------------------------|-----------------------------|
>| Pathogen   | patho- (disease) + [[-gen]]           | Disease-causing organism.   |
>| [[carcinogen]] | [[carcin-]] (cancer) + [[-gen]]           | Cancer-causing agent.       |
>| Allergen   | allerg- (altered reaction) + [[-gen]] | Allergy trigger.            |
>| Antigen    | [[anti-]] (against) + [[-gen]]            | Immune response trigger.    |
>| Mutagen    | muta- (change) + [[-gen]]           | Mutation-causing agent.     |
>| Teratogen  | terato- (monster) + [[-gen]]          | Birth defect-causing agent. |

_____
>[!tip]+ DERIVATIONS of [[-gen]]
>```dataview
>TABLE definition AS Definition
>FROM #medroot
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