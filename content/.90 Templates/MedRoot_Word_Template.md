<%*
// 1. Get the Title (The Root Word)
const title = tp.file.title;

// 2. Prompt for Definitions to speed up data entry
const shortDef = await tp.system.prompt("Short Definition (e.g., Eyelid)");
const fullDef = await tp.system.prompt("Full Definition (e.g., Relating to the eyelid fold)");

// 3. Select Etymology (Greek/Latin)
const origins = ["#greek", "#latin", "#other"];
const origin = await tp.system.suggester(["Greek", "Latin", "Other"], origins);

// 4. Calculate Alphabet (Strip symbols like "-" from "Blepharo-")
const alpha = title.replace(/[^a-zA-Z]/g, "").charAt(0).toUpperCase();
%>
---
tags: [medterm]
aliases: 
roots: ["<% tp.file.title %>"]
forms: [prefix, suffix]
alphabet: <% tp.file.title.replace(/[^a-zA-Z]/g, "").charAt(0).toUpperCase() %>
definition: [<% shortDef %>]

---
>[!Note] DEFINITION of <% title %>
><% fullDef %>
_____
>[!info]+ ETYMOLOGY of <% title %>
><% origin %>
_____
>[!tip]+ DERIVATIONS of <% title %>
>```dataview
>TABLE definition AS Definition
>FROM #medterm 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
>SORT file.name ASC
>```
_____
>[!faq]- Query functionality
>```dataview
>TABLE definition AS Definition
>FROM #medterm 
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```

[[Med roots]]
[[Appendix A Prefixes]]
[[Appendix B Combining Forms]]
[[Appendix C Suffixes]]
[[Appendix D Suffix forms]]