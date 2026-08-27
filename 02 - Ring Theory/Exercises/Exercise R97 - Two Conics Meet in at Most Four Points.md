---
title: "Exercise R97: Two Conics Meet in at Most Four Points"
topic: ring-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - ring-theory
  - conics
  - algebraic-geometry
source: "Michael Artin, Algebra, 2nd ed., Ch. 11, §9, Ex. 9.11, printed p. 358, PDF p. 370"
created: 2026-08-27
---

# Exercise R97: Two Conics Meet in at Most Four Points

## Problem Statement

> [!question] Exercise 9.11
> Let $C_1,C_2$ be the zero sets of quadratic polynomials $f_1,f_2$ having no common linear factor.
>
> **(a)** If distinct common points $p,q$ lie on a line $L$, prove that some nonzero combination $g=c_1f_1+c_2f_2$ vanishes identically on $L$, and that $g$ is a product of linear polynomials.
>
> **(b)** Prove that $C_1,C_2$ have at most four common points.

> [!warning] Source issue
> The printed hypothesis excludes a common **linear** factor but does not exclude proportional irreducible quadratics. If $f_1=f_2$ is an irreducible quadratic, the curves coincide and part (b) is false. The intended hypothesis must also require that $f_1$ and $f_2$ are not proportional, equivalently that they have no common nonconstant factor.

## Hints

> [!hint]- Hint 1
> Force $g$ to vanish at a third point of $L$; a quadratic restriction with three zeros is zero.

## Solution

> [!success]- Solution
> Under the intended nonproportionality hypothesis, **(a)** choose a third point $r\in L$ distinct from $p,q$. There is a nonzero pair $(c_1,c_2)$ with $c_1f_1(r)+c_2f_2(r)=0$, and linear independence ensures that $g=c_1f_1+c_2f_2$ is not the zero polynomial. Its restriction to $L$ has degree at most $2$ and vanishes at $p,q,r$, so it vanishes identically. Hence the equation of $L$ divides $g$; since $g$ is quadratic, its other factor is linear.
>
> **(b)** Suppose there were five common points. Apply (a) to two of them and write $g=L_1L_2$. Every common point lies on $V(g)=L_1\cup L_2$. Among five points, one line contains at least three. The restrictions of both $f_1$ and $f_2$ to that line are quadratics with at least three zeros, so both vanish identically there. That line is a common linear factor, contrary to hypothesis. Thus there are at most four common points.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Affine and Projective Varieties|Affine and Projective Varieties]]
- [[02 - Ring Theory/Concepts/Polynomial Rings|Polynomial Rings]]

## Notes

- **Source status:** The problem and printed hint are from [S1, Ch. 11, §9, Ex. 9.11, printed p. 358, PDF p. 370]. The completed argument is independent.
- **Source issue:** The proof uses the necessary nonproportionality condition stated in the warning; without it, the printed claim has an immediate counterexample.
