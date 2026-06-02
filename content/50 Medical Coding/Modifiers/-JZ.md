---
tags:
  - modifiers
  - Medicare
  - HCPCS
  - Part-B-drugs
  - drug-wastage
  - single-dose-vial
  - billing
  - infusion
  - ophthalmology
  - oncology
title: -JZ
aliases:
  - JZ modifier
  - Zero Drug Wastage Modifier
  - No Discard Modifier
  - Single-Dose No Waste
type: modifier-reference
modifier: JZ
payer: Medicare Part B / Medicare Advantage
category: Drug Administration / Wastage Reporting
mandatory_effective: 2023-07-01
voluntary_effective: 2023-01-01
related_modifiers:
  - JW
applies_to: Single-dose containers / single-use packages
claim_form: CMS-1500 / CMS-1450
date_created: 2026-06-01
last_reviewed: 2026-06-01
status: Active ✅
source: CMS / CGS Medicare / AAPC / Novitas
---

# 🧬 Modifier -JZ — Zero Drug Amount Discarded

> [!info] Official CMS Definition
> **Modifier [[-JZ]]** — *Zero drug amount discarded/not administered to any patient.*

---

## 🔑 Key Concept

**Modifier [[-JZ]]** is a **HCPCS** Level II modifier introduced in the **2023 Medicare Physician Fee Schedule Final Rule** (Nov. 2022) to attest that **no drug was discarded or wasted** from a single-dose container or single-use package during administration to a Medicare Part B patient. [^1]

It works as the **companion modifier** to **[[-JW]]** (*Drug amount discarded/not administered to any patient*). Together, these two modifiers give CMS a complete picture of how single-dose vials are used — whether the full amount was administered (**[[-JZ]]**) or some portion was wasted (**[[-JW]]**). [^2]

> [!important] Mandatory as of October 1, 2023
> **[[-JZ]]** was **voluntary** from January 1, 2023 through June 30, 2023. It became **required** effective July 1, 2023 (with full enforcement mandatory by October 1, 2023) for all separately payable **Part B** drugs billed from single-dose containers or single-use packages where no drug was discarded. Claims missing the required modifier are subject to **denial**. [^3]

---

## 📌 Why CMS Created -JZ

Prior to **2023**, only **[[-JW]]** existed to track drug wastage. **CMS** discovered there was **very low utilization of [[-JW]]**, raising compliance concerns — if providers weren't reporting waste, were they properly discarding unused drug? Were they pooling vials across patients?

By creating **[[-JZ]]**, **CMS** now requires an **affirmative attestation** on every single-dose drug claim: either waste occurred (**[[-JW]]**) or it did not (**[[-JZ]]**). The combined data feeds into the **Inflation Reduction Act's** discarded drug refund calculation, requiring manufacturers to pay rebates when drugs are frequently wasted. [^4]

> [!tip] Think of it this way
> **[[-JW]]** = "Some drug hit the drain."
> **[[-JZ]]** = "Every drop went into the patient."
> One of the two must be on every single-dose drug claim billed to Medicare Part B.

---

## ✅ When to Use -JZ

- The drug was administered from a **single-dose container or single-use package**
- The **entire amount drawn** was administered to the patient — no discarded remainder
- The administered dose equals the total amount in the vial **or** the dose given is less than the billing unit (**see fractional billing note below**)
- The drug **HCPCS** code is **separately payable** under Part B (**OPPS** Status Indicator **G** or **K** for institutional; standard separately payable drug codes for professional)
- Billing occurs on a **CMS-1500** (**professional**) or **CMS-1450/UB-04** (**institutional/outpatient**)

> [!note] Fractional Billing Units
> If a patient receives a dose that is **less than one full billing unit**, you **cannot** bill fractional units. Instead, report the full billing unit with **[[-JZ]]** to indicate no drug was discarded — the remainder simply could not be separately billed due to unit structure. Do **not** use **[[-JW]]** in this scenario. [^5]

---

## ❌ When NOT to Use -JZ

- **Multi-dose vials** — **[[-JZ]]** and **[[-JW]]** do **not** apply to multi-dose containers; only single-dose/single-use containers are in scope
- Drug is **packaged** into the procedure payment (**OPPS** Status Indicator **N**) — no separate drug billing required
- Drug was billed under **Part D**, not Part B
- Waste **did** occur — use **[[-JW]]** on a separate claim line instead
- Service is provided in a **hospital inpatient** setting where drug costs are bundled into the **DRG** (facility side); profee drug administration claims may still apply

---

## 🔁 JZ vs. JW — Side-by-Side

| Feature            | **[[-JW]]**                 | **[[-JZ]]**                 |
| ------------------ | --------------------------- | --------------------------- |
| **Meaning**            | Drug was discarded/wasted   | No drug was discarded       |
| **Claim lines needed** | Two (administered + waste)  | One                         |
| **Units reported**     | Wasted units on line 2      | Administered units only     |
| **Introduced**         | January 1, 2017             | January 1, 2023             |
| **Mandatory**          | Yes (since 2017)            | Yes (since July 1, 2023)    |
| **Vial type**          | Single-dose containers only | Single-dose containers only |
| **Payment for waste**  | Yes — Medicare pays waste   | N/A — no waste occurred     |

---

## 💊 Common Drug Codes Used with -JZ

These are frequently encountered **HCPCS** drug codes where **[[-JZ]]** applies when no drug is wasted. Note: the specific **HCPCS** drug codes below are **examples** of separately payable single-dose drugs — always verify the **FDA** label designates them as single-dose before appending **[[-JZ]]**.

| Drug | HCPCS Code | Common Specialty |
|---|---|---|
| Aflibercept (Eylea) | **J0178** | Ophthalmology |
| Ranibizumab (Lucentis) | **J2778** | Ophthalmology |
| Bevacizumab (Avastin) — compounded | **J9035** | Ophthalmology / Oncology |
| Faricimab (Vabysmo) | **J0180** | Ophthalmology |
| Pembrolizumab (Keytruda) | **J9271** | Oncology |
| Nivolumab (Opdivo) | **J9299** | Oncology |
| Dexamethasone implant (Ozurdex) | **J7312** | Ophthalmology |
| Fluocinolone implant (Iluvien/Yutiq) | **J7313** | Ophthalmology |
| Pertuzumab (Perjeta) | **J9306** | Oncology |

> [!caution] Always Verify FDA Labeling
> The **modifier** requirement is tied to **FDA-approved labeling** designating the container as single-dose. If the label says single-dose, **[[-JZ]]** or **[[-JW]]** is required. Multi-dose designations do not trigger this requirement.

---

## 📋 Usage Examples

---

### Example 1 — Ophthalmology: Intravitreal Injection, Full Vial Used 👁️

> A retinal specialist administers aflibercept 2 mg intravitreal injection to a Medicare patient for wet AMD. The vial is labeled as a single-dose container. The physician draws the full dose and administers it entirely — nothing is wasted.

**Claim submission (one line):**

- [[J0178]]-**[[-JZ]]** — *Aflibercept, 1 mg; 2 units administered (= 2 mg), zero discarded*

> Medicare Part B reimburses at ASP + 6% for the 2 units. The **[[-JZ]]** attests no waste occurred. No second claim line needed. Documentation should reflect: drug name, lot number, dose administered, and that the full vial contents were used. [^6]

---

### Example 2 — Ophthalmology: Drug Implant with No Discardable Remainder

> A patient receives a dexamethasone intravitreal implant (Ozurdex) for macular edema secondary to [[H35.81]] (Macular cyst, hole, or pseudohole) — (parent: H35.8). The implant is a single-use device with no discardable drug component.

**Claim submission:**

- [[J7312]]-**[[-JZ]]** — *Dexamethasone, intravitreal implant; 1 unit, zero discarded*
- [[67028]] — *Intravitreal injection of a pharmacologic agent*

> The Ozurdex implant carries OPPS Status Indicator K2 in the ASC setting and should always be reported with **[[-JZ]]**, as there is no discard possible with the implant delivery system. [^7]

---

### Example 3 — Oncology Infusion: Full Vial Administered

> A Medicare patient with non-small cell lung cancer presents for their scheduled pembrolizumab infusion. The pharmacy prepares the dose from a single-dose vial. The weight-based dose exactly matches the vial content — no waste.

**Claim submission (one line):**

- [[J9271]]-**[[-JZ]]** — *Pembrolizumab, 1 mg; [X units] administered, zero discarded*
- [[96413]] — *Chemotherapy administration, intravenous infusion; up to 1 hour*

> [!note] Weight-Based Dosing Tip
> For oncology drugs dosed by weight (mg/kg), the prepared dose rarely equals a perfect vial amount. If there IS leftover drug in the vial that must be discarded, shift to **[[-JW]]** on a second line. Confirm with the pharmacy record what was actually drawn and whether any remainder was discarded vs. retained (multi-dose vials only).

---

### Example 4 — Fractional Billing Unit Scenario

> A Medicare patient receives 1.5 mg of a drug where the billing unit is 1 mg. The provider administers 1.5 units worth of drug — but Medicare does not accept fractional billing units. The provider bills 2 full units.

**Claim submission:**

- [[[Drug HCPCS]]]-**[[-JZ]]** — *2 units billed (full billing units); JZ attests no drug was discarded — the 0.5 unit overage is a billing unit structure issue, not actual waste*

> [!warning] Do Not Use -JW Here
> This is one of the most misunderstood scenarios. You **cannot** use **[[-JW]]** when the fractional dose issue arises from billing unit structure, not actual physical drug discard. **[[-JZ]]** is the correct modifier. [^5]

---

### Example 5 — Institutional / Outpatient Hospital Claim (CMS-1450)

> A hospital outpatient infusion center administers nivolumab to a Medicare patient. The drug is billed on the UB-04 with Revenue Code 0636. The vial is single-dose. Full vial administered, no waste.

**Claim submission:**

- Revenue Code 0636
- [[J9299]]-**[[-JZ]]** — *Nivolumab, 1 mg; [X units]; OPPS Status Indicator K*

> For institutional claims, **[[-JZ]]** must appear for drugs with OPPS status indicator **G** (Pass-Through) or **K** (Non-pass-through separately payable). Drugs with status indicator **N** (packaged) do not require the modifier because they are not billed separately. [^4]

---

## ⚠️ Inpatient / Profee Considerations

As an inpatient profee coder, **[[-JZ]]** is most relevant when:

- Physicians **buy and bill** drugs directly (e.g., injecting physician billing their own drug supply) — Part B drug billing
- Outpatient hospital profee claims are billed on the CMS-1500 for drugs separately administered by the physician in an outpatient setting
- You are reviewing **OPPS** claims for outpatient encounters and verifying drug line accuracy

> [!important] Inpatient DRG Note
> Drugs administered during a **Medicare Part A inpatient stay** are bundled into the DRG — **[[-JZ]]** and **[[-JW]]** do **not** apply to inpatient facility claims. These modifiers are strictly **Part B** and **outpatient** in scope. Profee physician services during inpatient stays bill drug administration codes (**e.g., [[96365]], [[96372]]**) without drug supply codes, as the facility bills the drug. [^3]

---

## 📝 Documentation Requirements

To support **[[-JZ]]** on a claim, the medical record should contain:

- Drug name, NDC number, lot number, and expiration date
- Dose ordered and dose administered (in mg or mcg)
- Total vial contents as labeled by the FDA
- Route of administration
- Date and time of administration
- Attestation or clinical note confirming the full amount was administered and no drug was discarded
- Any pharmacy preparation records if applicable

> [!tip] Audit Risk
> CMS uses **[[-JZ]]** and **[[-JW]]** data for post-payment audits and manufacturer rebate calculations under the Inflation Reduction Act. Inconsistencies between the modifier billed and the documentation (e.g., **[[-JZ]]** billed but nursing notes show partial waste) create significant compliance exposure.


---

## 📚 Full Sources
<small>
1. CMS — *JW Modifier and JZ Modifier Policy HCPCS Codes*: https://www.cms.gov/files/document/jw-modifier-and-jz-modifier-policy-hcpcs-codes.pdf
2. CMS — *Discarded Drugs (JW/JZ)*: https://www.cms.gov/medicare/payment/part-b-drugs/discarded-drugs
3. CMS — *JW and JZ Modifier FAQs*: https://www.cms.gov/medicare/medicare-fee-for-service-payment/hospitaloutpatientpps/downloads/jw-modifier-faqs.pdf
4. CGS Medicare — *Billing and Coding: JW and JZ Modifier Guidelines* (June 2023): https://www.cgsmedicare.com/parta/pubs/news/2023/06/cope141092.html
5. Novitas Solutions — *Drugs and Biologicals Part B – Using the JW and JZ Modifiers*: https://www.novitas-solutions.com/webcenter/portal/MedicareJH/pagebyid?contentId=00142500
6. AAPC — *Master Modifiers JW and JZ Rules* (June 2023): https://www.aapc.com/blog/88325-master-modifiers-jw-and-jz-rules/
7. Retina Today — *How to Implement the –JZ Modifier* (Oct. 2023): https://retinatoday.com/articles/2023-oct/how-to-implement-the-jz-modifier
8. Avalere Health — *New JZ Claims Modifier Applies to NOC Billing* (June 2023): https://advisory.avalerehealth.com/insights/wastage-update-new-jz-claims-modifier-applies-to-noc-billing
9. BST Quarterly — *Using Modifiers to Untangle Billing for Waste* (June 2024): https://www.bstquarterly.com/article/using-modifiers-to-untangle-billing-for-waste/
10. Oncology News Central — *No Modifier JZ on Single Dose Drug Codes? Prepare for Denials* (Jan. 2023): https://www.oncologynewscentral.com/article/no-modifier-jz-on-single-dose-drug-codes-prepare-for-denials
11. Infusion Center — *Managing JW and JZ Modifiers When Billing Single-Dose Drugs* (Feb. 2024): https://infusioncenter.org/managing-jw-jz-modifiers-billing-single-dose-drugs/
</small>