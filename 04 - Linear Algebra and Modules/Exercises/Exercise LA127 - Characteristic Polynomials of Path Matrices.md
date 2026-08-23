---
title: "Exercise LA127: Characteristic Polynomials of Path Matrices"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - characteristic-polynomials
  - recurrence-relations
  - tridiagonal-matrices
source: "Michael Artin, Algebra, 2nd ed., Ch. 4, §5, Ex. 5.4, printed p. 128, PDF p. 140"
created: 2026-08-23
---

# Exercise LA127: Characteristic Polynomials of Path Matrices

## Problem Statement

> [!question] Exercise 5.4
> Find a recurrence for the characteristic polynomial of the $k\times k$ matrix having zeros on the diagonal, ones immediately above and below it, and zeros elsewhere; compute the polynomials for $k\le5$.

## Hints

> [!hint]- Hint 1
> Expand $\det(tI-A_k)$ along the first row.

## Solution

> [!success]- Solution
> With $p_0=1$ and $p_1=t$, cofactor expansion gives
>
> $$
> p_k(t)=tp_{k-1}(t)-p_{k-2}(t).
> $$
>
> Thus
>
> $$
> \begin{aligned}
> p_1&=t,\\
> p_2&=t^2-1,\\
> p_3&=t^3-2t,\\
> p_4&=t^4-3t^2+1,\\
> p_5&=t^5-4t^3+3t.
> \end{aligned}
> $$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Determinants|Determinants]]
- [[04 - Linear Algebra and Modules/Concepts/Eigenvalues and Eigenvectors|Eigenvalues and Eigenvectors]]

## Notes

- **Source status:** The tridiagonal matrix was visually checked at [S1, Ch. 4, §5, Ex. 5.4, printed p. 128, PDF p. 140]. The recurrence is independently derived.

