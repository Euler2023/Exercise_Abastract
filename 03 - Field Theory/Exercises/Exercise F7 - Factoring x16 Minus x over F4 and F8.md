---
title: "Exercise F7: Factoring x16 Minus x over F4 and F8"
topic: field-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - field-theory
  - finite-fields
  - polynomial-factorization
source: "Michael Artin, Algebra, 2nd ed., Ch. 15, Section 7, Ex. 7.6, printed p. 474, PDF p. 486"
created: 2026-08-10
---

# Exercise F7: Factoring $x^{16}-x$ over $\mathbb F_4$ and $\mathbb F_8$

## Problem Statement

> [!question] Exercise
> Factor the polynomial $x^{16}-x$ over the fields $\mathbb F_4$ and $\mathbb F_8$.

## Hints

> [!hint]- Hint 1
> Its roots form $\mathbb F_{16}$.

> [!hint]- Hint 2
> Use $\mathbb F_{2^a}\cap\mathbb F_{2^b}=\mathbb F_{2^{\gcd(a,b)}}$ inside an algebraic closure.

## Solution

> [!success]- Solution
> Let $\omega\in\mathbb F_4$ satisfy $\omega^2+\omega+1=0$. Since $\mathbb F_{16}/\mathbb F_4$ has degree $2$, the polynomial has four linear factors and six irreducible quadratic factors over $\mathbb F_4$:
> $$
> \begin{aligned}
> x^{16}-x={}&x(x+1)(x+\omega)(x+\omega+1)\\
> &\cdot(x^2+x+\omega)(x^2+x+\omega+1)\\
> &\cdot(x^2+\omega x+1)(x^2+\omega x+\omega)\\
> &\cdot(x^2+(\omega+1)x+1)\\
> &\cdot(x^2+(\omega+1)x+\omega+1).
> \end{aligned}
> $$
> Each displayed quadratic has no root in $\mathbb F_4$, and the degrees total $16$.
>
> Next,
> $$
> \mathbb F_{16}\cap\mathbb F_8=\mathbb F_2.
> $$
> Thus the two roots in $\mathbb F_2$ remain linear; the two roots in $\mathbb F_4\setminus\mathbb F_2$ have degree $2$ over $\mathbb F_8$; and the remaining twelve roots have degree $4$. Consequently the factorization over $\mathbb F_8$ is the same list of irreducible factors already visible over $\mathbb F_2$:
> $$
> \begin{aligned}
> x^{16}-x={}&x(x+1)(x^2+x+1)\\
> &\cdot(x^4+x+1)(x^4+x^3+1)\\
> &\cdot(x^4+x^3+x^2+x+1).
> \end{aligned}
> $$

## Related Concepts

- [[03 - Field Theory/Concepts/Finite Fields|Finite Fields]]
- [[03 - Field Theory/Concepts/Degree of Extension|Degree of Extension]]

## Notes

The factor-degree argument is independently derived from finite-field intersections. The explicit factors were checked by exact arithmetic in characteristic $2$.
