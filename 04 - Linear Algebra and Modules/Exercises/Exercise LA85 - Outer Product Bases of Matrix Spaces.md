---
title: "Exercise LA85: Outer-Product Bases of Matrix Spaces"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - matrix-spaces
  - bases
  - outer-products
source: "Michael Artin, Algebra, 2nd ed., Ch. 3, Section 3, Ex. 3.7, printed p. 100, PDF p. 112"
created: 2026-08-23
---

# Exercise LA85: Outer-Product Bases of Matrix Spaces

## Problem Statement

> [!question] Exercise 3.7
> Let $(X_1,\ldots,X_m)$ and $(Y_1,\ldots,Y_n)$ be bases of $\mathbb R^m$ and $\mathbb R^n$. Do the $mn$ matrices $X_iY_j^t$ form a basis of $\mathbb R^{m\times n}$?

## Hints

> [!hint]- Hint 1
> The standard outer products $e_ie_j^t$ are the matrix units.

> [!hint]- Hint 2
> Apply invertible changes of basis on the left and right.

## Solution

> [!success]- Solution
> Yes. Let $P$ and $Q$ be the invertible matrices whose columns are the $X_i$ and $Y_j$. Then
> 
> $$
> X_iY_j^t=P(e_ie_j^t)Q^t.
> $$
> 
> The map $T(A)=PAQ^t$ is an invertible linear transformation of $\mathbb R^{m\times n}$. Since the $mn$ matrix units $e_ie_j^t$ form a basis, their images $X_iY_j^t$ also form a basis.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Basis and Dimension|Basis and Dimension]]
- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]
- [[04 - Linear Algebra and Modules/Concepts/Linear Transformations|Linear Transformations]]

## Notes

- **Source status:** The problem statement is transcribed from [S1, Ch. 3, §3, Ex. 3.7, printed p. 100, PDF p. 112]. The solution is an independent derivation for this vault, not a solution printed in Artin.
