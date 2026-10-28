---
title: "Exercise MF79: The Principal Dirichlet L Function"
topic: modular-forms
difficulty: intermediate
status: not-started
tags:
  - exercise
  - modular-forms
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 4, Section 4.4, Exercise 4.4.4, printed p. 125, PDF p. 139"
source_refs:
  - "S7/ch-4/sec-4/ex-4"
created: 2026-10-28
---

# Exercise MF79: The Principal Dirichlet L Function

## Problem Statement

> [!question] Original Exercise 4.4.4
> Show that $L(s,1_N)=\zeta(s)\prod_{p\mid N}(1-p^{-s})$.

## Hints

> [!hint]- Hint 1
> The principal character removes exactly the terms divisible by a prime factor of $N$.

> [!hint]- Hint 2
> Expand the finite product by inclusion–exclusion in the half-plane of absolute convergence.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> For $\operatorname{Re}s>1$, both Dirichlet series converge absolutely, and $1_N(n)$ is the indicator of $(n,N)=1$. Let $P$ be the finite set of primes dividing $N$. Inclusion–exclusion gives
> $$
> \boldsymbol1_{(n,N)=1}=\sum_{S\subset P}(-1)^{|S|}\boldsymbol1_{\prod_{p\in S}p\mid n}.
> $$
> Multiplying by $n^{-s}$ and summing, each divisibility sum is $(\prod_{p\in S}p)^{-s}\zeta(s)$. Thus
> $$
> L(s,1_N)=\zeta(s)\sum_{S\subset P}(-1)^{|S|}\prod_{p\in S}p^{-s}=\zeta(s)\prod_{p\mid N}(1-p^{-s}).
> $$
> This also gives the meromorphic continuation of the principal $L$-function, with possible pole only at $s=1$, using the meromorphic continuation of $\zeta$. Its residue there is $\prod_{p\mid N}(1-1/p)=\phi(N)/N$. For $N=1$ the product is empty and equals $1$, as required.

## Related Concepts

- [[07 - Modular Forms/Concepts/Eisenstein Series]]
- [[07 - Modular Forms/Concepts/Modular Forms Definition]]
- [[07 - Modular Forms/Concepts/L-functions]]

## Notes

- **Source status:** The complete original problem was checked on the rendered 200 dpi source pages [S7, Exercise 4.4.4, printed p. 125 / PDF p. 139]. The solution is independently supplied; statements assigned as exercises are not treated as proofs printed in the textbook.
- **Analytic scope:** The direct proof is in $\operatorname{Re}s>1$; the continuation statement uses the Riemann zeta continuation recalled in §4.4. The finite inclusion–exclusion identity itself has no convergence issue.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
