---
title: "Exercise LA125: Recovering Missing Matrix Entries from a Characteristic Polynomial"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - characteristic-polynomials
  - matrix-entries
source: "Michael Artin, Algebra, 2nd ed., Ch. 4, §5, Ex. 5.2, printed p. 127, PDF p. 139"
created: 2026-08-23
---

# Exercise LA125: Recovering Missing Matrix Entries from a Characteristic Polynomial

## Problem Statement

> [!question] Exercise 5.2
> The characteristic polynomial of
>
> $$
> A=\begin{pmatrix}0&1&2\\1&1&0\\1&x&y\end{pmatrix}
> $$
>
> is $t^3-4t-1$. Determine $x,y$.

## Hints

> [!hint]- Hint 1
> Compare the trace and determinant with the corresponding coefficients.

## Solution

> [!success]- Solution
> The coefficient of $t^2$ is $-\operatorname{tr}A=-(1+y)$, so $y=-1$. Then $\det A=-y+2x-2=2x-1$. Since the constant term of $\det(tI-A)$ is $-\det A=-1$, one has $\det A=1$, hence $x=1$. Therefore the missing entries are
>
> $$
> x=1,\qquad y=-1.
> $$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Eigenvalues and Eigenvectors|Eigenvalues and Eigenvectors]]
- [[04 - Linear Algebra and Modules/Concepts/Determinants|Determinants]]

## Notes

- **Source status:** The matrix and polynomial were visually checked at [S1, Ch. 4, §5, Ex. 5.2, printed p. 127, PDF p. 139]. The solution is independent.

