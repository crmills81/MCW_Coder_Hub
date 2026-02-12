---
tags:
  - medical_coding/guideline
  - specialty/urology
  - context/mcw_profee
creation_date: 2026-01-17
---

# Urology - Cystoscopy & TURBT Hierarchy

## 📋 The Rule (Quick Summary)
> **The "Base Code" Rule:** Cystoscopy (52000) is the "entry fee" for the bladder. If *any* other transurethral procedure is performed (TURP, TURBT, Ureteroscopy), the 52000 is **bundled** and cannot be billed separately.

---

## 💰 CPT Selection Logic
*(Size matters for tumors; Location matters for stones)*

**1. Bladder Tumors (TURBT):**
* **52224:** Minor (Fulguration/Cautery only) - *Small/Minor lesions (0.5 cm - 2.0 cm).*
* **52234:** Small (< 2.0 cm).
* **52235:** Medium (2.0 cm - 5.0 cm).
* **52240:** Large (> 5.0 cm).
* *Note:* Code based on the **largest** single tumor size, not the sum of all tumors.

**2. The "Scope" Hierarchy:**
* **52000:** Diagnostic only.
* **52005:** Ureter catheterization (injection for contrast).
* **52007:** Brush biopsy.
* **52204:** Forceps biopsy (Bladder).

### ⚠️ Modifier Watch
*Crucial modifiers for Cysto:*
- [ ] **-57 (Decision for Surgery):** Essential if a diagnostic cysto (52000) leads to an *immediate* major surgery (like a TURP) on the same day.
- [ ] **-59 / -X{EPSU}:** Use only if a biopsy was taken from a *completely separate* site than the tumor resection.
- [ ] **-50 (Bilateral):** **NO.** The bladder is a single organ. (Unless ureteroscopy involves both ureters).

---

## 🚨 Documentation Alerts (Query Triggers)
*If the note is missing this, I cannot code it:*
1.  **Tumor Size:** For TURBT, the op report **MUST** state the size (cm). If they say "large tumor" without a measurement, query or downcode to 52234 (Small).
2.  **Mapping:** Did they biopsy normal mucosa *and* resect a tumor? (Supports -59 modifier).