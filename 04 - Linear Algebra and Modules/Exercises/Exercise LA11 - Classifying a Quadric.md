---
title: "Exercise LA11: Classifying a Quadric"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - quadratic-forms
  - quadrics
source: "Michael Artin, Algebra, 2nd ed., Ch. 8, Section 7, Ex. 7.1, printed p. 258, PDF p. 270"
created: 2026-08-12
---

# Exercise LA11: Classifying a Quadric

## Problem Statement

> [!question] Exercise 7.1
> Determine the type of the quadric
>
> $$
> x^2+4xy+2xz+z^2+3x+z-6=0.
> $$

## Hints

> [!hint]- Hint 1
> Write the equation as $X^{\mathsf T}AX+b^{\mathsf T}X+c=0$ and solve $2AX_0+b=0$ for its center.

> [!hint]- Hint 2
> After translating the center to the origin, use
>
> $$
> x^2+4xy+2xz+z^2=(x+2y+z)^2-(2y+z)^2+z^2.
> $$

## Solution

> [!success]- Solution
> The symmetric matrix and linear coefficient are
>
> $$
> A=\begin{pmatrix}1&2&1\\2&0&0\\1&0&1\end{pmatrix},
> \qquad
> b=\begin{pmatrix}3\\0\\1\end{pmatrix}.
> $$
>
> Since $\det A=-4\ne0$, the quadric has a unique center $X_0$, determined by $2AX_0+b=0$. Solving gives
>
> $$
> X_0=\begin{pmatrix}0\\-\tfrac12\\-\tfrac12\end{pmatrix}.
> $$
>
> Put
>
> $$
> u=x,
> \qquad v=y+\frac12,
> \qquad w=z+\frac12.
> $$
>
> Translation by the center eliminates the linear terms, and the equation becomes
>
> $$
> u^2+4uv+2uw+w^2=\frac{25}{4}.
> $$
>
> Now make the invertible linear change
>
> $$
> U=u+2v+w,
> \qquad V=2v+w,
> \qquad W=w.
> $$
>
> The identity in Hint 2 yields
>
> $$
> U^2-V^2+W^2=\frac{25}{4}.
> $$
>
> The quadratic part has two positive squares and one negative square, while the right-hand side is positive. Therefore the locus is a **one-sheeted hyperboloid**. The linear change used to identify the type need not preserve its metric axes. $\square$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Quadratic Forms|Quadratic Forms]]
- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]
- [[04 - Linear Algebra and Modules/Concepts/Indefinite Bilinear Forms and Lorentz Groups|Indefinite Bilinear Forms and Lorentz Groups]]

## Notes

- **Source status:** The statement is [S1, Ch. 8, Exercises §7, Ex. 7.1, printed p. 258, PDF p. 270]. The solution is an independent derivation.
- No source figure is needed: the exercise and its classification are completely determined by the displayed equation.
- **Alternative inertia check merged from the duplicate archive:** the leading principal determinants $1,-4,-4$ give $LDL^{\mathsf T}$-pivot signs $+,-,+$, hence signature $(2,1)$, agreeing with the explicit change of variables above.
