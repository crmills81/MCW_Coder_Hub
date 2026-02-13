---
tags:
  - medterm
  - medroot
  - cardiology
aliases:
  - dysrhythmia
roots:
  - arrhythmia
  - ar-
  - -mia
  - -ia
forms:
  - prefix
  - suffix
  - combining
alphabet: A
definition:
  - improper beating of the heart
---
>[!Note] DEFINITION of [[arrhythmia]]
>An **arrhythmia** (also known as [[dysrhythmia]]) refers to **any disturbance in the rate, rhythm, origin, or conduction of the electrical impulses of the heart**. It occurs when the electrical signals that coordinate the heart's beats do not work properly, causing the heart to beat too fast, too slow, or erratically. While some arrhythmias are harmless, others can be life-threatening by disrupting the heart's ability to pump blood effectively to the body. 
>
> #### 3. Related Terms & Synonyms
>- **[[Dysrhythmia]]:** Often used interchangeably with arrhythmia (technically "bad rhythm" vs "no rhythm," but clinically synonymous).
>- **Tachycardia:** Heart rate > 100 beats per minute (resting).
>- **Bradycardia:** Heart rate < 60 beats per minute    
>- **Fibrillation:** Rapid, irregular, and unsynchronized contraction of muscle fibers (e.g., Atrial Fibrillation).
>- **Palpitations:** The sensation of the heart racing, pounding, fluttering, or skipping a beat.
>- **Premature Ventricular Contraction (PVC):** Extra, abnormal heartbeats that begin in one of the heart's two lower pumping chambers (ventricles).
_____
>[!info]+ ETYMOLOGY of [[arrhythmia]]
>#greek
>- **Origin:** Late 19th century.
>- **Roots:** From Greek _arrhythmia_ ("**want of rhythm**").
>- **Breakdown:** _[[a-]]_ (**without, not**) + _rhythmos_ (**rhythm**).
>- **Historical Context:** Originally used to describe any lack of rhythm in verse or music before being adopted into medical terminology to describe the pulse.

_____
>[!tip]+ DERIVATIONS of [[arrhythmia]]
>```dataview
>TABLE definition AS Definition
>FROM #medterm 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
>SORT file.name ASC
>```
_____
>[!faq]- Query functionality
>```dataview
>TABLE definition AS Definition
>FROM #medterm 
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```

---

## 4. Coding Information

### ICD-10-CM (Diagnosis Codes)

_Arrhythmias are classified primarily under Chapter 9: Diseases of the Circulatory System (I00-I99)._

**Category I48: Atrial fibrillation and flutter**

- **[[I48.0]]:** Paroxysmal atrial fibrillation
- **[[I48.2]]:** Chronic atrial fibrillation
- **[[I48.91]]:** Unspecified atrial fibrillation    

**Category I49: Other cardiac arrhythmias**

- **[[I49.01]]:** Ventricular fibrillation
- **[[I49.1]]:** Atrial premature depolarization
- **[[I49.3]]:** Ventricular premature depolarization
- **[[I49.9]]:** Cardiac arrhythmia, unspecified

**Symptom Codes (if no definitive diagnosis):**

- **[[R00.0]]:** Tachycardia, unspecified
- **[[R00.1]]:** Bradycardia, unspecified
- **[[R00.2]]:** [[Palpitations]]

### CPT (Procedure Codes)

_Diagnostic and treatment codes vary widely._

- **[[93000]]:** Electrocardiogram (EKG/ECG), routine ECG with at least 12 leads; with interpretation and report.
- **[[93224]]:** External electrocardiographic recording up to 48 hours (Holter monitor); includes recording, scanning analysis, and report.
- **[[93653]]:** Comprehensive electrophysiologic evaluation with insertion and repositioning of multiple electrode catheters... includes ablation (treatment for SVT).
- **[[92960]]:** Cardioversion, elective, electrical conversion of arrhythmia; external.

## 5. ICD-10 Guidelines: Includes & Excludes

**Includes (Category I49):**
- [[Ectopic]] beats
- Extrasystoles
- Co-occurrences of specific rhythm disorders

**Excludes1 (Type 1 Excludes - NEVER code together):**
- Bradycardia NOS ([[R00.1]])
- Neonatal [[dysrhythmia]] ([[P29.1]])
- Tachycardia NOS ([[R00.0]])

**Excludes2 (Type 2 Excludes - Can be coded together if distinct):**
- Cardiac arrhythmias complicating abortion, ectopic or molar pregnancy (O00-O07, [[O08.8]])
- Cardiac arrhythmias complicating pregnancy, childbirth and the puerperium ([[O99.4]])

## 6. Reimbursement & Administrative Data

### HCC (Hierarchical Condition Category)

- **Atrial Fibrillation (I48.x):** Maps to **HCC 96** (Specified Heart Arrhythmias). This is a high-value code for risk adjustment due to the chronic management and stroke risk involved.
- **Ventricular Fibrillation ([[I49.01]]):** Maps to **HCC 96**.
- **Unspecified Arrhythmia ([[I49.9]]):** Generally does **NOT** map to an HCC. Specificity is required for risk adjustment credit.
- **Palpitations ([[R00.2]]):** Does **NOT** map to an HCC (Symptom code).

### Assistant Surgeon Pay
- **Diagnostic (EKG [[93000]]):** **No.** (Technical/professional component only). 
- **Cardioversion ([[92960]]):** **No.** (Minor procedure).
- **Ablation/EP Studies ([[93653]]):** **Sometimes.**
    - Complex Electrophysiology (EP) studies often require a second pair of hands, but policies vary by payer.
- **Pacemaker Implantation ([[33206]]-[[33208]]):** **No.** (Generally considered a single-surgeon procedure unless complications arise or it is a distinct complex scenario).
- **MAZE Procedure (Surgical Ablation [[33254]]):** **Yes.** (Open heart surgery for arrhythmia usually allows for assistant surgeon billing).
 

## 7. Clinical Details

### Pathophysiology

The heart's rhythm is controlled by the sinoatrial (SA) node (the natural pacemaker).
1. **SA Node Failure:** The pacemaker fails to fire or fires irregularly.
2. **Conduction Block:** The electrical signal is blocked at the AV node or bundle branches.
3. **Ectopic Foci:** Other parts of the heart (atria or ventricles) start firing their own electrical signals, overriding the SA node.
4. **Re-entry:** An electrical impulse travels in a circle within the heart, causing a rapid rhythm.

### Common Types
- **Atrial Fibrillation (AFib):** The upper chambers beat chaotically. Risk of stroke due to blood clots.
- **Supraventricular Tachycardia (SVT):** Rapid heartbeat beginning above the ventricles.
- **Ventricular Tachycardia (V-tach):** Rapid heartbeat beginning in the lower chambers; can be fatal if sustained.
- **Heart Block:** Electrical signals are slowed or blocked.

### Symptoms

- Fluttering in the chest.
- Racing heartbeat (tachycardia) or slow heartbeat (bradycardia).
- Chest pain.
- Shortness of breath.
- Lightheadedness or dizziness.
- Syncope (fainting).

### Treatment

- **Medication:** Anti-arrhythmics (e.g., Amiodarone, Beta-blockers, Calcium channel blockers) and Anticoagulants (blood thinners for AFib).
- **Cardioversion:** Using electricity or drugs to reset the heart rhythm.
- **Catheter Ablation:** Destroying the small area of heart tissue causing the abnormal signals.
- **Device Therapy:**
    - **Pacemaker:** For bradycardia.
    - **ICD (Implantable Cardioverter Defibrillator):** For life-threatening ventricular arrhythmias.

---

[[Med roots]]
[[Appendix A Prefixes]]
[[Appendix B Combining Forms]]
[[Appendix C Suffixes]]
[[Appendix D Suffix forms]]