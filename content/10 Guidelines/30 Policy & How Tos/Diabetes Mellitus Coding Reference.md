---
tags:
  - diabetes
  - DM
  - E10
  - E11
  - E13
  - HCC
  - inpatient
  - PMR
  - CIC-prep
  - comorbidity
  - complications
title: Diabetes Mellitus - Inpatient Coding Reference
specialty: Physical Medicine and Rehabilitation / General Inpatient
topic: Diabetes Mellitus ICD-10-CM Coding
created: 2026-05-07
primary_dx_categories: E10, E11, E13
ms_drg_note: DM coding drives CC/MCC capture and HCC risk adjustment — critical secondary diagnosis in amputee and PMR populations
hcc_categories: HCC-35 HCC-36 HCC-17 HCC-18 HCC-19
coder_note: Inpatient profee reference - MCW Inpatient Abstraction Team
status: Active ✅
---

# Diabetes Mellitus - Inpatient Coding Reference

---

## 🏥 Clinical Overview

> **Why does diabetes coding matter so much in inpatient PMR?** Diabetes mellitus (DM) is the #1 underlying cause of lower extremity amputation in the United States. The vast majority of your amputee patients will carry a DM diagnosis. Beyond amputation, DM drives a cascade of complications — neuropathy, nephropathy, retinopathy, peripheral vascular disease, autonomic dysfunction — all of which are active, clinically managed comorbidities during an inpatient rehab stay. Coding DM accurately, *with its complications*, is critical for DRG CC/MCC capture, HCC risk adjustment, and supporting medical necessity.

### The Core Coding Rule for DM

> **ICD-10-CM instructs: when a patient has DM AND a complication, assume a causal relationship and code them together as a combination code — UNLESS the physician explicitly states they are unrelated.**

This is a significant departure from old ICD-9 logic. You do **not** need the physician to write "due to diabetes" for most DM complications. If the patient has DM and diabetic neuropathy, you code E11.40. The combination code does both jobs. You do **not** code E11 (DM alone) *and then* a separate neuropathy code.

### Type 1 vs. Type 2 vs. Other — How to Tell

| Type                        | Code Category | Key Clinical Clues                                                                           |
| --------------------------- | ------------- | -------------------------------------------------------------------------------------------- |
| **Type 1 (T1DM)**               | **E10**           | Insulin-dependent since youth; C-peptide absent; absolute insulin requirement; often slender |
| **Type 2 (T2DM)**               | **E11**           | Most common; adult onset; often obese; may or may not use insulin                            |
| **Drug/chemical-induced**       | **E09**           | Caused by steroids, tacrolimus, antipsychotics, etc.                                         |
| **Due to underlying condition** | **E08**           | DM secondary to pancreatitis, Cushing's, pancreatic cancer                                   |
| **Other specified**             | **E13**           | Latent autoimmune DM in adults (LADA), post-pancreatectomy DM                                |
| **Unspecified**                 | **E14**           | ⚠️ Avoid — query for type                                                                    |

> **When insulin use is documented but type is unclear:** E11 (Type 2) with an insulin use code ([[Z79.4]]) is the default when type is not specified. Type 2 patients commonly use insulin; insulin use alone does NOT make a patient Type 1. Query the physician if documentation is genuinely ambiguous.

---

## 📋 E10 - Type 1 Diabetes Mellitus

> Parent code E10 is **not billable**. Code to full specificity.

---

### E10 with Hyperosmolarity

| Code           | Description                                                                          | CC/MCC | HCC    |
| -------------- | ------------------------------------------------------------------------------------ | ------ | ------ |
| **[[E10.00]]** | T1DM with hyperosmolarity without nonketotic hyperglycemic-hyperosmolar coma (NKHHC) | MCC    | **HCC 17** |
| **[[E10.01]]** | T1DM with hyperosmolarity with coma                                                  | MCC    | **HCC 17** |

---

### E10 with Ketoacidosis (DKA)

| Code           | Description                         | CC/MCC | HCC    |
| -------------- | ----------------------------------- | ------ | ------ |
| **[[E10.10]]** | T1DM with ketoacidosis without coma | MCC    | **HCC 17** |
| **[[E10.11]]** | T1DM with ketoacidosis with coma    | MCC    | **HCC 17** |

> **DKA** is a life-threatening complication almost exclusively seen in T1DM (though T2DM can have DKA under extreme stress). Documentation: anion gap metabolic acidosis, elevated serum ketones, blood glucose typically >250 mg/dL. DKA is an MCC — extremely important for DRG weight.

---

### E10 with Kidney Complications

| Code           | Description                                          | CC/MCC | HCC    |
| -------------- | ---------------------------------------------------- | ------ | ------ |
| **[[E10.21]]** | T1DM with diabetic nephropathy                       | CC     | **HCC 19** |
| **[[E10.22]]** | T1DM with diabetic chronic kidney disease, stage 1-2 | CC     | **HCC 19** |
| **[[E10.23]]** | T1DM with diabetic chronic kidney disease, stage 3a  | CC     | **HCC 19** |
| **[[E10.24]]** | T1DM with diabetic chronic kidney disease, stage 3b  | CC     | **HCC 19** |
| **[[E10.25]]** | T1DM with diabetic chronic kidney disease, stage 4   | MCC    | **HCC 19** |
| **[[E10.26]]** | T1DM with diabetic chronic kidney disease, stage 5   | MCC    | **HCC 19** |
| **[[E10.29]]** | T1DM with other diabetic kidney complication         | CC     | **HCC 19** |

> **Combination code guidance:** When coding E10.2x for CKD, you still add the CKD stage code ([[N18.1]]-[[N18.6]]) as an additional diagnosis per ICD-10 instructions. The E10.2x code tells you *DM is the cause*; the N18 code specifies the *stage*.

---

### E10 with Ophthalmic Complications

| Code         | Description                                                                  | CC/MCC | HCC        |
| ------------ | ---------------------------------------------------------------------------- | ------ | ---------- |
| **[[E10.311]]**  | T1DM with unspecified diabetic retinopathy with macular edema                | CC     | **HCC 19** |
| **[[E10.319]]**  | T1DM with unspecified diabetic retinopathy without macular edema             | —      | **HCC 19** |
| **[[E10.321]]**  | T1DM with mild nonproliferative retinopathy with macular edema, right eye    | CC     | **HCC 19** |
| **[[E10.329]]**  | T1DM with mild nonproliferative retinopathy without macular edema, right eye | —      | **HCC 19** |
| **[[E10.341]]**  | T1DM with severe nonproliferative retinopathy with macular edema, right eye  | CC     | **HCC 19** |
| **[[E10.351]]**  | T1DM with proliferative retinopathy with macular edema, right eye            | CC     | **HCC 19** |
| **[[E10.36]]**   | T1DM with diabetic cataract                                                  | —      | **HCC 19** |
| **[[E10.37X1]]** | T1DM with diabetic macular degeneration, right eye                           | CC     | **HCC 19** |
| **[[E10.39]]**   | T1DM with other diabetic ophthalmic complication                             | —      | **HCC 19** |

> ⚠️ Ophthalmic DM codes are laterality-specific in many categories. Always capture laterality (right, left, bilateral) from the documentation. In your Ophthalmology specialty work, you will see these frequently.

---

### E10 with Neurological Complications

| Code           | Description                                        | CC/MCC | HCC    |
| -------------- | -------------------------------------------------- | ------ | ------ |
| **[[E10.40]]** | T1DM with diabetic neuropathy, unspecified         | CC     | **HCC 18** |
| **[[E10.41]]** | T1DM with diabetic mononeuropathy                  | CC     | **HCC 18** |
| **[[E10.42]]** | T1DM with diabetic polyneuropathy                  | CC     | **HCC 18** |
| **[[E10.43]]** | T1DM with diabetic autonomic (poly)neuropathy      | CC     | **HCC 18** |
| **[[E10.44]]** | T1DM with diabetic amyotrophy                      | CC     | **HCC 18** |
| **[[E10.49]]** | T1DM with other diabetic neurological complication | CC     | **HCC 18** |

> **Diabetic neuropathy in the PMR world:** In amputee patients, diabetic polyneuropathy ([[E10.42]] or [[E11.42]]) is extremely common and is a significant secondary diagnosis during rehab. It affects sensation, balance, and prosthetic tolerance. Always code when documented.

---

### E10 with Peripheral Circulatory / Vascular Complications

| Code       | Description                                               | CC/MCC | HCC        |
| ---------- | --------------------------------------------------------- | ------ | ---------- |
| **[[E10.51]]** | T1DM with diabetic peripheral angiopathy without gangrene | CC     | **HCC 18** |
| **[[E10.52]]** | T1DM with diabetic peripheral angiopathy with gangrene    | MCC    | **HCC 18** |
| **[[E10.59]]** | T1DM with other circulatory complications                 | CC     | **HCC 18** |

> **E10.52 / E11.52 — these are MCCs and HCC-18.** When the patient's foot gangrene led to amputation, keep coding this even after the amputation. The underlying peripheral angiopathy with gangrene (even as a historical condition now post-amputation) is what drove the admission.

---

### E10 with Other / Combination Complications

| Code        | Description                                | CC/MCC | HCC        |
| ----------- | ------------------------------------------ | ------ | ---------- |
| **[[E10.610]]** | T1DM with diabetic neuropathic arthropathy | CC     | **HCC 18** |
| **[[E10.618]]** | T1DM with other diabetic arthropathy       | CC     | **HCC 18** |
| **[[E10.620]]** | T1DM with diabetic dermatitis              | —      | **HCC 18** |
| **[[E10.621]]** | T1DM with foot ulcer                       | CC     | **HCC 18** |
| **[[E10.622]]** | T1DM with other skin ulcer                 | CC     | **HCC 18** |
| **[[E10.628]]** | T1DM with other skin complications         | —      | **HCC 18** |
| **[[E10.630]]** | T1DM with periodontal disease              | —      | **HCC 18** |
| **[[E10.641]]** | T1DM with hypoglycemia with coma           | MCC    | **HCC 17** |
| **[[E10.649]]** | T1DM with hypoglycemia without coma        | CC     | **HCC 17** |
| **[[E10.65]]**  | T1DM with hyperglycemia                    | —      | **—**      |
| **[[E10.69]]**  | T1DM with other specified complication     | —      | **HCC 18** |
| **[[E10.8]]**   | T1DM with unspecified complications        | —      | **HCC 18** |
| **[[E10.9]]**   | T1DM without complications                 | —      | **HCC 35** |

---

## 📋 E11 - Type 2 Diabetes Mellitus

> Parent code E11 is **not billable**. The E11 family mirrors E10 in structure. The most common codes in the inpatient PMR amputee population are listed below with full detail.

---

### E11 with Hyperosmolarity

| Code           | Description                             | CC/MCC | HCC    |
| -------------- | --------------------------------------- | ------ | ------ |
| **[[E11.00]]** | T2DM with hyperosmolarity without NKHHC | MCC    | **HCC 17** |
| **[[E11.01]]** | T2DM with hyperosmolarity with coma     | MCC    | **HCC 17** |

> **Hyperosmolar Hyperglycemic State (HHS)** is the T2DM equivalent of DKA — severe hyperglycemia without significant ketoacidosis. Blood glucose often exceeds 600 mg/dL. This is an MCC and inpatient emergency.

---

### E11 with Ketoacidosis

| Code       | Description                         | CC/MCC | HCC    |
| ---------- | ----------------------------------- | ------ | ------ |
| **[[E11.10]]** | T2DM with ketoacidosis without coma | MCC    | HCC 17 |
| **[[E11.11]]** | T2DM with ketoacidosis with coma    | MCC    | HCC 17 |

---

### E11 with Kidney Complications

| Code       | Description                                          | CC/MCC | HCC        |
| ---------- | ---------------------------------------------------- | ------ | ---------- |
| **[[E11.21]]** | T2DM with diabetic nephropathy                       | CC     | **HCC 19** |
| **[[E11.22]]** | T2DM with diabetic chronic kidney disease, stage 1-2 | CC     | **HCC 19** |
| **[[E11.23]]** | T2DM with diabetic CKD, stage 3a                     | CC     | **HCC 19** |
| **[[E11.24]]** | T2DM with diabetic CKD, stage 3b                     | CC     | **HCC 19** |
| **[[E11.25]]** | T2DM with diabetic CKD, stage 4                      | MCC    | **HCC 19** |
| **[[E11.26]]** | T2DM with diabetic CKD, stage 5                      | MCC    | **HCC 19** |
| **[[E11.29]]** | T2DM with other diabetic kidney complication         | CC     | **HCC 19** |

> 📌 Always add [[N18.1]]-[[N18.6]] as additional code per ICD-10 instructional notes when coding E11.2x. This is a required secondary code.

---

### E11 with Neurological Complications

| Code           | Description                                        | CC/MCC | HCC    |
| -------------- | -------------------------------------------------- | ------ | ------ |
| **[[E11.40]]** | T2DM with diabetic neuropathy, unspecified         | CC     | **HCC 18** |
| **[[E11.41]]** | T2DM with diabetic mononeuropathy                  | CC     | **HCC 18** |
| **[[E11.42]]** | T2DM with diabetic polyneuropathy                  | CC     | **HCC 18** |
| **[[E11.43]]** | T2DM with diabetic autonomic (poly)neuropathy      | CC     | **HCC 18** |
| **[[E11.44]]** | T2DM with diabetic amyotrophy                      | CC     | **HCC 18** |
| **[[E11.49]]** | T2DM with other diabetic neurological complication | CC     | **HCC 18** |

---

### E11 with Peripheral Vascular / Circulatory Complications

| Code       | Description                                               | CC/MCC | HCC        |
| ---------- | --------------------------------------------------------- | ------ | ---------- |
| **[[E11.51]]** | T2DM with diabetic peripheral angiopathy without gangrene | CC     | **HCC 18** |
| **[[E11.52]]** | T2DM with diabetic peripheral angiopathy with gangrene    | MCC    | **HCC 18** |
| **[[E11.59]]** | T2DM with other circulatory complications                 | CC     | **HCC 18** |

> **[[E11.51]] and [[E11.52]] are the most critical codes in the PMR amputee population.** They represent the vascular disease that destroyed the foot and led to amputation. Code these even after the amputation has been completed — the underlying angiopathy is still active and being managed with anticoagulation, wound surveillance, and cardiovascular risk reduction.

---

### E11 with Ophthalmic Complications

| Code             | Description                                                                 | CC/MCC | HCC    |
| ---------------- | --------------------------------------------------------------------------- | ------ | ------ |
| **[[E11.311]]**  | T2DM with unspecified diabetic retinopathy with macular edema               | CC     | **HCC 19** |
| **[[E11.319]]**  | T2DM with unspecified diabetic retinopathy without macular edema            | —      | **HCC 19** |
| **[[E11.3411]]** | T2DM with severe nonproliferative retinopathy with macular edema, right eye | CC     | **HCC 19** |
| **[[E11.3412]]** | T2DM with severe nonproliferative retinopathy with macular edema, left eye  | CC     | **HCC 19** |
| **[[E11.3413]]** | T2DM with severe nonproliferative retinopathy with macular edema, bilateral | CC     | **HCC 19** |
| **[[E11.351]]**  | T2DM with proliferative retinopathy with macular edema, right eye           | CC     | **HCC 19** |
| **[[E11.36]]**   | T2DM with diabetic cataract                                                 | —      | **HCC 19** |
| **[[E11.39]]**   | T2DM with other diabetic ophthalmic complication                            | —      | **HCC 19** |

---

### E11 with Other/Combination Complications

| Code        | Description                                | CC/MCC | HCC        |
| ----------- | ------------------------------------------ | ------ | ---------- |
| **[[E11.610]]** | T2DM with diabetic neuropathic arthropathy | CC     | **HCC 18** |
| **[[E11.618]]** | T2DM with other diabetic arthropathy       | CC     | **HCC 18** |
| **[[E11.620]]** | T2DM with diabetic dermatitis              | —      | **HCC 18** |
| **[[E11.621]]** | T2DM with diabetic foot ulcer              | CC     | **HCC 18** |
| **[[E11.622]]** | T2DM with other skin ulcer                 | CC     | **HCC 18** |
| **[[E11.628]]** | T2DM with other skin complications         | —      | **HCC 18** |
| **[[E11.630]]** | T2DM with periodontal disease              | —      | **HCC 18** |
| **[[E11.641]]** | T2DM with hypoglycemia with coma           | MCC    | **HCC 17** |
| **[[E11.649]]** | T2DM with hypoglycemia without coma        | CC     | **HCC 17** |
| **[[E11.65]]**  | T2DM with hyperglycemia                    | —      | **—**      |
| **[[E11.69]]**  | T2DM with other specified complication     | —      | **HCC 18** |
| **[[E11.8]]**   | T2DM with unspecified complications        | —      | **HCC 18** |
| **[[E11.9]]**   | T2DM without complications                 | —      | **HCC 36** |

---

## 🏷️ Critical Secondary Codes — Always Consider

| Code           | Description                                                        | When to Add                                                          |
| -------------- | ------------------------------------------------------------------ | -------------------------------------------------------------------- |
| **[[Z79.4]]**  | Long-term current use of insulin                                   | T2DM patient using insulin — does NOT change type; add as additional |
| **[[Z79.84]]** | Long-term current use of oral hypoglycemic drugs                   | T2DM on metformin, glipizide, etc.                                   |
| **[[Z79.85]]** | Long-term current use of injectable non-insulin antidiabetic drugs | GLP-1 agonists (semaglutide, liraglutide), SGLT2 inhibitors          |
| **[[N18.1]]**  | **CKD, Stage 1**                                                       | Add when E11.22 is coded                                             |
| **[[N18.2]]**  | **CKD, Stage 2**                                                       | Add when E11.22 is coded                                             |
| **[[N18.31]]** | **CKD, Stage 3a**                                                      | Add when E11.23 is coded                                             |
| **[[N18.32]]** | **CKD, Stage 3b**                                                      | Add when E11.24 is coded                                             |
| **[[N18.4]]**  | **CKD, Stage 4**                                                       | Add when E11.25 is coded                                             |
| **[[N18.5]]**  | **CKD, Stage 5**                                                       | Add when E11.26 is coded — add [[Z99.2]] if on dialysis              |
| **[[Z99.2]]**  | Dependence on renal dialysis                                       | Add when patient is on hemodialysis or peritoneal dialysis           |
| **[[E87.65]]** | Hypomagnesemia                                                     | Commonly seen in T2DM — impacts glycemic control                     |
| **[[R73.01]]** | Impaired fasting glucose                                           | Pre-diabetes (not DM)                                                |
| **[[R73.09]]** | Other abnormal glucose                                             | Glucose intolerance NOS                                              |

---

## 🧠 HCC Mapping Summary - Diabetes (CMS-HCC v28)

| HCC        | Conditions Included                                            | Key DM Codes                        | Risk Impact                                       |
| ---------- | -------------------------------------------------------------- | ----------------------------------- | ------------------------------------------------- |
| **HCC 17** | DM with acute complications (DKA, HHS, hypoglycemia with coma) | **[[E11.00]], [[E11.10]], [[E11.641]]** | Highest DM HCC                                    |
| **HCC 18** | DM with chronic complications (neuropathy, PVD, skin/joint)    | **[[E11.40]]-[[E11.59]], [[E11.621]]**  | Very common in PMR amputee                        |
| **HCC 19** | DM with ophthalmic/renal complications                         | **[[E11.21]]-[[E11.39]]**               | Important in diabetic nephropathy                 |
| **HCC 35** | T1DM without complications                                     | **[[E10.9]]**                           | Lower weight                                      |
| **HCC 36** | T2DM without complications                                     | **[[E11.9]]**                           | Lowest DM HCC — avoid if complications documented |

> **Coding Imperative:** HCC 36 (T2DM without complications) is worth far less in risk adjustment than HCC 18 (T2DM with complications). If your patient has T2DM AND peripheral neuropathy AND foot ulcer, you should be coding [[E11.40]] and/or [[E11.621]] — not [[E11.9]]. Always capture the complication combination codes.

---

## 💊 Coding Scenarios

---

### Scenario 1: T2DM — Post-BKA Rehab, Polyneuropathy, Peripheral Angiopathy

**Clinical Story:**
A 69-year-old male with T2DM on insulin admitted to PMR following right below-knee amputation secondary to gangrenous diabetic foot disease. He also has documented diabetic polyneuropathy affecting bilateral lower extremities and CKD Stage 3b. PMR physician documents management of DM, adjustment of insulin regimen, and monitoring of renal function.

**DM-Related Codes (all additional diagnoses under [[Z47.81]] principal):**
- [[E11.52]] — T2DM with diabetic peripheral angiopathy **with gangrene** *(the etiology of the amputation — gang code even post-amputation)*
- [[E11.42]] — T2DM with diabetic polyneuropathy *(documented, affecting rehab tolerance and sensation)*
- [[E11.24]] — T2DM with diabetic CKD, stage 3b *(combination code)*
- [[N18.32]] — CKD, Stage 3b *(required additional code per ICD-10)*
- [[Z79.4]] — Long-term use of insulin *(T2DM patient using insulin)*

**DRG Impact:** [[E11.52]] is MCC → DRG 945; [[E11.42]] and [[E11.24]] are CCs — all captured appropriately.

---

### Scenario 2: T2DM with Hypoglycemic Episode During PMR Admission

**Clinical Story:**
A 74-year-old female T2DM patient on insulin is in inpatient PMR following left AKA. On Day 3, nursing documents a blood glucose of 42 mg/dL with confusion and diaphoresis. The PMR physician evaluates the patient, administers dextrose, and adjusts the insulin regimen. The patient returns to baseline. No coma occurred.

**DM Code for this event:**
- [[E11.649]] — T2DM with hypoglycemia **without coma** *(confusion and diaphoresis do not constitute coma — physician documents resolution with treatment)*
- [[Z79.4]] — Long-term use of insulin

> **HCC and DRG note:** [[E11.649]] is a CC, elevating the DRG if not already captured. It also maps to HCC 17 (acute DM complication) — an important capture for risk adjustment.

> **Query tip:** If the physician documents "hypoglycemic encephalopathy" or "loss of consciousness," escalate to [[E11.641]] (with coma) — that is an MCC.

---

### Scenario 3: T2DM Without Documentation of Complications — Query Opportunity

**Clinical Story:**
A chart review shows: patient has T2DM. PMR daily notes document monitoring of blood glucose, insulin administration, wound surveillance of residual limb, evaluation of sensation in the contralateral foot (noting decreased sensation), and foot inspection. No complication of diabetes is explicitly named.

**Coding as-is:** [[E11.9]] — T2DM without complications → HCC 36 only

**Query opportunity:** The physician is monitoring and managing sensation loss in the contralateral foot and performing wound surveillance — clinical indicators of diabetic neuropathy and/or circulatory involvement. A physician query asking whether the patient has diabetic polyneuropathy or diabetic peripheral angiopathy, based on the clinical findings, is appropriate and can shift the code from [[E11.9]] to [[E11.42]] (CC, HCC 18) or [[E11.51]] (CC, HCC 18).

> **Never assume or code without physician documentation** — but recognize when the clinical picture supports a query.

---

## ⚠️ Common Coding Pitfalls - Diabetes

1. **Coding E11.9 when complications are documented** — This is the single biggest missed capture opportunity. Scan the entire record for neuropathy, nephropathy, retinopathy, PVD, foot ulcer, autonomic dysfunction.

2. **Not adding Z79.4 for insulin-using T2DM** — Insulin use by a T2DM patient must be captured with [[Z79.4]]. Omitting it creates a misleading picture of the patient's disease management.

3. **Confusing E11.65 (hyperglycemia) with DKA/HHS** — [[E11.65]] is for elevated blood glucose without a crisis. DKA and HHS are separate, more severe codes.

4. **Failing to add N18.xx when coding E11.2x** — ICD-10 instructs you to add an additional code from N18 to identify the stage. This is not optional.

5. **Coding E11 AND a separate neuropathy code** — Incorrect. The combination code (e.g., [[E11.42]]) already captures both DM and polyneuropathy. Do not also code G62.9 (polyneuropathy NOS) alongside it.

6. **Not querying when type is unspecified** — Always query the physician if chart documentation uses phrases like "insulin-dependent diabetes" without specifying type. Document findings before defaulting to E11.

---

## 🔗 Related Notes

- [[Z47.81]] — Orthopedic aftercare, surgical amputation
- [[Z89.511]] — Acquired absence of right leg below knee
- [[E11.51]] — T2DM with peripheral angiopathy without gangrene
- [[E11.52]] — T2DM with peripheral angiopathy with gangrene
- Peripheral Vascular Disease Coding Reference
- PMR Amputee Coding Reference
- Wound Care and Debridement CPT Reference

---

*Created: 2026-05-07 | MCW Inpatient Abstraction Team | Crystal | CIC-Prep*
*Sources: ICD-10-CM FY2026, CMS-HCC v28 Mappings, ADA Clinical Standards of Care 2026*
