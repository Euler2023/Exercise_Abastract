---
title: "Exercise R448: Unique Factorization and Euler Product Expansion"
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - ring-theory
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 5, Section 5.9, Exercise 5.9.2, printed p. 207, PDF p. 221"
source_refs:
  - "S7/ch-5/sec-9/ex-2"
created: 2026-10-28
---

# Exercise R448: Unique Factorization and Euler Product Expansion

## Problem Statement

> [!question] Original Exercise 5.9.2
> Prove formula (5.26). (A hint for this exercise is at the end of the book.)
>
> The formula is
> $$
> \prod_p\sum_{r=0}^\infty g(p^r)=\sum_{n=1}^\infty\prod_{p^r\parallel n}g(p^r).
> $$
> The source says that the function $g$ of prime powers is assumed small enough to justify the rearrangements, and $p^r\parallel n$ denotes the highest power of $p$ dividing $n$.

## Hints

> [!hint]- Hint 1
> For a finite set of primes, expand by choosing one exponent for each prime.

> [!hint]- Hint 2
> Use unique factorization to identify the exponent tuples with positive integers supported on those primes. Normalize the exponent-zero term to one.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> The necessary convention is $g(p^0)=g(1)=1$. First take a finite set of primes $P$ and finite exponent cutoffs $R_p$. Distributivity gives
> $$
> \prod_{p\in P}\sum_{r=0}^{R_p}g(p^r)=\sum_{(r_p)}\prod_{p\in P}g(p^{r_p}).
> $$
> Unique factorization is a bijection from these exponent tuples to the integers $n=\prod_{p\in P}p^{r_p}$ satisfying the same cutoffs. Because the factors at exponent zero are one, each summand is precisely $\prod_{p^r\parallel n,\ r>0}g(p^r)$. In particular $n=1$ contributes the empty product $1$.
>
> One rigorous analytic sufficient hypothesis is
> $$
> \sum_p\sum_{r\ge1}|g(p^r)|<\infty.
> $$
> Then the products of absolute local sums are bounded by $\exp(\sum_{p,r\ge1}|g(p^r)|)$, so the sum over all finite exponent tuples converges absolutely. Taking successively all cutoffs and all primes proves the stated equality by absolute convergence. Alternatively, with $g(p^r)=b_{p,r}p^{-rs}$, interpret both sides as formal Dirichlet series, where multiplication is Dirichlet convolution. At each integer $n$ only its finitely many prime-power divisors contribute, so the finite identity proves equality coefficient by coefficient without any analytic hypothesis.
>
> Without $g(1)=1$, every local sum has the same nonunit constant factor and the asserted normalization need not hold. Without formal interpretation or an appropriate convergence hypothesis, an infinite distributive rearrangement is not justified. These are the conventions implicit in the source's “small enough” qualification.

## Related Concepts

- [[02 - Ring Theory/Concepts/Dirichlet Convolution and Mobius Inversion]]
- [[02 - Ring Theory/Concepts/Formal Power Series]]
- [[07 - Modular Forms/Concepts/Hecke Operators]]

## Notes

- **Source status:** The complete original problem was checked on the rendered 200 dpi source pages [S7, Exercise 5.9.2, printed p. 207 / PDF p. 221]. The solution is independently supplied; statements assigned as exercises are not treated as proofs printed in the textbook.
- **Expanded source reference:** Formula (5.26) and its convergence qualification are on printed p.202/PDF p.216. Unique factorization in $\mathbb Z$ is the arithmetic input.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
