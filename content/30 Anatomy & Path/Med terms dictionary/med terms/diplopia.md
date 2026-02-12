---
tags:
  - medterm
  - medroot
  - ophthalmology
  - specialty/ophthalmology
aliases:
  - double vision
roots:
  - diplopia
  - di-
  - diplo-
  - -ia
  - -pia
forms:
  - prefix
  - suffix
  - combining
alphabet: D
definition:
  - double vision
---
>[!Note] DEFINITION of [[diplopia]]
>[[diplopia]] is a **visual disturbance in which a single object produces two distinct images, either in one eye** ([[monocular diplopia]]) or in both eyes (**binocular diplopia**). [[Binocular diplopia]] results from misalignment of the eyes ([[strabismus]]), often due to extraocular muscle or cranial nerve dysfunction, and disappears when one eye is covered. Monocular diplopia is caused by optical problems in one eye (e.g., [[cataracts]], [[astigmatism]], corneal irregularity) and persists even when the good eye is closed.
>
>#### Clinical Subtypes and Presentation
>- **[[Binocular diplopia]]**
>	- One image from each eye, misaligned due to inability of both eyes to fuse images at a point in space.[barrowneuro+1](https://www.barrowneuro.org/condition/diplopia/)
>	- regularly caused by extraocular muscle or **cranial nerve (III, IV, VI) lesions**, [[Graves’ disease]], [[myasthenia gravis]], [[stroke]], or [[multiple sclerosis]].[webmd+2](https://www.webmd.com/eye-health/double-vision-diplopia-causes-symptoms-diagnosis-treatment)
>- **Monocular diplopia**
>	- Images arise from one eye only and are often optical or media‑related (e.g., [[cataracts]], uncorrected [[astigmatism]], [[keratoconus]], [[dry eye]], [[pterygium]], dislocated lens).[loyolamedicine+3](https://www.loyolamedicine.org/services/ophthalmology/ophthalmology-conditions/double-vision)
>	- Rare cortical causes exist but are uncommon and usually accompanied by other visual‑field deficits.[ncbi.nlm.nih](https://www.ncbi.nlm.nih.gov/books/NBK441905/)​
>
>- **Pattern descriptors**  
 >   [[diplopia]] can be:
 > 	  - Horizontal
 > 	  - Vertical
 > 	  - Oblique (diagonal) depending on which muscle pair is affected and the direction of the misalignment.
_____
>[!info]+ ETYMOLOGY of [[diplopia]]
>#greek - **Root:** _[[di‑]]_ = Greek/Latin _[[dis‑]]_ = “**double, two**.”[eophtha+1](https://www.eophtha.com/posts/word-root-origin-of-ophthalmic-terms)
>- **Root:** _[[‑ops‑]] / [[‑oplia]]_ = from Greek _ōps, ōp‑_ = “**eye**.”
>- **Root:** _[[‑plegia]]_ = Greek _plēgē_ / _plegia_ = “**stroke, paralysis**.”[wikipedia.nucleos+1](https://wikipedia.nucleos.com/viewer/wiktionary_en_all/A/ophthalmoplegia)
>
> Literally, _diplopia_ means **“double vision,”** though historically it’s framed in neuro‑and optical medicine as **double image formation** rather than muscle paralysis.
_____
>[!tip]+ DERIVATIONS of [[diplopia]]
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

## Related Terms and Concepts

- **[[Strabismus]] / [[heterotropia]]:** Misalignment of the eyes; often the underlying cause of binocular diplopia.[nyulangone+2](https://nyulangone.org/conditions/double-vision/diagnosis)
- **[[Esotropia]] / [[exotropia]]:** Inward or outward deviation of an eye relative to the fellow eye.
- **[[Ophthalmoplegia]] / [[ophthalmoparesis]]:** Paralysis or weakness of extraocular muscles, a common cause of binocular diplopia.[wikipedia+1](https://en.wikipedia.org/wiki/Internuclear_ophthalmoplegia)
- **Myasthenia gravis:** Autoimmune neuromuscular disorder where fluctuating diplopia and ptosis are hallmark features.[webmd+2](https://www.webmd.com/eye-health/double-vision-diplopia-causes-symptoms-diagnosis-treatment)
- **Graves’ disease / thyroid eye disease (TED):** Hyperthyroid‑associated orbital inflammation and extraocular muscle enlargement causing diplopia.[allaboutvision+2](https://www.allaboutvision.com/conditions/symptoms/diplopia/double-vision/)
- **Cranial nerve palsies (III, IV, VI):** Frequently encode the cause of diplopia in coding scenarios.[ncbi.nlm.nih+1](https://www.ncbi.nlm.nih.gov/books/NBK441905/)
- **Monocular pseudovi­sion:** When functional or optical rather than neurological, sometimes labeled as monocular diplopia if no anatomic lesion is found.[allaboutvision+1](https://www.allaboutvision.com/conditions/symptoms/diplopia/double-vision/)

---

## Common Etiologies (Causes)

Binocular diplopia can arise from:

- Neurologic: stroke, [[TIA]], increased intracranial pressure, [[multiple sclerosis]], [[aneurysm]], brain tumor, head injury.[loyolamedicine+3](https://www.loyolamedicine.org/services/ophthalmology/ophthalmology-conditions/double-vision)
- Neuromuscular: myasthenia gravis, Guillain‑Barré (especially Miller‑Fisher variant), botulism.[webmd+1](https://www.webmd.com/eye-health/double-vision-diplopia-causes-symptoms-diagnosis-treatment) 
- Endocrine/[[orbital]]: Graves’ disease, thyroid‑associated [[orbitopathy]].[barrowneuro+2](https://www.barrowneuro.org/condition/diplopia/)
- Miscellaneous: trauma, skull‑base tumors, cavernous sinus/sellar masses, diabetes‑related cranial nerve palsies.[stanfordhealthcare+2](https://stanfordhealthcare.org/medical-conditions/eyes-and-vision/double-vision/causes.html)

Monocular diplopia commonly caused by:

- Refractive/misaligned optics: astigmatism, keratoconus, high uncorrected refractive error.[barrowneuro+2](https://www.barrowneuro.org/condition/diplopia/)
- Media opacity: cataract, capsular changes, dislocated lens.[ncbi.nlm.nih+1](https://www.ncbi.nlm.nih.gov/books/NBK441905/)
- Corneal or eyelid problems: pterygium, stye/chalazion pressing on the cornea, dry eye, keratoendothelliitis, corneal edema.[allaboutvision+2](https://www.allaboutvision.com/conditions/symptoms/diplopia/double-vision/)

---

## Coding and Classification Notes

There is no single universal “diplopia only” diagnostic code; coding depends on **classificatory system and clinical context**:

- In neuro‑ophthalmology and general‑medicine coding, diplopia is usually captured **secondarily** (as a symptom) after the underlying diagnosis (e.g., cranial nerve palsy, stroke, MS, myasthenia gravis, Graves’ disease, cataract, etc.).[webmd+1](https://www.webmd.com/eye-health/double-vision-diplopia-causes-symptoms-diagnosis-treatment)
- Some systems do have “**symptom**” or “**visual disturbance**” catch‑all codes that can be used when diplopia is the chief complaint and the etiology is still under investigation, but these generally require at least brief linkage to an assessing diagnosis or problem list entry.[yalemedicine+1](https://www.yalemedicine.org/conditions/double-vision)

As with other entities, coding practice should reflect your specific **payers’ guidance, ICD‑10‑CM directives**, and local clinical documentation standards.

---

## One‑Sentence Summary

**[[diplopia]]** (**double vision**) is the perception of two images of one object, arising either from misaligned eye position in binocular vision or from optical/media abnormalities in a single eye, and it can signal everything from minor refractive issues to serious neurologic or orbital disease.[clevelandclinic+3](https://my.clevelandclinic.org/health/diseases/22203-diplopia-double-vision)

14 sources

[[Med roots]]
[[Appendix A Prefixes]]
[[Appendix B Combining Forms]]
[[Appendix C Suffixes]]
[[Appendix D Suffix forms]]