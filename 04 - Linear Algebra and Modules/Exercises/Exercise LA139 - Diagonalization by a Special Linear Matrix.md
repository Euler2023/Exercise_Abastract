---
title: "Exercise LA139: Diagonalization by a Special Linear Matrix"
topic: linear-algebra
difficulty: beginner
status: not-started
tags:
  - exercise
  - linear-algebra
  - diagonalization
  - special-linear-group
source: "Michael Artin, Algebra, 2nd ed., Ch. 4, §6, Ex. 6.6, printed p. 129, PDF p. 141"
created: 2026-08-23
---

# Exercise LA139: Diagonalization by a Special Linear Matrix

## Problem Statement

> [!question] Exercise 6.6
> If $A$ is diagonalizable, can the diagonalization be done with a matrix $P$ in the special linear group?

## Hints

> [!hint]- Hint 1
> Rescale one eigenvector column of a diagonalizing matrix.

## Solution

> [!success]- Solution
> Yes. If $P^{-1}AP=D$ and $\delta=\det P\ne0$, replace $P$ by $P'=PC$, where $C=\operatorname{diag}(\delta^{-1},1,\ldots,1)$. Then $\det P'=1$, while $C$ commutes with the diagonal matrix $D$, so
>
> $$
> P'^{-1}AP'=C^{-1}DC=D.
> $$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Diagonalization|Diagonalization]]
- [[04 - Linear Algebra and Modules/Concepts/Classical Linear Groups|Classical Linear Groups]]

## Notes

- **Source status:** [S1, Ch. 4, §6, Ex. 6.6, printed p. 129, PDF p. 141]; independent solution.

