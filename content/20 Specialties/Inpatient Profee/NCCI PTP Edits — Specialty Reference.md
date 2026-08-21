---
title: NCCI PTP Edits — Specialty Reference (Urology, ENT, Ophthalmology)
type: reference
category: NCCI / Bundling
specialty: Urology, Otolaryngology, Ophthalmology
mac: Noridian (JE/JF)
year: FY2026
last_verified: Q3 2026 NCCI file (effective 7/1/2026)
---

# NCCI PTP Edits — Specialty Reference

## How to Read This Note
This is a **durable-pattern reference**, not a substitute for the live CMS NCCI PTP file. Column1/Column2 relationships, modifier indicators, and effective dates shift **quarterly**.¹ Before applying any pair below to an actual claim, re-verify against the current quarter's practitioner or hospital outpatient PTP table at the CMS NCCI page. Treat this note as "these two codes have a known bundling relationship — go confirm today's indicator," not as the indicator itself.

### Modifier Indicator Quick Key
| Indicator | Meaning |
|---|---|
| 0 | Edit cannot be bypassed — never append [[-59]]/-X{EPSU}, write off Column 2 |
| 1 | Edit may be bypassed with [[-59]] or an X-modifier **if documentation supports a distinct service** |
| 9 | Edit does not apply |

---

## Urology

### The "Separate Procedure" Trap — CPT 52000
CPT 52000 (cystourethroscopy) carries the AMA **"(separate procedure)"** designation, which functions as a built-in NCCI bundling instruction — it's Column 2 against essentially every therapeutic cystoscopy code in the **[[52234]]** **[[52204]]–[[52356]]** family.² When any intervention occurs during the scope (fulguration, biopsy, stent, [[lithotripsy]]), bill only the therapeutic code — do **not** also report **[[52000]]**.³
- **Exception:** **[[52000]]** performed as a clearly distinct service at a separate anatomic site may be reported with **[[-59]]/[[-XS]]**, but this requires explicit operative-note language identifying the separate site — a buried one-line mention will not survive audit or appeal.⁴

### Ureteroscopy/Lithotripsy Bundling
Diagnostic ureteroscopy is bundled into therapeutic ureteroscopy — do not separately report a diagnostic **[[ureteroscopy]]** code when lithotripsy (CPT **[[52356]]**, which includes **[[52234]]**|stent placement in the same session) is performed.⁵ Fluoroscopic guidance and the access cystoscopy are also bundled components of **[[52356]]**, not separately billable.⁶

### Documentation Standard
Modifier **[[-59]]/[[-XS]]** on a urology PTP edit needs to name the **distinct anatomic site or clearly staged step** in the op note — payers (including commercial plans following Medicare NCCI logic) are actively auditing this pattern and recouping unsupported unbundling.⁷

---

## Otolaryngology (ENT / Sinus)

### Diagnostic Nasal Endoscopy Into Surgical Endoscopy
CPT **[[31231]]** (diagnostic nasal endoscopy) is Column 2 against surgical nasal endoscopy codes (**[[31233]]–[[31298]]**) when performed on the **same side, same date** — the diagnostic component is bundled into the surgical procedure and cannot be billed separately.⁸ This edit carries a **modifier indicator of 0 on several pairings** — meaning it cannot be bypassed with **[[-59]]** or an X-modifier at all; confirm the indicator for the specific pair before assuming it's unbundleable.⁹

### FESS Component-Code Bundling (Same Sinus)
- CPT **[[31255]]** (total ethmoidectomy) **includes** **[[31254]]** (partial ethmoidectomy) — never report both for the same side.¹⁰
- CPT **[[31267]]** (maxillary antrostomy w/ tissue removal) **includes** **[[31256]]** (maxillary antrostomy, no tissue removal) for the same maxillary sinus — report only **[[31267]]** if tissue was removed.¹¹
- CPT **[[30930]]** (fracture nasal turbinate) should not be billed with **[[30140]]** (submucous resection, turbinate).¹²
- Balloon dilation codes **[[31295]]–[[31298]]** are bundled with the corresponding conventional FESS code **when performed on the same sinus** — bill balloon dilation separately only when it is the *sole* procedure on that sinus with no tissue removed.¹³ Do not report **[[31295]]**–**[[31298]]** alongside a full endoscopic sinus surgery on that same sinus.¹⁴

### Septoplasty / Graft Harvest
Cartilage graft harvest (CPT **[[20912]]**) may be separately reported only when taken through a **separate incision** — if performed during the same session as [[septoplasty]] (CPT **[[30520]]**), the graft harvest is not separately reportable.¹⁵

### Nasal/Sinus Endoscopy vs. Ear Procedures
Per Noridian-cited Medicare NCCI PTP logic, CPT **[[30801]], [[30802]], or [[31231]]** should not be reported with **[[69705]]/[[69706]]** (eustachian tube procedures) — if a distinct, separate service is genuinely performed, an appropriate modifier may apply, but this pairing should be verified with your MAC before unbundling.¹⁶

---

## Ophthalmology

### The Governing Principle — "Separate Procedure" Codes
Same mechanism as urology's **[[52000]]**: any CPT code carrying the **"(separate procedure)"** designation is, by CPT's own instruction, not reportable in addition to the comprehensive procedure it's part of.¹⁷ Classic example — CPT **[[66030]]** (anterior chamber injection, medication — separate procedure) is bundled into cataract surgery (**[[66982]]/[[66984]]**) whenever medication is injected intraoperatively; it cannot be billed alongside cataract surgery.¹⁸

### Cataract Surgery Core Bundles
- **[[66984]]/[[66821]] (YAG capsulotomy):** bundled with a **modifier indicator of 1** — unbundling is appropriate only when the procedures are performed on **separate eyes** (different anatomic sites); same-eye same-session billing of both does not qualify.¹⁹
- **Same-date diagnostic testing:** OCT (**[[92133]]/[[92137]]|[[92134]]**), visual field testing (**[[92081]]**), and corneal topography (**[[92025]]**) bundle into **[[66984]]** when performed on the **same date of service** — the edit fires on date-match alone, independent of clinical necessity. Schedule pre-op diagnostic testing on a **separate date** from surgery to avoid the automatic denial.²⁰
- **OCT vs. OCT-A:** CPT **[[92137]]** (OCT-A) includes the standard OCT component — **[[92133]]/[[92134]]** and **[[92137]]** are mutually exclusive for the same eye, same day; bill the one that reflects the actual test performed, not both.²¹

### Intravitreal Injection During Cataract Surgery
An anti-VEGF intravitreal injection performed at the same session as cataract surgery on a diabetic patient may be separately reportable with **[[-59]]**/-X-modifier **only if** the payer's NCCI edit indicator allows it and documentation supports two distinct procedures with independent medical necessity — verify the current indicator, this is a frequently second-guessed pairing.²²

---

## Cross-Specialty Documentation Standard
Across all three specialties, the pattern payers are auditing hardest in 2026 is the same: **[[-59]]/-X modifier appended without operative-note language identifying the distinct anatomic site, separate session, or independently-justified procedure.**²³ The fix is never the modifier — it's the sentence in the op note that names *why* the two codes represent genuinely separate work.

---
<small>
1. MBW RCM, "FESS Billing Errors in Multi-Procedure Sinus Claims," 2026 (Q3 2026 NCCI file effective 7/1/2026).
2. Med Revenue Hub, "CPT 52000 Explained: Cystoscopy Billing & Documentation Guide 2026."
3. ClaimMax RCM, "Cystoscopy CPT Codes 2026: Billing, Rates & Denial Guide."
4. ClaimMax RCM, "Cystoscopy CPT Codes 2026: Billing, Rates & Denial Guide."
5. Med Bridge LLC, "Proven CPT 52356 Billing Guidelines 2026."
6. Med Bridge LLC, "Proven CPT 52356 Billing Guidelines 2026."
7. ClaimMax RCM, "Cystoscopy CPT Codes 2026: Billing, Rates & Denial Guide."
8. GoMedicalBilling, "CPT 31231: Nasal Endoscopy Dx, 2026 Fee & RVUs."
9. GoMedicalBilling, "CPT 31231: Nasal Endoscopy Dx, 2026 Fee & RVUs."
10. Allzone MS, "FESS CPT Code Guide: Functional Endoscopic Sinus Surgery," 2026.
11. Allzone MS, "FESS CPT Code Guide: Functional Endoscopic Sinus Surgery," 2026.
12. Medtronic, "Nasal and Sinus Procedures 2026 Coding and Payment Guide."
13. 247 Medical Billing Services, "ENT Billing 2026: Sinus Surgery, Audiometry & Allergy Testing Code Updates."
14. Medtronic, "Nasal and Sinus Procedures 2026 Coding and Payment Guide."
15. Medtronic, "Nasal and Sinus Procedures 2026 Coding and Payment Guide."
16. Medtronic, "Nasal and Sinus Procedures 2026 Coding and Payment Guide" (citing Medicare NCCI PTP edits).
17. Ophthalmology Management, "Separate Procedures and NCCI Bundles," Oct. 2024 (citing CPT codebook).
18. Ophthalmology Management, "Separate Procedures and NCCI Bundles," Oct. 2024.
19. American Academy of Ophthalmology, "Master the Fundamentals of Unbundling: NCCI Edits."
20. ClaimMax RCM, "CPT Code 66984: Cataract Billing, 2026 Rate Cut, and Modifiers."
21. 247 Medical Billing Services, "Ophthalmology Billing 2026: Cataract & OCT Updates."
22. Retinal Physician, "Coding: Separate Procedures and NCCI Bundles," Oct. 2024.
23. Synthesized across ClaimMax RCM, Preferred MB, and Neolytix 2026 specialty billing guides.
</small>