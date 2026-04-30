---
tags:
  - PMR
  - amputation
  - residual-limb
  - prosthetics
  - rehabilitation
  - inpatient
  - profee
  - LAKA
  - BAKA
title: Amputee Care – PMR Inpatient Coding Reference
specialty: Physical Medicine and Rehabilitation
topic: Amputation and Residual Limb Management
created: 2026-04-29
status: active
principal_dx_typical: "[[Z47.81]]"
ms_drg_rehab_with_cc_mcc: 945
ms_drg_rehab_without: 946
ms_drg_aftercare_mcc: 559
ms_drg_aftercare_cc: 560
ms_drg_aftercare_no_ccmcc: 561
gmlos_drg945: 10.2
gmlos_drg946: 7.4
gmlos_drg559: 4.9
gmlos_drg560: 3.6
gmlos_drg561: 2.3
coder_note: Inpatient profee reference – MCW Inpatient Abstraction Team
hcc_note: Z89 status codes are non-HCC; underlying etiology codes carry HCC weight
---

# Amputee Care – PMR Inpatient Coding Reference

---

## 🏥 Clinical Overview

> **What is amputee rehab?** When a patient undergoes amputation of a limb — whether from [[diabetes]], peripheral vascular disease (**PVD**), trauma, cancer, or infection — they typically transfer to an **inpatient rehabilitation facility (IRF)** or a **PMR-managed acute care unit** for structured recovery. The PMR physician oversees the medical and functional rehabilitation process. Your job as the coder is to accurately capture *why* the patient is there, *what limb was amputated*, *at what level*, *which side*, and *what complications or comorbidities exist*.

### The Four Phases of Amputee Rehabilitation (Clinical Context for Coders)

Understanding these phases helps you recognize what services are being documented and what codes are appropriate for each encounter.

**Phase 1 – Pre-Prosthetic / Acute Post-Op**
The residual limb (also called the *stump* in older documentation; modern terminology prefers *residual limb*) is healing. The PMR team focuses on:
- Wound care and stump shaping (**compression wrapping, shrinker socks**)
- Edema management
- Strengthening the residual limb and contralateral extremities
- Contracture prevention (**e.g., keeping the hip extended after above-knee amputation**)
- Pain management including phantom limb pain

**Phase 2 – Prosthetic Fitting**
Once the residual limb volume has stabilized (**usually 6–8 weeks post-op**), the patient is fit for a prosthesis by a prosthetist. The PMR physician prescribes the prosthesis.

**Phase 3 – Prosthetic Training**
The patient learns to don/doff the **prosthesis**, perform weight-bearing, and progress to ambulation or upper extremity function. This is often when inpatient rehab admission occurs.

**Phase 4 – Community Reintegration**
Outpatient therapy, advanced gait training, return to **work/ADLs**.

> [!tip]
> **Coder Tip:** Most inpatient PMR amputee admissions are during Phase 1 (**acute post-amputation wound management and pre-prosthetic conditioning**) or Phase 3 (**prosthetic training after fitting**). The *principal diagnosis* and the *level/laterality of amputation* are your most critical coding decisions.

---

## 🔑 Principal Diagnosis Selection – Inpatient PMR Amputee

### Z47.81 – Encounter for Orthopedic Aftercare Following Surgical Amputation

> **This is your go-to principal diagnosis for a patient admitted to inpatient PMR following amputation surgery.**

**[[Z47.81]]** — *Encounter for orthopedic aftercare following surgical amputation*

- Used when the patient is admitted **after** the amputation surgery has already been performed at another facility or during a prior admission
- The amputation itself is NOT the reason for *this* admission — the rehabilitation is
- Sequence **[[Z47.81]]** as the **principal diagnosis**
- Always add the applicable Z89.xxx code(s) as additional diagnoses to specify the level and laterality of the amputation
- Add the underlying condition (**e.g., diabetes, PVD**) as an additional diagnosis

**Do NOT use Z47.81 if:**
- The patient is still in their acute amputation admission (**use the wound/injury/disease code that caused the amputation as principal diagnosis**)
- The patient is admitted for a complication of the residual limb (**use T87.xx as principal diagnosis instead**)

---

## 📋 ICD-10-CM Code Reference

---

### Z89 – Acquired Absence of Limb

> **The Z89 category captures the patient's amputation status.** These are NOT used as the principal diagnosis during a rehab admission — they are *additional diagnoses* that tell the payer exactly which limb was amputated and at what level. **Laterality and level matter enormously — always code to the highest specificity available in the documentation.**

> [!warning]
> ⚠️ Z89 and its subcategory parent codes are **not billable**. Only the fully specified 7-character codes below are valid.

---

#### Upper Extremity Absence

##### Thumb
| Code        | Description                           | Billable |
| ----------- | ------------------------------------- | -------- |
| **[[Z89.011]]** | Acquired absence of right thumb       | ✅        |
| **[[Z89.012]]** | Acquired absence of left thumb        | ✅        |
| **[[Z89.019]]** | Acquired absence of unspecified thumb | ✅        |

##### Other Finger(s)
| Code        | Description                                           | Billable |
| ----------- | ----------------------------------------------------- | -------- |
| **[[Z89.021]]** | Acquired absence of right finger(s) [not thumb]       | ✅        |
| **[[Z89.022]]** | Acquired absence of left finger(s) [not thumb]        | ✅        |
| **[[Z89.029]]** | Acquired absence of unspecified finger(s) [not thumb] | ✅        |

> [!NOTE]
> **Clinical note:** **Z89.021/022** are used for single or multiple finger amputations excluding the thumb. If the thumb AND other fingers are absent, code both **[[Z89.011]]/[[Z89.012]]** AND **[[Z89.021]]/[[Z89.022]]** separately.
> 

##### Hand (Wrist Disarticulation)
| Code        | Description                          | Billable |
| ----------- | ------------------------------------ | -------- |
| **[[Z89.111]]** | Acquired absence of right hand       | ✅        |
| **[[Z89.112]]** | Acquired absence of left hand        | ✅        |
| **[[Z89.119]]** | Acquired absence of unspecified hand | ✅        |

##### Wrist
| Code        | Description                           | Billable |
| ----------- | ------------------------------------- | -------- |
| **[[Z89.121]]** | Acquired absence of right wrist       | ✅        |
| **[[Z89.122]]** | Acquired absence of left wrist        | ✅        |
| **[[Z89.129]]** | Acquired absence of unspecified wrist | ✅        |

##### Below Elbow (Transradial)
| Code        | Description                                                 | Billable |
| ----------- | ----------------------------------------------------------- | -------- |
| **[[Z89.211]]** | Acquired absence of right upper extremity below elbow       | ✅        |
| **[[Z89.212]]** | Acquired absence of left upper extremity below elbow        | ✅        |
| **[[Z89.219]]** | Acquired absence of unspecified upper extremity below elbow | ✅        |

> [!NOTE]
>  **Level clarification:** "Below elbow" = the radius/ulna are partially or fully absent. Documentation may say "transradial amputation," "BEA," or "below-elbow amputation." All map here.

##### Above Elbow (Transhumeral)
| Code        | Description                                                 | Billable |
| ----------- | ----------------------------------------------------------- | -------- |
| **[[Z89.221]]** | Acquired absence of right upper extremity above elbow       | ✅        |
| **[[Z89.222]]** | Acquired absence of left upper extremity above elbow        | ✅        |
| **[[Z89.229]]** | Acquired absence of unspecified upper extremity above elbow | ✅        |

> [!NOTE]
>  **Level clarification:** "Above elbow" = humerus is partially or fully absent. Documentation may say "transhumeral amputation," "AEA," or "above-elbow amputation."

##### Shoulder Disarticulation / Forequarter
| Code        | Description                              | Billable |
| ----------- | ---------------------------------------- | -------- |
| **[[Z89.231]]** | Acquired absence of right shoulder       | ✅        |
| **[[Z89.232]]** | Acquired absence of left shoulder        | ✅        |
| **[[Z89.239]]** | Acquired absence of unspecified shoulder | ✅        |

##### Unspecified Upper Extremity Level
| Code        | Description                                                        | Billable |
| ----------- | ------------------------------------------------------------------ | -------- |
| **[[Z89.201]]** | Acquired absence of right upper extremity, unspecified level       | ✅        |
| **[[Z89.202]]** | Acquired absence of left upper extremity, unspecified level        | ✅        |
| **[[Z89.209]]** | Acquired absence of unspecified upper extremity, unspecified level | ✅        |

> [!warning]
> ⚠️ Use Z89.20x only if the documentation truly does not specify the level. Always query the physician if laterality or level are absent from the record.
> 

---

#### Lower Extremity Absence

##### Toe(s) – Great Toe
| Code        | Description                               | Billable |
| ----------- | ----------------------------------------- | -------- |
| **[[Z89.411]]** | Acquired absence of right great toe       | ✅        |
| **[[Z89.412]]** | Acquired absence of left great toe        | ✅        |
| **[[Z89.419]]** | Acquired absence of unspecified great toe | ✅        |

##### Toe(s) – Other Than Great Toe
| Code        | Description                                  | Billable |
| ----------- | -------------------------------------------- | -------- |
| **[[Z89.421]]** | Acquired absence of other right toe(s)       | ✅        |
| **[[Z89.422]]** | Acquired absence of other left toe(s)        | ✅        |
| **[[Z89.429]]** | Acquired absence of other unspecified toe(s) | ✅        |

> [!NOTE]
> **Clinical note:** If the great toe **AND** other toes are absent on the same foot, code both the great toe code **AND** the other toe code. These are separate anatomical structures and both should be captured.

##### Foot (Transmetatarsal / Chopart / Lisfranc / Syme's)
| Code        | Description                          | Billable |
| ----------- | ------------------------------------ | -------- |
| **[[Z89.431]]** | Acquired absence of right foot       | ✅        |
| **[[Z89.432]]** | Acquired absence of left foot        | ✅        |
| **[[Z89.439]]** | Acquired absence of unspecified foot | ✅        |

> [!NOTE]
 > **Level clarification:** Syme's amputation (**ankle disarticulation with heel pad preservation**), Chopart (**midfoot**), Lisfranc (**tarsometatarsal**), and transmetatarsal amputations all fall under Z89.43x. The documentation will often specify the procedure name — you just need the anatomical result.

##### Ankle Joint – Following Prosthesis Explantation
| Code            | Description                                                                                  | Billable |
| --------------- | -------------------------------------------------------------------------------------------- | -------- |
| **[[Z89.441]]** | Acquired absence of right ankle joint following explantation of ankle joint prosthesis       | ✅        |
| **[[Z89.442]]** | Acquired absence of left ankle joint following explantation of ankle joint prosthesis        | ✅        |
| **[[Z89.449]]** | Acquired absence of unspecified ankle joint following explantation of ankle joint prosthesis | ✅        |

> [!tip]
> **Rare but specific** — use only when the patient previously had an ankle joint prosthesis that was removed and not replaced.

##### Below Knee (Transtibial / BKA)
| Code        | Description                                    | Billable |
| ----------- | ---------------------------------------------- | -------- |
| **[[Z89.511]]** | Acquired absence of right leg below knee       | ✅        |
| **[[Z89.512]]** | Acquired absence of left leg below knee        | ✅        |
| **[[Z89.519]]** | Acquired absence of unspecified leg below knee | ✅        |

> [!NOTE]
>  **This is one of the most common codes in PMR amputee rehab.** BKA (**below-knee amputation**) is the most frequent lower extremity amputation level, most commonly from diabetic foot disease or PVD. Documentation terms: "**transtibial amputation**," "**BKA**," "**below-knee amputation**," "**transtibial level**."
> 

##### Knee Disarticulation
| Code        | Description                          | Billable |
| ----------- | ------------------------------------ | -------- |
| **[[Z89.521]]** | Acquired absence of right knee       | ✅        |
| **[[Z89.522]]** | Acquired absence of left knee        | ✅        |
| **[[Z89.529]]** | Acquired absence of unspecified knee | ✅        |

> [!NOTE]
> **Level clarification:** Knee disarticulation means the amputation occurred *through* the knee joint; the femur is intact. This is distinct from above-knee/transfemoral. Documentation may specify "**knee disarticulation**" or "**through-knee amputation**."

##### Above Knee (Transfemoral / AKA)
| Code        | Description                                    | Billable |
| ----------- | ---------------------------------------------- | -------- |
| **[[Z89.611]]** | Acquired absence of right leg above knee       | ✅        |
| **[[Z89.612]]** | Acquired absence of left leg above knee        | ✅        |
| **[[Z89.619]]** | Acquired absence of unspecified leg above knee | ✅        |

> [!tip]
> **Documentation terms:** "**transfemoral amputation**," "**AKA**," "**above-knee amputation**," "**transfemoral level**." AKA patients have a longer rehabilitation course than BKA due to loss of the knee joint, which significantly impacts gait and prosthetic training complexity.

##### Hip Disarticulation / Hemipelvectomy
| Code        | Description                         | Billable |
| ----------- | ----------------------------------- | -------- |
| **[[Z89.621]]** | Acquired absence of right hip       | ✅        |
| **[[Z89.622]]** | Acquired absence of left hip        | ✅        |
| **[[Z89.629]]** | Acquired absence of unspecified hip | ✅        |

> [!NOTE]
> **Most proximal lower extremity level.** Hip disarticulation = entire femur removed; the pelvis is intact. **Hemipelvectomy** = partial removal of the pelvis as well. Both use Z89.62x. These patients face the most complex prosthetic challenges and longest rehab courses.

##### Unspecified Limb Absence
| Code          | Description                           | Billable |
| ------------- | ------------------------------------- | -------- |
| **[[Z89.9]]** | Acquired absence of limb, unspecified | ✅        |

> [!caution]
>  ⚠️ Avoid **Z89.9** whenever possible. Query the physician for level and laterality before defaulting here.

---

### T87 – Complications Peculiar to Amputation Stumps

> **When a patient is admitted specifically because of a complication of their residual limb** — wound infection, necrosis, dehiscence, neuroma, or phantom pain — the T87 code becomes relevant and may serve as principal diagnosis or a significant secondary diagnosis. These codes capture the problem *with* the residual limb, not the **amputation** status itself. Always pair with the applicable Z89.xxx code to show what limb is affected.

---

#### Neuroma of Amputation Stump
A **[[neuroma]]** is a painful mass of nerve tissue that forms when a severed nerve ending attempts to regenerate. In amputees, this is a common source of residual limb pain and can make prosthetic use very difficult.

| Code       | Description                                        | Billable |
| ---------- | -------------------------------------------------- | -------- |
| **[[T87.30]]** | Neuroma of amputation stump, unspecified extremity | ✅        |
| **[[T87.31]]** | Neuroma of amputation stump, upper extremity       | ✅        |
| **[[T87.32]]** | Neuroma of amputation stump, lower extremity       | ✅        |

---

#### Infection of Amputation Stump
Residual limb infections are a serious complication, especially in diabetic patients. Look for documentation of redness, warmth, purulent drainage, positive cultures, or fever in the setting of residual limb pathology.

| Code | Description | Billable |
|------|-------------|----------|
| **[[T87.40]]** | Infection of amputation stump, unspecified extremity | ✅ |
| **[[T87.41]]** | Infection of amputation stump, upper extremity | ✅ |
| **[[T87.42]]** | Infection of amputation stump, lower extremity | ✅ |

> [!tip]
>  **Coder Tip:** If the physician documents osteomyelitis of the residual limb, code M86.xx in addition to or instead of T87.4x depending on the clinical specificity provided. Do not assume — query if unclear.

---

#### Necrosis of Amputation Stump
Tissue death of the residual limb, often from inadequate perfusion. This is a severe complication that may necessitate revision surgery.

| Code       | Description                                         | Billable |
| ---------- | --------------------------------------------------- | -------- |
| **[[T87.50]]** | Necrosis of amputation stump, unspecified extremity | ✅        |
| **[[T87.51]]** | Necrosis of amputation stump, upper extremity       | ✅        |
| **[[T87.52]]** | Necrosis of amputation stump, lower extremity       | ✅        |

---

#### Dehiscence and Other Stump Complications
Dehiscence = the surgical wound has separated/opened. This is distinct from infection, though both may be present simultaneously.

| Code       | Description                                   | Billable |
| ---------- | --------------------------------------------- | -------- |
| **[[T87.81]]** | Dehiscence of amputation stump                | ✅        |
| **[[T87.89]]** | Other complications of amputation stumps      | ✅        |
| **[[T87.9]]**  | Unspecified complications of amputation stump | ✅        |

> [!NOTE]
>  **T87.89** captures complications such as **[[hematoma]]**, **[[seroma]]**, skin breakdown from prosthetic socket friction, contact dermatitis from prosthetic liner materials, and bony prominences causing pressure injury on the residual limb.
> 

---

### G54 – Phantom Limb Syndrome

> **Phantom limb sensation** is extremely common post-amputation — the brain still perceives signals from the missing limb. **Phantom limb *pain*** is the pathological, often debilitating version where the patient experiences burning, shooting, or cramping pain in the absent limb. This is managed by the PMR physician and must be documented explicitly to code.

| Code      | Description                        | Billable |
| --------- | ---------------------------------- | -------- |
| **[[G54.6]]** | Phantom limb syndrome with pain    | ✅        |
| **[[G54.7]]** | Phantom limb syndrome without pain | ✅        |

> **Key distinction:** If the physician documents "**phantom limb pain**" → **[[G54.6]]**. If the physician documents "**phantom limb sensation**" or "phantom limb phenomenon" (**awareness of the limb without pain**) → **[[G54.7]]**. Do **NOT** assume pain is present — the diagnosis must be stated. Query if the note mentions phantom sensation but doesn't specify pain vs. no pain.

> [!NOTE]
>  **HCC Note:** **[[G54.6]]** and **[[G54.7]]** do not carry HCC weight under **CMS-HCC v28**. However, they are clinically significant secondary diagnoses that support medical necessity for **PMR** admission and are important for documenting complexity.

---

### Z47.81 – Aftercare Following Surgical Amputation (Revisited)

| Code | Description | Billable |
|------|-------------|----------|
| **[[Z47.81]]** | Encounter for orthopedic aftercare following surgical amputation | ✅ |
| **[[Z47.89]]** | Encounter for other orthopedic aftercare | ✅ |

>[!tip]
> Use **[[Z47.81]]** specifically when the patient's admission is directly following an amputation (**the surgical procedure is the reason for the aftercare**). Use **[[Z47.89]]** for other orthopedic aftercare situations not specifically listed. In the PMR amputee context, **[[Z47.81]]** is almost always the correct choice.

---

### Common Underlying Etiologies (Additional Diagnoses) – HCC-Relevant

> Always capture the underlying condition that caused the amputation. These conditions *do* carry HCC weight and are critical for accurate risk adjustment and medical necessity documentation.

| Code             | Description                                                                     | HCC (v28)  | Notes                                                   |
| ---------------- | ------------------------------------------------------------------------------- | ---------- | ------------------------------------------------------- |
| **[[E11.51]]**   | Type 2 DM with diabetic peripheral angiopathy with gangrene                     | HCC 18     | Most serious diabetic vascular complication             |
| **[[E11.52]]**   | Type 2 DM with diabetic peripheral angiopathy without gangrene                  | HCC 18     | Document even if amputation already done                |
| **[[E10.51]]**   | Type 1 DM with diabetic peripheral angiopathy with gangrene                     | HCC 18     | Less common than T2DM in amputee population             |
| **[[E10.52]]**   | Type 1 DM with diabetic peripheral angiopathy without gangrene                  | HCC 18     |                                                         |
| **[[I70.201]]**  | Atherosclerosis of native arteries of extremities, right leg, with rest pain    | HCC 108    | PVD — very common in amputee population                 |
| **[[I70.202]]**  | Atherosclerosis of native arteries of extremities, left leg, with rest pain     | HCC 108    |                                                         |
| **[[I70.261]]**  | Atherosclerosis of native arteries, right leg, with gangrene                    | HCC 108/39 | When gangrene precipitated amputation                   |
| **[[I70.262]]**  | Atherosclerosis of native arteries, left leg, with gangrene                     | HCC 108/39 |                                                         |
| **[[I96]]**      | Gangrene, not elsewhere classified                                              | HCC 39     | Use only when not attributable to DM or atherosclerosis |
| **[[M86.9]]**    | Osteomyelitis, unspecified                                                      | HCC 39     | Always code to highest specificity if documented        |
| **[[S78.011A]]** | Complete traumatic amputation at right hip joint, initial encounter             | —          | Trauma etiology; use injury code for acute admission    |
| **[[S88.011A]]** | Complete traumatic amputation at knee level, right lower leg, initial encounter | —          | Trauma etiology                                         |

> [!NOTE]
> **Sequencing rule:** In the *rehab admission* (**using [[Z47.81]] as principal**), the underlying disease (**DM, PVD**) should be listed as an additional diagnosis. The **Z89** amputation status code and any active comorbidities are also additional diagnoses.

---

## 🩺 CPT Codes – PMR Physician Professional Fee Billing

> **In inpatient PMR**, the physician bills E/M codes for daily visits. Therapy services (**PT, OT, SLP**) are typically billed by the therapists under their own NPIs. The PMR physician may also bill for prosthetic evaluation/training and wound assessment procedures if personally performed.

---

### Inpatient E/M Codes

#### Initial Hospital Care
| CPT           | Description                                | Typical Time | Typical MDM            |
| ------------- | ------------------------------------------ | ------------ | ---------------------- |
| **[[99221]]** | Initial hospital care, low complexity      | 40 min       | Straightforward or Low |
| **[[99222]]** | Initial hospital care, moderate complexity | 55 min       | Moderate               |
| **[[99223]]** | Initial hospital care, high complexity     | 75 min       | High                   |

>[!NOTE]
> For amputee admissions, **[[99223]]** is often appropriate on initial visit — the **PMR** physician is reviewing surgical history, examining the residual limb, reviewing labs/imaging, establishing a comprehensive rehab plan, prescribing prosthetics, and managing complex comorbidities like diabetes or **cardiovascular disease**. Document time or **MDM** explicitly.

#### Subsequent Hospital Care
| CPT   | Description                                   | Typical Time | Typical MDM             |
| ----- | --------------------------------------------- | ------------ | ----------------------- |
| **[[99231]]** | Subsequent hospital care, low complexity      | 25 min       | Stable                  |
| **[[99232]]** | Subsequent hospital care, moderate complexity | 35 min       | Responding inadequately |
| **[[99233]]** | Subsequent hospital care, high complexity     | 50 min       | Unstable or new problem |

> [!NOTE]
> Daily **PMR** rounds on an amputee rehab patient are typically **[[99232]]** when the patient is progressing as expected. Upgrade to **[[99233]]** when new complications arise (**e.g., wound dehiscence, phantom pain flare, cardiovascular instability, infection**).

---

### Prosthetic Training and Assessment

| CPT   | Description                                                               | Unit       | Notes                                                           |
| ----- | ------------------------------------------------------------------------- | ---------- | --------------------------------------------------------------- |
| **[[97761]]** | Prosthetic training, upper and/or lower extremity(ies), initial encounter | Per 15 min | Billed when PMR physician directly provides prosthetic training |
| **[[97762]]** | Checkout for orthotic/prosthetic use, established patient                 | Per 15 min | Functional assessment of prosthesis fit and use                 |

> [!NOTE]
>  ⚠️ **Important distinction:** In most inpatient settings, the *prosthetist* provides prosthetic training, and the *PT* assists. The PMR physician bills **[[97761]]**/**[[97762]]** only if **they personally** provide this service. Review documentation carefully — if the note says "**patient ambulated with prosthesis with PT assistance**," the PT bills **[[97116]]**, not the physician.
> 

---

### Wound Care Procedures (If PMR Physician Performs)

| CPT   | Description                                               | Notes                                                        |
| ----- | --------------------------------------------------------- | ------------------------------------------------------------ |
| **[[97597]]** | Selective debridement, open wound; first 20 sq cm or less | Physician-performed; requires documentation of area in sq cm |
| **[[97598]]** | Selective debridement, each additional 20 sq cm           | Add-on to 97597                                              |
| **[[97602]]** | Non-selective debridement, without anesthesia             | Wet-to-dry dressings, enzymatic agents, abrasion             |
| **[[97605]]** | Negative pressure wound therapy (NPWT), wounds ≤50 sq cm  |                                                              |
| **[[97606]]** | Negative pressure wound therapy (NPWT), wounds >50 sq cm  |                                                              |

> [!caution]
> **Coder Alert:** **[[Debridement]]** billed with an E/M on the same day requires modifier **[[-25]]** on the E/M. The physician must document that the E/M was significant and separately identifiable from the wound care procedure.

---

### Therapeutic Procedures (When PMR Physician Directly Provides)

| CPT | Description | Unit |
|-----|-------------|------|
| **[[97110]]** | Therapeutic exercises | Per 15 min |
| **[[97112]]** | Neuromuscular reeducation | Per 15 min |
| **[[97116]]** | Gait training (includes stair climbing) | Per 15 min |
| **[[97530]]** | Therapeutic activities | Per 15 min |
| **[[97535]]** | Self-care/home management training | Per 15 min |
| **[[97750]]** | Physical performance test or measurement | Per 15 min |
| **[[97755]]** | Assistive technology assessment | Per 15 min |

> [!NOTE]
> ⚠️ **These** are typically billed by the **PT/OT** under their own **NPI** in an inpatient setting. The **PMR** physician bills these only when personally performing the service. Verify documentation supports physician-performed service.

---

## 🏷️ Modifiers – Amputee PMR Coding

| Modifier | Name | When to Use in PMR Amputee |
|----------|------|---------------------------|
| **[[-AI]]** | Principal physician of record | Appended to the E/M code when the PMR physician is the *principal physician* directing the patient's inpatient care (not a consulting specialist). Required by Medicare for inpatient E/M billing by the admitting physician. |
| **[[-25]]** | Significant, separately identifiable E/M | Use when billing an E/M *and* a procedure (e.g., wound debridement) on the same date of service. The E/M must be documented as separate from the procedure. |
| **[[-57]]** | Decision for surgery | If the PMR physician's evaluation leads to a decision to perform a major procedure (e.g., residual limb revision surgery), append to the E/M on the day of that decision. |
| **[[-59]]** | Distinct procedural service | Used when two procedures are performed that would normally be bundled but are distinct in this encounter. Document clearly why services are separate. |
| **[[-51]]** | Multiple procedures | When two or more procedures are billed on the same day by the same physician; append to the secondary procedure(s). |
| **[[-52]]** | Reduced services | When a service is significantly reduced compared to the standard — for example, a shortened visit due to patient fatigue or medical instability. |
| **[[-76]]** | Repeat procedure, same physician | If the same procedure is repeated on the same day (e.g., two separate wound debridement sessions). |
| **[[-RT]]** | Right side | Appended to procedure codes when laterality is relevant and the procedure is on the right side. |
| **[[-LT]]** | Left side | Appended to procedure codes when laterality is relevant and the procedure is on the left side. |
| **[[-50]]** | Bilateral procedure | When the same procedure is performed bilaterally in the same operative session (e.g., bilateral residual limb wound care). |

> [!NOTE]
> **Modifier AI in depth:** Medicare eliminated consultation codes in 2010. The PMR physician who *admits and manages* the patient in inpatient rehab uses the initial hospital care codes (**[[99221]]**–**[[99223]]**) with modifier **AI**. A specialist called in to *consult* during the PMR admission uses the same E/M range **without** modifier AI. The AI modifier signals that this physician is the primary responsible provider.

---

## 📊 MS-DRG Reference

> **What DRG will the patient fall under?** In inpatient PMR, the DRG is driven by the principal diagnosis. For rehab admissions using **[[Z47.81]]**, the most common DRGs are in the Aftercare or Rehabilitation MDC.

### Aftercare DRGs (Z47.81 as Principal DX)

| DRG | Description | GMLOS | ALOS |
|-----|-------------|-------|------|
| **559** | Aftercare, musculoskeletal system and connective tissue **with MCC** | ~4.9 days | Higher |
| **560** | Aftercare, musculoskeletal system and connective tissue **with CC** | ~3.6 days | Moderate |
| **561** | Aftercare, musculoskeletal system and connective tissue **without CC/MCC** | ~2.3 days | Lower |

### Rehabilitation DRGs (Inpatient Rehab Facility / IRF Setting)

| DRG | Description | GMLOS | Notes |
|-----|-------------|-------|-------|
| **945** | Rehabilitation **with CC/MCC** | ~10.2 days | Most common for complex amputee cases |
| **946** | Rehabilitation **without CC/MCC** | ~7.4 days | Younger, healthier, fewer comorbidities |

> **CC/MCC Coding Tip:** Capturing active comorbidities elevates the DRG from **946** → **945 or 561** → **560/559**. Common **MCCs/CCs** in the amputee population:
> - DM with complications (**HCC 18**) → often MCC
> - **CHF, COPD, CKD → MCC/CC** depending on severity
> - Phantom limb pain **([[G54.6]])** → CC
> - Residual limb infection **([[T87.41]], [[T87.42]])** → CC
> - Residual limb necrosis **([[T87.51]], [[T87.52]])** → MCC
>
> Accurate comorbidity coding is the difference between **DRG 946** and **945** — a significant reimbursement gap. Query for conditions that are actively monitored and treated during the admission.

---

## 🧠 HCC Mapping – Amputee-Related Diagnoses (CMS-HCC v28)

| Code        | Condition                                        | HCC Category | Clinical Importance                             |
| ----------- | ------------------------------------------------ | ------------ | ----------------------------------------------- |
| **[[E11.51]]**  | T2DM with peripheral angiopathy + gangrene       | HCC 18       | High-impact; signals severe DM complications    |
| **[[E11.52]]**  | T2DM with peripheral angiopathy without gangrene | HCC 18       | Capture even post-amputation                    |
| **[[I70.261]]** | Atherosclerosis with gangrene, right leg         | HCC 108      | PVD severity; pair with Z89 status code         |
| **[[I96]]**     | Gangrene NEC                                     | HCC 39       | Use only when not better specified under DM/PVD |
| **[[M86.9]]**   | Osteomyelitis, unspecified                       | HCC 39       | Code to highest specificity                     |
| **Z89.xxx**     | Acquired absence of limb                         | ❌ No HCC     | Status code; no risk adjustment weight          |
| **[[G54.6]]**   | Phantom limb syndrome with pain                  | ❌ No HCC     | Clinically important; no HCC weight             |
| **[[T87.42]]**  | Infection of amputation stump, lower extremity   | ❌ No HCC     | Affects DRG CC/MCC; no HCC weight               |
| **[[T87.52]]**  | Necrosis of amputation stump, lower extremity    | ❌ No HCC     | MCC for DRG purposes; no HCC weight             |

> [!NOTE]
> **Key takeaway:** The **Z89** and T87 **codes** don't move the needle on **HCC**. It's the *underlying disease* that caused the amputation that matters for risk scoring. Always capture active **DM**, **PVD**, and other chronic conditions even if they seem "old history" — if they're being monitored or managed, they get coded.

---

## 🔩 ICD-10-PCS Reference – Inpatient Rehabilitation Procedures

> In the inpatient setting, the facility codes **ICD-10-PCS** for procedures. For PMR amputee rehab, Section **F** (**Physical Rehabilitation and Diagnostic Audiology**) is the primary section. These PCS codes represent the *therapeutic services* the patient receives during the admission, not the surgical amputation (**which was done on a prior admission**).

**Section F – Physical Rehabilitation and Diagnostic Audiology**
**Root Operation 07 – Treatment**

> The 7 characters of a PCS rehab code are: **Section** | **Section Qualifier** | **Root Type** | **Body System & Region** | **Type Qualifier** | **Equipment** | **Qualifier**

### Key Body System/Region Values (5th character in Section F)

| Value | Body System / Region                                             |
| ----- | ---------------------------------------------------------------- |
| **Z**     | None (anatomical regions — used for amputee prosthetic training) |
| **0**     | Neurological system — head and neck                              |
| **1**     | Neurological system — upper back/upper extremity                 |
| **2**     | Neurological system — lower back/lower extremity                 |

### Common Treatment Type Qualifiers (7th character) for Amputee Rehab

| Value | Treatment Type                                  |
| ----- | ----------------------------------------------- |
| **3**     | Therapeutic exercise                            |
| **7**     | Prosthesis                                      |
| **8**     | Assistive/adaptive/supportive/protective device |
| **W**     | Bed mobility                                    |
| **X**     | Transfer training                               |
| **Y**     | Locomotion training                             |

> **Prosthetic training PCS example:** A patient admitted post-BKA receiving lower extremity prosthetic training would be coded to Section F, Type Qualifier 07 (**Treatment**), appropriate body region, with Equipment value = Prosthetic (E) and Type Qualifier reflecting the specific training.

> [!NOTE]
> ⚠️ **Note to coder:** **PCS** coding for rehab section F can be complex and is often handled by the facility coder with clinical documentation specialist (**CDS**) support. As the profee coder, your primary **PCS** concern is whether the procedures are clearly documented by the physician so the facility team can code them accurately. Your focus is the physician professional fee claim.
> 

---

## 💊 Coding Scenarios

---

### Scenario 1: Diabetic Right BKA — Prosthetic Training Admission

**Clinical Story:**
A 67-year-old male with a long history of Type 2 diabetes mellitus with peripheral neuropathy and peripheral angiopathy underwent a right below-knee amputation (transtibial) 6 weeks ago at an outside hospital secondary to gangrenous diabetic foot. He has been home, the wound has fully healed, and his residual limb has been shaped with a shrinker sock. He is now admitted to inpatient rehab for prosthetic fitting evaluation and gait training with his newly fit prosthesis. He also reports phantom limb pain rated 6/10 in the right foot. PMR physician performs initial evaluation.

**Principal Diagnosis:** **[[Z47.81]]** — Encounter for orthopedic aftercare following surgical amputation

**Additional Diagnoses:**
- **[[Z89.511]]** — Acquired absence of right leg below knee *(the amputation status — right, below knee)*
- **[[E11.51]]** — Type 2 DM with diabetic peripheral angiopathy with gangrene *(the cause of amputation — still coded even though the gangrene resolved; it's the underlying condition)*
- **[[G54.6]]** — Phantom limb syndrome with pain *(physician documented "phantom limb pain")*

**CPT (PMR Physician Profee):**
- [[99223]][[-AI]] — Initial hospital care, high complexity, PMR physician as principal physician of record
  *(High complexity justified: new inpatient rehab admission, complex diabetic comorbidity, prosthetic prescription initiated, phantom limb pain management plan established)*

**MS-DRG:** 945 (Rehabilitation with CC/MCC) — E11.51 functions as MCC; phantom limb pain is CC
**GMLOS:** ~10.2 days

---

### Scenario 2: Bilateral Lower Extremity Amputee — Wheelchair and ADL Training

**Clinical Story:**
A 72-year-old female with a history of PVD and Type 2 diabetes underwent right BKA 4 months ago and left great toe amputation 2 months ago, both secondary to PVD with critical limb ischemia. She is admitted to inpatient PMR for wheelchair mobility training, self-care training, and home management planning. She is not a prosthetic candidate at this time due to severe cardiovascular disease. She also has CHF with preserved ejection fraction and Stage 3b CKD.

**Principal Diagnosis:** [[Z47.81]] — Encounter for orthopedic aftercare following surgical amputation

**Additional Diagnoses:**
- [[Z89.511]] — Acquired absence of right leg below knee
- [[Z89.411]] — Acquired absence of left great toe
- [[I70.201]] — Atherosclerosis of native arteries, right leg *(underlying PVD cause)*
- [[I70.202]] — Atherosclerosis of native arteries, left leg
- [[I50.30]] — Heart failure with preserved ejection fraction, unspecified *(active comorbidity being monitored — query physician if more specificity available)*
- [[N18.33]] — Chronic kidney disease, stage 3b *(active comorbidity)*

**CPT (PMR Physician Profee — Initial Visit):**
- [[99223]][[-AI]] — Initial hospital care, high complexity *(bilateral amputations, multiple active comorbidities, complex discharge planning)*

**CPT (PMR Physician Profee — Subsequent Visit, Stable Day):**
- [[99232]] — Subsequent hospital care, moderate complexity *(progressing appropriately; reviewing labs, adjusting fluid management for CHF)*

**MS-DRG:** 945 (Rehabilitation with CC/MCC) — CHF and CKD Stage 3b are MCCs
**GMLOS:** ~10.2 days

> **Coder Tip:** Both [[Z89.511]] (right BKA) and [[Z89.411]] (left great toe) should be coded — both are relevant amputation statuses affecting this patient's functional status and rehab plan. Code all affected sites.

---

### Scenario 3: Residual Limb Infection — PMR Manages Wound Complication

**Clinical Story:**
A 58-year-old male, 3 weeks post left above-knee amputation (transfemoral) for osteomyelitis and septic joint from MRSA, is admitted to inpatient PMR. During admission, the PMR team notes purulent drainage from the distal residual limb. Wound culture returns positive for MRSA. The PMR physician performs selective debridement of the residual limb wound (18 sq cm area) and documents a significant, separately identifiable evaluation noting residual limb infection, reviewing wound culture results, modifying IV antibiotic regimen, and adjusting the rehabilitation plan.

**Principal Diagnosis:** [[T87.42]] — Infection of amputation stump, lower extremity *(the complication is the primary reason for the clinical encounter today)*

**Additional Diagnoses:**
- [[Z89.612]] — Acquired absence of left leg above knee *(the amputation status — left, above knee)*
- [[B95.62]] — MRSA as the cause of diseases classified elsewhere *(organism code — always add when documented)*
- [[M86.162]] — Other acute osteomyelitis, left tibia *(if still documented as active — query physician)*

**CPT (PMR Physician Profee):**
- [[99232]][[-25]][[-AI]] — Subsequent hospital care, moderate complexity, with modifier 25 *(significant, separately identifiable E/M beyond the wound care, PMR principal physician)*
- [[97597]] — Selective debridement, open wound, first 20 sq cm or less *(physician personally performed, wound area documented in sq cm)*

> **Modifier 25 reminder:** The documentation must show that the E/M (reviewing cultures, adjusting antibiotics, modifying rehab plan) was separate from and beyond the wound debridement. Both elements must be clearly documented.

**MS-DRG:** 945 (Rehabilitation with CC/MCC) — [[T87.42]] is a CC; MRSA infection elevates complexity
**GMLOS:** ~10.2 days

---

### Scenario 4: Traumatic Below-Elbow Amputation — Prosthetic Training, Phantom Pain

**Clinical Story:**
A 45-year-old right-handed male sustained a traumatic right below-elbow amputation (transradial) in an industrial accident 8 weeks ago. He has been discharged from the acute care hospital and is now admitted to PMR for prosthetic training with a myoelectric prosthesis and occupational therapy for self-care retraining. He has significant phantom limb pain and is being treated with gabapentin and mirror therapy. PMR physician performs initial evaluation.

**Principal Diagnosis:** [[Z47.81]] — Encounter for orthopedic aftercare following surgical amputation

**Additional Diagnoses:**
- [[Z89.211]] — Acquired absence of right upper extremity below elbow *(the amputation level — right, below elbow, transradial)*
- [[G54.6]] — Phantom limb syndrome with pain *(documented "phantom limb pain" — with pain)*
- [[S58.011S]] — Complete traumatic amputation at elbow level, right arm, sequela *(the injury as a sequela — coding convention: traumatic amputations use the S code with 7th character "S" for sequela when coding subsequent encounters for rehab)*

> **7th Character Guidance for Traumatic Amputation ICD-10-CM:**
> - A = Initial encounter (acute admission for the traumatic amputation surgery)
> - D = Subsequent encounter (follow-up care while healing)
> - S = Sequela (complication or condition arising as a result of the injury, coded on subsequent admissions)
> During a PMR rehab admission weeks after the injury, use **S** for the injury code to capture it as a sequela. The [[Z47.81]] remains principal.

**CPT (PMR Physician Profee — Initial Visit):**
- [[99223]][[-AI]] — Initial hospital care, high complexity *(complex occupational rehab needs, prosthetic prescription for myoelectric device, phantom pain management plan)*

**CPT (PMR Physician Profee — Prosthetic Training Visit, If Physician Provides):**
- [[97761]] — Prosthetic training, upper extremity, initial encounter (per 15 min) *(only if physician personally provides this — verify documentation)*

**MS-DRG:** 945 (Rehabilitation with CC/MCC) — phantom limb pain ([[G54.6]]) functions as CC
**GMLOS:** ~10.2 days

---

### Scenario 5: Hip Disarticulation — Complex PMR Admission, Wound Dehiscence

**Clinical Story:**
A 62-year-old male underwent right hip disarticulation for soft tissue sarcoma of the right proximal thigh. He is admitted to PMR 3 weeks post-op for rehabilitation. On day 2 of the PMR admission, nursing documents that the incision has separated at the proximal aspect, approximately 4 cm of wound dehiscence without signs of active infection. The PMR physician evaluates the wound, documents dehiscence, orders wound vac (NPWT), and continues the PMR plan of care.

**Principal Diagnosis:** [[Z47.81]] — Encounter for orthopedic aftercare following surgical amputation

**Additional Diagnoses:**
- [[Z89.621]] — Acquired absence of right hip *(most proximal lower extremity amputation level — right hip disarticulation)*
- [[T87.81]] — Dehiscence of amputation stump *(wound separation — this is a secondary diagnosis here since the primary reason for admission is rehab, not the dehiscence — unless it becomes the dominant clinical issue requiring re-evaluation)*
- [[C49.21]] — Malignant neoplasm of connective tissue of right thigh *(the underlying condition — sarcoma)*

**CPT (PMR Physician Profee — Day of Wound Evaluation and NPWT Order):**
- [[99232]][[-25]][[-AI]] — Subsequent hospital care, moderate complexity, modifier 25 *(E/M for wound evaluation, medication review, rehab plan adjustment — separate from wound care)*
- [[97605]] — Negative pressure wound therapy (NPWT), wound ≤50 sq cm *(if physician applies NPWT or directly supervises and documents)*

**MS-DRG:** 945 (Rehabilitation with CC/MCC) — [[T87.81]]dehiscence is a CC; active malignancy is MCC
**GMLOS:** ~10.2 days

---

## ⚠️ Common Coding Pitfalls – PMR Amputee

1. **Failing to capture laterality** — **[[Z89.519]]** (**unspecified**) is almost never appropriate when the chart clearly documents right or left. Always code to the highest specificity.

2. **Missing the level** — "**Amputation, lower extremity**" without specifying above knee vs. below knee vs. foot is incomplete. Query the physician.

3. **Not capturing bilateral amputations** — If the patient has had amputations on both sides at different levels (**common in diabetics**), code *all* applicable **Z89** codes. Each limb/level gets its own code.

4. **Forgetting the underlying etiology** — After the **Z89** status codes, coders sometimes stop. Always code the underlying condition (**DM, PVD, trauma, malignancy**) as an additional diagnosis. This supports medical necessity and carries HCC weight.

5. **Phantom limb pain vs. phantom limb sensation** — **[[G54.6]]** (**with pain**) vs. [[G54.7]] (**without pain**). Do not assign pain unless the physician explicitly documents it. Query if ambiguous.

6. **Modifier AI omission** — If the PMR physician is the *admitting/principal* physician, AI must be appended to the **E/M** code for Medicare billing. Omitting AI can result in claim denial or payment recovery.

7. **Using the acute injury S code without the correct 7th character** — During a rehab admission, traumatic amputations should use the "S" (**sequela**) 7th character, not "A" (**initial**) or "D" (**subsequent encounter during healing**). The "S" signals that the patient is in the chronic/residual phase.

8. **Billing therapeutic procedure codes without physician-performed documentation** — **[[97110]]**, **[[97116]]**, **[[97761]]** etc. require the *physician* to be the one performing the service. If the PT performs it, it's the PT's claim, not the PMR physician's.

9. **Not querying for MRSA/organism specification** — When residual limb infection (T87.4x) is documented, always check whether a causative organism was identified and documented. If **MRSA**, add **[[B95.62]]**. If **Staph aureus** (**not MRSA**), add **[[B95.61]]**. Organism codes add clinical specificity.

10. **Using T87 codes without a paired Z89 code** — T87 tells you *what complication*, but Z89 tells you *which limb*. Always pair them.

---

## 🔗 Related Notes

- **[[Z47.81]]** — Orthopedic aftercare, surgical amputation (principal DX)
- **[[G54.6]]** — Phantom limb pain
- **[[G54.7]]** — Phantom limb without pain
- **[[E11.51]]** — T2DM with peripheral angiopathy, with gangrene
- **[[E11.52]]** — T2DM with peripheral angiopathy, without gangrene
- **[[T87.42]]** — Infection of amputation stump, lower extremity
- **[[T87.52]]** — Necrosis of amputation stump, lower extremity
- PMR Inpatient E&M Leveling Reference
- PMR Coding Overview
- Diabetes Mellitus Coding Reference
- Peripheral Vascular Disease Coding Reference
- Wound Care and Debridement CPT Reference
- Modifier Reference – Inpatient Profee

---

*Created: 2026-04-29 | MCW Inpatient Abstraction Team | Crystal | CIC-Prep*
*Sources: ICD-10-CM FY2026, CPT 2026, CMS-HCC v28 Mappings, CMS Inpatient Billing Guidelines*
