---
tags:
  - medterm
  - medroot
aliases:
roots:
  - calculi
  - calc-
  - -culi
forms:
  - prefix
  - suffix
  - combining
  - diminutive
alphabet: C
definition:
  - hard
  - pebble-like deposit of mineralized material
  - stone
  - Stone(s) within the urinary tract.
---
>[!Note] DEFINITION of [[calculi]]
>[[calculi]] are typically formed when mineral salts—such as *calcium, oxalate, or uric acid*—precipitate out of a body fluid **(like urine, bile, or saliva**) and crystallize into solid masses. These stones can vary in size from microscopic grains to several centimeters and often cause pain or infection when they block the natural flow of fluids through ducts or narrow passages.
_____
>[!info]+ ETYMOLOGY of [[calculi]]
>#latin The term comes from the Latin **[[calculus]]**, meaning “small [[calculus|stone]]” or “**pebble**”. It is a diminutive of **[[calx]]** (genitive _calcis_), meaning “**limestone**” or “**lime**,” which is also the root for the element **calcium** and the word **chalk**. In ancient times, Romans used small pebbles on counting boards to perform arithmetic, which is why the same word eventually gave rise to the mathematical field of _[[calculus]]_.[](https://www.reddit.com/r/etymology/comments/oxader/apparently_both_calculus_and_calcium_have_the/)
>
> **Related terms**
> - **[[Lithiasis]]**: The process or condition of forming stones in the body (e.g., [[nephrolithiasis]] for kidney stones).[](https://pmc.ncbi.nlm.nih.gov/articles/PMC6636958/)
> - **[[-lith]]**: A suffix meaning "**stone**" (from Greek _[[lithos]]_), used in terms like _sialolith_ or _phlebolith_.[](https://chicagoent.com/uncategorized/salivary-stone-pain/)​
> - **Concretion**: A general term for any solid mass of mineral or organic material formed in the body.[](https://en.wikipedia.org/wiki/Calculus_ (medicine ))
> - **Crystallization**: The chemical process by which a solid forms, where the atoms or molecules are highly organized into a structure known as a crystal.
_____
>[!tip]- DERIVATIONS of [[calculi]]
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