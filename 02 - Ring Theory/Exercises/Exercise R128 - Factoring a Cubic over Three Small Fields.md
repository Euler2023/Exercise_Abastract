---
title: "Exercise R128: Factoring a Cubic over Three Small Fields"
topic: ring-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - ring-theory
  - finite-fields
  - polynomial-factorization
source: "Michael Artin, Algebra, 2nd ed., Ch. 12, Factoring, Section 4, Factoring Integer Polynomials, Ex. 4.7, printed p. 380, PDF p. 392"
created: 2026-08-28
---

# Exercise R128: Factoring a Cubic over Three Small Fields

## Problem Statement

> [!question] Exercise 4.7
> Factor $x^3+x+1$ in $\mathbb F_p[x]$ when $p=2,3$, and $5$.

## Hints

> [!hint]- Hint 1
> A reducible cubic over a field must have a root.

> [!hint]- Hint 2
> Evaluate the polynomial at every element of each small field.

## Solution

> [!success]- Solution
> Over $\mathbb F_2$, the values at $0$ and $1$ are both $1$, so the cubic has no root and is irreducible:
>
> $$
> x^3+x+1.
> $$
>
> Over $\mathbb F_3$, $x=1$ is a root. Division gives
>
> $$
> x^3+x+1=(x-1)(x^2+x-1).
> $$
>
> The quadratic discriminant is $1+4=5=2$ in $\mathbb F_3$, which is not a square, so the quadratic factor is irreducible.
>
> Over $\mathbb F_5$, the values at $0,1,2,3,4$ are $1,3,1,1,4$, respectively. Thus there is no root, and the cubic is irreducible:
>
> $$
> x^3+x+1.
> $$

## Related Concepts

- [[03 - Field Theory/Concepts/Finite Fields|Finite Fields]]
- [[02 - Ring Theory/Concepts/Polynomial Rings|Polynomial Rings]]

## Notes

- **Routing:** Ring Theory is primary because the problem asks for irreducible factorization in three polynomial rings.
- **Source status:** The problem statement is from [S1, Ch. 12, §12.4, Ex. 4.7, printed p. 380, PDF p. 392]. The factorization and root checks are independent.

