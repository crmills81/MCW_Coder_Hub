---
tags:
  - medterm
aliases:
  - surfer’s eye
roots:
  - pterygium
  - pt-
  - -gium
  - -um
  - -ium
forms:
  - prefix
  - suffix
  - combining
alphabet: P
definition:
  - benign
  - wing‑shaped overgrowth of conjunctival tissue
---
>[!Note] DEFINITION of [[pterygium]]
>[[pterygium]] is a fleshy, triangular or wedge‑shaped benign growth of the [[conjunctiva]] that extends onto the cornea, typically from the nasal side, linked to long‑term UV and environmental exposure. A **pterygium** is a **vascular, fibrous, wing‑shaped proliferation of bulbar conjunctiva that originates on the [[interpalpebral conjunctiva]] (most commonly nasally) and encroaches onto the corneal surface, sometimes progressing toward the visual axis.** It is considered a benign, non‑neoplastic lesion associated with **chronic ultraviolet (UV) light exposure, wind, dust, and dry environments, and may be asymptomatic or cause irritation, [[foreign‑body sensation]], redness, induced astigmatism, and vision impairment if it distorts or obscures the [[cornea**]].
_____
>[!info]+ ETYMOLOGY of [[pterygium]]
>#greek - From Greek **“pterygion”** (πτέρυγιον), diminutive of **“pteryx”** = _wing_.
>- The name reflects the characteristic **wing‑ or wedge‑shaped** extension of tissue onto the cornea. The word, “**pterygium**,” comes from the Greek words _pteryx_, meaning “**wing**,” and _pterygion_, meaning “**fin**.” Another name for pterygium is surfer’s eye. This is because surfers are often in the elements that cause pterygium — sun, wind, sand and salt.
_____
>[!tip]- DERIVATIONS of [[pterygium]]
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

## Key Clinical Features

- **Location:**
    - Usually arises from the **nasal conjunctiva near the limbus** and grows horizontally toward the cornea and pupil.[ummhealth+5](https://www.ummhealth.org/health-library/understanding-pterygium)
    - Less commonly [[temporal]], and occasionally can occur on both sides (nasal and temporal) or in both eyes (bilateral).[betterhealth+3](https://www.betterhealth.vic.gov.au/health/conditionsandtreatments/pterygium)
- **Appearance:**
    - Triangular or wedge‑shaped, pink or whitish, often with visible feeding vessels (“**vascular, fleshy growth**”).[bloomfield-jolley.refocuseyedoctors+4](https://bloomfield-jolley.refocuseyedoctors.com/article/pterygium-causes-symptoms-and-treatment/)
    - May be thin and translucent or thick and opaque in advanced lesions.[theopticalco+1](https://theopticalco.com.au/blog/pterygium-causes-symptoms-and-treatment/)
- **Symptoms:**
    - Often **asymptomatic** early; visible cosmetic lesion only.[cedars-sinai+4](https://www.cedars-sinai.org/health-library/diseases-and-conditions/p/pterygium.html)
    - Irritation, redness, foreign‑body or “gritty” sensation, burning, dryness, tearing.[advvisioncenters+7](https://www.advvisioncenters.com/blog/pterygium-causes-treatment-recovery-adv/)
    - Blurred or distorted vision if it induces astigmatism or invades the visual axis.[medparkhospital+4](https://www.medparkhospital.com/en-US/disease-and-treatment/pterygium)
- **Benign nature:**
    - Non‑cancerous; does **not** [[metastasize]] or invade beyond the ocular surface, though it can recur after excision and can cause significant visual and cosmetic issues.[assileye+4](https://assileye.com/eye-care/pterygium/)

---

## Causes and Risk Factors

- **Chronic UV exposure** (sunlight, especially UV‑B, and artificial sources such as tanning beds) is the primary risk factor.[clevelandclinic+4](https://my.clevelandclinic.org/health/diseases/22497-pterygium-surfers-eye)
- **Environmental irritants:** wind, dust, sand, smoke, and dry climates (“[[surfer’s eye]],” common in people who work or spend much time outdoors, especially on water or snow).[advvisioncenters+4](https://www.advvisioncenters.com/blog/pterygium-causes-treatment-recovery-adv/)
- More common in adults, particularly in equatorial or sunny regions; rare in childhood.[ummhealth+1](https://www.ummhealth.org/health-library/understanding-pterygium)

---

## Coding Context (High‑Level)

Exact code assignment depends on the classification system you’re using and the specific eye and laterality documented. In practice:

- Pterygium is coded as a **disorder of [[conjunctiva]]** / [[ocular]] surface disease, with options to specify:
    - **Eye**: right, left, bilateral, or unspecified.
    - Sometimes **recurrent** vs primary lesions in extended systems.
- When pterygium causes **visual disturbances** (e.g., astigmatism or reduced acuity), you may also capture separate codes for:
    - Refractive error / astigmatism.
    - Visual disturbance or decreased vision.
- For surgical claims (pterygium excision with or without graft), the diagnosis code for pterygium is paired with:
    - Procedure codes for excision, bare sclera technique, conjunctival autograft, or amniotic membrane graft as appropriate.

(You would select the precise diagnosis and procedure codes from your current ICD‑10‑CM / CPT manuals and payer policies.)

---

## Related Terms and Concepts

- **[[Pinguecula]]:**
    - Yellowish, raised conjunctival lesion that does **not** cross onto the cornea; can be a precursor or a distinct entity, often confused with pterygium.[assileye](https://assileye.com/eye-care/pterygium/)​
- **Surfer’s eye:**
    - Common lay term for pterygium, reflecting its association with intense sun and wind exposure.[clevelandclinic+2](https://my.clevelandclinic.org/health/diseases/22497-pterygium-surfers-eye)
- **Conjunctival degeneration / ocular surface disease:**
    - Broader category including [[pinguecula]], pterygium, and UV‑related conjunctival changes.[betterhealth+1](https://www.betterhealth.vic.gov.au/health/conditionsandtreatments/pterygium)
- **[[Astigmatism]]:**
    - Corneal distortion induced by a large or advancing pterygium can cause irregular astigmatism and blurred vision.[medparkhospital+3](https://www.medparkhospital.com/en-US/disease-and-treatment/pterygium)
- **Pterygium excision:**
    - Surgical removal; often combined with conjunctival autograft or amniotic membrane to reduce recurrence risk.[cedars-sinai+5](https://www.cedars-sinai.org/health-library/diseases-and-conditions/p/pterygium.html)

---

## Management Overview (Clinical)

- **Conservative:**
    - Lubricating drops, artificial tears, topical anti‑inflammatory drops to manage irritation and dryness.[advvisioncenters+5](https://www.advvisioncenters.com/blog/pterygium-causes-treatment-recovery-adv/)
    - UV‑blocking sunglasses, hats, and environmental protection to slow progression and prevent recurrence.[theopticalco+4](https://theopticalco.com.au/blog/pterygium-causes-symptoms-and-treatment/)
- **Surgical:**
    - Indicated for visually significant [[pterygium]] (approaching visual axis, causing [[astigmatism]]), recurrent inflammation, or significant cosmetic/comfort issues.[cedars-sinai+5](https://www.cedars-sinai.org/health-library/diseases-and-conditions/p/pterygium.html)
    - Techniques: excision with bare sclera, conjunctival or limbal autograft, amniotic membrane graft; recurrence is a key postoperative concern.[medparkhospital+3](https://www.medparkhospital.com/en-US/disease-and-treatment/pterygium)

---

## One‑Sentence Summary

A pterygium is a benign, wing‑shaped, vascular conjunctival overgrowth that extends onto the cornea—classically from the nasal side—strongly associated with chronic UV and environmental exposure and capable of causing irritation, dry eye symptoms, induced astigmatism, and visual impairment when it enlarges.


[[Med roots]]
[[Appendix A Prefixes]]
[[Appendix B Combining Forms]]
[[Appendix C Suffixes]]
[[Appendix D Suffix forms]]