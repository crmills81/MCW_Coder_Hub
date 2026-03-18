---
tags:
  - medroot
aliases:
  - -one
roots:
  - -one
  - -on
  - -es
forms:
  - suffix
  - suffix form
  - suffixes
  - nouns
"alphabet:": O
definition:
  - Denotes the presence of a ketone functional group
---
>[!Note] DEFINITION of [[-ones]]
> The suffix **-one** (**pluralized as -ones**) is a chemical and pharmacological designation indicating a **ketone** group — a carbonyl (**C=O**) bonded to two carbon atoms within a molecular structure. In medicine, this suffix is most prominently found in the naming of **steroid-based compounds, including naturally occurring hormones and their synthetic analogs**. It signals that the molecule contains or is derived from a steroid backbone with a ketone moiety. Drugs ending in [[-one]] or [[-ones]] span a wide range of therapeutic classes: **corticosteroids, progestogens, androgens, opioid antagonists**, and more.
_____
> [!todo]+ ETYMOLOGY of [[-ones]]
> 
> #german **-one** From German Keton → French acétone → IUPAC chemical nomenclature Keton. Derived from French acide acétique (**acetic acid**). Introduced by August Wilhelm von Hofmann, 19th century organic chemist; Root meaning. Essentially "**ketone-bearing compound**"; later adopted into pharmaceutical naming conventions as a suffix signaling steroid/ketone structure
> 
_____

> [!success]+ POSSIBLE ALIASES / VARIANTS
> - **-one** _(singular form — the base suffix)_
> - **-onum** _(Latin pharmaceutical form)_
> - **-anone** _(variant in some ketone compound names)_
> - **-dione** _(indicates two ketone groups, e.g., prednisone metabolites)_
> - **-trione** _(three ketone groups)_
> - **-sone** _(a contracted variant common in corticosteroid names)_
>
_____

> [!example]+ RELATED TERMS to [[-ones]]
> 🔵 Corticosteroids
> 
> |Drug|Use|
> |---|---|
> |**Cortisone**|Anti-inflammatory, adrenal replacement|
> |**Prednisone**|Immunosuppression, inflammation|
> |**Prednisolone**|Ophthalmic & systemic inflammation|
> |**Triamcinolone**|ENT, ophthalmic, dermatologic injection|
> |**Budesonide**|Airway inflammation|
> |**Fluticasone**|Asthma, allergic rhinitis|
> 
> ### 🟢 Androgens / Sex Hormones
> 
> |Drug|Use|
> |---|---|
> |**Testosterone**|Androgen replacement|
> |**Progesterone**|Hormonal therapy|
> |**Aldosterone**|Mineralocorticoid (fluid/electrolyte balance)|
> 
> ### 🟡 Opioid Antagonists / Pain
> 
> |Drug|Use|
> |---|---|
> |**Naloxone**|Opioid reversal|
> |**Naltrexone**|Opioid/alcohol dependence|
> |**Methadone**|Opioid dependence, pain|
> |**Oxycodone**|Pain management|
> |**Hydrocodone**|Pain management|
> 
> ### 🟠 Other Notable -ones
> 
> |Drug|Use|
> |---|---|
> |**Amiodarone**|Cardiac arrhythmia|
> |**Ketamine**|Anesthesia (ketone-related)|
> |**Acetone**|Metabolic ketosis marker|
>
_____

> [!success]+ **CODING AND NUANCES**
> ## RELEVANT ICD-10 CODES
> 
> _(Conditions commonly associated with -one drug classes or ketone metabolism)_
> 
> |Code|Description|
> |---|---|
> |**E10.10**|Type 1 diabetes with ketoacidosis, without coma|
> |**E10.11**|Type 1 diabetes with ketoacidosis, with coma|
> |**E11.10**|Type 2 diabetes with ketoacidosis, without coma|
> |**E11.11**|Type 2 diabetes with ketoacidosis, with coma|
> |**E27.1**|Primary adrenocortical insufficiency _(treated with cortisone/hydrocortisone)_|
> |**E27.40**|Corticoadrenal insufficiency, unspecified|
> |**Z79.52**|Long-term (current) use of systemic steroids|
> |**T38.0X1A**|Poisoning by glucocorticoids, accidental, initial encounter|
> |**E87.5**|Hyperkalemia _(related to aldosterone deficiency/antagonism)_|
> 
> ---
> 
> ## RELEVANT CPT CODES
> 
> _(Procedures/administrations involving -one class drugs)_
> 
> |Code|Description|
> |---|---|
> |**96372**|Therapeutic injection, subcutaneous or IM _(e.g., testosterone, triamcinolone)_|
> |**96401**|Chemotherapy injection, non-hormonal _(some -one agents)_|
> |**96402**|Chemotherapy injection, hormonal antineoplastic|
> |**20610**|Arthrocentesis/injection, major joint _(often triamcinolone)_|
> |**67028**|Intravitreal injection _(e.g., triamcinolone — relevant to your Ophthalmology specialty)_|
> 
> ---
> 
> > **Coder's Note:** When coding for long-term corticosteroid (-one drug) use, always check for **Z79.52** as an additional diagnosis. In your Urology/Ophthalmology/ENT specialties, watch for **triamcinolone** injections (intravitreal, sinus, or joint) and verify the route and drug to assign the correct administration CPT. For ICD-10 codes involving ketoacidosis, ensure the diabetes type and complication specificity are captured for full 7-character codes where applicable.

_____
>[!tip]- DERIVATIONS of -ones
>```dataview
>TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name !=[[]].file.name
>SORT file.name ASC
>```
___
>[!faq]- Query
>```dataview
>TABLE definition AS Definition
>FROM #medroot
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```

[[Med roots dictionary]]
[[Appendix A Prefixes]]
[[Appendix B Combining Forms]]
[[Appendix C Suffixes]]
[[Appendix D Suffix forms]]
