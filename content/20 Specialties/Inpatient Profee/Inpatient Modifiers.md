**Tags:** #coding/modifiers #inpatient #compliance

## Overview
Modifiers provide additional information about services rendered. Critical for inpatient profee billing.

## Key Inpatient Modifiers

### AI - Principal Physician of Record
- **Use:** Attending physician managing overall care
- **Frequency:** Once per admission
- **Medicare:** Required for initial hospital care

> [!IMPORTANT] AI Modifier
> Only the attending physician bills AI. Consultants do not use this modifier.

### 25 - Significant, Separately Identifiable E/M
- **Use:** E/M on same day as procedure
- **Attached To:** E/M code
- **Example:** [[99232]][[-25]] + procedure code

### [[-57]] - Decision for Surgery
- **Use:** E/M resulting in surgery decision
- **Attached To:** E/M code
- **Timing:** Day before or day of surgery
- **Global Period:** **90-day** procedures only

### [[-59]]] - Distinct Procedural Service
- **Use:** Separate procedure from other services
- **Attached To:** Procedure code
- **Alternative:** XS (separate site)

### XE, XS, XP, XU - Medicare Preferred
| Modifier | Description |
| :--- | :--- |
| **[[-XE]]** | Separate encounter |
| **[[-XS]]** | Separate site/structure |
| **[[-XP]]** | Separate practitioner |
| **[[-XU]]** | Unusual non-overlapping service |

## Common Scenarios

| Scenario | Modifier |
| :--- | :--- |
| **E/M + Procedure same day** | 25 on E/M |
| **Decision for surgery** | 57 on E/M |
| **Two procedures same day** | 59 or XS on procedure |
| **Attending physician** | [[-AI]] on initial care |

> [!WARNING] Modifier Overuse
> Excessive use of modifier 59 is an audit trigger. Use X-modifiers when appropriate for Medicare.

[[00 Inpatient ProFee Coding MOC]]
[[Modifier 25 vs 57]]
[[NCCI Edits for Inpatient]]