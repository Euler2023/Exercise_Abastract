---
title: "Exercise LA43: One Unique Right-Hand Side Implies All"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - linear-systems
  - invertibility
source: "Michael Artin, Algebra, 2nd ed., Ch. 1, Section 2, Ex. 2.10, printed p. 33, PDF p. 45"
created: 2026-08-23
---

# Exercise LA43: One Unique Right-Hand Side Implies All

## Problem Statement

> [!question] Exercise 2.10
> Let $A$ be square. Show that if $AX=B$ has a unique solution for one particular $B$, then it has a unique solution for every $B$.

## Hints

> [!hint]- Hint 1
> Use the given solution to show that $AX=0$ has only the zero solution.

## Solution

> [!success]- Solution
> Let $X_0$ be the unique solution for the given $B$. If $Y\in\ker A$, then
> 
> $$
> A(X_0+Y)=AX_0+AY=B.
> $$
> 
> Uniqueness forces $Y=0$, so $\ker A=0$. For a square matrix this is equivalent to invertibility. Therefore, for every column vector $B'$, the unique solution is
> 
> $$
> X=A^{-1}B'.
> $$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]
- [[04 - Linear Algebra and Modules/Concepts/Linear Transformations|Linear Transformations]]
- [[04 - Linear Algebra and Modules/Concepts/Rank and Nullity|Rank and Nullity]]

## Notes

- **Source status:** The problem statement is transcribed from [S1, Ch. 1, §2, Ex. 2.10, printed p. 33, PDF p. 45]. The solution is an independent derivation for this vault, not a solution printed in Artin.
