---
title: "Exercise LA79: A Basis of the Symmetric Matrices"
topic: linear-algebra
difficulty: beginner
status: not-started
tags:
  - exercise
  - linear-algebra
  - bases
  - symmetric-matrices
  - dimension
source: "Michael Artin, Algebra, 2nd ed., Ch. 3, Section 3, Ex. 3.1, printed p. 99, PDF p. 111"
created: 2026-08-23
---

# Exercise LA79: A Basis of the Symmetric Matrices

## Problem Statement

> [!question] Exercise 3.1
> Find a basis for the space of $n\times n$ symmetric matrices $(A^t=A)$.

## Hints

> [!hint]- Hint 1
> Use diagonal matrix units and symmetric pairs of off-diagonal matrix units.

## Solution

> [!success]- Solution
> Let $E_{ij}$ be the matrix unit. A basis is
> 
> $$
> \{E_{ii}:1\le i\le n\}
> \cup
> \{E_{ij}+E_{ji}:1\le i<j\le n\}.
> $$
> 
> Every symmetric matrix has a unique expansion in these matrices: its diagonal entries are the coefficients of $E_{ii}$, and its $(i,j)$ entries for $i<j$ are the coefficients of $E_{ij}+E_{ji}$. Hence the dimension is
> 
> $$
> n+\binom n2=\frac{n(n+1)}2.
> $$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Basis and Dimension|Basis and Dimension]]
- [[04 - Linear Algebra and Modules/Concepts/Subspaces|Subspaces]]

## Notes

- **Source status:** The problem statement is transcribed from [S1, Ch. 3, §3, Ex. 3.1, printed p. 99, PDF p. 111]. The solution is an independent derivation for this vault, not a solution printed in Artin.
