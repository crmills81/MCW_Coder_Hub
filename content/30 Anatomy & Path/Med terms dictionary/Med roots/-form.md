---
tags:
  - medroot
aliases: []
roots:
  - -form
  - forma
forms:
  - combining
  - suffix
"alphabet:": F
definition:
  - shape
  - resembling
---
>[!Note] **DEFINITION** of [[-form]]
>shape; The suffix **-form** is used to create adjectives that indicate a resemblance to a specific shape, object, or animal. In medical contexts, it frequently describes the morphology of bones (e.g., the _[[cribriform]]_ plate), organs (e.g., the _vermiform_ appendix), or chemical structures. It serves as a descriptive marker to help clinicians identify structures based on their visual similarity to well-known items.
_____
>[!info]+ **ETYMOLOGY** of [[-form]]
>#latin, forma; **Root:** _forma_ (meaning "form," "shape," or "appearance")[](https://vmicro.iusm.iu.edu/hs_vm/docs/glossary.pdf) **Historical Context:** It transitioned into English as a productive suffix, becoming a standard way to classify anatomical structures in international scientific vocabulary.
_____
>[!example]+ **RELATED TERMS** to [[-form]]
>
>| [[-form]]  | shape | -   |
>| ---------- | ----- | ---  |
>| ---------- | ----- | ---- |
>| [[morph-]] | YES   | form |
>
>- **Cribriform:** Sieve-like; specifically referring to the _cribriform plate_ of the ethmoid bone which has numerous small holes for olfactory nerves (from Latin _cribrum_ "sieve").[](https://vmicro.iusm.iu.edu/hs_vm/docs/glossary.pdf)​
>- **Vermiform:** Worm-shaped; most commonly known in the _vermiform appendix_ (from Latin _vermis_ "worm").
>- **Cruciform:** Shaped like a cross; used to describe certain ligaments or skeletal structures (from Latin _crux_ "cross").
>- **Fusiform:** Spindle-shaped; tapering at both ends, often used to describe types of aneurysms or muscles.[](https://www.merriam-webster.com/dictionary/vermiform)​
>- **Cuneiform:** Wedge-shaped; referring to specific bones in the foot or a style of ancient writing.
>- **Falciform:** Sickle-shaped; such as the _falciform ligament_ of the liver.
_____
>[!tip]+ **DERIVATIONS** of [[-form]]
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