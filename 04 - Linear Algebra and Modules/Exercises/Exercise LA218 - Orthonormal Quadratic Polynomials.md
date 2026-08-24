---
title: "Exercise LA218: Orthonormal Quadratic Polynomials"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - gram-schmidt
  - orthogonal-polynomials
source: "Michael Artin, Algebra, 2nd ed., Ch. 8, Section 4, Ex. 4.9, printed p. 255, PDF p. 267"
created: 2026-08-24
---

# Exercise LA218: Orthonormal Quadratic Polynomials

## Problem Statement

> [!question] Exercise 4.9
> Find an orthonormal basis for the vector space $P$ of all real polynomials of degree at most $2$, with the symmetric form defined by
>
> $$
> (f,g)=\int_{-1}^{1}f(x)g(x)\,dx.
> $$

## Hints

> [!hint]- Hint 1
> Apply Gram-Schmidt to $1,x,x^2$ and use parity.

> [!hint]- Hint 2
> Subtract $1/3$ from $x^2$ before normalizing.

## Solution

> [!success]- Solution
> Since $\lVert1\rVert^2=2$, the first normalized polynomial is $p_0=1/\sqrt2$. By oddness, $x$ is orthogonal to both $1$ and $x^2$, and
>
> $$
> \lVert x\rVert^2=\int_{-1}^1x^2\,dx=\frac23,
> $$
>
> so $p_1=\sqrt{3/2}\,x$.
>
> The projection of $x^2$ onto the constants is $1/3$, hence $u_2=x^2-1/3$. Its squared norm is
>
> $$
> \int_{-1}^1\left(x^2-\frac13\right)^2dx
> =\frac25-\frac49+\frac29
> =\frac8{45}.
> $$
>
> Thus one orthonormal basis is
>
> $$
> \boxed{
> \frac1{\sqrt2},
> \qquad
> \sqrt{\frac32}\,x,
> \qquad
> \sqrt{\frac58}(3x^2-1)}.
> $$
>
> These are the first three normalized Legendre polynomials.
>
> $\square$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Inner Product Spaces|Inner Product Spaces]]
- [[04 - Linear Algebra and Modules/Concepts/Basis and Dimension|Basis and Dimension]]
- [[04 - Linear Algebra and Modules/Concepts/Vector Spaces|Vector Spaces]]

## Notes

- Positivity follows because a nonzero polynomial cannot vanish almost everywhere on an interval.
- **Source status:** The polynomial space and integral were visually verified at [S1, Ch. 8, §4, Ex. 4.9, printed p. 255, PDF p. 267]. The computation is independent.

