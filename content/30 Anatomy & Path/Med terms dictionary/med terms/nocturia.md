---
tags:
  - medterm
  - urology
aliases:
  - Nighttime urination
roots:
  - nocturia
  - no-
  - -ria
  - -ia
  - -turia
forms:
  - prefix
  - suffix
alphabet: N
definition: nocturnal urinary frequency
---
>[!Note] DEFINITION of [[nocturia]]
>[[nocturia]] is **waking one or more times nightly from sleep to void, disrupting normal sleep cycles**. [[nocturia]] (**nocturnal urinary frequency**) is the complaint of waking ≥1 time per night to urinate, where sleep precedes and follows the voiding episode; *affects >50% adults >50yo*, multifactorial via nocturnal [[polyuria]] (*>20-33% 24hr urine at night*), global polyuria (>40mL/kg/day), reduced nocturnal bladder capacity, or sleep disorders; leads to fatigue, falls (**25% nocturnal fractures**), cognitive impairment.
_____
>[!info]+ ETYMOLOGY of [[nocturia]]
>#latin
>•	Noct-: Latin nox, noctis = “**night**.”
>	•	[[-uria]]: Greek *ouron* (οὖρον) = “*urine*.”
>	•	**Literal**: “Nighttime urination” (*coined 19th century*).
_____
>[!tip]- DERIVATIONS of [[nocturia]]
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

---

## Coding Context

**ICD-10-CM:**  

| Code      | Description                                      |
|-----------|--------------------------------------------------|
| **[[R35.1]]** | [[nocturia]] (primary code).                        |
| **[[N39.41]]** | Urge incontinence (OAB-associated).             |
| **[[R32]]**   | Unspecified urinary [[incontinence]].               |

**Associated diagnoses:**  
- **[[E11.9]]** (DM), **[[I50.9]]** (CHF), **[[G47.33]]** (sleep apnea).[11]

## Causes and Pathophysiology

| Etiology                                      | Mechanism/Details                                                         |
| --------------------------------------------- | ------------------------------------------------------------------------- |
| **Nocturnal polyuria** (>33% nighttime urine) | Reduced [[vasopressin]], leg [[edema]] mobilization, [[diuretics]].[3][5] |
| **Global polyuria**                           | DM, DI, excess evening fluids/caffeine/alcohol.[1]                        |
| **Bladder storage**                           | OAB, BPH, stones, neurogenic (MS, stroke).[2]                             |
| **Sleep disorders**                           | Apnea (50% prevalence), insomnia.[5]                                      |

## Related Terms

- **[[Polyuria]]:** >3L/24hr total.  
- **Nocturnal polyuria index (NPI):** Night urine/24hr urine (>33% abnormal).  
- **OAB (Overactive Bladder):** Urgency w/nocturia (N39.41).[8]
- **IPSS:** Symptom score includes nocturia Q.[3]

**Diagnostic workup:**  
- Voiding diary (3 days).  
- Urine/serum osmolality, A1c, BNP, PSA.  
- Post-void residual (PVR), uroflow.[3]

## Clinical Details

**Severity:**  
- Mild: 1x/night.  
- Moderate: 2x.  
- Severe: ≥3x (odds ratio 2.5 for fractures).[3]

**Risks:** Falls (doubles ≥2x/night), sleep deprivation, HTN, mortality.[3]

**Management:**  
- **Lifestyle:** Elevate legs PM, limit evening fluids/salt, compressions.  
- **Meds:** Desmopressin (polyuria), anticholinergics/Mirabegron (OAB), alpha-blockers (BPH).  
- **Treat cause:** CPAP (apnea), [[glycemic]] control.[1][2]

**One-Sentence Summary**  
**Nocturia** (R35.1), Latin/Greek “night-urine,” disrupts sleep via [[polyuria]]/OAB/[[apnea]] (≥2x/night severe), doubling fall/fracture risk in elderly; diagnose via voiding diary, treat underlying etiology.[5][2][1][3]



[[Med roots dictionary]]
[[Appendix A Prefixes]]
[[Appendix B Combining Forms]]
[[Appendix C Suffixes]]
[[Appendix D Suffix forms]]