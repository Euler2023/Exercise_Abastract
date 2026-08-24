---
title: "Exercise LA268: Symmetry of Commutators and Anticommutators"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - commutators
  - matrix-symmetry
source: "Michael Artin, Algebra, 2nd ed., Ch. 8, Miscellaneous Ex. M.2, printed p. 258, PDF p. 270"
created: 2026-08-24
---

# Exercise LA268: Symmetry of Commutators and Anticommutators

## Problem Statement

> [!question] Miscellaneous Problem M.2
> Describe the symmetry of the matrices $AB+BA$ and $AB-BA$ in the following cases:
>
> **(a)** $A,B$ symmetric; **(b)** $A,B$ Hermitian; **(c)** $A,B$ skew-symmetric; **(d)** $A$ symmetric and $B$ skew-symmetric.

## Hints

> [!hint]- Hint 1
> Apply transpose or adjoint and remember that the order of a product reverses.

## Solution

> [!success]- Solution
> Direct calculation gives the following table.
>
> | Assumptions | $AB+BA$ | $AB-BA$ |
> |---|---|---|
> | **(a)** $A^{\mathsf T}=A$, $B^{\mathsf T}=B$ | symmetric | skew-symmetric |
> | **(b)** $A^*=A$, $B^*=B$ | Hermitian | skew-Hermitian |
> | **(c)** $A^{\mathsf T}=-A$, $B^{\mathsf T}=-B$ | symmetric | skew-symmetric |
> | **(d)** $A^{\mathsf T}=A$, $B^{\mathsf T}=-B$ | skew-symmetric | symmetric |
>
> For example, in case **(d)**,
>
> $$
> (AB+BA)^{\mathsf T}=-BA-AB=-(AB+BA),
> $$
>
> while
>
> $$
> (AB-BA)^{\mathsf T}=-BA+AB=AB-BA.
> $$
>
> The other rows follow identically.
>
> $\square$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Bilinear and Hermitian Forms|Bilinear and Hermitian Forms]]
- [[04 - Linear Algebra and Modules/Concepts/Skew-Symmetric Bilinear Forms|Skew-Symmetric Bilinear Forms]]

## Notes

- “Skew-Hermitian” means $C^*=-C$; it is the complex analogue of a real skew-symmetric matrix.
- **Source status:** All four cases were visually verified at [S1, Ch. 8, M.2, printed p. 258, PDF p. 270]. The table is independently derived.

