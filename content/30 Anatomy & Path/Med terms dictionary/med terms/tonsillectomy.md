---
tags:
  - medterm
aliases: []
roots:
  - ton-
  - -ectomy
  - -tomy
forms:
  - noun
"alphabet:": T
definition:
  - Removal of tonsils
---
>[!Note] DEFINITION of [[tonsillectomy]]
>Surgical excision of the palatine tonsils from the **tonsillar fossa**. This procedure involves complete or partial removal of the tonsils—lymphoid tissues at the back of the throat—to alleviate chronic infections, **[[peritonsillar]] abscesses**, or **airway obstruction from [[hypertrophy]]**. Performed endoscopically or traditionally with tools like a snare or electrocautery, it carries risks like postoperative hemorrhage (most common in the first 24 hours or days 5-10), pain, dehydration, and transient [[trismus]] from pharyngeal muscle spasm or inflammation; recovery usually spans 7-14 days with dietary management and analgesics.
_____
>[!info]+ ETYMOLOGY of [[tonsillectomy]]
>#latin *tonsillae* (almond) + Greek *ektome* (excision)
_____
>[!example]+ RELATED TERMS to [[tonsillectomy]]
>[[Adenoidectomy]]
>Pharyngitis
>[[Peritonsillar]]
_____
>[!tip]- DERIVATIONS of [[tonsillectomy]]
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