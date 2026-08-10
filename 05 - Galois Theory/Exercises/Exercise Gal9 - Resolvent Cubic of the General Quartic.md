---
title: "Exercise Gal9: Resolvent Cubic of the General Quartic"
topic: galois-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - galois-theory
  - quartic-polynomials
  - resolvent-cubic
source: "Michael Artin, Algebra, 2nd ed., Ch. 16, Section 9, Ex. 9.16, printed p. 509, PDF p. 521"
created: 2026-08-11
---

# Exercise Gal9: Resolvent Cubic of the General Quartic

## Problem Statement

> [!question] Exercise 9.16
> Determine the resolvent cubic of the general quartic polynomial (16.9.4).

## Hints

> [!hint]- Hint 1
> Write the general quartic as $x^4-a_1x^3+a_2x^2-a_3x+a_4$ and use the elementary symmetric functions of its roots.

> [!hint]- Hint 2
> Compute the three elementary symmetric functions of
> $$
> \beta_1=\alpha_1\alpha_2+\alpha_3\alpha_4,
> \quad
> \beta_2=\alpha_1\alpha_3+\alpha_2\alpha_4,
> \quad
> \beta_3=\alpha_1\alpha_4+\alpha_2\alpha_3.
> $$

## Solution

> [!success]- Solution
> Let
> $$
> f(x)=x^4-a_1x^3+a_2x^2-a_3x+a_4
> =\prod_{j=1}^4(x-\alpha_j).
> $$
> In Artin's convention the roots of the resolvent are
> $$
> \beta_1=\alpha_1\alpha_2+\alpha_3\alpha_4,
> \quad
> \beta_2=\alpha_1\alpha_3+\alpha_2\alpha_4,
> \quad
> \beta_3=\alpha_1\alpha_4+\alpha_2\alpha_3.
> $$
> Their sum is
> $$
> \beta_1+\beta_2+\beta_3
> =\sum_{i<j}\alpha_i\alpha_j=a_2.
> $$
> For the second symmetric function, direct expansion gives every monomial of the form $\alpha_i^2\alpha_j\alpha_k$ exactly once. Since $a_1a_3$ contains those twelve monomials together with $4\alpha_1\alpha_2\alpha_3\alpha_4$, one obtains
> $$
> \beta_1\beta_2+\beta_1\beta_3+\beta_2\beta_3
> =a_1a_3-4a_4,
> $$
> For the product, write $e_j=a_j$ for the elementary symmetric functions of the roots. Expanding the eight terms gives
> $$
> \beta_1\beta_2\beta_3
> =e_4\sum_i\alpha_i^2
> +\sum_{i=1}^4\left(\prod_{j\ne i}\alpha_j\right)^2.
> $$
> On the other hand,
> $$
> e_1^2e_4=e_4\sum_i\alpha_i^2+2e_2e_4,
> \qquad
> e_3^2=\sum_{i=1}^4\left(\prod_{j\ne i}\alpha_j\right)^2+2e_2e_4.
> $$
> Subtracting $4e_2e_4$ therefore yields
> $$
> \beta_1\beta_2\beta_3
> =a_1^2a_4+a_3^2-4a_2a_4.
> $$
> Therefore
> $$
> \begin{aligned}
> g(y)
> &=(y-\beta_1)(y-\beta_2)(y-\beta_3)\\
> &=y^3-a_2y^2+(a_1a_3-4a_4)y
> +4a_2a_4-a_1^2a_4-a_3^2.
> \end{aligned}
> $$
> Hence the resolvent cubic is
> $$
> g(y)=y^3-a_2y^2+(a_1a_3-4a_4)y
> +(4a_2a_4-a_1^2a_4-a_3^2).
> $$
>
> In the more common coefficient notation
> $$
> f(x)=x^4+Ax^3+Bx^2+Cx+D,
> $$
> this becomes
> $$
> g(y)=y^3-By^2+(AC-4D)y+(4BD-A^2D-C^2).
> $$

## Related Concepts

- [[05 - Galois Theory/Concepts/Quartic Resolvents and Galois Groups|Quartic Resolvents and Galois Groups]]
- [[02 - Ring Theory/Concepts/Polynomial Rings|Polynomial Rings]]
- [[05 - Galois Theory/Concepts/Galois Group|Galois Group]]

## Notes

The general quartic (16.9.4) and Artin's resolvent convention (16.9.7) were visually verified on [S1, Ch. 16, §16.9, printed p. 495, PDF p. 507]. The symmetric-function expansion is an independent computation. Other texts use shifted or sign-changed resolvents, so the convention must be stated before comparing formulas.
