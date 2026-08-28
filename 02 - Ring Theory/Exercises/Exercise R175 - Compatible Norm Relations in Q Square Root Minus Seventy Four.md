---
title: "Exercise R175: Compatible Norm Relations in Q[sqrt(-74)]"
topic: ring-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - ring-theory
  - class-groups
  - ideal-factorization
source: "Michael Artin, Algebra, 2nd ed., Ch. 13, Quadratic Number Fields, Section 8, Computing the Class Group, Ex. 8.2, printed p. 410, PDF p. 422"
created: 2026-08-28
---

# Exercise R175: Compatible Norm Relations in Q[sqrt(-74)]

## Problem Statement

> [!question] Exercise 8.2
> With reference to Example 13.8.8, explain why $N(4+\delta)$ and $N(14+\delta)$ do not lead to contradictory conclusions.

## Hints

> [!hint]- Hint 1
> Fix which prime ideals above $3$ and $5$ are called $Q$ and $S$; the norm alone does not record whether a factor is $Q$ or $\overline Q$.

> [!hint]- Hint 2
> Compare the two resulting relations using the fact that $[Q]^5=1$.

## Solution

> [!success]- Solution
> Let $R=\mathbb Z[\delta]$ with $\delta^2=-74$, and choose
>
> $$
> P=(2,1+\delta),\qquad Q=(3,1+\delta),\qquad S=(5,1+\delta).
> $$
>
> Write $p=[P]$, $q=[Q]$, and $s=[S]$. Example 13.8.8 gives $q^5=1$.
>
> Since
>
> $$
> N(4+\delta)=90=2\cdot3^2\cdot5,
> $$
>
> reduction modulo the chosen prime ideals shows that $Q$ and $\overline S$, rather than $\overline Q$ and $S$, divide $(4+\delta)$. Thus
>
> $$
> (4+\delta)=P Q^2\overline S,
> \qquad
> p q^2s^{-1}=1.
> $$
>
> Similarly,
>
> $$
> N(14+\delta)=270=2\cdot3^3\cdot5,
> $$
>
> but now $\overline Q$ and $\overline S$ divide the element, so
>
> $$
> (14+\delta)=P\overline Q^{,3}\overline S,
> \qquad
> p q^{-3}s^{-1}=1.
> $$
>
> These are the same relation because $q^5=1$ implies $q^{-3}=q^2$. Hence the two norms are compatible. The apparent contradiction comes from trying to recover the orientation of every split prime factor from the integer norm alone.

## Related Concepts

- [[02 - Ring Theory/Concepts/Ideal Classes and Class Groups|Ideal Classes and Class Groups]]
- [[02 - Ring Theory/Concepts/Prime Splitting in Quadratic Fields|Prime Splitting in Quadratic Fields]]

## Notes

- **Routing:** Ring Theory is primary because the distinction between conjugate prime ideals resolves the apparent conflict.
- **Source status:** The problem is from [S1, Ch. 13, §13.8, Ex. 8.2, printed p. 410, PDF p. 422]. The oriented ideal factorizations are independently derived from the displayed lattice generators.
