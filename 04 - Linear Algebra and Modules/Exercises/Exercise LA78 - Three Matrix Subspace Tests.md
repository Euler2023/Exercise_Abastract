---
title: "Exercise LA78: Three Matrix Subspace Tests"
topic: linear-algebra
difficulty: beginner
status: not-started
tags:
  - exercise
  - linear-algebra
  - subspaces
  - matrix-spaces
  - symmetric-matrices
source: "Michael Artin, Algebra, 2nd ed., Ch. 3, Section 2, Ex. 2.2, printed p. 99, PDF p. 111"
created: 2026-08-23
---

# Exercise LA78: Three Matrix Subspace Tests

## Problem Statement

> [!question] Exercise 2.2
> Which subsets of $F^{n\times n}$ are subspaces?
> 
> **(a)** Symmetric matrices $A=A^t$.
> 
> **(b)** Invertible matrices.
> 
> **(c)** Upper-triangular matrices.

## Hints

> [!hint]- Hint 1
> Test the zero matrix and closure under linear combinations.

## Solution

> [!success]- Solution
> The symmetric matrices form a subspace because
> 
> $$
> (aA+bB)^t=aA^t+bB^t=aA+bB.
> $$
> 
> The invertible matrices do not form a subspace: the zero matrix is not invertible, and $A+(-A)=0$ even when $A$ is invertible. Upper-triangular matrices form a subspace because every entry below the diagonal remains zero under arbitrary linear combinations. Thus **(a)** and **(c)** are subspaces, while **(b)** is not.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Subspaces|Subspaces]]
- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]

## Notes

- **Source status:** The problem statement is transcribed from [S1, Ch. 3, §2, Ex. 2.2, printed p. 99, PDF p. 111]. The solution is an independent derivation for this vault, not a solution printed in Artin.
