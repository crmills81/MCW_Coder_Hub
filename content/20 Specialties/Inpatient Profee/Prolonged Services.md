**Tags:** #coding/cpt #inpatient #prolonged

## Overview
Prolonged service codes are add-on codes for E/M services exceeding typical time.

## Inpatient Prolonged Codes (2023+)

| CPT | Description | Time |
| :--- | :--- | :--- |
| **[[99417]]** | Each 15 min beyond threshold | 15 min increments |

## Threshold Requirements

| Base Code | Typical Time | Prolonged Starts At |
| :--- | :--- | :--- |
| **[[99221]]** | 40 min | 55 min |
| **[[99222]]** | 60 min | 75 min |
| **[[99223]]** | 80 min | 95 min |
| **[[99231]]** | 25 min | 40 min |
| **[[99232]]** | 40 min | 55 min |
| **[[99233]]** | 55 min | 70 min |

> [!IMPORTANT] 15-Minute Increments
> Each unit of **99417** represents 15 minutes beyond the threshold.

## Calculation Example
Service: [[99233]] (typical 55 min)
Actual time: **100 minutes**
Threshold: **70 minutes**
Excess: **30 minutes**
Prolonged units: 2 **(99417 x 2)**


## Documentation Requirements

| Element | Requirement |
| :--- | :--- |
| **Total Time** | Document exact minutes |
| **Activities** | What was done during time |
| **Medical Necessity** | Why extended time needed |

## Critical Care Prolonged

| Code | Description |
| :--- | :--- |
| **[[99291]]** | First 30-74 min critical care |
| **[[99292]]** | Each additional 30 min |
| **[[99417]]** | NOT used with critical care |

> [!WARNING] Critical Care Exception
> Do NOT use 99417 with critical care. Use 99292 for additional critical care time.

## Payer Variability

| Payer | 99417 Accepted |
| :--- | :--- |
| **Medicare** | Yes (with G0316 alternative) |
| **Commercial** | Varies |
| **Medicaid** | Varies by state |

> [!TIP] Medicare **G0316**
> Medicare has alternate prolonged service code [[G0316]]. Verify payer-specific requirements.

[[00 Inpatient ProFee Coding MOC]]
[[Inpatient E/M Codes]]
[[Critical Care Codes]]