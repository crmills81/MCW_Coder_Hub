# 🧬 Sepsis Decision Tree

## 🎯 Purpose
Structured logic for identifying sepsis vs infection vs SIRS.

---

# 🧩 Step 1: Identify Infection
- Fever or hypothermia  
- Tachycardia  
- Tachypnea  
- Elevated WBC or bands  

If NO → Not sepsis  
If YES → Continue  

---

# 🧩 Step 2: Organ Dysfunction
- Lactate > 2  
- Hypotension  
- Altered mental status  
- Creatinine rise  
- Low platelets  
- Bilirubin elevation  

If NO → Infection without sepsis  
If YES → Sepsis  

---

# 🧩 Step 3: Septic Shock
- Lactate ≥ 4 **OR**  
- Requires vasopressors  

---

# 🧠 Documentation Tips
- Link **clinical indicators** to diagnosis  
- Avoid diagnosing sepsis without organ dysfunction  
- Capture **source of infection**  

---

## 🔗 Cross‑Links
- [[Query Templates]]
- [[Audit Checklists]]