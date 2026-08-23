---
title: "Exercise LA41: Invertibility of Factors of an Invertible Product"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - matrices
  - inverses
source: "Michael Artin, Algebra, 2nd ed., Ch. 1, Section 2, Ex. 2.8, printed p. 33, PDF p. 45"
created: 2026-08-23
---

# Exercise LA41: Invertibility of Factors of an Invertible Product

## Problem Statement

> [!question] Exercise 2.8
> Prove that if $AB$ is an invertible product of square matrices, then both $A$ and $B$ are invertible.

## Hints

> [!hint]- Hint 1
> Let $C=(AB)^{-1}$ and exhibit one-sided inverses.

## Solution

> [!success]- Solution
> Let $C=(AB)^{-1}$. Then
> 
> $$
> A(BC)=(AB)C=I,
> $$
> 
> so $A$ has a right inverse, while
> 
> $$
> (CA)B=C(AB)=I,
> $$
> 
> so $B$ has a left inverse. A square matrix with either a left or a right inverse is invertible. Thus both factors are invertible; in fact
> 
> $$
> A^{-1}=BC,\qquad B^{-1}=CA.
> $$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]
- [[04 - Linear Algebra and Modules/Concepts/Linear Transformations|Linear Transformations]]

## Notes

- **Source status:** The problem statement is transcribed from [S1, Ch. 1, §2, Ex. 2.8, printed p. 33, PDF p. 45]. The solution is an independent derivation for this vault, not a solution printed in Artin.
