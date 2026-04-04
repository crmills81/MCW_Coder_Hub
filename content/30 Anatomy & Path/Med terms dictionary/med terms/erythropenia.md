---
tags:
  - medterm
  - medroot
aliases:
  - erythrocytopenia
roots:
  - erythr-
  - pen-
  - -ia
forms:
  - noun
  - combining
"alphabet:": E
"definition:": decreased erythrocyte volume due to decreased hematocrit
---
>[!note]+ Definition of [[erythropenia]]
>[[erythr-]]o-[[pen-]][[-ia]] - decreased erythrocyte volume due to decreased hematocrit (**condition of red blood cell deficiency**); **Erythropenia** (**also called [[erythrocytopenia]]**) is a quantifiable decrease in the number of erythrocytes (**red blood cells**) circulating in the peripheral blood. Because erythrocytes are responsible for carrying hemoglobin—the protein that binds and transports oxygen to tissues—a significant reduction in their numbers directly compromises tissue oxygenation, leading to [[hypoxia]]. Clinically, [[erythropenia]] is the core physiological mechanism behind **[[anemia]]**. The condition generally stems from one of three primary pathophysiological categories: decreased RBC production in the bone marrow (**e.g., due to nutritional deficiencies or aplastic conditions**), increased RBC destruction ([[hemolysis]]), or direct physical loss ([[hemorrhage]]).
___
>[!info]+ Etymology of [[erythropenia]]
>#greek 
>The term is constructed from two distinct Greek elements combined with a vowel:
>
>- **[[erythr-]] (ἐρυθρός):** Root meaning "**red**."
>    
>- **[[-o-]]:** Combining vowel used to link anatomical roots.
>    
>- **[[-penia]] (πενία):** Suffix meaning "**poverty**," "**deficiency**," or "**decrease**."
>    
>- **Literal Meaning:** "Deficiency of red (**blood cells**)."
_____


> [!example]+ **Coding & Documentation Nuances**
> 
> - **ICD-10-CM:** While "**erythropenia**" is a valid clinical finding, coders rarely use a specific code just for the word itself; it maps directly to **Anemia, unspecified (D64.9)**. The coder's goal is to query or search the documentation for the _cause_ of the erythropenia to assign a more specific code (e.g., **[[D50.9]]** for Iron deficiency anemia, **[[D62]]** for Acute posthemorrhagic anemia, or **[[D61.9]]** for Aplastic anemia).
>     
> - **Combination Codes:** If the erythropenia is caused by chemotherapy or other antineoplastic drugs, coders must assign the specific code for the adverse effect, often leading to **[[D64.81]]** (Anemia due to antineoplastic chemotherapy).
>     
> - **ICD-10-PCS Root Operations:** When severe erythropenia is treated via the administration of Packed Red Blood Cells (PRBCs), the relevant PCS root operation is **Transfusion** (Putting in blood or blood products). A common code for this is **30233N1** (Transfusion of Nonautologous Red Blood Cells into Peripheral Vein, [[Percutaneous]] Approach).
>     
> 
> ### Clinical Indicators
> 
> To support a diagnosis related to erythropenia ([[anemia]]) and any associated medical decision-making (MDM) complexity, coders should look for:
> 
> 1. **Laboratory Values:** A Complete Blood Count (CBC) revealing an RBC count below the standard reference range (typically < 4.3 million/mcL for men and < 3.9 million/mcL for women), often accompanied by low Hemoglobin (Hgb) and Hematocrit (Hct) levels.
>     
> 2. **Physical Exam Findings:** Documentation of pallor (pale skin/[[conjunctiva]]), tachycardia (rapid heart rate compensating for low oxygen), or patient complaints of severe fatigue, weakness, and dyspnea on exertion.
>     
> 3. **Pharmacological/Surgical Interventions:** Orders for blood transfusions, prescription of Erythropoiesis-Stimulating Agents (ESAs) like epoetin alfa (Epogen/Procrit), or targeted supplementation (IV iron, B12 injections).
>     
> 
> ### Related Terms & Differentials
> 
> - **[[Anemia]]:** The broader clinical syndrome resulting from decreased oxygen-carrying capacity. Erythropenia is the literal quantitative shortage of cells that usually _causes_ anemia.
>     
> - **[[Erythrocytosis]] / [[Polycythemia]]:** The exact opposite of erythropenia; an abnormal _increase_ in the number of circulating red blood cells.
>     
> - **[[Leukopenia]]:** A deficiency in _white_ blood cells ([[leukocytes]]), impacting the immune system rather than oxygen transport.
>     
> - **[[Thrombocytopenia]]:** A deficiency in platelets ([[thrombocytes]]), leading to bleeding disorders and impaired coagulation.
>     
> - **[[pancytopenia]]:** A severe hematological state characterized by a concurrent deficiency in all three major cellular components of the blood (erythropenia + [[leukopenia]] + thrombocytopenia).

_____
>[!tip]- DERIVATIONS of [[erythropenia]]
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

