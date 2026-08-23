---
title: "Exercise LA28: Multiplication by a Diagonal Matrix"
topic: linear-algebra
difficulty: beginner
status: not-started
tags:
  - exercise
  - linear-algebra
  - matrices
  - diagonal-matrices
source: "Michael Artin, Algebra, 2nd ed., Ch. 1, Section 1, Ex. 1.10, printed p. 32, PDF p. 44"
created: 2026-08-23
---

# Exercise LA28: Multiplication by a Diagonal Matrix

## Problem Statement

> [!question] Exercise 1.10
> Let $D=\operatorname{diag}(d_1,\ldots,d_n)$ and $A=(a_{ij})$. Compute $DA$ and $AD$.

## Hints

> [!hint]- Hint 1
> Left multiplication acts on rows; right multiplication acts on columns.

## Solution

> [!success]- Solution
> Since $D_{ik}=d_i\delta_{ik}$,
> 
> $$
> (DA)_{ij}=d_i a_{ij}.
> $$
> 
> Thus row $i$ of $A$ is multiplied by $d_i$. Similarly,
> 
> $$
> (AD)_{ij}=a_{ij}d_j,
> $$
> 
> so column $j$ is multiplied by $d_j$.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]
- [[04 - Linear Algebra and Modules/Concepts/Linear Transformations|Linear Transformations]]

## Notes

- **Source status:** The problem statement is transcribed from [S1, Ch. 1, §1, Ex. 1.10, printed p. 32, PDF p. 44]. The solution is an independent derivation for this vault, not a solution printed in Artin.
