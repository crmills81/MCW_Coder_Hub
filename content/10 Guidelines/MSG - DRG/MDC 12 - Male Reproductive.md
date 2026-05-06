---
tags:
  - mdc-12
  - drg
  - urology
  - male-reproductive
  - prostate
  - testis
  - inpatient
  - reimbursement
title: MDC 12 — Male Reproductive System
aliases:
  - MDC 12
  - MDC12
  - Male Reproductive DRGs
  - Urology MDC 12
specialty: Urology
code_type: MDC / DRG Reference
system: CMS MS-DRG FY2025
updated: 2025-05-05
related:
  - MS-DRG_Overview
  - MDC_11_Urology
  - CC-MCC_Reference
  - CDI_Query_Templates
  - POA_Indicator_Guide
status: complete
---

# 🔬 MDC 12 — Male Reproductive System

> [!abstract] MDC 12 Scope
> **MDC 12** covers diseases and disorders of the **prostate, testes, epididymis, seminal vesicles, and penis**. The principal diagnosis must be a male reproductive system condition (ICD-10-CM: **N40-N53, C60-C63, D29.x**). MDC 12 is a companion MDC to [[MDC 11 - Urology]] — together they represent the full urology inpatient DRG landscape.

---

## 📌 Specialty Context

MDC 12 is **lower volume** than MDC 11 but includes some of the most resource-intensive urology surgical cases: radical prostatectomy, orchiectomy for testicular malignancy, and penile prosthesis implantation. Comorbidity capture is critical here — many patients are older males with diabetes, CKD, and cardiovascular disease, all of which are CC/MCC opportunities.

---

## 🔢 MDC 12 DRG Table — Surgical

| DRG     | Description                                             | RW (approx) | Geo Mean LOS |
| ------- | ------------------------------------------------------- | ----------- | ------------ |
| **707** | Major male pelvic procedures w/ CC/MCC                  | **2.80**        | **5.5**          |
| **708** | Major male pelvic procedures w/o CC/MCC                 | **1.60**        | **2.8**          |
| **709** | Penis procedures w/ CC/MCC                              | **2.10**        | **5.0**          |
| **710** | Penis procedures w/o CC/MCC                             | **1.10**        | **2.2**          |
| **711** | Testes procedures w/ CC/MCC                             | **1.85**        | **4.8**          |
| **712** | Testes procedures w/o CC/MCC                            | **0.95**        | **2.0**          |
| **713** | Transurethral prostatectomy w/ CC/MCC                   | **1.70**        | **4.2**          |
| **714** | Transurethral prostatectomy w/o CC/MCC                  | **0.95**        | **2.0**          |
| **715** | Other male reproductive system OR procedures w/ CC/MCC  | **2.20**        | **5.2**          |
| **716** | Other male reproductive system OR procedures w/o CC/MCC | **1.10**        | **2.5**          |

> [!note] Two-Way Splits in MDC 12
> Unlike MDC 11 which has three-way splits (MCC/CC/no CC), many MDC 12 DRGs use **two-way splits** (w/ CC/MCC combined vs w/o CC/MCC). One qualifying CC *or* MCC moves the case to the higher-tier DRG.

---

## 🩺 MDC 12 DRG Table — Medical

| DRG     | Description                                          | RW (approx) | Geo Mean LOS |
| ------- | ---------------------------------------------------- | ----------- | ------------ |
| **722** | Malignancy, male reproductive system w/ MCC          | 1.95        | 6.8          |
| **723** | Malignancy, male reproductive system w/ CC           | 1.20        | 4.5          |
| **724** | Malignancy, male reproductive system w/o CC/MCC      | 0.75        | 2.8          |
| **725** | Benign prostatic hypertrophy w/ MCC                  | 1.50        | 5.2          |
| **726** | Benign prostatic hypertrophy w/ CC                   | 0.95        | 3.5          |
| **727** | Benign prostatic hypertrophy w/o CC/MCC              | 0.65        | 2.2          |
| **728** | Inflammation of the male reproductive system w/ MCC  | 1.60        | 5.8          |
| **729** | Inflammation of the male reproductive system w/o MCC | 0.90        | 3.8          |
| **730** | Other male reproductive system diagnoses w/ CC/MCC   | 1.10        | 3.8          |
| **731** | Other male reproductive system diagnoses w/o CC/MCC  | 0.65        | 2.2          |

---

## ⚖️ CC/MCC Drivers — MDC 12

| Code         | Description                             | CC/MCC  | Scenario                              |
| ------------ | --------------------------------------- | ------- | ------------------------------------- |
| **[[N17.9]]**    | AKI                                     | **MCC** | Post-TURP, post-prostatectomy AKI     |
| **[[A41.9]]**    | Sepsis, unspecified                     | **MCC** | Post-op infection → sepsis            |
| **[[R65.21]]**   | Septic shock                            | **MCC** | Severe post-op infection              |
| **[[J96.01]]**   | Acute resp failure w/ hypoxia           | **MCC** | Post-op respiratory compromise        |
| **[[G93.41]]**   | Metabolic encephalopathy                | **MCC** | Uremic or drug-related AMS            |
| **[[N18.6]]**    | ESRD                                    | **MCC** | Pre-existing in surgical case         |
| **[[N18.5]]**    | CKD Stage 5                             | **MCC** | Near-ESRD comorbidity                 |
| **[[N18.4]]**    | CKD Stage 4                             | **CC**  | Common in older male urology patients |
| **[[E11.65]]**   | T2DM with hyperglycemia                 | **CC**  | Glucose management post-op            |
| **[[I50.23]]**   | Acute-on-chronic systolic HF            | **MCC** | Cardiac comorbidity decompensating    |
| **[[Z79.01]]**   | Long-term anticoagulant use             | **CC**  | Bleeding risk; hematoma management    |
| **[[G47.33]]**   | OSA                                     | **CC**  | Anesthesia risk documentation         |
| **[[E43]]**      | Severe protein-calorie malnutrition     | **MCC** | Pre-op nutritional compromise         |
| **[[T83.61XA]]** | Infection of prosthetic device (penile) | **CC**  | Penile implant infection              |

---

## 🔪 Key ICD-10-PCS Procedures — MDC 12

### Prostate

| PCS Code    | Description                                      | OR? | DRG Pathway                     |
| ----------- | ------------------------------------------------ | --- | ------------------------------- |
| **0VT00ZZ** | Resection of prostate, open                      | **Yes** | DRG 707/708 — Major male pelvic |
| **0VT04ZZ** | Resection of prostate, perc endoscopic (robotic) | **Yes** | DRG 707/708                     |
| **0VB08ZZ** | Excision of prostate, endoscopic (TURP)          | **Yes** | DRG 713/714                     |
| **0V508ZZ** | Destruction of prostate, endoscopic              | **Yes** | Transurethral pathway           |
| **0VH00MZ** | Insertion of stimulator lead, prostate           | **Yes** | Other male reproductive OR      |

### Testes & Epididymis

| PCS Code    | Description                            | OR? | DRG Pathway |
| ----------- | -------------------------------------- | --- | ----------- |
| **0VTF0ZZ** | Resection of right testis, open        | **Yes** | DRG 711/712 |
| **0VTG0ZZ** | Resection of left testis, open         | **Yes** | DRG 711/712 |
| **0VBF0ZZ** | Excision of right testis (orchiectomy) | **Yes** | DRG 711/712 |
| **0VBJ0ZZ** | Excision of right epididymis           | **Yes** | DRG 711/712 |

### Penis

| PCS Code | Description                                 | OR?     | DRG Pathway |
| -------- | ------------------------------------------- | ------- | ----------- |
| 0VHT0LZ  | Insertion of inflatable penile prosthesis   | **Yes** | DRG 709/710 |
| 0VTT0ZZ  | Resection of prepuce (adult circumcision)   | **Yes** | DRG 709/710 |
| 0VBT0ZZ  | Excision of penis (partial/total penectomy) | **Yes** | DRG 709/710 |

---

## 🔬 Principal Diagnosis Guide — MDC 12

| Clinical Scenario                             | PDx Code   | DRG Pathway                               |
| --------------------------------------------- | ---------- | ----------------------------------------- |
| BPH with urinary retention, admitted for TURP | **[[N40.1]]**  | DRG 713/714 — Transurethral prostatectomy |
| Prostate cancer, radical prostatectomy        | **[[C61]]**    | DRG 707/708 — Major male pelvic           |
| Testicular malignancy, orchiectomy            | **[[C62.91]]** | DRG 711/712 — Testes procedures           |
| Epididymo-orchitis (inflammation)             | **[[N45.3]]**  | DRG 728/729 — Inflammation                |
| Penile prosthesis implant, ED                 | **[[N52.9]]**  | DRG 709/710 — Penis procedures            |
| Penile carcinoma                              | **[[C60.9]]**  | DRG 709/710 — Penis procedures            |
| Prostatitis, acute bacterial                  | **[[N41.0]]**  | DRG 728/729 — Inflammation                |
| Seminal vesicle cyst                          | **[[N50.89]]** | DRG 730/731 — Other male reproductive     |

---

## 🧪 Key Sequencing Pitfalls — MDC 12

### Pitfall 1: BPH Without LUTS When Retention Is Present

❌ **Wrong:** [[N40.0]] BPH without lower urinary tract symptoms
✅ **Correct:** [[N40.1]] BPH with LUTS — when retention, hesitancy, frequency drive the admission — CC in many DRGs

### Pitfall 2: Post-TURP Bleeding Coded as Hemorrhage Only

**Scenario:** Patient returns with hematuria, clot retention after TURP.
✅ **Correct:** [[N99.820]] Postprocedural hemorrhage of urinary system following procedure — code the postprocedural complication, not just hematuria [[R31.0]]

### Pitfall 3: Prostate Cancer Staging Ignored

**Scenario:** C61 coded; pathology shows T3a, Gleason 8, PSA 18.
✅ **Add:** [[Z85.46]] Personal history, staging note; confirm PSA [[R97.20]] if elevated and monitored. Specificity matters for quality metrics even if DRG unchanged.

---

## 🩺 CDI Opportunities — MDC 12

| Clinical Finding            | Query Target                       | Impact |
| --------------------------- | ---------------------------------- | ------ |
| Post-TURP creatinine rise   | **AKI [[N17.9]]**                  | MCC    |
| Fever, elevated WBC post-op | **Sepsis [[A41.9]]**               | MCC    |
| Glucose management in-house | **T2DM hyperglycemia [[E11.65]]**  | CC     |
| GFR in chart at any stage   | **CKD stage N18.xx**               | CC/MCC |
| Albumin low, weight loss    | **Malnutrition [[E43]]/[[E44.0]]** | MCC/CC |
| SpO₂ drop post-anesthesia   | **Resp failure [[J96.01]]**        | MCC    |

See [[CDI Query Templates]] for full query language.

---

## 🔗 Related Notes

- [[MDC 11 - Urology]]
- [[MS-DRG_Overview]]
- [[CC-MCC Reference]]
- [[CDI Query Templates]]
- [[POA_Indicator_Guide]]
