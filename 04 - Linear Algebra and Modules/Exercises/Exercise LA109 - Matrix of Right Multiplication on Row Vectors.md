---
title: "Exercise LA109: Matrix of Right Multiplication on Row Vectors"
topic: linear-algebra
difficulty: beginner
status: not-started
tags:
  - exercise
  - linear-algebra
  - row-vectors
  - transpose
source: "Michael Artin, Algebra, 2nd ed., Ch. 4, §2, Ex. 2.2, printed p. 126, PDF p. 138"
created: 2026-08-23
---

# Exercise LA109: Matrix of Right Multiplication on Row Vectors

## Problem Statement

> [!question] Exercise 2.2
> Let $A$ be an $n\times n$ matrix, and let $V$ be the space of $n$-dimensional row vectors. What is the matrix of “right multiplication by $A$” with respect to the standard basis of $V$?

## Hints

> [!hint]- Hint 1
> The image of the $i$th standard row vector is the $i$th row of $A$.

## Solution

> [!success]- Solution
> The $i$th column of the representing matrix is the coordinate column of $e_i^tA$, namely the transpose of the $i$th row of $A$. These are precisely the columns of $A^t$. Therefore the required matrix is $A^t$.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]

## Notes

- **Convention:** Coordinate lists are written as columns even though the vectors being represented are rows.
- **Source status:** [S1, Ch. 4, §2, Ex. 2.2, printed p. 126, PDF p. 138]; independent solution.

