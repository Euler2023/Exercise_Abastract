---
title: "Exercise MF48: The Weight Three Eta Product at Level Seven"
topic: modular-forms
difficulty: intermediate
status: not-started
tags:
  - exercise
  - modular-forms
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 3, Section 3.6, Exercise 3.6.5, printed p. 92, PDF p. 106"
source_refs:
  - "S7/ch-3/sec-6/ex-5"
created: 2026-10-28
---

# Exercise MF48: The Weight Three Eta Product at Level Seven

## Problem Statement

> [!question] Original Exercise 3.6.5
> Show that $\dim(S_3(\Gamma_1(7)))=1$, so Proposition3.2.2(a) shows that this space is spanned by the function $\varphi_3(\tau)=\eta(\tau)^3\eta(7\tau)^3$.

## Hints

> [!hint]- Hint 1
> For $\Gamma_1(7)$ use genus zero, six cusps, no elliptic points, and regular cusp stabilizers.

> [!hint]- Hint 2
> Insert $k=3$ in the odd-weight formula.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> The prime-level calculation for $\Gamma_1(7)$ gives effective index $(7^2-1)/2=24$, no elliptic points, six cusps and genus $(7-5)(7-7)/24=0$. Also $-I\notin\Gamma_1(7)$.
>
> Every cusp is regular. Indeed, an element of $\Gamma_1(7)$ has trace congruent to two modulo seven. A negative unipotent cusp generator would have trace $-2$, incompatible with that congruence. Thus $r=6$ and $t=0$. The odd-weight cusp dimension formula gives
> $$
> \dim S_3(\Gamma_1(7))=2(0-1)+\lfloor3/3\rfloor\cdot0+\tfrac12\cdot6+1\cdot0=1.
> $$
> Proposition3.2.2(a), with its eta-product modularity and cusp vanishing hypotheses, supplies $\varphi_3\in S_3(\Gamma_1(7))$. Its expansion begins
> $$
> \varphi_3=q\prod_{n\ge1}(1-q^n)^3(1-q^{7n})^3,
> $$
> so it is nonzero. A nonzero vector spans a one-dimensional complex vector space; hence $S_3(\Gamma_1(7))=\mathbb C\varphi_3$.

## Related Concepts

- [[07 - Modular Forms/Concepts/Modular Forms Definition|Modular Forms Definition]]
- [[07 - Modular Forms/Concepts/Modular Functions|Modular Functions]]
- [[07 - Modular Forms/Concepts/Modular Curve Charts and Cusp Widths|Modular Curve Charts and Cusp Widths]]

## Notes

- **Source status:** The complete numbered exercise was checked directly on 200 dpi page images, printed 92 / PDF 106. The solution above is independently derived.
- **Routing:** The principal toolkit is modular-forms; cross-topic prerequisites are linked above.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
