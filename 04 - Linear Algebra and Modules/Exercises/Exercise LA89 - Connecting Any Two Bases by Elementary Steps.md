---
title: "Exercise LA89: Connecting Any Two Bases by Elementary Steps"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - bases
  - elementary-operations
  - general-linear-group
source: "Michael Artin, Algebra, 2nd ed., Ch. 3, Section 4, Ex. 4.3, printed p. 100, PDF p. 112"
created: 2026-08-23
---

# Exercise LA89: Connecting Any Two Bases by Elementary Steps

## Problem Statement

> [!question] Exercise 4.3
> Let $\mathcal B=(v_1,\ldots,v_n)$ be a basis. Prove that any other basis can be obtained by finitely many steps of these types: add a scalar multiple of one basis vector to another, multiply a basis vector by a nonzero scalar, or interchange two basis vectors.

## Hints

> [!hint]- Hint 1
> Write the new basis vectors as columns relative to $\mathcal B$.

> [!hint]- Hint 2
> Reduce the resulting invertible matrix to the identity by elementary column operations.

## Solution

> [!success]- Solution
> Let $C$ be the invertible matrix whose columns are the coordinates of the new basis $\mathcal B'$ relative to $\mathcal B$. The three allowed changes of basis are exactly the three elementary column operations on $C$. Gaussian elimination reduces any invertible matrix to $I$ using finitely many such operations. Reversing that finite sequence transforms $I$ into $C$, and applying the corresponding operations to $\mathcal B$ transforms it into $\mathcal B'$.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Basis and Dimension|Basis and Dimension]]
- [[04 - Linear Algebra and Modules/Concepts/Classical Linear Groups|Classical Linear Groups]]
- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]

## Notes

- **Source status:** The problem statement is transcribed from [S1, Ch. 3, §4, Ex. 4.3, printed p. 100, PDF p. 112]. The solution is an independent derivation for this vault, not a solution printed in Artin.
