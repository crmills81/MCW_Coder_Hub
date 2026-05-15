---
tags:
  - medterm
  - medroot
aliases:
  - Dacryoadenitis
roots:
  - dacryoadenitis
  - dacry-
  - dacryo-
  - -denitis
  - -nitis
  - -itis
forms:
  - prefix
  - suffix
  - combining
  - disease
alphabet: D
definition: inflammation of the lacrimal gland
---
>[!Note] DEFINITION of [[dacryoadenitis]]
>**Dacryoadenitis** involves **swelling and irritation** of the almond-sized lacrimal glands, which produce tears for the eye's aqueous layer; it disrupts tear production and causes orbital discomfort, potentially leading to [[fibrosis]] in chronic cases. 
_____
>[!info]+ ETYMOLOGY of [[dacryoadenitis]]
>#greek
>**Dacryoadenitis** breaks down as [[dacry/o-]] (tear, from Greek δάκρυ, _dákry_, tear) + [[aden/o-]] (**gland**, from Greek ἀδήν, _adḗn_, acorn/gland) + [[-itis]] (*inflammation, from Greek* -ῖτις, _-îtis_, **pertaining to diseas**e).

-----
>[!warnning] CAUSES
>- **Acute**: Viral (**e.g., mumps, EBV, adenovirus**), bacterial (**e.g., Staphylococcus, gonococcus**), or rarely fungal.
>- **Chronic**: Autoimmune (*e.g., Sjögren's, [[sarcoidosis]], thyroid eye disease*), idiopathic, or infiltrative (e.g., [[lymphoma]]).
>- **Symptoms**
>- Common signs include upper eyelid swelling (**often S-shaped**), pain/tenderness in the **superotemporal** orbit, redness, excess tearing or discharge, and preauricular lymph node swelling; **severe cases may cause proptosis or vision distortion**.
_____
>[!tip]- DERIVATIONS of [[dacryoadenitis]]
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