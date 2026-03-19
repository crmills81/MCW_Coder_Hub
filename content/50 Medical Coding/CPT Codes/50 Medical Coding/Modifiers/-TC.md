---
tags:
  - ophthalmology
  - ENT
  - modifiers
  - component-billing
  - Medicare
title: -TC
description: Modifier -TC (Technical Component)
last_updated: 2026-02-13
type: coding-guide
aliases:
  - Modifier -TC
  - Modifier TC
  - TC
---

# Modifier -TC: Technical component (component billing)

## Quick reference
- **Definition:** Modifier **[[-TC]]** indicates you’re billing **only the technical component** of a service that has separate professional and technical parts. 
- **Pairs with:** Modifier **[[-26]]** identifies the **professional component** for codes that have a professional/technical split.   
- **“Global” billing:** If both components are furnished by the same entity (and you’re billing globally), submit the code **without [[-26]] or -TC**.  

---

## Medicare PC/TC indicator (the “is -TC allowed?” switch)
CMS uses the MPFS **Professional Component/Technical Component ([[PC]]/TC) indicator** to show whether a CPT/HCPCS code can be split into professional vs technical components. 

Common PC/TC indicator meanings (from CMS MPFS indicator definitions):
- **Indicator 0 (physician service):** PC/TC concept does not apply; **-26 and -TC cannot be used**. 
- **Indicator 1 (diagnostic tests / radiology services):** Code generally has **both** professional and technical components; **-26 and -TC can be used**.   
- **Indicator 2 (professional component only code):** Standalone “PC-only” code; **-26 and -TC cannot be used**.  
- **Indicator 3 (technical component only code):** Standalone “TC-only” code; **-26 and -TC cannot be used**.  
- **Indicator 4 (global test only code):** Standalone “global-only” code; **-26 and -TC cannot be used**.  
- **Indicator 6 (lab physician interpretation codes):** CMS notes **modifier TC cannot be used** for these. 
- **Indicator 9:** Concept of professional/technical component does not apply.   

---

## What -TC includes (RVU/payment mechanics)
For **PC/TC indicator 1** codes, CMS explains that:  
- RVUs reported with **-26** include **physician work + practice expense + malpractice**.  
- RVUs reported with **-TC** include **practice expense + malpractice only** (no work RVUs). 
- RVUs reported **without a modifier** equal the sum of the RVUs for **both** professional and technical components.   

---

## Most common uses (real workflow)
Use **-TC** when your entity furnished the **equipment/staff/technical performance** of a split-billable diagnostic service, but did **not** provide the physician interpretation/report.  

Typical examples by setting (keep it code-driven, not specialty-driven):
- **Facility performs test; outside physician interprets:** Facility bills the CPT with **-TC** and the interpreting physician bills the appropriate **professional component** (often the same code with **-26**, depending on the code family/PC-TC indicator).  
- **Independent diagnostic testing arrangement:** The entity that only furnishes the technical portion bills **-TC** when the code’s PC/TC indicator allows it.  

Ophthalmology / ENT “where you’ll see it” (conceptual, code-specific):
- Many **diagnostic tests and imaging services** fall under the CMS PC/TC split concept (especially indicator **1**), so -TC questions often come up around who performed the test vs who interpreted it.  

---

## When NOT to use -TC (high-denial scenarios)
Do **not** append -TC when the MPFS PC/TC indicator shows the concept doesn’t apply, or when the code is already PC-only/TC-only/global-only. 
Do **not** append -TC for indicator **0** physician-service codes (visits/procedures) because CMS states -26/-TC are not valid in that scenario.   

---

## Documentation checklist (what to confirm before billing -TC)
- The medical record supports that your billing entity provided the **technical performance** (equipment, staff, acquisition/performance) and did not provide the professional interpretation/report.  
- The interpretation/report (when separately billed by someone else) exists and is attributable to the interpreting professional, consistent with PC/TC splitting rules for the code. 
- The CPT/HCPCS has a PC/TC indicator that **allows** splitting (commonly indicator **1**).   

---

## Clean-claim workflow (fast)
1) Confirm the service’s **MPFS PC/TC indicator** (if it’s not split-eligible, stop—don’t use -TC).  
2) If split-eligible and you furnished only the technical portion, bill the CPT with **-TC** (and ensure the professional interpreter bills correctly on their side).   
3) If your entity furnished **both** components, bill the code **globally** (no -26/-TC).   
