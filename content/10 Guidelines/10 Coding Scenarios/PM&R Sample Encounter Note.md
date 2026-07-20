## Sample Encounter Note

**Patient:** 58 y/o male, inpatient, POD 3 s/p left MCA ischemic [[stroke]], now with severe upper and lower extremity [[spasticity]] limiting nursing care and rehab progress.

**History/Indication:** Patient has developed significant flexor [[spasticity]] of the left upper extremity (biceps, flexor carpi radialis, flexor carpi ulnaris, flexor digitorum superficialis) and equinovarus [[spasticity]] of the left lower extremity (gastrocnemius, tibialis posterior, flexor digitorum longus) since his stroke. PM&R consulted and recommends chemodenervation with botulinum toxin to reduce tone and facilitate positioning/ROM.

**Procedure Performed:** [[Chemodenervation]] of left upper extremity (4 muscles: biceps brachii, FCR, FCU, FDS) and left lower extremity (3 muscles: gastrocnemius, tibialis posterior, FDL) using onabotulinumtoxinA, with EMG guidance for muscle localization on all injected sites.

**Technique:** After informed consent, the patient was positioned supine. Skin was prepped with alcohol at each injection site. EMG needle electrode was used to confirm correct muscle localization prior to each injection. A total of 200 units of onabotulinumtoxinA was reconstituted and distributed across 7 muscle sites in 2 extremities as follows: biceps brachii 40u, FCR 30u, FCU 30u, FDS 30u, gastrocnemius 30u, tibialis posterior 20u, FDL 20u. No immediate complications. Patient tolerated procedure well.

**Diagnosis:** Spasticity of left upper limb following cerebral infarction; spasticity of left lower limb following cerebral infarction; dominant/nondominant side documented as left, nondominant.

## Profee Coding (Standard Payer)

| Element                       | Code  | Description                                                                     | Notes                                                                                                                                                                  |
| ----------------------------- | ----- | ------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Primary procedure             | **[[64644]]** | Chemodenervation of 1 extremity, 5 or more muscles                              | Wait — this extremity only had 4 muscles  [ambuusa](https://www.ambuusa.com/Files/Files/Downloads/Ambu%20USA/LandingPages/Neurology/Myoguide/CPT-Billing-Myoguide.pdf) |
| Primary procedure (corrected) | **[[64642]]** | Chemodenervation of 1 extremity; 1-4 muscle(s)                                  | Left UE, 4 muscles injected  [ambuusa](https://www.ambuusa.com/Files/Files/Downloads/Ambu%20USA/LandingPages/Neurology/Myoguide/CPT-Billing-Myoguide.pdf)              |
| Additional extremity          | **[[64645]]** | Chemodenervation of 1 extremity, each additional extremity; 5 or more muscle(s) | Left LE, 3 muscles — actually falls under 1-4 range too                                                                                                                |

Both extremities in this chart have muscle counts of 4 and 3 respectively, both landing in the "1-4 muscles" tier, not "5 or more." So the correct code pair is:

| Code          | Description                                                                                                      | Units                         |
| ------------- | ---------------------------------------------------------------------------------------------------------------- | ----------------------------- |
| **[[64642]]** | Chemodenervation of 1 extremity; 1–4 muscle(s) (report for left UE, primary/first extremity coded)               | 1                             |
| **[[64643]]** | Chemodenervation of 1 extremity, each additional extremity; 1–4 muscle(s) (list separately, add-on) (left LE)    | 1                             |
| **[[95873]]** | Electrical stimulation for guidance in conjunction with chemodenervation (add-on, if E-stim used instead of EMG) | —                             |
| **[[95874]]** | Needle EMG for guidance in conjunction with chemodenervation (add-on)                                            | 1 per session, not per muscle |
| **J0585**     | Botulinum toxin type A (Botox), per unit                                                                         | 200 units                     |

Codes **[[64642]]/[[64643]]** are reported once per extremity regardless of how many muscles within that 1-4 tier were hit, and [[64642]] or [[64644]] is only reported once per session as the "first extremity" code, with additional extremities rolling to [[64643]]/[[64645]]. Modifier [[-50]] is explicitly excluded from this code family — you never bill [[64642]]-[[64647]] bilaterally with modifier -50 — because laterality/additional sites are already captured by the extremity add-on codes. EMG guidance ([[95874]]) is reported once per session as an add-on, not once per muscle or per extremity. [ambuusa](https://www.ambuusa.com/Files/Files/Downloads/Ambu%20USA/LandingPages/Neurology/Myoguide/CPT-Billing-Myoguide.pdf)

**ICD-10-CM (example):**
- [[I69.354]] — [[Hemiplegia]] and [[hemiparesis]] following cerebral infarction affecting left nondominant side
- [[G24.09]] — Other drug-induced [[dystonia]] is NOT applicable here; use [[spasticity]]-specific codes instead:
- [[G81.14]] — [[Spastic hemiplegia]] affecting left nondominant side (if documenting [[spasticity]] distinctly from [[hemiplegia]] code)

Since the physiatrist documented [[spasticity]] as the treated condition rather than hemiplegia itself, [[G81.14]] is your primary linking diagnosis for the [[chemodenervation]], with [[I69.354]] as a secondary/history-of code to establish the stroke etiology.

## Medicare (2026) Coding Considerations

**Medicare's LCD/NCD framework** for chemodenervation (**L33458 and its associated Billing & Coding Article**) requires medical necessity documentation tying the spasticity to a covered condition, and MACs vary on which ICD-10-CM codes satisfy that requirement, so you'll want to pull the specific Article for your MAC jurisdiction rather than relying on national guidance alone. For 2026, CMS's NCCI Policy Manual Chapter 8 continues to bundle certain guidance/localization codes with chemodenervation unless documentation clearly supports separate reportability, so pay attention to NCCI edits before appending [[95874]] or [[76942]] (ultrasound guidance). [cms](https://www.cms.gov/files/document/08-chapter8-ncci-medicare-policy-manual-2026-final.pdf)

Key **Medicare**-specific differences from standard commercial coding on this chart:

- Medicare requires the toxin (**J0585**) units administered AND units discarded to be documented separately, with waste billed using the [[-JW]] modifier on a separate line, per current guidance. [ambuusa](https://www.ambuusa.com/Files/Files/Downloads/Ambu%20USA/LandingPages/Neurology/Myoguide/CPT-Billing-Myoguide.pdf)
- National Drug Code (NDC) must be captured on the claim for J0585 for Medicare Part B drug billing, even in the inpatient profee (facility Part B) context.
- Modifier [[-59]] or [[-XS]] may be needed on [[64643]] relative to [[64642]] if the MAC's NCCI edits flag them as a bundled pair, since they're add-on codes designed to be reported together but some MAC systems still require distinct-procedural modifiers depending on system logic. [cms](https://www.cms.gov/files/document/08-chapter8-ncci-medicare-policy-manual-2026-final.pdf)
- EMG guidance ([[95874]]) reimbursement under Medicare is subject to the same NCCI bundling scrutiny — confirm it's not a Column 1/Column 2 edit against [[64642]]/[[64643]] for your specific MAC before appending. [cms](https://www.cms.gov/files/document/08-chapter8-ncci-medicare-policy-manual-2026-final.pdf)
- Medicare does not recognize modifier -50 for [[64642]]-[[64647]] (same as commercial payers) — this is a CPT-level restriction, not payer-specific. [ambuusa](https://www.ambuusa.com/Files/Files/Downloads/Ambu%20USA/LandingPages/Neurology/Myoguide/CPT-Billing-Myoguide.pdf)

Code 64614 (the old "extremity and/or trunk muscles" combo code) was deleted specifically because it lacked the granularity Medicare and other payers wanted for multi-extremity, multi-muscle-count scenarios — which is exactly the scenario this sample chart represents, and why [[64642]]-[[64645]] exist as the current standard. [aapc](https://www.aapc.com/blog/23314-chemodenervation-injections-do-modifiers-apply/)