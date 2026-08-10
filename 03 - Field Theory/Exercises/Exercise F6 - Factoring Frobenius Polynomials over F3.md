---
title: "Exercise F6: Factoring Frobenius Polynomials over F3"
topic: field-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - field-theory
  - finite-fields
  - polynomial-factorization
source: "Michael Artin, Algebra, 2nd ed., Ch. 15, Section 7, Ex. 7.5, printed p. 474, PDF p. 486"
created: 2026-08-10
---

# Exercise F6: Factoring Frobenius Polynomials over $\mathbb F_3$

## Problem Statement

> [!question] Exercise
> Factor $x^9-x$ and $x^{27}-x$ in $\mathbb F_3[x]$.

## Hints

> [!hint]- Hint 1
> The irreducible factors of $x^{3^r}-x$ are precisely the monic irreducibles whose degrees divide $r$.

> [!hint]- Hint 2
> For $r=2$ use degrees $1,2$; for $r=3$ use degrees $1,3$.

## Solution

> [!success]- Solution
> Over $\mathbb F_3$, the monic irreducibles of degrees dividing $2$ give
> $$
> \begin{aligned}
> x^9-x={}&x(x-1)(x+1)(x^2+1)\\
> &\cdot(x^2-x-1)(x^2+x-1).
> \end{aligned}
> $$
> For $x^{27}-x$, the allowed degrees are $1$ and $3$. The complete factorization is
> $$
> \begin{aligned}
> x^{27}-x={}&x(x-1)(x+1)
> (x^3-x-1)(x^3-x+1)\\
> &\cdot(x^3-x^2+1)(x^3+x^2-1)\\
> &\cdot(x^3-x^2-x-1)(x^3-x^2+x+1)\\
> &\cdot(x^3+x^2-x+1)(x^3+x^2+x-1).
> \end{aligned}
> $$
> The degrees sum to $9$ and $27$, respectively, so no factor is missing.

## Related Concepts

- [[03 - Field Theory/Concepts/Finite Fields|Finite Fields]]
- [[02 - Ring Theory/Concepts/Polynomial Rings|Polynomial Rings]]

## Notes

The theorem determining the possible factor degrees supplies the proof. The displayed finite factorizations were also checked by exact arithmetic modulo $3$; that computation verifies the expansions but does not replace the theorem.
