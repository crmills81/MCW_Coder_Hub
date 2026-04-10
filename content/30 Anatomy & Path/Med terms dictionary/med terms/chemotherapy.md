---
tags:
  - medterm
  - oncology
aliases:
  - Chemotherapy
  - chemo
  - antineoplastic therapy
  - cytotoxic therapy
roots:
  - chem-
  - -o-
  - -therapy
forms:
  - noun
  - prefix
  - suffix
alphabet: C
definition:
  - The treatment of disease, particularly cancer, using chemical substances designed to destroy rapidly dividing cells.
---
>[!Note] DEFINITION of [[chemotherapy]]
>The term **chemotherapy** refers to the systemic administration of **antineoplastic** (anti-cancer) drugs designed to destroy, shrink, or slow the proliferation of **malignant neoplasms**. Because these chemicals primarily target rapidly dividing cells, they often affect healthy tissues with high turnover rates (**such as hair follicles, bone marrow, and the gastrointestinal lining**), leading to characteristic side effects like **alopecia**, **[[neutropenia]]**, and nausea. **Chemotherapy** can be administered with curative intent, as **neoadjuvant therapy** (**before surgery to shrink a tumor**), **adjuvant therapy** (**after surgery to eliminate microscopic disease**), or as palliative care to relieve symptoms in advanced cancer.
_____
>[!info]+ ETYMOLOGY of [[chemotherapy]]
>#greek #german
>
>|Component|Origin|Meaning|
>|---|---|---|
>|**[[chem-]] / [[chemo-]]**|Greek _khemeia_ (χημεία) via German _Chemie_|"**Alchemy**" or "**chemical**"|
>|**[[-therapy]]**|Greek _therapeia_ (θεραπεία)|"**Healing**" or "**medical treatment**"|
>
> The term was coined in the early 1900s by German immunologist Paul Ehrlich (originally as _Chemotherapie_) to describe the use of specific chemicals to treat infectious diseases (like [[syphilis]]), but the word evolved in the mid-20th century to be almost exclusively associated with cancer treatment.
_____

> [!success]+ ### 🔀 ALIASES / ALTERNATE TERMS
> 
> - **Chemo** _(common colloquial abbreviation)_
> - **Antineoplastic therapy**
> - **Cytotoxic therapy**
> - **Medical oncology treatment**
> - **Systemic therapy** _(when distinguished from local treatments like surgery/radiation)_
> 
_____

> [!danger]+ ### 🔗 RELATED TERMS
> 
> - **[[Neoplasm]] / [[Carcinoma]]** — an abnormal, often malignant growth of tissue targeted by **chemotherapy**.
> - **Adjuvant therapy** — **chemotherapy** given *after* primary treatment (like surgery) to lower the risk of recurrence.
> - **Neoadjuvant therapy** — **chemotherapy** given *before* primary treatment to shrink a tumor.
> - **Immunotherapy** — biological treatments that stimulate the patient's immune system to attack cancer cells (**distinct from cytotoxic chemotherapy**).
> - **[[Alopecia]]** — hair loss, a frequent and visible side effect of **chemotherapy**.
> - **Pancytopenia** — a dangerous reduction in red cells, white cells, and platelets due to bone marrow suppression by cytotoxic drugs.
> - **Extravasation** — the accidental leakage of intravenous **chemotherapy** drugs into surrounding tissue, potentially causing severe [[necrosis]].
> 
_____


> [!example]+ #### CODING CORNER
> <br>
> 
> ### 🏥 ICD-10-CM CODES
> 
> #### **Encounters for Treatment**
> 
> |Code|Description|
> |---|---|
> |[[Z51.11]]|Encounter for antineoplastic chemotherapy|
> |[[Z51.12]]|Encounter for antineoplastic immunotherapy|
> |[[Z51.89]]|Encounter for other specified aftercare _(often used for targeted therapy non-antineoplastic)_|
> 
> #### **Adverse Effects & Complications (7th character required for T-codes)**
> 
> |Code|Description|
> |---|---|
> |[[T45.1X5A]]|Adverse effect of antineoplastic and immunosuppressive drugs, initial encounter|
> |[[T45.1X5D]]|Adverse effect of antineoplastic and immunosuppressive drugs, subsequent encounter|
> |[[T80.810A]]|Extravasation of vesicant antineoplastic medication, initial encounter|
> |[[D70.1]]|Agranulocytosis secondary to cancer chemotherapy|
> |[[E86.0]]|Dehydration _(common consequence of chemo-induced nausea/vomiting)_|
> 
> ---
> 
> ### 🔧 COMMON CPT CODES (Chemotherapy Administration)
> 
> |CPT Code|Description|
> |---|---|
> |**[[96401]]**|Chemotherapy administration, subcutaneous or intramuscular; non-hormonal anti-neoplastic|
> |**[[96409]]**|Chemotherapy administration; intravenous, push technique, single or initial substance/drug|
> |**[[96413]]**|Chemotherapy administration, intravenous infusion technique; up to 1 hour, single or initial substance/drug|
> |**[[96415]]**|Chemotherapy administration, intravenous infusion technique; each additional hour (List separately in addition to code for primary procedure)|
> |**[[96420]]**|Chemotherapy administration, intra-arterial; push technique|
> |**[[96523]]**|Irrigation of implanted venous access device for drug delivery systems|
> |**[[36593]]**|Declotting by thrombolytic agent of implanted vascular access device or catheter|
> 
> ---
> 
> > ⚠️ **Coding Note:** Sequencing is paramount when coding **chemotherapy** encounters. If the patient's primary reason for the visit is to receive **chemotherapy**, **[[Z51.11]]** (**Encounter for antineoplastic chemotherapy**) **<font color="#ff0000">must</font>** be listed as the principal/first-listed diagnosis, followed immediately by the active malignancy code (e.g., [[C50.911]]). 
> > 
> > For **CPT coding**, administration of highly complex, **cytotoxic antineoplastic agents** falls under the `964XX` series. Coders must distinguish these from **non-chemotherapy therapeutic/prophylactic infusions** (`96365`-`96379`), even if given during the same encounter (**such as an anti-emetic given prior to the chemo**). Time documentation (**start and stop times**) is strictly required to bill infusion codes like [[96413]] and [[96415]].
> 
_____
>[!tip]- DERIVATIONS of [[chemotherapy]]
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