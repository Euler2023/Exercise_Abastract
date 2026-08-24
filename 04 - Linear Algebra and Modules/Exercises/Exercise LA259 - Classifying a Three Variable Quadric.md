---
title: "Exercise LA259: Classifying a Three Variable Quadric"
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
  - exercise
  - linear-algebra
  - quadrics
  - quadratic-forms
source: "Michael Artin, Algebra, 2nd ed., Ch. 8, Section 7, Ex. 7.1, printed p. 258, PDF p. 270"
created: 2026-08-24
---

# Exercise LA259: Classifying a Three Variable Quadric

## Problem Statement

> [!question] Exercise 7.1
> Determine the type of the quadric
>
> $$
> x^2+4xy+2xz+z^2+3x+z-6=0.
> $$

## Hints

> [!hint]- Hint 1
> Write the quadratic part as $X^{\mathsf T}AX$ and compute its inertia.

> [!hint]- Hint 2
> Since $A$ is invertible, translate by $X_0=-\frac12A^{-1}b$.

## Solution

> [!success]- Solution
> With $X=(x,y,z)^{\mathsf T}$, the equation is $X^{\mathsf T}AX+b^{\mathsf T}X-6=0$, where
>
> $$
> A=\begin{pmatrix}1&2&1\\2&0&0\\1&0&1\end{pmatrix},
> \qquad
> b=\begin{pmatrix}3\\0\\1\end{pmatrix}.
> $$
>
> Its leading principal determinants are $1,-4,-4$. The corresponding $LDL^{\mathsf T}$ pivot signs are
>
> $$
> 1,\quad -4,\quad \frac{-4}{-4}=1,
> $$
>
> so $A$ has signature $(2,1)$ and is nonsingular. Solving $Au=b$ gives $u=(0,1,1)^{\mathsf T}$, hence the center is
>
> $$
> X_0=-\frac12A^{-1}b=\begin{pmatrix}0\\-1/2\\-1/2\end{pmatrix}.
> $$
>
> Put $X=X_0+Y$. Completing the square in matrix form gives
>
> $$
> Y^{\mathsf T}AY-6-\frac14b^{\mathsf T}A^{-1}b=0.
> $$
>
> Since $b^{\mathsf T}A^{-1}b=1$, this becomes
>
> $$
> Y^{\mathsf T}AY=\frac{25}{4}.
> $$
>
> A quadratic form of signature $(2,1)$ at a positive nonzero level defines a one-sheeted hyperboloid. Thus the quadric is a
>
> $$
> \boxed{\text{one-sheeted hyperboloid centered at }(0,-1/2,-1/2)}.
> $$
>
> $\square$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Quadratic Forms|Quadratic Forms]]
- [[04 - Linear Algebra and Modules/Concepts/Normal Operators and the Spectral Theorem|Normal Operators and the Spectral Theorem]]
- [[04 - Linear Algebra and Modules/Concepts/Indefinite Bilinear Forms and Lorentz Groups|Indefinite Bilinear Forms and Lorentz Groups]]

## Notes

- Only the type is required; explicit eigenvectors are unnecessary once inertia and the translated level are known.
- **Source status:** The full equation was visually verified at [S1, Ch. 8, §7, Ex. 7.1, printed p. 258, PDF p. 270]. The classification is independent.
