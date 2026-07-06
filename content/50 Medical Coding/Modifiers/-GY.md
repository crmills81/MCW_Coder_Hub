---
tags:
  - modifiers
  - Medicare
  - HCPCS
  - billing
  - ABN
  - statutory-exclusion
  - denial-management
title: -GY
aliases:
  - GY modifier
  - Statutorily Excluded Modifier
  - Non-Medicare Benefit Modifier
  - GY
type: modifier-reference
modifier: GY
payer: Medicare / Medicare Advantage
category: Informational / ABN-Related
related_modifiers:
  - GA
  - GX
  - GZ
date_created: 2026-06-01
last_reviewed: 2026-06-01
status: Active ✅
source: CMS / Palmetto GBA / AAPC
---

# 🧬 Modifier -GY — Statutorily Excluded Item or Service

> [!info] Quick Definition
> **Modifier [[-GY]]** — *Item or service statutorily excluded, or does not meet the definition of any Medicare benefit.*

---

## 🔑 Key Concept

**Modifier** **[[-GY]]** is appended to a CPT or HCPCS code to signal to Medicare that the submitted service is **excluded from coverage by federal statute** — meaning Medicare *can never* cover it, regardless of medical necessity or documentation. This is fundamentally different from a denial based on lack of medical necessity (see **[[-GZ]]**).

> [!important] Remember
> The claim **will deny automatically** whether or not **[[-GY]]** is present on the claim. The modifier is used intentionally to *speed the denial* and establish **patient liability** — often needed so the patient can bill their secondary insurance or pay out-of-pocket.

---

## ✅ When to Use -GY

- The service is **excluded by statute** from the Medicare program (i.e., a section of the Social Security Act excludes it)
- The service **does not meet the definition of a Medicare benefit** at all
- You need a formal Medicare denial for **secondary insurance billing** purposes (Medigap, commercial secondary, etc.)
- The patient requests the service knowing it is not covered and you need to establish their financial liability
- Some **Local Coverage Determinations (LCDs)** specifically instruct providers to append **[[-GY]]** to the HCPCS code listed in the LCD when the service falls outside coverage criteria

> [!tip] ABN Not Required
> Unlike **[[-GA]]**, you are **not required** to obtain a signed ABN (Advance Beneficiary Notice) when using **[[-GY]]**. Patients are presumed by law to know what Medicare covers. However, it is still considered best practice to inform the patient in advance.

---

## ❌ When NOT to Use -GY

- **Do NOT** append to **bundled procedures** — use appropriate unbundling modifiers if applicable
- **Do NOT** append to **add-on codes** (+codes)
- **Do NOT** use when the denial is expected due to **lack of medical necessity** — that scenario calls for **[[-GA]]** (ABN on file) or **[[-GZ]]** (no ABN)
- **Do NOT** use when the service is covered but requires prior authorization

---

## 🔁 Modifier Comparison: GY vs. Related ABN Modifiers

| Modifier | Scenario | ABN Required? | Liability |
|---|---|---|---|
| **[[-GA]]** | Expected denial — lack of medical necessity — ABN on file | ✅ Yes | Patient liable |
| **[[-GX]]** | Voluntary notice of liability issued | Optional | Patient liable |
| **[[-GY]]** | Statutorily excluded — never a Medicare benefit | ❌ No | Patient liable |
| **[[-GZ]]** | Expected denial — lack of medical necessity — NO ABN | ❌ No ABN obtained | Provider liable |

> [!warning] Critical Distinction
> **[[-GY]]** = Patient pays. **[[-GZ]]** = Provider eats the cost. This is one of the most tested distinctions on CPC and CPC-H exams — and one of the most costly billing errors in practice.

---

## 💡 Common Statutorily Excluded Services (Medicare)

These are the most frequently encountered services billed with **[[-GY]]**:

- Routine eye exams (**refraction**) — *covered by Medicare only if there is a diagnosis of disease*
- Eyeglasses and contact lenses (**with limited exceptions post-cataract**)
- Routine dental care
- Hearing aids and routine hearing exams
- Cosmetic surgery (**unless resulting from accidental injury or improving function**)
- Acupuncture (**with limited exceptions for chronic low back pain**)
- Custodial/personal care services
- Routine foot care (**with exceptions for systemic conditions**)
- Preventive physical exams (**routine well visits — not Welcome to Medicare or AWVs**)

---

## 📋 Usage Examples

---

### Example 1 — Routine Refraction / Eyeglasses (Ophthalmology) 👁️

> A 72-year-old established Medicare patient presents for a routine eye exam. She has no pathology noted and simply wants a new glasses prescription. She also wants a new pair of frames billed so her secondary Medigap can potentially cover the cost.

**Claim submission:**

- [[92015]]-**[[-GY]]** *(Determination of refractive state)*
- V2020-**[[-GY]]** *(Frames, purchases)*

> Medicare will auto-deny. The **[[-GY]]** modifier triggers patient liability, allowing the claim to be forwarded to secondary insurance or billed to the patient directly. No ABN is required but may be given as a courtesy.

---

### Example 2 — Routine Preventive Physical (Primary Care)

> A 68-year-old Medicare beneficiary requests a complete preventive medicine visit (not the Medicare AWV). The provider performs and documents a comprehensive preventive exam.

**Claim submission:**

- [[99397]]-**[[-GY]]** *(Preventive medicine, established patient, 65+ years)*

> [!note]
> The Medicare Annual Wellness Visit ([[G0439]]) *is* a covered Medicare benefit. The routine preventive physical ([[99397]]) is **not**. Using **[[-GY]]** on [[99397]] signals the correct statutory exclusion and speeds the denial for secondary billing.

---

### Example 3 — Hearing Aid Evaluation

> A 75-year-old Medicare patient requests evaluation for a hearing aid. Hearing aids and their fittings are explicitly excluded from Medicare coverage under the Social Security Act.

**Claim submission:**

- [[92590]]-**[[-GY]]** *(Hearing aid examination and selection, monaural)*

> Patient is liable. If the patient has a Medicare Advantage plan, check the plan's supplemental benefits — some MA plans DO cover hearing aids, so **[[-GY]]** use may vary by plan.

---

### Example 4 — Cosmetic Procedure

> A 65-year-old patient requests blepharoplasty for cosmetic reasons only. There is no documentation of functional impairment, superior visual field defect, or ptosis meeting medical necessity criteria.

**Claim submission:**

- [[15820]]-**[[-GY]]** *(Blepharoplasty, lower eyelid)*

> [!caution]
> If the provider had documentation supporting medical necessity (e.g., visual field defect) but *did not* obtain an ABN, the appropriate modifier would shift to [[-GZ]] — not [[-GY]]. Confirm the clinical scenario carefully before selecting the modifier.

---

## ⚠️ Inpatient / Profee Considerations

As an inpatient profee coder, **[[-GY]]** situations are less common but do arise, particularly when:

- A physician provides a service during an inpatient stay that falls outside of Medicare's benefit definition entirely
- A consulting specialist performs a purely cosmetic or statutorily excluded procedure during an otherwise covered admission
- Attending physicians document services rendered at patient/family request that have no covered indication

> [!important] DRG Impact Note
> **[[-GY]]** is a **professional fee** modifier and does **not** affect DRG assignment or facility billing. However, if a profee service is being carved out of an inpatient claim for separate billing, ensure the service is truly separable and not included in the global inpatient payment.



---

## 📚 Sources
<small>
1. Palmetto GBA — *GZ and GY HCPCS Modifier Use* (Updated Feb 2025): https://www.palmettogba.com/palmetto/jmb.nsf/DIDC/GOC5CKVTNW~Appeals
2. CMS Transmittal R1785B3 — HCPCS Modifier Definitions: https://www.cms.gov/Regulations-and-Guidance/Guidance/Transmittals/downloads/R1785B3.pdf
3. AAPC — *Use -GY, -GZ Modifiers to Speed Medicare Denials*: https://www.aapc.com/codes/scc_articles/article_pdf/36/use-gy-gz-modifiers-to-speed-medicare-denials
4. Nebraska Blue — *Use of HCPCS Modifiers GA, GX, GY, GZ in MA Billing* (Updated Oct 2025): https://www.nebraskablue.com/Providers/Policies-and-Procedures/Medicare-Advantage/Use-of-HCPCS-Modifiers-GA-GX-GY-GZ-in-MA-Billing
5. Molina Healthcare — *Advance Beneficiary Notice (ABN) Modifiers GA, GX, GY, GZ Policy*
6. iMedClaims — *Guide to Use Cases of Medicare Modifiers GA, GX, GY & GZ* (Nov 2024): https://imedclaims.com/use-case-of-medicare-ga-gx-gy-gz-modifiers/
7. WPS GHA — *Modifier GY Fact Sheet*: https://www.wpsgha.com/guides-resources/view/33
</small>