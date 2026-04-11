---
tags:
  - medterm
  - medroot
  - digestive_system
aliases:
  - hyperchlorhydria
  - achylia
roots:
  - a-
  - chlor-
  - hydr-
  - -ia
forms:
  - adjective
"alphabet:": A
"definition:": Absence of HCl in stomach
---

>[!note] Definition of [[achlorhydria]]
>[[a-]][[chlor-]][[hydr-]][[-ia]] - Absence of HCl in stomach (**condition of lacking {green water}**); **Achlorhydria** is a pathophysiological condition in which the parietal cells of the stomach fail to produce and secrete hydrochloric acid (HCl). Gastric acid is essential for activating pepsinogen into pepsin (**to digest proteins**), killing ingested pathogens, and facilitating the absorption of vital micronutrients such as Vitamin B12, iron, and calcium. **Achlorhydria** is most frequently seen in the end stages of chronic autoimmune atrophic gastritis, chronic _Helicobacter pylori_ **infections, pellagra, pernicious anemia, or as a consequence of prior gastric bypass/resection surgeries and chronic proton pump inhibitor (PPI) therapy**.
_____
>[!info]+ ETYMOLOGY of [[abscess]]
>- **[[a-]]**: Greek prefix meaning "**without**" or "**absence of**".
>    
>- **[[chlor/o-]]**: Greek _chloros_ meaning "**green**" (used chemically to denote _chlorine_).
>    
>- **[[hydr/o-]]**: Greek _hydor_ meaning "**water**" (used chemically to denote _hydrogen_).
>    
>- **[[-ia]]**: Suffix meaning "**condition of**".
>    
>- **Literal Meaning**: "Condition without hydrochloric acid."
>
_____


> [!example]+ **Coding & Documentation Nuances**
> **ICD-10-CM Application**: Achlorhydria is classified under the Digestive System chapter. The specific code is[[ K31.83]] (**Achlorhydria**).
> 
> **Sequencing & Etiology Rules**: According to ICD-10-CM guidelines, if the achlorhydria is a manifestation of an underlying disease (**such as autoimmune atrophic gastritis or pernicious anemia**), the underlying condition should often be coded as well to provide a complete clinical picture.
> 
> **Surgical Impact (ICD-10-PCS/CPT**): While achlorhydria itself is a diagnosis, it may justify the medical necessity for diagnostic procedures like [[esophagogastroduodenoscopy]] (EGD) with biopsy (CPT [[43239]]) or gastric pH monitoring.
> 
> **<u>Clinical Indicators</u>**
> To support the coding of achlorhydria, a medical coder should look for the following in the clinical documentation:
> 
> **Gastric pH testing**: Documentation of a fasting gastric pH consistently > 4.0 or > 5.0 (normal is 1.5 to 3.5).
> 
> **Endoscopy (EGD) with biopsy**: Pathology reports indicating severe gastric atrophy or destruction of parietal cells.
> 
> **Laboratory findings**: Elevated serum gastrin levels ([[hypergastrinemia]]), positive anti-parietal cell antibodies, or positive intrinsic factor antibodies.
> 
> **Associated clinical diagnoses**: Unexplained iron deficiency anemia, macrocytic anemia, or pernicious anemia.
> 
> <u>**Related Terms & Differentials**</u>
> **[[Hypochlorhydria]]**: A deficiency or abnormally low level of hydrochloric acid in the stomach, differing from achlorhydria which is a complete absence.
> 
> **[[Hyperchlorhydria]]**: An excess of stomach acid, often leading to peptic ulcer disease or seen in conditions like Zollinger-Ellison syndrome (the clinical opposite of achlorhydria).
> 
> **Pernicious Anemia**: An autoimmune condition that prevents the formation of intrinsic factor (necessary for Vitamin B12 absorption). It is a classic clinical consequence of the parietal cell destruction that causes achlorhydria.
> 
> **Atrophic Gastritis**: Chronic inflammation of the stomach lining causing the thinning of the gastric mucosa and the loss of gastric glandular cells, directly leading to achlorhydria.
> 
> **Gastroparesis**: Delayed gastric emptying. While it can co-occur with achlorhydria due to poor digestion, it specifically refers to the motility of the stomach rather than its chemical secretions.


_____
>[!tip]- DERIVATIONS of [[achlorhydria]]
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
>WHERE file.name != this.file.name
>AND any(contains(this.definition, definition))
>```

[[Med roots]]
[[Appendix A Prefixes]]
[[Appendix B Combining Forms]]
[[Appendix C Suffixes]]
[[Appendix D Suffix forms]]

