---
tags:
  - mdc-03
  - drg
  - ent
  - otolaryngology
  - head-neck
  - larynx
  - sinus
  - inpatient
  - reimbursement
title: MDC 03 - Ear, Nose, Mouth & Throat (ENT / Otolaryngology)
aliases:
  - MDC 03
  - MDC03
  - ENT DRGs
  - OTO DRGs
  - Otolaryngology DRGs
  - Head and Neck DRGs
specialty: Otolaryngology
code_type: MDC / DRG Reference
system: CMS MS-DRG FY2025
updated: 2025-05-05
related:
  - MS-DRG_Overview
  - CC-MCC_Reference
  - CDI_Query_Templates
  - MDC_02_Eye
  - POA_Indicator_Guide
status: complete
---

# 👂 MDC 03 - Ear, Nose, Mouth & Throat (ENT / Otolaryngology)

> [!abstract] MDC 03 Scope
> MDC 03 covers diseases and disorders of the **ear, nose, mouth, throat, and larynx** — the full head and neck region excluding the brain, eyes, and spine. Principal diagnosis must fall within ICD-10-CM chapters covering ENT structures (**C00-C14, C30-C32, H60-H95, J00-J06, J30-J39, K00-K14, S00-S09 ENT-specific**). Oral surgery and maxillofacial procedures frequently appear here as well.

---

## 📌 Specialty Context

MDC 03 contains some of the **highest-acuity surgical DRGs outside the cardiovascular system** — major head and neck oncology procedures (laryngectomy, radical neck dissection, composite resection) carry relative weights rivaling cardiac surgery. At the same time, it also contains low-complexity medical DRGs (tonsillitis, otitis, sinusitis admissions).

> [!important] Tracheostomy Exits MDC 03
> When an ENT patient requires **tracheostomy with mechanical ventilation**, the case is pulled into **Pre-MDC DRG 003 or 004** before MDC assignment. These carry RW 14-19+. Always verify tracheostomy PCS coding is complete and accurate. See [[#🔑 Tracheostomy — Pre-MDC Trigger]].

---

## 🔢 MDC 03 DRG Table — Surgical

| DRG     | Description                                              | RW (approx) | Geo Mean LOS |
| ------- | -------------------------------------------------------- | ----------- | ------------ |
| **129** | Major head & neck procedures w/ CC/MCC                   | **3.85**        | **7.8**          |
| **130** | Major head & neck procedures w/o CC/MCC                  | **2.10**        | **3.5**          |
| **131** | Cranial/facial procedures w/ CC/MCC                      | **3.20**        | **7.0**          |
| **132** | Cranial/facial procedures w/o CC/MCC                     | **1.80**        | **3.2**          |
| **133** | Other ear, nose, mouth & throat OR procedures w/ CC/MCC  | **2.40**        | **5.5**          |
| **134** | Other ear, nose, mouth & throat OR procedures w/o CC/MCC | **1.25**        | **2.8**          |
| **135** | Sinus & mastoid procedures w/ CC/MCC                     | **2.10**        | **5.0**          |
| **136** | Sinus & mastoid procedures w/o CC/MCC                    | **1.05**        | **2.2**          |
| **137** | Mouth procedures w/ CC/MCC                               | **2.20**        | **5.2**          |
| **138** | Mouth procedures w/o CC/MCC                              | **1.05**        | **2.3**          |
| **139** | Salivary gland procedures                                | **1.15**        | **2.5**          |

> [!note] DRG 129 — The Workhorse of Head & Neck Oncology
> DRG 129 captures **laryngectomy, radical neck dissection, composite resection, and major pharyngeal procedures** with CC/MCC. With a base RW around 3.85 and high LOS, this is the highest-value routine surgical DRG in MDC 03. Comorbidity capture is critical.

---

## 🩺 MDC 03 DRG Table — Medical

| DRG     | Description                                          | RW (approx) | Geo Mean LOS |
| ------- | ---------------------------------------------------- | ----------- | ------------ |
| **140** | Peritonsillar abscess                                | **0.85**        | **2.8**          |
| **141** | Facial trauma & deformity                            | **1.05**        | **3.2**          |
| **142** | Ear, nose, mouth & throat malignancy w/ MCC          | **1.90**        | **6.5**          |
| **143** | Ear, nose, mouth & throat malignancy w/ CC           | **1.20**        | **4.5**          |
| **144** | Ear, nose, mouth & throat malignancy w/o CC/MCC      | **0.75**        | **2.8**          |
| **145** | Other ear, nose, mouth & throat diagnoses w/ MCC     | **1.55**        | **5.5**          |
| **146** | Other ear, nose, mouth & throat diagnoses w/ CC      | **0.90**        | **3.5**          |
| **147** | Other ear, nose, mouth & throat diagnoses w/o CC/MCC | **0.65**        | **2.2**          |

---

## 🔑 Tracheostomy — Pre-MDC Trigger

This is the single most important DRG concept in ENT inpatient coding.

| Pre-MDC DRG | Description                                                            | RW (approx) | Trigger                       |
| ----------- | ---------------------------------------------------------------------- | ----------- | ----------------------------- |
| **003**     | ECMO or trach w/ MV 96+ hrs w/ principal dx other than face/mouth/neck | **19.0+**       | **Trach + MV ≥ 96 hrs**           |
| **004**     | Trach w/ MV 96+ hrs w/ principal dx of face/mouth/neck                 | **11.0+**       | **ENT PDx + trach + MV ≥ 96 hrs** |
| **011**     | Trach for face/mouth/neck diagnoses w/ MCC                             | **5.20**        | **ENT PDx + trach, MV < 96 hrs**  |
| **012**     | Trach for face/mouth/neck diagnoses w/ CC                              | **3.60**        |                               |
| **013**     | Trach for face/mouth/neck diagnoses w/o CC/MCC                         | **2.80**        |                               |

### Tracheostomy PCS Codes — Know These

| PCS Code | Description                                                    | Notes                        |
| -------- | -------------------------------------------------------------- | ---------------------------- |
| 0B110F4  | Bypass trachea to cutaneous, tracheostomy device               | Surgical tracheostomy        |
| 0B113F4  | Bypass trachea to cutaneous, percutaneous                      | Percutaneous trach (Ciaglia) |
| 0BH17EZ  | Insertion of endotracheal airway, trachea, via natural opening | ETT — NOT a tracheostomy     |
| 0BH10FZ  | Insertion of tracheostomy device, trachea, open                | Trach device insertion       |

> [!warning] ETT ≠ Tracheostomy
> Endotracheal tube insertion (0BH17EZ) does NOT qualify as a tracheostomy and does NOT trigger Pre-MDC DRGs. Only a surgical airway (trach) combined with MV ≥ 96 hrs triggers DRG 003/004. Miscoding ETT as a tracheostomy is a compliance risk.

### Mechanical Ventilation Hours — How CMS Counts

**CMS** counts MV hours from **intubation/ventilator start to weaning/extubation**. The 96-hour threshold is the dividing line between **DRG 003/004** and **DRG 011/012/013**. Document vent start and stop times precisely.

---

## ⚖️ CC/MCC Drivers — MDC 03

### MCCs

| Code             | Description                         | Scenario                                           |
| ---------------- | ----------------------------------- | -------------------------------------------------- |
| **[[J96.01]]**   | Acute resp failure w/ hypoxia       | Airway obstruction, post-op respiratory compromise |
| **[[J95.821]]**  | Acute postprocedural resp failure   | Post-laryngectomy, post-neck dissection            |
| **[[A41.9]]**    | Sepsis, unspecified                 | Post-op wound infection → sepsis                   |
| **[[R65.20]]**   | Severe sepsis                       | Sepsis + organ dysfunction                         |
| **[[G93.41]]**   | Metabolic encephalopathy            | AMS in post-op head/neck patient                   |
| **[[N17.9]]**    | AKI                                 | Post-op fluid shifts, contrast, nephrotoxic abx    |
| **[[K72.00]]**   | Acute hepatic failure               | Rare; alcohol-related in H&N oncology patients     |
| **[[E43]]**      | Severe protein-calorie malnutrition | Common in H&N cancer patients; pre-op              |
| **[[T78.3XXA]]** | Angioedema, initial encounter       | Airway emergency                                   |

### CCs

| Code            | Description                          | Scenario                                  |
| --------------- | ------------------------------------ | ----------------------------------------- |
| **[[J38.4]]**   | Edema of larynx                      | Post-op swelling; radiation-related       |
| **[[J38.00]]**  | Vocal cord paralysis, unspecified    | Post-thyroid, post-neck dissection        |
| **[[J38.01]]**  | Paralysis of vocal cords, unilateral | RLN injury documentation                  |
| **[[G47.33]]**  | OSA                                  | UPPP, tonsil cases; anesthesia risk       |
| **[[F17.210]]** | Nicotine dependence, cigarettes      | Near-universal in H&N oncology            |
| **[[E11.65]]**  | T2DM with hyperglycemia              | Glucose management; wound healing         |
| **[[Z79.01]]**  | Long-term anticoagulant use          | Surgical bleeding risk                    |
| **[[K12.2]]**   | Cellulitis & abscess of mouth        | Ludwig's angina, floor of mouth           |
| **[[J01.90]]**  | Acute sinusitis                      | Baseline — query organism for specificity |
| **[[H66.3X9]]** | Chronic suppurative otitis media     | Mastoidectomy cases                       |
| **[[C10.9]]**   | Malignant neoplasm of oropharynx     | Oncology cases w/o surgical procedure     |
| **[[F10.20]]**  | Alcohol use disorder, uncomplicated  | Common H&N cancer comorbidity — CC        |
| **[[E44.0]]**   | Moderate malnutrition                | Pre-chemoradiation nutritional status     |

---

## 🔪 Key ICD-10-PCS Procedures — ENT

### Larynx

| PCS Code    | Description                                     | OR? | DRG         |
| ----------- | ----------------------------------------------- | --- | ----------- |
| 0CTS0ZZ | Resection of larynx, open (total laryngectomy)  | Yes | DRG 129/130 |
| 0CBS0ZZ | Excision of larynx, open (partial laryngectomy) | Yes | DRG 129/130 |
| 0CQS0ZZ | Repair of larynx, open                          | Yes | DRG 133/134 |
| 0CSS0ZZ | Reposition of larynx                            | Yes | DRG 133/134 |

### Pharynx / Tonsil / Adenoid

| PCS Code | Description | OR? | DRG |
|---|---|---|---|
| 0CBN0ZZ | Excision of nasopharynx (nasopharyngectomy) | Yes | DRG 129/130 |
| 0CTM0ZZ | Resection of pharynx, open | Yes | DRG 129/130 |
| 0CBP0ZZ | Excision of oropharynx | Yes | DRG 133/134 |
| 0CTT0ZZ | Resection of palatine tonsil, open (tonsillectomy) | Yes | DRG 133/134 |
| 0CTN0ZZ | Resection of nasopharynx (adenoidectomy) | Yes | DRG 133/134 |

### Lymph Node / Neck Dissection

| PCS Code | Description | OR? | DRG |
|---|---|---|---|
| 07T50ZZ | Resection of right neck lymph node chain | Yes | DRG 129/130 |
| 07T60ZZ | Resection of left neck lymph node chain | Yes | DRG 129/130 |
| 07B50ZZ | Excision of right neck lymph node (selective) | Yes | DRG 129/130 |
| 07D50ZZ | Extraction of neck lymph node | Yes | Sentinel node |

### Sinus / Nasal

| PCS Code | Description                        | OR? | DRG         |
| -------- | ---------------------------------- | --- | ----------- |
| **09TK0ZZ**  | Resection of nasal turbinate, open | Yes | DRG 135/136 |
| **09BK0ZZ**  | Excision of nasal turbinate        | Yes | DRG 135/136 |
| **09UQ0KZ**  | Supplement nasal septum            | Yes | Septoplasty |
| **09BQ0ZZ**  | Excision of nasal septum (SMR)     | Yes | DRG 135/136 |

### Ear / Mastoid

| PCS Code | Description                                 | OR? | DRG         |
| -------- | ------------------------------------------- | --- | ----------- |
| **09B00ZZ**  | Excision of right external ear (pinnectomy) | Yes | DRG 133/134 |
| **09T20ZZ**  | Resection of right mastoid sinus            | Yes | DRG 135/136 |
| **0990ZZZ**  | Drainage of right ear                       | Yes | DRG 133/134 |
| **09HE0MZ**  | Insertion of bone anchored hearing device   | Yes | DRG 133/134 |

### Salivary Glands

| PCS Code | Description                                       | OR? | DRG     |
| -------- | ------------------------------------------------- | --- | ------- |
| **0CTF0ZZ**  | Resection of right parotid gland                  | Yes | DRG 139 |
| **0CTJ0ZZ**  | Resection of right submaxillary gland             | Yes | DRG 139 |
| **0CBF0ZZ**  | Excision of parotid gland (partial parotidectomy) | Yes | DRG 139 |

---

## 🔬 Principal Diagnosis Guide — MDC 03

| Clinical Scenario                            | PDx Code                                            | DRG Pathway                 |
| -------------------------------------------- | --------------------------------------------------- | --------------------------- |
| Laryngeal carcinoma, total laryngectomy      | **[[C32.0]] (glottis) or [[C32.1]] (supraglottis)** | DRG 129/130                 |
| Squamous cell carcinoma of tonsil, resection | **[[C09.9]]**                                       | DRG 129/130                 |
| Radical neck dissection for metastatic nodes | **[[C77.0]] (secondary) — check PDx**               | DRG 129/130                 |
| Parotid gland tumor, parotidectomy           | **[[D11.0]] (benign) or [[C07]] (malignant)**       | DRG 139 or 129              |
| Peritonsillar abscess, I&D                   | **[[J36]]**                                         | DRG 140                     |
| Chronic sinusitis, FESS                      | **[[J32.9]] or specific sinus**                     | DRG 135/136                 |
| OSA, UPPP                                    | **[[G47.33]]**                                      | DRG 133/134                 |
| Acute epiglottitis with airway compromise    | **[[J05.10]]**                                      | DRG 145 or Pre-MDC if trach |
| Epistaxis requiring cautery/packing          | **[[R04.0]]**                                       | DRG 133/134 if OR           |
| Mastoiditis with mastoidectomy               | **[[H70.009]]**                                     | DRG 135/136                 |
| Nasal fracture, ORIF                         | **[[S02.2XXA]]**                                    | DRG 131/132                 |

---

## 🧪 Key Sequencing Pitfalls — MDC 03

### Pitfall 1: Missing Tracheostomy → Wrong DRG Tier

**Scenario:** H&N cancer patient with laryngectomy requires tracheostomy + MV 120 hours.
❌ **Wrong:** Code laryngectomy only → DRG 129 (RW ≈ 3.85)
✅ **Correct:** Code laryngectomy + 0B110F4 trach + MV hours → **DRG 004** (RW ≈ 11.0+)

### Pitfall 2: Malnutrition Missed in H&N Oncology

**Scenario:** Laryngeal cancer patient pre-op, albumin 2.0, BMI 16.8, dietitian note documents "severe malnutrition."
❌ **Wrong:** No malnutrition coded
✅ **Correct:** Query → [[E43]] Severe malnutrition (MCC) — moves DRG 130 → DRG 129

### Pitfall 3: "Urosepsis" Pattern — Here: "Neck Infection Without Sepsis Documented"

**Scenario:** Deep neck space infection, WBC 21k, fever, antibiotics, CT shows Ludwig's angina.
❌ **Wrong:** Code [[K12.2]] only — Non-CC
✅ **Correct:** Query for sepsis → [[A41.9]] + [[K12.2]] (source) → MCC DRG tier

### Pitfall 4: RLN Injury Not Coded After Neck Dissection

**Scenario:** Post-thyroidectomy, patient has new unilateral vocal cord paralysis documented by ENT on day 2.
✅ **Correct:** Code [[J38.01]] Paralysis of vocal cords, unilateral (CC) + [[J95.89]] Other post-procedural complication — POA = N (developed during stay); not a HAC, qualifies as CC.

---

## 📋 Coding Scenarios

### Scenario 1: Total Laryngectomy for Laryngeal SCC

**Admit:** 64M, T3 squamous cell carcinoma of glottis. Total laryngectomy + bilateral neck dissection.
**Comorbidities:** Active smoker [[F17.210]], T2DM [[E11.65]], severe malnutrition pre-op [[E43]], CKD 3b [[N18.32]].

| Code            | Type | Notes                         |
| --------------- | ---- | ----------------------------- |
| **[[C32.0]]**   | PDx  | SCC of glottis                |
| **[[E43]]**     | SDx  | Severe malnutrition — **MCC** |
| **[[F17.210]]** | SDx  | Nicotine dependence — CC      |
| **[[E11.65]]**  | SDx  | T2DM w/ hyperglycemia — CC    |
| **[[N18.32]]**  | SDx  | CKD 3b — CC                   |
| 0CTS0ZZ         | Proc | Total laryngectomy, open      |
| 07T50ZZ         | Proc | Bilateral neck dissection     |

**DRG:** 129 — Major H&N procedures w/ CC/MCC (MCC present via [[E43]])
**CDI Opportunity:** If post-op AKI documented → remains at DRG 129 w/ MCC, no change needed; additional MCC does not increase DRG further but is still correct to code.

---

### Scenario 2: Peritonsillar Abscess with Sepsis

**Admit:** 28F, peritonsillar abscess, I&D performed. WBC 24k, temp 39.3°C, tachycardia. BCx negative. Clinician documents sepsis.

| Code      | Type | Notes                                        |
| --------- | ---- | -------------------------------------------- |
| [[A41.9]] | PDx  | Sepsis — documented; source is peritonsillar |
| [[J36]]   | SDx  | Peritonsillar abscess — infection source     |
| 0CBC3ZZ   | Proc | Drainage of soft palate, percutaneous (I&D)  |

**DRG:** Moves to sepsis DRG (MDC 18), not MDC 03 — PDx of sepsis pulls to MDC 18/DRG 871/872.
> [!tip] Sepsis PDx Exits MDC 03
> When sepsis is the principal diagnosis, the case routes to **MDC 18** regardless of the ENT source. The ENT diagnosis becomes a secondary. Code the ENT source as the underlying infection site.

---

## 🩺 CDI Opportunities — MDC 03

| Clinical Finding                          | Query Target                    | Impact                   |
| ----------------------------------------- | ------------------------------- | ------------------------ |
| Pre-op low albumin/BMI in H&N oncology    | **Malnutrition [[E43]]/[[E44.0]]**  | MCC/CC                   |
| Fever + WBC + neck infection source       | **Sepsis [[A41.9]]**                | MCC; may shift to MDC 18 |
| Post-op oxygen requirement escalation     | **Resp failure [[J96.01]]**         | MCC                      |
| Vocal cord paralysis after neck procedure | **RLN injury [[J38.01]]**           | CC; postprocedural       |
| Creatinine rise with nephrotoxic abx      | **AKI [[N17.9]]**                   | MCC                      |
| Tracheostomy + prolonged vent             | **MV hour count → Pre-MDC trigger** | RW shift from 3.85 → 11+ |

See [[CDI Query Templates]] for compliant query language.

---

## 🔗 Related Notes

- [[CC-MCC Reference]]
- [[CDI Query Templates]]
- [[MDC 02 - Eye]]
- [[MDC 11 - Urology]]
- [[POA_Indicator_Guide]]
