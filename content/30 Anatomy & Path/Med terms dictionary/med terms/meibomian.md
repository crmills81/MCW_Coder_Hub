---
tags:
  - medterm
  - medroot
aliases:
  - meibum
roots:
  - meibomian
  - me-
  - -mian
  - -ian
forms:
  - prefix
  - suffix
  - combining
  - adjective
alphabet: M
definition:
  - of or relating to the meibomian glands
---
>[!Note] DEFINITION of [[meibomian]]
>The **meibomian glands** are large, modified holocrine [[sebaceous]] glands running vertically through the tarsal (**connective tissue**) plates of each eyelid — approximately 25 in the upper eyelid and 20 in the lower. They secrete **meibum**, a complex, lipid-rich oily substance (**distinct from ordinary sebum**) that forms the outermost lipid layer of the three-layered tear film. This lipid layer is critical: **it slows aqueous tear evaporation, prevents tear spillage onto the cheeks, seals the lids during sleep, and stabilizes the ocular surface.** When meibomian glands become blocked, atrophied, or otherwise dysfunctional, the resulting tear film instability is recognized as the most common cause of **dry eye disease** globally. Complications of untreated meibomian gland disease include chronic dry eye, evaporative dry eye, posterior [[blepharitis]], [[30 Anatomy & Path/Med terms dictionary/med terms/chalazion]] formation, corneal [[keratitis]], and even ulceration. **Secretion**: Meibum; The glands' product, meibum (a term coined by Nicolaides et al. in 1981), is biochemically distinct from ordinary sebum, containing complex wax esters, cholesterol esters, and other lipids. Its consistency is clear and oily in healthy glands, becoming thick, cloudy, and yellowish in dysfunction.
_____
>[!info]+ ETYMOLOGY of [[meibomian]]
>#latin Unlike most medical terms, **meibomian** is eponymous — named after Heinrich Meibom (1638-1700), a German physician and professor at the University of Helmstedt, who first dissected and described the glands in detail in his 1666 treatise De Vasis *Palpebrarum Novis Epistola* ("**A New Letter on the Vessels of the Eyelids**"). Notably, Meibom himself did not name the glands after himself; he called them glandulae tarsales ("**tarsal glands**"). Later anatomists honored him by applying his name to them. 
>The suffix [[-ian]] is a Latin-derived adjectival ending meaning "**of, belonging to, or relating to a person or place**."
>**Tarsal glands** (**glandulae tarsales**) — Meibom's own preferred term, from Latin tarsus ("**flat of the foot/ankle**"; in anatomy, the cartilaginous eyelid plate) 
>**Palpebral glands** — from Latin palpebra ("**eyelid**") 
>**Tarsoconjunctival glands** — referring to their location spanning tarsal plate and conjunctiva 
>**Components**: Proper noun Meibom (*Heinrich Meibom, 1638-1700*) + [[-ian]] (adjectival suffix, "**pertaining to**")

_____


> [!warning] RELATED TERMS
> | Term | Meaning |
> |---|---|
> | **MGD** (**Meibomian Gland Dysfunction**) | Chronic [[obstruction]]/dysfunction of meibomian glands; the most common cause of dry eye  |
> | **Meibomitis / Meibomianitis** | Inflammation of the meibomian glands; alias for MGD  |
> | **Chalazion / Meibomian cyst** | [[Granuloma]] from a blocked meibomian gland duct; presents as a firm, painless lid lump |
> | **Posterior blepharitis** | Eyelid margin inflammation specifically involving the meibomian gland orifices  |
> | **Meibography** | Imaging technique (**infrared**) to visualize meibomian gland structure and detect dropout  |
> | **Meibocyte** | Individual secretory cell within a meibomian gland acinus  |
> | **Meibogenesis** | The biochemical process by which meibocytes produce meibum |
> | **Evaporative dry eye (EDE)** | Most common form of dry eye, primarily driven by MGD-related **meibum deficiency**  |
> | **Tarsal plate** | The fibrous connective tissue plate housing the meibomian glands |
> | **Gland of Zeis** | A smaller [[sebaceous]] gland of the eyelid, associated with eyelash follicles — a close neighbor of meibomian glands |
> | **Moll's gland** | Apocrine sweat gland of the eyelid margin, another adnexal eyelid gland  |

_____
>[!tip]- DERIVATIONS of [[meibomian]]
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