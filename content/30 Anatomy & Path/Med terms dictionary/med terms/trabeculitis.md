---
tags:
  - medterm
  - medroot
  - ophthalmology
aliases:
  - uveitic trabeculitis
  - viral trabeculitis
  - herpetic trabeculitis
roots:
  - Trabeculitis
  - trab-
  - tra-
  - -itis
  - -tis
  - -is
forms:
  - prefix
  - suffix
alphabet: T
definition:
  - the inflammation of the trabecular meshwork (TM)
  - the primary drainage structure in the eye's anterior chamber angle
---
>[!Note] DEFINITION of [[trabeculitis]]
>**Trabeculitis** refers to **an inflammatory process affecting the trabecular meshwork, a porous, sponge-like tissue located in the anterior chamber angle of the eye that facilitates the outflow of aqueous humor from the eye into the bloodstream via Schlemm's canal**. This inflammation can impair drainage, resulting in increased [[intraocular pressure (IOP)]], which may progress to secondary [[open-angle glaucoma]] if untreated. It is commonly associated with infectious or inflammatory conditions, such as viral infections (**e.g., herpes simplex or varicella-zoster virus**), [[uveitis]], or trauma. 
> 
>**Key features and pathophysiology include**:  
>
>- **Mechanism**: Inflammation causes edema, thickening of trabecular beams, accumulation of inflammatory cells (e.g., [[lymphocytes]], [[macrophages]]), or keratic precipitates on the meshwork, obstructing [[aqueous]] outflow. This can be acute or chronic, often presenting with symptoms like eye pain, redness, blurred vision, halos around lights, or [[photophobia]].  
>- **Etiologies**: Frequently viral ([[herpetic trabeculitis]]), but can also stem from bacterial infections, tuberculosis, syphilis, trauma (**e.g., angle recession**), or [[autoimmune uveitis]]. In herpetic cases, viral replication in the [[trabecular endothelium]] triggers an immune response.  
>- **Diagnosis**: Confirmed via [[gonioscopy]] (**visualizing keratic precipitates or angle abnormalities**), [[slit-lamp]] examination, [[tonometry]] (**measuring IOP**), and sometimes anterior segment [[optical coherence tomography (OCT)]]. **Laboratory** tests may include PCR for viral DNA or serology for underlying infections.  
>- **Complications**: Untreated, it can lead to chronic glaucoma, optic nerve damage, visual field loss, or [[synechiae]] formation (**adhesions in the angle**).  
>- **Treatment**: Depends on the cause; includes topical corticosteroids to reduce inflammation, antiviral agents (**e.g., acyclovir for herpetic cases**), IOP-lowering medications (**e.g., beta-blockers, prostaglandin analogs**), or surgical interventions like [[trabeculectomy]] in refractory cases. Prognosis is good with early intervention, but recurrent episodes can cause permanent damage.  
>- **[[Epidemiology]]**: Rare as a primary condition; more common in association with anterior uveitis (**affecting 5-20% of uveitis cases with glaucoma**). It typically affects adults, with higher incidence in those with immunocompromise or prior [[ocular herpes]].  This condition underscores the link between ocular inflammation and [[glaucoma]], requiring multidisciplinary management by [[ophthalmologists]].
_____
>[!info]+ ETYMOLOGY of [[trabeculitis]]
>#latin - **Trabeculitis**: Derived from Latin "[[trabecula]]" (**diminutive of "trabs," meaning "beam" or "timber"**), referring to the beam-like or lattice structure of the **trabecular meshwork**, which resembles small supporting beams. The suffix "[[-itis]]" comes from Greek "[[-îtis]]," indicating "inflammation." Thus, "**trabeculitis**" literally means "*inflammation of the small beams*" (**in the context of the eye's drainage system**).
>- The term emerged in medical literature in the mid-20th century with advances in [[gonioscopy]] and understanding of [[glaucoma]] pathophysiology, though "**trabecular**" structures were described as early as the 19th century by anatomists like Friedrich Schlemm (note: etymology of "ophthalmology" indirectly relates, but specific to [[trabecula]]).

_____


> [!success]+ **Related Terms**
> 
> - **Anatomical terms**: Trabecular meshwork, Schlemm's canal, anterior chamber angle, aqueous humor, [[ciliary body]]
> - **Associated conditions**: [[Uveitis]] (anterior, intermediate), [[iridocyclitis]], secondary open-angle glaucoma, [[ocular hypertension]], keratic precipitates (KPs), posterior synechiae.
> - **Etiologic terms**: Herpetic [[keratitis]], herpes simplex virus (HSV), varicella-zoster virus (VZV), traumatic glaucoma, Posner-Schlossman syndrome ([[glaucomatocyclitic]] crisis, which may involve trabeculitis-like mechanisms).
> - **Diagnostic terms**: Gonioscopy, [[tonometry]], anterior segment OCT, specular microscopy.
> - **Treatment-related**: [[Trabeculectomy]], laser [[trabeculoplasty]], [[cyclophotocoagulation]], anti-VEGF therapy (if neovascular).
> - **Similar conditions**: Pigmentary glaucoma (pigment dispersion in meshwork), pseudoexfoliation syndrome (**material deposition**), angle-closure glaucoma (**distinct mechanism but related IOP elevation**)
_____

> [!example]+ **CODING NUANCES**
> 
> 
> **ICD-10-CM Diagnosis Codes:**
> - **[[H40.40X0]]**  Glaucoma secondary to eye inflammation, unspecified eye, stage unspecified 
> - **[[H40.41X0]]**  Glaucoma secondary to eye inflammation, right eye, stage unspecified 
> - **[[H40.42X0]]**  Glaucoma secondary to eye inflammation, left eye, stage unspecified 
> - **[[H40.43X0]]**  Glaucoma secondary to eye inflammation, bilateral, stage unspecified 
> - **[[H20.9]]** Unspecified iridocyclitis|Use for uveitis-related trabeculitis
> - **H40.1-** Open-angle glaucoma; If leading to glaucoma
> - **[[H40.89]]** Other specified glaucoma; For trabeculitis-induced IOP rise
> - **[[B25.9]]** Cytomegaloviral disease NOS; |If CMV-associated
> - **[[H58.8]]** Specified disorders of eye; When none above align
> 
> **CPT® Procedure Codes:**
> 
> - **[[92020]]**  Gonioscopy 
> - **[[65800]]**  Paracentesis of anterior chamber 
> - **[[65855]]**  Laser trabeculoplasty
> - **[[65820]]**  Goniotomy 
> - **[[66170]]**  Trabeculectomy, initial surgery 
> - **[[66172]]**  Trabeculectomy with prior scarring
> - **[[66174]]**  Canaloplasty 
> - **[[66989]]**  Implantation of aqueous drainage device, internal approach (MIGS)
> - **[[66991]]**  Implantation of aqueous drainage device with cataract surgery 


_____ 
>[!tip]- DERIVATIONS of [[trabeculitis]]
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