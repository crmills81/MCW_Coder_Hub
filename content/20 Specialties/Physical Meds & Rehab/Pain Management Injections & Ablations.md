---
tags:
  - CPT
  - ICD-10-CM
  - pmr
  - pain-management
  - spine
  - injections
title: Pain Management Injections & Ablations
date: 2026-03-26
category: PM&R
aliases:
  - Epidurals
  - Facet Joints
  - RFA
---

# Spine Pain Management Coding Guide

## 1. Top Diagnoses for Spinal Injections (ICD-10-CM)
Payers have strict **Local Coverage Determinations (LCDs)** for these procedures. The diagnosis must perfectly match the intervention.

* **Radiculopathy (M54.1-):** Pain radiating down a nerve root. This is the gold-standard diagnosis for *Epidural Steroid Injections (ESIs)*. Requires specificity by spinal region (**e.g., [[M54.12]] for cervical, [[M54.16]] for lumbar**).
* **Spondylosis with Radiculopathy (M47.2-):** Degenerative disc disease causing nerve compression. 
* **Spinal Stenosis (M48.0-):** Narrowing of the spinal canal.
* **Spondylosis without Myelopathy or Radiculopathy (M47.81-):** Pure joint arthritis. This is the primary diagnosis used to justify *Facet Joint Injections* and *Radiofrequency Ablations (RFA)*.



## 2. Epidural Steroid Injections (ESIs)
ESIs target the epidural space to bathe the inflamed nerve roots in steroids. Coding depends on the **approach** (**Interlaminar vs. Transforaminal**), the **spinal region**, and the use of **imaging guidance**.

### Interlaminar (Translaminar) & Caudal
The needle goes straight into the central epidural space. Code once per region, regardless of how many levels are injected within that region.
* **Cervical/Thoracic:**
  * [[62320]]: Without imaging guidance
  * [[62321]]: With imaging guidance (fluoroscopy or CT)
* **Lumbar/Sacral (Caudal):**
  * [[62322]]: Without imaging guidance
  * [[62323]]: With imaging guidance

### Transforaminal (TFESI)
The needle targets the specific foramen where a single nerve root exits. These are coded per *level* and per *side*. (Imaging guidance is inherently included in these codes; do not bill it separately).
* **Cervical/Thoracic:**
  * [[64479]]: Single level
  * +[[64480]]: Each additional level
* **Lumbar/Sacral:**
  * [[64483]]: Single level
  * +[[64484]]: Each additional level

## 3. Facet Joint Injections (Intra-articular or Medial Branch Blocks)
These target the small stabilizing joints at the back of the spine. The codes cover both injecting directly into the joint space or blocking the medial branch nerves that feed it. Imaging (fluoro/CT) is *required and included* in these codes.

* **Cervical/Thoracic:**
  * [[64490]]: Single level (e.g., C3-C4)
  * +[[64491]]: Second level
  * +[[64492]]: Third and any additional levels
* **Lumbar/Sacral:**
  * [[64493]]: Single level (e.g., L4-L5)
  * +[[64494]]: Second level
  * +[[64495]]: Third and any additional levels

> **Coder's Rule for Facets:** You max out at 3 levels per spinal region per session. You cannot bill more than one primary code and two add-on codes per region. If done bilaterally, use modifier [[-50]].

## 4. Radiofrequency Ablation (RFA)
Also known as "**destruction by neurolytic agent.**" After a patient has successful diagnostic medial branch blocks, the provider uses a heated probe to burn the nerve and provide long-term relief. Like facet injections, imaging is included.

* **Cervical/Thoracic:**
  * [[64633]]: Single facet joint
  * +[[64634]]: Each additional facet joint
* **Lumbar/Sacral:**
  * [[64635]]: Single facet joint
  * +[[64636]]: Each additional facet joint

## 5. Crucial Modifiers for Pain Management
* **[[-50]] (Bilateral Procedure):** Used when the provider injects both the left and right sides of the *same* spinal level (common with transforaminal epidurals and facet injections).
* **[[-RT]] / [[-LT]] (Right / Left):** Used if injecting only one side, or to differentiate levels (e.g., L4-L5 RT and L5-S1 LT).
* **[[-59]] or X-modifiers (Distinct Procedural Service):** Used if the provider does two different types of injections at separate anatomical sites during the same encounter (e.g., a lumbar ESI and a knee joint injection).

## 6. Profee vs. Facility Considerations
* **Profee Focus:** Accurate level counting and modifier application (**50 vs. RT/LT**) are essential. Most LCDs strictly cap how many ESIs or facet blocks a patient can have in a 12-month period, so historical chart review is often necessary.
* **Drug Coding:** Don't forget to capture the HCPCS J-codes for the injected steroids (**e.g., J1020 for Depo-Medrol, J1030 for Kenalog, J1110 for Toradol**) and the exact number of milligrams pushed.
