---
tags:
  - PVD
  - PAD
  - atherosclerosis
  - I70
  - I73
  - gangrene
  - peripheral-vascular
  - HCC
  - inpatient
  - PMR
  - amputee
title: Peripheral Vascular Disease - Inpatient Coding Reference
specialty: Physical Medicine and Rehabilitation / Vascular / General Inpatient
topic: PVD, PAD, Atherosclerosis ICD-10-CM Coding
created: 2026-05-07
status: Active ✅
primary_dx_categories: I70, I73, I96
ms_drg_note: PVD with gangrene codes are MCCs and HCC-108 — highest capture priority in amputee population
hcc_map: HCC-108 HCC-39
coder_note: Inpatient profee reference - MCW Inpatient Abstraction Team
---

# Peripheral Vascular Disease - Inpatient Coding Reference

---

## 🏥 Clinical Overview

> **Peripheral vascular disease (PVD)** — also called peripheral arterial disease (PAD) — refers to atherosclerotic narrowing and occlusion of the arteries supplying the extremities, most commonly the lower extremities. In the inpatient PMR world, PVD is the second most common cause of lower extremity amputation (after diabetes, and the two frequently coexist). Accurate PVD coding requires you to distinguish: (1) *which artery type* is involved (native vs. bypass graft), (2) *which extremity and side*, and (3) *the clinical severity* (intermittent claudication → rest pain → ulceration → gangrene — the Fontaine/Rutherford classification translated into ICD-10-CM).

### Anatomy Quick Reference

| Artery                      | Location                   | Common Atherosclerotic Site                                       |
| --------------------------- | -------------------------- | ----------------------------------------------------------------- |
| **Aortoiliac**                  | Aorta to iliac bifurcation | Leriche syndrome (bilateral hip/buttock claudication + impotence) |
| **Common femoral**              | Groin                      | High claudication                                                 |
| **Superficial femoral**         | Mid-thigh                  | Most common site of PAD                                           |
| **Popliteal**                   | Behind knee                |                                                                   |
| **Tibial (anterior/posterior)** | Lower leg                  | Diabetic pattern — distal disease                                 |
| **Peroneal**                    | Lower leg                  | Diabetic pattern — distal disease                                 |

> **For coding purposes**, ICD-10-CM divides PVD primarily by: **native arteries vs. bypass grafts**, and **extremity/side**. You don't need to know the specific artery name — just whether it's native or graft, which extremity, and the severity.

---

## 📋 I70 - Atherosclerosis

> I70 is the core category for atherosclerosis/PAD. Parent code I70 is **not billable**; I70.0 and I70.1 (aorta) are billable. For extremity atherosclerosis, code to the full 6-character level.

---

### I70.0 and I70.1 - Aortic Atherosclerosis

| Code      | Description                     | CC/MCC | HCC         |
| --------- | ------------------------------- | ------ | ----------- |
| **[[I70.0]]** | Atherosclerosis of aorta        | CC     | **HCC 108** |
| **[[I70.1]]** | Atherosclerosis of renal artery | CC     | **HCC 108** |

---

### I70.2 - Atherosclerosis of Native Arteries of Extremities

> The I70.2x subcategory covers **native (non-bypass)** arteries. This is the most commonly coded PVD category in inpatient PMR.

#### Intermittent Claudication — Native Arteries

> **Intermittent claudication** = reproducible cramping or aching in the leg muscles during exertion that resolves with rest. This is stage 1 severity.

| Code            | Description                                                                               | Laterality | CC/MCC | HCC     |
| --------------- | ----------------------------------------------------------------------------------------- | ---------- | ------ | ------- |
| **[[I70.211]]** | Atherosclerosis of native arteries, right leg, with intermittent claudication             | R          | —      | HCC 108 |
| **[[I70.212]]** | Atherosclerosis of native arteries, left leg, with intermittent claudication              | L          | —      | HCC 108 |
| **[[I70.213]]** | Atherosclerosis of native arteries, bilateral legs, with intermittent claudication        | Bil        | —      | HCC 108 |
| **[[I70.218]]** | Atherosclerosis of native arteries, other extremity, with intermittent claudication       | Other      | —      | HCC 108 |
| **[[I70.219]]** | Atherosclerosis of native arteries, unspecified extremity, with intermittent claudication | Unspec     | —      | HCC 108 |

---

#### Rest Pain — Native Arteries

> **Rest pain** = pain at rest, typically in the foot and toes, often worse at night. Indicates critical limb ischemia (CLI) — limb is now at risk of tissue loss without intervention. This is more severe than claudication.

| Code        | Description                                                               | Laterality | CC/MCC | HCC         |
| ----------- | ------------------------------------------------------------------------- | ---------- | ------ | ----------- |
| **[[I70.221]]** | Atherosclerosis of native arteries, right leg, with rest pain             | R          | CC     | **HCC 108** |
| **[[I70.222]]** | Atherosclerosis of native arteries, left leg, with rest pain              | L          | CC     | **HCC 108** |
| **[[I70.223]]** | Atherosclerosis of native arteries, bilateral legs, with rest pain        | Bil        | CC     | **HCC 108** |
| **[[I70.228]]** | Atherosclerosis of native arteries, other extremity, with rest pain       | Other      | CC     | **HCC 108** |
| **[[I70.229]]** | Atherosclerosis of native arteries, unspecified extremity, with rest pain | Unspec     | CC     | **HCC 108** |

---

#### Ulceration — Native Arteries

> **Atherosclerotic ulceration** = ischemic tissue breakdown secondary to inadequate arterial perfusion. These codes require a 7th character and pair with an **L98.49x** code to identify the site of the ulcer and its severity (depth). This is a critical limb ischemia presentation.

> ⚠️ ICD-10-CM instructs you to also code any associated gangrene ([[I96]]) and severity of ulceration ([[L97.xxx]] for lower extremity chronic ulcers or [[L98.49x]] for others). Always code the ulcer severity when documented.

| Code            | Description                                                                            | Laterality | CC/MCC | HCC     |
| --------------- | -------------------------------------------------------------------------------------- | ---------- | ------ | ------- |
| **[[I70.231]]** | Atherosclerosis native arteries, right leg, with ulceration of thigh                   | R          | CC     | **HCC 108** |
| **[[I70.232]]** | Atherosclerosis native arteries, right leg, with ulceration of calf                    | R          | CC     | **HCC 108** |
| **[[I70.233]]** | Atherosclerosis native arteries, right leg, with ulceration of ankle                   | R          | CC     | **HCC 108** |
| **[[I70.234]]** | Atherosclerosis native arteries, right leg, with ulceration of heel and midfoot        | R          | MCC    | **HCC 108** |
| **[[I70.235]]** | Atherosclerosis native arteries, right leg, with ulceration of other part of foot      | R          | MCC    | **HCC 108** |
| **[[I70.238]]** | Atherosclerosis native arteries, right leg, with ulceration of other part of lower leg | R          | CC     | **HCC 108** |
| **[[I70.239]]** | Atherosclerosis native arteries, right leg, with ulceration of unspecified site        | R          | CC     | **HCC 108** |
| **[[I70.241]]** | Atherosclerosis native arteries, left leg, with ulceration of thigh                    | L          | CC     | **HCC 108** |
| **[[I70.242]]** | Atherosclerosis native arteries, left leg, with ulceration of calf                     | L          | CC     | **HCC 108** |
| **[[I70.243]]** | Atherosclerosis native arteries, left leg, with ulceration of ankle                    | L          | CC     | **HCC 108** |
| **[[I70.244]]** | Atherosclerosis native arteries, left leg, with ulceration of heel and midfoot         | L          | MCC    | **HCC 108** |
| **[[I70.245]]** | Atherosclerosis native arteries, left leg, with ulceration of other part of foot       | L          | MCC    | **HCC 108** |
| **[[I70.248]]** | Atherosclerosis native arteries, left leg, with ulceration of other part of lower leg  | L          | CC     | **HCC 108** |
| **[[I70.249]]** | Atherosclerosis native arteries, left leg, with ulceration of unspecified site         | L          | CC     | **HCC 108** |
| **[[I70.25]]**  | Atherosclerosis native arteries, other extremity, with ulceration                      | Other      | CC     | **HCC 108** |

> 🦶 **Heel and midfoot ulceration** ([[I70.234]], [[I70.244]]) are MCCs — they carry the most severe DRG weight among the ulcer sites. Document the exact ulcer location meticulously.

---

#### Gangrene — Native Arteries

> **Gangrene** is tissue death — the most severe manifestation of CLI. Wet gangrene (infected) and dry gangrene (ischemic mummification) both code here. These are **MCCs** and are among the highest-impact codes in the PVD family.

| Code            | Description                                                              | Laterality | CC/MCC | HCC     |
| --------------- | ------------------------------------------------------------------------ | ---------- | ------ | ------- |
| **[[I70.261]]** | Atherosclerosis of native arteries, right leg, with gangrene             | R          | MCC    | **HCC 108** |
| **[[I70.262]]** | Atherosclerosis of native arteries, left leg, with gangrene              | L          | MCC    | **HCC 108** |
| **[[I70.263]]** | Atherosclerosis of native arteries, bilateral legs, with gangrene        | Bil        | MCC    | **HCC 108** |
| **[[I70.268]]** | Atherosclerosis of native arteries, other extremity, with gangrene       | Other      | MCC    | **HCC 108** |
| **[[I70.269]]** | Atherosclerosis of native arteries, unspecified extremity, with gangrene | Unspec     | MCC    | **HCC 108** |

> **Critical point:** When a patient has atherosclerosis *with* gangrene and has *already had an amputation*, you still code the gangrene code ([[I70.261]]/[[I70.262]]) as an additional diagnosis during the rehab admission — because the underlying atherosclerosis with gangrene is what caused the amputation. It is the *etiology* of the amputated limb status, not just a historical finding.

---

#### Other/Unspecified — Native Arteries

| Code            | Description                                                                           | CC/MCC | HCC     |
| --------------- | ------------------------------------------------------------------------------------- | ------ | ------- |
| **[[I70.291]]** | Atherosclerosis of native arteries, right leg, with other atherosclerosis             | CC     | **HCC 108** |
| **[[I70.292]]** | Atherosclerosis of native arteries, left leg, with other atherosclerosis              | CC     | **HCC 108** |
| **[[I70.293]]** | Atherosclerosis of native arteries, bilateral legs, with other atherosclerosis        | CC     | **HCC 108** |
| **[[I70.299]]** | Atherosclerosis of native arteries, unspecified extremity, with other atherosclerosis | CC     | **HCC 108** |
| **[[I70.201]]** | Atherosclerosis of native arteries, right leg, without documentation of severity      | —      | **HCC 108** |
| **[[I70.202]]** | Atherosclerosis of native arteries, left leg, without documentation of severity       | —      | **HCC 108** |
| **[[I70.203]]** | Atherosclerosis of native arteries, bilateral legs, without documentation of severity | —      | **HCC 108** |
| **[[I70.209]]** | Atherosclerosis of native arteries, unspecified, without documentation of severity    | —      | **HCC 108** |

> ⚠️ Use I70.20x only when the documentation genuinely does not specify any of the severity categories above. Query for severity whenever possible — intermittent claudication, rest pain, ulceration, and gangrene all have more specific and more valuable codes.

---

### I70.3 - Atherosclerosis of Unspecified Bypass Graft

> Use when documentation states a bypass graft is involved but does not specify the graft type (autologous vein, non-biological, etc.)

| Code            | Description                                                                            | CC/MCC | HCC     |
| --------------- | -------------------------------------------------------------------------------------- | ------ | ------- |
| **[[I70.301]]** | Atherosclerosis of unspecified bypass graft, right leg, without symptoms               | —      | **HCC 108** |
| **[[I70.311]]** | Atherosclerosis of unspecified bypass graft, right leg, with intermittent claudication | —      | **HCC 108** |
| **[[I70.321]]** | Atherosclerosis of unspecified bypass graft, right leg, with rest pain                 | CC     | **HCC 108** |
| **[[I70.361]]** | Atherosclerosis of unspecified bypass graft, right leg, with gangrene                  | MCC    | **HCC 108** |
| **[[I70.362]]** | Atherosclerosis of unspecified bypass graft, left leg, with gangrene                   | MCC    | **HCC 108** |

---

### I70.4 - Atherosclerosis of Autologous Vein Bypass Graft

> Autologous vein graft = patient's own vein (usually saphenous vein) used as a bypass conduit.

| Code        | Description                                                                                | CC/MCC | HCC         |
| ----------- | ------------------------------------------------------------------------------------------ | ------ | ----------- |
| **[[I70.401]]** | Atherosclerosis of autologous vein bypass graft, right leg, without symptoms               | —      | **HCC 108** |
| **[[I70.411]]** | Atherosclerosis of autologous vein bypass graft, right leg, with intermittent claudication | —      | **HCC 108** |
| **[[I70.421]]** | Atherosclerosis of autologous vein bypass graft, right leg, with rest pain                 | CC     | **HCC 108** |
| **[[I70.461]]** | Atherosclerosis of autologous vein bypass graft, right leg, with gangrene                  | MCC    | **HCC 108** |
| **[[I70.462]]** | Atherosclerosis of autologous vein bypass graft, left leg, with gangrene                   | MCC    | **HCC 108** |

---

### I70.5 - Atherosclerosis of Non-Biological Bypass Graft

> Non-biological graft = synthetic graft material (PTFE, Dacron).

| Code            | Description                                                                           | CC/MCC | HCC     |
| --------------- | ------------------------------------------------------------------------------------- | ------ | ------- |
| **[[I70.501]]** | Atherosclerosis of nonautologous biological bypass graft, right leg, without symptoms | —      | **HCC 108** |
| **[[I70.521]]** | Atherosclerosis of nonautologous biological bypass graft, right leg, with rest pain   | CC     | **HCC 108** |
| **[[I70.561]]** | Atherosclerosis of nonautologous biological bypass graft, right leg, with gangrene    | MCC    | **HCC 108** |
| **[[I70.562]]** | Atherosclerosis of nonautologous biological bypass graft, left leg, with gangrene     | MCC    | **HCC 108** |

---

### I70.6 - Atherosclerosis of Non-Autologous Biological Bypass Graft

> Processed biological graft material (human umbilical vein, bovine grafts).

| Code        | Description                                                                | CC/MCC | HCC         |
| ----------- | -------------------------------------------------------------------------- | ------ | ----------- |
| **[[I70.601]]** | Atherosclerosis of nonbiological bypass graft, right leg, without symptoms | —      | **HCC 108** |
| **[[I70.621]]** | Atherosclerosis of nonbiological bypass graft, right leg, with rest pain   | CC     | **HCC 108** |
| **[[I70.661]]** | Atherosclerosis of nonbiological bypass graft, right leg, with gangrene    | MCC    | **HCC 108** |
| **[[I70.662]]** | Atherosclerosis of nonbiological bypass graft, left leg, with gangrene     | MCC    | **HCC 108** |

---

### I70.7 - Atherosclerosis of Other Bypass Graft

> For bypass grafts not fitting the above categories.

| Code            | Description                                                        | CC/MCC | HCC     |
| --------------- | ------------------------------------------------------------------ | ------ | ------- |
| **[[I70.701]]** | Atherosclerosis of other bypass graft, right leg, without symptoms | —      | **HCC 108** |
| **[[I70.721]]** | Atherosclerosis of other bypass graft, right leg, with rest pain   | CC     | **HCC 108** |
| **[[I70.761]]** | Atherosclerosis of other bypass graft, right leg, with gangrene    | MCC    | **HCC 108** |
| **[[I70.762]]** | Atherosclerosis of other bypass graft, left leg, with gangrene     | MCC    | **HCC 108** |

---

### I70.9 - General/Other Atherosclerosis

| Code           | Description                                    | CC/MCC | HCC     |
| -------------- | ---------------------------------------------- | ------ | ------- |
| **[[I70.90]]** | Unspecified atherosclerosis                    | —      | **HCC 108** |
| **[[I70.91]]** | Generalized atherosclerosis                    | —      | **HCC 108** |
| **[[I70.92]]** | Chronic total occlusion of artery of extremity | CC     | **HCC 108** |

> **[[I70.92]]** — Chronic total occlusion (CTO) is used as an additional code when the vessel is 100% occluded chronically. This is distinct from acute occlusion. It pairs with an I70.2x-I70.7x code to show complete obstruction on top of the atherosclerosis.

---

## 📋 I73 - Other Peripheral Vascular Diseases

| Code           | Description                                    | CC/MCC | HCC     |
| -------------- | ---------------------------------------------- | ------ | ------- |
| **[[I73.00]]** | Raynaud's syndrome without gangrene            | —      | **—**       |
| **[[I73.01]]** | Raynaud's syndrome with gangrene               | MCC    | **HCC 108** |
| **[[I73.1]]**  | Thromboangiitis obliterans (Buerger's disease) | CC     | **HCC 108** |
| **[[I73.81]]** | Erythromelalgia                                | —      | **—**       |
| **[[I73.89]]** | Other specified peripheral vascular diseases   | —      | **—**       |
| **[[I73.9]]**  | Peripheral vascular disease, unspecified       | —      | **HCC 108** |

> **[[I73.9]]** — Peripheral vascular disease, unspecified, is commonly seen in documentation. It maps to HCC 108 and is a CC. However, whenever more specificity is available (atherosclerosis, specific vessel), code to that more specific code. Use [[I73.9]] only when the physician truly documents only "PVD" without further specification and no additional clinical detail permits specificity.

---

## 📋 I96 - Gangrene (NEC)

| Code        | Description                        | CC/MCC | HCC        |
| ----------- | ---------------------------------- | ------ | ---------- |
| **[[I96]]** | Gangrene, not elsewhere classified | MCC    | **HCC 39** |

> **When to use [[I96]]:** Use this code when gangrene is documented but is *not* attributable to a more specific underlying condition. In practice, most gangrene in the amputee PMR population is attributable to DM (→ E11.52) or atherosclerosis (→ I70.261/I70.262), which are combination codes that incorporate the gangrene. If gangrene is present AND a specific etiology is coded via a combination code, do NOT additionally code I96 — the combination code covers it. Use [[I96]] for truly unspecified or non-DM/non-atherosclerotic gangrene (e.g., Fournier's gangrene is I96; gas gangrene is A48.0).

---

## 🧠 HCC Mapping Summary - PVD (CMS-HCC v28)

| HCC         | Condition Group                                      | Key Codes                     | Notes                                                            |
| ----------- | ---------------------------------------------------- | ----------------------------- | ---------------------------------------------------------------- |
| **HCC 108** | Vascular disease                                     | **I70.2xx-I70.7xx, I73.1, I73.9** | Core PVD HCC — all atherosclerosis of extremities                |
| **HCC 39**  | Bone/joint/muscle infections/necrosis incl. gangrene | **[[I96]], [[M86.9]]**            | Only when gangrene not captured in DM/atherosclerosis combo code |

---

## 💊 Coding Scenarios

---

### Scenario 1: PVD with Gangrene — Post-Left BKA, PMR Admission

**Clinical Story:**

A 71-year-old male with PVD and T2DM was admitted following left below-knee amputation secondary to left foot gangrene due to severe peripheral arterial disease and diabetic angiopathy. He is admitted to PMR for rehab. The physician documents atherosclerosis of native arteries of the left leg with gangrene, diabetic peripheral angiopathy with gangrene, and T2DM on insulin.

**Principal Diagnosis:** [[Z47.81]] — Orthopedic aftercare following surgical amputation

**Additional Diagnoses:**

- [[Z89.512]] — Acquired absence of left leg below knee
- [[I70.262]] — Atherosclerosis of native arteries, left leg, with gangrene *(the atherosclerotic PVD component — MCC)*
- [[E11.52]] — T2DM with diabetic peripheral angiopathy with gangrene *(the diabetic component — MCC)*
- [[Z79.4]] — Long-term use of insulin

> **Can you code both I70.262 and E11.52?** Yes. The patient has dual etiologies — atherosclerotic PVD AND diabetic angiopathy, both contributing to the gangrene. ICD-10-CM allows coding both when both conditions are present and documented. Both are MCCs. DRG 945.

---

### Scenario 2: PVD with Rest Pain — No Amputation Yet, Acute PMR Consult

**Clinical Story:**

A 66-year-old female admitted to the acute medical floor for management of bilateral leg rest pain secondary to PVD. PMR is consulted to evaluate functional status and for pain management recommendations. She has not had an amputation. She has atherosclerosis of bilateral native lower extremity arteries with documented rest pain, and a history of a right femoral-popliteal bypass graft (autologous saphenous vein) placed 3 years ago that now also shows atherosclerotic changes on CTA.

**Diagnoses for PMR Consult (Additional):**

- [[I70.223]] — Atherosclerosis of native arteries, bilateral legs, with rest pain *(native arteries — bilateral)*
- [[I70.421]] — Atherosclerosis of autologous vein bypass graft, right leg, with rest pain *(the bypass graft — separately coded because the graft AND native arteries are both affected)*

> **Key rule:** When both native arteries and bypass grafts are affected, code both separately. The native artery code and the bypass graft code can coexist.

---

### Scenario 3: PVD, Heel Ulceration, No Amputation — Wound Care PMR Management

**Clinical Story:**

A 78-year-old male with a history of atherosclerosis of the native arteries of the left leg presents to PMR-managed inpatient wound care program with a left heel ulcer, 2.5 cm × 3 cm, extending through dermis and subcutaneous tissue (stage 3 equivalent). Documentation states "ischemic ulcer, left heel, secondary to peripheral arterial disease."

**Principal Diagnosis:** [[I70.244]] — Atherosclerosis of native arteries, left leg, with ulceration of heel and midfoot *(MCC — heel location)*

**Additional Diagnoses:**

- [[L97.422]] — Non-pressure chronic ulcer of left heel and midfoot with fat layer exposed *(the ulcer severity — required additional code per ICD-10 instructions when coding I70.24x)*

> **Heel ulcer specificity matters:** [[I70.244]] (heel) is an MCC; [[I70.242]] (calf) is a CC. The anatomical location of the ulcer directly impacts DRG weight. Always document and code the specific location.

---

## ⚠️ Common Coding Pitfalls - PVD

1. **Using I73.9 (PVD unspecified) when atherosclerosis is documented** — If the chart says "peripheral arterial disease" or "peripheral atherosclerosis," you have enough to code to the I70.2x family. Query for laterality and severity before defaulting to I73.9.

2. **Forgetting laterality** — I70.209 (unspecified extremity) is never acceptable when the record documents right or left. Always code the specific side.

3. **Not coding severity** — Defaulting to I70.201/I70.202 (without symptom specification) when the chart documents claudication, rest pain, or ulceration. Each severity step adds CC/MCC value and HCC capture.

4. **Missing the bypass graft distinction** — When a patient has a prior vascular bypass, always check whether the graft itself shows atherosclerotic disease vs. only the native arteries. Code both if both are affected.

5. **Double-coding gangrene with I96 when a combination code covers it** — If you code E11.52 or I70.261, the gangrene is already captured. Do not also add I96.

6. **Not capturing CTO** — Chronic total occlusion ([[I70.92]]) is frequently under-coded. Check imaging reports and vascular surgery consult notes for documentation of 100% occlusion.

7. **Not querying when only "PVD" is documented** — PVD is inherently a vague term. A single query asking the physician to specify the nature of the vascular disease (atherosclerosis? Buerger's? Raynaud's?), the extremity, and the clinical severity can transform a non-CC code into an MCC.

---

## 🔗 Related Notes

- [[Z47.81]] — Orthopedic aftercare, surgical amputation
- [[E11.51]] — T2DM with peripheral angiopathy without gangrene
- [[E11.52]] — T2DM with peripheral angiopathy with gangrene
- [[I96]] — Gangrene, not elsewhere classified
- [[Z89.511]] — Acquired absence of right leg below knee
- Diabetes Mellitus Coding Reference
- PMR Amputee Coding Reference
- Wound Care and Debridement CPT Reference

---

*Created: 2026-05-07 | MCW Inpatient Abstraction Team | Crystal | CIC-Prep*

*Sources: ICD-10-CM FY2026, CMS-HCC v28 Mappings, AHA Coding Clinic Guidance*