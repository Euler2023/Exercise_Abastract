---
title: "Exercise G80: Parity from Disjoint-Cycle Decomposition"
topic: group-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - group-theory
  - symmetric-groups
  - parity
  - cycle-notation
source: "Michael Artin, Algebra, 2nd ed., Ch. 2, Section 10, Ex. 10.1, printed p. 74, PDF p. 86; Serge Lang, Algebra, rev. 3rd ed., Ch. I, Groups, Exercise 33, printed p. 78, PDF p. 93"
created: 2026-08-23
---

# Exercise G80: Parity from Disjoint-Cycle Decomposition

## Problem Statement

> [!question] Exercise 10.1
> Describe how to determine from disjoint-cycle decomposition whether a permutation is odd or even.

> [!question] Lang Exercise 33
> For a permutation $\sigma$ of an $n$-element set, define $e(\sigma)=(-1)^m$, where $m=n-$ the number of orbits of $\sigma$. Show that right multiplication by a transposition changes the number of orbits by one and hence changes the sign of $e$. Deduce that $e(\sigma)$ is the usual sign of $\sigma$.

## Hints

> [!hint]- Hint 1
> A $k$-cycle is a product of $k-1$ transpositions.

## Solution

> [!success]- Solution
> If the nontrivial disjoint cycles have lengths $k_1,\ldots,k_r$, then
>
> $$
> \operatorname{sgn}(p)=(-1)^{\sum_i(k_i-1)}.
> $$
>
> Equivalently, each even-length cycle is odd and each odd-length cycle is even, so the permutation is odd exactly when the number of even-length cycles is odd. Including fixed points, another form is $\operatorname{sgn}(p)=(-1)^{n-c}$, where $c$ is the total number of cycles.
>
> For Lang's orbit argument, let $\tau=(ij)$. If $i,j$ lie in the same orbit of $\sigma$, then $\sigma\tau$ splits that cycle into two, increasing the orbit count by one. If they lie in different orbits, $\sigma\tau$ joins those cycles, decreasing the count by one. In either case the exponent $m$ changes by an odd integer, so
>
> $$
> e(\sigma\tau)=-e(\sigma).
> $$
>
> Since $e(1)=1$, a decomposition $\sigma=\tau_1\cdots\tau_k$ gives $e(\sigma)=(-1)^k$, which is exactly the usual sign.

## Related Concepts

- [[01 - Group Theory/Concepts/Symmetric Groups|Symmetric Groups]]

## Notes

- **Source status:** The problem statement is transcribed from [S1, Ch. 2, §10, Ex. 10.1, printed p. 74, PDF p. 86]. The solution is an independent derivation for this vault, not a solution printed in Artin.
- **Additional source:** [S2, Ch. I, Ex. 33, printed p. 78, PDF p. 93]; the orbit-splitting and orbit-merging argument was visually checked and added.
