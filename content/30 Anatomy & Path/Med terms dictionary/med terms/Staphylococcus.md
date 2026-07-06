---
tags:
  - medterm
  - medroot
aliases:
  - staph
  - staphylococci
roots:
  - staphylococcus
  - staphylo-
  - -coccus
  - staphyl/o-
forms:
  - prefix
  - suffix
  - combining
  - compound suffix form
  - noun
alphabet: S
definition:
  - a genus of Gram-positive
  - spherical bacteria (cocci) that cluster in grape-like arrangements
  - responsible for a wide range of human infections from minor skin conditions to life-threatening sepsis.
---
>[!Note] DEFINITION of [[Staphylococcus]]
>**Staphylococci** are facultative [[anaerobes]] (**growing in both oxygen-rich and oxygen-poor environments**), nonmotile, and non-spore-forming. They are classified primarily by their ability to clot blood plasma via the enzyme [[coagulase]]: coagulase-positive species (**most notably S. aureus**) are the most virulent, while **coagulase-negative** species (**e.g., S. epidermidis, S. saprophyticus**) are generally less aggressive but still clinically significant, especially in immunocompromised patients or those with implanted devices. At **least 30 species have been identified, 11 of which are human commensals**. S. aureus can colonize the nasal passages, skin, and mucous membranes asymptomatically in healthy individuals, but can trigger infections ranging from [[furuncles]] and [[impetigo]] to [[pneumonia]], [[endocarditis]], [[osteomyelitis]], and toxic shock syndrome. Antibiotic resistance, particularly **[[methicillin-resistant S. aureus (MRSA)]]**, is a major global public health challenge.
_____
>[!info]+ ETYMOLOGY of [[Staphylococcus]]
>#greek 
>Coined in 1882 by Scottish surgeon Alexander Ogston (1844-1929), who first described the bacteria in pus from a surgical knee [[abscess]], noting they looked like "**bunches of grapes**." He combined:  Greek σταφυλή (*staphylē*) — "**bunch of grapes**," possibly from PIE; [[stabh-]] (**"post, stem; to support**")Greek κόκκος (*kókkos*) — "**berry, grain, seed.**" The term was published in Modern Latin as **Staphylococcus** in 1882, with English usage following by 1887. In 1884, German physician Friedrich Julius Rosenbach further differentiated S. aureus (Latin aureus = "**golden**") from S. albus (Latin albus = "**white**"), the latter later renamed S. [[epidermidis]]. **Combining form**: **[[staphyl/o-]]** also independently means "[[uvula]]" (the soft tissue hanging at the back of the throat, which resembles a grape

> [!example]+ CLINICALLY SIGNIFICANT SPECIES
> 
> | Species                | Coagulase | Key Clinical Role       |
> | ---------------------- | --------- | ---------------------------------------------- |
> | ***S. aureus***        | Positive  | Skin infections, [[pneumonia]], [[endocarditis]], MRSA |
> | ***S. epidermidis***   | Negative  | Device-related infections, [[catheter]] infections |
> | ***S. saprophyticus*** | Negative  | UTIs in young, sexually active women           |
> | ***S. lugdunensis***   | Negative  | Aggressive infections mimicking *S. aureus*    |
> | ***S. haemolyticus***  | Negative  | Opportunistic infections in immunocompromised  |
> |                        |           |                                                |

_____


> [!warning]+ RELATED TERMS
> - **MRSA** (*Methicillin-resistant S. aureus*): Antibiotic-resistant strain, major nosocomial concern.
> - **[[Staphylectomy]] / [[Staphylotomy]]**: Surgical procedures on the [[uvula]] (from the "uvula" meaning of *staphylo-*).
> - **[[Staphylococcemia]]**: Staphylococci in the bloodstream ([[bacteremia]]/[[sepsis]]).
> - **[[Staphylokinase]]**: Enzyme produced by *S. aureus* used as a thrombolytic agent.
> - **[[Streptococcus]]**: Sister genus of chain-forming (*strepto-* = "twisted chain") spherical bacteria — compare to grape-cluster arrangement of staph.
> - **[[Staphyloma]]**: Abnormal bulging/protrusion of the eye wall — shares *staphylo-* root for its grape-like appearance.
> - **[[Staphylorrhaphy]]**: Surgical repair of a cleft palate/uvula.

_____
>[!tip]- DERIVATIONS of Staphylococcus
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

[[Med roots]]
[[Appendix A Prefixes]]
[[Appendix B Combining Forms]]
[[Appendix C Suffixes]]
[[Appendix D Suffix forms]]