---
tags:
  - Z93
  - artificial-opening
  - tracheostomy
  - gastrostomy
  - colostomy
  - ileostomy
  - cystostomy
  - status-codes
  - PMR
  - inpatient
  - ICD-10-CM
title: Z93 — Artificial Opening Status Codes
specialty: Physical Medicine and Rehabilitation
category: Z Codes — Status
note_type: coding_reference
icd10cm_codes:
  - Z93.0
  - Z93.1
  - Z93.2
  - Z93.3
  - Z93.4
  - Z93.50
  - Z93.51
  - Z93.52
  - Z93.59
  - Z93.6
  - Z93.8
  - Z93.9
ms_drg_relevant: true
date_created: 2026-05-06
last_reviewed: 2026-05-06
---

# 🔓 Z93 — Artificial Opening Status Codes

> [!tip] Quick Orientation
> **Z93** codes document that a patient **currently has an artificial opening** — a surgically created connection between an internal organ and the body surface. These are **status codes**, always secondary, never PDX. In **PM&R**, they are critical companions for **SCI, TBI, stroke**, and **post-ICU** rehab patients who are trach/vent-dependent, tube-fed, or ostomy-dependent. Pair with Z99.– device dependence codes and Z74.– functional dependency codes for complete picture.

---

## 📑 Table of Contents

1. [[#🧭 Z93 Code Fundamentals|Z93 Code Fundamentals]]
2. [[#🫁 Z93.0 — Tracheostomy Status|Z93.0 — Tracheostomy]]
3. [[#🍽️ Z93.1 — Gastrostomy Status|Z93.1 — Gastrostomy]]
4. [[#🫀 Z93.2 — Ileostomy Status|Z93.2 — Ileostomy]]
5. [[#💩 Z93.3 — Colostomy Status|Z93.3 — Colostomy]]
6. [[#🚽 Z93.4 — Other Artificial Openings of GI Tract|Z93.4 — Other GI Openings]]
7. [[#🚱 Z93.5 — Cystostomy Status|Z93.5 — Cystostomy]]
8. [[#🔵 Z93.6 — Other Artificial Openings of Urinary Tract|Z93.6 — Other Urinary Openings]]
9. [[#➕ Z93.8 and Z93.9 — Other and Unspecified|Z93.8 / Z93.9]]
10. [[#⚠️ Common Coding Pitfalls|Common Coding Pitfalls]]
11. [[#🔗 Essential Code Pairings|Essential Code Pairings]]
12. [[#📌 Coding Scenarios|Coding Scenarios]]
13. [[#🔍 Related Notes (Link When Built)|Related Notes]]

---

## 🧭 Z93 Code Fundamentals

> [!warning] Critical Rules
> - **Z93** codes are **always secondary** — never PDX
> - Use when the artificial opening **currently exists** and is relevant to care
> - If the opening has a **complication**, code the complication from K94.– (**GI ostomy complications**) or N99.5– (**urinary stoma complications**) instead — then add Z93 as additional
> - Do not use **Z93** for temporary openings that have been reversed
> - **[[Tracheostomy]] status** (**[[Z93.0]]**) frequently pairs with **[[Z99.11]]** (ventilator dependence) in complex **PM&R** patients

| Opening Type | Z93 Code          | Complication Code (if applicable)    |
| ------------ | ----------------- | ------------------------------------ |
| Tracheostomy | **Z93.0**         | J95.0– (tracheostomy complications)  |
| Gastrostomy  | **Z93.1**         | K94.2– (gastrostomy complications)   |
| Ileostomy    | **Z93.2**         | K94.1– (ileostomy complications)     |
| Colostomy    | **Z93.3**         | K94.0– (colostomy complications)     |
| Cystostomy   | **Z93.50–Z93.52** | N99.5– (urinary stoma complications) |

---

## 🫁 Z93.0 — Tracheostomy Status

| Code          | Description         |
| ------------- | ------------------- |
| **[[Z93.0]]** | Tracheostomy status |

**Clinical context in PM&R:**
- Patients with SCI (**especially high cervical**), severe TBI, prolonged ICU stays, or bilateral vocal cord paralysis
- Trach may be in place for airway protection, **secretion management**, or ventilator weaning
- Always pair with **[[Z99.11]]** if patient is vent-dependent
- Trach collar (**not on vent**): [[Z93.0]] alone, no [[Z99.11]]
- Decannulation is a goal of PM&R — document progress toward decannulation in notes

**Complication codes to know:**
- **[[J95.00]]** — Unspecified tracheostomy complication
- **[[J95.01]]** — Hemorrhage from tracheostomy stoma
- **[[J95.02]]** — Infection of tracheostomy stoma
- **[[J95.03]]** — Malfunction of tracheostomy stoma
- **[[J95.04]]** — Tracheo-esophageal fistula following tracheostomy
- **[[J95.09]]** — Other tracheostomy complication

> [!warning] Z93.0 vs. J95.– vs. Procedure Code
> - Patient has a trach, no complications → **[[Z93.0]]**
> - Patient has a trach with an infected stoma → **[[J95.02]] + [[Z93.0]]**
> - Tracheostomy was performed **this admission** → **ICD-10-PCS** procedure code (**0B110F4**, etc.) — **Z93.0** is not assigned until the opening is established

---

## 🍽️ Z93.1 — Gastrostomy Status

| Code | Description |
|---|---|
| **[[Z93.1]]** | Gastrostomy status |

**Clinical context in PM&R:**
- **[[Stroke]]** patients with **[[dysphagia]]**, TBI patients, SCI patients with impaired oral intake
- PEG tube = **[[gastrostomy]]** — document as **[[Z93.1]]**
- NG tube is **not** a gastrostomy — it is temporary and does not get a Z93 code
- J-tube (**[[jejunostomy]]**) → use **[[Z93.4]]** (other artificial openings of GI tract)
- Pair with **[[Z99.89]]** if patient is documented as tube-feed dependent

**Complication codes:**
- **[[K94.20]]** — Gastrostomy complication, unspecified
- **[[K94.21]]** — Gastrostomy hemorrhage
- **[[K94.22]]** — Gastrostomy infection
- **[[K94.23]]** — Gastrostomy malfunction
- **[[K94.29]]** — Other gastrostomy complications

---

## 🫀 Z93.2 — Ileostomy Status

| Code | Description |
|---|---|
| **[[Z93.2]]** | Ileostomy status |

**Clinical context in PM&R:**
- **Post-bowel resection** for Crohn's, colorectal cancer, trauma
- **Bowel management** is a key **PM&R** concern in SCI patients — document stoma type carefully
- **Ileostomy** output is liquid and high-volume — **dehydration** and electrolyte imbalance are common comorbidities to capture

**Complication codes:**
- **[[K94.10]]** — Ileostomy complication, unspecified
- **[[K94.11]]** — Ileostomy hemorrhage
- **[[K94.12]]** — Ileostomy infection
- **[[K94.13]]** — Ileostomy malfunction
- **[[K94.19]]** — Other ileostomy complications

---

## 💩 Z93.3 — Colostomy Status

| Code | Description |
|---|---|
| [[Z93.3]] | Colostomy status |

**Clinical context in PM&R:**
- **Post-colorectal surgery**, trauma, or bowel injury in SCI patients
- **Colostomy** management is a key component of bowel program in SCI rehab
- **End colostomy** vs. **loop colostomy** — no **ICD-10-CM** distinction; both = **Z93.3**
- Document planned vs. permanent **colostomy** for discharge planning

**Complication codes:**
- **[[K94.00]]** — Colostomy complication, unspecified
- **[[K94.01]]** — Colostomy hemorrhage
- **[[K94.02]]** — Colostomy infection
- **[[K94.03]]** — Colostomy malfunction
- **[[K94.09]]** — Other colostomy complications

---

## 🚽 Z93.4 — Other Artificial Openings of GI Tract

| Code | Description |
|---|---|
| **[[Z93.4]]** | Other artificial openings of gastrointestinal tract status |

**Includes:** **Jejunostomy** (J-tube), **duodenostomy**, **esophagostomy**, **enterostomy** NOS

---

## 🚱 Z93.5 — Cystostomy Status

| Code       | Description                                |
| ---------- | ------------------------------------------ |
| **[[Z93.50]]** | Cystostomy status, unspecified             |
| **[[Z93.51]]** | Cutaneous vesicostomy status               |
| **[[Z93.52]]** | Appendico-vesicostomy status (Mitrofanoff) |
| **[[Z93.59]]** | Other cystostomy status                    |

**Clinical context in PM&R:**
- SCI patients with neurogenic bladder frequently have suprapubic **catheters** (SPC) = **[[cystostomy]]**
- **Mitrofanoff** (appendico-**vesicostomy**) is common in pediatric/young adult SCI
- Distinguish from urethral catheter — indwelling urethral catheter is NOT a Z93 code
- Pair neurogenic bladder coding: N31.– (**neuromuscular** dysfunction of bladder)

**Complication codes:**
- **[[N99.510]]** — Cystostomy complication, unspecified
- **[[N99.511]]** — Cystostomy hemorrhage
- **[[N99.512]]** — Cystostomy infection
- **[[N99.513]]** — Cystostomy malfunction
- **[[N99.518]]** — Other cystostomy complication

---

## 🔵 Z93.6 — Other Artificial Openings of Urinary Tract

| Code | Description |
|---|---|
| **[[Z93.6]]** | Other artificial openings of urinary tract status |

**Includes:** Nephrostomy, ureterostomy, ureteral diversion stomas

---

## ➕ Z93.8 and Z93.9 — Other and Unspecified

| Code      | Description                            |
| --------- | -------------------------------------- |
| **[[Z93.8]]** | Other artificial opening status        |
| **[[Z93.9]]** | Artificial opening status, unspecified |

> [!warning] Avoid Z93.9
> Always use the most specific **Z93** code available. **Z93.9** should be a last resort when the type of artificial opening is genuinely undocumented and cannot be queried.

---

## ⚠️ Common Coding Pitfalls

| Pitfall                                                   | Correct Approach                                                        |
| --------------------------------------------------------- | ----------------------------------------------------------------------- |
| Coding Z93 for NG tube                                    | **NG tube is temporary — no Z93 code; document as part of clinical status** |
| Using Z93.0 when trach was done THIS admission            | **Code the PCS procedure; Z93.0 not assigned until established**            |
| Missing complication code when stoma has a problem        | **Code complication (K94.–, J95.–, N99.5–) first, then Z93**                |
| Forgetting Z93.0 + Z99.11 pairing for vent-trach patients | **Always code both when patient has trach AND vent dependence**             |
| Using Z93 for reversed/closed openings                    | **Once surgically reversed, Z93 is no longer applicable**                   |

---

## 🔗 Essential Code Pairings

| Z93 Code               | Frequently Paired With                                       |
| ---------------------- | ------------------------------------------------------------ |
| **[[Z93.0]] Tracheostomy** | [[Z99.11]] vent dependence; [[J95.–]] if complications       |
| **[[Z93.1]] Gastrostomy**  | [[Z99.89]] tube feed dependence; [[R13.1–]] dysphagia        |
| **[[Z93.2]] Ileostomy**    | [[Z74.1]] ADL assistance; electrolyte imbalance codes        |
| **[[Z93.3]] Colostomy**    | [[Z74.1]] ADL assistance; bowel program documentation        |
| **[[Z93.50]] Cystostomy**  | [[N31.–]] neurogenic bladder; [[Z99.89]] if device-dependent |
| **All Z93**                | [[Z74.1]] need for personal care assistance                  |

---

## 📌 Coding Scenarios

### Scenario 1: C4 Complete SCI, Vent-Dependent, Trach, PEG Tube
- **PDX:** [[G82.51]] — Quadriplegia, C1–C4, complete
- **Secondary:** [[Z93.0]] — Tracheostomy status
- **Secondary:** [[Z99.11]] — Ventilator dependence
- **Secondary:** [[Z93.1]] — Gastrostomy status
- **Secondary:** [[Z99.89]] — Tube feed dependence
- **Secondary:** [[Z74.01]] — Bed confinement
- **Secondary:** [[N31.–]] — Neurogenic bladder

### Scenario 2: Stroke Patient, PEG Tube, Dysphagia, IRF Admission
- **PDX:** [[Z51.89]] — Encounter for other aftercare (post-stroke rehab)
- **Secondary:** [[G81.92]] — Hemiplegia, dominant side
- **Secondary:** [[R13.12]] — Dysphagia, oropharyngeal phase
- **Secondary:** [[Z93.1]] — Gastrostomy status
- **Secondary:** [[Z74.1]] — Need for personal care assistance

### Scenario 3: SCI Patient, Suprapubic Catheter, Neurogenic Bladder
- **PDX:** [[G82.22]] — Paraplegia, incomplete
- **Secondary:** [[N31.9]] — Neuromuscular dysfunction of bladder, unspecified
- **Secondary:** [[Z93.50]] — Cystostomy status
- **Secondary:** [[Z74.09]] — Reduced mobility

---

## 🔍 Related Notes (Link When Built)

- [[PM&R Z Codes — Inpatient Coding Reference]]
- [[Z89 Amputation Status Codes]]
- [[Z94 Transplant Status Codes]]
- [[Z99 Device Dependence — Reference]]
- [[Spinal Cord Injury Coding — G82 and S-Codes]]
- [[CC MCC Table — PM&R]]

---

*Sources: ICD-10-CM FY2026 Official Guidelines; CMS MS-DRG Grouper v41; AAPC CIC Study Resources.*<sup>1,2,3</sup>