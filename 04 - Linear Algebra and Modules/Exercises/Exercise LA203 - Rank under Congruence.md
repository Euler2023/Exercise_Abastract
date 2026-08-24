---
title: "Exercise LA203: Rank under Congruence"
topic: linear-algebra
difficulty: beginner
status: not-started
tags:
  - exercise
  - linear-algebra
  - matrix-congruence
  - rank
source: "Michael Artin, Algebra, 2nd ed., Ch. 8, Section 2, Ex. 2.2, printed p. 254, PDF p. 266"
created: 2026-08-24
---

# Exercise LA203: Rank under Congruence

## Problem Statement

> [!question] Exercise 2.2
> Let $A$ and $A'$ be symmetric matrices related by $A'=P^{\mathsf T}AP$, where $P$ is invertible. Is it true that the ranks of $A$ and of $A'$ are equal?

## Hints

> [!hint]- Hint 1
> Recall how multiplication by an invertible matrix affects rank.

> [!hint]- Hint 2
> Both $P$ and $P^{\mathsf T}$ are invertible.

## Solution

> [!success]- Solution
> Yes. Left or right multiplication by an invertible matrix preserves rank. Since $P$ is invertible, so is $P^{\mathsf T}$, and therefore
>
> $$
> \operatorname{rank}(A')
> =\operatorname{rank}(P^{\mathsf T}AP)
> =\operatorname{rank}(AP)
> =\operatorname{rank}(A).
> $$
>
> Equivalently, $A=P^{-\mathsf T}A'P^{-1}$ gives the reverse inequality directly. Thus congruent matrices have equal rank.
>
> $\square$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Bilinear and Hermitian Forms|Bilinear and Hermitian Forms]]
- [[04 - Linear Algebra and Modules/Concepts/Rank and Nullity|Rank and Nullity]]
- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]

## Notes

- Symmetry is part of the form-theoretic setting but is not needed for rank invariance; the conclusion holds for every matrix $A$ of compatible size.
- Congruence $A\mapsto P^{\mathsf T}AP$ should not be confused with similarity $A\mapsto P^{-1}AP$.
- **Source status:** The problem statement was visually verified at [S1, Ch. 8, §2, Ex. 2.2, printed p. 254, PDF p. 266]. The solution is an independent derivation.

