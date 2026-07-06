```dataview
TABLE without id
  file.link as "Guideline",
  file.mtime as "Last Updated"
FROM #context/mcw_profee
WHERE file.name != "MCW_Profee_Guideline"
SORT file.name ASC
GROUP BY replace(replace(replace(file.tags[1], "#specialty/", ""), "_", " "), "otolaryngology", "ENT")
```

