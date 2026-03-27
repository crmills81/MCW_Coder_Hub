---
title: Spinal Cord Injuries (SCI) Coding Guidelines
date: 2026-03-26
category: PM&R
tags:
  - ICD-10
  - neurology
  - spinal-cord-injury
  - neurogenic-bladder
aliases:
  - SCI
  - Paraplegia and Quadriplegia
---

# Spinal Cord Injuries (SCI) Coding Guide

## 1. The Core Concept: Acute Trauma vs. Chronic/Non-Traumatic
Just like strokes, timing and etiology dictate your code path. You have to determine if you are coding the *injury itself* or the *resulting paralysis*.

### Acute Traumatic SCI (Chapter 19: S-Codes)
Use these when the patient has suffered a recent physical trauma (e.g., a car accident or fall) and is receiving active or routine healing care for the injury itself.
* **Code Structure:** Divided by spinal level (Cervical S14.-, Thoracic S24.-, Lumbar S34.-).
* **7th Character Requirement:** * **A:** Initial encounter (active treatment like surgery or ER care).
    * **D:** Subsequent encounter (routine healing, rehab, or follow-up).
    * **S:** Sequela (late effects).



### Chronic or Non-Traumatic Paralysis (Chapter 6: G-Codes)
Use these for paralysis resulting from a past injury (sequela), a disease process (like a tumor), or a congenital issue.
* **Paraplegia (G82.2-):** Paralysis of both lower limbs. Requires a 6th character to specify if it is complete or incomplete.
* **Quadriplegia/Tetraplegia (G82.5-):** Paralysis of all four limbs. Requires a 6th character to specify the exact spinal level (e.g., [[G82.51]] for C1-C4 complete, [[G82.53]] for C5-C7 complete).

> **Coder's Rule:** If a patient is admitted for an acute traumatic spinal cord injury, code the **S-code** first. Do *not* use the Chapter 6 [[paralysis]] codes (G82.-) as the primary diagnosis for an acute, initial trauma admission.

## 2. Managing the Complications: Neurogenic Bowel & Bladder
Patients with chronic **SCI** almost always require management of their autonomic functions. These are high-frequency codes in PM&R clinics and significantly boost the complexity of the chart.

### Neurogenic Bladder
* **Code:** [[N31.9]] (Unspecified **neuromuscular** dysfunction of bladder)
* **Specific Types:** If the provider specifies, use [[N31.2]] (Flaccid neuropathic bladder) or N31.1 (Reflex neuropathic bladder).
* **Coding Tip:** Do not code urinary incontinence (N39.4-) or retention ([[R32]]) separately if it is inherently part of the documented **neurogenic bladder**, unless treating a distinct, new issue.

### Neurogenic Bowel
* **Code:** [[K59.2]] (Neurogenic bowel, not elsewhere classified)
* **Coding Tip:** Look for terms like "bowel regimen" or "digital stimulation" in the assessment and plan to support this diagnosis.

## 3. The "Danger" Diagnosis: Autonomic Dysreflexia (G90.4)
A life-threatening emergency common in patients with SCI at or above the T6 level. It's an extreme overreaction of the autonomic nervous system to a stimulus (**often a full bladder, UTI, or impacted bowel**). 
* **Sequence:** Code the **autonomic dysreflexia** ([[G90.4]]) first, followed by the underlying trigger if known (e.g., fecal impaction [[K56.41]] or urinary tract infection [[N39.0]]).

## 4. Inpatient vs. Profee Considerations
* **Facility Impact:** Acute SCI codes (S14.-, etc.) are massive DRG drivers. In the chronic phase, capturing complications like [[G90.4]] (Autonomic dysreflexia) often acts as a CC (Complication/Comorbidity), reflecting the intensive nursing care required.
* **Profee Focus:** For outpatient visits, capturing the specific G82.- code along with [[N31.9]] and [[K59.2]] accurately supports the high **Medical Decision Making (MDM)** required to manage a complex, multi-system patient.

## 5. Common Bladder Management CPT Codes
Patients with SCI and neurogenic bladder often require routine urological maintenance. Here are the most common procedural codes you will see in the outpatient setting.

### Catheter Insertion
Code selection depends on whether the catheter is meant to stay in place (**indwelling**) or is just for a quick drain/test (straight cath), as well as the difficulty of the insertion.
* **[[51701]]**: Insertion of non-dwelling bladder catheter (e.g., straight [[catheterization]] for residual urine).
* **[[51702]]**: Insertion of temporary indwelling bladder [[catheter]]; simple (e.g., standard Foley insertion).
* **[[51703]]**: Insertion of temporary **indwelling bladder catheter**; complicated (e.g., altered anatomy, stricture, or requiring a coudé catheter).

### Bladder Irrigation and Instillation
Often performed to clear out sediment, blood clots, or to instill medication directly into the bladder.
* **[[51700]]**: Bladder irrigation, simple, lavage and/or instillation.
* **Note:** If medication is instilled, remember to code the specific HCPCS J-code for the drug supplied.

### Urodynamics (Testing Bladder Function)
Since neurogenic bladders behave unpredictably, these tests are crucial for measuring capacity and pressure. 
* **[[51725]]**: Simple cystometrogram (**CMG**).
* **[[51726]]**: Complex cystometrogram (e.g., using a calibrated electronic equipment).
* **[[51728]]**: Complex CMG with voiding pressure studies.
* **[[51729]]**: Complex CMG with voiding pressure studies and urethral pressure profile.
* **Pro-Tip:** Urodynamics often have both a technical component (-TC) and a professional component (-26). If the provider only interprets the test in a facility setting, ensure modifier 26 is appended.

