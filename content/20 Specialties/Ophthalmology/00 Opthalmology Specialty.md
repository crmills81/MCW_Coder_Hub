---
tags:
  - specialty
  - ophthalmology
  - profee
  - medical_coding
  - specialty/ophthalmology
created: 2026-01-21
---

# 👁️ Ophthalmology Coding Reference

## Common CPT Codes
| Code          | Category       | Description                                   |
| :------------ | :------------- | :-------------------------------------------- |
| **[[92004]]** | **E/M (New)**  | Comprehensive eye exam, new patient           |
| **[[92014]]**     | **E/M (Est)**  | Comprehensive eye exam, established patient   |
| **[[92083]]**     | **Diagnostic** | Visual field examination, extended            |
| **[[92250]]**     | **Diagnostic** | Fundus photography with interpretation        |
| **[[66984]]**     | **Procedure**  | Cataract surgery with IOL (Standard)          |
| **[[67028]]**     | **Procedure**  | Intravitreal injection of pharmacologic agent |

## Common ICD-10-CM Codes
* **[[H25.13]]** - Age-related nuclear [[cataract]], bilateral
* **[[H35.3191]]** - Nonexudative age-related macular degeneration (**Dry AMD**)
* **[[H40.1134]]** - Primary open-angle [[glaucoma]], bilateral, indeterminate stage
* **[[H52.13]]** - Myopia, bilateral

## Key Modifiers
* **[[-RT]] / [[-LT]]**: Right or Left Eye (Vital for laterality)
* **[[-E1]] thru [[-E4]]**: Specific eyelid modifiers (Upper/Lower, Left/Right)
* **[[-25]]**: Significant, separately identifiable E/M on same day as procedure (e.g., injection)

## 📖 Specialty Etymology
| Term                | Etymology                                                 | Breakdown                                                         |
| :------------------ | :-------------------------------------------------------- | :---------------------------------------------------------------- |
| **[[Aphakia]]**         | Gr. *[[a-]]* (without) + *phakos* ([[lens]])              | Condition of being without a lens.                                |
| **[[blepharitis]]** | Gr. *blepharon* (eyelid) + *[[-itis]]* (inflammation)     | Inflammation of the eyelids.                                      |
| **[[Glaucoma]]**        | Gr. *glaukos* (silver/gray) + *[[30 Anatomy & Path/Med terms dictionary/Med roots/-oma]]* (mass/condition) | Named for the hazy/gray appearance of the eye in advanced stages. |
| **[[Presbyopia]]**      | Gr. *presbys* (old man) + *[[ops-]]* (eye)                | Age-related vision loss (farsightedness).                         |

> [!TIP] Coding Tip
> Always check if the physician documented the "**Eye Code**" (920xx) vs. the "**E/M Code**" (992xx). Use the one that provides the most appropriate reimbursement based on the level of exam performed.

---

# [[Retina Surgery & Vitrectomy]]

### **Complex vs. Simple Repair**

- **[[67113]] (Complex Repair):** Requires specific pathology. Documentation must explicitly state one of the following to justify "complex":
    - Proliferative vitreoretinopathy (PVR) grade C-1 or greater.
    - Diabetic traction retinal detachment.
    - Retinopathy of prematurity.
    - Giant retinal tear (>90 degrees).
- **Mandatory Elements for [[67113]]:** Must perform **Vitrectomy AND Membrane Peeling**. If peeling is not done, you cannot use [[67113]].

### **Bundling Alerts (NCCI)**

- **Lensectomy ([[66850]]) with Vitrectomy ([[67036]]):** Generally **bundled**.
    - _Rule:_ You cannot bill [[66850]] separately unless the lens is removed and an IOL is **NOT** inserted (left aphakic).
    - _Exception:_ If the code descriptor includes "**removal of lens**" (e.g., [[67113]]), you never bill [[lensectomy]] separately.
- **Air/Gas/Oil:** Tamponade is included in the main [[vitrectomy]] codes ([[67042]], [[67108]], [[67113]]) and is not separately billable.

### **New Technology (2025)**

- [[**0936T]]:** New Category III code for **[[Photobiomodulation therapy]]** of the retina (single session). Use Modifier 50 for bilateral.
- **Subretinal Gene Therapy:** HCPCS **C9770** covers [[vitrectomy]] with [[subretinal]] injection (e.g., Luxturna administration). Do not bill standard vitrectomy ([[67036]]) for this.

---

# [[Diagnostic Imaging Rules]]

### **B-Scan Ultrasound (76512 vs. 76513)**

- **[[76512]] (Posterior):** Use for structures _behind_ the lens (e.g., [[Retinal Detachment]], [[vitreous hemorrhage]], optic nerve head).
- **[[76513]] (Anterior):** Use for structures _at or in front of_ the lens (e.g., IOL position, iris cysts, [[ciliary body]], UBM for [[glaucoma]]).
    - _Tip:_ Do not code both on the same eye; [[76512]] is bundled into [[76513]].

### **OCT & Fundus Photos**

- **Bundling:** NCCI generally prohibits billing Fundus Photos (**[[92250]]**) and OCT Retina (**[[92134]]**) on the same day for the same eye.
- **Exceptions:** You may be able to bill both if they are for **distinct diseases** (e.g., OCT for AMD, Photos for a nevus). Documentation must clearly link the specific diagnosis to each test.
- **OCT Angiography ([[92137]]):** Do not report with standard OCT ([[92133]]/[[92134]]) on the same day.

### **Visual Fields (9208x)**

- **Gross vs. Formal:** Confrontation fields are part of the exam (E/M or Eye Code). Only formal automated perimetry is billable separately.
- **Medical Necessity:** Often denied for "routine" screening. Must have a specific indication (e.g., [[Glaucoma]] suspect, high-risk meds like Plaquenil, eyelid [[ptosis]] with functional limitation).
- **Systemic Links:** If testing for medication toxicity (Plaquenil), link the Z-code for long-term drug use to the CPT, not just the visual symptom.

