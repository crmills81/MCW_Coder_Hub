---
title: DRG <% tp.user.prompt("DRG # (e.g., 291)") %> - <% tp.user.prompt("Description (e.g., Heart Failure MCC)") %>
tags: [inpatient, drg]
date: <% tp.date.now("YYYY-MM-DD") %>
msdrg: <% tp.user.prompt("MS-DRG #") %>
mdc: <% tp.user.prompt("MDC #") %>
---

## Principal Dx
- ICD-10: [[<% tp.user.prompt("Main Dx code") %>]] (link to Dx note)
- Common CCs: 
- Common MCCs: 

## Procedures / SOI
- Common PCS: 
- OR / Non-OR:

## Documentation Must-Haves
- 
- 

## Payer Notes / Denials
- 

## Links
[[Workflows/Inpatient-Query-DRGs]] | [[Cases/Practice-DRGs]]