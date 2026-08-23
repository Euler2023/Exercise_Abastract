---
title: "Exercise LA51: Determinant of the Negative of a Matrix"
topic: linear-algebra
difficulty: beginner
status: not-started
tags:
  - exercise
  - linear-algebra
  - determinants
source: "Michael Artin, Algebra, 2nd ed., Ch. 1, Section 4, Ex. 4.4, printed p. 34, PDF p. 46"
created: 2026-08-23
---

# Exercise LA51: Determinant of the Negative of a Matrix

## Problem Statement

> [!question] Exercise 4.4
> Let $A$ be an $n\times n$ matrix. Determine $\det(-A)$ in terms of $\det A$.

## Hints

> [!hint]- Hint 1
> Multiplying every row by $-1$ contributes one factor of $-1$ per row.

## Solution

> [!success]- Solution
> The matrix $-A$ is obtained by multiplying each of the $n$ rows of $A$ by $-1$. Multilinearity of the determinant gives
> 
> $$
> \det(-A)=(-1)^n\det A.
> $$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Determinants|Determinants]]

## Notes

- **Source status:** The problem statement is transcribed from [S1, Ch. 1, §4, Ex. 4.4, printed p. 34, PDF p. 46]. The solution is an independent derivation for this vault, not a solution printed in Artin.
