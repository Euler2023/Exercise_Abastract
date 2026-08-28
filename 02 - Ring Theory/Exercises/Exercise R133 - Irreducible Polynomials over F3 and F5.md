---
title: "Exercise R133: Irreducible Polynomials over F3 and F5"
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - ring-theory
  - finite-fields
  - irreducible-polynomials
source: "Michael Artin, Algebra, 2nd ed., Ch. 12, Factoring, Section 4, Factoring Integer Polynomials, Ex. 4.12, printed p. 380, PDF p. 392"
created: 2026-08-28
---

# Exercise R133: Irreducible Polynomials over F3 and F5

## Problem Statement

> [!question] Exercise 4.12
> Determine:
>
> **(a)** the monic irreducible polynomials of degree $3$ over $\mathbb F_3$;
>
> **(b)** the monic irreducible polynomials of degree $2$ over $\mathbb F_5$;
>
> **(c)** the number of irreducible polynomials of degree $3$ over the field $\mathbb F_5$.

## Hints

> [!hint]- Hint 1
> A quadratic or cubic is irreducible exactly when it has no root in the base field.

> [!hint]- Hint 2
> Compare degrees in the factorization of $x^{q^3}-x$ to count monic irreducible cubics over $\mathbb F_q$.

## Solution

> [!success]- Solution
> **(a)** Testing the three possible roots gives the following eight monic irreducible cubics over $\mathbb F_3$:
>
> $$
> \begin{aligned}
> &x^3+2x+1,\quad x^3+2x+2,\\
> &x^3+x^2+2,\quad x^3+x^2+x+2,\quad
> x^3+x^2+2x+1,\\
> &x^3+2x^2+1,\quad x^3+2x^2+x+1,\quad
> x^3+2x^2+2x+2.
> \end{aligned}
> $$
>
> **(b)** Testing the five possible roots gives the following ten monic irreducible quadratics over $\mathbb F_5$:
>
> $$
> \begin{aligned}
> &x^2+2,\quad x^2+3,\\
> &x^2+x+1,\quad x^2+x+2,\\
> &x^2+2x+3,\quad x^2+2x+4,\\
> &x^2+3x+3,\quad x^2+3x+4,\\
> &x^2+4x+1,\quad x^2+4x+2.
> \end{aligned}
> $$
>
> **(c)** The polynomial $x^{5^3}-x$ is the product of all monic irreducibles over $\mathbb F_5$ whose degrees divide $3$. These have degrees $1$ and $3$. There are five monic linear polynomials. If $N_3$ denotes the number of monic irreducible cubics, comparison of degrees gives
>
> $$
> 125=5+3N_3.
> $$
>
> Therefore
>
> $$
> \boxed{N_3=40}.
> $$

## Related Concepts

- [[03 - Field Theory/Concepts/Finite Fields|Finite Fields]]
- [[02 - Ring Theory/Concepts/Polynomial Rings|Polynomial Rings]]

## Notes

- **Routing:** Ring Theory is primary because the deliverable is an irreducible-polynomial list and count; finite-field structure supplies the test.
- **Computational verification:** Parts (a) and (b) exhaust all monic coefficient tuples and all base-field roots; the lists have the expected counts $(3^3-3)/3=8$ and $(5^2-5)/2=10$.
- **Source status:** The problem statement is from [S1, Ch. 12, §12.4, Ex. 4.12, printed p. 380, PDF p. 392]. The enumeration and count are independent.

