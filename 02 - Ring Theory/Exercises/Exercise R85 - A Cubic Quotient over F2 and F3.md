---
title: "Exercise R85: A Cubic Quotient over F2 and F3"
topic: ring-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - ring-theory
  - finite-fields
  - irreducible-polynomials
source: "Michael Artin, Algebra, 2nd ed., Ch. 11, §8, Ex. 8.3, printed p. 357, PDF p. 369"
created: 2026-08-27
---

# Exercise R85: A Cubic Quotient over F2 and F3

## Problem Statement

> [!question] Exercise 8.3
> Prove that $\mathbb F_2[x]/(x^3+x+1)$ is a field, but $\mathbb F_3[x]/(x^3+x+1)$ is not a field.

## Hints

> [!hint]- Hint 1
> A cubic over a field is reducible exactly when it has a root.

## Solution

> [!success]- Solution
> Over $\mathbb F_2$, the values at $0$ and $1$ are both $1$, so the cubic has no root and is irreducible. Its ideal is maximal, and the quotient is a field with $2^3=8$ elements.
>
> Over $\mathbb F_3$, $1^3+1+1=0$, so $x-1$ divides the polynomial. The defining ideal is not maximal, and the quotient has zero divisors; hence it is not a field.

## Related Concepts

- [[03 - Field Theory/Concepts/Finite Fields|Finite Fields]]
- [[02 - Ring Theory/Concepts/Prime and Maximal Ideals|Prime and Maximal Ideals]]

## Notes

- **Source status:** The problem is from [S1, Ch. 11, §8, Ex. 8.3, printed p. 357, PDF p. 369]. The root test is independent.

