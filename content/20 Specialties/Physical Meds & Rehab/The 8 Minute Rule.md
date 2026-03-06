**Tags:** #coding/rules #medicare #therapy

## Definition
A rule used by Medicare (and many payers) to determine how many billable units of a **timed** CPT code can be billed based on the total minutes of service provided.

## The Logic
- 1 Unit = 15 Minutes.
- To bill 1 unit, you must provide at least **8 minutes** of that specific service.
- Remainder minutes are aggregated to determine additional units.

## Chart
| Total Minutes | Billable Units |
| :--- | :--- |
| 0 - 7 | 0 |
| 8 - 22 | 1 |
| 23 - 37 | 2 |
| 38 - 52 | 3 |
| 53 - 67 | 4 |

## Example
Patient receives:
- 97110 (Ther Ex): 15 mins
- 97140 (Manual): 10 mins

**Calculation:**
- 97110: 15 mins = 1 Unit (Remainder 0)
- 97140: 10 mins = 1 Unit (Remainder 0)
- **Total:** 2 Units.

> [!NOTE] Mixed Remainders
> If you have 7 mins of 97110 and 7 mins of 97140, you cannot bill separately. However, combined (14 mins), you still do not reach the 8-minute threshold for a *second* unit of either specific code. Rules vary on aggregating different codes; Medicare generally requires 8 mins per *code* to bill a unit of that code.

[[CPT 97000 Series; Physical Medicine]]