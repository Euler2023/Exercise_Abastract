---
title: "Exercise LA44: Transpose Identities and Symmetric Matrices"
topic: linear-algebra
difficulty: beginner
status: not-started
tags:
  - exercise
  - linear-algebra
  - matrices
  - transpose
  - symmetric-matrices
source: "Michael Artin, Algebra, 2nd ed., Ch. 1, Section 3, Ex. 3.1, printed p. 33, PDF p. 45"
created: 2026-08-23
---

# Exercise LA44: Transpose Identities and Symmetric Matrices

## Problem Statement

> [!question] Exercise 3.1
> A matrix $B$ is symmetric if $B=B^{\mathsf T}$. Prove that $BB^{\mathsf T}$ and $B+B^{\mathsf T}$ are symmetric, and that if $A$ is invertible then $(A^{-1})^{\mathsf T}=(A^{\mathsf T})^{-1}$.

## Hints

> [!hint]- Hint 1
> Use $(XY)^{\mathsf T}=Y^{\mathsf T}X^{\mathsf T}$.

## Solution

> [!success]- Solution
> We have
> 
> $$
> (BB^{\mathsf T})^{\mathsf T}=BB^{\mathsf T},\qquad
> (B+B^{\mathsf T})^{\mathsf T}=B^{\mathsf T}+B=B+B^{\mathsf T}.
> $$
> 
> Thus both matrices are symmetric. Transposing $AA^{-1}=I$ and $A^{-1}A=I$ gives
> 
> $$
> (A^{-1})^{\mathsf T}A^{\mathsf T}=I,
> \qquad
> A^{\mathsf T}(A^{-1})^{\mathsf T}=I.
> $$
> 
> Hence $(A^{-1})^{\mathsf T}$ is the inverse of $A^{\mathsf T}$.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]
- [[04 - Linear Algebra and Modules/Concepts/Linear Transformations|Linear Transformations]]

## Notes

- **Source status:** The problem statement is transcribed from [S1, Ch. 1, §3, Ex. 3.1, printed p. 33, PDF p. 45]. The solution is an independent derivation for this vault, not a solution printed in Artin.
