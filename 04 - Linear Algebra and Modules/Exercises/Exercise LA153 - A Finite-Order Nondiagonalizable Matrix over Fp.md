---
title: "Exercise LA153: A Finite-Order Nondiagonalizable Matrix over Fp"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - finite-fields
  - unipotent-matrices
  - diagonalization
source: "Michael Artin, Algebra, 2nd ed., Ch. 4, §7, Ex. 7.9, printed p. 129, PDF p. 141"
created: 2026-08-23
---

# Exercise LA153: A Finite-Order Nondiagonalizable Matrix over Fp

## Problem Statement

> [!question] Exercise 7.9
> Find a $2\times2$ matrix over $\mathbb F_p$ that has a power equal to the identity and an eigenvalue in $\mathbb F_p$, but is not diagonalizable.

## Hints

> [!hint]- Hint 1
> Use a nontrivial unipotent Jordan block and characteristic $p$.

## Solution

> [!success]- Solution
> Take
>
> $$
> A=\begin{pmatrix}1&1\\0&1\end{pmatrix}=I+N,
> \qquad N^2=0.
> $$
>
> In characteristic $p$, $A^p=I+pN=I$. Its only eigenvalue is $1\in\mathbb F_p$, but its eigenspace is one-dimensional while the space has dimension two, so it is not diagonalizable.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Diagonalization|Diagonalization]]
- [[03 - Field Theory/Concepts/Finite Fields|Finite Fields]]

## Notes

- **Source status:** The field and size were visually checked at [S1, Ch. 4, §7, Ex. 7.9, printed p. 129, PDF p. 141]. The example is independently supplied.

