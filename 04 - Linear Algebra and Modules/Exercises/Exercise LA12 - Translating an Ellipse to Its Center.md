---
title: "Exercise LA12: Translating an Ellipse to Its Center"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - quadratic-forms
  - conics
source: "Michael Artin, Algebra, 2nd ed., Ch. 8, Section 7, Ex. 7.2, printed p. 258, PDF p. 270"
created: 2026-08-12
---

# Exercise LA12: Translating an Ellipse to Its Center

## Problem Statement

> [!question] Exercise 7.2
> Suppose that the quadratic equation (8.7.1) represents an ellipse. Instead of diagonalizing the form and then making a translation to reduce to the standard type, we could make the translation first. How can one determine the required translation?

## Hints

> [!hint]- Hint 1
> Write $f(X)=X^{\mathsf T}AX+b^{\mathsf T}X+c$ and substitute $X=Y+h$.

> [!hint]- Hint 2
> Set the new linear coefficient $2Ah+b$ equal to zero.

## Solution

> [!success]- Solution
> Write Artin's equation as
>
> $$
> f(X)=X^{\mathsf T}AX+b^{\mathsf T}X+c,
> \qquad
> A=\begin{pmatrix}a_{11}&a_{12}\\a_{12}&a_{22}\end{pmatrix},
> \qquad
> b=\begin{pmatrix}b_1\\b_2\end{pmatrix}.
> $$
>
> Because the locus is an ellipse, $A$ is definite and hence invertible. Substitute $X=Y+h$. Then
>
> $$
> f(Y+h)=Y^{\mathsf T}AY+(2Ah+b)^{\mathsf T}Y+f(h).
> $$
>
> Thus the required translation is obtained by choosing the unique vector
>
> $$
> h=-\frac12A^{-1}b.
> $$
>
> In coordinates, with $\Delta=a_{11}a_{22}-a_{12}^2>0$,
>
> $$
> h=-\frac{1}{2\Delta}
> \begin{pmatrix}
> a_{22}b_1-a_{12}b_2\\
> -a_{12}b_1+a_{11}b_2
> \end{pmatrix}.
> $$
>
> This point is the center of the ellipse. After translating it to the origin, the equation is
>
> $$
> Y^{\mathsf T}AY+f(h)=0,
> $$
>
> and an orthogonal change of coordinates may then diagonalize $A$. Equivalently, the center is the unique critical point of $f$, since $\nabla f(X)=2AX+b$. $\square$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Quadratic Forms|Quadratic Forms]]
- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]
- [[04 - Linear Algebra and Modules/Concepts/Linear Transformations|Linear Transformations]]

## Notes

- **Source status:** The statement is [S1, Ch. 8, Exercises §7, Ex. 7.2, printed p. 258, PDF p. 270]. The solution is independently derived.
- The assumption that the equation represents an ellipse guarantees the invertibility needed for $A^{-1}$.
