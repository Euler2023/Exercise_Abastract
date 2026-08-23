---
title: "Exercise LA143: Diagonalizability of a Block Diagonal Matrix"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - block-diagonal-matrices
  - diagonalization
source: "Michael Artin, Algebra, 2nd ed., Ch. 4, §6, Ex. 6.10, printed p. 129, PDF p. 141"
created: 2026-08-23
---

# Exercise LA143: Diagonalizability of a Block Diagonal Matrix

## Problem Statement

> [!question] Exercise 6.10
> For $M=\begin{pmatrix}A&0\\0&D\end{pmatrix}$, prove that $M$ is diagonalizable if and only if $A$ and $D$ are diagonalizable.

## Hints

> [!hint]- Hint 1
> One direction combines eigenbases. For the other, use that the minimal polynomial of a restriction divides that of the whole operator.

## Solution

> [!success]- Solution
> If $A$ and $D$ have eigenbases, their union in the direct-sum space is an eigenbasis for $M$.
>
> Conversely, the two coordinate summands are $M$-invariant and the restrictions are $A$ and $D$. A diagonalizable operator has square-free minimal polynomial. The minimal polynomial of a restriction divides the whole minimal polynomial, hence is also square-free; therefore each restriction is diagonalizable.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Diagonalization|Diagonalization]]
- [[04 - Linear Algebra and Modules/Concepts/Direct Sum|Direct Sum]]

## Notes

- **External standard input:** The square-free minimal-polynomial criterion is used in the converse; equivalently one can restrict the spectral projection polynomials of $M$ to each coordinate summand.
- **Source status:** The block matrix was checked at [S1, Ch. 4, §6, Ex. 6.10, printed p. 129, PDF p. 141]. The solution is independent.

