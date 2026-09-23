---
tags:
  - medroot
aliases: []
roots:
  - -gram
forms:
  - compound suffix form
  - suffix
alphabet: G
definition:
  - record of the activity of an organ
---
>[!Note] DEFINITION of [[-gram]]
>forms nouns: [[gram-]] - a record of the activity of an organ (record)
_____
>[!info]+ ETYMOLOGY of [[-gram]]
>#greek
>
>|Component|Origin|Meaning|
>|---|---|---|
>|**[[gram-]]** / **[[-gram]]**|Greek _γράμμα_ (grámma), from _γράφειν_ (gráphein)|Noun-forming suffix — "**record**," "**something written**," "**drawing/tracing**" — noun-forming suffix denoting a diagnostic image, tracing, or record of physiological activity or anatomical structure|
>
> The word entered English in the **1610s** as *diagram* (**noun**), borrowed from French *diagramme*, from Late Latin ***diagramma***, from Greek ***διάγραμμα*** (diagramma) — literally "**that which is marked out by lines, a drawing**" (from *dia-* "across, through" + *gramma* "something written or drawn"). In physiological and radiographic recording, specialized medical compounds appeared in the **1870s** with *cardiogram*, followed by *electrocardiogram* in the **1900s**. The root *grámma* ("**something written, drawing, record**") connects [[-gram]] to the entire **recording and imaging roots**: ***[[electrocardiogram]]*** (**[[electro-]] + [[cardio-]] + -gram $\rightarrow$ electrical tracing of heart activity**), ***[[angiogram]]*** (**[[angio-]] + [[-gram]] $\rightarrow$ radiographic record of blood vessels**), and ***[[encephalogram]]*** (**[[encephalo-]] + [[-gram]] $\rightarrow$ recording of electrical activity in the brain**). The **noun-forming suffix** [[-gram]] is paired with the recording instrument [[-graph]] and procedural technique [[-graphy]], and is extremely productive across diagnostic radiology, cardiology, and neurology: e.g., **[[echocardiogram]], [[myelogram]], [[ureterogram]], [[mammogram]]**, and [[venogram]].
_____
> [!danger]+ 🔗 RELATED TERMS to [[-gram]]
> 
> - **[[-graph]]** — instrument counterpart of **[[-gram]]**; shares the Greek *gráphein* root; designates the physical recording instrument, device, or apparatus that detects, measures, or registers physiological phenomena (e.g., electrocardiograph instrument vs. electrocardiogram tracing).
> - **[[-graphy]]** — procedural/process counterpart of **[[-gram]]**; denotes the diagnostic imaging examination, method, or recording technique itself (e.g., [[angiography]], [[mammography]]), whereas **[[-gram]]** designates the resulting tangible image, tracing, or record produced.
> - **[[electrocardiogram]]** (ECG / EKG) — diagnostic electrical tracing of myocardial depolarization and repolarization across time recorded via surface electrodes; gold standard record for evaluating acute myocardial infarction ([[I21.9]]), cardiac arrhythmias ([[I49.9]]), and conduction disturbances (I44-I45).
> - **[[echocardiogram]]** — graphic and acoustic imaging record of cardiac chambers, valves, and hemodynamic flow patterns produced by reflected ultrasound waves; essential for diagnosing heart failure ([[I50.9]]) and valvular heart disease (I08-I39).
> - **[[angiogram]]** — radiographic image/record of blood vessel lumen caliber, architecture, and patency following intravascular injection of radiopaque contrast medium; diagnostic record for coronary artery disease ([[I25.10]]), arterial [[stenosis]] (I77.1), and aneurysm (I72.x).
> - **[[electroencephalogram]]** (EEG) — electrophysiologic record of spontaneous cerebral cortical electrical activity recorded via scalp electrodes; primary diagnostic tracing for epileptic seizures (G40.x), [[encephalopathy]] ([[G93.40]]), and assessment of cerebral death.
> - **[[electromyogram]]** (EMG) — electrodiagnostic recording of muscle motor unit electrical potential during rest and voluntary contraction; distinguishes lower motor neuron denervation ([[G12.21]], M54.1x) from primary myopathies ([[G72.9]]).
> - **mammogram** — projection X-ray photographic/digital record of breast parenchyma; primary diagnostic and screening imaging study for the detection of breast neoplasms (C50.x) and microcalcifications ([[R92.0]]).
> - **[[myelogram]]** — fluoroscopic radiographic record of the spinal subarachnoid space, spinal cord, and exiting nerve roots following intrathecal contrast injection; evaluates spinal cord compression and herniated nucleus pulposus (M51.2x) when MRI is contraindicated.
> - **[[ureterogram]]** — fluoroscopic radiographic record of the ureteral lumen following retrograde [[catheterization]] or antegrade nephrostomy contrast opacification; evaluates ureteral obstruction ([[N13.9]]), stricture ([[N13.5]]), or filling defects.
> - **[[pyelogram]]** / **[[urogram]]** — radiographic record of the renal pelvis, calyces, and ureteric architecture; used in evaluating hydronephrosis ([[N13.30]]), renal calculus disease ([[N20.0]]), and urothelial neoplasms.
> - **[[venogram]]** ([[phlebogram]]) — radiographic record of venous architecture and flow following intravenous contrast opacification; definitive imaging record for deep vein thrombosis (I82.40x) and chronic venous insufficiency (I87.2).
> - **[[audiogram]]** — standardized graphic chart recording auditory threshold hearing sensitivity (intensity in decibels across frequencies in Hertz); diagnostic record for sensorineural hearing loss ([[H90.3]]) versus conductive hearing loss ([[H90.0]]).
> - **[[fluoroscopy]]** / **[[radiography]]** — primary ionizing radiation imaging modalities utilized to generate radiographic contrast [[-gram]] records.
_____
>[!tip]- DERIVATIONS of [[-gram]]
>```dataview
>TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
>SORT file.name ASC
>```
_____
>[!faq]- Query
>```dataview
>TABLE definition AS Definition
>FROM #medroot
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```

[[Med terms dictionary]]
