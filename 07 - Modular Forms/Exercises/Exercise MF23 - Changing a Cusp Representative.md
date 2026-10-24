---
title: "Exercise MF23: Changing a Cusp Representative"
topic: modular-forms
difficulty: beginner
status: not-started
tags:
  - exercise
  - modular-forms
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 1, Section 1.2, Exercise 1.2.7, printed p. 23, PDF p. 38; comment after Proposition 1.2.4, printed p. 17, PDF p. 32"
source_refs:
  - "S7/ch-1/sec-2/ex-7"
created: 2026-10-24
---

# Exercise MF23: Changing a Cusp Representative

## Problem Statement

> [!question] Original Exercise 1.2.7
> Show that $(f[\pm\alpha\beta]_k)(\tau)=(\pm1)^k(f[\alpha]_k)(\tau+j)$ in the comment after Proposition 1.2.4.
>
> In that comment (printed p. 17 / PDF p. 32), $\alpha\in SL_2(\mathbb Z)$ takes $\infty$ to a cusp, $j\in\mathbb Z$, and $\beta=\begin{pmatrix}1&j\\0&1\end{pmatrix}$. The weight operator is $(f[\gamma]_k)(\tau)=(c\tau+d)^{-k}f(\gamma\tau)$ for $\gamma=\begin{pmatrix}a&b\\c&d\end{pmatrix}$.

## Hints

> [!hint]- Hint 1
> Use $[\alpha\beta]_k=[\alpha]_k[\beta]_k$ and $\beta\tau=\tau+j$.

> [!hint]- Hint 2
> The scalar matrix $-I$ acts trivially on $\tau$ but contributes $(-1)^k$ to the weight factor.

## Solution

> [!success]- Solution
> **Proof scope:** Independent solution
>
> Write $\varepsilon=\pm1$. The matrices $\varepsilon\alpha\beta$ and $\alpha\beta$ induce the same fractional linear map. If $j(\alpha,z)$ denotes the automorphy factor, the bottom row of $\alpha\beta$ shows directly that
> $$
> j(\varepsilon\alpha\beta,\tau)=\varepsilon j(\alpha,\tau+j),
> \qquad(\varepsilon\alpha\beta)\tau=\alpha(\tau+j).
> $$
> Therefore, since $k\in\mathbb Z$ and $\varepsilon^{-k}=\varepsilon^k$,
> $$
> (f[\varepsilon\alpha\beta]_k)(\tau)
> =\varepsilon^k j(\alpha,\tau+j)^{-k}f(\alpha(\tau+j))
> =\varepsilon^k(f[\alpha]_k)(\tau+j).
> $$
> If $f[\alpha]_k=\sum_n a_ne^{2\pi in\tau/h}$, this becomes
> $$
> f[\varepsilon\alpha\beta]_k
> =\varepsilon^k\sum_n a_ne^{2\pi inj/h}e^{2\pi in\tau/h}.
> $$
> Thus cusp Fourier coefficients depend on this choice by root-of-unity factors, and the constant coefficient by $\varepsilon^k$. The condition that the constant coefficient is zero is independent of the choice, as required for cusp forms.

## Related Concepts

- [[07 - Modular Forms/Concepts/Modular Forms Definition|Modular Forms Definition]]
- [[07 - Modular Forms/Concepts/Cusp Forms|Cusp Forms]]
- [[07 - Modular Forms/Concepts/Congruence Subgroups|Congruence Subgroups]]

## Notes

The exercise and the referenced comment were visually checked. The independent calculation uses only the slash definition and integral weight; it does not assume $-I$ belongs to the congruence subgroup. No claim is made that the Fourier coefficients themselves are canonical.
