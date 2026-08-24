---
title: "Exercise LA260: Translating an Ellipse to Its Center"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - conics
  - quadratic-forms
source: "Michael Artin, Algebra, 2nd ed., Ch. 8, Section 7, Ex. 7.2, printed p. 258, PDF p. 270"
created: 2026-08-24
---

# Exercise LA260: Translating an Ellipse to Its Center

## Problem Statement

> [!question] Exercise 7.2
> Suppose that the quadratic equation (8.7.1) represents an ellipse. Instead of diagonalizing the form and then making a translation to reduce to the standard type, we could make the translation first. How can one determine the required translation?

## Hints

> [!hint]- Hint 1
> Write the equation as $X^{\mathsf T}AX+b^{\mathsf T}X+c=0$.

> [!hint]- Hint 2
> Substitute $X=Y+h$ and set the new linear coefficient equal to zero.

## Solution

> [!success]- Solution
> For an ellipse, the symmetric matrix $A$ of the quadratic part is definite and therefore invertible. Under the translation $X=Y+h$,
>
> $$
> X^{\mathsf T}AX+b^{\mathsf T}X+c
> =Y^{\mathsf T}AY+(2Ah+b)^{\mathsf T}Y
> +h^{\mathsf T}Ah+b^{\mathsf T}h+c.
> $$
>
> The linear term vanishes exactly when
>
> $$
> 2Ah+b=0.
> $$
>
> Hence the required translation vector is
>
> $$
> \boxed{h=-\frac12A^{-1}b}.
> $$
>
> This is the center of the ellipse, equivalently the unique critical point of the quadratic polynomial. After this translation, one orthogonally diagonalizes only the quadratic part.
>
> $\square$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Quadratic Forms|Quadratic Forms]]
- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]

## Notes

- The formula applies to every quadric with invertible quadratic matrix, not only ellipses.
- **Source status:** Verified at [S1, Ch. 8, §7, Ex. 7.2, printed p. 258, PDF p. 270] together with equation (8.7.1) at printed p. 245/PDF p. 257. The derivation is independent.

