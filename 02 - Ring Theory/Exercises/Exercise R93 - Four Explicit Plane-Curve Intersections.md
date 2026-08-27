---
title: "Exercise R93: Four Explicit Plane-Curve Intersections"
topic: ring-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - ring-theory
  - polynomial-systems
  - algebraic-geometry
source: "Michael Artin, Algebra, 2nd ed., Ch. 11, §9, Ex. 9.7, printed p. 357, PDF p. 369"
created: 2026-08-27
---

# Exercise R93: Four Explicit Plane-Curve Intersections

## Problem Statement

> [!question] Exercise 9.7
> Determine the points of intersection in $\mathbb C^2$:
>
> **(a)** $y^2-x^3+x^2=1$, $x+y=1$;
>
> **(b)** $x^2+xy+y^2=1$, $x^2+2y^2=1$;
>
> **(c)** $y^2=x^3$, $xy=1$;
>
> **(d)** $x+y^2=0$, $y+x^2+2xy^2+y^4=0$.

## Hints

> [!hint]- Hint 1
> Eliminate one variable using the simpler equation in each pair.

## Solution

> [!success]- Solution
> **(a)** Substituting $y=1-x$ gives $-x(x^2-2x+2)=0$. The points are
>
> $$
> (0,1),\quad(1+i,-i),\quad(1-i,i).
> $$
>
> **(b)** Subtracting the equations gives $y(x-y)=0$. Hence
>
> $$
> (1,0),\quad (-1,0),\quad
> \left(\frac1{\sqrt3},\frac1{\sqrt3}\right),\quad
> \left(-\frac1{\sqrt3},-\frac1{\sqrt3}\right).
> $$
>
> **(c)** Since $y=x^{-1}$, the first equation becomes $x^5=1$. Thus the five points are
>
> $$
> (\zeta,\zeta^4),\qquad \zeta^5=1.
> $$
>
> **(d)** From $x=-y^2$, the second equation reduces to $y=0$, so the only point is $(0,0)$.

## Related Concepts

- [[02 - Ring Theory/Concepts/Polynomial Rings|Polynomial Rings]]
- [[08 - Arithmetic Geometry/Concepts/Algebraic Varieties|Algebraic Varieties]]

## Notes

- **Source status:** All four systems were visually checked on [S1, Ch. 11, §9, Ex. 9.7, printed p. 357, PDF p. 369]. The eliminations are independent.
