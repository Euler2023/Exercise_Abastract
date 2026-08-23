---
title: "Exercise LA31: Inverse of Identity Plus a Nilpotent Matrix"
topic: linear-algebra
difficulty: beginner
status: not-started
tags:
  - exercise
  - linear-algebra
  - matrices
  - nilpotent-matrices
source: "Michael Artin, Algebra, 2nd ed., Ch. 1, Section 1, Ex. 1.13, printed p. 32, PDF p. 44"
created: 2026-08-23
---

# Exercise LA31: Inverse of Identity Plus a Nilpotent Matrix

## Problem Statement

> [!question] Exercise 1.13
> A square matrix $A$ is nilpotent if $A^k=0$ for some $k>0$. Prove that $I+A$ is invertible by finding its inverse.

## Hints

> [!hint]- Hint 1
> Use a finite geometric series with ratio $-A$.

## Solution

> [!success]- Solution
> If $A^k=0$, set
> 
> $$
> S=I-A+A^2-\cdots+(-1)^{k-1}A^{k-1}.
> $$
> 
> The finite geometric-series calculation gives
> 
> $$
> (I+A)S=S(I+A)=I+(-1)^{k-1}A^k=I.
> $$
> 
> Therefore $(I+A)^{-1}=S$.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]
- [[04 - Linear Algebra and Modules/Concepts/Linear Transformations|Linear Transformations]]

## Notes

- **Source status:** The problem statement is transcribed from [S1, Ch. 1, §1, Ex. 1.13, printed p. 32, PDF p. 44]. The solution is an independent derivation for this vault, not a solution printed in Artin.
