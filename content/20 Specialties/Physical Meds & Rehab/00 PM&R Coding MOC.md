# Physical Medicine & Rehabilitation Coding MOC

## Core Concepts
- [[01 PM&R Overview]]
- [[Place of Service in Rehab]]
- [[Medical Necessity in Rehab]]

## Code Sets
- [[CPT 97000 Series; Physical Medicine]] (Physical Medicine)
- [[E/M Coding for Physiatrists]]
- [[ICD-10 for Musculoskeletal]]
- [[ICD-10 for Neurological]]

## Modifiers & Rules
- [[Therapy Modifiers]] (GP, GO, GN)
- [[The 8 Minute Rule]]
- [[NCCI Edits for Rehab]]
- [[Modifier 25 vs 59]]

## Procedures
- [[Injections & Blocks Blocks]]
- [[EMG and Nerve Conduction Studies]]
- [[Spinal Procedures]]

## Compliance
- [[Documentation Requirements for PM&R]]
- [[Audit Triggers in PM&R]]
- [[Telehealth in PM&R]]

> [!danger] High Risk Areas in PM&R
> 
> 1. **Unbundling:** Billing 97140 (Manual) and 97110 (Exercise) for the same time period.
> 2. **Upcoding E/M:** Level 5 visits for stable chronic pain patients without complex MDM.
> 3. **Lack of Supervision:** Billing "Incident-To" without the physician physically present in the office suite (Medicare rule).
> 4. **EMG Add-ons:** Billing NCS add-on codes without the primary code.


### 📋Critical Compliance

```dataview
TABLE file.mtime as "Last Updated"
FROM ""
WHERE contains(file.tags, "#compliance")
SORT file.mtime DESC
```


### 📋 PM&R Specific Dashboard Query

```dataview
TABLE file.tags as "Tags", file.mtime as "Last Updated"
FROM #coding
WHERE contains(file.path, "PM&R")
SORT file.mtime DESC
LIMIT 10
```

### 📋 Compliance Notes

```dataview
TABLE WITHOUT ID
file.link as "Note",
file.mtime as "Modified"
FROM #compliance
SORT file.mtime DESC
```

### ⚠️ Pending Queries

```dataview
TABLE WITHOUT ID
file.link as "Query",
file.mtime as "Created"
FROM #coding/query
WHERE !contains(file.tags, "#resolved")
SORT file.mtime DESC
```


---

## 🔧 Dataview Syntax Quick Reference

| ❌ Wrong | ✅ Correct |
| :--- | :--- |
| `file.path contains "PM&R"` | `contains(file.path, "PM&R")` |
| `file.tags = "#coding"` | `contains(file.tags, "#coding")` |
| `FROM #tag WHERE...` | `FROM #tag` (no WHERE needed for simple tag filter) |
| `SORT BY file.mtime` | `SORT file.mtime DESC` |

---

## 🛠 Additional Troubleshooting

| Issue | Fix |
| :--- | :--- |
| Query shows as code block | Add a **blank line before** the ```dataview block |
| No results returned | Verify tags exist in notes (check frontmatter or body) |
| Plugin not recognized | Enable Dataview in **Settings → Community Plugins** |
| Field not found | Use `file.field` for metadata, `field` for frontmatter values |

---

> [!TIP] Test Query
> To verify Dataview is working, try this simple test query first:
>
> ```dataview
> LIST
> FROM ""
> LIMIT 5
> ```
>
> If this works, your plugin is functioning correctly.

Let me know if you need queries tailored to specific PM&R coding scenarios like injection tracking, EMG logs, or payer policy references!

## Resources
- [[CMS Medicare Guidelines]]
- [[CPT Assistant References]]