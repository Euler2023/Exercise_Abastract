---
title: "Exercise LA192: Sublattices of Index Three"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - lattices
  - quotient-modules
source: "Michael Artin, Algebra, 2nd ed., Ch. 6, Section 5, Ex. 5.3, printed p. 188, PDF p. 200"
created: 2026-08-24
---

# Exercise LA192: Sublattices of Index Three

## Problem Statement

> [!question] Exercise 5.3
> How many sublattices of index $3$ are contained in a lattice $L$ in $\mathbb R^2$?

## Hints

> [!hint]- Hint 1
> Reduce $L$ modulo $3L$. An index-$3$ sublattice contains $3L$.

> [!hint]- Hint 2
> Count the one-dimensional subspaces of the two-dimensional vector space $L/3L\cong\mathbb F_3^2$.

## Solution

> [!success]- Solution
> Let $H\le L$ have index $3$. The quotient $L/H$ has order $3$, so it is annihilated by $3$; hence $3L\subseteq H$. By the correspondence theorem, such $H$ are in bijection with subspaces $H/3L$ of
>
> $$
> L/3L\cong\mathbb F_3^2.
> $$
>
> Since
>
> $$
> [L:H]=[L/3L:H/3L]=3,
> $$
>
> the subspace $H/3L$ has order $3$, so it is a line in $\mathbb F_3^2$. There are $3^2-1=8$ nonzero vectors, and every line contains $3-1=2$ nonzero vectors. Therefore the number of lines, and hence the number of index-$3$ sublattices, is
>
> $$
> \frac{3^2-1}{3-1}=4.
> $$
>
> Thus $L$ contains exactly four sublattices of index $3$. $\square$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Lattices in Euclidean Space|Lattices in Euclidean Space]]
- [[04 - Linear Algebra and Modules/Concepts/Quotient Modules|Quotient Modules]]
- [[04 - Linear Algebra and Modules/Concepts/Vector Spaces|Vector Spaces]]

## Notes

- More generally, a rank-two lattice has $p+1$ sublattices of index $p$ for every prime $p$.
- **Source status:** The problem is from [S1, Ch. 6, §5, Ex. 5.3, printed p. 188, PDF p. 200]. The quotient-space count is an independent solution.

