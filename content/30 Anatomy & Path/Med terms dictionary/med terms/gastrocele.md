---
tags:
  - medterm
  - medroot
aliases: [gastric hernia]
roots:
  - gastr-
  - -cel-
  - -e
forms:
  - noun
  - combining
"alphabet:": G
"definition:": Stomach hernia
---
>[!note]+ Definition of [[gastrocele]]
>[[gastr-]]o[[-cel-]][[-e]] - **Stomach hernia**; A **gastrocele** is a [[herniation]] involving the stomach. In clinical practice, this almost universally refers to a hiatal hernia, where a portion of the stomach bulges upward through the [[esophageal]] hiatus (**the opening in the diaphragm**) and into the thoracic cavity. This displacement compromises the lower esophageal sphincter (LES), frequently leading to severe [[gastroesophageal]] reflux disease (**GERD**). Less commonly, a **gastrocele** can describe a ventral or incisional hernia where the stomach protrudes through a defect in the anterior abdominal wall. Depending on the severity, a **gastrocele** can range from asymptomatic to causing strangulation, [[ischemia]], or complete gastric outlet obstruction.
___
>[!info]+ Etymology of [[gastrocele]]
>#greek
>The term is constructed from two distinct Greek elements joined by a combining vowel:
>
>- **[[gastr-]] (γαστήρ):** Root meaning "**stomach**" or "**belly**."
>    
>- **[[-o-]]:** Combining vowel used in medical terminology.
>    
>- **[[-cele]] (κήλη):** Suffix meaning "**hernia**," "**tumor**," or "**swelling**."
>    
>- **Literal Meaning:** "Stomach hernia."
>
_____


> [!example]+ **Coding & Documentation Nuances**
> 
> - **ICD-10-CM Specificity:** A gastrocele typically maps to category **K44.-** (Diaphragmatic hernia) or **K43.-** (**Ventral hernia**), depending on the anatomical site of the defect. Coders must scrutinize the documentation for two critical complications to assign the 4th character:
>     
>     - **With Obstruction (e.g., [[K44.0]]):** Look for terms like "**incarcerated**," "**irreducible**," or "causing bowel/gastric obstruction."
>         
>     - **With Gangrene (e.g., [[K44.1]]):** Look for terms like "strangulated," "ischemic," or "necrotic."
>         
>     - **Without either (e.g., [[K44.9]]):** The default for an uncomplicated hernia.
>         
> - **CPT (Current Procedural Terminology):** Surgical repair coding relies heavily on the surgical approach (open vs. laparoscopic) and concurrent procedures. For instance, a laparoscopic repair of a paraesophageal hernia often includes [[fundoplication]] and is coded as **[[43281]]** (or **[[43282]]** if mesh is implanted).
>     ****
> - **ICD-10-PCS Root Operations:** * The primary objective of the surgery is usually to move the stomach back to its normal anatomical position in the abdomen, mapping to the root operation **Reposition** (Moving to its normal location or other suitable location all or a portion of a body part).
>     
>     - If the diaphragmatic defect is sutured closed, it is a **Repair**.
>         
>     - If a biological or synthetic mesh is used to reinforce the hiatus or abdominal wall, the root operation is **Supplement**.
>         
> 
> ### Clinical Indicators
> 
> To support the diagnosis of a gastrocele and accurately code the surgical intervention, look for the following in the clinical record:
> 
> 1. **Diagnostic Imaging/Endoscopy:** [[esophagogastroduodenoscopy]] (EGD) reports noting "Z-line displacement," "gastric folds seen above the diaphragm," or a Barium Swallow study confirming a "sliding" or "[[paraesophageal]]" hernia.
>     
> 2. **Surgical Documentation:** Operative notes detailing the "[[reduction]] of the stomach into the [[peritoneal]] cavity," "crural closure," or "Nissen/Toupet fundoplication."
>     
> 3. **Patient Symptoms:** Chief complaints of intractable heartburn, [[regurgitation]], [[dysphagia]] (difficulty swallowing), or postprandial chest pain.
>     
> 
> ### Related Terms & Differentials
> 
> - **Hiatal Hernia:** The specific anatomical diagnosis for the vast majority of gastroceles, denoting herniation through the [[esophageal]] hiatus.
>     
> - **Enterocele:** [[Herniation]] of the _small intestine_, distinguishing it from a gastric (stomach) protrusion.
>     
> - **[[Gastroptosis]]:** An abnormal downward displacement or "sagging" of the stomach within the abdominal cavity, but _without_ protrusion through a defect (not a hernia).
>     
> - **[[Gastromegaly]]:** Enlargement of the stomach due to dilation or [[hypertrophy]], without herniation.
>     
> - **Diaphragmatic Hernia:** The broader anatomical category of hernias through the diaphragm, which includes gastroceles but could also involve other organs like the colon or spleen.
>     
> - **GERD (Gastroesophageal Reflux Disease):** A physiological condition (acid reflux) that is frequently _caused_ by a gastrocele, but the terms are not synonymous; one is a functional disorder, the other is an anatomical defect.
> 

_____
>[!tip]- DERIVATIONS of [[gastrocele]]
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