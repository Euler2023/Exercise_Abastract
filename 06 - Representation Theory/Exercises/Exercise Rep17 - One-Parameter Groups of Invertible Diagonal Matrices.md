---
title: "Exercise Rep17: One-Parameter Groups of Invertible Diagonal Matrices"
topic: representation-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - representation-theory
  - one-parameter-groups
  - diagonal-matrices
source: "Michael Artin, Algebra, 2nd ed., Ch. 9, Section 5, Ex. 5.3, printed p. 285, PDF p. 297"
figures:
  - "[[Attachments/artin-algebra-2e-ch09-ex-5.3-diagonal-one-parameter-groups.png]]"
created: 2026-08-24
---

# Exercise Rep17: One-Parameter Groups of Invertible Diagonal Matrices

## Problem Statement

> [!question] Exercise 5.3
> Describe by equations the images of the one-parameter groups in the group of real, invertible, $2\times2$ diagonal matrices, and make a drawing showing some of them in the plane.

## Hints

> [!hint]- Hint 1
> A generator in the diagonal Lie algebra is $\operatorname{diag}(a,b)$.

> [!hint]- Hint 2
> Eliminate $t$ from $x=e^{at}$ and $y=e^{bt}$.

## Solution

> [!success]- Solution
> Every one-parameter group is
>
> $$
> \varphi_{a,b}(t)=
> \begin{pmatrix}e^{at}&0\\0&e^{bt}\end{pmatrix},
> \qquad a,b\in\mathbb R.
> $$
>
> Its image stays in the positive quadrant because it begins at $I$. If $a\ne0$, eliminating $t$ gives
>
> $$
> y=x^{b/a},
> \qquad x>0.
> $$
>
> This includes the horizontal line $y=1$ when $b=0$. If $a=0$ and $b\ne0$, the image is the vertical line $x=1$, $y>0$. If $a=b=0$, the image is the single point $(1,1)$.
>
> Hence the nonconstant images are precisely the power curves through $(1,1)$ in the positive quadrant, together with the vertical line $x=1$.
>
> $\square$

## Figure

![[Attachments/artin-algebra-2e-ch09-ex-5.3-diagonal-one-parameter-groups.png]]

*Selected images $y=x^r$ in the positive quadrant. Every curve passes through the black point $(1,1)$. Asset type: source-independent TikZ construction from the equations in the solution; editable source and vector PDF are stored beside the PNG.*

## Related Concepts

- [[06 - Representation Theory/Concepts/Exponential Map|Exponential Map]]
- [[06 - Representation Theory/Concepts/Lie Groups|Lie Groups]]

## Notes

- Curves with $b/a>0$ increase, those with $b/a<0$ decrease, and $b/a=1$ gives the diagonal $y=x$.
- **Source status:** Ex. 5.3 was visually checked at [S1, Ch. 9, §9.5, printed p. 285, PDF p. 297]. The equations are independently derived. The new construction was compiled outside the sandbox and visually verified against those equations.
