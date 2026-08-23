---
title: "Exercise LA179: Exponential of a Sum of Commuting Matrices"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - matrix-exponential
  - commuting-matrices
  - power-series
source: "Michael Artin, Algebra, 2nd ed., Ch. 5, §4, Ex. 4.4, printed p. 152, PDF p. 164"
created: 2026-08-24
---

# Exercise LA179: Exponential of a Sum of Commuting Matrices

## Problem Statement

> [!question] Exercise 4.4
> Let $A$ and $B$ be commuting matrices. Expand $e^{A+B}$ and $e^Ae^B$ into double sums whose terms are multiples of $A^iB^j$, and prove that the two sums are the same.

## Hints

> [!hint]- Hint 1
> Commutativity permits the ordinary binomial theorem for $(A+B)^k$.

## Solution

> [!success]- Solution
> Since $AB=BA$,
>
> $$
> (A+B)^k=\sum_{i=0}^k\binom{k}{i}A^iB^{k-i}.
> $$
>
> Therefore, writing $j=k-i$,
>
> $$
> e^{A+B}=\sum_{k=0}^\infty\sum_{i=0}^k
> \frac{A^iB^{k-i}}{i!(k-i)!}
> =\sum_{i,j\ge0}\frac{A^iB^j}{i!j!}.
> $$
>
> On the other hand,
>
> $$
> e^Ae^B=left(\sum_{i\ge0}\frac{A^i}{i!}\right)
> \left(\sum_{j\ge0}\frac{B^j}{j!}\right)
> =\sum_{i,j\ge0}\frac{A^iB^j}{i!j!}.
> $$
>
> The rearrangement is justified by absolute convergence in any matrix norm. Thus $e^{A+B}=e^Ae^B$.

## Related Concepts

- [[06 - Representation Theory/Concepts/Exponential Map|Exponential Map]]
- [[04 - Linear Algebra and Modules/Exercises/Exercise LA171 - Simultaneous Diagonalization of Commuting Matrices|Exercise LA171]]

## Notes

- **Hypothesis boundary:** The identity can fail when $A$ and $B$ do not commute.
- **Source status:** [S1, Ch. 5, §4, Ex. 4.4, printed p. 152, PDF p. 164]; independent proof.

