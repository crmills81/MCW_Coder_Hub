---
tags:
  - medterm
aliases:
  - plexopathy
  - Neuropathy
  - radiculopathy
  - autonomic neuropathy
  - Autonomic neuropathy
roots:
  - neuropathy
  - neur-
  - -pathy
  - -y
  - neuro-
forms:
  - prefix
  - suffix
  - combining
alphabet: N
definition: nerve damage
---

>[!Note] DEFINITION of [[neuropathy]]
>**[[Neuropathy]]** (**often used synonymously with [[peripheral neuropathy]]**) refers to a group of conditions in which nerves outside the brain and spinal cord malfunction because their axons, **[[myelin]]**, or cell bodies are injured or diseased. This nerve injury disrupts normal electrical signaling, so patients experience positive symptoms (**burning pain, electric shocks, tingling, [[hypersensitivity]]**) and negative symptoms (**numbness, loss of vibration, weakness, reduced reflexes**).
>**[[Neuropathy]]** can affect:
>	- Sensory fibers, causing pain, **[[paresthesias]]**, numbness, or loss of proprioception.
>     - Motor fibers, causing distal weakness, **[[atrophy]]**, **[[fasciculations]]**, gait disturbance, or foot drop.
>	 - Autonomic fibers, causing orthostatic **[[hypotension]]**, abnormal sweating, GI or bladder dysfunction, sexual dysfunction, or **[[pupillary]]** changes.
>From a pattern standpoint, neuropathy may present as a length‑dependent, symmetric
>“stocking-glove” **[[polyneuropathy]]**, focal **[[mononeuropathy]]**, multifocal mononeuropathy, or proximal neuropathy, each with different etiologic considerations. Major causes include **diabetes, alcohol use, nutritional deficiencies (especially B12), autoimmune disease, infections, toxins and medications (notably chemotherapy), hereditary neuropathies, trauma, and [[idiopathic]] forms where no clear cause is identified**.
_____
>[!info]+ ETYMOLOGY of [[neuropathy]]
>#greek “[[neuropathy]]” breaks down into the combining form “**[[neuro-]]**” (**nerve**) and the suffix “**[[-pathy]]**” (**disease, suffering**), both ultimately from Greek.
>	•	**[[neuro‑]]**: from Greek neuron meaning “*sinew, tendon, nerve*,” used in medical terms to indicate nerves or the nervous system.
>	•	**[[‑pathy]]**: from Greek **[[‑patheia]]** meaning “*suffering, feeling, disease, condition*,” used to denote a disorder or disease process.
So **[[neuropathy]]** literally means a “*nerve disease*” or “*condition of the nerves*,” matching its modern medical sense of nerve damage or dysfunction.
_____
>[!tip]- DERIVATIONS of [[neuropathy]]
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

[[Med roots dictionary]]
[[Appendix A Prefixes]]
[[Appendix B Combining Forms]]
[[Appendix C Suffixes]]
[[Appendix D Suffix forms]]