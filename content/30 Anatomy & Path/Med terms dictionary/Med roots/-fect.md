---
tags:
  - medroot
aliases:
  - fac-
  - fact-
  - -fic-
  - -feit
  - infect/o
roots:
  - -fect
  - -ect
forms:
  - combining
"alphabet:": F
definition:
  - make
---
>[!Note] DEFINITION of [[-fect]]
>Make;  `-fect` is a bound Latin root meaning **"to make, to do, or to act upon."** It does not stand alone as a word; it only appears when a prefix is attached (**e.g., _in-fect_, _de-fect_, _ef[[-fect]]_**). In medical terminology it conveys the idea of something being **acted upon, produced, or caused** — most critically seen in _infect_ (**to "make inroads into" a host**) and _defect_ (**something "*made*" incompletely or wrongly**).
_____
>[!info]+ ETYMOLOGY of [[-fect]]
>#latin [[facere]], [[factus]]; 
>Latin root family: [[fac-]] / [[fact-]] / [[-fect-]] / [[-fic-]] — all mean "**do, make**"
_____
>[!example]+ RELATED TERMS to [[-fect]]
>
>| [[-fect]] | make |    -    |
|:---------:|:----:|:-------:|
| [[fac-]]  | YES  |    -    |
| [[-fic-]] | YES  |    -    |
| [[poie-]] | YES  | produce |
>
>
>**infect**	      *in- (into) + fect*      (**make**)	To introduce pathogenic organisms into a host 
>
>**infection**	*in- + fect + -ion*    (state of)	The state of being invaded by a pathogen 
​
>**infectious**	*in- + fect + [[-ious]]*	  Capable of transmitting disease
>**infective**	*in- + fect + -ive*	      Having the quality of causing infection 
​
>**defect**   *de- (down/away) + fect*	  A structural or functional imperfection; e.g., [[septal]] defect 
​
>**defective**	*[[de-]] + fect + -ive*   	Functioning below normal standard 
​
>**effect**	        *ex- (out) + fect*	    The result produced by an action; the "**made**" outcome 
​
>**effective**	*[[ex-]] + fect + [[-ive]]*	Able to produce the desired result 
​
>**affect**	  *[[ad-]] (toward) + fect*	To act upon or influence (a tissue, organ, emotion) 
​
>**transfection**	*[[trans-]] (across) + fect + [[-ion]]*	Deliberate introduction of nucleic acids into a eukaryotic cell 
​
>**reinfect**	    *[[re-]] (again) + infect*	     To infect again after recovery 
​
>**disaffect**	   *[[dis-]] + [[af-]] + fect*	    To make unfavorable; loss of function allegiance 
​
>**perfect**	    *[[per-]] (thoroughly) + fect*	"**Thoroughly made**"; complete 
​
>**prefect**	    *[[prae-]] (before) + fect*	      One "**made**" to rule before others 
​
>**refection**  	*[[re-]] (again) + fect + [[-ion]]*	Restoration; refreshment — root of refectory
>
_____

> [!success]+ Related Terms & See Also
> - **[[fac-]]** — unshifted form of same root (_facile, facade_)
>     
> - **[[fact-]]** — past participial standalone form (_factor, artifact_)
>     
> - **[[-fic-]]** — adjectival/verbal variant (_efficient, deficient, prolific_)
>     
> - **[[infect/o]]** — combining form used in medical terminology (_infect/o_ = tainted)​
>     
> - **[[-ion]]** — suffix "state or condition of" (_infection, affection_)
>     
> - **[[-ive]]** — suffix "pertaining to, having the quality of" (_infective, effective_)
>     
> - **[[-ious]]** — suffix "pertaining to, full of" (_infectious_)
>     
> - **[[in-]]** — Latin prefix "into, within" (key partner prefix)
>     
> - **[[de-]]** — Latin prefix "down, away, from" (_defect, deficient_)
>     
> - **[[trans-]]** — Latin prefix "across" (_transfection_)
>     
> - **[[path/o]]** — disease​
>     
> - **[[sept/o]]** — partition/dividing wall (as in _septal defect_)
>
_____
>[!tip]- DERIVATIONS of [[-fect]]
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