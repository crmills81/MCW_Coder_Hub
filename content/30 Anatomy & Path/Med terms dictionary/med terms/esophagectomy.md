---
tags:
  - medterm
  - medroot
  - otolaryngology
  - ENT
  - surgery
aliases:
roots:
  - esophagectomy
  - esophag-
  - -o-
  - -ectomy
forms:
  - prefix
  - suffix
  - combining
  - noun
alphabet: E
definition:
  - surgical removal of part or all of the esophagus
---
>[!Note] DEFINITION of [[esophagectomy]]
>**Esophagectomy** is the surgical removal of the esophagus — either totally or partially — most commonly performed to treat esophageal cancer, severe Barrett's esophagus with high-grade dysplasia, or refractory benign strictures. **The stomach or a segment of colon or jejunum is then used to reconstruct the digestive conduit, connecting the remaining proximal esophagus or pharynx to the GI tract**. As a coder, you'll see this documented across thoracic, GI, and oncology service lines — always verify the approach and extent (**total vs. partial**) because that drives your CPT selection hard.
_____

> [!note]+ ETYMOLOGY of [[esophagectomy]]
> #greek
> The word breaks into three Greek-rooted components:
> 
> |Component|Origin|Meaning|
> |---|---|---|
> |**[[esophag-]]**|Greek _oisophágos_ (οἰσοφάγος)|"Gullet" — from _oísō_ (**to carry**) + _éphagon_ (**I ate**)|
> |**[[-o-]]**|Greek combining vowe l| Connects roots for ease of pronunciation|
> |**[[-ectomy]]**|Greek _ektomḗ_ (ἐκτομή)|"A cutting out" — from _ek-_ (**out**) + _tomḗ_ (**cutting**)|
> 
> So literally: **"a cutting out of the carrier of food."** That's actually a pretty poetic etymology for what is one of the most complex GI surgeries out there! The suffix **-ectomy** was Latinized as _[[-ectomia]]_ in 19th-century surgical nomenclature and became widespread in the early 20th century.​
> 
> The first successful esophagectomy for intrathoracic cancer was performed by **Franz Torek of New York in 1913**.
_____

> [!todo]+ 🏥 Types & Approaches
> - **Total esophagectomy** — removal of the entire esophagus
>     
> - **Near-total esophagectomy** — removal of nearly all, preserving a small proximal segment
>     
> - **Partial esophagectomy** — removal of a segment (distal two-thirds is most common)
>     
> - **Transhiatal approach** — abdominal + cervical, no thoracotomy; first performed successfully by Grey Turner in 1933[​
>     
> - **Transthoracic (Ivor Lewis)** — thoracotomy + abdominal incision
>     
> - **Minimally invasive esophagectomy (MIE)** — laparoscopic/thoracoscopic; pioneered by Luketich in 1996
_____

> [!example]+ Related Terms
> - **[[Esophagus]]** — the hollow muscular tube, ~25 cm long, connecting pharynx to stomach
>     
> - **[[Esophagoplasty]]** — plastic repair/reconstruction of the esophagus (CPT [[43300]])
>     
> - **[[Esophagostomy]]** — surgical creation of an opening in the esophagus (CPT [[43351]])
>     
> - **[[Esophagoscopy]]** — visual examination of the esophagus (CPT [[43191]]-[[43229]])
>     
> - **[[Esophagogastrectomy]]** — removal of esophagus + proximal stomach
>     
> - **[[Esophagojejunostomy]]** — anastomosis of esophagus to jejunum (CPT 43341)
>     
> - **[[Barrett's esophagus]]** — common indication; ICD-10 **[[K22.70]]/[[K22.71]]**
>     
> - **[[Esophageal carcinoma]]** — primary surgical indication; ICD-10 **C15.x** series
>     
> - **[[Dysphagia]]** — hallmark symptom; ICD-10 **R13.x**
>     
> - **Anastomotic leak** — feared post-op complication; capture as **[[K91.89]]** (inpatient)
_____


> [!warning]+ Coding Corner (CPT)
> These live in the **43100-43124** range:​
> 
> | CPT | Description |
> |---|---|
> |**[[43107]]**|Total or near-total esophagectomy, without thoracotomy; with pharyngogastrostomy or cervical esophagogastrostomy|
> |**[[43108]]**|Total or near-total esophagectomy, without [[thoracotomy]]; with colon interposition or small intestine reconstruction|
> |**[[43112]]**|Total or near-total esophagectomy, with thoracotomy; with pharyngogastrostomy or cervical esophagogastrostomy|
> |**[[43113]]**|Total or near-total esophagectomy, with thoracotomy; with colon interposition or small intestine reconstruction|
> |**[[43117]]**|Partial esophagectomy, distal two-thirds, with thoracotomy and separate abdominal incision|
> |**[[43122]]**|Partial esophagectomy, [[thoracoabdominal]] or abdominal approach|
> |**[[43360]]**|GI reconstruction for previous esophagectomy|


_____
>[!tip]- DERIVATIONS of esophagectomy
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


---
> [!success]+ Documentation Requirements
> **Operative Report Must Include:**
> 
> 1. **Preoperative Diagnosis**
> 2. **Postoperative Diagnosis**
> 3. **Procedure Performed** (Specify type of esophagectomy)
> 4. **Approach** - **CRITICAL** (Cervical, Thoracic, Abdominal, or Combined)
> 5. **Extent of Resection** - Partial, Total, Distal Third, Complete
> 6. **Reconstruction Status** - **CRITICAL** (With or Without reconstruction)
> 7. **Type of Reconstruction** - (e.g., gastric pull-up, colon interposition, anastomosis)
> 8. **Anastomosis** - Describe type and location (if performed)
> 9. **Lymph Node Dissection** - Extent and number of nodes (if performed)
> 10. **Drains** - Placement and type (chest tubes, neck drains)
> 11. **Feeding Tube** - Jejunostomy or gastrostomy (if placed)
> 12. **Complications** - Nerve injury, bleeding, perforation, etc.
> 13. **Specimen Sent to Pathology**
> 14. **Estimated Blood Loss**
> 15. **Operative Time**
> 
> ### Key Phrases to Document:
> 
> - "[Cervical/Thoracic/Combined] approach utilized"
> - "Partial/Total/Complete esophagectomy performed"
> - "Reconstruction performed/not performed at this time"
> - "Anastomosis completed" (if applicable)
> - "Procedure staged for future reconstruction" (if applicable)
> - "Recurrent laryngeal nerve identified/preserved" (cervical approach)
> - "Hemostasis achieved"
> - "Specimens sent to pathology"
> - "Chest tube/drains placed"
> 
> ---
> 
> ## Medical Necessity
> 
> ### Indications for Esophagectomy:
> 
> - **Malignancy** - Cancer of the esophagus (most common indication)
> - **High-Grade Dysplasia** - Barrett's esophagus with severe dysplasia
> - **Benign Stricture** - Unresponsive to dilation
> - **Achalasia** - End-stage, failed other treatments
> - **Perforation** - Esophageal perforation requiring resection
> - **Diverticulum** - Large symptomatic diverticulum
> - **Corrosive Injury** - Necrosis from ingestion
> - **Fistula** - Tracheoesophageal fistula requiring resection
> - **Trauma** - Severe traumatic injury requiring resection
> 
> ### Contraindications:
> 
> - **Metastatic Disease** - Where surgery provides no survival benefit
> - **Medically Unstable** - Cannot tolerate major surgery/anesthesia
> - **Invasion of Critical Structures** - Carotid artery, spine, aorta (unless en bloc resection planned)
> - **Poor Pulmonary Function** - Cannot tolerate thoracotomy
> - **Severe Malnutrition** - Must be optimized preoperatively
> 
> ---
> 
> ## Common Denial Reasons
> 
> | Denial Code | Reason | Resolution |
> |------------|--------|------------|
> | CO-50 | Medical necessity | Provide pathology/imaging supporting resection |
> | CO-97 | Bundled service | Verify reconstruction not billed separately if done same day |
> | CO-16 | Missing information | Submit operative report clarifying approach |
> | CO-22 | Billing/coding error | Verify correct code (reconstruction status, approach) |
> | CO-109 | Not covered by payer | Check patient benefits for major surgery |
> | CO-18 | Duplicate service | Verify not previously billed |
> 
> ---
> 
> ## Compliance Considerations
> 
> 1. **Reconstruction Status** - The most critical audit point. If reconstruction is performed, codes ending in reconstruction (43101, 43108, 43113, 43118, 43124) must be used. If staged, use without reconstruction code first, then with reconstruction code with modifier 58.
> 2. **Approach Verification** - Ensure documentation supports the approach (cervical vs. thoracic vs. combined). Different approaches have different codes.
> 3. **Staged Procedures** - Use modifier 58 for the reconstruction phase if within the global period of the resection.
> 4. **Assistant Surgeon** - Document medical necessity for assistant (complexity, exposure, hemostasis, anastomosis).
> 5. **External Causes** - Assign per icd10cm_eindex_2025.pdf if injury/ingestion caused the condition.
> 6. **Cancer Staging** - Ensure pathology report aligns with preoperative diagnosis for medical necessity.
> 7. **Lymph Node Dissection** - Document extent; may affect DRG assignment.
> 8. **Feeding Tubes** - If jejunostomy/gastrostomy placed concurrently, may be separately billable (verify bundling).
> 
> ---
> 
> ## Related Procedures
> 
> | CPT | Description | Relationship |
> |-----|-------------|--------------|
> | 43100-43101 | Excision of cervical esophagus | Alternative code set |
> | 43107-43108 | Excision of thoracic esophagus | Alternative code set |
> | 43112-43113 | Partial esophagectomy, thoracic | Same approach family |
> | 43117-43118 | Total esophagectomy, thoracic | More extensive |
> | 43123-43124 | Partial esophagectomy, cervical | Same approach family |
> | 43130 | Esophagectomy, distal third | Different segment |
> | 43135 | Esophagectomy, complete | Total removal |
> | 43246-43248 | Esophagoscopy procedures | Endoscopic alternatives |
> | 43300-43337 | Esophagoplasty | Repair/reconstruction only |
> | 43605-43634 | Gastrectomy | May be concurrent |
> | 31502 | Tracheostomy | May be performed concurrently |
> | 43750 | Jejunostomy | Feeding tube, may be concurrent |
> 
> ---
> 
> ## Clinical Pearls
> 
> 1. **Recurrent Laryngeal Nerve** - High risk of injury during cervical dissection; voice changes common post-op. Document nerve status.
> 2. **Staged Reconstruction** - Often planned if patient is unstable or tissue quality is poor (e.g., radiation damage, contamination).
> 3. **Feeding Tube** - Jejunostomy or gastrostomy often placed concurrently for nutrition during recovery.
> 4. **Chyle Leak** - Risk if dissection extends near thoracic duct; monitor drain output for milky appearance.
> 5. **Airway Management** - Cervical swelling may compromise airway; extubation may be delayed.
> 6. **Anastomotic Leak** - Most serious complication; monitor for fever, tachycardia, chest pain.
> 7. **External Causes** - For corrosive ingestion or foreign body, document intent (accidental vs. intentional) and circumstances for correct ICD-10 coding per icd10cm_eindex_2025.pdf.
> 8. **Minimally Invasive** - Some esophagectomies performed laparoscopically/thoracoscopically; same CPT codes generally apply.
> 9. **ICU Care** - Most patients require postoperative ICU care; document medical necessity.
> 10. **Multidisciplinary** - Often involves thoracic surgery, GI surgery, and sometimes ENT depending on approach.
> 
> ---
> 
> ## Post-Operative Care Considerations
> 
> | Aspect | Considerations |
> |--------|---------------|
> | **ICU Stay** | Typically 2-5 days minimum |
> | **Chest Tubes** | Monitor output, air leak |
> | **NG Tube** | Decompression, typically 5-7 days |
> | **Feeding Tube** | Early enteral nutrition via J-tube |
> | **Swallow Study** | Before oral intake (typically day 7-10) |
> | **Pain Management** | Epidural or PCA common |
> | **DVT Prophylaxis** | Essential due to cancer + immobility |
> | **Pulmonary Care** | Incentive spirometry, early ambulation |
> | **Follow-up** | Within 2 weeks, then per oncology protocol |
> 
> ---
> 
> ## Complications to Monitor
> 
> | Complication | Signs/Symptoms | Coding (if treated) |
> |-------------|---------------|---------------------|
> | **Anastomotic Leak** | Fever, tachycardia, chest pain, drainage | T81.89, J86.9 |
> | **Recurrent Laryngeal Nerve Injury** | Hoarseness, voice changes | G99.8 |
> | **Chyle Leak** | Milky drain output, high triglycerides | M95.8 |
> | **Respiratory Failure** | Hypoxia, intubation | J96.00 |
> | **Pneumonia** | Fever, infiltrate, sputum | J18.9 |
> | **Atrial Fibrillation** | Irregular heartbeat, palpitations | I48.91 |
> | **Wound Infection** | Redness, drainage, fever | T81.4XXA |
> | **Stricture** | Dysphagia, narrowing | K22.2 |
> 
> 
[[Med roots]]
[[Appendix A Prefixes]]
[[Appendix B Combining Forms]]
[[Appendix C Suffixes]]
[[Appendix D Suffix forms]]