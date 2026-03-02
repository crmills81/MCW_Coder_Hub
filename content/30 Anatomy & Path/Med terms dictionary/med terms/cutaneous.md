---
tags:
  - medterm
aliases:
  - skin
roots:
  - cutaneous
  - cut-
  - -taneous
  - -eous
forms:
  - prefix
  - suffix
  - combining
  - noun
alphabet: C
definition:
  - anything affecting
  - related to
  - or consisting of the skin
---
>[!Note] DEFINITION of [[cutaneous]]
>The term "**cutaneous**" is an adjective derived from anatomy used to describe the **skin** ([[integumentary]] system). It distinguishes superficial conditions, nerves, or treatments involving the skin layers (epidermis and dermis) from those involving deeper tissues ([[subcutaneous]], [[fascial]], or muscular) or internal organs ([[visceral]]). In medical procedures, it often refers to the route of administration (e.g., [[percutaneous]]) or the depth of a lesion.
>
> #### Related Terms & Synonyms
>- **Dermatologic:** Pertaining to the branch of medicine dealing with the skin.
>- **[[subcutaneous]]:** Situated or applied under the skin (hypodermis).
>- **[[Percutaneous]]:** Performed through the skin (e.g., a needle biopsy).
>- **Integumentary:** Relating to the natural covering of an organism (skin, hair, nails).
>- **Epidermis:** The outermost layer of the skin.
>- **Dermis:** The thick layer of living tissue below the epidermis.
_____
>[!info]+ ETYMOLOGY of [[cutaneous]]
>#latin
>- **Origin:** Late 16th century.
>- **Roots:** From Latin _cutaneus_, from _cutis_ ("**skin**").
>- **Related Roots:** _[[Derm-]]_ (Greek for skin).    
>- **Historical Context:** Historically used to differentiate the outer covering of the body from the "**flesh**" underneath.
_____
>[!tip]- DERIVATIONS of [[cutaneous]]
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

---

> [!example]+ **Coding Information**
> _Since "Cutaneous" is a descriptor, codes often depend on the specific pathology (cancer, infection, injury)._
> 
> ### ICD-10-CM (Diagnosis Codes)
> 
> _Primarily found in Chapter 12: Diseases of the Skin and Subcutaneous Tissue (L00-L99) and Chapter 2: Neoplasms (C00-D49)._
> 
> **Category C43-C44: Malignant Neoplasms**
> - **C43.x:** Malignant melanoma of skin.
> 
> - **C44.x:** Other malignant neoplasms of skin (Basal Cell, Squamous Cell).
> 
> **Category L00-L08: Infections of the Skin**
> - **L03.x:** Cellulitis (acute spreading bacterial infection of the skin).
> - **L02.x:** Cutaneous abscess, furuncle, and carbuncle.
> 
> **Category L98: Other disorders of skin**
> - **[[L98.4]]:** Non-pressure chronic ulcer of skin.
> 
> ### CPT (Procedure Codes)
> 
> _Procedures on the integumentary system (10000-19999)._
> 
> - **[[11102]]:** Tangential biopsy of skin (e.g., shave, scoop, saucerize) of single lesion.
> - **[[11400]]-[[11446]]:** Excision, benign lesion including margins (coded by size and location).
> - **[[17000]]:** Destruction (e.g., laser surgery, electrosurgery, [[cryosurgery]], chemosurgery, surgical curettement), premalignant lesions (e.g., actinic keratoses).
> - **[[12001]]-[[12021]]:** Simple repair of superficial wounds (involving primarily epidermis or dermis).
> 
> ## ICD-10 Guidelines: Includes & Excludes
> 
> **General Note for Chapter 12 (L00-L99):**
> - **Includes:** Diseases of the skin and subcutaneous tissue, nails, hair, and sweat glands.
> 
> **Excludes1 (NEVER code together with L-codes):**
> - Certain conditions originating in the perinatal period (P00-P96).
> - Certain infectious and parasitic diseases (A00-B99) — _Example: Herpes Zoster (Shingles) is coded B02, not an L-code._
> - Complications of pregnancy, childbirth, and the puerperium (O00-O99).
> 
> **Excludes2 (Can be coded together):**
> - Endocrine, nutritional, and metabolic diseases (E00-E88) — _Example: Diabetic ulcer ([[E11.621]]) can be coded alongside skin codes if applicable, though the E-code usually takes precedence._
>     
> 
> ## Reimbursement & Administrative Data
> 
> ### HCC (Hierarchical Condition Category)
> 
> - **Skin Cancers:**
>     - **Melanoma (C43.x):** Maps to **HCC 8** (Metastatic Cancer and Acute Leukemia) or **HCC 9** depending on specific staging/severity.
>     - **Basal/Squamous Cell (C44.x):** generally **No HCC** (viewed as low risk/local).
> 
> - **Chronic Skin Ulcers:**
>     - **[[L98.4]] (Chronic Ulcer):** Maps to **HCC 161** or **162** (Chronic Skin Ulcers), valuable for risk adjustment in diabetic or vascular patients.
> 
> - **Severe Infections:**
>     - **L03 (Cellulitis):** generally **No HCC** unless associated with major complications.
> 
> 
> ### Assistant Surgeon Pay
> 
> - **Biopsies/Simple Excisions ([[11102]], [[11400]]):** **No.** (Minor procedures).
> - **Mohs Micrographic Surgery ([[17311]]):** **No.** (The surgeon acts as both surgeon and pathologist; assistants are generally not reimbursed).
> - **Skin Grafts/Flaps ([[14000]]+, [[15100]]+):** **Yes/Sometimes.**
>     - Large adjacent tissue transfers or complex skin grafts often allow for assistant surgeon billing (Modifier 80/AS) due to the need for retraction and suturing large surface areas.
> 
> 
> ## Clinical Details
> 
> ### Anatomy
> 
> The cutaneous layer is composed of two primary zones:
> 1. **Epidermis:** The avascular outer layer. Contains [[melanocytes]] (pigment) and [[keratinocytes]] (protection).
> 2. **Dermis:** The [[vascular]] inner layer. Contains nerve endings, hair follicles, sweat glands, and collagen.
> 
> ### Common Cutaneous Manifestation
> - **[[Erythema]]:** Redness of the skin (capillary dilation).
> - **[[Cyanosis]]:** Bluish discoloration (lack of oxygen).
> - **[[Jaundice]]:** Yellowing of the skin (liver dysfunction).
> - **[[Pallor]]:** Paleness (anemia or shock).
> 
> ### Drug Administration Routes
> 
> - **Topical:** Applied directly to the cutaneous surface (creams, ointments).
> - **Transdermal:** Applied to the skin for absorption into the bloodstream (patches).
> - **Subcutaneous:** Injected just below the cutaneous layer (insulin).
> - **Intradermal:** Injected between the layers of the skin (TB skin test).
> 


[[Med roots]]
[[Appendix A Prefixes]]
[[Appendix B Combining Forms]]
[[Appendix C Suffixes]]
[[Appendix D Suffix forms]]