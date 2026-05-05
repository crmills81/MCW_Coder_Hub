---
tags:
  - medterm
  - neurology
  - movement-disorder
aliases:
- Autonomic Dysreflexia
- micrographia
- Small handwriting
- small handwriting
- Parkinsonian handwriting
roots:
  - micro-
  - graph-
  - -ia
forms:
  - noun
  - adjective
alphabet:
  - A
definition: a syndrome associated with damage to the spinal cord above the mid thoracic level characterized by a marked increase in the sympathetic response to minor stimuli such as bladder or rectal distention, with manifestations including hypertension, tachycardia, fever, flushing, and hyperhidrosis
---

## Overview
**Autonomic dysreflexia (AD)** is a syndrome associated with damage to the spinal cord above the mid thoracic level characterized by a marked increase in the sympathetic response to minor **stimuli** such as **bladder or rectal distention**, with manifestations including hypertension, tachycardia (**or reflex bradycardia**), fever, flushing, and **hyperhidrosis**. It is a life-threatening condition where extreme hypertension may be associated with stroke. Typically occurs in patients with spinal cord injury at **T6 or above**.

## Diagnosis Codes
- [[G90.4]] – Autonomic dysreflexia

### Use Additional Code to Identify Cause
Use additional code to identify the cause, such as: fecal impaction (**[[K56.41]]**), pressure ulcer (**pressure area**) (L89.-), urinary tract infection (**[[N39.0]]**):
- **[[K56.41]]** – Fecal impaction
- **[[N39.0]]** – Urinary tract infection, site not specified
- **[[L89]]** – Pressure ulcer (use specific billable subcode based on site/stage)

### Excludes1
- Dysfunction of the autonomic nervous system due to alcohol (**[[G31.2]]**)
- **[[G31.2]]** – Degeneration of nervous system due to alcohol

## Etiology / Common Triggers
- **Bladder distention** (most common) – blocked catheter, UTI, overfilled bladder
- **Bowel distention** – fecal impaction, constipation
- **Skin irritation** – pressure ulcers, ingrown toenails, tight clothing
- Sexual activity, labor/delivery
- Surgical/diagnostic procedures
- DVT, fractures below the level of injury

## Clinical Presentation
- **Sudden severe hypertension** (SBP rise ≥20–40 mmHg above baseline)
- **Pounding headache**
- **Bradycardia** (reflex) or tachycardia
- **Flushing/sweating** above the level of injury
- **Pale, cool, dry skin** below the level of injury
- Nasal congestion
- Blurred vision, anxiety, "**sense of doom**"
- **Piloerection** (goosebumps)

## Acute Management
1. **Sit patient upright** – legs dangling to induce orthostatic BP drop
2. **Loosen restrictive clothing/devices**
3. **Check BP every 2–5 minutes**
4. **Identify and remove the trigger**:
   - Catheterize bladder or check existing catheter for kinks/blockage
   - Perform digital rectal exam with lidocaine jelly to remove impaction
   - Inspect skin for irritants
5. **Pharmacologic management** if SBP ≥150 mmHg:
   - Nitroglycerin paste (1–2 inches above level of injury)
   - Nifedipine (immediate-release, bite & swallow)
   - Hydralazine, captopril, or prazosin

## Common Associated CPT Codes (Billable)
> Verify codes against current CPT manual; only valid/billable codes are bracketed.

### E/M
- **[[99202]]** – New patient office visit, straightforward MDM (15-29 min)
- **[[99203]]** – New patient office visit, low MDM (30-44 min)
- **[[99204]]** – New patient office visit, moderate MDM (45-59 min)
- **[[99205]]** – New patient office visit, high MDM (60-74 min)
- **[[99212]]** – Established patient office visit, straightforward MDM (10-19 min)
- **[[99213]]** – Established patient office visit, low MDM (20-29 min)
- **[[99214]]** – Established patient office visit, moderate MDM (30-39 min)
- **[[99215]]** – Established patient office visit, high MDM (40-54 min)
- **[[99281]]** – ED visit, straightforward
- **[[99282]]** – ED visit, low MDM
- **[[99283]]** – ED visit, moderate MDM
- **[[99284]]** – ED visit, moderate-high MDM
- **[[99285]]** – ED visit, high MDM

### Critical Care
- **[[99291]]** – Critical care, first 30–74 minutes
- **[[99292]]** – Critical care, each additional 30 minutes

### Procedures Often Performed in AD Workup
- **[[51701]]** – Insertion of non-indwelling bladder catheter (straight cath)
- **[[51702]]** – Insertion of temporary indwelling Foley catheter, simple
- **[[51703]]** – Insertion of temporary indwelling Foley catheter, complicated
- **[[51798]]** – Measurement of post-voiding residual urine by ultrasound
- **[[45915]]** – Removal of fecal impaction or foreign body, under anesthesia
- **[[81001]]** – Urinalysis with microscopy, automated
- **[[81002]]** – Urinalysis without microscopy, non-automated
- **[[81003]]** – Urinalysis, automated, without microscopy
- **[[87086]]** – Urine culture, quantitative colony count
- **[[87088]]** – Urine culture, identification

## Common Modifiers
- **[[-25]]** – Significant, separately identifiable E/M service on the same day as a procedure
- **[[-59]]** – Distinct procedural service
- **[[-24]]** – Unrelated E/M service during a postoperative period
- **[[-57]]** – Decision for surgery
- **[[-GC]]** – Service performed in part by a resident under teaching physician
- **[[-95]]** – Synchronous telemedicine service via real-time interactive audio/video

## Documentation Pearls
- Document level of **spinal cord injury**
- Document baseline **BP** and **acute BP elevation**
- Document trigger identified and intervention
- Document associated cause for sequencing (**UTI, impaction, pressure ulcer**)
- **Per coding guidance**: when a condition has both an underlying etiology and manifestations, the underlying condition is sequenced first, followed by the manifestation; "**use additional code**" notes indicate the proper sequencing order of etiology followed by manifestation

## Related Notes
- [[Spinal Cord Injury]]
- [[Neurogenic Bladder]]
- [[Hypertensive Emergency]]
- [[Pressure Ulcer]]
- [[Urinary Tract Infection]]
- [[Fecal Impaction]]

_____

>[!tip]- DERIVATIONS of [[autonomic dysreflexia]]
>```dataview
>TABLE definition AS Definition
>FROM #medterm 
>WHERE length(filter(roots, (word) => econtains([[autonomic dysreflexia]].roots, word))) > 0 AND file.name != [[autonomic dysreflexia]].file.name
>SORT file.name ASC
>```
_____

>[!faq]- Query functionality
>```dataview
>TABLE definition AS Definition
>FROM #medterm 
>WHERE length(filter(definition, (word) => econtains([[autonomic dysreflexia]].definition, word))) > 0 AND file.name != [[autonomic dysreflexia]].file.name
>```


[[Med roots]]
[[Appendix A Prefixes]]
[[Appendix B Combining Forms]]
[[Appendix C Suffixes]]
[[Appendix D Suffix forms]]


## Tags
#neurology #spinal-cord-injury #autonomic #emergency #ICD10/G904