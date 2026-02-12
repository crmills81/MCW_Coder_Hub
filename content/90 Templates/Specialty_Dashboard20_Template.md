
---
tags:
  - specialty_dashboard
  - specialty/urology
---

# 🏥 Urology Command Center

## ⚡ Top 20 "Cheat Sheet"
*(The codes I use 80% of the time)*

| CPT Code | Description | Modifier Hint |
| :--- | :--- | :--- |
| **Code** | *Description* | *(-LT/-RT?)* |
| **Code** | *Description* | *(-50?)* |
| **Code** | *Description* | |

---

## 📚 My Guidelines (Auto-List)
*(Automatically pulls notes from Folder 10 tagged with this specialty)*

```dataview
TABLE without id file.link as "Topic", file.mtime as "Last Updated"
FROM #medical_coding/guideline
WHERE contains(file.tags, this.file.tags[1])
SORT file.name ASC