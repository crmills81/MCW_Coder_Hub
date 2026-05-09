---
tags:
  - Z94
  - transplant-status
  - organ-transplant
  - PMR
  - post-transplant-rehab
  - status-codes
  - inpatient
title: Z94 — Transplant Status Codes
specialty: Physical Medicine and Rehabilitation
category: Z Codes — Status
note_type: coding_reference
icd10cm_codes:
  - Z94.0
  - Z94.1
  - Z94.2
  - Z94.3
  - Z94.4
  - Z94.5
  - Z94.6
  - Z94.7
  - Z94.81
  - Z94.82
  - Z94.83
  - Z94.84
  - Z94.89
  - Z94.9
ms_drg_relevant: true
date_created: 2026-05-06
last_reviewed: 2026-05-06
---

# 🫀 Z94 — Transplanted Organ and Tissue Status

> [!tip] Quick Orientation
> **Z94** codes document that a patient **has received an organ or tissue transplant** that is still functioning. These are **status codes**, always secondary, never PDX. In PM&R, they appear in post-transplant rehabilitation admissions paired with **[[Z48.21]]–[[Z48.298]]** aftercare codes. **Critical distinction**: if the transplant is experiencing a **complication or rejection**, use T86.– (**complications of transplanted organs/tissue**) — not Z94 alone.

---

## 📑 Table of Contents

1. [[#🧭 Z94 Code Fundamentals|Z94 Code Fundamentals]]
2. [[#❤️ Z94.0–Z94.3 — Heart, Lung, and Major Organ Transplants|Heart, Lung, and Major Organ Transplants]]
3. [[#🫘 Z94.4–Z94.6 — Liver, Skin, Bone, and Corneal Transplants|Liver, Skin, Bone, Corneal]]
4. [[#🦴 Z94.7–Z94.84 — Bone Marrow, Intestine, Pancreas, Stem Cell|Bone Marrow, Intestine, Pancreas]]
5. [[#➕ Z94.89 and Z94.9 — Other and Unspecified|Other and Unspecified]]
6. [[#⚠️ Z94 vs. T86 — Status vs. Complication|Z94 vs. T86]]
7. [[#🔗 Essential Code Pairings|Essential Code Pairings]]
8. [[#📌 Coding Scenarios|Coding Scenarios]]
9. [[#🔍 Related Notes (Link When Built)|Related Notes]]

---

## 🧭 Z94 Code Fundamentals

> [!warning] Critical Rules
> - **Z94** codes are **always secondary** — never PDX
> - Use when the transplanted organ is **functioning** (whether perfectly or suboptimally, as long as no active rejection/failure)
> - Active **transplant** complication → T86.– (includes rejection, failure, infection of transplant)
> - Both **Z94** and **T86** can coexist: **T86** captures the complication, **Z94** documents transplant history
> - **[[Immunosuppression]]** in transplant patients → **[[Z79.899]]** (other long-term drug therapy) — always add
> - Always code the underlying condition that led to transplant as relevant

| Scenario                                 | Code                             |
| ---------------------------------------- | -------------------------------- |
| Transplant functioning, no complications | **Z94.– only**                       |
| Transplant with active rejection         | **T86.– + Z94.–**                    |
| Transplant with infection                | **T86.– + Z94.– + infection code**   |
| Post-transplant rehab admission          | **Z48.2– (PDX) + Z94.– (secondary)** |

---

## ❤️ Z94.0–Z94.3 — Heart, Lung, and Major Organ Transplants

| Code      | Description                      | PM&R Rehab Context                               |
| --------- | -------------------------------- | ------------------------------------------------ |
| **[[Z94.0]]** | Heart transplant status          | Post-cardiac transplant cardiac/functional rehab |
| **[[Z94.1]]** | Kidney transplant status         | Post-renal transplant deconditioning rehab       |
| **[[Z94.2]]** | Lung transplant status           | Post-lung transplant pulmonary/functional rehab  |
| **[[Z94.3]]** | Heart and lung transplant status | Combined cardiac + pulmonary rehab               |

**Heart transplant (Z94.0):**
- **Denervated heart** — chronotropic incompetence; HR does not respond normally to exercise
- **Cardiac rehab focus:** exercise reconditioning with modified HR parameters, functional independence
- **Pair with**: **[[Z48.21]], [[Z79.899]]** (immunosuppressants), **[[I42.0]]** (cardiomyopathy if applicable)

**Lung transplant (Z94.2):**
- **Pulmonary** rehab is a cornerstone of post-transplant care
- Watch for bronchiolitis obliterans syndrome (BOS) as a complication → **[[T86.812]]**
- Pair with: **[[Z48.24]], [[Z79.899]]**,[J98.– if residual pulmonary condition

**Kidney transplant (Z94.1):**
- PM&R involved for deconditioning, functional mobility following prolonged ESRD
- Pair with: [[Z48.22]], [[Z79.899]], N18.– if CKD still present in remaining native kidney

---

## 🫘 Z94.4–Z94.6 — Liver, Skin, Bone, and Corneal Transplants

| Code      | Description             | PM&R Relevance                                          |
| --------- | ----------------------- | ------------------------------------------------------- |
| **[[Z94.4]]** | Liver transplant status | Post-hepatic transplant deconditioning/functional rehab |
| **[[Z94.5]]** | Skin transplant status  | Post-burn/trauma with skin graft, wound care            |
| **[[Z94.6]]** | Bone transplant status  | Post-orthopedic reconstruction with bone allograft      |

**Skin transplant (Z94.5):**
- Common in post-burn **PM&R** rehabilitation
- Pair with: T20–T32 (**burn codes**), scar contracture codes, **[[Z74.09]]**
- Burn rehab is a specialized **PM&R** subspecialty — document burn size (TBSA), depth, and location

**Bone transplant (Z94.6):**
- Allograft reconstruction following tumor resection or complex fracture repair
- Pair with: **[[Z47.89]]** (orthopedic aftercare), Z96.– if implant also present

---

## 🦴 Z94.7–Z94.84 — Bone Marrow, Intestine, Pancreas, Stem Cell

| Code       | Description                                       | PM&R Relevance                                           |
| ---------- | ------------------------------------------------- | -------------------------------------------------------- |
| **[[Z94.7]]**  | Corneal transplant status                         | Low PM&R relevance; vision restoration                   |
| **[[Z94.81]]** | Bone marrow transplant status                     | Post-BMT deconditioning, prolonged hospitalization rehab |
| **[[Z94.82]]** | Intestinal transplant status                      | Short bowel, nutrition-dependent, functional rehab       |
| **[[Z94.83]]** | Pancreas transplant status                        | Post-diabetic end-organ disease rehab                    |
| **[[Z94.84]]** | Stem cells transplant status                      | Post-hematologic malignancy treatment rehab              |
| **[[Z94.89]]** | Other transplanted organ and tissue status        | Other specified transplant                               |
| **[[Z94.9]]**  | Transplanted organ and tissue status, unspecified | Avoid — use specific code                                |

**Bone marrow / stem cell transplant (Z94.81, Z94.84):**
- Extended hospitalization leads to profound deconditioning — **PM&R** heavily involved
- Graft-versus-host disease (**GVHD**) is a critical complication → **[[D89.810]]–[[D89.813]]**
- Pair with: **[[Z48.290]], [[Z79.899]]**, D89.– if GVHD present

---

## ⚠️ Z94 vs. T86 — Status vs. Complication

> [!warning] This Distinction Drives DRG — Get It Right

| Situation                                        | Correct Coding                |
| ------------------------------------------------ | ----------------------------- |
| Heart transplant, functioning well, in for rehab | **[[Z94.0]] + [[Z48.21]] as PDX** |
| Heart transplant with acute rejection            | **[[T86.20]] + [[Z94.0]]**        |
| Kidney transplant with chronic rejection         | **[[T86.11]] + [[Z94.1]]**        |
| Lung transplant with bronchiolitis obliterans    | **[[T86.812]] + [[Z94.2]]**       |
| BMT with acute GVHD                              | **[[D89.810]] + [[Z94.81]]**      |

**T86 complication codes — PM&R relevant:**

| Code        | Description                                 |
| ----------- | ------------------------------------------- |
| **[[T86.10]]**  | Kidney transplant complication, unspecified |
| **[[T86.11]]**  | Kidney transplant rejection                 |
| **[[T86.12]]**  | Kidney transplant failure                   |
| **[[T86.20]]**  | Heart transplant complication, unspecified  |
| **[[T86.21]]**  | Heart transplant rejection                  |
| **[[T86.22]]**  | Heart transplant failure                    |
| **[[T86.810]]** | Lung transplant rejection                   |
| **[[T86.812]]** | Lung transplant bronchiolitis obliterans    |
| **[[T86.890]]** | Other transplanted organ rejection          |

---

## 🔗 Essential Code Pairings

| Z94 Code                  | Always Pair With                                    |
| ------------------------- | --------------------------------------------------- |
| **Any Z94.–**                 | [[Z79.899]] — Immunosuppressant therapy (long-term) |
| **[[Z94.0]] Heart**           | [[Z48.21]] if in for post-transplant aftercare      |
| **[[Z94.1]] Kidney**          | [[Z48.22]] + [[N18.–]] if CKD of remaining kidney   |
| **[[Z94.2]] Lung**            | [[Z48.24]] + pulmonary condition code               |
| **[[Z94.3]] Heart-Lung**      | [[Z48.25]]                                          |
| **[[Z94.81]] BMT**            | [[Z48.290]] + [[D89.–]] if GVHD                     |
| **[[Z94.84]] Stem cell**      | [[Z48.290]]                                         |
| **Any Z94 with complication** | [[T86.–]] as additional or PDX                      |

---

## 📌 Coding Scenarios

### Scenario 1: Post–Heart Transplant IRF Admission, Functional Rehab
- **PDX:** [[Z48.21]] — Aftercare following heart transplant
- **Secondary:** [[Z94.0]] — Heart transplant status
- **Secondary:** [[Z79.899]] — Long-term immunosuppressant use
- **Secondary:** [[Z74.09]] — Reduced mobility
- **DRG:** 945 or 946

### Scenario 2: Post-BMT, Profound Deconditioning, GVHD
- **PDX:** [[D89.810]] — Acute GVHD (if active and driving care)
- **Secondary:** [[Z94.81]] — Bone marrow transplant status
- **Secondary:** [[Z48.290]] — Aftercare following BMT
- **Secondary:** [[Z79.899]] — Immunosuppressant therapy
- **Secondary:** [[Z74.01]] — Bed confinement
- **DRG:** Driven by GVHD code + MCC/CC status

### Scenario 3: Kidney Transplant, Deconditioning Rehab, CKD Native Kidney
- **PDX:** [[Z48.22]] — Aftercare following kidney transplant
- **Secondary:** [[Z94.1]] — Kidney transplant status
- **Secondary:** [[N18.3]] — CKD, stage 3 (native kidney)
- **Secondary:** [[Z79.899]] — Immunosuppressants
- **Secondary:** [[Z74.09]] — Reduced mobility

---

## 🔍 Related Notes (Link When Built)

- [[PM&R Z Codes — Inpatient Coding Reference]]
- [[Z89 Amputation Status Codes]]
- [[Z93 Artificial Opening Status Codes]]
- [[CC MCC Table — PM&R]]
- [[T86 Transplant Complications Reference]]

---

*Sources: ICD-10-CM FY2026 Official Guidelines; CMS MS-DRG Grouper v41; AAPC CIC Study Resources.*<sup>1,2,3</sup>