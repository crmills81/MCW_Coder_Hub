---
tags: [medterm]
aliases: 
  - Dyslipidemia
  - dyslipidemia
  - Hyperlipidemia
  - high cholesterol
  - hyperlipoproteinemia
  - hypercholesterolemia
roots: 
  - hyper-
  - -lip-
  - -lipo-
  - -emia
forms: [prefix, suffix, noun]
alphabet: H
definition: [abnormally high levels of lipids in the blood.]

---
>[!Note] DEFINITION of [[hyperlipidemia]]
> **Hyperlipidemia** is an umbrella term for a group of acquired or genetic disorders characterized by elevated concentrations of **lipids** and/or **lipoproteins** — including **LDL cholesterol, total cholesterol, triglycerides, and phospholipids** — circulating in the bloodstream. It represents a subset of the broader category [[dyslipidemia]] and a superset of **hypercholesterolemia**. Because lipids do not dissolve in blood, excess amounts can deposit in arterial walls, driving [[atherosclerosis]] and significantly increasing the risk of **heart attack, [[stroke]], and peripheral artery disease**. **Hyperlipidemia** is usually chronic and most patients require ongoing pharmacologic management combined with lifestyle modification.
_____
>[!info]+ ETYMOLOGY of [[hyperlipidemia]]
>#greek
>
>|Component | Origin| Meaning|
>|---|---|---|
>|**[[hyper-]]**|Greek _ὑπέρ (hypér)_|Over, above, excessive|
>|**[[lip(o)-]]**|Greek _λίπος (lípos)_|Fat|
>|**[[-emia]]**|Greek _αἷμα (haîma)_|Blood|
>
>**Literally**: _"excessive fat in the blood."_ The combining form _[[lipo-]]_ is the same root seen in **liposuction**, **lipoma**, and **lipoprotein**.
>
_____

> [!success]+ ## Aliases & Related Terms
> 
> - **Hyperlipidaemia** — British/Commonwealth spelling
>     
> - **Hyperlipoproteinemia** — emphasizes the lipoprotein carrier elevation, not just the lipid itself
>     
> - **High cholesterol** — lay/patient-facing term, technically refers to hypercholesterolemia specifically
>     
> - **[[Dyslipidemia]]** — broader umbrella; includes both high _and_ low abnormal lipid levels
>     
> - **[[Hypercholesterolemia]]** — elevated cholesterol specifically; a subset of hyperlipidemia
>     
> - **[[Hypertriglyceridemia]]** — elevated triglycerides specifically
>     
> - **Combined hyperlipidemia** — elevated both LDL and triglycerides with decreased HDL; the most common inherited lipid disorder
>     
> - **Familial hypercholesterolemia (FH)** — genetic form caused by LDL receptor mutations
>     
> - **Fredrickson classification** — phenotypic typing system (Types I–V) used to categorize hyperlipoproteinemias
>     

_______


> [!example]+ #### CODING CORNER
> ## ICD-10-CM Codes
> 
> All **hyperlipidemia** codes live in category **E78 – Disorders of lipoprotein metabolism and other lipidemias**. Note: E78 codes are complete as listed (**no 7th character required for metabolic disorder codes**).
> 
> |ICD-10-CM Code|Description|
> |---|---|
> |**[[E78.00]]**|Pure hypercholesterolemia, unspecified  |
> |**[[E78.01]]**|Familial hypercholesterolemia  |
> |**[[E78.1]]**|Pure hypertriglyceridemia  |
> |**[[E78.2]]**|Mixed hyperlipidemia  |
> |**[[E78.5]]**|Hyperlipidemia, unspecified _(your most-used workhorse code!)_  |
> |**[[Z13.220]]**|Encounter for screening for lipoid disorders (lipid panel screening)  |
> 
> > 🩺 **Coder tip (inpatient profee hat on!):** Per UHDDS guidelines, hyperlipidemia should be coded as a secondary/comorbid diagnosis when it is managed or affects patient care during the encounter. Always assign the most specific E78 subcategory supported by documentation — don't default to [[E78.5]] if the provider documented "familial hypercholesterolemia" or "hypertriglyceridemia." Query if needed!
> 
> ---
> 
> ## CPT Codes
> 
> These are the most commonly associated CPT codes for diagnosis and monitoring:
> 
> |CPT Code|Description|
> |---|---|
> 
> |CPT Code|Description|
> |---|---|
> |**[[80061]]**|Lipid panel (total cholesterol, HDL, triglycerides — the big 3)|
> |**[[82465]]**|Cholesterol, serum, total|
> |**[[83718]]**|Lipoprotein, direct measurement; HDL cholesterol|
> |**[[83721]]**|Lipoprotein, direct measurement; LDL cholesterol|
> |**[[84478]]**|Triglycerides|
> |**[[99213]]–[[99215]]**|E/M office visit for ongoing hyperlipidemia management (level depends on MDM)|
> 
> Treatment pharmacologic agents relevant to coding documentation include statins (**first-line for LDL reduction**), fibrates (triglyceride-focused), PCSK9 inhibitors (reserved for resistant/familial cases), and omega-3 supplements.

_____
>[!tip]- DERIVATIONS of [[hyperlipidemia]]
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