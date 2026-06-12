---
tags:
  - medterm
  - medroot
aliases:
roots:
  - iridotomy
  - ir-
  - irid-
  - -otomy
  - -tomy
forms:
  - prefix
  - suffix
  - combining
  - noun
alphabet: I
definition:
  - incision of the iris
  - often to form an artificial pupil or relieve pupillary block
---
>[!Note] DEFINITION of [[iridotomy]]
>[[Laser peripheral iridotomy]] (LPI) uses a laser (e.g., Nd:YAG or argon) to **perforate the peripheral iris, allowing fluid to bypass the pupil and reach the anterior chamber, thus opening the drainage angle**. It treats primary [[angle-closure glaucoma]] (PACG), acute angle closure (AAC), narrow angles, and secondary causes like [[uveitis]].
>
>- **[[Iridectomy]]**: Surgical removal of iris tissue (historical precursor to LPI).
>- **[[angle-closure glaucoma]]**: Condition treated by [[iridotomy]] due to iris blocking drainage.[](https://www.aao.org/eye-health/diseases/laser-iridotomy-ophthalmologist-surgeon)​
>- **[[Pupillary block]]**: Mechanism relieved by creating a bypass hole.[](https://eyewiki.org/Laser_Peripheral_Iridotomy)​
>- **[[Plateau iris]]**: Configuration where iridotomy may not fully open the angle.
_____
>[!info]+ ETYMOLOGY of [[iridotomy]]
>#greek "[[iridotomy]]" derives from "[[irido-]]" (from Greek _îris_, rainbow, referring to the iris) + "[[-tomy]]" (Greek _tomḗ_, a **cutting, incision**). The term was coined in 1818 by Karl Wilhelm Ulrich Wagner from Greek roots for iris (_îris_) and cut (_tomḗ_).
_____
>[!tip]- DERIVATIONS of [[iridotomy]]
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