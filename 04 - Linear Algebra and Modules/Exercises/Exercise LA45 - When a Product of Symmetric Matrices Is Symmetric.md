---
title: "Exercise LA45: When a Product of Symmetric Matrices Is Symmetric"
topic: linear-algebra
difficulty: beginner
status: completed
tags:
  - exercise
  - linear-algebra
  - matrices
  - symmetric-matrices
source: Michael Artin, Algebra, 2nd ed., Ch. 1, Section 3, Ex. 3.2, printed p. 33, PDF p. 45
created: 2026-08-23
---

# Exercise LA45: When a Product of Symmetric Matrices Is Symmetric

## Problem Statement

> [!question] Exercise 3.2
> Let $A,B$ be symmetric $n\times n$ matrices. Prove that $AB$ is symmetric if and only if $AB=BA$.

## Hints

> [!hint]- Hint 1
> Transpose $AB$.

## Solution

> [!success]- Solution
> Since $A^{\mathsf T}=A$ and $B^{\mathsf T}=B$,
> 
> $$
> (AB)^{\mathsf T}=B^{\mathsf T}A^{\mathsf T}=BA.
> $$
> 
> Therefore $AB$ is symmetric precisely when $(AB)^{\mathsf T}=AB$, which is precisely the condition $BA=AB$.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]
- [[04 - Linear Algebra and Modules/Concepts/Linear Transformations|Linear Transformations]]

## Notes

- **Source status:** The problem statement is transcribed from [S1, Ch. 1, §3, Ex. 3.2, printed p. 33, PDF p. 45]. The solution is an independent derivation for this vault, not a solution printed in Artin.
