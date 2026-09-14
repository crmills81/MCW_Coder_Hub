---
tags:
  - medterm
  - word-element
  - combining-form
  - suffix
  - general-medicine
roots:
  - -cy
  - -tia
  - -cia
forms:
  - combining form (bound morpheme)
alphabet: C
definition: A noun-forming suffix meaning "state, condition, quality, or degree of," typically attached to adjectives ending in -t, -te, or -nt.
---

>[!Note] DEFINITION of [[-cy]]
>**-cy** is an English noun-forming suffix, ultimately from Latin _-tia_/_-cia_, used to convert an adjective — most often one ending in _-t_, _-te_, or _-tic_ — into an abstract noun naming the state, condition, quality, or degree of that adjective. In medical usage it appears in some of the most frequently charted descriptors of clinical status: **[[pregnancy]]** (state of being pregnant), **malignancy** (state of being malignant), **latency** (state of being latent, as in a dormant infection), **patency** (state of being open or unobstructed, as of a vessel or airway), **potency** (strength or effectiveness of a medication), and **deficiency** (state of lacking a substance, as with a nutrient or clotting factor). It functions purely as a grammatical, nominalizing suffix rather than a root carrying independent clinical meaning, so its clinical weight always comes from the adjective it attaches to — "malignant" versus "malignancy," "latent" versus "latency." It is easily confused with the unrelated suffix **-cracy** (Greek _kratos_, "rule, power," as in "democracy"), and with process-forming endings like **-sis** (e.g., "necrosis"), which name an ongoing process rather than a static state or quality.

_____

>[!info]+ ETYMOLOGY of [[-cy]]
>#latin
>
>|Component|Origin|Meaning|
>|---|---|---|
>|**[[-cy]]**|Latin _-tia_, _-cia_ (via Old French _-cie_)|"**state of**," "**quality of**," "**condition of**" — abstract-noun-forming suffix|
>
> The suffix entered Middle English through Old French borrowings of Latin abstract nouns ending in _-tia_/_-cia_ — words such as "clemency" (from _clementia_) and "constancy" (from _constantia_) arrived as whole units in the 14th–15th centuries. English speakers then extended the pattern productively, attaching _-cy_ directly to native and semi-native adjectives ending in _-t_/_-te_/_-nt_ to coin new abstract nouns without needing a matching Latin original — this is how "malignancy" was built from "malignant" and "pregnancy" from "pregnant." The suffix remains one of the most productive noun-forming endings attached to Latinate adjectives in clinical English: ***pregnancy***, ***latency***, ***potency***, ***patency***, ***malignancy***, ***efficacy***, ***deficiency***, ***consistency***, ***urgency***, ***frequency***, and ***adequacy*** all follow the same pattern of adjective-plus-_-cy_.

_____

> [!danger]+ 🔗 RELATED TERMS
> 
> - **pregnancy** — the state of carrying a developing fetus; a normal, uncomplicated pregnancy encounter is coded under **[[Z34.90]]**, while incidental pregnant status noted during unrelated care is coded **[[Z33.1]]**
> - **latency** — a dormant or inactive phase of a disease process; the clinically coded example is latent tuberculosis infection, coded **[[Z22.7]]**
> - **patency** — the state of being open or unobstructed, as of a vessel, duct, or airway; patency itself isn't coded — its loss (e.g., occlusion, stenosis) is the diagnosis actually captured
> - **urinary urgency** — a sudden, compelling need to urinate; coded **[[R39.15]]**
> - **urinary frequency** — abnormally frequent urination; coded **[[R35.0]]**
> - **deficiency** — a nonspecific state of lacking a substance; the specific deficiency is what's coded, e.g., vitamin D deficiency at **[[E55.9]]**
> - **malignancy** — general term for a cancerous process; not independently billable, since the specific primary-site neoplasm code (e.g., a lung primary at C34.90-range) is what's actually reported
> - **[[-cracy]]** — an unrelated Greek-derived suffix ("rule, power") frequently confused with *-cy* by surface resemblance only

_____

>[!tip]- DERIVATIONS of [[-cy]]
>```dataview
>TABLE definition AS Definition
>FROM #medterm 
>WHERE length(filter(roots, (word) => econtains([[-cy]].roots, word))) > 0 AND file.name != [[-cy]].file.name
>SORT file.name ASC
>```

_____

>[!faq]- Query functionality
>```dataview
>TABLE definition AS Definition
>FROM #medterm 
>WHERE length(filter(definition, (word) => econtains([[-cy]].definition, word))) > 0 AND file.name != [[-cy]].file.name
>```

<br>

[[Med terms dictionary]]
[[Appendix A Prefixes]]
[[Appendix B Combining Forms]]
[[Appendix C Suffixes]]
[[Appendix D Suffix forms]]