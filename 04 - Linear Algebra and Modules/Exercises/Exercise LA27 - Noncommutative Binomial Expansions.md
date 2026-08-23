---
title: "Exercise LA27: Noncommutative Binomial Expansions"
topic: linear-algebra
difficulty: beginner
status: not-started
tags:
  - exercise
  - linear-algebra
  - matrices
  - noncommutativity
source: "Michael Artin, Algebra, 2nd ed., Ch. 1, Section 1, Ex. 1.9, printed p. 32, PDF p. 44"
created: 2026-08-23
---

# Exercise LA27: Noncommutative Binomial Expansions

## Problem Statement

> [!question] Exercise 1.9
> Let $A,B$ be square matrices.
> 
> **(a)** When does $(A+B)(A-B)=A^2-B^2$?
> 
> **(b)** Expand $(A+B)^3$.

## Hints

> [!hint]- Hint 1
> Keep the order of every factor.

## Solution

> [!success]- Solution
> Expanding the first product gives
> 
> $$
> (A+B)(A-B)=A^2-AB+BA-B^2.
> $$
> 
> It equals $A^2-B^2$ exactly when $AB=BA$.
> 
> For the cube, no terms may be combined unless additional commutativity is known:
> 
> $$
> (A+B)^3=A^3+A^2B+ABA+AB^2+BA^2+BAB+B^2A+B^3.
> $$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]
- [[04 - Linear Algebra and Modules/Concepts/Linear Transformations|Linear Transformations]]

## Notes

- **Source status:** The problem statement is transcribed from [S1, Ch. 1, §1, Ex. 1.9, printed p. 32, PDF p. 44]. The solution is an independent derivation for this vault, not a solution printed in Artin.
