---
title: "Exercise MF74: Specializing Eisenstein Fourier Series to Level One"
topic: modular-forms
difficulty: intermediate
status: not-started
tags:
  - exercise
  - modular-forms
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 4, Section 4.2, Exercise 4.2.6, printed p. 116, PDF p. 130"
source_refs:
  - "S7/ch-4/sec-2/ex-6"
created: 2026-10-28
---

# Exercise MF74: Specializing Eisenstein Fourier Series to Level One

## Problem Statement

> [!question] Original Exercise 4.2.6
> Confirm that when $N=1$ in Theorem 4.2.3, the series becomes the Fourier expansion of $G_k(\tau)$ from Chapter 1 when $k$ is even and cancels to zero when $k$ is odd.

## Hints

> [!hint]- Hint 1
> At level one all residue conditions are automatic and $\mu_N=1$.

> [!hint]- Hint 2
> Pair $d$ with $-d$ in the constant coefficient and $m$ with $-m$ in each divisor sum.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> Theorem 4.2.3 gives a constant $\sum_{d\in\mathbb Z\setminus\{0\}}d^{-k}$ and a positive-index coefficient $C_k\sum_{m\mid n}\operatorname{sgn}(m)m^{k-1}$, since $N=1$ makes all root-of-unity factors and congruence restrictions trivial. The pair $d,-d$ contributes $(1+(-1)^k)d^{-k}$ to the constant. For each positive divisor $m$ of $n$, the pair $m,-m$ contributes
> $$
> m^{k-1}-(-m)^{k-1}=(1+(-1)^k)m^{k-1}.
> $$
> If $k$ is even, the constant is $2\zeta(k)$ and the coefficient is $2C_k\sigma_{k-1}(n)$. Thus
> $$
> G_k(\tau)=2\zeta(k)+2\frac{(-2\pi i)^k}{(k-1)!}\sum_{n\ge1}\sigma_{k-1}(n)q^n,
> $$
> the Chapter 1 expansion. If $k$ is odd, the constant and every positive coefficient are zero. Absolute convergence for $k\ge3$ permits these pairings, so the entire function vanishes, as also follows directly from pairing lattice vectors with their negatives.

## Related Concepts

- [[07 - Modular Forms/Concepts/Eisenstein Series]]
- [[07 - Modular Forms/Concepts/Modular Forms Definition]]
- [[07 - Modular Forms/Concepts/L-functions]]

## Notes

- **Source status:** The complete original problem was checked on the rendered 200 dpi source pages [S7, Exercise 4.2.6, printed p. 116 / PDF p. 130]. The solution is independently supplied; statements assigned as exercises are not treated as proofs printed in the textbook.
- **Expanded source reference:** Theorem 4.2.3, including its sum over positive and negative divisors, is on printed p.115/PDF p.129. Its scope here is $k\ge3$; no conditional weight-two lattice series is being paired.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
