---
title: "Exercise F22: Factoring x7 Plus x Plus 1 over F7"
topic: field-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - field-theory
  - finite-fields
  - polynomial-factorization
source: "Michael Artin, Algebra, 2nd ed., Ch. 15, Miscellaneous Ex. M.2, printed p. 475, PDF p. 487"
created: 2026-08-10
---

# Exercise F22: Factoring $x^7+x+1$ over $\mathbb F_7$

## Problem Statement

> [!question] Exercise
> Factor $x^7+x+1$ in $\mathbb F_7[x]$.

## Hints

> [!hint]- Hint 1
> Test the elements of $\mathbb F_7$ for linear roots.

> [!hint]- Hint 2
> After division by the linear factor, look for quadratic factors and check their discriminants.

## Solution

> [!success]- Solution
> Since $3^7=3$ in $\mathbb F_7$,
> $$
> 3^7+3+1=7=0,
> $$
> so $x-3$ is a factor. Complete division and factorization give
> $$
> x^7+x+1=(x-3)(x^2+x-3)(x^2+x-1)(x^2+x+3)
> $$
> in $\mathbb F_7[x]$.
>
> The discriminants of the three quadratics are, respectively,
> $$
> 6,\qquad5,\qquad3\pmod7.
> $$
> The squares modulo $7$ are $0,1,2,4$, so none of these discriminants is a square. Hence all three quadratics are irreducible, and the displayed factorization is complete.

## Related Concepts

- [[03 - Field Theory/Concepts/Finite Fields|Finite Fields]]
- [[02 - Ring Theory/Concepts/Polynomial Rings|Polynomial Rings]]

## Notes

The multiplication and modular factorization were checked by exact computation over $\mathbb F_7$; irreducibility is proved by the discriminant test.
