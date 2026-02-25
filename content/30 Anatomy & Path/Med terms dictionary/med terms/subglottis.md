---
tags:
  - medterm
  - medroot
  - otolaryngology
aliases:
  - glottis
roots:
  - subglottis
  - sub-
  - glott(o)-
  - -glottis
forms:
  - prefix
  - suffix
alphabet: S
definition:
  - the lowest anatomical region of the larynx
  - located just below the vocal cords
---
>[!Note] DEFINITION of [[subglottis]]
>This narrowest portion of the upper airway (**about 4.5-5.5 mm in infants**) is bounded superiorly by the vocal cords (**glottis**) and inferiorly by the first tracheal ring. It consists of [[mucosa]], [[submucosa]], and cartilage (**primarily cricoid**), aiding in humidifying and warming inhaled air. Pathologies like subglottic [[stenosis]] (**narrowing <4 mm in infants, often from intubation**) or subglottic cancer (**rare laryngeal malignancy**) can obstruct breathing, necessitating interventions like [[tracheotomy]] or dilation.
_____
>[!info]+ ETYMOLOGY of [[subglottis]]
>#greek From #latin [[sub-]] ("**under, below**") + **glottis** (from Greek γλῶττις glōttis, "**tongue**," later "**vocal cords**" or larynx opening, diminutive of γλῶττα glōtta, "**tongue**"). Thus, "**below the glottis**."

_____

>[!warning]+ RELATED TERMS
>**[[Supraglottis]]**: Upper larynx (**above vocal cords**).
>**[[Glottis]]**: Vocal folds and aperture.
>**Subglottic stenosis**: Narrowing, congenital or acquired.
>**[[Cricoid]]**: Inferior bounding cartilage.
>**[[Laryngocele]]**: Air sac, sometimes subglottic.
_____
>[!tip]- DERIVATIONS of [[subglottis]]
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