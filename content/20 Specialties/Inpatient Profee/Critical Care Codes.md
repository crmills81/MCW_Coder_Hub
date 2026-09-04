---
tags:
  - coding/cpt
  - critical-care
  - inpatient
  - profee
  - compliance
title: Critical Care Codes (CPT 99291, 99292)
updated: 2026-09-03
category: Evaluation and Management
specialty: Inpatient ProFee / Critical Care
status: Active (2026 CMS & CPT Compliant)
---

# 🫀 Critical Care Coding Guide (CPT 99291, 99292)

**Last Updated:** September 2026  
**Regulatory Baseline:** 2026 CMS Physician Fee Schedule (PFS) & AMA CPT Guidelines  

---

## 📌 Executive Summary & Core Definitions

Critical care is the direct medical evaluation and management of a critically ill or critically injured patient. Unlike routine Evaluation and Management (E/M) services, critical care is **exclusively time-based** and is governed by strict clinical criteria and rigorous procedure time carve-out rules.

> [!IMPORTANT] Dual Clinical Criteria for Critical Care
> To report critical care services (**[[99291]]**, **[[99292]]**), the documentation must clearly satisfy **two distinct requirements**:
> 1. **Critical Illness / Injury (Patient Acuity):** An acute impairment of one or more vital organ systems such that there is a high probability of imminent or life-threatening deterioration in the patient’s condition (e.g., circulatory failure, acute respiratory failure, septic shock, acute renal failure requiring emergent dialysis, severe metabolic encephalopathy, active life-threatening GI bleeding).
> 2. **Critical Care Service (Physician Intervention):** High-complexity Medical Decision Making (MDM) to assess, manipulate, and support vital organ system function(s) to treat vital organ system failure and/or to prevent further life-threatening deterioration. Constant active physician/QHP management and direct attention are required.

> [!NOTE] Location Independence
> Critical care is **service-based**, not site-of-service based. It is commonly delivered in intensive care units (ICUs, CCUs, PICUs, SICUs), but it may be furnished anywhere in the hospital—including the Emergency Department (ED, POS 23), Step-down/Progressive care units, Inpatient hospital floors (POS 21), Observation units (POS 22), or the Post-Anesthesia Care Unit (PACU).

---

## ⏱️ Primary Codes & 2026 RVU Data

| CPT Code | Description | Cumulative Time on DOS | 2026 wRVU | Global Period | Assistant Fee |
| :---: | :--- | :---: | :---: | :---: | :---: |
| **[[99291]]** | Critical care, evaluation and management of the critically ill or critically injured patient; **first 30–74 minutes** | **30 – 74 min** | **~4.50** | **XXX** | No |
| **[[99292]]** | Critical care, evaluation and management; **each additional 30 minutes** (List separately in addition to code for primary service) | **Each addl 30 min** (beyond 74 min) | **~2.25** | **ZZZ** | No |

---

## 📊 Critical Care Time Threshold Calculation Table

Critical care time is calculated as the **cumulative total time** spent by a practitioner (or practitioners within the same specialty and group) on a single calendar date.

```
Total Cumulative Time (Single Calendar Day)
├── < 30 Minutes ─────────► DO NOT bill critical care! Bill appropriate E/M code
├── 30 – 74 Minutes ──────► Bill 99291 × 1
├── 75 – 104 Minutes ─────► Bill 99291 × 1 + 99292 × 1
├── 105 – 134 Minutes ────► Bill 99291 × 1 + 99292 × 2
├── 135 – 164 Minutes ────► Bill 99291 × 1 + 99292 × 3
├── 165 – 194 Minutes ────► Bill 99291 × 1 + 99292 × 4
└── > 194 Minutes ────────► Add 1 unit of 99292 for each additional 30-min block (≥15 min midpoint)
```

| Total Cumulative Time Spent | Primary Code | Add-on Code Units | Claim Reporting |
| :--- | :---: | :---: | :--- |
| **< 30 minutes** | — | — | Bill standard E/M (**[[99222]]–[[99223]], [[99232]]–[[99233]], or [[99284]]–[[99285]]**) |
| **30 – 74 minutes** | **[[99291]]** | None | **[[99291]]** |
| **75 – 104 minutes** | **[[99291]]** | **[[99292]]** × 1 | **[[99291]]**, **[[99292]]** |
| **105 – 134 minutes** | **[[99291]]** | **[[99292]]** × 2 | **[[99291]]**, **[[99292]]** × 2 |
| **135 – 164 minutes** | **[[99291]]** | **[[99292]]** × 3 | **[[99291]]**, **[[99292]]** × 3 |
| **165 – 194 minutes** | **[[99291]]** | **[[99292]]** × 4 | **[[99291]]**, **[[99292]]** × 4 |
| **195 – 224 minutes** | **[[99291]]** | **[[99292]]** × 5 | **[[99291]]**, **[[99292]]** × 5 |

> [!WARNING] The 15-Minute Midpoint Rule for 99292
> To bill the first unit of **[[99292]]**, the provider must spend at least **75 minutes** (which is 1 minute past the 74-minute cap of **[[99291]]**, meeting the 15-minute midpoint of the first 30-minute increment: 60 + 15 = 75 min). Each subsequent unit of **[[99292]]** requires passing the 15-minute midpoint of that subsequent 30-minute block (e.g., 75 + 30 = 105 min).

---

## ⏱️ Qualifying vs. Non-Qualifying Activities

Critical care time includes time spent directly delivering care to the patient at the bedside, as well as time spent on the unit/floor directly dedicated to that specific patient's management.

### ✅ Billable / Countable Time
- **Direct bedside examination and evaluation** of the unstable patient.
- **Reviewing extensive diagnostic data:** Chart review, laboratory panels, blood gas analysis, electrocardiograms, imaging studies, hemodynamic monitors, and telemetry trends.
- **Active unit-based discussions:** Conferring with bedside intensive care nurses, respiratory therapists, clinical pharmacists, and medical/surgical consultants regarding specific treatment modifications and titration orders.
- **Medical record documentation:** Writing critical care orders, documenting progress notes, charting assessments, and outlining immediate intervention plans while on the unit.
- **Family discussions (STRICT CRITERIA):** Time spent conferring with family members or designated surrogate healthcare decision-makers **ONLY IF**:
  1. The patient is unable or incompetent to participate in decision-making (e.g., intubated, comatose, severely encephalopathic, sedated).
  2. The discussion is strictly necessary for **obtaining medical history or determining treatment decisions/goals of care** (e.g., surrogate consent, code status, advanced directives, withdrawal of life support).
  3. The discussion takes place on the unit or at the bedside.

### ❌ Non-Billable / Excluded Time
- **Separately billable procedural services:** Time spent performing procedures (e.g., intubation, central line placement) **must be carved out** and cannot be counted toward critical care time.
- **Routine family updates:** Providing emotional reassurance, bereavement counseling, general condition summaries, or answering questions when no management decisions are being made.
- **Teaching and educational time:** Time spent teaching residents, fellows, or medical students (unless the teaching physician is personally performing/involved in direct patient management).
- **Waiting / Standby time:** Time spent waiting for laboratory results, waiting for an operating room to open, or resting between clinical episodes.
- **Administrative tasks:** General unit management, billing paperwork, or attending multi-patient interdisciplinary administrative meetings.
- **Overlapping / Simultaneous patient care:** Clinicians cannot count time spent simultaneously caring for another patient.

---

## 📦 Bundled Services vs. Separately Billable Procedures

CPT guidelines explicitly bundle specific routine intensive care diagnostic and therapeutic services into **[[99291]]** and **[[99292]]**. These services **cannot** be reported separately on the same date by the same provider/group. However, the time spent performing them **is counted** toward total critical care time.

### 1. Services Bundled into Critical Care (Do NOT Bill Separately)

| Organ System / Category | Bundled CPT Codes | Clinical Description |
| :--- | :---: | :--- |
| **Vascular Access** | **[[36000]]**, **[[36410]]**, **[[36415]]**, **[[36591]], [[36600]]** | Routine peripheral IV insertion, routine venipunctures, capillary blood collection, collection of blood from central line, routine arterial puncture. |
| **Pulmonary / Respiratory** | **[[71045]], [[71046]], [[94002]]–[[94004]], [[94660]], [[94662]]**, **[[94760]]–[[94762]]** | Routine chest X-rays (single/2 views), ventilator management (initial/subsequent/home), CPAP/BiPAP initiation and management, continuous pulse oximetry. |
| **Gastrointestinal** | **[[43752]]**, **[[43753]]** | Nasogastric (NG) / orogastric tube placement, gastric intubation and aspiration/lavage. |
| **Cardiac / Hemodynamic** | **[[92953]], [[93561]], [[93562]]** | Temporary transcutaneous pacing, indicator dilution cardiac output measurements (subsequent/initial). |
| **Diagnostic Interpretation** | **82800–82810, 99090** | Interpretation of arterial blood gases (ABGs), computer-stored data analysis. |

---

### 2. Separately Billable Procedures (The Procedure Time Carve-Out Rule)

Invasive bedside surgical and procedural interventions are **not bundled** into critical care. They may be billed separately using their distinct CPT codes. 

> [!CAUTION] Mandatory Procedure Time Carve-Out
> When a physician performs a separately billable procedure while managing a critically ill patient, the **time dedicated to performing that procedure CANNOT be counted toward critical care time**.
> 
> The provider must explicitly document:
> 1. Total critical care time.
> 2. Total procedure time.
> 3. Confirmation that procedure time was **subtracted/carved out** from the reported critical care time.

| Bedside Procedure | CPT Code | Modifier | Carve-Out Requirement |
| :--- | :---: | :---: | :--- |
| **Endotracheal Intubation** | **[[31500]]** | None / **[[-59]]** if edit | Deduct intubation time (e.g., 15 min) from CC time |
| **Central Venous Catheter Insertion** (Non-tunneled) | **[[36556]]** (age 5+) / **[[36555]]** (<5) | None | Deduct line placement time (e.g., 20–30 min) |
| **Arterial Line Placement** (Percutaneous) | **[[36620]]** | None | Deduct A-line insertion time (e.g., 15 min) |
| **Tube Thoracostomy (Chest Tube)** | **[[32551]]** | None | Deduct chest tube insertion time (e.g., 25 min) |
| **Cardiopulmonary Resuscitation (CPR)** | **[[92950]]** | None | Deduct active CPR resuscitation time |
| **Temporary Transvenous Pacemaker** | **[[33210]]** | None | Deduct catheter insertion and pacing setup time |
| **Ultrasound Guidance for Vascular Access** | **[[76937]]** | None | Deduct imaging and vessel verification time |
| **Diagnostic / Therapeutic Lumbar Puncture** | **[[62270]]** | None | Deduct LP positioning, puncture, and fluid time |
| **Thoracentesis / Paracentesis** | **[[32554]]–[[32555]]** / **[[49082]]–[[49083]]** | None | Deduct aspiration and drainage time |

#### 📝 Carve-Out Example
- **Scenario:** An intensivist spends **85 minutes** total in the ICU managing a patient in refractory septic shock with respiratory collapse.
- **Procedures Performed:**
  - Intubation (**[[31500]]**) = 15 minutes.
  - Central Line Placement (**[[36556]]**) = 20 minutes.
- **Calculation:**
  $$\text{Net Critical Care Time} = 85\text{ min} - (15\text{ min} + 20\text{ min}) = 50\text{ minutes}$$
- **Coding:**
  - **[[99291]]** (covers the 50 minutes of net critical care).
  - **[[31500]]** (Intubation).
  - **[[36556]]** (Central venous catheter).
  - *(Do NOT bill 99292, because net CC time is 50 min, which is < 75 min).*

---

## 👥 Split/Shared Critical Care Visits (CMS 2024–2026 Rules)

Under Medicare guidelines (CMS IOM Pub. 100-04, Ch. 12, §30.6.18), split (or shared) critical care visits occur when a **physician** and a **Non-Physician Practitioner (NPP / NP / PA)** from the **same group practice** jointly furnish critical care to a patient on the same calendar date in a recognized **facility setting** (POS 21 Inpatient, POS 22 Outpatient/Observation, POS 23 ED).

```
Split/Shared Critical Care Time Calculation
├── Physician Time:  35 mins
├── NP/PA Time:      45 mins
├── Combined Total:  80 mins (Supports 99291 + 99292)
└── Billing Provider Determination:
    ├── Physician (35/80 = 43.8%) ──► < 50% (Cannot bill under MD)
    └── NP/PA (45/80 = 56.2%) ──────► > 50% ──► NP/PA Bills 99291-FS + 99292-FS (Paid at 85%)
```

### Key Regulatory Rules for Split/Shared Critical Care
1. **Time-Only Substantive Portion:** Unlike standard E/M visits where the substantive portion can be determined by MDM or time, **critical care substantive portion is strictly determined by total cumulative time**.
2. **More Than Half (> 50% Rule):** The practitioner who personally performs **more than 50%** of the total combined critical care time is the billing practitioner.
3. **Modifier [[-FS]]:** Must be appended to both **[[99291]]** and **[[99292]]** to identify the claim as a split/shared visit.
4. **No Overlapping Time:** Time spent together at the bedside by both the physician and the NPP can only be counted **once** toward total time.
5. **Reimbursement:**
   - If the **Physician** performs > 50% of the time $\rightarrow$ Billed under MD NPI with **[[-FS]]** (Reimbursed at **100%** of PFS).
   - If the **NPP** performs > 50% of the time $\rightarrow$ Billed under NPP NPI with **[[-FS]]** (Reimbursed at **85%** of PFS).

> [!TIP] Split/Shared Documentation Requirement
> Both **practitioners** must document their individual involvement, individual non-overlapping times spent, and specific clinical activities. The billing practitioner must sign and date the medical record.

---

## 🎓 Teaching Physician Guidelines (Modifier [[-GC]])

When a teaching physician supervises a resident or fellow providing critical care, specific CMS guidelines apply:

1. **100% Physical Presence Rule:** The teaching physician must be **personally present for the entire duration** of the time billed as critical care (e.g., if 60 minutes of critical care is billed, the teaching physician must have been present for the full 60 minutes).
2. **Exclusion of Resident-Alone Time:** Time spent by a resident alone reviewing records, examining the patient, or documenting cannot be counted toward the teaching physician's critical care time.
3. **Teaching Attestation Documentation:** The teaching physician must personally document:
   - Total time the teaching physician personally spent providing critical care.
   - Confirmation of physical presence during that time.
   - Clinical assessment of critical illness and organ failure.
   - Specific management interventions and high-complexity decision-making provided.
1. **No Primary Care Exception:** The Primary Care Exception (PCE / **[[-GE]]**) **never applies** to critical care. Modifier **[[-GC]]** is appended to indicate teaching physician involvement.

---

## 🔄 Same-Day Services, Multiple Specialties, & Global Surgery

### 1. Same-Day Routine E/M + Critical Care (Modifier [[-25]])
- **Scenario:** A hospitalist performs a morning subsequent hospital visit (**[[99233]]**) on a stable inpatient. Later that afternoon, the patient experiences sudden acute aspiration, septic shock, and respiratory failure, requiring 60 minutes of emergency critical care (**[[99291]]**).
- **Billing Rule:** Both services are billable.
  - Bill the subsequent hospital care code with Modifier **[[-25]]** (e.g., **[[99233]]** **[[-25]]**).
  - Bill the critical care code (**[[99291]]**).
  - **Requirement:** Documentation must prove that the earlier E/M visit was completed prior to the onset of critical deterioration and constituted a distinct, separate clinical encounter.

---

### 2. Concurrent Critical Care by Multiple Specialties
- **Same Specialty / Same Group:** Physicians of the same specialty in the same group cannot bill separate critical care codes on the same date. Their time **must be aggregated** into a single claim (e.g., Partner A 30 min + Partner B 30 min = 60 min $\rightarrow$ Bill `99291` × 1).
- **Different Specialties:** Multiple physicians of **different specialties** can each bill critical care on the same date provided that:
  1. Each physician is actively managing a **distinct, non-overlapping organ system failure** within their scope of expertise.
  2. The care is fully non-duplicative and medically necessary.
  - *Example:* A **Critical Care Intensivist** manages multi-organ septic shock and pressors (**[[99291]]**), a **Nephrologist** manages acute oliguric renal failure requiring initiation of CRRT (**[[99291]]**), and a **Trauma Surgeon** manages active intra-abdominal hemorrhage and coagulopathy (**[[99291]]**).

---

### 3. Critical Care During Global Surgical Periods (Modifier [[-FT]] vs. [[-24]])

| Modifier | Payer Scope | Billing Circumstance |
| :---: | :---: | :--- |
| **[[-FT]]** | **Medicare Part B** | Reported on critical care codes (**[[99291]]**, **[[99292]]**) when critical care is provided by the **operating surgeon** (or same group/specialty) during a global surgical period (10-day or 90-day), or on the same day as surgery, **unrelated to the surgical procedure** itself (e.g., patient undergoes elective hip replacement and postoperatively develops acute myocardial infarction with cardiogenic shock). |
| **[[-24]]** | **Commercial / Non-Medicare** | Used on E/M codes to indicate unrelated E/M service during a postoperative global period. *(Note: For Medicare critical care claims, CMS mandates modifier [[-FT]] instead of [[-24]]).* |
| **[[-25]]** | **All Payers** | Used when pre-operative critical care is provided on the **same day as an emergency surgical procedure** to stabilize the patient prior to entering the OR. |

---

## 📋 Auditor-Proof Critical Care Documentation Checklist

When defending critical care claims against Medicare Advantage, MAC, and commercial audit scrutiny, ensure the chart includes these seven vital elements:

- [ ] **1. Vital Organ System Failure Identified:** Explicit documentation of acute life-threatening organ system dysfunction (e.g., acute respiratory distress syndrome, hemodynamic instability requiring continuous norepinephrine infusion, acute renal shutdown, severe acidosis with pH < 7.15).
- [ ] **2. High-Complexity Interventions:** Documentation of active pharmacologic titration, ventilator adjustments, fluid resuscitation, and continuous hemodynamic monitoring.
- [ ] **3. Exact Cumulative Time Documented:** Total critical care time stated explicitly in **minutes** (e.g., *"Total critical care time spent: 65 minutes"*). Avoid ambiguous statements like *"Spent over an hour on the unit."*
- [ ] **4. Explicit Carve-Out Statement:** *"Total time excludes time spent performing separately billable procedures (intubation and central line placement)."*
- [ ] **5. Family Meeting Criteria Met (if time included):** Documentation clearly specifies patient lacked capacity, discussion focused strictly on surrogate treatment decisions / code status, and family members were identified.
- [ ] **6. Split/Shared Specifics (if applicable):** Separate entries by MD and NP detailing individual non-overlapping times and clinical activities, with modifier **[[-FS]]** appended by the majority-time clinician.
- [ ] **7. Teaching Physician Physical Presence (if applicable):** Attestation confirming 100% direct physical presence for the full duration of billed critical care time with modifier **[[-GC]]**.

---

## 🔗 Related Vault Resources

- [[00 Inpatient ProFee Coding MOC]] — Inpatient ProFee Master Map of Content
- [[01 Inpatient ProFee Overview]] — Foundational ProFee Guidelines
- [[Inpatient E&M Codes]] — Hospital Inpatient & Observation E/M Services
- [[FS -- Split-Shared Visits]] — Comprehensive Split/Shared Billing Rules & Modifier -FS
- [[GC -- Teaching Physician Rules]] — Teaching Physician Regulations & Supervision Levels
- [[Modifier -25 vs -57]] — Modifier 25 & 57 Decision Hierarchy
- [[Inpatient Modifiers]] — Master Modifier Reference for Inpatient Professional Claims
- [[Prolonged Services]] — Non-Critical Care Prolonged Services ([[99418]] vs. [[G0316]])
- [[CMS Medicare Guidelines for Inpatient]] — CMS Payment Policies and Regulations
- [[CPT Assistant References for Inpatient]] — CPT Assistant Precedents & Audit Defense
- **Primary Codes:** [[99291]], [[99292]]
- **Bedside Procedures:** [[31500]] (Intubation), [[36556]] (Central Line), [[36620]] (A-Line), [[32551]] (Chest Tube), [[92950]] (CPR)
- **Key Modifiers:** [[-25]], [[-FT]], [[-FS]], [[-GC]], [[-59]], [[-AI]]
