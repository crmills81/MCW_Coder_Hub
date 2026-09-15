
```dataview
TABLE code_type AS "Code Type", file.mtime AS "Last Updated", status AS "Status"
FROM #pmr
SORT file.mtime desc
```

---

```dataview
TABLE file.mtime AS "Last Updated"
FROM "Coding Hub" 
WHERE specialty = "pmr"
SORT file.name asc
```