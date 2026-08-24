---
title: "Exercise Rep19: One-Parameter Groups of the Positive Affine Group"
topic: representation-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - representation-theory
  - one-parameter-groups
  - affine-group
source: "Michael Artin, Algebra, 2nd ed., Ch. 9, Section 5, Ex. 5.5, printed p. 285, PDF p. 297"
figures:
  - "[[Attachments/artin-algebra-2e-ch09-ex-5.5-affine-one-parameter-groups.png]]"
created: 2026-08-24
---

# Exercise Rep19: One-Parameter Groups of the Positive Affine Group

## Problem Statement

> [!question] Exercise 5.5
> Let $G$ be the group of real matrices of the form
>
> $$
> \begin{pmatrix}x&y\\0&1\end{pmatrix},
> \qquad x>0.
> $$
>
> (a) Determine the matrices $A$ such that $e^{tA}$ is a one-parameter group in $G$.
>
> (b) Compute $e^{tA}$ explicitly for the matrices in (a).
>
> (c) Make a drawing showing some one-parameter groups in the $(x,y)$-plane.

## Hints

> [!hint]- Hint 1
> Differentiate a path in $G$ at the identity.

> [!hint]- Hint 2
> For $a\ne0$, solve the upper-right entry using a geometric series or the differential equation $v'=av+b$.

## Solution

> [!success]- Solution
> **(a)** The tangent space at the identity consists of
>
> $$
> A=
> \begin{pmatrix}a&b\\0&0\end{pmatrix},
> \qquad a,b\in\mathbb R.
> $$
>
> Every such matrix exponentiates into $G$, and no other generator can do so.
>
> **(b)** Direct exponentiation gives
>
> $$
> e^{tA}=
> \begin{cases}
> \begin{pmatrix}
> e^{at}&\dfrac{b}{a}(e^{at}-1)\\
> 0&1
> \end{pmatrix},&a\ne0,\\
> \begin{pmatrix}1&bt\\0&1\end{pmatrix},&a=0.
> \end{cases}
> $$
>
> **(c)** For $a\ne0$, the image in the $(x,y)$-plane is
>
> $$
> y=\frac ba(x-1),
> \qquad x>0.
> $$
>
> These are the portions in the half-plane $x>0$ of lines through $(1,0)$. For $a=0$ and $b\ne0$, the image is the entire vertical line $x=1$. For $a=b=0$, it is the identity point $(1,0)$.
>
> $\square$

## Figure

![[Attachments/artin-algebra-2e-ch09-ex-5.5-affine-one-parameter-groups.png]]

*Selected lines $y=m(x-1)$ in the half-plane $x>0$, together with the vertical subgroup $x=1$. The black point is the identity $(1,0)$. Asset type: source-independent TikZ construction from the equations in the solution; editable source and vector PDF are stored beside the PNG.*

## Related Concepts

- [[06 - Representation Theory/Concepts/Exponential Map|Exponential Map]]
- [[06 - Representation Theory/Concepts/Lie Groups|Lie Groups]]
- [[01 - Group Theory/Concepts/Group Actions|Group Actions]]

## Notes

- The matrix acts on the real line by the orientation-preserving affine map $u\mapsto xu+y$.
- **Source status:** The matrix shape and all three parts of Ex. 5.5 were visually checked at [S1, Ch. 9, §9.5, printed p. 285, PDF p. 297]. The exponential and image equations are independent. The new construction was compiled outside the sandbox and visually verified against those equations.
