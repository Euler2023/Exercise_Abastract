---
title: "Exercise LA33: Products with Matrix Units"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - matrices
  - matrix-units
source: "Michael Artin, Algebra, 2nd ed., Ch. 1, Section 1, Ex. 1.15, printed p. 32, PDF p. 44"
created: 2026-08-23
---

# Exercise LA33: Products with Matrix Units

## Problem Statement

> [!question] Exercise 1.15
> For an arbitrary matrix $A=(a_{ij})$, determine $e_{ij}A$, $Ae_{ij}$, $e_j^{\mathsf T}Ae_k$, $e_{ii}Ae_{jj}$, and $e_{ij}Ae_{k\ell}$.

## Hints

> [!hint]- Hint 1
> Use $e_{ij}e_{k\ell}=\delta_{jk}e_{i\ell}$.

## Solution

> [!success]- Solution
> Left multiplication by $e_{ij}$ places row $j$ of $A$ in row $i$ and makes every other row zero. Right multiplication by $e_{ij}$ places column $i$ of $A$ in column $j$ and makes every other column zero. Also,
> 
> $$
> e_j^{\mathsf T}Ae_k=a_{jk},
> $$
> 
> and the matrix-unit rule gives
> 
> $$
> e_{ii}Ae_{jj}=a_{ij}e_{ij},\qquad
> e_{ij}Ae_{k\ell}=a_{jk}e_{i\ell}.
> $$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]
- [[04 - Linear Algebra and Modules/Concepts/Linear Transformations|Linear Transformations]]
- [[04 - Linear Algebra and Modules/Concepts/Basis and Dimension|Basis and Dimension]]

## Notes

- **Source status:** The problem statement is transcribed from [S1, Ch. 1, §1, Ex. 1.15, printed p. 32, PDF p. 44]. The solution is an independent derivation for this vault, not a solution printed in Artin.
