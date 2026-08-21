---
title: Verifying Current-Quarter NCCI PTP Edits — Noridian & CMS Workflow
type: workflow
category: NCCI / Bundling
specialty: Multi-specialty (Urology, Otolaryngology, Ophthalmology)
mac: Noridian (JE/JF)
year: FY2026
release_cycle: Quarterly (Jan 1 / Apr 1 / Jul 1 / Oct 1)
---

# Verifying Current-Quarter NCCI PTP Edits

## Why This Note Exists
The [[NCCI PTP Edits — Specialty Reference]] note documents *durable* bundling relationships, but modifier indicators, new pairs, and deletions change **every quarter**.¹ This note is the verification step that keeps that reference from going stale — use it any time you need to confirm today's indicator before appending -59/-X{EPSU} on a claim.

## Two Paths: Pick Based on the Task

| Use Case | Tool |
|---|---|
| Single code pair, quick check before submitting/appealing a claim | **Noridian NCCI PTP Lookup Tool** |
| Bulk verification, retrospective audit, or building/updating vault reference notes | **Raw CMS Quarterly PTP File (Excel)** |

---

## Path 1 — Noridian PTP Lookup Tool (Fast, Per-Code)

Noridian built a dedicated lookup tool specifically so providers can check bundling status without downloading the full CMS file.²

### Steps
1. Go to the Noridian Medicare site for your jurisdiction — **JE Part B** or **JF Part B**, whichever the rendering provider bills under.
2. Navigate to **Tools → NCCI Procedure-to-Procedure (PTP) Lookup**.
3. Enter the **procedure code** and the **date(s) of service**.
4. Review both result tabs:
   - **Major-to-Minor** — shows what the entered code bundles *into* when it's the Column 2 (minor) code
   - **Minor-to-Major** — shows what bundles *into* the entered code when it's the Column 1 (major) code
5. Note the **modifier/policy indicator**:
   - Indicator **1 (allowed)** → both codes can be paid if a clinically appropriate modifier is appended to the Column 2 code
   - No indicator flexibility shown → edit cannot be bypassed
6. If the pair is denied and shouldn't be, the denial reason will show as **CARC C0236** — this confirms it's an NCCI PTP edit, not a different denial cause.³

### When to Use This Path
- Pre-claim scrubbing on a specific op note
- Investigating a C0236 denial
- Quick confirmation before appending [[-59]]/[[-XS]] to a claim you're about to submit

---

## Path 2 — Raw CMS Quarterly PTP File (Bulk / Reference-Building)

Use this when updating vault reference notes, doing a batch audit across many encounters, or when you need the full edit universe rather than one code at a time.

### Where to Find It
CMS posts the files at: **Medicare NCCI Procedure to Procedure (PTP) Edits** page (cms.gov, under Medicare → Coding, Billing & Reporting → National Correct Coding Initiative Edits).⁴

### Release Schedule
New versions are effective **January 1, April 1, July 1, and October 1** each year, typically posted about one month before the effective date.⁵ Replacement files are occasionally issued mid-quarter for corrections — always check the posting date, not just the version number.⁶

### Which File to Download
- **Practitioner PTP Edits** — for professional/physician fee claims (POS 11, most of your inpatient profee work)
- **Hospital Outpatient PTP Edits** — for facility-side hospital outpatient claims
- Files are split into multiple ZIP/Excel workbooks by code range (e.g., [[25442]]/01810–[[37252]]/[[99452]]) because the full table runs 675,000+ records — you'll need the workbook covering your code's range.⁷

### Reading the Table
| Column             | Meaning                                                                                              |
| ------------------ | ---------------------------------------------------------------------------------------------------- |
| **Column A**           | Column 1 (payable/major) code                                                                        |
| **Column B**           | Column 2 (bundled/minor) code                                                                        |
| **Modifier Indicator** | 0 = never bypassable · 1 = bypassable with appropriate modifier + documentation · 9 = does not apply |
| **Effective Date**     | When this specific pair became active                                                                |
| **Deletion Date**      | If populated, when the pair stopped applying                                                         |

### How to Search It
1. Download and unzip the Excel workbook covering your code's range.
2. Filter/search Column A for your code to see everything it bundles as Column 1.
3. Filter/search Column B for your code to see everything it's bundled *into* as Column 2.
4. Cross-check the Modifier Indicator column before assuming a pair is bypassable.⁸

### Quarterly Changes-Only Files
If you just need to know what changed this quarter (not the full table), download the **"Quarterly Additions, Deletions, and Revisions"** ZIP instead of the full edit file — it's much smaller and shows only new/removed/revised pairs effective that quarter.⁹

---

## Companion Files to Check Alongside PTP
- **Medically Unlikely Edits (MUE)** — caps units of service per code/date; Noridian has a parallel MUE Lookup Tool under the same Tools menu.¹⁰
- **Medicaid NCCI files** — separate from Medicare files; relevant for your Wisconsin Medicaid claims specifically — verify you're pulling the Medicaid version, not Medicare, when working WI Medicaid denials.¹¹

## Vault Maintenance Note
When you update the [[NCCI PTP Edits — Specialty Reference]] note after a quarterly release, log the version/effective date in that note's YAML `last_verified` field so future-you knows at a glance whether it's due for a refresh.

---
<small>
1. CMS, "Medicare NCCI Procedure to Procedure (PTP) Edits," cms.gov.
2. Noridian Medicare, JE/JF Part B, "NCCI PTP Lookup Tool."
3. Noridian Medicare, JE/JF Part B, "NCCI PTP Lookup Tool."
4. CMS, "Medicare NCCI Procedure to Procedure (PTP) Edits," cms.gov.
5. AAPC Knowledge Center, "Is There an NCCI Edit for Those Codes?"
6. AAPC Knowledge Center, "Is There an NCCI Edit for Those Codes?"
7. CMS, "Medicare NCCI Procedure to Procedure (PTP) Edits" (Practitioner PTP Edits v322r0 file listings).
8. CMS, "Using the NCCI Tools | How to Use the Medicare NCCI Tools," MLN901346.
9. AAPC Knowledge Center, "CMS Posts Q3 NCCI Edit Files."
10. Noridian Medicare, JF Part B, "Tools" page.
11. AAPC Knowledge Center, "CMS Posts Q3 NCCI Edit Files" (Medicaid NCCI edit files noted as separate Q3 posting).
</small>