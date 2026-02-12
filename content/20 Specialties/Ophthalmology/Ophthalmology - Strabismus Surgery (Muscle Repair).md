---
tags:
  - medical_coding/guideline
  - specialty/ophthalmology
  - context/mcw_profee
creation_date: 2026-01-22
---

# Ophthalmology - Strabismus Surgery

## 📋 The Rule (Quick Summary)
> **Count the Muscles:** Strabismus coding is per **muscle**, not per eye.
> **Horizontal vs. Vertical:** Vertical muscles (Superior/Inferior Rectus, Obliques) pay more/differently than Horizontal ones (Lateral/Medial Rectus).
> **Transposition:** Moving a muscle to do the work of another is a different code set.

---

## 💰 CPT Selection Logic
*(Base Codes - Horizontal)*
* **67311:** One horizontal muscle.
* **67312:** Two horizontal muscles (same eye).

*(Base Codes - Vertical/Oblique)*
* **67314:** One vertical muscle (excluding superior oblique).
* **67316:** Two or more vertical muscles (same eye).
* **67318:** Superior Oblique muscle surgery.

### ⚠️ The "Add-On" Gold Mine
*Never miss these +Codes (List them separately!):*
- [ ] **+67332 (Scarring/Re-do):** Use if the patient has had *prior* strabismus surgery on this eye.
- [ ] **+67331 (Posterior Fixation):** The "Faden" procedure (suturing muscle far back).
- [ ] **+67334 (Posterior adjustable sutures):** If they leave sutures long to adjust later.
- [ ] **+67335 (Superior Oblique Expander):** Specific to SO surgery.

### ⚠️ Modifier Watch
- [ ] **-50 (Bilateral):** **YES.** If operating on muscles in *both* eyes (e.g., Medial Rectus Recession OU), bill the code with -50.
- [ ] **-51:** Use if doing Horizontal (67311) AND Vertical (67314) on the same eye.

---

## 🚨 Documentation Alerts (Query Triggers)
1.  **"Previous Surgery":** Check the history! If they had eye muscle surgery 20 years ago, you **must** bill the **+67332** add-on. It adds significant RVUs for the difficulty of scar tissue.
2.  **Number of Muscles:** Explicitly check: "Medial Rectus AND Lateral Rectus recessed?" -> That's **67312**, not 67311 x2.

---

## From NotebookLM:


# [[Strabismus Surgery Coding]]

### **Common CPT Codes & Logic**

- **Strabismus Surgery Codes (e.g., 67318)**: These codes are typically organized by the **number** and **type** of muscles (vertical vs. horizontal) operated on.
- **Add-on Codes (Z Codes)**: Strabismus surgery often utilizes add-on codes for complexity (e.g., reoperation, scarring, adjustable sutures).
    - _Note:_ Add-on codes (ZZZ global period) do not carry their own postoperative days; they follow the global period of the primary procedure.
- **Chemodenervation (67345)**: Injection of toxin (e.g., Botox) for strabismus.

### **Global Period Rules**

- **Period:** **90 Days** (Major Surgery).
    - _Source:_ CPT 67318 (Repair strabismus superior oblique) is explicitly listed with a 090-day global period.
- **Included Services (Bundled):**
    - **Exam Under Anesthesia (92018/92019):** Generally **bundled** into the surgical code. Only billable separately if the exam is the _primary_ service (e.g., surgery cancelled) or required for a distinct diagnostic reason (e.g., severe trauma) with Modifier 59/XU.
    - **Injections (68200):** Subconjunctival injections (e.g., steroids/anesthetics) are included in the procedure and not separately reportable.
    - **Surgical Incisions:** Repair of the conjunctiva/Tenon's capsule is integral; do not bill wound repair codes (12001-13153) separately.

### **Essential Modifiers**

- **-50 (Bilateral):**
    - Strabismus codes are generally unilateral. If operating on **both eyes** (e.g., bilateral medial rectus recession), report the code with **Modifier 50** and **1 unit** of service.
    - _Check Payer:_ Some payers require two lines (RT/LT); Medicare generally requires one line with -50.
- **-RT / -LT:** Mandatory if the procedure is performed on only one eye.
- **-59 / X{EPSU} (Distinct Service):**
    - Use if performing a distinct procedure on a **separate structure** (e.g., operating on a different muscle not included in the primary code definition).
- **-78 (Unplanned Return to OR):**
    - Used for complications requiring a return to the operating room (e.g., slipped muscle, infection).
    - _Note:_ Routine post-op adjustments performed in the office are **included** in the global package and are **not** billable.

### **ICD-10 Coding (Diagnosis Specificity)**

You must specify **laterality** and **type** of deviation to support medical necessity.

- **Esotropia (Turning inward):**
    - **H50.0-**: Esotropia (Concomitant).
    - **H50.31-**: Intermittent monocular esotropia.
- **Exotropia (Turning outward):**
    - **H50.1-**: Exotropia.
    - **H50.33-**: Intermittent monocular exotropia.
- **Vertical/Mechanical:**
    - **H50.2-**: Vertical strabismus (Hypertropia).
    - **H50.6-**: Mechanical strabismus (e.g., Brown's sheath **H50.61**, Muscle entrapment **H50.62-H50.68**).
- **Amblyopia:**
    - **H53.03-**: Strabismic amblyopia (must link if surgery is to correct this).

### **Documentation Checklist**

- [ ] **Muscle Identification:** Clearly state which muscles (e.g., Medial Rectus, Inferior Oblique) and how many were treated.
- [ ] **Type of Procedure:** Recession, Resection, Transposition, or Plication.
- [ ] **Complexity:** Document "previous surgery," "scarring," or "posterior fixation sutures" if billing add-on codes.
- [ ] **Measurements:** Document prism diopters to support medical necessity (functional vs. cosmetic).
- [ ] **Anesthesia:** If billing EUA (92018) separately, document _why_ the exam was necessary and separate from the surgical workflow (e.g., "uncooperative pediatric patient requiring assessment prior to surgical decision").

### **2025/2026 Policy Alerts**

- **Efficiency Adjustments (2026):** Expect a **-2.5% RVU reduction** for procedural codes. This will impact the reimbursement for fixed strabismus codes.
- **Post-Op Care Transfer:** If co-managing (e.g., OD doing post-op orthoptics), use **Modifier 55**. If no formal transfer exists but you are covering for a different group, consider the new code **G0559** (though note: G0559 is typically not billable with Eye Visit Codes 92xxx).

---
