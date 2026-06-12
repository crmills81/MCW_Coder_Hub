---
tags:
  - medterm
aliases:
  - Hepatitis
  - Liver inflammation
  - Hep
roots:
  - hepat-
  - -itis
forms:
  - prefix
  - suffix
  - noun
alphabet: H
definition:
  - Inflammation of the liver, typically caused by viral infections, autoimmune conditions, or toxic substances
---
>[!Note] DEFINITION of [[hepatitis]]
>The term **hepatitis** refers to the inflammation of the **liver** tissue. It can be acute (**sudden onset and potentially resolving**) or chronic (**lasting more than six months**). The most common causes are **hepatotropic viruses** (**Hepatitis A, B, C, D, and E**). Non-viral etiologies include severe alcohol abuse, certain medications, environmental toxins, and **[[autoimmune]]** processes. If left unmanaged, chronic hepatitis can lead to progressive liver damage, resulting in **fibrosis**, **cirrhosis**, and ultimately **hepatocellular carcinoma** **(liver cancer**).
_____
>[!info]+ ETYMOLOGY of [[hepatitis]]
>#greek
>
>|Component|Origin|Meaning|
>|---|---|---|
>|**[[hepat-]]**|Greek _hēpat-_, from _hēpar_ (ἧπαρ)|"**Liver**"|
>|**[[-itis]]**|Greek _-itis_ (-ιτις)|"**Inflammation**" or "**disease of**"|
>
> The roots combine directly to form the literal medical definition: "**inflammation of the liver.**" 
_____

> [!success]+ ### 🔀 ALIASES / ALTERNATE TERMS
> 
> - **Hep** _(common colloquial abbreviation)_
> - **Liver inflammation**
> - **Viral hepatitis** _(when specifically caused by a virus)_
> - **Toxic hepatitis** _(when caused by chemicals or drugs)_
> - **Autoimmune hepatitis (AIH)**
> 
_____

> [!danger]+ ### 🔗 RELATED TERMS
> 
> - **Hepatomegaly** — abnormal enlargement of the liver, a common clinical sign of hepatitis
> - **Cirrhosis** — late-stage scarring ([[fibrosis]]) of the liver, often a consequence of chronic hepatitis
> - **Steatohepatitis** — liver inflammation associated with fat accumulation (e.g., NASH, ASH)
> - **Hepatocellular carcinoma (HCC)** — primary liver cancer, a severe complication of long-term hepatitis
> - **[[Jaundice]]** — yellowing of the skin and sclera due to elevated bilirubin, a hallmark symptom of active **hepatitis**
> - **Cholecystitis** — inflammation of the gallbladder, often sharing similar right upper quadrant (**RUQ**) abdominal pain
> - **Hepatic [[encephalopathy]]** — decline in brain function that occurs as a result of severe liver disease (**often coded as hepatic coma**)
> 
_____


> [!example]+ #### CODING CORNER
> <br>
> 
> ### 🏥 ICD-10-CM CODES
> 
> #### **Viral Hepatitis A**
> 
> |Code|Description|
> |---|---|
> |[[B15.0]]|Hepatitis A with hepatic coma|
> |[[B15.9]]|Hepatitis A without hepatic coma|
> 
> #### **Viral Hepatitis B**
> 
> |Code|Description|
> |---|---|
> |[[B16.0]]|Acute hepatitis B with delta-agent with hepatic coma|
> |[[B16.1]]|Acute hepatitis B with delta-agent without hepatic coma|
> |[[B16.2]]|Acute hepatitis B without delta-agent with hepatic coma|
> |[[B16.9]]|Acute hepatitis B without delta-agent and without hepatic coma|
> |[[B18.0]]|Chronic viral hepatitis B with delta-agent|
> |[[B18.1]]|Chronic viral hepatitis B without delta-agent|
> 
> #### **Viral Hepatitis C**
> 
> |Code|Description|
> |---|---|
> |[[B17.10]]|Acute hepatitis C without hepatic coma|
> |[[B17.11]]|Acute hepatitis C with hepatic coma|
> |[[B18.2]]|Chronic viral hepatitis C|
> 
> #### **Other & Non-Viral Hepatitis**
> 
> |Code|Description|
> |---|---|
> |[[K71.6]]|Toxic liver disease with hepatitis, not elsewhere classified|
> |[[K73.2]]|Chronic active hepatitis, not elsewhere classified|
> |[[K73.9]]|Chronic hepatitis, unspecified|
> |[[K75.4]]|Autoimmune hepatitis|
> 
> ---
> 
> ### 🔧 COMMON CPT CODES (Hepatitis-Related Labs & Procedures)
> 
> |CPT Code|Description|
> |---|---|
> |**[[80074]]**|Acute hepatitis panel|
> |**[[86803]]**|Hepatitis C antibody|
> |**[[87340]]**|Infectious agent antigen detection by immunoassay, qualitative or semiquantitative; hepatitis B surface antigen (HBsAg)|
> |**[[47000]]**|Biopsy of liver, needle; [[percutaneous]]|
> |**[[76705]]**|Ultrasound, abdominal, real time with image documentation; limited (e.g., single organ, quadrant, follow-up)|
> 
> ---
> 
> > ⚠️ **Coding Note:** For inpatient coding, the presence of **"hepatic coma"** with acute viral hepatitis significantly increases the severity of illness and often drives a **Major Complication or Comorbidity (MCC)**. Always verify the exact etiology (**viral vs. toxic vs. autoimmune**) and acuity (**acute vs. chronic**). Do not use active infection codes for patients who are asymptomatic carriers; instead, utilize Z codes such as [[Z22.51]] (**Carrier of viral hepatitis B**) or [[Z22.52]] (**Carrier of viral hepatitis C**).
> 
_____
>[!tip]- DERIVATIONS of [[hepatitis]]
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