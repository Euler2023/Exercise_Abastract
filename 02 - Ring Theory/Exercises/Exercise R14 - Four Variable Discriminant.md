---
title: "Exercise R14: The Four-Variable Discriminant"
topic: ring-theory
difficulty: advanced
status: not-started
tags: [exercise, ring-theory, discriminant, symmetric-polynomials]
source: "Michael Artin, Algebra, 2nd ed., Ch. 16, Section 2, Ex. 2.5, printed p. 506, PDF p. 518"
created: 2026-08-12
---

# Exercise R14: The Four-Variable Discriminant

## Problem Statement

> [!question] Exercise 2.5
> Determine the coefficients in $\Delta(s_1,\ldots,s_4)$ of all monomials not divisible by $s_4$.

## Hints

> [!hint]- Hint 1
> Set one root equal to zero.

## Solution

> [!success]- Solution
> Set $u_4=0$. Then $s_4=0$, and
> $$
> \Delta_4(u_1,u_2,u_3,0)=(u_1u_2u_3)^2\Delta_3=s_3^2\Delta_3.
> $$
> Since
> $$
> \Delta_3=s_1^2s_2^2-4s_2^3-4s_1^3s_3-27s_3^2+18s_1s_2s_3,
> $$
> the $s_4$-free part is
> $$
> s_1^2s_2^2s_3^2-4s_2^3s_3^2-4s_1^3s_3^3-27s_3^4+18s_1s_2s_3^3.
> $$

## Related Concepts

- [[02 - Ring Theory/Concepts/Polynomial Discriminants|Polynomial Discriminants]]
- [[02 - Ring Theory/Concepts/Symmetric Polynomials and Newton Identities|Symmetric Polynomials and Newton Identities]]

## Notes

Only the requested coefficients not divisible by $s_4$ are asserted.
