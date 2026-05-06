---
tags:
  - mdc-11
  - drg
  - urology
  - kidney
  - urinary-tract
  - inpatient
  - reimbursement
  - pcs
title: MDC 11 — Kidney & Urinary Tract (Urology)
aliases:
  - MDC 11
  - MDC11
  - Kidney DRGs
  - Urinary Tract DRGs
  - Urology DRGs
  - MDC Eleven
specialty: Urology
code_type: MDC / DRG Reference
system: CMS MS-DRG FY2025
updated: 2025-05-05
related:
  - MS-DRG_Overview
  - CC-MCC_Reference
  - CDI_Query_Templates
  - MDC_12_MaleReproductive
  - IPPS_Payment_Overview
status: complete
---

# 🫘 MDC 11 — Kidney & Urinary Tract

> [!abstract] MDC 11 Scope
> **MDC 11** covers diseases and disorders of the **kidney, ureter, bladder, and urethra** — the upper and lower urinary tract. It does **NOT** include the male or female reproductive organs (**MDC 12/13**) or renal **[[dialysis]]** as a primary procedure (**Pre-MDC**). Principal diagnosis must fall within the **renal/urinary ICD-10-CM chapter (N00-N39)** or related conditions mapped to MDC 11.

---

## 📌 Specialty Context

**MDC 11** is one of two MDCs directly in the urology scope (**alongside [[MDC 12 - Male Reproductive]]**). It is a **high-volume, high-variability** MDC — cases range from uncomplicated UTI admissions (**low RW**) to bilateral nephrectomies for malignancy (high RW) to kidney transplants (Pre-MDC, bypasses MDC 11 entirely).

> [!important] Kidney Transplant Is Pre-MDC
> Kidney transplant (**ICD-10-PCS: 0TY00Z0, 0TY10Z0**) bypasses MDC 11 and is assigned to **Pre-MDC DRG 652/653/654** (Kidney Transplant). These carry RWs of 3.0-4.5+. Always confirm transplant PCS coding is complete before grouper submission.

---

## 🗂️ Section Index

1. [[#🔢 MDC 11 DRG Table — Surgical]]
2. [[#🩺 MDC 11 DRG Table — Medical]]
3. [[#⚖️ CC/MCC Drivers in MDC 11]]
4. [[#🔬 Principal Diagnosis Guide — MDC 11]]
5. [[#🔪 Key ICD-10-PCS Procedures — Urology]]
6. [[#🔑 OR vs Non-OR Procedures — MDC 11]]
7. [[#🧪 Sequencing Pitfalls in Urology]]
8. [[#🩺 CDI Opportunities — MDC 11]]
9. [[#📋 Urology Coding Scenarios]]

---

## 🔢 MDC 11 DRG Table — Surgical

| DRG     | Description                                            | Type         | RW (approx) | Geo Mean LOS |
| ------- | ------------------------------------------------------ | ------------ | ----------- | ------------ |
| **652** | Kidney transplant w/ MCC                               | Pre-MDC/Surg | **4.50**        | **8.5**          |
| **653** | Kidney transplant w/ CC                                | Pre-MDC/Surg | **3.20**        | **6.2**          |
| **654** | Kidney transplant w/o CC/MCC                           | Pre-MDC/Surg | **2.85**        | **5.1**          |
| **661** | Kidney & ureter procedures for neoplasm w/ MCC         | Surg         | **4.10**        | **9.0**          |
| **662** | Kidney & ureter procedures for neoplasm w/ CC          | Surg         | **2.60**        | **5.8**          |
| **663** | Kidney & ureter procedures for neoplasm w/o CC/MCC     | Surg         | **1.80**        | **3.5**          |
| **664** | Kidney & ureter procedures for non-neoplasm w/ MCC     | Surg         | **3.85**        | **8.2**          |
| **665** | Kidney & ureter procedures for non-neoplasm w/ CC      | Surg         | **2.10**        | **5.0**          |
| **666** | Kidney & ureter procedures for non-neoplasm w/o CC/MCC | Surg         | **1.45**        | **3.1**          |
| **667** | Prostatectomy w/ MCC                                   | Surg         | **3.40**        | **7.5**          |
| **668** | Prostatectomy w/ CC                                    | Surg         | **2.00**        | **4.8**          |
| **669** | Prostatectomy w/o CC/MCC                               | Surg         | **1.35**        | **2.9**          |
| **670** | Transurethral procedures w/ MCC                        | Surg         | **2.80**        | **6.2**          |
| **671** | Transurethral procedures w/ CC                         | Surg         | **1.60**        | **3.5**          |
| **672** | Transurethral procedures w/o CC/MCC                    | Surg         | **1.05**        | **2.1**          |
| **673** | Other kidney & urinary tract procedures w/ MCC         | Surg         | **4.60**        | **9.8**          |
| **674** | Other kidney & urinary tract procedures w/ CC          | Surg         | **2.30**        | **5.5**          |
| **675** | Other kidney & urinary tract procedures w/o CC/MCC     | Surg         | **1.40**        | **3.2**          |

> [!note] RW Approximations
> Relative weights above are approximate **FY2025** values. Always verify against the current **CMS IPPS DRG** table in your encoder or the **CMS** website. Weights update each October 1.

---

## 🩺 MDC 11 DRG Table — Medical

| DRG     | Description                                       | Type | RW (approx) | Geo Mean LOS |
| ------- | ------------------------------------------------- | ---- | ----------- | ------------ |
| **682** | Renal failure w/ MCC                              | Med  | **1.85**        | **5.8**          |
| **683** | Renal failure w/ CC                               | Med  | **1.10**        | **4.0**          |
| **684** | Renal failure w/o CC/MCC                          | Med  | **0.72**        | **2.8**          |
| **685** | Admit for renal dialysis                          | Med  | **0.65**        | **1.5**          |
| **686** | Kidney & urinary tract neoplasms w/ MCC           | Med  | **1.90**        | **6.2**          |
| **687** | Kidney & urinary tract neoplasms w/ CC            | Med  | **1.20**        | **4.1**          |
| **688** | Kidney & urinary tract neoplasms w/o CC/MCC       | Med  | **0.80**        | **2.9**          |
| **689** | Kidney & urinary tract infections w/ MCC          | Med  | **1.60**        | **5.4**          |
| **690** | Kidney & urinary tract infections w/o MCC         | Med  | **0.95**        | **3.8**          |
| **691** | Urinary stones w/ ESW lithotripsy w/ CC/MCC       | Med  | **1.40**        | **3.2**          |
| **692** | Urinary stones w/ ESW lithotripsy w/o CC/MCC      | Med  | **0.95**        | **2.0**          |
| **693** | Urinary stones w/o ESW lithotripsy w/ MCC         | Med  | **1.50**        | **4.8**          |
| **694** | Urinary stones w/o ESW lithotripsy w/ CC          | Med  | **0.90**        | **3.0**          |
| **695** | Urinary stones w/o ESW lithotripsy w/o CC/MCC     | Med  | **0.65**        | **2.0**          |
| **696** | Other kidney & urinary tract diagnoses w/ MCC     | Med  | **1.75**        | **5.5**          |
| **697** | Other kidney & urinary tract diagnoses w/ CC      | Med  | **1.00**        | **3.8**          |
| **698** | Other kidney & urinary tract diagnoses w/o CC/MCC | Med  | **0.65**        | **2.5**          |

---

## ⚖️ CC/MCC Drivers in MDC 11

These secondary diagnoses are the highest-value CC/MCC captures in MDC 11 cases.

### MCCs — Urology Priority

| Code       | Description                      | Common Scenario                             |
| ---------- | -------------------------------- | ------------------------------------------- |
| **[[N17.9]]**  | AKI, unspecified                 | Post-obstructive AKI; sepsis-associated AKI |
| **[[N17.0]]**  | AKI with renal cortical necrosis | Severe ischemic AKI                         |
| **[[A41.51]]** | Sepsis due to E. coli            | Pyelonephritis → urosepsis                  |
| **[[A41.59]]** | Sepsis, other gram-negative      | Klebsiella, Pseudomonas UTI-sourced         |
| **[[R65.20]]** | Severe sepsis w/o shock          | AKI + sepsis combination                    |
| **[[R65.21]]** | Septic shock                     | Life-threatening urosepsis                  |
| **[[J96.01]]** | Acute resp failure w/ hypoxia    | Septic patient on the floor                 |
| **[[G93.41]]** | Metabolic encephalopathy         | AMS in uremic or septic patient             |
| **[[N18.6]]**  | ESRD                             | Comorbidity in surgical urology cases       |

### CCs — Urology Priority

| Code         | Description                             | Common Scenario                              |
| ------------ | --------------------------------------- | -------------------------------------------- |
| **[[N18.4]]**    | CKD Stage 4                             | Pre-op evaluation; post-procedure monitoring |
| **[[N18.5]]**    | CKD Stage 5 (non-dialysis)              | Borderline ESRD                              |
| **[[N13.30]]**   | Obstructive uropathy, unspec            | Hydronephrosis from calculus or tumor        |
| **[[N13.6]]**    | Pyonephrosis                            | Infected hydronephrosis — query sepsis       |
| **[[T83.511A]]** | Infection, indwelling urethral catheter | CAUTI (POA = N → HAC)                        |
| **[[N40.1]]**    | BPH with LUTS                           | Symptomatic BPH; retention management        |
| **[[Z79.01]]**   | Long-term anticoagulant use             | Hematuria management; surgical planning      |
| **[[E11.65]]**   | T2DM with hyperglycemia                 | Glucose management during admission          |
| **[[G47.33]]**   | Obstructive sleep apnea                 | Pre-op anesthesia risk                       |

---

## 🔬 Principal Diagnosis Guide — MDC 11

The principal diagnosis drives the MDC 11 assignment. Common urology PDx choices and their DRG pathways:

| Clinical Scenario                    | Likely PDx Code        | DRG Pathway                                      |
| ------------------------------------ | ---------------------- | ------------------------------------------------ |
| Pyelonephritis, E. coli              | **[[N10]] + [[B96.20]]**   | DRG 689/690 — Kidney & UT infections             |
| AKI, post-obstructive                | **[[N17.9]]**              | DRG 682/683/684 — Renal failure                  |
| Ureteral calculus with obstruction   | **[[N20.1]]**              | DRG 693/694/695 — Urinary stones                 |
| Bladder cancer, radical cystectomy   | **[[C67.9]]**              | DRG 734/735 — Pelvic evisceration                |
| Renal cell carcinoma, nephrectomy    | **[[C64.1]] or [[C64.2]]** | DRG 661/662/663 — Kidney procedures for neoplasm |
| BPH with retention, TURP             | **[[N40.1]]**              | DRG 670/671/672 — Transurethral procedures       |
| ESRD, access failure                 | **[[N18.6]]**              | DRG 682/683/684 or Pre-MDC vascular              |
| Gross hematuria, cystoscopy          | **[[R31.0]]**              | DRG 670/671/672 if OR; DRG 698 if medical        |
| Urothelial carcinoma of renal pelvis | **[[C65.1]]**              | DRG 661/662/663                                  |
| Vesicoureteral reflux w/ nephropathy | **[[N13.70]]**             | DRG 664/665/666                                  |

> [!warning] "Renal Failure" vs "Kidney Infection" — Don't Conflate
> A patient admitted for pyelonephritis who *also* develops AKI during the stay: the PDx is [[N10]] (pyelonephritis) if that is why they were admitted. [[N17.9]] becomes a secondary CC/MCC, not the PDx. Incorrectly sequencing AKI as PDx shifts the DRG to the renal failure trio and may misrepresent the clinical picture.

---

## 🔪 Key ICD-10-PCS Procedures — Urology

### Kidney Procedures

| PCS Code    | Description                                        | Approach     | DRG Pathway                    |
| ----------- | -------------------------------------------------- | ------------ | ------------------------------ |
| **0TB00ZZ** | Excision of right kidney, open                     | Open         | Surg — nephrectomy             |
| **0TB00ZZ** | Excision of right kidney, open (partial)           | Open         | Surg — partial nephrectomy     |
| **0TT00ZZ** | Resection of right kidney, open                    | Open         | Surg — radical nephrectomy     |
| **0TT04ZZ** | Resection of right kidney, percutaneous endoscopic | Laparoscopic | Surg — lap radical nephrectomy |
| **0TY00Z0** | Transplantation of right kidney, allogeneic        | Open         | Pre-MDC DRG 652/653/654        |
| **0T900ZZ** | Drainage of right kidney                           | Open         | Non-OR (usually)               |
| **0TC30ZZ** | Extirpation of matter, right kidney pelvis         | Open         | Surg — calculus removal        |

### Ureter Procedures

| PCS Code | Description                               | Notes                    |
| -------- | ----------------------------------------- | ------------------------ |
| **0TB60ZZ**  | Excision of right ureter, open            | Ureterectomy             |
| **0TC60ZZ**  | Extirpation of matter, right ureter, open | Ureterolithotomy         |
| **0TL60DZ**  | Occlusion of right ureter, intraluminal   | Stent placement (Non-OR) |
| **0TQ60ZZ**  | Repair of right ureter, open              | Ureteral reconstruction  |
| **0TV60ZZ**  | Restriction of right ureter               | Ureteral tapering        |

### Bladder Procedures

| PCS Code | Description                                                    | Notes                          |
| -------- | -------------------------------------------------------------- | ------------------------------ |
| **0TTB0ZZ**  | Resection of bladder, open                                     | Radical cystectomy             |
| **0TBB8ZZ**  | Excision of bladder, via natural/artificial opening endoscopic | TURBT — transurethral          |
| **0TCB8ZZ**  | Extirpation of matter, bladder, endoscopic                     | Clot evacuation, transurethral |
| **0T2BX0Z**  | Change drainage device, bladder, external                      | Catheter exchange — Non-OR     |
| **0TQB0ZZ**  | Repair of bladder, open                                        | Bladder reconstruction         |
| **0T1B0ZD**  | Bypass bladder to cutaneous                                    | Ileal conduit                  |

### Urethra Procedures

| PCS Code | Description                              | Notes                     |
| -------- | ---------------------------------------- | ------------------------- |
| **0TDB0ZZ**  | Extraction of urethral matter            | Urethral calculus removal |
| **0TUB0JZ**  | Supplement urethra, synthetic substitute | Urethral reconstruction   |

### Nephrostomy / Drainage

| PCS Code | Description                             | Notes                        |
| -------- | --------------------------------------- | ---------------------------- |
| **0T903ZZ**  | Drainage of right kidney, percutaneous  | Percutaneous nephrostomy     |
| **0T913ZZ**  | Drainage of left kidney, percutaneous   |                              |
| **0T9B3ZZ**  | Drainage of bladder, percutaneous       | Suprapubic catheter via perc |
| **0T9B7ZZ**  | Drainage of bladder via natural opening | Transurethral Foley (Non-OR) |

> [!tip] Foley Catheter Is Rarely OR
> Routine Foley insertion (**0T9B7ZZ**) is a **Non-OR procedure** and does not qualify the case for a surgical DRG. Percutaneous nephrostomy placement (**0T903ZZ**) IS an OR procedure in MDC 11. Know the distinction — one affects the DRG pathway, one does not.

---

## 🔑 OR vs Non-OR Procedures — MDC 11

| Procedure | OR Designation | DRG Effect |
|---|---|---|
| Radical nephrectomy (open or lap) | **OR** | Surgical DRG pathway |
| Partial nephrectomy (open or lap) | **OR** | Surgical DRG pathway |
| Kidney transplant | **OR** | Pre-MDC DRG |
| TURBT (transurethral bladder tumor resection) | **OR** | Surgical DRG pathway |
| TURP (transurethral prostate resection) | **OR** | Surgical DRG pathway → MDC 12 |
| Radical cystectomy | **OR** | Surgical DRG pathway |
| Percutaneous nephrostomy | **OR** | Surgical DRG pathway |
| Ureteral stent insertion (endoscopic) | **OR** | Varies by approach — verify encoder |
| ESWL (lithotripsy) | **Non-OR** | Medical DRG 691/692 |
| Ureteroscopy with stone extraction | **OR** | Surgical DRG 670-672 |
| Foley catheter insertion | **Non-OR** | No DRG impact |
| Bladder irrigation | **Non-OR** | No DRG impact |

---

## 🧪 Sequencing Pitfalls in Urology

### Pitfall 1: Urosepsis Coded as UTI Only

**Scenario:** Patient admitted with temp 39.1°C, WBC 22k, HR 120, UA positive, blood culture → E. coli. Physician documents "urosepsis."

❌ **Wrong:** Code only [[N39.0]] UTI — DRG 689/690, no MCC
✅ **Correct:** Query → [[A41.51]] Sepsis due to E. coli + [[N39.0]] — DRG 689 w/ MCC or shifts to sepsis DRG

---

### Pitfall 2: AKI Missed in Obstructive Cases

**Scenario:** Patient admitted for ureteral calculus. Creatinine 0.9 on admission, rises to 2.1 with hydronephrosis. Relieved with stent placement.

❌ **Wrong:** Code only [[N20.1]] ureteral calculus + obstruction — DRG 693 w/o CC/MCC
✅ **Correct:** Query → Add [[N17.9]] AKI — DRG 693 moves to MCC tier (if AKI documented as present)

---

### Pitfall 3: CKD Stage Not Specified

**Scenario:** Provider documents "CKD" without staging. GFR in chart = 22.

❌ **Wrong:** Code [[N18.9]] CKD unspecified — CC in some DRGs, lower tier
✅ **Correct:** Query for stage → [[N18.4]] CKD Stage 4 — specific CC with higher tier impact

---

### Pitfall 4: Transplant Not Coded as Pre-MDC

**Scenario:** Patient undergoes kidney transplant, also has T2DM and HTN.

❌ **Wrong:** Code T2DM as PDx, transplant as secondary — incorrect MDC and DRG
✅ **Correct:** PDx = renal failure or ESRD; PCS code [[0TY00Z0]] → Pre-MDC DRG 652/653/654

---

### Pitfall 5: CAUTI Coded POA = Y When It Developed During Stay

**Scenario:** Catheter placed on admission; UTI documented on day 4.

❌ **Wrong:** POA = Y for [[T83.511A]] → counts as CC/MCC
✅ **Correct:** POA = N → HAC designation → does NOT qualify as CC/MCC; hospital faces HAC penalty flag

---

## 🩺 CDI Opportunities — MDC 11

| Clinical Finding                      | Query Target                          | CC/MCC Impact |
| ------------------------------------- | ------------------------------------- | ------------- |
| Creatinine rise during stay           | **AKI — [[N17.9]]**                       | MCC           |
| Positive blood culture in UTI patient | **Sepsis organism — A41.xx**              | MCC           |
| Shock physiology (vasopressors)       | **Septic shock — [[R65.21]]**             | MCC           |
| Altered mental status + UTI/uremia    | **Metabolic encephalopathy — [[G93.41]]** | MCC           |
| GFR documented in chart               | **CKD stage — N18.3x-[[N18.6]]**          | CC/MCC        |
| Albumin < 2.5, weight loss noted      | **Malnutrition — [[E43]]/[[E44.0]]**      | MCC/CC        |
| SpO₂ dropping; O₂ initiated           | **Resp failure — [[J96.01]]**             | MCC           |
| IV diuresis given                     | **Volume overload / HF type — I50.xx**    | CC/MCC        |

For full query language, see [[CDI Query Templates]].

---

## 📋 Urology Coding Scenarios

### Scenario 1: Radical Nephrectomy for RCC

**Admit:** 58M, right renal cell carcinoma, scheduled for robotic-assisted radical right nephrectomy.
**Comorbidities documented:** T2DM with hyperglycemia, CKD Stage 3b, OSA on CPAP, HTN.
**Procedure:** Robotic right radical nephrectomy (laparoscopic approach)

| Code           | Type      | Rationale                                                 |
| -------------- | --------- | --------------------------------------------------------- |
| [[C64.1]]  | PDx       | RCC, right kidney — admission reason                      |
| [[N18.32]] | SDx       | CKD Stage 3b — CC                                         |
| [[E11.65]] | SDx       | T2DM with hyperglycemia — CC                              |
| [[G47.33]] | SDx       | OSA — CC                                                  |
| [[I10]]    | SDx       | HTN — CC (if evaluated)                                   |
| 0TT04ZZ        | Procedure | Resection right kidney, percutaneous endoscopic (robotic) |

**Expected DRG:** 661 (Kidney procedures for neoplasm w/ MCC) — if MCC captured, or 662 w/ CC (multiple CCs but no MCC)

> [!tip] No MCC Here — Multiple CCs Still Cap at CC Tier
> CKD 3b, T2DM with hyperglycemia, and OSA are all CCs, not MCCs. The DRG will be 662, not 661, unless an MCC (AKI, respiratory failure, sepsis) is also documented. CDI opportunity: check post-op creatinine for AKI.

---

### Scenario 2: Urosepsis / Pyelonephritis

**Admit:** 72F, fever, flank pain, UA positive, BC → E. coli, WBC 19k, HR 115, temp 38.8°C, creatinine 1.9 (baseline 0.9). Started on IV antibiotics and fluid resuscitation.

| Code | Type | Rationale |
|---|---|---|
| [[A41.51]] | PDx | Sepsis due to E. coli — confirmed by query |
| [[N10]] | SDx | Pyelonephritis — infection source |
| [[N17.9]] | SDx | AKI — creatinine 0.9→1.9; confirmed by query |
| [[N18.31]] | SDx | CKD Stage 3a (pre-existing, baseline Cr elevated per records) |

**DRG Result:** DRG 871 (Septicemia w/ MV 96+ hrs) or **DRG 872** (Septicemia or severe sepsis w/o MV 96+ hrs w/ MCC)
→ [[N17.9]] as MCC + sepsis PDx → high-tier DRG

---

### Scenario 3: TURBT for Bladder Tumor

**Admit:** 67M, gross hematuria, cystoscopy confirms bladder lesion, TURBT performed.
**Comorbidities:** HTN, T2DM, on warfarin ([[Z79.01]]).

| Code       | Type      | Rationale                                                               |
| ---------- | --------- | ----------------------------------------------------------------------- |
| [[D41.40]] | PDx       | Neoplasm of uncertain behavior, unspecified bladder — pre-pathology     |
| [[R31.0]]  | SDx       | Gross hematuria — presenting symptom (code if separately addressed)     |
| [[Z79.01]] | SDx       | Long-term anticoagulant — CC; affects surgical and hematuria management |
| [[E11.9]]  | SDx       | T2DM — without complication if not specifically managed                 |
| [[I10]]    | SDx       | HTN                                                                     |
| 0TBB8ZZ    | Procedure | Excision of bladder via endoscopic (TURBT)                              |

**Expected DRG:** 670/671/672 — Transurethral procedures. With [[Z79.01]] as CC → **DRG 671**

> [!note] Diagnosis After Pathology
> If pathology returns during the stay confirming malignancy ([[C67.9]]), update the diagnosis code. If pathology is pending at discharge, code to "uncertain behavior" per OGCR guidelines.

---

## 🔗 Related Notes

- [[MS-DRG_Overview]]
- [[CC-MCC Reference]]
- [[CDI Query Templates]]
- [[MDC 12 - Male Reproductive]]
- [[MDC 03 - ENT]]
- [[IPPS_Payment_Overview]]
- [[POA_Indicator_Guide]]
- [[HAC_List]]
- [[N17.9]]
- [[A41.51]]
- [[N18.6]]

---

*DRG relative weights and MDC logic update annually (October 1, CMS IPPS Final Rule). Verify all procedure OR designations in your encoder for the current fiscal year.*
