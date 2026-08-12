---
title: "Exercise LA13: Coefficient Criterion for a Circle"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - quadratic-forms
  - conics
source: "Michael Artin, Algebra, 2nd ed., Ch. 8, Section 7, Ex. 7.3, printed p. 258, PDF p. 270"
created: 2026-08-12
---

# Exercise LA13: Coefficient Criterion for a Circle

## Problem Statement

> [!question] Exercise 7.3
> Give a necessary and sufficient condition, in terms of the coefficients of its equation, for a conic to be a circle.

## Hints

> [!hint]- Hint 1
> A Euclidean circle has a quadratic part proportional to $x^2+y^2$.

> [!hint]- Hint 2
> Complete the two squares and require the squared radius to be positive.

## Solution

> [!success]- Solution
> Consider
>
> $$
> a_{11}x^2+2a_{12}xy+a_{22}y^2+b_1x+b_2y+c=0.
> $$
>
> It represents a genuine circle if and only if
>
> $$
> a_{12}=0,
> \qquad
> a_{11}=a_{22}=a\ne0,
> \qquad
> b_1^2+b_2^2-4ac>0.
> $$
>
> **Sufficiency.** Under these conditions, division by $a$ and completion of squares give
>
> $$
> \left(x+\frac{b_1}{2a}\right)^2
> +\left(y+\frac{b_2}{2a}\right)^2
> =\frac{b_1^2+b_2^2-4ac}{4a^2}.
> $$
>
> The right-hand side is positive, so the locus is the circle with center $(-b_1/(2a),-b_2/(2a))$ and the displayed positive squared radius.
>
> **Necessity.** A circle with center $(h,k)$ and radius $r>0$ has an equation equal, up to multiplication by a nonzero scalar $a$, to
>
> $$
> a\bigl((x-h)^2+(y-k)^2-r^2\bigr)=0.
> $$
>
> Its $xy$ coefficient is zero, its $x^2$ and $y^2$ coefficients are equal and nonzero, and completing squares gives
>
> $$
> b_1^2+b_2^2-4ac=4a^2r^2>0.
> $$
>
> Hence the three conditions are also necessary. $\square$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Quadratic Forms|Quadratic Forms]]
- [[04 - Linear Algebra and Modules/Concepts/Inner Product Spaces|Inner Product Spaces]]

## Notes

- **Source status:** The statement is [S1, Ch. 8, Exercises §7, Ex. 7.3, printed p. 258, PDF p. 270]. The solution is independently derived.
- Replacing the final strict inequality by equality gives a single point; reversing it gives the empty locus. Neither is a circle of positive radius.
