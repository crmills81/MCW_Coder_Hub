---
tags:
  - medroot
  - medterm
aliases: []
roots:
  - -esis
  - -sis
  - -is
forms:
  - suffix
  - noun
  - compound suffix form
"alphabet:": E
definition:
  - condition (of)
  - state (of)
---
>[!Note] DEFINITION of [[-esis]]
>Forms abstract nouns: condition (**of**), state (**of**); The suffix **-esis** is a Greek-derived noun-forming element that appears extensively throughout medical terminology to **designate conditions, processes, states, or actions**—particularly those of a pathological nature. It transforms verb roots into nouns that describe either normal physiological processes or abnormal disease states. In medical usage, [[-esis]] typically indicates an ongoing condition or process rather than a single discrete event, and it often describes processes that are either **involuntary** or occurring at a systemic level. The suffix is particularly common in describing **bodily functions, disease processes, surgical procedures, and diagnostic findings**. Words ending in **-esis** frequently describe conditions that are observable, measurable, or clinically significant, making this suffix fundamental to diagnostic and procedural medical terminology. The suffix can indicate both benign physiological processes (**like diuresis**) and pathological states (**like enuresis**), with context determining the clinical significance.
_____
>[!info]+ ETYMOLOGY of [[-esis]]
>#greek - **Origin**: Ancient Greek
>- **Root**: From Greek suffix _-esis_ (-εσις), derived from verb endings
>- **Linguistic Function**: Noun-forming suffix attached to Greek verb stems to create abstract nouns denoting action, process, or resulting state
>- **Grammatical Category**: Creates feminine nouns in Greek (**first declension**)
>- **Historical Usage**: Used in classical Greek medical texts (**Hippocratic Corpus, Galen**) and maintained through Byzantine medical tradition into Arabic and Latin medical literature, then into modern medical terminology
>- **Related Greek Forms**: Often appears with related suffixes like **-osis** (**condition/disease**) and **-iasis** (**abnormal condition/infestation**)
>- **[[-sis]]**: Shortened form when attached to stems ending in vowels (**e.g., "analysis" from _[[ana-]]_ + _[[-lysis]]_, "crisis"**)
>- **[[-iasis]]**: Extended form typically indicating infestation, presence of, or pathological condition (e.g., "[[lithiasis]]," "**psoriasis**")
>- **[[-osis]]**: Related suffix indicating condition, disease, or abnormal increase (e.g., "[[necrosis]]," "[[stenosis]]")
>
_____
>[!example]+ RELATED TERMS to [[-esis]]
>
>|   [[-esis]]   | condition (of) | state (of) |       -        |
|:----------:|:--------------:|:----------:|:--------------:|
|  [[-a]]  |      Yes       |    Yes     |       -        |
| [[-ema]]  |      Yes       |    Yes     |       -        |
|  [[-ia]]   |      Yes       |    Yes     |       -        |
|  [[-ism]]  |      Yes       |    Yes     |       quality of        |
| [[-ismus]] |      Yes       |    Yes     | muscular spasm |
|  [[-sis]]  |      Yes       |    Yes     |       -        |
|  [[-ty]]   |      Yes       |    Yes     |       -        |
|   [[-y]]   |      Yes       |    Yes     |       -        |
>
>**Medical Terms Using -esis (Organized by Clinical Category):**
>
>**<u>Urological Terms** **(Relevant to your specialty):</u>**
>
>1. **[[Enuresis]]** - Involuntary urination, especially bedwetting (**from Greek _[[en-]]_ = in + _ouron_ = urine + _[[-esis]]_**)
>   - Clinical subtypes: [[nocturnal enuresis]], [[diurnal enuresis]]
>1. **[[Diuresis]]** - Increased or excessive production of urine (**from Greek _[[dia-]]_ = through + _ouron_ = urine + _[[-esis]]_**)
 >   - Related: osmotic [[diuresis]], water diuresis
>3. **[[Uresis]]** - The act of urination (**from Greek _ouron_ = urine + _[[-esis]]_**)
>    - Less commonly used standalone term
>4. **[[Lithogenesis]]** - Formation of [[calculi]] or stones (**from Greek _lithos_ = stone + _genesis_ = creation**)
>- Relevant in [[urolithiasis]] cases
>**<u>Ophthalmological Terms (Relevant to your specialty):</u>**
>
>18. **[[Chromesthesia]]** - A form of [[synesthesia]] where sounds produce color sensations
>    - Variant of [[-esthesia]] form
>19. **[[Photesthesia]]** - Sensitivity to light (**from Greek _photos_ = light + _aisthesis_ = sensation**)
>  - Variant spelling
>
>**<u>Otolaryngological Terms (Relevant to your specialty):</u>**
>
>20. **[[Rhinogenesis]]** - Development or formation of the nose (**from Greek _rhis/rhinos_ = nose + _genesis_ = formation**)
>21. **[[Phonesis]]** - The utterance of sound (**from Greek _phone_ = voice/sound + _-esis_**)
>    - Related to phonation disorders
>
>**<u>Compound Terms with [[-esis]]</u>**:
>
>22. **[[Antiemesis]]** - Prevention of vomiting
>   - Related term: antiemetic (**adjective/noun form**)
>1. **[[Hematemesis]]** - Vomiting of blood (from Greek _haima_ = blood + _emein_ = to vomit + _**-esis**_)
>    - Important diagnostic sign
>2. **Melena** vs **Hematochezia** - Note: while these don't use [[-esis]], they're related GI bleeding terms often coded alongside [[hematemesis]]
>
_____
>[!tip]- DERIVATIONS of -esis
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
[[Appendix A Prefixes]]
[[Appendix B Combining Forms]]
[[Appendix C Suffixes]]
[[Appendix D Suffix forms]]