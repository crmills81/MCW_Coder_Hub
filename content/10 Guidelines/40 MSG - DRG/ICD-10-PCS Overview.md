---
tags:
  - icd-10-pcs
  - pcs
  - inpatient
  - procedures
  - coding-fundamentals
  - drg
  - or-procedures
title: ICD-10-PCS Overview - Inpatient Procedure Coding System
aliases:
  - PCS
  - ICD-10-PCS
  - Procedure Coding System
  - Inpatient Procedures
specialty: All Inpatient
code_type: Procedure Classification
system: CMS / CMS-adopted; WHO-modified
version_current: FY2025
updated: 2025-05-05
related_systems:
  - ICD-10-CM
  - MS-DRG
  - IPPS
  - MDC
  - UHDDS
status: complete
---

# 🔪 ICD-10-PCS Overview - Inpatient Procedure Coding System

> [!abstract] One-Line Definition
> **ICD-10-PCS** (International Classification of Diseases, 10th Revision, Procedure Coding System) is the federally mandated system for coding **inpatient procedures** in the United States — a 7-character alphanumeric code built from a standardized table structure that describes every component of a procedure independently and precisely.

---

## 📌 Why This Matters to Coders

ICD-10-PCS codes are the direct trigger for surgical DRG pathways. When a qualifying ICD-10-PCS procedure code maps to a CMS-defined OR procedure, the DRG grouper routes the case to a surgical DRG — which universally carries a higher relative weight than the equivalent medical DRG. Missing a procedure, undercoding its approach, or using the wrong root operation can mean the difference between a surgical and medical DRG assignment worth thousands of dollars in reimbursement.

> [!important] Core Principle
> ICD-10-PCS does not describe what the physician *intended* to do. It describes what was **actually performed**, based on the documented operative report. Every character in the code must be supported by operative documentation. Never assign a PCS code from the admitting diagnosis, H&P, or a pre-op plan alone.

---

## 🗂️ Section Index

1. [[#📖 Background & Legislative Authority]]
2. [[#🔢 The 7-Character Code Structure]]
3. [[#📚 The 17 PCS Sections]]
4. [[#🔬 Section 0 — Medical & Surgical (The Core Section)]]
5. [[#🏗️ Root Operations — The Heart of PCS]]
6. [[#🦾 Approach Characters — How It Was Done]]
7. [[#🧩 Device and Qualifier Characters]]
8. [[#📋 How to Build a PCS Code — Table Navigation]]
9. [[#⚙️ OR vs Non-OR Procedure Designation]]
10. [[#🔑 PCS Coding Guidelines (OGCR Section B)]]
11. [[#🔬 Specialty-Specific PCS Examples]]
12. [[#⚠️ Common PCS Coding Errors]]
13. [[#🛠️ Practical Workflow for PCS Coding]]
14. [[#📚 References & Resources]]

---

## 📖 Background & Legislative Authority

ICD-10-PCS was developed by **3M Health Information Systems** under contract with CMS and replaced ICD-9-CM Volume 3 procedure codes on **October 1, 2015**. The transition was mandated by HIPAA and implemented alongside the ICD-10-CM diagnosis code transition.

### Why a New System Was Needed

ICD-9-CM Vol. 3 had reached its structural limits by the 2000s — it used a 4-character numeric format that had no room for expansion and frequently forced unrelated procedures into the same code. It lacked specificity for approach, device, and laterality. ICD-10-PCS was designed from the ground up to be:

| Design Goal | How PCS Achieves It |
|------------|---------------------|
| **Expandable** | 7-character alphanumeric structure with ~78,000+ possible codes |
| **Standardized** | Each character position has a defined, consistent meaning |
| **Precise** | Approach, device, and qualifier documented separately |
| **Procedure-complete** | One code describes the complete procedure performed |
| **Technology-neutral** | New approaches (robotic, endoscopic) fit existing structure |

> [!note] PCS vs CPT
> ICD-10-PCS is used **exclusively for inpatient hospital facility coding** under IPPS. CPT codes are used for physician/professional fee billing and outpatient hospital coding (OPPS). As an inpatient profee coder, you use ICD-10-PCS for the facility side; CPT for the physician side of the same operative encounter.

---

## 🔢 The 7-Character Code Structure

Every ICD-10-PCS code is exactly **7 characters** long. Each position is called a **character**, and each character has a defined meaning within its section.

```   
Position: 1     2     3     4     5     6     7
          ───── ───── ───── ───── ───── ───── ─────
Meaning: SECTION BODY ROOT BODY APPROACH DEVICE QUALIFIER

SYSTEM OPERATION PART
  
Example:        0      T      T    0   0    Z     Z

 Med/ Urinary Resect - Kidney Open No Dev   No    Qual

Surg System ion Right
```

**Decoded:** 0TT00ZZ = Resection of right kidney, open approach, no device, no qualifier

### Character Position Reference

| Position | Name | What It Defines |
|----------|------|----------------|
| **1** | Section | Broad procedural category (Medical/Surgical, Obstetrics, Imaging, etc.) |
| **2** | Body System | Organ system involved (Urinary, Respiratory, Eye, etc.) |
| **3** | Root Operation | The objective of the procedure (Resection, Repair, Replacement, etc.) |
| **4** | Body Part | Specific anatomical site |
| **5** | Approach | Surgical technique / access method |
| **6** | Device | Any hardware left in the body after the procedure |
| **7** | Qualifier | Additional specificity (bilateral, allogenic, diagnostic, etc.) |

> [!warning] Characters Are Position-Dependent
> The same letter value can mean different things in different positions. For example, the value **Z** in position 6 = "No Device" but the same letter Z can represent a different body part in position 4 of a different section. Always reference the PCS table for the correct section — never assume character values transfer across positions or sections.

---

## 📚 The 17 PCS Sections

PCS is organized into 17 sections identified by the **first character** of the code. The vast majority of inpatient procedural coding falls in **Section 0 (Medical and Surgical)**.

| Section Code | Section Name | Common Use |
|-------------|-------------|------------|
| **0** | Medical and Surgical | The core section; virtually all OR procedures |
| **1** | Obstetrics | Delivery, amniocentesis, fetal procedures |
| **2** | Placement | Splints, casts, traction devices, packing |
| **3** | Administration | Transfusions, injections, irrigations |
| **4** | Measurement & Monitoring | Cardiac monitoring, arterial line measurement |
| **5** | Extracorporeal or Systemic Assistance | Mechanical ventilation, IABP, ECMO |
| **6** | Extracorporeal or Systemic Therapies | Hemodialysis, phototherapy, hyperbaric oxygen |
| **7** | Osteopathic | Manual treatment |
| **8** | Other Procedures | Robotic-assisted; chiropractic |
| **9** | Chiropractic | Spinal manipulation |
| **B** | Imaging | X-ray, CT, MRI, fluoroscopy, ultrasound |
| **C** | Nuclear Medicine | PET, SPECT scans |
| **D** | Radiation Therapy | Brachytherapy, beam radiation |
| **F** | Physical Rehabilitation & Diagnostic Audiology | PT, OT, speech-language, audiometry |
| **G** | Mental Health | Psychotherapy, electroconvulsive therapy |
| **H** | Substance Abuse | Detoxification, counseling |
| **X** | New Technology | TAVR, gene therapy, newer-generation devices |

> [!tip] Section X — New Technology
> Section X was added in FY2016 to capture emerging technologies without disrupting the established Section 0 tables. These procedures are often separately reimbursed via **New Technology Add-on Payments (NTAPs)** under IPPS. Watch for Section X codes in cardiac, orthopedic, and oncology cases.

---

## 🔬 Section 0 — Medical & Surgical (The Core Section)

Section 0 is where the vast majority of inpatient procedural coding happens. Its body systems (Character 2) map directly to anatomical systems and specialty areas.

### Body System Values — Section 0

| Value | Body System | Specialty Relevance |
|-------|------------|---------------------|
| **0** | Central Nervous System & Cranial Nerves | Neurosurgery |
| **1** | Peripheral Nervous System | Neurosurgery, Spine |
| **2** | Heart & Great Vessels | Cardiac Surgery |
| **3** | Upper Arteries | Vascular Surgery |
| **4** | Lower Arteries | Vascular Surgery |
| **5** | Upper Veins | Vascular, IV access |
| **6** | Lower Veins | Vascular |
| **7** | Lymphatic & Hemic Systems | Oncology, Transplant |
| **8** | Eye | **Ophthalmology** |
| **9** | Ear, Nose, Sinus | **Otolaryngology** |
| **B** | Respiratory System | Pulmonology, ENT |
| **C** | Mouth & Throat | **ENT, OMS** |
| **D** | Gastrointestinal System | GI, General Surgery |
| **F** | Hepatobiliary & Pancreas | Hepatology |
| **G** | Endocrine System | Endocrine Surgery |
| **H** | Skin & Breast | Dermatology, Plastics |
| **J** | Subcutaneous Tissue & Fascia | Plastics, General |
| **K** | Muscles | Orthopedics |
| **L** | Tendons | Orthopedics |
| **M** | Bursae & Ligaments | Orthopedics |
| **N** | Head & Facial Bones | OMS, Neurosurgery |
| **P** | Upper Bones | Orthopedics |
| **Q** | Lower Bones | Orthopedics |
| **R** | Upper Joints | Orthopedics |
| **S** | Lower Joints | Orthopedics |
| **T** | Urinary System | **Urology** |
| **U** | Female Reproductive | OB/GYN |
| **V** | Male Reproductive | **Urology** |
| **W** | Anatomical Regions, General | General Surgery, Trauma |
| **X** | Anatomical Regions, Upper Extremities | Orthopedics, Trauma |
| **Y** | Anatomical Regions, Lower Extremities | Orthopedics, Trauma |

---

## 🏗️ Root Operations — The Heart of PCS

The **Root Operation (Character 3)** defines the *objective* of the procedure. This is the single most conceptually challenging aspect of PCS and the most common source of coding errors.

> [!important] Root Operation = Objective, Not Technique
> The root operation describes **what was accomplished**, not how the surgeon describes the surgery. A "lumpectomy" is an **Excision** (partial resection). A "nephrectomy" is a **Resection** (complete organ removal). You must map the clinical terminology to the PCS root operation definition — they do not always match.

### Root Operations by Functional Group

#### Group 1 — Procedures That Take Out or Eliminate Solid/Fluid/Gases

| Root Op | Value | Definition | Example |
|---------|-------|-----------|---------|
| **Destruction** | 5 | Physical eradication of all or a portion of a body part; no solid matter removed | Fulguration of bladder lesion |
| **Extraction** | D | Pulling or stripping out tissue without cutting | Phlebectomy (vein stripping) |
| **Excision** | B | Cutting out or off, **without** replacement; **partial** body part remains | Partial nephrectomy, lumpectomy |
| **Resection** | T | Cutting out or off, **without** replacement; **entire** body part removed | Total nephrectomy, laryngectomy |
| **Fragmentation** | F | Breaking solid matter in a body part into pieces; no removal of fragments | ESWL; lithotripsy |

> [!warning] Excision vs Resection — The Most Common Error
> **Excision** = partial removal (some of the body part remains). **Resection** = total removal (entire named body part gone). The distinction matters for DRG qualification — Resection of the prostate (0VT00ZZ) often triggers a surgical DRG; Excision may not. Always verify the operative note: was the **entire** body part removed?

#### Group 2 — Procedures That Put In, Put Back, or Move Tissue

| Root Op | Value | Definition | Example |
|---------|-------|-----------|---------|
| **Transfer** | X | Moving tissue without cutting its vascular pedicle | Flap reconstruction |
| **Reattachment** | M | Putting back a detached body part | Replantation of amputated digit |
| **Reposition** | S | Moving body part to its normal or other suitable location | Orchiopexy; uterine suspension |
| **Transplantation** | Y | Putting in a living body part from another individual | Kidney transplant [[0TY00Z0]] |

#### Group 3 — Procedures That Take Out or Eliminate Devices

| Root Op | Value | Definition | Example |
|---------|-------|-----------|---------|
| **Removal** | P | Taking out or off a device from a body part | Ureteral stent removal |
| **Revision** | W | Correcting, to the extent possible, a malfunctioning or displaced device | Repositioning a displaced ureteral stent |

#### Group 4 — Procedures That Alter Diameter/Route of a Tubular Body Part

| Root Op | Value | Definition | Example |
|---------|-------|-----------|---------|
| **Bypass** | 1 | Altering the route of passage of contents; includes diverted passage | Urinary diversion; tracheostomy 0B110F4 |
| **Dilation** | 7 | Expanding an orifice or lumen | Urethral dilation; balloon dilation |
| **Occlusion** | L | Completely closing the orifice or lumen | Tubal ligation |
| **Restriction** | V | Partially closing an orifice or lumen | Cerclage; banding |

#### Group 5 — Procedures That Always Involve a Device

| Root Op | Value | Definition | Example |
|---------|-------|-----------|---------|
| **Insertion** | H | Putting in a nonbiological appliance that monitors, assists, performs, or prevents a body function | Foley catheter, pacemaker lead, IOL |
| **Replacement** | R | Putting in or on a biological or synthetic substitute that **replaces** a body part | Total hip arthroplasty; corneal graft |
| **Supplement** | U | Putting in or on a biological or synthetic material that physically reinforces or augments a body part | Hernia mesh; tendon graft augmentation |
| **Change** | 2 | Taking out or off a device and putting back an identical or similar device | Ostomy bag change; drain exchange |

#### Group 6 — Procedures That Involve Examination Only

| Root Op | Value | Definition | Example |
|---------|-------|-----------|---------|
| **Inspection** | J | Visually and/or manually exploring a body part | Diagnostic cystoscopy; exploratory lap |
| **Map** | K | Locating the route of passage of electrical impulses | Cardiac mapping |

#### Group 7 — Other Repairs and Alterations

| Root Op | Value | Definition | Example |
|---------|-------|-----------|---------|
| **Repair** | Q | Restoring a body part to its normal structure; catch-all when no other root op fits | Hernia repair without mesh |
| **Control** | 3 | Stopping or attempting to stop post-procedural or other acute bleeding | Post-op hemorrhage control |
| **Creation** | 4 | Putting in or on biological or synthetic material to form a new body part (not a natural body part) | Neovagina; aortic conduit |
| **Alteration** | 0 | Modifying the natural anatomic structure of a body part without affecting function; cosmetic | Rhinoplasty; blepharoplasty |
| **Fusion** | G | Joining together portions of an articular body part; rendering it immobile | Spinal fusion |
| **Division** | 8 | Cutting into a body part without draining fluids | Osteotomy; neurotomy |
| **Release** | N | Freeing a body part from abnormal physical constraint by cutting or using force | Carpal tunnel release; lysis of adhesions |
| **Drainage** | 9 | Taking or letting out fluids and/or gases from a body part | I&D abscess; thoracentesis |

---

## 🦾 Approach Characters — How It Was Done

The **Approach (Character 5)** defines the surgical access method. This is the second most common source of PCS coding errors — particularly in the era of robotic and endoscopic surgery.

| Value | Approach | Definition | Example |
|-------|----------|-----------|---------|
| **0** | Open | Cutting through skin/mucous membrane and any other body layers necessary | Open nephrectomy |
| **3** | Percutaneous | Entry by puncture or minor incision of instrumentation through skin/mucous membrane | CT-guided biopsy, percutaneous nephrostomy |
| **4** | Percutaneous Endoscopic | Entry by puncture or minor incision with visualization via endoscope | Laparoscopic cholecystectomy; robotic prostatectomy |
| **7** | Via Natural or Artificial Opening | Entry through naturally occurring opening; no incision | TURP; cystoscopy via urethra; intubation |
| **8** | Via Natural or Artificial Opening Endoscopic | Entry through natural opening with endoscope | Colonoscopy; cystoscopy with biopsy; FESS |
| **F** | Via Natural or Artificial Opening with Percutaneous Endoscopic Assistance | Laparoscopic-assisted vaginal hysterectomy (LAVH) | Laparoscopic-assisted procedures |
| **X** | External | Procedures performed directly on skin or mucous membrane; procedures performed indirectly by application of external force | Closed reduction; external fixation |

> [!tip] Robotic = Percutaneous Endoscopic (Value 4)
> Robotic-assisted procedures (da Vinci, etc.) use the **percutaneous endoscopic approach (4)** — not a unique approach code. The robotic component is captured in **Section 8** (Other Procedures) as a separate code: 8E0W4CZ (Robotic Assisted Procedure, trunk region). Always code both the primary PCS procedure AND the robotic assistance code when documented.

> [!warning] Endoscopic Approach Changes the Code Entirely
> Laparoscopic cystectomy vs open cystectomy differ only in Character 5, but they may result in different DRG qualification. CMS's OR procedure list designates certain approaches as qualifying OR procedures while others do not. Always verify the approach against the operative report — never default to "open" when laparoscopic was performed.

---

## 🧩 Device and Qualifier Characters

### Device (Character 6)

The Device character captures **hardware or biological material left in the body** after the procedure is complete.

| Value | Device | Example |
|-------|--------|---------|
| **Z** | No Device | Most resections, excisions, drainage procedures |
| **0** | Drainage Device | Drain tube, JP drain |
| **1** | Radioactive Element | Brachytherapy seeds |
| **2** | Monitoring Device | Cardiac monitor |
| **3** | Infusion Device | IV catheter, intrathecal pump |
| **7** | Autologous Tissue Substitute | Patient's own tissue graft |
| **J** | Synthetic Substitute | Mesh, artificial valve, IOL |
| **K** | Nonautologous Tissue Substitute | Cadaveric graft, bank tissue |
| **F** | Tracheostomy Device | Trach tube (triggers Pre-MDC review) |
| **M** | Stimulator Lead | Pacemaker lead, neurostimulator |

> [!note] Device = Left Behind
> If a device is placed and then removed **during the same operative session**, it is NOT coded as a device — the Device character defaults to Z (No Device). Device codes only apply to hardware remaining in the patient at the end of the procedure.

### Qualifier (Character 7)

The Qualifier provides additional specificity that doesn't fit into the other character positions.

| Common Value | Meaning | Context |
|-------------|---------|---------|
| **Z** | No Qualifier | Most procedures |
| **0** | Allogenic | Transplant from another person |
| **1** | Syngeneic | Transplant from identical twin |
| **3** | Vertical / Percutaneous | Approach qualifier; biopsy type |
| **X** | Diagnostic | Procedure performed for diagnostic purpose (e.g., excisional biopsy) |
| **4** | Cutaneous | Bypass to skin surface (tracheostomy) |

---

## 📋 How to Build a PCS Code — Table Navigation

ICD-10-PCS codes are built by navigating the **PCS Tables**, not by looking up a procedure name in an index and accepting the result directly. The Alphabetic Index directs you to a table; you must confirm each character independently.

### Step-by-Step Table Navigation
```
STEP 1: Identify the ROOT OPERATION from the operative report  
→ What was the objective? (Resection? Excision? Insertion?)

STEP 2: Identify the BODY SYSTEM (Character 2)  
→ What organ system was operated on?

STEP 3: Go to the PCS Table for Section 0 + Body System + Root Operation  
→ This is your unique table (e.g., Table 0TT for Resection, Urinary System)

STEP 4: In the table, select Body Part (Character 4)  
→ Specific anatomic site from the table's options

STEP 5: Select Approach (Character 5)  
→ From the valid approach options for this table

STEP 6: Select Device (Character 6)  
→ Usually Z (No Device) unless hardware was left in

STEP 7: Select Qualifier (Character 7)  
→ Usually Z (No Qualifier) unless a specific qualifier applies

STEP 8: Confirm: Does the completed 7-character string exist as a valid PCS code?  
→ Verify in your encoder; not all character combinations are valid
```

---

### Example: Robotic Right Radical Nephrectomy

```
Root Operation: T (Resection — entire kidney removed)  
Body System:    T (Urinary System)  
Body Part:      0 (Kidney, Right)  
Approach:       4 (Percutaneous Endoscopic — robotic = laparoscopic)  
Device:         Z (No Device)  
Qualifier:      Z (No Qualifier)
→ Code: 0TT04ZZ
Additional code for robotic assistance:

→ 8E0W4CZ (Robotic Assisted Procedure, trunk region, percutaneous endoscopic)
```


---

## ⚙️ OR vs Non-OR Procedure Designation

Not every ICD-10-PCS code qualifies as an **OR (Operating Room) procedure** for DRG grouper purposes. CMS publishes a list of OR procedures annually. OR designation drives the surgical DRG pathway.

### What Qualifies as an OR Procedure

| Qualification Status | Effect on DRG |
|---------------------|--------------|
| **OR procedure** present | Case routes to surgical DRG pathway (higher RW) |
| **No OR procedure** present | Medical DRG pathway |
| **Non-OR procedure** coded | No DRG pathway change; does not trigger surgical grouping |
| **Unrelated OR procedure** coded | May route to special unrelated OR procedure DRGs |

### Common Non-OR Procedures (Do NOT trigger surgical DRG)

- Insertion of urinary catheter (0TH97XZ)
- Endotracheal intubation (0BH17EZ)
- Insertion of peripheral IV catheter
- Most monitoring device insertions
- Irrigation/instillation procedures
- Diagnostic imaging-guided injections

> [!warning] Foley ≠ OR Procedure
> Insertion of a urinary catheter (0TH97XZ) is **not** an OR procedure and will not trigger a surgical DRG — even though it is a coded PCS procedure. This is a common misconception. Only invasive procedures on the CMS OR list change the DRG pathway.

---

## 🔑 PCS Coding Guidelines (OGCR Section B)

The Official Coding Guidelines for ICD-10-PCS are found in **Section B** of the OGCR. These are mandatory, not optional — CMS and payers expect compliance.

### Key Guideline Groups

#### B2 — Body System Guidelines

> "The procedure performed on a body part that is part of a body system is coded to the body system that includes the body part." — OGCR B2.1a

Lymph nodes biopsied during a neck dissection are coded to the lymphatic system (07), not the body system of the primary surgical site.

#### B3 — Root Operation Guidelines

| Guideline | Rule |
|-----------|------|
| **B3.1b** | Code all documented procedures, even if performed for diagnostic purposes |
| **B3.2a** | Multiple procedures on different body parts are coded separately |
| **B3.2b** | Multiple procedures on the same body part are coded separately if distinct root operations are performed |
| **B3.3** | Discontinued procedure: code to the root operation performed, even if the intended procedure was not completed |
| **B3.4** | Biopsy followed by more definitive procedure: code both (if both performed at same operative session, code the more definitive procedure only if it excises the biopsy site) |
| **B3.5** | Overlapping body layers: code to the deepest layer involved |
| **B3.11** | Inspection procedures: code to the farthest body part inspected |

#### B4 — Body Part Guidelines

| Guideline | Rule |
|-----------|------|
| **B4.1a** | Procedures on overlapping body parts: code to the body part most specifically described |
| **B4.3** | Bilateral procedures: use bilateral body part value if available; if not, code each side separately |
| **B4.6** | Tendons and ligaments: if a tendon or ligament is cut to reach the surgical site, code Detachment/Division only if the tendon/ligament itself was the operative site |

#### B6 — Device Guidelines

| Guideline | Rule |
|-----------|------|
| **B6.1a** | Device coded only if remains in the body at the end of the procedure |
| **B6.1b** | If intended device is not placed (abandoned), code the procedure with No Device (Z) |
| **B6.2** | Drainage device: for procedures involving only drainage, code Drainage root operation with appropriate device |

> [!important] OGCR B3.3 — Discontinued Procedures
> If a procedure is started but cannot be completed (e.g., laparoscopic approach converted to open, but then the procedure was stopped entirely), code the procedure that was actually performed — not the intended procedure. This is a frequent audit finding.

---

## 🔬 Specialty-Specific PCS Examples

### 🫘 Urology — Key PCS Codes

| PCS Code | Description                                                        | DRG Impact                 |
| -------- | ------------------------------------------------------------------ | -------------------------- |
| **0TT00ZZ**  | Resection right kidney, open                                       | Surgical DRG — MDC 11      |
| **0TT04ZZ**  | Resection right kidney, percutaneous endoscopic (robotic/lap)      | Surgical DRG — MDC 11      |
| **0TB00ZX**  | Excision right kidney, open, diagnostic (biopsy)                   | Non-OR in some contexts    |
| **0TY00Z0**  | Transplantation right kidney, allogenic, open                      | Pre-MDC DRG 652/653/654    |
| **0VT00ZZ**  | Resection prostate, open                                           | Surgical DRG — MDC 12      |
| **0VT08ZZ**  | Resection prostate, via natural opening endoscopic (TURP)          | Surgical DRG — MDC 12      |
| **0TBB8ZZ**  | Excision bladder, via natural opening endoscopic (TURBT)           | Surgical DRG — MDC 11      |
| **0TH97XZ**  | Insertion urinary catheter, via natural opening, external approach | **Non-OR** — no DRG change |
| **0TN38ZZ**  | Release ureter, via natural opening endoscopic (ureteroscopy)      | MDC 11                     |

### 👂 ENT / Otolaryngology — Key PCS Codes

| PCS Code | Description                                                     | DRG Impact                            |
| -------- | --------------------------------------------------------------- | ------------------------------------- |
| **0CTS0ZZ**  | Resection larynx, open (total laryngectomy)                     | Surgical DRG — MDC 03; DRG 129        |
| **07T50ZZ**  | Resection lymphatics, bilateral neck (radical neck dissection)  | Surgical DRG — MDC 03                 |
| **09BC4ZZ**  | Excision nasal turbinate, percutaneous endoscopic (FESS)        | Surgical DRG — MDC 03                 |
| **09QK0ZZ**  | Repair nasal septum, open (septoplasty)                         | Surgical DRG — MDC 03                 |
| **0CBC3ZZ**  | Drainage soft palate, percutaneous (peritonsillar abscess I&D)  | Surgical DRG                          |
| **0CT70ZZ**  | Resection tonsils, open (tonsillectomy)                         | Surgical DRG                          |
| **0B110F4**  | Bypass trachea to cutaneous, tracheostomy device, open          | **Pre-MDC trigger — DRG 003/004/011** |
| **0B113F4**  | Bypass trachea to cutaneous, percutaneous (Ciaglia perc trach)  | **Pre-MDC trigger**                   |
| **0BH17EZ**  | Insertion endotracheal airway, via natural opening (intubation) | **Non-OR — no Pre-MDC trigger**       |

### 👁️ Ophthalmology — Key PCS Codes

| PCS Code | Description                                                           | DRG Impact                     |
| -------- | --------------------------------------------------------------------- | ------------------------------ |
| **08R83JZ**  | Replacement lens right eye, percutaneous, synthetic (cataract w/ IOL) | Surgical DRG — MDC 02          |
| **0818XZZ**  | Division vitreous right eye, external approach (vitrectomy)           | Surgical DRG — MDC 02          |
| **0897XZZ**  | Drainage anterior chamber right eye (paracentesis)                    | MDC 02                         |
| **08N10ZZ**  | Release right eye, open (orbital decompression)                       | Surgical DRG — MDC 02; DRG 113 |
| **08C80ZZ**  | Extirpation vitreous right eye (removal vitreous blood)               | MDC 02                         |
| **080K3ZZ**  | Drainage vitreous right eye, percutaneous (vitreous tap)              | MDC 02                         |

---

## ⚠️ Common PCS Coding Errors

| Error                                                            | Impact                                              | Correction                                          |
| ---------------------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| **Coding Excision instead of Resection**                         | May miss surgical DRG or map to lower DRG           | Verify: was the **entire** body part removed?       |
| **Coding open approach when laparoscopic performed**             | Incorrect; not supported by operative report        | Always verify approach in OR report                 |
| **Not coding robotic assistance separately**                     | Undercoding documented procedure                    | Add 8E0W4CZ when robot is documented                |
| **Coding intubation as tracheostomy**                            | False Pre-MDC trigger; compliance risk              | 0BH17EZ = ETT; 0B110F4 = trach                      |
| **Coding only the principal procedure**                          | Misses additional OR procedures that may affect DRG | Code ALL procedures documented as performed         |
| **Assigning device code for items removed intraoperatively**     | Incorrect device character                          | Device character = Z if not left in body            |
| **Using Alphabetic Index code without verifying table**          | May result in invalid code string                   | Always verify at the table level                    |
| **Coding discontinued procedure to intended root operation**     | Non-compliant with OGCR B3.3                        | Code what was actually performed                    |
| **Missing bilateral body part value**                            | Two separate codes when one bilateral code exists   | Check table for bilateral value                     |
| **Confusing Inspection (diagnostic scope) with Excision/Biopsy** | Inspection alone = no tissue removed                | Code Excision + qualifier X (diagnostic) for biopsy |

---

## 🛠️ Practical Workflow for PCS Coding
```
1. READ the operative report completely before coding anything
→ Identify: What procedure(s) were performed?
→ Identify: What approach was used?
→ Identify: Was any hardware left in place?
→ Identify: Were any procedures discontinued or converted?

2. IDENTIFY the root operation(s)
→ Map clinical language to PCS root operation definitions
→ "Excised a portion of" → Excision
→ "Removed the entire" → Resection
→ "Drained fluid from" → Drainage
→ "Placed a stent" → Insertion (if left) or Dilation (if balloon only)

3. LOCATE the correct PCS table
→ Section (usually 0) + Body System + Root Operation

4. BUILD the code character by character from the table
→ Do not accept Alphabetic Index code without table verification

5. CHECK for additional codeable procedures
→ Each distinct root operation at each site = separate code
→ Robotic assistance = separate Section 8 code
→ Mechanical ventilation during procedure = Section 5 code if prolonged

6. VERIFY OR procedure status for each code
→ Does this code appear on CMS OR procedure list?
→ Will it trigger surgical DRG?

7. SEQUENCE correctly
→ Principal procedure = most resource-intensive OR procedure
→ Additional procedures follow

8. CONFIRM in your encoder
→ Validate code string exists and is active for current FY
→ Run grouper to verify DRG impact
```


---

## 📚 References & Resources

| Resource                              | Description                                             | URL                                |
| ------------------------------------- | ------------------------------------------------------- | ---------------------------------- |
| **CMS ICD-10-PCS Official Files**         | Annual code files, tables, and guidelines               | cms.gov/Medicare/Coding/ICD10      |
| **ICD-10-PCS Official Coding Guidelines** | OGCR Section B — mandatory guidelines                   | cms.gov                            |
| **CMS OR Procedure List**                 | Annual list of OR-qualifying PCS codes                  | Included in IPPS Final Rule tables |
| **ICD-10-PCS Reference Manual**           | CMS reference with root operation definitions           | cms.gov                            |
| **AHA Coding Clinic for ICD-10-PCS**      | Official Q&A guidance; published quarterly              | ahacentraloffice.org               |
| **AAPC CIC Study Guide**                  | Inpatient coding certification prep; PCS section        | aapc.com                           |
| **3M Encoder / Optum360 Encoder**         | Industry-standard PCS code lookup with table navigation | 3mhis.com / optum.com              |
| **Find-A-Code / Codify**                  | Online PCS lookup tools                                 | findacode.com / aapc.com/codify    |

---

## 🔗 Related Notes

- [[MS-DRG Overview]] — How PCS codes drive DRG surgical pathways
- [[IPPS_Payment_Overview]] — Payment methodology; OR procedure impact
- [[MDC 11 - Urology]] — PCS codes for kidney & urinary tract
- [[MDC 12 - Male Reproductive]] — PCS codes for male reproductive
- [[MDC 03 - ENT]] — PCS codes for ear, nose, throat, larynx
- [[MDC 02 - Eye]] — PCS codes for ophthalmology
- [[CC-MCC Reference]] — Secondary dx CC/MCC classification
- [[UHDDS_Principal_Diagnosis]] — Principal diagnosis selection (PDx affects MDC; PCS affects DRG pathway)
- [[POA_Indicator_Guide]] — POA flags on diagnoses affect CC/MCC
- [[HAC_List]] — Certain PCS procedures are associated with HAC conditions
- [[CDI Query Templates]] — Query language for underdocumented procedures

---

*ICD-10-PCS codes, tables, and OR procedure designations update each October 1 with the CMS IPPS Final Rule. Always verify codes against the current fiscal year files in your encoder before submission.*