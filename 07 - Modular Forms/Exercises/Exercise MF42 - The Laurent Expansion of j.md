---
title: "Exercise MF42: The Laurent Expansion of j"
topic: modular-forms
difficulty: intermediate
status: not-started
tags:
  - exercise
  - modular-forms
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 3, Section 3.2, Exercise 3.2.2, printed p. 76, PDF p. 90"
source_refs:
  - "S7/ch-3/sec-2/ex-2"
created: 2026-10-28
---

# Exercise MF42: The Laurent Expansion of j

## Problem Statement

> [!question] Original Exercise 3.2.2
> Show that the modular invariant $j$ has Laurent series (3.1). (A hint for this exercise is at the end of the book.)
>
> **Referenced formula, printed p. 73 / PDF p. 87.**
> $$
> j(\tau)=\frac1q+\sum_{n=0}^\infty a_nq^n,\qquad a_n\in\mathbb Z,\qquad q=e^{2\pi i\tau}.
> $$

## Hints

> [!hint]- Hint 1
> Use the normalized Eisenstein series $E_4$ and the product for $\eta^{24}$.

> [!hint]- Hint 2
> Every factor $(1-q^m)^{-24}$ has integral power-series coefficients and constant term $1$.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> Use the Chapter 1 normalizations
> $$
> E_4=1+240\sum_{n\ge1}\sigma_3(n)q^n,\qquad
> \eta^{24}=q\prod_{m\ge1}(1-q^m)^{24}.
> $$
> The discriminant convention in this book is $\Delta=(2\pi)^{12}\eta^{24}$ and $g_2=(4\pi^4/3)E_4$. Consequently
> $$
> j=\frac{1728g_2^3}{\Delta}
> =\frac{E_4^3}{\eta^{24}}
> =q^{-1}\left(1+240\sum_{n\ge1}\sigma_3(n)q^n\right)^3
> \prod_{m\ge1}(1-q^m)^{-24}.
> $$
> The factor involving $E_4$ has integral coefficients and constant term $1$. By the binomial expansion,
> $$
> (1-q^m)^{-24}=\sum_{r\ge0}\binom{r+23}{23}q^{mr}.
> $$
> To compute a coefficient of degree $n$, only factors with $m\le n$ and finitely many choices of their exponents can contribute. Thus the infinite product has integral coefficients and constant term $1$. Multiplication proves that $j$ has leading term $q^{-1}$ and all its remaining coefficients are integers.
>
> This formal computation is an analytic Laurent expansion for $|q|<1$. Indeed $E_4$ converges there, and $\prod_{m\ge1}(1-q^m)^{-24}$ converges locally uniformly to a nonzero holomorphic function: on $|q|\le r<1$, the sum of the logarithms' absolute values is bounded by a constant times $\sum_mr^m<\infty$. Products and inverses therefore agree with the displayed Taylor coefficients.
>
> As a concrete check,
> $$
> E_4^3=1+720q+179280q^2+O(q^3),\qquad
> \prod_{m\ge1}(1-q^m)^{-24}=1+24q+324q^2+O(q^3).
> $$
> Their product gives $j=q^{-1}+744+196884q+O(q^2)$, consistent with the claimed leading term and integrality.

## Related Concepts

- [[07 - Modular Forms/Concepts/j-Invariant|j-Invariant]]
- [[07 - Modular Forms/Concepts/Eisenstein Series|Eisenstein Series]]
- [[07 - Modular Forms/Concepts/Eta Function|Eta Function]]
- [[07 - Modular Forms/Concepts/Discriminant Function|Discriminant Function]]

## Notes

- **Source status:** The complete numbered exercise was checked directly on 200 dpi page images, printed 76 / PDF 90. The solution above is independently derived.
- **Imported inputs:** The Fourier expansion of $E_4$ and the discriminant–eta product identity are Chapter 1 results. The proof derives integrality and the pole normalization rather than assuming tabulated coefficients.
- **Routing:** The principal toolkit is modular-forms; cross-topic prerequisites are linked above.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
