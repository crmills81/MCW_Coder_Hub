---
tags:
  - medterm
  - word-element
  - combining-form
  - suffix
  - physiology
  - general-medicine
aliases:
  - -ception
  - -ceptive
  - -ceptible
  - -ceptable
  - -ceive
  - -ceptor
roots:
  - -cept
  - -cip-
  - -ceive
  - capere
forms:
  - combining form (bound morpheme)
alphabet: C
definition: A Latin-derived combining form meaning "to take, seize, or hold," used in medical and scientific terms describing the act of receiving, taking in, or holding.
---

>[!Note] DEFINITION of [[-cept]]
>**-cept** is a bound combining form derived from the participial stem of the Latin verb _capere_ ("to take, seize, hold"), used in medical and scientific vocabulary to denote the action of taking in, receiving, or holding something. It differs from the closely related verb-forming suffix **[[-ceive]]** mainly in grammatical function — *-cept* typically produces nouns and adjectives (reception, receptive, conception, susceptible), while *-ceive* produces the corresponding verbs (receive, conceive, perceive). Physiologically, terms built on this root span normal receiving processes — such as a hormone binding its **[[receptor]]** — and pathological ones, such as **[[intussusception]]**, in which a segment of bowel telescopes into an adjacent segment. The same root underlies immunologic and genetic susceptibility (an organism's capacity to "take up" a disease process) as well as reproductive conception, making it one of the more clinically productive Latin roots in medical English. It is frequently confused with the standalone agent-suffix **[[-ceptor]]** (receptor, nociceptor, chemoreceptor), which is simply *-cept* combined with the agent-forming suffix *-or* and denotes the structure that performs the receiving, rather than the act of receiving itself.

_____

>[!info]+ ETYMOLOGY of [[-cept]]
>#latin
>
>|Component|Origin|Meaning|
>|---|---|---|
>|**[[-cept]]**|Latin _capiō, capere_ (KA-pee-oh, KA-pe-re), perfect passive participle _captus_, weakened to _-ceptus_ in compounds|"**to take**," "**to seize**," "**to hold**" — participial/combining-form suffix|
>|**-cip-**|Latin present-stem form of _capere_ appearing in compounds (vowel weakened from _a_ to _i_)|Present-stem variant used before infinitive/verbal endings — e.g., _accipere_, _recipere_, _concipere_|
>
> The verb *capere* is one of the most prolific roots in Latin, and it changes shape depending on where it lands in a compound. In the present stem, the root vowel weakens from *a* to *i*, giving *-cipere* — as in _accipere_ ("to accept"), _recipere_ ("to receive"), _concipere_ ("to conceive"), _excipere_ ("to except"), _percipere_ ("to perceive"), and _suscipere_ ("to undertake"). In the perfect passive participle, the same weakening produces *-ceptus* — _acceptus_, _receptus_, _conceptus_, _exceptus_, _perceptus_, _susceptus_ — and it is this participial form that English borrowed directly, via Old French and Latin, as the noun- and adjective-forming suffix *-cept*. The words *conception* (c. 1300) and *exception* (c. 1380) were among the earliest of this family to enter English. The root remains highly productive in modern medical and general vocabulary: ***[[accept]]***/***acceptable***, ***[[concept]]***/***conception***, ***[[deceive]]***/***deception***, ***[[except]]***/***exception***, ***[[intercept]]***/***interception***, ***[[perceive]]***/***perception***, and ***[[receive]]***/***reception***/***[[receptor]]***.

_____

> [!success]+ 🔀 ALIASES / ALTERNATE FORMS
> 
> - **-ception** _(noun-forming form — e.g., "conception," "perception," "interception")_
> - **-ceptive** _(adjective form — e.g., "receptive," "perceptive," and "interceptive," as in orthodontic interceptive treatment)_
> - **-ceptible / -ceptable** _(adjective form, "capable of being taken or received" — e.g., "susceptible," "perceptible," "acceptable")_
> - **-ceive** _(verb form of the same root — e.g., "receive," "conceive," "perceive," "deceive")_
> - **-ceptor** _(agent-noun form, "-cept" + agent suffix "-or" — e.g., "receptor," "nociceptor," "chemoreceptor")_

_____

> [!danger]+ 🔗 RELATED TERMS
> 
> - **[[receptor]]** — a cell-surface or intracellular protein structure that binds, or "takes up," a specific signaling molecule; the agent-noun form of this root
> - **[[intussusception]]** — telescoping of one bowel segment into an adjacent segment, a leading cause of bowel obstruction in infants and young children; coded under **[[K56.1]]**
> - **susceptibility** — an organism's capacity to be affected by, or "take up," a disease process; central to immunologic and genetic risk assessment
> - **conception** — the union of sperm and egg forming a zygote; root of "contraception" (against conception)
> - **perception** — the neurological process of "taking in" and interpreting sensory information
> - **[[-ceptor]]** — the related agent-forming suffix denoting the structure that performs the receiving, as distinct from the act of receiving itself denoted by *-cept*
> - **[[-ectomy]]** — an unrelated Greek-derived surgical suffix ("cutting out") frequently confused with *-cept* forms only by surface resemblance in casual reading, not by root or meaning

_____

>[!tip]- DERIVATIONS of [[-cept]]
>```dataview
>TABLE definition AS Definition
>FROM #medterm 
>WHERE length(filter(roots, (word) => econtains([[-cept]].roots, word))) > 0 AND file.name != [[-cept]].file.name
>SORT file.name ASC
>```

_____

>[!faq]- Query functionality
>```dataview
>TABLE definition AS Definition
>FROM #medterm 
>WHERE length(filter(definition, (word) => econtains([[-cept]].definition, word))) > 0 AND file.name != [[-cept]].file.name
>```

<br>

[[Med terms dictionary]]
[[Appendix A Prefixes]]
[[Appendix B Combining Forms]]
[[Appendix C Suffixes]]
[[Appendix D Suffix forms]]