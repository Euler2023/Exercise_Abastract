---
title: "Exercise LA86: A Basis Criterion from the Coordinate Matrix"
topic: linear-algebra
difficulty: beginner
status: not-started
tags:
  - exercise
  - linear-algebra
  - bases
  - coordinate-matrices
  - invertibility
source: "Michael Artin, Algebra, 2nd ed., Ch. 3, Section 3, Ex. 3.8, printed p. 100, PDF p. 112"
created: 2026-08-23
---

# Exercise LA86: A Basis Criterion from the Coordinate Matrix

## Problem Statement

> [!question] Exercise 3.8
> Prove that $(v_1,\ldots,v_n)$ in $F^n$ is a basis if and only if the matrix formed by their coordinate columns is invertible.

## Hints

> [!hint]- Hint 1
> The assembled matrix represents the map sending the standard basis to the $v_i$.

## Solution

> [!success]- Solution
> Let $M=(v_1\ \cdots\ v_n)$. The linear map $T:F^n\to F^n$ defined by $T(c)=Mc$ sends $e_i$ to $v_i$. The vectors $v_i$ form a basis exactly when every vector has a unique expression $\sum_i c_iv_i$, which is exactly the assertion that $T$ is bijective. A square matrix represents a bijective map exactly when it is invertible.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Basis and Dimension|Basis and Dimension]]
- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]
- [[04 - Linear Algebra and Modules/Concepts/Determinants|Determinants]]

## Notes

- **Source status:** The problem statement is transcribed from [S1, Ch. 3, §3, Ex. 3.8, printed p. 100, PDF p. 112]. The solution is an independent derivation for this vault, not a solution printed in Artin.
