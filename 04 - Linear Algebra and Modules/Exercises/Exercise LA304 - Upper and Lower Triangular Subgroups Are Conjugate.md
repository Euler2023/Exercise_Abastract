---
title: "Exercise LA304: Upper and Lower Triangular Subgroups Are Conjugate"
topic: linear-algebra
difficulty: beginner
status: not-started
tags:
  - exercise
  - linear-algebra
source: "Michael Artin, Algebra, 2nd ed., Ch. 7, Section 6, Ex. 6.1, printed p. 223, PDF p. 235"
created: 2026-08-27
---

# Exercise LA304: Upper and Lower Triangular Subgroups Are Conjugate

## Problem Statement

> [!question] Exercise 6.1
> Prove that the subgroup $B$ of invertible upper triangular matrices in $GL_n(\mathbb R)$ is conjugate to the subgroup $L$ of invertible lower triangular matrices.

## Hints

> [!hint]- Hint 1
> Conjugate by the matrix reversing the standard basis.

## Solution

> [!success]- Solution
> Let $J e_i=e_{n+1-i}$. Then $J^{-1}=J$, and reversing both row and column indices sends entries above the diagonal to entries below it. Thus $JAJ^{-1}$ is lower triangular exactly when $A$ is upper triangular. Therefore $JBJ^{-1}=L$. $\square$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Classical Linear Groups|Classical Linear Groups]]
- [[04 - Linear Algebra and Modules/Concepts/Matrix Centralizers and Similarity|Matrix Centralizers and Similarity]]

## Notes

- **Source status:** [S1, Ch. 7, §6, Ex. 6.1, printed p. 223, PDF p. 235]; source PDF checked; solution independently derived.

