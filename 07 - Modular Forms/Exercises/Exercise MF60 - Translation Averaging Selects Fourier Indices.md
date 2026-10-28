---
title: "Exercise MF60: Translation Averaging Selects Fourier Indices"
topic: modular-forms
difficulty: intermediate
status: not-started
tags:
  - exercise
  - modular-forms
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 5, Section 5.7, Exercise 5.7.3, printed p. 195, PDF p. 209"
source_refs:
  - "S7/ch-5/sec-7/ex-3"
created: 2026-10-28
---

# Exercise MF60: Translation Averaging Selects Fourier Indices

## Problem Statement

> [!question] Original Exercise 5.7.3
> Show that
> $$
> \pi_d\left(\sum_{n=0}^\infty a_nq_N^n\right)=\sum_{n:\,d\mid n}a_nq_N^n.
> $$
> Here $q_N=e^{2\pi i\tau/N}$, $d\mid N$, and $\pi_d(f)=d^{-1}\sum_{b=0}^{d-1}f[\left(\begin{smallmatrix}1&bN/d\\0&1\end{smallmatrix}\right)]_k$.

## Hints

> [!hint]- Hint 1
> Translation by $bN/d$ multiplies the $n$th term by $e^{2\pi i bn/d}$.

> [!hint]- Hint 2
> Sum a finite geometric progression, distinguishing whether its ratio is $1$.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> Translations have determinant $1$ and automorphy factor $1$, so their slash action is literal substitution $\tau\mapsto\tau+bN/d$. It follows that
> $$
> \pi_d f(\tau)=\sum_{n=0}^\infty a_nq_N^n\left(\frac1d\sum_{b=0}^{d-1}e^{2\pi i bn/d}\right).
> $$
> The interchange is legitimate because the outer sum is convergent at each point in a sufficiently high half-plane and the average has finitely many terms. If $d\mid n$, every exponential in parentheses is $1$ and the average is $1$. Otherwise $z=e^{2\pi i n/d}\ne1$ but $z^d=1$, and
> $$
> \sum_{b=0}^{d-1}z^b=\frac{1-z^d}{1-z}=0.
> $$
> Thus the average retains exactly the indices divisible by $d$, including the constant term $n=0$. Equality in that half-plane extends wherever the forms are holomorphic by the identity theorem. In the cusp-space application $a_0=0$, so the same computation gives the printed sum beginning with $n=1$ in the surrounding text.

## Related Concepts

- [[07 - Modular Forms/Concepts/Hecke Operators]]
- [[07 - Modular Forms/Concepts/Cusp Forms]]

## Notes

- **Source status:** The complete original problem was checked on the rendered 200 dpi source pages [S7, Exercise 5.7.3, printed p. 195 / PDF p. 209]. The solution is independently supplied; statements assigned as exercises are not treated as proofs printed in the textbook.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
