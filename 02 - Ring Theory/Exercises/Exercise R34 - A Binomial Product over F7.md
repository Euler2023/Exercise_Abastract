---
title: "Exercise R34: A Binomial Product over $\\mathbb F_7$"
topic: ring-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - ring-theory
  - polynomial-rings
  - finite-fields
  - freshmans-dream
source: "Michael Artin, Algebra, 2nd ed., Ch. 3, Section 1, Ex. 1.3, printed p. 98, PDF p. 110"
created: 2026-08-23
---

# Exercise R34: A Binomial Product over $\mathbb F_7$

## Problem Statement

> [!question] Exercise 1.3
> Compute
> 
> $$
> (x^3+3x^2+3x+1)(x^4+4x^3+6x^2+4x+1)
> $$
> 
> when the coefficients lie in $\mathbb F_7$. Explain the answer.

## Hints

> [!hint]- Hint 1
> Recognize the two factors as powers of $x+1$.

> [!hint]- Hint 2
> Use the binomial theorem in characteristic $7$.

## Solution

> [!success]- Solution
> The factors are $(x+1)^3$ and $(x+1)^4$, so their product is $(x+1)^7$. In characteristic $7$, all intermediate binomial coefficients are divisible by $7$. Therefore
> 
> $$
> (x+1)^7=x^7+1
> $$
> 
> in $\mathbb F_7[x]$.

## Related Concepts

- [[02 - Ring Theory/Concepts/Polynomial Rings|Polynomial Rings]]
- [[03 - Field Theory/Concepts/Finite Fields|Finite Fields]]

## Notes

- **Source status:** The problem statement is transcribed from [S1, Ch. 3, §1, Ex. 1.3, printed p. 98, PDF p. 110]. The solution is an independent derivation for this vault, not a solution printed in Artin.
