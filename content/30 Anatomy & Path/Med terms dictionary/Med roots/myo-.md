---
tags:
  - medroot
aliases:
  - my-
roots:
  - myo-
forms:
  - prefix
  - suffix
alphabet: M
definition:
  - muscle
---
>[!Note] DEFINITION of [[myo-]]
>In medical and biological terminology, **myo‑** (or **my‑** before a vowel) is a combining form that denotes a relationship to **skeletal, cardiac, or smooth muscle tissue**, including its structure, function, and diseases.[](https://www.oreateai.com/blog/understanding-myo-the-muscle-behind-the-word/3d94b247ca2d88c1c493db4348db41e1)  It appears in compound words such as _myocardium_ (heart muscle), _myopathy_ (muscle disease), _myalgia_ (muscle pain), _myositis_ (muscle inflammation), and _myology_ (the study of muscles), where it signals that the term concerns muscle or muscle‑related processes.
_____
>[!info]+ ETYMOLOGY of [[myo-]]
>#latin - **Immediate origin:** International Scientific Vocabulary, from **New Latin combining form** _myo‑_.[](https://www.etymonline.com/word/myo-)  
>- **Deeper origin:** From **Ancient Greek** _μῦς_ (_mŷs_), which means both **“muscle”** and **“mouse.”**[](https://www.etymonline.com/word/muscle)    
>- The “mouse” connection reflects an ancient image: some muscles (like the biceps) were thought to look and move like a small mouse under the skin, so the same Greek word served for both “mouse” and “muscle”; the combining form from this root became _myo‑_ in medical vocabulary.[](https://www.etymonline.com/word/intramuscular)
_____
>[!example]+ RELATED TERMS to [[myo-]]
>
|     Term     |          Meaning          |          Prefix/Suffix?          | Notes |
|:------------:|:-------------------------:|:--------------------------------:|:-----:|
|   [[myo-]]   |          muscle‑related         |      -       |   -   |
| [[Myopathy]] | Disease of muscle tissue | [[myo-]] (muscle) + -pathos (disease) |   -   |
|     [[Myalgia]] |  Muscle pain |  [[my-]] (muscle) + -algos (pain)  |  -   |
_____
>[!tip]+ DERIVATIONS of [[myo-]]
>```dataview
>TABLE definition AS Definition
>FROM #medroot
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
>SORT file.name ASC
>```
_____
>[!faq]- Query functionality
>
>```dataview
>TABLE definition AS Definition
>FROM #medroot
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```

[[Med roots dictionary]]