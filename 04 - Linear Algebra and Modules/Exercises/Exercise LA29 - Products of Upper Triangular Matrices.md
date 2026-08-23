---
title: "Exercise LA29: Products of Upper Triangular Matrices"
topic: linear-algebra
difficulty: beginner
status: not-started
tags:
  - exercise
  - linear-algebra
  - matrices
  - triangular-matrices
source: "Michael Artin, Algebra, 2nd ed., Ch. 1, Section 1, Ex. 1.11, printed p. 32, PDF p. 44"
created: 2026-08-23
---

# Exercise LA29: Products of Upper Triangular Matrices

## Problem Statement

> [!question] Exercise 1.11
> Prove that the product of upper triangular matrices is upper triangular.

## Hints

> [!hint]- Hint 1
> For an entry below the diagonal, split the summation index at the row and column indices.

## Solution

> [!success]- Solution
> Let $A,B$ be upper triangular and take $i>j$. Then
> 
> $$
> (AB)_{ij}=\sum_k a_{ik}b_{kj}.
> $$
> 
> For each $k$, either $k<i$, in which case $a_{ik}=0$, or $k\ge i>j$, in which case $b_{kj}=0$. Every summand vanishes, so $(AB)_{ij}=0$. Hence $AB$ is upper triangular.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]
- [[04 - Linear Algebra and Modules/Concepts/Linear Transformations|Linear Transformations]]

## Notes

- **Source status:** The problem statement is transcribed from [S1, Ch. 1, §1, Ex. 1.11, printed p. 32, PDF p. 44]. The solution is an independent derivation for this vault, not a solution printed in Artin.
