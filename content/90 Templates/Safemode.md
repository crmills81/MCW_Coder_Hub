---
ICD-10 Code: <% await tp.system.prompt("ICD-10 Code") %>
Description: <% await tp.system.prompt("Description") %>
HCC (Risk) code: <% await tp.system.suggester(["Yes", "No"], ["Yes", "No"], false, "Is this an HCC (Risk) code? (Yes/No)") %>
created: <% tp.file.creation_date("YYYY-MM-DD @ HH:mm") %>
tags: icd10
---

# 🧬ICD‑10 Code Detail

**ICD‑10 Code:** `{{ICD-10 Code}}`  
**Description:** {{Description}}  
**HCC (Risk) code:** {{HCC (Risk) code}}  

## 🧾Notes
- Add payer nuances, HCC grouping, or hierarchy notes here.
- You can link to related conditions or bundles of ICD‑10 codes.
