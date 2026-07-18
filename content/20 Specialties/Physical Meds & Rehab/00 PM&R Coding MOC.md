# Physical Medicine & Rehabilitation Coding MOC

## Core Concepts
- [[01 PM&R Overview]]
- [[Place of Service in Rehab]]
- [[Medical Necessity in Rehab]]
- [[M. E. A. T Criteria|MEAT criteria]]

## Code Sets
- [[CPT 97000 Series; Physical Medicine]]
- [[E&M Coding for Physiatrists]]
- [[ICD-10 for Musculoskeletal]]
- [[ICD-10 for Neurological]]

## Modifiers & Rules
- [[Therapy Modifiers]]
- [[The 8 Minute Rule]]
- [[NCCI Edits for Rehab]]
- [[Modifier -25 vs -59]]

## Procedures
- [[Injections & Blocks]]
- [[Spinal Procedures]]

## Compliance
- [[Documentation Requirements for PM&R]]
- [[Audit Triggers in PM&R]]
- [[Telehealth in PM&R]]
- [[CMS Medicare Guidelines]]
- [[CPT Assistant References]]

## Resources
- [[External Links]]

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


## Resources
- [[CMS Medicare Guidelines]]
- [[CPT Assistant References]]