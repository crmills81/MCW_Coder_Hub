---
tags:
  - medterm
  - medroot
aliases:
  - brainstem
roots:
  - medull-
  - -a
  - ob-
  - ta-
"definition:": lowest part of the brainstem
alphabet: M
---
>[!note]+ Definition of [[medulla oblongata]]
>[[medull-]]a oblongata - lowest part of the brainstem (elongated marrow)
>The [[medulla oblongata]] is a cone-shaped neuronal mass that forms the most inferior portion of the brainstem. It measures approximately **3 cm** in length and **2 cm** in width, acting as a critical relay station between the brain and the spinal cord through the foramen magnum. It contains specialized centers that **regulate vital involuntary processes, including respiration, heart rate, and blood pressure.**
___
>[!info]+ Etymology of [[medulla oblongata]]
>#latin  **Medulla**: Derived from the Latin word for "**pith**" or "**marrow**," signifying its position in the middle or core. 
>-**Oblongata**: Derived from the Latin oblongus, meaning "**elongated**" or "**lengthened**".
>-**Bulb**: An archaic term once commonly used for the **medulla**; the derivative adjective "**bulbar**" is still used in clinical medicine to refer to the **medulla** and its associated **cranial nerves.**
_____
>[!tip]- DERIVATIONS of [[medulla oblongata]]
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