---
tags:
  - facility-billing
  - modifiers
  - CAH
  - method-II
  - medicare
title: -AG
aliases:
  - Modifier -AG
  - Modifier AG
  - modifier -AG
  - AG
description: "Modifier -AG: Primary physician"
date_created: 2026-08-06
last_updated: 2026-08-06
type: coding-guide
code: AG
---

# Modifier -AG: Primary Physician

## Quick reference
- **Definition:** Modifier **[[-AG]]** identifies the **primary physician** rendering a professional service billed by a Critical Access Hospital (CAH) electing **Method II** billing.
- **Pairs with:** No required pairing modifier, but commonly appears alongside professional service modifiers such as **[[-GC]]** (resident involvement in teaching setting) or assistant-at-surgery modifiers (**[[-80]]**, **[[-81]]**, **[[-82]]**) when applicable.
- **Key rule:** **[[-AG]]** is used only under CAH **Method II** reassignment billing — it flags which physician is the primary (not assisting) practitioner on a claim billed under revenue codes 096X, 097X, or 098X on the UB-04.

---

## When to use -AG
Use **[[-AG]]** when:
- The physician has reassigned billing rights to a CAH electing **Method II** (Optional Payment Method) for outpatient professional services.
- The claim is being submitted on a UB-04 (TOB 85X) under a professional service revenue code (096X/097X/098X), not a CMS-1500.
- The physician is the **primary treating/performing physician** for the encounter — as distinguished from an assistant surgeon or resident.

---

## When NOT to use -AG (common denials)
- **Don't append [[-AG]]** to claims billed under CAH **Method I**, where the physician bills the MAC directly on a CMS-1500 under standard MPFS — [[-AG]] has no function outside Method II.
- **Don't append [[-AG]]** if the practitioner's reassignment isn't documented in PECOS; as of January 2, 2026, CMS will return-to-provider (RTP) or deny Method II professional claims lacking correct PECOS reassignment records.
- **Don't append [[-AG]]** to a claim where the physician is functioning as an assistant at surgery rather than the primary surgeon — that scenario calls for the appropriate assistant-at-surgery modifier instead.
- **Don't append [[-AG]]** twice on the same claim line, or to non-physician practitioner claims where a different qualifying modifier (e.g., **[[-AH]]** for clinical psychologist, **[[-AJ]]** for clinical social worker) is the correct fit.

---

## Governing framework: CAH Method II billing structure
*CMS Medicare Claims Processing Manual, Pub. 100-04, Ch. 4, §250*

- **Method I (Standard):** CAH facility claim goes to the Part A MAC (UB-04, paid at 101% of reasonable cost); the physician bills the Part B MAC separately (CMS-1500, paid under MPFS). No [[-AG]] modifier applies here.
- **Method II (Optional):** The physician/practitioner reassigns billing rights to the CAH. The CAH bills **both** facility and professional services together on the UB-04 (TOB 85X), with professional services on revenue codes 096X, 097X, or 098X. **[[-AG]]** identifies the primary physician on that combined claim.
- **PECOS enrollment requirement:** Each reassigning practitioner must have a completed CMS-855I on file, with the reassignment recorded in PECOS. Effective January 2, 2026, claims with undocumented reassignment are subject to RTP/denial.

---

## What you're paid for with -AG (reimbursement concept)
Under Method II, professional services billed with **[[-AG]]** are reimbursed at **115% of the Medicare Physician Fee Schedule (MPFS)** amount, paid to the CAH rather than directly to the individual physician — **this reflects Section 1834(g)(2)(B) of the Social Security Act**. This is a facility-level payment mechanism, not an add-on RVU modifier like the pricing modifiers you're used to in profee coding.

---

## Documentation checklist (what has to exist)
To support **[[-AG]]**, the record should show:
- A signed CMS-855I enrollment and active PECOS reassignment record for the billing physician, on file with the CAH.
- Clear documentation identifying the physician as the primary performing/treating provider for the encounter (not an assisting role).
- A CAH attestation confirming the physician will not separately bill the MAC for the same service (prevents duplicate billing / False Claims Act exposure).
- Correct revenue code assignment (096X/097X/098X) and type of bill (85X) on the UB-04 corresponding to the professional service rendered.

---

## Common uses (Urology, Ophthalmology, ENT context)
Since **[[-AG]]** is a facility/CAH billing mechanism rather than a procedure-specific pricing modifier, it shows up less in profee-only shops but is relevant if you code for rural/critical access facilities:
- A urologist performing outpatient cystoscopy services (e.g., **[[52000]]**) at a CAH under Method II reassignment — the CAH bills the professional component with **[[-AG]]** identifying the urologist as primary physician.
- An ophthalmologist performing minor outpatient procedures at a CAH electing Method II — professional fee reported on the UB-04 with **[[-AG]]**, distinct from any assistant surgeon reporting.
- An ENT physician's outpatient E/M or minor procedure services at a Method II CAH, where reassignment is active in PECOS and the CAH consolidates facility + professional billing.
- **Not applicable** in standard hospital-based inpatient profee coding (non-CAH) or CAH Method I settings — **you won't see [[-AG]] on typical UHC, Cigna, Aetna, or standard Medicare Part B claims** for hospital-employed specialists.

---

## Quick self-check before using -AG
1. Is this claim being billed under CAH **Method II** reassignment, not Method I or standard Part B billing?
2. Is the physician the **primary** performing provider — not an assistant surgeon or resident?
3. Is the reassignment documented and active in **PECOS** (CMS-855I on file)?
4. Is the claim using the correct **UB-04 / TOB 85X** format with the appropriate 096X/097X/098X revenue code, not a CMS-1500?

---



### 📚 Sources

<small>
1. Centers for Medicare & Medicaid Services. *Medicare Claims Processing Manual, Pub. 100-04, Chapter 4, §250 — Critical Access Hospital (CAH) Billing.* CMS; 2026. https://www.cms.gov
2. Noridian Healthcare Solutions. *Critical Access Hospital (CAH) Method II Billing and Reassignments.* Noridian Medicare JE Part A; 2026. https://med.noridianmedicare.com
3. Noridian Healthcare Solutions. *Outpatient CAH Billing Guide, JE Part A.* Noridian Medicare; 2026. https://med.noridianmedicare.com
4. First Coast Service Options. *Critical Access Hospital (CAH) Method II Professional Reassignments.* FCSO Medicare; 2026. https://medicare.fcso.com
5. AAPC. *HCPCS Modifier AG — Primary Physician.* AAPC Codify; 2026. https://www.aapc.com/codes/hcpcs-modifiers/AG
</small>