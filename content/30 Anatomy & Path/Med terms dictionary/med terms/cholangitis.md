---
tags:
  - medterm
  - medroot
aliases:
  - biliary tract infection
roots:
  - chol-
  - angi-
  - -itis
forms:
  - noun
  - combining
"alphabet:": C
"definition:": inflammation of hepatic ducts or cystic duct
---
>[!note]+ Definition of [[cholangitis]]
>[[chol-]][[angi-]][[-itis]] - inflammation of hepatic bile ducts or cystic bile duct (i**nflammation of bile duct**); **Cholangitis** is a potentially life-threatening clinical syndrome characterized by inflammation and infection of the bile ducts. The most common form, **acute ascending cholangitis**, occurs when an obstruction (**such as a [[gallstone]], stricture, or tumor**) causes bile to become stagnant, leading to a rapid multiplication of bacteria (**typically _E. coli_, _Klebsiella_, or _Enterococcus_**) that then ascend from the [[duodenum]] into the biliary tree. If left untreated, the increased intraluminal pressure can push bacteria into the systemic circulation, leading to sepsis and multi-organ failure.
___
>[!info]+ Etymology of [[cholangitis]]
>#greek 
>The term is a composite of three **Greek** elements:
>
>- **chol- (χολή):** Root meaning "**bile**" or "**gall**."
>    
>- **angi- (ἀγγεῖον):** Root meaning "**vessel**" or "**duct**."
>    
>- **-itis (-ῖτις):** Suffix denoting "inflammation."
>    
>- **Literal Meaning:** "Inflammation of the bile vessel."
_____


> [!example]+ **Coding & Documentation Nuances**
> 
> - **ICD-10-CM:** The primary code is **[[K83.01]]** ([[Cholangitis]]). However, it is a "code first" condition if associated with certain underlying causes. If the patient has calculus of the bile duct with cholangitis, the coder must use category **K80.3-**.
>     
> - **Sepsis Sequencing:** If the patient presents with s[[ystemic inflammatory response syndrome (**SIRS**)]] due to cholangitis, **[[A41.9]]** ([[Sepsis]], unspecified organism) may be the principal diagnosis, followed by K83.01 as the localized infection, depending on the circumstances of admission.
>     
> - **ICD-10-PCS Root Operations:** * If a stent is placed to relieve obstruction: **[[Insertion]]** (Putting in a non-biological appliance).
>     
>     - If a stone is removed via ERCP: **[[Extirpation]]** (Taking or cutting out solid matter from a body part).
>         
>     - If a stricture is widened: **[[Dilation]]** (Expanding an orifice or the lumen of a tubular body part).
>         
> 
> ### Clinical Indicators
> 
> Coders should monitor the documentation for **Charcot’s Triad** or **Reynold’s Pentad** to support the severity of the diagnosis:
> 
> 1. **Charcot’s Triad:** Fever/Chills, [[Jaundice]], and Right Upper Quadrant (RUQ) abdominal pain.
>     
> 2. **Reynold’s Pentad:** Charcot’s Triad plus Hypotension (shock) and Altered Mental Status (indicating severe sepsis).
>     
> 3. **Laboratory Data:** Elevated total bilirubin, alkaline phosphatase (ALP), and [[leukocytosis]].
>     
> 4. **Imaging:** Ultrasound or MRCP showing "biliary tree dilation" or "[[choledocholithiasis]]."
>     
> 
> ### Related Terms & Differentials
> 
> - **[[Choledocholithiasis]]:** The presence of a gallstone in the common bile duct; this is often the _cause_ of cholangitis but not the infection itself.
>     
> - **[[Cholecystitis]]:** Inflammation of the _gallbladder_ (usually due to a stone in the cystic duct), rather than the bile ducts.
>     
> - **Primary Sclerosing Cholangitis (PSC):** A chronic, [[autoimmune]]-mediated inflammation and scarring of the bile ducts, distinct from acute bacterial ascending cholangitis.
>     
> - **[[Cholangiography]]:** A diagnostic imaging procedure (like ERCP or PTC) used to visualize the bile ducts.
>     
> - **Biliary Atresia:** A congenital condition where the bile ducts are abnormally narrow, blocked, or absent.
>
_____
>[!tip]- DERIVATIONS of [[cholangitis]]
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

