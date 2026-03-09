**Tags:** #coding/ncci #inpatient #compliance

## Definition
National Correct Coding Initiative edits prevent inappropriate code combinations.

## Types of Edits

### Procedure-to-Procedure (PTP)
- Two codes cannot be billed together
- May allow modifier if distinct

### Medically Unlikely Edits (MUE)
- Maximum units per day
- Exceeding requires justification

## Common Inpatient PTP Edits

| Column 1 | Column 2 | Modifier? |
| :--- | :--- | :--- |
| **[[99232]]** | **[[99233]]** | No (same day) |
| **[[99291]]** | **[[99231]]-[[99233]]** | No (same time) |
| **[[99221]]** | **[[99222]]** | No (same admission) |
| **[[99238]]** | **[[99239]]** | No (same day) |

## Critical Care Bundling

### Bundled with 99291
| Service | Code | Status |
| :--- | :--- | :--- |
| IV insertion | [[36000]] | Bundled |
| Venipuncture | [[36415]] | Bundled |
| NG tube | [[43752]] | Bundled |
| Vent management | 94002-94004 | Bundled |

### Separate from 99291
| Service | Code | Status |
| :--- | :--- | :--- |
| Central line | 36556-36558 | Separate |
| Arterial line | [[36620]] | Separate |
| Intubation | [[31500]] | Separate |
| Chest tube | 32551 | Separate |

## Same Day E/M Limitations

> [!WARNING] One Initial Per Admission
> Only one initial hospital care code per admission per physician/specialty.

| Scenario | Allowed |
| :--- | :--- |
| **Initial + Subsequent same day** | No |
| **Subsequent + Discharge same day** | No (bill discharge only) |
| **E/M + Critical Care same day** | Yes ([[modifier 25]]) |
| **Two physicians same specialty** | No (combine time) |

## MUE Limits

| Code | Typical MUE | Notes |
| :--- | :--- | :--- |
| **[[99291]]** | 1 per day | First 74 minutes |
| **[[99292]]** | Variable | Each addl 30 min |
| **[[99238]]** | 1 per day | Discharge ≤30 min |
| **[[99239]]** | 1 per day | Discharge >30 min |

> [!TIP] NCCI Tool
> Use CMS NCCI PTP editor tool to verify code combinations before billing.

[[00 Inpatient ProFee Coding MOC]]
[[Critical Care Codes]]
[[Inpatient Modifiers]]