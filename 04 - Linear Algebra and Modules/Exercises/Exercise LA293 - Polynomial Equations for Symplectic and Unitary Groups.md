---
title: "Exercise LA293: Polynomial Equations for Symplectic and Unitary Groups"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - symplectic-groups
  - unitary-groups
source: "Michael Artin, Algebra, 2nd ed., Ch. 9, Section 8, Ex. 8.4, printed p. 287, PDF p. 299"
created: 2026-08-24
---

# Exercise LA293: Polynomial Equations for Symplectic and Unitary Groups

## Problem Statement

> [!question] Exercise 8.4
> (a) Write the polynomial equations that define the symplectic group.
>
> (b) Show that the unitary group $U_n$ can be defined by real polynomial equations in the real and imaginary parts of the matrix entries.

## Hints

> [!hint]- Hint 1
> Expand the entries of $P^{\mathsf T}JP=J$.

> [!hint]- Hint 2
> Write a complex matrix as $P=X+iY$ with $X,Y$ real.

## Solution

> [!success]- Solution
> **(a)** Let $P=(p_{ij})$ and $J=\begin{pmatrix}0&I_n\\-I_n&0\end{pmatrix}$. The symplectic group is the common zero set of the quadratic polynomials
>
> $$
> \sum_{r,s=1}^{2n}p_{ri}J_{rs}p_{sj}-J_{ij}=0
> \qquad(1\le i,j\le2n).
> $$
>
> These are exactly the entries of $P^{\mathsf T}JP-J$. The equation itself implies that $P$ is invertible, so no additional determinant inequality is required.
>
> **(b)** Write $P=X+iY$. Then
>
> $$
> P^*P=(X^{\mathsf T}-iY^{\mathsf T})(X+iY)
> $$
>
> equals $I$ exactly when
>
> $$
> X^{\mathsf T}X+Y^{\mathsf T}Y=I,
> \qquad
> X^{\mathsf T}Y-Y^{\mathsf T}X=0.
> $$
>
> The entries of these two matrix equations are real quadratic polynomials in the entries of $X$ and $Y$, and they define $U_n$ inside $\mathbb R^{2n^2}$.
>
> $\square$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Symplectic Groups|Symplectic Groups]]
- [[04 - Linear Algebra and Modules/Concepts/Classical Linear Groups|Classical Linear Groups]]
- [[04 - Linear Algebra and Modules/Concepts/Vector Spaces|Vector Spaces]]

## Notes

- These equations exhibit both groups as real algebraic matrix groups; no analytic use of complex conjugation remains after splitting into $X$ and $Y$.
- **Source status:** Artin's definition of complex algebraic group was checked at [S1, Ch. 9, §9.8, printed p. 282, PDF p. 294], and Ex. 8.4 at [S1, printed p. 287, PDF p. 299]. The equations are independent expansions.
