# 🏷️ Status Indicators Quick Reference

## 🎯 Purpose
Quick lookup for OPPS (Outpatient Prospective Payment System) status indicators used on facility claims.

---

# 🧩 Common Status Indicators

| SI | Meaning |
|-----|---------|
| **S** | Significant procedure, not discounted |
| **T** | Significant procedure, multiple-procedure reduction applies |
| **X** | Ancillary service |
| **Q1** | STV-packaged: conditionally packaged service |
| **Q2** | T-packaged: conditionally packaged procedure |
| **Q3** | Codes that may be paid separately or packaged depending on circumstances |
| **N** | Packaged service (always packaged, no separate payment) |
| **E1** | Non-covered by Medicare |
| **J1** | Comprehensive APC (single payment for all services on claim) |
| **J2** | Comprehensive observation services |
| **K** | Non-pass-through drugs and biologicals |
| **L** | Influenza/pneumococcal vaccines |
| **M** | Clinical laboratory tests |
| **R** | Blood and blood products |

---

# 🧠 Notes
- Status indicators determine **how** a service is paid under OPPS.  
- Q‑status indicators require **conditional logic** based on other services on the claim.  
- N‑status items are **always packaged** — never separately reimbursed.  
- J1/J2 indicate **comprehensive APCs**, meaning one payment covers nearly everything on the claim.  

---

## 🔗 Cross‑Links
- [[UB‑04 Field Reference]]
- [[Facility Modifiers Guide]]
- [[CIC Quick Reference]]
