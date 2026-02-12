<%*
/*
CPT 52310 documentation template (Templater).
Uses prompts/suggesters so you can generate a complete op note quickly. [web:379]
*/

const CPT = "52310";
const DOS = tp.date.now("YYYY-MM-DD"); // [web:390]
const TIME = tp.date.now("HH:mm");

const patient_name = await tp.system.prompt("Patient name (Last, First)");
const mrn = await tp.system.prompt("MRN (optional)");
const dob = await tp.system.prompt("DOB (YYYY-MM-DD, optional)");

const setting = await tp.system.suggester(
  ["Office (POS 11)", "ASC (POS 24)", "Outpatient Hospital (POS 22)", "Inpatient", "ED/Observation"],
  ["Office (POS 11)", "ASC (POS 24)", "Outpatient Hospital (POS 22)", "Inpatient", "ED/Observation"]
);

const provider = await tp.system.prompt("Provider name");
const assistants = await tp.system.prompt("Assistants/staff (optional)");

const indication_type = await tp.system.suggester(
  ["Ureteral stent removal", "Foreign body removal", "Calculus removal"],
  ["Ureteral stent removal", "Foreign body removal", "Calculus removal"]
);

let laterality = "";
if (indication_type === "Ureteral stent removal") {
  laterality = await tp.system.suggester(
    ["Right (RT)", "Left (LT)", "Bilateral", "Unknown/Not stated (document why)"],
    ["Right (RT)", "Left (LT)", "Bilateral", "Unknown/Not stated (document why)"]
  );
}

const symptoms = await tp.system.prompt("Symptoms prompting removal today (optional)");

const stent_placed_for = await tp.system.prompt("If stent: reason placed (e.g., ureteral stone, obstruction) (optional)");
const stent_placed_date = await tp.system.prompt("If stent: date placed (optional)");

const anticoag = await tp.system.prompt("Anticoagulants/antiplatelets + hold plan (optional)");
const allergies = await tp.system.prompt("Allergies (latex/meds) (optional)");
const ua_ucx = await tp.system.prompt("UA/Urine culture results (optional)");

const anesthesia = await tp.system.suggester(
  ["Topical urethral anesthetic", "Local", "Moderate sedation", "General", "Other/See note"],
  ["Topical urethral anesthetic", "Local", "Moderate sedation", "General", "Other/See note"]
);

const prophylactic_abx = await tp.system.suggester(
  ["No", "Yes"],
  ["No", "Yes"]
);

let abx_details = "";
if (prophylactic_abx === "Yes") {
  abx_details = await tp.system.prompt("Antibiotic details (drug/dose/route/time)");
}

const scope_type = await tp.system.suggester(
  ["Flexible cystoscope", "Rigid cystoscope"],
  ["Flexible cystoscope", "Rigid cystoscope"]
);

const scope_size = await tp.system.prompt("Scope size (Fr) (optional)");
const removal_tool = await tp.system.suggester(
  ["Grasping forceps", "Basket", "Other/See note"],
  ["Grasping forceps", "Basket", "Other/See note"]
);
let removal_tool_other = "";
if (removal_tool === "Other/See note") {
  removal_tool_other = await tp.system.prompt("Specify removal tool");
}

const object_removed = await tp.system.suggester(
  ["Ureteral stent", "Foreign body", "Calculus"],
  ["Ureteral stent", "Foreign body", "Calculus"]
);

const count_removed = await tp.system.prompt("Number removed (default 1)", "1");
const removed_intact = await tp.system.suggester(["Yes", "No"], ["Yes", "No"]);

const specimen = await tp.system.suggester(
  ["None", "Foreign body to pathology", "Calculus for stone analysis", "Other/See note"],
  ["None", "Foreign body to pathology", "Calculus for stone analysis", "Other/See note"]
);
let specimen_other = "";
if (specimen === "Other/See note") {
  specimen_other = await tp.system.prompt("Specify specimen handling");
}

const complications = await tp.system.suggester(
  ["None", "Bleeding/hyphema", "Urethral trauma/injury", "Unable to remove—additional procedure needed", "Other/See note"],
  ["None", "Bleeding/hyphema", "Urethral trauma/injury", "Unable to remove—additional procedure needed", "Other/See note"]
);
let complications_other = "";
if (complications === "Other/See note") {
  complications_other = await tp.system.prompt("Describe complications");
}

const followup = await tp.system.prompt("Follow-up timeframe (e.g., 1–2 weeks; PRN)", "PRN");

const file_rename = await tp.system.suggester(
  ["Rename note file now (recommended)", "Do not rename"],
  ["Rename note file now (recommended)", "Do not rename"]
);

if (file_rename.startsWith("Rename")) {
  const safe_patient = patient_name?.replaceAll("/", "-").replaceAll(":", " -");
  await tp.file.rename(`${CPT} - ${safe_patient} - ${DOS}`);
}

/* Suggested ICD-10 (you’ll choose in the note):
Z46.6 = Encounter for fitting and adjustment of urinary device [web:364]
Z96.0 = Presence of urogenital implants [web:370]
*/
-%>

---
type: "procedure-note"
cpt: "<% CPT %>"
dos: "<% DOS %>"
time: "<% TIME %>"
patient: "<% patient_name %>"
mrn: "<% mrn %>"
dob: "<% dob %>"
setting: "<% setting %>"
provider: "<% provider %>"
---

# CPT 52310 — Cystourethroscopy with removal (Simple) — Procedure Note

**CPT 52310 descriptor:** Cystourethroscopy, with removal of foreign body, calculus, or ureteral stent from urethra or bladder (separate procedure); **simple**. [web:362]

## Patient / Encounter
- **Patient:** <% patient_name %>
- **MRN:** <% mrn %>
- **DOB:** <% dob %>
- **Date/Time:** <% DOS %> <% TIME %>
- **Location/POS:** <% setting %>
- **Provider:** <% provider %>
- **Assistants/Staff:** <% assistants %>

## Pre-procedure (Medical necessity)
### Indication
- **Indication type:** <% indication_type %>
- **Laterality (if stent):** <% laterality %>
- **Symptoms prompting removal today:** <% symptoms %>
- **If ureteral stent: reason placed:** <% stent_placed_for %>
- **If ureteral stent: date placed:** <% stent_placed_date %>

### Pertinent history / risks
- **Anticoagulants/antiplatelets + hold plan:** <% anticoag %>
- **Allergies (latex/meds):** <% allergies %>
- **UA/Urine culture (if obtained):** <% ua_ucx %>

### Consent
Risks, benefits, and alternatives discussed; patient elected to proceed. (Discussed dysuria/hematuria, infection, urinary retention, urethral trauma, need for additional procedures, and anesthesia risks as applicable.)

## Diagnoses (ICD-10-CM)
Select the most specific codes supported by the record.

**Device/encounter (often used for stent management):**
- ☐ **Z46.6** Encounter for fitting and adjustment of urinary device. [web:364]
- ☐ **Z96.0** Presence of urogenital implants. [web:370]

**Underlying condition (examples—choose what applies):**
- ☐ N20.1 Calculus of ureter
- ☐ N13.2 Hydronephrosis with renal and ureteral calculous obstruction
- ☐ N13.5 Hydronephrosis with ureteral stricture, NEC
- ☐ R31.0 Gross hematuria / ☐ R31.9 Hematuria, unspecified
- ☐ N39.0 Urinary tract infection, site not specified
- ☐ Other: ______________________

## Procedure performed
**Procedure:** Cystourethroscopy with removal of <% object_removed %> from urethra or bladder (simple). [web:362]  
**Anesthesia:** <% anesthesia %>  
**Prophylactic antibiotics:** <% prophylactic_abx %> <% abx_details %>

### Equipment
- **Cystoscope:** <% scope_type %> <% scope_size %>
- **Removal tool:** <% removal_tool %> <% removal_tool_other %>

## Findings
### Urethra
- ☐ Normal
- ☐ Stricture: ______________________
- ☐ Erythema/trauma: ______________________
- ☐ Other: ______________________

### Bladder
- **Mucosa:** ☐ Normal ☐ Erythema/cystitis ☐ Trabeculation ☐ Lesion/tumor ☐ Stone ☐ Foreign body
- **Ureteral orifices (if relevant):** ______________________
- **Stent visualized (if applicable):** ☐ Yes ☐ No (explain): ______________________
- **Encrustation:** ☐ None ☐ Mild ☐ Moderate ☐ Severe

## Removal details (supporting 52310)
- **Object removed:** <% object_removed %>
- **Count removed:** <% count_removed %>
- **Removal method:** Object grasped under direct visualization and removed via cystoscope.
- **Removed intact?** <% removed_intact %>
- **Specimen:** <% specimen %> <% specimen_other %>
- **EBL:** ☐ None/minimal ☐ Other: ______________________

**Simple/uncomplicated statement (supports 52310):**
- ☐ Removal was uncomplicated/simple; no unusual difficulty encountered. [web:362]

## Complications
- **Complications:** <% complications %> <% complications_other %>

## Post-procedure status & plan
- Patient tolerated procedure: ☐ Yes ☐ No (explain): ______________________
- Post-procedure instructions: hydrate; expect mild dysuria/hematuria; return for fever/chills, inability to void, heavy bleeding/clots, severe pain.
- Meds prescribed/administered: ________________________________________
- Follow-up: <% followup %>
- Next steps (if indicated): imaging / stone prevention counseling / metabolic stone workup / other: ______________________

## Coding QC (optional)
- ☐ Note explicitly states cystourethroscopy performed + what was removed (stent/foreign body/calculus). [web:362]
- ☐ If stent, laterality documented (RT/LT/bilateral or rationale if unknown).
- ☐ “Simple/uncomplicated” statement included to support 52310 (vs complex removal code consideration).
- ☐ ICD-10 includes encounter/device-management code when appropriate (e.g., Z46.6) plus underlying cause as supported. [web:364]
