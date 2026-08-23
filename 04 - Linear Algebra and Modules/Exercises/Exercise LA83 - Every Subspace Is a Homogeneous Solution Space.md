---
title: "Exercise LA83: Every Subspace Is a Homogeneous Solution Space"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - subspaces
  - homogeneous-systems
  - annihilators
source: "Michael Artin, Algebra, 2nd ed., Ch. 3, Section 3, Ex. 3.5, printed p. 99, PDF p. 111"
created: 2026-08-23
---

# Exercise LA83: Every Subspace Is a Homogeneous Solution Space

## Problem Statement

> [!question] Exercise 3.5
> Let $V=F^n$. Prove that every subspace $W\subseteq V$ is the solution space of some homogeneous system $AX=0$.

## Hints

> [!hint]- Hint 1
> Choose a basis of $W$ and extend it to a basis of $V$.

> [!hint]- Hint 2
> Use the coordinate functionals that detect the added basis vectors.

## Solution

> [!success]- Solution
> Choose a basis $w_1,\ldots,w_r$ of $W$ and extend it to a basis
> 
> $$
> w_1,\ldots,w_r,u_{r+1},\ldots,u_n
> $$
> 
> of $V$. For each $j>r$, let $\lambda_j:V\to F$ be the coordinate functional that extracts the $u_j$-coefficient in this basis. Then
> 
> $$
> W=\bigcap_{j=r+1}^n\ker\lambda_j.
> $$
> 
> Write each $\lambda_j$ as a row vector in the standard coordinates, and assemble those rows into a matrix $A$. The displayed equality is exactly $W=\{X:AX=0\}$. If $W=V$, take the system with no equations, or the zero matrix.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Subspaces|Subspaces]]
- [[04 - Linear Algebra and Modules/Concepts/Basis and Dimension|Basis and Dimension]]
- [[04 - Linear Algebra and Modules/Concepts/Linear Transformations|Linear Transformations]]

## Notes

- **Source status:** The problem statement is transcribed from [S1, Ch. 3, §3, Ex. 3.5, printed p. 99, PDF p. 111]. The solution is an independent derivation for this vault, not a solution printed in Artin.
