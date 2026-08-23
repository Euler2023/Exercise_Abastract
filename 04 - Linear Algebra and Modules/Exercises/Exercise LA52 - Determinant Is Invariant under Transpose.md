---
title: "Exercise LA52: Determinant Is Invariant under Transpose"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - determinants
  - transpose
  - row-reduction
source: "Michael Artin, Algebra, 2nd ed., Ch. 1, Section 4, Ex. 4.5, printed p. 34, PDF p. 46"
created: 2026-08-23
---

# Exercise LA52: Determinant Is Invariant under Transpose

## Problem Statement

> [!question] Exercise 4.5
> Use row reduction to prove that $\det(A^{\mathsf T})=\det A$.

## Hints

> [!hint]- Hint 1
> First prove the assertion for elementary matrices, then factor an invertible matrix into elementary matrices.

## Solution

> [!success]- Solution
> For every elementary matrix $E$, direct inspection of the three types shows
> 
> $$
> \det(E^{\mathsf T})=\det E.
> $$
> 
> If $A$ is invertible, row reduction factors it as $A=E_1\cdots E_k$. Hence
> 
> $$
> A^{\mathsf T}=E_k^{\mathsf T}\cdots E_1^{\mathsf T}
> $$
> 
> and multiplicativity gives
> 
> $$
> \det(A^{\mathsf T})=\prod_{j=1}^k\det(E_j^{\mathsf T})
> =\prod_{j=1}^k\det(E_j)=\det A.
> $$
> 
> If $A$ is singular, row reduction produces a zero row. Equivalently $A^{\mathsf T}$ is singular as well because a nontrivial relation among the rows of $A$ becomes a nontrivial kernel vector for $A^{\mathsf T}$. Thus both determinants are zero.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Determinants|Determinants]]
- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]

## Notes

- **Source status:** The problem statement is transcribed from [S1, Ch. 1, §4, Ex. 4.5, printed p. 34, PDF p. 46]. The solution is an independent derivation for this vault, not a solution printed in Artin.
