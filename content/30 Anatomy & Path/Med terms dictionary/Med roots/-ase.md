---
tags:
  - medroot
aliases: []
roots:
  - -ase
forms:
  - suffix
"alphabet:": A
definition:
  - enzyme
---
>[!Note] DEFINITION of [[-ase]]
>**Enzyme** - In biochemistry and medical terminology, **[[-ase]]** is a standardized suffix used systematically to name **enzymes** based on either the [[substrate]] they act upon or the type of chemical reaction they catalyze. It was established by the **Enzyme** Commission (EC) in the 1950s as part of the international nomenclature for enzymes, where names follow patterns like _substrate + [[-ase]]_ (e.g., _lactase_ breaks down lactose) or _reaction type + [[-ase]] (e.g., _protease_ for protein [[hydrolysis]]). This convention aids precise identification in pharmacology, lab medicine, and research; exceptions exist for older or common names like _pepsin.
_____
>[!info]+ ETYMOLOGY of [[-ase]]
>#greek - Coined in **1878** by German physiologist  **Wilhelm Kühne**, who created _Enzym_ (enzyme) from Greek _en-_ ("in") + _zymē_ ("leaven, ferment").
>- The **[[-ase]]** ending was abstracted from this to form a productive suffix for new enzymes, entering widespread biochemical use by the early 20th century via *International Scientific Vocabulary.*
>- Reflects the idea of enzymes as "**fermenters**" or catalysts activating reactions within cells.
_____
>[!example]+ RELATED TERMS to [[-ase]]
>
>| [[-ase]] | enzyme | - |
| [[amylase]] | YES |  digests starches  |
|[[protease]] | YES |  breaks down proteins |
| [[zym-]] | YES    | ferment, fermentation |
| [[lipase]]         |  NO      |     hydrolyzes fats (lipids)       |
>

_____
>[!tip]+ DERIVATIONS of [[-ase]]
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