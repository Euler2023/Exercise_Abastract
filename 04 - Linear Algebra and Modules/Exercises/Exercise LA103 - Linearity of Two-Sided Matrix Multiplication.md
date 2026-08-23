---
title: "Exercise LA103: Linearity of Two-Sided Matrix Multiplication"
topic: linear-algebra
difficulty: beginner
status: not-started
tags:
  - exercise
  - linear-algebra
  - linear-transformations
  - matrix-multiplication
source: "Michael Artin, Algebra, 2nd ed., Ch. 4, §1, Ex. 1.1, printed p. 125, PDF p. 137"
created: 2026-08-23
---

# Exercise LA103: Linearity of Two-Sided Matrix Multiplication

## Problem Statement

> [!question] Exercise 1.1
> Let $A$ be an $\ell\times m$ matrix and let $B$ be an $n\times p$ matrix. Prove that the rule $M\mapsto AMB$ defines a linear transformation from the space $F^{m\times n}$ of $m\times n$ matrices to the space $F^{\ell\times p}$.

## Hints

> [!hint]- Hint 1
> Distribute matrix multiplication over a linear combination $cM+dN$.

## Solution

> [!success]- Solution
> The sizes make $AMB$ an $\ell\times p$ matrix. For $M,N\in F^{m\times n}$ and $c,d\in F$, associativity and distributivity give
>
> $$
> A(cM+dN)B=c(AMB)+d(ANB).
> $$
>
> Hence the rule preserves arbitrary linear combinations and is linear.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Linear Transformations|Linear Transformations]]
- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]

## Notes

- **Source status:** The statement is transcribed from [S1, Ch. 4, §1, Ex. 1.1, printed p. 125, PDF p. 137]. The solution is an independent derivation for this vault.

