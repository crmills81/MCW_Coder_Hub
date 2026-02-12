---
title: Ureteral Stent Placement Op Note
tags: [urology, surgery, stent]
date: <% tp.date.now("YYYY-MM-DD") %>
indication: <% await tp.system.prompt("Indication (e.g., obstructing ureteral stone)") %>
side: <% await tp.system.suggester(["right", "left", "bilateral"], ["right", "left", "bilateral"]) %>
stent_size: <% await tp.system.prompt("Stent size (e.g., 6F x 26 cm double-J)") %>
physician: <% await tp.system.prompt("Physician") %>
anesthesia: <% await tp.system.suggester(["general", "spinal", "MAC"], ["general", "spinal", "MAC"]) %>
fluoroscopy: <% await tp.system.suggester(["yes", "no"], ["yes", "no"]) %>
dwell_time: <% await tp.system.prompt("Dwell time (e.g., 1–2 weeks)") %>
---

# <% tp.frontmatter.title %> — <% tp.frontmatter.side %> <% tp.frontmatter.indication %>

## Preoperative Diagnosis
- <% tp.frontmatter.side %> <% tp.frontmatter.indication %> with [[hydroureteronephrosis]]

## Procedure Performed
- [[Cystoscopy]] <%* if (tp.frontmatter.fluoroscopy === "yes") { tR += "with fluoroscopy"; } %>.
- Retrograde pyelogram
- <% tp.frontmatter.side %> ureteral stent placement (<% tp.frontmatter.stent_size %>)

## Operative Details
1. Patient positioned in [[lithotomy]] under <% tp.frontmatter.anesthesia %>.
2. Rigid cystoscope passed via urethra into bladder.
3. <% tp.frontmatter.side %> ureteral orifice identified; guidewire advanced up ureter.
4. <% tp.frontmatter.stent_size %> stent advanced over wire; proximal/distal curls confirmed.
5. Planned removal in <% tp.frontmatter.dwell_time %>.

**Key Findings:** 

## Coding Support
[[Cystoscopy]] with <% tp.frontmatter.side %> ureteral stent placement.  
Primary CPT: **52310** (adjust per ureteroscopy details).

## Complications & Postop
- Expected: flank pain, [[dysuria]], [[hematuria]].  
- Discharge: stent instructions, removal appt in <% tp.frontmatter.dwell_time %>.

**Postop Note:** Patient tolerated well; voiding intact.
