---
tags:
  - medterm
  - otolaryngology
  - urology
aliases:
  - abscesses
roots:
  - abscess
  - ab-
  - -cess
forms:
  - prefix
  - suffix
  - combining
alphabet: A
definition: pocket of pus that collects in tissues, organs, or spaces inside the body
---
>[!Note] DEFINITION of [[abscess]]
>An **abscess** is a localized collection of purulent material (**pus**) buried in tissues, organs, or confined spaces. It is typically t**he result of the body's defensive immune response to a foreign body or infectious agent** (**bacteria, parasites**). The immune system sends white blood cells to the infected area, which accumulate and combine with damaged tissue and bacteria to form liquid pus. The body attempts to wall off this infection with a capsule (**pyogenic membrane**) to prevent it from spreading to healthy tissue.
_____
>[!info]+ ETYMOLOGY of [[abscess]]
>#latin 
>- **Origin:** Late 16th century.
>- **Roots:** From Latin _abscessus_ ("**a going away, departure**").
>- **Breakdown:** _[[ab-]]_ (**away, from**) + _cedere_ (**to go**).
>- **Historical Context:** The term originally referred to the notion of humors "**going away**" into the corrupt matter of the swelling, or the matter itself being eliminated from the body.
_____
>[!tip]- DERIVATIONS of [[abscess]]
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

---
> [!quote] Medical Keyword Reference: Abscess
> **Related Terms & Synonyms**
> 
> - **[[Boil]] / [[Furuncle]]:** A painful, pus-filled bump under the skin caused by infected, inflamed hair [[follicles]].
> 
> - **[[Carbuncle]]:** A cluster of boils that form a connected area of infection under the skin.
> 
> - **[[Pustule]]:** A small blister or pimple on the skin containing pus.
> 
> - **[[empyema]]:** A collection of pus in a naturally existing anatomical cavity (e.g., the pleural space), distinct from an abscess which creates a new cavity.
> 
> - **[[cyst]]:** A sac-like pocket of membranous tissue (often confused with abscess, but a cyst is not necessarily infected/filled with pus unless it becomes an "infected cyst").
>     
> 
>  **Coding Information**
> 
>  **ICD-10-CM (Diagnosis Codes)**
> 
> _Note: Codes vary significantly by anatomical location. The most common category is Cutaneous (Skin)._
> 
> **Category L02: Cutaneous abscess, furuncle and carbuncle**
> 
> - **[[L02.01]]:** Cutaneous abscess of face
> - **[[L02.21]]:** Cutaneous abscess of trunk    
> - **[[L02.41]]:** Cutaneous abscess of limb
> - **[[L02.91]]:** Cutaneous abscess, unspecified
> 
> **Organ-Specific Examples:**
> 
> - **[[K61.0]]:** Anal abscess
> - **[[J85.2]]:** Abscess of lung without pneumonia
> - **[[K75.0]]:** Abscess of liver
> - **[[G06.0]]:** Intracranial abscess

_____
 
> [!todo] CPT (Procedure Codes)
> _The most common procedure for an abscess is Incision and Drainage (I&D)._
> 
> - **[[10060]]:** Incision and drainage of abscess (e.g., carbuncle, [[suppurative hidradenitis]], [[cutaneous]] or [[subcutaneous]] abscess, cyst, furuncle, or [[paronychia]]); simple or single.
> - **[[10061]]:** Incision and drainage of abscess... complicated or multiple.
> - **[[10180]]:** Incision and drainage, complex, postoperative wound infection.
> - **Specific Sites:** There are distinct codes for deep I&D (e.g., **[[46040]]** for Incision and drainage of ischiorectal and/or [[perirectal]] abscess).

______


> [!bug] **ICD-10 Guidelines: Includes & Excludes (Category L02)**
> **Includes:**
> 
> - Boils
> - Furuncles
> - Carbuncles
> 
> 
> **Excludes1 (Type 1 Excludes - NEVER code together):**
> 
> - Abscess of anus and rectal regions (K61.-)
> - Abscess of genital organs (external) ([[N48.2]], [[N76.4]])
> - Abscess of glands (e.g., Bartholin's gland [[N75.1]])
> 
> **Excludes2 (Type 2 Excludes - Can be coded together if distinct):**
> 
> - Cellulitis (L03.-)
> - Specific infections characterized by skin lesions (e.g., Herpes viral infection)
> 
> **Reimbursement & Administrative Data**
> 
> HCC (Hierarchical Condition Category)
> 
> - **Simple Cutaneous Abscess (L02.x):** Generally does **NOT** map to an HCC category for risk adjustment. These are considered acute, short-term conditions.
> - **Complex/Internal Abscesses:** May map to HCCs depending on severity.
>     
>     - _Example:_ Intracranial abscess ([[G06.0]]) maps to **HCC 5** (Opportunistic Infections).
>     - _Example:_ Lung Abscess ([[J85.2]]) maps to **HCC 114** (Aspiration and Specified Bacterial Pneumonias).
> 
> 
>  **Assistant Surgeon Pay**
> 
> - **CPT 10060 (Simple I&D):**
>     
>     - **Assistant Surgeon Payable:** **No.** (Medicare Status Indicator '0' - Assistant surgeon not permitted).
> - **CPT 10061 (Complicated I&D):**
>     - **Assistant Surgeon Payable:** **Sometimes/Rarely.** (Often requires documentation of medical necessity).
> - **Deep/Visceral Abscesses:**
>     - Procedures involving deep spaces (e.g., retroperitoneal drainage) **usually allow** for assistant surgeon pay (Modifier 80, 81, 82, or AS) due to the complexity of the surgery.    
> 
> **Clinical Details**
> 
> **Pathophysiology**
> 
> 1. Bacteria enter tissue (break in skin or via blood).
> 2. Inflammatory response is triggered.
> 3. [[Neutrophils]] die after engulfing bacteria, releasing enzymes that digest tissue.
> 4. Liquefaction [[necrosis]] occurs (formation of pus).
> 5. [[Fibroblasts]] form a wall (capsule) around the pus to contain it.
> 
> **Common Pathogens**
> 
> - _Staphylococcus aureus_ (including **MRSA** - Methicillin-Resistant _S. aureus_) is the most common cause of skin abscesses.
> - _Streptococcus pyogenes_.
> - _Escherichia coli_ and _Bacteroides_ (common in [[intra-]]abdominal and anal abscesses).
> 
> **Symptoms (The 4 Signs of Inflammation)**
> 
> 1. **Rubor:** Redness.
> 2. **Calor:** Heat.
> 3. **Dolor:** Pain/Tenderness.
> 4. **Tumor:** Swelling/Induration.
> 
> - _Systemic signs:_ Fever, chills, malaise (usually indicates the infection is spreading or is deep).
> 
> **Treatment**
> 
> - **Primary:** **Incision and Drainage (I&D)**. Antibiotics alone are often ineffective because they cannot penetrate the abscess wall and are neutralized by the pH of the pus.
> - **Adjunctive:** Antibiotics (if systemic symptoms, cellulitis, or immunocompromised status exists).
> - **Packing:** The wound is often left open or packed with gauze to allow it to heal from the inside out (secondary intention) to prevent recurrence.


[[Med roots dictionary]]
[[Appendix A Prefixes]]
[[Appendix B Combining Forms]]
[[Appendix C Suffixes]]
[[Appendix D Suffix forms]]