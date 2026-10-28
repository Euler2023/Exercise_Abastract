---
title: "Exercise R449: The L Function of an Eisenstein Series"
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - ring-theory
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 5, Section 5.9, Exercise 5.9.3, printed p. 207, PDF p. 221"
source_refs:
  - "S7/ch-5/sec-9/ex-3"
created: 2026-10-28
---

# Exercise R449: The L Function of an Eisenstein Series

## Problem Statement

> [!question] Original Exercise 5.9.3
> Prove formula (5.27). What is a half plane of convergence?
>
> Formula (5.27) states
> $$
> L(s,E_k^{\psi,\varphi}/2)=L(s,\psi)L(s-k+1,\varphi),
> $$
> where the positive-index coefficients of $E_k^{\psi,\varphi}/2$ are $\sigma_{k-1}^{\psi,\varphi}(n)=\sum_{d\mid n}\psi(n/d)\varphi(d)d^{k-1}$.

## Hints

> [!hint]- Hint 1
> Write $n=md$ in the divisor sum.

> [!hint]- Hint 2
> For absolute convergence, separately compare the sums over $m$ and $d$ with zeta series.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> Let $\sigma=\operatorname{Re}s$. If $\sigma>\max(1,k)$, then
> $$
> \sum_{m,d\ge1}|\psi(m)\varphi(d)|m^{-\sigma}d^{k-1-\sigma}\le\zeta(\sigma)\zeta(\sigma-k+1)<\infty.
> $$
> Thus the double series may be regrouped by $n=md$. Using the definition of the coefficients gives
> $$
> \begin{aligned}
> L(s,E_k^{\psi,\varphi}/2)&=\sum_{n\ge1}\sum_{d\mid n}\psi(n/d)\varphi(d)d^{k-1}n^{-s}\\
> &=\sum_{m,d\ge1}\psi(m)m^{-s}\varphi(d)d^{-(s-k+1)}\\
> &=L(s,\psi)L(s-k+1,\varphi).
> \end{aligned}
> $$
> For the positive integer weights of the section, $\operatorname{Re}s>k$ is therefore a half-plane of absolute convergence. At weight one this reads $\operatorname{Re}s>1$. No claim about convergence on its boundary is needed. The constant coefficient of the Eisenstein series is omitted by the definition $L(s,f)=\sum_{n\ge1}a_n(f)n^{-s}$, so it introduces no additional term.

## Related Concepts

- [[02 - Ring Theory/Concepts/Dirichlet Convolution and Mobius Inversion]]
- [[02 - Ring Theory/Concepts/Formal Power Series]]
- [[07 - Modular Forms/Concepts/Hecke Operators]]
- [[07 - Modular Forms/Concepts/Eisenstein Series]]

## Notes

- **Source status:** The complete original problem was checked on the rendered 200 dpi source pages [S7, Exercise 5.9.3, printed p. 207 / PDF p. 221]. The solution is independently supplied; statements assigned as exercises are not treated as proofs printed in the textbook.
- **Checked context:** Formula (5.27) is on printed p.203/PDF p.217. The coefficient formula determines the normalization $E_k^{\psi,\varphi}/2$ used in this exercise; changing normalization would change the left side by the same scalar.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
