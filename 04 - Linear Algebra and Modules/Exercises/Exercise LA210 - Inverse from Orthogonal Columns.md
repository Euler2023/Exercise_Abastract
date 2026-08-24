---
title: "Exercise LA210: Inverse from Orthogonal Columns"
topic: linear-algebra
difficulty: beginner
status: not-started
tags:
  - exercise
  - linear-algebra
  - orthogonality
  - matrices
source: "Michael Artin, Algebra, 2nd ed., Ch. 8, Section 4, Ex. 4.1, printed p. 254, PDF p. 266"
created: 2026-08-24
---

# Exercise LA210: Inverse from Orthogonal Columns

## Problem Statement

> [!question] Exercise 4.1
> What is the inverse of a matrix whose columns are orthogonal?

## Hints

> [!hint]- Hint 1
> If the columns are $p_1,\ldots,p_n$, compute $P^{\mathsf T}P$.

> [!hint]- Hint 2
> The diagonal entries are the squared column lengths.

## Solution

> [!success]- Solution
> Let $P=(p_1\ \cdots\ p_n)$ be square, with nonzero mutually orthogonal columns. Then
>
> $$
> P^{\mathsf T}P=D,
> \qquad
> D=\operatorname{diag}(p_1^{\mathsf T}p_1,\ldots,p_n^{\mathsf T}p_n).
> $$
>
> The diagonal matrix $D$ is invertible. Multiplying the displayed identity on the left by $D^{-1}$ gives
>
> $$
> \boxed{P^{-1}=D^{-1}P^{\mathsf T}}.
> $$
>
> If the columns are orthonormal, then $D=I$ and the familiar formula reduces to $P^{-1}=P^{\mathsf T}$.
>
> $\square$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Inner Product Spaces|Inner Product Spaces]]
- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]
- [[04 - Linear Algebra and Modules/Concepts/Determinants|Determinants]]

## Notes

- A zero column would make the matrix singular, so the existence of the inverse requires all orthogonal columns to be nonzero.
- **Source status:** Visually verified at [S1, Ch. 8, §4, Ex. 4.1, printed p. 254, PDF p. 266]. The solution is independent.

