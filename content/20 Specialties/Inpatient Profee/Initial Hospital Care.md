---
tags:
  - coding/cpt
  - inpatient
  - profee
  - em
  - initial-hospital-care
  - admission
  - compliance
title: Hospital Inpatient and Observation Initial Care Services (CPT 99221-99223)
updated: 2026-09-03
category: Evaluation and Management
specialty: Inpatient ProFee / Hospital Medicine
status: Active (2026 CMS & CPT Compliant)
---

# 🏥 Hospital Inpatient and Observation Initial Care Services (CPT 99221–99223)

**Last Updated:** September 2026  
**Regulatory Baseline:** 2026 CMS Physician Fee Schedule (PFS), AMA CPT E/M Guidelines, & CPT Assistant Guidance  

---

## 📌 Executive Summary & Core Foundations

Initial hospital inpatient and observation care codes (**[[99221]]**, **[[99222]]**, **[[99223]]**) are used to report the first Evaluation and Management (E/M) service provided to a patient during an inpatient hospital stay or observation care episode by the admitting service or consulting physicians (under Medicare rules).

```
Initial Hospital / Observation Care Structure (CPT 99221–99223)
├── Setting: Inpatient Hospital (POS 21) & Observation Care (POS 22)
├── Code Selection: Based on EITHER MDM Level OR Total Cumulative Encounter Time
├── History & Exam: Medically Appropriate History and/or Physical Examination (Not Scored for Level)
├── Admitting / Attending Physician: Appends Modifier -AI (Medicare / Medicare Advantage)
└── Split/Shared (POS 21/22): Modifier -FS (Substantive Portion: >50% Time OR Substantive MDM)
```

> [!IMPORTANT] Consolidated Inpatient & Observation Guidelines (2023–2026)
> - **Observation Codes (99218–99220) are DELETED:** Separate observation admission codes no longer exist. Both **Inpatient Hospital Admissions (POS 21)** and **Observation Admissions (POS 22)** are reported using the unified code series **[[99221]]–[[99223]]**.
> - **Medically Appropriate History & Physical Exam:** History and physical examination elements are no longer scored to determine code level. The provider must document a *medically appropriate history and/or physical examination* as clinically indicated by the patient's condition.
> - **Independent Code Selection Basis:** Code level is selected based strictly on **EITHER**:
>   1. The level of **Medical Decision Making (MDM)** (Straightforward/Low, Moderate, High), **OR**
>   2. The **Total Cumulative Time** personally spent by the physician or Qualified Healthcare Professional (QHP / APP) on the calendar date of the encounter.
> - **Per-Day Reporting & Bundling:** Only **one** initial care code is reported per day per patient by the same physician or physicians of the same specialty in the same group practice. All same-day pre-admission evaluations (ED visits, clinic encounters) are bundled into the initial care code.

---

## ⏱️ Primary Codes & 2026 RVU Data

| CPT Code | Clinical Description | MDM Level Required | Minimum Total Time (CPT/PFS) | 2026 wRVU | Total Facility RVU | Global Period | Assistant Payable |
| :---: | :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| **[[99221]]** | Initial hospital inpatient or observation care; straightforward or low MDM | **Straightforward or Low** | **≥ 40 minutes** | **1.92** | **2.68** | **XXX** | No |
| **[[99222]]** | Initial hospital inpatient or observation care; moderate MDM | **Moderate** | **≥ 55 minutes** | **2.56** | **3.89** | **XXX** | No |
| **[[99223]]** | Initial hospital inpatient or observation care; high MDM | **High** | **≥ 75 minutes** | **3.50** | **5.32** | **XXX** | No |
| **+[[99418]]** | Prolonged inpatient/observation E/M add-on (Commercial / CPT); each 15 min | N/A (Time Only) | **+15 minutes** (≥ 90 min total) | **0.61** | **0.87** | **ZZZ** | No |
| **+[[G0316]]** | Prolonged inpatient/observation E/M add-on (CMS / Medicare); each 15 min | N/A (Time Only) | **+15 minutes** (≥ 105 min total) | **0.61** | **0.87** | **ZZZ** | No |

---

## ⚖️ Code Selection Methodology: MDM vs. Time

Providers have the flexibility to select the initial care code level based on either **Medical Decision Making (MDM)** or **Total Time** on the date of service.

```
Initial Hospital Encounter Evaluated
│
├── Method 1: Code Selection by MDM (Recommended for most acute hospital admissions)
│   ├── Satisfy at least 2 of 3 MDM Elements:
│   │   ├── 1. Number and Complexity of Problems Addressed
│   │   ├── 2. Amount and/or Complexity of Data Reviewed and Analyzed
│   │   └── 3. Risk of Complications and/or Morbidity or Mortality
│   │
│   ├── Straightforward / Low MDM ──► CPT 99221
│   ├── Moderate MDM              ──► CPT 99222
│   └── High MDM                  ──► CPT 99223
│
└── Method 2: Code Selection by Total Cumulative Time on Encounter Date
    ├── Total Time < 40 minutes    ──► Downcode to appropriate lower E/M or bill by MDM
    ├── Total Time 40–54 minutes   ──► CPT 99221
    ├── Total Time 55–74 minutes   ──► CPT 99222
    ├── Total Time 75–89 minutes   ──► CPT 99223
    └── Total Time ≥ 90 minutes    ──► CPT 99223 + Prolonged Services (+99418 / +G0316)
```

---

## 🧠 Medical Decision Making (MDM) Scoring Grid

To assign a code level via MDM, the documentation must satisfy the threshold criteria for **at least 2 out of the 3 MDM elements**:

```
┌─────────────────────────────────────────────────────────────────────────────────────────────┐
│                             2 OF 3 ELEMENTS MUST BE MET OR EXCEEDED                     │
├───────────────────────────────┬───────────────────────────────┬─────────────────────────────┤
│      Problems Addressed      │         Data Analyzed        │    Risk Level / Morbidity  │
├───────────────────────────────┼───────────────────────────────┼─────────────────────────────┤
│ Straightforward / Low        │ Minimal / Low              │ Minimal / Low Risk        │
│ • 1 stable chronic illness    │ • Cat 1: Review external tests│ • OTC medications        │
│ • 1 acute uncomplicated       │   or notes (2 items)          │ • Minor physical therapy │
│   illness or injury           │ • Assessment of indep. hist.  │ • Low risk of morbidity  │
│ ───────────────────────────── ┼───────────────────────────────┼──────────────────────────── │
│ Moderate Complexity (99222)   │ Moderate Complexity (99222)   │ Moderate Risk (99222)     │
│ • 1+ chronic w/ exacerbation  │ Must meet 1 of 3 Categories:  │ • Prescription drug mgmt  │
│ • 2+ stable chronic illnesses │ • Cat 1: Data/historian (3 pts│ • Decision for minor surgery│
│ • 1 undiagnosed new problem   │ • Cat 2: Indep. interpretation│   w/ patient risk factors   │
│   with uncertain prognosis    │ • Cat 3: Discussion w/ ext.   │ • Decision for elective     │
│ • 1 acute systemic illness    │   provider / specialist       │   major surgery (no risks)  │
│ • 1 acute complicated injury  │                               │ • Diagnosis/Rx limited by   │
│                               │                               │   Social Determinants (SDOH)│
│ ───────────────────────────── ┼───────────────────────────────┼──────────────────────────── │
│ High Complexity (99223)       │ Extensive Complexity (99223)  │ High Risk (99223)           │
│ • 1+ chronic with severe      │ Must meet 2 of 3 Categories:  │ • Drug therapy requiring    │
│   exacerbation / progression  │ • Cat 1: Data/historian (3 pts│   intensive tox monitoring  │
│ • 1 acute / chronic illness   │ • Cat 2: Indep. interpretation│ • Decision for emergency    │
│   or injury posing a THREAT   │ • Cat 3: Discussion w/ ext.   │   major surgery             │
│   TO LIFE OR BODILY FUNCTION  │   provider / specialist       │ • Decision for elective     │
│   (e.g., Sepsis, STEMI,       │                               │   major surgery w/ risks  │
│    Respiratory Failure, DKA,  │                               │ • Decision for hospital     │
│    Acute CVA, Shock, AKI)     │                               │   de-escalation / DNR /     │
│                               │                               │   palliative transition     │
└───────────────────────────────┴───────────────────────────────┴─────────────────────────────┘
```

### 1. Number and Complexity of Problems Addressed
- **Straightforward / Low ([[99221]]):**
  - 1 stable chronic condition (**e.g., well-controlled [[hypertension]] admitted for elective non-surgical workup**).
  - 1 acute, uncomplicated illness or injury (**e.g., mild acute [[gastroenteritis]] with mild [[dehydration]] responsive to oral/IV hydration; uncomplicated [[cystitis]]**).
- **Moderate ([[99222]]):**
  - 1 or more chronic illnesses with mild-to-moderate exacerbation, progression, or side effects of treatment (**e.g., stable acute on chronic systolic heart failure [[I50.23]]; COPD exacerbation [[J44.1]] without severe respiratory distress**).
  - 2 or more stable chronic illnesses (**e.g., long-standing type 2 diabetes [[E11.9]] and hypertension [[I10]] evaluated during admission**).
  - 1 undiagnosed new problem with uncertain prognosis (**e.g., new uncharacterized lung nodule, unexplained syncopal episode [[R55]], breast mass workup**).
  - 1 acute illness with systemic symptoms (e.g., **[[pyelonephritis]]**, **[[pneumonia]]** **[[J18.9]]**, **[[cellulitis]]** **[[L03.116]]** with fever/**[[leukocytosis]]**).
  - 1 acute complicated injury (**e.g., multi-ligament knee injury, complex fracture evaluation**).
- **High ([[99223]]):**
  - 1 or more chronic illnesses with severe exacerbation, progression, or side effects of treatment (**e.g., brittle COPD decompensation requiring immediate non-invasive positive pressure ventilation; end-stage renal disease [[N18.6]] with acute hyperkalemic emergency**).
  - 1 acute or chronic illness or injury that poses an **immediate threat to life or bodily function** (e.g., **[[sepsis]]** **[[A41.9]]** / **septic shock** **[[R65.21]]**, **acute ST-elevation myocardial** **[[infarction]]** **[[I21.09]]**, **acute ischemic** **[[stroke]]** **[[I63.9]]** with **neurologic deficits**, **acute hypoxic respiratory failure** **[[J96.01]]**, acute abdomen with **[[peritonitis]]**, diabetic **[[ketoacidosis]]** **[[E11.10]]**, massive upper GI bleeding **[[K92.2]]** with hemodynamic instability, **acute kidney injury Stage 3** **[[N17.9]]**).

### 2. Amount and/or Complexity of Data Reviewed and Analyzed
- **Category 1 (Tests, Documents, or Independent Historian):**
  - Review of prior external notes from each unique source (**e.g., outside hospital transfer summary, primary care clinic note, ED physician chart**).
  - Review of each unique diagnostic test result (**e.g., CBC, CMP, urinalysis, blood cultures, 12-lead ECG, chest radiograph**).
  - Ordering of unique diagnostic tests.
  - Assessment requiring an independent historian (**e.g., history obtained from parent, spouse, caregiver, emergency medical services, or nursing facility due to patient [[dementia]], altered mental status, delirium, or severe [[dyspnea]]**).
- **Category 2 (Independent Interpretation of Tests):**
  - Independent visual interpretation of a diagnostic test performed by another provider/specialist for which a separate professional interpretation is not being billed (e.g., attending physician personally reviewing and interpreting the 12-lead ECG tracings or CT chest/head image slices, not merely reading the radiologist's finalized text report).
- **Category 3 (Discussion of Management or Test Interpretation):**
  - Direct verbal or interactive electronic discussion of management or diagnostic test interpretation with an external physician or other qualified healthcare professional (e.g., discussing urgent **[[catheterization]]** with interventional cardiology, consulting infectious disease regarding **antimicrobial stewardship**, or **coordinating surgical clearance with pulmonology**).

### 3. Risk of Complications and/or Morbidity or Mortality
- **Low Risk ([[99221]]):** Minimal risk from treatment; OTC medications; minor physical or occupational therapy orders.
- **Moderate Risk ([[99222]]):**
  - **Prescription Drug Management:** Initiating, titrating, discontinuing, or renewing therapeutic prescription pharmaceuticals (**e.g., starting IV antibiotics for [[pneumonia]], adjusting oral antihypertensives, titrating scheduled basal/bolus insulin**).
  - **Decision Regarding Minor Surgery with Identified Risk Factors:** Deciding to proceed with minor surgical intervention on a medically complex patient.
  - **Decision Regarding Elective Major Surgery without Identified Risk Factors.**
  - **Diagnosis or Treatment Significantly Limited by Social Determinants of Health (SDOH):** Clinical management impacted by homelessness, extreme food insecurity, illiteracy, lack of health insurance, or transportation barriers (**e.g., admitting a patient with [[cellulitis]] who cannot afford outpatient oral antibiotics or lacks clean shelter**).
- **High Risk ([[99223]]):**
  - **Drug Therapy Requiring Intensive Monitoring for Toxicity:** Prescribing and monitoring medications with a narrow therapeutic index where toxicity poses a severe risk of morbidity/mortality and requires frequent laboratory or clinical monitoring (**e.g., IV vasopressors/inotropes, continuous IV heparin infusions, IV insulin infusions for DKA, IV antiarrhythmics, aminoglycosides/vancomycin trough dosing, immunosuppressive chemotherapeutic regimens**).
  - **Decision Regarding Emergency Major Surgery:** Determining the immediate medical necessity for urgent or emergent surgery (**e.g., emergent appendectomy, exploratory laparotomy for bowel perforation, urgent cardiac [[catheterization]]**).
  - **Decision Regarding Elective Major Surgery with Identified Patient or Procedure Risk Factors:** Surgical planning in high-risk patients (e.g., severe cardiomyopathy, advanced CKD, morbid obesity, coagulopathy).
  - **Decision Regarding Hospitalization for De-escalation or Palliative Goals of Care:** Making the clinical decision to transition to comfort measures only, hospice care, or **do-not-resuscitate (DNR)** status due to terminal illness or grave prognosis.

---

## ⏱️ Time-Based Selection & Countable Activities

When coding based on time, the provider must meet or exceed the explicit minimum threshold on the date of the encounter. Time includes **both face-to-face bedside time and non-face-to-face unit/floor time** personally spent by the physician and/or APP.

```
Total Cumulative Admission Time (DOS)
├── Pre-Bedside Record Review (ED records, transfer packets, prior charts, labs/imaging)
├── Bedside Examination, Assessment, & Diagnostic History Taking
├── Counseling Patient, Family, & Surrogate Decision-Makers
├── Ordering Diagnostic Tests, Inpatient Medications, & Consultations
├── Comprehensive Admission Medication Reconciliation
├── Direct Communication with Emergency Physicians, Specialists, & Nursing Staff
└── Documenting the Admission History & Physical (H&P) Examination & Care Plan
```

### 📋 Countable Activities (DOS Only)
- **Reviewing external medical records, transfer documents, ED notes, outpatient charts, laboratory trends, and imaging studies** prior to or during the admission evaluation.
- Obtaining the **clinical history and performing the medically appropriate physical examination** at the patient's bedside.
- Counseling and educating the patient, family, power of attorney, or designated caregivers regarding the a**dmission diagnosis, hospital course, diagnostic plan, and treatment options**.
- **Ordering medications, laboratory studies, radiologic exams, physical/occupational therapy, dietary restrictions, and telemetry monitoring.**
- Performing formal medication reconciliation (**discontinuing home meds, adding inpatient therapies, adjusting dosages**).
- Communicating directly with the **emergency department provider**, **outpatient primary care physician**, and **specialty consultants**.
- Independently interpreting diagnostic tracings or imaging (**when not separately billed**).
- Documenting the formal **Admission History and Physical (H&P) note**, problem lists, clinical assessments, and initial orders.

### 🚫 Non-Countable Activities
- **Work Performed on Prior Calendar Days:** Time spent reviewing records on the calendar day prior to the physical admission encounter **CANNOT** be counted.
- **Clinical Staff Time:** Time spent by triage nurses, ED nurses, floor nurses, medical assistants, case managers, or pharmacists cannot be pooled or billed under the **physician/APP**.
- **Separately Billed Procedures:** Time spent performing invasive bedside diagnostic or therapeutic procedures (**e.g., central line insertion [[36556]], arterial line [[36620]], intubation [[31500]], lumbar puncture `62270`**) must be carved out and billed under their specific CPT codes.
- **Critical Care Time:** Time dedicated to critical care services (**[[99291]]**, **[[99292]]**) cannot be double-counted toward initial hospital care.
- **Travel and Waiting Time:** Walking between units, traveling to the hospital, or waiting for lab results or family arrivals.
- **Simultaneous Charting / Multi-Tasking:** Overlapping time spent managing multiple patients at the same time.

---

## 📈 Prolonged Services: CPT 99418 vs. CMS G0316

When **total physician/APP time** on the date of admission substantially exceeds the primary code threshold, prolonged service add-on codes may be reported. However, **commercial payers following AMA CPT rules and Medicare following CMS rules utilize different threshold calculations**:

| Payor Category | Base Code Required | Starting Prolonged Threshold | Incremental Units | HCPCS / CPT Code |
| :--- | :---: | :---: | :---: | :---: |
| **Commercial / Private Payers (AMA CPT Rules)** | **[[99223]]** (75 min) | **90 minutes** (15 min beyond 75 min base) | Each additional 15 min | **+[[99418]]** |
| **Medicare Fee-for-Service & Medicare Advantage (CMS Rules)** | **[[99223]]** (75 min) | **105 minutes** (15 min beyond 90 min threshold) | Each additional 15 min | **+[[G0316]]** |

### 🧮 Prolonged Time Conversion Schedule

| Total Encounter Time on Admission Date | Commercial / CPT Coding | CMS / Medicare Coding |
| :--- | :--- | :--- |
| **75 – 89 minutes** | **[[99223]]** | **[[99223]]** |
| **90 – 104 minutes** | **[[99223]] + [[99418]] × 1** | **[[99223]]** (No prolonged service) |
| **105 – 119 minutes** | **[[99223]] + [[99418]] × 2** | **[[99223]] + [[G0316]] × 1** |
| **120 – 134 minutes** | **[[99223]] + [[99418]] × 3** | **[[99223]] + [[G0316]] × 2** |
| **135 – 149 minutes** | **[[99223]] + [[99418]] × 4** | **[[99223]] + [[G0316]] × 3** |

---

## 🩺 Medicare Attending Rules & Modifier -AI

Under Medicare guidelines (CMS IOM Pub. 100-04, Ch. 12, §30.6.9.1), special rules govern how initial hospital care is reported by the admitting physician versus specialty consultants.

```
Initial Hospital Patient Seen by Multiple Providers on Admission Date
│
├── Principal Admitting Physician of Record (Hospitalist / Primary Attending)
│   ├── Writes Admission Orders & Directs Primary Inpatient Care Plan
│   └── Submits CPT 99221–99223 WITH Modifier -AI (e.g., 99223-AI)
│
└── Specialty Consultants Evaluating Patient on Date of Admission (e.g., Cardiology, Surgery)
    ├── Medicare / Medicare Advantage (Inpatient Consults 99252–99255 NOT Recognized):
    │   └── Submit CPT 99221–99223 WITHOUT Modifier -AI (e.g., 99223)
    └── Commercial / Private Payers (Recognizing Inpatient Consults):
        └── Submit Inpatient Consultation Codes 99252–99255 (e.g., 99254)
```

### Key Regulatory Directives for Modifier [[-AI]]
1. **Admitting Physician Identifier:** Modifier **[[-AI]]** (*Principal Physician of Record*) must be appended to the initial hospital care code (**[[99221]]–[[99223]]**) by the physician who oversees and coordinates the patient's overall admission care.
2. **Consultants Billing Initial Care on Medicare Claims:** Because CMS does not reimburse Inpatient Consultation codes (**[[99252]]–[[99255]]**), consulting physicians bill initial hospital visits under **[[99221]]–[[99223]]** based on their own MDM or time, **WITHOUT** appending modifier **[[-AI]]**.
3. **Claim Scrubber & Denial Prevention:** If the principal attending physician fails to append **[[-AI]]**, claims submitted by secondary consulting physicians billing **[[99221]]–[[99223]]** on the same date of service may be rejected with denial remark code *M86* (*Service denied because payment already made to another provider*).
4. **Different Specialties Required:** When multiple physicians bill initial hospital care for the same patient on the same date, each physician must belong to a **different medical specialty** and manage distinct clinical conditions.

---

## 🔄 Same-Day Encounter Rules & Bundling Conflicts

| Clinical Presentation Scenario | Proper Billing & Coding Action | Regulatory Rationale & Bundling Edits |
| :--- | :--- | :--- |
| **Emergency Department (ED) Visit followed by Admission on Same Date** (Same Provider / Group Specialty) | Report **[[99221]]–[[99223]]** only.<br>Do **NOT** bill ED codes (**[[99281]]–[[99285]]**). | CMS & CPT bundling rules mandate that all E/M services provided by the same physician/group on the date of admission are rolled into the Initial Hospital Care code. ED time/MDM can be combined with admission work. |
| **Office / Outpatient Clinic Visit followed by Admission on Same Date** (Same Provider / Group Specialty) | Report **[[99221]]–[[99223]]** only.<br>Do **NOT** bill Office codes (**[[99202]]–[[99215]]**). | The office visit is considered part of the initial admission evaluation. Office time and MDM are aggregated into the initial hospital care code selection. |
| **Observation Placement converted to Inpatient on Same Date** | Report **[[99221]]–[[99223]]** once for the entire calendar date. | A patient cannot have both observation and inpatient initial care codes billed on the same calendar date. Aggregate all work into a single initial care code. |
| **Admitted & Discharged on Same Calendar Date ($\ge 8$ Hours Stay)** | Report Same-Day Admission/Discharge codes **[[99234]]–[[99236]]**.<br>Do **NOT** bill 99221–99223 or 99238–99239. | Requires $\ge 8$ hours of facility care and 2 documented encounters (initial admission evaluation + separate discharge encounter). |
| **Admitted & Discharged on Same Calendar Date ($< 8$ Hours Stay)** | Report Initial Hospital Care **[[99221]]–[[99223]]** only.<br>Do **NOT** bill discharge codes. | When the observation or inpatient stay is under 8 hours on a single calendar day, report only initial care; discharge services are non-billable. |
| **Initial Hospital Care + Critical Care on Same Date** (Same Provider / Group Specialty) | Report Initial Care (**[[99221]]/[[-25]]–[[99223]]/[[-25]]**) + Critical Care (**[[99291]]**). | Permissible only if the patient was admitted under routine hospital care and subsequently suffered acute life-threatening decompensation requiring critical care, or presented critically ill, stabilized, and was admitted. Critical care time must be completely carved out from admission time. |
| **Admission Decision for Urgent/Emergent Major Surgery** (Surgical Specialist) | Report Initial Care (**[[99221]]/[[-57]]–[[99223]]/[[-57]]**) + Major Surgical Procedure CPT. | Modifier **[[-57]]** (*Decision for Surgery*) unbundles the initial E/M visit from the 090-day global surgical package when the decision to perform major surgery was made during the admission encounter. |

---

## 👥 Split/Shared Initial Visits (CMS 2024–2026 Rules & Modifier [[-FS]])

Under CMS guidelines (CMS IOM Pub. 100-04, Ch. 12, §30.6.18), split (or shared) visits occur when a **physician** and a **Non-Physician Practitioner (NPP / NP / PA)** from the **same group practice** jointly perform an initial hospital or observation evaluation in a facility setting (**POS 21 Inpatient, POS 22 Observation**).

```
Split/Shared Initial Care Evaluation (CPT 99223)
├── Nurse Practitioner (NP): Bedside H&P, chart review, initial orders (45 mins)
├── Attending Physician (MD): Direct bedside exam, reviewed data, finalized plan (35 mins)
├── Combined Total Time: 80 mins ──► Meets threshold for CPT 99223 (≥ 75 min)
└── Substantive Portion Determination:
    ├── Option A (Time-Based): NP spent 45/80 min (56.25% > 50%) ──► NP Bills 99223-FS (85% PFS)
    └── Option B (MDM-Based): MD personally formulated & approved the High MDM plan ──► MD Bills 99223-FS (100% PFS)
```

### Key Regulatory Rules for Split/Shared Initial Care
1. **Definition of Substantive Portion (2024–2026 Final Rule):** The substantive portion can be established by **EITHER**:
   - **More than 50% of the total cumulative time** spent by the physician and NPP, **OR**
   - **The performance of the substantive part of Medical Decision Making (MDM):** The practitioner who personally makes or approves the management plan and has performed the elements of MDM required to achieve the code level billed.
2. **Modifier [[-FS]]:** Mandatory on all Medicare split/shared initial hospital claims.
3. **Reimbursement Impact:**
   - Billed under the **Physician's NPI** with **[[-FS]]** $\rightarrow$ Reimbursed at **100%** of the **Medicare Physician Fee Schedule**.
   - Billed under the **NPP's NPI** with **[[-FS]]** $\rightarrow$ Reimbursed at **85%** of the **Medicare Physician Fee Schedule**.
1. **Documentation Requirement:** Both providers must document their individual contributions, face-to-face involvement, and time logs (if time-based).

---

## 🎓 Teaching Physician Guidelines (Modifier -GC)

When a teaching physician supervises a resident or fellow during an initial hospital admission (42 CFR § 415.172):

1. **MDM-Based Coding in Teaching Settings:**
   - The teaching physician must personally perform (**or be physically present during**) the key components of the examination and medical decision making.
   - The teaching physician must document their personal presence, independent evaluation of the patient, review of the resident's findings, and agreement with/modification of the assessment and management plan.
2. **Time-Based Coding in Teaching Settings:**
   - **Only the time spent personally by the teaching physician** (**either alone or jointly with the resident**) can be counted toward the time threshold.
   - Resident-alone time (**e.g., resident spending 60 minutes gathering history and drafting the H&P without the attending**) **CANNOT** be attributed to the teaching physician's time calculation.
1. **Primary Care Exception Inapplicable:** The Primary Care Exception (**[[-GE]]**) never applies to inpatient admissions. Modifier **[[-GC]]** must be appended to all initial hospital care claims involving resident participation.

---

## 📊 Clinical Examples & Coding Scenarios

### Scenario 1: High-Complexity Admission (CPT 99223)
- **Patient:** 71-year-old female with a history of **COPD, Stage 4 CKD, and heart failure** presenting from the ED with **acute septic shock** secondary to severe pyelonephritis **[[N10]]** and acute hypoxic respiratory failure **[[J96.01]]**.
- **Clinical Management:** Admitted to step-down telemetry; initiated on IV broad-spectrum antibiotics, continuous IV norepinephrine **[[infusion]]** titrated to MAP > 65, and supplemental high-flow oxygen; serial lactate and blood gas monitoring; **[[nephrology]]** consult requested for acute-on-chronic renal failure.
- **MDM Analysis:**
  - *Problems:* Acute illness posing immediate threat to life (**Septic shock, acute hypoxic respiratory failure, AKI**) $\rightarrow$ **High**.
  - *Data:* Extensive review of ED workup, CT abdomen/pelvis images personally reviewed, independent interpretation of admission ECG, and direct telephone discussion with consulting nephrologist $\rightarrow$ **High (Cat 1, 2, & 3 satisfied)**.
  - *Risk:* Drug therapy requiring intensive monitoring for toxicity (IV vasopressor drip) $\rightarrow$ **High**.
- **Code Assignment:** **[[99223]]** (High MDM). Appending **[[-AI]]** if Medicare attending of record.

### Scenario 2: Moderate-Complexity Admission (CPT 99222)
- **Patient:** 54-year-old male admitted from urgent care with **acute bacterial community-acquired [[pneumonia]] [[J15.9]]**, fever of 102.4°F, productive cough, and pleuritic chest pain. History of well-controlled **hypertension [[I10]]** and **[[hyperlipidemia]] [[E78.5]]**.
- **Clinical Management:** Admitted to medical floor; chest X-ray shows right lower lobe consolidation; started on IV ceftriaxone and azithromycin; continuous pulse oximetry; regular diet; home antihypertensives continued.
- **MDM Analysis:**
  - *Problems:* 1 acute illness with systemic symptoms (Pneumonia with high fever and leukocytosis) $\rightarrow$ **Moderate**.
  - *Data:* Review of external urgent care notes, ordering and review of CBC, blood cultures, sputum Gram stain, and chest radiograph $\rightarrow$ **Moderate (Cat 1 satisfied)**.
  - *Risk:* Prescription drug management (Initiation of IV broad-spectrum antibiotics) $\rightarrow$ **Moderate**.
- **Code Assignment:** **[[99222]]** (Moderate MDM).

### Scenario 3: Low-Complexity Admission (CPT 99221)
- **Patient:** 22-year-old male admitted to observation status with acute viral gastroenteritis **[[A08.4]]**, persistent nausea/vomiting, and mild orthostatic dehydration. No significant past medical history.
- **Clinical Management:** Placed in observation unit; normal basic metabolic panel except for mild BUN elevation; administered IV antiemetics and 2 liters of normal saline; tolerated oral liquids by evening.
- **MDM Analysis:**
  - *Problems:* 1 acute uncomplicated illness/injury (**Viral [[gastroenteritis]] with mild [[dehydration]]**) $\rightarrow$ **Low**.
  - *Data:* Ordering and review of routine basic metabolic panel and urinalysis $\rightarrow$ **Low**.
  - *Risk:* IV fluid hydration without toxic monitoring or complex medication management $\rightarrow$ **Low**.
- **Code Assignment:** **[[99221]]** (Low MDM) or 40+ minutes of total cumulative time.

---

## 💎 CDI & HCC Risk Adjustment Strategies for Admission H&P

The **Admission History & Physical (H&P)** is the single most important clinical documentation opportunity during an inpatient hospitalization. It establishes the baseline clinical acuity, drives the initial **MS-DRG assignment**, and captures chronic disease risk adjustment factors under **CMS-HCC models**.

```
Admission H&P Documentation Architecture
├── 1. Principal Admission Diagnosis (Highest specificity: Type, Acuity, Manifestation)
├── 2. Manifestation Linkage (e.g., Sepsis due to E. coli UTI; AKI due to acute tubular necrosis)
├── 3. Secondary Comorbidities & CC/MCC Capture (e.g., Acute Respiratory Failure, Severe Malnutrition)
├── 4. Active Chronic HCC Conditions (e.g., CKD Stage 4, Hemiplegia, Morbid Obesity, Type 2 DM with CKD)
└── 5. Treatment Rationale & Severity Markers (Need for continuous telemetry, IV pressors, high-flow O2)
```

### High-Impact HCC & CC/MCC Documentation Targets
- **Heart Failure Specificity:** Avoid unspecified heart failure (**[[I50.9]]**). Document acuity and type: *Acute on chronic systolic heart failure* (**[[I50.23]]** - MCC / HCC 85) or *Acute diastolic heart failure* (**[[I50.31]]** - CC / HCC 85).
- **Renal Disease Acuity:** Document *Acute Kidney Injury* (**[[N17.9]]** - CC / HCC 135) alongside the specific baseline chronic kidney disease stage (e.g., *CKD Stage 4* **[[N18.4]]** - HCC 137; *ESRD on hemodialysis* **[[N18.6]]** - HCC 136).
- **Respiratory Compromise:** Clearly distinguish acute respiratory distress from *Acute Hypoxic Respiratory Failure* (**[[J96.01]]** - MCC / HCC 84) or *Acute Hypercapnic Respiratory Failure* (**[[J96.02]]** - MCC / HCC 84) detailing room-air oxygen saturation, pO2/pCO2 levels, and required high-flow O2 or BiPAP settings.
- **Diabetic Manifestations:** Avoid coding uncomplicated diabetes (**[[E11.9]]**). Link diabetes to its manifestations: *Type 2 diabetes with diabetic chronic kidney disease* (**[[E11.22]]** - HCC 18/19), *Type 2 diabetes with hyperosmolarity* (**[[E11.00]]** - MCC / HCC 17), or *Type 2 diabetes with diabetic peripheral angiopathy* (**[[E11.51]]** - HCC 18/108).
- **Sepsis & Severe Sepsis:** Explicitly document *Sepsis secondary to acute pyelonephritis* (**[[A41.9]]** - MCC / HCC 2) and specify any acute organ dysfunction (e.g., septic [[encephalopathy]] **[[G93.41]]**, septic shock **[[R65.21]]** - MCC).

---

## 📋 Auditor-Proof Admission Documentation Checklist

To defend claims against **MAC, CERT, RAC, and commercial payer audits**, ensure the admission medical record contains the following documentation pillars:

- [ ] **1. Exact Setting & Date of Service:** Explicit record of the calendar date the patient was evaluated in the hospital inpatient (POS 21) or observation (POS 22) unit.
- [ ] **2. Medical Necessity for Hospitalization:** Clear clinical justification explaining why the patient required acute inpatient admission or observation placement rather than outpatient management.
- [ ] **3. Medically Appropriate H&P:** Comprehensive history of present illness, pertinent review of systems, past medical/surgical history, and relevant multi-system physical examination findings.
- [ ] **4. Explicit MDM Documentation (if MDM-based):**
  - Problems identified with acuity, chronicity, and systemic impact.
  - Itemized list of prior notes, laboratory tests, and imaging studies reviewed.
  - Explicit documentation of independent test interpretations (e.g., *"I personally reviewed the CT slices..."*).
  - Explicit records of provider-to-provider consultations and discussions.
  - Risk factors associated with diagnostic workups, surgical decisions, or high-risk drug management.
- [ ] **5. Explicit Time Log (if Time-based):** Exact statement of cumulative minutes spent on qualifying admission activities on the calendar date of the encounter (e.g., *"Total cumulative physician time spent on admission evaluation, record review, and orders on 09/03/2026: 82 minutes"*).
- [ ] **6. Modifier [[-AI]] for Admitting Attending:** Verified that the principal admitting physician appended modifier **[[-AI]]** on Medicare fee-for-service claims.
- [ ] **7. Split/Shared Specifics (if applicable):** Separate documentation by MD and APP indicating their respective roles, combined total time or substantive MDM attribution, and modifier **[[-FS]]**.
- [ ] **8. Teaching Physician Attestation (if applicable):** Attestation detailing the teaching physician's personal presence, independent examination, and management plan verification with modifier **[[-GC]]**.

---

## 🔗 Related Vault Resources

- [[00 Inpatient ProFee Coding MOC]] — Master Map of Content for Inpatient Professional Fee Coding
- [[01 Inpatient ProFee Overview]] — Inpatient Coding Foundations & Regulatory Guidelines
- [[Subsequent Hospital Care]] — Daily Hospital Inpatient Rounding Guidelines ([[99231]]–[[99233]])
- [[Discharge Services]] — Hospital Inpatient & Observation Discharge Day Management ([[99238]], [[99239]])
- [[Inpatient E&M Codes]] — Complete Hospital & Observation E/M Reference Table
- [[Critical Care Codes]] — Critical Care Coding, Time Rules, & Bundling ([[99291]], [[99292]])
- [[Consultation Codes]] — Inpatient Consultation Coding Rules & Payer Policies ([[99252]]–[[99255]])
- [[Prolonged Services]] — Inpatient Prolonged Services Guidelines ([[99418]] vs. [[G0316]])
- [[FS -- Split-Shared Visits]] — CMS Split/Shared Billing Rules & Substantive Portion Standards
- [[GC -- Teaching Physician Rules]] — Teaching Physician Regulations & Supervision Documentation
- [[CMS Medicare Guidelines for Inpatient]] — CMS Payment Rules & Policy Manuals
- [[CPT Assistant References for Inpatient]] — Master Index of CPT Assistant Inpatient Precedents
- [[External Links for Inpatient Coding]] — Official Regulatory Portals, MAC Directory, & Code Scrubbers
- [[Inpatient Modifiers]] — Modifiers for Inpatient Professional Claims
- [[Modifier -25 vs -57]] — Modifier 25 and 57 Decision Hierarchy
- [[Place of Service for Inpatient]] — POS 21 (Inpatient) vs. POS 22 (Observation)
- [[NCCI Edits for Inpatient]] — National Correct Coding Initiative Inpatient Bundling
- [[Medical Necessity for Inpatient]] — Documenting Hospital Level of Care
- [[NATIONAL PHYSICIAN FEE SCHEDULE RELATIVE VALUE FILE CALENDAR YEAR 2026]] — CY 2026 RVU & Fee Schedule Data
- **Primary CPT Code Notes:** [[99221]], [[99222]], [[99223]], [[99234]], [[99235]], [[99236]]
- **Key Inpatient Modifiers:** [[-AI]], [[-FS]], [[-GC]], [[-25]], [[-57]], [[-24]]
