---
tags:
  - medterm
  - medroot
aliases:
  - strabismos
  - Strabismus
roots:
  - st
  - -ismus
  - -us
forms:
  - noun
"alphabet:": S
definition:
  - a squinting of the eyes
---
>[!Note] DEFINITION of [[strabismus]]
>**[[Strabismus]]**, also known as **crossed eyes or eye misalignment**, is a vision problem where both eyes do not look at the same object at the same time, often due to **poor eye muscle control or farsightedness.** (More information below)
_____
>[!info]+ ETYMOLOGY of [[strabismus]]
>1680s, medical #latin, from Greek *strabismos*, from *strabizein* "to squint," which is from strabos "*squinting, squint-eyed*"
_____
>[!tip]- DERIVATIONS of [[strabismus]]
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
>WHERE file.name != this.file.name
>AND any(contains(this.definition, definition))
>```

### More info from Gemini Pro:

**Strabismus**, commonly known as "**crossed eyes**" or "**wall-eyed**," is a condition where the eyes do not align properly. When the eyes are misaligned, they look in different directions, and each eye sends a different image to the brain.

In a healthy system, the six muscles surrounding each eye work in tandem to focus both eyes on the same object. With strabismus, these muscles don't work together, which can lead to issues with depth perception or, in children, the development of [[amblyopia]] (**lazy eye**) as the brain learns to ignore the signal from the misaligned eye.

#### **Common Types of Strabismus**

**Strabismus** is often categorized by the direction in which the eye turns:
 * [[Esotropia]]: One or both eyes turn inward toward the nose.
 * [[Exotropia]]: One or both eyes turn outward toward the temple.
 * [[Hypertropia]]: One eye turns upward.
 * [[Hypotropia]]: One eye turns downward.
* 
##### **Causes and Risk Factors**

**The condition can be present at birth (congenital) or develop later in life (acquired). Common causes include:**
 * **Muscle Dysfunction**: Problems with the [[extraocular]] muscles that control eye movement.
 * **Nerve Issues**: Damage to the cranial nerves **(III, IV, or VI**) that signal the eye muscles.
 * **Refractive Errors**: Severe farsightedness (**hyperopia**) can cause a child's eyes to turn inward while trying to focus.
 * **Medical Conditions**: In adults, **strabismus** can be triggered by **stroke**, **head trauma**, **diabetes**, or **Graves' disease**.
 
##### Symptoms to Watch For
**While the most obvious sign is visible misalignment, patients may also experience:**
 * **[[Diplopia]] (Double vision): Especially common in adults who develop the condition suddenly.
 * **Eye strain or headaches**: Resulting from the effort to keep the eyes aligned.
 * **Tilting the head**: A compensatory move to help the eyes see more clearly.
 * **Squinting**: Frequently seen in sunlight or when trying to focus.

##### Treatment Options
**Treatment depends on the severity and the underlying cause. Options include:**
 * **Eyeglasses or Contact Lenses**: Often the first line of treatment, especially if a refractive error is causing the turn.
 * **Prism Lenses**: Special lenses that bend light before it enters the eye to help the two images "**align**" in the brain.
 * **Patching or Vision Therapy**: Used primarily in children to strengthen a weaker eye and improve brain-eye coordination.
 * **Botox Injections**: In some cases, Botox can be used to temporarily weaken an overactive eye muscle.
 * **Surgery**: If other methods fail, a surgeon can physically adjust the tension of the eye muscles to straighten the alignment.

Add more notes later about the different types of strabismus



[[Med roots]]
[[Appendix A Prefixes]]
[[Appendix B Combining Forms]]
[[Appendix C Suffixes]]
[[Appendix D Suffix forms]]