**Setting:** Inpatient Rehabilitation Unit | POS 21
**Patient:** 58 y/o male, right-hand dominant
**Attending:** PM&R (Physiatry)

---

**History:**
Patient is 6 weeks s/p left MCA ischemic cerebral infarction, now admitted to inpatient rehab for intensive therapy. Course has been complicated by progressive right upper and right lower extremity spasticity limiting active range of motion, positioning, and participation in PT/OT. Modified Ashworth Score 3/4 at right elbow flexors and wrist flexors; 3/4 at right ankle plantarflexors. Spasticity is impeding functional progress despite oral baclofen and aggressive stretching program. Risks, benefits, and alternatives of chemodenervation with onabotulinumtoxinA discussed with patient; written consent obtained.

**Procedure:** Chemodenervation of multiple muscles, right upper and right lower extremity, with electrical stimulation guidance for muscle localization.

**Technique:**
Patient positioned supine. Skin prepped with alcohol. Target muscles localized individually using electrical stimulation via Teflon-coated monopolar needle electrode, one extremity at a time.

***Right upper extremity (3 muscles injected):***
- Biceps brachii — 100 units
- Flexor carpi radialis — 50 units
- Flexor digitorum superficialis — 50 units
UE subtotal: 200 units

***Right lower extremity (2 muscles injected):***
- Gastrocnemius (medial and lateral heads, single muscle) — 100 units
- Tibialis posterior — 50 units
LE subtotal: 150 units

**Total onabotulinumtoxinA administered:** 350 units, reconstituted per standard dilution protocol.

**No immediate complications.** Patient tolerated procedure well. Post-procedure neurovascular status intact distally. Continue PT/OT with expected improvement in tone over 3-7 days.

---

## Inpatient Professional Fee Coding

**Coder note:** Physician professional fee claims — even for services rendered during an inpatient stay — follow the *outpatient/physician* ICD-10-CM guidelines (Section IV), not the facility inpatient guidelines (Section II). No "probable/suspected" logic applies here regardless; the diagnosis is established (confirmed prior stroke, active exam findings).

### ICD-10-CM

**First-listed:** `I69.351` — [[Hemiplegia]] and [[hemiparesis]] following cerebral infarction affecting right dominant side

*Rationale:* Patient is right-hand dominant with residual deficit on the right side, 6 weeks out from [[cerebral infarction]] — this is sequela, not acute [[stroke]], so it's coded from the I69.3- family rather than I63.x. The dominant/nondominant 5th character is documented (dominant hand affected). This single code captures the neurologic deficit driving the spasticity; a separate G81.1 ([[spastic hemiplegia]]) is not layered on top since [[I69.351]] already represents the late-effect hemiplegia — don't hedge across both.

*No additional codes on this claim* — no acute conditions were evaluated/managed at this encounter beyond the sequela being treated.

### CPT — Procedure

| Code | Description (paraphrased) | Units |
|---|---|---|
| `64642` | Chemodenervation of one extremity, 1-4 muscles (first extremity — RUE, 3 muscles) | 1 |
| `64643` | Chemodenervation, each additional extremity, 1-4 muscles (add-on — RLE, 2 muscles) | 1 |
| `95873` | Electrical stimulation guidance for chemodenervation (add-on) | 2 |

**Modifiers:**
- [[95873]] reported twice — once per extremity where guidance was separately performed and documented. Append [[-59]] (or [[-XS]] — separate structure — per your payer's edit preference) to the second unit to support separate, distinct extremity against NCCI bundling.
- No [[-RT]]/[[-LT]] needed on [[64642]]/[[64643]] — these codes are defined *per extremity*, not per paired structure, so laterality modifiers don't apply the way they would to a paired-organ code.

**Left off the pro fee claim on purpose:**
- **J0585** (onabotulinumtoxinA supply) — drug cost for a hospital *inpatient* is a facility charge, not a physician pro fee line. Physician bills the injection service only.
- **No separate E/M** — this encounter was a dedicated procedure visit, not billed alongside a distinct subsequent hospital care code. If your real-world chart shows the physiatrist also performed a significant, separately documented E/M (e.g., new complaint worked up same visit), modifier `25` would apply to that E/M — not applicable here since the note is procedure-only.

---

### Final claim line

```
Dx: I69.351
CPT: 64642, 64643, 95873 x2 (-59/-XS on 2nd unit)
```

---

## If the patient has Medicare instead of a commercial insurance

>

### 1. New 2026 LCD requirement — objective scale documentation
Effective for services on or after February 22, 2026, five Medicare Administrative Contractors — CGS, NGS, Noridian, WPS, and Palmetto GBA — implemented new local coverage determinations for botulinum toxin injections that add dosing guidelines and new documentation requirements, including an objective assessment measuring illness severity at baseline, after each procedure, and at each follow-up visit, covering conditions including spasticity-related diagnoses. Wisconsin/MCW falls under **NGS Jurisdiction 6**, so this directly applies to your claims.

Practically: your chart's Modified Ashworth Score documentation isn't optional flavor text anymore for Medicare — it's now a coverage requirement. The claim needs:
- Baseline objective score (you have this — MAS 3/4 elbow/wrist flexors, 3/4 ankle plantarflexors)
- A plan for follow-up reassessment using the *same* scale, or Medicare's contractor can deny for insufficient documentation of clinical effectiveness

### 2. Continuity-of-treatment documentation (repeat cycles)
For ongoing/repeat chemodenervation series (not the first-ever treatment), Medicare wants documentation showing the clinical effectiveness of the two consecutive treatments that preceded the anticipated procedure. Not relevant to a first-time injection like this example, but worth a note in the vault since inpatient rehab patients often come back for repeat cycles.

### 3. NCCI edit — guidance code bundling
`95873` is subject to a National Correct Coding Initiative edit against `64642`/`64643`. Medicare's edit pair requires the modifier you already identified (`59`/`XS`) on the second guidance unit to prevent auto-denial as an incidental/bundled service — this isn't optional under Medicare the way it might be negotiable with a commercial payer.

### 4. Prior authorization — does NOT apply here
**Medicare's** PA demonstration program for botulinum toxin only triggers when a botulinum toxin J-code (**J0585-J0589**) is billed in conjunction with CPT [[64612]] or [[64615]] — the facial nerve/chronic migraine codes — performed in an ASC or hospital outpatient department. This encounter uses `64642`/`64643` (extremity codes), not `64612`/`64615`, and it's inpatient, not ASC/HOPD — so no PA requirement here. Worth noting in the vault as a common point of confusion, since coders sometimes assume all Botox codes carry the PA requirement.

### 5. Drug supply / JW modifier — still not on the pro fee claim
Under Medicare Part A, the facility bills the drug (bundled into the inpatient DRG payment) — the [[-JW]] modifier, used to report a discarded portion of a single-use drug vial, matters when a J-code is being billed, but that's a facility-side concern for this inpatient encounter, not something that touches your professional fee claim.

### 6. Diagnosis coverage check
Before finalizing, cross-check `I69.351` against NGS's current covered ICD-10-CM list for the botulinum toxin LCD/LCA — limb spasticity is a standard covered indication, but MAC covered-code lists get revised, and it's a five-second lookup that prevents an avoidable denial.

---
