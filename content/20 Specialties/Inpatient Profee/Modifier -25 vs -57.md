**Tags:** #coding/modifiers #inpatient #compliance

## Overview
Both modifiers are used to unbundle E/M services from procedures, but for different scenarios.

## Modifier [[-25]]

### Definition
Significant, separately identifiable E/M service by same physician on same day.

### Use Cases
- Minor procedure (0 or 10-day global)
- E/M above and beyond procedure work
- Different diagnosis than procedure

### Example
**99232-25** (Subsequent hospital care)
+
**36415** (Venipuncture)

## Modifier [[-57]]

### Definition
E/M service resulting in decision for major surgery.

### Use Cases
- Major procedure (90-day global)
- Decision made during E/M visit
- Day before or day of surgery

### Example
**99223-57** (Initial hospital care - decision for surgery)
+
[[47562]] (Laparoscopic cholecystectomy)


## Comparison Table

| Feature | Modifier 25 | Modifier 57 |
| :--- | :--- | :--- |
| **Global Period** | 0 or 10 days | 90 days |
| **Timing** | Same day | Day before or day of |
| **Purpose** | Separate E/M from minor procedure | Report surgery decision |
| **Attached To** | E/M code | E/M code |

> [!WARNING] Wrong Modifier Risk
> Using 25 instead of 57 for major surgery will result in E/M denial during global period.

## Documentation Requirements

### For Modifier 25
- Document E/M separately from procedure
- Show medical necessity for both
- Different diagnoses support separation

### For Modifier 57
- Document decision for surgery
- Note discussion of risks/benefits
- Include surgical consent documentation

> [!TIP] Global Period Check
> Always verify procedure's global period before selecting modifier 25 vs 57.

The application of **Modifier -25** versus **Modifier -57** depends on the **global surgical period** of the procedure performed and the **clinical purpose** of the Evaluation and Management (E/M) service. Both are classified as Global Surgery and Payment Modifiers that must be appended exclusively to E/M codes.

---

### 1. Modifier -25: Significant, Separately Identifiable E/M Service

* **Purpose:** Appended to an E/M code when a patient’s condition requires a significant, separately identifiable evaluation and management service above and beyond the usual preoperative and postoperative work inherent to the procedure.
* **Applicable Procedures:** Used **only** with **minor surgical procedures** (global period of **000 or 010 days**) or procedures with a global indicator of **"XXX"**.
* **Key Guidelines & Criteria:**
  * **Work Requirement:** Documentation must show that the E/M visit went above and beyond the routine pre- and post-procedure work inherent to the minor procedure.
  * **Decision to Perform:** The work associated with the decision to perform a minor surgical procedure is included in the global payment for the minor procedure and **cannot** be reported separately as an E/M service. However, if the visit addresses a distinct, significant E/M problem, Modifier -25 unlocks separate payment for that visit.
  * **Diagnosis:** The E/M service and the minor procedure **do not require different diagnosis codes** as long as documentation supports the distinct E/M work.
* **Inappropriate Uses:**
  * Do **not** use Modifier -25 for an E/M visit that resulted in the decision to perform major surgery (use Modifier -57 instead).
  * Do **not** append Modifier -25 to non-E/M codes.
  * Do **not** append Modifier -25 to an office visit code billed on the same day as diagnostic testing (such as OCT or visual field testing), because diagnostic tests already bundle the necessary interpretive E/M component.
  * The complexity add-on code **G2211** is not payable when the underlying E/M visit is billed with Modifier -25 (except alongside preventive services or vaccines).

---

### 2. Modifier -57: Decision for Major Surgery

* **Purpose:** Appended to an E/M code (such as an office visit, hospital visit, or consultation) when that service directly results in the initial decision to perform a major surgery.
* **Applicable Procedures:** Used **only** with **major surgical procedures** (global period of **090 days**).
* **Key Guidelines & Criteria:**
  * **Timing:** The E/M service must occur on the **day of** or the **day before** the major surgical procedure.
  * **Payment Impact:** Separates payment for the preoperative cognitive evaluation from the 90-day global surgical package fee.
* **Inappropriate Uses:**
  * Do **not** use Modifier -57 for minor surgical procedures (000- or 010-day global periods).
  * Do **not** use Modifier -57 for preplanned, prescheduled, or staged procedures.

---

### Quick Comparison Matrix

| Criteria | Modifier -25 | Modifier -57 |
| :--- | :--- | :--- |
| **Code Applied To** | E/M CPT codes only | E/M CPT codes only |
| **Surgical Global Period** | **000 or 010 days (Minor Surgery)** or **XXX** | **090 days (Major Surgery)** |
| **Timing Requirement** | Same day as the procedure | Day of or day before the surgery |
| **Clinical Rationale** | Significant E/M service beyond usual pre/post work | Initial decision to perform major surgery |
| **Requires Separate Diagnosis?** | No | No |

---




[[00 Inpatient ProFee Coding MOC]]
[[Inpatient Modifiers]]
[[NCCI Edits for Inpatient]]