---
tags:
  - medterm
  - medroot
  - otolaryngology
aliases:
  - ENT
roots:
  - Otolaryngology
  - oto-
  - laryngo-
  - -logy
forms:
  - prefix
  - suffix
  - combining
  - compound suffix form
  - diminutive
alphabet: O
definition:
  - medicine focused on the ear
  - nose
  - throat
  - and related head and neck structures
---
>[!Note] DEFINITION of [[Otolaryngology]]
>**Otolaryngology** (**often called ENT or otolaryngology-head and neck surgery**) is a surgical specialty that manages medical and operative treatment of conditions involving hearing and balance, nasal and sinus function, the oral cavity, pharynx, larynx/voice, salivary glands, thyroid, parathyroid, and head and neck tumors, including reconstructive and facial plastic procedures. ENTs typically split time between clinic and OR, doing everything from ear tubes and tonsillectomies to **endoscopic sinus surgery, thyroidectomy, and complex head and neck cancer resections with reconstruction.**  For coding brain: this is your home for **tonsillectomy, adenoidectomy, FESS, septoplasty, tympanostomy, mastoid, cochlear implants, laryngoscopy, thyroid/parathyroid, and a lot of neck dissections**.
_____
> [!todo]+ ETYMOLOGY of [[Otolaryngology]]
> 
> #greek - Otolaryngology comes from Greek roots, via Neo-Latin medical formation.
> 
> |Piece|Root form|Origin & literal meaning | What it contributes|
> |---|---|---|---|
> |**[[oto-]]**|ot(o)-|Greek οὖς, gen. ὠτός (_ous, ōt-_): **ear**|Ear, hearing|
> |**[[laryngo-]]**|laryng(o)-|Greek λάρυγξ (_larynx_): larynx/voice box|Voice box, upper airway|
> |**[[-logy]]**|-logia → -logy|Greek -λογία (_logia_), from λόγος (_logos_): study, discourse|Study or science of|
> 
> So **otolaryngology** literally = **“the study of the ear and larynx”**, and in practice has expanded to cover the whole **ear-nose-throat-head-neck** region.
> 
> The longer classical term you’ll also see is **otorhinolaryngology**: oto- (**ear**) + [[rhino-]] (nose) + laryngo- (larynx) + [[-logy]] (**study**).
_____

> [!question]+ Related Terms & Subspecialties
> Common related terms you’ll bump into in notes, consults, and op reports:
> 
> - **Otorhinolaryngology** - formal full term for ENT, highlighting ear, nose, and larynx.
>     
> - **ENT** - everyday abbreviation for ear, nose, and throat; often used interchangeably with otolaryngology.
>     
> - **Otologist / Neurotologist** - focuses on ear, hearing, balance, temporal bone, cochlear implants.
>     
> - **Laryngologist** - focuses on voice, airway, and swallowing disorders within the larynx and upper aerodigestive tract.
>     
> - **Head and neck surgeon** - oncologic and reconstructive surgery of head/neck, including thyroid and parotid, usually under the otolaryngology umbrella.
>     
> - **Rhinologist** - subspecialist focused on nose and sinus disease (e.g., chronic rhinosinusitis, FESS).
>     
> - **Sleep surgeon (within ENT)** - treats sleep-disordered breathing and obstructive sleep apnea surgically.​


_____
>[!tip]- DERIVATIONS of [[Otolaryngology]]
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