---
title: "Exercise LA84: Basis of a Weighted Coordinate Hyperplane"
topic: linear-algebra
difficulty: beginner
status: not-started
tags:
  - exercise
  - linear-algebra
  - nullspaces
  - bases
  - hyperplanes
source: "Michael Artin, Algebra, 2nd ed., Ch. 3, Section 3, Ex. 3.6, printed p. 100, PDF p. 112"
created: 2026-08-23
---

# Exercise LA84: Basis of a Weighted Coordinate Hyperplane

## Problem Statement

> [!question] Exercise 3.6
> Find a basis of the solution space in $\mathbb R^n$ of
> 
> $$
> x_1+2x_2+3x_3+\cdots+nx_n=0.
> $$

## Hints

> [!hint]- Hint 1
> Solve for $x_1$ in terms of $x_2,\ldots,x_n$.

## Solution

> [!success]- Solution
> Solving for $x_1$ gives $x_1=-\sum_{j=2}^n jx_j$. Hence a basis is
> 
> $$
> \{-je_1+e_j:2\le j\le n\}.
> $$
> 
> These $n-1$ vectors satisfy the equation, are independent because their last $n-1$ coordinates are the standard basis, and span every solution by the expression for $x_1$.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Rank and Nullity|Rank and Nullity]]
- [[04 - Linear Algebra and Modules/Concepts/Basis and Dimension|Basis and Dimension]]

## Notes

- **Source status:** The problem statement is transcribed from [S1, Ch. 3, §3, Ex. 3.6, printed p. 100, PDF p. 112]. The solution is an independent derivation for this vault, not a solution printed in Artin.
