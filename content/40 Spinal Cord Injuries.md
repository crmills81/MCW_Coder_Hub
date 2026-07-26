---
tags:
  - inpatient
  - PMR
  - trauma
  - neurology
  - spinal-cord
aliases:
  - TSCI
  - NTSCI
  - SCI coding
  - traumatic spinal cord injury
  - non-traumatic spinal cord injury
  - spinal cord injury ICD-10
category: ICD-10-CM Reference
specialty: PM&R / Trauma / Neurology
drg_impact: high
last_updated: 2026-07-25
---

# Spinal Cord Injuries - Traumatic & Non-Traumatic

## Overview

**Spinal cord injuries (SCI)** result from damage to the spinal cord itself, producing temporary or permanent changes in motor, sensory, and autonomic function. For ICD-10-CM coding purposes, SCIs are divided into two distinct categories:

- **Traumatic SCI (TSCI)** - caused by a physical external force (**MVA, fall, GSW, diving, sports**). Coded from Chapter 19 (S14.x / S24.x / S34.x) with a mandatory 7th character.
- **Non-Traumatic SCI (NTSCI)** - caused by disease, compression, vascular event, infection, or inflammation. Coded from Chapter 6 (G82.xx, G95.xx) with the underlying etiology sequenced first.

> [!IMPORTANT]
> The **anatomic level** of injury (**cervical, thoracic, lumbar, sacral**) AND the **completeness** of the lesion (**complete vs. incomplete**) are both required for specific code assignment. Query the provider when documentation only states "spinal cord injury" without specifying level or degree of deficit.

---

## Anatomy Quick Reference

| Region   | Cord Levels | Vertebral Levels | Functional Consequences                                                 |
| -------- | ----------- | ---------------- | ----------------------------------------------------------------------- |
| **Cervical** | C1-C8       | C1-C7            | **[[Tetraplegia]]/[[quadriplegia]]** possible; C1-C4 may require ventilator support |
| **Thoracic** | T1-T12      | T1-T12           | Paraplegia; intercostal and abdominal muscle loss                       |
| **Lumbar**   | L1-L5       | L1-L5            | Lower extremity deficits; conus medullaris at ~L1-L2                    |
| **Sacral**   | S1-S5       | S1-S5            | Bowel, bladder, and sexual dysfunction                                  |

> [!NOTE]
> The **conus medullaris** ends at approximately L1-L2 in adults. Below this point, injuries affect the **cauda equina (nerve roots)** - a bundle of lumbar and sacral nerve roots - which is coded separately as nerve root injury (S34.2xxx-S34.3xxx) or cauda equina syndrome ([[G83.4]]). **Cauda equina injuries are NOT spinal cord injuries.** Do not assign SCI codes or G82.xx (**[[paraplegia]]/[[quadriplegia]]**) for cauda equina pathology alone.

---

## ASIA Impairment Scale - Mapping to Complete vs. Incomplete

| AIS Grade | Description                                       | ICD-10-CM Completeness |
| --------- | ------------------------------------------------- | ---------------------- |
| **AIS A**     | No motor or sensory function below injury level   | **Complete**           |
| **AIS B**     | Sensory preserved below, no motor function        | **Incomplete**         |
| **AIS C**     | Motor preserved below; most key muscles < grade 3 | **Incomplete**         |
| **AIS D**     | Motor preserved below; most key muscles ≥ grade 3 | **Incomplete**         |
| **AIS E**     | Normal motor and sensory function                 | Incomplete / Normal    |

> [!TIP]
> ASIA grade is not always documented but maps directly to complete vs. incomplete code selection. If not in the record, query - or use "**Other incomplete lesion**" codes when the physician documents incomplete without specifying a syndrome.

---

## Section 1 - Traumatic SCI (TSCI)

Codes are located in **Chapter 19: Injury, Poisoning, and Certain Other Consequences of External Causes.** All TSCI codes require a **7th character extension.**

### 7th Character Guide

| 7th Char | Meaning                                | Inpatient Use                                                         |
| -------- | -------------------------------------- | --------------------------------------------------------------------- |
| **A**        | Initial encounter - active treatment   | **Default for most inpatient admissions**                             |
| **D**        | Subsequent encounter - routine healing | Rehab or follow-up admissions post-acute phase                        |
| **S**        | Sequela                                | Residual effect; the sequela condition is PDx, SCI coded as secondary |

> [!WARNING]
> Do **NOT** default to **D (subsequent)** simply because the patient was seen elsewhere first. If this admission involves active management (**surgery, IV steroids, monitoring, or stabilization**), use **7th character A.**

---

### Incomplete Lesion Syndrome Descriptions

| Syndrome                   | Clinical Picture                                                                                               | Code Series                     |
| -------------------------- | -------------------------------------------------------------------------------------------------------------- | ------------------------------- |
| **Central Cord Syndrome**  | Upper > lower extremity weakness; most common incomplete SCI; often hyperextension in elderly with spondylosis | **S14.12x**                     |
| **Anterior Cord Syndrome** | Loss of motor function + pain/temperature below injury; preserved **[[proprioception]]** and vibration         | **S14.13x / S24.13x**           |
| **Brown-Séquard Syndrome** | Ipsilateral motor/proprioception loss; contralateral pain/temperature loss; hemisection of cord                | **S14.14x / S24.14x**           |
| **Other Incomplete**       | Documented incomplete SCI not fitting above syndromes; includes posterior cord syndrome                        | **S14.15x / S24.15x / S34.12x** |

---

### Cervical Spinal Cord - S14

**Category S14** - Injury of nerves and spinal cord at neck level

#### S14.0 - Concussion / Edema of Cervical Cord

| Code         | Description                                                        |
| ------------ | ------------------------------------------------------------------ |
| **[[S14.0XXA]]** | Concussion and edema of cervical spinal cord, initial encounter    |
| **[[S14.0XXD]]** | Concussion and edema of cervical spinal cord, subsequent encounter |
| **[[S14.0XXS]]** | Concussion and edema of cervical spinal cord, sequela              |

#### S14.10x - Unspecified Cervical SCI (by level)

| Code         | Level                                                  |
| ------------ | ------------------------------------------------------ |
| **[[S14.101A]]** | Unspecified injury at C1 level, init                   |
| **[[S14.102A]]** | Unspecified injury at C2 level, init                   |
| **[[S14.103A]]** | Unspecified injury at C3 level, init                   |
| **[[S14.104A]]** | Unspecified injury at C4 level, init                   |
| **[[S14.105A]]** | Unspecified injury at C5 level, init                   |
| **[[S14.106A]]** | Unspecified injury at C6 level, init                   |
| **[[S14.107A]]** | Unspecified injury at C7 level, init                   |
| **[[S14.108A]]** | Unspecified injury at C8 level, init                   |
| **[[S14.109A]]** | Unspecified injury at unspecified cervical level, init |

#### S14.11x - Complete Lesion, Cervical

| Code         | Level                                               |
| ------------ | --------------------------------------------------- |
| **[[S14.111A]]** | Complete lesion at C1, init                         |
| **[[S14.112A]]** | Complete lesion at C2, init                         |
| **[[S14.113A]]** | Complete lesion at C3, init                         |
| **[[S14.114A]]** | Complete lesion at C4, init                         |
| **[[S14.115A]]** | Complete lesion at C5, init                         |
| **[[S14.116A]]** | Complete lesion at C6, init                         |
| **[[S14.117A]]** | Complete lesion at C7, init                         |
| **[[S14.118A]]** | Complete lesion at C8, init                         |
| **[[S14.119A]]** | Complete lesion at unspecified cervical level, init |

#### S14.12x - Central Cord Syndrome (Incomplete)

| Code         | Level                                                     |
| ------------ | --------------------------------------------------------- |
| **[[S14.121A]]** | Central cord syndrome at C1, init                         |
| **[[S14.122A]]** | Central cord syndrome at C2, init                         |
| **[[S14.123A]]** | Central cord syndrome at C3, init                         |
| **[[S14.124A]]** | Central cord syndrome at C4, init                         |
| **[[S14.125A]]** | Central cord syndrome at C5, init                         |
| **[[S14.126A]]** | Central cord syndrome at C6, init                         |
| **[[S14.127A]]** | Central cord syndrome at C7, init                         |
| **[[S14.128A]]** | Central cord syndrome at C8, init                         |
| **[[S14.129A]]** | Central cord syndrome at unspecified cervical level, init |

#### S14.13x - Anterior Cord Syndrome (Incomplete)

| Code         | Level                                                      |
| ------------ | ---------------------------------------------------------- |
| **[[S14.131A]]** | Anterior cord syndrome at C1, init                         |
| **[[S14.132A]]** | Anterior cord syndrome at C2, init                         |
| **[[S14.133A]]** | Anterior cord syndrome at C3, init                         |
| **[[S14.134A]]** | Anterior cord syndrome at C4, init                         |
| **[[S14.135A]]** | Anterior cord syndrome at C5, init                         |
| **[[S14.136A]]** | Anterior cord syndrome at C6, init                         |
| **[[S14.137A]]** | Anterior cord syndrome at C7, init                         |
| **[[S14.138A]]** | Anterior cord syndrome at C8, init                         |
| **[[S14.139A]]** | Anterior cord syndrome at unspecified cervical level, init |

#### S14.14x - Brown-Séquard Syndrome (Incomplete)

| Code         | Level                                                      |
| ------------ | ---------------------------------------------------------- |
| **[[S14.141A]]** | Brown-Séquard syndrome at C1, init                         |
| **[[S14.142A]]** | Brown-Séquard syndrome at C2, init                         |
| **[[S14.143A]]** | Brown-Séquard syndrome at C3, init                         |
| **[[S14.144A]]** | Brown-Séquard syndrome at C4, init                         |
| **[[S14.145A]]** | Brown-Séquard syndrome at C5, init                         |
| **[[S14.146A]]** | Brown-Séquard syndrome at C6, init                         |
| **[[S14.147A]]** | Brown-Séquard syndrome at C7, init                         |
| **[[S14.148A]]** | Brown-Séquard syndrome at C8, init                         |
| **[[S14.149A]]** | Brown-Séquard syndrome at unspecified cervical level, init |

#### S14.15x - Other Incomplete Lesion, Cervical

| Code         | Level                                                       |
| ------------ | ----------------------------------------------------------- |
| **[[S14.151A]]** | Other incomplete lesion at C1, init                         |
| **[[S14.152A]]** | Other incomplete lesion at C2, init                         |
| **[[S14.153A]]** | Other incomplete lesion at C3, init                         |
| **[[S14.154A]]** | Other incomplete lesion at C4, init                         |
| **[[S14.155A]]** | Other incomplete lesion at C5, init                         |
| **[[S14.156A]]** | Other incomplete lesion at C6, init                         |
| **[[S14.157A]]** | Other incomplete lesion at C7, init                         |
| **[[S14.158A]]** | Other incomplete lesion at C8, init                         |
| **[[S14.159A]]** | Other incomplete lesion at unspecified cervical level, init |

---

### Thoracic Spinal Cord - S24

**Note:** Thoracic SCI codes group by ranges (T1-T6, T7-T10, T11-T12) rather than individual vertebral levels.

#### S24.0 - Concussion / Edema of Thoracic Cord

| Code             | Description                                                     |
| ---------------- | --------------------------------------------------------------- |
| **[[S24.0XXA]]** | Concussion and edema of thoracic spinal cord, initial encounter |

#### S24.10x - Unspecified Thoracic SCI

| Code         | Level Range                                            |
| ------------ | ------------------------------------------------------ |
| **[[S24.101A]]** | Unspecified injury at T1-T6 level, init                |
| **[[S24.102A]]** | Unspecified injury at T7-T10 level, init               |
| **[[S24.103A]]** | Unspecified injury at T11-T12 level, init              |
| **[[S24.104A]]** | Unspecified injury at unspecified thoracic level, init |

#### S24.11x - Complete Lesion, Thoracic

| Code         | Level Range                                         |
| ------------ | --------------------------------------------------- |
| **[[S24.111A]]** | Complete lesion at T1-T6, init                      |
| **[[S24.112A]]** | Complete lesion at T7-T10, init                     |
| **[[S24.113A]]** | Complete lesion at T11-T12, init                    |
| **[[S24.114A]]** | Complete lesion at unspecified thoracic level, init |

#### S24.13x - Anterior Cord Syndrome, Thoracic

| Code         | Level Range                                       |
| ------------ | ------------------------------------------------- |
| **[[S24.131A]]** | Anterior cord syndrome at T1-T6, init             |
| **[[S24.132A]]** | Anterior cord syndrome at T7-T10, init            |
| **[[S24.133A]]** | Anterior cord syndrome at T11-T12, init           |
| **[[S24.134A]]** | Anterior cord syndrome at unspecified level, init |

#### S24.14x - Brown-Séquard Syndrome, Thoracic

| Code         | Level Range                                       |
| ------------ | ------------------------------------------------- |
| **[[S24.141A]]** | Brown-Séquard syndrome at T1-T6, init             |
| **[[S24.142A]]** | Brown-Séquard syndrome at T7-T10, init            |
| **[[S24.143A]]** | Brown-Séquard syndrome at T11-T12, init           |
| **[[S24.144A]]** | Brown-Séquard syndrome at unspecified level, init |

#### S24.15x - Other Incomplete Lesion, Thoracic

| Code         | Level Range                                        |
| ------------ | -------------------------------------------------- |
| **[[S24.151A]]** | Other incomplete lesion at T1-T6, init             |
| **[[S24.152A]]** | Other incomplete lesion at T7-T10, init            |
| **[[S24.153A]]** | Other incomplete lesion at T11-T12, init           |
| **[[S24.154A]]** | Other incomplete lesion at unspecified level, init |

---

### Lumbar / Sacral Spinal Cord - S34

> [!NOTE]
> The spinal cord ends at ~L1-L2. S34 SCI codes apply to the conus medullaris and upper **[[lumbar]]** cord. Below L2, use cauda equina (**[[S34.3XXA]]**) or nerve root codes - **NOT** spinal cord injury codes.

#### S34.01-S34.02 - Concussion / Edema

| Code             | Description                                      |
| ---------------- | ------------------------------------------------ |
| **[[S34.01XA]]** | Concussion and edema of lumbar spinal cord, init |
| **[[S34.02XA]]** | Concussion and edema of sacral spinal cord, init |

#### S34.10x - Unspecified Lumbar SCI

| Code         | Level                                                |
| ------------ | ---------------------------------------------------- |
| **[[S34.101A]]** | Unspecified injury to L1 level, init                 |
| **[[S34.102A]]** | Unspecified injury to L2 level, init                 |
| **[[S34.103A]]** | Unspecified injury to L3 level, init                 |
| **[[S34.104A]]** | Unspecified injury to L4 level, init                 |
| **[[S34.105A]]** | Unspecified injury to L5 level, init                 |
| **[[S34.109A]]** | Unspecified injury to unspecified lumbar level, init |

#### S34.11x - Complete Lesion, Lumbar

| Code         | Level                                             |
| ------------ | ------------------------------------------------- |
| **[[S34.111A]]** | Complete lesion of L1 level, init                 |
| **[[S34.112A]]** | Complete lesion of L2 level, init                 |
| **[[S34.113A]]** | Complete lesion of L3 level, init                 |
| **[[S34.114A]]** | Complete lesion of L4 level, init                 |
| **[[S34.115A]]** | Complete lesion of L5 level, init                 |
| **[[S34.119A]]** | Complete lesion of unspecified lumbar level, init |

#### S34.12x - Incomplete Lesion, Lumbar

| Code         | Level                                               |
| ------------ | --------------------------------------------------- |
| **[[S34.121A]]** | Incomplete lesion of L1 level, init                 |
| **[[S34.122A]]** | Incomplete lesion of L2 level, init                 |
| **[[S34.123A]]** | Incomplete lesion of L3 level, init                 |
| **[[S34.124A]]** | Incomplete lesion of L4 level, init                 |
| **[[S34.125A]]** | Incomplete lesion of L5 level, init                 |
| **[[S34.129A]]** | Incomplete lesion of unspecified lumbar level, init |

#### S34.13x - Sacral Spinal Cord

| Code         | Description                                    |
| ------------ | ---------------------------------------------- |
| **[[S34.131A]]** | Complete lesion of sacral spinal cord, init    |
| **[[S34.132A]]** | Incomplete lesion of sacral spinal cord, init  |
| **[[S34.139A]]** | Unspecified lesion of sacral spinal cord, init |

#### S34.3 - Cauda Equina (Not True SCI)

| Code             | Description                               |
| ---------------- | ----------------------------------------- |
| **[[S34.3XXA]]** | Injury of cauda equina, initial encounter |

---

### TSCI - Common Mechanisms / Causes

| Mechanism                     | Notes                                                                     | Typical External Cause Code(s) |
| ----------------------------- | ------------------------------------------------------------------------- | ------------------------------ |
| **Motor vehicle collision (MVC)** | Most common overall TSCI cause                                            | V00-V99                        |
| **Falls**                         | Leading cause in adults 65+; ground-level falls in elderly w/ spondylosis | W00-W19                        |
| **Diving / water accidents**      | Cervical hyperflexion into shallow water                                  | W65-W74                        |
| **Sports / recreation**           | Football, gymnastics, equestrian                                          | W00-W19, Y93.xx activity code  |
| **Gunshot wound / assault**       | High-energy penetrating injury                                            | X93-X95, Y09                   |
| **Struck by / against object**    | Industrial, construction                                                  | W20-W22                        |
| **Intentional self-harm**         |                                                                           | X71-X83                        |

> [!TIP]
> For inpatient TSCI, assign an **external cause of injury** (V/W/X/Y) and **place of occurrence** (Y92.xx) as secondary codes. **Activity codes** (Y93.xx) apply when the activity at time of injury is documented.

---

## Section 2 - Non-Traumatic SCI (NTSCI)

**NTSCI** is coded from **Chapter 6 (Diseases of the Nervous System)** or the chapter housing the causative disease. The functional result - [[paraplegia]] or [[tetraplegia]] - is captured with **G82.xx** as an **additional code**, not the principal diagnosis.

> [!IMPORTANT]
> Always sequence the **underlying causative condition first.** G82.xx and G95.xx are secondary/additional unless the provider specifically documents the functional state as the focus of the admission. Do **NOT** assign G82.xx if paralysis is inherent to the coded condition (e.g., **[[G35.D]]** Multiple Sclerosis).

---

### G82 - Paraplegia and Tetraplegia / Quadriplegia

#### G82.2x - Paraplegia (lower limb paralysis)

| Code       | Description             |
| ---------- | ----------------------- |
| **[[G82.20]]** | Paraplegia, unspecified |
| **[[G82.21]]** | Paraplegia, complete    |
| **[[G82.22]]** | Paraplegia, incomplete  |

#### G82.5x - Tetraplegia / Quadriplegia (all four limbs)

| Code       | Description                    |
| ---------- | ------------------------------ |
| **[[G82.50]]** | Quadriplegia, unspecified      |
| **[[G82.51]]** | Quadriplegia, C1-C4 complete   |
| **[[G82.52]]** | Quadriplegia, C1-C4 incomplete |
| **[[G82.53]]** | Quadriplegia, C5-C7 complete   |
| **[[G82.54]]** | Quadriplegia, C5-C7 incomplete |

> [!NOTE]
> G82.xx codes do **NOT** specify a mechanism. They describe functional level. They are used as **additional** codes after the causative condition for **NTSCI**. For **TSCI**, use the S14/S24/S34 codes instead - the **[[quadriplegia]]/[[paraplegia]]** code may be added additionally to capture functional severity.

---

### G95 - Other Diseases of Spinal Cord (NTSCI Primary Codes)

| Code       | Description                                                                                          |
| ---------- | ---------------------------------------------------------------------------------------------------- |
| **[[G95.0]]**  | Syringomyelia and syringobulbia                                                                      |
| **[[G95.11]]** | Acute infarction of spinal cord (arterial or venous)                                                 |
| **[[G95.19]]** | Other vascular myelopathies (incl. edema of spinal cord, hematomyelia, subacute necrotic myelopathy) |
| **[[G95.20]]** | Unspecified cord compression                                                                         |
| **[[G95.29]]** | Other cord compression (from tumor, abscess, spondylosis, etc.)                                      |
| **[[G95.81]]** | Conus medullaris syndrome                                                                            |
| **[[G95.89]]** | Other specified diseases of spinal cord (incl. radiation myelopathy, drug-induced myelopathy)        |
| **[[G95.9]]**  | Disease of spinal cord, unspecified                                                                  |

---

### Common NTSCI Underlying Conditions - Sequencing Guide

| Condition                                            | Sequence First (PDx)               | Additional Code(s)                      |
| ---------------------------------------------------- | ---------------------------------- | --------------------------------------- |
| **Degenerative cervical myelopathy (spondylosis)**   | **[[M47.11]]-[[M47.16]]**          | [[G82.51]]-[[G82.54]]                   |
| **Disc herniation with myelopathy, cervical**        | **[[M50.00]]-[[M50.02]]**          | G82.5x if quadriplegia documented       |
| **Disc herniation with myelopathy, thoracic/lumbar** | **[[M51.04]]-[[M51.06]]**          | G82.2x if paraplegia documented         |
| **Spinal stenosis with cord compression**            | **[[M48.01]]-[[M48.08]]**          | [[G95.20]] or [[G95.29]], G82.xx        |
| **Epidural abscess with cord compression**           | **[[G06.1]]**                      | [[G95.29]], G82.xx                      |
| **Acute spinal cord infarction**                     | **[[G95.11]]**                     | G82.xx                                  |
| **Spinal AVM with myelopathy**                       | **[[Q06.3]] or [[I67.1]]**         | [[G95.19]]                              |
| **Transverse myelitis (idiopathic/acute)**           | **[[G37.3]]**                      | G82.xx if paraplegia documented         |
| **Neoplasm compressing spinal cord**                 | **[[Neoplasm]] code (C/D series)** | [[G95.29]], G82.xx                      |
| **Radiation myelopathy**                             | **[[G95.89]]**                     | Y84.2 (external cause - radiation)      |
| **Syringomyelia**                                    | **[[G95.0]]**                      | G82.xx if functional deficit documented |
| **Multiple sclerosis**                               | **[[G35.D]]**                      | Do NOT separately add G82.xx            |
| **Neuromyelitis optica (NMO)**                       | **[[G36.0]]**                      | G82.xx                                  |
| **B12 deficiency / subacute combined degeneration**  | **[[E53.8]] + [[G32.0]]**          | G82.xx                                  |

---

### Common Causes of NTSCI

| Category | Specific Causes |
|---|---|
| **Degenerative** | Cervical spondylotic **[[myelopathy]]**; thoracic/lumbar stenosis; OPLL (**[[ossification]]** of posterior longitudinal ligament) |
| **Disc Disease** | Large central **[[cervical disc herniation]]** causing acute cord compression |
| **Vascular** | Anterior spinal artery infarction (sudden painless paraplegia); AVM; **[[epidural]]** hematoma; aortic surgery complication |
| **Infectious** | Epidural abscess (most common organism: *S. aureus*, MRSA); Pott disease (TB spondylitis); viral **[[myelitis]]** (HIV, HSV, EBV, COVID-19) |
| **Inflammatory** | **[[Transverse myelitis]]**; MS; **[[neuromyelitis]]** optica (NMO/Devic disease) |
| **Neoplastic** | Primary spinal cord tumors (**[[ependymoma]]**, **[[astrocytoma]]**); spinal metastases (lung, breast, prostate most common) |
| **Iatrogenic** | Post-surgical **[[ischemia]]**; epidural hematoma post-procedure; radiation myelopathy; intrathecal drug error |
| **Metabolic / Nutritional** | Subacute combined degeneration (B12 deficiency); copper deficiency myelopathy |
| **Structural / Congenital** | **[[syringomyelia]]**; Chiari malformation; tethered cord syndrome |

---

### G83 - Cauda Equina Syndrome

| Code          | Description           |
| ------------- | --------------------- |
| **[[G83.4]]** | Cauda equina syndrome |

Use for both **traumatic** and **non-traumatic** causes. Sequence the underlying cause first (**disc [[herniation]], spinal stenosis, [[abscess]], [[tumor]]**) and assign **[[G83.4]]** as an additional code. Do not conflate with SCI or assign G82.xx alongside **[[G83.4]]** for cauda equina alone.

---

## Section 3 - Associated Conditions & Complication Codes

These codes appear frequently alongside SCI diagnoses and often function as CCs or MCCs:

| Condition                           | Code(s)                 | CC/MCC        |
| ----------------------------------- | ----------------------- | ------------- |
| [[neurogenic]] bladder, unspecified | **[[N31.9]]**               | CC            |
| Neurogenic bowel                    | **[[K59.2]]**               | CC            |
| Autonomic dysreflexia               | **[[G90.4]]**               | **MCC**       |
| Pressure injury, Stage 3            | **L89.xx3**                 | **MCC**       |
| Pressure injury, Stage 4            | **L89.xx4**                 | **MCC**       |
| Acute respiratory failure           | **[[J96.00]]-[[J96.01]]**   | **MCC**       |
| DVT - lower extremity               | **[[I82.401]]-[[I82.499]]** | CC/MCC varies |
| UTI                                 | **[[N39.0]]**               | CC            |
| Sepsis                              | **A41.xx**                  | **MCC**       |
| Muscle spasticity                   | **[[R25.2]]**               | -             |
| Urinary retention                   | **[[R33.9]]**               | -             |
| Constipation (severe/obstipation)   | **[[K59.00]]-[[K59.09]]**   | -             |

> [!WARNING]
> **[[G90.4]] Autonomic dysreflexia** is an **MCC** and a clinical emergency. It occurs in cervical and upper thoracic SCI (**typically above T6**). Triggers include **bladder distension**, **bowel impaction**, pressure injuries, and skin irritation. Document and code whenever it appears in the record - it carries DRG weight and quality metrics implications.

---

## Section 4 - Common Procedures

### Surgical (ICD-10-PCS Root Operations)

| Procedure                                              | Root Operation / Code Series      | Notes                                                             |
| ------------------------------------------------------ | --------------------------------- | ----------------------------------------------------------------- |
| **Anterior cervical [[discectomy]] & fusion (ACDF)**   | Fusion - 0RG6x                    | Level(s) must be documented                                       |
| **Posterior cervical [[fusion]] / stabilization**      | Fusion - 0RGx                     | With or without instrumentation                                   |
| **Posterior cervical decompression ([[laminectomy]])** | Release - 01NWxZZ                 | Decompressing the spinal cord                                     |
| **Thoracic/lumbar [[laminectomy]]**                    | Excision or Release - 0SNx / 01Nx | Root operation depends on intent                                  |
| **Halo ring / traction device**                        | Insertion - 0JHx                  | External fixation for cervical instability                        |
| **[[Tracheostomy]]**                                   | Bypass - 0B11                     | Required for high cervical SCI (C1-C4); impacts DRG significantly |
| **Mechanical ventilation initiation**                  | 5A1935Z / 5A1945Z                 | Duration drives MCC level; track hours precisely                  |
| **Intrathecal baclofen pump insertion**                | Insertion - 3E0R3GC               | Spasticity management (often PM&R)                                |
| **Feeding tube / PEG placement**                       | Insertion - 0DH                   | For patients unable to PO safely                                  |
| **Cystoscopy / bladder management**                    | 0TJBxZZ                           | [[Neurogenic]] bladder evaluation                                 |
| **Drainage of epidural abscess**                       | Drainage - 00WVx                  | Emergency decompression for NTSCI from abscess                    |

### Non-Surgical Management

- **IV Methylprednisolone** - historically used in acute TSCI (NASCIS protocols); current practice is institution-dependent; code steroid administration when documented
- **Foley catheter** - routine in SCI with neurogenic bladder; document and code urinary retention/neurogenic bladder as comorbidity
- **DVT prophylaxis** - pharmacological (heparin, LMWH) and mechanical (sequential compression devices); DVT is a major SCI complication
- **Cervical traction** - Gardner-Wells tongs, halo traction pre-surgical
- **Respiratory support** - CPAP, BiPAP, mechanical ventilation (track hours for MCC/DRG)
- **Skin protection** - pressure-relieving surfaces; document and code any pressure injuries present

---

## Section 5 - DRG Considerations

| Scenario                                          | Expected DRG(s)                                                  |
| ------------------------------------------------- | ---------------------------------------------------------------- |
| **SCI - medical management only, no OR procedure**    | DRG 052-054 (Spinal Disorders & Injuries w MCC/CC/none)          |
| **SCI - spinal fusion or decompression**              | DRG 028-030 (Spinal Procedures w MCC/CC/none)                    |
| **TSCI with multiple significant traumatic injuries** | DRG 963-965 (Other Multiple Significant Trauma)                  |
| **SCI + tracheostomy + mechanical ventilation**       | DRG 003-004 (ECMO or Trach w MV 96+ hrs)                         |
| **SCI + tracheostomy w/o prolonged ventilation**      | DRG 011-013 (Tracheostomy for Conditions Except Face/Mouth/Neck) |

> [!WARNING]
> **Mechanical ventilation ≥96 hours** dramatically increases **DRG** weight and may shift the entire grouping. Ensure vent start and stop times are documented and that PCS procedure codes reflect accurate duration (**5A1935Z = <24 hrs, 5A1945Z = 24-96 hrs, 5A1955Z = >96 hrs**).

> [!TIP]
> SCI patients admitted to an **IRF (Inpatient Rehabilitation Facility)** are qualifying admissions under CMS's 60% rule (**SCI is a qualifying condition**). The G82.xx functional codes are important for **IRF-PAI classification** and **CMG** (Case Mix Group) assignment - always capture them.

---

## Section 6 - Coding Examples

---

### Example 1 - TSCI: Cervical, Complete, MVA

**Scenario:** 38-year-old male admitted after high-speed head-on collision. C5-C6 fracture-dislocation with complete quadriplegia at C5 level. Undergoes ACDF C5-C6 on day 2.

| Role      | Code                                         | Description                                                        |
| --------- | -------------------------------------------- | ------------------------------------------------------------------ |
| **PDx**       | [[S14.115A]]                                 | Complete lesion at C5 level of cervical spinal cord, init          |
| **SDx**       | [[S12.401A]]                                 | Unspecified nondisplaced fracture of fifth cervical vertebra, init |
| **SDx**       | [[G82.53]]                                   | Quadriplegia, C5-C7 complete                                       |
| **Ext Cause** | [[V49.40XA]]                                 | Car occupant injured in collision, init                            |
| **Place**     | [[Y92.414]]                                  | Local residential street (if applicable)                           |
| **Procedure** | Cervical fusion (0RG6070 per approach/level) |                                                                    |

**Expected DRG:** 028-030 (Spinal Procedures)

---

### Example 2 - TSCI: Thoracic, Complete, Fall from Height

**Scenario:** 26-year-old male falls from scaffolding at a construction site. T6 burst fracture with complete paraplegia. Managed medically with TLSO brace. DVT noted at day 3.

| Role      | Code         | Description                                                  |
| --------- | ------------ | ------------------------------------------------------------ |
| **PDx**       | [[S24.111A]] | Complete lesion at T1-T6 level of thoracic spinal cord, init |
| **SDx**       | [[S22.061A]] | Stable burst fracture of sixth thoracic vertebra, init       |
| **SDx**       | [[G82.21]]   | Paraplegia, complete                                         |
| **SDx**       | [[I82.401]]  | Acute DVT of unspecified deep vein of right lower extremity  |
| **Ext Cause** | [[W17.89XA]] | Other fall from one level to another, init                   |
| **Place**     | [[Y92.61]]   | Building under construction as place of occurrence           |
| **Activity**  | [[Y93.89]]   | Activity: construction/other work                            |

**Expected DRG:** 052-054 or 963-965 (depending on injury complexity and CC/MCC grouping)

---

### Example 3 - TSCI: Central Cord Syndrome, Elderly, Fall

**Scenario:** 74-year-old female with known **[[cervical spondylosis]]**. Ground-level fall, **[[hyperextension]]** injury. MRI shows central cord syndrome at C3-C4. No fracture. Incomplete quadriplegia. Managed medically.

| Role      | Code                                                                                             | Description                                                               |
| --------- | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------- |
| **PDx**       | [[S14.123A]]                                                                                     | Central cord syndrome at C3 level, init                                   |
| **SDx**       | [[M47.12]]                                                                                       | Spondylosis with myelopathy, cervical region (pre-existing)               |
| **SDx**       | [[G82.54]]                                                                                       | Quadriplegia, C5-C7 incomplete *(or C1-C4 per neurologist documentation)* |
| **Ext Cause** | [[W19.XXXA]]                                                                                     | Unspecified fall, init                                                    |
| **POA Note**  | The spondylosis is POA = Y; the acute central cord injury is POA = Y (occurred before admission) |                                                                           |

**Expected DRG:** 052-054 (Spinal Disorders & Injuries)

> [!NOTE]
> **Central cord syndrome** in elderly with underlying **[[spondylosis]]** is one of the most common incomplete cervical SCI patterns. The traumatic code drives sequencing; the **spondylosis** is an additional code documenting the contributing condition.

---

### Example 4 - NTSCI: Cervical Spondylotic Myelopathy with Decompression

**Scenario:** 65-year-old female with progressive cervical myelopathy from multilevel stenosis (C3-C6). Admitted for posterior cervical decompressive laminectomy. Post-op documentation: **C5-C7 incomplete quadriplegia**.

| Role          | Code                                                         | Description                                  |
| ------------- | ------------------------------------------------------------ | -------------------------------------------- |
| **PDx**       | [[M47.12]]                                                   | Spondylosis with myelopathy, cervical region |
| **SDx**       | [[G95.29]]                                                   | Other cord compression                       |
| **SDx**       | [[G82.54]]                                                   | Quadriplegia, C5-C7 incomplete               |
| **Procedure** | Posterior cervical laminectomy (Release - 01NW0ZZ per level) |                                              |

**Expected DRG:** 028-030 (Spinal Procedures)

---

### Example 5 - NTSCI: Spinal Cord Infarction (Anterior Spinal Artery)

**Scenario:** 61-year-old male develops sudden-onset complete paraplegia during open aortic aneurysm repair. MRI post-op shows T8-T10 anterior spinal artery infarction. Documented as complete paraplegia.

| Role          | Code       | Description                                                  |
| ------------- | ---------- | ------------------------------------------------------------ |
| **PDx**       | [[G95.11]] | Acute infarction of spinal cord                              |
| **SDx**       | [[G82.21]] | Paraplegia, complete                                         |
| **SDx**       | [[I71.4]]  | Abdominal aortic aneurysm w/o rupture (underlying condition) |
| **Ext Cause** | [[Y83.1]]  | Surgical operation as external cause of complication         |

**Expected DRG:** 052-054 (Spinal Disorders & Injuries)

---

### Example 6 - NTSCI: Epidural Abscess with Cord Compression

**Scenario:** 49-year-old IVDU admitted with fever, back pain, and new lower extremity weakness. MRI: T3-T5 epidural abscess with cord compression. Blood cx: MSSA. Taken to OR for emergency laminectomy and drainage. Post-op incomplete paraplegia.

| Role          | Code                                   | Description                                                                 |
| ------------- | -------------------------------------- | --------------------------------------------------------------------------- |
| **PDx**       | [[G06.1]]                              | Intraspinal [[abscess]] and [[granuloma]]                                   |
| **SDx**       | [[A49.01]]                             | MSSA infection as cause of disease (or [[A41.01]] if [[sepsis]] documented) |
| **SDx**       | [[G95.29]]                             | Other cord compression                                                      |
| **SDx**       | [[G82.22]]                             | [[Paraplegia]], incomplete                                                  |
| **Procedure** | Drainage, posterior approach (00WVx0Z) |                                                                             |

**Expected DRG:** 028-030 (Spinal Procedures)

---

### Example 7 - Sequela Coding: Pressure Ulcer in Prior TSCI Patient

**Scenario:** Patient with C6 complete SCI from MVA 14 months ago now admitted for Stage 3 sacral pressure injury. No active SCI management during this admission.

| Role    | Code         | Description                                                    |
| ------- | ------------ | -------------------------------------------------------------- |
| **PDx** | [[L89.153]]  | Pressure ulcer of sacral region, Stage 3                       |
| **SDx** | [[S14.116S]] | Complete lesion at C6 level, **sequela** ← 7th character **S** |
| **SDx** | [[G82.53]]   | Quadriplegia, C5-C7 complete                                   |
| **SDx** | [[N31.9]]    | Neurogenic bladder (chronic)                                   |

**Expected DRG:** Skin graft DRG if taken to OR; wound care DRG if managed medically

> [!WARNING]
> When coding sequelae of SCI (7th character S), the residual condition (pressure ulcer, neurogenic bladder, spasticity) becomes the PDx or focus code. The SCI sequela code is sequenced **after** the current condition being treated.

---

## Section 7 - Coding Pitfalls

> [!WARNING] **Pitfall 1 - Wrong 7th Character: D Instead of A**
> Active inpatient treatment (**surgical intervention, IV medications, monitoring of an acute SCI**) always uses **7th character A** - even if the patient was first seen elsewhere. "Subsequent" (**D**) applies only during routine healing at a follow-up encounter. This is one of the most common audit failures on TSCI claims.

> [!WARNING] **Pitfall 2 - Coding the Vertebral Fracture as PDx Instead of the SCI**
> When both a vertebral fracture and a spinal cord injury coexist, the **SCI is typically the PDx** if the neurological deficit is the primary driver of admission and treatment. The fracture is secondary. Reverse only if surgery is performed exclusively for the fracture and the SCI is stable and secondary.

> [!WARNING] **Pitfall 3 - Missing G82.xx for NTSCI**
> Forgetting to assign G82.xx (**paraplegia/quadriplegia**) as an additional code in **NTSCI** cases. These functional severity codes affect DRG grouping, IRF qualification documentation, quality metrics, and payer review. If the physician documents any degree of paralysis, capture it.

> [!WARNING] **Pitfall 4 - Confusing Cauda Equina with Spinal Cord Injury**
> The cauda equina is a bundle of nerve roots, not the spinal cord. **[[G83.4]]** (cauda equina syndrome) and **[[S34.3XXA]]** (injury of **cauda equina**) are NOT SCI codes. Do not assign G82.xx (**quadriplegia/paraplegia**) with cauda equina diagnoses alone. Do not assign S14/S24/S34 SCI codes for cauda equina pathology.

> [!WARNING] **Pitfall 5 - Sequencing Error: G95.xx or G82.xx as PDx in NTSCI**
> The underlying etiology **(stenosis, abscess, tumor, disc herniation**) should be sequenced as PDx in most NTSCI cases. G95.xx and G82.xx function as secondary/additional codes reflecting the mechanism and functional result. Sequencing these as PDx will trigger coding queries and potential DRG shift.

> [!WARNING] **Pitfall 6 - Missing Neurogenic Bladder and Neurogenic Bowel**
> **[[N31.9]]** and **[[K59.2]]** are almost universally clinically relevant in SCI admissions - affecting **[[catheter]]** management, **UTI** risk, and nursing care. Both carry **CC-level weight.** Do not overlook them. Check the nursing notes and **H&P** if not in the physician's narrative.

> [!WARNING] **Pitfall 7 - Missing Autonomic Dysreflexia [[G90.4]]**
> **[[Autonomic dysreflexia]]** is an **MCC** and a potentially life-threatening event in cervical or upper thoracic SCI (above T6). It may be documented in nursing notes as hypertensive episodes, profuse sweating, pounding headache, or bradycardia - even if not explicitly named. Flag for provider documentation and query when signs are present without the diagnosis.

> [!WARNING] **Pitfall 8 - POA Indicator Errors on NTSCI**
> If the **NTSCI** (**e.g., cord compression from surgical epidural hematoma**) developed *during* the hospitalization, POA = **N**. If the **SCI** was present and documented at admission, **POA** = **Y**. Incorrect **POA** assignment can trigger HAC flags, quality review, and payer denials. Review the timeline of onset carefully - especially for post-surgical SCI.

> [!WARNING] **Pitfall 9 - Defaulting to Unspecified Level When the Level Is Documented**
> Do not assign **[[S14.109A]], [[S24.104A]]**, or **[[S34.109A]]** when neuroimaging or the neurologist's note specifies the cord level. MRI reports, neurosurgery notes, and **PM&R** assessments almost always document level. Unspecified codes draw audit scrutiny and can reduce DRG accuracy. Query if the clinical team has not specified.

> [!WARNING] **Pitfall 10 - Assuming Completeness Without Documentation**
> Do **not** assume **AIS** grade A (complete) simply because the patient appears deeply impaired. **Incomplete lesions** can be clinically subtle at admission. If the provider does not document **complete** vs. **incomplete**, use "**Other incomplete lesion**" codes or query. Do **not** code "**complete**" without explicit provider documentation of absent motor and sensory function below the level.

---

## Related Notes

- Cauda Equina Syndrome - [[G83.4]]
- Autonomic Dysreflexia - [[G90.4]]
- Muscle Spasticity in PM&R
- PM&R Z Codes
- CC/MCC Table - PM&R
- IRF Classification & Criteria
- MEAT Criteria - Paralysis Patients

---

<small>
**Sources:**
 ^1^ ICD-10-CM Official Guidelines for Coding and Reporting, FY2025. Section I.C.19 - Injury, Poisoning and Certain Other Consequences of External Causes; 7th Character Extensions. CMS. https://www.cms.gov/files/document/fy-2025-icd-10-cm-coding-guidelines.pdf
^2^ ICD-10-CM Official Guidelines for Coding and Reporting, FY2025. Section I.C.6 - Diseases of the Nervous System; Paralytic Conditions (G82). CMS.
^3^ American Spinal Injury Association (ASIA). International Standards for Neurological Classification of Spinal Cord Injury (ISNCSCI), Revised 2019. https://www.asia-spinalinjury.org/
^4^ CMS MS-DRG Grouper, Version 41 (FY2024). MDC 01 (Nervous System), MDC 08 (Musculoskeletal), MDC 21 (Injuries); DRG 028-030, 052-054, 963-965, 003-004. https://www.cms.gov/medicare/payment/prospective-payment-systems/acute-inpatient-pps/ms-drg-classifications-and-software
^5^ AHA Coding Clinic for ICD-10-CM/PCS. Various applicable issues: 7th character assignment in active treatment; NTSCI sequencing; cauda equina vs. SCI distinction.
^6^ CMS. Inpatient Rehabilitation Facility Prospective Payment System (IRF PPS); IRF-PAI Classification Manual, FY2024. Qualifying conditions - SCI. https://www.cms.gov/medicare/payment/prospective-payment-systems/inpatient-rehabilitation-facility
^7^ National Spinal Cord Injury Statistical Center (NSCISC). Spinal Cord Injury Facts and Figures at a Glance, 2023. University of Alabama at Birmingham. https://www.nscisc.uab.edu/
</small>