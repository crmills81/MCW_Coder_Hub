---
tags:
  - medterm
  - medroot
  - ophthalmology
aliases:
roots:
  - photopsia
  - phot-
  - -sia
  - photo-
  - -ia
forms:
  - prefix
  - suffix
  - combining
  - noun
alphabet: P
definition:
  - seeing flashes
  - sparkles
  - or “stars” in your vision without actual light
---
>[!Note] DEFINITION of [[photopsia]]
>[[photopsia]] refers to subjective visual sensations of light—described as **streaks, zigzags, lightning‑like flashes, sparkles, or camera‑flash bursts—that occur in the visual field without external illumination**. Mechanically or electrically triggered activity in the retina or visual pathways (for example, [[vitreoretinal]] traction in posterior [[vitreous detachment]]) causes retinal cells to fire, which the brain interprets as light. Common associations include posterior [[vitreous]] detachment, retinal tears or detachment, migraine aura (with or without headache), [[occipital lobe ischemia]], optic [[neuritis]], and age‑related macular degeneration. New‑onset or sudden increase in photopsias, especially with floaters or a curtain over vision, is an ophthalmic urgency due to the risk of retinal break or detachment.
_____
>[!info]+ ETYMOLOGY of [[photopsia]]
>#greek  [[photopsia]] refers to subjective visual sensations of light—**described as streaks, zigzags, lightning‑like flashes, sparkles, or camera‑flash bursts**—that occur in the visual field without external illumination. Mechanically or electrically triggered activity in the retina or visual pathways (for example, [[vitreoretinal]] traction in posterior vitreous detachment) causes retinal cells to fire, which the brain interprets as light. Common associations include **posterior vitreous detachment**, retinal tears or detachment, migraine aura (with or without headache), occipital lobe [[ischemia]], optic neuritis, and age‑related macular degeneration. New‑onset or sudden increase in photopsias, especially with floaters or a curtain over vision, is an ophthalmic urgency due to the risk of retinal break or detachment.
_____
>[!tip]- DERIVATIONS of [[photopsia]]
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